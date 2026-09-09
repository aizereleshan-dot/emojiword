// =========================================================
// EmojiWord — Главный скрипт логики приложения
// Поддержка 3 языков (kk, ru, en), мессенджера, 42 эмодзи и 3 мини-игр
// =========================================================

const STORAGE_KEY_LANG = "emoji_english_lang";
const STORAGE_KEY_FAVORITES = "emoji_word_favorites_v2";

// Состояние приложения
const state = {
  currentLang: "kk",       // "kk" (по умолчанию), "ru", "en"
  currentView: "messenger",// "messenger" или "games"
  selectedEmojiId: "happy",
  currentMode: "words",    // "words" или "idioms"
  currentCategory: "all",  // "all", "faces", "gestures", "animals", "nature", "objects"
  isEmojiPanelOpen: true,  // открыта ли панель эмодзи в мессенджере
  speechSpeed: 1.0,        // 1.0 или 0.75
  voices: [],
  selectedVoice: null,
  isSpeaking: false,
  favorites: [],

  // Состояние мини-игр
  game: {
    activeGameId: null,     // null, 1, 2, 3
    questions: [],          // 5 вопросов на текущий раунд
    currentIndex: 0,        // 0..4
    score: 0,               // 0..5
    firstAttempt: true,
    answered: false,
    selectedWords: [],      // для игры 2
    roundFinished: false
  }
};

// ---------------------------------------------------------
// Получение локализованной строки
// ---------------------------------------------------------
function t(key) {
  const dict = (typeof I18N_UI !== "undefined" && I18N_UI[state.currentLang]) 
    ? I18N_UI[state.currentLang] 
    : (typeof I18N_UI !== "undefined" ? I18N_UI.kk : {});
  return dict[key] ?? "";
}

// ---------------------------------------------------------
// Инициализация после загрузки страницы
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  loadFavoritesFromStorage();
  initVoices();
  applyInterfaceLanguage();
  renderEmojiGrid();
  renderExpressionCard();
  initEventListeners();
  updateFavoritesCounter();
});

// ---------------------------------------------------------
// Управление языком интерфейса
// ---------------------------------------------------------
function initLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    if (saved && (saved === "kk" || saved === "ru" || saved === "en")) {
      state.currentLang = saved;
    } else {
      state.currentLang = "kk"; // По умолчанию казахский
    }
  } catch (e) {
    state.currentLang = "kk";
  }
  document.documentElement.lang = state.currentLang;
}

function setLanguage(langCode) {
  if (!langCode || (langCode !== "kk" && langCode !== "ru" && langCode !== "en")) return;
  if (state.currentLang === langCode) return;

  state.currentLang = langCode;
  document.documentElement.lang = langCode;

  try {
    localStorage.setItem(STORAGE_KEY_LANG, langCode);
  } catch (e) {
    console.warn("Could not save language preference:", e);
  }

  // Обновляем тексты интерфейса
  applyInterfaceLanguage();

  // Обновляем сетку эмодзи (подписи на новом языке)
  renderEmojiGrid();

  // Обновляем карточку выражения
  renderExpressionCard();

  // Если открыто избранное — перерисовываем
  const favModal = document.getElementById("favorites-modal");
  if (favModal && !favModal.classList.contains("hidden")) {
    renderFavoritesList();
  }

  // Если активна игра — перерисовываем текущее задание без сброса раунда!
  if (state.currentView === "games") {
    if (state.game.activeGameId !== null) {
      renderActiveGameStage();
    } else {
      renderGamesMenu();
    }
  }

  const langNames = { kk: "Қазақ тілі таңдалды 🇰🇿", ru: "Русский язык выбран 🇷🇺", en: "English selected 🇬🇧" };
  showToast(langNames[langCode] || "Language changed", "🌐");
}

function applyInterfaceLanguage() {
  // Название и подзаголовок (подзаголовок ВСЕГДА остаётся английским!)
  setElemText("brand-subtitle", "using emojis and idioms to make learning English more fun");
  setElemText("fav-label", t("myVocabulary"));

  // Вкладки
  setElemText("tab-messenger-text", t("tabMessenger"));
  setElemText("tab-games-text", t("tabGames"));

  // Блок мессенджера
  setElemText("composer-heading-text", t("step1Title"));
  setElemText("clear-text-btn", t("clearBtn"));
  setElemText("copy-text-btn", t("copyBtn"));
  setElemText("input-hint", t("inputHint"));
  setElemText("toggle-emoji-label", state.isEmojiPanelOpen ? t("toggleEmojiBtnClose") : t("toggleEmojiBtnOpen"));

  const msgInput = document.getElementById("message-input");
  if (msgInput) {
    msgInput.placeholder = t("placeholder");
  }
  updateCharCounter();

  // Категории эмодзи
  setElemText("cat-all-btn", `${t("catAll")} (42)`);
  setElemText("cat-faces-btn", t("catFaces"));
  setElemText("cat-gestures-btn", t("catGestures"));
  setElemText("cat-animals-btn", t("catAnimals"));
  setElemText("cat-nature-btn", t("catNature"));
  setElemText("cat-objects-btn", t("catObjects"));

  // Блок эмодзи и режимов
  setElemText("emoji-heading-text", t("step2Title"));
  setElemText("mode-words-text", t("modeWords"));
  setElemText("mode-idioms-text", t("modeIdioms"));

  // Карточка выражения
  setElemText("card-heading-text", t("step3Title"));
  setElemText("example-tag", t("exampleTitle"));
  setElemText("speak-term-label", t("speakTerm"));
  setElemText("speak-example-label", t("speakExample"));
  setElemText("speed-label-text", t("speedLabel"));
  setElemText("insert-btn-label", t("insertBtn"));

  // Мини-игры меню
  setElemText("games-title", t("gamesTitle"));
  setElemText("games-subtitle", t("gamesSubtitle"));
  setElemText("game1-title", t("game1Title"));
  setElemText("game1-desc", t("game1Desc"));
  setElemText("game2-title", t("game2Title"));
  setElemText("game2-desc", t("game2Desc"));
  setElemText("game3-title", t("game3Title"));
  setElemText("game3-desc", t("game3Desc"));
  setElemText("btn-play-1", t("btnPlay"));
  setElemText("btn-play-2", t("btnPlay"));
  setElemText("btn-play-3", t("btnPlay"));
  setElemText("game-back-btn", t("btnBackToGames"));

  // Модалка избранного
  setElemText("fav-modal-title", t("modalTitle"));
  setElemText("clear-favorites-btn", t("modalClearAll"));
  setElemText("close-modal-bottom-btn", t("modalDone"));

  // Подвал
  setElemText("footer-info-text", `${t("appName")} • using emojis and idioms to make learning English more fun`);
  setElemText("footer-subtext", t("footerPrivacy"));

  // Кнопки языка
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === state.currentLang);
  });
}

