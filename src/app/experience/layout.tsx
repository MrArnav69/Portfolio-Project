import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Research experience, fellowships, and internships of Arnav Gupta — including Harvard AI Fellowship and ML Internship at Suvidha Foundation.",
  openGraph: {
    title: "Experience — Arnav Gupta",
    description: "Research experience, fellowships, and internships of Arnav Gupta — independent ML researcher from Nepal.",
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
