import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celebrate vs. Cellebrate — Spelling Comparison",
  description: "Learn the difference between 'celebrate' and 'cellebrate', see correct spelling, definitions, usage, synonyms, notes, and FAQs.",
};

export default function CelebrateVsCellebratePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Celebrate or Cellebrate?</h1>
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
        <p className="text-lg md:text-xl text-gray-800">Which is correct: <strong>celebrate</strong> or <strong>cellebrate</strong>? Let&apos;s compare the spellings, meanings, and usage.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Incorrect card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">❌</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-red-800">Cellebrate</span>
            <div className="text-red-700 text-lg md:text-xl">Incorrect spelling</div>
          </div>
        </div>
        {/* Correct card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">✅</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-green-800">Celebrate</span>
            <div className="text-green-700 text-lg md:text-xl">Correct spelling</div>
          </div>
        </div>
      </div>
      {/* Summary section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Celebrate</strong> is the correct spelling, meaning to acknowledge a significant or happy day or event with a social gathering or enjoyable activity. <strong>Cellebrate</strong> is a common misspelling and is not recognized in standard English.
        </p>
      </div>
      {/* Definition section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
        <div className="mb-4">
          <span className="font-bold text-lg md:text-xl">Celebrate:</span>
          <span className="text-lg md:text-xl ml-2">To acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity.</span>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">Cellebrate:</span>
          <span className="text-lg md:text-xl ml-2">(Incorrect) — Not a recognized English word.</span>
        </div>
      </section>
      {/* Synonyms section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Celebrate</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl">
          <span>Commemorate</span>
          <span>Observe</span>
          <span>Honor</span>
          <span>Mark</span>
        </div>
      </section>
      {/* Notes section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Celebrate&quot; is always spelled with a single &quot;l&quot; and a single &quot;e&quot; after the &quot;l&quot;.</li>
          <li>&quot;Cellebrate&quot; is a misspelling and should be avoided in all writing.</li>
          <li>The word &quot;celebrate&quot; comes from the Latin &quot;celebrare&quot;.</li>
        </ul>
      </div>
      {/* FAQ section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">Is &quot;cellebrate&quot; ever correct?</h3>
          <p className="text-lg md:text-xl">No, &quot;cellebrate&quot; is not a correct spelling in English. Always use &quot;celebrate&quot;.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">What does &quot;celebrate&quot; mean?</h3>
          <p className="text-lg md:text-xl">To acknowledge a special day or event with festivities or activities.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">How do you use &quot;celebrate&quot; in a sentence?</h3>
          <p className="text-lg md:text-xl">Example: &quot;We will celebrate her birthday with a party.&quot;</p>
        </div>
      </section>
    </main>
  );
} 