function setElemText(elemId, text) {
  const el = document.getElementById(elemId);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

// ---------------------------------------------------------
// Синтез речи (Web Speech API) — ВСЕГДА en-US
// ---------------------------------------------------------
function initVoices() {
  if (!("speechSynthesis" in window)) {
    showSpeechStatus(t("speechNotAvailable"));
    return;
  }

  function updateVoiceList() {
    state.voices = window.speechSynthesis.getVoices();
    const enVoices = state.voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
    state.selectedVoice = enVoices.find(v => v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha")) 
      || enVoices.find(v => v.lang === "en-US") 
      || enVoices[0] 
      || null;
  }

  updateVoiceList();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoiceList;
  }
}

function speakText(text, triggerBtn = null) {
  if (!("speechSynthesis" in window)) {
    showSpeechStatus(t("speechNotAvailable"));
    showToast(t("speechNotSupported"), "⚠️");
    return;
  }

  window.speechSynthesis.cancel();
  hideSpeechStatus();

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // Строго английский голос
    utterance.rate = state.speechSpeed;

    if (state.selectedVoice) {
      utterance.voice = state.selectedVoice;
    }

    if (triggerBtn) {
      triggerBtn.classList.add("speaking");
      const originalText = triggerBtn.innerHTML;
      triggerBtn.innerHTML = `<span class="btn-icon">🔊</span> ${t("speaking")}`;
      
      utterance.onend = () => {
        triggerBtn.classList.remove("speaking");
        triggerBtn.innerHTML = originalText;
        state.isSpeaking = false;
      };

      utterance.onerror = (event) => {
        triggerBtn.classList.remove("speaking");
        triggerBtn.innerHTML = originalText;
        state.isSpeaking = false;
        if (event.error !== "canceled" && event.error !== "interrupted") {
          console.warn("SpeechSynthesis error:", event.error);
          showSpeechStatus(t("speechNotAvailable"));
        }
      };
    }

    state.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error("SpeechSynthesis error:", err);
    showSpeechStatus(t("speechNotAvailable"));
  }
}

function showSpeechStatus(message) {
  const statusEl = document.getElementById("speech-status");
  const textEl = document.getElementById("speech-status-text");
  if (statusEl && textEl) {
    textEl.textContent = message;
    statusEl.classList.remove("hidden");
  }
}

function hideSpeechStatus() {
  const statusEl = document.getElementById("speech-status");
  if (statusEl) {
    statusEl.classList.add("hidden");
  }
}

// ---------------------------------------------------------
// Отрисовка сетки эмодзи с фильтром категорий (42 эмодзи)
// ---------------------------------------------------------
function renderEmojiGrid() {
  const container = document.getElementById("emoji-grid");
  if (!container || typeof EMOJI_DATABASE === "undefined") return;

  container.innerHTML = "";

  const filtered = EMOJI_DATABASE.filter(item => {
    if (state.currentCategory === "all") return true;
    return item.category === state.currentCategory;
  });

  filtered.forEach(item => {
    const label = (item.labels && item.labels[state.currentLang]) 
      || (item.labels && item.labels.kk) 
      || "";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `emoji-card-btn ${item.id === state.selectedEmojiId ? "active" : ""}`;
    btn.dataset.id = item.id;
    btn.title = `${label}: ${item.word.term} / ${item.idiom.term}`;
    btn.setAttribute("aria-label", `${label}: ${item.emoji}`);

    btn.innerHTML = `
      <span class="emoji-card-icon" aria-hidden="true">${item.emoji}</span>
      <span class="emoji-card-label">${label}</span>
    `;

    btn.addEventListener("click", () => {
      selectEmoji(item.id);
    });

    container.appendChild(btn);
  });
}

function selectEmoji(emojiId) {
  state.selectedEmojiId = emojiId;

  const allBtns = document.querySelectorAll(".emoji-card-btn");
  allBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.id === emojiId);
  });

  renderExpressionCard();
}

function filterCategory(categoryName) {
  state.currentCategory = categoryName;

  const chips = document.querySelectorAll(".category-chip");
  chips.forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === categoryName);
  });

  renderEmojiGrid();
}

