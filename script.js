const appState = {
  language: "it",
  menuOpen: false,
  activeLibraryId: "feltrinelli",
  mapStatusKey: "mapStatusDefault",
  activeCourseEventId: "wordpress-4",
  activeCommunityIndex: 0,
};

const translations = {
  it: {
    documentTitle: "OpenLib | Campus diffuso in biblioteca",
    metaDescription:
      "OpenLib trasforma le biblioteche di quartiere in un campus diffuso gratuito per imparare e insegnare competenze pratiche.",
    skipLink: "Salta al contenuto principale",
    navLabel: "Navigazione principale",
    navAbout: "Chi siamo",
    navCourses: "Corsi",
    navSignup: "Iscriviti",
    faqAria: "Apri le domande frequenti",
    languageToggleAria: "Passa alla versione inglese",
    menuOpen: "Apri menu",
    menuClose: "Chiudi menu",
    heroTitle: "Where your library feels like home. Knowledge lives next door.",
    heroSubtitle:
      "Colleghiamo chi vuole imparare con chi sa già farlo. La tua biblioteca di quartiere diventa uno spazio vivo.",
    heroChipLearn: "Trova una skill.",
    heroChipShare: "Condividi la tua.",
    heroChipFree: "Gratis.",
    heroChipsAria: "Azioni principali OpenLib",
    storyKicker: "La nostra storia",
    storyTitle: "Il tuo quartiere è il nostro punto di partenza.",
    storyBody:
      "Nel tuo quartiere esistevano già tutte le competenze di cui avevi bisogno, ma nessuno le aveva ancora rese accessibili. Abbiamo osservato i quartieri delle nostre città e abbiamo visto un paradosso evidente: da un lato persone con competenze preziose e nessuno spazio per condividerle, dall'altro persone che vogliono imparare ma non possono permettersi di farlo.",
    storyStatsAria: "Dati sul contesto bibliotecario",
    statLibrariesNumber: "8.131",
    statLibrariesLabel: "Biblioteche pubbliche in Italia",
    statUnusedNumber: "40%",
    statUnusedLabel: "Aule inutilizzate",
    missionKicker: "La nostra missione",
    missionTitle:
      "Una comunità dove chiunque può insegnare e imparare, alla pari, senza barriere.",
    missionBody:
      "Nasciamo dalla consapevolezza che il sapere è già nella comunità. In un'epoca in cui l'intelligenza artificiale risponde a qualsiasi domanda in pochi secondi, abbiamo scelto deliberatamente la direzione opposta: quella delle persone. Siamo convinti che nessuna tecnologia possa sostituire il valore di imparare da qualcuno che ha vissuto quello che insegna.",
    missionStatsAria: "Dati su biblioteche e apprendimento informale",
    statVisitorsNumber: "10,2%",
    statVisitorsLabel: "Italiani che frequentano le biblioteche",
    statInformalNumber: "67,7%",
    statInformalLabel: "Vogliono imparare informalmente",
    beliefKicker: "Il nostro credo",
    beliefTitle: "Non siamo solo una piattaforma.",
    beliefBody:
      "Le biblioteche del tuo quartiere non sono mai state solo luoghi di scaffali pieni di libri e silenzio. Crediamo che le biblioteche possano essere anche spazi di comunità, incontro e cultura. Trasformiamo ogni spazio inutilizzato in un'aula viva dove il sapere circola liberamente, le persone si incontrano alla pari e l'apprendimento torna ad essere quello che è sempre stato: un atto profondamente umano e gratuito.",
    valuesAria: "Valori OpenLib",
    valueHumanTitle: "Human Centered.",
    valueHumanBody:
      "Crediamo che il sapere più autentico nasca dall'incontro tra persone reali, non dalla risposta di una macchina.",
    valuePeerTitle: "Peer-to-peer learning.",
    valuePeerBody:
      "Crediamo in un apprendimento equo accessibile a tutti, indipendentemente dal reddito, dall'età o dal background.",
    valueFreeTitle: "Gratuito.",
    valueFreeBody:
      "Siamo convinti che il sapere non abbia prezzo. Chiunque merita di imparare qualcosa di nuovo ogni giorno.",
    mapMarkersAria: "Biblioteche OpenLib sulla mappa",
    mapTitle: "Trova il tuo punto OpenLib.",
    mapSubtitle: "Cerca la tua biblioteca sulla mappa e unisciti alla nostra community!",
    mapSearchLabel: "Città o Codice Postale",
    mapSearchPlaceholder: "Città o Codice Postale",
    mapSearchButtonAria: "Cerca biblioteca",
    mapRequestText: "Siamo già in tanti quartieri ma vogliamo essere anche nel tuo!",
    mapRequestCta: "Scrivici",
    mapKicker: "Dove trovarci",
    mapPartnerLabel: "Biblioteca partner verificata",
    mapCoursesCta: "Corsi",
    mapDirectionsAria: "Apri mappa",
    mapStatusDefault: "Punto OpenLib selezionato: {city}.",
    mapStatusFound: "Abbiamo trovato il punto OpenLib più vicino: {city}.",
    mapStatusFallback:
      "Non abbiamo ancora un punto esatto lì: ti mostriamo {city} e puoi scriverci per proporre il tuo quartiere.",
    coursesKicker: "I nostri corsi",
    coursesTitle: "La tua città come aula.",
    coursesBodyOne:
      "Ogni mese portiamo corsi pratici e gratuiti nelle biblioteche, pinacoteche e palazzi storici di Milano.",
    coursesBodyTwo:
      "Spazi culturali che tornano a vivere grazie a chi ha una competenza da condividere e a chi ha voglia di imparare.",
    coursesBodyThree:
      "Offriamo una conoscenza autentica che nasce dall'incontro tra persone reali, in luoghi che ispirano.",
    coursesPreviewAria: "Programma corsi",
    coursesPreviewText: "Iscriviti e ricevi direttamente in anteprima il nostro programma.",
    coursesMonth: "Maggio",
    coursesCalendarAria: "Calendario corsi maggio 2026",
    coursesListTitle: "Corsi",
    coursesListStatus: "On going",
    courseLibraryLabel: "Biblioteca:",
    courseSignupCta: "Iscriviti",
    courseDateLabel: "{day} maggio",
    courseCalendarEventAria: "{title}, {day} maggio, {time}, {library}",
    newsKicker: "News",
    newsTitle: "Aggiornamenti, eventi e storie direttamente dalla nostra community.",
    newsLead: "Ogni giorno c'è chi cresce imparando e chi cresce insegnando. Queste sono le loro storie.",
    newsBodyOne:
      "Raccontiamo come le biblioteche stanno tornando a vivere e come nascono nuovi percorsi di apprendimento accessibili, umani e pensati per chi non smette mai di crescere.",
    newsBodyTwo:
      "Crediamo che la conoscenza sia più ricca quando viene condivisa. Un sapere condiviso non si consuma, si moltiplica. Chi insegna cresce insieme a chi impara.",
    newsBodyThree: "Seguici per scoprire nuovi eventi, nuovi corsi e nuove storie dalla community OpenLib.",
    communityCarouselAria: "Storie della community OpenLib",
    communityControlsAria: "Controlli carousel community",
    communityPrevAria: "Storia precedente",
    communityNextAria: "Storia successiva",
    communityStoryAria: "Storia {position} di {total}: {name}",
  },
  en: {
    documentTitle: "OpenLib | A distributed campus in your library",
    metaDescription:
      "OpenLib turns neighborhood libraries into a free distributed campus where people learn and teach practical skills.",
    skipLink: "Skip to main content",
    navLabel: "Main navigation",
    navAbout: "About us",
    navCourses: "Courses",
    navSignup: "Join now",
    faqAria: "Open frequently asked questions",
    languageToggleAria: "Switch to the Italian version",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroTitle: "Where your library feels like home. Knowledge lives next door.",
    heroSubtitle:
      "We connect people who want to learn with people who already know how. Your neighborhood library becomes a living space.",
    heroChipLearn: "Find a skill.",
    heroChipShare: "Share yours.",
    heroChipFree: "Free.",
    heroChipsAria: "OpenLib primary actions",
    storyKicker: "Our story",
    storyTitle: "Your neighborhood is our starting point.",
    storyBody:
      "In your neighborhood, the skills you needed already existed, but no one had made them accessible yet. We observed our cities' neighborhoods and saw a clear paradox: on one side, people with valuable skills and no space to share them; on the other, people who want to learn but cannot afford to do it.",
    storyStatsAria: "Library context data",
    statLibrariesNumber: "8,131",
    statLibrariesLabel: "Public libraries in Italy",
    statUnusedNumber: "40%",
    statUnusedLabel: "Unused rooms",
    missionKicker: "Our mission",
    missionTitle:
      "A community where anyone can teach and learn, as peers, without barriers.",
    missionBody:
      "We start from the belief that knowledge already lives inside the community. In a time when artificial intelligence can answer almost any question in seconds, we deliberately chose the opposite direction: people. We believe no technology can replace the value of learning from someone who has lived what they teach.",
    missionStatsAria: "Data about libraries and informal learning",
    statVisitorsNumber: "10.2%",
    statVisitorsLabel: "Italians who visit libraries",
    statInformalNumber: "67.7%",
    statInformalLabel: "Want to learn informally",
    beliefKicker: "Our belief",
    beliefTitle: "We are not just a platform.",
    beliefBody:
      "The libraries in your neighborhood have never been just places of silent shelves full of books. We believe libraries can also be spaces for community, encounter and culture. We turn every unused space into a living classroom where knowledge moves freely, people meet as peers and learning becomes what it has always been: a deeply human and free act.",
    valuesAria: "OpenLib values",
    valueHumanTitle: "Human-centered.",
    valueHumanBody:
      "We believe the most authentic knowledge comes from encounters between real people, not from a machine's answer.",
    valuePeerTitle: "Peer-to-peer learning.",
    valuePeerBody:
      "We believe in fair learning that is accessible to everyone, regardless of income, age or background.",
    valueFreeTitle: "Free.",
    valueFreeBody:
      "We believe knowledge should not have a price. Everyone deserves to learn something new every day.",
    mapMarkersAria: "OpenLib libraries on the map",
    mapTitle: "Find your OpenLib point.",
    mapSubtitle: "Search for your library on the map and join our community!",
    mapSearchLabel: "City or postal code",
    mapSearchPlaceholder: "City or postal code",
    mapSearchButtonAria: "Search library",
    mapRequestText: "We are already in many neighborhoods, but we want to be in yours too!",
    mapRequestCta: "Write to us",
    mapKicker: "Where to find us",
    mapPartnerLabel: "Verified library partner",
    mapCoursesCta: "Courses",
    mapDirectionsAria: "Open map",
    mapStatusDefault: "Selected OpenLib point: {city}.",
    mapStatusFound: "We found the closest OpenLib point: {city}.",
    mapStatusFallback:
      "We do not have an exact point there yet: we are showing {city}, and you can write to propose your neighborhood.",
    coursesKicker: "Our courses",
    coursesTitle: "Your city as a classroom.",
    coursesBodyOne: "Every month we bring practical, free courses into Milan's libraries, galleries and historic buildings.",
    coursesBodyTwo:
      "Cultural spaces come back to life thanks to people with a skill to share and people who want to learn.",
    coursesBodyThree: "We offer authentic knowledge born from real human encounters, in places that inspire.",
    coursesPreviewAria: "Course programme",
    coursesPreviewText: "Sign up and receive our programme preview directly.",
    coursesMonth: "May",
    coursesCalendarAria: "May 2026 course calendar",
    coursesListTitle: "Courses",
    coursesListStatus: "Ongoing",
    courseLibraryLabel: "Library:",
    courseSignupCta: "Join now",
    courseDateLabel: "May {day}",
    courseCalendarEventAria: "{title}, May {day}, {time}, {library}",
    newsKicker: "News",
    newsTitle: "Updates, events and stories straight from our community.",
    newsLead: "Every day someone grows by learning and someone grows by teaching. These are their stories.",
    newsBodyOne:
      "We share how libraries are coming back to life and how new learning paths become accessible, human and made for people who never stop growing.",
    newsBodyTwo:
      "We believe knowledge becomes richer when it is shared. Shared knowledge is not consumed, it multiplies. Teachers grow together with learners.",
    newsBodyThree: "Follow us to discover new events, new courses and new stories from the OpenLib community.",
    communityCarouselAria: "OpenLib community stories",
    communityControlsAria: "Community carousel controls",
    communityPrevAria: "Previous story",
    communityNextAria: "Next story",
    communityStoryAria: "Story {position} of {total}: {name}",
  },
};

