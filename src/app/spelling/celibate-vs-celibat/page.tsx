import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celibate vs. Celibat — Spelling Comparison",
  description: "Learn the difference between 'celibate' and 'celibat', see correct spelling, definitions, usage, synonyms, notes, and FAQs.",
};

export default function CelibateVsCelibatPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Celibate or Celibat?</h1>
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
        <p className="text-lg md:text-xl text-gray-800">Which is correct: <strong>celibate</strong> or <strong>celibat</strong>? Let&apos;s compare the spellings, meanings, and usage.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Incorrect card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">❌</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-red-800">Celibat</span>
            <div className="text-red-700 text-lg md:text-xl">Incorrect spelling</div>
          </div>
        </div>
        {/* Correct card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">✅</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-green-800">Celibate</span>
            <div className="text-green-700 text-lg md:text-xl">Correct spelling</div>
          </div>
        </div>
      </div>
      {/* Summary section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Celibate</strong> is the correct spelling, meaning abstaining from marriage and sexual relations, typically for religious reasons. <strong>Celibat</strong> is a common misspelling and is not recognized in standard English.
        </p>
      </div>
      {/* Definition section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
        <div className="mb-4">
          <span className="font-bold text-lg md:text-xl">Celibate:</span>
          <span className="text-lg md:text-xl ml-2">Abstaining from marriage and sexual relations, often for religious reasons.</span>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">Celibat:</span>
          <span className="text-lg md:text-xl ml-2">(Incorrect) — Not a recognized English word.</span>
        </div>
      </section>
      {/* Synonyms section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Celibate</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl">
          <span>Abstinent</span>
          <span>Chaste</span>
          <span>Unmarried</span>
          <span>Single</span>
        </div>
      </section>
      {/* Notes section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Celibate&quot; is always spelled with an &quot;e&quot; at the end.</li>
          <li>&quot;Celibat&quot; is a misspelling and should be avoided in all writing.</li>
          <li>The word &quot;celibate&quot; comes from the Latin &quot;caelibatus&quot;.</li>
        </ul>
      </div>
      {/* FAQ section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">Is &quot;celibat&quot; ever correct?</h3>
          <p className="text-lg md:text-xl">No, &quot;celibat&quot; is not a correct spelling in English. Always use &quot;celibate&quot;.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">What does &quot;celibate&quot; mean?</h3>
          <p className="text-lg md:text-xl">It refers to abstaining from marriage and sexual relations, often for religious reasons.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">How do you use &quot;celibate&quot; in a sentence?</h3>
          <p className="text-lg md:text-xl">Example: &quot;He chose to remain celibate for personal reasons.&quot;</p>
        </div>
      </section>
    </main>
  );
} 