// ---------------------------------------------------------
// Отрисовка карточки выбранного выражения
// ---------------------------------------------------------
function renderExpressionCard() {
  if (typeof EMOJI_DATABASE === "undefined") return;
  const item = EMOJI_DATABASE.find(e => e.id === state.selectedEmojiId) || EMOJI_DATABASE[0];
  const isIdiom = state.currentMode === "idioms";
  const data = isIdiom ? item.idiom : item.word;

  const langData = (data.translations && data.translations[state.currentLang]) 
    || (data.translations && data.translations.kk) 
    || { translation: data.term };

  const emojiEl = document.getElementById("card-emoji");
  const termEl = document.getElementById("card-term");
  const transEl = document.getElementById("card-transcription");
  const translationEl = document.getElementById("card-translation");
  const badgeEl = document.getElementById("card-badge");
  const nuanceHeaderEl = document.getElementById("nuance-header");
  const nuanceIconEl = document.getElementById("nuance-icon");
  const nuanceEl = document.getElementById("card-nuance");
  const exampleEl = document.getElementById("card-example");
  const exampleRuEl = document.getElementById("card-example-ru");
  const favBtn = document.getElementById("toggle-favorite-btn");

  if (emojiEl) emojiEl.textContent = item.emoji;
  if (termEl) termEl.textContent = data.term;
  if (transEl) transEl.textContent = data.transcription || "";
  if (translationEl) translationEl.textContent = langData.translation;

  if (badgeEl) {
    if (isIdiom) {
      badgeEl.textContent = t("badgeIdiom");
      badgeEl.className = "badge-mode idiom-mode";
    } else {
      badgeEl.textContent = t("badgeWord");
      badgeEl.className = "badge-mode";
    }
  }

  if (nuanceEl && nuanceHeaderEl) {
    if (isIdiom) {
      nuanceIconEl.textContent = "💡";
      nuanceHeaderEl.textContent = t("nuanceIdiomTitle");
      const literalInfo = langData.literalMeaning ? `<strong>${langData.literalMeaning}</strong>. ` : "";
      nuanceEl.innerHTML = `${literalInfo}${langData.nuance}`;
    } else {
      nuanceIconEl.textContent = "📝";
      nuanceHeaderEl.textContent = t("nuanceWordTitle");
      nuanceEl.innerHTML = langData.nuance;
    }
  }

  if (exampleEl) exampleEl.textContent = `“${data.example}”`;
  if (exampleRuEl) exampleRuEl.textContent = `«${langData.exampleTranslation}»`;

  updateFavoriteButtonState(favBtn, item.id, state.currentMode);
}

function updateFavoriteButtonState(btn, emojiId, mode) {
  if (!btn) return;
  const isFav = isItemFavorite(emojiId, mode);
  const favLabel = document.getElementById("fav-btn-label");
  
  if (isFav) {
    btn.classList.add("is-favorite");
    btn.querySelector(".btn-icon").textContent = "★";
    if (favLabel) favLabel.textContent = t("favSaved");
    btn.title = t("favSaved");
  } else {
    btn.classList.remove("is-favorite");
    btn.querySelector(".btn-icon").textContent = "⭐";
    if (favLabel) favLabel.textContent = t("favAdd");
    btn.title = t("favAdd");
  }
}

function setMode(mode) {
  if (state.currentMode === mode) return;
  state.currentMode = mode;

  const wordsBtn = document.getElementById("mode-words-btn");
  const idiomsBtn = document.getElementById("mode-idioms-btn");

  if (wordsBtn && idiomsBtn) {
    const isWords = mode === "words";
    wordsBtn.classList.toggle("active", isWords);
    wordsBtn.setAttribute("aria-selected", isWords ? "true" : "false");

    idiomsBtn.classList.toggle("active", !isWords);
    idiomsBtn.setAttribute("aria-selected", !isWords ? "true" : "false");
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  renderExpressionCard();
}

// ---------------------------------------------------------
// Поле ввода сообщения в стиле мессенджера
// Поддержка вставки в позицию курсора или замена выделения!
// ---------------------------------------------------------
const messageInput = document.getElementById("message-input");
const charCounter = document.getElementById("char-counter");

function updateCharCounter() {
  if (!messageInput || !charCounter) return;
  const len = messageInput.value.length;

  let unitText = "";
  if (state.currentLang === "kk") {
    unitText = t("charCountOne");
  } else if (state.currentLang === "ru") {
    unitText = getRussianPlural(len, t("charCountOne"), t("charCountFew"), t("charCountMany"));
  } else {
    unitText = len === 1 ? t("charCountOne") : t("charCountMany");
  }

  charCounter.textContent = `${len} ${unitText}`;
}

function getRussianPlural(number, one, two, five) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return five;
  if (n1 > 1 && n1 < 5) return two;
  if (n1 === 1) return one;
  return five;
}

/**
 * Вставка выражения в позицию курсора или замена выделенного текста
 */
function insertCurrentExpression() {
  if (typeof EMOJI_DATABASE === "undefined" || !messageInput) return;
  const item = EMOJI_DATABASE.find(e => e.id === state.selectedEmojiId) || EMOJI_DATABASE[0];
  const isIdiom = state.currentMode === "idioms";
  const data = isIdiom ? item.idiom : item.word;

  if (!data) return;

  const currentVal = messageInput.value;
  const start = messageInput.selectionStart ?? currentVal.length;
  const end = messageInput.selectionEnd ?? currentVal.length;

  // Если выделен текст — заменяем его; если нет — вставляем в позицию курсора с аккуратными пробелами
  let prefix = "";
  if (start > 0 && currentVal[start - 1] !== " " && currentVal[start - 1] !== "\n") {
    prefix = " ";
  }

  let suffix = " ";
  const insertString = prefix + data.term + suffix;

  messageInput.value = currentVal.substring(0, start) + insertString + currentVal.substring(end);
  const newPos = start + insertString.length;
  
  messageInput.focus();
  messageInput.setSelectionRange(newPos, newPos);
  updateCharCounter();

  const dict = I18N_UI[state.currentLang] || I18N_UI.kk;
  const toastMsg = typeof dict.toastInserted === "function" ? dict.toastInserted(data.term) : `+ "${data.term}"`;
  showToast(toastMsg, "✨");
}

function toggleEmojiPanel() {
  state.isEmojiPanelOpen = !state.isEmojiPanelOpen;
  const panel = document.getElementById("emoji-panel-container");
  const toggleBtn = document.getElementById("toggle-emoji-panel-btn");

  if (panel) {
    panel.classList.toggle("hidden", !state.isEmojiPanelOpen);
  }
  if (toggleBtn) {
    toggleBtn.classList.toggle("active", state.isEmojiPanelOpen);
    setElemText("toggle-emoji-label", state.isEmojiPanelOpen ? t("toggleEmojiBtnClose") : t("toggleEmojiBtnOpen"));
  }
}