const languageFlag = {
  it: "assets/flag-it.svg",
  en: "assets/flag-en.png",
};

const libraries = [
  {
    id: "feltrinelli",
    name: "Giangiacomo Feltrinelli",
    address: "Viale Pasubio, 5, 20154",
    city: "Milano (MI)",
    phone: "02 495 8341",
    photo: "assets/library-feltrinelli.png",
    searchTerms: ["milano", "20154", "feltrinelli", "pasubio"],
    hours: {
      it: "Lun - Ven · 09:30 - 11:30 / 14:00 - 17:30",
      en: "Mon - Fri · 09:30 - 11:30 / 14:00 - 17:30",
    },
  },
  {
    id: "sormani",
    name: "Palazzo Sormani",
    address: "Corso di Porta Vittoria, 6",
    city: "Milano (MI)",
    phone: "02 8846 3326",
    photo: "assets/library-feltrinelli.png",
    searchTerms: ["milano", "sormani", "porta vittoria", "20122"],
    hours: {
      it: "Lun - Sab · 10:00 - 18:00",
      en: "Mon - Sat · 10:00 - 18:00",
    },
  },
  {
    id: "venezia",
    name: "Biblioteca Venezia",
    address: "Via Frisi, 2/4",
    city: "Milano (MI)",
    phone: "02 8846 5799",
    photo: "assets/library-feltrinelli.png",
    searchTerms: ["milano", "venezia", "porta venezia", "20129"],
    hours: {
      it: "Mar - Sab · 09:30 - 18:00",
      en: "Tue - Sat · 09:30 - 18:00",
    },
  },
];

