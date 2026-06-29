/* ========================================================
 * Kaiwa Quiz - Minna no Nihongo
 * Application logic: chapter select, quiz flow, scoring
 * ======================================================== */

(function () {
  "use strict";

  // ---------- DOM references ----------
  const $ = (id) => document.getElementById(id);

  const els = {
    chapterSelect: $("chapter-select"),
    chapterGrid: $("chapter-grid"),
    quizScreen: $("quiz-screen"),
    backBtn: $("back-btn"),
    chapterInfo: $("chapter-info"),
    scoreDisplay: $("score-display"),
    questionNumber: $("question-number"),
    questionType: $("question-type"),
    questionText: $("question-text"),
    furiganaBtn: $("furigana-btn"),
    readingsDisplay: $("readings-display"),
    dialogueContext: $("dialogue-context"),
    dialogueContent: $("dialogue-content"),
    optionsContainer: $("options-container"),
    inputArea: $("input-area"),
    answerInput: $("answer-input"),
    submitTyping: $("submit-typing"),
    feedback: $("feedback"),
    nextBtn: $("next-btn"),
    progressFill: $("progress-fill"),
    resultScreen: $("result-screen"),
    finalScore: $("final-score"),
    resultMessage: $("result-message"),
    retryBtn: $("retry-btn"),
    homeBtn: $("home-btn"),
  };

  // ---------- State ----------
  const state = {
    chapter: null,           // current chapter object
    questions: [],            // shuffled copy
    index: 0,                // current question index
    correct: 0,              // correct count
    answered: false,         // current question answered?
    selectedOption: null,    // index of selected option (choice)
    furiganaShown: false,    // show readings toggle
  };

  // ---------- Storage ----------
  const STORAGE_KEY = "kaiwa-quiz-progress-v1";
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }
  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (_) {}
  }
  function recordChapterResult(chapterId, scorePct, total) {
    const progress = loadProgress();
    const prev = progress[chapterId] || { bestScore: 0, attempts: 0 };
    progress[chapterId] = {
      bestScore: Math.max(prev.bestScore, scorePct),
      lastScore: scorePct,
      total,
      attempts: (prev.attempts || 0) + 1,
      lastPlayed: new Date().toISOString(),
    };
    saveProgress(progress);
  }

  // ---------- Helpers ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(name) {
    [els.chapterSelect, els.quizScreen, els.resultScreen].forEach((s) =>
      s.classList.remove("active")
    );
    if (name === "chapter") els.chapterSelect.classList.add("active");
    else if (name === "quiz") els.quizScreen.classList.add("active");
    else if (name === "result") els.resultScreen.classList.add("active");
  }

  // ---------- Furigana reader ----------
  function getReadings(text) {
    if (!text || typeof kanjiReadings === "undefined") return [];
    const found = [];
    const seen = new Set();
    // Match longest kanji first to avoid partial matches
    const keys = Object.keys(kanjiReadings).sort((a, b) => b.length - a.length);
    for (const k of keys) {
      if (text.includes(k) && !seen.has(k)) {
        found.push({ kanji: k, reading: kanjiReadings[k] });
        seen.add(k);
      }
    }
    return found;
  }

  function renderReadings(readings) {
    els.readingsDisplay.innerHTML = "";
    if (!readings.length) {
      els.readingsDisplay.classList.add("hidden");
      return;
    }
    readings.forEach((r) => {
      const item = document.createElement("div");
      item.className = "reading-item";
      item.innerHTML = `
        <span class="reading-kanji">${escapeHtml(r.kanji)}</span>
        <span class="reading-arrow">↓</span>
        <span class="reading-hiragana">${escapeHtml(r.reading)}</span>
      `;
      els.readingsDisplay.appendChild(item);
    });
    els.readingsDisplay.classList.remove("hidden");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // ---------- Chapter select screen ----------
  function renderChapters() {
    els.chapterGrid.innerHTML = "";
    if (!quizData || !Array.isArray(quizData.chapters)) return;
    const progress = loadProgress();
    quizData.chapters.forEach((ch) => {
      const card = document.createElement("div");
      card.className = "chapter-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      const prev = progress[ch.id];
      const scoreBadge = prev
        ? `<div class="chapter-count">Best: ${prev.bestScore}%</div>`
        : "";
      card.innerHTML = `
        <div class="chapter-number">第${ch.id}課</div>
        <div class="chapter-label">${escapeHtml(ch.title || "")}</div>
        <div class="chapter-count">${ch.questions.length} soal</div>
        ${scoreBadge}
      `;
      card.addEventListener("click", () => startQuiz(ch));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          startQuiz(ch);
        }
      });
      els.chapterGrid.appendChild(card);
    });
  }

  // ---------- Quiz flow ----------
  function startQuiz(chapter) {
    state.chapter = chapter;
    state.questions = shuffle(chapter.questions);
    state.index = 0;
    state.correct = 0;
    state.answered = false;
    state.selectedOption = null;
    state.furiganaShown = false;
    els.chapterInfo.textContent = `第${chapter.id}課 · ${chapter.title || ""}`;
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    if (!q) return finishQuiz();
    state.answered = false;
    state.selectedOption = null;
    state.furiganaShown = false;

    // Header
    els.questionNumber.textContent = `Question ${state.index + 1} / ${state.questions.length}`;
    els.scoreDisplay.textContent = `✅ ${state.correct}`;
    els.progressFill.style.width =
      ((state.index) / state.questions.length) * 100 + "%";

    // Type label
    const typeLabel = {
      choice: "Pilihan Ganda",
      dialogue: "会話 / Dialogue",
      fill: "Isi Jawaban",
    }[q.type] || q.type;
    els.questionType.textContent = typeLabel;

    // Question text
    els.questionText.textContent = q.text || "";

    // Furigana button (only if kanji in text)
    const readings = getReadings(q.text || "");
    if (readings.length > 0) {
      els.furiganaBtn.classList.remove("hidden");
      els.furiganaBtn.classList.remove("active");
      els.readingsDisplay.classList.add("hidden");
      state.furiganaShown = false;
    } else {
      els.furiganaBtn.classList.add("hidden");
      els.readingsDisplay.classList.add("hidden");
    }

    // Dialogue context (only for dialogue type)
    if (q.type === "dialogue" && q.dialogue) {
      const lines = Object.entries(q.dialogue)
        .map(([speaker, text]) => `<div><span class="speaker">${speaker}:</span> ${escapeHtml(text)}</div>`)
        .join("");
      els.dialogueContent.innerHTML = lines;
      els.dialogueContext.classList.remove("hidden");
    } else {
      els.dialogueContext.classList.add("hidden");
      els.dialogueContent.innerHTML = "";
    }

    // Question body
    els.optionsContainer.innerHTML = "";
    els.optionsContainer.classList.remove("hidden");
    els.inputArea.classList.add("hidden");
    els.feedback.classList.remove("show", "correct", "wrong");
    els.feedback.innerHTML = "";
    els.nextBtn.classList.add("hidden");

    if (q.type === "choice" || q.type === "dialogue") {
      renderChoiceOptions(q);
    } else if (q.type === "fill") {
      renderFillInput(q);
    }
  }

  function renderChoiceOptions(q) {
    const opts = q.options || [];
    opts.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = text;
      btn.addEventListener("click", () => handleChoiceAnswer(idx, q));
      els.optionsContainer.appendChild(btn);
    });
  }

  function renderFillInput(q) {
    els.optionsContainer.classList.add("hidden");
    els.inputArea.classList.remove("hidden");
    els.answerInput.value = "";
    setTimeout(() => els.answerInput.focus(), 50);
    if (q.hint) {
      els.questionText.textContent = `${q.text}\n💡 Hint: ${q.hint}`;
    }
    // Remove old listener by replacing element
    const newSubmit = els.submitTyping.cloneNode(true);
    els.submitTyping.parentNode.replaceChild(newSubmit, els.submitTyping);
    els.submitTyping = newSubmit;
    els.submitTyping.addEventListener("click", () => handleFillAnswer(q));

    const newInput = els.answerInput.cloneNode(true);
    els.answerInput.parentNode.replaceChild(newInput, els.answerInput);
    els.answerInput = newInput;
    els.answerInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleFillAnswer(q);
    });
  }

  // ---------- Answer handling ----------
  function handleChoiceAnswer(idx, q) {
    if (state.answered) return;
    state.answered = true;
    state.selectedOption = idx;
    const correct = idx === q.correct;
    if (correct) state.correct++;

    const buttons = els.optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct) b.classList.add("correct");
      else if (i === idx) b.classList.add("wrong");
    });

    showFeedback(correct, q);
  }

  function handleFillAnswer(q) {
    if (state.answered) return;
    const userAns = els.answerInput.value.trim();
    if (!userAns) return; // require non-empty

    state.answered = true;
    const expected = (q.answer || "").trim();
    const correct = userAns === expected;
    if (correct) state.correct++;

    // Show correct answer inline
    els.answerInput.disabled = true;
    els.submitTyping.disabled = true;
    if (!correct) {
      els.answerInput.style.borderColor = "var(--error)";
    } else {
      els.answerInput.style.borderColor = "var(--success)";
    }

    showFeedback(correct, q, userAns, expected);
  }

  function showFeedback(correct, q, userAns, expected) {
    els.feedback.classList.remove("correct", "wrong");
    if (correct) {
      els.feedback.innerHTML = `✅ Benar! ${expected ? `<div class="correct-answer">「${escapeHtml(expected)}」</div>` : ""}`;
      els.feedback.classList.add("correct");
    } else {
      const userDisplay = userAns ? `Jawaban kamu: <strong>「${escapeHtml(userAns)}」</strong><br>` : "";
      const correctDisplay = q.options
        ? `Jawaban benar: <strong>「${escapeHtml(q.options[q.correct])}」</strong>`
        : expected
          ? `Jawaban benar: <strong>「${escapeHtml(expected)}」</strong>`
          : "";
      els.feedback.innerHTML = `❌ Kurang tepat.<br>${userDisplay}${correctDisplay}`;
      els.feedback.classList.add("wrong");
    }
    els.feedback.classList.add("show");

    // Show next button
    const isLast = state.index + 1 >= state.questions.length;
    els.nextBtn.textContent = isLast ? "Lihat Hasil →" : "Soal Berikutnya →";
    els.nextBtn.classList.remove("hidden");
  }

  // ---------- Result ----------
  function finishQuiz() {
    const total = state.questions.length;
    const pct = total > 0 ? Math.round((state.correct / total) * 100) : 0;
    recordChapterResult(state.chapter.id, pct, total);
    els.finalScore.textContent = `${pct}%`;
    const messages = {
      perfect: "🏆 Sempurna!",
      great: "🎉 Bagus sekali!",
      good: "💪 Lumayan!",
      ok: "📚 Ayo semangat lagi!",
    };
    let msg;
    if (pct >= 90) msg = messages.perfect;
    else if (pct >= 70) msg = messages.great;
    else if (pct >= 50) msg = messages.good;
    else msg = messages.ok;
    els.resultMessage.innerHTML = `<strong>${msg}</strong><br><small>${state.correct} / ${total} soal benar di 第${state.chapter.id}課</small>`;
    showScreen("result");
  }

  // ---------- Event listeners ----------
  els.furiganaBtn.addEventListener("click", () => {
    const q = state.questions[state.index];
    if (!q) return;
    if (!state.furiganaShown) {
      state.furiganaShown = true;
      const readings = getReadings(q.text || "");
      renderReadings(readings);
      els.furiganaBtn.classList.add("active");
    } else {
      state.furiganaShown = false;
      els.readingsDisplay.classList.add("hidden");
      els.furiganaBtn.classList.remove("active");
    }
  });

  els.backBtn.addEventListener("click", () => {
    showScreen("chapter");
    renderChapters();
  });

  els.nextBtn.addEventListener("click", () => {
    state.index++;
    if (state.index >= state.questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
      // Reset progress fill animation
      requestAnimationFrame(() => {
        els.progressFill.style.width =
          (state.index / state.questions.length) * 100 + "%";
      });
    }
  });

  els.retryBtn.addEventListener("click", () => {
    if (state.chapter) startQuiz(state.chapter);
  });

  els.homeBtn.addEventListener("click", () => {
    showScreen("chapter");
    renderChapters();
  });

  // Keyboard shortcuts: 1-4 for choice answers, Enter for next
  document.addEventListener("keydown", (e) => {
    if (!els.quizScreen.classList.contains("active")) return;
    // Number keys for choice (1-9)
    if (!state.answered && (e.key >= "1" && e.key <= "9")) {
      const idx = parseInt(e.key, 10) - 1;
      const buttons = els.optionsContainer.querySelectorAll(".option-btn");
      if (idx < buttons.length) {
        e.preventDefault();
        buttons[idx].click();
      }
    }
    // Enter for next button when answered
    if (state.answered && e.key === "Enter" && !els.nextBtn.classList.contains("hidden")) {
      e.preventDefault();
      els.nextBtn.click();
    }
  });

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    renderChapters();
    showScreen("chapter");
  });
})();