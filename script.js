// script.js
const data = [
    
        {
         name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
         editor: "B.TULAYEV",
         tili: "KRILL",
        turkum: "METODIK ASOS"
        },
        {
         name: "XRONOLOGIYA VA METROLOGIYA ",
         editor: "FAYZULLAYEVA M",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "ONTOGNEZ PSIXOLOGIYASI ",
         editor: "E.G'.G'OZIYEV",
         tili: "LOTIN",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "EXPERIMENTAL PSYCHOLOGY HANDBOOK OF RESEARCH METHODS IN",
         editor: "STEPHEN F.DAVIS",
         tili: "ENGLISH",
        turkum: "METODIK ASOS"
        },
        {
         name: "O'ZBEKCHA-RUSCHA VA RUSCHA O'ZBEKCHA LUG'AT",
         editor: "M.M.ABDURAXIMOV",
         tili: "LOTIN",
        turkum: "LUG'AT"
        },
        {
         name: "ENGLISH TESTS GRAMMATIKA VA MAVZULASHTIRILGAN TESTLAR TO'PLAMI 1996-2015",
         editor: "N.SAMANOVA",
         tili: "ENGLISH",
        turkum: "TEST"
        },
        {
         name: "INGLIZ VA O'ZBEK TILLARIDA KOMPARATIVLIK KATEGORYASINING SINTAKTIK-SEMANTIK XUSUSIYATLARI ",
         editor: "AYBEK KALANDAROV",
         tili: "LOTIN",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "KOMPYUTER LINGVISTIKASI ASOSLARI",
         editor: "AZAMATJON RAXIMOV",
         tili: "LOTIN",
        turkum: "LUG'AT"
        },
        {
         name: "INSTITUTSIONAL IQTISODIYOT ",
         editor: "M.I.KUTBITDINOVA",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "IJTIMOIY SAFARBARLIK",
         editor: "SHAVKAT TO'RAYEV,NIGORA XUSANOVA",
         tili: "KRILL",
        turkum: "RISOLA"
        },
        {
         name: "O'ZBEK MILLIY FALASAFA MAKTABINING ASOSCHISI",
         editor: "BO'RI QODIROV",
         tili: "KRILL",
        turkum: "RISOLA"
        },
        {
         name: "XORAZM JADID NAMOYONDALARI:XAYOTI,FAOLIYATI VA ADABIY MEROSI",
         editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "XORAZM JADIDCHILIGI:ISLOHOTLAR,TALIM VA ADABIYOT",
         editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "BOBOOXUN SALIMOV-JADID,DAVLAT ARBOBI VA SHOIR",
         editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "XORAZM JADIDCHILIK XARAKATI ENSKLOPEDIYASI",
         editor: "UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "ENSKLOPEDIYA"
        },
        {
         name: "МЕДИАОБРАЗОВАНИЕ И МЕДИАГРАМОТНОСТЬ",
         editor: "АХМЕТОВА Л.С",
         tili: "РУС",
        turkum: "СПРАВОЧНИК"
        },
        {
         name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
         editor: "AMIROV.D.M,ATAJANOV",
         tili: "KRILL",
        turkum: "IZOHLI LUG'AT"
        },
        {
         name: "MIKROIQTISODIYOT",
         editor: "HURMATOV.N",
         tili: "KRILL",
        turkum: "MARUZA MATNI"
        },
        {
         name: "MAKROIQTISODYOT",
         editor: "X.S.XADJAEV,I.A.BAKIYEVA,SH.SH.FAYZIYEV",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "IQTISODIYOT NAZARYASI FANIDAN    ",
         editor: "S.IBRAGIMOV",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "XORAZM VOHASIDA ARXEOLOGIK TADQIQOTLAR TARIXI",
         editor: "MATKARIMOV XAMIDBEK OLIMBAYEVICH",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "ZAMONAVIY PSIXOLOGIYADA DOLZARB MUAMMOLARI:YECHIM VA ISTIQBOLLARI 1 QISM",
         editor: "DSC.D.A.URAZBAYEVA",
         tili: "LOTIN",
        turkum: "KONFERENSIYA TO'PLAMI"
        },
        {
         name: "ZAMONAVIY PSIXOLOGIYADA DOLZARB MUAMMOLARI:YECHIM VA ISTIQBOLLARI 2 QISM",
         editor: "DSC.D.A.URAZBAYEVA",
         tili: "LOTIN",
        turkum: "KONFERENSIYA TO'PLAMI"
        },
        
        {
         name: "MAKROIQTISODIYOT",
         editor: "E.I.ERGASHEV ,N.S.KASIMOVA ,U.K.MUXTOROVA,G.X.NAZAROVA ,M.E.JABBAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "G'AZNACHILIKNING DASTURIY KOMPLEKSLARI",
         editor: "G.A.KASIMOVA,A.XAYDAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "BUXGALTERYA HISOBI:XALQARO MOLIYAVIY XISOBOT STANDARTLARI ",
         editor: "A.A.KARIMOV,A.K.IBRAGIMOV,N.K.RIZAYEV,N.M.IMAMOVA",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "XALQARO MOLIYA MUNOSABATLARI ",
         editor: "E.D.ALIMARDONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "BANK AUDITI",
         editor: "M.L.YADGAROVA,R.B.QURBONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY XISOBOT TAHLILI",
         editor: "M.YU.RAXIMOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT VA MOLIYAVIY MENEJMENT",
         editor: "USMANOVA .N.YU",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MIKROIQTISODIYOT",
         editor: "B.Y.SALIMOVA M.S.YUSUPOV,B.B.SALIMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ATROF-MUHIT VA TABIIY RESURSLAR IQTISODIYOTI",
         editor: "I.XOTAMOV,M.SULTANOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MAKROIQTISODIYOT 2",
         editor: "I.O.YAKUBOV,H.A.HAKIMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "XALQARO BIZNES ",
         editor: "BEKMURADOV A.SH,TURSUNOV R.T,XOTAMOV I.S",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "BUXGALTERYA HISOBI  ",
         editor: "A.A.KARIMOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "KORXONA IQTISODIYOTI VA INNAVATSIYALARNI BOSHQARISH",
         editor: "E.SH.SHODMONOV,D.SH.BABABEKOVA ,B.O.TURSUNOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "AUDIT",
         editor: "N.TOSHMATOV , X.KAMOLOV,I.NOSIROV,S.TOSHMATOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PROMOTING  INCLUSIVE GROWTH",
         editor: "LUIZ DE MELLO AND MARK A.DUTZ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "AUDITORLIK FAOLYATINING MILLIY STANDARTLARI",
         editor: "AXMEDJANOV.K.B",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "BIZNES QIYMATNI BAHOLASH ",
         editor: "L.S.ZOYIROV,U.K.MUXTOROVA,S.K.QOSIMOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ZAMONAVIY KORPARATIV BOSHQARUV ",
         editor: "SAMARIDDIN ELMIRZAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "KORXONA IQTISODIYOTI VA INNAVATSIYALARNI BOSHQARISH",
         editor: "I.XOTAMOV,SH.MUSTAFOQULOV,M.ISAKOV,A.ABDUVALIYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "WILEY INTERPRETATION AND APPLICATION OF IFRS STANDARTS",
         editor: "JOHN WILEY AND SONS ",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MIKROIQTISODIYOT 2",
         editor: "B.T\/SALIMOV,M.S.YUSUPOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BIZNES BOSHQARUVI ASOSLARI",
         editor: "MUHAMMADJON BO'TABOYEV ,MANSURJON TOSHMAMATOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIY TAHLIL NAZARYASI",
         editor: "A.X.SHOALIMOV,SH.A.TOJIBOYEVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "INNOVATSION IQTISODIYOT ",
         editor: "Y.E.ALIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "INNOVATSION IQTISODIYOT ",
         editor: "A.TANIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY XISOBOT VA AUDITNING XALQARO STANDARTLARI",
         editor: "DYSMURATOV R.D,RO'ZIYEV H.K NAZAROV X.X",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "INKLYUZIV IQTISODIY O'SISH",
         editor: "M.T.ASQAROVA , L.F.AMIROV A.A.ISMOILOV A.R.YAXSHIMURATOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY MENEDJMENT",
         editor: "A.B DJUMANOVA ,M.N KUSHAKOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MARKETING ASOSLARI",
         editor: "ERGASHXODJAYEV SH.DJ,YUSUPOV M.A,G'OYIBNAZAROV S.B, SHARIPV I.B",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "SOLIQ NAZARYASI VA TARIXI ",
         editor: "I.M.NIYAZMETOV, S.A.GIYASOV, F.A.FAYZIYEV, R.R.DUSCHANOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "AMALIY AUDIT ",
         editor: "SH.I.ILHAMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FINANCIAL ACCOUNTING ",
         editor: "MUKHIDDIN KALONOV ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "XALQARO VALYUTA-KREDIT MUNOSABATLARI 3 QISM",
         editor: "J.X.AATANIYOZOV,E.D.ALIMARDONOV,A.B.SHEROV,M.A.MIRZAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ФИНАНСОВЫЙ АНАЛИЗ",
         editor: "SAGDULLAYEVA.Z,YULDASHEVA.U,ALIMOV B",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "ИННОВАЦИОННАЯ ЭКОНОМИКА",
         editor: "S.S.KASIMOV",
         tili: "RUS",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KORPARATIV MOLIYA ",
         editor: "SAMARIDDIN ELMIRZAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BYUDJET G'AZNA IJROSI HISOBI ",
         editor: "S.MEXMONOV.I.QO'ZIYEV,A.KULIBOYEV , A.OSTONKULOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY MENEDJMENT",
         editor: "SIROJIDDINOV IKROMIDDIN KUTBIDDINOVICH , KADIROVA XADICHA TO'RAYEVNA , RAXMONOV DILSHODJON ALIDJONOVICH ",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "XALQARO MOLIYA INSTITUTLARI ",
         editor: "J.X.ATANIYAZOV F.A.XAMIDOVA M.B.PULATOVA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY TAHLIL",
         editor: "M.Y.RAXIMOV,N.N.KALANDAROVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "XALQARO MOLIYA BOZORI TAHLILI",
         editor: "J.ATANIYOZOV,E.ALIMARDONOV,F.HAMIDOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY MENEDJMENT",
         editor: "A.G.IBRAGIMOV,Z.R.MADAMINOVA,M.E.RAXMATULLAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "KORXONA IQTISODIYATI VA MENEJMENTI",
         editor: "I.O.ULASHEV,SH.A.ATAMURADOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "DAVLAT MOLIYASI ",
         editor: "B.I.NURMUHAMEDOVA SH.K.XAMDAMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "DAVLAT BYUDJETI",
         editor: "B.I.NURMUHAMEDOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYA BOZORI",
         editor: "J.R.ZAYNALOV,E.N.XODJAYEV,B.SH.XASANOV,N.X.RUZIBAYEVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: " PRINCIPLES OF FINANCIAL ACCOUNTING ",
         editor: "CHRISTINE JONICK,ED.D",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ТЕРАПЕВТИЧЕСКАЯ И КОНСУЛЬТАТИВНАЯ ПСИХОЛОГИЯ   КЛАССИКИ И СОВРЕМЕННИКИ ПСИХОЛОГИИ",
         editor: "МАРИНА ГУЛИНА",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "СТАТИСТИЧЕСКИЕ МЕТОДЫ В ПЕДАГОГИКЕ И ПСИХОЛОГИИ 1 ЧАСЬ",
         editor: "ДЖ.ГЛАСС.ДЖ СТЭНЛИ ",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "СТАТИСТИЧЕСКИЕ МЕТОДЫ В ПЕДАГОГИКЕ И ПСИХОЛОГИИ 2 ЧАСЬ",
         editor: "ДЖ.ГЛАСС.ДЖ СТЭНЛИ ",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "MCCONNELL BRUE FLYNN ECONOMICS",
         editor: "MCGRAW-HILL",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "INSTITUTSIONAL IQTISODIYOT ",
         editor: "ABULQOSIMOV H.P,BERKINOV.B.B,ABULQOSIMOV M.H,UMAROV A.T,QULMATOV A.A",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIY XAVFSIZLIK",
         editor: "ABULKASIMOV H.P MAMATOV A.A MAMATOV S.A  SAIDGAZIEVA S.S",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY TAHLIL",
         editor: "B.A.XASANOV M.Y.RAXIMOV Z.A.MUQIMOV A.I.ALIQULOV A.B.JUMANOVA N.SH.XAJIMURATOV R.B.XASANOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ДЕНЬГИ .КРЕДИТ.БАНКИ",
         editor: "М.С МАРАМЫГИНА Е.Н ПРОКОФЬЕВОЙ ",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "BYUDJET HISOBI VA NAZORATI",
         editor: "I.N.QO'ZIYEV SH.V.G'ANIYEV A.S.RAMAZONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI ",
         editor: "SH.SHODMONOV M.RAXMATOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYA VA SOLIQLAR ",
         editor: "B.SH.SAFAROV,I.I.AYUBOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIY TAHLIL  ",
         editor: "M.Q.PARDAEV,J.I.ISROILOV,B.I.ISROILOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI ",
         editor: "T.JO'RAYEV,D.TOJIBOYEVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MACROECONOMICS",
         editor: "N.GREGORY MANKIW",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ИСТОРИЯ ЭКОНОМИЧЕСКИХ УЧЕНИЙ ",
         editor: "ЯДГАРОВ.Я.С",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
         editor: "B.D.XAJIYEV K.K.MAMBETJANOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "STATISTIKA BO'YICHA PRAKTIKUM",
         editor: "HABIBULLAYEV IBROHIM HABIBULLAYEVICH, SHADIYEV XAMID AZIMIOVICH,UTANOV BUNYOD QUVONDIQOVICH",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "INVISTITSIYALARNI TASHKIL ETISH VA MOLIYALASHTIRISH",
         editor: "MAMATOV BAXADIR SAFARALIYEVICH,XUJAMKULOV DILMUROD YUSUPALIYEVICH,NURBEKOV OYBEK SHERALIYEVICH",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "R.R.TOJIYEV,A.A.AZLAROVA,N.R.BAZAROVA,N.G.SATTOROVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "AMALIY STATISTIKA ",
         editor: "AYUBJONOV A.H",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "INVISTITSIYA LOYIHALARINI MOLIYALASHTIRISH 1 -QISM",
         editor: "NASIROV EGAMQUL ISMOILOVICH,ASAMXODJAYEVA SHOIRA SHUKRULLAYEVNA, ALIQULOV MEHMONALI SOLOHIDDIN O'G'LI",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "INVISTITSIYA LOYIHALARINI MOLIYALASHTIRISH 2-QISM",
         editor: "NASIROV EGAMQUL ISMOILOVICH,ASAMXODJAYEVA SHOIRA SHUKRULLAYEVNA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "EXPRIMENTAL PSIXOLOGIYA ",
         editor: "M.X.KARAMYAN,B.B.NURULLAYEVA,E.V.BONDAREVA,M.X.DJUMANIYOZOVA,F.E.GAZIYEVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "A.A.OMONOV,T.M.KORALIYEV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "EKONOMETRIKA",
         editor: "B.B.BERKINOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ENGLISH SPEAKING COUNTRIES",
         editor: "ISHAK YAKUBOV",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "PEDAGOGIK PSIXOLOGIYA ",
         editor: "E.G.G'OZIYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "PSIXOLOGIYA METODOLOGIYASI",
         editor: "A.X.NISHANOV,O.K.XUJAYEV,G.X.ABDULLAYEVA,B.B.NURMETOVA",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "СРАВНИТЕЛЬНАЯ ТИПОЛОГИЯ АНГЛИЙСКОГО И РУССКОГО ЯЗЫКОВ",
         editor: "ARAKIN.V.D",
         tili: "RUS",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ПРОБЛЕМЫ СОПОСТАВИТЕЛНОЙ ЛИНГВИСТИКИ",
         editor: "U.K.YUSUPOV",
         tili: "RUS",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EKONOMETRIKA ",
         editor: "I.HABIBULLAYEV,A.JUMAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "COMMON EUROPEAN FRAMEWORK OF REFERENCEFOR LANGUAGES:LEARNING,TEACHING,ASSESSMENT",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "A COURSE IN LANGUAGE TEACHING PRACTICE AND THEORY",
         editor: "PENNY UR ",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "THE TRANSLATORS HANDBOOK (WITH SPECIAL REFERENCE TO CONFERENCE TRANSLATION FROM FRENCH AND SPANISH)",
         editor: "FREDRICK FULLER,M.A.SOMETIMES SENIOR REVISER ,UNITER NATIONS ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "APPROACHES AND METHODS IN LANGUAGE TEACHING SEKOND EDITION ",
         editor: "JACK.C. RICHARDS AND THEODORE S. RODGERS",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ENGLISH LITERATURE FROM THE 19TH CENTURY THROUGH TODAY",
         editor: "J.E.LUEBERING",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ADVANCED RESEARCH  METHODS FOR APPLIED PSYCHOLOGY",
         editor: "PAULA BROUGH",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ПРАКТИЧЕСКАЯ ПСИХОЛОГИЯ",
         editor: "ABRAMOVA G.C",
         tili: "RUS",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "ПРАКТИЧЕСКАЯ ПСИХОЛОГИЯ ОБРАЗОВАНИЯ ",
         editor: "I.V.DUBROVINOY",
         tili: "RUS",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "DENGI ,KREDIT,BANKI",
         editor: "E.I.KUZNESOVA",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "DENGI ,KREDIT,BANKI",
         editor: "G.N.BELOGLAZOBOY",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "STATISTIKA  ",
         editor: "STENTON GLANS",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "ИСТОРИЯ ИНФОРМАТИКА ",
         editor: "И.М.ГАРСКОВА",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "TA'LIMDA AXBOROT TEXNOLOGIYALARI",
         editor: "AYUPOV RAVSHAN HAMDAMOVICH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KIBERXAVSIZLIK ASOSLARI ",
         editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "DENGI ,KREDIT,BANKI",
         editor: "M.C.MARAMIGINA,E.N.PROKOFEVOY",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "STRATEGIK MENEJMENT",
         editor: "N.Q.YO'LDOSHEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "XALQARO VALYUTA-KREDIT MUNOSABATLARI 1 QISM",
         editor: "J.X.ATANIYAZOV,N.X.JUMAYEV,E.D.ALIMARDONOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ ФИНАНСОВОЙ  ОТЧЕТНОСТИ:БАЗОВЫЙ КУРС",
         editor: "Б.Н.ЕЛЬЦИНА",
         tili: "RUS",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ACCA ADVANSED AND ASSURANCE (AAA)",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ICHKI AUDIT ",
         editor: "K.B.AXMEDJANOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ИСТОРИЯ НАУКИ И ТЕХНИКИ ",
         editor: "А.В.ТАКАЧЕВА",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "GLOBAL IQTISODIYOT RIVOJLANISHI ",
         editor: "A.X.DJUMAYEV,SH.S.SHARIFOV,A.N.NIZAMOV,I.I.ERGASHEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONDA MILLATLARARO MUNOSABATLAR VA BAG'RIKENGLIK",
         editor: "RAXBARXON MURTAZAYEVA ",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
         editor: "B.TULAYEV",
         tili: "KRILL",
        turkum: "METODIK ASOS"
        },
        {
         name: "GET READY FOR IELTS SPEAKING",
         editor: "RHONA SNELLING",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "O'ZBEKISTON DAVLATCHILIGI VA BOSHQARUV TARIXI ",
         editor: "BAXODIR ESHOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "LISTENING B2+UPPER INTERMEDIATE",
         editor: "IAN BADGER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LISTENING B1+INTERMEDIATE ",
         editor: "IAN BADGER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
         editor: "А.М.НОВИКОВ Д.А.НОВИКОВ",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "JAHON TARIXI",
         editor: "T.O'.SALIMOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "JAHON TARIXI  (QADIMGI SHARQ,QADIMGI YUNONISTON VA RIM TARIXI",
         editor: "D.URAKOV,R.TURSUNOV,A.BIYKUZIYEV,B.XAYNAZAROV.",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTON TARIXI (1917-1991 YILLAR)",
         editor: "RAVSHAN ABDULLAYEV , MIRZOHID RAXIMOV,QAHRAMON RAJABOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "JAHON TARIXI YANGI DAVR XVI-XVIII ASRLAR (1-QISM)",
         editor: "SHUHRAT ERGASHEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MATERIALS DEVELOPMENT IN LANGUAGE TEACHING SECOND EDITION ",
         editor: "BRIAN TOMLINSON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "O'ZBEK DIPLOMATIYASI TARIXIDAN",
         editor: "M.M.XAYRULLAYEV ",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONDA DAVLAT VA MAHALLIY BOSHQARUV TARIXI  1 QISM",
         editor: "BAXODIR ESHOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "QADIMGI O'ZBEKISTON ILK YOZMA MANBALARDA ",
         editor: "SAGDULLAYEV .A",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IELTS RESOURCE PACK PHOTOCOPIABLE GAMES ACTIVITIES AND PRACTICE TESTS FOR IELTS PREPARATION CLASSES",
         editor: "JON MARKS ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ACADEMIC WRITING A HANDBOOK FOR INTERNATIONAL STUDENTS ",
         editor: "STEPHEN BAILEY ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ENGLISH LITERATURE  FROM THE THROUGH THE ROMANTIK PERIOD ",
         editor: "J.E.LUEBRING",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "DESTINATION C1 AND C2 GRAMMAR AND VOCABULARY WITH ANSWER KEY ",
         editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "LEARNING TO LISTEN MAKING SENSE OF SPOKEN ENGLISH ",
         editor: "LIN LOUGHEED ",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ПЕДАГОГИЧЕСКАЯ ПСИХОЛОГИЯ ",
         editor: "И.М.ЗИМНЯЯ ",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК СИНТАКСИС",
         editor: "Н.С.ВАЛГИНА",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "APPROACHES TO TRANSLATION ",
         editor: "PETER NEWMARK",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "A LINGUISTIC THEORY OF TRANSLATION ",
         editor: "J.C.CATFORD ",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "G'ARB FALSAFASI",
         editor: "Q.QAYUMOV,B.BOBOJONOV,L.XIJOVA",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "ILMIY TADQIQOT METODOLOGIYASI ",
         editor: "N.A.SHERMUHAMEDOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA",
         editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ 2-Е ИЗДАНИЕ ДОПОЛНЕННОЕ ",
         editor: "В.Н.ДРУЖИНИН",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "ПРОЛЕМЫ ПРЕВОДА ",
         editor: "Т.Р ЛЕВИЦКАЯ А.М.ФИТЕРМАН",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "A HISTORY OF LITERATURE SECOND EDITION",
         editor: "RICHARD GRAY",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК  МОРФЕМИКАБСЛОВООБРАЗОВАНИЕБМОРФОЛОГИЯ",
         editor: "Е.Н.ТИХОНОВА",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "ЯЗЫК И ПЕРЕВОД ВОПРОСЫ ОБЩЕЙ ИЧАСТНОЙ ТЕОРИИ ПЕРЕВОДА ",
         editor: "Л.С.БАРХУДАРОВ",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "ПСИХОЛОГИЯ ЭКСТРЕМАЛЬНЫХ СИТУАЦИЙ ДЛЯ СПАСАТЕЛЛЕЙ И ПОЖАРНЫХ",
         editor: "Ю.С.ШОЙГУ",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "ПСИХОЛОГИЯ СТРЕССА И МЕТОДЫ ЕГО ПРОФИЛАКТИКИ",
         editor: "В.Р.БИЬДАНОВА Г.К.БИСЕРОВА Г.Р.ШАГИВАЛЕЕВА",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "TILSHUNOSLIKKA KIRISH ",
         editor: "M.T.IRISQULOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIK DIAGNOSTIKA VA KORREKTSIYA ",
         editor: "ABDULLAYEVA SH.A,RO'ZIYEVA D.I",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "TESTOLOGIYA",
         editor: "A.I.RASULOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ XVIII ВЕКА",
         editor: "БУХАРКИН.П.Е",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА",
         editor: "М.А.РАХИМОВ",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА В ШКОЛЕ",
         editor: "M.T.BARANOV,N.A.IPPOLITOVA,T.A.LADIJENKOVA ,M.R.LIVOV",
         tili: "RUS",
        turkum: "УЧЕБНИК"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
         editor: "I.M.HAYDAROV ,M.M.ASQAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
         editor: "MATYAKUBOV X.X",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
         editor: "R.E.XOLIQOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА",
         editor: "М.А.РАХИМОВ",
         tili: "RUS",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI XRISTOMATYASI",
         editor: "N.TALIPOVA",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
         editor: "NAIM OBLOMURODOV FAYZULLA TOLIPOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI BIRINCHI KITOB",
         editor: "X.SODIQOV,R.SHAMSUTDINOV,P.RAVSHANOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI IKKINCHI KITOB 2-QISM",
         editor: "M.JO'RAYEV,R.NURILLIN,C.KAMOLOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI IKKINCHI KITOB 1-QISM",
         editor: "M.JO'RAYEV,R.NURILLIN,C.KAMOLOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI UCHINCHI KITOB TOM 2",
         editor: "N.JO'RAYEV,A.AZIZXO'JAYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONNING ENG YANGI TARIXI UCHINCHI KITOB TOM 1",
         editor: "N.JO'RAYEV,A.AZIZXO'JAYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ИСТОРИЯ МИРОВОЙ ЛИТЕРАТУРЫ",
         editor: "М.Ф.ЛУЧАНОВА",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ИСТОРИЯ ДРЕВНЕ РУССКОЙ ЛИТЕРАТУРЫ ЧАСТЬ 1 ЛИТЕРАТУРА КИЕВСКОЙ РУСИ",
         editor: "Л.Я.БОБРИЦКИХ",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "JAHON TARIXI VA MANBASHUNOSLIK KAFEDRASI ARXIVSHUNOSLIK FANIDAN",
         editor: "T.PARDAYEV,Z.XOLIQOV",
         tili: "LOTIN",
        turkum: "O'QUV METODIK MAJMUA"
        },
        {
         name: "XRONOLOGIYA VA METROLOGIYA ",
         editor: "FAYZULLAYEVA M",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "SHARQ FALSAFASI VA MADANYATI TARIXI ",
         editor: "D.A.PO'LATOVA,M.Q.QODIROV,J.B.SULAYMONOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "CHET TIL O'QITISH METODIKASI",
         editor: "JAMOL JALOLOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PSIXOLOGIK TERNING ",
         editor: "DILBAR URAZBAYEVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA",
         editor: "OBID HAYDAROV,JAMOLIDDIN OSTONOV,OZODA SULTONOVA ",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "FALSAFA 1 QISM ",
         editor: "ZIYODULLA DAVRONOV, AZIZA SULTANOVA ,NARGIZA PARPIYEVA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "PSIXADIAGNOSTIKA VA EXSPREMENTAL PSIXOLOGIYA ",
         editor: "Z.NISHANIVA,D.QARSHIEVA,N.ATABAYEVA,Z.QURBONOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ONTOGNEZ PSIXOLOGIYASI ",
         editor: "E.G'.G'OZIYEV",
         tili: "LOTIN",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "SOCIAL PSYCHOLOGY TENTH EDITION",
         editor: "DAVID G.MYERS",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
         editor: "В.В.НИКАНДРОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
         editor: "T.V.KORNILOVA ",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
         editor: "V.N.DRUJNIN",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "PSIXADIAGNOSTIKA VA EXSPREMENTAL PSIXOLOGIYA ",
         editor: "Z.NISHANOVA,Z.QURBONOVA,S.ABDIYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "UMUMIY PSIXOLOGIYA ",
         editor: "F.XAYDAROV,N.XALILOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "МЕДИАОБРАЗОВАНИЕ ИСТОРИЯ И ТЕОРИЯ ",
         editor: "A.V.FEDOROV",
         tili: "RUS",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "UMUMIY PSIXOLOGIYA ",
         editor: "P.I.IVANOV,M.E.ZUFAROVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA 2-KITOB (YOSH DAVRLARI VA PEDAGOGIK PSIXOLOGIYA ",
         editor: "SH.A.DO'SMUHAMMEDOVA,X.A.TILLASHAYXOVA,G.BAYKUNUSOVA,G.ZIYAVITDINOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA ",
         editor: "N.S.SAFAEV,N.A.MIRASHIROVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ПРАКТИКУМ ПО ПСИХОЛОГИЧЕСКОМУ ИССЛЕДОВАНИЮ",
         editor: "ГОРБАТОВ Д.С.",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "PSIXOLOGIYA  ",
         editor: "E.G'.G'OZIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA ",
         editor: "F.I.XAYDAROV,N.I.XALILOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA ",
         editor: "E.G'.G'OZIYEV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA  TOM 1 ",
         editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA  TOM 2",
         editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ISLOM FALSAFASIGA KIRISH ",
         editor: "SH.SIROJIDDINOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "FALSAFA",
         editor: "D.A.YUSUPOV,X.B.SATTORXODJAYEV,A.A.MAVLAYNOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA",
         editor: "I.SAIFNAZAROV,A.MUXTAROV,T.SULTANOV,N.NAZAROV,N.RAXIMBABAYEVA,X.DONIYOROV,F.USMONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA  ASOSLARI",
         editor: "Q.NIYAZOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "FALSAFA TARIXI ANTIK DAVR FALSAFASI",
         editor: "M.SHARIPOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA 1 TOM",
         editor: "M.A.AXMEDOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "FALSAFA 2 TOM",
         editor: "M.A.AXMEDOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA 2 KITOB",
         editor: "E.G'.G'OZIYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IJTIMOIY PEDAGOGIKA ",
         editor: "NODIRA EGAMBERGANOVA",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA ",
         editor: "A.K.SHAMSHETOVA,R.N.MELIBAYEVA , X.E.USMANOVA,I.O.XAYDAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "PSIXODIAGNOSTIKA ",
         editor: "RASULOV ABDUMO'MIN IBRAGIMOVICH",
         tili: "KRILL",
        turkum: "O'QUV-METODIK QO'LLANMA"
        },
        {
         name: "PSIXOLOGIYA NAZARYASI VA TARIXI",
         editor: "SH.R.BARATOV,L.Y.OLIMOV,O.R.AVEZOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ONTOGNEZ PSIXOLOGIYASI ",
         editor: "E.G'.G'OZIYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EXPERIMENTAL PSYCHOLOGY HANDBOOK OF RESEARCH METHODS IN",
         editor: "STEPHEN F.DAVIS",
         tili: "ENGLISH",
        turkum: "METODIK ASOS"
        },
        {
         name: "MULOQOT PSIXOLOGIYASI",
         editor: "M.A.MAXSUDOVA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "UMUMIY PSIXOLOGIYA",
         editor: "F.XAYDAROV,N.XALILOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA",
         editor: "A.K.SHAMSHETOVA,R.N.MELIBAYEVA , X.E.USMANOVA,I.O.XAYDAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ONTOGNEZ PSIXOLOGIYASI ",
         editor: "ERGASH G'OZIYEV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PSIXOLOGIYA",
         editor: "U.FAYZIYEVA,N.JUMAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "UMUMIY PSIXOLOGIYA",
         editor: "ERGASH G'OZIYEV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "PSIXOLOGIYA TARIXI",
         editor: "N.S.JO'RAYEV,D.A.SALIYEVA,N.A.SULTONOVA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ДЕТСКАЯ ПСИХОЛОГИЯ",
         editor: "Е.О.СМИРНОВА",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "PEDAGOGIKA NAZARYASI VA TARIXI (pedagogika tarixi)",
         editor: "AXMEDOVA MALOHAT ERGASHEVNA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EXSPREMENTAL PSIXOLOGIYA ",
         editor: "Z.NISHONOVA,D,QARSHIYEVA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ОСНОВНЫЕ МЕТОДЫ СБОРА ДАННЫХ В ПСИХОЛОГИИ",
         editor: "С.А.КАПУСТИНА",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА И ЛИТЕРАТУРЫ",
         editor: "AXMEDOVA L.T,LAGAY.E.A",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "ЗАПАДНО ЕВРОПЕЙСКАЯ СРЕДНЕВЕКОВАЯ ИСТОРИО ГРАФИЯ",
         editor: "О.Л.ВАЙНШТЕЙН",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "UMUMIY PEDAGOGIKA 1QISM",
         editor: "A.MUSURMANOVA,X.IBRAGIMOV,O.JAMOLDINOVA,K,RISQULOVA,S.YO'LDASHEVA,A.JUMAYEV,F.BABASHEV,P.ISAMOVA,S.SHARIPOVA,G'.SALOHIDDINOVA,K.TODJIBAYEVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "UMUMIY PEDAGOGIKA NAZARYASI VA AMALYOTI ",
         editor: "B.X.XODJAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIKA NAZARYASI VA TARIXI ",
         editor: "R.MAVLONOVA,N.VOHIDOVA,N.RAXMONQULOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ПСИХОЛОГИЯ И ПЕДАГОГИКА",
         editor: "Л.А.ГРИГОРОВИЧ  Т.Д.МАРЦИНКОВСКАЯ",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "PSIXODIAGNOSTIKA VA PSIXOMETRIKA ASOSLARI TOM 1-2",
         editor: "L.YA.OLIMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ОБЩАЯ ПСИХОЛОГИЯ ",
         editor: "А.Г.МАКЛАКОВ",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "UMUMIY PEDAGOGIKA",
         editor: "R.A.MAVLONOVA,N.H.RAXMONQULOVA,K.O.MATNAZAROVA,M.K.SHIRINOV,S,HAFIZOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY PEDAGOGIKA 2 QISM",
         editor: "A.MUSURMANOVA,N.J.ISAQULOVA,M.T.JUMANIYOZOVA,A.SH.JUMAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ODAM FIZIOLOGIYASI",
         editor: "E.NURITDINOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIKA TARIXI 2QISM ",
         editor: "KOMILJON HASHIMOV,SANOBAR NISHONOVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IJTIMOIY PEDAGOGIKA ",
         editor: "NODIRA EGAMBERDIYEVA",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIKA NAZARYASI VA TARIXI (XII ASR OXIRI XIV ASRNING BIRINCHI YARMIDA MOVAROUNNAHR VA XUROSON MUTAFAKKIRLARINING PEDAGOGIK QARASHLARI)",
         editor: "GULCHEHRA IZBULLAYEVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "YOSH DAVRLARI VA PEDAGOGIK PSIXOLOGIYA",
         editor: "SH.A.DO'SMUHAMMEDOVA,Z.T.NISHANOVA,C.X.JALILOVA,SH.K.KARIMOVA,SH.T.ALIMBAYEVA",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIKA ",
         editor: "R.MAVLANOVA,O.TO'RAYEVA,K.XOLIQBERDIYEV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ",
         editor: "M.G.KAMILOVA,N.A.RAJAPOVA,M.R.ZAKIROVA",
         tili: "RUS",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА И ЛИТЕРАТУРЫ",
         editor: "AXMEDOVA L.T,LAGAY.E.A",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК ФОНЕТИКА ОРФОЭПИЯ",
         editor: "Е.Г.МАЛЫШЕВА О.С.РОГАЛЕВА",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ ЧАСТЬ-1",
         editor: "ИСАКОВА.Р.К",
         tili: "РУС",
        turkum: "ПОСОБИЕ СОСТАВЛЕНО",
         "Column10": "T"
        },
        {
         name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ",
         editor: "M.G.KAMILOVA,N.A.RAJAPOVA,M.R.ZAKIROVA",
         tili: "RUS",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА ",
         editor: "L.T.AXMEDOVA,O.V.KON",
         tili: "RUS",
        turkum: "УЧЕБНИК"
        },
        {
         name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК ФОНЕТИКА ОРФОЭПИЯ ГРАФИКА ОРФОЭПИЯ",
         editor: "Ж.В.ГАНИЕВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ  (ВТОРАЯ ПОЛОВИНА XIX ВЕКА",
         editor: "В.Я.ЛИНКОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ XVIII ВЕКА",
         editor: "О.Б.ЛЕБЕДЕВА",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ",
         editor: "Д.С.ЛИХАЧЕВ Г.П.МАКОНЕНКО",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "УЧЕБНО-МЕТОДИЧЕСКИЙ КОМПЛЕКС ПО ДИСЦИПЛИНЕ ТЕОРЕЯ И ПРАКТИКА ПЕРЕВОДА",
         editor: "ДЖАЛИЛОВА Д.С",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "ПОСОБИЕ ПО  РУССКОМУ ЯЗЫКУ",
         editor: "ИСАКОВА.Р.К",
         tili: "РУС",
        turkum: "ПОСОБИЕ СОСТАВЛЕНО"
        },
        {
         name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА ",
         editor: "L.T.AXMEDOVA,O.V.KON",
         tili: "RUS",
        turkum: "УЧЕБНИК"
        },
        {
         name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ  (ПЕРВАЯ ПОЛОВИНА XX ВЕКА)",
         editor: "Л.П.ЕГОРОВОЙ",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "РУССКИЙ ФОЛЬКЛОР",
         editor: "Т.В.ЗУЕВА",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "УЧЕБНО-МЕТОДИЧЕСКИЙ КОМПЛЕКС ПО ПРЕДМЕТУ РУССКИЙ ЯЗЫК",
         editor: "IMAMALIYEVA M\/A,MIRSAGATOVA U.Z,KOMILOVA SH.A",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "ПРАКТИЧЕСКИЕ РАЗРАБОТКИ ПО ПРОВЕДЕНИЮ СЕМИНАРСКИХ ЗАНЯТИЙ ПО ДИСЦИПЛИНЕ ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ",
         editor: "АБЛАЕВА Н.К МАДРАХИМОВА З.Ф",
         tili: "РУС",
        turkum: "МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "O'ZBEKCHA-RUSCHA VA RUSCHA O'ZBEKCHA LUG'AT",
         editor: "M.M.ABDURAXIMOV",
         tili: "LOTIN",
        turkum: "LUG'AT"
        },
        {
         name: "ENGLISH TESTS GRAMMATIKA VA MAVZULASHTIRILGAN TESTLAR TO'PLAMI 1996-2015",
         editor: "N.SAMANOVA",
         tili: "ENGLISH",
        turkum: "TEST"
        },
        {
         name: "DESTINATION GARAMMAR AND VOCABULARY C1 C2",
         editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "DESTINATION GARAMMAR AND VOCABULARY B2",
         editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "TEACHERS BOOK ",
         editor: "VIRGINIA EVANS-JENNY DOOLEY STANLEY WRIGHT",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "IELTS WRITE RIGHT AKADEMIC\/GENERAL TASKS 1 2 ",
         editor: "MEHDI KARIMI",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "MIGRATION ACCOMMODATION AND LANGUAGE CHANGE ",
         editor: "BRIDGET L.ANDERSON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "FUNDAMENTALS OF MANAGEMENT",
         editor: "ROBBINS DECENZO COULTER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SPEAKING FOR IELTS ",
         editor: "KAREN KOVACS",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "READING FOR IELTS",
         editor: "ELS VAN GEYTE AND RHINA SNELLING",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "WRITING FOR IELTS",
         editor: "ANNELI WILLIAMS",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LANGUAGE SKILL:SPEAKING 2 ",
         editor: "G.BAKIEVA, Z.SALIEVA ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "GRAMMAR PRACTICE FOR ELEMENTARY STUDENTS WITH KEY",
         editor: "ELAINE WALKER STEVE ELSWORTH",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SKILLFUL READING AND WRITING STUDENTS BOOK",
         editor: "DAVID BOHLKE ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SCALE UP STUDENTS BOOK COURSE 2",
         editor: "QAMBAROV NOSIR,MURATOVA ILMIRA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SCALE UP STUDENTS BOOK COURSE 1",
         editor: "QAMBAROV NOSIR,MURATOVA ILMIRA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SCALE UP STUDENTS BOOK COURSE 3",
         editor: "BAKIEVA G.RASHIDOVA F KHODJAYEVA R SAMATOVA B KARIMOVA D M SHAMSIMATOVA B SHAKHIMOVA M KASIMOVA Z DJALALIDINOVA M",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 4",
         editor: "LINDSAY CLANDFIELD AND MARK MCKINNON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 3",
         editor: "MIKE BOYLE AND ELLEN KISSLINGER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 1",
         editor: "LIDA BAKER AND STEVEN GERSHON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THIRD EDITION SOLUTIONS UPPER-INTERMEDIATE WOEKBOOK",
         editor: "TIM FALLA PAUL DAVIES , PAUL KELLY,HELEN WENDHOLT , SYLVIA WHEELDON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THIRD EDITION SOLUTIONS ADVANCED STUDENTS BOOK",
         editor: "TIM FALLA,PAUL ADAVIES,JANE HUDSON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "TASK-BASED LANGUAGE TEACHING ",
         editor: "DAVID NUNAN ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "MATERIALS DEVELOPMENT IN LANGUAGE TEACHING SECOND EDITION ",
         editor: "BRIAN TOMLINSON",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "PLANNING LESSONS AND COURSES DESINGNING SEQUENCES OF WORK FOR THE LANGUAGE CLASSROOM",
         editor: "SERIES EDITOR PENNY UR",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "FROM PROTO-INDO-EUROPEAN TO PROTO-GERMANIC",
         editor: "DON RINGE",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "NEW INSIGHT INTO IELTS",
         editor: "VANESSA JAKEMAN AND CLARE MCDOWELL",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "COMPORATIVE TYPOLOGY OF ENGLISH,UZBEK AND RUSSIAN LANGUAGES",
         editor: "M.I.RASULOVA,Z.I.SHUKUROVA ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THEORETICAL ENGLISH GRAMMAR",
         editor: "M.IRISQULOV,I.TOKHTASINOV,A.KULDASHEV",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "A GLOSSARY OF HISTORICAL LINGUISTICS ",
         editor: "LYLE CAMPBELL AND MAURICIO J.MIXCO",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "A GRAMMAR OF THE ENGLISH LANGUAGE",
         editor: "B.A.ILISHA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ROMAN-GERMAN FILOLOGIYASIGA KIRISH ",
         editor: "S.M.XUDOYBERGANOV,M.F.SAPAROVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ENGLISH SPEAKIN COUNTRIES ",
         editor: "ISHAK YAKUBOV",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "INGLIZ VA O'ZBEK TILLARIDA KOMPARATIVLIK KATEGORYASINING SINTAKTIK-SEMANTIK XUSUSIYATLARI ",
         editor: "AYBEK KALANDAROV",
         tili: "LOTIN",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "UNDERSTANDING AND USING ENGLISH GRAMMAR THIRD EDITION WITH ANSWER KEY",
         editor: "BETTY SCHRAMPFER AZAR",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "BASIC ENGLISH GRAMMAR THIRD EDITION WITH ANSWER KEY ",
         editor: "BETTY SCHRAMPFER AZAR STACY A.HAGEN",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LANGUAGE SKILL:WRITING 2 ",
         editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LANGUAGE SKILL:SPEAKING 1",
         editor: "G.BAKIYEVA,Z.SALIEVA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LANGUAGE SKILL:WRITING 4",
         editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LANGUAGE SKILL:WRITING 3",
         editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "CULTURAL LINGUISTIC ",
         editor: "D.U.ASHUROVA,M.R.GALIEVA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "LANGUAGE SKILL:LISTENING ",
         editor: "G.BAKIEVA,Z.KASIMOVA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "QADIMGI O'RTA OSIYO TARIXI",
         editor: "A.SAGDULLAYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ВВЕДЕНИЕ В ИСТОРИЧЕСКУЮ ГЕОГРАФИЮ",
         editor: "Ф.С.КОРАНДЕЙ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "SHARQIY OSIYO DINIY-FALSAFIY TALIMOTLAR VA ISLOM",
         editor: "N.G.NIZOMMIDDINOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "INCLUSIVE GROWTH,DEVELOPMENT AND WELFARE POLICY",
         editor: "REZA HASMATH",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIK TEXNOLOGIYALAR VA PEDAGOGIK  MAHOROT",
         editor: "H.T.OMONOV,N.X.XO'LAYEV,S.S.MADYAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IJTIMOIY ISH TARIXI VA NAZARYASI ",
         editor: "S.ELMANOV",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "OLIY MATEMATIKA 1 QISM",
         editor: "SH.R.XURRAMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IJTIMOIY ISHGA KIRISH",
         editor: "YUSUPOV.R.K",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IJTIMOIY ISHGA KIRISH",
         editor: "M.X.GANIYEVA,Q.N.KAYUMOV,M.B.SHEROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IJTIMOIY SIYOSAT ",
         editor: "S.TO'YCHIYEVA,A.SH.NORBEKOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IJTIMOIY ISH NAZARYASI",
         editor: "M.N.NARMAMATOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY HISOBOTNING XALQARO STANDARTLARI ",
         editor: "SH.T.ERGASHEVA,A.K.IBRAGIMOV,N.K.RIZAYEV,I.R.IBRAGIMOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "INNOVATSION MENEJMENT ",
         editor: "R.I.GIMUSH,F.M.MATMURATOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ИСТОРИЯ И ТЕОРИЯ СОЦИАЛЬНОЙ РАБОТЫ",
         editor: "М.Х.ГАНИЕВА Н.М.ЛАТИПОВА",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "WEB TEXNOLOGIYALAR ",
         editor: "M.ARIPOV,M.FAYZIYEVA,S.DOTTOYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "TARMOQ XAVFSIZLIGI(MOBIL TARMOQ XAVFSIZLIGI)",
         editor: "GANIYEV SALIM KARIMOVICH,KUCHKAROV TAXIR ANVAROVICH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KOMPUTERNING TEXNIK VA DASTURIY TAMINOTI",
         editor: "AMINOV I.B",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "DAVLAT TILIDA ISH YURITISH",
         editor: "M.AMINOV",
         tili: "KRILL",
        turkum: "AMALIY QO'LLANMA"
        },
        {
         name: "KOMPYUTER GRAFIKASI",
         editor: "T.RIXSIBOYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KOMPYUTER GRAFIKASI",
         editor: "A.IMOMOV",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "KOMPYUTER LINGVISTIKASI ASOSLARI",
         editor: "AZAMATJON RAXIMOV",
         tili: "LOTIN",
        turkum: "LUG'AT"
        },
        {
         name: "ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ТЕХНОЛОГИИ",
         editor: "И.Л.ЧУДИНОВ В.В.ОСИПОВА",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
         editor: "Ю.ЮГРОМОВБИ.В.ДИДРИХ О.Г.ИВАНОВА М.А.ИВАНОВСКИЙ ВЮГЮОДНОЛЬКО",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
         editor: "A.T.KENJABOYEV,M.M.IKRAMOV,A.SH.ALLANAZAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KOMPUTER ARXITEKTURASI",
         editor: "NIGMATOV.X",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "TIL TALIMIDA KOMMUNIKATSION TEXNOLOGIYALAR ",
         editor: "F.SH.RO'ZQULOV",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "IJTIMOIY ISHNING AXLOQIY TAMOYILLARI QADRIYATLARI",
         editor: "ISOQJON NEGMATOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EKOLOGIYA VA TABIATNI MUHOFAZA QILISH",
         editor: "O'.E.XO'JANAZOROV,SH.T.YAKUBJONOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
         editor: "A.T.KENJABAYEV,M.M.IKRAMOV,A.SH.ALLANAZAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EKOLOGIYA , BIOSFERA VA TABIATNI MOHOFAZA QILISH",
         editor: "AHTAMQUL ERGASHEV TEMUR ERGASHEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "UMUMIY EKOLOGIYA ",
         editor: "AHTAMQUL ERGASHEV ",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "MATEMATIK MODELLASHTIRISH",
         editor: "N.RO'ZMETOVA,R.FAYZIYEV,A.ISHNAZAROV,SH.NURULLAYEVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "AXBOROT XAVFSIZLIGI",
         editor: "S.K.GANIYEV M.M.KARIMOV,K.A.TASHEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MICRASOFT EXCEL DASTURIDA ISHLASH",
         editor: "TOLAMETOV A.A",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "TA'LIM TEXNOLOGIYALARI",
         editor: "SH.S.SHOYIMOVA,M.K.XOSHIMOVA,SH.R.MIRZAYEVA,M.M.QO'ZIBOYEVA ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IJTIMOIY SIYOSAT ",
         editor: "A.SALOYEV",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "ОБЩАЯ И ТЕОРЕЧЕСКАЯ ИНФОРМАТИКА",
         editor: "А.А.МАЙОРОВ В.П.СЕДЯКИН",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "МЕДИАОБЗОВА НИЕ И МЕДИАГРАМОТНОСТЬ ТЕОРИЯ МЕТОДОЛОГИЯ ПРАКТИКА",
         editor: "Л.С.АХМЕТОВ АА.В.ВЕРЕВКИН Т.Ю.ЛИФАНОВА",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "KOMPUTER TARMOQLARI ",
         editor: "Z\/Z\/MIRYUSUPOV,J.X.DJUMANOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MEDIASAVODXONLIK VA AXBOROT MADANIYATI",
         editor: "E.M.XUDAYNAZAROV,G.M.XALILLAYEVA,A.F.SABIROVA,J.S.RAXIMBOYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "AXBOROT TEXNOLOGIYALARI 1 QISM",
         editor: "M.KADIROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "INSTITUTSIONAL IQTISODIYOT ",
         editor: "M.I.KUTBITDINOVA",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "WORD 2010 В ПРИМЕРАХ",
         editor: "Е.М.КАРЧЕВСКИЙ  И.Е.ФИЛИППОВ И.А.ФИЛИППОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ПРАКТИЧЕСКИЕ РАБОТЫ ПО МICROSOFT OFFICE 10",
         editor: "И.Г.ЧЕКИНА О.И.ШАРДАКОВА",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "BYUDJET-SOLIQ SIYOSATI",
         editor: "T.S.MALIKOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KOMPUTER GRAFIKASI  VA WEB-DIZAYN",
         editor: "M.E.MAMARAJABOV,S.Q.TURSUNOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "BIZNES BOSHQARUV ASOSLARI ",
         editor: "SHAISLAMOVA M.R",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "KORXONA IQTISODIYOTI  ",
         editor: "E.X.MAXMUDOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
         editor: "АРИПОВ М.М КАБИЛЖАНОВА Ф.А ЮЛДАШЕВ З.Х",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "MASTER OF BUSSINESS ADMINISTRATION STRATEGIC MANAGEMENT",
         editor: " DR.C S.K KRISHNACHARYALU",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THE  NEW YORK TIMES THE FOUR ",
         editor: "CKOTT GELLOUEY",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "KORXONA IQTISODIYOTI VA INNOVATSIYALARNI BOSHQARISH",
         editor: "I.XOTAMOV,SH.MUSTAFAQULOV,M.ISAKOV,A.ABDULLAYEV",
         tili: "KRILL",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "BUXGALTERYA HISOBI",
         editor: "S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "KORXONA IQTISODIYOTI VA MENEJMENTI",
         editor: "I.O.ULASHEV,SH.A.ATAMURODOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BIZNES QIYMATNI BAHOLASH ",
         editor: "L.S.ZOYIROV,U.K.MUXTOROVA,S.K.QOSIMOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI TOM 1",
         editor: "N.X.SHOAXMEDOVA,I.M.ABDULLAYEVA,D.P.XASHIMOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI TOM 2",
         editor: "N.X.SHOAXMEDOVA,I.M.ABDULLAYEVA,D.P.XASHIMOVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLAR",
         editor: "R.A.DADABAYEVA,N.X.SHOAXMEDOVA,L.T.IBRAGIMOVA,SH.T.NASRIDDINOVA,SH.T.ERMATOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EKOLOGIYA",
         editor: "A.C.TO'XTAYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI",
         editor: "SHOAXMEDOVA N.X,ABDULLAYEVA I.M",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PEDAGOGIK TEXNOLOGIYALAR VA PEDAGOGIK  MAHOROT",
         editor: "O'TKIR TOLIPOV,DILNOZ RO'ZIYEVA ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "UMUMIY PEDAGOGIKA NAZARYASI VA AMALYOTI ",
         editor: "B.X.XODJAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
         editor: "X.A.KABULOV",
         tili: "RUS",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "НАРОДЫ СРЕДНЕЙ АЗИИ III-VI ВЕКОВ ",
         editor: "О.Е.НЕПОМНИН",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ТЕСТОЛОГИЯ ГУМАНИТАРИЯМ",
         editor: "А.Г.ВОЙТОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "IJTIMOIY SAFARBARLIK",
         editor: "SHAVKAT TO'RAYEV,NIGORA XUSANOVA",
         tili: "KRILL",
        turkum: "RISOLA"
        },
        {
         name: "O'ZBEK MILLIY FALASAFA MAKTABINING ASOSCHISI",
         editor: "BO'RI QODIROV",
         tili: "KRILL",
        turkum: "RISOLA"
        },
        {
         name: "ARAB TILI GRAMMATIKASI",
         editor: "NEMATULLO IBROHIMOV,MUHAMMAD YUSUPOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "АРАБСКОГО ЯЗЫКА",
         editor: "TYULEMISSOV MADI",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "УЧЕБНИК АРАБСКОГО ЯЗЫКА",
         editor: "С.А.КУЗЬМИН",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "УЧЕБНИК АРАБСКОГО ЯЗЫКА",
         editor: "А.А.КОРАЛЕВ Г.Ш.ШАРБАТОВ",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "O'ZBEKISTONING ME'MORIY YODGORLIKLARI TARIXI",
         editor: "S.DAVLETOV,M.ABDULLAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "O'ZBEKISTONING ENG YANGI TARIXI",
         editor: "S.R.DAVLETOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "XORAZM JADID NAMOYONDALARI:XAYOTI,FAOLIYATI VA ADABIY MEROSI",
         editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "XORAZM JADIDCHILIGI:ISLOHOTLAR,TALIM VA ADABIYOT",
         editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "BOBOOXUN SALIMOV-JADID,DAVLAT ARBOBI VA SHOIR",
         editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "XORAZM JADIDCHILIK XARAKATI ENSKLOPEDIYASI",
         editor: "UMID BEKMUHAMMAD",
         tili: "KRILL",
        turkum: "ENSKLOPEDIYA"
        },
        {
         name: "KOMPUTER SAVAODXONLIGI ",
         editor: "RO'ZIMOV S.K",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KIBERXAVSIZLIK ASOSLARI ",
         editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "МЕДИАОБРАЗОВАНИЕ ИСТОРИЯ И ТЕОРИЯ ",
         editor: "А.В.ФЕДОРОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
        },
        {
         name: "МЕДИАОБРАЗОВАНИЕ И МЕДИАГРАМОТНОСТЬ",
         editor: "АХМЕТОВА Л.С",
         tili: "РУС",
        turkum: "СПРАВОЧНИК"
        },
        {
         name: "СОВРЕМЕННЫЕ ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ ДЛЯ ГУМАНИТАРИЯ",
         editor: "А.Т.ХРОЛЕНКО А.В.ДЕНИСОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
        },
        {
         name: "ПРАКТИКУМ ПО РЕШЕНИНИЮ ЭКОНОМИЧЕСКИХ ЗАДАЧ В МС ЕХЕЛ",
         editor: "И.А.КЛЮЕВА И.П.МЕДИНЦЕВА",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "АВТОМАТИЗИРОВАННЫЕ ТЕХНОЛОГИИ В ЭКОНОМИКЕ",
         editor: "КОЛЛЕКТИВ АВТОР",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "РАБОТА В СРЕДЕ ЕЛЕКТРОННЫХ ТАБЛИЦ",
         editor: "О.А.ЛАВРЕНОВА",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "МЕДИАОБРАЗОВАНИЕ И МЕДИАГРАМОТНОСТЬ",
         editor: "А.В.ФЕДОРОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
        },
        {
         name: "TALIMDA AXBOROT TEXNOLOGIYALARI",
         editor: "R.XAMDAMOV,U.BEGIMQULOV,N.TAYLOQOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "KIBERXAVSIZLIK ASOSLARI ",
         editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "COMPUTER SCIENCE",
         editor: "DAVID WATSON,HELEN WILLIAMS",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "YURISTNING KASBIY ETIKASI",
         editor: "B.I.ISMAILOV",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "MICROSOFT EXCEL",
         editor: "B.J.BOLTAYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MEDIA VA AXBORIY SAVODXONLIK BO'YICHA MYAMMOLI TARBOYASI OG'IR YOSHLAR TOIFASI BILAN ISHLASH UCHUN ",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
         editor: "AMIROV.D.M,ATAJANOV",
         tili: "KRILL",
        turkum: "IZOHLI LUG'AT"
        },
        {
         name: "MEDIA VA AXBOROT SAVODXONLIGINI SHAKLLANTIRISHNING PEDAGOGIK JIHATLARI",
         editor: "YUNESKO",
         tili: "KRILL",
        turkum: "O'QUV-AMALIY QO'LLANMA"
        },
        {
         name: "O'ZBEKISTONDA MEDIA TALIM TARQQIYOTI YO'LIDA ",
         editor: "YA.MAMATOVA C.SULAYMONOVA",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "SOCIAL WORK AND SOCIAL WELFARE AN INTRODUCTION",
         editor: "ROSALIE AMBROSINO,JOSEPH HEFFERNAN,EMERITUS,GUY SHUTTLESWORTH,EMERITUS",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "INFORMATIKA,INFORMATSION TEXNOLOGIYALAR",
         editor: "M.M.ARIPOV,J.O'.MUHAMMADIYEV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "ИСТОРИЯ ТЕХНИКИ  РАЗВИТИЕ ТЕХНИКИ В ДРЕВНЕМ МИРЕ",
         editor: "Д.В.ЛОГИНОВА",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "ИСПОЛЬЗОВАНИЕ КОМПЬЮТЕРНЫХ ТЕХНОЛОГИЙ В УЧЕБНОМ ПРОЦЕССЕ",
         editor: "XUDAYBERGANOV SH.E,HAKIMOVA.X.R",
         tili: "РУС",
        turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
        },
        {
         name: "TALIMDA AXBOROT TEXNOLOGIYALARI",
         editor: "MADRIMOVA.S.M,XUSAINOV.SH.M",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
         editor: "MADRIMOVA.S.M,XUSAINOV.SH.M",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "ELEKTRON JADVALLARDAN FOYDALANISH TEXNOLOGIYALARI ",
         editor: "G.M.OTAJONOVA,B.R.ANNAZAROVA",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "MOLIYAVIY HISOB ASOSLARI FANIDAN KURS ISHI YOZISH",
         editor: "SHEROV A,ZAKIROVA.G",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "FILOLOGIYADA AXBOROT TEXNOLOGIYALARI ",
         editor: "MADRIMOVA S.M,XUSAINOV.SH.M,",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "ОТЧЕТ КАДРЫ СИСТЕМЫ СОЦИАЛЬНОЙ ЗАЩИТЫ ДЕТЕЙ В УЗБЕКИСТАНЕ СИЛЬНЫЕ СТРОНЫ ПРОБЛЕМЫ И ДАЛЬНЕЙШЕЕ РАЗВИТИЕ",
         tili: "RUS",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "STATISTIKA FANIDAN AMALIY MASHG'ULOTLAR O'TQAZISH UCHUN",
         editor: "A.X.AYUBJONOV,B.X.MAMATQULOV,C.H.SAYFULLAYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "STATISTIKA BO'YICHA PRAKTIKUM",
         editor: "X.SHODIEV VA XABIBULLAYEV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "STATISTIKA BO'YICHA PRAKTIKUM",
         editor: "X.SHODIEV VA XABIBULLAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIY-MATEMATIK MODELLAR VA USULLAR",
         editor: "SH.R.MO'MINOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIY MATEMATIK USULLARI VA MODELLARI",
         editor: "I.HABIBULLAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MAKRO VA MIKRO IQTISODIYOT",
         editor: "N.XOLMATOV,N.IMOMOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EKONOMETRIKA",
         editor: "B.YU.XODIYEV , T.SH.SHODIYEV , B.B.BERKINOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "STATISTIKA NAZARYASI 2 NASHR",
         editor: "YO.ABDULLAYEV",
         tili: "KRILL",
        turkum: "ILMIY-USLUBIY QO'LLANMA"
        },
        {
         name: "STATISTIKA",
         editor: "SOATOV.N.M,NABIEV H.G',NABIYEV D.H,TILLAXO'JAYEVA G.N",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY XISOBOTNING XALQARO STANDARTLARI",
         editor: "C.N.TASHNAZAROV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "BUXGALTERYA HISOBINING AXBOROT TIZIMLARI",
         editor: "KARIMOV AKROM ABBOSOVICH,MUQIMOV ZAFAR ,TULAYRV MIRZA,KURBANBAYEV JO'RABEK ERUVBAYEVICH, RAXIMOV SHERZODS SHERKULOVICH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "TADBIRKORLIK ASOSLARI",
         editor: "HALIM HAMROYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "STATISTIKA VA EKONOMETRIKA 2 QISM",
         editor: "X.A.KASIMOVA",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IJTIMOIY-IQTISODIY JARAYONLARNI MODELLASHTIRISH VA PROGNOZLASH",
         editor: "D.M.RASULEV,A.A.ALMURADOV,S.O.XOMIDOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIY-MATEMATIK USULLARI VA MODELLARI",
         editor: "T.SHODIYEV,O.ABDULLAYEV,L.BOLTAYEVA,G.KAZIMOVA,A.ISMAILOV,S.B.IVANOVA,A.ISHNAZAROV,H.RO'ZMETOVA,A.BOYZOQOV,O.RIXSIMBOYEV,M.MUMINOV,O.A.KARIMOV,SH.NURILLAYEVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIYOTDA MIQDORIY USULLAR",
         editor: "A.RASULOV,U.DALABOYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY HISOB",
         editor: "O.M.KULJANOV,X.A.ORTIQOV,L.P.YUGAY,X.A.TUXSANOV,M.I.XAYITBOYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BUXGALTERYA HISOBINING AXBOROT TIZIMLARI",
         editor: "A.A.KARIMOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY HISOB",
         editor: "ABDUSAMATOVA NODIRA BAXODIROVNA,TEMIROV FURQAT TURSOATOVICH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODCHILAR UCHUN MATEMATIKA",
         editor: "SH.SHARAHMETOV,A.NAIMJONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "BUXGALTERYA HISOBI NAZARYASI",
         editor: "O.M.KULJANOV,I.I.XUSINOV,S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIY-MATEMATIK USULLARI VA MODELLARI",
         editor: "X.Q.QARSHIBOYEV,B.I.ASHUROV,E.H.SALIMOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BUXGALTERYA HISOBI TOM 1",
         editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "BUXGALTERYA HISOBI TOM 2",
         editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "EKONOMETRIKA 1 ",
         editor: "G.NASRITDINOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
         editor: "SH.SH.SHODMONOV,M.M.MUHAMMEDOV,N.A.KAMILOVA",
         tili: "RUS",
        turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
        },
        {
         name: "МОДЕЛИ ИССЛЕДОВАНИЯ ОПЕРАЦИЙ",
         editor: "О.А.КОСОРУКОВ М.А.ХАЛИКОВ Г.П.ФОМИН",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "ЭКОНОМИКА-МАТЕМАТИЧЕСКИЕ МЕТОДЫ И МОДЕЛИ",
         editor: "А.И.ГУРКО",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "MIKROIQTISODIYOT",
         editor: "ERKIN EGAMBERDIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MAKROIQTISODIYOT 2",
         editor: "N.M.MAHMUDOV,A\/B.SHAKAROV,X.A.ULASHEV,J.A.SHAKAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BUXGALTERYA HISOBI",
         editor: "U.I.INOYATOV,S.D.YUSUPOVA,F.R.SALIMBEKOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MIKROIQTISODIYOT",
         editor: "I.A.BAKIYEVA,X.S.XADJAYEV,M.Z.MUXITDINOVA,SH.SH.FAYZIYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BUXGALTERYA HISOBI",
         editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MIKROIQTISODIYOT MAKRIIQTISODIYOT TOM 1",
         editor: "SH.FAYZIYEV,B.SHERMUHAMMEDOV,E.I.ERGASHEV,I.BAKIVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MIKROIQTISODIYOT MAKRIIQTISODIYOT TOM 2",
         editor: "SH.FAYZIYEV,B.SHERMUHAMMEDOV,E.I.ERGASHEV,I.BAKIVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MIKROIQTISODIYOT:MASALALAR,NAMUNALAR,TOPSHIRIQLAR,TESTLAR",
         editor: "B.SALIMOV,SH.MUSTAFOQULOV,D.SALIMOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BIZNES BOSHQARUVI ASOSLARI",
         editor: "MUHAMMADJON BO'TABOYEV ,MANSURJON TOSHMAMATOV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MAKROIQTISODYOT",
         editor: "G'.E.ZOHIDOV,M.T.ASQAROVA,Z.A.DJUMAYEV,L.F.AMIROV,H.A.HAKIMOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PERSONALNI BOSHQARISH",
         editor: "K.X.ABDURAXMONOV,SH,R,XOLMO'MINOV,N.K.ZOKIROVA",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "MAKROIQTISODYOT",
         editor: "Z.A.DJUMAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "XALQARO BIZNES STRATEGYASI",
         editor: "NAZAROVA.G.G,ALIYEVA.M.T,SAFAROV.N.SH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY RISKLAR NAZARYASI",
         editor: "SH.Q.FOZILCHAYEV,N.G'.XIDIROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "KORPORATIV RISKLARNI BOSHQARISH",
         editor: "M.A.MAHKAMOVA,D.S.ZIYAYEVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY RISKLARNI BOSHQARISH",
         editor: "K.U.SHARIFXODJAYEVA,A.X.ISLAMQULOV,B.K.SATTAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BIZNES MOLIYASI",
         editor: "SH.SULTONOV,Q.CHINQUV,U.G'OFUROVA,N.SAFAROVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY RISKLARINI BOSHQARISH FANIDAN ",
         editor: "SATTOROVA B.K",
         tili: "KRILL",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "MOLIYAVIY HISOB VA HISOBOT",
         editor: "A.A.KARIMOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "INNOVATSION IQTISODIYOT ",
         editor: "A.TANIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "DAVLAT BYUDJETI",
         editor: "J.R.ZAYNALOV,B.SH.XUSANOV,S.S.ALIYEVA,SH.M.LATIPOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "I.R.TOYMUHAMMEDOV,R.R.TOJIYEV,A.A.AZLAROVA,N.R.BAZAROVA,N.G'.SATTOROVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "A.A.OMONOV,T.M.KORALIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYA",
         editor: "T.MALIKOV,O.OLIMJONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYA",
         editor: "T.MALIKOV,O.OLIMJONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "SH.Z.ABDULLAYEVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "SH.Z.ABDULLAYEVA",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "PUL VA BANKLAR",
         editor: "A.A.OMONOV,T.M.QORALIYEV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY BOSHQARUV HISOBI",
         editor: "S.R.EGAMBERDIYEVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "RISKLARNI BOSHQARISH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "RISKLARNI BOSHQARISH",
         editor: "J.SH.TUXTABAEV,A.X.ESHBAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "INNOVATSION IQTISODIYOT ",
         editor: "Y.E.ALIYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYA",
         editor: "T.S.MALIKOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIYOT NAZARYASI TOM 2",
         editor: "SH.SHODMONOV  ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI TOM 1",
         editor: "SH.SHODMONOV  ",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI TOM 1",
         editor: "SH.SHODMONOV,U.G'AFUROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI TOM 2",
         editor: "SH.SHODMONOV,U.G'AFUROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI TOM 1",
         editor: "B.Y.XODIYEV,SH.SH.SHODMONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT NAZARYASI TOM 2",
         editor: "B.Y.XODIYEV,SH.SH.SHODMONOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MOLIYAVIY XISOBOTNING XALQARO STANDARTLARI",
         editor: "D.E.NORBEKOV,A.N.TO'RAYEV,SH.SH.RAXMONOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MIKROIQTISODIYOT",
         editor: "B.T.SALIMOV,M.S.YUSUPOV,A.I.ISHNAZAROV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "MIKROIQTISODIYOT",
         editor: "HURMATOV.N",
         tili: "KRILL",
        turkum: "MARUZA MATNI"
        },
        {
         name: "MIKROIQTISODIYOT:MASALALAR,NAMUNALAR,TOPSHIRIQLAR,TESTLAR",
         editor: "B.SALIMOV,SH.MUSTAFOQULOV,D.SALIMOV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MAKROIQTISODYOT",
         editor: "A.E.ISHMUHAMMEDOV,Z.A.DJUMAYEV,Q.X.JUMAYEV",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MAKROIQTISODYOT",
         editor: "X.S.XADJAEV,I.A.BAKIYEVA,SH.SH.FAYZIYEV",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "PERSONALNI BOSHQARISH",
         editor: "Q.X.ABDURAXMONOV,SH.R.XOLMO'MINOV,A.B.XAYITOV,A.M.AKBAROV",
         tili: "KRILL",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "IQTISODIYOT NAZARYASI",
         editor: "Z.T.GAYIBNAZAROVA,SH.A.ASAMUXAMETOV",
         tili: "LOTIN",
        turkum: "DARSLIK"
        },
        {
         name: "ИНФОРМАТЦИОННЫЕ ТЕХНОЛОГИИ В БУХГАЛТЕРСКОМ УЧЕТЕ И АУДИТЕ",
         editor: "С.М.БЫЧКОВАБ С.В.ИВАХНЕНКОВ",
         tili: "РУС",
        turkum: "УЧЕБНОЕ ПОСОБИЕ"
        },
        {
         name: "OLIY MATEMATIKA 1 QISM",
         editor: "YO.U.SOATOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "OLIY MATEMATIKA 2 QISM",
         editor: "YO.U.SOATOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "OLIY MATEMATIKA 3 QISM 1 KITOB",
         editor: "YO.U.SOATOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "OLIY MATEMATIKA 3 QISM 2 KITOB",
         editor: "YO.U.SOATOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "BUSINESS MANAGEMENT AND ADMINISTRATION",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "IQTISODIYOT BAKALAVRIYAT TALIM YO'NALISHI TALABALARI UCHUN MIKROIQTISODIYOT FANIDAN ",
         editor: "Z.ABDUKARIMOVA",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "AUDIT FANIDAN MUSTAQIL TALIM TOPSHIRIQKARI VA ULARNI BAJARISH ",
         editor: "M.SATTOROVA,Z.SHARIPOVA,D.SATTOROVA",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOT FANIDAN KURS ISHLARINI YOZISH VA UNI HIMOYA QILISH TARTIBI BO'YICHA",
         editor: "AXMEDOVA.D,ATAXANOVA.S,SHARJONOV.SH",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODCHILAR UCHUN MATEMATIKA FANIDAN AMALIY MASHG'ULATLAR ",
         editor: "B.Q.ISKANDAROV,S.M.EGAMOV,I.I.ABDUKARIMOV",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "MOLIYA FANIDAN MUSTAQIL TALIM TOPSHIRIQLARI VA ULARNI BAJARISH BO'YICHA",
         editor: "SHEROV ALISHER BAKBERGANOVICH",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "MINTAQAVIY IQTISODIYOT FANIDAN AMALIY MASHG'ULOTLARNI XORIJIY TILDA BAJARISHGA OID ",
         editor: "IBODULLAYEV ERGASH BAKTURDIYEVICH",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOT BAKALAVRIYAT TALIM YO'NALISHI TALABALARI UCHUN IQTISODIYOT NAZARYASI FANIDAN KURS ISHLARINIYOZISH VA UNI HIMOYA QILISH TARTIBI BO'YICHA",
         editor: "SHEROV.A,SAPAYEV.N,XODJANIYAZOV SH",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
         editor: "M.SH.XUSAINOV,M.S.MATKARIMOVA",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOT NAZARYASI FANIDAN MUSTAQIL TALIM TOPSHIRIQLARI",
         editor: "YAKUBOVA Y.ZAKIROVA.G",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
         editor: "B.R.ANNAZAROVA,G.M.OTAJONOVA,F.A.BEKCHANOV",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
         editor: "B.R.ANNAZAROVA,G.M.OTAJONOVA,",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "IQTISODIYOT NAZARYASI FANIDAN    ",
         editor: "S.IBRAGIMOV",
         tili: "LOTIN",
        turkum: "MARUZA MATNI"
        },
        {
         name: "MOLIYAVIY RISKLAR NAZARYASI ",
         editor: "T.BAYMURATOV",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "INTRODUCTION TO BUSINESS AND MANAGEMENT",
         editor: "J.TIMM",
         tili: "ENGLISH",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "INNOVATSION TADBIRKORLIKNI TASHKIL ETISH VA UNI BOSHQARISHNI RIVOJLANTIRISH",
         editor: "JO'RAYEV DOSTON MA'RUF O'G'LI",
         tili: "LOTIN",
        turkum: "O'QUV-USLUBIY MAJMUA"
        },
        {
         name: "BUXGALTERYA XISOBINING AXBOROT TIZIMLARI",
         editor: "KARIMOV AKROM ABBOSOVICH,MUQIMOV ZAFAR ,TULAYRV MIRZA,KURBANBAYEV JO'RABEK ERUVBAYEVICH, RAXIMOV SHERZODS SHERKULOVICH",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "BUXGALTERYA HISOBI VA NAZARYASI ",
         editor: "B.XASHIMOV",
         tili: "KRILL",
        turkum: "DARSLIK"
        },
        {
         name: "BUXGALTERYA HISOBI VA AUDIT",
         editor: "K.B.URAZOV  ",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "EKONOMIC APPROACHES TOORGANIZATIONS ",
         editor: "SYTSE DOUMA AND HEIN SCHREUDER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THE BASICS OF BUSINESS MANAGEMENT-VOL I LEADERSHIP, FINANCIAL MAMAGEMENT AND ECONOMICS",
         editor: "ELLY R.TWINEYO KAMUGISHA",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ACCOUNTING INFORMATION SYSTEMS PART 1",
         editor: "JAMES A.HALL",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ACCOUNTING INFORMATION SYSTEMS PART 1",
         editor: "JAMES A.HALL",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ECONOMICS PART 1",
         editor: "MCCONNELL BRUE FLYNN",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ECONOMICS PART 2",
         editor: "MCCONNELL BRUE FLYNN",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THE ECONOMICS OF MONEY,BANKING,AND FINANCIAL MARKETS PART 1 ",
         editor: "FREDRIC S,MISHKIN",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "THE ECONOMICS OF MONEY,BANKING,AND FINANCIAL MARKETS PART 2",
         editor: "FREDRIC S,MISHKIN",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "MACROECONOMICS SEVENTH EDITION PART 1",
         editor: "N.GEORGY MANKIW",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "MACROECONOMICS SEVENTH EDITION PART 2",
         editor: "N.GEORGY MANKIW",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "DENGI ,KREDIT,BANKI",
         editor: "GALINA NIKOLAYEVNA BELOGLAZOVA",
         tili: "RUS",
        turkum: "DARSLIK"
        },
        {
         name: "EKONOMICS  PART 1",
         editor: "PAUL A.SAMUELSON,WILLIAM D.NORDHAUS ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "EKONOMICS  PART 2",
         editor: "PAUL A.SAMUELSON,WILLIAM D.NORDHAUS ",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "ФЫНАНСЫ ",
         editor: "ЭВИ БОДИ РОБЕРТ К.МЕРТОН",
         tili: "РУС",
        turkum: "УЧЕБНИК"
        },
        {
         name: "BASIC ECONOMETRICS PART 1",
         editor: "DAMODAR N. GUJARATI DAWN C.PORTER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "BASIC ECONOMETRICS PART 2",
         editor: "DAMODAR N. GUJARATI DAWN C.PORTER",
         tili: "ENGLISH",
        turkum: "DARSLIK"
        },
        {
         name: "XORAZM VOHASIDA ARXEOLOGIK TADQIQOTLAR TARIXI",
         editor: "MATKARIMOV XAMIDBEK OLIMBAYEVICH",
         tili: "KRILL",
        turkum: "MONOGRAFIYA"
        },
        {
         name: "IQTISODIYOT FANIDAN AMALIY MASHG'ULOTLAR",
         editor: "Q.E.MADRAXIMOV",
         tili: "LOTIN",
        turkum: "USLUBIY QO'LLANMA "
        },
        {
         name: "ЭКОНОМИЧЕСКАЯ БЕЗОПАСНОСТЬ",
         editor: "Л.П.ГОНЧАРЕНКО",
         tili: "РУС",
        turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
        },
        {
         name: "TOURISM ENGLISH FOR UZBEKISTAN",
         editor: "MARIAN KARCH STORDAH ",
         tili: "ENGLISH",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "MOLIYAVIY MENEJMENT",
         editor: "A.B.DJUMANOVA,M.N.KUSHAKOVA",
         tili: "LOTIN",
        turkum: "O'QUV QO'LLANMA"
        },
        {
         name: "ZAMONAVIY PSIXOLOGIYADA DOLZARB MUAMMOLARI:YECHIM VA ISTIQBOLLARI 1 QISM",
         editor: "DSC.D.A.URAZBAYEVA",
         tili: "LOTIN",
        turkum: "KONFERENSIYA TO'PLAMI"
        },
        {
         name: "ZAMONAVIY PSIXOLOGIYADA DOLZARB MUAMMOLARI:YECHIM VA ISTIQBOLLARI 2 QISM",
         editor: "DSC.D.A.URAZBAYEVA",
         tili: "LOTIN",
        turkum: "KONFERENSIYA TO'PLAMI"
        },
        
        
        
        
        
        {
         name: "BADIIY ADABIYOTLAR"
        },
        {
         name: "MENING KO'NGLIM BIR QUSHDIR",
         editor: "AYDIN XIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "IF QALASI MAHBUSI GRAF MONTE-KRISTO 1 QISM",
         editor: "ALEKSANDR DYUMA",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "IF QALASI MAHBUSI GRAF MONTE-KRISTO 2 QISM",
         editor: "ALEKSANDR DYUMA",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MOLXONA",
         editor: "JORJ ORUEL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "CHO'L BO'RISI",
         editor: "HERMANN HESSE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "RAQAMLI QALA ",
         editor: "DEN BRAUN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XODIMLARNI TANLASH SANATI",
         editor: "SVETLANA IVANOVA",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "OYNING AKSI ",
         editor: "D.ALIEVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QUVONCHBAXSH ETADIGAN ISH KELAJAK BIZNES-MODELI",
         editor: "DENNIS BAKKE",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "GULLIVERNING SAYOHATLARI",
         editor: "JONATAN SVIFT",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ROBINZON KRUZONING HAYOTI VA AJOYIB SARGUZASHTLARI",
         editor: "DANIYEL DEFO",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "IZTIROB ",
         editor: "RASHOD NURI GUNTEKIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OQ GULLAR",
         editor: "YASUNARI KAVABATA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOVVOYI YO'RG'A",
         editor: "E.SETON-TOMSON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ABADIYAT QONUNI",
         editor: "NODAR DUMBADZE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KITOB O'QIB BERUVCHI",
         editor: "BERNXARD SHLINGK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OLIM YETISTIRGAN ONALAR ",
         editor: "MURAT TOSUN",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "O'ZBEKISTON VATANIM MANIM",
         editor: "ABDULLA ORIPOV",
         tili: "LOTIN",
        turkum: "SHE'RIY TO'PLAM"
        },
        {
         name: "HIKMATLAR",
         editor: "MAHTUMQULI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SEN MENING ERTAMSAN",
         editor: "SEMIH YILMAZ",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TIRILISH",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PINOKIYONING BOSHIDAN KECHIRGANLARI ",
         editor: "KARLO KOLLODI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "VIKTORIYA",
         editor: "KNUT HAMSUN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SIRLI XILQAT",
         editor: "ANTON CHEXOV",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "G'OYANI IZLAB TOPISH",
         editor: "GENRIX ALTSHULLER",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "SARMOYADOR",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OYGUL BILAN BAXTIYOR",
         editor: "HAMID OLIMJON",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DANG'ILLAMA HOVLIDAGI O'LIM",
         editor: "JEYMIS HEGLI CHIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ISHQQA YENGILMAYMAN ",
         editor: "OMINA SHENGLIKO'G'LI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "BAQIRMAYDIGAN ONALAR",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ONA VA BOLA ",
         editor: "FERUZA QURBONOVA",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "ALVIDO,GULSARI",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HAYOT SENI SEVADI ",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "MAQSAD UZLUKSIZ RAVISHDA MUKAMMALANISH JARAYONI",
         editor: "ELIYAXU M. GOLDRATT DJEFF KOKS",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "ALVIDO,GULSARI",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "G'ARB-U SHARQ DEVONI",
         editor: "YOHANN VOLFGANG GYOTE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QIYOMAT ",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "LATTE OMILI",
         editor: "DEBID BAX JON DEVID MANN",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "TO'RTINCHI SANOAT INQILOBI",
         editor: "KLAUS SHVAB",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SEN MENING HAYOTIMNI O'ZGARTIRDING",
         editor: "ABDEL SELLU",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DO'STLIK TUXFASI",
         editor: "KENGISBOY KARIMOV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GARRI POTTER VA QAQNUS  ORDENI",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GARRI POTTER VA OLOVLI KUBOKI",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GARRI POTTER VA MAXFIY XONA",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BEZOVTALIKDAN XALOS BO'LISH VA YANGI XAYOT BOSHLASH SIRLARI",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "BOLALARIMIZ BILAN TORTISHMAYLIK",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "BOLALAR QANDAY MUVAFAQQIYATGA ERISHGANLAR",
         editor: "MO'MIN SEKMAN DR BAXAR ERISH",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "SEMIZ VA ORIQ",
         editor: "ANTON CHEXOV",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SARVIQOMAT DILBARIM",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAMARADORLIKNING 21 YO'LI",
         editor: "BRAYN TREYSI",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "QIRQ KOKILLI KELINCHAK",
         editor: "SHAHODAT ISAXONOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI  3-4 ",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI 1-2",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI  9-10",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI  11-12",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI  7-8",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI  13-14",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AFG'ON SHAMOLI  5-6",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "UZUKLAR HUKMDORI",
         editor: "JON RONALD RUEL TOLKIN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OQ KEMA ",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XITOBNOMA",
         editor: "MUNAVVAR QORI ABDURASHIDXONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NAJOT YO'LI",
         editor: "ABDURAUF FITRAT ",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NAJOT YO'LI",
         editor: "ABDURAUF FITRAT ",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BOVARI XONIM",
         editor: "GUSTAV FLOBER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DUNYONING ISHLARI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HOJIMUROD ",
         editor: "LEV TOLSTOY",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "XOLDORXON",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AL-KARNAKU KEMASIDAGI QOTILLIK",
         editor: "AGATA KRISTI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JAMILA",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TILSIMLI SHAXMAT",
         editor: "AGATA KRISTI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "FENOMENAL XOTIRA ",
         editor: "S.MUASAMEDOV",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "UCH FINJON CHOY",
         editor: "GREG MORTENSO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'YLA VA BOY BO'L",
         editor: "NAPALYON XILL",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "O'YLA VA BOY BO'L 52 HAFTA UCHUN 52 REJA",
         editor: "NAPALYON XILL",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "KRISTINA ",
         editor: "STEFAN SVEYG",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NIKOHNI ASRAY OLAMAN",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "GARRI POTTER VA AFSONAVIY TOSH",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GARRI POTER VA AJAL TUHFALARI",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GARRI POTTER VA ZATI PAST SHAXZODA",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BAHORNING O'N YETTI LAHZASI",
         editor: "YULIAN CEMYON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TIRIKLIK KOLISH BUYURILGAN ",
         editor: "YULIAN CEMYON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOLG'IZLIKNING YUZ YILI",
         editor: "GABRIEL GARSI MARKES",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ERTA QAYTGAN TURNALAR",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DON KIXOTNING SARGUZASHTLARI",
         editor: "MIGEL DE SERVANTES",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AYOL QISMATIDAN QISSALAR",
         editor: "ATIQ RAXITIY \\,JIN.P.SECCON ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BO'TAKO'Z",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ANNA KARENINA",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "ONAJON-KABAM O'ZING",
         editor: "SANJAR TURSUNOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHOLIQUSHI",
         editor: "RASHOD NURI GUNTEKIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MALIKA VA AYYOR",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYLANMA KO'NGLIMGA TUG'ILGAN DENGIZ",
         editor: "MUSLIMBEK YO'LDOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHEMPIYONDEK O'YLANG ",
         editor: "DONALD TRAMP",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DRAKULA ",
         editor: "BREM STOKER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OLTIN ZANGLAMAS ",
         editor: "SHUXRAT",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QIZIL AJDARHO",
         editor: "TOMAS HARRIS",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JENNI GERXARDT",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "MOVIY UMMONSTRATEGIYASI ",
         editor: "V.CHAN KIM RENE MOBORN",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "GONGKONGDAN KELGAN TOBUT",
         editor: "JEYMIS HEGLI CHIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "UMIDLAR INTIHODA O'LADI",
         editor: "BARIS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALVIDO,QUROL",
         editor: "E.M.HEMINGEY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AZIZIM",
         editor: "GI DE MOPASSAN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SENSIZ HAM YASHAYMAN ",
         editor: "NAZ ALTINBASH",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "MEN SIZNI SOG'INDIM,ONAJON",
         editor: "ABDURASHID NURMURODOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ISHQ QALBNING DUOSIDIR",
         editor: "EMRE TUNJER",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "XAZINALAR OROLI",
         editor: "ROBERT LUIS CTIBENSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ISHQQA OID 40 QOIDA",
         editor: "ELIF SHAFAQ",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "LABIRINTDA YURUVCHI",
         editor: "JEYMS DISHNER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAYOLIMDA GO'ZAL QOL",
         editor: "HALIS KARABENLI",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TEJAMKORLIK STARTAPTI",
         editor: "ERIK RIS",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "DAHRIYNING IBODATI ",
         editor: "ONORE DE BALZAK",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KETSAMMIKIN YOKI QOLSAMMIKAN ",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "FACTFULNESS",
         editor: "XANS ROSLING",
         tili: "LOTIN",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "ALIF ",
         editor: "PAULO KOELO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "RITA XEYVORT YOXUD SHOUSHENKDAN QOCHISH",
         editor: "STIVEN KING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEN NAYMAN ",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ONAMNING SIRLI KUNDALIGI",
         editor: "BUSHRA KUCHUK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SHUNCHA SHINGANI KIM YEGAN",
         editor: "PAK VAN SO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YEVGENI ONEGIN ISHQ QISSASI",
         editor: "ALEKSANDR SERGEYVICH PUSHKIN",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "YASHIL KECHA ",
         editor: "RASHOD NURI GUNTEKIN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TO'LAQONLI XAYOT BU BIZNES-LOYIHA",
         editor: "RADISLAV  GANDAPAS",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "QO'ZICHOQLAR SUKUNATI",
         editor: "TOMAS HARRIS",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "CHERNOBIL TAVALLOSI",
         editor: "SVETLANA ALIKSEYVICH",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GAP QAHVADA EMAS ",
         editor: "XOBARD BEXAR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HAYOTNI SOKINLASHTIRISH PAYTI ",
         editor: "KINSUN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QULAYOTGAN TOG'LAR",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TOG' CHINDAN HAM O'SHA YERDA BO'LGANMI",
         editor: "PAK VAN SO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MAUGLI",
         editor: "JOZEF REDYARD KIPLING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OTKAN KUNLAR",
         editor: "ABDULLA QODIRIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AKRAMNING SARGUZASHTLARI  ",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HIKMATLAR",
         editor: "JALOLIDDIN RUMIY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OTAMDAN QOLGAN DALALAR",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ONA LOCHIN VIDOSI",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "IKKI ESHIK ORASI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAMARQAND OSMONIDA YULDUZLAR 2 KITOB ",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAMARQAND OSMONIDA YULDUZLAR 3 KITOB ",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ABADIY ZAMONDOSH",
         editor: "OLIM TOSHBOYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHO'QINTIRILGAN OTA YOKI MAFIA SARDORI",
         editor: "MARIO PYUZO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AMERIKA FOJEASI 1-2 KITOB",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HIKMATLAR",
         editor: "LEV TOLSTOY",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "SEVGI SANATI",
         editor: "ERIX FROMM",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEN,DADAM VA ALSGEYMER",
         editor: "NODRABEGIM",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "0 DAN BOSHLANGAN BIZNES",
         editor: "ERIK RIS",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "KASANDRA TAMG'ASI",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ERTA QAYTGAN TURNALAR",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "STIV JOBS",
         editor: "UOLTER AYZEKSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOBURNOMA",
         editor: "ZAHIRIDDIN MUHAMMAD BOBUR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "UCH OG'AYNI ",
         editor: "ERIX MARIYA REMARK",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BIR BARAKALI MARKETING REJA",
         editor: "ALLAN DIB",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "DUNYO MAMLAKATLARI",
         editor: "LAZIZ RAXMATOV",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "JINOYAT KO'CHASIDAGI ISHQ",
         editor: "IRODA UMAROVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OLMOS KAMAR",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SIZGA HAM YOQISHI MUMKIN",
         editor: "TOM BANDERBILT",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "RUXIYAT ALIFBOSI",
         editor: "BAXODIR KARIM",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "AMIRLIKNING OLTIN TAXTI IZIDAN",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MILLION DOLLARLAIK XATOLAR",
         editor: "PAVEL ANNENKOV",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "DORIXONADAGI QOTILLIK",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QADR KECHASIDA QOTILLIK",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOTANIKLAR HAM BIZNES QILADI",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QIMMATGA TUSHGAN XATO",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SURGUNDAGI SARGUZASHTLAR",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TEMURIYLAR KUTUBXONASINING",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BIZNES HAQIDA DUNYONI O'ZGARTIRGAN ODAMLARNING 250 TA MULOHAZASI ",
         editor: "STIV JOBS",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "KECHIKKAN QASOS",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SO'POQSOYDAGI SIRLI QOTILLIK",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'G'IRLANGAN BOLALIK",
         editor: "KOMIL SINDAROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SONATA TILSIMI",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "O'LSANG KIM YIG'LAYDI",
         editor: "ROBIN SHARMA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEHROBDAN CHAYON",
         editor: "ABDULLA QODIRIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'Z FERRARISINI SOTGAN ROHIB",
         editor: "ROBIN SHARMA",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MARTIN IDEN",
         editor: "JEK LONDON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "UCH ILDIZ",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OSHIQ OHI ",
         editor: "MAHMUD TOIR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KOMILA ",
         editor: "RAXIM KARIMOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JAVDARZODANING XALOSKORI",
         editor: "JEROM CELINJER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MANAVIY MASNAVIY",
         editor: "JALOLIDDIN RUMIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AYOL DONOLIGI",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ONA TARBIYASI ",
         editor: "AZIZ NESIN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "MAVLONO:BIR ISTAGINGIZ RO'YOBGA CHIQSA ,BIR XAYR-RO'YOBGA CHIQMASA MING XAYR IZLANG",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "IKKI DIANA",
         editor: "ALEKSANDR DYUMA",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "MUKAMMAL RAXBAR",
         editor: "ISXAK KALDERON ADIZES",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "VOZ KECHILMAS AYOL BO'LISH",
         editor: "HAKAN O'ZKAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TARAS BULBA",
         editor: "NIKOLAY VASILYEVICH ",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "GO'RO'G'LINING TUG'ULISHI",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YUQUMLILIK ",
         editor: "YONA BERGER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BORN MUQOYASI ",
         editor: "ROBERT LADLEM",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JINOYAT VA JAZO",
         editor: "FEODOR DOSTAEVSKIY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "BUZRUKNING KO'ZI",
         editor: "GABRIEL GARSI MARKES",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'Z TAQDIRINGIZNI KASHF ETING ",
         editor: "ROBIN SHARMA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TO'RT ULUS TARIXI",
         editor: "MIRZO ULUG'BEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'ZBEKISTONLIK IKKINCHI JAHON URUSHI QAHRAMONLARI",
         editor: "A.A.AXMEDOV,A.A.JO'RABOYEV,M.M.YO'LDASHEV,A.ZIYO,X.A.QARSHIYEV,A.S.KAN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OLTIN KALIT YOKI BURATINONING BOSHIDAN KECHERGANLARI",
         editor: "ALEKSEY TOLSTOY",
         tili: "LOTIN",
        turkum: "ERTAK-QISSA"
        },
        {
         name: "HAYOTIMIZ KENGURULARI",
         editor: "SANJAR XO'JA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QADRIM",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MORRINING SESHANBA DARSLARI",
         editor: "MICH ELBOM",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ONALIK MAQOMI",
         editor: "NOILA XOLMUHAMMAD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHAMO ORTIDAN YUGURIB",
         editor: "XOLID HUSAYNIY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ITYURAK ",
         editor: "MIXAIL BULGAKOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "ERTAGA O'LDIRGANI BORAMAN",
         editor: "ISHMAEL BIX",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JUDA MAYUSSAN",
         editor: "PAK VAN SO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SIDDHARTHA",
         editor: "HERMANN HESSE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAYOTINGIZNI QADRLANG O'ZINGIZNI DAVOLANG",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "SAROB ",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DARYO ORTIDAGI YIG'I",
         editor: "QO'CHQOR NORQULOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MENI UNUTMA SENGA SEVISHNI MEN O'RGATDIM",
         editor: "HAKAN O'ZKAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "KEKSAGANING SO'NGI NISHONI",
         editor: "AKBAR MIRZO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KAPITAN GRANT BOLALARI",
         editor: "JYUL VERN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AMIR TEMUR",
         editor: "MARSEL BRION",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAMMASI YAXSHI BO'LADI",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "XAYYOMDAN BIR KOSA RUMIYDAN BIR JOM",
         editor: "SIROJIDDIN SAIDIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TOM SOYERNING BOSHIDAN KECHIRGANLARI",
         editor: "MARK TVEN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GOBLINLAR QO'RIQXONASI",
         editor: "KLIFFORD SAYMAK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ASROR BOBO",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOSHLIKDA BERGAN KO'NGIL",
         editor: "HABIB NU'MON",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "IZTIROB ",
         editor: "SULAYMON HAYDAR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MIRZO ULUG'BEK",
         editor: "MAQSUD SHAYXZODA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SENI BUGUN KO'RMASAM BO'MAS",
         editor: "IQBOL MIRZO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OLTIN ZANGLAMAS ",
         editor: "SHUXRAT",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HAYOT",
         editor: "GIDE MOPASSAN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HIKOYA,OCHERK VA HAJVIYALAR TO'PLAMI",
         editor: "ABDULLA QODIRIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MENING HAYOTIM ",
         editor: "XENRI FORD",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PANDALAR UCHA OLADI",
         editor: "CANER YAMAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "KATTA TO'RTLIK",
         editor: "SKOTT GELLOEY",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "TEATR",
         editor: "SOMERSET MOEM",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MARTIN IDEN",
         editor: "JEK LONDON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SOMON YO'LI",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JANNATGA MAKTUBNOMA",
         editor: "ADAM UZKUSA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "URISHNING DAVOMI",
         editor: "NABI JALOLIDDIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QIMORBOZ ",
         editor: "FYODOR DOSTOYEVSKIY",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "KUNTUG'MISH",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHINOR",
         editor: "ASQAD MUXTOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TOGLAR OLISDAN KO'RINADI",
         editor: "GULYUZ MIRMUHSIN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HIKOYA VA QISSALAR TO'PLAMI",
         editor: "SHUHRAT",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OTAMDAN QOLGAN DALALAR",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KITOBXON KUNDALIGI",
         editor: "SARDOR MAQAZIYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JANNA DARK",
         editor: "MARK TVEN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DUSHMAN",
         editor: "MURATBOY NIZAMOV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HAYOT-MAMOT",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SIZ NIMANI O'YLASANGIZ MEN O'SHANI KO'RAMAN",
         editor: "JO NAVARRO",
         tili: "LOTIN",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "BEGONA",
         editor: "OTAJON TOGON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "FRANKENSHTEYN",
         editor: "MERI SHELLI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ME'MOR",
         editor: "MIRMUHSIN",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MILLIONERLAR KABI FIKRLANG",
         editor: "XARV EKER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AGAR OSHIQLIGIM AYTSAM",
         editor: "MASHRAB",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ELJERNONZAGA ATALGAN GULLAR",
         editor: "DANIEL KIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NOMUS",
         editor: "ELIF SHAFAQ ",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "KALLAXONALIK YIGITCHA ROMAN",
         editor: "ALISHER MIRZO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TANLANGAN ASARLAR",
         editor: "G'AYBULLOH AS-SALOM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BALIQCHI VA O'G'LI",
         editor: "LIVANELI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ASIRNI QARITGAN KUN",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SALAMADRALAR BILAN JANG",
         editor: "KAREL CHAPEK",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "CHOL VA DENGIZ",
         editor: "ERNEST XEMINGUEY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: " QARZGA OLINGAN UMR",
         editor: "ERIX MARIYA REMARK",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "REWORK PRINSIPLARSIZ BIZNES",
         editor: "MATLUBA RAXMONQULOVA",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "AVLODLAR DOVONI",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAXTLI HAYOT SARI",
         editor: "ZIYOVUDDIN RAXIM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ABDULXAMID SO'NGGI HUKMDOR",
         editor: "OKAY TIRYAKO'G'LI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "O'YIN",
         editor: "XURSHID DO'STMUHAMMAD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JEYN EYR",
         editor: "SGARLOTTA BRONTE",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DIKTATURADAN DIMOKRATYAGA",
         editor: "JIN SHARI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SAHNA SARDORI",
         editor: "X.ABDUSAMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YALONG'OCH IQTISODIYOT",
         editor: "CHARLIZ ULIAN",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "ISHQING TUPROQ QILGAY",
         editor: "UMAR XAYYOM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JOSUSLAR O'YINI ",
         editor: "XUDOYBERDI NAZAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "RAQAMLAR UCHUN YARALGAN IDROK",
         editor: "BARBARA OUKLI",
         tili: "LOTIN",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "TASAVVUFIY HIKOYALAR",
         editor: "GO'ZAL MIRZAALIYEVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TAQDIRINGIZNI BOSHQARING",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "ILOHIYNOMA SAYLANMA 2 ",
         editor: "SHAYX FARIDDIN ATTOR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ZULAYHO DARAXTI",
         editor: "NORMATOV NODIR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ULUG'BEK YULDUZLAR SALTANATI",
         editor: "OTABEK QUVVAT",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ZULMAT ICHRA NUR",
         editor: "MIRKARIM OSIM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHARPALAR SOYASI",
         editor: "AZAMAT KORJOBOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ABADIYAT QONUNI",
         editor: "NODAR DUMBADZE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QISSA,HIKOYA,VA OCHERKLAR TO'PLAMI",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GARRI POTTER VA AZKABAN MAHBUSI",
         editor: "JOANNA KETLIN ROULING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALPOMISH",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SARAFAN MARKETING",
         editor: "ENDI SERNOVIS",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "SIROJIDDIN MAHDUM-SIDQIY XANDAQLIQIY",
         editor: "ASIL ASAD",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NOTANISH ODAM PARIJDA ",
         editor: "UILYAM SOMERSET MOEM",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AJAL BILAN YUZMA-YUZ 2",
         editor: "AKBAR MIRZA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BOLALIK XOTIRALARIM",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QUYOSH QORAYMAS",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "21 KUN ICHIDA BAXTLI BO'LING",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ODAM NECHA MARTA TUG'ILADI",
         editor: "JAHONGIR PIRMUHAMMEDOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NAVOIY",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BIZNES SARGUZASHATLAR",
         editor: "JON BRUSK",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "SO'NA",
         editor: "ETEL LILIAN VOYNICH",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ASKAR BOLA",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MALAZGRITDA JUMA TONGI",
         editor: "YAVUZ BAXODIR O'G'LI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SOYALAR",
         editor: "G'AFUR G'ULOM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HAYOTGA QAYT",
         editor: "GULSEREN BUG'DAYJIO'G'LI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KO'RINMAS ODAM",
         editor: "HERBERT UELLS",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "FARENGEYT BO'YICHA 450 ",
         editor: "REY BREDBERI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ODDIY AYRILIQ",
         editor: "AVAR OBIDJON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YODGOR",
         editor: "G'AFUR G'ULOM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHUM BOLA",
         editor: "G'AFUR G'ULOM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AJAL  CHAQIRIG'I",
         editor: "OZOD MO'MIN XO'JA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JAZOSIZ TARBIYA",
         editor: "ADEM GUNESH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "QUSH QAFASDA QANOT QOQMAYDI",
         editor: "MIRZO KENJABEK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOLG'ONLAR SHAXRI",
         editor: "RAMITA NAVAI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PORTOBELLO JODUGARI",
         editor: "PAULO KOELO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ONANING MEHR NURI",
         editor: "ODILJON MAHMUDOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KUMUSH QASHQA ",
         editor: "ARTUR KONAN DOYL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AMIR TEMUR SALTANATI",
         editor: "LYUSEN KEREN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BEPARVOLIKNING NOZIK SANATI",
         editor: "MARK MENSON",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "YASHIL MILYA",
         editor: "STIVEN KING",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALKIMYOGAR",
         editor: "POULO KOELO",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QO'RQINCHLI TEHRON",
         editor: "MUSHFIQ KOZIMIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "IBTIDO",
         editor: "DEN BRAUN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MITTIVIY VA KARLSON",
         editor: "ASTRID LINDGREN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OSON YASHANG",
         editor: "ENDRYU METYUS",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "TITRAYOTGAN TOG'",
         editor: "LUQMON BO'RIXON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BEGONA VABO",
         editor: "ALBERT KAMYU",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "RUSTAMXOM",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YUSUF VA AHMAD",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BEZORILIK IQTISODIYOTI",
         editor: "ALEKSEY MARKOV",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "MUVAFAQQIYAT KALITI",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "DIQQAT CHALG'ITUVCHI DUNYODA MUVAFAQQIYAT SIRLARI",
         editor: "KEL NYUPORT",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "QALB BESABRLIGI",
         editor: "STEFAN SVEYG",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BORSA KELMASDAN QAYTGANLAR",
         editor: "CHINGIZ ABDULLAYEV",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DAHOLAR DAVRASI",
         editor: "XAMIDJON XOMIDIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ULUG' ONANING JANOZASI",
         editor: "GABRIEL GARSI MARKES",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QALBIM SENI UNUTMAYDI",
         editor: "SEVIM ASIMGIL",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "RAVSHAN",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHINGIZXONING OQ BULUTI",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XAROBADAN CHIQQAN MILLIONER",
         editor: "BIKAS CVARUP",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALKIMYOGAR",
         editor: "PAULO KOELO",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SHAYX NAJMIDDIN KUBRO ",
         editor: "ZAMIRA IS'HOQOVA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YIGIRMA YIDAN SO'NG",
         editor: "O'HENRI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XIYONAT KO'CHASI",
         editor: "GULCHEHRA RAZZOQOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ORZUYINGDAGI BIZNESNI BOSHLASH UCHUN 100 TA ENG ZO'R G'OYA",
         editor: "KEN LANGDON",
         tili: "LOTIN",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "JAZOSIZ TARBIYA 2 ",
         editor: "ADEM GUNESH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "MASGREYVLAR UDUMI",
         editor: "ARTUR KONAN DOYL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PROFESSOR DOELNING BOSHI",
         editor: "ALEKSANDR BELYAYEV",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TURNALAR YO'LI",
         editor: "TURSUN ALI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AZIZIM",
         editor: "GIDE MOPASSAN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ORZIQIB KUTAMAN ERTANI 2",
         editor: "TILLA BEGSHOV  SINDI SHELDON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "12 STUL",
         editor: "I.ILIF E.PETROV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KOMETA",
         editor: "GULNOZ MO'MINOVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HIKOYALAR TO'PLAMI",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "UBAYS QORONIY",
         editor: "RAUF CHILLASIN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SOHIL BO'YLAB CHOPAYOTGAN OLAPAR",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "URISH VA TINCHLIK",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "PARILAR TILSIMI",
         editor: "XAMID ALP",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ATOM ODATLAR",
         editor: "JEYMS KLIR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "1984",
         editor: "JORJ ORUEL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NAVOIY",
         editor: "OYBEK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MOMOQO'SHIQ",
         editor: "NAZAR ESHONQUL",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JANNATGA YO'L HAKIM VA AJAL RANJKOM SOHIBQIRON",
         editor: "ABDULLA ORIPOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GRUZYA MUVAFAQQIYATGA QANDAY ERISHDI",
         editor: "LARISA BURAKOVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAYOLIMGA BO'LAMAN TUTQUN",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHOL HAVOSI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SOG'INCH",
         editor: "FARMON TOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "RIM ERTAKLARI",
         editor: "JANNI RODARI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MENING QO'SHNIM MILLIONER",
         editor: "UILYAM D.DANKO TOMAS DJ.CTENLI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OSVENSIMDAGI TATIROVKACHI",
         editor: "XEZER MORRIS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QISSA,HIKOYALAR TO'PLAMI",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KO'RGIM KELAR SENI NEGADIR",
         editor: "BOBUR BOBOMUROD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XOIN",
         editor: "RAVSHAN YO'LDOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KALILA VA DIMNA",
         editor: "HIND EPOSI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ILIADA",
         editor: "HOMER",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "VENESIYA MISSIYASI",
         editor: "JEYMS HEGLI CHIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "LAYLONING UYI",
         editor: "LIVANELI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QUTLUG'QON",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NAVOIY",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QORA KO'ZLAR",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ICHINDAGI ICHINDADUR",
         editor: "JALOLIDDIN RUMIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KATTA O'YIN",
         editor: "PIRTER XOPKIRK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ORZIQIB KUTAMAN ERTANI ",
         editor: "SIDNI SHELDON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "RUBOIYLAR",
         editor: "UMAR XAYYOM",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOLG'IZLIKNING YUZ YILI",
         editor: "GABRIEL GARSI MARKES",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOSH VRACH KUNDALIGI",
         editor: "MIXAIL BULGAKOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "OLTIN VODIYDAN SHABADALAR",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YAXSHIYAMKI HAYOTIMDA YOQSAN",
         editor: "HAKAN O'ZKAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "CHINOR",
         editor: "ASQAD MUXTOR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JAMILA",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DASHTDAGI OLOV",
         editor: "HABIB ABDUNAZAR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TONGGACHA YASHASA",
         editor: "VASIL VIKOV",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QALBDAGI O'CHMAS IZLAR",
         editor: "ZIKIR MUHAMMADJONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ICHIMIZDAGI MAVLINO RUMIY ",
         editor: "JIHAN O'QUYUJI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'TMISHDAN ERTAKLAR",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SUNBULANING SO'NGI OQSHOMI",
         editor: "SANJAR TURSUNOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ONAIZOR ",
         editor: "ODIL YOQUBOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'TKAN KUNLAR",
         editor: "ABDULLA QODIRIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YULDUZLI TUNLAR",
         editor: "PIRIMQUL QODIROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MEHROBDAN CHAYON",
         editor: "ABDULLA QODIRIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NUR VA SOYALAR ",
         editor: "ROBINDRANAT TAGOR",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OSMONDAN TUSHGAN XAZINA",
         editor: "QUTLIBIKA RAXIMBOYEVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XIYONAT  ",
         editor: "ABROR ZOHIDOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JAYHUN USTIDA BULUTLAR",
         editor: "MIRKARIM OSIM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAXT YETKAZISH MILLIARD DOLLARLIK INTERNET DO'KON TARIXI",
         editor: "TONI SHEY",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "GO'ZAL YENGILDIK",
         editor: "JANER YAMAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "QISSA,HIKOYA VA OCHERKLAR TO'PLAMI",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "METRO",
         editor: "DMIRTIY ALEKSEYVICH GLUXOVSKIY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "BIZ GLINDANI SHUNDAY YAXSHI KO'RAMIZ",
         editor: "XULIO  KORTASAR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAYYOM  ",
         editor: "NABI JALOLIDDIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YEVGENIY ONEGIN ",
         editor: "A.S.PUSHKIN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XUZURSIZLIK",
         editor: "LIVANELI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MILLAT QIZIGA",
         editor: "RAXIMA SHOMANSUROVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JANNAT QIDIRGANLA",
         editor: "SHUHRAT",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MUVAFAQQIYATLI INSONLARNING 7 KO'NIKMASI",
         editor: "STIBEN R.KOVI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AYRILMAS ER",
         editor: "FYODOR DOSTOYEVSKIY",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "OLMOS KAMAR",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHORUH VA GAVHARSHOD",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KECHA VA KUNDUZ",
         editor: "ABDULHAMID CHO'LPON",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BOLALIK XOTIRALARIM",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ERK",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KOD BUZAR",
         editor: "UOLTER AYZEKSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YAPON ZOBITI",
         editor: "ATO XAMDAM,LEONID CHIRIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "UCH O'LIM",
         editor: "LEV NIKOLAYEVICH TOLSTOY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SEMIZ VA ORIQ",
         editor: "anton pavlovich chexov",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YULDUZLI TUNLAR",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHISHA QOLIP",
         editor: "SHAHLO XOSHIMOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QORAQUSH YULDUZINGING SIRI",
         editor: "ISAJON SULTON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MARHAMATLI KUN",
         editor: "LUQMON BO'RIXON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BASKERVILLAR ITI",
         editor: "ARTUR QONAN DOYL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QORA KO'ZLAR",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "PITER PEN",
         editor: "J.M.BARRI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QAYSI BIRIMIZ SEVMAGANMIZ",
         editor: "ETHEM EMIN NEMUTLU",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BAXT SARI TO'RT QADAM",
         editor: "JO VITALE",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SERENADA",
         editor: "LIVANELI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QONLI YO'RGAKLAR",
         editor: "ABDURASHID NURMURODOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HAQIQIY MO'JIZA O'ZINGA ISHONMOQDIR",
         editor: "ETHEM EMIN NEMUTLU",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TOG'LAR HAM SADO BERDI",
         editor: "XOLID XUSAYNIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "VIJDON QO'NG'IROG'I",
         editor: "ASHURALI JO'RAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAXT ORTIDAN QUVIB",
         editor: "KRIS GARDNER,KVINSI TRUP",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OT KISHNAGAN OQSHOM",
         editor: "TO'G'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YO'LGA CHIQSANG MANZIL KO'RINAD",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TANLANGAN ASARLAR",
         editor: "G'OFUR G'ULOM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'ZBEGIM",
         editor: "ERKIN VOHIDOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MEHROBDAN CHAYON",
         editor: "ABDULLA QODIRIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AMERKA FOJIASI 3-KITOB",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HECH BIR UCHRASHUV TASODIF EMAS",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SAVOL ORTIDAGI SAVOL",
         editor: "JON G.MILLER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOLALIK XOTIRALARIM",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AJIB YANGI DUNYO",
         editor: "OLDOS XAKSLI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "FIDOYI",
         editor: "PREMCHAND",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'YINLAR NAZARIYASI",
         editor: "BARRI J.NEYLBAFF, AVINASH DIQSIT",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEROS",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SINCHALAK",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AYOL  ",
         editor: "ZULFIYA QUROLBOY QIZI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QAYDASAN MO'JIZA",
         editor: "ABDUQAYUM YO'LDOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ODAM BO'LISH QIYIN",
         editor: "O'LMAS UMARBEKOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KREYSER SONATASI",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "SARIQ IBLIS",
         editor: "JAHONGIR AYUB",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NAVOIY",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ASRIY AN'ANALAR ASOSIDA TURK OSHXONASI",
         editor: "JAHONGIR ODILOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SUKUNATNING SASSIZ SADOSI",
         editor: "SHERMUROD SUBXON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHE'RLAR TO'PLAMI",
         editor: "ERKIN VOHIDOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "USMON NOSIR",
         editor: "XURSHID SEROBOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAMARQAND OSMONIDA YULDUZLAR 1 KITOB",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MOVIY KARBUNKUL",
         editor: "ARTUR KONAN DOYL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QO'RQUV VODIYSI",
         editor: "ARTUR KONAN DOYL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QO'RQMA",
         editor: "JAVLON JOVLIYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "UYIMIZ JANNATGA AYLANSIN",
         editor: "AXMET BULUT AXMET AKIN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ATOM ODATLAR",
         editor: "JEYMS KLIR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OQ KEMA ",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'ZINGNI QADRLA",
         editor: "ANASTASIYA ZALOGA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QIZIL TOSHBO'RON",
         editor: "NABIJON BOQIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'RIK GULLAGANDA",
         editor: "HAMID OLIMJON",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XAYOTNING ENG BUYUK",
         editor: "RONDA BERN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAYRLISI",
         editor: "ONUR QOPLON",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ORZIQIB KUTAMAN ERTANI",
         editor: "SINDI SHELDON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ZOLIM ISTANBUL",
         editor: "UMIDA ADIZOVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ANNA KARENINA",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MUNGLI KO'ZLAR",
         editor: "XUDOYBERDI TO'XTABOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ALVON YELKANLAR",
         editor: "ALEKSANDR GRIN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DANG'ILLAMA HOVLIDAGI O'LIM",
         editor: "JEYMS HEGLI CHIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEN BOLAMNI URMAYMAN",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "QALBINGIZ SOF BO'SA HIKOYANGIZ BAXTLI YAKUNLANADI",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "AYOL QISMATIDAN QISSALAR",
         editor: "JIN P.SESSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'N SAKKIZGA KIRMAGAN KIM BOR",
         editor: "SHUKUR XOLMIRZAYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "URISHNING SO'NGI QURBONI",
         editor: "O'TKIR HOSHIMOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TALVASA",
         editor: "TOHIR MALIK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'GAY ONA ",
         editor: "AXMAD LUTFI QOZONCHI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QIROLICHANING YURISHI",
         editor: "UOLTER TEVIS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ASR AFSONALARI",
         editor: "ESHQOBIL SHUKUR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DO'ST ORTTIRISH VA ODAMLARGA TASIR O'TKAZISH",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BARCHASI SENGA ATALGAN",
         editor: "ERDOOG'AN YILDIRIM",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "O'TKAN KUNLAR",
         editor: "ABDULLA QODIRIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ALAMLI DUNYODA ALAMLI GULIM",
         editor: "SIROJIDDIN SAIDIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QISSALAR ",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SO'NGGI TO'FON",
         editor: "AXMAD LUTFI QOZONCHI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JAMIL ",
         editor: "MUHAMMAD KABIR UMAR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SHUNCHA SHINGANI KIM YEGAN",
         editor: "PAK VAN SO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SARVQOMAT DILBARIM",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAXSHAT ABDULLA QAHHOR",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "PESHONAMDAGI NUR ",
         editor: "MEHMET OLAQOSH",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QIYOMAT",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BO'STON",
         editor: "SA'DIY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "GO'ZAL YENGILDIK",
         editor: "JANER YAMAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ISTEDODLI INSONLAR MAMLAKATNING BEBAHO BOYLIGIDIR",
         editor: "M.A.RAXMATOV,B.Z.ZARIPOV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XOLDORXON",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MILLION DORLLARLIK XATOLAR",
         editor: "PAVEL ANNENKOV",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KATTA O'YIN",
         editor: "PETER HOPKIRK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OLIGARXNING MEROSXO'RI",
         editor: "CHINGIZ ABDULLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'Z USTINGDA ISHLA",
         editor: "NORBEKOV MIRZAKARIM",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TITRAYOTGAN TOG'",
         editor: "LUQMON BO'RIXON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OSMON OG'USHI",
         editor: "ABDUQAYUM YO'LDOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ASL OTALAR KITOBI",
         editor: "JALOLXON  UMAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ASL OTALAR KITOBI",
         editor: "ULUG'BEK SHARIPOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QAMAL",
         editor: "ISMOIL SHOMURODOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MARHAMATLI KUN",
         editor: "LUQMON BO'RIXON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QORA QUSH YULDUZNING SIRI",
         editor: "ISAJON SULTON ",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KELMASANG HAM KUTAMAN",
         editor: "BERKUTAY SOYSAL",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "YAXSHI OTALAR KITOBI",
         editor: "SARDOR NAZAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BIZNES BU MEN UCHUN",
         editor: "YEVGENIY GENKIN",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "MUVAFAQQIYATLI INSONLARNING 7 KO'NIKMASI",
         editor: "STIVEN R.KOVIY",
         tili: "LOTIN",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "JEYN EYR",
         editor: "SHARLOTTA BRONTE",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ADABIYOT MUALLIMI",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ANOR",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DUNYO BOLALARI",
         editor: "ASQAD MUXTOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'Z FERRARISINI SOTGAN ROHIB",
         editor: "ROBIN SHARMA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ONAIZOR ",
         editor: "MIRMUHSIN",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AMERIKA FOJEASI 1-2 KITOB",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DARDI BEDAVO",
         editor: "NOSIR ZOXID",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHIMOL HIKOYALARI",
         editor: "JEK LONDON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BO'RI BOLALARINI QANDAY O'RGATADI",
         editor: "LEV TOLSTOY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NOTO'G'RI HAYOT TO'G'RI YASHALMAYDI",
         editor: "ATHAM AMIN NEMUTLU",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TAFAKKUR CHASHMASI",
         editor: "SOHIB KAMOL",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ULUG' ONANING JANOZASI",
         editor: "GABRIEL GARSI MARKES",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DUMBUL BOYVACHCHA",
         editor: "D.I.FONBIZIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ORZUDAN TONMAGAYMIZ",
         editor: "ANVAR OBIDJON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DIYONAT",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SO'Z YOLQINI",
         editor: "QOZOQBOY YO'DOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KO'HNA DUNYO ",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHISHA QOLIP",
         editor: "SHAXLO HOSHIMOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ANOR",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AZIZIM",
         editor: "GIDE MOPASSAN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BIR O'ZBEK O'YI",
         editor: "OLIM JUMABOEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KO'KLAM KUYI",
         editor: "FOZIL FARXOD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QUYONLAR SALTANATI",
         editor: "XUDOYBERDI TO'XTABOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BESH BOLALI YIGITCHA",
         editor: "XUDOYBERDI TO'XTABOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SEHRLI OLMOS UZUK",
         editor: "SAYYORA SADULLAYEVA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XIYONAT",
         editor: "ABROR ZOHIDOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GOBLINLAR QO'RIQXONASI",
         editor: "KLIFFORD SAYMAK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AYOL",
         editor: "ZULFIYA QUROLBOY QIZI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ZAMONDOSHLAR XOTIRASIDA",
         editor: "SHUHRAT",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "VIJDON QO'NG'IROG'I",
         editor: "ASHURALI JO'RAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GO'SHTDAN TAYYORLANADIGAN TAOMLAR",
         editor: "SOTIBOLDIYEVA ODINAXON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QADRIM",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHAFTOLI GULI",
         editor: "NAZAR ESHONQUL",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MEROS",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DUSHMAN",
         editor: "MURATBOY NIZAMOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAHOLAR DAVRASI",
         editor: "XAMIDJON XOMIDIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OTAMNING NASIHATI",
         editor: "XAYRULLOH QOSIM ELTURK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ASRNI QARITGAN KUN",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "FARENGEYT BO'YICHA 450 ",
         editor: "REY BREDBERI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALISA KO'ZGUORTI O'LKASIDA",
         editor: "LYUIS KERROLL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BALACHAK",
         editor: "AYBEK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MUROSAYU MADORA",
         editor: "SEMA MARASHLI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "SIZ QO'RQUVDAN KUCHLIROQSIZ",
         editor: "REDJIN GALANTI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'Z FERRARISINI SOTGAN ROHIB",
         editor: "ROBIN SHARMA",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "CHINOR",
         editor: "ASQAD MUXTOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XALOSKOR SULTON SAYFIDDIN QUTUZ",
         editor: "SHAHODAT ULUG'",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TAQDIRINGIZNI BOSHQARING",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ДЕНЬ ПОСЛЕДНИЙ И ПЕРВЫЙ",
         editor: "VIKTOR SUMIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALIFDEK SEVMOQ NAFAS",
         editor: "HIKMAT AMIN USTEKIN",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "OYDINDA YURGAN ODAMLAR",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BO'LADIGAN BOLALAR ",
         editor: "PO'LAT MO'MIN",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SIRLI TABOBAT",
         editor: "ABU ALI IBN SINO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NAJOT",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TIRIK RUHLAR",
         editor: "SHUKRULLO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GO'DAKLIKDAN YIGITLIKKA QADAR",
         editor: "SHENIZ YUJEL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BUXORO TARIXI",
         editor: "ABU BAKR MUHAMMAD IBN JAFAR SHARSHAXIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MASHRAB G'AZALLARI ",
         editor: "MASHRAB",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BARON MYUNXAUZENNING SARGUZASHTLARI",
         editor: "RUDOLF ERIX RASPE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JAYHUN USTIDA BULUTLAR",
         editor: "MIRKARIM OSIM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BO'RONLARDA BORDEK HALOVAT",
         editor: "ASQAD MUXTOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHOL VA DENGIZ",
         editor: "ERNEST XEMINGUEY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PUL OQIMINING KVADRANTI",
         editor: "R.T.KIYOSAKI,SH.L.LECHTER",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "AJIB YANGI DUNYO",
         editor: "OLDOS XAKSLI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TANA VA RUHNI TARBIYALASH",
         editor: "MIRZAKARIM NORBEKOV",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "SOHIBQIRON",
         editor: "ABDULLA ORIPOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QONLI YO'RGAKLAR",
         editor: "ABDURASHID NORMURODOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QO'RQINCHLI TEHRON",
         editor: "MUSHFIQ KOZIMIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DAQIQA QADRI 1",
         editor: "ABDURASUL ABDULLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAQIQA QADRI 2",
         editor: "ABDURASUL ABDULLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAQIQA QADRI 3",
         editor: "ABDURASUL ABDULLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "VAQT BU PUL",
         editor: "BANDJAMIN FARAKLIN",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "GULISTON BO'STON",
         editor: "SADIIY SHEROZIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DIQQAT CHALG'ITUVCHI DUNYODA MUVAFAQQIYAT SIRLARI",
         editor: "KEL NYUPORT",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "REWORK BID'ATLARDAN XOLI BIZNES",
         editor: "DEBIT HANSON JEYSON FRAYT",
         tili: "LOTIN",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "IBTIDO",
         editor: "DEN BRAUN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TENTAKNING TAJRIBASI 1",
         editor: "MIRZAKARIM NORBEKOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHERNOBIL TAVALLOSI",
         editor: "SVETLANA ALIKSEYVICH",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DUNYO MALAKATLARI",
         editor: "BUSHUEVA L",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "BAXTLI BO'LISH SIRLARI ",
         editor: "MIRINAL KUMAR GUPTA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SAVOL ORTIDAGI SAVOL",
         editor: "JON G.MILLER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KO'P NARSADAN BEXABAR EDIM",
         editor: "SONGUL UNSAL",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "INSON QANDAY QILIB O'ZIDA ISHON QABUL QILA BILISHGI VA OMMA OLDIDA GAPIRA TURIB ODAMLARGA QANDA TASIR O'TKAZA BILISHI HAQIDA",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "G'OYIB BO'LGAN ATIRGUL  ",
         editor: "SERDAT O'ZKAN",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "INSON HUSNI",
         editor: "MIRZAKALON ISMOILIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SENI DESALAR YONAR QALBIM",
         editor: "TOZAGUL",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BALOG'AT PILLAPOYALARI ",
         editor: "MANZURA ZAYNUTDINIVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SENI SEVAMAN DEMA ,SEV",
         editor: "MIRACH CHAG'RI OQTOSH ",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "VAQT MASHINASI",
         editor: "HERBERT UELLS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TOM TOG'ANING KULBASI ",
         editor: "GARRIET BICHER-STOU",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OT KISHNAGAN OQSHOM",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KECHA VA KUNDUZ",
         editor: "ABDULHAMID CHO'LPON",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ALVIDO QIROL LYUDOVIK KO'PRIGI ",
         editor: "TORNTON UAYLDER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SEHRGAR VA QASHSHOQ YIGIT",
         editor: "MAHMUD MURODOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "1985",
         editor: "ENTONIY BERJES",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "21 KUN ICHIDA BAXTLI BO'LING",
         editor: "LUIZA XEY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "VAQT DARYOSI",
         editor: "ABDUNABI HAMRO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYLANMA   ",
         editor: "MARHABO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BEDORLIK",
         editor: "ZIYODULLA NURMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TIRIK QOLISH BUYURILGAN",
         editor: "YULIAN CEMYON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KEKSA MERGANNING SO'NGI NISHONI",
         editor: "AKBAR MIRZO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ABADIY ZAMONDOSH",
         editor: "OLIM TOSHBOYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JENNI GERXARDT",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ABADIY ZAMONDOSH",
         editor: "OLIM TOSHBOYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OMMA PSIXOLOGIYASI",
         editor: "GUSTAV LEBON",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "XODIMLARNI TANLASH SANATI",
         editor: "SVETLANA IVANOVA",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: " BLOKCHEYN A DAN Z GACHA",
         editor: "LORAN LELU",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "STIV JOBS BIZNES HAQIDA ",
         editor: "STIV JOBS",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "SIROJIDDIN MAHDUM-SIDQIY XANDAQLIQIY",
         editor: "A.ASIL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AMIR TEMUR",
         editor: "MARSEL BRION",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ODDIY AYRILIQ",
         editor: "ANVAR OBIDJON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NAVOIY",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YAXSHILAR YO'QOLMAYDI YO'QOTILADI",
         editor: "SEDAR ERO'G'LI",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ONG QUDRATI-BOLALR XIZMATIDA",
         editor: "DJ.KEXO N.FISHER",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "24 SOATDA SHAXMAT O'RGANISH",
         editor: "JUJA POLGAR,POL TRUONG,LESLI GORVIS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "EIPLAR",
         editor: "G'AFUR G'ULOM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HA,YO'Q,HECH QACHON",
         editor: "ERKIN SIDDIQOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "VOZ KECH VA TINCHLAN",
         editor: "ADEM GUNESH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "UOLL-CTRITLIK BO'RI USLUBI",
         editor: "JORDAN BELFORT",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HIKOYALAR  ",
         editor: "JEK LONDON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BIR VIJDON UYG'ONUR ",
         editor: "AXMAT LUTFIY QOZONCHI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DASHTDAGI OLOV",
         editor: "HABIB ABDUNAZAR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BEKLAR VABEKAJONLAR",
         editor: "TOHIR MALIK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ROBERT KIYOSAKI MAKTABI",
         editor: "LARISA BAZAROVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "STRESSDAN EMLANISH ",
         editor: "VALERIY SINELNIKOV",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "YEVGENIY ONEGIN ",
         editor: "A.S.PUSHKIN",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "MUMU",
         editor: "IVAN TURGENEV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "IKKI ESHIK ORASI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QIZIL AJDARHO",
         editor: "TOMAS HARRIS",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALVIDO,GULSARI",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AXMOQLIK QILMANG",
         editor: "JEN SINSSERO",
         tili: "KRILL",
        turkum: "PSIXOLOGIK BADIIY ADABIYOT"
        },
        {
         name: "YASSAVIY BOBO HIKOYALARI",
         editor: "HAYATE BIJE",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DANGASA ONANING KATTA KITOBI ",
         editor: "ANNA ALEKSANDROVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "UMR MAVSUMI",
         editor: "JIM RON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOLALAR TAFAKKUR QUDRATI",
         editor: "JON KIXO NENSI FISHER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SHIFOBAXSH DASTURXON",
         editor: "KAMOLA SODIQOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TASAVVUFIY HIKOYALAR",
         editor: "G.MIRZAYEVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BO'TAKO'Z",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NEGA ODAM",
         editor: "BAHODIR NURMUHAMMAD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QULAYOTGAN TOG'LAR",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QIYOMAT QARZ",
         editor: "O'LMAS UMARBEKOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOGA",
         editor: "RAVSHAN MAMADALIYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SO'NGI DENGIZGACHA",
         editor: "VASILIY YAN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KO'ZIDIN BOSHDA HAVODUR",
         editor: "ZAHIRIDDIN MUHAMMAD BOBUR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYLANMA   ",
         editor: "MARHABO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BU DUNYODA O'LIB BO'LMAYDI",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DUNYO MAMLAKATLARI",
         editor: "LAZIZ RAXMATOV",
         tili: "KRILL",
        turkum: "IQTISODIY BADIIY"
        },
        {
         name: "GRAF MONTE KRISTO IF QALASI MAHBUSI",
         editor: "ALEKSANDR DYUMA",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KASAL BO'LMAY DESANGIZ ",
         editor: "POL BREGG",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BIR KUNDA INQILOB",
         editor: "JUNAYD SUAVI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HAYOTNING BESH TORTIG'I",
         editor: "MARK TVEN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QAYIQDAGI UCH OVLON IT HISOBGA KIRMAYDI",
         editor: "JERONM KLAPKA JEROM",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "CHOLIQUSHI",
         editor: "RASHOD NURI GUNTEKIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "JANNATI ODAMLAR",
         editor: "XUDOYBERDI TO'XTABOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OQSHOM FOJEASI",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BALIQ BITMAS BOYLIK",
         editor: "DAVRON NIYOZOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SOHIL BO'YLAB CHOPAYOTGAN OLAPAR",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JAMILA",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOLG'ONCHINING ROST GAPI",
         editor: "SADULLA SIOEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AMIR TEMUR SALTANATI",
         editor: "LYUSEN KEREN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ODAM BO'LISH QIYIN",
         editor: "O'LMAS UMARBEKOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MARKAZLASHMAGAN DASTURIY ILOVALAR ",
         editor: "SIRAJ RAVAL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "UYQU ISTAGI",
         editor: "ANTON CHEXOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "GONGKONGDAN KELGAN TOBUT",
         editor: "JEYMS CHIYZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MENI KUCHKIROQ SEV",
         editor: "SYU JONSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ZULAYHO DARAXTI",
         editor: "NODIR NORMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KAMON YO'LI",
         editor: "PAULO KOELO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MENING KO'NGLIM BIR QUSHDIR",
         editor: "AYDIN XIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "RITA XEYVORT YOXUD SHOUSHENKDAN QOCHISH",
         editor: "STIVEN KING",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QUG'U OROLIDAN MUJDA",
         editor: "G'OYIB NAZAR",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BAXTLI OILA  QURISHNING 5 QOIDASI",
         editor: "S.BOZOROVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TINHLA BULBUL",
         editor: "ZULFIYA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SARIQ DEVNI O'LIMI",
         editor: "XUDOYBERDI TO'XTABOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SALAMADRALAR BILAN JANG",
         editor: "KAREL CHAPEK",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "LIDER SHAXSIYATI",
         editor: "BRAYAN TREYSI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YEVGENIY ONEGIN ",
         editor: "A.S.PUSHKIN",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "SINCHALAK",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ISHON:ALBATTA, BAXTLI BO'LAMIZ",
         editor: "EZGIN KILICH",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TABIATNING O'ZI TABIB",
         editor: "ABDUXALIL YO'LDOSHEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'LIMDAN KEYINGI HAYOT",
         editor: "RAYMOND MOUDI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ODAMLAR O'YNAYDIGAN O'YINLAR",
         editor: "ERIK BREYN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BALOYI NAFS",
         editor: "VLADIMIR KUNIN",
         tili: "KRIIL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TO'Y SOVG'ASI",
         editor: "GI DE MOPASSAM",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AMERIKA FOJEASI  3-KITOB",
         editor: "TEODOR DRAYZER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SARAFAN MARKETING",
         editor: "ENDI SERNOVIS",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MALAZGIRTDA JUMA TONGI",
         editor: "YAVUZ BAXODIR O'G'LI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "MUNOJOT",
         editor: "TOXIR MALIK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SARALANGAN ISMLAR MA'NOSI",
         editor: "Z.XAMDAMOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QAY BIRIMIZ SEVMAGANMIZ?",
         editor: "ETHEM EMIN NEMUTULU",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "HIKMATLAR",
         editor: "KONFUTSIY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "FERRARISINI SOTGAN ROHIB ",
         editor: "ROBIN SHARMA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAYOTINGIZNI BARBOD QILADIGAN 20 TA XATO",
         editor: "MAYKL ROUCH,MIRZAKARIM NORBEKOV",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OQ KEMA ",
         editor: "CHINGIZ AYTMATOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XUZURSIZLIK",
         editor: "LIVANELI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YUQUMLILIK MAXSULOT VA G'OYALAR QANDAY OMMALASHADI",
         editor: "YONA BERGER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOKI",
         editor: "GO'ZAL BEGIM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AVLIYO QIROL LYUDOVIK KO'PRIGI",
         editor: "TORNTON UAYLDER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MUHABBATNING 10 TA SIRI",
         editor: "ADAM JEKSON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KAKTUSLAR HAM GULLAYDI",
         editor: "SONGUL UNSAL",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "QUTADG'U BILIG",
         editor: "YUSUF XOS HOJIB",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAXTLI TURMUSH UCHUN OLTI MAKTUB",
         editor: "MUSTAFA KARATASH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "NAVOIY",
         editor: "XAYRIDDIN SULTON",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "RAQIBLAR,OQ KEMA",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BIR ISTAGINGIZ RO'YOBGA CHIQSA, BIR XAYR- RO'YOBGA CHIQMASA, MING XAYR IZLANG",
         editor: "XAKAN MENGYUCH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "PROFESSOR DOUELNING BOSHI",
         editor: "ALEKSANDR BELYAYEV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: " YOLLANMA ISHCHINING TADBIRKORGA AYLANISHI",
         editor: "ROBERT KIOSAKI,SHERON LEKTOR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BIRINCHI TEZ YORDAM",
         editor: "Y.TOLIPOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAXT VA BOYLIKKA ERISHISHNING YETTI USULI",
         editor: "JIM RON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PUL OQIMINING KVADRANTI",
         editor: "P.T KIOSAKISH.SH.L LECHTER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SIRLI XILQAT",
         editor: "ANTON CHEXOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "XAYOLIDA GO'ZAL QOL",
         editor: "HALIS KARABENLI",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TURK HIKOYALARI",
         editor: "UMAR SAYFIDDIN",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TEMURIY MALIKALAR",
         editor: "TURG'UN FAYZIYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "EY, QIZIM",
         editor: "ALI TANTOVIY",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "IQRORNOMA",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "UMIDLAR INTIHODA O'LADI",
         editor: "VORIS",
         tili: "KRILL",
        turkum: "OZARBAYJON ADABIYOTI"
        },
        {
         name: "AQL VITAMINLARI",
         editor: "JIM RON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALVIDO, QUROL",
         editor: "E.M. HEMINGUEY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NUR VA SOYALAR ",
         editor: "ROBINDRANAT TAGOR",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SAYLANMA   ",
         editor: "MARHABO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OILA SAODAT MASKANI",
         editor: "SHAYX YUSUF XATTOR MUHAMMAD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NOTIQLIK SANATI",
         editor: "ILXOM KAXXOROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XAYOTIMNI O'ZGARTIRGAN OLOV",
         editor: "MAXMUD OLAQOSH",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "MUHABBAT ANATOMIYASI",
         editor: "MUHAMMAD BUZDAG'",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "GRAF MONTE KRISTO IF QALASI MAHBUSI II TOM",
         editor: "ALEKSANDR DYUMA",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O DAN BOSHLANGAN BIZNES",
         editor: "ERIK RIS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AL-KARNAKU KEMASIDAGI QOTILLIK",
         editor: "AGATA KRISTI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ODAM BO'LISH QIYIN",
         editor: "O'LMAS UMARBEKOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OSHIQLIK",
         editor: "CHORSHAMI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "PUL TOPISHNING ULKAN SIRLARI",
         editor: "JO BITALE",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OYNANING AKSI",
         editor: "DILDORAXON ALIYEVA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALFIDO",
         editor: "ONUR QOPLON",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "100 MUMTOZ FAYLASUF",
         editor: "SAIDA JO'RAYEVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYLANMA ",
         editor: "ABDULLA ORIPOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TENTAKNING TAJRIBASI 2",
         editor: "MIRZAKARIM NORBEKOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TUTASH OLAMLAR",
         editor: "XOJIAKBAR SHAYXOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MASHRAB G'AZALLARI ",
         editor: "SHARIF XOLMUROD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ELJERNONZAGA ATALGAN GULLAR",
         editor: "DENIEL KIZ",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NIYATNING KUCHI",
         editor: "VALERIY SINELNIKOV",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "QUTLUG'QON",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ILLADA",
         editor: "HOMER",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SHAXDAM QADAMLAR SEHRI",
         editor: "SHERZOD HIKMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KALLAXONALIK YIGITCHA ROMAN",
         editor: "ALISHER MIRZO",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DOVON",
         editor: "ISOKJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHAMOL ORTIDAN YUGURIB ",
         editor: "XOLID XUSAYNIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SHOX ABBOSNING QILICHI",
         editor: "XASAN AZIZ",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QORAQUSH YULDUZINGING SIRI",
         editor: "ISAJON SULTON ",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHAYON",
         editor: "SHONIYOZ MELIBOYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "200 HAYOT DARSI ",
         editor: "ROBIN SHARMA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MIRZATERAK",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ПОЧЕМУ МЫ СТАРЕМ",
         editor: "CHERNISH P.P",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "QIZIL VA QORA",
         editor: "MARI-ANRI-BEYL STENDAL",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HALIMA XUDAYBERDIYEVA",
         editor: "G'AYRAT MAJID",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "FUZULIY",
         editor: "MIRZO KENJABEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ASQAD MUXTOR",
         editor: "IKROM ISKANDAR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MASHRAB",
         editor: "MIRZO KENJABEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TURKIY GULISTOIN YOXUD AXLOQ",
         editor: "ABDULLA AVLONIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYLANMA",
         editor: "MUHAMMAD YUSUF",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OILADA SEVGI SUXBATLARI",
         editor: "SABOXAT BOZOROVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BIZNI YOD ETSALAR ",
         editor: "MUXIDDIN OMON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "IZTIROB ",
         editor: "SULAYMON HAYDAR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TENTAKNING TAJRIBASI 5",
         editor: "MIRZAKARIM NORBEKOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DILDAGI DUR",
         editor: "TURSUNOY SODIQOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HAMMA XATO QILADI",
         editor: "TOXIR TO'LQIN O'G'LI, NARGIZAMAXMUD QIZI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YODGOR",
         editor: "G'AFUR G'ULOM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ME'MOR",
         editor: "MIRMUHSIN",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OYDINDA YUGAN ODAMLAR",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TO'SIQLARGA QARAMAY SEVDIK",
         editor: "MIRACH CHAG'RI OQTOSH ",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "SAMODA CHAQNAGAN YULDUZ",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAMODA CHAQNAGAN YULDUZ",
         editor: "ISOQJON NISHONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "VAYKOFF USULI",
         editor: "JEK.K.XATSON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KO'NGIL POYTAXTI",
         editor: "JO'RABEK JAXON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GO'ZAL YENGILDIK",
         editor: "JEYNER YAMAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "KUNTUG'MISH",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BASKERVILLAR ITI",
         editor: "ARTUR KONAN DOYL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SALTANATLAR JANGI",
         editor: "IXIYOR ESONOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XAYOLLARGA BO'LAMAN TUTQUN",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAXTNI YO'QOTGAN JOYDAN IZLAMANG",
         editor: "BEYHAN BUDAK",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "IKKI KARRA IKKI BESH",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "NURLI HALQACHALAR",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ORAZIN YOPQACH KO'ZUMDIN",
         editor: "ALISHER NAVOIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAQIQA QADRI",
         editor: "ABDURASUL ABDULLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHAXMAT SABOQLARI",
         editor: "MAMATQUL XAYLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHINOR",
         editor: "ASQAD MUXTOR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "RAVSHAN",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ABDULLA QODIRIY VA SANOIY NAFISA",
         editor: "HAMIDULLA AKBAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ASKAR ONASI",
         editor: "ISOQJON NISHONOV",
         tili: "KRIILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHAMOL ESAVERADI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHO'L HAVOSI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAFTAR HOSHIYASIDAGI BITIKLAR",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'ZBEKLAR",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OT KISHNAGAN OQSHOM",
         editor: "TOG'AY MUROD",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YO'LDAN TOPGANLARIM",
         editor: "RAZZOQ ABDURASHID",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OSMONDAN TUSHGAN PUL",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ASRNI QARITGAN KUN",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QAYNONA",
         editor: "AHMAD LUTFIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BO'TAKO'Z",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OTA IZIDAN",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MING QUYOSH SHULASI",
         editor: "XOLID XUSAYNIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OLMOS KAMAR",
         editor: "PIRIMQUL QODIROV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MENINGBHAYOTIM",
         editor: "XENRI FORD",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "CHINGIZXON VA AMIR TEMUR KO'RAGON",
         editor: "IVANIN.M",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ME'MOR",
         editor: "MIRMUHSIN",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHOL VA DENGIZ",
         editor: "ERENEST HMEINGUVAY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MUHABBAT SEN CHIROYLISAN",
         editor: "SANJAR TURSUNOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DUNYONING ENG BUYUK SAVDOGARI",
         editor: "OG MANDINO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BETASHVISH YASHASH SIRLARI",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MALIKA AYYOR",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOLG'IZLIKNING YUZ YILI",
         editor: "GABRIYEL GARTSIA MARKES",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MESHPOLVON JANGGA OTLANDI",
         editor: "ANVAR OBIDJON",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SO'QQABOSH BEVAGINA",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "FARZAND TARBIYASI",
         editor: "ZEBINISO AHMEDOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AJDAR TAVBASI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OYGA OSILGAN BAYROQ",
         editor: "MUHAMMAD ISMOIL",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "LATTE OMILI",
         editor: "DEVID BAX",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HAYOTNING ENG BUYUK SIRI",
         editor: "RONDA BERN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEN ANGLAGAN HAYOT",
         editor: "JEK LONDON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SEHLI KUCH ",
         editor: "RONDA BERN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NUR BORKI SOYA BOR",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "DAVRIM VA DAVRAM",
         editor: "MARYAM YOQUBOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ANOR",
         editor: "ABDULLA QAHHOR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ROBINZON KRUZONING HAYOTI VA AJOYIB SARGUZASHTLARI",
         editor: "DANIYEL DEFO",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KICHIK BIZNESDAN KATTASIGA II KITOB",
         editor: "ROBERT KIOSAKI,SHERON LEKTOR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "UMR SAVDOSI",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KO'XNA DUNYO",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MAQTANCHOQ SHOGIRT",
         editor: "Z.UMAROV TARJIMASI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ENG AQILLI MASLAHAT",
         editor: "MUHSIN ALIYEV TARJIMASI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ALYORIM QOLUR",
         editor: "MUHAMMAD YUSUF",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GALLAKTIKADA BIR KUN I KITOB",
         editor: "SA'DULLA QURONOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KALILA VA DIMNA",
         editor: "HIND EPOSI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOLALIK XOTIRALARIM",
         editor: "OYBEK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOLG'ONLAR SHAXRI",
         editor: "RAMITA NAVAI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "VAVILONDAGI ENG BOY ODAM",
         editor: "JORJ KLEYSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "NOMUS VA HAYOT",
         editor: "XOLIYOR SAFAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JELSOMINO YOLG'ONCHILAR MAMLAKATIDA",
         editor: "JANNI RODARI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HUKUMDOR",
         editor: "NIKKOLO MAKIAVELLI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ZUKKOLAR VALANDAVURLAR",
         editor: "MALKOLM GLADUELL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ADOLAT MANZILI",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QALB HALOVAT TOPMASA",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOY OTA VA KAMBAG'AL OTA",
         editor: "ROBERT KIOSAKI,SHERON LEKTOR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BOY BOLA VA AQILLI BOLA",
         editor: "ROBERT KIOSAKI,SHERON LEKTOR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TONG VA SHOM ORASIDA",
         editor: "BOBO RAVSHAN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BUYURMAGAN BOYLIK",
         editor: "ABDURAHMON JO'RAYEV RUS TILIDAN TARJIMA",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MASHHURLARNING SO'NGGI MANZILLARI",
         editor: "KOMIL.MUHAMMAD, ELMIRA.M TARJIMASI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KUNCHIQAR MAMLAKAT HIKOYALARI",
         editor: "QUDRAT DO'STMUHAMMAD TARJIMASI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ILOHIY DONISHMAND LAO -TZEY HIKMATLARI",
         editor: "L.N.TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "ONAIZOR ",
         editor: "ODIL YOQUBOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAZILAR OLISDAN SEVARLAR",
         editor: "HALIS KARABENLI",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "DUMALOQ XAT",
         editor: "MAHMUD BO'RON RUS TILIDAN TARJIAMSII",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "BIZ GLENDANI SHUNDAY YAXSHI KO'RAMIZ",
         editor: "XULIO  KORTASAR",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MIRZO ULUG'BEK",
         editor: "MAQSUD SHAYXZODA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YETTI YILLIK SEHR",
         editor: "MUXSIN ALIYEV RUS TILIDAN TARJIMASI",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "XAMMASI RASVO",
         editor: "MARK MENSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SAYYORAMIZ HAYVONAT OLAMI:QUSHLAR",
         editor: "SHUXRAT MIRFAYZOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: " 2023 YIL: INSONGA E'TIBOR SIFATLI TA'LIM YILI",
         editor: "SHAVKAT MIRZIYOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYYORAMIZ HAYVONAT OLAMI:SUTEMIZUVCHILAR",
         editor: "SHUXRAT MIRFAYZOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MUKOFOTGA KIM MUNOSIB",
         editor: "RUS TILIDA AYNIDDIN ZAYNIDDINOV TARJIMASI",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "TOM SOYERNING BOSHIDAN KECHIRGANLARI",
         editor: "MARK TVEN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QAHRAMON",
         editor: "RONDA BERN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MUXABBAT KITOBI",
         editor: "SALIM ASHUR",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHOQINTIRGAN OTA YOKI MAFIYA SARDORI",
         editor: "MARIO PYUZO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MUMKIN EMAS SENING YIG'LASHING",
         editor: "G'AYRAT MAJID",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JAYHUN USTIDA BULUTLAR",
         editor: "MIRKARIM OSIM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ANNA KARENINA",
         editor: "LEV TOLSTOY",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "DOKTOR MORO OROLI",
         editor: "ROBERT UELLS",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PUL ALIFBOSI",
         editor: "BODO SHEFER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'YLA VA BOY BO'L",
         editor: "NAPALEON XILL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'YLA VA BOY BO'L",
         editor: "NAPALEON XILL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TO'Y MUBORAK YOR-YOR",
         editor: "OXUNJON SAFAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "IKKI KARRA IKKI BESH",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHUM BOLA",
         editor: "G'OFUR G'ULOM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YOVVOYI YO'RG'A",
         editor: "ERNEST SETON TOMSON",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TELBA",
         editor: "FYODR DASTAEVSKIY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "NIKOHIMNI ASRAY OLAMAN",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "LKRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "CHINGIZXONNING OQ BULUTI",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TO'MARIS",
         editor: "MIRKARIM OSIM",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "UMIDNING BESHINCHI MAVSUMI",
         editor: "SONGUL UNSAL",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ABULFAYZXON",
         editor: "ABDURAUF FITRAT ",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "O'N BESH YOSHLI MILLIONER",
         editor: "XUDOYBERDI TO'XTABOYEV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "RUSTAMXON",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHO'QINTIRGAN OTA 2 SITSILYALAIK",
         editor: "MARIO PYUZO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ASKAR BOLA",
         editor: "CHINGIZ AYTMATOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SEN KETGANINGDAN KEYIN",
         editor: "EZGIN KILICH",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TO'YDAN KEYIN HAM MUXABBAT BO'LSIN",
         editor: "SEMA MARASHLI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "SEVMOQ SHUNCHALAR GO'ZAL BO'LSA",
         editor: "SEMA MARASHLI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "TANISHISHNI UNUTIBMIZ",
         editor: "SEMA MARASHLI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "QANDAY QILIB AQILLI SOG'LOM VA BOY BO'LISH MUMKIN",
         editor: "RENDIY GEYCH",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "AHI VA INOQ, FARZANDLAR TARBIYALASH SAN'ATI",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "QALBIM SENI UNUTMAYDI",
         editor: "SEVIM ASIMGIL",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "IKKIMIZ HAQIMIZDA SO'ZLAB BER MENGA",
         editor: "AHMED BATMAN",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "RUHIYAT ALIFBOSI",
         editor: "BAHODIR KARIM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KONFUTSI",
         editor: "K.M.KARIAGIN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BAXT ORTIDAN QUVIB",
         editor: "KRIS GARDNER,KVINSI TRUP",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "G'OLIBLIK QONUNIYATLARI",
         editor: "BODO SHEFER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOZGI KUYLAKDAGI QIZLAR",
         editor: "IRVING SHOU",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "PORTEBELLO JODUGARI",
         editor: "PAULO KOELO",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KO'RINMAS ODAM",
         editor: "GERBERT UELLS",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MOLXONA",
         editor: "JORJ ORUELL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "EZOP MASALLARI",
         editor: "EZOP",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "BEPARVOLIKNING NOZIK SANATI",
         editor: "MARK MENSON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OYBEGIM MENING",
         editor: "ZARIFA SAIDNOSIROVA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BASKERVILLAR ITI",
         editor: "ARTUR KONAN DOYL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MUVOFFAQIYAT SIRLARI",
         editor: "FRENK BETTJER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KAMETA",
         editor: "GULNOZ MO'MINOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SOG'LOM YURAK",
         editor: "POL BREGG",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KAPITAN GRANT BOLALARI",
         editor: "JYUL VERN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "G'IRA-SHIRA SHOMDAN OPPOQ TONGGACHA",
         editor: "MUBORAK FOZILOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BIR KO'ZLI QIROL YOKI SAYOHAT BOSHLANADI",
         editor: "OLGA LISENKO",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "BIR O'ZBEK O'YI",
         editor: "OLIM JUMABOYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "KAKKU OVOZI",
         editor: "BIBI ROBIYASAIDOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HAYOLIMDA ASRAGANIM",
         editor: "SALIM ABDURAHMON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "GEKLBERRI FINNING BOSHIDAN KECHIRGANLARI",
         editor: "MARK TVEN",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KANIZAK IZAURA",
         editor: "BERNARDO GIMARAENS",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OMADLI FOLBIN",
         editor: "ABDUG'ANI XUSANOV TARJIMASI RUS TILIDAN",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "AYTILMAGAN TUSH",
         editor: "MIRMUHSIN ALIYEV TARJIMASI RUS",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "IZQUVAR PUARO",
         editor: "AGATA KRISTI",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "SOHIBQIRON",
         editor: "ABDULLA ORIPOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BAQIRMAYDIGAN BOLALAR",
         editor: "XADICHA KUBRO TONGAR ",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "HAYOT YUTQAZGAN JOYINGDAN BOSHLANADI",
         editor: "MIRACH CHAG'RI OQTOSH ",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MEHROBDAN CHAYON",
         editor: "ABDULLA QODIRIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "POZETIVIZM VA ZAMONAVIY XITOY FALSAFASI",
         editor: "YANG GUORONG",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "O'ZINGA NISBATAN ISHONCHNI KUCHAYTIRISH VA OMMA OLDIDA CHIQISHLAR ORQALI ODAMLARGA TA'SIR KO'RSATSIH HAQIDA",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "MEDITATSIYA DARSLARI",
         editor: "MUHAYYO RIXSIBEKOVA TARJIMAON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "HOJIMUROD",
         editor: "LEV TOLSTOY",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "DARYO ORTIDAGI YIG'I",
         editor: "QO'CHQOR NORQULOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QORA KO'ZLAR",
         editor: "PRIMQUL QODIROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JOSUSLAR",
         editor: "XUDOBERDI NAZAROV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MILLONER KABI FIKIRLANG",
         editor: "ZARINA TOJIYEVA TARJIMON",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "XAMSA",
         editor: "ALISHER NAVOIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BEZOVTALIKDAN QANDAY QUTILIB YASHASH MUMKIN",
         editor: "DEYL KARNEGI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "G'OLIBA",
         editor: "GO'ZALOY COLIX QIZI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TASHVISHI YO'Q ODAMLAR",
         editor: "NURILLA CHORI",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SUNBULANING SO'NGI OQSHOMI",
         editor: "SANJAR TURSUNOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "XAYOLIMDA ASRAGANIM",
         editor: "SALIM ABDURAHMON",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "YURAKNING BIR CHETI",
         editor: "JASUR KENGBOYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "QOBUSNOMA",
         editor: "KAYKOVUS",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "RUBOIYLAR",
         editor: "UMAR XAYYOM",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AMIR TEMUR. SAMARQAND OSMONIDA YULDUZLAR. 1-KITOB",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "AMIR TEMUR. SAMARQAND OSMONIDA YULDUZLAR. 1-KITOB",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "YILDIRIM BOYAZID. SAMARQAND OSMONIDA YULDUZLAR. 3-KITOB",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "SAFAR GULXANLARI. SAMARQAND OSMONIDA YULDUZLAR.2-KITOB",
         editor: "SERGEY BORODIN",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "BIZ BAXTLI BO'LAMIZ",
         editor: "MUHAMMAD YUSUF",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ALVIDO BOLALIK",
         editor: "TOXIR MALIK",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "PANDALAR UCHA OLADI",
         editor: "JANER YAMAN",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "ONALIK MAQOMI",
         editor: "NOILA HOLMUHAMMAD",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SONATA TILSIMI",
         editor: "LEV TOLSTOY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "FANTOM OG'RIG'I",
         editor: "MARZIYA SAYDAM",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "SHER YIGIT",
         editor: "NURIDDIN ISMOILOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "HANNA",
         editor: "BAXODIR YANGISHAHARLIKO'G'LI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "OCHLIK MO'JIZASI",
         editor: "BREGG KOLL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "OLDINIGGA HAMMA QOIDALARNI BUZING",
         editor: "MARKUS BEKINGEL, KURT KOFFMAN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "ODAM BO'LISH QIYIN",
         editor: "O'LMAS UMARBEKOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SHUXRATPARSTLIK VA RIYO",
         editor: "IMOM G'AZZOLIY",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JAVDARZORDAGI XALOSKOR",
         editor: "JEROM SELINJER",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "URUSHNING DAVOMI",
         editor: "NABI JALOLIDDIN",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SOG'LOM BO'LAY DESANGIZ",
         editor: "RAVSHAN MAMADALIYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AGAR FARZAND BILAN MUSHKULLIK BO'LSA",
         editor: "LYUDMILA PETRANOVSKIY",
         tili: "KRILL",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "TEMUR TUZUKLARI",
         editor: "AMIR TEMUR",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "OMAD VA BAXTGA SAYOXAT",
         editor: "KIM RONN",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "KECHINMALAR I-KITOB",
         editor: "JUNAYD SUAVI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "KECHINMALAR 2-KITOB",
         editor: "JUNAYD SUAVI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "KECHINMALAR 3-KITOB",
         editor: "JUNAYD SUAVI",
         tili: "KRILL",
        turkum: "TURK ADABIYOTI"
        },
        {
         name: "GO'RO'GLI",
         editor: "XALQ OG'ZAKI IJODI",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "CHOL VA DENGIZ",
         editor: "ERNEST HEMINGUVAY",
         tili: "LOTIN",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DUNYONING KICHIK ATLASI",
         editor: "N.V.VALIYEVA",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SUDXO'RNING O'LIMI",
         editor: "SADRIDDIN AYNIY",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "MO'JIZA SODIR BO'LMAYDI",
         editor: "LI MYON BAK",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "QANDAY BUYUK BO'LISHGAN",
         editor: "SAD SAUD AL KARIBONIY",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "TIRIKLIK SUVI",
         editor: "TOXIR MALIK",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "AYOL BAXTI",
         editor: "LORA DOYL",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "YOSH VRACH KUNDALIGI",
         editor: "MIXAYL BULGAGOV",
         tili: "LOTIN",
        turkum: "RUS ADABIYOTI"
        },
        {
         name: "TILSIMLI SHAXMAT",
         editor: "AGATA KRISTI",
         tili: "KRILL",
        turkum: "JAHON ADABOYOTI"
        },
        {
         name: "DUNYONING ISHLARI ",
         editor: "O'TKIR HOSHIMOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "BIR JAMOA BIR ORZU",
         editor: "MAHMUD NURULLAYEV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "SAYYORAMIZ HAYVONOT OLAMI:SUDRALIB YURUVCHILAR",
         editor: "SHUXRAT MIRFAYZOV",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "TILLA UZUK",
         editor: "ODIL YOQUBOV",
         tili: "LOTIN",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "JODUGAR YOXUD 1000 YILLIK HAYOT",
         editor: "NODIRABEGIM IBROHIMOVA",
         tili: "KRILL",
        turkum: "O'ZBEK ADABIYOTI"
        },
        {
         name: "ABDULXAMIDXON",
         editor: "TALHA UG'URLUEL",
         tili: "LOTIN",
        turkum: "TURK ADABIYOTI"
        },
        {
           name: "BUDJET HISOBI ",
           editor: "MUHAMMADYOQUB OSTONQULOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ЭКОНОМЕТРИЧЕСКОЕ МОДЕЛИРОВАНИЕ ",
           editor: "ABDULLAYEV A.M, DJAMALOV M.C",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ ФИНАНСОВОЙ  ",
           editor: "HENNI VAN GREUNING",
           tili: "KRILL",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "BYUDJET HISOBI  VA NAZORATI ",
           editor: "QO'ZIYEV ISLOMJON NEMATOVICH , G'ANIYEV SHAHRIDDIN VOHIDOVICH , RAMAZONOV AKMAL SAMADOVICH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "JAHON IQTISODIYOTI  VA XALQARO IQTISODIY MUNOSABATLAR ",
           editor: "N.S.ISMAILOVA , U.USHAGAZATOV ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "INVISTITSIYALAR VA INNOVATSIYALAR ",
           editor: "B.OCHILOV ,J.BUTAYEV ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KORXONA IQTISODIYOTI VA INNAVATSIYALARNI BOSHQARISH",
           editor: "I.XOTAMOV,SH.MUSTAFOQULOV,M.ISAKOV,A.ABDUVALIYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "WILEY INTERPRETATION AND APPLICATION OF IFRS STANDARTS",
           editor: "JOHN WILEY AND SONS ",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MIKROIQTISODIYOT 2",
           editor: "B.T\/SALIMOV,M.S.YUSUPOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИННОВАЦИОННАЯ ЭКОНОМИКА",
           editor: "S.S.KASIMOV",
           tili: "RUS",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KORPARATIV MOLIYA ",
           editor: "SAMARIDDIN ELMIRZAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BYUDJET G'AZNA IJROSI HISOBI ",
           editor: "S.MEXMONOV.I.QO'ZIYEV,A.KULIBOYEV , A.OSTONKULOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY MENEDJMENT",
           editor: "SIROJIDDINOV IKROMIDDIN KUTBIDDINOVICH , KADIROVA XADICHA TO'RAYEVNA , RAXMONOV DILSHODJON ALIDJONOVICH ",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "XALQARO MOLIYA INSTITUTLARI ",
           editor: "J.X.ATANIYAZOV F.A.XAMIDOVA M.B.PULATOVA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY TAHLIL",
           editor: "M.Y.RAXIMOV,N.N.KALANDAROVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "EKONOMETRIKA",
           editor: "B.B.BERKINOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ENGLISH SPEAKING COUNTRIES",
           editor: "ISHAK YAKUBOV",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PEDAGOGIK PSIXOLOGIYA ",
           editor: "E.G.G'OZIYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PSIXOLOGIYA METODOLOGIYASI",
           editor: "A.X.NISHANOV,O.K.XUJAYEV,G.X.ABDULLAYEVA,B.B.NURMETOVA",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "СРАВНИТЕЛЬНАЯ ТИПОЛОГИЯ АНГЛИЙСКОГО И РУССКОГО ЯЗЫКОВ",
           editor: "ARAKIN.V.D",
           tili: "RUS",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ПРОБЛЕМЫ СОПОСТАВИТЕЛНОЙ ЛИНГВИСТИКИ",
           editor: "U.K.YUSUPOV",
           tili: "RUS",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "COMMON EUROPEAN FRAMEWORK OF REFERENCEFOR LANGUAGES:LEARNING,TEACHING,ASSESSMENT",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "A COURSE IN LANGUAGE TEACHING PRACTICE AND THEORY",
           editor: "PENNY UR ",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ПРАКТИЧЕСКАЯ ПСИХОЛОГИЯ",
           editor: "ABRAMOVA G.C",
           tili: "RUS",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "ПРАКТИЧЕСКАЯ ПСИХОЛОГИЯ ОБРАЗОВАНИЯ ",
           editor: "I.V.DUBROVINOY",
           tili: "RUS",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "TA'LIMDA AXBOROT TEXNOLOGIYALARI",
           editor: "AYUPOV RAVSHAN HAMDAMOVICH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KIBERXAVSIZLIK ASOSLARI ",
           editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "STRATEGIK MENEJMENT",
           editor: "N.Q.YO'LDOSHEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "XALQARO VALYUTA-KREDIT MUNOSABATLARI 1 QISM",
           editor: "J.X.ATANIYAZOV,N.X.JUMAYEV,E.D.ALIMARDONOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ ФИНАНСОВОЙ  ОТЧЕТНОСТИ:БАЗОВЫЙ КУРС",
           editor: "Б.Н.ЕЛЬЦИНА",
           tili: "RUS",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ACCA ADVANSED AND ASSURANCE (AAA)",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ICHKI AUDIT ",
           editor: "K.B.AXMEDJANOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИСТОРИЯ НАУКИ И ТЕХНИКИ ",
           editor: "А.В.ТАКАЧЕВА",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "GLOBAL IQTISODIYOT RIVOJLANISHI ",
           editor: "A.X.DJUMAYEV,SH.S.SHARIFOV,A.N.NIZAMOV,I.I.ERGASHEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONDA MILLATLARARO MUNOSABATLAR VA BAG'RIKENGLIK",
           editor: "RAXBARXON MURTAZAYEVA ",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
           editor: "А.М.НОВИКОВ Д.А.НОВИКОВ",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "JAHON TARIXI  (QADIMGI SHARQ,QADIMGI YUNONISTON VA RIM TARIXI",
           editor: "D.URAKOV,R.TURSUNOV,A.BIYKUZIYEV,B.XAYNAZAROV.",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTON TARIXI (1917-1991 YILLAR)",
           editor: "RAVSHAN ABDULLAYEV , MIRZOHID RAXIMOV,QAHRAMON RAJABOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "JAHON TARIXI YANGI DAVR XVI-XVIII ASRLAR (1-QISM)",
           editor: "SHUHRAT ERGASHEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEK DIPLOMATIYASI TARIXIDAN",
           editor: "M.M.XAYRULLAYEV ",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "QADIMGI O'ZBEKISTON ILK YOZMA MANBALARDA ",
           editor: "SAGDULLAYEV .A",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "DESTINATION C1 AND C2 GRAMMAR AND VOCABULARY WITH ANSWER KEY ",
           editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "LEARNING TO LISTEN MAKING SENSE OF SPOKEN ENGLISH ",
           editor: "LIN LOUGHEED ",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "APPROACHES TO TRANSLATION ",
           editor: "PETER NEWMARK",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "A LINGUISTIC THEORY OF TRANSLATION ",
           editor: "J.C.CATFORD ",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "A HISTORY OF LITERATURE SECOND EDITION",
           editor: "RICHARD GRAY",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ПСИХОЛОГИЯ СТРЕССА И МЕТОДЫ ЕГО ПРОФИЛАКТИКИ",
           editor: "В.Р.БИЬДАНОВА Г.К.БИСЕРОВА Г.Р.ШАГИВАЛЕЕВА",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ XVIII ВЕКА",
           editor: "БУХАРКИН.П.Е",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
           editor: "I.M.HAYDAROV ,M.M.ASQAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
           editor: "MATYAKUBOV X.X",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
           editor: "R.E.XOLIQOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI XRISTOMATYASI",
           editor: "N.TALIPOVA",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI BIRINCHI KITOB",
           editor: "X.SODIQOV,R.SHAMSUTDINOV,P.RAVSHANOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI IKKINCHI KITOB 2-QISM",
           editor: "M.JO'RAYEV,R.NURILLIN,C.KAMOLOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI IKKINCHI KITOB 1-QISM",
           editor: "M.JO'RAYEV,R.NURILLIN,C.KAMOLOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI UCHINCHI KITOB TOM 2",
           editor: "N.JO'RAYEV,A.AZIZXO'JAYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI UCHINCHI KITOB TOM 1",
           editor: "N.JO'RAYEV,A.AZIZXO'JAYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИСТОРИЯ МИРОВОЙ ЛИТЕРАТУРЫ",
           editor: "М.Ф.ЛУЧАНОВА",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ИСТОРИЯ ДРЕВНЕ РУССКОЙ ЛИТЕРАТУРЫ ЧАСТЬ 1 ЛИТЕРАТУРА КИЕВСКОЙ РУСИ",
           editor: "Л.Я.БОБРИЦКИХ",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "JAHON TARIXI VA MANBASHUNOSLIK KAFEDRASI ARXIVSHUNOSLIK FANIDAN",
           editor: "T.PARDAYEV,Z.XOLIQOV",
           tili: "LOTIN",
          turkum: "O'QUV METODIK MAJMUA"
          },
          {
           name: "SHARQ FALSAFASI VA MADANYATI TARIXI ",
           editor: "D.A.PO'LATOVA,M.Q.QODIROV,J.B.SULAYMONOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "FALSAFA",
           editor: "OBID HAYDAROV,JAMOLIDDIN OSTONOV,OZODA SULTONOVA ",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "FALSAFA 1 QISM ",
           editor: "ZIYODULLA DAVRONOV, AZIZA SULTANOVA ,NARGIZA PARPIYEVA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
           editor: "В.В.НИКАНДРОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "PSIXADIAGNOSTIKA VA EXSPREMENTAL PSIXOLOGIYA ",
           editor: "Z.NISHANOVA,Z.QURBONOVA,S.ABDIYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ПРАКТИКУМ ПО ПСИХОЛОГИЧЕСКОМУ ИССЛЕДОВАНИЮ",
           editor: "ГОРБАТОВ Д.С.",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ISLOM FALSAFASIGA KIRISH ",
           editor: "SH.SIROJIDDINOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "FALSAFA  ASOSLARI",
           editor: "Q.NIYAZOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "UMUMIY PSIXOLOGIYA 2 KITOB",
           editor: "E.G'.G'OZIYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "UMUMIY PSIXOLOGIYA ",
           editor: "A.K.SHAMSHETOVA,R.N.MELIBAYEVA , X.E.USMANOVA,I.O.XAYDAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PSIXODIAGNOSTIKA ",
           editor: "RASULOV ABDUMO'MIN IBRAGIMOVICH",
           tili: "KRILL",
          turkum: "O'QUV-METODIK QO'LLANMA"
          },
          {
           name: "ONTOGNEZ PSIXOLOGIYASI ",
           editor: "E.G'.G'OZIYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MULOQOT PSIXOLOGIYASI",
           editor: "M.A.MAXSUDOVA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "UMUMIY PSIXOLOGIYA",
           editor: "A.K.SHAMSHETOVA,R.N.MELIBAYEVA , X.E.USMANOVA,I.O.XAYDAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "UMUMIY PSIXOLOGIYA",
           editor: "U.FAYZIYEVA,N.JUMAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PSIXOLOGIYA TARIXI",
           editor: "N.S.JO'RAYEV,D.A.SALIYEVA,N.A.SULTONOVA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PEDAGOGIKA NAZARYASI VA TARIXI (pedagogika tarixi)",
           editor: "AXMEDOVA MALOHAT ERGASHEVNA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "EXSPREMENTAL PSIXOLOGIYA ",
           editor: "Z.NISHONOVA,D,QARSHIYEVA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "UMUMIY PEDAGOGIKA 1QISM",
           editor: "A.MUSURMANOVA,X.IBRAGIMOV,O.JAMOLDINOVA,K,RISQULOVA,S.YO'LDASHEVA,A.JUMAYEV,F.BABASHEV,P.ISAMOVA,S.SHARIPOVA,G'.SALOHIDDINOVA,K.TODJIBAYEVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ОБЩАЯ ПСИХОЛОГИЯ ",
           editor: "А.Г.МАКЛАКОВ",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "PEDAGOGIKA NAZARYASI VA TARIXI (XII ASR OXIRI XIV ASRNING BIRINCHI YARMIDA MOVAROUNNAHR VA XUROSON MUTAFAKKIRLARINING PEDAGOGIK QARASHLARI)",
           editor: "GULCHEHRA IZBULLAYEVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ",
           editor: "M.G.KAMILOVA,N.A.RAJAPOVA,M.R.ZAKIROVA",
           tili: "RUS",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК ФОНЕТИКА ОРФОЭПИЯ",
           editor: "Е.Г.МАЛЫШЕВА О.С.РОГАЛЕВА",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ ЧАСТЬ-1",
           editor: "ИСАКОВА.Р.К",
           tili: "РУС",
          turkum: "ПОСОБИЕ СОСТАВЛЕНО"
          },
          {
           name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ",
           editor: "M.G.KAMILOVA,N.A.RAJAPOVA,M.R.ZAKIROVA",
           tili: "RUS",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК ФОНЕТИКА ОРФОЭПИЯ ГРАФИКА ОРФОЭПИЯ",
           editor: "Ж.В.ГАНИЕВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ  (ВТОРАЯ ПОЛОВИНА XIX ВЕКА",
           editor: "В.Я.ЛИНКОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "УЧЕБНО-МЕТОДИЧЕСКИЙ КОМПЛЕКС ПО ДИСЦИПЛИНЕ ТЕОРЕЯ И ПРАКТИКА ПЕРЕВОДА",
           editor: "ДЖАЛИЛОВА Д.С",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "ПОСОБИЕ ПО  РУССКОМУ ЯЗЫКУ",
           editor: "ИСАКОВА.Р.К",
           tili: "РУС",
          turkum: "ПОСОБИЕ СОСТАВЛЕНО"
          },
          {
           name: "УЧЕБНО-МЕТОДИЧЕСКИЙ КОМПЛЕКС ПО ПРЕДМЕТУ РУССКИЙ ЯЗЫК",
           editor: "IMAMALIYEVA M\/A,MIRSAGATOVA U.Z,KOMILOVA SH.A",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "ПРАКТИЧЕСКИЕ РАЗРАБОТКИ ПО ПРОВЕДЕНИЮ СЕМИНАРСКИХ ЗАНЯТИЙ ПО ДИСЦИПЛИНЕ ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ",
           editor: "АБЛАЕВА Н.К МАДРАХИМОВА З.Ф",
           tili: "РУС",
          turkum: "МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "ROMAN-GERMAN FILOLOGIYASIGA KIRISH ",
           editor: "S.M.XUDOYBERGANOV,M.F.SAPAROVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "QADIMGI O'RTA OSIYO TARIXI",
           editor: "A.SAGDULLAYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ВВЕДЕНИЕ В ИСТОРИЧЕСКУЮ ГЕОГРАФИЮ",
           editor: "Ф.С.КОРАНДЕЙ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "IJTIMOIY ISH TARIXI VA NAZARYASI ",
           editor: "S.ELMANOV",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "IJTIMOIY ISHGA KIRISH",
           editor: "YUSUPOV.R.K",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IJTIMOIY SIYOSAT ",
           editor: "S.TO'YCHIYEVA,A.SH.NORBEKOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IJTIMOIY ISH NAZARYASI",
           editor: "M.N.NARMAMATOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY HISOBOTNING XALQARO STANDARTLARI ",
           editor: "SH.T.ERGASHEVA,A.K.IBRAGIMOV,N.K.RIZAYEV,I.R.IBRAGIMOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "INNOVATSION MENEJMENT ",
           editor: "R.I.GIMUSH,F.M.MATMURATOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИСТОРИЯ И ТЕОРИЯ СОЦИАЛЬНОЙ РАБОТЫ",
           editor: "М.Х.ГАНИЕВА Н.М.ЛАТИПОВА",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "WEB TEXNOLOGIYALAR ",
           editor: "M.ARIPOV,M.FAYZIYEVA,S.DOTTOYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "TARMOQ XAVFSIZLIGI(MOBIL TARMOQ XAVFSIZLIGI)",
           editor: "GANIYEV SALIM KARIMOVICH,KUCHKAROV TAXIR ANVAROVICH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KOMPUTERNING TEXNIK VA DASTURIY TAMINOTI",
           editor: "AMINOV I.B",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "DAVLAT TILIDA ISH YURITISH",
           editor: "M.AMINOV",
           tili: "KRILL",
          turkum: "AMALIY QO'LLANMA"
          },
          {
           name: "KOMPYUTER GRAFIKASI",
           editor: "T.RIXSIBOYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KOMPYUTER GRAFIKASI",
           editor: "A.IMOMOV",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ТЕХНОЛОГИИ",
           editor: "И.Л.ЧУДИНОВ В.В.ОСИПОВА",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
           editor: "Ю.ЮГРОМОВБИ.В.ДИДРИХ О.Г.ИВАНОВА М.А.ИВАНОВСКИЙ ВЮГЮОДНОЛЬКО",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
           editor: "A.T.KENJABOYEV,M.M.IKRAMOV,A.SH.ALLANAZAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KOMPUTER ARXITEKTURASI",
           editor: "NIGMATOV.X",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "TIL TALIMIDA KOMMUNIKATSION TEXNOLOGIYALAR ",
           editor: "F.SH.RO'ZQULOV",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "IJTIMOIY ISHNING AXLOQIY TAMOYILLARI QADRIYATLARI",
           editor: "ISOQJON NEGMATOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "EKOLOGIYA VA TABIATNI MUHOFAZA QILISH",
           editor: "O'.E.XO'JANAZOROV,SH.T.YAKUBJONOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
           editor: "A.T.KENJABAYEV,M.M.IKRAMOV,A.SH.ALLANAZAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MATEMATIK MODELLASHTIRISH",
           editor: "N.RO'ZMETOVA,R.FAYZIYEV,A.ISHNAZAROV,SH.NURULLAYEVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MICRASOFT EXCEL DASTURIDA ISHLASH",
           editor: "TOLAMETOV A.A",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IJTIMOIY SIYOSAT ",
           editor: "A.SALOYEV",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "ОБЩАЯ И ТЕОРЕЧЕСКАЯ ИНФОРМАТИКА",
           editor: "А.А.МАЙОРОВ В.П.СЕДЯКИН",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "МЕДИАОБЗОВА НИЕ И МЕДИАГРАМОТНОСТЬ ТЕОРИЯ МЕТОДОЛОГИЯ ПРАКТИКА",
           editor: "Л.С.АХМЕТОВ АА.В.ВЕРЕВКИН Т.Ю.ЛИФАНОВА",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "KOMPUTER TARMOQLARI ",
           editor: "Z\/Z\/MIRYUSUPOV,J.X.DJUMANOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MEDIASAVODXONLIK VA AXBOROT MADANIYATI",
           editor: "E.M.XUDAYNAZAROV,G.M.XALILLAYEVA,A.F.SABIROVA,J.S.RAXIMBOYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "AXBOROT TEXNOLOGIYALARI 1 QISM",
           editor: "M.KADIROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "WORD 2010 В ПРИМЕРАХ",
           editor: "Е.М.КАРЧЕВСКИЙ  И.Е.ФИЛИППОВ И.А.ФИЛИППОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ПРАКТИЧЕСКИЕ РАБОТЫ ПО МICROSOFT OFFICE 10",
           editor: "И.Г.ЧЕКИНА О.И.ШАРДАКОВА",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "BYUDJET-SOLIQ SIYOSATI",
           editor: "T.S.MALIKOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BIZNES BOSHQARUV ASOSLARI ",
           editor: "SHAISLAMOVA M.R",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "KORXONA IQTISODIYOTI  ",
           editor: "E.X.MAXMUDOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
           editor: "АРИПОВ М.М КАБИЛЖАНОВА Ф.А ЮЛДАШЕВ З.Х",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "KORXONA IQTISODIYOTI VA INNOVATSIYALARNI BOSHQARISH",
           editor: "I.XOTAMOV,SH.MUSTAFAQULOV,M.ISAKOV,A.ABDULLAYEV",
           tili: "KRILL",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "BUXGALTERYA HISOBI",
           editor: "S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "KORXONA IQTISODIYOTI VA MENEJMENTI",
           editor: "I.O.ULASHEV,SH.A.ATAMURODOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BIZNES QIYMATNI BAHOLASH ",
           editor: "L.S.ZOYIROV,U.K.MUXTOROVA,S.K.QOSIMOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLAR",
           editor: "R.A.DADABAYEVA,N.X.SHOAXMEDOVA,L.T.IBRAGIMOVA,SH.T.NASRIDDINOVA,SH.T.ERMATOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "EKOLOGIYA",
           editor: "A.C.TO'XTAYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PEDAGOGIK TEXNOLOGIYALAR VA PEDAGOGIK  MAHOROT",
           editor: "O'TKIR TOLIPOV,DILNOZ RO'ZIYEVA ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
           editor: "X.A.KABULOV",
           tili: "RUS",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "НАРОДЫ СРЕДНЕЙ АЗИИ III-VI ВЕКОВ ",
           editor: "О.Е.НЕПОМНИН",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ТЕСТОЛОГИЯ ГУМАНИТАРИЯМ",
           editor: "А.Г.ВОЙТОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "АРАБСКОГО ЯЗЫКА",
           editor: "TYULEMISSOV MADI",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "O'ZBEKISTONING ENG YANGI TARIXI",
           editor: "S.R.DAVLETOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KOMPUTER SAVAODXONLIGI ",
           editor: "RO'ZIMOV S.K",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KIBERXAVSIZLIK ASOSLARI ",
           editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "МЕДИАОБРАЗОВАНИЕ ИСТОРИЯ И ТЕОРИЯ ",
           editor: "А.В.ФЕДОРОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
          },
          {
           name: "СОВРЕМЕННЫЕ ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ ДЛЯ ГУМАНИТАРИЯ",
           editor: "А.Т.ХРОЛЕНКО А.В.ДЕНИСОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
          },
          {
           name: "ПРАКТИКУМ ПО РЕШЕНИНИЮ ЭКОНОМИЧЕСКИХ ЗАДАЧ В МС ЕХЕЛ",
           editor: "И.А.КЛЮЕВА И.П.МЕДИНЦЕВА",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "МЕДИАОБРАЗОВАНИЕ И МЕДИАГРАМОТНОСТЬ",
           editor: "А.В.ФЕДОРОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
          },
          {
           name: "MEDIA VA AXBORIY SAVODXONLIK BO'YICHA MYAMMOLI TARBOYASI OG'IR YOSHLAR TOIFASI BILAN ISHLASH UCHUN ",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "MEDIA VA AXBOROT SAVODXONLIGINI SHAKLLANTIRISHNING PEDAGOGIK JIHATLARI",
           editor: "YUNESKO",
           tili: "KRILL",
          turkum: "O'QUV-AMALIY QO'LLANMA"
          },
          {
           name: "O'ZBEKISTONDA MEDIA TALIM TARQQIYOTI YO'LIDA ",
           editor: "YA.MAMATOVA C.SULAYMONOVA",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИСТОРИЯ ТЕХНИКИ  РАЗВИТИЕ ТЕХНИКИ В ДРЕВНЕМ МИРЕ",
           editor: "Д.В.ЛОГИНОВА",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "ИСПОЛЬЗОВАНИЕ КОМПЬЮТЕРНЫХ ТЕХНОЛОГИЙ В УЧЕБНОМ ПРОЦЕССЕ",
           editor: "XUDAYBERGANOV SH.E,HAKIMOVA.X.R",
           tili: "РУС",
          turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
          },
          {
           name: "TALIMDA AXBOROT TEXNOLOGIYALARI",
           editor: "MADRIMOVA.S.M,XUSAINOV.SH.M",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
           editor: "MADRIMOVA.S.M,XUSAINOV.SH.M",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "ELEKTRON JADVALLARDAN FOYDALANISH TEXNOLOGIYALARI ",
           editor: "G.M.OTAJONOVA,B.R.ANNAZAROVA",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "MOLIYAVIY HISOB ASOSLARI FANIDAN KURS ISHI YOZISH",
           editor: "SHEROV A,ZAKIROVA.G",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "FILOLOGIYADA AXBOROT TEXNOLOGIYALARI ",
           editor: "MADRIMOVA S.M,XUSAINOV.SH.M,",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "ОТЧЕТ КАДРЫ СИСТЕМЫ СОЦИАЛЬНОЙ ЗАЩИТЫ ДЕТЕЙ В УЗБЕКИСТАНЕ СИЛЬНЫЕ СТРОНЫ ПРОБЛЕМЫ И ДАЛЬНЕЙШЕЕ РАЗВИТИЕ",
           tili: "RUS",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "STATISTIKA FANIDAN AMALIY MASHG'ULOTLAR O'TQAZISH UCHUN",
           editor: "A.X.AYUBJONOV,B.X.MAMATQULOV,C.H.SAYFULLAYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "STATISTIKA BO'YICHA PRAKTIKUM",
           editor: "X.SHODIEV VA XABIBULLAYEV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "STATISTIKA BO'YICHA PRAKTIKUM",
           editor: "X.SHODIEV VA XABIBULLAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIY-MATEMATIK MODELLAR VA USULLAR",
           editor: "SH.R.MO'MINOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIY MATEMATIK USULLARI VA MODELLARI",
           editor: "I.HABIBULLAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MAKRO VA MIKRO IQTISODIYOT",
           editor: "N.XOLMATOV,N.IMOMOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "EKONOMETRIKA",
           editor: "B.YU.XODIYEV , T.SH.SHODIYEV , B.B.BERKINOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "STATISTIKA NAZARYASI 2 NASHR",
           editor: "YO.ABDULLAYEV",
           tili: "KRILL",
          turkum: "ILMIY-USLUBIY QO'LLANMA"
          },
          {
           name: "BUXGALTERYA HISOBINING AXBOROT TIZIMLARI",
           editor: "KARIMOV AKROM ABBOSOVICH,MUQIMOV ZAFAR ,TULAYRV MIRZA,KURBANBAYEV JO'RABEK ERUVBAYEVICH, RAXIMOV SHERZODS SHERKULOVICH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "TADBIRKORLIK ASOSLARI",
           editor: "HALIM HAMROYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "STATISTIKA VA EKONOMETRIKA 2 QISM",
           editor: "X.A.KASIMOVA",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IJTIMOIY-IQTISODIY JARAYONLARNI MODELLASHTIRISH VA PROGNOZLASH",
           editor: "D.M.RASULEV,A.A.ALMURADOV,S.O.XOMIDOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIY-MATEMATIK USULLARI VA MODELLARI",
           editor: "T.SHODIYEV,O.ABDULLAYEV,L.BOLTAYEVA,G.KAZIMOVA,A.ISMAILOV,S.B.IVANOVA,A.ISHNAZAROV,H.RO'ZMETOVA,A.BOYZOQOV,O.RIXSIMBOYEV,M.MUMINOV,O.A.KARIMOV,SH.NURILLAYEVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIYOTDA MIQDORIY USULLAR",
           editor: "A.RASULOV,U.DALABOYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY HISOB",
           editor: "O.M.KULJANOV,X.A.ORTIQOV,L.P.YUGAY,X.A.TUXSANOV,M.I.XAYITBOYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BUXGALTERYA HISOBINING AXBOROT TIZIMLARI",
           editor: "A.A.KARIMOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY HISOB",
           editor: "ABDUSAMATOVA NODIRA BAXODIROVNA,TEMIROV FURQAT TURSOATOVICH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BUXGALTERYA HISOBI NAZARYASI",
           editor: "O.M.KULJANOV,I.I.XUSINOV,S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIY-MATEMATIK USULLARI VA MODELLARI",
           editor: "X.Q.QARSHIBOYEV,B.I.ASHUROV,E.H.SALIMOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "EKONOMETRIKA 1 ",
           editor: "G.NASRITDINOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
           editor: "SH.SH.SHODMONOV,M.M.MUHAMMEDOV,N.A.KAMILOVA",
           tili: "RUS",
          turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
          },
          {
           name: "MAKROIQTISODIYOT 2",
           editor: "N.M.MAHMUDOV,A B.SHAKAROV,X.A.ULASHEV,J.A.SHAKAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BUXGALTERYA HISOBI",
           editor: "U.I.INOYATOV,S.D.YUSUPOVA,F.R.SALIMBEKOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MIKROIQTISODIYOT",
           editor: "I.A.BAKIYEVA,X.S.XADJAYEV,M.Z.MUXITDINOVA,SH.SH.FAYZIYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MIKROIQTISODIYOT:MASALALAR,NAMUNALAR,TOPSHIRIQLAR,TESTLAR",
           editor: "B.SALIMOV,SH.MUSTAFOQULOV,D.SALIMOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BIZNES BOSHQARUVI ASOSLARI",
           editor: "MUHAMMADJON BO'TABOYEV ,MANSURJON TOSHMAMATOV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MAKROIQTISODYOT",
           editor: "Z.A.DJUMAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "XALQARO BIZNES STRATEGYASI",
           editor: "NAZAROVA.G.G,ALIYEVA.M.T,SAFAROV.N.SH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY RISKLAR NAZARYASI",
           editor: "SH.Q.FOZILCHAYEV,N.G'.XIDIROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "KORPORATIV RISKLARNI BOSHQARISH",
           editor: "M.A.MAHKAMOVA,D.S.ZIYAYEVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY RISKLARNI BOSHQARISH",
           editor: "K.U.SHARIFXODJAYEVA,A.X.ISLAMQULOV,B.K.SATTAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BIZNES MOLIYASI",
           editor: "SH.SULTONOV,Q.CHINQUV,U.G'OFUROVA,N.SAFAROVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY RISKLARINI BOSHQARISH FANIDAN ",
           editor: "SATTOROVA B.K",
           tili: "KRILL",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "MOLIYAVIY HISOB VA HISOBOT",
           editor: "A.A.KARIMOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "DAVLAT BYUDJETI",
           editor: "J.R.ZAYNALOV,B.SH.XUSANOV,S.S.ALIYEVA,SH.M.LATIPOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY BOSHQARUV HISOBI",
           editor: "S.R.EGAMBERDIYEVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "RISKLARNI BOSHQARISH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "RISKLARNI BOSHQARISH",
           editor: "J.SH.TUXTABAEV,A.X.ESHBAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "INNOVATSION IQTISODIYOT ",
           editor: "Y.E.ALIYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYA",
           editor: "T.S.MALIKOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY XISOBOTNING XALQARO STANDARTLARI",
           editor: "D.E.NORBEKOV,A.N.TO'RAYEV,SH.SH.RAXMONOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MIKROIQTISODIYOT:MASALALAR,NAMUNALAR,TOPSHIRIQLAR,TESTLAR",
           editor: "B.SALIMOV,SH.MUSTAFOQULOV,D.SALIMOV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MAKROIQTISODYOT",
           editor: "A.E.ISHMUHAMMEDOV,Z.A.DJUMAYEV,Q.X.JUMAYEV",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "PERSONALNI BOSHQARISH",
           editor: "Q.X.ABDURAXMONOV,SH.R.XOLMO'MINOV,A.B.XAYITOV,A.M.AKBAROV",
           tili: "KRILL",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "ИНФОРМАТЦИОННЫЕ ТЕХНОЛОГИИ В БУХГАЛТЕРСКОМ УЧЕТЕ И АУДИТЕ",
           editor: "С.М.БЫЧКОВАБ С.В.ИВАХНЕНКОВ",
           tili: "РУС",
          turkum: "УЧЕБНОЕ ПОСОБИЕ"
          },
          {
           name: "IQTISODIYOT BAKALAVRIYAT TALIM YO'NALISHI TALABALARI UCHUN MIKROIQTISODIYOT FANIDAN ",
           editor: "Z.ABDUKARIMOVA",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "AUDIT FANIDAN MUSTAQIL TALIM TOPSHIRIQKARI VA ULARNI BAJARISH ",
           editor: "M.SATTOROVA,Z.SHARIPOVA,D.SATTOROVA",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOT FANIDAN KURS ISHLARINI YOZISH VA UNI HIMOYA QILISH TARTIBI BO'YICHA",
           editor: "AXMEDOVA.D,ATAXANOVA.S,SHARJONOV.SH",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODCHILAR UCHUN MATEMATIKA FANIDAN AMALIY MASHG'ULATLAR ",
           editor: "B.Q.ISKANDAROV,S.M.EGAMOV,I.I.ABDUKARIMOV",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "MOLIYA FANIDAN MUSTAQIL TALIM TOPSHIRIQLARI VA ULARNI BAJARISH BO'YICHA",
           editor: "SHEROV ALISHER BAKBERGANOVICH",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "MINTAQAVIY IQTISODIYOT FANIDAN AMALIY MASHG'ULOTLARNI XORIJIY TILDA BAJARISHGA OID ",
           editor: "IBODULLAYEV ERGASH BAKTURDIYEVICH",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOT BAKALAVRIYAT TALIM YO'NALISHI TALABALARI UCHUN IQTISODIYOT NAZARYASI FANIDAN KURS ISHLARINIYOZISH VA UNI HIMOYA QILISH TARTIBI BO'YICHA",
           editor: "SHEROV.A,SAPAYEV.N,XODJANIYAZOV SH",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
           editor: "M.SH.XUSAINOV,M.S.MATKARIMOVA",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOT NAZARYASI FANIDAN MUSTAQIL TALIM TOPSHIRIQLARI",
           editor: "YAKUBOVA Y.ZAKIROVA.G",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
           editor: "B.R.ANNAZAROVA,G.M.OTAJONOVA,F.A.BEKCHANOV",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
           editor: "B.R.ANNAZAROVA,G.M.OTAJONOVA,",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "MOLIYAVIY RISKLAR NAZARYASI ",
           editor: "T.BAYMURATOV",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "INTRODUCTION TO BUSINESS AND MANAGEMENT",
           editor: "J.TIMM",
           tili: "ENGLISH",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "INNOVATSION TADBIRKORLIKNI TASHKIL ETISH VA UNI BOSHQARISHNI RIVOJLANTIRISH",
           editor: "JO'RAYEV DOSTON MA'RUF O'G'LI",
           tili: "LOTIN",
          turkum: "O'QUV-USLUBIY MAJMUA"
          },
          {
           name: "BUXGALTERYA XISOBINING AXBOROT TIZIMLARI",
           editor: "KARIMOV AKROM ABBOSOVICH,MUQIMOV ZAFAR ,TULAYRV MIRZA,KURBANBAYEV JO'RABEK ERUVBAYEVICH, RAXIMOV SHERZODS SHERKULOVICH",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "BUXGALTERYA HISOBI VA AUDIT",
           editor: "K.B.URAZOV  ",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "IQTISODIYOT FANIDAN AMALIY MASHG'ULOTLAR",
           editor: "Q.E.MADRAXIMOV",
           tili: "LOTIN",
          turkum: "USLUBIY QO'LLANMA "
          },
          {
           name: "TOURISM ENGLISH FOR UZBEKISTAN",
           editor: "MARIAN KARCH STORDAH ",
           tili: "ENGLISH",
          turkum: "O'QUV QO'LLANMA"
          },
          {
           name: "MOLIYAVIY MENEJMENT",
           editor: "A.B.DJUMANOVA,M.N.KUSHAKOVA",
           tili: "LOTIN",
          turkum: "O'QUV QO'LLANMA"
          }
         ,
          {
           name: "EKONOMETRIKA 1",
           editor: "G.NASRITDINOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BOSHQARUV HISOBI ",
           editor: "B.A.XASANOV,A.A.XASHIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BOSHQA TARMOQLARDA BUXGALTERYA HISOBINING XUSUSIYATLARI ",
           editor: "K.B.URAZOV, S.V.VAXIDOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "XALQARO IQTISODIYOT ",
           editor: "Q.A.ISAEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMETRIKA AMALIY MASHG'ULOT ",
           editor: "I.HABIBULLAYEV, A.JUMAYEV ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY VA BOSHQARUV HISOBI FANIDAN MASALALAR TO'PLAMI",
           editor: "A.SH.KULIBAEV, X.N.ISKANOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY HISOBOTNING XALQAROSTANDARTLARI ",
           editor: "E.T.ERGASHEV , A.K.IBRAGIMOV,N.K.RIZAYEV,I.R.IBRAGIMOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMETRIKA ",
           editor: "B.YU.XODIYEV , T.SH.SHODIYEV , B.B.BERKINOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "GLOBAL IQTISODIYOT RIVOJLANISHI ",
           editor: "B.E.MAMARAXIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMETRIKA ",
           editor: "SH.I.MUSTAFAKULOV , J.B.NEGMATOV , B.R.JO'RAYEV ",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "BOSHQA TARMOQLARDA BUXGALTERYA HISOBINING XUSUSIYATLARI ",
           editor: "M.B.KALONOV,A.T.MAXKAMBOYEV,F.T.TEMIROV ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMETRIKA 2 ",
           editor: "D.K.ABDULLAYEVA , R.X.ALIMOV,A.I.ISHNAZAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BYUDJET TASHKILOTLARINING BYUDJETDAN TASHQARI JAMG'ARMALAR HGISOBI ",
           editor: "S.U.MEHMONOV ,A.SH.KULIBOYEV ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MAKROIQTISODIYOT",
           editor: "G'.E.ZAXIDOV, M.T.ASQAROVA ,Z.A.DJUMAYEV,L.F.AMIROV , H.A.HAKIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MAKROIQTISODIYOT 2",
           editor: "B.T.SALIMOV,M.S.YUSUPOV,A.I.ISHNAZAROV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "MAKROIQTISODIYOT",
           editor: "E.I.ERGASHEV ,N.S.KASIMOVA ,U.K.MUXTOROVA,G.X.NAZAROVA ,M.E.JABBAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "G'AZNACHILIKNING DASTURIY KOMPLEKSLARI",
           editor: "G.A.KASIMOVA,A.XAYDAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BUXGALTERYA HISOBI:XALQARO MOLIYAVIY XISOBOT STANDARTLARI ",
           editor: "A.A.KARIMOV,A.K.IBRAGIMOV,N.K.RIZAYEV,N.M.IMAMOVA",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "XALQARO MOLIYA MUNOSABATLARI ",
           editor: "E.D.ALIMARDONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BANK AUDITI",
           editor: "M.L.YADGAROVA,R.B.QURBONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY XISOBOT TAHLILI",
           editor: "M.YU.RAXIMOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT VA MOLIYAVIY MENEJMENT",
           editor: "USMANOVA .N.YU",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MIKROIQTISODIYOT",
           editor: "B.Y.SALIMOVA M.S.YUSUPOV,B.B.SALIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ATROF-MUHIT VA TABIIY RESURSLAR IQTISODIYOTI",
           editor: "I.XOTAMOV,M.SULTANOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MAKROIQTISODIYOT 2",
           editor: "I.O.YAKUBOV,H.A.HAKIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "XALQARO BIZNES ",
           editor: "BEKMURADOV A.SH,TURSUNOV R.T,XOTAMOV I.S",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BUXGALTERYA HISOBI  ",
           editor: "A.A.KARIMOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "KORXONA IQTISODIYOTI VA INNAVATSIYALARNI BOSHQARISH",
           editor: "E.SH.SHODMONOV,D.SH.BABABEKOVA ,B.O.TURSUNOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "AUDIT",
           editor: "N.TOSHMATOV , X.KAMOLOV,I.NOSIROV,S.TOSHMATOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PROMOTING  INCLUSIVE GROWTH",
           editor: "LUIZ DE MELLO AND MARK A.DUTZ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "AUDITORLIK FAOLYATINING MILLIY STANDARTLARI",
           editor: "AXMEDJANOV.K.B",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "BIZNES QIYMATNI BAHOLASH ",
           editor: "L.S.ZOYIROV,U.K.MUXTOROVA,S.K.QOSIMOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ZAMONAVIY KORPARATIV BOSHQARUV ",
           editor: "SAMARIDDIN ELMIRZAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BIZNES BOSHQARUVI ASOSLARI",
           editor: "MUHAMMADJON BO'TABOYEV ,MANSURJON TOSHMAMATOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIY TAHLIL NAZARYASI",
           editor: "A.X.SHOALIMOV,SH.A.TOJIBOYEVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "INNOVATSION IQTISODIYOT ",
           editor: "Y.E.ALIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "INNOVATSION IQTISODIYOT ",
           editor: "A.TANIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY XISOBOT VA AUDITNING XALQARO STANDARTLARI",
           editor: "DYSMURATOV R.D,RO'ZIYEV H.K NAZAROV X.X",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "INKLYUZIV IQTISODIY O'SISH",
           editor: "M.T.ASQAROVA , L.F.AMIROV A.A.ISMOILOV A.R.YAXSHIMURATOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY MENEDJMENT",
           editor: "A.B DJUMANOVA ,M.N KUSHAKOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MARKETING ASOSLARI",
           editor: "ERGASHXODJAYEV SH.DJ,YUSUPOV M.A,G'OYIBNAZAROV S.B, SHARIPV I.B",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "SOLIQ NAZARYASI VA TARIXI ",
           editor: "I.M.NIYAZMETOV, S.A.GIYASOV, F.A.FAYZIYEV, R.R.DUSCHANOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "AMALIY AUDIT ",
           editor: "SH.I.ILHAMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FINANCIAL ACCOUNTING ",
           editor: "MUKHIDDIN KALONOV ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "XALQARO VALYUTA-KREDIT MUNOSABATLARI 3 QISM",
           editor: "J.X.AATANIYOZOV,E.D.ALIMARDONOV,A.B.SHEROV,M.A.MIRZAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ФИНАНСОВЫЙ АНАЛИЗ",
           editor: "SAGDULLAYEVA.Z,YULDASHEVA.U,ALIMOV B",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "XALQARO MOLIYA BOZORI TAHLILI",
           editor: "J.ATANIYOZOV,E.ALIMARDONOV,F.HAMIDOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY MENEDJMENT",
           editor: "A.G.IBRAGIMOV,Z.R.MADAMINOVA,M.E.RAXMATULLAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "KORXONA IQTISODIYATI VA MENEJMENTI",
           editor: "I.O.ULASHEV,SH.A.ATAMURADOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "DAVLAT MOLIYASI ",
           editor: "B.I.NURMUHAMEDOVA SH.K.XAMDAMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "DAVLAT BYUDJETI",
           editor: "B.I.NURMUHAMEDOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYA BOZORI",
           editor: "J.R.ZAYNALOV,E.N.XODJAYEV,B.SH.XASANOV,N.X.RUZIBAYEVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: " PRINCIPLES OF FINANCIAL ACCOUNTING ",
           editor: "CHRISTINE JONICK,ED.D",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ТЕРАПЕВТИЧЕСКАЯ И КОНСУЛЬТАТИВНАЯ ПСИХОЛОГИЯ   КЛАССИКИ И СОВРЕМЕННИКИ ПСИХОЛОГИИ",
           editor: "МАРИНА ГУЛИНА",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "СТАТИСТИЧЕСКИЕ МЕТОДЫ В ПЕДАГОГИКЕ И ПСИХОЛОГИИ 1 ЧАСЬ",
           editor: "ДЖ.ГЛАСС.ДЖ СТЭНЛИ ",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "СТАТИСТИЧЕСКИЕ МЕТОДЫ В ПЕДАГОГИКЕ И ПСИХОЛОГИИ 2 ЧАСЬ",
           editor: "ДЖ.ГЛАСС.ДЖ СТЭНЛИ ",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "MCCONNELL BRUE FLYNN ECONOMICS",
           editor: "MCGRAW-HILL",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "INSTITUTSIONAL IQTISODIYOT ",
           editor: "ABULQOSIMOV H.P,BERKINOV.B.B,ABULQOSIMOV M.H,UMAROV A.T,QULMATOV A.A",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIY XAVFSIZLIK",
           editor: "ABULKASIMOV H.P MAMATOV A.A MAMATOV S.A  SAIDGAZIEVA S.S",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY TAHLIL",
           editor: "B.A.XASANOV M.Y.RAXIMOV Z.A.MUQIMOV A.I.ALIQULOV A.B.JUMANOVA N.SH.XAJIMURATOV R.B.XASANOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ДЕНЬГИ .КРЕДИТ.БАНКИ",
           editor: "М.С МАРАМЫГИНА Е.Н ПРОКОФЬЕВОЙ ",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "BYUDJET HISOBI VA NAZORATI",
           editor: "I.N.QO'ZIYEV SH.V.G'ANIYEV A.S.RAMAZONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI ",
           editor: "SH.SHODMONOV M.RAXMATOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYA VA SOLIQLAR ",
           editor: "B.SH.SAFAROV,I.I.AYUBOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIY TAHLIL  ",
           editor: "M.Q.PARDAEV,J.I.ISROILOV,B.I.ISROILOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI ",
           editor: "T.JO'RAYEV,D.TOJIBOYEVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MACROECONOMICS",
           editor: "N.GREGORY MANKIW",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ИСТОРИЯ ЭКОНОМИЧЕСКИХ УЧЕНИЙ ",
           editor: "ЯДГАРОВ.Я.С",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
           editor: "B.D.XAJIYEV K.K.MAMBETJANOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "STATISTIKA BO'YICHA PRAKTIKUM",
           editor: "HABIBULLAYEV IBROHIM HABIBULLAYEVICH, SHADIYEV XAMID AZIMIOVICH,UTANOV BUNYOD QUVONDIQOVICH",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "INVISTITSIYALARNI TASHKIL ETISH VA MOLIYALASHTIRISH",
           editor: "MAMATOV BAXADIR SAFARALIYEVICH,XUJAMKULOV DILMUROD YUSUPALIYEVICH,NURBEKOV OYBEK SHERALIYEVICH",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "R.R.TOJIYEV,A.A.AZLAROVA,N.R.BAZAROVA,N.G.SATTOROVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "AMALIY STATISTIKA ",
           editor: "AYUBJONOV A.H",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "INVISTITSIYA LOYIHALARINI MOLIYALASHTIRISH 1 -QISM",
           editor: "NASIROV EGAMQUL ISMOILOVICH,ASAMXODJAYEVA SHOIRA SHUKRULLAYEVNA, ALIQULOV MEHMONALI SOLOHIDDIN O'G'LI",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "INVISTITSIYA LOYIHALARINI MOLIYALASHTIRISH 2-QISM",
           editor: "NASIROV EGAMQUL ISMOILOVICH,ASAMXODJAYEVA SHOIRA SHUKRULLAYEVNA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "EXPRIMENTAL PSIXOLOGIYA ",
           editor: "M.X.KARAMYAN,B.B.NURULLAYEVA,E.V.BONDAREVA,M.X.DJUMANIYOZOVA,F.E.GAZIYEVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "A.A.OMONOV,T.M.KORALIYEV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMETRIKA ",
           editor: "I.HABIBULLAYEV,A.JUMAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "THE TRANSLATORS HANDBOOK (WITH SPECIAL REFERENCE TO CONFERENCE TRANSLATION FROM FRENCH AND SPANISH)",
           editor: "FREDRICK FULLER,M.A.SOMETIMES SENIOR REVISER ,UNITER NATIONS ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "APPROACHES AND METHODS IN LANGUAGE TEACHING SEKOND EDITION ",
           editor: "JACK.C. RICHARDS AND THEODORE S. RODGERS",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ENGLISH LITERATURE FROM THE 19TH CENTURY THROUGH TODAY",
           editor: "J.E.LUEBERING",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ADVANCED RESEARCH  METHODS FOR APPLIED PSYCHOLOGY",
           editor: "PAULA BROUGH",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "DENGI ,KREDIT,BANKI",
           editor: "E.I.KUZNESOVA",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "DENGI ,KREDIT,BANKI",
           editor: "G.N.BELOGLAZOBOY",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "STATISTIKA  ",
           editor: "STENTON GLANS",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "ИСТОРИЯ ИНФОРМАТИКА ",
           editor: "И.М.ГАРСКОВА",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "DENGI ,KREDIT,BANKI",
           editor: "M.C.MARAMIGINA,E.N.PROKOFEVOY",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "GET READY FOR IELTS SPEAKING",
           editor: "RHONA SNELLING",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "O'ZBEKISTON DAVLATCHILIGI VA BOSHQARUV TARIXI ",
           editor: "BAXODIR ESHOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "LISTENING B2+UPPER INTERMEDIATE",
           editor: "IAN BADGER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LISTENING B1+INTERMEDIATE ",
           editor: "IAN BADGER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "JAHON TARIXI",
           editor: "T.O'.SALIMOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "MATERIALS DEVELOPMENT IN LANGUAGE TEACHING SECOND EDITION ",
           editor: "BRIAN TOMLINSON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "O'ZBEKISTONDA DAVLAT VA MAHALLIY BOSHQARUV TARIXI  1 QISM",
           editor: "BAXODIR ESHOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "IELTS RESOURCE PACK PHOTOCOPIABLE GAMES ACTIVITIES AND PRACTICE TESTS FOR IELTS PREPARATION CLASSES",
           editor: "JON MARKS ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ACADEMIC WRITING A HANDBOOK FOR INTERNATIONAL STUDENTS ",
           editor: "STEPHEN BAILEY ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ENGLISH LITERATURE  FROM THE THROUGH THE ROMANTIK PERIOD ",
           editor: "J.E.LUEBRING",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ПЕДАГОГИЧЕСКАЯ ПСИХОЛОГИЯ ",
           editor: "И.М.ЗИМНЯЯ ",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК СИНТАКСИС",
           editor: "Н.С.ВАЛГИНА",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "G'ARB FALSAFASI",
           editor: "Q.QAYUMOV,B.BOBOJONOV,L.XIJOVA",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "ILMIY TADQIQOT METODOLOGIYASI ",
           editor: "N.A.SHERMUHAMEDOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA",
           editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ 2-Е ИЗДАНИЕ ДОПОЛНЕННОЕ ",
           editor: "В.Н.ДРУЖИНИН",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "ПРОЛЕМЫ ПРЕВОДА ",
           editor: "Т.Р ЛЕВИЦКАЯ А.М.ФИТЕРМАН",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК  МОРФЕМИКАБСЛОВООБРАЗОВАНИЕБМОРФОЛОГИЯ",
           editor: "Е.Н.ТИХОНОВА",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "ЯЗЫК И ПЕРЕВОД ВОПРОСЫ ОБЩЕЙ ИЧАСТНОЙ ТЕОРИИ ПЕРЕВОДА ",
           editor: "Л.С.БАРХУДАРОВ",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "ПСИХОЛОГИЯ ЭКСТРЕМАЛЬНЫХ СИТУАЦИЙ ДЛЯ СПАСАТЕЛЛЕЙ И ПОЖАРНЫХ",
           editor: "Ю.С.ШОЙГУ",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "TILSHUNOSLIKKA KIRISH ",
           editor: "M.T.IRISQULOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PEDAGOGIK DIAGNOSTIKA VA KORREKTSIYA ",
           editor: "ABDULLAYEVA SH.A,RO'ZIYEVA D.I",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "TESTOLOGIYA",
           editor: "A.I.RASULOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА",
           editor: "М.А.РАХИМОВ",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА В ШКОЛЕ",
           editor: "M.T.BARANOV,N.A.IPPOLITOVA,T.A.LADIJENKOVA ,M.R.LIVOV",
           tili: "RUS",
          turkum: "УЧЕБНИК"
          },
          {
           name: "НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА",
           editor: "М.А.РАХИМОВ",
           tili: "RUS",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
           editor: "NAIM OBLOMURODOV FAYZULLA TOLIPOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "CHET TIL O'QITISH METODIKASI",
           editor: "JAMOL JALOLOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PSIXOLOGIK TERNING ",
           editor: "DILBAR URAZBAYEVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PSIXADIAGNOSTIKA VA EXSPREMENTAL PSIXOLOGIYA ",
           editor: "Z.NISHANIVA,D.QARSHIEVA,N.ATABAYEVA,Z.QURBONOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "SOCIAL PSYCHOLOGY TENTH EDITION",
           editor: "DAVID G.MYERS",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
           editor: "T.V.KORNILOVA ",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
           editor: "V.N.DRUJNIN",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "UMUMIY PSIXOLOGIYA ",
           editor: "F.XAYDAROV,N.XALILOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "МЕДИАОБРАЗОВАНИЕ ИСТОРИЯ И ТЕОРИЯ ",
           editor: "A.V.FEDOROV",
           tili: "RUS",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "UMUMIY PSIXOLOGIYA ",
           editor: "P.I.IVANOV,M.E.ZUFAROVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PSIXOLOGIYA 2-KITOB (YOSH DAVRLARI VA PEDAGOGIK PSIXOLOGIYA ",
           editor: "SH.A.DO'SMUHAMMEDOVA,X.A.TILLASHAYXOVA,G.BAYKUNUSOVA,G.ZIYAVITDINOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PSIXOLOGIYA ",
           editor: "N.S.SAFAEV,N.A.MIRASHIROVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PSIXOLOGIYA  ",
           editor: "E.G'.G'OZIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PSIXOLOGIYA ",
           editor: "F.I.XAYDAROV,N.I.XALILOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PSIXOLOGIYA ",
           editor: "E.G'.G'OZIYEV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA  TOM 1 ",
           editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA  TOM 2",
           editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA",
           editor: "D.A.YUSUPOV,X.B.SATTORXODJAYEV,A.A.MAVLAYNOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA",
           editor: "I.SAIFNAZAROV,A.MUXTAROV,T.SULTANOV,N.NAZAROV,N.RAXIMBABAYEVA,X.DONIYOROV,F.USMONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA TARIXI ANTIK DAVR FALSAFASI",
           editor: "M.SHARIPOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA 1 TOM",
           editor: "M.A.AXMEDOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "FALSAFA 2 TOM",
           editor: "M.A.AXMEDOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IJTIMOIY PEDAGOGIKA ",
           editor: "NODIRA EGAMBERGANOVA",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "PSIXOLOGIYA NAZARYASI VA TARIXI",
           editor: "SH.R.BARATOV,L.Y.OLIMOV,O.R.AVEZOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PSIXOLOGIYA",
           editor: "F.XAYDAROV,N.XALILOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ONTOGNEZ PSIXOLOGIYASI ",
           editor: "ERGASH G'OZIYEV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PSIXOLOGIYA",
           editor: "ERGASH G'OZIYEV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "ДЕТСКАЯ ПСИХОЛОГИЯ",
           editor: "Е.О.СМИРНОВА",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "ОСНОВНЫЕ МЕТОДЫ СБОРА ДАННЫХ В ПСИХОЛОГИИ",
           editor: "С.А.КАПУСТИНА",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА И ЛИТЕРАТУРЫ",
           editor: "AXMEDOVA L.T,LAGAY.E.A",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "ЗАПАДНО ЕВРОПЕЙСКАЯ СРЕДНЕВЕКОВАЯ ИСТОРИО ГРАФИЯ",
           editor: "О.Л.ВАЙНШТЕЙН",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "UMUMIY PEDAGOGIKA NAZARYASI VA AMALYOTI ",
           editor: "B.X.XODJAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PEDAGOGIKA NAZARYASI VA TARIXI ",
           editor: "R.MAVLONOVA,N.VOHIDOVA,N.RAXMONQULOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ПСИХОЛОГИЯ И ПЕДАГОГИКА",
           editor: "Л.А.ГРИГОРОВИЧ  Т.Д.МАРЦИНКОВСКАЯ",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "PSIXODIAGNOSTIKA VA PSIXOMETRIKA ASOSLARI TOM 1-2",
           editor: "L.YA.OLIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PEDAGOGIKA",
           editor: "R.A.MAVLONOVA,N.H.RAXMONQULOVA,K.O.MATNAZAROVA,M.K.SHIRINOV,S,HAFIZOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PEDAGOGIKA 2 QISM",
           editor: "A.MUSURMANOVA,N.J.ISAQULOVA,M.T.JUMANIYOZOVA,A.SH.JUMAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ODAM FIZIOLOGIYASI",
           editor: "E.NURITDINOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PEDAGOGIKA TARIXI 2QISM ",
           editor: "KOMILJON HASHIMOV,SANOBAR NISHONOVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IJTIMOIY PEDAGOGIKA ",
           editor: "NODIRA EGAMBERDIYEVA",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "YOSH DAVRLARI VA PEDAGOGIK PSIXOLOGIYA",
           editor: "SH.A.DO'SMUHAMMEDOVA,Z.T.NISHANOVA,C.X.JALILOVA,SH.K.KARIMOVA,SH.T.ALIMBAYEVA",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "PEDAGOGIKA ",
           editor: "R.MAVLANOVA,O.TO'RAYEVA,K.XOLIQBERDIYEV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА И ЛИТЕРАТУРЫ",
           editor: "AXMEDOVA L.T,LAGAY.E.A",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА ",
           editor: "L.T.AXMEDOVA,O.V.KON",
           tili: "RUS",
          turkum: "УЧЕБНИК"
          },
          {
           name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ XVIII ВЕКА",
           editor: "О.Б.ЛЕБЕДЕВА",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          },
          {
           name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ",
           editor: "Д.С.ЛИХАЧЕВ Г.П.МАКОНЕНКО",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА ",
           editor: "L.T.AXMEDOVA,O.V.KON",
           tili: "RUS",
          turkum: "УЧЕБНИК"
          },
          {
           name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ  (ПЕРВАЯ ПОЛОВИНА XX ВЕКА)",
           editor: "Л.П.ЕГОРОВОЙ",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "РУССКИЙ ФОЛЬКЛОР",
           editor: "Т.В.ЗУЕВА",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "DESTINATION GARAMMAR AND VOCABULARY C1 C2",
           editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "DESTINATION GARAMMAR AND VOCABULARY B2",
           editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "TEACHERS BOOK ",
           editor: "VIRGINIA EVANS-JENNY DOOLEY STANLEY WRIGHT",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "IELTS WRITE RIGHT AKADEMIC\/GENERAL TASKS 1 2 ",
           editor: "MEHDI KARIMI",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "MIGRATION ACCOMMODATION AND LANGUAGE CHANGE ",
           editor: "BRIDGET L.ANDERSON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "FUNDAMENTALS OF MANAGEMENT",
           editor: "ROBBINS DECENZO COULTER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SPEAKING FOR IELTS ",
           editor: "KAREN KOVACS",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "READING FOR IELTS",
           editor: "ELS VAN GEYTE AND RHINA SNELLING",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "WRITING FOR IELTS",
           editor: "ANNELI WILLIAMS",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LANGUAGE SKILL:SPEAKING 2 ",
           editor: "G.BAKIEVA, Z.SALIEVA ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "GRAMMAR PRACTICE FOR ELEMENTARY STUDENTS WITH KEY",
           editor: "ELAINE WALKER STEVE ELSWORTH",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SKILLFUL READING AND WRITING STUDENTS BOOK",
           editor: "DAVID BOHLKE ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SCALE UP STUDENTS BOOK COURSE 2",
           editor: "QAMBAROV NOSIR,MURATOVA ILMIRA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SCALE UP STUDENTS BOOK COURSE 1",
           editor: "QAMBAROV NOSIR,MURATOVA ILMIRA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SCALE UP STUDENTS BOOK COURSE 3",
           editor: "BAKIEVA G.RASHIDOVA F KHODJAYEVA R SAMATOVA B KARIMOVA D M SHAMSIMATOVA B SHAKHIMOVA M KASIMOVA Z DJALALIDINOVA M",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 4",
           editor: "LINDSAY CLANDFIELD AND MARK MCKINNON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 3",
           editor: "MIKE BOYLE AND ELLEN KISSLINGER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 1",
           editor: "LIDA BAKER AND STEVEN GERSHON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THIRD EDITION SOLUTIONS UPPER-INTERMEDIATE WOEKBOOK",
           editor: "TIM FALLA PAUL DAVIES , PAUL KELLY,HELEN WENDHOLT , SYLVIA WHEELDON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THIRD EDITION SOLUTIONS ADVANCED STUDENTS BOOK",
           editor: "TIM FALLA,PAUL ADAVIES,JANE HUDSON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "TASK-BASED LANGUAGE TEACHING ",
           editor: "DAVID NUNAN ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "MATERIALS DEVELOPMENT IN LANGUAGE TEACHING SECOND EDITION ",
           editor: "BRIAN TOMLINSON",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "PLANNING LESSONS AND COURSES DESINGNING SEQUENCES OF WORK FOR THE LANGUAGE CLASSROOM",
           editor: "SERIES EDITOR PENNY UR",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "FROM PROTO-INDO-EUROPEAN TO PROTO-GERMANIC",
           editor: "DON RINGE",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "NEW INSIGHT INTO IELTS",
           editor: "VANESSA JAKEMAN AND CLARE MCDOWELL",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "COMPORATIVE TYPOLOGY OF ENGLISH,UZBEK AND RUSSIAN LANGUAGES",
           editor: "M.I.RASULOVA,Z.I.SHUKUROVA ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THEORETICAL ENGLISH GRAMMAR",
           editor: "M.IRISQULOV,I.TOKHTASINOV,A.KULDASHEV",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "A GLOSSARY OF HISTORICAL LINGUISTICS ",
           editor: "LYLE CAMPBELL AND MAURICIO J.MIXCO",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "A GRAMMAR OF THE ENGLISH LANGUAGE",
           editor: "B.A.ILISHA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ENGLISH SPEAKING COUNTRIES ",
           editor: "ISHAK YAKUBOV",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "UNDERSTANDING AND USING ENGLISH GRAMMAR THIRD EDITION WITH ANSWER KEY",
           editor: "BETTY SCHRAMPFER AZAR",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "BASIC ENGLISH GRAMMAR THIRD EDITION WITH ANSWER KEY ",
           editor: "BETTY SCHRAMPFER AZAR STACY A.HAGEN",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LANGUAGE SKILL:WRITING 2 ",
           editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LANGUAGE SKILL:SPEAKING 1",
           editor: "G.BAKIYEVA,Z.SALIEVA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LANGUAGE SKILL:WRITING 4",
           editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LANGUAGE SKILL:WRITING 3",
           editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "CULTURAL LINGUISTIC ",
           editor: "D.U.ASHUROVA,M.R.GALIEVA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "LANGUAGE SKILL:LISTENING ",
           editor: "G.BAKIEVA,Z.KASIMOVA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "SHARQIY OSIYO DINIY-FALSAFIY TALIMOTLAR VA ISLOM",
           editor: "N.G.NIZOMMIDDINOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "INCLUSIVE GROWTH,DEVELOPMENT AND WELFARE POLICY",
           editor: "REZA HASMATH",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "PEDAGOGIK TEXNOLOGIYALAR VA PEDAGOGIK  MAHOROT",
           editor: "H.T.OMONOV,N.X.XO'LAYEV,S.S.MADYAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "OLIY MATEMATIKA 1 QISM",
           editor: "SH.R.XURRAMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IJTIMOIY ISHGA KIRISH",
           editor: "M.X.GANIYEVA,Q.N.KAYUMOV,M.B.SHEROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "EKOLOGIYA , BIOSFERA VA TABIATNI MOHOFAZA QILISH",
           editor: "AHTAMQUL ERGASHEV TEMUR ERGASHEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY EKOLOGIYA ",
           editor: "AHTAMQUL ERGASHEV ",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "AXBOROT XAVFSIZLIGI",
           editor: "S.K.GANIYEV M.M.KARIMOV,K.A.TASHEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "TA'LIM TEXNOLOGIYALARI",
           editor: "SH.S.SHOYIMOVA,M.K.XOSHIMOVA,SH.R.MIRZAYEVA,M.M.QO'ZIBOYEVA ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "KOMPUTER GRAFIKASI  VA WEB-DIZAYN",
           editor: "M.E.MAMARAJABOV,S.Q.TURSUNOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MASTER OF BUSSINESS ADMINISTRATION STRATEGIC MANAGEMENT",
           editor: " DR.C S.K KRISHNACHARYALU",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THE  NEW YORK TIMES THE FOUR ",
           editor: "CKOTT GELLOUEY",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI TOM 1",
           editor: "N.X.SHOAXMEDOVA,I.M.ABDULLAYEVA,D.P.XASHIMOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI TOM 2",
           editor: "N.X.SHOAXMEDOVA,I.M.ABDULLAYEVA,D.P.XASHIMOVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI",
           editor: "SHOAXMEDOVA N.X,ABDULLAYEVA I.M",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "UMUMIY PEDAGOGIKA NAZARYASI VA AMALYOTI ",
           editor: "B.X.XODJAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "ARAB TILI GRAMMATIKASI",
           editor: "NEMATULLO IBROHIMOV,MUHAMMAD YUSUPOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "УЧЕБНИК АРАБСКОГО ЯЗЫКА",
           editor: "С.А.КУЗЬМИН",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "УЧЕБНИК АРАБСКОГО ЯЗЫКА",
           editor: "А.А.КОРАЛЕВ Г.Ш.ШАРБАТОВ",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "O'ZBEKISTONING ME'MORIY YODGORLIKLARI TARIXI",
           editor: "S.DAVLETOV,M.ABDULLAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "АВТОМАТИЗИРОВАННЫЕ ТЕХНОЛОГИИ В ЭКОНОМИКЕ",
           editor: "КОЛЛЕКТИВ АВТОР",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "РАБОТА В СРЕДЕ ЕЛЕКТРОННЫХ ТАБЛИЦ",
           editor: "О.А.ЛАВРЕНОВА",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "TALIMDA AXBOROT TEXNOLOGIYALARI",
           editor: "R.XAMDAMOV,U.BEGIMQULOV,N.TAYLOQOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "KIBERXAVSIZLIK ASOSLARI ",
           editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "COMPUTER SCIENCE",
           editor: "DAVID WATSON,HELEN WILLIAMS",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "YURISTNING KASBIY ETIKASI",
           editor: "B.I.ISMAILOV",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "MICROSOFT EXCEL",
           editor: "B.J.BOLTAYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "SOCIAL WORK AND SOCIAL WELFARE AN INTRODUCTION",
           editor: "ROSALIE AMBROSINO,JOSEPH HEFFERNAN,EMERITUS,GUY SHUTTLESWORTH,EMERITUS",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "INFORMATIKA,INFORMATSION TEXNOLOGIYALAR",
           editor: "M.M.ARIPOV,J.O'.MUHAMMADIYEV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "STATISTIKA",
           editor: "SOATOV.N.M,NABIEV H.G',NABIYEV D.H,TILLAXO'JAYEVA G.N",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYAVIY XISOBOTNING XALQARO STANDARTLARI",
           editor: "C.N.TASHNAZAROV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODCHILAR UCHUN MATEMATIKA",
           editor: "SH.SHARAHMETOV,A.NAIMJONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BUXGALTERYA HISOBI TOM 1",
           editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BUXGALTERYA HISOBI TOM 2",
           editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "МОДЕЛИ ИССЛЕДОВАНИЯ ОПЕРАЦИЙ",
           editor: "О.А.КОСОРУКОВ М.А.ХАЛИКОВ Г.П.ФОМИН",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "ЭКОНОМИКА-МАТЕМАТИЧЕСКИЕ МЕТОДЫ И МОДЕЛИ",
           editor: "А.И.ГУРКО",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "MIKROIQTISODIYOT",
           editor: "ERKIN EGAMBERDIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "BUXGALTERYA HISOBI",
           editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MIKROIQTISODIYOT MAKRIIQTISODIYOT TOM 1",
           editor: "SH.FAYZIYEV,B.SHERMUHAMMEDOV,E.I.ERGASHEV,I.BAKIVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MIKROIQTISODIYOT MAKRIIQTISODIYOT TOM 2",
           editor: "SH.FAYZIYEV,B.SHERMUHAMMEDOV,E.I.ERGASHEV,I.BAKIVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MAKROIQTISODYOT",
           editor: "G'.E.ZOHIDOV,M.T.ASQAROVA,Z.A.DJUMAYEV,L.F.AMIROV,H.A.HAKIMOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PERSONALNI BOSHQARISH",
           editor: "K.X.ABDURAXMONOV,SH,R,XOLMO'MINOV,N.K.ZOKIROVA",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "INNOVATSION IQTISODIYOT ",
           editor: "A.TANIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "I.R.TOYMUHAMMEDOV,R.R.TOJIYEV,A.A.AZLAROVA,N.R.BAZAROVA,N.G'.SATTOROVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "A.A.OMONOV,T.M.KORALIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYA",
           editor: "T.MALIKOV,O.OLIMJONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MOLIYA",
           editor: "T.MALIKOV,O.OLIMJONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "SH.Z.ABDULLAYEVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "SH.Z.ABDULLAYEVA",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "PUL VA BANKLAR",
           editor: "A.A.OMONOV,T.M.QORALIYEV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI TOM 2",
           editor: "SH.SHODMONOV  ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI TOM 1",
           editor: "SH.SHODMONOV  ",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI TOM 1",
           editor: "SH.SHODMONOV,U.G'AFUROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI TOM 2",
           editor: "SH.SHODMONOV,U.G'AFUROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI TOM 1",
           editor: "B.Y.XODIYEV,SH.SH.SHODMONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI TOM 2",
           editor: "B.Y.XODIYEV,SH.SH.SHODMONOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "MIKROIQTISODIYOT",
           editor: "B.T.SALIMOV,M.S.YUSUPOV,A.I.ISHNAZAROV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "IQTISODIYOT NAZARYASI",
           editor: "Z.T.GAYIBNAZAROVA,SH.A.ASAMUXAMETOV",
           tili: "LOTIN",
          turkum: "DARSLIK"
          },
          {
           name: "OLIY MATEMATIKA 1 QISM",
           editor: "YO.U.SOATOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "OLIY MATEMATIKA 2 QISM",
           editor: "YO.U.SOATOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "OLIY MATEMATIKA 3 QISM 1 KITOB",
           editor: "YO.U.SOATOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "OLIY MATEMATIKA 3 QISM 2 KITOB",
           editor: "YO.U.SOATOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "BUSINESS MANAGEMENT AND ADMINISTRATION",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "BUXGALTERYA HISOBI VA NAZARYASI ",
           editor: "B.XASHIMOV",
           tili: "KRILL",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMIC APPROACHES TOORGANIZATIONS ",
           editor: "SYTSE DOUMA AND HEIN SCHREUDER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THE BASICS OF BUSINESS MANAGEMENT-VOL I LEADERSHIP, FINANCIAL MAMAGEMENT AND ECONOMICS",
           editor: "ELLY R.TWINEYO KAMUGISHA",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ACCOUNTING INFORMATION SYSTEMS PART 1",
           editor: "JAMES A.HALL",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ACCOUNTING INFORMATION SYSTEMS PART 1",
           editor: "JAMES A.HALL",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ECONOMICS PART 1",
           editor: "MCCONNELL BRUE FLYNN",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ECONOMICS PART 2",
           editor: "MCCONNELL BRUE FLYNN",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THE ECONOMICS OF MONEY,BANKING,AND FINANCIAL MARKETS PART 1 ",
           editor: "FREDRIC S,MISHKIN",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "THE ECONOMICS OF MONEY,BANKING,AND FINANCIAL MARKETS PART 2",
           editor: "FREDRIC S,MISHKIN",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "MACROECONOMICS SEVENTH EDITION PART 1",
           editor: "N.GEORGY MANKIW",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "MACROECONOMICS SEVENTH EDITION PART 2",
           editor: "N.GEORGY MANKIW",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "DENGI ,KREDIT,BANKI",
           editor: "GALINA NIKOLAYEVNA BELOGLAZOVA",
           tili: "RUS",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMICS  PART 1",
           editor: "PAUL A.SAMUELSON,WILLIAM D.NORDHAUS ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "EKONOMICS  PART 2",
           editor: "PAUL A.SAMUELSON,WILLIAM D.NORDHAUS ",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ФЫНАНСЫ ",
           editor: "ЭВИ БОДИ РОБЕРТ К.МЕРТОН",
           tili: "РУС",
          turkum: "УЧЕБНИК"
          },
          {
           name: "BASIC ECONOMETRICS PART 1",
           editor: "DAMODAR N. GUJARATI DAWN C.PORTER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "BASIC ECONOMETRICS PART 2",
           editor: "DAMODAR N. GUJARATI DAWN C.PORTER",
           tili: "ENGLISH",
          turkum: "DARSLIK"
          },
          {
           name: "ЭКОНОМИЧЕСКАЯ БЕЗОПАСНОСТЬ",
           editor: "Л.П.ГОНЧАРЕНКО",
           tili: "РУС",
          turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
          }
         ,
            {
             name: "MENING KO'NGLIM BIR QUSHDIR",
             editor: "AYDIN XIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "IF QALASI MAHBUSI GRAF MONTE-KRISTO 1 QISM",
             editor: "ALEKSANDR DYUMA",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "IF QALASI MAHBUSI GRAF MONTE-KRISTO 2 QISM",
             editor: "ALEKSANDR DYUMA",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MOLXONA",
             editor: "JORJ ORUEL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "CHO'L BO'RISI",
             editor: "HERMANN HESSE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "RAQAMLI QALA ",
             editor: "DEN BRAUN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XODIMLARNI TANLASH SANATI",
             editor: "SVETLANA IVANOVA",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "OYNING AKSI ",
             editor: "D.ALIEVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QUVONCHBAXSH ETADIGAN ISH KELAJAK BIZNES-MODELI",
             editor: "DENNIS BAKKE",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "GULLIVERNING SAYOHATLARI",
             editor: "JONATAN SVIFT",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ROBINZON KRUZONING HAYOTI VA AJOYIB SARGUZASHTLARI",
             editor: "DANIYEL DEFO",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "IZTIROB ",
             editor: "RASHOD NURI GUNTEKIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OQ GULLAR",
             editor: "YASUNARI KAVABATA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOVVOYI YO'RG'A",
             editor: "E.SETON-TOMSON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ABADIYAT QONUNI",
             editor: "NODAR DUMBADZE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KITOB O'QIB BERUVCHI",
             editor: "BERNXARD SHLINGK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OLIM YETISTIRGAN ONALAR ",
             editor: "MURAT TOSUN",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "O'ZBEKISTON VATANIM MANIM",
             editor: "ABDULLA ORIPOV",
             tili: "LOTIN",
            turkum: "SHE'RIY TO'PLAM"
            },
            {
             name: "HIKMATLAR",
             editor: "MAHTUMQULI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SEN MENING ERTAMSAN",
             editor: "SEMIH YILMAZ",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TIRILISH",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PINOKIYONING BOSHIDAN KECHIRGANLARI ",
             editor: "KARLO KOLLODI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "VIKTORIYA",
             editor: "KNUT HAMSUN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SIRLI XILQAT",
             editor: "ANTON CHEXOV",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "G'OYANI IZLAB TOPISH",
             editor: "GENRIX ALTSHULLER",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "SARMOYADOR",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OYGUL BILAN BAXTIYOR",
             editor: "HAMID OLIMJON",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DANG'ILLAMA HOVLIDAGI O'LIM",
             editor: "JEYMIS HEGLI CHIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ISHQQA YENGILMAYMAN ",
             editor: "OMINA SHENGLIKO'G'LI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "BAQIRMAYDIGAN ONALAR",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ONA VA BOLA ",
             editor: "FERUZA QURBONOVA",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "ALVIDO,GULSARI",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HAYOT SENI SEVADI ",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "MAQSAD UZLUKSIZ RAVISHDA MUKAMMALANISH JARAYONI",
             editor: "ELIYAXU M. GOLDRATT DJEFF KOKS",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "ALVIDO,GULSARI",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "G'ARB-U SHARQ DEVONI",
             editor: "YOHANN VOLFGANG GYOTE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QIYOMAT ",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "LATTE OMILI",
             editor: "DEBID BAX JON DEVID MANN",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "TO'RTINCHI SANOAT INQILOBI",
             editor: "KLAUS SHVAB",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SEN MENING HAYOTIMNI O'ZGARTIRDING",
             editor: "ABDEL SELLU",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DO'STLIK TUXFASI",
             editor: "KENGISBOY KARIMOV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GARRI POTTER VA QAQNUS  ORDENI",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GARRI POTTER VA OLOVLI KUBOKI",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GARRI POTTER VA MAXFIY XONA",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BEZOVTALIKDAN XALOS BO'LISH VA YANGI XAYOT BOSHLASH SIRLARI",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "BOLALARIMIZ BILAN TORTISHMAYLIK",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "BOLALAR QANDAY MUVAFAQQIYATGA ERISHGANLAR",
             editor: "MO'MIN SEKMAN DR BAXAR ERISH",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "SEMIZ VA ORIQ",
             editor: "ANTON CHEXOV",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SARVIQOMAT DILBARIM",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAMARADORLIKNING 21 YO'LI",
             editor: "BRAYN TREYSI",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "QIRQ KOKILLI KELINCHAK",
             editor: "SHAHODAT ISAXONOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI  3-4 ",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI 1-2",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI  9-10",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI  11-12",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI  7-8",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI  13-14",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AFG'ON SHAMOLI  5-6",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "UZUKLAR HUKMDORI",
             editor: "JON RONALD RUEL TOLKIN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OQ KEMA ",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XITOBNOMA",
             editor: "MUNAVVAR QORI ABDURASHIDXONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NAJOT YO'LI",
             editor: "ABDURAUF FITRAT ",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NAJOT YO'LI",
             editor: "ABDURAUF FITRAT ",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BOVARI XONIM",
             editor: "GUSTAV FLOBER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DUNYONING ISHLARI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HOJIMUROD ",
             editor: "LEV TOLSTOY",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "XOLDORXON",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AL-KARNAKU KEMASIDAGI QOTILLIK",
             editor: "AGATA KRISTI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JAMILA",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TILSIMLI SHAXMAT",
             editor: "AGATA KRISTI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "FENOMENAL XOTIRA ",
             editor: "S.MUASAMEDOV",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "UCH FINJON CHOY",
             editor: "GREG MORTENSO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'YLA VA BOY BO'L",
             editor: "NAPALYON XILL",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "O'YLA VA BOY BO'L 52 HAFTA UCHUN 52 REJA",
             editor: "NAPALYON XILL",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "KRISTINA ",
             editor: "STEFAN SVEYG",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NIKOHNI ASRAY OLAMAN",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "GARRI POTTER VA AFSONAVIY TOSH",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GARRI POTER VA AJAL TUHFALARI",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GARRI POTTER VA ZATI PAST SHAXZODA",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BAHORNING O'N YETTI LAHZASI",
             editor: "YULIAN CEMYON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TIRIKLIK KOLISH BUYURILGAN ",
             editor: "YULIAN CEMYON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOLG'IZLIKNING YUZ YILI",
             editor: "GABRIEL GARSI MARKES",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ERTA QAYTGAN TURNALAR",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DON KIXOTNING SARGUZASHTLARI",
             editor: "MIGEL DE SERVANTES",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AYOL QISMATIDAN QISSALAR",
             editor: "ATIQ RAXITIY \\,JIN.P.SECCON ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BO'TAKO'Z",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ANNA KARENINA",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "ONAJON-KABAM O'ZING",
             editor: "SANJAR TURSUNOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHOLIQUSHI",
             editor: "RASHOD NURI GUNTEKIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MALIKA VA AYYOR",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYLANMA KO'NGLIMGA TUG'ILGAN DENGIZ",
             editor: "MUSLIMBEK YO'LDOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHEMPIYONDEK O'YLANG ",
             editor: "DONALD TRAMP",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DRAKULA ",
             editor: "BREM STOKER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OLTIN ZANGLAMAS ",
             editor: "SHUXRAT",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QIZIL AJDARHO",
             editor: "TOMAS HARRIS",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JENNI GERXARDT",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "MOVIY UMMONSTRATEGIYASI ",
             editor: "V.CHAN KIM RENE MOBORN",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "GONGKONGDAN KELGAN TOBUT",
             editor: "JEYMIS HEGLI CHIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "UMIDLAR INTIHODA O'LADI",
             editor: "BARIS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALVIDO,QUROL",
             editor: "E.M.HEMINGEY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AZIZIM",
             editor: "GI DE MOPASSAN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SENSIZ HAM YASHAYMAN ",
             editor: "NAZ ALTINBASH",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "MEN SIZNI SOG'INDIM,ONAJON",
             editor: "ABDURASHID NURMURODOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ISHQ QALBNING DUOSIDIR",
             editor: "EMRE TUNJER",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "XAZINALAR OROLI",
             editor: "ROBERT LUIS CTIBENSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ISHQQA OID 40 QOIDA",
             editor: "ELIF SHAFAQ",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "LABIRINTDA YURUVCHI",
             editor: "JEYMS DISHNER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAYOLIMDA GO'ZAL QOL",
             editor: "HALIS KARABENLI",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TEJAMKORLIK STARTAPTI",
             editor: "ERIK RIS",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "DAHRIYNING IBODATI ",
             editor: "ONORE DE BALZAK",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KETSAMMIKIN YOKI QOLSAMMIKAN ",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "FACTFULNESS",
             editor: "XANS ROSLING",
             tili: "LOTIN",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "ALIF ",
             editor: "PAULO KOELO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "RITA XEYVORT YOXUD SHOUSHENKDAN QOCHISH",
             editor: "STIVEN KING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEN NAYMAN ",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ONAMNING SIRLI KUNDALIGI",
             editor: "BUSHRA KUCHUK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SHUNCHA SHINGANI KIM YEGAN",
             editor: "PAK VAN SO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YEVGENI ONEGIN ISHQ QISSASI",
             editor: "ALEKSANDR SERGEYVICH PUSHKIN",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "YASHIL KECHA ",
             editor: "RASHOD NURI GUNTEKIN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TO'LAQONLI XAYOT BU BIZNES-LOYIHA",
             editor: "RADISLAV  GANDAPAS",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "QO'ZICHOQLAR SUKUNATI",
             editor: "TOMAS HARRIS",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "CHERNOBIL TAVALLOSI",
             editor: "SVETLANA ALIKSEYVICH",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GAP QAHVADA EMAS ",
             editor: "XOBARD BEXAR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HAYOTNI SOKINLASHTIRISH PAYTI ",
             editor: "KINSUN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QULAYOTGAN TOG'LAR",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TOG' CHINDAN HAM O'SHA YERDA BO'LGANMI",
             editor: "PAK VAN SO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MAUGLI",
             editor: "JOZEF REDYARD KIPLING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OTKAN KUNLAR",
             editor: "ABDULLA QODIRIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AKRAMNING SARGUZASHTLARI  ",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HIKMATLAR",
             editor: "JALOLIDDIN RUMIY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OTAMDAN QOLGAN DALALAR",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ONA LOCHIN VIDOSI",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "IKKI ESHIK ORASI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAMARQAND OSMONIDA YULDUZLAR 2 KITOB ",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAMARQAND OSMONIDA YULDUZLAR 3 KITOB ",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ABADIY ZAMONDOSH",
             editor: "OLIM TOSHBOYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHO'QINTIRILGAN OTA YOKI MAFIA SARDORI",
             editor: "MARIO PYUZO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AMERIKA FOJEASI 1-2 KITOB",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HIKMATLAR",
             editor: "LEV TOLSTOY",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "SEVGI SANATI",
             editor: "ERIX FROMM",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEN,DADAM VA ALSGEYMER",
             editor: "NODRABEGIM",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "0 DAN BOSHLANGAN BIZNES",
             editor: "ERIK RIS",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "KASANDRA TAMG'ASI",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ERTA QAYTGAN TURNALAR",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "STIV JOBS",
             editor: "UOLTER AYZEKSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOBURNOMA",
             editor: "ZAHIRIDDIN MUHAMMAD BOBUR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "UCH OG'AYNI ",
             editor: "ERIX MARIYA REMARK",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BIR BARAKALI MARKETING REJA",
             editor: "ALLAN DIB",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "DUNYO MAMLAKATLARI",
             editor: "LAZIZ RAXMATOV",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "JINOYAT KO'CHASIDAGI ISHQ",
             editor: "IRODA UMAROVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OLMOS KAMAR",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SIZGA HAM YOQISHI MUMKIN",
             editor: "TOM BANDERBILT",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "RUXIYAT ALIFBOSI",
             editor: "BAXODIR KARIM",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "AMIRLIKNING OLTIN TAXTI IZIDAN",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MILLION DOLLARLAIK XATOLAR",
             editor: "PAVEL ANNENKOV",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "DORIXONADAGI QOTILLIK",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QADR KECHASIDA QOTILLIK",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOTANIKLAR HAM BIZNES QILADI",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QIMMATGA TUSHGAN XATO",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SURGUNDAGI SARGUZASHTLAR",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TEMURIYLAR KUTUBXONASINING",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BIZNES HAQIDA DUNYONI O'ZGARTIRGAN ODAMLARNING 250 TA MULOHAZASI ",
             editor: "STIV JOBS",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "KECHIKKAN QASOS",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SO'POQSOYDAGI SIRLI QOTILLIK",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'G'IRLANGAN BOLALIK",
             editor: "KOMIL SINDAROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SONATA TILSIMI",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "O'LSANG KIM YIG'LAYDI",
             editor: "ROBIN SHARMA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEHROBDAN CHAYON",
             editor: "ABDULLA QODIRIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'Z FERRARISINI SOTGAN ROHIB",
             editor: "ROBIN SHARMA",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MARTIN IDEN",
             editor: "JEK LONDON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "UCH ILDIZ",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OSHIQ OHI ",
             editor: "MAHMUD TOIR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KOMILA ",
             editor: "RAXIM KARIMOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JAVDARZODANING XALOSKORI",
             editor: "JEROM CELINJER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MANAVIY MASNAVIY",
             editor: "JALOLIDDIN RUMIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AYOL DONOLIGI",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ONA TARBIYASI ",
             editor: "AZIZ NESIN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "MAVLONO:BIR ISTAGINGIZ RO'YOBGA CHIQSA ,BIR XAYR-RO'YOBGA CHIQMASA MING XAYR IZLANG",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "IKKI DIANA",
             editor: "ALEKSANDR DYUMA",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "MUKAMMAL RAXBAR",
             editor: "ISXAK KALDERON ADIZES",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "VOZ KECHILMAS AYOL BO'LISH",
             editor: "HAKAN O'ZKAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TARAS BULBA",
             editor: "NIKOLAY VASILYEVICH ",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "GO'RO'G'LINING TUG'ULISHI",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YUQUMLILIK ",
             editor: "YONA BERGER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BORN MUQOYASI ",
             editor: "ROBERT LADLEM",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JINOYAT VA JAZO",
             editor: "FEODOR DOSTAEVSKIY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "BUZRUKNING KO'ZI",
             editor: "GABRIEL GARSI MARKES",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'Z TAQDIRINGIZNI KASHF ETING ",
             editor: "ROBIN SHARMA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TO'RT ULUS TARIXI",
             editor: "MIRZO ULUG'BEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'ZBEKISTONLIK IKKINCHI JAHON URUSHI QAHRAMONLARI",
             editor: "A.A.AXMEDOV,A.A.JO'RABOYEV,M.M.YO'LDASHEV,A.ZIYO,X.A.QARSHIYEV,A.S.KAN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OLTIN KALIT YOKI BURATINONING BOSHIDAN KECHERGANLARI",
             editor: "ALEKSEY TOLSTOY",
             tili: "LOTIN",
            turkum: "ERTAK-QISSA"
            },
            {
             name: "HAYOTIMIZ KENGURULARI",
             editor: "SANJAR XO'JA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QADRIM",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MORRINING SESHANBA DARSLARI",
             editor: "MICH ELBOM",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ONALIK MAQOMI",
             editor: "NOILA XOLMUHAMMAD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHAMO ORTIDAN YUGURIB",
             editor: "XOLID HUSAYNIY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ITYURAK ",
             editor: "MIXAIL BULGAKOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "ERTAGA O'LDIRGANI BORAMAN",
             editor: "ISHMAEL BIX",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JUDA MAYUSSAN",
             editor: "PAK VAN SO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SIDDHARTHA",
             editor: "HERMANN HESSE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAYOTINGIZNI QADRLANG O'ZINGIZNI DAVOLANG",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "SAROB ",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DARYO ORTIDAGI YIG'I",
             editor: "QO'CHQOR NORQULOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MENI UNUTMA SENGA SEVISHNI MEN O'RGATDIM",
             editor: "HAKAN O'ZKAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "KEKSAGANING SO'NGI NISHONI",
             editor: "AKBAR MIRZO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KAPITAN GRANT BOLALARI",
             editor: "JYUL VERN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AMIR TEMUR",
             editor: "MARSEL BRION",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAMMASI YAXSHI BO'LADI",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "XAYYOMDAN BIR KOSA RUMIYDAN BIR JOM",
             editor: "SIROJIDDIN SAIDIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TOM SOYERNING BOSHIDAN KECHIRGANLARI",
             editor: "MARK TVEN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GOBLINLAR QO'RIQXONASI",
             editor: "KLIFFORD SAYMAK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ASROR BOBO",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOSHLIKDA BERGAN KO'NGIL",
             editor: "HABIB NU'MON",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "IZTIROB ",
             editor: "SULAYMON HAYDAR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MIRZO ULUG'BEK",
             editor: "MAQSUD SHAYXZODA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SENI BUGUN KO'RMASAM BO'MAS",
             editor: "IQBOL MIRZO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OLTIN ZANGLAMAS ",
             editor: "SHUXRAT",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HAYOT",
             editor: "GIDE MOPASSAN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HIKOYA,OCHERK VA HAJVIYALAR TO'PLAMI",
             editor: "ABDULLA QODIRIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MENING HAYOTIM ",
             editor: "XENRI FORD",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PANDALAR UCHA OLADI",
             editor: "CANER YAMAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "KATTA TO'RTLIK",
             editor: "SKOTT GELLOEY",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "TEATR",
             editor: "SOMERSET MOEM",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MARTIN IDEN",
             editor: "JEK LONDON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SOMON YO'LI",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JANNATGA MAKTUBNOMA",
             editor: "ADAM UZKUSA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "URISHNING DAVOMI",
             editor: "NABI JALOLIDDIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QIMORBOZ ",
             editor: "FYODOR DOSTOYEVSKIY",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "KUNTUG'MISH",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHINOR",
             editor: "ASQAD MUXTOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TOGLAR OLISDAN KO'RINADI",
             editor: "GULYUZ MIRMUHSIN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HIKOYA VA QISSALAR TO'PLAMI",
             editor: "SHUHRAT",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OTAMDAN QOLGAN DALALAR",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KITOBXON KUNDALIGI",
             editor: "SARDOR MAQAZIYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JANNA DARK",
             editor: "MARK TVEN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DUSHMAN",
             editor: "MURATBOY NIZAMOV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HAYOT-MAMOT",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SIZ NIMANI O'YLASANGIZ MEN O'SHANI KO'RAMAN",
             editor: "JO NAVARRO",
             tili: "LOTIN",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "BEGONA",
             editor: "OTAJON TOGON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "FRANKENSHTEYN",
             editor: "MERI SHELLI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ME'MOR",
             editor: "MIRMUHSIN",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MILLIONERLAR KABI FIKRLANG",
             editor: "XARV EKER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AGAR OSHIQLIGIM AYTSAM",
             editor: "MASHRAB",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ELJERNONZAGA ATALGAN GULLAR",
             editor: "DANIEL KIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NOMUS",
             editor: "ELIF SHAFAQ ",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "KALLAXONALIK YIGITCHA ROMAN",
             editor: "ALISHER MIRZO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TANLANGAN ASARLAR",
             editor: "G'AYBULLOH AS-SALOM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BALIQCHI VA O'G'LI",
             editor: "LIVANELI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ASIRNI QARITGAN KUN",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SALAMADRALAR BILAN JANG",
             editor: "KAREL CHAPEK",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "CHOL VA DENGIZ",
             editor: "ERNEST XEMINGUEY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: " QARZGA OLINGAN UMR",
             editor: "ERIX MARIYA REMARK",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "REWORK PRINSIPLARSIZ BIZNES",
             editor: "MATLUBA RAXMONQULOVA",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "AVLODLAR DOVONI",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAXTLI HAYOT SARI",
             editor: "ZIYOVUDDIN RAXIM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ABDULXAMID SO'NGGI HUKMDOR",
             editor: "OKAY TIRYAKO'G'LI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "O'YIN",
             editor: "XURSHID DO'STMUHAMMAD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JEYN EYR",
             editor: "SGARLOTTA BRONTE",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DIKTATURADAN DIMOKRATYAGA",
             editor: "JIN SHARI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SAHNA SARDORI",
             editor: "X.ABDUSAMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YALONG'OCH IQTISODIYOT",
             editor: "CHARLIZ ULIAN",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "ISHQING TUPROQ QILGAY",
             editor: "UMAR XAYYOM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JOSUSLAR O'YINI ",
             editor: "XUDOYBERDI NAZAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "RAQAMLAR UCHUN YARALGAN IDROK",
             editor: "BARBARA OUKLI",
             tili: "LOTIN",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "TASAVVUFIY HIKOYALAR",
             editor: "GO'ZAL MIRZAALIYEVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TAQDIRINGIZNI BOSHQARING",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "ILOHIYNOMA SAYLANMA 2 ",
             editor: "SHAYX FARIDDIN ATTOR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ZULAYHO DARAXTI",
             editor: "NORMATOV NODIR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ULUG'BEK YULDUZLAR SALTANATI",
             editor: "OTABEK QUVVAT",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ZULMAT ICHRA NUR",
             editor: "MIRKARIM OSIM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHARPALAR SOYASI",
             editor: "AZAMAT KORJOBOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ABADIYAT QONUNI",
             editor: "NODAR DUMBADZE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QISSA,HIKOYA,VA OCHERKLAR TO'PLAMI",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GARRI POTTER VA AZKABAN MAHBUSI",
             editor: "JOANNA KETLIN ROULING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALPOMISH",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SARAFAN MARKETING",
             editor: "ENDI SERNOVIS",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "SIROJIDDIN MAHDUM-SIDQIY XANDAQLIQIY",
             editor: "ASIL ASAD",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NOTANISH ODAM PARIJDA ",
             editor: "UILYAM SOMERSET MOEM",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AJAL BILAN YUZMA-YUZ 2",
             editor: "AKBAR MIRZA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BOLALIK XOTIRALARIM",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QUYOSH QORAYMAS",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "21 KUN ICHIDA BAXTLI BO'LING",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ODAM NECHA MARTA TUG'ILADI",
             editor: "JAHONGIR PIRMUHAMMEDOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NAVOIY",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BIZNES SARGUZASHATLAR",
             editor: "JON BRUSK",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "SO'NA",
             editor: "ETEL LILIAN VOYNICH",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ASKAR BOLA",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MALAZGRITDA JUMA TONGI",
             editor: "YAVUZ BAXODIR O'G'LI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SOYALAR",
             editor: "G'AFUR G'ULOM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HAYOTGA QAYT",
             editor: "GULSEREN BUG'DAYJIO'G'LI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KO'RINMAS ODAM",
             editor: "HERBERT UELLS",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "FARENGEYT BO'YICHA 450 ",
             editor: "REY BREDBERI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ODDIY AYRILIQ",
             editor: "AVAR OBIDJON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YODGOR",
             editor: "G'AFUR G'ULOM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHUM BOLA",
             editor: "G'AFUR G'ULOM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AJAL  CHAQIRIG'I",
             editor: "OZOD MO'MIN XO'JA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JAZOSIZ TARBIYA",
             editor: "ADEM GUNESH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "QUSH QAFASDA QANOT QOQMAYDI",
             editor: "MIRZO KENJABEK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOLG'ONLAR SHAXRI",
             editor: "RAMITA NAVAI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PORTOBELLO JODUGARI",
             editor: "PAULO KOELO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ONANING MEHR NURI",
             editor: "ODILJON MAHMUDOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KUMUSH QASHQA ",
             editor: "ARTUR KONAN DOYL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AMIR TEMUR SALTANATI",
             editor: "LYUSEN KEREN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BEPARVOLIKNING NOZIK SANATI",
             editor: "MARK MENSON",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "YASHIL MILYA",
             editor: "STIVEN KING",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALKIMYOGAR",
             editor: "POULO KOELO",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QO'RQINCHLI TEHRON",
             editor: "MUSHFIQ KOZIMIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "IBTIDO",
             editor: "DEN BRAUN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MITTIVIY VA KARLSON",
             editor: "ASTRID LINDGREN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OSON YASHANG",
             editor: "ENDRYU METYUS",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "TITRAYOTGAN TOG'",
             editor: "LUQMON BO'RIXON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BEGONA VABO",
             editor: "ALBERT KAMYU",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "RUSTAMXOM",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YUSUF VA AHMAD",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BEZORILIK IQTISODIYOTI",
             editor: "ALEKSEY MARKOV",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "MUVAFAQQIYAT KALITI",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "DIQQAT CHALG'ITUVCHI DUNYODA MUVAFAQQIYAT SIRLARI",
             editor: "KEL NYUPORT",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "QALB BESABRLIGI",
             editor: "STEFAN SVEYG",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BORSA KELMASDAN QAYTGANLAR",
             editor: "CHINGIZ ABDULLAYEV",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DAHOLAR DAVRASI",
             editor: "XAMIDJON XOMIDIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ULUG' ONANING JANOZASI",
             editor: "GABRIEL GARSI MARKES",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QALBIM SENI UNUTMAYDI",
             editor: "SEVIM ASIMGIL",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "RAVSHAN",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHINGIZXONING OQ BULUTI",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XAROBADAN CHIQQAN MILLIONER",
             editor: "BIKAS CVARUP",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALKIMYOGAR",
             editor: "PAULO KOELO",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SHAYX NAJMIDDIN KUBRO ",
             editor: "ZAMIRA IS'HOQOVA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YIGIRMA YIDAN SO'NG",
             editor: "O'HENRI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XIYONAT KO'CHASI",
             editor: "GULCHEHRA RAZZOQOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ORZUYINGDAGI BIZNESNI BOSHLASH UCHUN 100 TA ENG ZO'R G'OYA",
             editor: "KEN LANGDON",
             tili: "LOTIN",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "JAZOSIZ TARBIYA 2 ",
             editor: "ADEM GUNESH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "MASGREYVLAR UDUMI",
             editor: "ARTUR KONAN DOYL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PROFESSOR DOELNING BOSHI",
             editor: "ALEKSANDR BELYAYEV",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TURNALAR YO'LI",
             editor: "TURSUN ALI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AZIZIM",
             editor: "GIDE MOPASSAN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ORZIQIB KUTAMAN ERTANI 2",
             editor: "TILLA BEGSHOV  SINDI SHELDON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "12 STUL",
             editor: "I.ILIF E.PETROV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KOMETA",
             editor: "GULNOZ MO'MINOVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HIKOYALAR TO'PLAMI",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "UBAYS QORONIY",
             editor: "RAUF CHILLASIN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SOHIL BO'YLAB CHOPAYOTGAN OLAPAR",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "URISH VA TINCHLIK",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "PARILAR TILSIMI",
             editor: "XAMID ALP",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ATOM ODATLAR",
             editor: "JEYMS KLIR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "1984",
             editor: "JORJ ORUEL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NAVOIY",
             editor: "OYBEK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MOMOQO'SHIQ",
             editor: "NAZAR ESHONQUL",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JANNATGA YO'L HAKIM VA AJAL RANJKOM SOHIBQIRON",
             editor: "ABDULLA ORIPOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GRUZYA MUVAFAQQIYATGA QANDAY ERISHDI",
             editor: "LARISA BURAKOVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAYOLIMGA BO'LAMAN TUTQUN",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHOL HAVOSI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SOG'INCH",
             editor: "FARMON TOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "RIM ERTAKLARI",
             editor: "JANNI RODARI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MENING QO'SHNIM MILLIONER",
             editor: "UILYAM D.DANKO TOMAS DJ.CTENLI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OSVENSIMDAGI TATIROVKACHI",
             editor: "XEZER MORRIS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QISSA,HIKOYALAR TO'PLAMI",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KO'RGIM KELAR SENI NEGADIR",
             editor: "BOBUR BOBOMUROD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XOIN",
             editor: "RAVSHAN YO'LDOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KALILA VA DIMNA",
             editor: "HIND EPOSI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ILIADA",
             editor: "HOMER",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "VENESIYA MISSIYASI",
             editor: "JEYMS HEGLI CHIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "LAYLONING UYI",
             editor: "LIVANELI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QUTLUG'QON",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NAVOIY",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QORA KO'ZLAR",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ICHINDAGI ICHINDADUR",
             editor: "JALOLIDDIN RUMIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KATTA O'YIN",
             editor: "PIRTER XOPKIRK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ORZIQIB KUTAMAN ERTANI ",
             editor: "SIDNI SHELDON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "RUBOIYLAR",
             editor: "UMAR XAYYOM",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOLG'IZLIKNING YUZ YILI",
             editor: "GABRIEL GARSI MARKES",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOSH VRACH KUNDALIGI",
             editor: "MIXAIL BULGAKOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "OLTIN VODIYDAN SHABADALAR",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YAXSHIYAMKI HAYOTIMDA YOQSAN",
             editor: "HAKAN O'ZKAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "CHINOR",
             editor: "ASQAD MUXTOR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JAMILA",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DASHTDAGI OLOV",
             editor: "HABIB ABDUNAZAR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TONGGACHA YASHASA",
             editor: "VASIL VIKOV",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QALBDAGI O'CHMAS IZLAR",
             editor: "ZIKIR MUHAMMADJONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ICHIMIZDAGI MAVLINO RUMIY ",
             editor: "JIHAN O'QUYUJI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'TMISHDAN ERTAKLAR",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SUNBULANING SO'NGI OQSHOMI",
             editor: "SANJAR TURSUNOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ONAIZOR ",
             editor: "ODIL YOQUBOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'TKAN KUNLAR",
             editor: "ABDULLA QODIRIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YULDUZLI TUNLAR",
             editor: "PIRIMQUL QODIROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MEHROBDAN CHAYON",
             editor: "ABDULLA QODIRIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NUR VA SOYALAR ",
             editor: "ROBINDRANAT TAGOR",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OSMONDAN TUSHGAN XAZINA",
             editor: "QUTLIBIKA RAXIMBOYEVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XIYONAT  ",
             editor: "ABROR ZOHIDOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JAYHUN USTIDA BULUTLAR",
             editor: "MIRKARIM OSIM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAXT YETKAZISH MILLIARD DOLLARLIK INTERNET DO'KON TARIXI",
             editor: "TONI SHEY",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "GO'ZAL YENGILDIK",
             editor: "JANER YAMAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "QISSA,HIKOYA VA OCHERKLAR TO'PLAMI",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "METRO",
             editor: "DMIRTIY ALEKSEYVICH GLUXOVSKIY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "BIZ GLINDANI SHUNDAY YAXSHI KO'RAMIZ",
             editor: "XULIO  KORTASAR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAYYOM  ",
             editor: "NABI JALOLIDDIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YEVGENIY ONEGIN ",
             editor: "A.S.PUSHKIN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XUZURSIZLIK",
             editor: "LIVANELI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MILLAT QIZIGA",
             editor: "RAXIMA SHOMANSUROVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JANNAT QIDIRGANLA",
             editor: "SHUHRAT",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MUVAFAQQIYATLI INSONLARNING 7 KO'NIKMASI",
             editor: "STIBEN R.KOVI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AYRILMAS ER",
             editor: "FYODOR DOSTOYEVSKIY",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "OLMOS KAMAR",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHORUH VA GAVHARSHOD",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KECHA VA KUNDUZ",
             editor: "ABDULHAMID CHO'LPON",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BOLALIK XOTIRALARIM",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ERK",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KOD BUZAR",
             editor: "UOLTER AYZEKSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YAPON ZOBITI",
             editor: "ATO XAMDAM,LEONID CHIRIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "UCH O'LIM",
             editor: "LEV NIKOLAYEVICH TOLSTOY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SEMIZ VA ORIQ",
             editor: "anton pavlovich chexov",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YULDUZLI TUNLAR",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHISHA QOLIP",
             editor: "SHAHLO XOSHIMOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QORAQUSH YULDUZINGING SIRI",
             editor: "ISAJON SULTON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MARHAMATLI KUN",
             editor: "LUQMON BO'RIXON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BASKERVILLAR ITI",
             editor: "ARTUR QONAN DOYL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QORA KO'ZLAR",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "PITER PEN",
             editor: "J.M.BARRI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QAYSI BIRIMIZ SEVMAGANMIZ",
             editor: "ETHEM EMIN NEMUTLU",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BAXT SARI TO'RT QADAM",
             editor: "JO VITALE",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SERENADA",
             editor: "LIVANELI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QONLI YO'RGAKLAR",
             editor: "ABDURASHID NURMURODOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HAQIQIY MO'JIZA O'ZINGA ISHONMOQDIR",
             editor: "ETHEM EMIN NEMUTLU",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TOG'LAR HAM SADO BERDI",
             editor: "XOLID XUSAYNIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "VIJDON QO'NG'IROG'I",
             editor: "ASHURALI JO'RAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAXT ORTIDAN QUVIB",
             editor: "KRIS GARDNER,KVINSI TRUP",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OT KISHNAGAN OQSHOM",
             editor: "TO'G'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YO'LGA CHIQSANG MANZIL KO'RINAD",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TANLANGAN ASARLAR",
             editor: "G'OFUR G'ULOM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'ZBEGIM",
             editor: "ERKIN VOHIDOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MEHROBDAN CHAYON",
             editor: "ABDULLA QODIRIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AMERKA FOJIASI 3-KITOB",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HECH BIR UCHRASHUV TASODIF EMAS",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SAVOL ORTIDAGI SAVOL",
             editor: "JON G.MILLER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOLALIK XOTIRALARIM",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AJIB YANGI DUNYO",
             editor: "OLDOS XAKSLI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "FIDOYI",
             editor: "PREMCHAND",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'YINLAR NAZARIYASI",
             editor: "BARRI J.NEYLBAFF, AVINASH DIQSIT",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEROS",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SINCHALAK",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AYOL  ",
             editor: "ZULFIYA QUROLBOY QIZI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QAYDASAN MO'JIZA",
             editor: "ABDUQAYUM YO'LDOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ODAM BO'LISH QIYIN",
             editor: "O'LMAS UMARBEKOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KREYSER SONATASI",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "SARIQ IBLIS",
             editor: "JAHONGIR AYUB",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NAVOIY",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ASRIY AN'ANALAR ASOSIDA TURK OSHXONASI",
             editor: "JAHONGIR ODILOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SUKUNATNING SASSIZ SADOSI",
             editor: "SHERMUROD SUBXON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHE'RLAR TO'PLAMI",
             editor: "ERKIN VOHIDOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "USMON NOSIR",
             editor: "XURSHID SEROBOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAMARQAND OSMONIDA YULDUZLAR 1 KITOB",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MOVIY KARBUNKUL",
             editor: "ARTUR KONAN DOYL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QO'RQUV VODIYSI",
             editor: "ARTUR KONAN DOYL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QO'RQMA",
             editor: "JAVLON JOVLIYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "UYIMIZ JANNATGA AYLANSIN",
             editor: "AXMET BULUT AXMET AKIN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ATOM ODATLAR",
             editor: "JEYMS KLIR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OQ KEMA ",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'ZINGNI QADRLA",
             editor: "ANASTASIYA ZALOGA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QIZIL TOSHBO'RON",
             editor: "NABIJON BOQIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'RIK GULLAGANDA",
             editor: "HAMID OLIMJON",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XAYOTNING ENG BUYUK",
             editor: "RONDA BERN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAYRLISI",
             editor: "ONUR QOPLON",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ORZIQIB KUTAMAN ERTANI",
             editor: "SINDI SHELDON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ZOLIM ISTANBUL",
             editor: "UMIDA ADIZOVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ANNA KARENINA",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MUNGLI KO'ZLAR",
             editor: "XUDOYBERDI TO'XTABOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ALVON YELKANLAR",
             editor: "ALEKSANDR GRIN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DANG'ILLAMA HOVLIDAGI O'LIM",
             editor: "JEYMS HEGLI CHIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEN BOLAMNI URMAYMAN",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "QALBINGIZ SOF BO'SA HIKOYANGIZ BAXTLI YAKUNLANADI",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "AYOL QISMATIDAN QISSALAR",
             editor: "JIN P.SESSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'N SAKKIZGA KIRMAGAN KIM BOR",
             editor: "SHUKUR XOLMIRZAYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "URISHNING SO'NGI QURBONI",
             editor: "O'TKIR HOSHIMOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TALVASA",
             editor: "TOHIR MALIK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'GAY ONA ",
             editor: "AXMAD LUTFI QOZONCHI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QIROLICHANING YURISHI",
             editor: "UOLTER TEVIS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ASR AFSONALARI",
             editor: "ESHQOBIL SHUKUR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DO'ST ORTTIRISH VA ODAMLARGA TASIR O'TKAZISH",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BARCHASI SENGA ATALGAN",
             editor: "ERDOOG'AN YILDIRIM",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "O'TKAN KUNLAR",
             editor: "ABDULLA QODIRIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ALAMLI DUNYODA ALAMLI GULIM",
             editor: "SIROJIDDIN SAIDIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QISSALAR ",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SO'NGGI TO'FON",
             editor: "AXMAD LUTFI QOZONCHI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JAMIL ",
             editor: "MUHAMMAD KABIR UMAR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SHUNCHA SHINGANI KIM YEGAN",
             editor: "PAK VAN SO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SARVQOMAT DILBARIM",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAXSHAT ABDULLA QAHHOR",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "PESHONAMDAGI NUR ",
             editor: "MEHMET OLAQOSH",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QIYOMAT",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BO'STON",
             editor: "SA'DIY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "GO'ZAL YENGILDIK",
             editor: "JANER YAMAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ISTEDODLI INSONLAR MAMLAKATNING BEBAHO BOYLIGIDIR",
             editor: "M.A.RAXMATOV,B.Z.ZARIPOV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XOLDORXON",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MILLION DORLLARLIK XATOLAR",
             editor: "PAVEL ANNENKOV",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KATTA O'YIN",
             editor: "PETER HOPKIRK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OLIGARXNING MEROSXO'RI",
             editor: "CHINGIZ ABDULLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'Z USTINGDA ISHLA",
             editor: "NORBEKOV MIRZAKARIM",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TITRAYOTGAN TOG'",
             editor: "LUQMON BO'RIXON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OSMON OG'USHI",
             editor: "ABDUQAYUM YO'LDOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ASL OTALAR KITOBI",
             editor: "JALOLXON  UMAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ASL OTALAR KITOBI",
             editor: "ULUG'BEK SHARIPOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QAMAL",
             editor: "ISMOIL SHOMURODOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MARHAMATLI KUN",
             editor: "LUQMON BO'RIXON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QORA QUSH YULDUZNING SIRI",
             editor: "ISAJON SULTON ",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KELMASANG HAM KUTAMAN",
             editor: "BERKUTAY SOYSAL",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "YAXSHI OTALAR KITOBI",
             editor: "SARDOR NAZAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BIZNES BU MEN UCHUN",
             editor: "YEVGENIY GENKIN",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "MUVAFAQQIYATLI INSONLARNING 7 KO'NIKMASI",
             editor: "STIVEN R.KOVIY",
             tili: "LOTIN",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "JEYN EYR",
             editor: "SHARLOTTA BRONTE",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ADABIYOT MUALLIMI",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ANOR",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DUNYO BOLALARI",
             editor: "ASQAD MUXTOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'Z FERRARISINI SOTGAN ROHIB",
             editor: "ROBIN SHARMA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ONAIZOR ",
             editor: "MIRMUHSIN",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AMERIKA FOJEASI 1-2 KITOB",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DARDI BEDAVO",
             editor: "NOSIR ZOXID",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHIMOL HIKOYALARI",
             editor: "JEK LONDON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BO'RI BOLALARINI QANDAY O'RGATADI",
             editor: "LEV TOLSTOY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NOTO'G'RI HAYOT TO'G'RI YASHALMAYDI",
             editor: "ATHAM AMIN NEMUTLU",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TAFAKKUR CHASHMASI",
             editor: "SOHIB KAMOL",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ULUG' ONANING JANOZASI",
             editor: "GABRIEL GARSI MARKES",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DUMBUL BOYVACHCHA",
             editor: "D.I.FONBIZIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ORZUDAN TONMAGAYMIZ",
             editor: "ANVAR OBIDJON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DIYONAT",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SO'Z YOLQINI",
             editor: "QOZOQBOY YO'DOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KO'HNA DUNYO ",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHISHA QOLIP",
             editor: "SHAXLO HOSHIMOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ANOR",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AZIZIM",
             editor: "GIDE MOPASSAN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BIR O'ZBEK O'YI",
             editor: "OLIM JUMABOEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KO'KLAM KUYI",
             editor: "FOZIL FARXOD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QUYONLAR SALTANATI",
             editor: "XUDOYBERDI TO'XTABOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BESH BOLALI YIGITCHA",
             editor: "XUDOYBERDI TO'XTABOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SEHRLI OLMOS UZUK",
             editor: "SAYYORA SADULLAYEVA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XIYONAT",
             editor: "ABROR ZOHIDOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GOBLINLAR QO'RIQXONASI",
             editor: "KLIFFORD SAYMAK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AYOL",
             editor: "ZULFIYA QUROLBOY QIZI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ZAMONDOSHLAR XOTIRASIDA",
             editor: "SHUHRAT",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "VIJDON QO'NG'IROG'I",
             editor: "ASHURALI JO'RAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GO'SHTDAN TAYYORLANADIGAN TAOMLAR",
             editor: "SOTIBOLDIYEVA ODINAXON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QADRIM",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHAFTOLI GULI",
             editor: "NAZAR ESHONQUL",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MEROS",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DUSHMAN",
             editor: "MURATBOY NIZAMOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAHOLAR DAVRASI",
             editor: "XAMIDJON XOMIDIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OTAMNING NASIHATI",
             editor: "XAYRULLOH QOSIM ELTURK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ASRNI QARITGAN KUN",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "FARENGEYT BO'YICHA 450 ",
             editor: "REY BREDBERI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALISA KO'ZGUORTI O'LKASIDA",
             editor: "LYUIS KERROLL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BALACHAK",
             editor: "AYBEK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MUROSAYU MADORA",
             editor: "SEMA MARASHLI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "SIZ QO'RQUVDAN KUCHLIROQSIZ",
             editor: "REDJIN GALANTI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'Z FERRARISINI SOTGAN ROHIB",
             editor: "ROBIN SHARMA",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "CHINOR",
             editor: "ASQAD MUXTOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XALOSKOR SULTON SAYFIDDIN QUTUZ",
             editor: "SHAHODAT ULUG'",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TAQDIRINGIZNI BOSHQARING",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ДЕНЬ ПОСЛЕДНИЙ И ПЕРВЫЙ",
             editor: "VIKTOR SUMIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALIFDEK SEVMOQ NAFAS",
             editor: "HIKMAT AMIN USTEKIN",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "OYDINDA YURGAN ODAMLAR",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BO'LADIGAN BOLALAR ",
             editor: "PO'LAT MO'MIN",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SIRLI TABOBAT",
             editor: "ABU ALI IBN SINO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NAJOT",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TIRIK RUHLAR",
             editor: "SHUKRULLO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GO'DAKLIKDAN YIGITLIKKA QADAR",
             editor: "SHENIZ YUJEL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BUXORO TARIXI",
             editor: "ABU BAKR MUHAMMAD IBN JAFAR SHARSHAXIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MASHRAB G'AZALLARI ",
             editor: "MASHRAB",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BARON MYUNXAUZENNING SARGUZASHTLARI",
             editor: "RUDOLF ERIX RASPE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JAYHUN USTIDA BULUTLAR",
             editor: "MIRKARIM OSIM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BO'RONLARDA BORDEK HALOVAT",
             editor: "ASQAD MUXTOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHOL VA DENGIZ",
             editor: "ERNEST XEMINGUEY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PUL OQIMINING KVADRANTI",
             editor: "R.T.KIYOSAKI,SH.L.LECHTER",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "AJIB YANGI DUNYO",
             editor: "OLDOS XAKSLI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TANA VA RUHNI TARBIYALASH",
             editor: "MIRZAKARIM NORBEKOV",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "SOHIBQIRON",
             editor: "ABDULLA ORIPOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QONLI YO'RGAKLAR",
             editor: "ABDURASHID NORMURODOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QO'RQINCHLI TEHRON",
             editor: "MUSHFIQ KOZIMIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DAQIQA QADRI 1",
             editor: "ABDURASUL ABDULLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAQIQA QADRI 2",
             editor: "ABDURASUL ABDULLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAQIQA QADRI 3",
             editor: "ABDURASUL ABDULLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "VAQT BU PUL",
             editor: "BANDJAMIN FARAKLIN",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "GULISTON BO'STON",
             editor: "SADIIY SHEROZIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DIQQAT CHALG'ITUVCHI DUNYODA MUVAFAQQIYAT SIRLARI",
             editor: "KEL NYUPORT",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "REWORK BID'ATLARDAN XOLI BIZNES",
             editor: "DEBIT HANSON JEYSON FRAYT",
             tili: "LOTIN",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "IBTIDO",
             editor: "DEN BRAUN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TENTAKNING TAJRIBASI 1",
             editor: "MIRZAKARIM NORBEKOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHERNOBIL TAVALLOSI",
             editor: "SVETLANA ALIKSEYVICH",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DUNYO MALAKATLARI",
             editor: "BUSHUEVA L",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "BAXTLI BO'LISH SIRLARI ",
             editor: "MIRINAL KUMAR GUPTA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SAVOL ORTIDAGI SAVOL",
             editor: "JON G.MILLER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KO'P NARSADAN BEXABAR EDIM",
             editor: "SONGUL UNSAL",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "INSON QANDAY QILIB O'ZIDA ISHON QABUL QILA BILISHGI VA OMMA OLDIDA GAPIRA TURIB ODAMLARGA QANDA TASIR O'TKAZA BILISHI HAQIDA",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "G'OYIB BO'LGAN ATIRGUL  ",
             editor: "SERDAT O'ZKAN",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "INSON HUSNI",
             editor: "MIRZAKALON ISMOILIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SENI DESALAR YONAR QALBIM",
             editor: "TOZAGUL",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BALOG'AT PILLAPOYALARI ",
             editor: "MANZURA ZAYNUTDINIVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SENI SEVAMAN DEMA ,SEV",
             editor: "MIRACH CHAG'RI OQTOSH ",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "VAQT MASHINASI",
             editor: "HERBERT UELLS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TOM TOG'ANING KULBASI ",
             editor: "GARRIET BICHER-STOU",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OT KISHNAGAN OQSHOM",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KECHA VA KUNDUZ",
             editor: "ABDULHAMID CHO'LPON",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ALVIDO QIROL LYUDOVIK KO'PRIGI ",
             editor: "TORNTON UAYLDER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SEHRGAR VA QASHSHOQ YIGIT",
             editor: "MAHMUD MURODOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "1985",
             editor: "ENTONIY BERJES",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "21 KUN ICHIDA BAXTLI BO'LING",
             editor: "LUIZA XEY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "VAQT DARYOSI",
             editor: "ABDUNABI HAMRO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYLANMA   ",
             editor: "MARHABO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BEDORLIK",
             editor: "ZIYODULLA NURMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TIRIK QOLISH BUYURILGAN",
             editor: "YULIAN CEMYON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KEKSA MERGANNING SO'NGI NISHONI",
             editor: "AKBAR MIRZO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ABADIY ZAMONDOSH",
             editor: "OLIM TOSHBOYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JENNI GERXARDT",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ABADIY ZAMONDOSH",
             editor: "OLIM TOSHBOYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OMMA PSIXOLOGIYASI",
             editor: "GUSTAV LEBON",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "XODIMLARNI TANLASH SANATI",
             editor: "SVETLANA IVANOVA",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: " BLOKCHEYN A DAN Z GACHA",
             editor: "LORAN LELU",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "STIV JOBS BIZNES HAQIDA ",
             editor: "STIV JOBS",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "SIROJIDDIN MAHDUM-SIDQIY XANDAQLIQIY",
             editor: "A.ASIL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AMIR TEMUR",
             editor: "MARSEL BRION",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ODDIY AYRILIQ",
             editor: "ANVAR OBIDJON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NAVOIY",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YAXSHILAR YO'QOLMAYDI YO'QOTILADI",
             editor: "SEDAR ERO'G'LI",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ONG QUDRATI-BOLALR XIZMATIDA",
             editor: "DJ.KEXO N.FISHER",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "24 SOATDA SHAXMAT O'RGANISH",
             editor: "JUJA POLGAR,POL TRUONG,LESLI GORVIS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "EIPLAR",
             editor: "G'AFUR G'ULOM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HA,YO'Q,HECH QACHON",
             editor: "ERKIN SIDDIQOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "VOZ KECH VA TINCHLAN",
             editor: "ADEM GUNESH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "UOLL-CTRITLIK BO'RI USLUBI",
             editor: "JORDAN BELFORT",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HIKOYALAR  ",
             editor: "JEK LONDON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BIR VIJDON UYG'ONUR ",
             editor: "AXMAT LUTFIY QOZONCHI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DASHTDAGI OLOV",
             editor: "HABIB ABDUNAZAR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BEKLAR VABEKAJONLAR",
             editor: "TOHIR MALIK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ROBERT KIYOSAKI MAKTABI",
             editor: "LARISA BAZAROVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "STRESSDAN EMLANISH ",
             editor: "VALERIY SINELNIKOV",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "YEVGENIY ONEGIN ",
             editor: "A.S.PUSHKIN",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "MUMU",
             editor: "IVAN TURGENEV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "IKKI ESHIK ORASI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QIZIL AJDARHO",
             editor: "TOMAS HARRIS",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALVIDO,GULSARI",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AXMOQLIK QILMANG",
             editor: "JEN SINSSERO",
             tili: "KRILL",
            turkum: "PSIXOLOGIK BADIIY ADABIYOT"
            },
            {
             name: "YASSAVIY BOBO HIKOYALARI",
             editor: "HAYATE BIJE",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DANGASA ONANING KATTA KITOBI ",
             editor: "ANNA ALEKSANDROVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "UMR MAVSUMI",
             editor: "JIM RON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOLALAR TAFAKKUR QUDRATI",
             editor: "JON KIXO NENSI FISHER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SHIFOBAXSH DASTURXON",
             editor: "KAMOLA SODIQOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TASAVVUFIY HIKOYALAR",
             editor: "G.MIRZAYEVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BO'TAKO'Z",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NEGA ODAM",
             editor: "BAHODIR NURMUHAMMAD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QULAYOTGAN TOG'LAR",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QIYOMAT QARZ",
             editor: "O'LMAS UMARBEKOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOGA",
             editor: "RAVSHAN MAMADALIYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SO'NGI DENGIZGACHA",
             editor: "VASILIY YAN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KO'ZIDIN BOSHDA HAVODUR",
             editor: "ZAHIRIDDIN MUHAMMAD BOBUR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYLANMA   ",
             editor: "MARHABO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BU DUNYODA O'LIB BO'LMAYDI",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DUNYO MAMLAKATLARI",
             editor: "LAZIZ RAXMATOV",
             tili: "KRILL",
            turkum: "IQTISODIY BADIIY"
            },
            {
             name: "GRAF MONTE KRISTO IF QALASI MAHBUSI",
             editor: "ALEKSANDR DYUMA",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KASAL BO'LMAY DESANGIZ ",
             editor: "POL BREGG",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BIR KUNDA INQILOB",
             editor: "JUNAYD SUAVI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HAYOTNING BESH TORTIG'I",
             editor: "MARK TVEN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QAYIQDAGI UCH OVLON IT HISOBGA KIRMAYDI",
             editor: "JERONM KLAPKA JEROM",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "CHOLIQUSHI",
             editor: "RASHOD NURI GUNTEKIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "JANNATI ODAMLAR",
             editor: "XUDOYBERDI TO'XTABOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OQSHOM FOJEASI",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BALIQ BITMAS BOYLIK",
             editor: "DAVRON NIYOZOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SOHIL BO'YLAB CHOPAYOTGAN OLAPAR",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JAMILA",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOLG'ONCHINING ROST GAPI",
             editor: "SADULLA SIOEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AMIR TEMUR SALTANATI",
             editor: "LYUSEN KEREN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ODAM BO'LISH QIYIN",
             editor: "O'LMAS UMARBEKOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MARKAZLASHMAGAN DASTURIY ILOVALAR ",
             editor: "SIRAJ RAVAL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "UYQU ISTAGI",
             editor: "ANTON CHEXOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "GONGKONGDAN KELGAN TOBUT",
             editor: "JEYMS CHIYZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MENI KUCHKIROQ SEV",
             editor: "SYU JONSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ZULAYHO DARAXTI",
             editor: "NODIR NORMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KAMON YO'LI",
             editor: "PAULO KOELO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MENING KO'NGLIM BIR QUSHDIR",
             editor: "AYDIN XIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "RITA XEYVORT YOXUD SHOUSHENKDAN QOCHISH",
             editor: "STIVEN KING",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QUG'U OROLIDAN MUJDA",
             editor: "G'OYIB NAZAR",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BAXTLI OILA  QURISHNING 5 QOIDASI",
             editor: "S.BOZOROVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TINHLA BULBUL",
             editor: "ZULFIYA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SARIQ DEVNI O'LIMI",
             editor: "XUDOYBERDI TO'XTABOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SALAMADRALAR BILAN JANG",
             editor: "KAREL CHAPEK",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "LIDER SHAXSIYATI",
             editor: "BRAYAN TREYSI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YEVGENIY ONEGIN ",
             editor: "A.S.PUSHKIN",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "SINCHALAK",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ISHON:ALBATTA, BAXTLI BO'LAMIZ",
             editor: "EZGIN KILICH",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TABIATNING O'ZI TABIB",
             editor: "ABDUXALIL YO'LDOSHEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'LIMDAN KEYINGI HAYOT",
             editor: "RAYMOND MOUDI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ODAMLAR O'YNAYDIGAN O'YINLAR",
             editor: "ERIK BREYN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BALOYI NAFS",
             editor: "VLADIMIR KUNIN",
             tili: "KRIIL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TO'Y SOVG'ASI",
             editor: "GI DE MOPASSAM",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AMERIKA FOJEASI  3-KITOB",
             editor: "TEODOR DRAYZER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SARAFAN MARKETING",
             editor: "ENDI SERNOVIS",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MALAZGIRTDA JUMA TONGI",
             editor: "YAVUZ BAXODIR O'G'LI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "MUNOJOT",
             editor: "TOXIR MALIK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SARALANGAN ISMLAR MA'NOSI",
             editor: "Z.XAMDAMOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QAY BIRIMIZ SEVMAGANMIZ?",
             editor: "ETHEM EMIN NEMUTULU",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "HIKMATLAR",
             editor: "KONFUTSIY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "FERRARISINI SOTGAN ROHIB ",
             editor: "ROBIN SHARMA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAYOTINGIZNI BARBOD QILADIGAN 20 TA XATO",
             editor: "MAYKL ROUCH,MIRZAKARIM NORBEKOV",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OQ KEMA ",
             editor: "CHINGIZ AYTMATOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XUZURSIZLIK",
             editor: "LIVANELI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YUQUMLILIK MAXSULOT VA G'OYALAR QANDAY OMMALASHADI",
             editor: "YONA BERGER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOKI",
             editor: "GO'ZAL BEGIM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AVLIYO QIROL LYUDOVIK KO'PRIGI",
             editor: "TORNTON UAYLDER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MUHABBATNING 10 TA SIRI",
             editor: "ADAM JEKSON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KAKTUSLAR HAM GULLAYDI",
             editor: "SONGUL UNSAL",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "QUTADG'U BILIG",
             editor: "YUSUF XOS HOJIB",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAXTLI TURMUSH UCHUN OLTI MAKTUB",
             editor: "MUSTAFA KARATASH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "NAVOIY",
             editor: "XAYRIDDIN SULTON",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "RAQIBLAR,OQ KEMA",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BIR ISTAGINGIZ RO'YOBGA CHIQSA, BIR XAYR- RO'YOBGA CHIQMASA, MING XAYR IZLANG",
             editor: "XAKAN MENGYUCH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "PROFESSOR DOUELNING BOSHI",
             editor: "ALEKSANDR BELYAYEV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: " YOLLANMA ISHCHINING TADBIRKORGA AYLANISHI",
             editor: "ROBERT KIOSAKI,SHERON LEKTOR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BIRINCHI TEZ YORDAM",
             editor: "Y.TOLIPOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAXT VA BOYLIKKA ERISHISHNING YETTI USULI",
             editor: "JIM RON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PUL OQIMINING KVADRANTI",
             editor: "P.T KIOSAKISH.SH.L LECHTER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SIRLI XILQAT",
             editor: "ANTON CHEXOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "XAYOLIDA GO'ZAL QOL",
             editor: "HALIS KARABENLI",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TURK HIKOYALARI",
             editor: "UMAR SAYFIDDIN",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TEMURIY MALIKALAR",
             editor: "TURG'UN FAYZIYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "EY, QIZIM",
             editor: "ALI TANTOVIY",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "IQRORNOMA",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "UMIDLAR INTIHODA O'LADI",
             editor: "VORIS",
             tili: "KRILL",
            turkum: "OZARBAYJON ADABIYOTI"
            },
            {
             name: "AQL VITAMINLARI",
             editor: "JIM RON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALVIDO, QUROL",
             editor: "E.M. HEMINGUEY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NUR VA SOYALAR ",
             editor: "ROBINDRANAT TAGOR",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SAYLANMA   ",
             editor: "MARHABO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OILA SAODAT MASKANI",
             editor: "SHAYX YUSUF XATTOR MUHAMMAD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NOTIQLIK SANATI",
             editor: "ILXOM KAXXOROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XAYOTIMNI O'ZGARTIRGAN OLOV",
             editor: "MAXMUD OLAQOSH",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "MUHABBAT ANATOMIYASI",
             editor: "MUHAMMAD BUZDAG'",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "GRAF MONTE KRISTO IF QALASI MAHBUSI II TOM",
             editor: "ALEKSANDR DYUMA",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O DAN BOSHLANGAN BIZNES",
             editor: "ERIK RIS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AL-KARNAKU KEMASIDAGI QOTILLIK",
             editor: "AGATA KRISTI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ODAM BO'LISH QIYIN",
             editor: "O'LMAS UMARBEKOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OSHIQLIK",
             editor: "CHORSHAMI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "PUL TOPISHNING ULKAN SIRLARI",
             editor: "JO BITALE",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OYNANING AKSI",
             editor: "DILDORAXON ALIYEVA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALFIDO",
             editor: "ONUR QOPLON",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "100 MUMTOZ FAYLASUF",
             editor: "SAIDA JO'RAYEVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYLANMA ",
             editor: "ABDULLA ORIPOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TENTAKNING TAJRIBASI 2",
             editor: "MIRZAKARIM NORBEKOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TUTASH OLAMLAR",
             editor: "XOJIAKBAR SHAYXOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MASHRAB G'AZALLARI ",
             editor: "SHARIF XOLMUROD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ELJERNONZAGA ATALGAN GULLAR",
             editor: "DENIEL KIZ",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NIYATNING KUCHI",
             editor: "VALERIY SINELNIKOV",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "QUTLUG'QON",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ILLADA",
             editor: "HOMER",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SHAXDAM QADAMLAR SEHRI",
             editor: "SHERZOD HIKMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KALLAXONALIK YIGITCHA ROMAN",
             editor: "ALISHER MIRZO",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DOVON",
             editor: "ISOKJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHAMOL ORTIDAN YUGURIB ",
             editor: "XOLID XUSAYNIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SHOX ABBOSNING QILICHI",
             editor: "XASAN AZIZ",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QORAQUSH YULDUZINGING SIRI",
             editor: "ISAJON SULTON ",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHAYON",
             editor: "SHONIYOZ MELIBOYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "200 HAYOT DARSI ",
             editor: "ROBIN SHARMA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MIRZATERAK",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ПОЧЕМУ МЫ СТАРЕМ",
             editor: "CHERNISH P.P",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "QIZIL VA QORA",
             editor: "MARI-ANRI-BEYL STENDAL",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HALIMA XUDAYBERDIYEVA",
             editor: "G'AYRAT MAJID",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "FUZULIY",
             editor: "MIRZO KENJABEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ASQAD MUXTOR",
             editor: "IKROM ISKANDAR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MASHRAB",
             editor: "MIRZO KENJABEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TURKIY GULISTOIN YOXUD AXLOQ",
             editor: "ABDULLA AVLONIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYLANMA",
             editor: "MUHAMMAD YUSUF",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OILADA SEVGI SUXBATLARI",
             editor: "SABOXAT BOZOROVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BIZNI YOD ETSALAR ",
             editor: "MUXIDDIN OMON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "IZTIROB ",
             editor: "SULAYMON HAYDAR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TENTAKNING TAJRIBASI 5",
             editor: "MIRZAKARIM NORBEKOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DILDAGI DUR",
             editor: "TURSUNOY SODIQOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HAMMA XATO QILADI",
             editor: "TOXIR TO'LQIN O'G'LI, NARGIZAMAXMUD QIZI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YODGOR",
             editor: "G'AFUR G'ULOM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ME'MOR",
             editor: "MIRMUHSIN",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OYDINDA YUGAN ODAMLAR",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TO'SIQLARGA QARAMAY SEVDIK",
             editor: "MIRACH CHAG'RI OQTOSH ",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "SAMODA CHAQNAGAN YULDUZ",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAMODA CHAQNAGAN YULDUZ",
             editor: "ISOQJON NISHONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "VAYKOFF USULI",
             editor: "JEK.K.XATSON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KO'NGIL POYTAXTI",
             editor: "JO'RABEK JAXON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GO'ZAL YENGILDIK",
             editor: "JEYNER YAMAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "KUNTUG'MISH",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BASKERVILLAR ITI",
             editor: "ARTUR KONAN DOYL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SALTANATLAR JANGI",
             editor: "IXIYOR ESONOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XAYOLLARGA BO'LAMAN TUTQUN",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAXTNI YO'QOTGAN JOYDAN IZLAMANG",
             editor: "BEYHAN BUDAK",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "IKKI KARRA IKKI BESH",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "NURLI HALQACHALAR",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ORAZIN YOPQACH KO'ZUMDIN",
             editor: "ALISHER NAVOIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAQIQA QADRI",
             editor: "ABDURASUL ABDULLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHAXMAT SABOQLARI",
             editor: "MAMATQUL XAYLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHINOR",
             editor: "ASQAD MUXTOR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "RAVSHAN",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ABDULLA QODIRIY VA SANOIY NAFISA",
             editor: "HAMIDULLA AKBAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ASKAR ONASI",
             editor: "ISOQJON NISHONOV",
             tili: "KRIILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHAMOL ESAVERADI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHO'L HAVOSI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAFTAR HOSHIYASIDAGI BITIKLAR",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'ZBEKLAR",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OT KISHNAGAN OQSHOM",
             editor: "TOG'AY MUROD",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YO'LDAN TOPGANLARIM",
             editor: "RAZZOQ ABDURASHID",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OSMONDAN TUSHGAN PUL",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ASRNI QARITGAN KUN",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QAYNONA",
             editor: "AHMAD LUTFIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BO'TAKO'Z",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OTA IZIDAN",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MING QUYOSH SHULASI",
             editor: "XOLID XUSAYNIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OLMOS KAMAR",
             editor: "PIRIMQUL QODIROV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MENINGBHAYOTIM",
             editor: "XENRI FORD",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "CHINGIZXON VA AMIR TEMUR KO'RAGON",
             editor: "IVANIN.M",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ME'MOR",
             editor: "MIRMUHSIN",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHOL VA DENGIZ",
             editor: "ERENEST HMEINGUVAY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MUHABBAT SEN CHIROYLISAN",
             editor: "SANJAR TURSUNOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DUNYONING ENG BUYUK SAVDOGARI",
             editor: "OG MANDINO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BETASHVISH YASHASH SIRLARI",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MALIKA AYYOR",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOLG'IZLIKNING YUZ YILI",
             editor: "GABRIYEL GARTSIA MARKES",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MESHPOLVON JANGGA OTLANDI",
             editor: "ANVAR OBIDJON",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SO'QQABOSH BEVAGINA",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "FARZAND TARBIYASI",
             editor: "ZEBINISO AHMEDOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AJDAR TAVBASI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OYGA OSILGAN BAYROQ",
             editor: "MUHAMMAD ISMOIL",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "LATTE OMILI",
             editor: "DEVID BAX",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HAYOTNING ENG BUYUK SIRI",
             editor: "RONDA BERN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEN ANGLAGAN HAYOT",
             editor: "JEK LONDON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SEHLI KUCH ",
             editor: "RONDA BERN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NUR BORKI SOYA BOR",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "DAVRIM VA DAVRAM",
             editor: "MARYAM YOQUBOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ANOR",
             editor: "ABDULLA QAHHOR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ROBINZON KRUZONING HAYOTI VA AJOYIB SARGUZASHTLARI",
             editor: "DANIYEL DEFO",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KICHIK BIZNESDAN KATTASIGA II KITOB",
             editor: "ROBERT KIOSAKI,SHERON LEKTOR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "UMR SAVDOSI",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KO'XNA DUNYO",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MAQTANCHOQ SHOGIRT",
             editor: "Z.UMAROV TARJIMASI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ENG AQILLI MASLAHAT",
             editor: "MUHSIN ALIYEV TARJIMASI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ALYORIM QOLUR",
             editor: "MUHAMMAD YUSUF",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GALLAKTIKADA BIR KUN I KITOB",
             editor: "SA'DULLA QURONOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KALILA VA DIMNA",
             editor: "HIND EPOSI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOLALIK XOTIRALARIM",
             editor: "OYBEK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOLG'ONLAR SHAXRI",
             editor: "RAMITA NAVAI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "VAVILONDAGI ENG BOY ODAM",
             editor: "JORJ KLEYSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "NOMUS VA HAYOT",
             editor: "XOLIYOR SAFAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JELSOMINO YOLG'ONCHILAR MAMLAKATIDA",
             editor: "JANNI RODARI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HUKUMDOR",
             editor: "NIKKOLO MAKIAVELLI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ZUKKOLAR VALANDAVURLAR",
             editor: "MALKOLM GLADUELL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ADOLAT MANZILI",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QALB HALOVAT TOPMASA",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOY OTA VA KAMBAG'AL OTA",
             editor: "ROBERT KIOSAKI,SHERON LEKTOR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BOY BOLA VA AQILLI BOLA",
             editor: "ROBERT KIOSAKI,SHERON LEKTOR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TONG VA SHOM ORASIDA",
             editor: "BOBO RAVSHAN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BUYURMAGAN BOYLIK",
             editor: "ABDURAHMON JO'RAYEV RUS TILIDAN TARJIMA",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MASHHURLARNING SO'NGGI MANZILLARI",
             editor: "KOMIL.MUHAMMAD, ELMIRA.M TARJIMASI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KUNCHIQAR MAMLAKAT HIKOYALARI",
             editor: "QUDRAT DO'STMUHAMMAD TARJIMASI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ILOHIY DONISHMAND LAO -TZEY HIKMATLARI",
             editor: "L.N.TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "ONAIZOR ",
             editor: "ODIL YOQUBOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAZILAR OLISDAN SEVARLAR",
             editor: "HALIS KARABENLI",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "DUMALOQ XAT",
             editor: "MAHMUD BO'RON RUS TILIDAN TARJIAMSII",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "BIZ GLENDANI SHUNDAY YAXSHI KO'RAMIZ",
             editor: "XULIO  KORTASAR",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MIRZO ULUG'BEK",
             editor: "MAQSUD SHAYXZODA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YETTI YILLIK SEHR",
             editor: "MUXSIN ALIYEV RUS TILIDAN TARJIMASI",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "XAMMASI RASVO",
             editor: "MARK MENSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SAYYORAMIZ HAYVONAT OLAMI:QUSHLAR",
             editor: "SHUXRAT MIRFAYZOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: " 2023 YIL: INSONGA E'TIBOR SIFATLI TA'LIM YILI",
             editor: "SHAVKAT MIRZIYOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYYORAMIZ HAYVONAT OLAMI:SUTEMIZUVCHILAR",
             editor: "SHUXRAT MIRFAYZOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MUKOFOTGA KIM MUNOSIB",
             editor: "RUS TILIDA AYNIDDIN ZAYNIDDINOV TARJIMASI",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "TOM SOYERNING BOSHIDAN KECHIRGANLARI",
             editor: "MARK TVEN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QAHRAMON",
             editor: "RONDA BERN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MUXABBAT KITOBI",
             editor: "SALIM ASHUR",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHOQINTIRGAN OTA YOKI MAFIYA SARDORI",
             editor: "MARIO PYUZO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MUMKIN EMAS SENING YIG'LASHING",
             editor: "G'AYRAT MAJID",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JAYHUN USTIDA BULUTLAR",
             editor: "MIRKARIM OSIM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ANNA KARENINA",
             editor: "LEV TOLSTOY",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "DOKTOR MORO OROLI",
             editor: "ROBERT UELLS",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PUL ALIFBOSI",
             editor: "BODO SHEFER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'YLA VA BOY BO'L",
             editor: "NAPALEON XILL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'YLA VA BOY BO'L",
             editor: "NAPALEON XILL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TO'Y MUBORAK YOR-YOR",
             editor: "OXUNJON SAFAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "IKKI KARRA IKKI BESH",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHUM BOLA",
             editor: "G'OFUR G'ULOM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YOVVOYI YO'RG'A",
             editor: "ERNEST SETON TOMSON",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TELBA",
             editor: "FYODR DASTAEVSKIY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "NIKOHIMNI ASRAY OLAMAN",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "LKRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "CHINGIZXONNING OQ BULUTI",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TO'MARIS",
             editor: "MIRKARIM OSIM",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "UMIDNING BESHINCHI MAVSUMI",
             editor: "SONGUL UNSAL",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ABULFAYZXON",
             editor: "ABDURAUF FITRAT ",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "O'N BESH YOSHLI MILLIONER",
             editor: "XUDOYBERDI TO'XTABOYEV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "RUSTAMXON",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHO'QINTIRGAN OTA 2 SITSILYALAIK",
             editor: "MARIO PYUZO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ASKAR BOLA",
             editor: "CHINGIZ AYTMATOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SEN KETGANINGDAN KEYIN",
             editor: "EZGIN KILICH",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TO'YDAN KEYIN HAM MUXABBAT BO'LSIN",
             editor: "SEMA MARASHLI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "SEVMOQ SHUNCHALAR GO'ZAL BO'LSA",
             editor: "SEMA MARASHLI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "TANISHISHNI UNUTIBMIZ",
             editor: "SEMA MARASHLI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "QANDAY QILIB AQILLI SOG'LOM VA BOY BO'LISH MUMKIN",
             editor: "RENDIY GEYCH",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "AHI VA INOQ, FARZANDLAR TARBIYALASH SAN'ATI",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "QALBIM SENI UNUTMAYDI",
             editor: "SEVIM ASIMGIL",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "IKKIMIZ HAQIMIZDA SO'ZLAB BER MENGA",
             editor: "AHMED BATMAN",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "RUHIYAT ALIFBOSI",
             editor: "BAHODIR KARIM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KONFUTSI",
             editor: "K.M.KARIAGIN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BAXT ORTIDAN QUVIB",
             editor: "KRIS GARDNER,KVINSI TRUP",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "G'OLIBLIK QONUNIYATLARI",
             editor: "BODO SHEFER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOZGI KUYLAKDAGI QIZLAR",
             editor: "IRVING SHOU",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "PORTEBELLO JODUGARI",
             editor: "PAULO KOELO",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KO'RINMAS ODAM",
             editor: "GERBERT UELLS",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MOLXONA",
             editor: "JORJ ORUELL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "EZOP MASALLARI",
             editor: "EZOP",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "BEPARVOLIKNING NOZIK SANATI",
             editor: "MARK MENSON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OYBEGIM MENING",
             editor: "ZARIFA SAIDNOSIROVA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BASKERVILLAR ITI",
             editor: "ARTUR KONAN DOYL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MUVOFFAQIYAT SIRLARI",
             editor: "FRENK BETTJER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KAMETA",
             editor: "GULNOZ MO'MINOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SOG'LOM YURAK",
             editor: "POL BREGG",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KAPITAN GRANT BOLALARI",
             editor: "JYUL VERN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "G'IRA-SHIRA SHOMDAN OPPOQ TONGGACHA",
             editor: "MUBORAK FOZILOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BIR KO'ZLI QIROL YOKI SAYOHAT BOSHLANADI",
             editor: "OLGA LISENKO",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "BIR O'ZBEK O'YI",
             editor: "OLIM JUMABOYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "KAKKU OVOZI",
             editor: "BIBI ROBIYASAIDOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HAYOLIMDA ASRAGANIM",
             editor: "SALIM ABDURAHMON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "GEKLBERRI FINNING BOSHIDAN KECHIRGANLARI",
             editor: "MARK TVEN",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "KANIZAK IZAURA",
             editor: "BERNARDO GIMARAENS",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OMADLI FOLBIN",
             editor: "ABDUG'ANI XUSANOV TARJIMASI RUS TILIDAN",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "AYTILMAGAN TUSH",
             editor: "MIRMUHSIN ALIYEV TARJIMASI RUS",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "IZQUVAR PUARO",
             editor: "AGATA KRISTI",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "SOHIBQIRON",
             editor: "ABDULLA ORIPOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BAQIRMAYDIGAN BOLALAR",
             editor: "XADICHA KUBRO TONGAR ",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "HAYOT YUTQAZGAN JOYINGDAN BOSHLANADI",
             editor: "MIRACH CHAG'RI OQTOSH ",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MEHROBDAN CHAYON",
             editor: "ABDULLA QODIRIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "POZETIVIZM VA ZAMONAVIY XITOY FALSAFASI",
             editor: "YANG GUORONG",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "O'ZINGA NISBATAN ISHONCHNI KUCHAYTIRISH VA OMMA OLDIDA CHIQISHLAR ORQALI ODAMLARGA TA'SIR KO'RSATSIH HAQIDA",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "MEDITATSIYA DARSLARI",
             editor: "MUHAYYO RIXSIBEKOVA TARJIMAON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "HOJIMUROD",
             editor: "LEV TOLSTOY",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "DARYO ORTIDAGI YIG'I",
             editor: "QO'CHQOR NORQULOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QORA KO'ZLAR",
             editor: "PRIMQUL QODIROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JOSUSLAR",
             editor: "XUDOBERDI NAZAROV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MILLONER KABI FIKIRLANG",
             editor: "ZARINA TOJIYEVA TARJIMON",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "XAMSA",
             editor: "ALISHER NAVOIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BEZOVTALIKDAN QANDAY QUTILIB YASHASH MUMKIN",
             editor: "DEYL KARNEGI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "G'OLIBA",
             editor: "GO'ZALOY COLIX QIZI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TASHVISHI YO'Q ODAMLAR",
             editor: "NURILLA CHORI",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SUNBULANING SO'NGI OQSHOMI",
             editor: "SANJAR TURSUNOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "XAYOLIMDA ASRAGANIM",
             editor: "SALIM ABDURAHMON",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "YURAKNING BIR CHETI",
             editor: "JASUR KENGBOYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "QOBUSNOMA",
             editor: "KAYKOVUS",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "RUBOIYLAR",
             editor: "UMAR XAYYOM",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AMIR TEMUR. SAMARQAND OSMONIDA YULDUZLAR. 1-KITOB",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "AMIR TEMUR. SAMARQAND OSMONIDA YULDUZLAR. 1-KITOB",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "YILDIRIM BOYAZID. SAMARQAND OSMONIDA YULDUZLAR. 3-KITOB",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "SAFAR GULXANLARI. SAMARQAND OSMONIDA YULDUZLAR.2-KITOB",
             editor: "SERGEY BORODIN",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "BIZ BAXTLI BO'LAMIZ",
             editor: "MUHAMMAD YUSUF",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ALVIDO BOLALIK",
             editor: "TOXIR MALIK",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "PANDALAR UCHA OLADI",
             editor: "JANER YAMAN",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "ONALIK MAQOMI",
             editor: "NOILA HOLMUHAMMAD",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SONATA TILSIMI",
             editor: "LEV TOLSTOY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "FANTOM OG'RIG'I",
             editor: "MARZIYA SAYDAM",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "SHER YIGIT",
             editor: "NURIDDIN ISMOILOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "HANNA",
             editor: "BAXODIR YANGISHAHARLIKO'G'LI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "OCHLIK MO'JIZASI",
             editor: "BREGG KOLL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "OLDINIGGA HAMMA QOIDALARNI BUZING",
             editor: "MARKUS BEKINGEL, KURT KOFFMAN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "ODAM BO'LISH QIYIN",
             editor: "O'LMAS UMARBEKOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SHUXRATPARSTLIK VA RIYO",
             editor: "IMOM G'AZZOLIY",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JAVDARZORDAGI XALOSKOR",
             editor: "JEROM SELINJER",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "URUSHNING DAVOMI",
             editor: "NABI JALOLIDDIN",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SOG'LOM BO'LAY DESANGIZ",
             editor: "RAVSHAN MAMADALIYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AGAR FARZAND BILAN MUSHKULLIK BO'LSA",
             editor: "LYUDMILA PETRANOVSKIY",
             tili: "KRILL",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "TEMUR TUZUKLARI",
             editor: "AMIR TEMUR",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "OMAD VA BAXTGA SAYOXAT",
             editor: "KIM RONN",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
                name: "SIMOBDEV",
                editor: "U. SOBIROV",
                tili: "Xorazmiy",
                turkum: "UTOPIYA"
             },
            {
             name: "KECHINMALAR I-KITOB",
             editor: "JUNAYD SUAVI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "KECHINMALAR 2-KITOB",
             editor: "JUNAYD SUAVI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "KECHINMALAR 3-KITOB",
             editor: "JUNAYD SUAVI",
             tili: "KRILL",
            turkum: "TURK ADABIYOTI"
            },
            {
             name: "GO'RO'GLI",
             editor: "XALQ OG'ZAKI IJODI",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "CHOL VA DENGIZ",
             editor: "ERNEST HEMINGUVAY",
             tili: "LOTIN",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DUNYONING KICHIK ATLASI",
             editor: "N.V.VALIYEVA",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SUDXO'RNING O'LIMI",
             editor: "SADRIDDIN AYNIY",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "MO'JIZA SODIR BO'LMAYDI",
             editor: "LI MYON BAK",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "QANDAY BUYUK BO'LISHGAN",
             editor: "SAD SAUD AL KARIBONIY",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "TIRIKLIK SUVI",
             editor: "TOXIR MALIK",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "AYOL BAXTI",
             editor: "LORA DOYL",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "YOSH VRACH KUNDALIGI",
             editor: "MIXAYL BULGAGOV",
             tili: "LOTIN",
            turkum: "RUS ADABIYOTI"
            },
            {
             name: "TILSIMLI SHAXMAT",
             editor: "AGATA KRISTI",
             tili: "KRILL",
            turkum: "JAHON ADABOYOTI"
            },
            {
             name: "DUNYONING ISHLARI ",
             editor: "O'TKIR HOSHIMOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "BIR JAMOA BIR ORZU",
             editor: "MAHMUD NURULLAYEV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "SAYYORAMIZ HAYVONOT OLAMI:SUDRALIB YURUVCHILAR",
             editor: "SHUXRAT MIRFAYZOV",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "TILLA UZUK",
             editor: "ODIL YOQUBOV",
             tili: "LOTIN",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "JODUGAR YOXUD 1000 YILLIK HAYOT",
             editor: "NODIRABEGIM IBROHIMOVA",
             tili: "KRILL",
            turkum: "O'ZBEK ADABIYOTI"
            },
            {
             name: "ABDULXAMIDXON",
             editor: "TALHA UG'URLUEL",
             tili: "LOTIN",
            turkum: "TURK ADABIYOTI"
            }
           ,
              {
               name: "BUDJET HISOBI ",
               editor: "MUHAMMADYOQUB OSTONQULOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMETRIKA 1",
               editor: "G.NASRITDINOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BOSHQARUV HISOBI ",
               editor: "B.A.XASANOV,A.A.XASHIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BOSHQA TARMOQLARDA BUXGALTERYA HISOBINING XUSUSIYATLARI ",
               editor: "K.B.URAZOV, S.V.VAXIDOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "XALQARO IQTISODIYOT ",
               editor: "Q.A.ISAEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ЭКОНОМЕТРИЧЕСКОЕ МОДЕЛИРОВАНИЕ ",
               editor: "ABDULLAYEV A.M, DJAMALOV M.C",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ ФИНАНСОВОЙ  ",
               editor: "HENNI VAN GREUNING",
               tili: "KRILL",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "BYUDJET HISOBI  VA NAZORATI ",
               editor: "QO'ZIYEV ISLOMJON NEMATOVICH , G'ANIYEV SHAHRIDDIN VOHIDOVICH , RAMAZONOV AKMAL SAMADOVICH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMETRIKA AMALIY MASHG'ULOT ",
               editor: "I.HABIBULLAYEV, A.JUMAYEV ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY VA BOSHQARUV HISOBI FANIDAN MASALALAR TO'PLAMI",
               editor: "A.SH.KULIBAEV, X.N.ISKANOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY HISOBOTNING XALQAROSTANDARTLARI ",
               editor: "E.T.ERGASHEV , A.K.IBRAGIMOV,N.K.RIZAYEV,I.R.IBRAGIMOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "JAHON IQTISODIYOTI  VA XALQARO IQTISODIY MUNOSABATLAR ",
               editor: "N.S.ISMAILOVA , U.USHAGAZATOV ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMETRIKA ",
               editor: "B.YU.XODIYEV , T.SH.SHODIYEV , B.B.BERKINOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "GLOBAL IQTISODIYOT RIVOJLANISHI ",
               editor: "B.E.MAMARAXIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "EKONOMETRIKA ",
               editor: "SH.I.MUSTAFAKULOV , J.B.NEGMATOV , B.R.JO'RAYEV ",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "BOSHQA TARMOQLARDA BUXGALTERYA HISOBINING XUSUSIYATLARI ",
               editor: "M.B.KALONOV,A.T.MAXKAMBOYEV,F.T.TEMIROV ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "INVISTITSIYALAR VA INNOVATSIYALAR ",
               editor: "B.OCHILOV ,J.BUTAYEV ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMETRIKA 2 ",
               editor: "D.K.ABDULLAYEVA , R.X.ALIMOV,A.I.ISHNAZAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BYUDJET TASHKILOTLARINING BYUDJETDAN TASHQARI JAMG'ARMALAR HGISOBI ",
               editor: "S.U.MEHMONOV ,A.SH.KULIBOYEV ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MAKROIQTISODIYOT",
               editor: "G'.E.ZAXIDOV, M.T.ASQAROVA ,Z.A.DJUMAYEV,L.F.AMIROV , H.A.HAKIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MAKROIQTISODIYOT 2",
               editor: "B.T.SALIMOV,M.S.YUSUPOV,A.I.ISHNAZAROV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "MAKROIQTISODIYOT",
               editor: "E.I.ERGASHEV ,N.S.KASIMOVA ,U.K.MUXTOROVA,G.X.NAZAROVA ,M.E.JABBAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "G'AZNACHILIKNING DASTURIY KOMPLEKSLARI",
               editor: "G.A.KASIMOVA,A.XAYDAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BUXGALTERYA HISOBI:XALQARO MOLIYAVIY XISOBOT STANDARTLARI ",
               editor: "A.A.KARIMOV,A.K.IBRAGIMOV,N.K.RIZAYEV,N.M.IMAMOVA",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "XALQARO MOLIYA MUNOSABATLARI ",
               editor: "E.D.ALIMARDONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BANK AUDITI",
               editor: "M.L.YADGAROVA,R.B.QURBONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY XISOBOT TAHLILI",
               editor: "M.YU.RAXIMOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT VA MOLIYAVIY MENEJMENT",
               editor: "USMANOVA .N.YU",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MIKROIQTISODIYOT",
               editor: "B.Y.SALIMOVA M.S.YUSUPOV,B.B.SALIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ATROF-MUHIT VA TABIIY RESURSLAR IQTISODIYOTI",
               editor: "I.XOTAMOV,M.SULTANOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MAKROIQTISODIYOT 2",
               editor: "I.O.YAKUBOV,H.A.HAKIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "XALQARO BIZNES ",
               editor: "BEKMURADOV A.SH,TURSUNOV R.T,XOTAMOV I.S",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BUXGALTERYA HISOBI  ",
               editor: "A.A.KARIMOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "KORXONA IQTISODIYOTI VA INNAVATSIYALARNI BOSHQARISH",
               editor: "E.SH.SHODMONOV,D.SH.BABABEKOVA ,B.O.TURSUNOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "AUDIT",
               editor: "N.TOSHMATOV , X.KAMOLOV,I.NOSIROV,S.TOSHMATOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PROMOTING  INCLUSIVE GROWTH",
               editor: "LUIZ DE MELLO AND MARK A.DUTZ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "AUDITORLIK FAOLYATINING MILLIY STANDARTLARI",
               editor: "AXMEDJANOV.K.B",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "BIZNES QIYMATNI BAHOLASH ",
               editor: "L.S.ZOYIROV,U.K.MUXTOROVA,S.K.QOSIMOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ZAMONAVIY KORPARATIV BOSHQARUV ",
               editor: "SAMARIDDIN ELMIRZAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "KORXONA IQTISODIYOTI VA INNAVATSIYALARNI BOSHQARISH",
               editor: "I.XOTAMOV,SH.MUSTAFOQULOV,M.ISAKOV,A.ABDUVALIYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "WILEY INTERPRETATION AND APPLICATION OF IFRS STANDARTS",
               editor: "JOHN WILEY AND SONS ",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MIKROIQTISODIYOT 2",
               editor: "B.T\/SALIMOV,M.S.YUSUPOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BIZNES BOSHQARUVI ASOSLARI",
               editor: "MUHAMMADJON BO'TABOYEV ,MANSURJON TOSHMAMATOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIY TAHLIL NAZARYASI",
               editor: "A.X.SHOALIMOV,SH.A.TOJIBOYEVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "INNOVATSION IQTISODIYOT ",
               editor: "Y.E.ALIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "INNOVATSION IQTISODIYOT ",
               editor: "A.TANIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY XISOBOT VA AUDITNING XALQARO STANDARTLARI",
               editor: "DYSMURATOV R.D,RO'ZIYEV H.K NAZAROV X.X",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "INKLYUZIV IQTISODIY O'SISH",
               editor: "M.T.ASQAROVA , L.F.AMIROV A.A.ISMOILOV A.R.YAXSHIMURATOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY MENEDJMENT",
               editor: "A.B DJUMANOVA ,M.N KUSHAKOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MARKETING ASOSLARI",
               editor: "ERGASHXODJAYEV SH.DJ,YUSUPOV M.A,G'OYIBNAZAROV S.B, SHARIPV I.B",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "SOLIQ NAZARYASI VA TARIXI ",
               editor: "I.M.NIYAZMETOV, S.A.GIYASOV, F.A.FAYZIYEV, R.R.DUSCHANOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "AMALIY AUDIT ",
               editor: "SH.I.ILHAMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FINANCIAL ACCOUNTING ",
               editor: "MUKHIDDIN KALONOV ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "XALQARO VALYUTA-KREDIT MUNOSABATLARI 3 QISM",
               editor: "J.X.AATANIYOZOV,E.D.ALIMARDONOV,A.B.SHEROV,M.A.MIRZAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ФИНАНСОВЫЙ АНАЛИЗ",
               editor: "SAGDULLAYEVA.Z,YULDASHEVA.U,ALIMOV B",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "ИННОВАЦИОННАЯ ЭКОНОМИКА",
               editor: "S.S.KASIMOV",
               tili: "RUS",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KORPARATIV MOLIYA ",
               editor: "SAMARIDDIN ELMIRZAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BYUDJET G'AZNA IJROSI HISOBI ",
               editor: "S.MEXMONOV.I.QO'ZIYEV,A.KULIBOYEV , A.OSTONKULOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY MENEDJMENT",
               editor: "SIROJIDDINOV IKROMIDDIN KUTBIDDINOVICH , KADIROVA XADICHA TO'RAYEVNA , RAXMONOV DILSHODJON ALIDJONOVICH ",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "XALQARO MOLIYA INSTITUTLARI ",
               editor: "J.X.ATANIYAZOV F.A.XAMIDOVA M.B.PULATOVA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY TAHLIL",
               editor: "M.Y.RAXIMOV,N.N.KALANDAROVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "XALQARO MOLIYA BOZORI TAHLILI",
               editor: "J.ATANIYOZOV,E.ALIMARDONOV,F.HAMIDOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY MENEDJMENT",
               editor: "A.G.IBRAGIMOV,Z.R.MADAMINOVA,M.E.RAXMATULLAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "KORXONA IQTISODIYATI VA MENEJMENTI",
               editor: "I.O.ULASHEV,SH.A.ATAMURADOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "DAVLAT MOLIYASI ",
               editor: "B.I.NURMUHAMEDOVA SH.K.XAMDAMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "DAVLAT BYUDJETI",
               editor: "B.I.NURMUHAMEDOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYA BOZORI",
               editor: "J.R.ZAYNALOV,E.N.XODJAYEV,B.SH.XASANOV,N.X.RUZIBAYEVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: " PRINCIPLES OF FINANCIAL ACCOUNTING ",
               editor: "CHRISTINE JONICK,ED.D",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ТЕРАПЕВТИЧЕСКАЯ И КОНСУЛЬТАТИВНАЯ ПСИХОЛОГИЯ   КЛАССИКИ И СОВРЕМЕННИКИ ПСИХОЛОГИИ",
               editor: "МАРИНА ГУЛИНА",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "СТАТИСТИЧЕСКИЕ МЕТОДЫ В ПЕДАГОГИКЕ И ПСИХОЛОГИИ 1 ЧАСЬ",
               editor: "ДЖ.ГЛАСС.ДЖ СТЭНЛИ ",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "СТАТИСТИЧЕСКИЕ МЕТОДЫ В ПЕДАГОГИКЕ И ПСИХОЛОГИИ 2 ЧАСЬ",
               editor: "ДЖ.ГЛАСС.ДЖ СТЭНЛИ ",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "MCCONNELL BRUE FLYNN ECONOMICS",
               editor: "MCGRAW-HILL",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "INSTITUTSIONAL IQTISODIYOT ",
               editor: "ABULQOSIMOV H.P,BERKINOV.B.B,ABULQOSIMOV M.H,UMAROV A.T,QULMATOV A.A",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIY XAVFSIZLIK",
               editor: "ABULKASIMOV H.P MAMATOV A.A MAMATOV S.A  SAIDGAZIEVA S.S",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY TAHLIL",
               editor: "B.A.XASANOV M.Y.RAXIMOV Z.A.MUQIMOV A.I.ALIQULOV A.B.JUMANOVA N.SH.XAJIMURATOV R.B.XASANOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ДЕНЬГИ .КРЕДИТ.БАНКИ",
               editor: "М.С МАРАМЫГИНА Е.Н ПРОКОФЬЕВОЙ ",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "BYUDJET HISOBI VA NAZORATI",
               editor: "I.N.QO'ZIYEV SH.V.G'ANIYEV A.S.RAMAZONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI ",
               editor: "SH.SHODMONOV M.RAXMATOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYA VA SOLIQLAR ",
               editor: "B.SH.SAFAROV,I.I.AYUBOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIY TAHLIL  ",
               editor: "M.Q.PARDAEV,J.I.ISROILOV,B.I.ISROILOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI ",
               editor: "T.JO'RAYEV,D.TOJIBOYEVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MACROECONOMICS",
               editor: "N.GREGORY MANKIW",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ИСТОРИЯ ЭКОНОМИЧЕСКИХ УЧЕНИЙ ",
               editor: "ЯДГАРОВ.Я.С",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
               editor: "B.D.XAJIYEV K.K.MAMBETJANOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "STATISTIKA BO'YICHA PRAKTIKUM",
               editor: "HABIBULLAYEV IBROHIM HABIBULLAYEVICH, SHADIYEV XAMID AZIMIOVICH,UTANOV BUNYOD QUVONDIQOVICH",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "INVISTITSIYALARNI TASHKIL ETISH VA MOLIYALASHTIRISH",
               editor: "MAMATOV BAXADIR SAFARALIYEVICH,XUJAMKULOV DILMUROD YUSUPALIYEVICH,NURBEKOV OYBEK SHERALIYEVICH",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "R.R.TOJIYEV,A.A.AZLAROVA,N.R.BAZAROVA,N.G.SATTOROVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "AMALIY STATISTIKA ",
               editor: "AYUBJONOV A.H",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "INVISTITSIYA LOYIHALARINI MOLIYALASHTIRISH 1 -QISM",
               editor: "NASIROV EGAMQUL ISMOILOVICH,ASAMXODJAYEVA SHOIRA SHUKRULLAYEVNA, ALIQULOV MEHMONALI SOLOHIDDIN O'G'LI",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "INVISTITSIYA LOYIHALARINI MOLIYALASHTIRISH 2-QISM",
               editor: "NASIROV EGAMQUL ISMOILOVICH,ASAMXODJAYEVA SHOIRA SHUKRULLAYEVNA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "EXPRIMENTAL PSIXOLOGIYA ",
               editor: "M.X.KARAMYAN,B.B.NURULLAYEVA,E.V.BONDAREVA,M.X.DJUMANIYOZOVA,F.E.GAZIYEVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "A.A.OMONOV,T.M.KORALIYEV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "EKONOMETRIKA",
               editor: "B.B.BERKINOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ENGLISH SPEAKING COUNTRIES",
               editor: "ISHAK YAKUBOV",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "PEDAGOGIK PSIXOLOGIYA ",
               editor: "E.G.G'OZIYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "PSIXOLOGIYA METODOLOGIYASI",
               editor: "A.X.NISHANOV,O.K.XUJAYEV,G.X.ABDULLAYEVA,B.B.NURMETOVA",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "СРАВНИТЕЛЬНАЯ ТИПОЛОГИЯ АНГЛИЙСКОГО И РУССКОГО ЯЗЫКОВ",
               editor: "ARAKIN.V.D",
               tili: "RUS",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ПРОБЛЕМЫ СОПОСТАВИТЕЛНОЙ ЛИНГВИСТИКИ",
               editor: "U.K.YUSUPOV",
               tili: "RUS",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMETRIKA ",
               editor: "I.HABIBULLAYEV,A.JUMAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "COMMON EUROPEAN FRAMEWORK OF REFERENCEFOR LANGUAGES:LEARNING,TEACHING,ASSESSMENT",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "A COURSE IN LANGUAGE TEACHING PRACTICE AND THEORY",
               editor: "PENNY UR ",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "THE TRANSLATORS HANDBOOK (WITH SPECIAL REFERENCE TO CONFERENCE TRANSLATION FROM FRENCH AND SPANISH)",
               editor: "FREDRICK FULLER,M.A.SOMETIMES SENIOR REVISER ,UNITER NATIONS ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "APPROACHES AND METHODS IN LANGUAGE TEACHING SEKOND EDITION ",
               editor: "JACK.C. RICHARDS AND THEODORE S. RODGERS",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ENGLISH LITERATURE FROM THE 19TH CENTURY THROUGH TODAY",
               editor: "J.E.LUEBERING",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ADVANCED RESEARCH  METHODS FOR APPLIED PSYCHOLOGY",
               editor: "PAULA BROUGH",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ПРАКТИЧЕСКАЯ ПСИХОЛОГИЯ",
               editor: "ABRAMOVA G.C",
               tili: "RUS",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "ПРАКТИЧЕСКАЯ ПСИХОЛОГИЯ ОБРАЗОВАНИЯ ",
               editor: "I.V.DUBROVINOY",
               tili: "RUS",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "DENGI ,KREDIT,BANKI",
               editor: "E.I.KUZNESOVA",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "DENGI ,KREDIT,BANKI",
               editor: "G.N.BELOGLAZOBOY",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "STATISTIKA  ",
               editor: "STENTON GLANS",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "ИСТОРИЯ ИНФОРМАТИКА ",
               editor: "И.М.ГАРСКОВА",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "TA'LIMDA AXBOROT TEXNOLOGIYALARI",
               editor: "AYUPOV RAVSHAN HAMDAMOVICH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KIBERXAVSIZLIK ASOSLARI ",
               editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "DENGI ,KREDIT,BANKI",
               editor: "M.C.MARAMIGINA,E.N.PROKOFEVOY",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "STRATEGIK MENEJMENT",
               editor: "N.Q.YO'LDOSHEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "XALQARO VALYUTA-KREDIT MUNOSABATLARI 1 QISM",
               editor: "J.X.ATANIYAZOV,N.X.JUMAYEV,E.D.ALIMARDONOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ ФИНАНСОВОЙ  ОТЧЕТНОСТИ:БАЗОВЫЙ КУРС",
               editor: "Б.Н.ЕЛЬЦИНА",
               tili: "RUS",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ACCA ADVANSED AND ASSURANCE (AAA)",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ICHKI AUDIT ",
               editor: "K.B.AXMEDJANOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ИСТОРИЯ НАУКИ И ТЕХНИКИ ",
               editor: "А.В.ТАКАЧЕВА",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "GLOBAL IQTISODIYOT RIVOJLANISHI ",
               editor: "A.X.DJUMAYEV,SH.S.SHARIFOV,A.N.NIZAMOV,I.I.ERGASHEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONDA MILLATLARARO MUNOSABATLAR VA BAG'RIKENGLIK",
               editor: "RAXBARXON MURTAZAYEVA ",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
               editor: "B.TULAYEV",
               tili: "KRILL",
              turkum: "METODIK ASOS"
              },
              {
               name: "GET READY FOR IELTS SPEAKING",
               editor: "RHONA SNELLING",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "O'ZBEKISTON DAVLATCHILIGI VA BOSHQARUV TARIXI ",
               editor: "BAXODIR ESHOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "LISTENING B2+UPPER INTERMEDIATE",
               editor: "IAN BADGER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LISTENING B1+INTERMEDIATE ",
               editor: "IAN BADGER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
               editor: "А.М.НОВИКОВ Д.А.НОВИКОВ",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "JAHON TARIXI",
               editor: "T.O'.SALIMOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "JAHON TARIXI  (QADIMGI SHARQ,QADIMGI YUNONISTON VA RIM TARIXI",
               editor: "D.URAKOV,R.TURSUNOV,A.BIYKUZIYEV,B.XAYNAZAROV.",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTON TARIXI (1917-1991 YILLAR)",
               editor: "RAVSHAN ABDULLAYEV , MIRZOHID RAXIMOV,QAHRAMON RAJABOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "JAHON TARIXI YANGI DAVR XVI-XVIII ASRLAR (1-QISM)",
               editor: "SHUHRAT ERGASHEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MATERIALS DEVELOPMENT IN LANGUAGE TEACHING SECOND EDITION ",
               editor: "BRIAN TOMLINSON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "O'ZBEK DIPLOMATIYASI TARIXIDAN",
               editor: "M.M.XAYRULLAYEV ",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONDA DAVLAT VA MAHALLIY BOSHQARUV TARIXI  1 QISM",
               editor: "BAXODIR ESHOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "QADIMGI O'ZBEKISTON ILK YOZMA MANBALARDA ",
               editor: "SAGDULLAYEV .A",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IELTS RESOURCE PACK PHOTOCOPIABLE GAMES ACTIVITIES AND PRACTICE TESTS FOR IELTS PREPARATION CLASSES",
               editor: "JON MARKS ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ACADEMIC WRITING A HANDBOOK FOR INTERNATIONAL STUDENTS ",
               editor: "STEPHEN BAILEY ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ENGLISH LITERATURE  FROM THE THROUGH THE ROMANTIK PERIOD ",
               editor: "J.E.LUEBRING",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "DESTINATION C1 AND C2 GRAMMAR AND VOCABULARY WITH ANSWER KEY ",
               editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "LEARNING TO LISTEN MAKING SENSE OF SPOKEN ENGLISH ",
               editor: "LIN LOUGHEED ",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ПЕДАГОГИЧЕСКАЯ ПСИХОЛОГИЯ ",
               editor: "И.М.ЗИМНЯЯ ",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК СИНТАКСИС",
               editor: "Н.С.ВАЛГИНА",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "APPROACHES TO TRANSLATION ",
               editor: "PETER NEWMARK",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "A LINGUISTIC THEORY OF TRANSLATION ",
               editor: "J.C.CATFORD ",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "G'ARB FALSAFASI",
               editor: "Q.QAYUMOV,B.BOBOJONOV,L.XIJOVA",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "ILMIY TADQIQOT METODOLOGIYASI ",
               editor: "N.A.SHERMUHAMEDOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA",
               editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ 2-Е ИЗДАНИЕ ДОПОЛНЕННОЕ ",
               editor: "В.Н.ДРУЖИНИН",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "ПРОЛЕМЫ ПРЕВОДА ",
               editor: "Т.Р ЛЕВИЦКАЯ А.М.ФИТЕРМАН",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "A HISTORY OF LITERATURE SECOND EDITION",
               editor: "RICHARD GRAY",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК  МОРФЕМИКАБСЛОВООБРАЗОВАНИЕБМОРФОЛОГИЯ",
               editor: "Е.Н.ТИХОНОВА",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "ЯЗЫК И ПЕРЕВОД ВОПРОСЫ ОБЩЕЙ ИЧАСТНОЙ ТЕОРИИ ПЕРЕВОДА ",
               editor: "Л.С.БАРХУДАРОВ",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "ПСИХОЛОГИЯ ЭКСТРЕМАЛЬНЫХ СИТУАЦИЙ ДЛЯ СПАСАТЕЛЛЕЙ И ПОЖАРНЫХ",
               editor: "Ю.С.ШОЙГУ",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "ПСИХОЛОГИЯ СТРЕССА И МЕТОДЫ ЕГО ПРОФИЛАКТИКИ",
               editor: "В.Р.БИЬДАНОВА Г.К.БИСЕРОВА Г.Р.ШАГИВАЛЕЕВА",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "TILSHUNOSLIKKA KIRISH ",
               editor: "M.T.IRISQULOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIK DIAGNOSTIKA VA KORREKTSIYA ",
               editor: "ABDULLAYEVA SH.A,RO'ZIYEVA D.I",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "TESTOLOGIYA",
               editor: "A.I.RASULOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ XVIII ВЕКА",
               editor: "БУХАРКИН.П.Е",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА",
               editor: "М.А.РАХИМОВ",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА В ШКОЛЕ",
               editor: "M.T.BARANOV,N.A.IPPOLITOVA,T.A.LADIJENKOVA ,M.R.LIVOV",
               tili: "RUS",
              turkum: "УЧЕБНИК"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
               editor: "I.M.HAYDAROV ,M.M.ASQAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
               editor: "MATYAKUBOV X.X",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
               editor: "R.E.XOLIQOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "НОВЕЙШАЯ ИСТОРИЯ УЗБЕКИСТАНА",
               editor: "М.А.РАХИМОВ",
               tili: "RUS",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI XRISTOMATYASI",
               editor: "N.TALIPOVA",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI ",
               editor: "NAIM OBLOMURODOV FAYZULLA TOLIPOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI BIRINCHI KITOB",
               editor: "X.SODIQOV,R.SHAMSUTDINOV,P.RAVSHANOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI IKKINCHI KITOB 2-QISM",
               editor: "M.JO'RAYEV,R.NURILLIN,C.KAMOLOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI IKKINCHI KITOB 1-QISM",
               editor: "M.JO'RAYEV,R.NURILLIN,C.KAMOLOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI UCHINCHI KITOB TOM 2",
               editor: "N.JO'RAYEV,A.AZIZXO'JAYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONNING ENG YANGI TARIXI UCHINCHI KITOB TOM 1",
               editor: "N.JO'RAYEV,A.AZIZXO'JAYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ИСТОРИЯ МИРОВОЙ ЛИТЕРАТУРЫ",
               editor: "М.Ф.ЛУЧАНОВА",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ИСТОРИЯ ДРЕВНЕ РУССКОЙ ЛИТЕРАТУРЫ ЧАСТЬ 1 ЛИТЕРАТУРА КИЕВСКОЙ РУСИ",
               editor: "Л.Я.БОБРИЦКИХ",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "JAHON TARIXI VA MANBASHUNOSLIK KAFEDRASI ARXIVSHUNOSLIK FANIDAN",
               editor: "T.PARDAYEV,Z.XOLIQOV",
               tili: "LOTIN",
              turkum: "O'QUV METODIK MAJMUA"
              },
              {
               name: "XRONOLOGIYA VA METROLOGIYA ",
               editor: "FAYZULLAYEVA M",
               tili: "LOTIN",
              turkum: "MARUZA MATNI"
              },
              {
               name: "SHARQ FALSAFASI VA MADANYATI TARIXI ",
               editor: "D.A.PO'LATOVA,M.Q.QODIROV,J.B.SULAYMONOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "CHET TIL O'QITISH METODIKASI",
               editor: "JAMOL JALOLOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PSIXOLOGIK TERNING ",
               editor: "DILBAR URAZBAYEVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA",
               editor: "OBID HAYDAROV,JAMOLIDDIN OSTONOV,OZODA SULTONOVA ",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "FALSAFA 1 QISM ",
               editor: "ZIYODULLA DAVRONOV, AZIZA SULTANOVA ,NARGIZA PARPIYEVA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "PSIXADIAGNOSTIKA VA EXSPREMENTAL PSIXOLOGIYA ",
               editor: "Z.NISHANIVA,D.QARSHIEVA,N.ATABAYEVA,Z.QURBONOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ONTOGNEZ PSIXOLOGIYASI ",
               editor: "E.G'.G'OZIYEV",
               tili: "LOTIN",
              turkum: "MONOGRAFIYA"
              },
              {
               name: "SOCIAL PSYCHOLOGY TENTH EDITION",
               editor: "DAVID G.MYERS",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
               editor: "В.В.НИКАНДРОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
               editor: "T.V.KORNILOVA ",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "ЕКСПРЕМЕНТАЛЬНАЯ ПСИХОЛОГИЯ ",
               editor: "V.N.DRUJNIN",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "PSIXADIAGNOSTIKA VA EXSPREMENTAL PSIXOLOGIYA ",
               editor: "Z.NISHANOVA,Z.QURBONOVA,S.ABDIYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "UMUMIY PSIXOLOGIYA ",
               editor: "F.XAYDAROV,N.XALILOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "МЕДИАОБРАЗОВАНИЕ ИСТОРИЯ И ТЕОРИЯ ",
               editor: "A.V.FEDOROV",
               tili: "RUS",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "UMUMIY PSIXOLOGIYA ",
               editor: "P.I.IVANOV,M.E.ZUFAROVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA 2-KITOB (YOSH DAVRLARI VA PEDAGOGIK PSIXOLOGIYA ",
               editor: "SH.A.DO'SMUHAMMEDOVA,X.A.TILLASHAYXOVA,G.BAYKUNUSOVA,G.ZIYAVITDINOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA ",
               editor: "N.S.SAFAEV,N.A.MIRASHIROVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ПРАКТИКУМ ПО ПСИХОЛОГИЧЕСКОМУ ИССЛЕДОВАНИЮ",
               editor: "ГОРБАТОВ Д.С.",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "PSIXOLOGIYA  ",
               editor: "E.G'.G'OZIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA ",
               editor: "F.I.XAYDAROV,N.I.XALILOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA ",
               editor: "E.G'.G'OZIYEV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA  TOM 1 ",
               editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA  TOM 2",
               editor: "Z.DAVRONOV,N.SHERMUHAMEDOVA,D.FAYZIXO'JAYEVA ,M.NURMATOVA,B.HUSANOV,M.QAHHOROVA,A.SULTANOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ISLOM FALSAFASIGA KIRISH ",
               editor: "SH.SIROJIDDINOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "FALSAFA",
               editor: "D.A.YUSUPOV,X.B.SATTORXODJAYEV,A.A.MAVLAYNOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA",
               editor: "I.SAIFNAZAROV,A.MUXTAROV,T.SULTANOV,N.NAZAROV,N.RAXIMBABAYEVA,X.DONIYOROV,F.USMONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA  ASOSLARI",
               editor: "Q.NIYAZOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "FALSAFA TARIXI ANTIK DAVR FALSAFASI",
               editor: "M.SHARIPOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA 1 TOM",
               editor: "M.A.AXMEDOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "FALSAFA 2 TOM",
               editor: "M.A.AXMEDOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA 2 KITOB",
               editor: "E.G'.G'OZIYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IJTIMOIY PEDAGOGIKA ",
               editor: "NODIRA EGAMBERGANOVA",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA ",
               editor: "A.K.SHAMSHETOVA,R.N.MELIBAYEVA , X.E.USMANOVA,I.O.XAYDAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "PSIXODIAGNOSTIKA ",
               editor: "RASULOV ABDUMO'MIN IBRAGIMOVICH",
               tili: "KRILL",
              turkum: "O'QUV-METODIK QO'LLANMA"
              },
              {
               name: "PSIXOLOGIYA NAZARYASI VA TARIXI",
               editor: "SH.R.BARATOV,L.Y.OLIMOV,O.R.AVEZOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ONTOGNEZ PSIXOLOGIYASI ",
               editor: "E.G'.G'OZIYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EXPERIMENTAL PSYCHOLOGY HANDBOOK OF RESEARCH METHODS IN",
               editor: "STEPHEN F.DAVIS",
               tili: "ENGLISH",
              turkum: "METODIK ASOS"
              },
              {
               name: "MULOQOT PSIXOLOGIYASI",
               editor: "M.A.MAXSUDOVA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "UMUMIY PSIXOLOGIYA",
               editor: "F.XAYDAROV,N.XALILOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA",
               editor: "A.K.SHAMSHETOVA,R.N.MELIBAYEVA , X.E.USMANOVA,I.O.XAYDAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ONTOGNEZ PSIXOLOGIYASI ",
               editor: "ERGASH G'OZIYEV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PSIXOLOGIYA",
               editor: "U.FAYZIYEVA,N.JUMAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "UMUMIY PSIXOLOGIYA",
               editor: "ERGASH G'OZIYEV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "PSIXOLOGIYA TARIXI",
               editor: "N.S.JO'RAYEV,D.A.SALIYEVA,N.A.SULTONOVA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ДЕТСКАЯ ПСИХОЛОГИЯ",
               editor: "Е.О.СМИРНОВА",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "PEDAGOGIKA NAZARYASI VA TARIXI (pedagogika tarixi)",
               editor: "AXMEDOVA MALOHAT ERGASHEVNA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EXSPREMENTAL PSIXOLOGIYA ",
               editor: "Z.NISHONOVA,D,QARSHIYEVA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ОСНОВНЫЕ МЕТОДЫ СБОРА ДАННЫХ В ПСИХОЛОГИИ",
               editor: "С.А.КАПУСТИНА",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА И ЛИТЕРАТУРЫ",
               editor: "AXMEDOVA L.T,LAGAY.E.A",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "ЗАПАДНО ЕВРОПЕЙСКАЯ СРЕДНЕВЕКОВАЯ ИСТОРИО ГРАФИЯ",
               editor: "О.Л.ВАЙНШТЕЙН",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "UMUMIY PEDAGOGIKA 1QISM",
               editor: "A.MUSURMANOVA,X.IBRAGIMOV,O.JAMOLDINOVA,K,RISQULOVA,S.YO'LDASHEVA,A.JUMAYEV,F.BABASHEV,P.ISAMOVA,S.SHARIPOVA,G'.SALOHIDDINOVA,K.TODJIBAYEVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "UMUMIY PEDAGOGIKA NAZARYASI VA AMALYOTI ",
               editor: "B.X.XODJAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIKA NAZARYASI VA TARIXI ",
               editor: "R.MAVLONOVA,N.VOHIDOVA,N.RAXMONQULOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ПСИХОЛОГИЯ И ПЕДАГОГИКА",
               editor: "Л.А.ГРИГОРОВИЧ  Т.Д.МАРЦИНКОВСКАЯ",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "PSIXODIAGNOSTIKA VA PSIXOMETRIKA ASOSLARI TOM 1-2",
               editor: "L.YA.OLIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ОБЩАЯ ПСИХОЛОГИЯ ",
               editor: "А.Г.МАКЛАКОВ",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "UMUMIY PEDAGOGIKA",
               editor: "R.A.MAVLONOVA,N.H.RAXMONQULOVA,K.O.MATNAZAROVA,M.K.SHIRINOV,S,HAFIZOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY PEDAGOGIKA 2 QISM",
               editor: "A.MUSURMANOVA,N.J.ISAQULOVA,M.T.JUMANIYOZOVA,A.SH.JUMAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ODAM FIZIOLOGIYASI",
               editor: "E.NURITDINOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIKA TARIXI 2QISM ",
               editor: "KOMILJON HASHIMOV,SANOBAR NISHONOVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IJTIMOIY PEDAGOGIKA ",
               editor: "NODIRA EGAMBERDIYEVA",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIKA NAZARYASI VA TARIXI (XII ASR OXIRI XIV ASRNING BIRINCHI YARMIDA MOVAROUNNAHR VA XUROSON MUTAFAKKIRLARINING PEDAGOGIK QARASHLARI)",
               editor: "GULCHEHRA IZBULLAYEVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "YOSH DAVRLARI VA PEDAGOGIK PSIXOLOGIYA",
               editor: "SH.A.DO'SMUHAMMEDOVA,Z.T.NISHANOVA,C.X.JALILOVA,SH.K.KARIMOVA,SH.T.ALIMBAYEVA",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIKA ",
               editor: "R.MAVLANOVA,O.TO'RAYEVA,K.XOLIQBERDIYEV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ",
               editor: "M.G.KAMILOVA,N.A.RAJAPOVA,M.R.ZAKIROVA",
               tili: "RUS",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА И ЛИТЕРАТУРЫ",
               editor: "AXMEDOVA L.T,LAGAY.E.A",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК ФОНЕТИКА ОРФОЭПИЯ",
               editor: "Е.Г.МАЛЫШЕВА О.С.РОГАЛЕВА",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ ЧАСТЬ-1",
               editor: "ИСАКОВА.Р.К",
               tili: "РУС",
              turkum: "ПОСОБИЕ СОСТАВЛЕНО",
               "Column10": "T"
              },
              {
               name: "ПОСОБИЕ ПО ОБУЧЕНИЮ РУССКОМУ ЯЗЫКУ",
               editor: "M.G.KAMILOVA,N.A.RAJAPOVA,M.R.ZAKIROVA",
               tili: "RUS",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА ",
               editor: "L.T.AXMEDOVA,O.V.KON",
               tili: "RUS",
              turkum: "УЧЕБНИК"
              },
              {
               name: "СОВРЕМЕННЫЙ РУССКИЙ ЯЗЫК ФОНЕТИКА ОРФОЭПИЯ ГРАФИКА ОРФОЭПИЯ",
               editor: "Ж.В.ГАНИЕВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ  (ВТОРАЯ ПОЛОВИНА XIX ВЕКА",
               editor: "В.Я.ЛИНКОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ XVIII ВЕКА",
               editor: "О.Б.ЛЕБЕДЕВА",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ",
               editor: "Д.С.ЛИХАЧЕВ Г.П.МАКОНЕНКО",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "УЧЕБНО-МЕТОДИЧЕСКИЙ КОМПЛЕКС ПО ДИСЦИПЛИНЕ ТЕОРЕЯ И ПРАКТИКА ПЕРЕВОДА",
               editor: "ДЖАЛИЛОВА Д.С",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "ПОСОБИЕ ПО  РУССКОМУ ЯЗЫКУ",
               editor: "ИСАКОВА.Р.К",
               tili: "РУС",
              turkum: "ПОСОБИЕ СОСТАВЛЕНО"
              },
              {
               name: "МЕТОДИКА ПРЕПОДАВАНИЯ РУССКОГО ЯЗЫКА ",
               editor: "L.T.AXMEDOVA,O.V.KON",
               tili: "RUS",
              turkum: "УЧЕБНИК"
              },
              {
               name: "ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ  (ПЕРВАЯ ПОЛОВИНА XX ВЕКА)",
               editor: "Л.П.ЕГОРОВОЙ",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "РУССКИЙ ФОЛЬКЛОР",
               editor: "Т.В.ЗУЕВА",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "УЧЕБНО-МЕТОДИЧЕСКИЙ КОМПЛЕКС ПО ПРЕДМЕТУ РУССКИЙ ЯЗЫК",
               editor: "IMAMALIYEVA M\/A,MIRSAGATOVA U.Z,KOMILOVA SH.A",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "ПРАКТИЧЕСКИЕ РАЗРАБОТКИ ПО ПРОВЕДЕНИЮ СЕМИНАРСКИХ ЗАНЯТИЙ ПО ДИСЦИПЛИНЕ ИСТОРИЯ РУССКОЙ ЛИТЕРАТУРЫ",
               editor: "АБЛАЕВА Н.К МАДРАХИМОВА З.Ф",
               tili: "РУС",
              turkum: "МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "O'ZBEKCHA-RUSCHA VA RUSCHA O'ZBEKCHA LUG'AT",
               editor: "M.M.ABDURAXIMOV",
               tili: "LOTIN",
              turkum: "LUG'AT"
              },
              {
               name: "ENGLISH TESTS GRAMMATIKA VA MAVZULASHTIRILGAN TESTLAR TO'PLAMI 1996-2015",
               editor: "N.SAMANOVA",
               tili: "ENGLISH",
              turkum: "TEST"
              },
              {
               name: "DESTINATION GARAMMAR AND VOCABULARY C1 C2",
               editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "DESTINATION GARAMMAR AND VOCABULARY B2",
               editor: "MALKOLM MANN STEVE TAYLORE-KNOWLES",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "TEACHERS BOOK ",
               editor: "VIRGINIA EVANS-JENNY DOOLEY STANLEY WRIGHT",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "IELTS WRITE RIGHT AKADEMIC\/GENERAL TASKS 1 2 ",
               editor: "MEHDI KARIMI",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "MIGRATION ACCOMMODATION AND LANGUAGE CHANGE ",
               editor: "BRIDGET L.ANDERSON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "FUNDAMENTALS OF MANAGEMENT",
               editor: "ROBBINS DECENZO COULTER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SPEAKING FOR IELTS ",
               editor: "KAREN KOVACS",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "READING FOR IELTS",
               editor: "ELS VAN GEYTE AND RHINA SNELLING",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "WRITING FOR IELTS",
               editor: "ANNELI WILLIAMS",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LANGUAGE SKILL:SPEAKING 2 ",
               editor: "G.BAKIEVA, Z.SALIEVA ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "GRAMMAR PRACTICE FOR ELEMENTARY STUDENTS WITH KEY",
               editor: "ELAINE WALKER STEVE ELSWORTH",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SKILLFUL READING AND WRITING STUDENTS BOOK",
               editor: "DAVID BOHLKE ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SCALE UP STUDENTS BOOK COURSE 2",
               editor: "QAMBAROV NOSIR,MURATOVA ILMIRA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SCALE UP STUDENTS BOOK COURSE 1",
               editor: "QAMBAROV NOSIR,MURATOVA ILMIRA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SCALE UP STUDENTS BOOK COURSE 3",
               editor: "BAKIEVA G.RASHIDOVA F KHODJAYEVA R SAMATOVA B KARIMOVA D M SHAMSIMATOVA B SHAKHIMOVA M KASIMOVA Z DJALALIDINOVA M",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 4",
               editor: "LINDSAY CLANDFIELD AND MARK MCKINNON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 3",
               editor: "MIKE BOYLE AND ELLEN KISSLINGER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "SKILLFUL LISTENING AND SPEAKING STUDENT BOOK 1",
               editor: "LIDA BAKER AND STEVEN GERSHON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THIRD EDITION SOLUTIONS UPPER-INTERMEDIATE WOEKBOOK",
               editor: "TIM FALLA PAUL DAVIES , PAUL KELLY,HELEN WENDHOLT , SYLVIA WHEELDON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THIRD EDITION SOLUTIONS ADVANCED STUDENTS BOOK",
               editor: "TIM FALLA,PAUL ADAVIES,JANE HUDSON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "TASK-BASED LANGUAGE TEACHING ",
               editor: "DAVID NUNAN ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "MATERIALS DEVELOPMENT IN LANGUAGE TEACHING SECOND EDITION ",
               editor: "BRIAN TOMLINSON",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "PLANNING LESSONS AND COURSES DESINGNING SEQUENCES OF WORK FOR THE LANGUAGE CLASSROOM",
               editor: "SERIES EDITOR PENNY UR",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "FROM PROTO-INDO-EUROPEAN TO PROTO-GERMANIC",
               editor: "DON RINGE",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "NEW INSIGHT INTO IELTS",
               editor: "VANESSA JAKEMAN AND CLARE MCDOWELL",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "COMPORATIVE TYPOLOGY OF ENGLISH,UZBEK AND RUSSIAN LANGUAGES",
               editor: "M.I.RASULOVA,Z.I.SHUKUROVA ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THEORETICAL ENGLISH GRAMMAR",
               editor: "M.IRISQULOV,I.TOKHTASINOV,A.KULDASHEV",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "A GLOSSARY OF HISTORICAL LINGUISTICS ",
               editor: "LYLE CAMPBELL AND MAURICIO J.MIXCO",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "A GRAMMAR OF THE ENGLISH LANGUAGE",
               editor: "B.A.ILISHA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ROMAN-GERMAN FILOLOGIYASIGA KIRISH ",
               editor: "S.M.XUDOYBERGANOV,M.F.SAPAROVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ENGLISH SPEAKIN COUNTRIES ",
               editor: "ISHAK YAKUBOV",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "INGLIZ VA O'ZBEK TILLARIDA KOMPARATIVLIK KATEGORYASINING SINTAKTIK-SEMANTIK XUSUSIYATLARI ",
               editor: "AYBEK KALANDAROV",
               tili: "LOTIN",
              turkum: "MONOGRAFIYA"
              },
              {
               name: "UNDERSTANDING AND USING ENGLISH GRAMMAR THIRD EDITION WITH ANSWER KEY",
               editor: "BETTY SCHRAMPFER AZAR",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "BASIC ENGLISH GRAMMAR THIRD EDITION WITH ANSWER KEY ",
               editor: "BETTY SCHRAMPFER AZAR STACY A.HAGEN",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LANGUAGE SKILL:WRITING 2 ",
               editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LANGUAGE SKILL:SPEAKING 1",
               editor: "G.BAKIYEVA,Z.SALIEVA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LANGUAGE SKILL:WRITING 4",
               editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LANGUAGE SKILL:WRITING 3",
               editor: "G.BAKIEVA,R.KHODJIEVA, K.MURATKASIMOVA ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "CULTURAL LINGUISTIC ",
               editor: "D.U.ASHUROVA,M.R.GALIEVA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "LANGUAGE SKILL:LISTENING ",
               editor: "G.BAKIEVA,Z.KASIMOVA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "QADIMGI O'RTA OSIYO TARIXI",
               editor: "A.SAGDULLAYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ВВЕДЕНИЕ В ИСТОРИЧЕСКУЮ ГЕОГРАФИЮ",
               editor: "Ф.С.КОРАНДЕЙ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "SHARQIY OSIYO DINIY-FALSAFIY TALIMOTLAR VA ISLOM",
               editor: "N.G.NIZOMMIDDINOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "INCLUSIVE GROWTH,DEVELOPMENT AND WELFARE POLICY",
               editor: "REZA HASMATH",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIK TEXNOLOGIYALAR VA PEDAGOGIK  MAHOROT",
               editor: "H.T.OMONOV,N.X.XO'LAYEV,S.S.MADYAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IJTIMOIY ISH TARIXI VA NAZARYASI ",
               editor: "S.ELMANOV",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "OLIY MATEMATIKA 1 QISM",
               editor: "SH.R.XURRAMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IJTIMOIY ISHGA KIRISH",
               editor: "YUSUPOV.R.K",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IJTIMOIY ISHGA KIRISH",
               editor: "M.X.GANIYEVA,Q.N.KAYUMOV,M.B.SHEROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IJTIMOIY SIYOSAT ",
               editor: "S.TO'YCHIYEVA,A.SH.NORBEKOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IJTIMOIY ISH NAZARYASI",
               editor: "M.N.NARMAMATOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY HISOBOTNING XALQARO STANDARTLARI ",
               editor: "SH.T.ERGASHEVA,A.K.IBRAGIMOV,N.K.RIZAYEV,I.R.IBRAGIMOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "INNOVATSION MENEJMENT ",
               editor: "R.I.GIMUSH,F.M.MATMURATOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ИСТОРИЯ И ТЕОРИЯ СОЦИАЛЬНОЙ РАБОТЫ",
               editor: "М.Х.ГАНИЕВА Н.М.ЛАТИПОВА",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "WEB TEXNOLOGIYALAR ",
               editor: "M.ARIPOV,M.FAYZIYEVA,S.DOTTOYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "TARMOQ XAVFSIZLIGI(MOBIL TARMOQ XAVFSIZLIGI)",
               editor: "GANIYEV SALIM KARIMOVICH,KUCHKAROV TAXIR ANVAROVICH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KOMPUTERNING TEXNIK VA DASTURIY TAMINOTI",
               editor: "AMINOV I.B",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "DAVLAT TILIDA ISH YURITISH",
               editor: "M.AMINOV",
               tili: "KRILL",
              turkum: "AMALIY QO'LLANMA"
              },
              {
               name: "KOMPYUTER GRAFIKASI",
               editor: "T.RIXSIBOYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KOMPYUTER GRAFIKASI",
               editor: "A.IMOMOV",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "KOMPYUTER LINGVISTIKASI ASOSLARI",
               editor: "AZAMATJON RAXIMOV",
               tili: "LOTIN",
              turkum: "LUG'AT"
              },
              {
               name: "ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ТЕХНОЛОГИИ",
               editor: "И.Л.ЧУДИНОВ В.В.ОСИПОВА",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
               editor: "Ю.ЮГРОМОВБИ.В.ДИДРИХ О.Г.ИВАНОВА М.А.ИВАНОВСКИЙ ВЮГЮОДНОЛЬКО",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
               editor: "A.T.KENJABOYEV,M.M.IKRAMOV,A.SH.ALLANAZAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KOMPUTER ARXITEKTURASI",
               editor: "NIGMATOV.X",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "TIL TALIMIDA KOMMUNIKATSION TEXNOLOGIYALAR ",
               editor: "F.SH.RO'ZQULOV",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "IJTIMOIY ISHNING AXLOQIY TAMOYILLARI QADRIYATLARI",
               editor: "ISOQJON NEGMATOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKOLOGIYA VA TABIATNI MUHOFAZA QILISH",
               editor: "O'.E.XO'JANAZOROV,SH.T.YAKUBJONOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
               editor: "A.T.KENJABAYEV,M.M.IKRAMOV,A.SH.ALLANAZAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKOLOGIYA , BIOSFERA VA TABIATNI MOHOFAZA QILISH",
               editor: "AHTAMQUL ERGASHEV TEMUR ERGASHEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "UMUMIY EKOLOGIYA ",
               editor: "AHTAMQUL ERGASHEV ",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "MATEMATIK MODELLASHTIRISH",
               editor: "N.RO'ZMETOVA,R.FAYZIYEV,A.ISHNAZAROV,SH.NURULLAYEVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "AXBOROT XAVFSIZLIGI",
               editor: "S.K.GANIYEV M.M.KARIMOV,K.A.TASHEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MICRASOFT EXCEL DASTURIDA ISHLASH",
               editor: "TOLAMETOV A.A",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "TA'LIM TEXNOLOGIYALARI",
               editor: "SH.S.SHOYIMOVA,M.K.XOSHIMOVA,SH.R.MIRZAYEVA,M.M.QO'ZIBOYEVA ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IJTIMOIY SIYOSAT ",
               editor: "A.SALOYEV",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "ОБЩАЯ И ТЕОРЕЧЕСКАЯ ИНФОРМАТИКА",
               editor: "А.А.МАЙОРОВ В.П.СЕДЯКИН",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "МЕДИАОБЗОВА НИЕ И МЕДИАГРАМОТНОСТЬ ТЕОРИЯ МЕТОДОЛОГИЯ ПРАКТИКА",
               editor: "Л.С.АХМЕТОВ АА.В.ВЕРЕВКИН Т.Ю.ЛИФАНОВА",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "KOMPUTER TARMOQLARI ",
               editor: "Z\/Z\/MIRYUSUPOV,J.X.DJUMANOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MEDIASAVODXONLIK VA AXBOROT MADANIYATI",
               editor: "E.M.XUDAYNAZAROV,G.M.XALILLAYEVA,A.F.SABIROVA,J.S.RAXIMBOYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "AXBOROT TEXNOLOGIYALARI 1 QISM",
               editor: "M.KADIROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "INSTITUTSIONAL IQTISODIYOT ",
               editor: "M.I.KUTBITDINOVA",
               tili: "LOTIN",
              turkum: "MARUZA MATNI"
              },
              {
               name: "WORD 2010 В ПРИМЕРАХ",
               editor: "Е.М.КАРЧЕВСКИЙ  И.Е.ФИЛИППОВ И.А.ФИЛИППОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ПРАКТИЧЕСКИЕ РАБОТЫ ПО МICROSOFT OFFICE 10",
               editor: "И.Г.ЧЕКИНА О.И.ШАРДАКОВА",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "BYUDJET-SOLIQ SIYOSATI",
               editor: "T.S.MALIKOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KOMPUTER GRAFIKASI  VA WEB-DIZAYN",
               editor: "M.E.MAMARAJABOV,S.Q.TURSUNOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BIZNES BOSHQARUV ASOSLARI ",
               editor: "SHAISLAMOVA M.R",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "KORXONA IQTISODIYOTI  ",
               editor: "E.X.MAXMUDOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
               editor: "АРИПОВ М.М КАБИЛЖАНОВА Ф.А ЮЛДАШЕВ З.Х",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "MASTER OF BUSSINESS ADMINISTRATION STRATEGIC MANAGEMENT",
               editor: " DR.C S.K KRISHNACHARYALU",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THE  NEW YORK TIMES THE FOUR ",
               editor: "CKOTT GELLOUEY",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "KORXONA IQTISODIYOTI VA INNOVATSIYALARNI BOSHQARISH",
               editor: "I.XOTAMOV,SH.MUSTAFAQULOV,M.ISAKOV,A.ABDULLAYEV",
               tili: "KRILL",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "BUXGALTERYA HISOBI",
               editor: "S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "KORXONA IQTISODIYOTI VA MENEJMENTI",
               editor: "I.O.ULASHEV,SH.A.ATAMURODOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BIZNES QIYMATNI BAHOLASH ",
               editor: "L.S.ZOYIROV,U.K.MUXTOROVA,S.K.QOSIMOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI TOM 1",
               editor: "N.X.SHOAXMEDOVA,I.M.ABDULLAYEVA,D.P.XASHIMOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI TOM 2",
               editor: "N.X.SHOAXMEDOVA,I.M.ABDULLAYEVA,D.P.XASHIMOVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLAR",
               editor: "R.A.DADABAYEVA,N.X.SHOAXMEDOVA,L.T.IBRAGIMOVA,SH.T.NASRIDDINOVA,SH.T.ERMATOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKOLOGIYA",
               editor: "A.C.TO'XTAYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI",
               editor: "SHOAXMEDOVA N.X,ABDULLAYEVA I.M",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PEDAGOGIK TEXNOLOGIYALAR VA PEDAGOGIK  MAHOROT",
               editor: "O'TKIR TOLIPOV,DILNOZ RO'ZIYEVA ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "UMUMIY PEDAGOGIKA NAZARYASI VA AMALYOTI ",
               editor: "B.X.XODJAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "МЕТОДОЛОГИЯ НАУЧНЫХ ИССЛЕДОВАНИЙ",
               editor: "X.A.KABULOV",
               tili: "RUS",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "НАРОДЫ СРЕДНЕЙ АЗИИ III-VI ВЕКОВ ",
               editor: "О.Е.НЕПОМНИН",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ТЕСТОЛОГИЯ ГУМАНИТАРИЯМ",
               editor: "А.Г.ВОЙТОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "IJTIMOIY SAFARBARLIK",
               editor: "SHAVKAT TO'RAYEV,NIGORA XUSANOVA",
               tili: "KRILL",
              turkum: "RISOLA"
              },
              {
               name: "O'ZBEK MILLIY FALASAFA MAKTABINING ASOSCHISI",
               editor: "BO'RI QODIROV",
               tili: "KRILL",
              turkum: "RISOLA"
              },
              {
               name: "ARAB TILI GRAMMATIKASI",
               editor: "NEMATULLO IBROHIMOV,MUHAMMAD YUSUPOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "АРАБСКОГО ЯЗЫКА",
               editor: "TYULEMISSOV MADI",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "УЧЕБНИК АРАБСКОГО ЯЗЫКА",
               editor: "С.А.КУЗЬМИН",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "УЧЕБНИК АРАБСКОГО ЯЗЫКА",
               editor: "А.А.КОРАЛЕВ Г.Ш.ШАРБАТОВ",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "O'ZBEKISTONING ME'MORIY YODGORLIKLARI TARIXI",
               editor: "S.DAVLETOV,M.ABDULLAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "O'ZBEKISTONING ENG YANGI TARIXI",
               editor: "S.R.DAVLETOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "XORAZM JADID NAMOYONDALARI:XAYOTI,FAOLIYATI VA ADABIY MEROSI",
               editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
               tili: "KRILL",
              turkum: "MONOGRAFIYA"
              },
              {
               name: "XORAZM JADIDCHILIGI:ISLOHOTLAR,TALIM VA ADABIYOT",
               editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
               tili: "KRILL",
              turkum: "MONOGRAFIYA"
              },
              {
               name: "BOBOOXUN SALIMOV-JADID,DAVLAT ARBOBI VA SHOIR",
               editor: "SAYYORA SAMANDAR UMID BEKMUHAMMAD",
               tili: "KRILL",
              turkum: "MONOGRAFIYA"
              },
              {
               name: "XORAZM JADIDCHILIK XARAKATI ENSKLOPEDIYASI",
               editor: "UMID BEKMUHAMMAD",
               tili: "KRILL",
              turkum: "ENSKLOPEDIYA"
              },
              {
               name: "KOMPUTER SAVAODXONLIGI ",
               editor: "RO'ZIMOV S.K",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KIBERXAVSIZLIK ASOSLARI ",
               editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "МЕДИАОБРАЗОВАНИЕ ИСТОРИЯ И ТЕОРИЯ ",
               editor: "А.В.ФЕДОРОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
              },
              {
               name: "МЕДИАОБРАЗОВАНИЕ И МЕДИАГРАМОТНОСТЬ",
               editor: "АХМЕТОВА Л.С",
               tili: "РУС",
              turkum: "СПРАВОЧНИК"
              },
              {
               name: "СОВРЕМЕННЫЕ ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ ДЛЯ ГУМАНИТАРИЯ",
               editor: "А.Т.ХРОЛЕНКО А.В.ДЕНИСОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
              },
              {
               name: "ПРАКТИКУМ ПО РЕШЕНИНИЮ ЭКОНОМИЧЕСКИХ ЗАДАЧ В МС ЕХЕЛ",
               editor: "И.А.КЛЮЕВА И.П.МЕДИНЦЕВА",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "АВТОМАТИЗИРОВАННЫЕ ТЕХНОЛОГИИ В ЭКОНОМИКЕ",
               editor: "КОЛЛЕКТИВ АВТОР",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "РАБОТА В СРЕДЕ ЕЛЕКТРОННЫХ ТАБЛИЦ",
               editor: "О.А.ЛАВРЕНОВА",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "МЕДИАОБРАЗОВАНИЕ И МЕДИАГРАМОТНОСТЬ",
               editor: "А.В.ФЕДОРОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
              },
              {
               name: "TALIMDA AXBOROT TEXNOLOGIYALARI",
               editor: "R.XAMDAMOV,U.BEGIMQULOV,N.TAYLOQOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "KIBERXAVSIZLIK ASOSLARI ",
               editor: "S.K.GANIYEV, A.A.GANIYEV, Z.T.XUOYORQULOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "COMPUTER SCIENCE",
               editor: "DAVID WATSON,HELEN WILLIAMS",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "YURISTNING KASBIY ETIKASI",
               editor: "B.I.ISMAILOV",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "MICROSOFT EXCEL",
               editor: "B.J.BOLTAYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MEDIA VA AXBORIY SAVODXONLIK BO'YICHA MYAMMOLI TARBOYASI OG'IR YOSHLAR TOIFASI BILAN ISHLASH UCHUN ",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI",
               editor: "AMIROV.D.M,ATAJANOV",
               tili: "KRILL",
              turkum: "IZOHLI LUG'AT"
              },
              {
               name: "MEDIA VA AXBOROT SAVODXONLIGINI SHAKLLANTIRISHNING PEDAGOGIK JIHATLARI",
               editor: "YUNESKO",
               tili: "KRILL",
              turkum: "O'QUV-AMALIY QO'LLANMA"
              },
              {
               name: "O'ZBEKISTONDA MEDIA TALIM TARQQIYOTI YO'LIDA ",
               editor: "YA.MAMATOVA C.SULAYMONOVA",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "SOCIAL WORK AND SOCIAL WELFARE AN INTRODUCTION",
               editor: "ROSALIE AMBROSINO,JOSEPH HEFFERNAN,EMERITUS,GUY SHUTTLESWORTH,EMERITUS",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "INFORMATIKA,INFORMATSION TEXNOLOGIYALAR",
               editor: "M.M.ARIPOV,J.O'.MUHAMMADIYEV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "ИСТОРИЯ ТЕХНИКИ  РАЗВИТИЕ ТЕХНИКИ В ДРЕВНЕМ МИРЕ",
               editor: "Д.В.ЛОГИНОВА",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "ИСПОЛЬЗОВАНИЕ КОМПЬЮТЕРНЫХ ТЕХНОЛОГИЙ В УЧЕБНОМ ПРОЦЕССЕ",
               editor: "XUDAYBERGANOV SH.E,HAKIMOVA.X.R",
               tili: "РУС",
              turkum: "УЧЕБНО-МЕТОДИЧЕСКОЕ ПОСОБИЕ"
              },
              {
               name: "TALIMDA AXBOROT TEXNOLOGIYALARI",
               editor: "MADRIMOVA.S.M,XUSAINOV.SH.M",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
               editor: "MADRIMOVA.S.M,XUSAINOV.SH.M",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "ELEKTRON JADVALLARDAN FOYDALANISH TEXNOLOGIYALARI ",
               editor: "G.M.OTAJONOVA,B.R.ANNAZAROVA",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "MOLIYAVIY HISOB ASOSLARI FANIDAN KURS ISHI YOZISH",
               editor: "SHEROV A,ZAKIROVA.G",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "FILOLOGIYADA AXBOROT TEXNOLOGIYALARI ",
               editor: "MADRIMOVA S.M,XUSAINOV.SH.M,",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "ОТЧЕТ КАДРЫ СИСТЕМЫ СОЦИАЛЬНОЙ ЗАЩИТЫ ДЕТЕЙ В УЗБЕКИСТАНЕ СИЛЬНЫЕ СТРОНЫ ПРОБЛЕМЫ И ДАЛЬНЕЙШЕЕ РАЗВИТИЕ",
               tili: "RUS",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "STATISTIKA FANIDAN AMALIY MASHG'ULOTLAR O'TQAZISH UCHUN",
               editor: "A.X.AYUBJONOV,B.X.MAMATQULOV,C.H.SAYFULLAYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "STATISTIKA BO'YICHA PRAKTIKUM",
               editor: "X.SHODIEV VA XABIBULLAYEV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "STATISTIKA BO'YICHA PRAKTIKUM",
               editor: "X.SHODIEV VA XABIBULLAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIY-MATEMATIK MODELLAR VA USULLAR",
               editor: "SH.R.MO'MINOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIY MATEMATIK USULLARI VA MODELLARI",
               editor: "I.HABIBULLAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MAKRO VA MIKRO IQTISODIYOT",
               editor: "N.XOLMATOV,N.IMOMOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMETRIKA",
               editor: "B.YU.XODIYEV , T.SH.SHODIYEV , B.B.BERKINOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "STATISTIKA NAZARYASI 2 NASHR",
               editor: "YO.ABDULLAYEV",
               tili: "KRILL",
              turkum: "ILMIY-USLUBIY QO'LLANMA"
              },
              {
               name: "STATISTIKA",
               editor: "SOATOV.N.M,NABIEV H.G',NABIYEV D.H,TILLAXO'JAYEVA G.N",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY XISOBOTNING XALQARO STANDARTLARI",
               editor: "C.N.TASHNAZAROV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "BUXGALTERYA HISOBINING AXBOROT TIZIMLARI",
               editor: "KARIMOV AKROM ABBOSOVICH,MUQIMOV ZAFAR ,TULAYRV MIRZA,KURBANBAYEV JO'RABEK ERUVBAYEVICH, RAXIMOV SHERZODS SHERKULOVICH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "TADBIRKORLIK ASOSLARI",
               editor: "HALIM HAMROYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "STATISTIKA VA EKONOMETRIKA 2 QISM",
               editor: "X.A.KASIMOVA",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IJTIMOIY-IQTISODIY JARAYONLARNI MODELLASHTIRISH VA PROGNOZLASH",
               editor: "D.M.RASULEV,A.A.ALMURADOV,S.O.XOMIDOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIY-MATEMATIK USULLARI VA MODELLARI",
               editor: "T.SHODIYEV,O.ABDULLAYEV,L.BOLTAYEVA,G.KAZIMOVA,A.ISMAILOV,S.B.IVANOVA,A.ISHNAZAROV,H.RO'ZMETOVA,A.BOYZOQOV,O.RIXSIMBOYEV,M.MUMINOV,O.A.KARIMOV,SH.NURILLAYEVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIYOTDA MIQDORIY USULLAR",
               editor: "A.RASULOV,U.DALABOYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY HISOB",
               editor: "O.M.KULJANOV,X.A.ORTIQOV,L.P.YUGAY,X.A.TUXSANOV,M.I.XAYITBOYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BUXGALTERYA HISOBINING AXBOROT TIZIMLARI",
               editor: "A.A.KARIMOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY HISOB",
               editor: "ABDUSAMATOVA NODIRA BAXODIROVNA,TEMIROV FURQAT TURSOATOVICH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODCHILAR UCHUN MATEMATIKA",
               editor: "SH.SHARAHMETOV,A.NAIMJONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BUXGALTERYA HISOBI NAZARYASI",
               editor: "O.M.KULJANOV,I.I.XUSINOV,S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIY-MATEMATIK USULLARI VA MODELLARI",
               editor: "X.Q.QARSHIBOYEV,B.I.ASHUROV,E.H.SALIMOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BUXGALTERYA HISOBI TOM 1",
               editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "BUXGALTERYA HISOBI TOM 2",
               editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "EKONOMETRIKA 1 ",
               editor: "G.NASRITDINOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
               editor: "SH.SH.SHODMONOV,M.M.MUHAMMEDOV,N.A.KAMILOVA",
               tili: "RUS",
              turkum: "УЧЕБНОЕ ПОСОБИЕ ДЛЯ ВУЗОВ"
              },
              {
               name: "МОДЕЛИ ИССЛЕДОВАНИЯ ОПЕРАЦИЙ",
               editor: "О.А.КОСОРУКОВ М.А.ХАЛИКОВ Г.П.ФОМИН",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "ЭКОНОМИКА-МАТЕМАТИЧЕСКИЕ МЕТОДЫ И МОДЕЛИ",
               editor: "А.И.ГУРКО",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "MIKROIQTISODIYOT",
               editor: "ERKIN EGAMBERDIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MAKROIQTISODIYOT 2",
               editor: "N.M.MAHMUDOV,A\/B.SHAKAROV,X.A.ULASHEV,J.A.SHAKAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BUXGALTERYA HISOBI",
               editor: "U.I.INOYATOV,S.D.YUSUPOVA,F.R.SALIMBEKOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MIKROIQTISODIYOT",
               editor: "I.A.BAKIYEVA,X.S.XADJAYEV,M.Z.MUXITDINOVA,SH.SH.FAYZIYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BUXGALTERYA HISOBI",
               editor: "A.A.KARINOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MIKROIQTISODIYOT MAKRIIQTISODIYOT TOM 1",
               editor: "SH.FAYZIYEV,B.SHERMUHAMMEDOV,E.I.ERGASHEV,I.BAKIVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MIKROIQTISODIYOT MAKRIIQTISODIYOT TOM 2",
               editor: "SH.FAYZIYEV,B.SHERMUHAMMEDOV,E.I.ERGASHEV,I.BAKIVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MIKROIQTISODIYOT:MASALALAR,NAMUNALAR,TOPSHIRIQLAR,TESTLAR",
               editor: "B.SALIMOV,SH.MUSTAFOQULOV,D.SALIMOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BIZNES BOSHQARUVI ASOSLARI",
               editor: "MUHAMMADJON BO'TABOYEV ,MANSURJON TOSHMAMATOV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MAKROIQTISODYOT",
               editor: "G'.E.ZOHIDOV,M.T.ASQAROVA,Z.A.DJUMAYEV,L.F.AMIROV,H.A.HAKIMOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PERSONALNI BOSHQARISH",
               editor: "K.X.ABDURAXMONOV,SH,R,XOLMO'MINOV,N.K.ZOKIROVA",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "MAKROIQTISODYOT",
               editor: "Z.A.DJUMAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "XALQARO BIZNES STRATEGYASI",
               editor: "NAZAROVA.G.G,ALIYEVA.M.T,SAFAROV.N.SH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY RISKLAR NAZARYASI",
               editor: "SH.Q.FOZILCHAYEV,N.G'.XIDIROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "KORPORATIV RISKLARNI BOSHQARISH",
               editor: "M.A.MAHKAMOVA,D.S.ZIYAYEVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY RISKLARNI BOSHQARISH",
               editor: "K.U.SHARIFXODJAYEVA,A.X.ISLAMQULOV,B.K.SATTAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BIZNES MOLIYASI",
               editor: "SH.SULTONOV,Q.CHINQUV,U.G'OFUROVA,N.SAFAROVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY RISKLARINI BOSHQARISH FANIDAN ",
               editor: "SATTOROVA B.K",
               tili: "KRILL",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "MOLIYAVIY HISOB VA HISOBOT",
               editor: "A.A.KARIMOV,J.E.KURBANBAYEV,S.A.JUMANAZAROV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "INNOVATSION IQTISODIYOT ",
               editor: "A.TANIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "DAVLAT BYUDJETI",
               editor: "J.R.ZAYNALOV,B.SH.XUSANOV,S.S.ALIYEVA,SH.M.LATIPOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "I.R.TOYMUHAMMEDOV,R.R.TOJIYEV,A.A.AZLAROVA,N.R.BAZAROVA,N.G'.SATTOROVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "A.A.OMONOV,T.M.KORALIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYA",
               editor: "T.MALIKOV,O.OLIMJONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYA",
               editor: "T.MALIKOV,O.OLIMJONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "SH.Z.ABDULLAYEVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "SH.Z.ABDULLAYEVA",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "PUL VA BANKLAR",
               editor: "A.A.OMONOV,T.M.QORALIYEV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY BOSHQARUV HISOBI",
               editor: "S.R.EGAMBERDIYEVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "RISKLARNI BOSHQARISH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "RISKLARNI BOSHQARISH",
               editor: "J.SH.TUXTABAEV,A.X.ESHBAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "INNOVATSION IQTISODIYOT ",
               editor: "Y.E.ALIYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYA",
               editor: "T.S.MALIKOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIYOT NAZARYASI TOM 2",
               editor: "SH.SHODMONOV  ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI TOM 1",
               editor: "SH.SHODMONOV  ",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI TOM 1",
               editor: "SH.SHODMONOV,U.G'AFUROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI TOM 2",
               editor: "SH.SHODMONOV,U.G'AFUROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI TOM 1",
               editor: "B.Y.XODIYEV,SH.SH.SHODMONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT NAZARYASI TOM 2",
               editor: "B.Y.XODIYEV,SH.SH.SHODMONOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MOLIYAVIY XISOBOTNING XALQARO STANDARTLARI",
               editor: "D.E.NORBEKOV,A.N.TO'RAYEV,SH.SH.RAXMONOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MIKROIQTISODIYOT",
               editor: "B.T.SALIMOV,M.S.YUSUPOV,A.I.ISHNAZAROV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "MIKROIQTISODIYOT",
               editor: "HURMATOV.N",
               tili: "KRILL",
              turkum: "MARUZA MATNI"
              },
              {
               name: "MIKROIQTISODIYOT:MASALALAR,NAMUNALAR,TOPSHIRIQLAR,TESTLAR",
               editor: "B.SALIMOV,SH.MUSTAFOQULOV,D.SALIMOV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MAKROIQTISODYOT",
               editor: "A.E.ISHMUHAMMEDOV,Z.A.DJUMAYEV,Q.X.JUMAYEV",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MAKROIQTISODYOT",
               editor: "X.S.XADJAEV,I.A.BAKIYEVA,SH.SH.FAYZIYEV",
               tili: "LOTIN",
              turkum: "MARUZA MATNI"
              },
              {
               name: "PERSONALNI BOSHQARISH",
               editor: "Q.X.ABDURAXMONOV,SH.R.XOLMO'MINOV,A.B.XAYITOV,A.M.AKBAROV",
               tili: "KRILL",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "IQTISODIYOT NAZARYASI",
               editor: "Z.T.GAYIBNAZAROVA,SH.A.ASAMUXAMETOV",
               tili: "LOTIN",
              turkum: "DARSLIK"
              },
              {
               name: "ИНФОРМАТЦИОННЫЕ ТЕХНОЛОГИИ В БУХГАЛТЕРСКОМ УЧЕТЕ И АУДИТЕ",
               editor: "С.М.БЫЧКОВАБ С.В.ИВАХНЕНКОВ",
               tili: "РУС",
              turkum: "УЧЕБНОЕ ПОСОБИЕ"
              },
              {
               name: "OLIY MATEMATIKA 1 QISM",
               editor: "YO.U.SOATOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "OLIY MATEMATIKA 2 QISM",
               editor: "YO.U.SOATOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "OLIY MATEMATIKA 3 QISM 1 KITOB",
               editor: "YO.U.SOATOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "OLIY MATEMATIKA 3 QISM 2 KITOB",
               editor: "YO.U.SOATOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "BUSINESS MANAGEMENT AND ADMINISTRATION",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "IQTISODIYOT BAKALAVRIYAT TALIM YO'NALISHI TALABALARI UCHUN MIKROIQTISODIYOT FANIDAN ",
               editor: "Z.ABDUKARIMOVA",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "AUDIT FANIDAN MUSTAQIL TALIM TOPSHIRIQKARI VA ULARNI BAJARISH ",
               editor: "M.SATTOROVA,Z.SHARIPOVA,D.SATTOROVA",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOT FANIDAN KURS ISHLARINI YOZISH VA UNI HIMOYA QILISH TARTIBI BO'YICHA",
               editor: "AXMEDOVA.D,ATAXANOVA.S,SHARJONOV.SH",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODCHILAR UCHUN MATEMATIKA FANIDAN AMALIY MASHG'ULATLAR ",
               editor: "B.Q.ISKANDAROV,S.M.EGAMOV,I.I.ABDUKARIMOV",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "MOLIYA FANIDAN MUSTAQIL TALIM TOPSHIRIQLARI VA ULARNI BAJARISH BO'YICHA",
               editor: "SHEROV ALISHER BAKBERGANOVICH",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "MINTAQAVIY IQTISODIYOT FANIDAN AMALIY MASHG'ULOTLARNI XORIJIY TILDA BAJARISHGA OID ",
               editor: "IBODULLAYEV ERGASH BAKTURDIYEVICH",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOT BAKALAVRIYAT TALIM YO'NALISHI TALABALARI UCHUN IQTISODIYOT NAZARYASI FANIDAN KURS ISHLARINIYOZISH VA UNI HIMOYA QILISH TARTIBI BO'YICHA",
               editor: "SHEROV.A,SAPAYEV.N,XODJANIYAZOV SH",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
               editor: "M.SH.XUSAINOV,M.S.MATKARIMOVA",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOT NAZARYASI FANIDAN MUSTAQIL TALIM TOPSHIRIQLARI",
               editor: "YAKUBOVA Y.ZAKIROVA.G",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
               editor: "B.R.ANNAZAROVA,G.M.OTAJONOVA,F.A.BEKCHANOV",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOTDA AXBOROT-KOMMUNIKATSIYA TEXNOLOGIYALARI VA TIZIMLARI ",
               editor: "B.R.ANNAZAROVA,G.M.OTAJONOVA,",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "IQTISODIYOT NAZARYASI FANIDAN    ",
               editor: "S.IBRAGIMOV",
               tili: "LOTIN",
              turkum: "MARUZA MATNI"
              },
              {
               name: "MOLIYAVIY RISKLAR NAZARYASI ",
               editor: "T.BAYMURATOV",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "INTRODUCTION TO BUSINESS AND MANAGEMENT",
               editor: "J.TIMM",
               tili: "ENGLISH",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "INNOVATSION TADBIRKORLIKNI TASHKIL ETISH VA UNI BOSHQARISHNI RIVOJLANTIRISH",
               editor: "JO'RAYEV DOSTON MA'RUF O'G'LI",
               tili: "LOTIN",
              turkum: "O'QUV-USLUBIY MAJMUA"
              },
              {
               name: "BUXGALTERYA XISOBINING AXBOROT TIZIMLARI",
               editor: "KARIMOV AKROM ABBOSOVICH,MUQIMOV ZAFAR ,TULAYRV MIRZA,KURBANBAYEV JO'RABEK ERUVBAYEVICH, RAXIMOV SHERZODS SHERKULOVICH",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "BUXGALTERYA HISOBI VA NAZARYASI ",
               editor: "B.XASHIMOV",
               tili: "KRILL",
              turkum: "DARSLIK"
              },
              {
               name: "BUXGALTERYA HISOBI VA AUDIT",
               editor: "K.B.URAZOV  ",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "EKONOMIC APPROACHES TOORGANIZATIONS ",
               editor: "SYTSE DOUMA AND HEIN SCHREUDER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THE BASICS OF BUSINESS MANAGEMENT-VOL I LEADERSHIP, FINANCIAL MAMAGEMENT AND ECONOMICS",
               editor: "ELLY R.TWINEYO KAMUGISHA",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ACCOUNTING INFORMATION SYSTEMS PART 1",
               editor: "JAMES A.HALL",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ACCOUNTING INFORMATION SYSTEMS PART 1",
               editor: "JAMES A.HALL",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ECONOMICS PART 1",
               editor: "MCCONNELL BRUE FLYNN",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ECONOMICS PART 2",
               editor: "MCCONNELL BRUE FLYNN",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THE ECONOMICS OF MONEY,BANKING,AND FINANCIAL MARKETS PART 1 ",
               editor: "FREDRIC S,MISHKIN",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "THE ECONOMICS OF MONEY,BANKING,AND FINANCIAL MARKETS PART 2",
               editor: "FREDRIC S,MISHKIN",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "MACROECONOMICS SEVENTH EDITION PART 1",
               editor: "N.GEORGY MANKIW",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "MACROECONOMICS SEVENTH EDITION PART 2",
               editor: "N.GEORGY MANKIW",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "DENGI ,KREDIT,BANKI",
               editor: "GALINA NIKOLAYEVNA BELOGLAZOVA",
               tili: "RUS",
              turkum: "DARSLIK"
              },
              {
               name: "EKONOMICS  PART 1",
               editor: "PAUL A.SAMUELSON,WILLIAM D.NORDHAUS ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "EKONOMICS  PART 2",
               editor: "PAUL A.SAMUELSON,WILLIAM D.NORDHAUS ",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "ФЫНАНСЫ ",
               editor: "ЭВИ БОДИ РОБЕРТ К.МЕРТОН",
               tili: "РУС",
              turkum: "УЧЕБНИК"
              },
              {
               name: "BASIC ECONOMETRICS PART 1",
               editor: "DAMODAR N. GUJARATI DAWN C.PORTER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "BASIC ECONOMETRICS PART 2",
               editor: "DAMODAR N. GUJARATI DAWN C.PORTER",
               tili: "ENGLISH",
              turkum: "DARSLIK"
              },
              {
               name: "XORAZM VOHASIDA ARXEOLOGIK TADQIQOTLAR TARIXI",
               editor: "MATKARIMOV XAMIDBEK OLIMBAYEVICH",
               tili: "KRILL",
              turkum: "MONOGRAFIYA"
              },
              {
               name: "IQTISODIYOT FANIDAN AMALIY MASHG'ULOTLAR",
               editor: "Q.E.MADRAXIMOV",
               tili: "LOTIN",
              turkum: "USLUBIY QO'LLANMA "
              },
              {
               name: "ЭКОНОМИЧЕСКАЯ БЕЗОПАСНОСТЬ",
               editor: "Л.П.ГОНЧАРЕНКО",
               tili: "РУС",
              turkum: "УЧЕБНИК ДЛЯ ВУЗОВ"
              },
              {
               name: "TOURISM ENGLISH FOR UZBEKISTAN",
               editor: "MARIAN KARCH STORDAH ",
               tili: "ENGLISH",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "MOLIYAVIY MENEJMENT",
               editor: "A.B.DJUMANOVA,M.N.KUSHAKOVA",
               tili: "LOTIN",
              turkum: "O'QUV QO'LLANMA"
              },
              {
               name: "ZAMONAVIY PSIXOLOGIYADA DOLZARB MUAMMOLARI:YECHIM VA ISTIQBOLLARI 1 QISM",
               editor: "DSC.D.A.URAZBAYEVA",
               tili: "LOTIN",
              turkum: "KONFERENSIYA TO'PLAMI"
              },
              {
               name: "ZAMONAVIY PSIXOLOGIYADA DOLZARB MUAMMOLARI:YECHIM VA ISTIQBOLLARI 2 QISM",
               editor: "DSC.D.A.URAZBAYEVA",
               tili: "LOTIN",
              turkum: "KONFERENSIYA TO'PLAMI"
              },
              {
               name: "BADIIY ADABIYOTLAR"
              },
              {
               name: "MENING KO'NGLIM BIR QUSHDIR",
               editor: "AYDIN XIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "IF QALASI MAHBUSI GRAF MONTE-KRISTO 1 QISM",
               editor: "ALEKSANDR DYUMA",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "IF QALASI MAHBUSI GRAF MONTE-KRISTO 2 QISM",
               editor: "ALEKSANDR DYUMA",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MOLXONA",
               editor: "JORJ ORUEL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "CHO'L BO'RISI",
               editor: "HERMANN HESSE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "RAQAMLI QALA ",
               editor: "DEN BRAUN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XODIMLARNI TANLASH SANATI",
               editor: "SVETLANA IVANOVA",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "OYNING AKSI ",
               editor: "D.ALIEVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QUVONCHBAXSH ETADIGAN ISH KELAJAK BIZNES-MODELI",
               editor: "DENNIS BAKKE",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "GULLIVERNING SAYOHATLARI",
               editor: "JONATAN SVIFT",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ROBINZON KRUZONING HAYOTI VA AJOYIB SARGUZASHTLARI",
               editor: "DANIYEL DEFO",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "IZTIROB ",
               editor: "RASHOD NURI GUNTEKIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OQ GULLAR",
               editor: "YASUNARI KAVABATA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOVVOYI YO'RG'A",
               editor: "E.SETON-TOMSON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ABADIYAT QONUNI",
               editor: "NODAR DUMBADZE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KITOB O'QIB BERUVCHI",
               editor: "BERNXARD SHLINGK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OLIM YETISTIRGAN ONALAR ",
               editor: "MURAT TOSUN",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "O'ZBEKISTON VATANIM MANIM",
               editor: "ABDULLA ORIPOV",
               tili: "LOTIN",
              turkum: "SHE'RIY TO'PLAM"
              },
              {
               name: "HIKMATLAR",
               editor: "MAHTUMQULI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SEN MENING ERTAMSAN",
               editor: "SEMIH YILMAZ",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TIRILISH",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PINOKIYONING BOSHIDAN KECHIRGANLARI ",
               editor: "KARLO KOLLODI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "VIKTORIYA",
               editor: "KNUT HAMSUN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SIRLI XILQAT",
               editor: "ANTON CHEXOV",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "G'OYANI IZLAB TOPISH",
               editor: "GENRIX ALTSHULLER",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "SARMOYADOR",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OYGUL BILAN BAXTIYOR",
               editor: "HAMID OLIMJON",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DANG'ILLAMA HOVLIDAGI O'LIM",
               editor: "JEYMIS HEGLI CHIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ISHQQA YENGILMAYMAN ",
               editor: "OMINA SHENGLIKO'G'LI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "BAQIRMAYDIGAN ONALAR",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ONA VA BOLA ",
               editor: "FERUZA QURBONOVA",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "ALVIDO,GULSARI",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HAYOT SENI SEVADI ",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "MAQSAD UZLUKSIZ RAVISHDA MUKAMMALANISH JARAYONI",
               editor: "ELIYAXU M. GOLDRATT DJEFF KOKS",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "ALVIDO,GULSARI",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "G'ARB-U SHARQ DEVONI",
               editor: "YOHANN VOLFGANG GYOTE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QIYOMAT ",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "LATTE OMILI",
               editor: "DEBID BAX JON DEVID MANN",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "TO'RTINCHI SANOAT INQILOBI",
               editor: "KLAUS SHVAB",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SEN MENING HAYOTIMNI O'ZGARTIRDING",
               editor: "ABDEL SELLU",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DO'STLIK TUXFASI",
               editor: "KENGISBOY KARIMOV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GARRI POTTER VA QAQNUS  ORDENI",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GARRI POTTER VA OLOVLI KUBOKI",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GARRI POTTER VA MAXFIY XONA",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BEZOVTALIKDAN XALOS BO'LISH VA YANGI XAYOT BOSHLASH SIRLARI",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "BOLALARIMIZ BILAN TORTISHMAYLIK",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "BOLALAR QANDAY MUVAFAQQIYATGA ERISHGANLAR",
               editor: "MO'MIN SEKMAN DR BAXAR ERISH",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "SEMIZ VA ORIQ",
               editor: "ANTON CHEXOV",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SARVIQOMAT DILBARIM",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAMARADORLIKNING 21 YO'LI",
               editor: "BRAYN TREYSI",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "QIRQ KOKILLI KELINCHAK",
               editor: "SHAHODAT ISAXONOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI  3-4 ",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI 1-2",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI  9-10",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI  11-12",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI  7-8",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI  13-14",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AFG'ON SHAMOLI  5-6",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "UZUKLAR HUKMDORI",
               editor: "JON RONALD RUEL TOLKIN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OQ KEMA ",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XITOBNOMA",
               editor: "MUNAVVAR QORI ABDURASHIDXONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NAJOT YO'LI",
               editor: "ABDURAUF FITRAT ",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NAJOT YO'LI",
               editor: "ABDURAUF FITRAT ",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BOVARI XONIM",
               editor: "GUSTAV FLOBER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DUNYONING ISHLARI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HOJIMUROD ",
               editor: "LEV TOLSTOY",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "XOLDORXON",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AL-KARNAKU KEMASIDAGI QOTILLIK",
               editor: "AGATA KRISTI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JAMILA",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TILSIMLI SHAXMAT",
               editor: "AGATA KRISTI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "FENOMENAL XOTIRA ",
               editor: "S.MUASAMEDOV",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "UCH FINJON CHOY",
               editor: "GREG MORTENSO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'YLA VA BOY BO'L",
               editor: "NAPALYON XILL",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "O'YLA VA BOY BO'L 52 HAFTA UCHUN 52 REJA",
               editor: "NAPALYON XILL",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "KRISTINA ",
               editor: "STEFAN SVEYG",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NIKOHNI ASRAY OLAMAN",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "GARRI POTTER VA AFSONAVIY TOSH",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GARRI POTER VA AJAL TUHFALARI",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GARRI POTTER VA ZATI PAST SHAXZODA",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BAHORNING O'N YETTI LAHZASI",
               editor: "YULIAN CEMYON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TIRIKLIK KOLISH BUYURILGAN ",
               editor: "YULIAN CEMYON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOLG'IZLIKNING YUZ YILI",
               editor: "GABRIEL GARSI MARKES",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ERTA QAYTGAN TURNALAR",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DON KIXOTNING SARGUZASHTLARI",
               editor: "MIGEL DE SERVANTES",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AYOL QISMATIDAN QISSALAR",
               editor: "ATIQ RAXITIY \\,JIN.P.SECCON ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BO'TAKO'Z",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ANNA KARENINA",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "ONAJON-KABAM O'ZING",
               editor: "SANJAR TURSUNOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHOLIQUSHI",
               editor: "RASHOD NURI GUNTEKIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MALIKA VA AYYOR",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYLANMA KO'NGLIMGA TUG'ILGAN DENGIZ",
               editor: "MUSLIMBEK YO'LDOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHEMPIYONDEK O'YLANG ",
               editor: "DONALD TRAMP",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DRAKULA ",
               editor: "BREM STOKER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OLTIN ZANGLAMAS ",
               editor: "SHUXRAT",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QIZIL AJDARHO",
               editor: "TOMAS HARRIS",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JENNI GERXARDT",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "MOVIY UMMONSTRATEGIYASI ",
               editor: "V.CHAN KIM RENE MOBORN",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "GONGKONGDAN KELGAN TOBUT",
               editor: "JEYMIS HEGLI CHIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "UMIDLAR INTIHODA O'LADI",
               editor: "BARIS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALVIDO,QUROL",
               editor: "E.M.HEMINGEY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AZIZIM",
               editor: "GI DE MOPASSAN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SENSIZ HAM YASHAYMAN ",
               editor: "NAZ ALTINBASH",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "MEN SIZNI SOG'INDIM,ONAJON",
               editor: "ABDURASHID NURMURODOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ISHQ QALBNING DUOSIDIR",
               editor: "EMRE TUNJER",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "XAZINALAR OROLI",
               editor: "ROBERT LUIS CTIBENSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ISHQQA OID 40 QOIDA",
               editor: "ELIF SHAFAQ",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "LABIRINTDA YURUVCHI",
               editor: "JEYMS DISHNER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAYOLIMDA GO'ZAL QOL",
               editor: "HALIS KARABENLI",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TEJAMKORLIK STARTAPTI",
               editor: "ERIK RIS",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "DAHRIYNING IBODATI ",
               editor: "ONORE DE BALZAK",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KETSAMMIKIN YOKI QOLSAMMIKAN ",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "FACTFULNESS",
               editor: "XANS ROSLING",
               tili: "LOTIN",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "ALIF ",
               editor: "PAULO KOELO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "RITA XEYVORT YOXUD SHOUSHENKDAN QOCHISH",
               editor: "STIVEN KING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEN NAYMAN ",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ONAMNING SIRLI KUNDALIGI",
               editor: "BUSHRA KUCHUK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SHUNCHA SHINGANI KIM YEGAN",
               editor: "PAK VAN SO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YEVGENI ONEGIN ISHQ QISSASI",
               editor: "ALEKSANDR SERGEYVICH PUSHKIN",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "YASHIL KECHA ",
               editor: "RASHOD NURI GUNTEKIN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TO'LAQONLI XAYOT BU BIZNES-LOYIHA",
               editor: "RADISLAV  GANDAPAS",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "QO'ZICHOQLAR SUKUNATI",
               editor: "TOMAS HARRIS",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "CHERNOBIL TAVALLOSI",
               editor: "SVETLANA ALIKSEYVICH",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GAP QAHVADA EMAS ",
               editor: "XOBARD BEXAR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HAYOTNI SOKINLASHTIRISH PAYTI ",
               editor: "KINSUN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QULAYOTGAN TOG'LAR",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TOG' CHINDAN HAM O'SHA YERDA BO'LGANMI",
               editor: "PAK VAN SO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MAUGLI",
               editor: "JOZEF REDYARD KIPLING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OTKAN KUNLAR",
               editor: "ABDULLA QODIRIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AKRAMNING SARGUZASHTLARI  ",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HIKMATLAR",
               editor: "JALOLIDDIN RUMIY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OTAMDAN QOLGAN DALALAR",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ONA LOCHIN VIDOSI",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "IKKI ESHIK ORASI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAMARQAND OSMONIDA YULDUZLAR 2 KITOB ",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAMARQAND OSMONIDA YULDUZLAR 3 KITOB ",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ABADIY ZAMONDOSH",
               editor: "OLIM TOSHBOYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHO'QINTIRILGAN OTA YOKI MAFIA SARDORI",
               editor: "MARIO PYUZO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AMERIKA FOJEASI 1-2 KITOB",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HIKMATLAR",
               editor: "LEV TOLSTOY",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "SEVGI SANATI",
               editor: "ERIX FROMM",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEN,DADAM VA ALSGEYMER",
               editor: "NODRABEGIM",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "0 DAN BOSHLANGAN BIZNES",
               editor: "ERIK RIS",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "KASANDRA TAMG'ASI",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ERTA QAYTGAN TURNALAR",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "STIV JOBS",
               editor: "UOLTER AYZEKSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOBURNOMA",
               editor: "ZAHIRIDDIN MUHAMMAD BOBUR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "UCH OG'AYNI ",
               editor: "ERIX MARIYA REMARK",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BIR BARAKALI MARKETING REJA",
               editor: "ALLAN DIB",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "DUNYO MAMLAKATLARI",
               editor: "LAZIZ RAXMATOV",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "JINOYAT KO'CHASIDAGI ISHQ",
               editor: "IRODA UMAROVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OLMOS KAMAR",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SIZGA HAM YOQISHI MUMKIN",
               editor: "TOM BANDERBILT",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "RUXIYAT ALIFBOSI",
               editor: "BAXODIR KARIM",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "AMIRLIKNING OLTIN TAXTI IZIDAN",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MILLION DOLLARLAIK XATOLAR",
               editor: "PAVEL ANNENKOV",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "DORIXONADAGI QOTILLIK",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QADR KECHASIDA QOTILLIK",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOTANIKLAR HAM BIZNES QILADI",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QIMMATGA TUSHGAN XATO",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SURGUNDAGI SARGUZASHTLAR",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TEMURIYLAR KUTUBXONASINING",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BIZNES HAQIDA DUNYONI O'ZGARTIRGAN ODAMLARNING 250 TA MULOHAZASI ",
               editor: "STIV JOBS",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "KECHIKKAN QASOS",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SO'POQSOYDAGI SIRLI QOTILLIK",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'G'IRLANGAN BOLALIK",
               editor: "KOMIL SINDAROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SONATA TILSIMI",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "O'LSANG KIM YIG'LAYDI",
               editor: "ROBIN SHARMA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEHROBDAN CHAYON",
               editor: "ABDULLA QODIRIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'Z FERRARISINI SOTGAN ROHIB",
               editor: "ROBIN SHARMA",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MARTIN IDEN",
               editor: "JEK LONDON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "UCH ILDIZ",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OSHIQ OHI ",
               editor: "MAHMUD TOIR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KOMILA ",
               editor: "RAXIM KARIMOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JAVDARZODANING XALOSKORI",
               editor: "JEROM CELINJER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MANAVIY MASNAVIY",
               editor: "JALOLIDDIN RUMIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AYOL DONOLIGI",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ONA TARBIYASI ",
               editor: "AZIZ NESIN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "MAVLONO:BIR ISTAGINGIZ RO'YOBGA CHIQSA ,BIR XAYR-RO'YOBGA CHIQMASA MING XAYR IZLANG",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "IKKI DIANA",
               editor: "ALEKSANDR DYUMA",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "MUKAMMAL RAXBAR",
               editor: "ISXAK KALDERON ADIZES",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "VOZ KECHILMAS AYOL BO'LISH",
               editor: "HAKAN O'ZKAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TARAS BULBA",
               editor: "NIKOLAY VASILYEVICH ",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "GO'RO'G'LINING TUG'ULISHI",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YUQUMLILIK ",
               editor: "YONA BERGER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BORN MUQOYASI ",
               editor: "ROBERT LADLEM",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JINOYAT VA JAZO",
               editor: "FEODOR DOSTAEVSKIY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "BUZRUKNING KO'ZI",
               editor: "GABRIEL GARSI MARKES",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'Z TAQDIRINGIZNI KASHF ETING ",
               editor: "ROBIN SHARMA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TO'RT ULUS TARIXI",
               editor: "MIRZO ULUG'BEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'ZBEKISTONLIK IKKINCHI JAHON URUSHI QAHRAMONLARI",
               editor: "A.A.AXMEDOV,A.A.JO'RABOYEV,M.M.YO'LDASHEV,A.ZIYO,X.A.QARSHIYEV,A.S.KAN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OLTIN KALIT YOKI BURATINONING BOSHIDAN KECHERGANLARI",
               editor: "ALEKSEY TOLSTOY",
               tili: "LOTIN",
              turkum: "ERTAK-QISSA"
              },
              {
               name: "HAYOTIMIZ KENGURULARI",
               editor: "SANJAR XO'JA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QADRIM",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MORRINING SESHANBA DARSLARI",
               editor: "MICH ELBOM",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ONALIK MAQOMI",
               editor: "NOILA XOLMUHAMMAD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHAMO ORTIDAN YUGURIB",
               editor: "XOLID HUSAYNIY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ITYURAK ",
               editor: "MIXAIL BULGAKOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "ERTAGA O'LDIRGANI BORAMAN",
               editor: "ISHMAEL BIX",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JUDA MAYUSSAN",
               editor: "PAK VAN SO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SIDDHARTHA",
               editor: "HERMANN HESSE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAYOTINGIZNI QADRLANG O'ZINGIZNI DAVOLANG",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "SAROB ",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DARYO ORTIDAGI YIG'I",
               editor: "QO'CHQOR NORQULOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MENI UNUTMA SENGA SEVISHNI MEN O'RGATDIM",
               editor: "HAKAN O'ZKAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "KEKSAGANING SO'NGI NISHONI",
               editor: "AKBAR MIRZO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KAPITAN GRANT BOLALARI",
               editor: "JYUL VERN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AMIR TEMUR",
               editor: "MARSEL BRION",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAMMASI YAXSHI BO'LADI",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "XAYYOMDAN BIR KOSA RUMIYDAN BIR JOM",
               editor: "SIROJIDDIN SAIDIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TOM SOYERNING BOSHIDAN KECHIRGANLARI",
               editor: "MARK TVEN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GOBLINLAR QO'RIQXONASI",
               editor: "KLIFFORD SAYMAK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ASROR BOBO",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOSHLIKDA BERGAN KO'NGIL",
               editor: "HABIB NU'MON",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "IZTIROB ",
               editor: "SULAYMON HAYDAR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MIRZO ULUG'BEK",
               editor: "MAQSUD SHAYXZODA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SENI BUGUN KO'RMASAM BO'MAS",
               editor: "IQBOL MIRZO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OLTIN ZANGLAMAS ",
               editor: "SHUXRAT",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HAYOT",
               editor: "GIDE MOPASSAN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HIKOYA,OCHERK VA HAJVIYALAR TO'PLAMI",
               editor: "ABDULLA QODIRIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MENING HAYOTIM ",
               editor: "XENRI FORD",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PANDALAR UCHA OLADI",
               editor: "CANER YAMAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "KATTA TO'RTLIK",
               editor: "SKOTT GELLOEY",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "TEATR",
               editor: "SOMERSET MOEM",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MARTIN IDEN",
               editor: "JEK LONDON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SOMON YO'LI",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JANNATGA MAKTUBNOMA",
               editor: "ADAM UZKUSA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "URISHNING DAVOMI",
               editor: "NABI JALOLIDDIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QIMORBOZ ",
               editor: "FYODOR DOSTOYEVSKIY",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "KUNTUG'MISH",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHINOR",
               editor: "ASQAD MUXTOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TOGLAR OLISDAN KO'RINADI",
               editor: "GULYUZ MIRMUHSIN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HIKOYA VA QISSALAR TO'PLAMI",
               editor: "SHUHRAT",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OTAMDAN QOLGAN DALALAR",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KITOBXON KUNDALIGI",
               editor: "SARDOR MAQAZIYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JANNA DARK",
               editor: "MARK TVEN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DUSHMAN",
               editor: "MURATBOY NIZAMOV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HAYOT-MAMOT",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SIZ NIMANI O'YLASANGIZ MEN O'SHANI KO'RAMAN",
               editor: "JO NAVARRO",
               tili: "LOTIN",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "BEGONA",
               editor: "OTAJON TOGON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "FRANKENSHTEYN",
               editor: "MERI SHELLI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ME'MOR",
               editor: "MIRMUHSIN",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MILLIONERLAR KABI FIKRLANG",
               editor: "XARV EKER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AGAR OSHIQLIGIM AYTSAM",
               editor: "MASHRAB",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ELJERNONZAGA ATALGAN GULLAR",
               editor: "DANIEL KIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NOMUS",
               editor: "ELIF SHAFAQ ",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "KALLAXONALIK YIGITCHA ROMAN",
               editor: "ALISHER MIRZO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TANLANGAN ASARLAR",
               editor: "G'AYBULLOH AS-SALOM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BALIQCHI VA O'G'LI",
               editor: "LIVANELI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ASIRNI QARITGAN KUN",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SALAMADRALAR BILAN JANG",
               editor: "KAREL CHAPEK",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "CHOL VA DENGIZ",
               editor: "ERNEST XEMINGUEY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: " QARZGA OLINGAN UMR",
               editor: "ERIX MARIYA REMARK",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "REWORK PRINSIPLARSIZ BIZNES",
               editor: "MATLUBA RAXMONQULOVA",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "AVLODLAR DOVONI",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAXTLI HAYOT SARI",
               editor: "ZIYOVUDDIN RAXIM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ABDULXAMID SO'NGGI HUKMDOR",
               editor: "OKAY TIRYAKO'G'LI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "O'YIN",
               editor: "XURSHID DO'STMUHAMMAD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JEYN EYR",
               editor: "SGARLOTTA BRONTE",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DIKTATURADAN DIMOKRATYAGA",
               editor: "JIN SHARI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SAHNA SARDORI",
               editor: "X.ABDUSAMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YALONG'OCH IQTISODIYOT",
               editor: "CHARLIZ ULIAN",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "ISHQING TUPROQ QILGAY",
               editor: "UMAR XAYYOM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JOSUSLAR O'YINI ",
               editor: "XUDOYBERDI NAZAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "RAQAMLAR UCHUN YARALGAN IDROK",
               editor: "BARBARA OUKLI",
               tili: "LOTIN",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "TASAVVUFIY HIKOYALAR",
               editor: "GO'ZAL MIRZAALIYEVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TAQDIRINGIZNI BOSHQARING",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "ILOHIYNOMA SAYLANMA 2 ",
               editor: "SHAYX FARIDDIN ATTOR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ZULAYHO DARAXTI",
               editor: "NORMATOV NODIR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ULUG'BEK YULDUZLAR SALTANATI",
               editor: "OTABEK QUVVAT",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ZULMAT ICHRA NUR",
               editor: "MIRKARIM OSIM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHARPALAR SOYASI",
               editor: "AZAMAT KORJOBOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ABADIYAT QONUNI",
               editor: "NODAR DUMBADZE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QISSA,HIKOYA,VA OCHERKLAR TO'PLAMI",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GARRI POTTER VA AZKABAN MAHBUSI",
               editor: "JOANNA KETLIN ROULING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALPOMISH",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SARAFAN MARKETING",
               editor: "ENDI SERNOVIS",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "SIROJIDDIN MAHDUM-SIDQIY XANDAQLIQIY",
               editor: "ASIL ASAD",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NOTANISH ODAM PARIJDA ",
               editor: "UILYAM SOMERSET MOEM",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AJAL BILAN YUZMA-YUZ 2",
               editor: "AKBAR MIRZA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BOLALIK XOTIRALARIM",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QUYOSH QORAYMAS",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "21 KUN ICHIDA BAXTLI BO'LING",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ODAM NECHA MARTA TUG'ILADI",
               editor: "JAHONGIR PIRMUHAMMEDOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NAVOIY",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BIZNES SARGUZASHATLAR",
               editor: "JON BRUSK",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "SO'NA",
               editor: "ETEL LILIAN VOYNICH",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ASKAR BOLA",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MALAZGRITDA JUMA TONGI",
               editor: "YAVUZ BAXODIR O'G'LI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SOYALAR",
               editor: "G'AFUR G'ULOM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HAYOTGA QAYT",
               editor: "GULSEREN BUG'DAYJIO'G'LI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KO'RINMAS ODAM",
               editor: "HERBERT UELLS",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "FARENGEYT BO'YICHA 450 ",
               editor: "REY BREDBERI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ODDIY AYRILIQ",
               editor: "AVAR OBIDJON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YODGOR",
               editor: "G'AFUR G'ULOM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHUM BOLA",
               editor: "G'AFUR G'ULOM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AJAL  CHAQIRIG'I",
               editor: "OZOD MO'MIN XO'JA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JAZOSIZ TARBIYA",
               editor: "ADEM GUNESH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "QUSH QAFASDA QANOT QOQMAYDI",
               editor: "MIRZO KENJABEK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOLG'ONLAR SHAXRI",
               editor: "RAMITA NAVAI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PORTOBELLO JODUGARI",
               editor: "PAULO KOELO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ONANING MEHR NURI",
               editor: "ODILJON MAHMUDOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KUMUSH QASHQA ",
               editor: "ARTUR KONAN DOYL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AMIR TEMUR SALTANATI",
               editor: "LYUSEN KEREN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BEPARVOLIKNING NOZIK SANATI",
               editor: "MARK MENSON",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "YASHIL MILYA",
               editor: "STIVEN KING",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALKIMYOGAR",
               editor: "POULO KOELO",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QO'RQINCHLI TEHRON",
               editor: "MUSHFIQ KOZIMIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "IBTIDO",
               editor: "DEN BRAUN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MITTIVIY VA KARLSON",
               editor: "ASTRID LINDGREN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OSON YASHANG",
               editor: "ENDRYU METYUS",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "TITRAYOTGAN TOG'",
               editor: "LUQMON BO'RIXON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BEGONA VABO",
               editor: "ALBERT KAMYU",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "RUSTAMXOM",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YUSUF VA AHMAD",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BEZORILIK IQTISODIYOTI",
               editor: "ALEKSEY MARKOV",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "MUVAFAQQIYAT KALITI",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "DIQQAT CHALG'ITUVCHI DUNYODA MUVAFAQQIYAT SIRLARI",
               editor: "KEL NYUPORT",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "QALB BESABRLIGI",
               editor: "STEFAN SVEYG",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BORSA KELMASDAN QAYTGANLAR",
               editor: "CHINGIZ ABDULLAYEV",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DAHOLAR DAVRASI",
               editor: "XAMIDJON XOMIDIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ULUG' ONANING JANOZASI",
               editor: "GABRIEL GARSI MARKES",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QALBIM SENI UNUTMAYDI",
               editor: "SEVIM ASIMGIL",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "RAVSHAN",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHINGIZXONING OQ BULUTI",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XAROBADAN CHIQQAN MILLIONER",
               editor: "BIKAS CVARUP",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALKIMYOGAR",
               editor: "PAULO KOELO",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SHAYX NAJMIDDIN KUBRO ",
               editor: "ZAMIRA IS'HOQOVA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YIGIRMA YIDAN SO'NG",
               editor: "O'HENRI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XIYONAT KO'CHASI",
               editor: "GULCHEHRA RAZZOQOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ORZUYINGDAGI BIZNESNI BOSHLASH UCHUN 100 TA ENG ZO'R G'OYA",
               editor: "KEN LANGDON",
               tili: "LOTIN",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "JAZOSIZ TARBIYA 2 ",
               editor: "ADEM GUNESH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "MASGREYVLAR UDUMI",
               editor: "ARTUR KONAN DOYL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PROFESSOR DOELNING BOSHI",
               editor: "ALEKSANDR BELYAYEV",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TURNALAR YO'LI",
               editor: "TURSUN ALI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AZIZIM",
               editor: "GIDE MOPASSAN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ORZIQIB KUTAMAN ERTANI 2",
               editor: "TILLA BEGSHOV  SINDI SHELDON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "12 STUL",
               editor: "I.ILIF E.PETROV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KOMETA",
               editor: "GULNOZ MO'MINOVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HIKOYALAR TO'PLAMI",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "UBAYS QORONIY",
               editor: "RAUF CHILLASIN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SOHIL BO'YLAB CHOPAYOTGAN OLAPAR",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "URISH VA TINCHLIK",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "PARILAR TILSIMI",
               editor: "XAMID ALP",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ATOM ODATLAR",
               editor: "JEYMS KLIR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "1984",
               editor: "JORJ ORUEL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NAVOIY",
               editor: "OYBEK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MOMOQO'SHIQ",
               editor: "NAZAR ESHONQUL",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JANNATGA YO'L HAKIM VA AJAL RANJKOM SOHIBQIRON",
               editor: "ABDULLA ORIPOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GRUZYA MUVAFAQQIYATGA QANDAY ERISHDI",
               editor: "LARISA BURAKOVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAYOLIMGA BO'LAMAN TUTQUN",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHOL HAVOSI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SOG'INCH",
               editor: "FARMON TOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "RIM ERTAKLARI",
               editor: "JANNI RODARI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MENING QO'SHNIM MILLIONER",
               editor: "UILYAM D.DANKO TOMAS DJ.CTENLI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OSVENSIMDAGI TATIROVKACHI",
               editor: "XEZER MORRIS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QISSA,HIKOYALAR TO'PLAMI",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KO'RGIM KELAR SENI NEGADIR",
               editor: "BOBUR BOBOMUROD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XOIN",
               editor: "RAVSHAN YO'LDOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KALILA VA DIMNA",
               editor: "HIND EPOSI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ILIADA",
               editor: "HOMER",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "VENESIYA MISSIYASI",
               editor: "JEYMS HEGLI CHIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "LAYLONING UYI",
               editor: "LIVANELI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QUTLUG'QON",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NAVOIY",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QORA KO'ZLAR",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ICHINDAGI ICHINDADUR",
               editor: "JALOLIDDIN RUMIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KATTA O'YIN",
               editor: "PIRTER XOPKIRK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ORZIQIB KUTAMAN ERTANI ",
               editor: "SIDNI SHELDON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "RUBOIYLAR",
               editor: "UMAR XAYYOM",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOLG'IZLIKNING YUZ YILI",
               editor: "GABRIEL GARSI MARKES",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOSH VRACH KUNDALIGI",
               editor: "MIXAIL BULGAKOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "OLTIN VODIYDAN SHABADALAR",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YAXSHIYAMKI HAYOTIMDA YOQSAN",
               editor: "HAKAN O'ZKAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "CHINOR",
               editor: "ASQAD MUXTOR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JAMILA",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DASHTDAGI OLOV",
               editor: "HABIB ABDUNAZAR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TONGGACHA YASHASA",
               editor: "VASIL VIKOV",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QALBDAGI O'CHMAS IZLAR",
               editor: "ZIKIR MUHAMMADJONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ICHIMIZDAGI MAVLINO RUMIY ",
               editor: "JIHAN O'QUYUJI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'TMISHDAN ERTAKLAR",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SUNBULANING SO'NGI OQSHOMI",
               editor: "SANJAR TURSUNOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ONAIZOR ",
               editor: "ODIL YOQUBOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'TKAN KUNLAR",
               editor: "ABDULLA QODIRIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YULDUZLI TUNLAR",
               editor: "PIRIMQUL QODIROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MEHROBDAN CHAYON",
               editor: "ABDULLA QODIRIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NUR VA SOYALAR ",
               editor: "ROBINDRANAT TAGOR",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OSMONDAN TUSHGAN XAZINA",
               editor: "QUTLIBIKA RAXIMBOYEVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XIYONAT  ",
               editor: "ABROR ZOHIDOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JAYHUN USTIDA BULUTLAR",
               editor: "MIRKARIM OSIM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAXT YETKAZISH MILLIARD DOLLARLIK INTERNET DO'KON TARIXI",
               editor: "TONI SHEY",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "GO'ZAL YENGILDIK",
               editor: "JANER YAMAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "QISSA,HIKOYA VA OCHERKLAR TO'PLAMI",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "METRO",
               editor: "DMIRTIY ALEKSEYVICH GLUXOVSKIY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "BIZ GLINDANI SHUNDAY YAXSHI KO'RAMIZ",
               editor: "XULIO  KORTASAR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAYYOM  ",
               editor: "NABI JALOLIDDIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YEVGENIY ONEGIN ",
               editor: "A.S.PUSHKIN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XUZURSIZLIK",
               editor: "LIVANELI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MILLAT QIZIGA",
               editor: "RAXIMA SHOMANSUROVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JANNAT QIDIRGANLA",
               editor: "SHUHRAT",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MUVAFAQQIYATLI INSONLARNING 7 KO'NIKMASI",
               editor: "STIBEN R.KOVI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AYRILMAS ER",
               editor: "FYODOR DOSTOYEVSKIY",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "OLMOS KAMAR",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHORUH VA GAVHARSHOD",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KECHA VA KUNDUZ",
               editor: "ABDULHAMID CHO'LPON",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BOLALIK XOTIRALARIM",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ERK",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KOD BUZAR",
               editor: "UOLTER AYZEKSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YAPON ZOBITI",
               editor: "ATO XAMDAM,LEONID CHIRIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "UCH O'LIM",
               editor: "LEV NIKOLAYEVICH TOLSTOY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SEMIZ VA ORIQ",
               editor: "anton pavlovich chexov",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YULDUZLI TUNLAR",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHISHA QOLIP",
               editor: "SHAHLO XOSHIMOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QORAQUSH YULDUZINGING SIRI",
               editor: "ISAJON SULTON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MARHAMATLI KUN",
               editor: "LUQMON BO'RIXON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BASKERVILLAR ITI",
               editor: "ARTUR QONAN DOYL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QORA KO'ZLAR",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "PITER PEN",
               editor: "J.M.BARRI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QAYSI BIRIMIZ SEVMAGANMIZ",
               editor: "ETHEM EMIN NEMUTLU",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BAXT SARI TO'RT QADAM",
               editor: "JO VITALE",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SERENADA",
               editor: "LIVANELI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QONLI YO'RGAKLAR",
               editor: "ABDURASHID NURMURODOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HAQIQIY MO'JIZA O'ZINGA ISHONMOQDIR",
               editor: "ETHEM EMIN NEMUTLU",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TOG'LAR HAM SADO BERDI",
               editor: "XOLID XUSAYNIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "VIJDON QO'NG'IROG'I",
               editor: "ASHURALI JO'RAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAXT ORTIDAN QUVIB",
               editor: "KRIS GARDNER,KVINSI TRUP",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OT KISHNAGAN OQSHOM",
               editor: "TO'G'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YO'LGA CHIQSANG MANZIL KO'RINAD",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TANLANGAN ASARLAR",
               editor: "G'OFUR G'ULOM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'ZBEGIM",
               editor: "ERKIN VOHIDOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MEHROBDAN CHAYON",
               editor: "ABDULLA QODIRIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AMERKA FOJIASI 3-KITOB",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HECH BIR UCHRASHUV TASODIF EMAS",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SAVOL ORTIDAGI SAVOL",
               editor: "JON G.MILLER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOLALIK XOTIRALARIM",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AJIB YANGI DUNYO",
               editor: "OLDOS XAKSLI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "FIDOYI",
               editor: "PREMCHAND",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'YINLAR NAZARIYASI",
               editor: "BARRI J.NEYLBAFF, AVINASH DIQSIT",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEROS",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SINCHALAK",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AYOL  ",
               editor: "ZULFIYA QUROLBOY QIZI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QAYDASAN MO'JIZA",
               editor: "ABDUQAYUM YO'LDOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ODAM BO'LISH QIYIN",
               editor: "O'LMAS UMARBEKOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KREYSER SONATASI",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "SARIQ IBLIS",
               editor: "JAHONGIR AYUB",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NAVOIY",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ASRIY AN'ANALAR ASOSIDA TURK OSHXONASI",
               editor: "JAHONGIR ODILOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SUKUNATNING SASSIZ SADOSI",
               editor: "SHERMUROD SUBXON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHE'RLAR TO'PLAMI",
               editor: "ERKIN VOHIDOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "USMON NOSIR",
               editor: "XURSHID SEROBOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAMARQAND OSMONIDA YULDUZLAR 1 KITOB",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MOVIY KARBUNKUL",
               editor: "ARTUR KONAN DOYL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QO'RQUV VODIYSI",
               editor: "ARTUR KONAN DOYL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QO'RQMA",
               editor: "JAVLON JOVLIYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "UYIMIZ JANNATGA AYLANSIN",
               editor: "AXMET BULUT AXMET AKIN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ATOM ODATLAR",
               editor: "JEYMS KLIR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OQ KEMA ",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'ZINGNI QADRLA",
               editor: "ANASTASIYA ZALOGA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QIZIL TOSHBO'RON",
               editor: "NABIJON BOQIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'RIK GULLAGANDA",
               editor: "HAMID OLIMJON",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XAYOTNING ENG BUYUK",
               editor: "RONDA BERN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAYRLISI",
               editor: "ONUR QOPLON",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ORZIQIB KUTAMAN ERTANI",
               editor: "SINDI SHELDON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ZOLIM ISTANBUL",
               editor: "UMIDA ADIZOVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ANNA KARENINA",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MUNGLI KO'ZLAR",
               editor: "XUDOYBERDI TO'XTABOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ALVON YELKANLAR",
               editor: "ALEKSANDR GRIN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DANG'ILLAMA HOVLIDAGI O'LIM",
               editor: "JEYMS HEGLI CHIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEN BOLAMNI URMAYMAN",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "QALBINGIZ SOF BO'SA HIKOYANGIZ BAXTLI YAKUNLANADI",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "AYOL QISMATIDAN QISSALAR",
               editor: "JIN P.SESSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'N SAKKIZGA KIRMAGAN KIM BOR",
               editor: "SHUKUR XOLMIRZAYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "URISHNING SO'NGI QURBONI",
               editor: "O'TKIR HOSHIMOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TALVASA",
               editor: "TOHIR MALIK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'GAY ONA ",
               editor: "AXMAD LUTFI QOZONCHI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QIROLICHANING YURISHI",
               editor: "UOLTER TEVIS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ASR AFSONALARI",
               editor: "ESHQOBIL SHUKUR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DO'ST ORTTIRISH VA ODAMLARGA TASIR O'TKAZISH",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BARCHASI SENGA ATALGAN",
               editor: "ERDOOG'AN YILDIRIM",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "O'TKAN KUNLAR",
               editor: "ABDULLA QODIRIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ALAMLI DUNYODA ALAMLI GULIM",
               editor: "SIROJIDDIN SAIDIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QISSALAR ",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SO'NGGI TO'FON",
               editor: "AXMAD LUTFI QOZONCHI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JAMIL ",
               editor: "MUHAMMAD KABIR UMAR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SHUNCHA SHINGANI KIM YEGAN",
               editor: "PAK VAN SO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SARVQOMAT DILBARIM",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAXSHAT ABDULLA QAHHOR",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "PESHONAMDAGI NUR ",
               editor: "MEHMET OLAQOSH",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QIYOMAT",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BO'STON",
               editor: "SA'DIY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "GO'ZAL YENGILDIK",
               editor: "JANER YAMAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ISTEDODLI INSONLAR MAMLAKATNING BEBAHO BOYLIGIDIR",
               editor: "M.A.RAXMATOV,B.Z.ZARIPOV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XOLDORXON",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MILLION DORLLARLIK XATOLAR",
               editor: "PAVEL ANNENKOV",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KATTA O'YIN",
               editor: "PETER HOPKIRK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OLIGARXNING MEROSXO'RI",
               editor: "CHINGIZ ABDULLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'Z USTINGDA ISHLA",
               editor: "NORBEKOV MIRZAKARIM",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TITRAYOTGAN TOG'",
               editor: "LUQMON BO'RIXON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OSMON OG'USHI",
               editor: "ABDUQAYUM YO'LDOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ASL OTALAR KITOBI",
               editor: "JALOLXON  UMAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ASL OTALAR KITOBI",
               editor: "ULUG'BEK SHARIPOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QAMAL",
               editor: "ISMOIL SHOMURODOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MARHAMATLI KUN",
               editor: "LUQMON BO'RIXON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QORA QUSH YULDUZNING SIRI",
               editor: "ISAJON SULTON ",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KELMASANG HAM KUTAMAN",
               editor: "BERKUTAY SOYSAL",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "YAXSHI OTALAR KITOBI",
               editor: "SARDOR NAZAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BIZNES BU MEN UCHUN",
               editor: "YEVGENIY GENKIN",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "MUVAFAQQIYATLI INSONLARNING 7 KO'NIKMASI",
               editor: "STIVEN R.KOVIY",
               tili: "LOTIN",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "JEYN EYR",
               editor: "SHARLOTTA BRONTE",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ADABIYOT MUALLIMI",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ANOR",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DUNYO BOLALARI",
               editor: "ASQAD MUXTOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'Z FERRARISINI SOTGAN ROHIB",
               editor: "ROBIN SHARMA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ONAIZOR ",
               editor: "MIRMUHSIN",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AMERIKA FOJEASI 1-2 KITOB",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DARDI BEDAVO",
               editor: "NOSIR ZOXID",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHIMOL HIKOYALARI",
               editor: "JEK LONDON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BO'RI BOLALARINI QANDAY O'RGATADI",
               editor: "LEV TOLSTOY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NOTO'G'RI HAYOT TO'G'RI YASHALMAYDI",
               editor: "ATHAM AMIN NEMUTLU",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TAFAKKUR CHASHMASI",
               editor: "SOHIB KAMOL",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ULUG' ONANING JANOZASI",
               editor: "GABRIEL GARSI MARKES",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DUMBUL BOYVACHCHA",
               editor: "D.I.FONBIZIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ORZUDAN TONMAGAYMIZ",
               editor: "ANVAR OBIDJON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DIYONAT",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SO'Z YOLQINI",
               editor: "QOZOQBOY YO'DOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KO'HNA DUNYO ",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHISHA QOLIP",
               editor: "SHAXLO HOSHIMOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ANOR",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AZIZIM",
               editor: "GIDE MOPASSAN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BIR O'ZBEK O'YI",
               editor: "OLIM JUMABOEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KO'KLAM KUYI",
               editor: "FOZIL FARXOD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QUYONLAR SALTANATI",
               editor: "XUDOYBERDI TO'XTABOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BESH BOLALI YIGITCHA",
               editor: "XUDOYBERDI TO'XTABOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SEHRLI OLMOS UZUK",
               editor: "SAYYORA SADULLAYEVA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XIYONAT",
               editor: "ABROR ZOHIDOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GOBLINLAR QO'RIQXONASI",
               editor: "KLIFFORD SAYMAK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AYOL",
               editor: "ZULFIYA QUROLBOY QIZI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ZAMONDOSHLAR XOTIRASIDA",
               editor: "SHUHRAT",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "VIJDON QO'NG'IROG'I",
               editor: "ASHURALI JO'RAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GO'SHTDAN TAYYORLANADIGAN TAOMLAR",
               editor: "SOTIBOLDIYEVA ODINAXON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QADRIM",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHAFTOLI GULI",
               editor: "NAZAR ESHONQUL",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MEROS",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DUSHMAN",
               editor: "MURATBOY NIZAMOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAHOLAR DAVRASI",
               editor: "XAMIDJON XOMIDIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OTAMNING NASIHATI",
               editor: "XAYRULLOH QOSIM ELTURK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ASRNI QARITGAN KUN",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "FARENGEYT BO'YICHA 450 ",
               editor: "REY BREDBERI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALISA KO'ZGUORTI O'LKASIDA",
               editor: "LYUIS KERROLL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BALACHAK",
               editor: "AYBEK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MUROSAYU MADORA",
               editor: "SEMA MARASHLI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "SIZ QO'RQUVDAN KUCHLIROQSIZ",
               editor: "REDJIN GALANTI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'Z FERRARISINI SOTGAN ROHIB",
               editor: "ROBIN SHARMA",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "CHINOR",
               editor: "ASQAD MUXTOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XALOSKOR SULTON SAYFIDDIN QUTUZ",
               editor: "SHAHODAT ULUG'",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TAQDIRINGIZNI BOSHQARING",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ДЕНЬ ПОСЛЕДНИЙ И ПЕРВЫЙ",
               editor: "VIKTOR SUMIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALIFDEK SEVMOQ NAFAS",
               editor: "HIKMAT AMIN USTEKIN",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "OYDINDA YURGAN ODAMLAR",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BO'LADIGAN BOLALAR ",
               editor: "PO'LAT MO'MIN",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SIRLI TABOBAT",
               editor: "ABU ALI IBN SINO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NAJOT",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TIRIK RUHLAR",
               editor: "SHUKRULLO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GO'DAKLIKDAN YIGITLIKKA QADAR",
               editor: "SHENIZ YUJEL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BUXORO TARIXI",
               editor: "ABU BAKR MUHAMMAD IBN JAFAR SHARSHAXIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MASHRAB G'AZALLARI ",
               editor: "MASHRAB",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BARON MYUNXAUZENNING SARGUZASHTLARI",
               editor: "RUDOLF ERIX RASPE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JAYHUN USTIDA BULUTLAR",
               editor: "MIRKARIM OSIM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BO'RONLARDA BORDEK HALOVAT",
               editor: "ASQAD MUXTOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHOL VA DENGIZ",
               editor: "ERNEST XEMINGUEY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PUL OQIMINING KVADRANTI",
               editor: "R.T.KIYOSAKI,SH.L.LECHTER",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "AJIB YANGI DUNYO",
               editor: "OLDOS XAKSLI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TANA VA RUHNI TARBIYALASH",
               editor: "MIRZAKARIM NORBEKOV",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "SOHIBQIRON",
               editor: "ABDULLA ORIPOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QONLI YO'RGAKLAR",
               editor: "ABDURASHID NORMURODOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QO'RQINCHLI TEHRON",
               editor: "MUSHFIQ KOZIMIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DAQIQA QADRI 1",
               editor: "ABDURASUL ABDULLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAQIQA QADRI 2",
               editor: "ABDURASUL ABDULLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAQIQA QADRI 3",
               editor: "ABDURASUL ABDULLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "VAQT BU PUL",
               editor: "BANDJAMIN FARAKLIN",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "GULISTON BO'STON",
               editor: "SADIIY SHEROZIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DIQQAT CHALG'ITUVCHI DUNYODA MUVAFAQQIYAT SIRLARI",
               editor: "KEL NYUPORT",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "REWORK BID'ATLARDAN XOLI BIZNES",
               editor: "DEBIT HANSON JEYSON FRAYT",
               tili: "LOTIN",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "IBTIDO",
               editor: "DEN BRAUN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TENTAKNING TAJRIBASI 1",
               editor: "MIRZAKARIM NORBEKOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHERNOBIL TAVALLOSI",
               editor: "SVETLANA ALIKSEYVICH",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DUNYO MALAKATLARI",
               editor: "BUSHUEVA L",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "BAXTLI BO'LISH SIRLARI ",
               editor: "MIRINAL KUMAR GUPTA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SAVOL ORTIDAGI SAVOL",
               editor: "JON G.MILLER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KO'P NARSADAN BEXABAR EDIM",
               editor: "SONGUL UNSAL",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "INSON QANDAY QILIB O'ZIDA ISHON QABUL QILA BILISHGI VA OMMA OLDIDA GAPIRA TURIB ODAMLARGA QANDA TASIR O'TKAZA BILISHI HAQIDA",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "G'OYIB BO'LGAN ATIRGUL  ",
               editor: "SERDAT O'ZKAN",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "INSON HUSNI",
               editor: "MIRZAKALON ISMOILIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SENI DESALAR YONAR QALBIM",
               editor: "TOZAGUL",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BALOG'AT PILLAPOYALARI ",
               editor: "MANZURA ZAYNUTDINIVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SENI SEVAMAN DEMA ,SEV",
               editor: "MIRACH CHAG'RI OQTOSH ",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "VAQT MASHINASI",
               editor: "HERBERT UELLS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TOM TOG'ANING KULBASI ",
               editor: "GARRIET BICHER-STOU",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OT KISHNAGAN OQSHOM",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KECHA VA KUNDUZ",
               editor: "ABDULHAMID CHO'LPON",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ALVIDO QIROL LYUDOVIK KO'PRIGI ",
               editor: "TORNTON UAYLDER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SEHRGAR VA QASHSHOQ YIGIT",
               editor: "MAHMUD MURODOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "1985",
               editor: "ENTONIY BERJES",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "21 KUN ICHIDA BAXTLI BO'LING",
               editor: "LUIZA XEY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "VAQT DARYOSI",
               editor: "ABDUNABI HAMRO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYLANMA   ",
               editor: "MARHABO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BEDORLIK",
               editor: "ZIYODULLA NURMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TIRIK QOLISH BUYURILGAN",
               editor: "YULIAN CEMYON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KEKSA MERGANNING SO'NGI NISHONI",
               editor: "AKBAR MIRZO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ABADIY ZAMONDOSH",
               editor: "OLIM TOSHBOYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JENNI GERXARDT",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ABADIY ZAMONDOSH",
               editor: "OLIM TOSHBOYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OMMA PSIXOLOGIYASI",
               editor: "GUSTAV LEBON",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "XODIMLARNI TANLASH SANATI",
               editor: "SVETLANA IVANOVA",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: " BLOKCHEYN A DAN Z GACHA",
               editor: "LORAN LELU",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "STIV JOBS BIZNES HAQIDA ",
               editor: "STIV JOBS",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "SIROJIDDIN MAHDUM-SIDQIY XANDAQLIQIY",
               editor: "A.ASIL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AMIR TEMUR",
               editor: "MARSEL BRION",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ODDIY AYRILIQ",
               editor: "ANVAR OBIDJON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NAVOIY",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YAXSHILAR YO'QOLMAYDI YO'QOTILADI",
               editor: "SEDAR ERO'G'LI",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ONG QUDRATI-BOLALR XIZMATIDA",
               editor: "DJ.KEXO N.FISHER",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "24 SOATDA SHAXMAT O'RGANISH",
               editor: "JUJA POLGAR,POL TRUONG,LESLI GORVIS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "EIPLAR",
               editor: "G'AFUR G'ULOM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HA,YO'Q,HECH QACHON",
               editor: "ERKIN SIDDIQOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "VOZ KECH VA TINCHLAN",
               editor: "ADEM GUNESH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "UOLL-CTRITLIK BO'RI USLUBI",
               editor: "JORDAN BELFORT",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HIKOYALAR  ",
               editor: "JEK LONDON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BIR VIJDON UYG'ONUR ",
               editor: "AXMAT LUTFIY QOZONCHI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DASHTDAGI OLOV",
               editor: "HABIB ABDUNAZAR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BEKLAR VABEKAJONLAR",
               editor: "TOHIR MALIK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ROBERT KIYOSAKI MAKTABI",
               editor: "LARISA BAZAROVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "STRESSDAN EMLANISH ",
               editor: "VALERIY SINELNIKOV",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "YEVGENIY ONEGIN ",
               editor: "A.S.PUSHKIN",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "MUMU",
               editor: "IVAN TURGENEV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "IKKI ESHIK ORASI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QIZIL AJDARHO",
               editor: "TOMAS HARRIS",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALVIDO,GULSARI",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AXMOQLIK QILMANG",
               editor: "JEN SINSSERO",
               tili: "KRILL",
              turkum: "PSIXOLOGIK BADIIY ADABIYOT"
              },
              {
               name: "YASSAVIY BOBO HIKOYALARI",
               editor: "HAYATE BIJE",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DANGASA ONANING KATTA KITOBI ",
               editor: "ANNA ALEKSANDROVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "UMR MAVSUMI",
               editor: "JIM RON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOLALAR TAFAKKUR QUDRATI",
               editor: "JON KIXO NENSI FISHER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SHIFOBAXSH DASTURXON",
               editor: "KAMOLA SODIQOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TASAVVUFIY HIKOYALAR",
               editor: "G.MIRZAYEVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BO'TAKO'Z",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NEGA ODAM",
               editor: "BAHODIR NURMUHAMMAD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QULAYOTGAN TOG'LAR",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QIYOMAT QARZ",
               editor: "O'LMAS UMARBEKOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOGA",
               editor: "RAVSHAN MAMADALIYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SO'NGI DENGIZGACHA",
               editor: "VASILIY YAN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KO'ZIDIN BOSHDA HAVODUR",
               editor: "ZAHIRIDDIN MUHAMMAD BOBUR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYLANMA   ",
               editor: "MARHABO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BU DUNYODA O'LIB BO'LMAYDI",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DUNYO MAMLAKATLARI",
               editor: "LAZIZ RAXMATOV",
               tili: "KRILL",
              turkum: "IQTISODIY BADIIY"
              },
              {
               name: "GRAF MONTE KRISTO IF QALASI MAHBUSI",
               editor: "ALEKSANDR DYUMA",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KASAL BO'LMAY DESANGIZ ",
               editor: "POL BREGG",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BIR KUNDA INQILOB",
               editor: "JUNAYD SUAVI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HAYOTNING BESH TORTIG'I",
               editor: "MARK TVEN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QAYIQDAGI UCH OVLON IT HISOBGA KIRMAYDI",
               editor: "JERONM KLAPKA JEROM",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "CHOLIQUSHI",
               editor: "RASHOD NURI GUNTEKIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "JANNATI ODAMLAR",
               editor: "XUDOYBERDI TO'XTABOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OQSHOM FOJEASI",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BALIQ BITMAS BOYLIK",
               editor: "DAVRON NIYOZOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SOHIL BO'YLAB CHOPAYOTGAN OLAPAR",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JAMILA",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOLG'ONCHINING ROST GAPI",
               editor: "SADULLA SIOEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AMIR TEMUR SALTANATI",
               editor: "LYUSEN KEREN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ODAM BO'LISH QIYIN",
               editor: "O'LMAS UMARBEKOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MARKAZLASHMAGAN DASTURIY ILOVALAR ",
               editor: "SIRAJ RAVAL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "UYQU ISTAGI",
               editor: "ANTON CHEXOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "GONGKONGDAN KELGAN TOBUT",
               editor: "JEYMS CHIYZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MENI KUCHKIROQ SEV",
               editor: "SYU JONSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ZULAYHO DARAXTI",
               editor: "NODIR NORMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KAMON YO'LI",
               editor: "PAULO KOELO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MENING KO'NGLIM BIR QUSHDIR",
               editor: "AYDIN XIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "RITA XEYVORT YOXUD SHOUSHENKDAN QOCHISH",
               editor: "STIVEN KING",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QUG'U OROLIDAN MUJDA",
               editor: "G'OYIB NAZAR",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BAXTLI OILA  QURISHNING 5 QOIDASI",
               editor: "S.BOZOROVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TINHLA BULBUL",
               editor: "ZULFIYA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SARIQ DEVNI O'LIMI",
               editor: "XUDOYBERDI TO'XTABOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SALAMADRALAR BILAN JANG",
               editor: "KAREL CHAPEK",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "LIDER SHAXSIYATI",
               editor: "BRAYAN TREYSI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YEVGENIY ONEGIN ",
               editor: "A.S.PUSHKIN",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "SINCHALAK",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ISHON:ALBATTA, BAXTLI BO'LAMIZ",
               editor: "EZGIN KILICH",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TABIATNING O'ZI TABIB",
               editor: "ABDUXALIL YO'LDOSHEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'LIMDAN KEYINGI HAYOT",
               editor: "RAYMOND MOUDI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ODAMLAR O'YNAYDIGAN O'YINLAR",
               editor: "ERIK BREYN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BALOYI NAFS",
               editor: "VLADIMIR KUNIN",
               tili: "KRIIL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TO'Y SOVG'ASI",
               editor: "GI DE MOPASSAM",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AMERIKA FOJEASI  3-KITOB",
               editor: "TEODOR DRAYZER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SARAFAN MARKETING",
               editor: "ENDI SERNOVIS",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MALAZGIRTDA JUMA TONGI",
               editor: "YAVUZ BAXODIR O'G'LI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "MUNOJOT",
               editor: "TOXIR MALIK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SARALANGAN ISMLAR MA'NOSI",
               editor: "Z.XAMDAMOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QAY BIRIMIZ SEVMAGANMIZ?",
               editor: "ETHEM EMIN NEMUTULU",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "HIKMATLAR",
               editor: "KONFUTSIY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "FERRARISINI SOTGAN ROHIB ",
               editor: "ROBIN SHARMA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAYOTINGIZNI BARBOD QILADIGAN 20 TA XATO",
               editor: "MAYKL ROUCH,MIRZAKARIM NORBEKOV",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OQ KEMA ",
               editor: "CHINGIZ AYTMATOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XUZURSIZLIK",
               editor: "LIVANELI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YUQUMLILIK MAXSULOT VA G'OYALAR QANDAY OMMALASHADI",
               editor: "YONA BERGER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOKI",
               editor: "GO'ZAL BEGIM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AVLIYO QIROL LYUDOVIK KO'PRIGI",
               editor: "TORNTON UAYLDER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MUHABBATNING 10 TA SIRI",
               editor: "ADAM JEKSON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KAKTUSLAR HAM GULLAYDI",
               editor: "SONGUL UNSAL",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "QUTADG'U BILIG",
               editor: "YUSUF XOS HOJIB",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAXTLI TURMUSH UCHUN OLTI MAKTUB",
               editor: "MUSTAFA KARATASH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "NAVOIY",
               editor: "XAYRIDDIN SULTON",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "RAQIBLAR,OQ KEMA",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BIR ISTAGINGIZ RO'YOBGA CHIQSA, BIR XAYR- RO'YOBGA CHIQMASA, MING XAYR IZLANG",
               editor: "XAKAN MENGYUCH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "PROFESSOR DOUELNING BOSHI",
               editor: "ALEKSANDR BELYAYEV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: " YOLLANMA ISHCHINING TADBIRKORGA AYLANISHI",
               editor: "ROBERT KIOSAKI,SHERON LEKTOR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BIRINCHI TEZ YORDAM",
               editor: "Y.TOLIPOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAXT VA BOYLIKKA ERISHISHNING YETTI USULI",
               editor: "JIM RON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PUL OQIMINING KVADRANTI",
               editor: "P.T KIOSAKISH.SH.L LECHTER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SIRLI XILQAT",
               editor: "ANTON CHEXOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "XAYOLIDA GO'ZAL QOL",
               editor: "HALIS KARABENLI",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TURK HIKOYALARI",
               editor: "UMAR SAYFIDDIN",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TEMURIY MALIKALAR",
               editor: "TURG'UN FAYZIYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "EY, QIZIM",
               editor: "ALI TANTOVIY",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "IQRORNOMA",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "UMIDLAR INTIHODA O'LADI",
               editor: "VORIS",
               tili: "KRILL",
              turkum: "OZARBAYJON ADABIYOTI"
              },
              {
               name: "AQL VITAMINLARI",
               editor: "JIM RON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALVIDO, QUROL",
               editor: "E.M. HEMINGUEY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NUR VA SOYALAR ",
               editor: "ROBINDRANAT TAGOR",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SAYLANMA   ",
               editor: "MARHABO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OILA SAODAT MASKANI",
               editor: "SHAYX YUSUF XATTOR MUHAMMAD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NOTIQLIK SANATI",
               editor: "ILXOM KAXXOROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XAYOTIMNI O'ZGARTIRGAN OLOV",
               editor: "MAXMUD OLAQOSH",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "MUHABBAT ANATOMIYASI",
               editor: "MUHAMMAD BUZDAG'",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "GRAF MONTE KRISTO IF QALASI MAHBUSI II TOM",
               editor: "ALEKSANDR DYUMA",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O DAN BOSHLANGAN BIZNES",
               editor: "ERIK RIS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AL-KARNAKU KEMASIDAGI QOTILLIK",
               editor: "AGATA KRISTI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ODAM BO'LISH QIYIN",
               editor: "O'LMAS UMARBEKOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OSHIQLIK",
               editor: "CHORSHAMI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "PUL TOPISHNING ULKAN SIRLARI",
               editor: "JO BITALE",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OYNANING AKSI",
               editor: "DILDORAXON ALIYEVA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALFIDO",
               editor: "ONUR QOPLON",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "100 MUMTOZ FAYLASUF",
               editor: "SAIDA JO'RAYEVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYLANMA ",
               editor: "ABDULLA ORIPOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TENTAKNING TAJRIBASI 2",
               editor: "MIRZAKARIM NORBEKOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TUTASH OLAMLAR",
               editor: "XOJIAKBAR SHAYXOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MASHRAB G'AZALLARI ",
               editor: "SHARIF XOLMUROD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ELJERNONZAGA ATALGAN GULLAR",
               editor: "DENIEL KIZ",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NIYATNING KUCHI",
               editor: "VALERIY SINELNIKOV",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "QUTLUG'QON",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ILLADA",
               editor: "HOMER",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SHAXDAM QADAMLAR SEHRI",
               editor: "SHERZOD HIKMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KALLAXONALIK YIGITCHA ROMAN",
               editor: "ALISHER MIRZO",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DOVON",
               editor: "ISOKJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHAMOL ORTIDAN YUGURIB ",
               editor: "XOLID XUSAYNIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SHOX ABBOSNING QILICHI",
               editor: "XASAN AZIZ",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QORAQUSH YULDUZINGING SIRI",
               editor: "ISAJON SULTON ",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHAYON",
               editor: "SHONIYOZ MELIBOYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "200 HAYOT DARSI ",
               editor: "ROBIN SHARMA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MIRZATERAK",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ПОЧЕМУ МЫ СТАРЕМ",
               editor: "CHERNISH P.P",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "QIZIL VA QORA",
               editor: "MARI-ANRI-BEYL STENDAL",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HALIMA XUDAYBERDIYEVA",
               editor: "G'AYRAT MAJID",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "FUZULIY",
               editor: "MIRZO KENJABEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ASQAD MUXTOR",
               editor: "IKROM ISKANDAR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MASHRAB",
               editor: "MIRZO KENJABEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TURKIY GULISTOIN YOXUD AXLOQ",
               editor: "ABDULLA AVLONIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYLANMA",
               editor: "MUHAMMAD YUSUF",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OILADA SEVGI SUXBATLARI",
               editor: "SABOXAT BOZOROVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BIZNI YOD ETSALAR ",
               editor: "MUXIDDIN OMON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "IZTIROB ",
               editor: "SULAYMON HAYDAR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TENTAKNING TAJRIBASI 5",
               editor: "MIRZAKARIM NORBEKOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DILDAGI DUR",
               editor: "TURSUNOY SODIQOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HAMMA XATO QILADI",
               editor: "TOXIR TO'LQIN O'G'LI, NARGIZAMAXMUD QIZI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YODGOR",
               editor: "G'AFUR G'ULOM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ME'MOR",
               editor: "MIRMUHSIN",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OYDINDA YUGAN ODAMLAR",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TO'SIQLARGA QARAMAY SEVDIK",
               editor: "MIRACH CHAG'RI OQTOSH ",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "SAMODA CHAQNAGAN YULDUZ",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAMODA CHAQNAGAN YULDUZ",
               editor: "ISOQJON NISHONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "VAYKOFF USULI",
               editor: "JEK.K.XATSON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KO'NGIL POYTAXTI",
               editor: "JO'RABEK JAXON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GO'ZAL YENGILDIK",
               editor: "JEYNER YAMAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "KUNTUG'MISH",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BASKERVILLAR ITI",
               editor: "ARTUR KONAN DOYL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SALTANATLAR JANGI",
               editor: "IXIYOR ESONOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XAYOLLARGA BO'LAMAN TUTQUN",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAXTNI YO'QOTGAN JOYDAN IZLAMANG",
               editor: "BEYHAN BUDAK",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "IKKI KARRA IKKI BESH",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "NURLI HALQACHALAR",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ORAZIN YOPQACH KO'ZUMDIN",
               editor: "ALISHER NAVOIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAQIQA QADRI",
               editor: "ABDURASUL ABDULLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHAXMAT SABOQLARI",
               editor: "MAMATQUL XAYLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHINOR",
               editor: "ASQAD MUXTOR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "RAVSHAN",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ABDULLA QODIRIY VA SANOIY NAFISA",
               editor: "HAMIDULLA AKBAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ASKAR ONASI",
               editor: "ISOQJON NISHONOV",
               tili: "KRIILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHAMOL ESAVERADI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHO'L HAVOSI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAFTAR HOSHIYASIDAGI BITIKLAR",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'ZBEKLAR",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OT KISHNAGAN OQSHOM",
               editor: "TOG'AY MUROD",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YO'LDAN TOPGANLARIM",
               editor: "RAZZOQ ABDURASHID",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OSMONDAN TUSHGAN PUL",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ASRNI QARITGAN KUN",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QAYNONA",
               editor: "AHMAD LUTFIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BO'TAKO'Z",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OTA IZIDAN",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MING QUYOSH SHULASI",
               editor: "XOLID XUSAYNIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OLMOS KAMAR",
               editor: "PIRIMQUL QODIROV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MENINGBHAYOTIM",
               editor: "XENRI FORD",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "CHINGIZXON VA AMIR TEMUR KO'RAGON",
               editor: "IVANIN.M",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ME'MOR",
               editor: "MIRMUHSIN",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHOL VA DENGIZ",
               editor: "ERENEST HMEINGUVAY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MUHABBAT SEN CHIROYLISAN",
               editor: "SANJAR TURSUNOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DUNYONING ENG BUYUK SAVDOGARI",
               editor: "OG MANDINO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BETASHVISH YASHASH SIRLARI",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MALIKA AYYOR",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOLG'IZLIKNING YUZ YILI",
               editor: "GABRIYEL GARTSIA MARKES",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MESHPOLVON JANGGA OTLANDI",
               editor: "ANVAR OBIDJON",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SO'QQABOSH BEVAGINA",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "FARZAND TARBIYASI",
               editor: "ZEBINISO AHMEDOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AJDAR TAVBASI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OYGA OSILGAN BAYROQ",
               editor: "MUHAMMAD ISMOIL",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "LATTE OMILI",
               editor: "DEVID BAX",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HAYOTNING ENG BUYUK SIRI",
               editor: "RONDA BERN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEN ANGLAGAN HAYOT",
               editor: "JEK LONDON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SEHLI KUCH ",
               editor: "RONDA BERN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NUR BORKI SOYA BOR",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "DAVRIM VA DAVRAM",
               editor: "MARYAM YOQUBOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ANOR",
               editor: "ABDULLA QAHHOR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ROBINZON KRUZONING HAYOTI VA AJOYIB SARGUZASHTLARI",
               editor: "DANIYEL DEFO",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KICHIK BIZNESDAN KATTASIGA II KITOB",
               editor: "ROBERT KIOSAKI,SHERON LEKTOR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "UMR SAVDOSI",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KO'XNA DUNYO",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MAQTANCHOQ SHOGIRT",
               editor: "Z.UMAROV TARJIMASI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ENG AQILLI MASLAHAT",
               editor: "MUHSIN ALIYEV TARJIMASI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ALYORIM QOLUR",
               editor: "MUHAMMAD YUSUF",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GALLAKTIKADA BIR KUN I KITOB",
               editor: "SA'DULLA QURONOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KALILA VA DIMNA",
               editor: "HIND EPOSI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOLALIK XOTIRALARIM",
               editor: "OYBEK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOLG'ONLAR SHAXRI",
               editor: "RAMITA NAVAI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "VAVILONDAGI ENG BOY ODAM",
               editor: "JORJ KLEYSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "NOMUS VA HAYOT",
               editor: "XOLIYOR SAFAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JELSOMINO YOLG'ONCHILAR MAMLAKATIDA",
               editor: "JANNI RODARI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HUKUMDOR",
               editor: "NIKKOLO MAKIAVELLI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ZUKKOLAR VALANDAVURLAR",
               editor: "MALKOLM GLADUELL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ADOLAT MANZILI",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QALB HALOVAT TOPMASA",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOY OTA VA KAMBAG'AL OTA",
               editor: "ROBERT KIOSAKI,SHERON LEKTOR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BOY BOLA VA AQILLI BOLA",
               editor: "ROBERT KIOSAKI,SHERON LEKTOR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TONG VA SHOM ORASIDA",
               editor: "BOBO RAVSHAN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BUYURMAGAN BOYLIK",
               editor: "ABDURAHMON JO'RAYEV RUS TILIDAN TARJIMA",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MASHHURLARNING SO'NGGI MANZILLARI",
               editor: "KOMIL.MUHAMMAD, ELMIRA.M TARJIMASI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KUNCHIQAR MAMLAKAT HIKOYALARI",
               editor: "QUDRAT DO'STMUHAMMAD TARJIMASI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ILOHIY DONISHMAND LAO -TZEY HIKMATLARI",
               editor: "L.N.TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "ONAIZOR ",
               editor: "ODIL YOQUBOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAZILAR OLISDAN SEVARLAR",
               editor: "HALIS KARABENLI",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "DUMALOQ XAT",
               editor: "MAHMUD BO'RON RUS TILIDAN TARJIAMSII",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "BIZ GLENDANI SHUNDAY YAXSHI KO'RAMIZ",
               editor: "XULIO  KORTASAR",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MIRZO ULUG'BEK",
               editor: "MAQSUD SHAYXZODA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YETTI YILLIK SEHR",
               editor: "MUXSIN ALIYEV RUS TILIDAN TARJIMASI",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "XAMMASI RASVO",
               editor: "MARK MENSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SAYYORAMIZ HAYVONAT OLAMI:QUSHLAR",
               editor: "SHUXRAT MIRFAYZOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: " 2023 YIL: INSONGA E'TIBOR SIFATLI TA'LIM YILI",
               editor: "SHAVKAT MIRZIYOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYYORAMIZ HAYVONAT OLAMI:SUTEMIZUVCHILAR",
               editor: "SHUXRAT MIRFAYZOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MUKOFOTGA KIM MUNOSIB",
               editor: "RUS TILIDA AYNIDDIN ZAYNIDDINOV TARJIMASI",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "TOM SOYERNING BOSHIDAN KECHIRGANLARI",
               editor: "MARK TVEN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QAHRAMON",
               editor: "RONDA BERN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MUXABBAT KITOBI",
               editor: "SALIM ASHUR",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHOQINTIRGAN OTA YOKI MAFIYA SARDORI",
               editor: "MARIO PYUZO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MUMKIN EMAS SENING YIG'LASHING",
               editor: "G'AYRAT MAJID",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JAYHUN USTIDA BULUTLAR",
               editor: "MIRKARIM OSIM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ANNA KARENINA",
               editor: "LEV TOLSTOY",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "DOKTOR MORO OROLI",
               editor: "ROBERT UELLS",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PUL ALIFBOSI",
               editor: "BODO SHEFER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'YLA VA BOY BO'L",
               editor: "NAPALEON XILL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'YLA VA BOY BO'L",
               editor: "NAPALEON XILL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TO'Y MUBORAK YOR-YOR",
               editor: "OXUNJON SAFAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "IKKI KARRA IKKI BESH",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHUM BOLA",
               editor: "G'OFUR G'ULOM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YOVVOYI YO'RG'A",
               editor: "ERNEST SETON TOMSON",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TELBA",
               editor: "FYODR DASTAEVSKIY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "NIKOHIMNI ASRAY OLAMAN",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "LKRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "CHINGIZXONNING OQ BULUTI",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TO'MARIS",
               editor: "MIRKARIM OSIM",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "UMIDNING BESHINCHI MAVSUMI",
               editor: "SONGUL UNSAL",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ABULFAYZXON",
               editor: "ABDURAUF FITRAT ",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "O'N BESH YOSHLI MILLIONER",
               editor: "XUDOYBERDI TO'XTABOYEV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "RUSTAMXON",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHO'QINTIRGAN OTA 2 SITSILYALAIK",
               editor: "MARIO PYUZO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ASKAR BOLA",
               editor: "CHINGIZ AYTMATOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SEN KETGANINGDAN KEYIN",
               editor: "EZGIN KILICH",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TO'YDAN KEYIN HAM MUXABBAT BO'LSIN",
               editor: "SEMA MARASHLI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "SEVMOQ SHUNCHALAR GO'ZAL BO'LSA",
               editor: "SEMA MARASHLI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "TANISHISHNI UNUTIBMIZ",
               editor: "SEMA MARASHLI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "QANDAY QILIB AQILLI SOG'LOM VA BOY BO'LISH MUMKIN",
               editor: "RENDIY GEYCH",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "AHI VA INOQ, FARZANDLAR TARBIYALASH SAN'ATI",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "QALBIM SENI UNUTMAYDI",
               editor: "SEVIM ASIMGIL",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "IKKIMIZ HAQIMIZDA SO'ZLAB BER MENGA",
               editor: "AHMED BATMAN",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "RUHIYAT ALIFBOSI",
               editor: "BAHODIR KARIM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KONFUTSI",
               editor: "K.M.KARIAGIN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BAXT ORTIDAN QUVIB",
               editor: "KRIS GARDNER,KVINSI TRUP",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "G'OLIBLIK QONUNIYATLARI",
               editor: "BODO SHEFER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOZGI KUYLAKDAGI QIZLAR",
               editor: "IRVING SHOU",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "PORTEBELLO JODUGARI",
               editor: "PAULO KOELO",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KO'RINMAS ODAM",
               editor: "GERBERT UELLS",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MOLXONA",
               editor: "JORJ ORUELL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "EZOP MASALLARI",
               editor: "EZOP",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "BEPARVOLIKNING NOZIK SANATI",
               editor: "MARK MENSON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OYBEGIM MENING",
               editor: "ZARIFA SAIDNOSIROVA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BASKERVILLAR ITI",
               editor: "ARTUR KONAN DOYL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MUVOFFAQIYAT SIRLARI",
               editor: "FRENK BETTJER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KAMETA",
               editor: "GULNOZ MO'MINOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SOG'LOM YURAK",
               editor: "POL BREGG",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KAPITAN GRANT BOLALARI",
               editor: "JYUL VERN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "G'IRA-SHIRA SHOMDAN OPPOQ TONGGACHA",
               editor: "MUBORAK FOZILOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BIR KO'ZLI QIROL YOKI SAYOHAT BOSHLANADI",
               editor: "OLGA LISENKO",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "BIR O'ZBEK O'YI",
               editor: "OLIM JUMABOYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "KAKKU OVOZI",
               editor: "BIBI ROBIYASAIDOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HAYOLIMDA ASRAGANIM",
               editor: "SALIM ABDURAHMON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "GEKLBERRI FINNING BOSHIDAN KECHIRGANLARI",
               editor: "MARK TVEN",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KANIZAK IZAURA",
               editor: "BERNARDO GIMARAENS",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OMADLI FOLBIN",
               editor: "ABDUG'ANI XUSANOV TARJIMASI RUS TILIDAN",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "AYTILMAGAN TUSH",
               editor: "MIRMUHSIN ALIYEV TARJIMASI RUS",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "IZQUVAR PUARO",
               editor: "AGATA KRISTI",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "SOHIBQIRON",
               editor: "ABDULLA ORIPOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BAQIRMAYDIGAN BOLALAR",
               editor: "XADICHA KUBRO TONGAR ",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "HAYOT YUTQAZGAN JOYINGDAN BOSHLANADI",
               editor: "MIRACH CHAG'RI OQTOSH ",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MEHROBDAN CHAYON",
               editor: "ABDULLA QODIRIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "POZETIVIZM VA ZAMONAVIY XITOY FALSAFASI",
               editor: "YANG GUORONG",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "O'ZINGA NISBATAN ISHONCHNI KUCHAYTIRISH VA OMMA OLDIDA CHIQISHLAR ORQALI ODAMLARGA TA'SIR KO'RSATSIH HAQIDA",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "MEDITATSIYA DARSLARI",
               editor: "MUHAYYO RIXSIBEKOVA TARJIMAON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "HOJIMUROD",
               editor: "LEV TOLSTOY",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "DARYO ORTIDAGI YIG'I",
               editor: "QO'CHQOR NORQULOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QORA KO'ZLAR",
               editor: "PRIMQUL QODIROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JOSUSLAR",
               editor: "XUDOBERDI NAZAROV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MILLONER KABI FIKIRLANG",
               editor: "ZARINA TOJIYEVA TARJIMON",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "XAMSA",
               editor: "ALISHER NAVOIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BEZOVTALIKDAN QANDAY QUTILIB YASHASH MUMKIN",
               editor: "DEYL KARNEGI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "G'OLIBA",
               editor: "GO'ZALOY COLIX QIZI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TASHVISHI YO'Q ODAMLAR",
               editor: "NURILLA CHORI",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SUNBULANING SO'NGI OQSHOMI",
               editor: "SANJAR TURSUNOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "XAYOLIMDA ASRAGANIM",
               editor: "SALIM ABDURAHMON",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "YURAKNING BIR CHETI",
               editor: "JASUR KENGBOYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "QOBUSNOMA",
               editor: "KAYKOVUS",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "RUBOIYLAR",
               editor: "UMAR XAYYOM",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AMIR TEMUR. SAMARQAND OSMONIDA YULDUZLAR. 1-KITOB",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "AMIR TEMUR. SAMARQAND OSMONIDA YULDUZLAR. 1-KITOB",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "YILDIRIM BOYAZID. SAMARQAND OSMONIDA YULDUZLAR. 3-KITOB",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "SAFAR GULXANLARI. SAMARQAND OSMONIDA YULDUZLAR.2-KITOB",
               editor: "SERGEY BORODIN",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "BIZ BAXTLI BO'LAMIZ",
               editor: "MUHAMMAD YUSUF",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ALVIDO BOLALIK",
               editor: "TOXIR MALIK",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "PANDALAR UCHA OLADI",
               editor: "JANER YAMAN",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "ONALIK MAQOMI",
               editor: "NOILA HOLMUHAMMAD",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SONATA TILSIMI",
               editor: "LEV TOLSTOY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "FANTOM OG'RIG'I",
               editor: "MARZIYA SAYDAM",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "SHER YIGIT",
               editor: "NURIDDIN ISMOILOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "HANNA",
               editor: "BAXODIR YANGISHAHARLIKO'G'LI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "OCHLIK MO'JIZASI",
               editor: "BREGG KOLL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "OLDINIGGA HAMMA QOIDALARNI BUZING",
               editor: "MARKUS BEKINGEL, KURT KOFFMAN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "ODAM BO'LISH QIYIN",
               editor: "O'LMAS UMARBEKOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SHUXRATPARSTLIK VA RIYO",
               editor: "IMOM G'AZZOLIY",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JAVDARZORDAGI XALOSKOR",
               editor: "JEROM SELINJER",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "URUSHNING DAVOMI",
               editor: "NABI JALOLIDDIN",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SOG'LOM BO'LAY DESANGIZ",
               editor: "RAVSHAN MAMADALIYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AGAR FARZAND BILAN MUSHKULLIK BO'LSA",
               editor: "LYUDMILA PETRANOVSKIY",
               tili: "KRILL",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "TEMUR TUZUKLARI",
               editor: "AMIR TEMUR",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "OMAD VA BAXTGA SAYOXAT",
               editor: "KIM RONN",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "KECHINMALAR I-KITOB",
               editor: "JUNAYD SUAVI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "KECHINMALAR 2-KITOB",
               editor: "JUNAYD SUAVI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "KECHINMALAR 3-KITOB",
               editor: "JUNAYD SUAVI",
               tili: "KRILL",
              turkum: "TURK ADABIYOTI"
              },
              {
               name: "GO'RO'GLI",
               editor: "XALQ OG'ZAKI IJODI",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "CHOL VA DENGIZ",
               editor: "ERNEST HEMINGUVAY",
               tili: "LOTIN",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DUNYONING KICHIK ATLASI",
               editor: "N.V.VALIYEVA",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SUDXO'RNING O'LIMI",
               editor: "SADRIDDIN AYNIY",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "MO'JIZA SODIR BO'LMAYDI",
               editor: "LI MYON BAK",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "QANDAY BUYUK BO'LISHGAN",
               editor: "SAD SAUD AL KARIBONIY",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "TIRIKLIK SUVI",
               editor: "TOXIR MALIK",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "AYOL BAXTI",
               editor: "LORA DOYL",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "YOSH VRACH KUNDALIGI",
               editor: "MIXAYL BULGAGOV",
               tili: "LOTIN",
              turkum: "RUS ADABIYOTI"
              },
              {
               name: "TILSIMLI SHAXMAT",
               editor: "AGATA KRISTI",
               tili: "KRILL",
              turkum: "JAHON ADABOYOTI"
              },
              {
               name: "DUNYONING ISHLARI ",
               editor: "O'TKIR HOSHIMOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "BIR JAMOA BIR ORZU",
               editor: "MAHMUD NURULLAYEV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "SAYYORAMIZ HAYVONOT OLAMI:SUDRALIB YURUVCHILAR",
               editor: "SHUXRAT MIRFAYZOV",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "TILLA UZUK",
               editor: "ODIL YOQUBOV",
               tili: "LOTIN",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "JODUGAR YOXUD 1000 YILLIK HAYOT",
               editor: "NODIRABEGIM IBROHIMOVA",
               tili: "KRILL",
              turkum: "O'ZBEK ADABIYOTI"
              },
              {
               name: "ABDULXAMIDXON",
               editor: "TALHA UG'URLUEL",
               tili: "LOTIN",
              turkum: "TURK ADABIYOTI"
              }
             
];
  
  function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("searchResults");
    results.innerHTML = ""; // Natijalarni tozalash
  
    if (input.length > 0) {
      const filteredData = data.filter(item => item.name.toLowerCase().includes(input));
      const limitedResults = filteredData.slice(0, 10); // Faqqat 10 natijani ko'rsatish
      limitedResults.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="item-title">Kitob nomi: ${item.name} </div>
          <div class="item-description">Muallif: ${item.editor}</div>
          <div class="item-price">Kitob tili: ${item.tili}</div>
          <div class="item-price">Kitob turi: ${item.turkum}</div>
        `;
        results.appendChild(li);
      });
    }
  }
  