const calendarWeekdays = {
  it: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

const courseCatalog = [
  {
    id: "wordpress",
    theme: "dolphin",
    title: {
      it: "WordPress",
      en: "WordPress",
    },
    teacher: "Jonathan Quintini",
    description: {
      it: "Impara a creare e gestire il tuo sito in autonomia, dall'installazione alla personalizzazione delle pagine.",
      en: "Learn how to create and manage your own website, from installation to page customization.",
    },
  },
  {
    id: "english",
    theme: "lips",
    title: {
      it: "Inglese",
      en: "English",
    },
    teacher: "David Beckam",
    description: {
      it: "Corso di lingua inglese per imparare attraverso conversazioni reali, esercizi pratici e piccoli suggerimenti quotidiani.",
      en: "An English course built around real conversations, practical exercises and small everyday tips.",
    },
  },
  {
    id: "painting",
    theme: "chick",
    title: {
      it: "Pittura",
      en: "Painting",
    },
    teacher: "Ludovica Laneve",
    description: {
      it: "Insieme esploreremo colori e pennellate per liberare la tua creatività e dipingere il tuo primo quadro.",
      en: "Explore colors and brushstrokes, free your creativity and paint your first canvas together.",
    },
  },
  {
    id: "history",
    theme: "skin",
    title: {
      it: "Storia di Milano",
      en: "History of Milan",
    },
    teacher: "Beppe Sala",
    description: {
      it: "Scopri la storia di Milano insieme a un professore appassionato: un viaggio accogliente dalle radici romane alla metropoli moderna.",
      en: "Discover Milan's history with a passionate teacher, from its Roman roots to today's vibrant city.",
    },
  },
  {
    id: "communication",
    theme: "veil",
    title: {
      it: "Comunicazione empatica",
      en: "Empathetic communication",
    },
    teacher: "Maria Antonietta",
    description: {
      it: "Impara l'arte della comunicazione empatica: un percorso dolce per valorizzare il tuo talento e costruire relazioni serene nel lavoro.",
      en: "Learn empathetic communication through a gentle path that strengthens your talent and workplace relationships.",
    },
  },
];

const courseEvents = [
  {
    id: "wordpress-4",
    courseId: "wordpress",
    day: 4,
    time: "10:00 - 12:00",
    library: "Giangiacomo Feltrinelli",
    libraryShort: "G. Feltrinelli",
  },
  {
    id: "english-5",
    courseId: "english",
    day: 5,
    time: "09:30 - 11:00",
    library: {
      it: "Biblioteca Venezia",
      en: "Venezia Library",
    },
    libraryShort: "Venezia",
  },
  {
    id: "history-7",
    courseId: "history",
    day: 7,
    time: "14:00 - 16:00",
    library: "Biblioteca Parco Sempione",
    libraryShort: "Parco Sempione",
  },
  {
    id: "painting-11",
    courseId: "painting",
    day: 11,
    time: "09:00 - 12:00",
    library: "Pinacoteca Ambrosiana",
    libraryShort: "P. Ambrosiana",
  },
  {
    id: "wordpress-13",
    courseId: "wordpress",
    day: 13,
    time: "10:00 - 12:00",
    library: "Giangiacomo Feltrinelli",
    libraryShort: "G. Feltrinelli",
  },
  {
    id: "communication-15",
    courseId: "communication",
    day: 15,
    time: "15:00 - 17:30",
    library: "Palazzo Sormani",
    libraryShort: "Palazzo Sormani",
  },
  {
    id: "communication-18",
    courseId: "communication",
    day: 18,
    time: "15:00 - 17:30",
    library: "Palazzo Sormani",
    libraryShort: "Palazzo Sormani",
  },
  {
    id: "wordpress-19",
    courseId: "wordpress",
    day: 19,
    time: "10:00 - 12:00",
    library: "Giangiacomo Feltrinelli",
    libraryShort: "G. Feltrinelli",
  },
  {
    id: "english-21",
    courseId: "english",
    day: 21,
    time: "09:30 - 11:00",
    library: {
      it: "Biblioteca Venezia",
      en: "Venezia Library",
    },
    libraryShort: "Venezia",
  },
  {
    id: "painting-26",
    courseId: "painting",
    day: 26,
    time: "09:00 - 12:00",
    library: "Pinacoteca Ambrosiana",
    libraryShort: "P. Ambrosiana",
  },
  {
    id: "history-29",
    courseId: "history",
    day: 29,
    time: "14:00 - 16:00",
    library: "Biblioteca Parco Sempione",
    libraryShort: "Parco Sempione",
  },
];

const communityStories = [
  {
    name: "Giulia",
    image: "assets/community-giulia.png",
    cardTheme: "chick",
    labelTheme: "dolphin",
    quote: {
      it: "Ho sempre desiderato imparare a disegnare, ma non sapevo da dove iniziare.",
      en: "I always wanted to learn to draw, but I did not know where to begin.",
    },
    body: {
      it: "Giulia ha scoperto OpenLib e ha iniziato un corso di illustrazione. Grazie ai feedback della community, è riuscita a migliorare rapidamente le sue abilità e ora crea opere che condivide con orgoglio.",
      en: "Giulia discovered OpenLib and joined an illustration course. Thanks to community feedback, she quickly improved her skills and now proudly shares her work.",
    },
    tags: ["#CreativeJourney", "#ArtCommunity"],
  },
  {
    name: "Sara",
    image: "assets/community-sara.png",
    cardTheme: "panna",
    labelTheme: "choco",
    quote: {
      it: "Il mio primo progetto l'ho realizzato grazie a OpenLib.",
      en: "I built my first project thanks to OpenLib.",
    },
    body: {
      it: "Sara ha sempre sognato di creare un'app, ma non sapeva come iniziare. In OpenLib ha trovato i giusti strumenti e l'incoraggiamento per sviluppare la sua idea in un progetto concreto e funzionante.",
      en: "Sara had always dreamed of creating an app, but did not know where to start. OpenLib gave her the tools and encouragement to turn her idea into a working project.",
    },
    tags: ["#AppDevelopment", "#Inspiration"],
  },
  {
    name: "Luca",
    image: "assets/community-luca.png",
    cardTheme: "dolphin",
    labelTheme: "lips",
    quote: {
      it: "Ho trovato il coraggio di inseguire la mia passione per la musica.",
      en: "I found the courage to follow my passion for music.",
    },
    body: {
      it: "Luca, dopo aver tentato di imparare la chitarra da solo, ha trovato in OpenLib un gruppo di musicisti che lo ha supportato e motivato. La sua musica ha ora una nuova vita grazie a questa rete di supporto.",
      en: "After trying to learn guitar alone, Luca found a group of musicians through OpenLib who supported and motivated him. His music now has new life through this network.",
    },
    tags: ["#MusicalGrowth", "#SupportSystem"],
  },
  {
    name: "Elena",
    image: "assets/community-elena.png",
    cardTheme: "skin",
    labelTheme: "dolphin",
    quote: {
      it: "Da introversa a collaborativa",
      en: "From introverted to collaborative",
    },
    body: {
      it: "Elena si sentiva sola e intimorita all'idea di partecipare a eventi. OpenLib le ha fornito un ambiente sicuro dove connettersi con gli altri, e ora si sente parte integrante di un gruppo di creativi.",
      en: "Elena felt alone and intimidated by events. OpenLib gave her a safe environment to connect with others, and now she feels part of a creative group.",
    },
    tags: ["#SocialSkills", "#CommunityEngagement"],
  },
  {
    name: "Marco",
    image: "assets/community-marco.png",
    cardTheme: "lips",
    labelTheme: "choco",
    quote: {
      it: "Da solo su YouTube mi perdevo. Qui ho trovato amici e un mentore.",
      en: "Alone on YouTube I got lost. Here I found friends and a mentor.",
    },
    body: {
      it: "Marco era un programmatore online bloccato. In OpenLib ha trovato un peer-tutor che gli ha spiegato le basi e una community di amici con cui fare networking. La sua esperienza prova che l'apprendimento è più forte se fatto insieme.",
      en: "Marco was stuck learning programming online. At OpenLib he found a peer tutor, the basics he needed and a community of friends to network with.",
    },
    tags: ["#H2H", "#CommunityStories"],
  },
  {
    name: "Tommaso",
    image: "assets/community-tommaso.png",
    cardTheme: "chick",
    labelTheme: "lips",
    quote: {
      it: "Un viaggio che non avrei mai immaginato.",
      en: "A journey I never would have imagined.",
    },
    body: {
      it: "Tommaso ha iniziato come un semplice osservatore nella community di OpenLib. Dopo aver partecipato a vari workshop, ora conduce sessioni per altri, dimostrando che chiunque può diventare un leader.",
      en: "Tommaso started as a quiet observer in the OpenLib community. After joining workshops, he now leads sessions for others and proves anyone can become a leader.",
    },
    tags: ["#GrowthMindset", "#Leadership"],
  },
];

function getCopy(key) {
  return translations[appState.language][key] || translations.it[key] || "";
}

function formatCopy(key, replacements = {}) {
  return getCopy(key).replace(/\{(\w+)\}/g, (_, name) => replacements[name] || "");
}

function getLocalizedValue(value) {
  if (typeof value === "string") {
    return value;
  }

  return value?.[appState.language] || value?.it || "";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return replacements[character];
  });
}

