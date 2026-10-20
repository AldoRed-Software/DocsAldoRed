import React from "react";

export type SolutionKind = "archive" | "calendar" | "code" | "layers" | "menu" | "cloud";
const paths: Record<SolutionKind, React.ReactNode> = {
  cloud: <><path d="M7 18H6a4 4 0 0 1-.7-7.94A6 6 0 0 1 17 8a5 5 0 0 1 1 10h-1" /><path d="m9 18 2 2 4-5" /></>,
  archive: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 12h16M10 7.5h4M10 16.5h4" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18m-14 5 3 3 6-5" /></>,
  code: <><path d="m7 7-5 5 5 5m10-10 5 5-5 5m-3-14-4 18" /></>,
  layers: <><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></>,
  menu: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
};
export function SolutionIcon({ kind }: { kind: SolutionKind }) {
  return <svg className="solution-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}
