import type { Metadata } from "next";
import type { ReactNode } from "react";
import { baseUrl } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Grammar Guides | Word Finder",
  description: "Comprehensive grammar resources: parts of speech, punctuation, tenses, and more.",
  openGraph: {
    title: "Grammar Guides | Word Finder",
    description: "Comprehensive grammar resources: parts of speech, punctuation, tenses, and more.",
    url: `${baseUrl}grammar`,
    type: "website",
  },
  robots: "index, follow",
};

export default function GrammarLayout({ children }: { children: ReactNode }) {
  return children;
}

