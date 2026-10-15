import type { Milestone } from "@/lib/types";

export const milestones: Milestone[] = [
  {
    eyebrow: "Where I started",
    title: "Ten years in the classroom",
    body: "Teaching music in Texas public schools. The job was the same every single day: take something genuinely complicated, and find the version of it that finally clicks for the person in front of you. That skill did not stay behind when I left.",
  },
  {
    eyebrow: "The first builds",
    title: "Problems I actually had",
    body: "Once I noticed it I could not stop noticing it. Taking roll for a hundred students took too long. Sight-reading exercises ran out. Twenty years of contest results existed, but nobody had put them in one place. Each of those became something I built, and then something other teachers depended on.",
  },
  {
    eyebrow: "Real constraints",
    title: "Software a school can actually run",
    body: "Two builds taught me the most. A pickup system for a line of about 200 cars, shared live by several staff on their phones, that clears in around 30 minutes. And a specialties schedule for five classes across three days, with logic involved enough that I prototyped it in Google Sheets before wrapping it in an Apps Script interface. Both handled student records, so both were built to stay inside Google Workspace and within FERPA.",
  },
  {
    eyebrow: "Getting serious",
    title: "Fundamentals, then shipping in public",
    body: "CS50 for the parts I had been working around rather than understanding. Python and SQL first, because the data problems came first. Then React and TypeScript, because the people using these things deserved a real interface.",
  },
  {
    eyebrow: "Now",
    title: "Looking for a team to build with",
    body: "Lately that has meant Octavo, which reads choral sheet music from a PDF or phone photos, and a pair of audio plugins in C++, which is where I went once the web stopped being the hard part. Every one of them started with a problem someone actually described to me. I am looking for a full-time engineering role where that instinct is useful.",
  },
];
