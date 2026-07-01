import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentials",
  description: "Academic credentials, fellowships, and certifications of Arnav Gupta — Harvard AI Fellowship, Suvidha ML Internship, CS50 AI, DeepLearning.AI, and more.",
  openGraph: {
    title: "Credentials — Arnav Gupta",
    description: "Harvard AI Fellowship, ML Internship, CS50, DeepLearning.AI and 19+ certifications.",
  },
};

export default function CredentialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
