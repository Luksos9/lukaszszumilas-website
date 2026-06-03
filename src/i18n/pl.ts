// Polish strings. Same shape as en.ts (with English fallback for anything missing),
// plus override maps consumed by data.ts (nav/footer/services/problems/case studies).
export const pl = {
  common: {
    role: 'Doradca ds. efektywności operacyjnej',
    skipToContent: 'Przejdź do treści',
    openMenu: 'Otwórz menu',
    home: 'Strona główna',
    homeAria: 'strona główna',
    toggleTheme: 'Przełącz tryb jasny lub ciemny',
    themeTitle: 'Przełącz motyw',
    language: 'Język',
    chooseLanguage: 'Wybierz język',
  },
  footer: {
    blurb:
      'Doradca ds. efektywności operacyjnej. Pomagam organizacjom ograniczać pracę ręczną i usprawniać operacje dzięki ServiceNow, AI i projektowaniu procesów.',
    rights: 'Wszelkie prawa zastrzeżone.',
    builtPre: 'Zbudowano w',
    builtPost: ', hostowane na GitHub Pages.',
  },

  // ---- override maps (used by src/i18n/data.ts) ----
  // Primary nav, keyed by English href.
  nav: {
    '/services/': 'Usługi',
    '/ai-servicenow/': 'AI i ServiceNow',
    '/case-studies/': 'Realizacje',
    '/blog/': 'Artykuły',
    '/about/': 'O mnie',
    '/contact/': 'Umów konsultację',
  },
  footerTitles: {
    Services: 'Usługi',
    Resources: 'Zasoby',
    Company: 'Informacje',
  },
  // Footer items, keyed by English href.
  footerItems: {
    '/services/#assessment': 'Ocena możliwości AI',
    '/services/#implementations': 'Wdrożenia AI i ServiceNow',
    '/services/#development': 'Rozwój ServiceNow',
    '/services/#reviews': 'Przeglądy architektury i kodu',
    '/services/#training': 'Szkolenia i warsztaty',
    '/blog/': 'Artykuły',
    '/case-studies/': 'Realizacje',
    '/newsletter/': 'Newsletter',
    '/teaching/': 'Kursy',
    'https://luckyx.dev': 'Kursy Lucky X',
    '/about/': 'O mnie',
    '/contact/': 'Kontakt',
    '/privacy/': 'Prywatność',
    '/terms/': 'Regulamin',
  },
  // Service text, keyed by anchor. (Phase 1 uses title/tagline/flow on the homepage.)
  services: {
    assessment: {
      title: 'Ocena możliwości AI',
      tagline: 'Znajdź powtarzalną pracę wartą automatyzacji — i właściwą kolejność działań.',
      flow: ['Systemy', 'Procesy', 'Szanse na AI'],
    },
    implementations: {
      title: 'Wdrożenia AI i ServiceNow',
      tagline: 'Praktyczne AI na platformie, zbudowane tak, by przejść przegląd bezpieczeństwa.',
      flow: ['ServiceNow', 'Warstwa AI', 'Automatyzacja'],
    },
    development: {
      title: 'Rozwój ServiceNow',
      tagline: 'Rozwijaj i ulepszaj platformę bez narastania długu technicznego.',
      flow: ['Wymagania', 'Czysty build', 'Bezpieczne aktualizacje'],
    },
    reviews: {
      title: 'Przeglądy architektury i kodu',
      tagline: 'Konkretna druga opinia, zanim wybierzesz kierunek.',
      flow: ['Stan obecny', 'Analiza', 'Stan docelowy'],
    },
    training: {
      title: 'Szkolenia i warsztaty',
      tagline: 'Podnieś kompetencje zespołu w ServiceNow, automatyzacji i adopcji AI.',
      flow: ['Nauka', 'Zastosowanie', 'Samodzielność'],
    },
  },
  // Problems ledger, keyed by icon (stable). severityLabel localizes the badge;
  // the English `severity` key stays in the data for the row-weight logic.
  problems: {
    clock: { title: 'Zbyt dużo pracy ręcznej', body: 'Twój zespół spędza godziny na powtarzalnych, mało wartościowych zadaniach.', outcome: 'Zautomatyzowane procesy' },
    trend: { title: 'Rosnąca liczba zgłoszeń', body: 'Więcej zgłoszeń, te same zasoby, rosnąca presja.', outcome: 'Obsługa wspierana przez AI' },
    gauge: { title: 'Wolne procesy', body: 'Wąskie gardła i przekazania opóźniają potrzebne efekty.', outcome: 'Szybsza realizacja' },
    cube: { title: 'Niewykorzystany ServiceNow', body: 'Nie czerpiesz pełnej wartości z platformy, za którą płacisz.', outcome: 'Platforma w pełni wykorzystana' },
    book: { title: 'Słaby dostęp do wiedzy', body: 'Informacje są rozproszone i trudno je znaleźć, gdy są potrzebne.', outcome: 'Wiedza na żądanie' },
    target: { title: 'Niejasna strategia AI', body: 'Nie wiesz, gdzie AI tworzy realną wartość, a gdzie to tylko szum.', outcome: 'Priorytetyzowana mapa AI' },
  },
  severity: {
    'Very Common': 'Bardzo częste',
    Common: 'Częste',
    Emerging: 'Nowość',
  },
  // Case studies, keyed by English title (stable).
  caseStudies: {
    'AI-assisted ticket classification': {
      sector: 'Bankowość',
      title: 'Klasyfikacja zgłoszeń wspierana przez AI',
      situation: 'Liczba zgłoszeń rosła, a ręczna selekcja pochłaniała czas zespołu.',
      action: 'Przeprojektowałem przyjmowanie zgłoszeń, dodałem automatyzację oraz wspomagane przez AI kierowanie i klasyfikację.',
      outcome: 'Mniej pracy ręcznej, spójniejsze kierowanie i szybsza obsługa.',
      persona: 'Kierownik usług IT',
      sectorNote: 'Duża liczba zgłoszeń przy rygorystycznym audycie, bezpieczeństwie i kontroli dostępu.',
      target: 'Mniej ręcznej selekcji i szybsza pierwsza reakcja.',
    },
    'Streamlined request management': {
      sector: 'Ubezpieczenia',
      title: 'Uporządkowane zarządzanie wnioskami',
      situation: 'Proces obsługi wniosków przez lata się rozjechał, a przekazania stały się wolne.',
      action: 'Ustandaryzowałem przepływ pracy i zautomatyzowałem powtarzalne kroki.',
      outcome: 'Mniej przekazań i realne do osiągnięcia cele SLA.',
      persona: 'Właściciel procesu',
      sectorNote: 'Stare procesy obsługi wniosków, które po cichu rozjechały się wraz ze zmianami w firmie.',
      target: 'Mniej przekazań i cele SLA realne do osiągnięcia przez zespół.',
    },
    'Automated employee onboarding': {
      sector: 'Produkcja',
      title: 'Zautomatyzowany onboarding pracowników',
      situation: 'Wdrożenie nowych osób oznaczało dopominanie się o dostępy i sprzęt mailami.',
      action: 'Zautomatyzowałem proces onboardingu od początku do końca w ServiceNow.',
      outcome: 'Nowi pracownicy dostają dostęp i sprzęt bez ręcznego dopominania się.',
      persona: 'HR i operacje IT',
      sectorNote: 'Onboarding w wielu lokalizacjach, na zmianach i w systemach, które ze sobą nie rozmawiają.',
      target: 'Nowi pracownicy produktywni od pierwszego dnia, bez ręcznego dopominania się.',
    },
  },

  // Operations Improvement Loop steps, keyed by step number.
  framework: {
    1: { title: 'Znajdź wąskie gardła', body: 'Wskaż, gdzie praca się zatrzymuje i gdzie tracony jest czas.' },
    2: { title: 'Usprawnij proces', body: 'Uprość i przeprojektuj przepływ pracy — dla jasności i skali.' },
    3: { title: 'Zautomatyzuj przepływ', body: 'Usuń powtarzalne zadania i przekazania dzięki automatyzacji.' },
    4: { title: 'Zastosuj AI', body: 'Wprowadź AI tylko tam, gdzie tworzy realną wartość biznesową.' },
    5: { title: 'Zmierz efekty', body: 'Śledź wyniki, a potem optymalizuj i skaluj to, co działa.' },
  },

  home: {
    metaDescription:
      'Pomagam organizacjom ograniczać pracę ręczną i usprawniać operacje dzięki ServiceNow, AI i projektowaniu procesów: znajduję wąskie gardła, automatyzuję powtarzalną pracę i stosuję AI tam, gdzie tworzy mierzalną wartość biznesową.',
    rail: {
      start: 'Start',
      aiReality: 'AI w praktyce',
      multiplier: 'Mnożnik',
      framework: 'Metoda',
      symptoms: 'Objawy',
      services: 'Usługi',
      work: 'Realizacje',
      insights: 'Artykuły',
      book: 'Kontakt',
    },
    hero: {
      eyebrow: 'Doradca ds. efektywności operacyjnej',
      title1: 'Mniej pracy ręcznej.',
      title2: 'Większa produktywność.',
      title3: 'Skaluj <span class="accent">operacje.</span>',
      lead: 'Pomagam organizacjom <span class="mark">robić więcej przy mniejszej ilości pracy ręcznej</span> — dzięki ServiceNow, AI i projektowaniu procesów.',
      ctaPrimary: 'Umów konsultację',
      ctaSecondary: 'Poznaj moje podejście',
      cred: 'Instruktor ServiceNow · ponad 10 000 przeszkolonych osób',
    },
    contrarian: {
      eyebrow: 'AI — zderzenie z rzeczywistością',
      title1: 'Większość firm nie potrzebuje',
      title2: 'kolejnych narzędzi AI.',
      sub: 'Potrzebują <span class="mark">lepszych procesów</span>, automatyzacji i właściwych zastosowań AI.',
      bodyLead:
        'Większość projektów AI rozczarowuje, bo zaczyna od modelu. Efekty biorą się z uporządkowania pracy — w tej kolejności:',
      order: [
        'Napraw proces.',
        'Zautomatyzuj powtarzalne części.',
        'Ułatw ludziom znajdowanie wiedzy.',
        'Dopiero potem zastosuj AI tam, gdzie tworzy realną wartość.',
      ],
      bodyEnd: 'W tej kolejności pracuję z każdym klientem.',
    },
    multiplier: {
      eyebrow: 'Problem mnożnika',
      title: 'Dodaj AI do zepsutego procesu, a dostaniesz tylko szybszy chaos',
      sub: 'AI wzmacnia to, na czym działa. Najpierw napraw proces, a to samo AI zacznie tworzyć realny wpływ na biznes.',
    },
    framework: {
      eyebrow: 'Moja metodyka',
      title: 'Pętla doskonalenia operacji',
      sub: 'Powtarzalny system, a nie jednorazowy projekt. Każda współpraca przechodzi przez tę pętlę.',
    },
    loop: {
      eyebrow: 'Pętla',
      title: 'Doskonalenie<br />operacji',
      step: 'Krok',
    },
    equation: {
      broken: 'Zepsuty proces',
      chaos: 'Szybszy chaos',
      good: 'Dobry proces',
      impact: 'Wpływ na biznes',
    },
    symptoms: {
      eyebrow: 'Objawy → Efekty',
      title: 'Czy coś z tego brzmi znajomo?',
      sub: 'Każdy objaw po lewej ma rozwiązanie po prawej. Metoda pośrodku jest zawsze ta sama.',
      colProblem: 'Problem',
      colMethod: 'Metoda',
      colOutcome: 'Efekt',
      pattern:
        'To nie sześć funkcji — to jedna metoda pokazana sześć razy: <span class="accent">każdy objaw zamienia się w efekt, który tworzy ta pętla.</span>',
      bridge: 'Zobacz, jak zamieniam to w efekty',
    },
    services: {
      eyebrow: 'Jak pomagam',
      title: 'Usługi',
      seeAll: 'Wszystkie usługi →',
      learnMore: 'Dowiedz się więcej',
    },
    work: {
      eyebrow: 'Wybrane realizacje',
      title: 'Od objawu do efektu',
      seeAll: 'Wszystkie realizacje →',
      stageProblem: 'Problem',
      stageApproach: 'Podejście',
      stageResult: 'Efekt',
    },
    insights: {
      eyebrow: 'Najnowsze artykuły',
      title: 'Piszę o ServiceNow i AI',
      seeAll: 'Wszystkie artykuły →',
      empty: 'Nowe artykuły wkrótce.',
    },
    finalCta: {
      eyebrow: 'Zacznij tutaj',
      title: 'Gotowy, by znaleźć szanse na AI w swoim środowisku ServiceNow?',
      sub: 'Umów bezpłatną konsultację. Wyjdziesz z jasnym obrazem, gdzie lepszy proces i właściwe AI robią różnicę — niezależnie od tego, czy zbudujemy to razem.',
      cta: 'Umów konsultację',
    },
    pilot: {
      eyebrow: 'Zacznij od małego',
      title: 'Zacznij od 2–4-tygodniowej oceny możliwości AI',
      body: 'Pilotaż o ustalonym zakresie: wskazujemy, gdzie AI realnie się opłaca — z jasnym, uporządkowanym planem, zanim ktokolwiek napisze kod.',
      cta: 'Zobacz ocenę',
    },
  },
  contact: {
    metaDescription:
      'Umów konsultację z zakresu ServiceNow lub AI z Lukaszem Szumilasem albo napisz w sprawie projektu, warsztatu lub przeglądu.',
    eyebrow: 'Kontakt',
    title: 'Umów konsultację',
    lead: 'Konsulting, druga opinia o planie ServiceNow lub AI, warsztat albo szybkie pytanie. Wybierz, co najwygodniejsze.',
    bookingNote:
      'Bezpośrednia rezerwacja online jest w przygotowaniu. Na razie napisz do mnie e-mailem lub na LinkedIn, a znajdziemy dogodny termin.',
    emailLabel: 'E-mail',
    emailHint: 'Najlepsze do zapytań projektowych i szczegółowych pytań.',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'Połącz się lub napisz',
    linkedinHint: 'Tu jestem najbardziej aktywny. Dobre na szybkie „cześć”.',
    courseNotePre: 'W sprawie wsparcia do kursów i pytań kursantów korzystaj z sekcji Q&A przy danym ',
    courseNoteLink: 'kursie na Udemy',
    courseNotePost: ', aby odpowiedź pomogła wszystkim.',
  },
} as const;
