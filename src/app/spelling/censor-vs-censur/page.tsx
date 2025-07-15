"use client";

// Censor vs Censur spelling comparison page
import React from "react";
import Head from "next/head";

export default function CensorVsCensur() {
  return (
    <>
      <Head>
        <title>Censor or Censur - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'censor' and 'censur'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Censor or Censur</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Unsure if you should write <strong>&quot;censor&quot;</strong> or <strong>&quot;censur&quot;</strong>? Here&apos;s a quick guide to help you use the correct spelling every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Censur</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </div>
          {/* Correct Card */}
          <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-xl font-bold text-green-700">Censor</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </div>
        </div>
        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl"><strong>Censor</strong>: A person who examines material (such as publications or films) and removes or suppresses what is considered objectionable.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Censur</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
          </div>
        </section>
        {/* Synonyms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Censor</h2>
          <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl text-blue-800">
            <span>Editor</span>
            <span>Reviewer</span>
            <span>Suppressor</span>
            <span>Inspector</span>
          </div>
        </section>
        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>&quot;Censor&quot; is the correct and standard spelling in English.</li>
            <li>&quot;Censur&quot; is a common typo or misspelling and should be avoided.</li>
            <li>Use &quot;censor&quot; in all formal, academic, and professional writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;censur&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;censur&quot; is always a misspelling of &quot;censor&quot;.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: What does a censor do?</p>
            <p className="text-lg md:text-xl">A: A censor reviews and removes content that is considered inappropriate, offensive, or sensitive.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;censor&quot; used as a verb?</p>
            <p className="text-lg md:text-xl">A: Yes, &quot;censor&quot; can also be used as a verb meaning to suppress or remove content.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: What is the noun for the act of censoring?</p>
            <p className="text-lg md:text-xl">A: The noun is &quot;censorship&quot;.</p>
          </div>
        </section>
        {/* Summary Section (at the end) */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Censor</strong> is the correct spelling for someone who reviews and suppresses content. <strong>Censur</strong> is a misspelling and should not be used in any context.
          </p>
        </div>
      </main>
    </>
  );
} 