"use client";
import React from "react";
import Link from "next/link";

export default function FigurativeLanguagePage() {
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-yellow-700">Figurative Language</h1>
            <p className="text-lg text-gray-700 mb-2">
              Figurative language uses creative comparisons and expressions to make writing more interesting and vivid. It helps us paint pictures with words and express ideas in imaginative ways.
            </p>
            <p className="text-yellow-700 font-semibold">Understanding figurative language makes reading, writing, and speaking more colorful and fun!</p>
          </header>

          {/* Quick Reference Table/List */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Types of Figurative Language</h2>
            <div className="space-y-6">
              {/* Simile */}
              <div className="border-l-4 border-yellow-300 pl-4 bg-yellow-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Simile</h3>
                <p className="text-gray-700 mb-1">A simile compares two different things using <b>like</b> or <b>as</b>.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>She was as brave as a lion.</li>
                  <li>His smile was like sunshine.</li>
                </ul>
              </div>
              {/* Metaphor */}
              <div className="border-l-4 border-green-300 pl-4 bg-green-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Metaphor</h3>
                <p className="text-gray-700 mb-1">A metaphor says one thing <b>is</b> another to show a strong comparison.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Time is a thief.</li>
                  <li>Her voice is music to my ears.</li>
                </ul>
              </div>
              {/* Personification */}
              <div className="border-l-4 border-blue-300 pl-4 bg-blue-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Personification</h3>
                <p className="text-gray-700 mb-1">Personification gives human qualities to animals, objects, or ideas.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>The wind whispered through the trees.</li>
                  <li>The sun smiled down on us.</li>
                </ul>
              </div>
              {/* Hyperbole */}
              <div className="border-l-4 border-pink-300 pl-4 bg-pink-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Hyperbole</h3>
                <p className="text-gray-700 mb-1">Hyperbole is an extreme exaggeration used for emphasis or humor.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>I'm so hungry I could eat a horse.</li>
                  <li>It took forever to finish my homework.</li>
                </ul>
              </div>
              {/* Idiom */}
              <div className="border-l-4 border-purple-300 pl-4 bg-purple-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Idiom</h3>
                <p className="text-gray-700 mb-1">An idiom is a common phrase with a meaning different from its literal words.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>It's raining cats and dogs.</li>
                  <li>Break a leg!</li>
                </ul>
              </div>
              {/* Alliteration */}
              <div className="border-l-4 border-red-300 pl-4 bg-red-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Alliteration</h3>
                <p className="text-gray-700 mb-1">Alliteration is the repetition of the same starting sound in a series of words.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Peter Piper picked a peck of pickled peppers.</li>
                  <li>Sally sells seashells by the seashore.</li>
                </ul>
              </div>
              {/* Onomatopoeia */}
              <div className="border-l-4 border-indigo-300 pl-4 bg-indigo-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Onomatopoeia</h3>
                <p className="text-gray-700 mb-1">Onomatopoeia uses words that imitate sounds.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>The bees buzzed in the garden.</li>
                  <li>The door creaked open.</li>
                </ul>
              </div>
              {/* Oxymoron */}
              <div className="border-l-4 border-gray-300 pl-4 bg-gray-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Oxymoron</h3>
                <p className="text-gray-700 mb-1">An oxymoron puts two opposite words together for effect.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Bittersweet</li>
                  <li>Deafening silence</li>
                </ul>
              </div>
              {/* Pun */}
              <div className="border-l-4 border-teal-300 pl-4 bg-teal-50 rounded-lg shadow-sm py-4">
                <h3 className="text-xl font-bold mb-1">Pun</h3>
                <p className="text-gray-700 mb-1">A pun is a play on words that uses double meanings or similar sounds for humor.</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>I used to be a baker, but I couldn't make enough dough.</li>
                  <li>Time flies like an arrow. Fruit flies like a banana.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Practice: What Type of Figurative Language?</h2>
            <p className="mb-2 text-gray-700">Try to identify the type of figurative language in bold in each sentence:</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              <li>The classroom was a <b>zoo</b>.</li>
              <li>He was as fast as <b>lightning</b>.</li>
              <li>The <b>wind howled</b> all night.</li>
              <li>She sells <b>shiny shells</b> by the seashore.</li>
              <li>That joke was a real <b>pun</b>chline.</li>
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-yellow-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                <li>zoo – Metaphor</li>
                <li>lightning – Simile</li>
                <li>wind howled – Personification/Onomatopoeia</li>
                <li>shiny shells – Alliteration</li>
                <li>pun – Pun</li>
              </ul>
            </details>
          </section>

          {/* Conclusion Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Conclusion</h2>
            <p className="mb-2 text-gray-700">Figurative language makes writing and speaking more fun and creative. Try using different types in your own stories and poems!</p>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <b>similes</b>, <Link href="/grammar/metaphor-examples" className="text-yellow-700 underline hover:text-yellow-900">metaphors</Link>, <Link href="/grammar/idioms-for-kids" className="text-yellow-700 underline hover:text-yellow-900">idioms</Link>, and <Link href="/grammar/personification-examples-for-kids" className="text-yellow-700 underline hover:text-yellow-900">personification</Link> in more detail.</li>
              <li>Practice with creative writing prompts.</li>
              <li>Read poems and stories to spot figurative language.</li>
              <li>Ask a teacher or friend to quiz you on figurative language types.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 