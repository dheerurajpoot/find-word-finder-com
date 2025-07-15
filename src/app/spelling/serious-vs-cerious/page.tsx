"use client";

// Serious vs Cerious spelling comparison page
import React from "react";
import Head from "next/head";

export default function SeriousVsCerious() {
  return (
    <>
      <Head>
        <title>Serious or Cerious - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'serious' and 'cerious'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Serious or Cerious</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Unsure if you should write <strong>&quot;serious&quot;</strong> or <strong>&quot;cerious&quot;</strong>? Here&apos;s a quick guide to help you use the correct spelling every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Cerious</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </div>
          {/* Correct Card */}
          <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-xl font-bold text-green-700">Serious</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </div>
        </div>
        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl"><strong>Serious</strong>: Demanding careful consideration or application; not joking or playful.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Cerious</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
          </div>
        </section>
        {/* Synonyms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Serious</h2>
          <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl text-blue-800">
            <span>Solemn</span>
            <span>Grave</span>
            <span>Earnest</span>
            <span>Thoughtful</span>
          </div>
        </section>
        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>&quot;Serious&quot; is the correct and standard spelling in English.</li>
            <li>&quot;Cerious&quot; is a common typo or misspelling and should be avoided.</li>
            <li>Use &quot;serious&quot; in all academic, professional, and everyday writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;cerious&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;cerious&quot; is always a misspelling of &quot;serious&quot;.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: What does &quot;serious&quot; mean?</p>
            <p className="text-lg md:text-xl">A: It means something is important, not trivial, or not meant as a joke.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Can &quot;serious&quot; describe a person?</p>
            <p className="text-lg md:text-xl">A: Yes, a serious person is thoughtful, not playful, and takes things to heart.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: Are there related words?</p>
            <p className="text-lg md:text-xl">A: Yes, &quot;seriously&quot; (adverb), &quot;seriousness&quot; (noun).</p>
          </div>
        </section>
        {/* Summary Section (at the end) */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Serious</strong> is the correct spelling for something important or not playful. <strong>Cerious</strong> is a misspelling and should not be used in any context.
          </p>
        </div>
      </main>
    </>
  );
} 