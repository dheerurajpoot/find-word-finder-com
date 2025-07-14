import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cellar vs. Celler — Spelling Comparison",
  description: "Learn the difference between 'cellar' and 'celler', see correct spelling, definitions, usage, synonyms, notes, and FAQs.",
};

export default function CellarVsCellerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cellar or Celler?</h1>
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
        <p className="text-lg md:text-xl text-gray-800">Which is correct: <strong>cellar</strong> or <strong>celler</strong>? Let&apos;s compare the spellings, meanings, and usage.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Incorrect card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">❌</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-red-800">Celler</span>
            <div className="text-red-700 text-lg md:text-xl">Incorrect spelling</div>
          </div>
        </div>
        {/* Correct card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">✅</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-green-800">Cellar</span>
            <div className="text-green-700 text-lg md:text-xl">Correct spelling</div>
          </div>
        </div>
      </div>
      {/* Summary section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Cellar</strong> is the correct spelling for a room below ground level in a house, typically used for storage. <strong>Celler</strong> is a common misspelling and is not recognized in standard English.
        </p>
      </div>
      {/* Definition section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
        <div className="mb-4">
          <span className="font-bold text-lg md:text-xl">Cellar:</span>
          <span className="text-lg md:text-xl ml-2">A room below ground level in a house, typically used for storage.</span>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">Celler:</span>
          <span className="text-lg md:text-xl ml-2">(Incorrect) — Not a recognized English word.</span>
        </div>
      </section>
      {/* Synonyms section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Cellar</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl">
          <span>Basement</span>
          <span>Vault</span>
          <span>Undercroft</span>
          <span>Wine cellar</span>
        </div>
      </section>
      {/* Notes section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Cellar&quot; is always spelled with an &quot;a&quot; before the &quot;r&quot;.</li>
          <li>&quot;Celler&quot; is a misspelling and should be avoided in all writing.</li>
          <li>The word &quot;cellar&quot; comes from the Latin &quot;cella&quot; meaning a storeroom.</li>
        </ul>
      </div>
      {/* FAQ section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">Is &quot;celler&quot; ever correct?</h3>
          <p className="text-lg md:text-xl">No, &quot;celler&quot; is not a correct spelling in English. Always use &quot;cellar&quot;.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">What does &quot;cellar&quot; mean?</h3>
          <p className="text-lg md:text-xl">It refers to a room below ground level in a house, typically used for storage.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">How do you use &quot;cellar&quot; in a sentence?</h3>
          <p className="text-lg md:text-xl">Example: &quot;We keep our wine in the cellar.&quot;</p>
        </div>
      </section>
    </main>
  );
} 