"use client";
import React from "react";
import Link from "next/link";

export default function AdjectivesStartWithAPage() {
  const adjectives = [
    "amazing", "ancient", "angry", "adorable", "active", "artistic", "awkward", "awesome", "athletic", "alert", "agreeable", "ambitious", "affectionate", "agile", "airy", "alarming", "amused", "ample", "animated", "aromatic", "astonishing", "attentive", "attractive", "available", "average", "aware", "awful"
  ];
  const examples = [
    "She has an <b>amazing</b> voice.",
    "The <b>ancient</b> castle stood on the hill.",
    "He was <b>angry</b> about the mess.",
    "The <b>adorable</b> puppy wagged its tail.",
    "He is an <b>active</b> child.",
    "She is very <b>artistic</b> and loves to paint.",
    "The <b>awkward</b> moment made us laugh.",
    "We had an <b>awesome</b> time at the park.",
    "The <b>athletic</b> team won the game.",
    "He is always <b>alert</b> in class."
  ];
  const worksheet = [
    { q: "The ___ cat chased the mouse.", a: "agile" },
    { q: "She wore an ___ dress to the party.", a: "attractive" },
    { q: "The ___ aroma filled the kitchen.", a: "aromatic" },
    { q: "He is an ___ student.", a: "attentive" },
    { q: "We saw an ___ building downtown.", a: "ancient" }
  ];
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700">Adjectives That Start With A</h1>
            <p className="text-lg text-gray-700 mb-2">
              Learning adjectives that start with <b>A</b> can make your writing more amazing and attractive! Use these words to describe people, places, and things in creative ways.
            </p>
            <p className="text-blue-700 font-semibold">Great for vocabulary, writing, and word games!</p>
          </header>

          {/* List of Adjectives */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Adjectives That Start With A</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {adjectives.map((a) => (
                <span key={a} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{a}</span>
              ))}
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-blue-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Using Adjectives</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Try using new adjectives to make your writing more interesting.</li>
              <li>Use more than one adjective for extra detail (e.g., "the amazing, ancient castle").</li>
              <li>Adjectives answer questions like: What kind? How many? Which one?</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/adjective-examples" className="text-blue-700 underline hover:text-blue-900">adjective examples</Link>, <Link href="/grammar/adjectives-that-start-with-m" className="text-blue-700 underline hover:text-blue-900">adjectives that start with M</Link>, and <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/adjectives-that-start-with-e" className="text-blue-700 underline hover:text-blue-900">adjectives that start with E</Link> or <Link href="/grammar/adjectives-that-start-with-h" className="text-blue-700 underline hover:text-blue-900">H</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-blue-700 underline hover:text-blue-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 