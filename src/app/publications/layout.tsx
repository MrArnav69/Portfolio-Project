import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Preprints by Arnav Gupta: verifier exploitation in NLI-guided iterative refinement (Research Square, 2026) and the spectral saturation index for few-shot label acquisition (arXiv, 2026, v2).",
  openGraph: {
    title: "Publications — Arnav Gupta",
    description: "Two preprints on representation geometry and iterative refinement by independent ML researcher Arnav Gupta.",
  },
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