function setTextContent() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = getCopy(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", getCopy(node.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", getCopy(node.dataset.i18nPlaceholder));
  });
}

function getActiveLibrary() {
  return libraries.find((library) => library.id === appState.activeLibraryId) || libraries[0];
}

function renderLibraryCard() {
  const library = getActiveLibrary();
  const fields = document.querySelectorAll("[data-map-field]");
  const status = document.querySelector("[data-map-status]");
  const photo = document.querySelector("[data-map-photo]");

  fields.forEach((field) => {
    const fieldName = field.dataset.mapField;
    const value = fieldName === "hours" ? library.hours[appState.language] : library[fieldName];

    if (value) {
      field.textContent = value;
    }
  });

  if (photo) {
    photo.setAttribute("src", library.photo);
  }

  if (status) {
    status.textContent = formatCopy(appState.mapStatusKey, { city: library.city });
  }

  document.querySelectorAll("[data-map-marker]").forEach((marker) => {
    const isActive = marker.dataset.mapMarker === library.id;
    marker.classList.toggle("is-active", isActive);
    marker.setAttribute("aria-pressed", String(isActive));
  });
}

function selectLibrary(libraryId, statusKey = "mapStatusDefault") {
  appState.activeLibraryId = libraryId;
  appState.mapStatusKey = statusKey;
  renderLibraryCard();
}