// ---------------------------------------------------------
// Избранное (Мой словарик / Таңдаулылар)
// ---------------------------------------------------------
function loadFavoritesFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FAVORITES);
    if (raw) {
      state.favorites = JSON.parse(raw);
      if (!Array.isArray(state.favorites)) state.favorites = [];
    }
  } catch (err) {
    state.favorites = [];
  }
}

function saveFavoritesToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(state.favorites));
  } catch (err) {
    console.warn("Could not save favorites:", err);
  }
  updateFavoritesCounter();
}

function isItemFavorite(emojiId, mode) {
  return state.favorites.some(f => f.emojiId === emojiId && f.mode === mode);
}

function toggleCurrentFavorite() {
  if (typeof EMOJI_DATABASE === "undefined") return;
  const item = EMOJI_DATABASE.find(e => e.id === state.selectedEmojiId) || EMOJI_DATABASE[0];
  const mode = state.currentMode;
  const isIdiom = mode === "idioms";
  const data = isIdiom ? item.idiom : item.word;

  const existingIdx = state.favorites.findIndex(f => f.emojiId === item.id && f.mode === mode);
  const dict = I18N_UI[state.currentLang] || I18N_UI.kk;

  if (existingIdx >= 0) {
    state.favorites.splice(existingIdx, 1);
    saveFavoritesToStorage();
    const msg = typeof dict.toastFavRemoved === "function" ? dict.toastFavRemoved(data.term) : `-${data.term}`;
    showToast(msg, "🗑️");
  } else {
    const newFav = {
      emojiId: item.id,
      emoji: item.emoji,
      mode: mode,
      term: data.term
    };
    state.favorites.unshift(newFav);
    saveFavoritesToStorage();
    const msg = typeof dict.toastFavAdded === "function" ? dict.toastFavAdded(data.term) : `+${data.term}`;
    showToast(msg, "⭐");
  }

  const favBtn = document.getElementById("toggle-favorite-btn");
  updateFavoriteButtonState(favBtn, item.id, mode);
}

function updateFavoritesCounter() {
  const counter = document.getElementById("fav-counter");
  if (counter) {
    counter.textContent = state.favorites.length;
  }
}

function openFavoritesModal() {
  renderFavoritesList();
  const favModal = document.getElementById("favorites-modal");
  if (favModal) favModal.classList.remove("hidden");
}

function closeFavoritesModal() {
  const favModal = document.getElementById("favorites-modal");
  if (favModal) favModal.classList.add("hidden");
  const item = EMOJI_DATABASE.find(e => e.id === state.selectedEmojiId);
  if (item) {
    const favBtn = document.getElementById("toggle-favorite-btn");
    updateFavoriteButtonState(favBtn, item.id, state.currentMode);
  }
}

function renderFavoritesList() {
  const listEl = document.getElementById("favorites-list");
  const summaryEl = document.getElementById("fav-summary-text");
  if (!listEl) return;

  listEl.innerHTML = "";

  if (state.favorites.length === 0) {
    if (summaryEl) summaryEl.textContent = t("modalEmpty");
    return;
  }

  if (summaryEl) {
    summaryEl.textContent = `${t("modalCountPrefix")} ${state.favorites.length}`;
  }

  state.favorites.forEach((fav, index) => {
    const item = EMOJI_DATABASE.find(e => e.id === fav.emojiId);
    if (!item) return;

    const isIdiom = fav.mode === "idioms";
    const data = isIdiom ? item.idiom : item.word;
    const langData = (data.translations && data.translations[state.currentLang]) 
      || (data.translations && data.translations.kk) 
      || { translation: data.term };

    const typeName = isIdiom ? t("modeIdioms") : t("modeWords");

    const row = document.createElement("div");
    row.className = "fav-item";

    row.innerHTML = `
      <div class="fav-item-main">
        <span class="fav-item-emoji">${item.emoji}</span>
        <div class="fav-item-text">
          <div class="fav-item-term">
            ${data.term} <span class="fav-item-type">(${typeName})</span>
          </div>
          <div class="fav-item-trans">${langData.translation}</div>
        </div>
      </div>
      <div class="fav-item-actions">
        <button class="btn-fav-action btn-fav-speak" title="${t("btnListen")}">🔊</button>
        <button class="btn-fav-action btn-fav-insert" title="${t("btnInsert")}">➕</button>
        <button class="btn-fav-action btn-fav-remove" title="${t("btnRemove")}">🗑️</button>
      </div>
    `;

    row.querySelector(".btn-fav-speak").addEventListener("click", () => {
      speakText(data.term, row.querySelector(".btn-fav-speak"));
    });

    row.querySelector(".btn-fav-insert").addEventListener("click", () => {
      if (messageInput) {
        const start = messageInput.selectionStart ?? messageInput.value.length;
        messageInput.value = messageInput.value.substring(0, start) + ` ${data.term} ` + messageInput.value.substring(start);
        updateCharCounter();
        messageInput.focus();
        showToast(`+ "${data.term}"`, "✍️");
      }
    });

    row.querySelector(".btn-fav-remove").addEventListener("click", () => {
      state.favorites.splice(index, 1);
      saveFavoritesToStorage();
      renderFavoritesList();
      showToast(`- "${data.term}"`, "🗑️");
    });

    listEl.appendChild(row);
  });
}

function clearAllFavorites() {
  if (state.favorites.length === 0) return;
  if (confirm(t("confirmClear"))) {
    state.favorites = [];
    saveFavoritesToStorage();
    renderFavoritesList();
    showToast(t("toastFavCleared"), "🧹");
  }
}

// ---------------------------------------------------------
// ДВИЖОК МИНИ-ИГР (3 ИГРЫ: УГАДАЙ, СОБЕРИ, СЛУШАЙ)
// ---------------------------------------------------------
function switchView(viewName) {
  state.currentView = viewName;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  const messengerView = document.getElementById("view-messenger");
  const gamesView = document.getElementById("view-games");
  const tabMessengerBtn = document.getElementById("tab-messenger-btn");
  const tabGamesBtn = document.getElementById("tab-games-btn");

  if (viewName === "messenger") {
    if (messengerView) messengerView.classList.remove("hidden");
    if (gamesView) gamesView.classList.add("hidden");
    if (tabMessengerBtn) tabMessengerBtn.classList.add("active");
    if (tabGamesBtn) tabGamesBtn.classList.remove("active");
  } else {
    if (messengerView) messengerView.classList.add("hidden");
    if (gamesView) gamesView.classList.remove("hidden");
    if (tabMessengerBtn) tabMessengerBtn.classList.remove("active");
    if (tabGamesBtn) tabGamesBtn.classList.add("active");

    if (state.game.activeGameId === null) {
      renderGamesMenu();
    }
  }
}

