import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, technical skills, mathematics coursework, and personal interests of Arnav Gupta — independent ML researcher from Nepal.",
  openGraph: {
    title: "About — Arnav Gupta",
    description: "Biography, technical skills, and personal interests of Arnav Gupta — independent ML researcher from Nepal, Grade 10.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
