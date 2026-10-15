export type Project = {
  slug: string;
  title: string;
  /** Short right-column label in the work index, e.g. "Data / Dashboard". */
  category: string;
  /** One line for the index row. */
  blurb: string;
  /** Longer copy for the card and modal. */
  description: string;
  imageUrl: string;
  /**
   * Optional muted loop shown in place of the still. `imageUrl` must be the
   * video's first frame so there is no jump when playback starts, and it is
   * what shows under reduced motion or if the video fails.
   */
  videoUrl?: string;
  /** Omitted for projects with nothing public to link to. */
  demoUrl?: string;
  githubUrl?: string;
  /**
   * Shown in place of a link when a project has no public URL, e.g.
   * "Private beta". Its presence is what makes a row non-clickable.
   */
  status?: string;
  /**
   * URL to load in the live preview frame when it differs from demoUrl,
   * e.g. Streamlit only serves an embeddable page with `?embed=true`.
   */
  previewUrl?: string;
  tags: string[];
  /**
   * Whether the deployed site can be embedded in an iframe for the live
   * preview. Verified against the live response headers. See
   * components/work/LivePreview.tsx. Never assume true.
   */
  embeddable: boolean;
  /**
   * Optional written case study. The "Case Study" affordance only renders
   * when this exists, so writeups can be added one at a time.
   */
  /**
   * Marks the one project that gets a full-width spread above the rest of the
   * work, with the story behind it. Only one project should set this.
   */
  flagship?: {
    story: string[];
    facts: { figure: string; label: string }[];
  };
  caseStudy?: {
    problem: string;
    solution: string;
  };
};

export type SkillGroup = {
  title: string;
  /** Tag strings that must match Project["tags"] exactly so usage counts stay honest. */
  items: string[];
};

export type Milestone = {
  eyebrow: string;
  title: string;
  body: string;
};

export type Education = {
  title: string;
  institution: string;
  description: string;
};