function renderGamesMenu() {
  const menuSec = document.getElementById("games-menu-section");
  const activeSec = document.getElementById("game-active-section");
  if (menuSec) menuSec.classList.remove("hidden");
  if (activeSec) activeSec.classList.add("hidden");

  state.game.activeGameId = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function startMiniGame(gameNumber) {
  if (typeof GAMES_DATABASE === "undefined") return;

  const pool = GAMES_DATABASE["game" + gameNumber];
  if (!pool || pool.length === 0) return;

  // Выбираем ровно 5 случайных уникальных вопросов на раунд (Fisher-Yates)
  const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffledPool.slice(0, 5);

  state.game.activeGameId = gameNumber;
  state.game.questions = selectedQuestions;
  state.game.currentIndex = 0;
  state.game.score = 0;
  state.game.roundFinished = false;

  const menuSec = document.getElementById("games-menu-section");
  const activeSec = document.getElementById("game-active-section");
  if (menuSec) menuSec.classList.add("hidden");
  if (activeSec) activeSec.classList.remove("hidden");

  loadQuestion(0);
}

function loadQuestion(index) {
  state.game.currentIndex = index;
  state.game.firstAttempt = true;
  state.game.answered = false;
  state.game.selectedWords = [];

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  // Обновляем прогресс: «5-тен 1-сұрақ»
  const progressText = typeof t("questionProgress") === "function"
    ? t("questionProgress")(index + 1, 5)
    : `${index + 1} / 5`;
  setElemText("game-progress-text", progressText);

  renderActiveGameStage();
}

function renderActiveGameStage() {
  const stage = document.getElementById("game-stage");
  if (!stage) return;

  if (state.game.roundFinished) {
    renderRoundResults();
    return;
  }

  const q = state.game.questions[state.game.currentIndex];
  if (!q) return;

  const gameId = state.game.activeGameId;

  if (gameId === 1) {
    renderGame1Stage(stage, q);
  } else if (gameId === 2) {
    renderGame2Stage(stage, q);
  } else if (gameId === 3) {
    renderGame3Stage(stage, q);
  }
}

// ---------------------------------------------------------
// ИГРА 1: УГАДАЙ ЭМОЦИЮ
// ---------------------------------------------------------
function renderGame1Stage(stage, q) {
  const trans = (q.translations && q.translations[state.currentLang]) || q.translations.kk;

  // Перемешиваем варианты ответов (если еще не перемешаны)
  if (!q.shuffledOptions) {
    q.shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
  }

  stage.innerHTML = `
    <div class="game-stage-box">
      <div class="game-prompt-card">
        <span class="game-prompt-title">${t("step3Title")}</span>
        <div class="game-prompt-word">${q.word}</div>
        <div class="game-prompt-trans">${q.transcription || ""}</div>
      </div>

      <div class="game-options-grid">
        ${q.shuffledOptions.map(opt => `
          <button type="button" class="game-opt-btn" data-emoji="${opt}" ${state.game.answered ? "disabled" : ""}>
            ${opt}
          </button>
        `).join("")}
      </div>

      <div id="game-feedback-container"></div>
    </div>
  `;

  const buttons = stage.querySelectorAll(".game-opt-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      handleGame1Answer(btn, q, stage);
    });
  });

  if (state.game.answered) {
    showGame1Feedback(stage, q, trans);
  }
}

function handleGame1Answer(btn, q, stage) {
  if (state.game.answered) return;

  const chosen = btn.dataset.emoji;
  const isCorrect = chosen === q.correctEmoji;

  if (isCorrect) {
    btn.classList.add("correct");
    if (state.game.firstAttempt) {
      state.game.score++;
    }
    state.game.answered = true;
  } else {
    btn.classList.add("wrong");
    state.game.firstAttempt = false;

    // Подсвечиваем верный
    const buttons = stage.querySelectorAll(".game-opt-btn");
    buttons.forEach(b => {
      if (b.dataset.emoji === q.correctEmoji) b.classList.add("correct");
    });
    state.game.answered = true;
  }

  const trans = (q.translations && q.translations[state.currentLang]) || q.translations.kk;
  showGame1Feedback(stage, q, trans, isCorrect);
}

function showGame1Feedback(stage, q, trans, isCorrect = true) {
  const container = stage.querySelector("#game-feedback-container");
  if (!container) return;

  container.innerHTML = `
    <div class="feedback-box ${isCorrect ? "correct" : "wrong"}">
      <div class="feedback-header-row">
        <div class="feedback-status-title">
          ${isCorrect ? t("correctFeedback") : (typeof t("wrongFeedback") === "function" ? t("wrongFeedback")(q.correctEmoji + " " + q.word) : q.word)}
        </div>
        <button type="button" class="feedback-btn-speak" id="btn-listen-answer">
          🔊 ${t("speakTerm")}
        </button>
      </div>
      <div class="feedback-desc">
        <strong>${q.word}</strong> — ${trans}
      </div>
      <button type="button" class="btn-next-question" id="btn-next-q">
        ${t("btnNextQuestion")}
      </button>
    </div>
  `;

  container.querySelector("#btn-listen-answer").addEventListener("click", () => {
    speakText(q.word, container.querySelector("#btn-listen-answer"));
  });

  container.querySelector("#btn-next-q").addEventListener("click", () => {
    advanceToNextQuestion();
  });
}

