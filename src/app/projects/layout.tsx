import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Machine learning projects by Arnav Gupta, including NietzscheGPT, a Transformer built from scratch, and 10D hypercube visualization.",
  openGraph: {
    title: "Projects — Arnav Gupta",
    description: "Machine learning and data science projects by Arnav Gupta — NietzscheGPT, Transformer from scratch, 10D visualization, and more.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
