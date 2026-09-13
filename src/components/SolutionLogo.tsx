import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { SolutionIcon, type SolutionKind } from "./SolutionIcon";
import "@site/src/css/solutionLogo.css";

const productLogos: Partial<Record<SolutionKind, string>> = {
  folder: "/img/logo-AldoERP-gbfree.webp",
  calendar: "/img/logoReservas.png",
};

/** Product artwork where available; service symbols otherwise. Names sit alongside. */
export function SolutionLogo({ kind }: { kind: SolutionKind }) {
  const logo = productLogos[kind];
  const src = useBaseUrl(logo ?? "/");

  return (
    <span className={`solution-logo solution-logo--${kind}`} aria-hidden="true">
      {logo ? (
        <img src={src} alt="" width="56" height="56" draggable={false} />
      ) : (
        <SolutionIcon kind={kind} />
      )}
    </span>
  );
}