// ---------------------------------------------------------
// ИГРА 2: СОБЕРИ ИДИОМУ
// ---------------------------------------------------------
function renderGame2Stage(stage, q) {
  const meaning = (q.translations && q.translations[state.currentLang]) || q.translations.kk;
  const expl = (q.explanation && q.explanation[state.currentLang]) || q.explanation.kk;
  const exTrans = (q.exampleTranslation && q.exampleTranslation[state.currentLang]) || q.exampleTranslation.kk;

  if (!q.shuffledPool) {
    q.shuffledPool = [...q.words].sort(() => 0.5 - Math.random());
  }

  // Доступные слова (которые еще не в слоте)
  const availableWords = [...q.shuffledPool];
  state.game.selectedWords.forEach(w => {
    const idx = availableWords.indexOf(w);
    if (idx >= 0) availableWords.splice(idx, 1);
  });

  stage.innerHTML = `
    <div class="game-stage-box">
      <div class="game-prompt-card">
        <span class="game-prompt-title">${t("buildIdiomHint")}</span>
        <div class="game-prompt-hint">«${meaning}»</div>
      </div>

      <div class="idiom-build-box">
        <!-- Слот собранных слов -->
        <div class="build-slot-area" id="build-slot">
          ${state.game.selectedWords.length === 0 ? `
            <span class="build-slot-empty-text">${t("buildIdiomHint")}</span>
          ` : state.game.selectedWords.map((w, i) => `
            <button type="button" class="word-chip in-slot" data-index="${i}" ${state.game.answered ? "disabled" : ""}>
              ${w}
            </button>
          `).join("")}
        </div>

        <!-- Пул доступных слов для нажатия -->
        <div class="word-chips-pool" id="chips-pool">
          ${availableWords.map((w, i) => `
            <button type="button" class="word-chip" data-word="${w}" ${state.game.answered ? "disabled" : ""}>
              ${w}
            </button>
          `).join("")}
        </div>

        ${!state.game.answered ? `
          <div class="idiom-controls-row">
            <button type="button" class="btn-game-reset" id="btn-reset-idiom">
              🧹 ${t("btnResetWords")}
            </button>
            <button type="button" class="btn-game-check" id="btn-check-idiom">
              ✓ ${t("btnCheckAnswer")}
            </button>
          </div>
        ` : ""}
      </div>

      <div id="game-feedback-container"></div>
    </div>
  `;

  // Клик по слову из пула -> добавляем в слот
  if (!state.game.answered) {
    stage.querySelectorAll("#chips-pool .word-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        state.game.selectedWords.push(chip.dataset.word);
        renderGame2Stage(stage, q);
      });
    });

    // Клик по слову в слоте -> убираем обратно
    stage.querySelectorAll("#build-slot .word-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const idx = parseInt(chip.dataset.index, 10);
        state.game.selectedWords.splice(idx, 1);
        renderGame2Stage(stage, q);
      });
    });

    // Сброс
    const resetBtn = stage.querySelector("#btn-reset-idiom");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.game.selectedWords = [];
        renderGame2Stage(stage, q);
      });
    }

    // Проверка
    const checkBtn = stage.querySelector("#btn-check-idiom");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        handleGame2Check(stage, q, meaning, expl, exTrans);
      });
    }
  }

  if (state.game.answered) {
    showGame2Feedback(stage, q, expl, exTrans, state.game.isCorrectAnswer);
  }
}

function handleGame2Check(stage, q, meaning, expl, exTrans) {
  const assembled = state.game.selectedWords.join(" ").trim().toLowerCase();
  const target = q.targetIdiom.trim().toLowerCase();

  const isCorrect = assembled === target;
  state.game.answered = true;
  state.game.isCorrectAnswer = isCorrect;

  if (isCorrect) {
    if (state.game.firstAttempt) {
      state.game.score++;
    }
  } else {
    state.game.firstAttempt = false;
  }

  renderGame2Stage(stage, q);
}

function showGame2Feedback(stage, q, expl, exTrans, isCorrect) {
  const container = stage.querySelector("#game-feedback-container");
  if (!container) return;

  container.innerHTML = `
    <div class="feedback-box ${isCorrect ? "correct" : "wrong"}">
      <div class="feedback-header-row">
        <div class="feedback-status-title">
          ${isCorrect ? t("correctFeedback") : (typeof t("wrongFeedback") === "function" ? t("wrongFeedback")(q.targetIdiom) : q.targetIdiom)}
        </div>
        <button type="button" class="feedback-btn-speak" id="btn-listen-idiom">
          🔊 ${t("speakTerm")}
        </button>
      </div>
      <div class="feedback-desc">
        <strong>${q.targetIdiom}</strong> — ${expl}
      </div>
      <div style="font-size:0.9rem; margin-top:4px;">
        <em>“${q.example}”</em><br>
        <span style="color:#64748b;">«${exTrans}»</span>
      </div>
      <button type="button" class="btn-next-question" id="btn-next-q">
        ${t("btnNextQuestion")}
      </button>
    </div>
  `;

  container.querySelector("#btn-listen-idiom").addEventListener("click", () => {
    speakText(q.targetIdiom, container.querySelector("#btn-listen-idiom"));
  });

  container.querySelector("#btn-next-q").addEventListener("click", () => {
    advanceToNextQuestion();
  });
}

