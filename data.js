// =========================================================
// EmojiWord — База данных эмодзи, слов и идиом (42 эмодзи)
// Категории: faces, gestures, animals, nature, objects
// Все изучаемые термины и примеры предложений СТРОГО на английском!
// =========================================================

const EMOJI_DATABASE = [
  // =======================================================
  // 1. СЕЗІМДЕР МЕН ЖҮЗДЕР (FACES & EMOTIONS)
  // =======================================================
  {
    id: "happy",
    emoji: "😊",
    category: "faces",
    labels: { kk: "Қуаныш", ru: "Радость", en: "Joy" },
    word: {
      term: "happy",
      transcription: "[ˈhæpi]",
      partOfSpeech: "adjective",
      example: "I am so happy to see my best friends today.",
      translations: {
        kk: { translation: "бақытты, қуанышты", nuance: "Жақсы көңіл-күй мен жеңіл қуанышты білдіретін негізгі сөз.", exampleTranslation: "Бүгін ең жақын достарымды көргеніме өте қуаныштымын." },
        ru: { translation: "счастливый, радостный", nuance: "Основное слово для выражения хорошего настроения и радости.", exampleTranslation: "Я так счастлив(а) видеть своих лучших друзей сегодня." },
        en: { translation: "feeling pleasure and contentment", nuance: "The most common everyday word for expressing good spirits.", exampleTranslation: "I feel great because I am spending time with close friends." }
      }
    },
    idiom: {
      term: "on cloud nine",
      transcription: "[ɒn klaʊd naɪn]",
      partOfSpeech: "idiom",
      example: "When she won the art contest, she was on cloud nine!",
      translations: {
        kk: { translation: "төбесі көкке жеткендей қуану", literalMeaning: "тура мағынасы: «тоғызыншы бұлтта болу»", nuance: "Қарапайым қуаныштан әлдеқайда зор, шаттыққа толы жеңіс пен триумф сәтінде қолданылады.", exampleTranslation: "Сурет байқауында жеңіске жеткенде, оның төбесі көкке жеткендей қуанды!" },
        ru: { translation: "на седьмом небе от счастья", literalMeaning: "буквально: «на девятом облаке»", nuance: "Передаёт состояние наивысшего восторга, триумфа или исполнения заветной мечты.", exampleTranslation: "Когда она победила в конкурсе рисунков, она была на седьмом небе от счастья!" },
        en: { translation: "extremely happy, thrilled and euphoric", literalMeaning: "literally: floating on cloud number nine", nuance: "Used for extraordinary moments of euphoria that go far beyond regular happiness.", exampleTranslation: "Winning first place gave her unforgettable, breathtaking delight!" }
      }
    }
  },
  {
    id: "sad",
    emoji: "😢",
    category: "faces",
    labels: { kk: "Мұң", ru: "Грусть", en: "Sadness" },
    word: {
      term: "sad",
      transcription: "[sæd]",
      partOfSpeech: "adjective",
      example: "He felt sad because his team lost the match.",
      translations: {
        kk: { translation: "көңілсіз, мұңды", nuance: "Кез келген сәтсіздіктен кейінгі кәдімгі мұң.", exampleTranslation: "Командасы жеңіліп қалған соң, ол көңілсіз болды." },
        ru: { translation: "грустный, печальный", nuance: "Прямое слово для описания печали или огорчения.", exampleTranslation: "Ему было грустно, потому что его команда проиграла матч." },
        en: { translation: "feeling sorrow or grief", nuance: "The standard word to express unhappiness or disappointment.", exampleTranslation: "The loss made him experience sorrow." }
      }
    },
    idiom: {
      term: "feel blue",
      transcription: "[fiːl bluː]",
      partOfSpeech: "idiom",
      example: "Whenever it rains all day, I often feel blue.",
      translations: {
        kk: { translation: "көңілі құлазу, салы суға кету", literalMeaning: "тура мағынасы: «көк түсті сезіну»", nuance: "Ағылшын мәдениетінде көк түс жабырқаулық пен жаңбырлы күнгі тыныш меланхолияны білдіреді.", exampleTranslation: "Күні бойы жаңбыр жауса, көңілім құлазып сала береді." },
        ru: { translation: "грустить, хандрить", literalMeaning: "буквально: «чувствовать синий цвет»", nuance: "В англоязычной культуре синий ассоциируется с тихой дождливой тоской и хандрой.", exampleTranslation: "Всякий раз, когда весь день льёт дождь, я немного хандрю." },
        en: { translation: "feeling mild melancholy or quiet sadness", literalMeaning: "literally: experiencing the color blue", nuance: "Blue traditionally represents rainy, pensive, low-energy gloom.", exampleTranslation: "Dreary weather naturally invites a quiet, pensive mood." }
      }
    }
  },
  {
    id: "angry",
    emoji: "😡",
    category: "faces",
    labels: { kk: "Ашу", ru: "Злость", en: "Anger" },
    word: {
      term: "angry",
      transcription: "[ˈæŋɡri]",
      partOfSpeech: "adjective",
      example: "She was angry when someone broke her headphones.",
      translations: {
        kk: { translation: "ашулы, ызалы", nuance: "Біреудің әрекетіне наразылық білдіретін жалпы ашу.", exampleTranslation: "Біреу құлаққабын сындырып алғанда, ол ашуланды." },
        ru: { translation: "сердитый, злой", nuance: "Стандартное обозначение недовольства и раздражения.", exampleTranslation: "Она рассердилась, когда кто-то сломал её наушники." },
        en: { translation: "feeling strong annoyance or hostility", nuance: "The common word when something provokes irritation or displeasure.", exampleTranslation: "Damage to her belongings provoked strong annoyance." }
      }
    },
    idiom: {
      term: "see red",
      transcription: "[siː red]",
      partOfSpeech: "idiom",
      example: "When the bully lied to his face, he saw red.",
      translations: {
        kk: { translation: "көзі қанталау, қаны қайнау", literalMeaning: "тура мағынасы: «қызыл түсті көру»", nuance: "Қызыл матаны көрген бұқа сияқты өз-өзін ұстай алмай, қатты ашулану.", exampleTranslation: "Бұзақы көзіне қарап өтірік айтқанда, оның қаны қайнап кетті." },
        ru: { translation: "прийти в ярость, потерять самообладание", literalMeaning: "буквально: «видеть красный цвет»", nuance: "Образ разъярённого быка: человек так зол, что буквально теряет контроль над собой.", exampleTranslation: "Когда хулиган соврал прямо в глаза, он пришёл в ярость." },
        en: { translation: "become suddenly furious or completely enraged", literalMeaning: "literally: seeing red before your eyes", nuance: "Describes an explosive spike of anger where self-control momentarily vanishes.", exampleTranslation: "Blatant deceit caused an instant, blinding surge of fury." }
      }
    }
  },
  {
    id: "nervous",
    emoji: "😨",
    category: "faces",
    labels: { kk: "Қобалжу", ru: "Волнение", en: "Worry" },
    word: {
      term: "nervous",
      transcription: "[ˈnɜːrvəs]",
      partOfSpeech: "adjective",
      example: "I always feel nervous before speaking on stage.",
      translations: {
        kk: { translation: "қобалжулы, алаңдаулы", nuance: "Жауапты сынақ алдындағы табиғи қобалжу.", exampleTranslation: "Сахнаға шығып сөйлемес бұрын әрдайым қатты қобалжимын." },
        ru: { translation: "нервный, взволнованный", nuance: "Естественное чувство тревоги перед важным испытанием.", exampleTranslation: "Я всегда нервничаю перед выходом на сцену." },
        en: { translation: "tense, uneasy, or apprehensive", nuance: "A normal sense of worry before an audition, exam, or public talk.", exampleTranslation: "Public speaking causes anxious tension beforehand." }
      }
    },
    idiom: {
      term: "have butterflies in your stomach",
      transcription: "[hæv ˈbʌtəflaɪz ɪn jɔːr ˈstʌmək]",
      partOfSpeech: "idiom",
      example: "I had butterflies in my stomach before the big final test.",
      translations: {
        kk: { translation: "жүрегі аузына тығылу, іші қылп ету", literalMeaning: "тура мағынасы: «асқазанда көбелектер ұшу»", nuance: "Емтихан немесе жарыс алдындағы қытықтайтын, толқынысты толқу сезімі.", exampleTranslation: "Үлкен қорытынды сынақ алдында жүрегім аузыма тығылды." },
        ru: { translation: "душа замирает от волнения (бабочки в животе)", literalMeaning: "буквально: «иметь бабочек в животе»", nuance: "Щекочущее чувство приятного или нервного трепета перед важным стартом.", exampleTranslation: "Перед главным тестом у меня всё внутри трепетало от волнения." },
        en: { translation: "a fluttery, nervous sensation in the abdomen", literalMeaning: "literally: feeling wings fluttering inside", nuance: "The recognizable physical flutter of anticipation and anxiety before an event.", exampleTranslation: "I experienced intense nervous flutter before my test began." }
      }
    }
  },
  {
    id: "tired",
    emoji: "😴",
    category: "faces",
    labels: { kk: "Шаршау", ru: "Усталость", en: "Tiredness" },
    word: {
      term: "tired",
      transcription: "[ˈtaɪərd]",
      partOfSpeech: "adjective",
      example: "After running for an hour, the kids were tired.",
      translations: {
        kk: { translation: "шаршаған, қалжыраған", nuance: "Ұзақ қимыл-қозғалыстан кейінгі кәдімгі шаршау.", exampleTranslation: "Бір сағат жүгірген соң, балалар шаршап қалды." },
        ru: { translation: "уставший, утомлённый", nuance: "Обычная физическая нехватка сил после нагрузки.", exampleTranslation: "После часовой пробежки дети сильно устали." },
        en: { translation: "drained of energy, needing rest", nuance: "Common exhaustion following physical or mental exertion.", exampleTranslation: "An hour of running left the children exhausted." }
      }
    },
    idiom: {
      term: "be out like a light",
      transcription: "[biː aʊt laɪk ə laɪt]",
      partOfSpeech: "idiom",
      example: "His head hit the pillow and he was out like a light.",
      translations: {
        kk: { translation: "жастыққа басы тиісімен ұйықтап кету", literalMeaning: "тура мағынасы: «шам сөнгендей өшіп қалу»", nuance: "Адамның көзді ашып-жұмғанша қас-қағым сәтте терең ұйқыға кетуі.", exampleTranslation: "Басы жастыққа тиісімен-ақ ол көз ілеспей ұйықтап кетті." },
        ru: { translation: "мгновенно вырубиться, уснуть как убитый", literalMeaning: "буквально: «погаснуть как свет»", nuance: "Очень быстрое засыпание без ворочания в кровати.", exampleTranslation: "Его голова коснулась подушки, и он тут же вырубился." },
        en: { translation: "fall into deep sleep immediately", literalMeaning: "literally: switching off rapidly like a lamp", nuance: "Drifting into profound slumber in mere seconds.", exampleTranslation: "He sank into deep sleep the instant he rested his head." }
      }
    }
  },
  {
    id: "calm",
    emoji: "😎",
    category: "faces",
    labels: { kk: "Сабыр", ru: "Спокойствие", en: "Composure" },
    word: {
      term: "calm",
      transcription: "[kɑːm]",
      partOfSpeech: "adjective",
      example: "She stayed calm and solved the difficult puzzle.",
      translations: {
        kk: { translation: "сабырлы, салмақты", nuance: "Асығыссыз, байсалды көңіл-күй.", exampleTranslation: "Ол сабырлы күйін сақтап, күрделі жұмбақты шешті." },
        ru: { translation: "спокойный, невозмутимый", nuance: "Мирное, уравновешенное состояние без паники.", exampleTranslation: "Она сохраняла спокойствие и решила сложную головоломку." },
        en: { translation: "serene, peaceful, unruffled", nuance: "A balanced state of mind unaffected by rush or stress.", exampleTranslation: "She stayed composed while unraveling the tricky riddle." }
      }
    },
    idiom: {
      term: "cool as a cucumber",
      transcription: "[kuːl æz ə ˈkjuːkʌmbə]",
      partOfSpeech: "idiom",
      example: "During the championship, the goalie was as cool as a cucumber.",
      translations: {
        kk: { translation: "мыңқ етпейтін сабырлы, сары алтындай сабырлы", literalMeaning: "тура мағынасы: «қиярдай салқын болу»", nuance: "Қиярдың іші аптап ыстықта да салқын болады. Бәрі шулағанда саспайтын ерік-жігер.", exampleTranslation: "Чемпионат кезінде қақпашымыз мыңқ етпей, өте сабырлы болды." },
        ru: { translation: "спокоен как удав, хладнокровный", literalMeaning: "буквально: «прохладный как огурец»", nuance: "Огурец внутри остаётся прохладным даже на жаре. Символ железного хладнокровия.", exampleTranslation: "Во время финала чемпионата наш вратарь был спокоен как удав." },
        en: { translation: "remarkably unbothered and composed under stress", literalMeaning: "literally: keeping internal coolness like a cucumber", nuance: "Remaining totally self-possessed when surrounding circumstances are chaotic.", exampleTranslation: "The keeper remained completely unflustered during the high-stakes match." }
      }
    }
  },
  {
    id: "sick",
    emoji: "🤢",
    category: "faces",
    labels: { kk: "Сырқат", ru: "Нездоровье", en: "Illness" },
    word: {
      term: "sick",
      transcription: "[sɪk]",
      partOfSpeech: "adjective",
      example: "He stayed home from school because he was sick.",
      translations: {
        kk: { translation: "ауырған, сырқаттанған", nuance: "Тән ауруына байланысты өзін жайсыз сезіну.", exampleTranslation: "Ауырып қалғандықтан, ол бүгін мектепке бармай үйде қалды." },
        ru: { translation: "больной, нездоровый", nuance: "Прямое указание на недомогание или простуду.", exampleTranslation: "Он остался дома, потому что заболел." },
        en: { translation: "unwell, suffering from disease", nuance: "Clear indication that someone's body is fighting off an illness.", exampleTranslation: "Illness required him to miss school and rest." }
      }
    },
    idiom: {
      term: "under the weather",
      transcription: "[ˈʌndə ðə ˈweðə]",
      partOfSpeech: "idiom",
      example: "I feel a bit under the weather, so I'll rest in bed.",
      translations: {
        kk: { translation: "өзін жайсыз сезіну, сырқаттанып қалу", literalMeaning: "тура мағынасы: «ауа райының астында болу»", nuance: "Теңізшілер дауылда шайқалмас үшін палуба астына түскен. Жеңіл шаршау не тұмауды білдіреді.", exampleTranslation: "Өзімді сәл жайсыз сезініп тұрған соң, төсекте демаламын." },
        ru: { translation: "неважно себя чувствовать, приболеть", literalMeaning: "буквально: «под погодой»", nuance: "Моряки пережидали непогоду в трюме. Обозначает легкое недомогание, начинающуюся простуду.", exampleTranslation: "Я чувствую себя немного неважно, поэтому отлежусь в постели." },
        en: { translation: "slightly ill, fatigued, or fighting a cold", literalMeaning: "literally: sheltering beneath stormy weather", nuance: "Originated from sailors resting below deck; signifies mild illness.", exampleTranslation: "Feeling somewhat worn down led me to rest quietly." }
      }
    }
  },
  {
    id: "terrified",
    emoji: "😱",
    category: "faces",
    labels: { kk: "Үрей", ru: "Ужас", en: "Horror" },
    word: {
      term: "terrified",
      transcription: "[ˈterɪfaɪd]",
      partOfSpeech: "adjective",
      example: "The kitten was terrified by the thunderclap.",
      translations: {
        kk: { translation: "зәресі ұшқан, қатты қорыққан", nuance: "Қорқыныштың ең жоғары, денені дірілдететін деңгейі.", exampleTranslation: "Кішкентай марғау найзағайдың гүрсілінен қатты қорықты." },
        ru: { translation: "в ужасе, сильно испуганный", nuance: "Крайняя степень испуга, заставляющая человека оцепенеть.", exampleTranslation: "Котёнок до смерти испугался раската грома." },
        en: { translation: "consumed by intense fear", nuance: "Significantly stronger than plain 'scared'; paralyzing fright.", exampleTranslation: "The sudden thunderclaps struck acute fear into the kitten." }
      }
    },
    idiom: {
      term: "scared out of one's wits",
      transcription: "[skeəd aʊt əv wʌnz wɪts]",
      partOfSpeech: "idiom",
      example: "The loud explosion scared everyone out of their wits.",
      translations: {
        kk: { translation: "зәре-құты қалмау, есі шыға қорқу", literalMeaning: "тура мағынасы: «есінен айырылардай қорыққан»", nuance: "Аяқ астынан болған жағдайдан сасқалақтап, не істерін білмей қалу.", exampleTranslation: "Қатты жарылыстан барлығының зәре-құты қалмады." },
        ru: { translation: "напуган до полусмерти, душа в пятки ушла", literalMeaning: "буквально: «испуган до потери рассудка»", nuance: "Шокирующий испуг, от которого на мгновение теряешь дар речи.", exampleTranslation: "Громкий взрыв напугал всех до полусмерти." },
        en: { translation: "startled so severely that thinking clearly stops", literalMeaning: "literally: frightened so badly your senses leave", nuance: "A sudden fright that knocks out rational thinking for a moment.", exampleTranslation: "The unexpected boom startled everyone completely." }
      }
    }
  },
  {
    id: "thoughtful",
    emoji: "🤔",
    category: "faces",
    labels: { kk: "Ойлану", ru: "Задумчивость", en: "Reflection" },
    word: {
      term: "thoughtful",
      transcription: "[ˈθɔːtfəl]",
      partOfSpeech: "adjective",
      example: "She had a thoughtful look while choosing a book.",
      translations: {
        kk: { translation: "ойлы, терең ойға батқан", nuance: "Шешім қабылдар алдындағы зейінді шоғырландыру.", exampleTranslation: "Кітап таңдап жатып, оның жүзі ойлы кейіпке енді." },
        ru: { translation: "задумчивый, размышляющий", nuance: "Погружённый в мысли перед принятием решения.", exampleTranslation: "У неё был задумчивый вид при выборе книги." },
        en: { translation: "pensive, contemplative, reflective", nuance: "Quietly considering choices or meditating on ideas.", exampleTranslation: "She wore a reflective expression while inspecting the books." }
      }
    },
    idiom: {
      term: "rack one's brains",
      transcription: "[ræk wʌnz breɪnz]",
      partOfSpeech: "idiom",
      example: "I racked my brains all morning to remember the code.",
      translations: {
        kk: { translation: "бас қатыру, бар миын сарқу", literalMeaning: "тура мағынасы: «миды кермеге салып созу»", nuance: "Ұмытылған сөзді еске түсіру немесе күрделі есепті шешу үшін бар зейінді салу.", exampleTranslation: "Кодты еске түсіру үшін таңертеңнен бері бас қатырып отырмын." },
        ru: { translation: "ломать голову, напрягать извилины", literalMeaning: "буквально: «пытать свой мозг на дыбе»", nuance: "Интенсивный мысленный поиск решения трудной задачи.", exampleTranslation: "Я всё утро ломал голову, пытаясь вспомнить пароль." },
        en: { translation: "strain hard mentally to find an answer or recall a fact", literalMeaning: "literally: stretching your brain on a rack", nuance: "Exerting maximum mental energy to dig up an answer.", exampleTranslation: "I searched my memory intensely all morning for the code." }
      }
    }
  },
  {
    id: "amazed",
    emoji: "🤩",
    category: "faces",
    labels: { kk: "Таңданыс", ru: "Восторг", en: "Wonder" },
    word: {
      term: "amazed",
      transcription: "[əˈmeɪzd]",
      partOfSpeech: "adjective",
      example: "We were amazed by the magician's clever trick.",
      translations: {
        kk: { translation: "таңғалған, қайран қалған", nuance: "Күтпеген тамаша шеберлікке не сұлулыққа тамсану.", exampleTranslation: "Сиқыршының тапқыр фокусына қарап, қайран қалдық." },
        ru: { translation: "поражённый, изумлённый", nuance: "Искреннее восхищение увиденным мастерством или чудом.", exampleTranslation: "Мы были поражены ловким трюком фокусника." },
        en: { translation: "astonished, filled with joyful surprise", nuance: "Captivated by extraordinary artistry, spectacle, or news.", exampleTranslation: "The conjurer's performance struck us with immense awe." }
      }
    },
    idiom: {
      term: "blown away",
      transcription: "[bloʊn əˈweɪ]",
      partOfSpeech: "idiom",
      example: "I was completely blown away by your brilliant drawing!",
      translations: {
        kk: { translation: "аузы ашылып қалу, таңдай қағу", literalMeaning: "тура мағынасы: «жел ұшырып кеткендей болу»", nuance: "Керемет өнерден не жақсы жаңалықтан алған естен кетпес ғажап әсер.", exampleTranslation: "Сенің салған керемет суретіңе қарап, аузым ашылып қалды!" },
        ru: { translation: "в полном восторге, сносит крышу от восторга", literalMeaning: "буквально: «сдуло порывом ветра»", nuance: "Сильное восхищение фильмом, музыкой, талантом или подарком.", exampleTranslation: "Я был в полном восторге от твоего блестящего рисунка!" },
        en: { translation: "overwhelmed with awe, deeply impressed", literalMeaning: "literally: swept off one's feet by sheer wonder", nuance: "Expressing intense admiration when something exceeds all expectations.", exampleTranslation: "Your artistic masterpiece left me entirely speechless with wonder." }
      }
    }
  },
  {
    id: "secretive",
    emoji: "🤐",
    category: "faces",
    labels: { kk: "Құпия", ru: "Секрет", en: "Discretion" },
    word: {
      term: "secretive",
      transcription: "[ˈsiːkrətɪv]",
      partOfSpeech: "adjective",
      example: "He was secretive about the birthday surprise.",
      translations: {
        kk: { translation: "сыр сақтағыш, іштей тынатын", nuance: "Құпияны уақытынан бұрын жария етпейтін сақтық.", exampleTranslation: "Ол туған күн тосынсыйы туралы сыр шашпай үндемеді." },
        ru: { translation: "скрытный, таинственный", nuance: "Склонный сохранять тайну и не выдавать деталей заранее.", exampleTranslation: "Он держал подарок на день рождения в строгом секрете." },
        en: { translation: "inclined to keep secrets, private", nuance: "Intentionally hiding information to preserve a surprise.", exampleTranslation: "He stayed very guarded regarding the party plans." }
      }
    },
    idiom: {
      term: "bite your tongue",
      transcription: "[baɪt jɔːr tʌŋ]",
      partOfSpeech: "idiom",
      example: "I almost spoiled the surprise, but I bit my tongue in time.",
      translations: {
        kk: { translation: "тілін тістеу, аузын бағу", literalMeaning: "тура мағынасы: «тіліңді тістеп қалу»", nuance: "Құпияны байқаусызда айтып қоймас үшін сөзді дер кезінде тоқтату.", exampleTranslation: "Құпияны айтып қоя жаздап, тілімді әрең тістеп үлгердім." },
        ru: { translation: "прикусить язык, промолчать", literalMeaning: "буквально: «укусить свой язык»", nuance: "Удержать себя от лишних слов, чтобы не выдать тайну.", exampleTranslation: "Я чуть не выдал сюрприз, но вовремя прикусил язык." },
        en: { translation: "force yourself not to say something aloud", literalMeaning: "literally: clamping your teeth on your tongue", nuance: "Stopping yourself from spilling a secret or speaking tactlessly.", exampleTranslation: "I stopped myself right before blabbing out the hidden surprise." }
      }
    }
  },
  {
    id: "overwhelmed",
    emoji: "🤯",
    category: "faces",
    labels: { kk: "Таңғалу", ru: "Шок", en: "Mind-blown" },
    word: {
      term: "overwhelmed",
      transcription: "[ˌoʊvərˈwelmd]",
      partOfSpeech: "adjective",
      example: "He felt overwhelmed by the hundreds of museum exhibits.",
      translations: {
        kk: { translation: "есеңгіреген, басы айналған", nuance: "Ақпарат тым көп болып, бәрін бірден түсіну қиынға соққандағы күй.", exampleTranslation: "Мұражайдағы жүздеген экспонатты көріп, оның басы айналды." },
        ru: { translation: "ошеломлённый, голова кругом", nuance: "Состояние, когда впечатлений или данных слишком много.", exampleTranslation: "У него пошла кругом голова от сотен экспонатов музея." },
        en: { translation: "feeling swamped by vast information", nuance: "Sensory or cognitive overload when processing massive data.", exampleTranslation: "The sheer volume of intriguing sights overloaded him." }
      }
    },
    idiom: {
      term: "wrap one's head around",
      transcription: "[ræp wʌnz hed əˈraʊnd]",
      partOfSpeech: "idiom",
      example: "I can't wrap my head around how fast the years pass!",
      translations: {
        kk: { translation: "ақылы жетпеу, миына сыймау", literalMeaning: "тура мағынасы: «басыңды идеяның айналасына орап алу»", nuance: "Ғажап немесе түсініксіз жаңалықты қабылдау өте қиын болғанда айтылады.", exampleTranslation: "Жылдардың осынша тез зулап өтіп жатқаны миыма сыймайды!" },
        ru: { translation: "уложить в голове, осмыслить", literalMeaning: "буквально: «обернуть голову вокруг мысли»", nuance: "Часто используется с отрицанием: слишком удивительный факт, в который трудно поверить.", exampleTranslation: "Я не могу уложить в голове, как быстро летят годы!" },
        en: { translation: "fully comprehend or accept an astonishing fact", literalMeaning: "literally: wrapping the brain completely around a thought", nuance: "Usually used negatively: 'cannot wrap my head around...' to show genuine amazement.", exampleTranslation: "It feels impossible to truly fathom how swiftly time flies by." }
      }
    }
  },
  {
    id: "pleading",
    emoji: "🥺",
    category: "faces",
    labels: { kk: "Өтініш", ru: "Просьба", en: "Appeal" },
    word: {
      term: "pleading",
      transcription: "[ˈpliːdɪŋ]",
      partOfSpeech: "adjective",
      example: "The cute puppy looked at me with pleading eyes.",
      translations: {
        kk: { translation: "жалынышты, өтінген", nuance: "Шын жүректен үмітпен қарап көмек сұраған жанар.", exampleTranslation: "Сүйкімді күшік маған жалынышты көздерімен қарады." },
        ru: { translation: "умоляющий, просящий", nuance: "Трогательный взгляд, выражающий надежду на доброту.", exampleTranslation: "Милый щенок посмотрел на меня умоляющими глазами." },
        en: { translation: "expressing an earnest, heartfelt appeal", nuance: "A tender, vulnerable look hoping gently for kindness or treats.", exampleTranslation: "The puppy turned its eyes up in an earnest bid for affection." }
      }
    },
    idiom: {
      term: "wear one's heart on one's sleeve",
      transcription: "[weər wʌnz hɑːt ɒn wʌnz sliːv]",
      partOfSpeech: "idiom",
      example: "She wears her heart on her sleeve, so you always know how she feels.",
      translations: {
        kk: { translation: "жүрегі ашық, сезімін жасырмайтын", literalMeaning: "тура мағынасы: «жүрегін жеңіне тағып жүру»", nuance: "Өз сезімін еш жасырмайтын, ішінде жасырғаны жоқ ашық мінезді адам.", exampleTranslation: "Ол өте ашық жүректі адам, сондықтан не сезінгені бірден көрінеді." },
        ru: { translation: "душа нараспашку, не скрывать чувств", literalMeaning: "буквально: «носить своё сердце на рукаве»", nuance: "Рыцари носили ленту дамы на рукаве. Человек с открытыми чувствами.", exampleTranslation: "У неё душа нараспашку, поэтому всегда ясно, что у неё на уме." },
        en: { translation: "making one's emotions clear and transparent", literalMeaning: "literally: wearing feelings visibly on a garment sleeve", nuance: "Displaying authentic, heartfelt vulnerability without concealing emotions.", exampleTranslation: "Her total emotional honesty makes her reactions immediately evident." }
      }
    }
  },

  // =======================================================
  // 2. ҚИМЫЛДАР МЕН ҚОЛДАР (GESTURES & ACTIONS)
  // =======================================================
  {
    id: "thumbs_up",
    emoji: "👍",
    category: "gestures",
    labels: { kk: "Қолдау", ru: "Одобрение", en: "Approval" },
    word: {
      term: "agreeable",
      transcription: "[əˈɡriːəbəl]",
      partOfSpeech: "adjective",
      example: "His new proposal was agreeable to the whole team.",
      translations: {
        kk: { translation: "қолайлы, мақұлданған", nuance: "Көпшіліктің көңілінен шыққан, келісімге сай келетін шешім.", exampleTranslation: "Оның жаңа ұсынысы бүкіл командаға қолайлы болды." },
        ru: { translation: "приемлемый, одобрительный", nuance: "Подходящий и вызывающий согласие у всех участников.", exampleTranslation: "Его новое предложение было одобрено всей командой." },
        en: { translation: "pleasant, acceptable, willing to agree", nuance: "Meeting general approval without causing friction.", exampleTranslation: "The idea gained enthusiastic acceptance across the roster." }
      }
    },
    idiom: {
      term: "give someone the thumbs-up",
      transcription: "[ɡɪv ˈsʌmwʌn ðə θʌmz ʌp]",
      partOfSpeech: "idiom",
      example: "The teacher gave me the thumbs-up on my science project.",
      translations: {
        kk: { translation: "оң баға беру, батасын беру, мақұлдау", literalMeaning: "тура мағынасы: «бас бармағын жоғары көтеру»", nuance: "Біреудің жұмысын толық қолдап, «бәрі керемет, жалғастыра бер» деп рұқсат ету.", exampleTranslation: "Мұғалім менің ғылыми жобама оң баға беріп, мақұлдады." },
        ru: { translation: "дать добро, одобрить идею", literalMeaning: "буквально: «показать большой палец вверх»", nuance: "Официальное или дружеское согласие двигаться дальше.", exampleTranslation: "Учитель одобрил мой научный проект и дал добро." },
        en: { translation: "indicate clear approval, greenlight a project", literalMeaning: "literally: raising a thumb upwards in gesture", nuance: "Direct nonverbal or spoken affirmation meaning 'go ahead, looks great'.", exampleTranslation: "The instructor reviewed my project and granted full approval." }
      }
    }
  },
  {
    id: "thumbs_down",
    emoji: "👎",
    category: "gestures",
    labels: { kk: "Келіспеу", ru: "Неодобрение", en: "Disapproval" },
    word: {
      term: "displeased",
      transcription: "[dɪsˈpliːzd]",
      partOfSpeech: "adjective",
      example: "The coach was displeased with our lazy warmup.",
      translations: {
        kk: { translation: "көңілі толмаған, наразы", nuance: "Нәтижеге не әрекетке риза болмаған көңіл-күй.", exampleTranslation: "Жаттықтырушы біздің жалқау жаттығуымызға риза болмады." },
        ru: { translation: "недовольный, раздосадованный", nuance: "Чувство раздражения из-за некачественной работы.", exampleTranslation: "Тренер был недоволен нашей вялой разминкой." },
        en: { translation: "unhappy, dissatisfied with quality", nuance: "Expressing criticism or lack of satisfaction.", exampleTranslation: "The coach felt disappointed by our lack of energy during warmup." }
      }
    },
    idiom: {
      term: "give someone the thumbs-down",
      transcription: "[ɡɪv ˈsʌmwʌn ðə θʌmz daʊn]",
      partOfSpeech: "idiom",
      example: "The jury gave the movie the thumbs-down.",
      translations: {
        kk: { translation: "теріс баға беру, қабылдамау", literalMeaning: "тура мағынасы: «бас бармақты төмен қарату»", nuance: "Ұсынысты немесе туындыны жаратпай, келіспей кері қайтару.", exampleTranslation: "Қазылар алқасы бұл фильмге теріс баға беріп, жаратпады." },
        ru: { translation: "забраковать, вынести вердикт «против»", literalMeaning: "буквально: «показать палец вниз»", nuance: "Отвергнуть проект или предложение из-за несоответствия ожиданиям.", exampleTranslation: "Жюри забраковало этот фильм и не оценило его." },
        en: { translation: "reject, dismiss, or deem unsatisfactory", literalMeaning: "literally: directing the thumb downwards", nuance: "Delivering a negative rating or formal rejection.", exampleTranslation: "The panel assessed the film poorly and rejected it." }
      }
    }
  },
  {
    id: "applause",
    emoji: "👏",
    category: "gestures",
    labels: { kk: "Қол шапалақтау", ru: "Аплодисменты", en: "Applause" },
    word: {
      term: "appreciative",
      transcription: "[əˈpriːʃətɪv]",
      partOfSpeech: "adjective",
      example: "The appreciative crowd cheered after the song.",
      translations: {
        kk: { translation: "риза болған, қошемет көрсеткен", nuance: "Талантқа шынайы алғыс пен құрмет білдірген көрермен.", exampleTranslation: "Риза болған көрермендер әннен кейін қол шапалақтады." },
        ru: { translation: "благодарный, признательный", nuance: "Искреннее признание мастерства артиста или оратора.", exampleTranslation: "Благодарные зрители зааплодировали после окончания песни." },
        en: { translation: "showing gratitude and warm recognition", nuance: "Expressing hearty thankfulness for great effort or art.", exampleTranslation: "The responsive audience cheered warmly for the melody." }
      }
    },
    idiom: {
      term: "give someone a big hand",
      transcription: "[ɡɪv ˈsʌmwʌn ə bɪɡ hænd]",
      partOfSpeech: "idiom",
      example: "Let's give our young pianist a big hand!",
      translations: {
        kk: { translation: "зор қошемет көрсету, ду қол шапалақтау", literalMeaning: "тура мағынасы: «біреуге үлкен қол сыйлау»", nuance: "Өнер көрсеткен адамға құрметпен ұзақ әрі қатты шапалақ соғу.", exampleTranslation: "Жас пианисімізге зор қошемет көрсетіп, қол соғайық!" },
        ru: { translation: "бурно аплодировать, искупать в овациях", literalMeaning: "буквально: «дать кому-то большую руку»", nuance: "Громкие и дружные аплодисменты за отличное выступление.", exampleTranslation: "Давайте громко поаплодируем нашему юному пианисту!" },
        en: { translation: "applaud someone enthusiastically and loudly", literalMeaning: "literally: offering a large round of clapping hands", nuance: "A common presenter phrase urging an audience to cheer heartily.", exampleTranslation: "Let us offer a loud round of applause for our pianist!" }
      }
    }
  },
  {
    id: "hands_up",
    emoji: "🙌",
    category: "gestures",
    labels: { kk: "Шаттану", ru: "Триумф", en: "Celebration" },
    word: {
      term: "triumphant",
      transcription: "[traɪˈʌmfənt]",
      partOfSpeech: "adjective",
      example: "The triumphant winners raised the golden cup.",
      translations: {
        kk: { translation: "жеңімпаз, салтанатты", nuance: "Үлкен жеңістен кейінгі мақтаныш пен шаттық.", exampleTranslation: "Жеңімпаз чемпиондар алтын кубокты жоғары көтерді." },
        ru: { translation: "триумфальный, победоносный", nuance: "Гордость и ликование после честной победы.", exampleTranslation: "Победители с триумфом подняли золотой кубок." },
        en: { translation: "rejoicing after victory or success", nuance: "Proud and celebratory state following a key win.", exampleTranslation: "The winning team celebrated with the golden trophy." }
      }
    },
    idiom: {
      term: "jump for joy",
      transcription: "[dʒʌmp fər dʒɔɪ]",
      partOfSpeech: "idiom",
      example: "When we passed all the exams, we jumped for joy!",
      translations: {
        kk: { translation: "қуаныштан секіру, шаттана қуану", literalMeaning: "тура мағынасы: «қуаныштан ыршып секіру»", nuance: "Көңілдің көтерілгені сонша, адам орнында тұра алмай шаттану.", exampleTranslation: "Барлық емтиханды сәтті тапсырғанда, қуаныштан секірдік!" },
        ru: { translation: "прыгать от радости, ликовать", literalMeaning: "буквально: «подпрыгивать от радости»", nuance: "Бурный восторг, который проявляется физически в движении.", exampleTranslation: "Сдав все экзамены, мы буквально прыгали от радости!" },
        en: { translation: "display spontaneous physical happiness", literalMeaning: "literally: leaping upwards out of delight", nuance: "Expressing sheer, uncontainable happiness through energetic movement.", exampleTranslation: "Finishing our exams prompted spontaneous happy jumps!" }
      }
    }
  },
  {
    id: "handshake",
    emoji: "🤝",
    category: "gestures",
    labels: { kk: "Келісім", ru: "Рукопожатие", en: "Agreement" },
    word: {
      term: "trustworthy",
      transcription: "[ˈtrʌstˌwɜːrði]",
      partOfSpeech: "adjective",
      example: "He is a trustworthy partner who always keeps his word.",
      translations: {
        kk: { translation: "сенімді, адал", nuance: "Уәдесіне берік, сөзінде тұратын сенімді серіктес.", exampleTranslation: "Ол әрқашан сөзінде тұратын өте сенімді дос." },
        ru: { translation: "надёжный, заслуживающий доверия", nuance: "Человек, на которого всегда можно положиться.", exampleTranslation: "Он надёжный партнёр, который всегда держит слово." },
        en: { translation: "reliable, honest, dependable", nuance: "Deserving faith and honoring every spoken promise.", exampleTranslation: "He stands as a deeply dependable ally." }
      }
    },
    idiom: {
      term: "shake hands on it",
      transcription: "[ʃeɪk hændz ɒn ɪt]",
      partOfSpeech: "idiom",
      example: "We reached a fair deal, so let's shake hands on it.",
      translations: {
        kk: { translation: "қол алысып келісу", literalMeaning: "тура мағынасы: «келісімді қол алысумен бекіту»", nuance: "Екі жақтың уәделесіп, мәмілеге келуі мен достық шарты.", exampleTranslation: "Біз әділ келісімге келдік, енді қол алысып бекітейік." },
        ru: { translation: "ударить по рукам, заключить сделку", literalMeaning: "буквально: «пожать руки по этому поводу»", nuance: "Традиционный жест подтверждения честного договора.", exampleTranslation: "Мы договорились о хороших условиях, давай ударим по рукам!" },
        en: { translation: "formally seal a mutual pact or consensus", literalMeaning: "literally: clasping hands to seal terms", nuance: "Using a handshake to confirm an honorable agreement.", exampleTranslation: "Fair terms were struck; we shook hands to formalize the deal." }
      }
    }
  },
  {
    id: "strong",
    emoji: "💪",
    category: "gestures",
    labels: { kk: "Күш-қайрат", ru: "Сила", en: "Strength" },
    word: {
      term: "strong",
      transcription: "[strɒŋ]",
      partOfSpeech: "adjective",
      example: "My older brother is strong and can lift heavy weights.",
      translations: {
        kk: { translation: "күшті, мықты", nuance: "Дене немесе жігер қуаты мол адам.", exampleTranslation: "Ағам өте күшті, ауыр жүкті оңай көтереді." },
        ru: { translation: "сильный, крепкий", nuance: "Обладающий физической силой или стойкостью.", exampleTranslation: "Мой старший брат сильный и легко поднимает тяжести." },
        en: { translation: "powerful, possessing muscular vigor", nuance: "Capable of handling heavy resistance or physical strain.", exampleTranslation: "My brother possesses ample muscular strength." }
      }
    },
    idiom: {
      term: "as strong as an ox",
      transcription: "[æz strɒŋ æz ən ɒks]",
      partOfSpeech: "idiom",
      example: "After months of farming work, the athlete was as strong as an ox.",
      translations: {
        kk: { translation: "өгіздей күші бар, алып күшті", literalMeaning: "тура мағынасы: «өгіз сияқты күшті»", nuance: "Жер жыртып үйренген өгіздей керемет төзімді әрі зор қара күшке ие адам.", exampleTranslation: "Ауылда еңбек еткеннен кейін спортшы өгіздей күшті болып шықты." },
        ru: { translation: "сильный как бык, богатырского здоровья", literalMeaning: "буквально: «сильный как вол/бык»", nuance: "Бык — древний символ нечеловеческой выносливости и мощи.", exampleTranslation: "После тренировок спортсмен стал сильным как бык." },
        en: { translation: "possessing enormous brute strength and resilience", literalMeaning: "literally: robust as a plow ox", nuance: "Oxen symbolize immense working power and rugged endurance.", exampleTranslation: "Rigorous conditioning turned the athlete exceptionally robust." }
      }
    }
  },

  // =======================================================
  // 3. ЖАНУАРЛАР (ANIMALS)
  // =======================================================
  {
    id: "bee",
    emoji: "🐝",
    category: "animals",
    labels: { kk: "Ара", ru: "Пчела", en: "Bee" },
    word: {
      term: "busy",
      transcription: "[ˈbɪzi]",
      partOfSpeech: "adjective",
      example: "Mom is busy preparing lunch in the kitchen.",
      translations: {
        kk: { translation: "бос емес, қарбалас", nuance: "Бір іспен тыным таппай айналысып жатқан күй.", exampleTranslation: "Анам ас үйде түскі ас дайындаумен бос емес." },
        ru: { translation: "занятой, загруженный делами", nuance: "Находящийся в процессе постоянной деятельности.", exampleTranslation: "Мама занята приготовлением обеда на кухне." },
        en: { translation: "actively engaged with duties", nuance: "Occupied fully with tasks or homework.", exampleTranslation: "Mother is currently occupied making meals." }
      }
    },
    idiom: {
      term: "as busy as a bee",
      transcription: "[æz ˈbɪzi æz ə biː]",
      partOfSpeech: "idiom",
      example: "Before the festival, the volunteers were as busy as bees.",
      translations: {
        kk: { translation: "арадай тынымсыз, құмырсқадай еңбекқор", literalMeaning: "тура мағынасы: «ара сияқты бос болмау»", nuance: "Гүлден гүлге қонып бал жинайтын арадай тынбай, өте белсенді еңбек ету.", exampleTranslation: "Мереке алдында еріктілер арадай тынымсыз еңбек етті." },
        ru: { translation: "трудолюбивый как пчёлка, крутиться как белка в колесе", literalMeaning: "буквально: «занят как пчела»", nuance: "Пчёлы без перерыва собирают нектар; символ крайнего трудолюбия.", exampleTranslation: "Перед фестивалем волонтёры трудились как пчёлки." },
        en: { translation: "industrious, constantly active and working", literalMeaning: "literally: working as tirelessly as a worker bee", nuance: "Bees never stay idle; reflects high productivity and non-stop hustle.", exampleTranslation: "The student crew kept humming with non-stop effort before the event." }
      }
    }
  },
  {
    id: "lion",
    emoji: "🦁",
    category: "animals",
    labels: { kk: "Арыстан", ru: "Лев", en: "Lion" },
    word: {
      term: "brave",
      transcription: "[breɪv]",
      partOfSpeech: "adjective",
      example: "The brave firefighter rescued the little kitten.",
      translations: {
        kk: { translation: "батыр, ержүрек", nuance: "Қауіптен қорықпай, батыл әрекет жасайтын адам.", exampleTranslation: "Ержүрек өрт сөндіруші кішкентай марғауды құтқарып қалды." },
        ru: { translation: "храбрый, отважный", nuance: "Способность действовать решительно перед лицом опасности.", exampleTranslation: "Храбрый пожарный спас маленького котёнка." },
        en: { translation: "courageous, ready to face peril", nuance: "Showing steadfast valor in tough moments.", exampleTranslation: "The valiant rescuer brought the kitten to safety." }
      }
    },
    idiom: {
      term: "as brave as a lion",
      transcription: "[æz breɪv æz ə ˈlaɪən]",
      partOfSpeech: "idiom",
      example: "The surgeon was as brave as a lion during the emergency.",
      translations: {
        kk: { translation: "арыстандай айбатты, жүректі", literalMeaning: "тура мағынасы: «арыстан сияқты батыр»", nuance: "Аң патшасы арыстандай еш нәрседен қорықпайтын қайсарлық.", exampleTranslation: "Төтенше жағдайда дәрігер арыстандай ержүрек болды." },
        ru: { translation: "храбрый как лев, бесстрашный", literalMeaning: "буквально: «отважный как лев»", nuance: "Лев — традиционный символ королевского бесстрашия.", exampleTranslation: "Во время сложной операции врач держался храбро как лев." },
        en: { translation: "exceptionally fearless and noble in danger", literalMeaning: "literally: brave as the king of beasts", nuance: "Classic metaphor comparing human courage to the king of the savannah.", exampleTranslation: "The medic displayed total lionhearted resolve during the crisis." }
      }
    }
  },
  {
    id: "turtle",
    emoji: "🐢",
    category: "animals",
    labels: { kk: "Тасбақа", ru: "Черепаха", en: "Turtle" },
    word: {
      term: "patient",
      transcription: "[ˈpeɪʃənt]",
      partOfSpeech: "adjective",
      example: "A patient teacher always explains things clearly.",
      translations: {
        kk: { translation: "сабырлы, төзімді", nuance: "Асықпай, салмақтылықпен күте білу қабілеті.", exampleTranslation: "Сабырлы мұғалім барлық нәрсені түсінікті етіп түсіндіреді." },
        ru: { translation: "терпеливый, сдержанный", nuance: "Умение спокойно ждать и не раздражаться.", exampleTranslation: "Терпеливый учитель всегда всё понятно объясняет." },
        en: { translation: "able to accept delays without annoyance", nuance: "Calm endurance through long procedures.", exampleTranslation: "A calm instructor calmly clarifies every detail." }
      }
    },
    idiom: {
      term: "at a snail's pace",
      transcription: "[æt ə sneɪlz peɪs]",
      partOfSpeech: "idiom",
      example: "Traffic on the snowy bridge moved at a snail's pace.",
      translations: {
        kk: { translation: "тасбақа жүріспен, өте баяу жылжу", literalMeaning: "тура мағынасы: «ұлудың жылдамдығымен»", nuance: "Асығыс жерде уақытты созып, тым баяу қозғалу.", exampleTranslation: "Қар басқан көпірде көліктер тасбақа жүріспен баяу қозғалды." },
        ru: { translation: "черепашьим шагом, еле-еле", literalMeaning: "буквально: «со скоростью улитки»", nuance: "Чрезвычайно медленное, тягучее продвижение вперёд.", exampleTranslation: "Движение на заснеженном мосту ползло черепашьим шагом." },
        en: { translation: "advancing extremely slowly", literalMeaning: "literally: traveling at the speed of a garden snail", nuance: "Describes crawl-speed movement, like jammed road traffic.", exampleTranslation: "Snowy weather reduced motorway traffic to a crawl." }
      }
    }
  },
  {
    id: "owl",
    emoji: "🦉",
    category: "animals",
    labels: { kk: "Үкі", ru: "Сова", en: "Owl" },
    word: {
      term: "wise",
      transcription: "[waɪz]",
      partOfSpeech: "adjective",
      example: "My grandmother always gives wise advice.",
      translations: {
        kk: { translation: "дана, ақылгөй", nuance: "Өмірлік тәжірибесі мол, терең ойлайтын адам.", exampleTranslation: "Әжем әрқашан өте ақылды, дана кеңестер береді." },
        ru: { translation: "мудрый, рассудительный", nuance: "Обладающий глубоким знанием жизни и умом.", exampleTranslation: "Моя бабушка всегда даёт мудрые советы." },
        en: { translation: "possessing good judgment and deep knowledge", nuance: "Showing sound sense refined by experience.", exampleTranslation: "Grandmother consistently offers insightful life guidance." }
      }
    },
    idiom: {
      term: "as wise as an owl",
      transcription: "[æz waɪz æz ən aʊl]",
      partOfSpeech: "idiom",
      example: "Our old science professor is as wise as an owl.",
      translations: {
        kk: { translation: "үкідей дана, көреген", literalMeaning: "тура мағынасы: «үкі сияқты дана»", nuance: "Түнде көретін үкі тәрізді бәрін байқап, дұрыс бағыт сілтейтін білімді адам.", exampleTranslation: "Біздің қарт профессор үкідей дана әрі көреген адам." },
        ru: { translation: "мудрый как сова", literalMeaning: "буквально: «мудрый как сова»", nuance: "Сова — древнегреческий символ богини мудрости Афины.", exampleTranslation: "Наш старый профессор мудр как сова." },
        en: { translation: "possessing immense wisdom and sound perspective", literalMeaning: "literally: knowledgeable as a mythical owl", nuance: "Ancient folklore regards the silent, watchful owl as the peak of intellect.", exampleTranslation: "The senior academic possesses immense lifetime wisdom." }
      }
    }
  },
  {
    id: "monkey",
    emoji: "🐒",
    category: "animals",
    labels: { kk: "Маймыл", ru: "Обезьяна", en: "Monkey" },
    word: {
      term: "playful",
      transcription: "[ˈpleɪfəl]",
      partOfSpeech: "adjective",
      example: "The playful puppy rolled around on the grass.",
      translations: {
        kk: { translation: "ойнақы, бұзық", nuance: "Әзілдесіп ойнағанды ұнататын көңілді мінез.", exampleTranslation: "Ойнақы күшік көгалда аунап ойнады." },
        ru: { translation: "игривый, озорной", nuance: "Любящий шутить, бегать и веселиться.", exampleTranslation: "Игривый щенок кувыркался по траве." },
        en: { translation: "fond of games, lighthearted and frolicsome", nuance: "Exuberant and ready for fun mischief.", exampleTranslation: "The spirited puppy loved tumbling playfully across the lawn." }
      }
    },
    idiom: {
      term: "monkey business",
      transcription: "[ˈmʌŋki ˈbɪznəs]",
      partOfSpeech: "idiom",
      example: "Stop the monkey business and finish your homework!",
      translations: {
        kk: { translation: "еркелік, шалағайлық, бос шатпақ", literalMeaning: "тура мағынасы: «маймылдың ісі»", nuance: "Жұмыс істеудің орнына орынсыз ойнап, сабақты бұзу.", exampleTranslation: "Босқа еркелеп ойнағанды қойып, үй тапсырмаңды орында!" },
        ru: { translation: "дуракаваляние, шалости, мартышкин труд", literalMeaning: "буквально: «обезьяньи делишки»", nuance: "Несерьёзное поведение или мелкое баловство вместо полезного дела.", exampleTranslation: "Хватит валять дурака, садись за уроки!" },
        en: { translation: "foolish tricks, mischievous behavior or pranks", literalMeaning: "literally: monkey-like antics", nuance: "Silly antics that disrupt important serious work.", exampleTranslation: "Cease the foolish antics and focus on finishing assignments!" }
      }
    }
  },

  // =======================================================
  // 4. ТАБИҒАТ ПЕН АУА РАЙЫ (NATURE & WEATHER)
  // =======================================================
  {
    id: "rain",
    emoji: "🌧️",
    category: "nature",
    labels: { kk: "Жаңбыр", ru: "Дождь", en: "Rain" },
    word: {
      term: "gloomy",
      transcription: "[ˈɡluːmi]",
      partOfSpeech: "adjective",
      example: "The cloudy sky looked gloomy all afternoon.",
      translations: {
        kk: { translation: "күңгірт, бұлыңғыр", nuance: "Күн түспей тұнжыраған көңілсіз табиғат.", exampleTranslation: "Бұлтты аспан түс қайта күңгірт тартып тұрды." },
        ru: { translation: "пасмурный, хмурый", nuance: "Тёмная и неприветливая погода без солнечных лучей.", exampleTranslation: "Пасмурное небо выглядело хмурым весь день." },
        en: { translation: "dark, overcast, slightly depressing", nuance: "Dim weather lacking bright light and warmth.", exampleTranslation: "Overcast clouds created a dim atmosphere." }
      }
    },
    idiom: {
      term: "save for a rainy day",
      transcription: "[seɪv fər ə ˈreɪni deɪ]",
      partOfSpeech: "idiom",
      example: "It is smart to save some pocket money for a rainy day.",
      translations: {
        kk: { translation: "қиын күндерге қор жинау", literalMeaning: "тура мағынасы: «жаңбырлы күнге сақтап қою»", nuance: "Кенеттен керек болып қалуы мүмкін қиын шаққа ақша не қажетті зат сақтап қою.", exampleTranslation: "Қалта ақшасының бір бөлігін қиын күнге сақтап қойған дұрыс." },
        ru: { translation: "откладывать на чёрный день", literalMeaning: "буквально: «сберечь на дождливый день»", nuance: "Практика накопления ресурсов на непредвиденные трудности.", exampleTranslation: "Разумно откладывать часть карманных денег на всякий случай." },
        en: { translation: "reserve funds or supplies for future hardship", literalMeaning: "literally: holding something back for a wet day", nuance: "Prudent financial habit of saving money against sudden emergency.", exampleTranslation: "Setting aside funds protects against unforeseen future expenses." }
      }
    }
  },
  {
    id: "sun",
    emoji: "☀️",
    category: "nature",
    labels: { kk: "Күн", ru: "Солнце", en: "Sun" },
    word: {
      term: "cheerful",
      transcription: "[ˈtʃɪəfəl]",
      partOfSpeech: "adjective",
      example: "Her cheerful smile brightens up any room.",
      translations: {
        kk: { translation: "жарқын, ақжарқын", nuance: "Айналасына нұр шашып, көңіл сыйлайтын жылы мінез.", exampleTranslation: "Оның ақжарқын күлкісі кез келген жерді жадыратады." },
        ru: { translation: "жизнерадостный, весёлый", nuance: "Человек, излучающий свет и теплоту своим настроением.", exampleTranslation: "Её жизнерадостная улыбка озаряет всё вокруг." },
        en: { translation: "bright, visibly full of cheer and optimism", nuance: "Radiating optimism like sunlight on a pleasant morning.", exampleTranslation: "Her radiant smile instantly enlivens any gathering." }
      }
    },
    idiom: {
      term: "a ray of sunshine",
      transcription: "[ə reɪ əv ˈsʌnʃaɪn]",
      partOfSpeech: "idiom",
      example: "The cheerful baby is a ray of sunshine in our home.",
      translations: {
        kk: { translation: "күннің шуағындай, өмірдің қуанышы", literalMeaning: "тура мағынасы: «күннің бір сәулесі»", nuance: "Барған жеріне қуаныш сыйлап, көңілді көтеретін мейірімді жан туралы айтылады.", exampleTranslation: "Сүйкімді бөбек үйіміздің шуақты күніндей." },
        ru: { translation: "лучик солнца, отрада", literalMeaning: "буквально: «солнечный луч»", nuance: "Тёплый человек, который приносит радость всем окружающим.", exampleTranslation: "Этот весёлый малыш — настоящий лучик солнца в нашем доме." },
        en: { translation: "someone bringing immense gladness and warmth", literalMeaning: "literally: a beam of direct sun warmth", nuance: "A sweet, affectionate metaphor for someone who brings unconditional smiles.", exampleTranslation: "The baby brings cheerful warmth wherever she goes." }
      }
    }
  },
  {
    id: "ice",
    emoji: "🧊",
    category: "nature",
    labels: { kk: "Мұз", ru: "Лёд", en: "Ice" },
    word: {
      term: "composed",
      transcription: "[kəmˈpoʊzd]",
      partOfSpeech: "adjective",
      example: "He remained composed even during the noisy debate.",
      translations: {
        kk: { translation: "ұстамды, сабырлы", nuance: "Айқай-шудың ортасында да өзін-өзі ұстай алатын мықты мінез.", exampleTranslation: "Шулы пікірталаста да ол ұстамды күйде қалды." },
        ru: { translation: "сдержанный, хладнокровный", nuance: "Способность сохранять хладнокровие в суете.", exampleTranslation: "Он оставался невозмутимым даже во время жарких споров." },
        en: { translation: "tranquil, possessing strong emotional discipline", nuance: "Keeping emotional poise despite noisy friction.", exampleTranslation: "He kept his poise during the heated debate." }
      }
    },
    idiom: {
      term: "break the ice",
      transcription: "[breɪk ði aɪs]",
      partOfSpeech: "idiom",
      example: "A funny introduction helped break the ice at the party.",
      translations: {
        kk: { translation: "жатырқауды жеңу, танысуды бастап кету", literalMeaning: "тура мағынасы: «мұзды жарып жол ашу»", nuance: "Жаңа ортадағы алғашқы ұялу мен бөтенсінуді жою.", exampleTranslation: "Көңілді әзіл кеште танысуды бастап кетуге көмектесті." },
        ru: { translation: "растопить лёд, разрядить обстановку", literalMeaning: "буквально: «расколоть лёд»", nuance: "Устранить первоначальную неловкость при знакомстве людей.", exampleTranslation: "Забавная шутка помогла растопить лёд и разрядить обстановку." },
        en: { translation: "ease initial social tension among strangers", literalMeaning: "literally: cracking frozen pack-ice to open a path", nuance: "Breaking awkward silence so conversation flows naturally.", exampleTranslation: "A friendly joke eased tension among unfamiliar guests." }
      }
    }
  },
  {
    id: "freezing",
    emoji: "🥶",
    category: "nature",
    labels: { kk: "Аяз", ru: "Мороз", en: "Frost" },
    word: {
      term: "freezing",
      transcription: "[ˈfriːzɪŋ]",
      partOfSpeech: "adjective",
      example: "Put on your coat, it is freezing cold outside.",
      translations: {
        kk: { translation: "сақылдаған сары аяз, қатып қалған", nuance: "Денені қалтырататын өте қатты суық.", exampleTranslation: "Пальтоңды ки, сыртта сақылдаған сары аяз." },
        ru: { translation: "ледяной, замерзающий", nuance: "Температура, от которой зуб на зуб не попадает.", exampleTranslation: "Надень пальто, на улице лютый мороз." },
        en: { translation: "bitingly cold, below freezing temperature", nuance: "Intense winter chill causing physical shivering.", exampleTranslation: "Bitter winter wind requires bundling up warmly." }
      }
    },
    idiom: {
      term: "cold as ice",
      transcription: "[koʊld æz aɪs]",
      partOfSpeech: "idiom",
      example: "After making the snowman, my fingers were as cold as ice.",
      translations: {
        kk: { translation: "тастай суық, мұздай", literalMeaning: "тура мағынасы: «мұз сияқты суық»", nuance: "Қолдың әбден тоңғаны немесе біреудің сезімсіз мінезі туралы айтылады.", exampleTranslation: "Аққала жасаған соң, саусақтарым тастай суық болды." },
        ru: { translation: "холодный как лёд", literalMeaning: "буквально: «ледяной как глыба льда»", nuance: "Прямой холод рук или метафора бессердечности.", exampleTranslation: "После лепки снеговика мои пальцы стали холодными как лёд." },
        en: { translation: "extremely chilly to touch or emotionally aloof", literalMeaning: "literally: matching the temperature of ice", nuance: "Used for frigid hands or cold, unresponsive personalities.", exampleTranslation: "Playing in the snow chilled my fingertips completely." }
      }
    }
  },
  {
    id: "lightning",
    emoji: "⚡",
    category: "nature",
    labels: { kk: "Найзағай", ru: "Молния", en: "Lightning" },
    word: {
      term: "energetic",
      transcription: "[ˌenərˈdʒetɪk]",
      partOfSpeech: "adjective",
      example: "The energetic dog dashed across the meadow.",
      translations: {
        kk: { translation: "жігерлі, қуатты", nuance: "Тоқтаусыз жүгіріп, ойнауға дайын мол күш.", exampleTranslation: "Қуатты ит шалғынмен құйғытып жүгіріп өтті." },
        ru: { translation: "энергичный, бодрый", nuance: "Переполненный жизненной силой и динамикой.", exampleTranslation: "Энергичный пёс помчался через поляну." },
        en: { translation: "full of boundless activity and dynamism", nuance: "Bubbling with vitality and readiness to move.", exampleTranslation: "The lively pup dashed eagerly through the open grass." }
      }
    },
    idiom: {
      term: "a bolt from the blue",
      transcription: "[ə boʊlt frəm ðə bluː]",
      partOfSpeech: "idiom",
      example: "His sudden resignation was a bolt from the blue.",
      translations: {
        kk: { translation: "күтпеген соққы, ашық аспандағы найзағайдай", literalMeaning: "тура мағынасы: «ашық көгілдір аспандағы найзағай»", nuance: "Ешкім күтпеген аяқ астынан шыққан тосын жаңалық.", exampleTranslation: "Оның кенеттен жұмыстан кетуі күтпеген соққы болды." },
        ru: { translation: "как гром среди ясного неба", literalMeaning: "буквально: «молния из синего неба»", nuance: "Внезапное происшествие без каких-либо намёков заранее.", exampleTranslation: "Его внезапный уход стал громом среди ясного неба." },
        en: { translation: "a completely unforeseen, shocking event", literalMeaning: "literally: lightning flashing out of clear blue skies", nuance: "A massive development that arrives with zero prior warning.", exampleTranslation: "The news arrived unexpectedly, catching everyone off guard." }
      }
    }
  },
  {
    id: "wave",
    emoji: "🌊",
    category: "nature",
    labels: { kk: "Толқын", ru: "Волна", en: "Wave" },
    word: {
      term: "adaptable",
      transcription: "[əˈdæptəbəl]",
      partOfSpeech: "adjective",
      example: "He is adaptable and makes new friends anywhere.",
      translations: {
        kk: { translation: "бейімделгіш, икемді", nuance: "Кез келген жаңа жағдайға оңай үйреніп кететін қасиет.", exampleTranslation: "Ол икемді жан, кез келген жерде тез дос табады." },
        ru: { translation: "адаптивный, гибкий", nuance: "Легко приспосабливающийся к переменам и людям.", exampleTranslation: "Он легко адаптируется и быстро находит друзей." },
        en: { translation: "able to adjust easily to new conditions", nuance: "Flexible, resilient, and comfortable with change.", exampleTranslation: "He readily acclimatizes to novel surroundings." }
      }
    },
    idiom: {
      term: "go with the flow",
      transcription: "[ɡoʊ wɪð ðə floʊ]",
      partOfSpeech: "idiom",
      example: "Don't stress over plans; just relax and go with the flow.",
      translations: {
        kk: { translation: "ағыспен жүру, жағдайға бейімделу", literalMeaning: "тура мағынасы: «су ағысымен бірге ағу»", nuance: "Қарсыласып күйзелмей, оқиғалар желісіне еркін бейімделу.", exampleTranslation: "Жоспарлар үшін уайымдама, жай ғана ағысқа еріп демал." },
        ru: { translation: "плыть по течению, довериться моменту", literalMeaning: "буквально: «двигаться вместе с потоком»", nuance: "Принятие ситуации без лишнего сопротивления и стресса.", exampleTranslation: "Не переживай из-за планов, расслабься и плыви по течению." },
        en: { translation: "accept things casually as they happen", literalMeaning: "literally: drifting smoothly with river water", nuance: "Choosing not to force control; rolling smoothly with events.", exampleTranslation: "Instead of stressing, take events smoothly in stride." }
      }
    }
  },

  // =======================================================
  // 5. ЗАТТАР МЕН БЕЛГІЛЕР (OBJECTS & SYMBOLS)
  // =======================================================
  {
    id: "heart",
    emoji: "❤️",
    category: "objects",
    labels: { kk: "Жүрек", ru: "Сердце", en: "Heart" },
    word: {
      term: "caring",
      transcription: "[ˈkeərɪŋ]",
      partOfSpeech: "adjective",
      example: "A caring nurse helped the injured child.",
      translations: {
        kk: { translation: "қамқор, мейірімді", nuance: "Өзгелерге қол ұшын созып, жылулық сыйлайтын қасиет.", exampleTranslation: "Қамқор мейірбике жарақаттанған балаға көмектесті." },
        ru: { translation: "заботливый, чуткий", nuance: "Внимательный к чужим переживаниям и бедам.", exampleTranslation: "Заботливая медсестра помогла травмированному ребёнку." },
        en: { translation: "displaying kindness, affection, and concern", nuance: "Attentive to the comfort and welfare of others.", exampleTranslation: "The attentive nurse tended gently to the child." }
      }
    },
    idiom: {
      term: "have a heart of gold",
      transcription: "[hæv ə hɑːt əv ɡoʊld]",
      partOfSpeech: "idiom",
      example: "Grandpa has a heart of gold and helps stray animals.",
      translations: {
        kk: { translation: "алтын жүректі, өте мейірімді", literalMeaning: "тура мағынасы: «алтыннан жасалған жүрегі бар»", nuance: "Ешкімнен жақсылығын аямайтын, қайырымды адам туралы айтылады.", exampleTranslation: "Атамның жүрегі алтын, қаңғыбас жануарларға әрдайым қамқор." },
        ru: { translation: "иметь золотое сердце", literalMeaning: "буквально: «обладать золотым сердцем»", nuance: "Искреннее, бескорыстное человеколюбие и доброта.", exampleTranslation: "У дедушки золотое сердце, он всегда помогает бездомным животным." },
        en: { translation: "be exceptionally benevolent, kind, and generous", literalMeaning: "literally: holding a heart forged of pure gold", nuance: "Signifies pure, selfless generosity toward humans and animals alike.", exampleTranslation: "Grandfather possesses genuine generosity and helps those in need." }
      }
    }
  },
  {
    id: "broken_heart",
    emoji: "💔",
    category: "objects",
    labels: { kk: "Жаралы жүрек", ru: "Разбитое сердце", en: "Heartbreak" },
    word: {
      term: "heartbroken",
      transcription: "[ˈhɑːrtˌbroʊkən]",
      partOfSpeech: "adjective",
      example: "She was heartbroken when her pet bird flew away.",
      translations: {
        kk: { translation: "жүрегі ауырған, қатты қайғырған", nuance: "Қымбат нәрседен айырылғандағы терең қасірет.", exampleTranslation: "Қолға үйренген құсы ұшып кеткенде, ол қатты қайғырды." },
        ru: { translation: "убитый горем, сокрушённый", nuance: "Острая боль от потери любимого друга или питомца.", exampleTranslation: "Она была сокрушена горем, когда её птичка улетела." },
        en: { translation: "overwhelmed with intense emotional grief", nuance: "Profound sorrow caused by loss or sudden separation.", exampleTranslation: "Losing her companion pet caused her profound grief." }
      }
    },
    idiom: {
      term: "a broken heart",
      transcription: "[ə ˈbroʊkən hɑːt]",
      partOfSpeech: "idiom",
      example: "Time heals all wounds, even a broken heart.",
      translations: {
        kk: { translation: "жаралы жүрек, ауыр сағыныш", literalMeaning: "тура мағынасы: «сынып кеткен жүрек»", nuance: "Ауыр айырылысу немесе үміттің үзілуінен туындайтын жан азабы.", exampleTranslation: "Уақыт барлық жараны жазады, тіпті жаралы жүректі де." },
        ru: { translation: "разбитое сердце", literalMeaning: "буквально: «расколотое сердце»", nuance: "Классический образ любовной или дружеской тоски.", exampleTranslation: "Время лечит любые раны, даже разбитое сердце." },
        en: { translation: "state of heavy emotional suffering from loss", literalMeaning: "literally: a fractured cardiac organ", nuance: "The universal poetic expression for romantic or personal grief.", exampleTranslation: "Time gradually mends even deep emotional hurts." }
      }
    }
  },
  {
    id: "fire",
    emoji: "🔥",
    category: "objects",
    labels: { kk: "Жалын", ru: "Огонь", en: "Fire" },
    word: {
      term: "passionate",
      transcription: "[ˈpæʃənət]",
      partOfSpeech: "adjective",
      example: "He is a passionate footballer who trains every evening.",
      translations: {
        kk: { translation: "құштар, жалынды", nuance: "Өз ісіне бар жан-тәнімен берілген ынта.", exampleTranslation: "Ол күн сайын жаттығатын футболға құштар ойыншы." },
        ru: { translation: "страстный, увлечённый", nuance: "Преданный своему делу всей душой и сердцем.", exampleTranslation: "Он увлечённый футболист, который тренируется каждый вечер." },
        en: { translation: "intensely devoted and enthusiastic", nuance: "Driven by fiery dedication to a sport or craft.", exampleTranslation: "His dedication to football shows in nightly training." }
      }
    },
    idiom: {
      term: "on fire",
      transcription: "[ɒn ˈfaɪər]",
      partOfSpeech: "idiom",
      example: "Our basketball forward was on fire, scoring twenty points!",
      translations: {
        kk: { translation: "шабыты тасу, бағы жану, нағыз бабында болу", literalMeaning: "тура мағынасы: «жалындап жану»", nuance: "Ойында не жұмыста бірінен соң бірі сәттілікке қол жеткізіп, қарқындау.", exampleTranslation: "Біздің баскетболшы бабында болып, жиырма ұпай жинады!" },
        ru: { translation: "в ударе, на волне оглушительного успеха", literalMeaning: "буквально: «в огне»", nuance: "Серия блестящих победных действий без единого промаха.", exampleTranslation: "Наш нападающий был в ударе и набрал двадцать очков!" },
        en: { translation: "performing with peak perfection and success", literalMeaning: "literally: ablaze with heat", nuance: "A streak of brilliant execution in sports, tests, or arts.", exampleTranslation: "Our star player was unstoppable, sinking twenty points!" }
      }
    }
  },
  {
    id: "star",
    emoji: "⭐",
    category: "objects",
    labels: { kk: "Жұлдыз", ru: "Звезда", en: "Star" },
    word: {
      term: "talented",
      transcription: "[ˈtæləntɪd]",
      partOfSpeech: "adjective",
      example: "The talented young singer won first prize.",
      translations: {
        kk: { translation: "дарынды, талантты", nuance: "Табиғат берген ерекше қабілеті бар жан.", exampleTranslation: "Дарынды жас әнші бірінші орынды жеңіп алды." },
        ru: { translation: "талантливый, одарённый", nuance: "Обладающий природными яркими способностями.", exampleTranslation: "Талантливый юный певец взял главный приз." },
        en: { translation: "gifted with natural creative flair", nuance: "Demonstrating high natural aptitude.", exampleTranslation: "The gifted youth secured the premier contest prize." }
      }
    },
    idiom: {
      term: "reach for the stars",
      transcription: "[riːtʃ fər ðə stɑːrz]",
      partOfSpeech: "idiom",
      example: "Always believe in yourself and reach for the stars!",
      translations: {
        kk: { translation: "биік шыңдарды бағындыру, асқақ армандау", literalMeaning: "тура мағынасы: «жұлдыздарға қол созу»", nuance: "Кішігірім мақсатпен шектелмей, ең биік армандарға ұмтылу.", exampleTranslation: "Әрқашан өзіңе сеніп, биік шыңдарды бағындыруға ұмтыл!" },
        ru: { translation: "тянуться к звёздам, стремиться к вершинам", literalMeaning: "буквально: «тянуться к звёздам»", nuance: "Ставить самые амбициозные цели и не сдаваться.", exampleTranslation: "Всегда верь в свои силы и стремись к самым высоким звёздам!" },
        en: { translation: "aim for lofty ambitions and great heights", literalMeaning: "literally: stretching your arms toward celestial stars", nuance: "Setting grand horizons and working bravely to realize them.", exampleTranslation: "Hold onto ambition and strive for extraordinary milestones!" }
      }
    }
  },
  {
    id: "bullseye",
    emoji: "🎯",
    category: "objects",
    labels: { kk: "Нысана", ru: "Мишень", en: "Target" },
    word: {
      term: "accurate",
      transcription: "[ˈækjərət]",
      partOfSpeech: "adjective",
      example: "His accurate calculation helped launch the toy rocket.",
      translations: {
        kk: { translation: "дәл, қатесіз", nuance: "Нысанаға тиетіндей өте мұқият әрі қатесіз жасалған іс.", exampleTranslation: "Оның дәл есебі ойыншық зымыранды ұшыруға көмектесті." },
        ru: { translation: "точный, меткий", nuance: "Выверенный до мелочей, без единой погрешности.", exampleTranslation: "Его точный расчёт помог запустить игрушечную ракету." },
        en: { translation: "exact, precise, completely correct", nuance: "Hitting precise measurements without error.", exampleTranslation: "His precise figures allowed a flawless toy launch." }
      }
    },
    idiom: {
      term: "hit the bullseye",
      transcription: "[hɪt ðə ˈbʊlzaɪ]",
      partOfSpeech: "idiom",
      example: "Your answer hit the bullseye; that is exactly right!",
      translations: {
        kk: { translation: "дәл нысанаға тигізу, нақ басу", literalMeaning: "тура мағынасы: «нысананың ортасындағы өгіз көзіне тию»", nuance: "Сұрақтың нағыз түйінін тауып, тура мағынасында дөп тигізу.", exampleTranslation: "Сенің жауабың нақ тиді, тура солай!" },
        ru: { translation: "попасть в яблочко, в самую точку", literalMeaning: "буквально: «попасть в глаз быка (центр мишени)»", nuance: "Идеально точный ответ, разрешающий суть проблемы.", exampleTranslation: "Твой ответ попал прямо в яблочко, всё абсолютно верно!" },
        en: { translation: "strike the exact focal point or give the ideal answer", literalMeaning: "literally: hitting the exact red center circle", nuance: "Formulating the exact correct thought on target.", exampleTranslation: "Your explanation struck the core truth perfectly." }
      }
    }
  },
  {
    id: "party",
    emoji: "🎉",
    category: "objects",
    labels: { kk: "Мереке", ru: "Праздник", en: "Party" },
    word: {
      term: "festive",
      transcription: "[ˈfestɪv]",
      partOfSpeech: "adjective",
      example: "The festive lights sparkled across the town square.",
      translations: {
        kk: { translation: "мерекелік, салтанатты", nuance: "Мейрамға тән сән-салтанаты бар көрініс.", exampleTranslation: "Мерекелік шамдар қала алаңында жарқырап тұрды." },
        ru: { translation: "праздничный, нарядный", nuance: "Создающий атмосферу радости и торжества.", exampleTranslation: "Праздничные огни сияли на городской площади." },
        en: { translation: "joyous, decorated for a celebration", nuance: "Evoking celebratory cheer and bright communal joy.", exampleTranslation: "Sparkling decor filled the central square with joy." }
      }
    },
    idiom: {
      term: "paint the town red",
      transcription: "[peɪnt ðə taʊn red]",
      partOfSpeech: "idiom",
      example: "After graduating, the classmates went to paint the town red!",
      translations: {
        kk: { translation: "той-думан жасау, дуылдатып тойлау", literalMeaning: "тура мағынасы: «қаланы қызыл түске бояу»", nuance: "Үлкен табысты достармен бірге шат-шадыман тойлап көңіл көтеру.", exampleTranslation: "Оқуды бітірген соң, сыныптастар дуылдатып тойлауға кетті!" },
        ru: { translation: "кутить, праздновать на всю катушку", literalMeaning: "буквально: «покрасить город в красный цвет»", nuance: "Шумно и весело отмечать победу или окончание учёбы.", exampleTranslation: "После выпуска одноклассники отправились праздновать на всю катушку!" },
        en: { translation: "celebrate exuberantly across town with peers", literalMeaning: "literally: splashing celebratory red across streets", nuance: "Lively public celebration marking a major rite of passage.", exampleTranslation: "Graduation prompted celebratory outings late into the night." }
      }
    }
  },
  {
    id: "rocket",
    emoji: "🚀",
    category: "objects",
    labels: { kk: "Зымыран", ru: "Ракета", en: "Rocket" },
    word: {
      term: "swift",
      transcription: "[swɪft]",
      partOfSpeech: "adjective",
      example: "The swift response saved the ship from sinking.",
      translations: {
        kk: { translation: "жылдам, шапшаң", nuance: "Шапшаңдықпен шешім қабылдап қимылдау.", exampleTranslation: "Шапшаң әрекет кемені суға батудан аман алып қалды." },
        ru: { translation: "стремительный, скорый", nuance: "Быстрый ответ или действие без промедления.", exampleTranslation: "Быстрый ответ спас корабль от затопления." },
        en: { translation: "moving or reacting with rapid speed", nuance: "Prompt and agile execution without delay.", exampleTranslation: "Prompt action prevented a maritime disaster." }
      }
    },
    idiom: {
      term: "skyrocket",
      transcription: "[ˈskaɪˌrɒkɪt]",
      partOfSpeech: "idiom",
      example: "His popularity skyrocketed after the talent show.",
      translations: {
        kk: { translation: "зымырандай өсу, шарықтау", literalMeaning: "тура мағынасы: «аспанға зымырап ұшу»", nuance: "Танымалдықтың немесе нәтиженің аяқ астынан зор қарқынмен жоғарылауы.", exampleTranslation: "Таланттар шоуынан кейін оның танымалдығы зымырандай өсті." },
        ru: { translation: "взлететь ракетой, резко подскочить", literalMeaning: "буквально: «взлететь как небесная ракета»", nuance: "Молниеносный скачок успеха, оценок или известности.", exampleTranslation: "После шоу талантов его популярность взлетела до небес." },
        en: { translation: "rise abruptly and extraordinarily fast", literalMeaning: "literally: ascending straight up into the sky", nuance: "Depicts vertical trajectory in fame, score, or progress.", exampleTranslation: "His public recognition surged with meteoric speed." }
      }
    }
  },
  {
    id: "lightbulb",
    emoji: "💡",
    category: "objects",
    labels: { kk: "Шам", ru: "Лампочка", en: "Idea" },
    word: {
      term: "inventive",
      transcription: "[ɪnˈventɪv]",
      partOfSpeech: "adjective",
      example: "The inventive boy built an automatic dog feeder.",
      translations: {
        kk: { translation: "тапқыр, өнертапқыш", nuance: "Жаңа тың идеяларды оңай ойлап табатын қабілет.", exampleTranslation: "Тапқыр бала итке тамақ беретін автоматты құрылғы жасады." },
        ru: { translation: "изобретательный, находчивый", nuance: "Способность придумывать оригинальные решения.", exampleTranslation: "Изобретательный мальчик создал автокормушку для собаки." },
        en: { translation: "skillful at conceiving new designs", nuance: "Clever at producing practical novel innovations.", exampleTranslation: "The creative youth crafted a practical pet feeder." }
      }
    },
    idiom: {
      term: "have a lightbulb moment",
      transcription: "[hæv ə ˈlaɪtbʌlb ˈmoʊmənt]",
      partOfSpeech: "idiom",
      example: "While walking home, I had a lightbulb moment for the story.",
      translations: {
        kk: { translation: "жарқ ете қалған ой келу, миына сап ете қалу", literalMeaning: "тура мағынасы: «шам жанғандай сәтті бастан кешіру»", nuance: "Мультфильмдердегідей кенеттен басына тамаша шешім не идеяның келуі.", exampleTranslation: "Үйге келе жатып, әңгімем үшін миыма керемет тың ой сап ете қалды." },
        ru: { translation: "осенить, пришла гениальная идея", literalMeaning: "буквально: «момент загоревшейся лампочки»", nuance: "Внезапное озарение, как лампочка над головой персонажа.", exampleTranslation: "По дороге домой меня осенила блестящая идея для рассказа." },
        en: { translation: "experience an abrupt, illuminating realization", literalMeaning: "literally: the classic cartoon bulb turning on above the head", nuance: "An epiphany revealing an elegant answer to an obstacle.", exampleTranslation: "A stroke of inspiration arrived during my walk home." }
      }
    }
  },
  {
    id: "key",
    emoji: "🔑",
    category: "objects",
    labels: { kk: "Кілт", ru: "Ключ", en: "Key" },
    word: {
      term: "crucial",
      transcription: "[ˈkruːʃəl]",
      partOfSpeech: "adjective",
      example: "Regular practice is crucial for learning languages.",
      translations: {
        kk: { translation: "аса маңызды, шешуші", nuance: "Нәтижеге тікелей әсер ететін басты талап.", exampleTranslation: "Үздіксіз жаттығу тіл үйренуде аса маңызды рөл атқарады." },
        ru: { translation: "крайне важный, ключевой", nuance: "Фактор, определяющий успех всего начинания.", exampleTranslation: "Регулярная практика имеет решающее значение для изучения языков." },
        en: { translation: "of decisive importance", nuance: "An essential component governing outcome.", exampleTranslation: "Daily practice plays a vital role in language fluency." }
      }
    },
    idiom: {
      term: "the key to success",
      transcription: "[ðə kiː tə səkˈses]",
      partOfSpeech: "idiom",
      example: "Curiosity and patience are the key to success.",
      translations: {
        kk: { translation: "табыстың кілті", literalMeaning: "тура мағынасы: «жетістік есігін ашатын кілт»", nuance: "Жетістікке жету үшін ең басты қажет болатын құпия немесе қасиет.", exampleTranslation: "Құштарлық пен сабырлылық — нағыз табыстың кілті." },
        ru: { translation: "ключ к успеху, залог победы", literalMeaning: "буквально: «ключ, отпирающий успех»", nuance: "Главный секрет достижения высоких результатов.", exampleTranslation: "Любознательность и терпение — главный ключ к успеху." },
        en: { translation: "the primary secret or indispensable factor for achievement", literalMeaning: "literally: the tool unlocking achievement", nuance: "Core philosophy or skill unlocking major progress.", exampleTranslation: "Curiosity paired with patience unlocks accomplishments." }
      }
    }
  },
  {
    id: "gift",
    emoji: "🎁",
    category: "objects",
    labels: { kk: "Сыйлық", ru: "Подарок", en: "Gift" },
    word: {
      term: "generous",
      transcription: "[ˈdʒenərəs]",
      partOfSpeech: "adjective",
      example: "She is generous and shares her colored pencils with everyone.",
      translations: {
        kk: { translation: "жомарт, кеңпейіл", nuance: "Өз затымен өзгелермен қуана бөлісетін адам.", exampleTranslation: "Ол өте жомарт, түрлі-түсті қарындаштарын бәрімен бөліседі." },
        ru: { translation: "щедрый, великодушный", nuance: "Готовый делиться и радовать других подарками.", exampleTranslation: "Она щедрая и делится цветными карандашами со всеми." },
        en: { translation: "willing to give and share unselfishly", nuance: "Freely distributing help and belongings.", exampleTranslation: "She shares her supplies with genuine warmth." }
      }
    },
    idiom: {
      term: "a blessing in disguise",
      transcription: "[ə ˈblesɪŋ ɪn dɪsˈɡaɪz]",
      partOfSpeech: "idiom",
      example: "Missing that bus was a blessing in disguise; I met an old friend.",
      translations: {
        kk: { translation: "жамандықтың артындағы жақсылық", literalMeaning: "тура мағынасы: «бетперде киген бата»", nuance: "Бастапқыда сәтсіз көрінгенмен, соңында пайдалы болып шыққан жағдай.", exampleTranslation: "Автобустан қалып қою жақсы болды, ескі досымды жолықтырдым." },
        ru: { translation: "не было бы счастья, да несчастье помогло", literalMeaning: "буквально: «замаскированное благословение»", nuance: "Неприятность, которая неожиданно обернулась удачей.", exampleTranslation: "Опоздание на автобус обернулось удачей: я встретил старого друга." },
        en: { translation: "an apparent misfortune that results in good fortune", literalMeaning: "literally: a favor hidden behind a mask", nuance: "An initially annoying mishap that reveals an unexpected benefit.", exampleTranslation: "Missing transit surprisingly led to catching up with a friend." }
      }
    }
  },
  {
    id: "apple",
    emoji: "🍎",
    category: "objects",
    labels: { kk: "Алма", ru: "Яблоко", en: "Apple" },
    word: {
      term: "healthy",
      transcription: "[ˈhelθi]",
      partOfSpeech: "adjective",
      example: "Eating fresh fruit keeps you healthy and strong.",
      translations: {
        kk: { translation: "дені сау, пайдалы", nuance: "Ағзаға пайдалы, күш-қуат беретін тағам не әдет.", exampleTranslation: "Жаңа піскен жемістерді жеу денсаулықты мықты етеді." },
        ru: { translation: "здоровый, полезный", nuance: "Благотворно влияющий на физическое состояние тела.", exampleTranslation: "Свежие фрукты помогают оставаться здоровым и сильным." },
        en: { translation: "in good physical condition, beneficial", nuance: "Promoting physical fitness and well-being.", exampleTranslation: "Consuming fruit sustains bodily vitality." }
      }
    },
    idiom: {
      term: "the apple of someone's eye",
      transcription: "[ði ˈæpəl əv ˈsʌmwʌnz aɪ]",
      partOfSpeech: "idiom",
      example: "The little granddaughter is the apple of her grandfather's eye.",
      translations: {
        kk: { translation: "көздің қарашығындай, ең сүйікті", literalMeaning: "тура мағынасы: «біреудің көзінің алмасы»", nuance: "Ерекше жақсы көретін, барлығынан артық еркелететін сүйікті адам.", exampleTranslation: "Кішкентай немере қыз — атасының көздің қарашығындай сүйіктісі." },
        ru: { translation: "зеница ока, всеобщий любимчик", literalMeaning: "буквально: «яблоко чьего-то глаза (зрачок)»", nuance: "Самый дорогой и любимый человек, которого берегут превыше всего.", exampleTranslation: "Маленькая внучка — свет в окошке и зеница ока для своего дедушки." },
        en: { translation: "someone cherished above all others", literalMeaning: "literally: the delicate pupil of the eye", nuance: "Ancient phrase describing a deeply loved individual.", exampleTranslation: "The granddaughter is cherished deeply by her grandfather." }
      }
    }
  }
];

if (typeof window !== "undefined") {
  window.EMOJI_DATABASE = EMOJI_DATABASE;
}
