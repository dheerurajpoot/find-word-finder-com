import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coyote vs. Cayote — Spelling Comparison",
  description: "Learn the difference between 'coyote' and 'cayote', see correct spelling, definitions, usage, synonyms, notes, and FAQs.",
};

export default function CoyoteVsCayotePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Coyote or Cayote?</h1>
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
        <p className="text-lg md:text-xl text-gray-800">Which is correct: <strong>coyote</strong> or <strong>cayote</strong>? Let&apos;s compare the spellings, meanings, and usage.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Incorrect card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">❌</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-red-800">Cayote</span>
            <div className="text-red-700 text-lg md:text-xl">Incorrect spelling</div>
          </div>
        </div>
        {/* Correct card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">✅</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-green-800">Coyote</span>
            <div className="text-green-700 text-lg md:text-xl">Correct spelling</div>
          </div>
        </div>
      </div>
      {/* Summary section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Coyote</strong> is the correct spelling for the North American wild canine. <strong>Cayote</strong> is a common misspelling and is not recognized in standard English.
        </p>
      </div>
      {/* Definition section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
        <div className="mb-4">
          <span className="font-bold text-lg md:text-xl">Coyote:</span>
          <span className="text-lg md:text-xl ml-2">A wild canine native to North America, known for its adaptability and intelligence.</span>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">Cayote:</span>
          <span className="text-lg md:text-xl ml-2">(Incorrect) — Not a recognized English word.</span>
        </div>
      </section>
      {/* Synonyms section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Coyote</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl">
          <span>Canis latrans</span>
          <span>Prairie wolf</span>
          <span>Brush wolf</span>
          <span>Wild dog</span>
        </div>
      </section>
      {/* Notes section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Coyote&quot; is pronounced /kaɪˈoʊti/ or /ˈkaɪ.oʊt/.</li>
          <li>&quot;Cayote&quot; is a misspelling and should be avoided in all formal and informal writing.</li>
          <li>The word &quot;coyote&quot; comes from the Nahuatl word &quot;coyotl&quot;.</li>
        </ul>
      </div>
      {/* FAQ section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">Is &quot;cayote&quot; ever correct?</h3>
          <p className="text-lg md:text-xl">No, &quot;cayote&quot; is not a correct spelling in English. Always use &quot;coyote&quot;.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">What does &quot;coyote&quot; mean?</h3>
          <p className="text-lg md:text-xl">A coyote is a wild canine native to North America, related to wolves and dogs.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">How do you pronounce &quot;coyote&quot;?</h3>
          <p className="text-lg md:text-xl">It can be pronounced as &quot;ky-OH-tee&quot; or &quot;KY-oht&quot;.</p>
        </div>
      </section>
    </main>
  );
} 