function findLibrary(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return null;
  }

  return libraries.find((library) =>
    library.searchTerms.some((term) => term.includes(normalizedQuery) || normalizedQuery.includes(term)),
  );
}

function getCourse(courseId) {
  return courseCatalog.find((course) => course.id === courseId) || courseCatalog[0];
}

function getCourseEvent(eventId) {
  return courseEvents.find((courseEvent) => courseEvent.id === eventId) || courseEvents[0];
}

function getCourseSummaryEvent(courseId) {
  return courseEvents.find((courseEvent) => courseEvent.courseId === courseId) || courseEvents[0];
}

function formatCourseDate(day) {
  return formatCopy("courseDateLabel", { day });
}

function renderCourseWeekdays() {
  const container = document.querySelector("[data-course-weekdays]");

  if (!container) {
    return;
  }

  container.innerHTML = calendarWeekdays[appState.language]
    .map((day) => `<span class="calendar-weekday" role="columnheader">${escapeHtml(day)}</span>`)
    .join("");
}

function renderCalendarEvent(courseEvent) {
  const course = getCourse(courseEvent.courseId);
  const title = getLocalizedValue(course.title);
  const library = getLocalizedValue(courseEvent.library);
  const libraryShort = getLocalizedValue(courseEvent.libraryShort);
  const isActive = courseEvent.id === appState.activeCourseEventId;
  const ariaLabel = formatCopy("courseCalendarEventAria", {
    title,
    day: courseEvent.day,
    time: courseEvent.time,
    library,
  });

  return `
    <button
      class="calendar-event course-theme--${course.theme}${isActive ? " is-active" : ""}"
      type="button"
      data-course-select="${escapeHtml(courseEvent.id)}"
      aria-pressed="${String(isActive)}"
      aria-label="${escapeHtml(ariaLabel)}"
    >
      <span class="calendar-event__title">${escapeHtml(title)}</span>
      <span class="calendar-event__library">${escapeHtml(libraryShort)}</span>
    </button>
  `;
}

