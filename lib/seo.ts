export const SITE_URL = "https://metropolis-retro.github.io";

export const CLUB_NAME = "Metropolis Retro";
export const TITLE_BASE = CLUB_NAME;
export const BLOG_TITLE_BASE = `${TITLE_BASE} Blog`;

export const BASE_KEYWORDS = [
  CLUB_NAME,
  "chess club",
  "Brisbane chess",
  "chess meetup Brisbane",
  "chess events Brisbane",
  "Australia chess club",
];

export function pageKeywords(extraKeywords: string[] = []) {
  return Array.from(new Set([...BASE_KEYWORDS, ...extraKeywords]));
};
