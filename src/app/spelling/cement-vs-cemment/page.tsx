"use client";

// Cement vs Cemment spelling comparison page
import React from "react";
import Head from "next/head";

export default function CementVsCemment() {
  return (
    <>
      <Head>
        <title>Cement vs Cemment - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'cement' and 'cemment'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cement or Cemment</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Not sure if you should write <strong>&quot;cement&quot;</strong> or <strong>&quot;cemment&quot;</strong>? Here&apos;s a quick guide to help you use the correct spelling every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Cemment</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </div>
          {/* Correct Card */}
          <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-xl font-bold text-green-700">Cement</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </div>
        </div>

        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl"><strong>Cement</strong>: A powdery substance made with calcined lime and clay, used to make concrete.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Cemment</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
          </div>
        </section>
        {/* Synonyms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Cement</h2>
          <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl text-blue-800">
            <span>Concrete binder</span>
            <span>Mortar</span>
            <span>Adhesive</span>
            <span>Grout</span>
          </div>
        </section>
        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>&quot;Cement&quot; is the only correct spelling in English.</li>
            <li>&quot;Cemment&quot; is a frequent error, likely influenced by the double &quot;m&quot; in similar words.</li>
            <li>Use &quot;cement&quot; in all academic, professional, and personal writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;cemment&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;cemment&quot; is always a misspelling of &quot;cement&quot;.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: Why do people write &quot;cemment&quot;?</p>
            <p className="text-lg md:text-xl">A: It&apos;s a common mistake due to the double &quot;m&quot; pattern in English spelling.</p>
          </div>
        </section>        
        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Cement</strong> is the correct spelling for the powdery substance used in construction. <strong>Cemment</strong> is a common misspelling and should be avoided in all forms of writing.
          </p>
        </div>
      </main>
    </>
  );
} 