function renderCourseCalendar() {
  const container = document.querySelector("[data-course-calendar]");
  const firstDayColumn = 5;

  if (!container) {
    return;
  }

  const leadingDays = Array.from(
    { length: firstDayColumn - 1 },
    () => '<div class="calendar-day calendar-day--empty calendar-day--muted" role="gridcell" aria-hidden="true"></div>',
  );
  const monthDays = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    const column = ((firstDayColumn + index - 1) % 7) + 1;
    const isWeekend = column > 5;
    const dayEvents = courseEvents.filter((courseEvent) => courseEvent.day === day);

    return `
      <div
        class="calendar-day${isWeekend ? " calendar-day--muted" : ""}"
        role="gridcell"
      >
        <span class="calendar-day__number">${day}</span>
        ${dayEvents.map(renderCalendarEvent).join("")}
      </div>
    `;
  });

  container.innerHTML = leadingDays.concat(monthDays).join("");
}

function renderCourseCard(course) {
  const activeEvent = getCourseEvent(appState.activeCourseEventId);
  const isActive = activeEvent.courseId === course.id;
  const courseEvent = isActive ? activeEvent : getCourseSummaryEvent(course.id);
  const title = getLocalizedValue(course.title);
  const description = getLocalizedValue(course.description);
  const library = getLocalizedValue(courseEvent.library);

  return `
    <article class="course-card course-theme--${course.theme}${isActive ? " is-active" : ""}">
      <button
        class="course-card__select"
        type="button"
        data-course-select="${escapeHtml(courseEvent.id)}"
        aria-pressed="${String(isActive)}"
      >
        <span class="course-card__date">${escapeHtml(formatCourseDate(courseEvent.day))}</span>
        <strong>${escapeHtml(title)}</strong>
        <span class="course-card__teacher">${escapeHtml(course.teacher)}</span>
      </button>
      <p class="course-card__description">${escapeHtml(description)}</p>
      <div class="course-card__meta">
        <span class="course-card__label">${escapeHtml(getCopy("courseLibraryLabel"))}</span>
        <strong class="course-card__library">${escapeHtml(library)}</strong>
        <span class="course-card__time">${escapeHtml(courseEvent.time)}</span>
      </div>
      <a class="button button--primary course-card__cta" href="#signup">${escapeHtml(getCopy("courseSignupCta"))}</a>
    </article>
  `;
}

