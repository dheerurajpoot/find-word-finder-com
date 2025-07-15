"use client";

// Census vs Cencus spelling comparison page
import React from "react";
import Head from "next/head";

export default function CensusVsCencus() {
  return (
    <>
      <Head>
        <title>Census vs Cencus - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'census' and 'cencus'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Census or Cencus</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Unsure if you should write <strong>&quot;census&quot;</strong> or <strong>&quot;cencus&quot;</strong>? Here&apos;s a quick guide to help you use the correct spelling every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Cencus</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </div>
          {/* Correct Card */}
          <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-xl font-bold text-green-700">Census</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </div>
        </div>
        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl"><strong>Census</strong>: An official count or survey, especially of a population.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Cencus</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
          </div>
        </section>
        {/* Synonyms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Census</h2>
          <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl text-blue-800">
            <span>Population count</span>
            <span>Survey</span>
            <span>Enumeration</span>
            <span>Headcount</span>
          </div>
        </section>
        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>&quot;Census&quot; is the only correct spelling in English.</li>
            <li>&quot;Cencus&quot; is a frequent error, likely influenced by the way the word is pronounced.</li>
            <li>Use &quot;census&quot; in all academic, professional, and personal writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;cencus&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;cencus&quot; is always a misspelling of &quot;census&quot;.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: Why do people write &quot;cencus&quot;?</p>
            <p className="text-lg md:text-xl">A: It&apos;s a common mistake due to the way the word is pronounced.</p>
          </div>
        </section>  
        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Census</strong> is the correct spelling for an official count or survey of a population. <strong>Cencus</strong> is a common misspelling and should be avoided in all forms of writing.
          </p>
        </div>
      </main>
    </>
  );
} 