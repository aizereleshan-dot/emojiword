// =========================================================
// EmojiWord — Модуль интернационализации (i18n)
// Поддерживаемые языки: Қазақша (kk - по умолчанию), Русский (ru), English (en)
// =========================================================

const I18N_UI = {
  kk: {
    // Название и подзаголовок
    appName: "EmojiWord",
    appSubtitle: "using emojis and idioms to make learning English more fun", // Строго на английском
    
    // Вкладки навигации
    tabMessenger: "💬 Хабарлама және сөздік",
    tabGames: "🎮 Мини-ойындар",
    myVocabulary: "Сөздігім",

    // Блок 1: Сообщение (как в мессенджере)
    step1Title: "Хабарлама жазу",
    placeholder: "Хабарламаңызды жазыңыз немесе 😊 батырмасын басып сөз таңдаңыз...",
    clearBtn: "🧹 Тазалау",
    copyBtn: "📋 Көшіру",
    toggleEmojiBtnOpen: "😊 Эмодзи тақтасын ашу",
    toggleEmojiBtnClose: "✕ Тақтаны жабу",
    charCountOne: "таңба",
    charCountFew: "таңба",
    charCountMany: "таңба",
    inputHint: "💡 Компьютерде немесе телефонның кәдімгі пернетақтасында теріңіз",

    // Категории эмодзи
    catAll: "Барлығы",
    catFaces: "Сезімдер мен жүздер",
    catGestures: "Қимылдар мен қолдар",
    catAnimals: "Жануарлар",
    catNature: "Табиғат пен ауа райы",
    catObjects: "Заттар мен белгілер",

    // Блок 2: Выбор эмодзи и режим
    step2Title: "Эмодзи таңдаңыз",
    modeWords: "Сөздер",
    modeIdioms: "Идиомалар",

    // Блок 3: Карточка выражения
    step3Title: "Таңдалған өрнек",
    badgeWord: "📖 Ағылшын сөзі (сын есім)",
    badgeIdiom: "✨ Ағылшын идиомасы",
    nuanceWordTitle: "Мағынасы мен қолданылуы:",
    nuanceIdiomTitle: "Идиоманың ерекшелігі мен мағынасы:",
    exampleTitle: "Өмірден мысал:",
    speakTerm: "Тыңдау",
    speakExample: "Мысалды тыңдау",
    speaking: "Оқылуда...",
    speedLabel: "Жылдамдық:",
    speedSlow: "🐢 Баяу (0.75x)",
    speedNormal: "🐰 Қалыпты (1x)",
    insertBtn: "Хабарламаға қосу",
    favAdd: "Сақтап алу",
    favSaved: "Сөздікте сақталды",
    speechNotAvailable: "Дауыстап оқу әзірше қолжетімді емес",

    // Мини-игры
    gamesTitle: "Ағылшын тілі мини-ойындары",
    gamesSubtitle: "Ойын арқылы сөздер мен идиомаларды тез әрі қызықты есте сақтаңыз!",
    game1Title: "1. Эмоцияны тап",
    game1Desc: "Ағылшын сөзін оқып, сәйкес келетін эмодзиді таңдаңыз.",
    game2Title: "2. Идиоманы құрастыр",
    game2Desc: "Шашылған сөздерден дұрыс ағылшын идиомасын жинаңыз.",
    game3Title: "3. Тыңдап таңда",
    game3Desc: "Ағылшынша сөзді тыңдап, оған сәйкес эмодзиді табыңыз.",
    btnPlay: "Ойнау",
    btnBackToGames: "← Мини-ойындарға оралу",
    btnNextQuestion: "Келесі сұрақ →",
    btnCheckAnswer: "Тексеру",
    btnResetWords: "Қайта бастау",
    btnPlayAgain: "Қайта ойнау",
    questionProgress: (cur, total) => `${total}-тен ${cur}-сұрақ`,
    listenWordPrompt: "Сөзді тыңдау үшін батырманы басыңыз:",
    listenWordSlow: "🐢 Баяу тыңдау",
    buildIdiomHint: "Сөздерді дұрыс ретпен басып жинаңыз:",
    roundFinished: "Раунд аяқталды!",
    scoreText: (score, total) => `Сіздің нәтижеңіз: ${total}-тен ${score} балл`,
    scoreGreat: "Керемет нәтиже! Барлық сөздерді жақсы меңгердіңіз! 🌟",
    scoreGood: "Жақсы! Тағы бір рет ойнап, нәтижені бекітіп көріңіз! 👍",
    scoreTryAgain: "Жарайсың! Біраз қайталап, тағы да көрейік! 💪",
    correctFeedback: "Дұрыс! Жарайсыз! 🎉",
    wrongFeedback: (correct) => `Дұрыс жауап: ${correct}`,

    // Модальное окно избранного
    modalTitle: "Таңдаулылар (Менің сөздігім)",
    modalEmpty: "Сөздігіңізде әзірше ештеңе жоқ. Кез келген карточкада «⭐ Сақтап алу» батырмасын басыңыз!",
    modalCountPrefix: "Сақталған сөздер саны:",
    modalClearAll: "🗑️ Сөздікті толық тазалау",
    modalDone: "Дайын",
    confirmClear: "Сөздіктегі барлық сөздерді өшіруді қалайсыз ба?",
    btnListen: "Тыңдау",
    btnInsert: "Хабарламаға қосу",
    btnRemove: "Өшіру",

    // Тосты и уведомления
    toastInserted: (term) => `«${term}» хабарламаға қосылды! ✍️`,
    toastFavAdded: (term) => `«${term}» сөздікке сақталды! ⭐`,
    toastFavRemoved: (term) => `«${term}» сөздіктен өшірілді! 🗑️`,
    toastCleared: "Хабарлама өрісі тазартылды 🧹",
    toastCopied: "Хабарлама алмасу буферіне көшірілді! 📋",
    toastCopyError: "Мәтінді көшіру мүмкін болмады ❌",
    toastSpeedSlow: "Аудио жылдамдығы: Баяу (0.75x) 🐢",
    toastSpeedNormal: "Аудио жылдамдығы: Қалыпты (1x) 🐰",
    toastEmptyMsg: "Алдымен хабарлама жазыңыз! ⚠️",
    toastFavCleared: "Сөздік толық тазартылды 🧹",
    speechNotSupported: "Бұл браузерде дауыстап оқу қолдау таппайды ⚠️",

    // Подвал
    footerInfo: "EmojiWord • using emojis and idioms to make learning English more fun",
    footerPrivacy: "Ешқандай хабарлама серверге жіберілмейді. Барлық деректер тек сіздің браузеріңізде сақталады."
  },

  ru: {
    // Название и подзаголовок
    appName: "EmojiWord",
    appSubtitle: "using emojis and idioms to make learning English more fun", // Строго на английском

    // Вкладки навигации
    tabMessenger: "💬 Сообщение и словарь",
    tabGames: "🎮 Мини-игры",
    myVocabulary: "Мой словарик",

    // Блок 1: Сообщение (как в мессенджере)
    step1Title: "Написание сообщения",
    placeholder: "Начни писать сообщение или нажми 😊 чтобы выбрать выражение...",
    clearBtn: "🧹 Очистить",
    copyBtn: "📋 Скопировать",
    toggleEmojiBtnOpen: "😊 Панель эмодзи",
    toggleEmojiBtnClose: "✕ Закрыть панель",
    charCountOne: "символ",
    charCountFew: "символа",
    charCountMany: "символов",
    inputHint: "💡 Печатай с обычной клавиатуры компьютера или телефона",

    // Категории эмодзи
    catAll: "Все",
    catFaces: "Эмоции и лица",
    catGestures: "Жесты и руки",
    catAnimals: "Животные",
    catNature: "Природа и стихии",
    catObjects: "Предметы и знаки",

    // Блок 2: Выбор эмодзи и режим
    step2Title: "Выбери эмодзи",
    modeWords: "Слова",
    modeIdioms: "Идиомы",

    // Блок 3: Карточка выражения
    step3Title: "Выбранное выражение",
    badgeWord: "📖 Английское слово (прилагательное)",
    badgeIdiom: "✨ Английская идиома",
    nuanceWordTitle: "Значение и употребление:",
    nuanceIdiomTitle: "В чём фишка идиомы и отличие от слова:",
    exampleTitle: "Пример в жизни:",
    speakTerm: "Послушать выражение",
    speakExample: "Послушать пример",
    speaking: "Говорит...",
    speedLabel: "Скорость:",
    speedSlow: "🐢 Медленно (0.75x)",
    speedNormal: "🐰 Обычная (1x)",
    insertBtn: "Вставить в сообщение",
    favAdd: "Запомнить",
    favSaved: "В словарике",
    speechNotAvailable: "Озвучивание временно недоступно",

    // Мини-игры
    gamesTitle: "Мини-игры на английском",
    gamesSubtitle: "Закрепляй английские слова и идиомы в интерактивных играх!",
    game1Title: "1. Угадай эмоцию",
    game1Desc: "Прочитай английское прилагательное и выбери верный эмодзи.",
    game2Title: "2. Собери идиому",
    game2Desc: "Собери английскую идиому из перемешанных слов по подсказке.",
    game3Title: "3. Слушай и выбирай",
    game3Desc: "Послушай английское слово на слух и найди подходящий эмодзи.",
    btnPlay: "Играть",
    btnBackToGames: "← К мини-играм",
    btnNextQuestion: "Следующий вопрос →",
    btnCheckAnswer: "Проверить",
    btnResetWords: "Сбросить слова",
    btnPlayAgain: "Играть ещё",
    questionProgress: (cur, total) => `Вопрос ${cur} из ${total}`,
    listenWordPrompt: "Нажми кнопку, чтобы послушать английское слово:",
    listenWordSlow: "🐢 Медленно",
    buildIdiomHint: "Нажимай на слова по порядку, чтобы собрать идиому:",
    roundFinished: "Раунд завершён!",
    scoreText: (score, total) => `Твой результат: ${score} из ${total}`,
    scoreGreat: "Великолепный результат! Все слова освоены на отлично! 🌟",
    scoreGood: "Хороший результат! Попробуй ещё раз для идеального счёта! 👍",
    scoreTryAgain: "Молодец за старание! Давай закрепим слова ещё разок! 💪",
    correctFeedback: "Верно! Отличная работа! 🎉",
    wrongFeedback: (correct) => `Правильный ответ: ${correct}`,

    // Модальное окно избранного
    modalTitle: "Мой словарик (Избранное)",
    modalEmpty: "В твоём словарике пока пусто. Нажми «⭐ Запомнить» на любой карточке, чтобы сохранить её сюда!",
    modalCountPrefix: "Сохранено выражений:",
    modalClearAll: "🗑️ Очистить весь словарик",
    modalDone: "Готово",
    confirmClear: "Точно очистить все слова из избранного?",
    btnListen: "Послушать",
    btnInsert: "Вставить в сообщение",
    btnRemove: "Удалить",

    // Тосты и уведомления
    toastInserted: (term) => `Выражение "${term}" вставлено! ✍️`,
    toastFavAdded: (term) => `Сохранено в словарик: "${term}" ⭐`,
    toastFavRemoved: (term) => `Удалено из словарика: "${term}" 🗑️`,
    toastCleared: "Поле сообщения очищено 🧹",
    toastCopied: "Сообщение скопировано в буфер обмена! 📋",
    toastCopyError: "Не удалось скопировать текст ❌",
    toastSpeedSlow: "Скорость озвучки: Медленная (0.75x) 🐢",
    toastSpeedNormal: "Скорость озвучки: Обычная (1x) 🐰",
    toastEmptyMsg: "Сначала напишите что-нибудь в сообщении! ⚠️",
    toastFavCleared: "Словарик очищен 🧹",
    speechNotSupported: "Озвучивание не поддерживается в этом браузере ⚠️",

    // Подвал
    footerInfo: "EmojiWord • using emojis and idioms to make learning English more fun",
    footerPrivacy: "Никакие сообщения не отправляются на сервер. Все данные хранятся только в вашем браузере."
  },

  en: {
    // Name and subtitle
    appName: "EmojiWord",
    appSubtitle: "using emojis and idioms to make learning English more fun",

    // Navigation tabs
    tabMessenger: "💬 Message & Vocabulary",
    tabGames: "🎮 Mini-Games",
    myVocabulary: "My Vocabulary",

    // Block 1: Message (Messenger style)
    step1Title: "Message composer",
    placeholder: "Start typing your message or tap 😊 to choose an expression...",
    clearBtn: "🧹 Clear",
    copyBtn: "📋 Copy",
    toggleEmojiBtnOpen: "😊 Open emoji panel",
    toggleEmojiBtnClose: "✕ Close panel",
    charCountOne: "character",
    charCountFew: "characters",
    charCountMany: "characters",
    inputHint: "💡 Type using your phone's or computer's standard keyboard",

    // Emoji categories
    catAll: "All",
    catFaces: "Faces & Emotions",
    catGestures: "Gestures & Hands",
    catAnimals: "Animals",
    catNature: "Nature & Weather",
    catObjects: "Objects & Symbols",

    // Block 2: Emoji selection and modes
    step2Title: "Select an emoji",
    modeWords: "Words",
    modeIdioms: "Idioms",

    // Block 3: Expression card
    step3Title: "Selected expression",
    badgeWord: "📖 English word (adjective)",
    badgeIdiom: "✨ English idiom",
    nuanceWordTitle: "Meaning and usage:",
    nuanceIdiomTitle: "How this idiom works & nuance:",
    exampleTitle: "Real-life example:",
    speakTerm: "Listen expression",
    speakExample: "Listen example",
    speaking: "Speaking...",
    speedLabel: "Speed:",
    speedSlow: "🐢 Slow (0.75x)",
    speedNormal: "🐰 Normal (1x)",
    insertBtn: "Insert into message",
    favAdd: "Bookmark",
    favSaved: "Bookmarked",
    speechNotAvailable: "Speech synthesis temporarily unavailable",

    // Mini-games
    gamesTitle: "English Mini-Games",
    gamesSubtitle: "Reinforce adjectives and idioms through fun, interactive games!",
    game1Title: "1. Guess the Emotion",
    game1Desc: "Read the English adjective and pick the matching emoji.",
    game2Title: "2. Build the Idiom",
    game2Desc: "Assemble the English idiom from scrambled word chips.",
    game3Title: "3. Listen & Choose",
    game3Desc: "Listen to the English word and choose the corresponding emoji.",
    btnPlay: "Play",
    btnBackToGames: "← Back to Mini-Games",
    btnNextQuestion: "Next Question →",
    btnCheckAnswer: "Check",
    btnResetWords: "Reset words",
    btnPlayAgain: "Play Again",
    questionProgress: (cur, total) => `Question ${cur} of ${total}`,
    listenWordPrompt: "Tap to listen to the English word:",
    listenWordSlow: "🐢 Listen slowly",
    buildIdiomHint: "Tap words in the correct sequence to build the idiom:",
    roundFinished: "Round Complete!",
    scoreText: (score, total) => `Your Score: ${score} out of ${total}`,
    scoreGreat: "Outstanding job! You mastered every expression! 🌟",
    scoreGood: "Great effort! Play again to achieve a perfect score! 👍",
    scoreTryAgain: "Good try! Practice a little more and try again! 💪",
    correctFeedback: "Correct! Wonderful work! 🎉",
    wrongFeedback: (correct) => `Correct answer: ${correct}`,

    // Favorites modal
    modalTitle: "My Vocabulary (Bookmarks)",
    modalEmpty: "Your vocabulary list is currently empty. Click «⭐ Bookmark» on any card to save it here!",
    modalCountPrefix: "Saved expressions:",
    modalClearAll: "🗑️ Clear vocabulary",
    modalDone: "Done",
    confirmClear: "Are you sure you want to remove all saved expressions?",
    btnListen: "Listen",
    btnInsert: "Insert into message",
    btnRemove: "Remove",

    // Toasts and alerts
    toastInserted: (term) => `Inserted "${term}" into message! ✍️`,
    toastFavAdded: (term) => `Saved "${term}" to vocabulary! ⭐`,
    toastFavRemoved: (term) => `Removed "${term}" from vocabulary! 🗑️`,
    toastCleared: "Message cleared 🧹",
    toastCopied: "Message copied to clipboard! 📋",
    toastCopyError: "Failed to copy text ❌",
    toastSpeedSlow: "Audio speed: Slow (0.75x) 🐢",
    toastSpeedNormal: "Audio speed: Normal (1x) 🐰",
    toastEmptyMsg: "Type something in your message first! ⚠️",
    toastFavCleared: "Vocabulary cleared 🧹",
    speechNotSupported: "Speech synthesis is not supported in this browser ⚠️",

    // Footer
    footerInfo: "EmojiWord • using emojis and idioms to make learning English more fun",
    footerPrivacy: "No messages are ever sent to a server. All data stays strictly in your browser."
  }
};

if (typeof window !== "undefined") {
  window.I18N_UI = I18N_UI;
}