function renderCourseList() {
  const container = document.querySelector("[data-course-list]");

  if (!container) {
    return;
  }

  container.innerHTML = courseCatalog.map(renderCourseCard).join("");
}

function renderCourses() {
  renderCourseWeekdays();
  renderCourseCalendar();
  renderCourseList();
}

function selectCourse(eventId) {
  if (!courseEvents.some((courseEvent) => courseEvent.id === eventId)) {
    return;
  }

  appState.activeCourseEventId = eventId;
  renderCourses();
}

function renderCommunityCard(story, index) {
  const quote = getLocalizedValue(story.quote);
  const body = getLocalizedValue(story.body);
  const isActive = index === appState.activeCommunityIndex;
  const ariaLabel = formatCopy("communityStoryAria", {
    position: index + 1,
    total: communityStories.length,
    name: story.name,
  });

  return `
    <article
      class="community-card community-theme--${story.cardTheme}${isActive ? " is-active" : ""}"
      data-community-card
      data-community-index="${index}"
      aria-current="${isActive ? "true" : "false"}"
      aria-label="${escapeHtml(ariaLabel)}"
    >
      <div class="community-card__content">
        <div class="community-card__header">
          <span class="community-card__avatar">
            <img src="${escapeHtml(story.image)}" alt="${escapeHtml(story.name)}" loading="lazy">
          </span>
          <span class="community-card__name community-label--${story.labelTheme}">${escapeHtml(story.name)}</span>
        </div>
        <div class="community-card__story">
          <blockquote>&ldquo;${escapeHtml(quote)}&rdquo;</blockquote>
          <p>${escapeHtml(body)}</p>
        </div>
      </div>
      <div class="community-card__tags">
        ${story.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
    </article>
  `;
}

