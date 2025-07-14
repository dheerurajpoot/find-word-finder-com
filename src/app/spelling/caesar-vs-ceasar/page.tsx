import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caesar vs. Ceasar — Spelling Comparison",
  description: "Learn the difference between 'caesar' and 'ceasar', see correct spelling, definitions, usage, synonyms, notes, and FAQs.",
};

export default function CaesarVsCeasarPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Caesar or Ceasar?</h1>
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
        <p className="text-lg md:text-xl text-gray-800">Which is correct: <strong>caesar</strong> or <strong>ceasar</strong>? Let&apos;s compare the spellings, meanings, and usage.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Incorrect card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">❌</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-red-800">Ceasar</span>
            <div className="text-red-700 text-lg md:text-xl">Incorrect spelling</div>
          </div>
        </div>
        {/* Correct card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">✅</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-green-800">Caesar</span>
            <div className="text-green-700 text-lg md:text-xl">Correct spelling</div>
          </div>
        </div>
      </div>
      {/* Summary section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Caesar</strong> is the correct spelling, most famously referring to Julius Caesar, the Roman general and statesman. <strong>Ceasar</strong> is a common misspelling and is not recognized in standard English.
        </p>
      </div>
      {/* Definition section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
        <div className="mb-4">
          <span className="font-bold text-lg md:text-xl">Caesar:</span>
          <span className="text-lg md:text-xl ml-2">A title used by Roman emperors, most notably Julius Caesar; also refers to the Caesar salad.</span>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">Ceasar:</span>
          <span className="text-lg md:text-xl ml-2">(Incorrect) — Not a recognized English word.</span>
        </div>
      </section>
      {/* Synonyms section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Caesar</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl">
          <span>Emperor</span>
          <span>Ruler</span>
          <span>Julius Caesar</span>
          <span>Dictator</span>
        </div>
      </section>
      {/* Notes section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Caesar&quot; is often misspelled as &quot;Ceasar&quot; due to the placement of vowels.</li>
          <li>The correct spelling is always &quot;Caesar&quot; in both historical and culinary contexts.</li>
          <li>Julius Caesar was a pivotal figure in Roman history.</li>
        </ul>
      </div>
      {/* FAQ section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">Is &quot;ceasar&quot; ever correct?</h3>
          <p className="text-lg md:text-xl">No, &quot;ceasar&quot; is not a correct spelling in English. Always use &quot;caesar&quot;.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">What does &quot;caesar&quot; mean?</h3>
          <p className="text-lg md:text-xl">It refers to a Roman emperor or the famous Caesar salad.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">Why is &quot;Caesar&quot; spelled that way?</h3>
          <p className="text-lg md:text-xl">The spelling comes from the Latin name &quot;Caesar&quot;, pronounced /ˈsiː.zər/.</p>
        </div>
      </section>
    </main>
  );
} 