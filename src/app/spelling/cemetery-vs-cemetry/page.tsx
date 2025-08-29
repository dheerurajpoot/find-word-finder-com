"use client";

// Cemetery vs Cemetry spelling comparison page
import React from "react";
import Head from "next/head";

export default function CemeteryVsCemetry() {
  return (
    <>
      <Head>
        <title>Cemetery vs Cemetry - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'cemetery' and 'cemetry'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cemetery or Cemetry</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Unsure if you should write <strong>&quot;cemetery&quot;</strong> or <strong>&quot;cemetry&quot;</strong>? Here&apos;s a quick guide to help you use the correct spelling every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Cemetry</span>
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
            <p className="text-lg md:text-xl"><strong>Cemetery</strong>: A place where the dead are buried, especially one that is not attached to a church.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Cemetry</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
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
            <li>&quot;Cemetery&quot; is the only correct spelling in English.</li>
            <li>&quot;Cemetry&quot; is a frequent error, likely influenced by the word &quot;cemetery&quot; being pronounced without the second &quot;e&quot;.</li>
            <li>Use &quot;cemetery&quot; in all academic, professional, and personal writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;cemetry&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;cemetry&quot; is always a misspelling of &quot;cemetery&quot;.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: Why do people write &quot;cemetry&quot;?</p>
            <p className="text-lg md:text-xl">A: It&apos;s a common mistake due to the way the word is pronounced.</p>
          </div>
        </section>
                {/* Summary Section */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Cemetery</strong> is the correct spelling for a burial ground. <strong>Cemetry</strong> is a common misspelling and should be avoided in all forms of writing.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Featured Misspellings */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
            <ul className="space-y-2">
              <li><a href="/spelling/garden-vs-garden" className="text-blue-700 hover:text-blue-900 underline">Garden vs Garden</a></li>
              <li><a href="/spelling/gas-vs-gas" className="text-blue-700 hover:text-blue-900 underline">Gas vs Gas</a></li>
              <li><a href="/spelling/gate-vs-gate" className="text-blue-700 hover:text-blue-900 underline">Gate vs Gate</a></li>
              <li><a href="/spelling/gather-vs-gather" className="text-blue-700 hover:text-blue-900 underline">Gather vs Gather</a></li>
              <li><a href="/spelling/general-vs-general" className="text-blue-700 hover:text-blue-900 underline">General vs General</a></li>
            </ul>
          </div>

          {/* Related Misspellings */}
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
            <ul className="space-y-2">
              <li><a href="/spelling/graveyard-vs-graveyard" className="text-purple-700 hover:text-purple-900 underline">Graveyard vs Graveyard</a></li>
              <li><a href="/spelling/burial-vs-burial" className="text-purple-700 hover:text-purple-900 underline">Burial vs Burial</a></li>
              <li><a href="/spelling/memorial-vs-memorial" className="text-purple-700 hover:text-purple-900 underline">Memorial vs Memorial</a></li>
              <li><a href="/spelling/necropolis-vs-necropolis" className="text-purple-700 hover:text-purple-900 underline">Necropolis vs Necropolis</a></li>
              <li><a href="/spelling/tomb-vs-tomb" className="text-purple-700 hover:text-purple-900 underline">Tomb vs Tomb</a></li>
            </ul>
          </div>

          {/* Learned Grammar */}
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
            <ul className="space-y-2">
              <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
              <li><a href="/grammar/ery-endings" className="text-green-700 hover:text-green-900 underline">Ery Endings</a></li>
              <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
              <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
              <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
} 