function updateCommunityCarousel(shouldScroll = true) {
  const viewport = document.querySelector("[data-community-viewport]");
  const cards = document.querySelectorAll("[data-community-card]");

  cards.forEach((card, index) => {
    const isActive = index === appState.activeCommunityIndex;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-current", String(isActive));
  });

  const activeCard = cards[appState.activeCommunityIndex];

  if (shouldScroll && viewport && activeCard) {
    viewport.scrollTo({ left: activeCard.offsetLeft, behavior: "smooth" });
  }
}

function renderCommunityCarousel() {
  const track = document.querySelector("[data-community-track]");

  if (!track) {
    return;
  }

  track.innerHTML = communityStories.map(renderCommunityCard).join("");
  updateCommunityCarousel(false);
}

function selectCommunityStory(index) {
  const normalizedIndex = (index + communityStories.length) % communityStories.length;

  appState.activeCommunityIndex = normalizedIndex;
  updateCommunityCarousel();
}

function setDocumentLanguage() {
  document.documentElement.lang = appState.language;
  document.title = getCopy("documentTitle");

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute("content", getCopy("metaDescription"));
  }
}

function setLanguageToggle() {
  const toggle = document.querySelector("[data-language-toggle]");
  const flag = document.querySelector("[data-language-flag]");
  const label = document.querySelector("[data-language-label]");

  if (!toggle || !flag || !label) {
    return;
  }

  flag.setAttribute("src", languageFlag[appState.language]);
  label.textContent = appState.language.toUpperCase();
  toggle.setAttribute("aria-label", getCopy("languageToggleAria"));
}

function applyLanguage() {
  document.body.dataset.language = appState.language;
  setDocumentLanguage();
  setTextContent();
  setLanguageToggle();
  renderLibraryCard();
  renderCourses();
  renderCommunityCarousel();
}

function toggleLanguage() {
  appState.language = appState.language === "it" ? "en" : "it";
  applyLanguage();
}

function setMenuState(isOpen) {
  const toggle = document.querySelector("[data-menu-toggle]");

  appState.menuOpen = isOpen;
  document.body.classList.toggle("menu-open", isOpen);

  if (toggle) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    const label = toggle.querySelector("[data-i18n]");

    if (label) {
      label.dataset.i18n = isOpen ? "menuClose" : "menuOpen";
      label.textContent = getCopy(label.dataset.i18n);
    }
  }
}

function bindNavigation() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const languageToggle = document.querySelector("[data-language-toggle]");
  const navLinks = document.querySelectorAll("[data-nav-menu] a");

  menuToggle?.addEventListener("click", () => {
    setMenuState(!appState.menuOpen);
  });

  languageToggle?.addEventListener("click", toggleLanguage);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

function bindMap() {
  const form = document.querySelector("[data-map-search-form]");
  const input = document.querySelector("[data-map-search-input]");

  document.querySelectorAll("[data-map-marker]").forEach((marker) => {
    marker.addEventListener("click", () => {
      selectLibrary(marker.dataset.mapMarker, "mapStatusDefault");
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const library = findLibrary(input?.value || "");

    if (library) {
      selectLibrary(library.id, "mapStatusFound");
      return;
    }

    selectLibrary("feltrinelli", input?.value ? "mapStatusFallback" : "mapStatusDefault");
  });
}

function bindCourses() {
  const courseSection = document.querySelector("[data-course-section]");

  courseSection?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const control = event.target.closest("[data-course-select]");

    if (!control) {
      return;
    }

    selectCourse(control.dataset.courseSelect);
  });
}

function bindCommunityCarousel() {
  const previousButton = document.querySelector("[data-community-prev]");
  const nextButton = document.querySelector("[data-community-next]");
  const track = document.querySelector("[data-community-track]");

  previousButton?.addEventListener("click", () => {
    selectCommunityStory(appState.activeCommunityIndex - 1);
  });

  nextButton?.addEventListener("click", () => {
    selectCommunityStory(appState.activeCommunityIndex + 1);
  });

  track?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const card = event.target.closest("[data-community-card]");

    if (!card) {
      return;
    }

    const cardIndex = Number(card.dataset.communityIndex);

    if (Number.isNaN(cardIndex)) {
      return;
    }

    selectCommunityStory(cardIndex);
  });
}

function markAppReady() {
  document.body.classList.add("is-ready");
}

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindMap();
  bindCourses();
  bindCommunityCarousel();
  applyLanguage();
  markAppReady();
});

window.OpenLib = {
  state: appState,
  setLanguage(language) {
    if (!translations[language]) {
      return;
    }

    appState.language = language;
    applyLanguage();
  },
};
