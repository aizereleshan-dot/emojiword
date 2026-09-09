// =========================================================
// EmojiWord — База данных для трёх мини-игр (45+ заданий)
// Игра 1: Угадай эмоцию (16 заданий)
// Игра 2: Собери идиому (16 заданий)
// Игра 3: Слушай и выбирай (16 заданий)
// =========================================================

const GAMES_DATABASE = {
  // =======================================================
  // ИГРА 1: «УГАДАЙ ЭМОЦИЮ» (GUESS THE EMOTION)
  // Игроку даётся английское прилагательное, он выбирает 1 из 4 эмодзи
  // =======================================================
  game1: [
    {
      id: "g1_1",
      word: "happy",
      transcription: "[ˈhæpi]",
      correctEmoji: "😊",
      options: ["😊", "😢", "😡", "😴"],
      translations: { kk: "бақытты, қуанышты", ru: "счастливый, радостный", en: "feeling pleasure or contentment" }
    },
    {
      id: "g1_2",
      word: "angry",
      transcription: "[ˈæŋɡri]",
      correctEmoji: "😡",
      options: ["😎", "😡", "😨", "🤩"],
      translations: { kk: "ашулы, ызалы", ru: "сердитый, злой", en: "feeling strong displeasure" }
    },
    {
      id: "g1_3",
      word: "sad",
      transcription: "[sæd]",
      correctEmoji: "😢",
      options: ["🥳", "😢", "😊", "💪"],
      translations: { kk: "көңілсіз, мұңды", ru: "грустный, печальный", en: "feeling sorrow or grief" }
    },
    {
      id: "g1_4",
      word: "strong",
      transcription: "[strɒŋ]",
      correctEmoji: "💪",
      options: ["🐢", "💪", "😴", "🌧️"],
      translations: { kk: "күшті, мықты", ru: "сильный, крепкий", en: "possessing great muscular power" }
    },
    {
      id: "g1_5",
      word: "busy",
      transcription: "[ˈbɪzi]",
      correctEmoji: "🐝",
      options: ["🐢", "🐝", "🦉", "🦁"],
      translations: { kk: "бос емес, тынымсыз", ru: "занятой, трудолюбивый", en: "actively engaged in work" }
    },
    {
      id: "g1_6",
      word: "brave",
      transcription: "[breɪv]",
      correctEmoji: "🦁",
      options: ["😨", "🦁", "😴", "🐒"],
      translations: { kk: "батыр, ержүрек", ru: "храбрый, отважный", en: "ready to face danger without fear" }
    },
    {
      id: "g1_7",
      word: "patient",
      transcription: "[ˈpeɪʃənt]",
      correctEmoji: "🐢",
      options: ["⚡", "🐢", "🔥", "🚀"],
      translations: { kk: "сабырлы, төзімді", ru: "терпеливый, сдержанный", en: "able to wait calmly without hurry" }
    },
    {
      id: "g1_8",
      word: "wise",
      transcription: "[waɪz]",
      correctEmoji: "🦉",
      options: ["🐒", "🦉", "🐝", "🦁"],
      translations: { kk: "дана, ақылгөй", ru: "мудрый, рассудительный", en: "having deep knowledge and sense" }
    },
    {
      id: "g1_9",
      word: "tired",
      transcription: "[ˈtaɪərd]",
      correctEmoji: "😴",
      options: ["⚡", "😴", "🥳", "🔥"],
      translations: { kk: "шаршаған, қалжыраған", ru: "уставший, сонный", en: "drained of energy, needing rest" }
    },
    {
      id: "g1_10",
      word: "cheerful",
      transcription: "[ˈtʃɪəfəl]",
      correctEmoji: "☀️",
      options: ["🌧️", "☀️", "🥶", "💔"],
      translations: { kk: "ақжарқын, көңілді", ru: "жизнерадостный, лучезарный", en: "visibly joyful and bright" }
    },
    {
      id: "g1_11",
      word: "gloomy",
      transcription: "[ˈɡluːmi]",
      correctEmoji: "🌧️",
      options: ["☀️", "🌧️", "🎉", "⭐"],
      translations: { kk: "күңгірт, тұнжыраған", ru: "хмурый, пасмурный", en: "dark, overcast, dim" }
    },
    {
      id: "g1_12",
      word: "freezing",
      transcription: "[ˈfriːzɪŋ]",
      correctEmoji: "🥶",
      options: ["🔥", "🥶", "☀️", "😎"],
      translations: { kk: "сақылдаған сары аяз", ru: "ледяной, замерзающий", en: "bitingly cold, icy" }
    },
    {
      id: "g1_13",
      word: "accurate",
      transcription: "[ˈækjərət]",
      correctEmoji: "🎯",
      options: ["🐒", "🎯", "🌧️", "😴"],
      translations: { kk: "дәл, қатесіз", ru: "точный, меткий", en: "exact, hitting the target" }
    },
    {
      id: "g1_14",
      word: "festive",
      transcription: "[ˈfestɪv]",
      correctEmoji: "🎉",
      options: ["😢", "🎉", "🤐", "🌧️"],
      translations: { kk: "мерекелік, салтанатты", ru: "праздничный, нарядный", en: "joyous, celebrating an event" }
    },
    {
      id: "g1_15",
      word: "generous",
      transcription: "[ˈdʒenərəs]",
      correctEmoji: "🎁",
      options: ["💔", "🎁", "😡", "🤐"],
      translations: { kk: "жомарт, кеңпейіл", ru: "щедрый, великодушный", en: "giving and sharing freely" }
    },
    {
      id: "g1_16",
      word: "heartbroken",
      transcription: "[ˈhɑːrtˌbroʊkən]",
      correctEmoji: "💔",
      options: ["❤️", "💔", "👍", "🎉"],
      translations: { kk: "жүрегі жаралы, қатты қайғырған", ru: "убитый горем, сокрушённый", en: "deeply sorrowful from loss" }
    }
  ],

  // =======================================================
  // ИГРА 2: «СОБЕРИ ИДИОМУ» (BUILD THE IDIOM)
  // Игроку даётся перевод/значение и перемешанные слова
  // =======================================================
  game2: [
    {
      id: "g2_1",
      targetIdiom: "on cloud nine",
      words: ["on", "cloud", "nine"],
      translations: {
        kk: "Төбесі көкке жеткендей қуану",
        ru: "На седьмом небе от счастья",
        en: "Extremely happy and joyful"
      },
      explanation: {
        kk: "Үлкен жеңіс пен асқақ арман орындалғандағы зор қуаныш.",
        ru: "Состояние восторга и счастья после большой победы.",
        en: "Used for moments of pure euphoria and triumph."
      },
      example: "When she won first prize, she was on cloud nine!",
      exampleTranslation: {
        kk: "Ол бірінші орын алғанда, төбесі көкке жеткендей қуанды!",
        ru: "Когда она взяла первый приз, она была на седьмом небе от счастья!",
        en: "Winning first prize made her completely overjoyed!"
      }
    },
    {
      id: "g2_2",
      targetIdiom: "see red",
      words: ["see", "red"],
      translations: {
        kk: "Қаны қайнау, көзі қанталау",
        ru: "Прийти в ярость",
        en: "Become completely furious"
      },
      explanation: {
        kk: "Қызыл матаны көрген бұқадай ашудан өзін ұстай алмай қалу.",
        ru: "Потеря самообладания от сильного гнева.",
        en: "A sudden blind explosion of immense anger."
      },
      example: "When he was insulted, he just saw red.",
      exampleTranslation: {
        kk: "Оны ренжіткенде, оның қаны қайнап кетті.",
        ru: "Когда его оскорбили, он просто пришёл в ярость.",
        en: "The insult provoked an instant surge of anger."
      }
    },
    {
      id: "g2_3",
      targetIdiom: "feel blue",
      words: ["feel", "blue"],
      translations: {
        kk: "Көңілі құлазу, салы суға кету",
        ru: "Грустить, хандрить",
        en: "Feel mild melancholy"
      },
      explanation: {
        kk: "Ағылшын мәдениетінде көк түс тыныш мұңды білдіреді.",
        ru: "Синий цвет ассоциируется с дождливой тоской и хандрой.",
        en: "Blue symbolizes quiet, pensive rainy-day gloom."
      },
      example: "Whenever it rains all day, I feel blue.",
      exampleTranslation: {
        kk: "Күні бойы жаңбыр жауса, көңілім құлазиды.",
        ru: "Всякий раз, когда идёт дождь, я хандрю.",
        en: "Rainy days make me feel quietly downcast."
      }
    },
    {
      id: "g2_4",
      targetIdiom: "cool as a cucumber",
      words: ["cool", "as", "a", "cucumber"],
      translations: {
        kk: "Мыңқ етпейтін сабырлы",
        ru: "Спокоен как удав",
        en: "Unusually calm and relaxed"
      },
      explanation: {
        kk: "Қияр ыстықта да салқын болады; ерекше сабырлық нышаны.",
        ru: "Огурец внутри прохладный в жару; символ хладнокровия.",
        en: "Cucumbers stay cool inside even during warm weather."
      },
      example: "During the championship, he was as cool as a cucumber.",
      exampleTranslation: {
        kk: "Чемпионатта ол мыңқ етпейтін сабырлы болды.",
        ru: "На чемпионате он был спокоен как удав.",
        en: "During the finals, he kept total emotional composure."
      }
    },
    {
      id: "g2_5",
      targetIdiom: "as strong as an ox",
      words: ["as", "strong", "as", "an", "ox"],
      translations: {
        kk: "Өгіздей күші бар, алып күшті",
        ru: "Сильный как бык",
        en: "Extremely strong physically"
      },
      explanation: {
        kk: "Өгіз — зор қара күш пен төзімділіктің белгісі.",
        ru: "Бык — традиционный символ богатырской силы и мощи.",
        en: "Oxen symbolize immense working endurance and power."
      },
      example: "After working on the farm, he was as strong as an ox.",
      exampleTranslation: {
        kk: "Еңбектен кейін ол өгіздей күшті болды.",
        ru: "После работы на ферме он стал сильным как бык.",
        en: "Hard physical work made him extremely robust."
      }
    },
    {
      id: "g2_6",
      targetIdiom: "as busy as a bee",
      words: ["as", "busy", "as", "a", "bee"],
      translations: {
        kk: "Арадай тынымсыз, еңбекқор",
        ru: "Трудолюбивый как пчёлка",
        en: "Extremely hardworking and active"
      },
      explanation: {
        kk: "Гүлден бал жинайтын арадай тынбай еңбек ету.",
        ru: "Пчёлы без устали собирают мёд; символ трудолюбия.",
        en: "Bees work non-stop collecting sweet nectar."
      },
      example: "Before the festival, we were as busy as bees.",
      exampleTranslation: {
        kk: "Мереке алдында арадай тынымсыз болдық.",
        ru: "Перед праздником мы трудились как пчёлки.",
        en: "We were working hard with non-stop hustle."
      }
    },
    {
      id: "g2_7",
      targetIdiom: "as brave as a lion",
      words: ["as", "brave", "as", "a", "lion"],
      translations: {
        kk: "Арыстандай батыр әрі қайсар",
        ru: "Храбрый как лев",
        en: "Incredibly courageous and fearless"
      },
      explanation: {
        kk: "Аң патшасы арыстандай еш нәрседен тайсалмайтын жүректілік.",
        ru: "Лев — древний символ благородного бесстрашия.",
        en: "The lion stands as the universal symbol of courage."
      },
      example: "The rescuer was as brave as a lion.",
      exampleTranslation: {
        kk: "Құтқарушы арыстандай қайсар болды.",
        ru: "Спасатель держался храбро как лев.",
        en: "The brave rescuer showed absolute courage."
      }
    },
    {
      id: "g2_8",
      targetIdiom: "break the ice",
      words: ["break", "the", "ice"],
      translations: {
        kk: "Танысуды бастап кету, жатырқауды жеңу",
        ru: "Растопить лёд, разрядить обстановку",
        en: "Ease social awkwardness"
      },
      explanation: {
        kk: "Жаңа ортадағы алғашқы ұялу мен тосырқауды жеңу.",
        ru: "Устранить неловкость при первом знакомстве.",
        en: "Start a conversation to eliminate awkward tension."
      },
      example: "A funny game helped break the ice.",
      exampleTranslation: {
        kk: "Қызықты ойын танысуды бастауға көмектесті.",
        ru: "Забавная игра помогла растопить лёд.",
        en: "A playful game melted away all the tension."
      }
    },
    {
      id: "g2_9",
      targetIdiom: "save for a rainy day",
      words: ["save", "for", "a", "rainy", "day"],
      translations: {
        kk: "Қиын күндерге қор жинау",
        ru: "Откладывать на чёрный день",
        en: "Save money for future needs"
      },
      explanation: {
        kk: "Болашақта күтпеген қиындықтарға ақша сақтап қою.",
        ru: "Мудрая привычка копить средства на непредвиденные случаи.",
        en: "Putting aside reserves against unexpected trouble."
      },
      example: "It is wise to save for a rainy day.",
      exampleTranslation: {
        kk: "Қиын күнге қор жинаған даналық.",
        ru: "Мудро откладывать деньги на всякий случай.",
        en: "Saving some funds prepares you for emergencies."
      }
    },
    {
      id: "g2_10",
      targetIdiom: "a ray of sunshine",
      words: ["a", "ray", "of", "sunshine"],
      translations: {
        kk: "Күннің шуағындай, өмірдің қуанышы",
        ru: "Лучик солнца, радость для всех",
        en: "A person bringing warmth and happiness"
      },
      explanation: {
        kk: "Өзінің мейірімімен барлық адамға көңіл сыйлайтын жан.",
        ru: "Человек, который дарит всем улыбки и радость.",
        en: "Someone whose warm presence brightens everyone's mood."
      },
      example: "The cheerful girl is a ray of sunshine.",
      exampleTranslation: {
        kk: "Көңілді қыз — нағыз күннің шуағындай.",
        ru: "Эта весёлая девочка — настоящий лучик солнца.",
        en: "Her cheerful spirit brings sunshine to all."
      }
    },
    {
      id: "g2_11",
      targetIdiom: "have a heart of gold",
      words: ["have", "a", "heart", "of", "gold"],
      translations: {
        kk: "Алтын жүректі, өте мейірімді",
        ru: "Иметь золотое сердце",
        en: "Be exceptionally generous and kind"
      },
      explanation: {
        kk: "Шынайы мейірім мен қайырымдылыққа толы адал адам.",
        ru: "Искреннее бескорыстное человеколюбие и забота.",
        en: "Having pure goodwill and compassion for others."
      },
      example: "Grandpa has a heart of gold.",
      exampleTranslation: {
        kk: "Атамның жүрегі алтыннан жасалғандай мейірімді.",
        ru: "У дедушки поистине золотое сердце.",
        en: "Grandpa is full of selfless warmth."
      }
    },
    {
      id: "g2_12",
      targetIdiom: "a broken heart",
      words: ["a", "broken", "heart"],
      translations: {
        kk: "Жаралы жүрек, ауыр қасірет",
        ru: "Разбитое сердце",
        en: "Deep sorrow and emotional pain"
      },
      explanation: {
        kk: "Айрылысу мен үміттің үзілуінен туатын жан мұңы.",
        ru: "Символ глубокой печали от потери или разлуки.",
        en: "Poetic expression for emotional grief or lost love."
      },
      example: "Time slowly heals a broken heart.",
      exampleTranslation: {
        kk: "Уақыт жаралы жүректі біртіндеп емдейді.",
        ru: "Время постепенно лечит разбитое сердце.",
        en: "Time gradually brings healing to sorrow."
      }
    },
    {
      id: "g2_13",
      targetIdiom: "reach for the stars",
      words: ["reach", "for", "the", "stars"],
      translations: {
        kk: "Биік шыңдарды бағындыру, асқақ армандау",
        ru: "Тянуться к звёздам, стремиться к вершинам",
        en: "Aim for grand ambitions"
      },
      explanation: {
        kk: "Кішігірім мақсатпен тоқтамай, биікке қол созу.",
        ru: "Ставить великие цели и смело идти к ним.",
        en: "Dreaming big and working boldly toward your goals."
      },
      example: "Work hard and reach for the stars!",
      exampleTranslation: {
        kk: "Еңбек етіп, биік шыңдарға ұмтыл!",
        ru: "Усердно трудись и тянись к звёздам!",
        en: "Apply yourself and aim for wonderful milestones!"
      }
    },
    {
      id: "g2_14",
      targetIdiom: "hit the bullseye",
      words: ["hit", "the", "bullseye"],
      translations: {
        kk: "Дәл нысанаға тигізу, нақ басу",
        ru: "Попасть в яблочко, в самую точку",
        en: "Hit the exact truth or target"
      },
      explanation: {
        kk: "Сұрақтың нағыз түйінін дәл әрі дұрыс табу.",
        ru: "Дать абсолютно верный, точный ответ.",
        en: "Formulating the exact correct thought on target."
      },
      example: "Your clever answer hit the bullseye.",
      exampleTranslation: {
        kk: "Сенің тапқыр жауабың нақ тиді.",
        ru: "Твой умный ответ попал прямо в яблочко.",
        en: "Your smart answer hit the exact mark."
      }
    },
    {
      id: "g2_15",
      targetIdiom: "paint the town red",
      words: ["paint", "the", "town", "red"],
      translations: {
        kk: "Той-думан жасау, дуылдатып тойлау",
        ru: "Праздновать на всю катушку",
        en: "Celebrate enthusiastically"
      },
      explanation: {
        kk: "Үлкен жеңісті достармен думандатып тойлау.",
        ru: "Шумно и радостно праздновать триумф или выпускной.",
        en: "Going out to have a vibrant celebration."
      },
      example: "After graduation, they painted the town red.",
      exampleTranslation: {
        kk: "Оқуды бітірген соң, олар дуылдатып тойлады.",
        ru: "После выпуска они праздновали на всю катушку.",
        en: "Finishing school sparked an all-night celebration."
      }
    },
    {
      id: "g2_16",
      targetIdiom: "the key to success",
      words: ["the", "key", "to", "success"],
      translations: {
        kk: "Табыстың кілті",
        ru: "Ключ к успеху",
        en: "The essential secret to achievement"
      },
      explanation: {
        kk: "Жетістікке жетудің ең негізгі түйінді қасиеті.",
        ru: "Главный фактор достижения любых высоких результатов.",
        en: "The fundamental ingredient for lasting accomplishments."
      },
      example: "Patience is the key to success.",
      exampleTranslation: {
        kk: "Сабырлылық — нағыз табыстың кілті.",
        ru: "Терпение — главный ключ к успеху.",
        en: "Patience unlocks great achievements."
      }
    }
  ],

  // =======================================================
  // ИГРА 3: «СЛУШАЙ И ВЫБИРАЙ» (LISTEN & CHOOSE)
  // Слово скрыто, озвучивается через Web Speech API (en-US),
  // игрок выбирает 1 из 4 эмодзи
  // =======================================================
  game3: [
    {
      id: "g3_1",
      word: "happy",
      transcription: "[ˈhæpi]",
      correctEmoji: "😊",
      options: ["😊", "😢", "😡", "😴"],
      translations: { kk: "бақытты, қуанышты", ru: "счастливый, радостный", en: "feeling pleasure" }
    },
    {
      id: "g3_2",
      word: "angry",
      transcription: "[ˈæŋɡri]",
      correctEmoji: "😡",
      options: ["😎", "😡", "😨", "🤩"],
      translations: { kk: "ашулы, ызалы", ru: "сердитый, злой", en: "feeling displeasure" }
    },
    {
      id: "g3_3",
      word: "sad",
      transcription: "[sæd]",
      correctEmoji: "😢",
      options: ["🥳", "😢", "😊", "💪"],
      translations: { kk: "көңілсіз, мұңды", ru: "грустный, печальный", en: "feeling sorrow" }
    },
    {
      id: "g3_4",
      word: "strong",
      transcription: "[strɒŋ]",
      correctEmoji: "💪",
      options: ["🐢", "💪", "😴", "🌧️"],
      translations: { kk: "күшті, мықты", ru: "сильный, крепкий", en: "possessing strength" }
    },
    {
      id: "g3_5",
      word: "busy",
      transcription: "[ˈbɪzi]",
      correctEmoji: "🐝",
      options: ["🐢", "🐝", "🦉", "🦁"],
      translations: { kk: "бос емес, тынымсыз", ru: "занятой, активный", en: "actively working" }
    },
    {
      id: "g3_6",
      word: "brave",
      transcription: "[breɪv]",
      correctEmoji: "🦁",
      options: ["😨", "🦁", "😴", "🐒"],
      translations: { kk: "батыр, ержүрек", ru: "храбрый, смелый", en: "fearless in peril" }
    },
    {
      id: "g3_7",
      word: "patient",
      transcription: "[ˈpeɪʃənt]",
      correctEmoji: "🐢",
      options: ["⚡", "🐢", "🔥", "🚀"],
      translations: { kk: "сабырлы, төзімді", ru: "терпеливый", en: "waiting calmly" }
    },
    {
      id: "g3_8",
      word: "wise",
      transcription: "[waɪz]",
      correctEmoji: "🦉",
      options: ["🐒", "🦉", "🐝", "🦁"],
      translations: { kk: "дана, ақылгөй", ru: "мудрый", en: "having wisdom" }
    },
    {
      id: "g3_9",
      word: "tired",
      transcription: "[ˈtaɪərd]",
      correctEmoji: "😴",
      options: ["⚡", "😴", "🥳", "🔥"],
      translations: { kk: "шаршаған, ұйқылы", ru: "уставший", en: "needing rest" }
    },
    {
      id: "g3_10",
      word: "cheerful",
      transcription: "[ˈtʃɪəfəl]",
      correctEmoji: "☀️",
      options: ["🌧️", "☀️", "🥶", "💔"],
      translations: { kk: "ақжарқын, көңілді", ru: "жизнерадостный", en: "bright and optimistic" }
    },
    {
      id: "g3_11",
      word: "gloomy",
      transcription: "[ˈɡluːmi]",
      correctEmoji: "🌧️",
      options: ["☀️", "🌧️", "🎉", "⭐"],
      translations: { kk: "күңгірт, тұнжыраған", ru: "пасмурный", en: "overcast and dark" }
    },
    {
      id: "g3_12",
      word: "freezing",
      transcription: "[ˈfriːzɪŋ]",
      correctEmoji: "🥶",
      options: ["🔥", "🥶", "☀️", "😎"],
      translations: { kk: "сақылдаған сары аяз", ru: "ледяной мороз", en: "bitingly cold" }
    },
    {
      id: "g3_13",
      word: "accurate",
      transcription: "[ˈækjərət]",
      correctEmoji: "🎯",
      options: ["🐒", "🎯", "🌧️", "😴"],
      translations: { kk: "дәл, қатесіз", ru: "точный, меткий", en: "exact and precise" }
    },
    {
      id: "g3_14",
      word: "festive",
      transcription: "[ˈfestɪv]",
      correctEmoji: "🎉",
      options: ["😢", "🎉", "🤐", "🌧️"],
      translations: { kk: "мерекелік", ru: "праздничный", en: "celebratory and joyous" }
    },
    {
      id: "g3_15",
      word: "generous",
      transcription: "[ˈdʒenərəs]",
      correctEmoji: "🎁",
      options: ["💔", "🎁", "😡", "🤐"],
      translations: { kk: "жомарт, кеңпейіл", ru: "щедрый", en: "giving and sharing" }
    },
    {
      id: "g3_16",
      word: "heartbroken",
      transcription: "[ˈhɑːrtˌbroʊkən]",
      correctEmoji: "💔",
      options: ["❤️", "💔", "👍", "🎉"],
      translations: { kk: "қайғырған, жаралы", ru: "убитый горем", en: "sorrowful from loss" }
    }
  ]
};

if (typeof window !== "undefined") {
  window.GAMES_DATABASE = GAMES_DATABASE;
}
