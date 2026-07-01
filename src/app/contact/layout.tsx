import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Arnav Gupta — independent ML researcher from Nepal. Available via academic email, ORCID, Google Scholar, LinkedIn, GitHub, and X.",
  openGraph: {
    title: "Contact — Arnav Gupta",
    description: "Get in touch with Arnav Gupta for research collaborations, academic correspondence, or general enquiries.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
