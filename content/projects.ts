import type { Project } from "@/lib/types";

/**
 * `embeddable` was verified against live response headers (no X-Frame-Options or
 * CSP frame-ancestors on the framed sites). uil-csr.streamlit.app returns an
 * endless 303 redirect loop (Streamlit sleep/wake) and falls back to its
 * screenshot via `previewUrl`.
 */
export const projects: Project[] = [
  {
    slug: "abc-sightreading",
    title: "abcSightReading",
    category: "Music / Generative",
    blurb: "Endless four-part sight-reading, generated from real harmony rules.",
    description:
      "Unlimited sight-reading exercises for choirs and ensembles, generated from real harmony rules in the key, level and voicing a group actually needs. SATB, SSA, TTB and unison, aligned to UIL levels 1 to 5, with a generator that is covered by well over a thousand automated tests.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/abc-home-clean.png",
    demoUrl: "https://abc-sightreading.com",
    githubUrl: "https://github.com/BlaineCowen/AbcSightreading",
    tags: ["TypeScript", "Astro", "Svelte", "Tailwind", "PostgreSQL", "Prisma", "Stripe"],
    flagship: {
      story: [
        "Every sight-reading exercise a choir can buy gets memorized within a week, and writing a fresh four-part one by hand takes longer than the rehearsal it is for. I kept hitting that wall as a teacher, so I wrote a generator instead.",
        "It composes SATB, SSA, TTB and unison exercises from real harmony rules, in the key, range and difficulty a group actually needs, graded against the Texas UIL levels I used to prepare students for. Students can play along to a backing track, tune with the built-in tuner, and practise piano with graded playback.",
        "Because the output is randomized, I test it statistically: the suite runs to 1,700+ tests, and many of them generate dozens of exercises and assert on rates, not single cases. That is the part I am proudest of, and the reason I trust it in front of a room of students.",
      ],
      facts: [
        { figure: "1,700+", label: "Automated tests, many statistical" },
        { figure: "4", label: "Formats: SATB, SSA, TTB, unison" },
        { figure: "5", label: "UIL difficulty levels" },
        { figure: "Pro", label: "Accounts, Stripe billing, Postgres" },
      ],
    },
    embeddable: true,
  },
  {
    slug: "octavo",
    title: "Octavo",
    category: "Music / OMR",
    blurb: "Reads your choir's sheet music, so you only fix what it got wrong.",
    description:
      "Upload a PDF or phone photos of choral octavos and get back an editable score, with the original page beside it. Where the reading is unsure, it shows that spot on the page and asks. Output is MusicXML for MuseScore, Sibelius, Dorico or Finale, MIDI for rehearsal tracks, or a PDF to print.",
    imageUrl: "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/octavo-home.png",
    demoUrl: "https://octavomusic.app",
    status: "Private preview",
    tags: ["Python", "OMR", "MusicXML"],
    embeddable: true,
  },
  {
    slug: "learnmusic",
    title: "LearnMusic.fun",
    category: "Music / Education",
    blurb: "Seventeen ear-training and theory games built for the music classroom.",
    description:
      "Seventeen ear-training and theory games with solo, classroom, team and four-corners play modes, a projector-friendly full-screen view, and class leaderboards that need no student accounts. Audio is synthesized in the browser; accounts, sessions and premium subscriptions sit on PostgreSQL and Stripe.",
    imageUrl: "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/learnmusic-home.png",
    demoUrl: "https://www.learnmusic.fun",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Tone.js", "PostgreSQL"],
    embeddable: true,
  },
  {
    slug: "teacher-tools",
    title: "Teacher Tools",
    category: "Tooling / Classroom",
    blurb: "The classroom workflows I use every day, in one place.",
    description:
      "A collection of the workflows I leaned on most as a teacher, built to share one roster: automated attendance with a check-in kiosk, a points tracker with a class leaderboard, drag-and-drop seating charts, rubric grading, and roster management with CSV import. Add your students once and every tool already knows them. A pre-loaded demo class lets anyone try it without an account.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/teacher-tools-home.png",
    demoUrl: "https://teacher-tools.blainecowen.com",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "React Query"],
    embeddable: true,
  },
  {
    slug: "octivate",
    title: "Octivate",
    category: "Audio / ML",
    blurb: "Sing an octave low, get a clean female voice back, entirely locally.",
    description:
      "Voice conversion for choral demo tracks: sing the part an octave below where it sits and get back a clear female voice at the right pitch. A Whisper-based encoder keeps the words and discards the singer's timbre, and a diffusion transformer resynthesizes from a target speaker embedding plus the pitch curve shifted up twelve semitones. Runs on Apple Silicon with no account and no upload, and ships with a verification script that measures pitch error, timing drift and speaker similarity against a naive formant warp.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/octivate-home.png",
    // Local command-line tool built on Seed-VC; nothing public to link to.
    status: "Runs locally",
    tags: ["Python", "PyTorch", "Voice conversion"],
    embeddable: false,
  },
  {
    slug: "uil-dashboard",
    title: "Texas UIL Results Dashboard",
    category: "Data / Dashboard",
    blurb: "Twenty years of Texas music contest results, in one place for the first time.",
    description:
      "A dashboard for every Texas Music UIL result since 2005. Filter by school, district, and subject, then drill into per-song scores and advanced statistics through a fuzzy search. The data was scraped, normalized, and warehoused from scratch.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/uil-screenshot-5DYmgDccXxd2YOAvj84uyVBPDJNJbg.png",
    demoUrl: "https://uil-csr.streamlit.app/",
    // The bare URL 303-redirects into Streamlit's auth flow; ?embed=true serves
    // a clean 200 that will actually render in a frame.
    previewUrl: "https://uil-csr.streamlit.app/?embed=true",
    githubUrl: "https://github.com/BlaineCowen/UIL_History",
    tags: ["Python", "SQL", "Flask", "HTML", "CSS", "Selenium"],
    embeddable: true,
  },
  {
    slug: "jeopardy-lite",
    title: "Jeopardy! Lite",
    category: "Game / Multiplayer",
    blurb: "Multiplayer trivia built for the pace of a real classroom.",
    description:
      "A multiplayer trivia challenge with category-based rounds and fast, classroom-friendly gameplay. Built so a teacher can start a game in seconds without setup or accounts.",
    // Mid-game board rather than the splash screen: shows scoring, categories,
    // dollar values, and powerups, which is what the project actually is.
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/jeopardy-lite-board.png",
    demoUrl: "https://jeopardy-lite.vercel.app/",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Multiplayer"],
    embeddable: true,
  },
  {
    slug: "harmelody",
    title: "Harmelody",
    category: "Audio / Plugin",
    blurb: "A real-time vocal harmoniser that reads the key from your MIDI chords.",
    description:
      "Two VST3 and AU plugins built on a shared C++ DSP core. Harmelody adds up to four in-key harmony voices, each with its own interval style, level and pan. Harmelody Tune is a standalone autotune with retune speed, flex-tune, formant and natural vibrato. Both take a vocal on an audio track plus chords on a MIDI track and infer the key from those chords, and pitch shifting runs through three interchangeable engines that can be swapped while audio is playing.",
    // Still is the video's exact first frame, so the swap is invisible.
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/harmelody-rack.png",
    videoUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/harmelody-rack.mp4",
    // No demoUrl or githubUrl: it is a desktop plugin and the repo is private,
    // so `status` renders instead of a link. Distribution is also gated on a
    // Rubber Band GPL question, so nothing here should imply a download.
    status: "Private beta",
    tags: ["C++", "JUCE", "CMake", "Real-time DSP", "VST3", "AU"],
    embeddable: false,
  },
];
