"use client";
import React from "react";
import Link from "next/link";

export default function ArticleGrammarPage() {
  const articles = [
    { article: "a", desc: "Used before words that begin with a consonant sound." },
    { article: "an", desc: "Used before words that begin with a vowel sound." },
    { article: "the", desc: "Used to refer to a specific or previously mentioned noun." }
  ];
  const examples = [
    "I saw <b>a</b> cat in the garden.",
    "She ate <b>an</b> apple for lunch.",
    "<b>The</b> dog barked loudly.",
    "He wants <b>a</b> new bike.",
    "We visited <b>an</b> old castle.",
    "<b>The</b> sun is shining.",
    "She found <b>a</b> pencil on the floor.",
    "He is <b>an</b> honest person.",
    "<b>The</b> book is on the table.",
    "I need <b>a</b> drink of water."
  ];
  const worksheet = [
    { q: "She saw ___ elephant at the zoo.", a: "an" },
    { q: "He wants ___ ice cream cone.", a: "an" },
    { q: "___ sun is bright today.", a: "The" },
    { q: "I have ___ orange in my lunch.", a: "an" },
    { q: "We saw ___ movie last night.", a: "a" }
  ];
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-green-700">Articles in Grammar</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are articles?</b> Articles are small words (a, an, the) that come before nouns. They help us talk about things in a clear way.
            </p>
            <p className="text-green-700 font-semibold">Articles help you be specific or general in your writing.</p>
          </header>

          {/* List of Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">The Three Articles</h2>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              {articles.map((a) => (
                <li key={a.article}><b>{a.article}</b>: {a.desc}</li>
              ))}
            </ul>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-green-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Tips for Using Articles</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Use <b>a</b> before words that start with a consonant sound (a dog, a book).</li>
              <li>Use <b>an</b> before words that start with a vowel sound (an apple, an hour).</li>
              <li>Use <b>the</b> when talking about something specific or already mentioned.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/noun-examples" className="text-green-700 underline hover:text-green-900">nouns</Link>, <Link href="/grammar/adjective-examples" className="text-green-700 underline hover:text-green-900">adjectives</Link>, and <Link href="/grammar/parts-of-speech" className="text-green-700 underline hover:text-green-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/sentence-types" className="text-green-700 underline hover:text-green-900">sentence types</Link> or <Link href="/grammar/figurative-language" className="text-green-700 underline hover:text-green-900">figurative language</Link>.</li>
              <li>Practice with <Link href="/grammar/reading-comprehension" className="text-green-700 underline hover:text-green-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 