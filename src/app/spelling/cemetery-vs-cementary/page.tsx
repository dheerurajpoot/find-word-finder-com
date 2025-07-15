"use client";

// Cemetery vs Cementary spelling comparison page
import React from "react";
import Head from "next/head";

export default function CemeteryVsCementary() {
  return (
    <>
      <Head>
        <title>Cemetery vs Cementary - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'cemetery' and 'cementary'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cemetery or Cementary</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Confused about whether to use <strong>cemetery</strong> or <strong>cementary</strong>? You&apos;re not alone! Let&apos;s clear up the confusion with definitions, correct usage, and helpful notes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Cementary</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </div>
          {/* Correct Card */}
          <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-xl font-bold text-green-700">Cemetery</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </div>
        </div>
        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl"><strong>Cemetery</strong>: A large burial ground, especially one not in a churchyard.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Cementary</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
          </div>
        </section>
        {/* Synonyms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Cemetery</h2>
          <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl text-blue-800">
            <span>Graveyard</span>
            <span>Burial ground</span>
            <span>Memorial park</span>
            <span>Necropolis</span>
          </div>
        </section>
        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>&quot;Cemetery&quot; comes from the Greek word &quot;koimeterion&quot; meaning &quot;sleeping place&quot;.</li>
            <li>&quot;Cementary&quot; is a frequent error due to the word &quot;cement&quot; being more familiar.</li>
            <li>Always use &quot;cemetery&quot; in academic, professional, and everyday writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Why do people spell it &quot;cementary&quot;?</p>
            <p className="text-lg md:text-xl">A: It&apos;s a common mistake because &quot;cement&quot; is a familiar word, but the correct spelling is &quot;cemetery&quot;.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;cementary&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;cementary&quot; is always a misspelling.</p>
          </div>
        </section>
                {/* Summary Section */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Cemetery</strong> is the correct spelling for a place where the dead are buried. <strong>Cementary</strong> is a common misspelling and should be avoided in formal writing.
          </p>
        </div>
      </main>
    </>
  );
} 