// ---------------------------------------------------------
// ИГРА 3: СЛУШАЙ И ВЫБИРАЙ
// Слово скрыто, произносится аудио (en-US), выбор 1 из 4 эмодзи
// ---------------------------------------------------------
function renderGame3Stage(stage, q) {
  const trans = (q.translations && q.translations[state.currentLang]) || q.translations.kk;

  if (!q.shuffledOptions) {
    q.shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
  }

  stage.innerHTML = `
    <div class="game-stage-box">
      <div class="game-prompt-card">
        <span class="game-prompt-title">${t("listenWordPrompt")}</span>
        
        <!-- Кнопки прослушивания (обычная и замедленная) -->
        <div style="display:flex; gap:10px; margin:10px 0; flex-wrap:wrap; justify-content:center;">
          <button type="button" class="btn-action btn-speak" id="btn-listen-game3">
            <span class="btn-icon">🔊</span> ${t("speakTerm")}
          </button>
          <button type="button" class="btn-action btn-speak-secondary" id="btn-listen-slow-game3">
            ${t("listenWordSlow")}
          </button>
        </div>

        <!-- До ответа слово СКРЫТО; после ответа раскрывается -->
        <div class="game-prompt-word" id="revealed-word">
          ${state.game.answered ? q.word : "🎧 ???"}
        </div>
        ${state.game.answered ? `
          <div class="game-prompt-trans">${q.transcription || ""} — ${trans}</div>
        ` : ""}
      </div>

      <div class="game-options-grid">
        ${q.shuffledOptions.map(opt => `
          <button type="button" class="game-opt-btn" data-emoji="${opt}" ${state.game.answered ? "disabled" : ""}>
            ${opt}
          </button>
        `).join("")}
      </div>

      <div id="game-feedback-container"></div>
    </div>
  `;

  // Озвучивание слова
  const listenBtn = stage.querySelector("#btn-listen-game3");
  const slowListenBtn = stage.querySelector("#btn-listen-slow-game3");

  if (listenBtn) {
    listenBtn.addEventListener("click", () => {
      const prevSpeed = state.speechSpeed;
      state.speechSpeed = 1.0;
      speakText(q.word, listenBtn);
      state.speechSpeed = prevSpeed;
    });
  }

  if (slowListenBtn) {
    slowListenBtn.addEventListener("click", () => {
      const prevSpeed = state.speechSpeed;
      state.speechSpeed = 0.75;
      speakText(q.word, slowListenBtn);
      state.speechSpeed = prevSpeed;
    });
  }

  // Клик по эмодзи
  const buttons = stage.querySelectorAll(".game-opt-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      handleGame3Answer(btn, q, stage, trans);
    });
  });

  if (state.game.answered) {
    showGame3Feedback(stage, q, trans, state.game.isCorrectAnswer);
  }
}

function handleGame3Answer(btn, q, stage, trans) {
  if (state.game.answered) return;

  const chosen = btn.dataset.emoji;
  const isCorrect = chosen === q.correctEmoji;

  state.game.answered = true;
  state.game.isCorrectAnswer = isCorrect;

  if (isCorrect) {
    btn.classList.add("correct");
    if (state.game.firstAttempt) {
      state.game.score++;
    }
  } else {
    btn.classList.add("wrong");
    state.game.firstAttempt = false;
    stage.querySelectorAll(".game-opt-btn").forEach(b => {
      if (b.dataset.emoji === q.correctEmoji) b.classList.add("correct");
    });
  }

  // Раскрываем слово
  const wordEl = stage.querySelector("#revealed-word");
  if (wordEl) wordEl.textContent = q.word;

  showGame3Feedback(stage, q, trans, isCorrect);
}

function showGame3Feedback(stage, q, trans, isCorrect) {
  const container = stage.querySelector("#game-feedback-container");
  if (!container) return;

  container.innerHTML = `
    <div class="feedback-box ${isCorrect ? "correct" : "wrong"}">
      <div class="feedback-header-row">
        <div class="feedback-status-title">
          ${isCorrect ? t("correctFeedback") : (typeof t("wrongFeedback") === "function" ? t("wrongFeedback")(q.correctEmoji + " " + q.word) : q.word)}
        </div>
      </div>
      <div class="feedback-desc">
        <strong>${q.word}</strong> ${q.transcription || ""} — ${trans}
      </div>
      <button type="button" class="btn-next-question" id="btn-next-q">
        ${t("btnNextQuestion")}
      </button>
    </div>
  `;

  container.querySelector("#btn-next-q").addEventListener("click", () => {
    advanceToNextQuestion();
  });
}

function advanceToNextQuestion() {
  if (state.game.currentIndex + 1 < 5) {
    loadQuestion(state.game.currentIndex + 1);
  } else {
    state.game.roundFinished = true;
    renderRoundResults();
  }
}

function renderRoundResults() {
  const stage = document.getElementById("game-stage");
  if (!stage) return;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  const score = state.game.score;
  const total = 5;

  let praise = t("scoreGood");
  if (score === 5) praise = t("scoreGreat");
  else if (score <= 2) praise = t("scoreTryAgain");

  const scoreLabel = typeof t("scoreText") === "function" 
    ? t("scoreText")(score, total) 
    : `${score} / ${total}`;

  stage.innerHTML = `
    <div class="round-results-card">
      <div class="round-trophy">${score >= 4 ? "🏆" : "🌟"}</div>
      <h3 class="round-score-title">${scoreLabel}</h3>
      <p class="round-message">${praise}</p>
      
      <div class="round-actions-row">
        <button type="button" class="btn-action btn-insert" id="btn-game-play-again">
          🔄 ${t("btnPlayAgain")}
        </button>
        <button type="button" class="btn-action btn-favorite-toggle" id="btn-game-return-menu">
          ${t("btnBackToGames")}
        </button>
      </div>
    </div>
  `;

  stage.querySelector("#btn-game-play-again").addEventListener("click", () => {
    startMiniGame(state.game.activeGameId);
  });

  stage.querySelector("#btn-game-return-menu").addEventListener("click", () => {
    renderGamesMenu();
  });
}

// ---------------------------------------------------------
// Тост-уведомления
// ---------------------------------------------------------
let toastTimeout = null;

