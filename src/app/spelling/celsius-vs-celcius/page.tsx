import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celsius vs. Celcius — Spelling Comparison",
  description: "Learn the difference between 'celsius' and 'celcius', see correct spelling, definitions, usage, synonyms, notes, and FAQs.",
};

export default function CelsiusVsCelciusPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Celsius or Celcius?</h1>
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
        <p className="text-lg md:text-xl text-gray-800">Which is correct: <strong>celsius</strong> or <strong>celcius</strong>? Let&apos;s compare the spellings, meanings, and usage.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Incorrect card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">❌</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-red-800">Celcius</span>
            <div className="text-red-700 text-lg md:text-xl">Incorrect spelling</div>
          </div>
        </div>
        {/* Correct card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center">
          <span className="text-3xl mr-3">✅</span>
          <div>
            <span className="font-bold text-lg md:text-xl text-green-800">Celsius</span>
            <div className="text-green-700 text-lg md:text-xl">Correct spelling</div>
          </div>
        </div>
      </div>
      {/* Summary section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Celsius</strong> is the correct spelling for the metric temperature scale. <strong>Celcius</strong> is a common misspelling and is not recognized in standard English.
        </p>
      </div>
      {/* Definition section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
        <div className="mb-4">
          <span className="font-bold text-lg md:text-xl">Celsius:</span>
          <span className="text-lg md:text-xl ml-2">A scale and unit of measurement for temperature where 0° is the freezing point of water and 100° is the boiling point.</span>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">Celcius:</span>
          <span className="text-lg md:text-xl ml-2">(Incorrect) — Not a recognized English word.</span>
        </div>
      </section>
      {/* Synonyms section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Celsius</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl">
          <span>Centigrade</span>
          <span>Metric temperature scale</span>
        </div>
      </section>
      {/* Notes section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Celsius&quot; is always spelled with an &quot;s&quot; after the &quot;l&quot;.</li>
          <li>&quot;Celcius&quot; is a misspelling and should be avoided in all writing.</li>
          <li>The scale is named after Anders Celsius, a Swedish astronomer.</li>
        </ul>
      </div>
      {/* FAQ section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">Is &quot;celcius&quot; ever correct?</h3>
          <p className="text-lg md:text-xl">No, &quot;celcius&quot; is not a correct spelling in English. Always use &quot;celsius&quot;.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg md:text-xl">What does &quot;celsius&quot; mean?</h3>
          <p className="text-lg md:text-xl">It refers to the temperature scale used in most of the world, except the United States.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">Why is it called &quot;Celsius&quot;?</h3>
          <p className="text-lg md:text-xl">It is named after Anders Celsius, who developed the scale.</p>
        </div>
      </section>
    </main>
  );
} 