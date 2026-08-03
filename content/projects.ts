import type { Project } from "@/lib/types";

/**
 * `embeddable` was verified against live response headers:
 *   - oscaraction.com sends `x-frame-options: DENY`
 *   - uil-csr.streamlit.app returns an endless 303 redirect loop (Streamlit sleep/wake)
 * Both fall back to their static screenshot. The rest returned 200 with no
 * X-Frame-Options and no CSP frame-ancestors.
 */
export const projects: Project[] = [
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
    slug: "abc-sightreading",
    title: "ABC Sightreading",
    category: "Music / Generative",
    blurb: "Generates endless custom sightreading exercises on demand.",
    description:
      "A generative approach to music sightreading practice. Set the constraints (key, range, rhythm, difficulty) and it composes fresh exercises, so students never run out of material or memorize the answers.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/sight-reading-1IbjSXgREhwMaoJLNSV1MXZBVZWdqY.png",
    demoUrl: "https://abc-sightreading.vercel.app/",
    githubUrl: "https://github.com/BlaineCowen/AbcSightreading",
    tags: ["Astro", "Node.js", "Svelte", "Tailwind"],
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
    slug: "music-explorer",
    title: "Music Explorer",
    category: "Music / Education",
    blurb: "An ear-training suite: intervals, rhythm, solfege, steady beat.",
    description:
      "A suite of ear-training games for classrooms and solo practice, covering intervals, rhythm, solfege, and steady beat. Audio is synthesized in the browser, so it works on any device without downloads.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/projects/music-explorer.png",
    demoUrl: "https://music-learn-fun.vercel.app/",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Tone.js"],
    embeddable: true,
  },
  {
    slug: "oscar-action",
    title: "Oscar Action",
    category: "Game / Live data",
    blurb: "A friendly Oscars betting game driven by real-time odds.",
    description:
      "A friendly 'betting' game for the Academy Awards, pulling live odds and nominee data from several APIs. A Python backend keeps the odds fresh while the frontend handles pools and scoring.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/oscaraction-XiEfyCBYNuDLUWXQJRMvq704FMqS6C.png",
    demoUrl: "https://oscaraction.com",
    githubUrl: "https://github.com/BlaineCowen/oscar-bet",
    tags: ["Next.js", "Tailwind", "Python", "FastAPI", "PostgreSQL", "Docker"],
    // Sends `x-frame-options: DENY`, so it will never render in a frame.
    embeddable: false,
  },
  {
    slug: "easy-attendance",
    title: "Easy Attendance",
    category: "Tooling / Analytics",
    blurb: "Attendance for large groups, with the reporting that was always missing.",
    description:
      "An attendance system built for large groups, with report tracking and analytics. Designed around the actual problem: taking roll for a hundred students has to happen in under a minute, and the data has to be useful afterward.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/easy-attendance-kufjTAtqiKbzqSCVvMA724aGlZFHkS.png",
    demoUrl: "https://rehearsal-check-in-inky.vercel.app/",
    githubUrl: "https://github.com/BlaineCowen/rehearsal-check-in",
    tags: [
      "Next.js",
      "Tailwind",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React Query",
    ],
    embeddable: true,
  },
  {
    slug: "aurdle",
    title: "Aurdle",
    category: "Music / Game",
    blurb: "Wordle, but you have to hear the answer.",
    description:
      "A Wordle-style daily game for ear training: guess the sequence by listening rather than reading. Same compulsive loop, aimed at a skill musicians actually need.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/aurdle-mcRyNzntJbjku8NjHnb2SGNJx8Q0L4.png",
    demoUrl: "https://aurdle.vercel.app/",
    githubUrl: "https://github.com/BlaineCowen/aurdle",
    tags: [
      "Next.js",
      "Tailwind",
      "React",
      "Vercel",
      "Tone.js",
      "Shadcn/UI",
      "Framer Motion",
    ],
    embeddable: true,
  },
  {
    slug: "sb-squares",
    title: "Super Bowl Squares",
    category: "Game / Utility",
    blurb: "The office pool, without the spreadsheet.",
    description:
      "An online tool for running Super Bowl Squares. Grid setup, claiming, and scoring are handled, so nobody has to maintain a shared spreadsheet on game day.",
    imageUrl:
      "https://3isexyxg2bd3whr8.public.blob.vercel-storage.com/sb-squares-coccvbKssqfP5AQEVwKANK8dddS7Fp.png",
    demoUrl: "https://sb-squares.vercel.app/",
    githubUrl: "https://github.com/BlaineCowen/sb-squares",
    tags: ["Astro", "Node.js", "Svelte", "Tailwind"],
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