function showToast(message, icon = "✨") {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-message");
  const iconEl = document.getElementById("toast-icon");

  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.remove("hidden");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

// ---------------------------------------------------------
// Инициализация событий
// ---------------------------------------------------------
function initEventListeners() {
  // Переключатель языка: Қазақша / Русский / English
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Вкладки навигации: Мессенджер / Мини-игры
  const tabMessengerBtn = document.getElementById("tab-messenger-btn");
  const tabGamesBtn = document.getElementById("tab-games-btn");

  if (tabMessengerBtn) {
    tabMessengerBtn.addEventListener("click", () => switchView("messenger"));
  }
  if (tabGamesBtn) {
    tabGamesBtn.addEventListener("click", () => switchView("games"));
  }

  // Кнопка переключения панели эмодзи в мессенджере
  const toggleEmojiBtn = document.getElementById("toggle-emoji-panel-btn");
  if (toggleEmojiBtn) {
    toggleEmojiBtn.addEventListener("click", toggleEmojiPanel);
  }

  // Фильтр категорий эмодзи
  const catChips = document.querySelectorAll(".category-chip");
  catChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterCategory(chip.dataset.category);
    });
  });

  // Режим «Слова / Идиомы»
  const modeWordsBtn = document.getElementById("mode-words-btn");
  const modeIdiomsBtn = document.getElementById("mode-idioms-btn");

  if (modeWordsBtn) modeWordsBtn.addEventListener("click", () => setMode("words"));
  if (modeIdiomsBtn) modeIdiomsBtn.addEventListener("click", () => setMode("idioms"));

  // Озвучивание карточки
  const speakTermBtn = document.getElementById("speak-term-btn");
  if (speakTermBtn) {
    speakTermBtn.addEventListener("click", () => {
      const item = EMOJI_DATABASE.find(e => e.id === state.selectedEmojiId) || EMOJI_DATABASE[0];
      const data = state.currentMode === "idioms" ? item.idiom : item.word;
      speakText(data.term, speakTermBtn);
    });
  }

  const speakExampleBtn = document.getElementById("speak-example-btn");
  if (speakExampleBtn) {
    speakExampleBtn.addEventListener("click", () => {
      const item = EMOJI_DATABASE.find(e => e.id === state.selectedEmojiId) || EMOJI_DATABASE[0];
      const data = state.currentMode === "idioms" ? item.idiom : item.word;
      speakText(data.example, speakExampleBtn);
    });
  }

  // Скорость речи
  const slowSpeedBtn = document.getElementById("speed-slow-btn");
  const normalSpeedBtn = document.getElementById("speed-normal-btn");

  if (slowSpeedBtn && normalSpeedBtn) {
    slowSpeedBtn.addEventListener("click", () => {
      state.speechSpeed = 0.75;
      slowSpeedBtn.classList.add("active");
      normalSpeedBtn.classList.remove("active");
      showToast(t("toastSpeedSlow"), "🐢");
    });

    normalSpeedBtn.addEventListener("click", () => {
      state.speechSpeed = 1.0;
      normalSpeedBtn.classList.add("active");
      slowSpeedBtn.classList.remove("active");
      showToast(t("toastSpeedNormal"), "🐰");
    });
  }

  // Вставка в сообщение
  const insertBtn = document.getElementById("insert-into-message-btn");
  if (insertBtn) insertBtn.addEventListener("click", insertCurrentExpression);

  // Избранное
  const favBtn = document.getElementById("toggle-favorite-btn");
  if (favBtn) favBtn.addEventListener("click", toggleCurrentFavorite);

  // Поле ввода сообщения
  if (messageInput) {
    messageInput.addEventListener("input", updateCharCounter);
  }

  const clearBtn = document.getElementById("clear-text-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (messageInput && messageInput.value.length > 0) {
        messageInput.value = "";
        updateCharCounter();
        messageInput.focus();
        showToast(t("toastCleared"), "🧹");
      }
    });
  }

  const copyBtn = document.getElementById("copy-text-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      if (!messageInput || messageInput.value.trim() === "") {
        showToast(t("toastEmptyMsg"), "⚠️");
        return;
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(messageInput.value);
        } else {
          messageInput.select();
          document.execCommand("copy");
        }
        showToast(t("toastCopied"), "✅");
      } catch (err) {
        showToast(t("toastCopyError"), "❌");
      }
    });
  }

  // Модальное окно избранного
  const openFavBtn = document.getElementById("open-favorites-btn");
  const closeFavBtn = document.getElementById("close-favorites-btn");
  const closeFavBottomBtn = document.getElementById("close-modal-bottom-btn");
  const clearFavBtn = document.getElementById("clear-favorites-btn");
  const favModal = document.getElementById("favorites-modal");

  if (openFavBtn) openFavBtn.addEventListener("click", openFavoritesModal);
  if (closeFavBtn) closeFavBtn.addEventListener("click", closeFavoritesModal);
  if (closeFavBottomBtn) closeFavBottomBtn.addEventListener("click", closeFavoritesModal);
  if (clearFavBtn) clearFavBtn.addEventListener("click", clearAllFavorites);

  if (favModal) {
    favModal.addEventListener("click", (e) => {
      if (e.target === favModal) closeFavoritesModal();
    });
  }

  // Кнопки запуска мини-игр из меню
  const btnGame1 = document.getElementById("start-game1-btn");
  const btnGame2 = document.getElementById("start-game2-btn");
  const btnGame3 = document.getElementById("start-game3-btn");
  const btnGameBack = document.getElementById("game-back-btn");

  if (btnGame1) btnGame1.addEventListener("click", () => startMiniGame(1));
  if (btnGame2) btnGame2.addEventListener("click", () => startMiniGame(2));
  if (btnGame3) btnGame3.addEventListener("click", () => startMiniGame(3));
  if (btnGameBack) btnGameBack.addEventListener("click", renderGamesMenu);
}

// Экспорт для отладки и тестов
if (typeof window !== "undefined") {
  window.state = state;
  window.setLanguage = setLanguage;
  window.switchView = switchView;
  window.startMiniGame = startMiniGame;
  window.filterCategory = filterCategory;
  window.insertCurrentExpression = insertCurrentExpression;
  window.toggleCurrentFavorite = toggleCurrentFavorite;
  window.isItemFavorite = isItemFavorite;
  window.loadFavoritesFromStorage = loadFavoritesFromStorage;
  window.saveFavoritesToStorage = saveFavoritesToStorage;
  window.updateCharCounter = updateCharCounter;
  window.speakText = speakText;
  window.selectEmoji = selectEmoji;
  window.setMode = setMode;
  window.t = t;
}
