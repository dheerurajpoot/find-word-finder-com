"use client";
import React from "react";
import Link from "next/link";

export default function PartsOfSpeechPage() {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-green-700">Parts of Speech</h1>
            <p className="text-lg text-gray-700 mb-2">
              Parts of speech are the building blocks of language. Every word you speak or write is a part of speech. Understanding them helps you write better sentences, punctuate correctly, and communicate more clearly.
            </p>
            <p className="text-green-700 font-semibold">There are 8 main parts of speech in English: nouns, pronouns, adjectives, verbs, adverbs, prepositions, conjunctions, and articles.</p>
          </header>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">Why Understanding Parts of Speech is Important</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Helps you understand and build sentences correctly</li>
              <li>Improves your grammar and punctuation</li>
              <li>Makes it easier to learn new languages</li>
              <li>Helps you avoid common writing mistakes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-green-700">The 8 Parts of Speech</h2>
            <ol className="space-y-6">
              {[
                {
                  label: "Noun",
                  color: "bg-green-200 text-green-800",
                  desc: "A noun names a person, place, thing, or idea.",
                  ex: "dog, Paris, happiness, cake",
                  sent: "Mary ate chocolate cake and ice cream.",
                  tip: "Nouns are often the subject or object in a sentence."
                },
                {
                  label: "Pronoun",
                  color: "bg-blue-200 text-blue-800",
                  desc: "A pronoun replaces a noun to avoid repetition.",
                  ex: "he, she, it, they, you, them",
                  sent: "Susan is my neighbor. She is charming.",
                  tip: "Pronouns make sentences less repetitive."
                },
                {
                  label: "Adjective",
                  color: "bg-yellow-200 text-yellow-800",
                  desc: "An adjective describes or modifies a noun or pronoun.",
                  ex: "happy, small, blue, hungry",
                  sent: "She wore a beautiful, blue dress.",
                  tip: "Adjectives answer 'what kind?' or 'which one?'"
                },
                {
                  label: "Verb",
                  color: "bg-red-200 text-red-800",
                  desc: "A verb expresses an action or a state of being.",
                  ex: "run, jump, is, think, have",
                  sent: "The teacher is happy; she likes her students.",
                  tip: "Every sentence needs a verb!"
                },
                {
                  label: "Adverb",
                  color: "bg-purple-200 text-purple-800",
                  desc: "An adverb describes a verb, adjective, or another adverb. It often tells how, when, where, or to what extent.",
                  ex: "quickly, very, well, yesterday",
                  sent: "She walked away slowly.",
                  tip: "Many adverbs end in -ly."
                },
                {
                  label: "Preposition",
                  color: "bg-pink-200 text-pink-800",
                  desc: "A preposition shows the relationship between a noun (or pronoun) and another word in the sentence.",
                  ex: "in, on, at, to, after, with",
                  sent: "She sat behind me in class.",
                  tip: "Prepositions often show location, time, or direction."
                },
                {
                  label: "Conjunction",
                  color: "bg-orange-200 text-orange-800",
                  desc: "A conjunction connects words, phrases, or clauses.",
                  ex: "and, but, or, so, because",
                  sent: "He wanted apple pie and ice cream.",
                  tip: "The most common conjunctions are and, but, or."
                },
                {
                  label: "Article",
                  color: "bg-gray-200 text-gray-800",
                  desc: "An article is a word that defines a noun as specific or unspecific.",
                  ex: "a, an, the",
                  sent: "The cat is on the table.",
                  tip: "A and an are indefinite; the is definite."
                }
              ].map((part, idx) => (
                <li key={part.label} className="flex items-start gap-4 border-l-4 pl-4 py-4 border-green-200 bg-green-50 rounded-lg shadow-sm">
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ring-2 ring-white shadow ${part.color}`}>{idx + 1}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-bold">{part.label}</span>
                    </div>
                    <p className="text-gray-700 mb-1">{part.desc}</p>
                    <p className="text-sm text-gray-600 mb-1">Examples: <span className="font-mono">{part.ex}</span></p>
                    <p className="text-gray-600 mb-1">Sentence: <span className="italic">{part.sent}</span></p>
                    <p className="text-green-700 text-xs">Tip: {part.tip}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Takeaways & Tips</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>There are 8 main parts of speech in English.</li>
              <li>Many words can be used as more than one part of speech.</li>
              <li>Knowing parts of speech helps you write and speak more clearly.</li>
              <li>Practice identifying parts of speech in sentences to improve your grammar.</li>
            </ul>
          </section>

          {/* Common Mistakes Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Common Mistakes with Parts of Speech</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base mb-2">
              <li><b>Confusing adjectives and adverbs:</b> <span className="italic">She runs quick</span> (incorrect) → <span className="italic">She runs quickly</span> (correct).</li>
              <li><b>Using the wrong pronoun:</b> <span className="italic">Me and him went</span> (incorrect) → <span className="italic">He and I went</span> (correct).</li>
              <li><b>Forgetting articles:</b> <span className="italic">I saw cat</span> (incorrect) → <span className="italic">I saw a cat</span> (correct).</li>
              <li><b>Misplacing prepositions:</b> <span className="italic">Where are you at?</span> (incorrect) → <span className="italic">Where are you?</span> (correct).</li>
            </ul>
            <p className="text-green-700 text-xs">Tip: Read your sentences out loud to catch common mistakes!</p>
          </section>

          {/* Practice Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">Practice: Identify the Part of Speech</h2>
            <p className="mb-2 text-gray-700">Try to identify the part of speech for the bolded word in each sentence:</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              <li>The <b>dog</b> barked loudly.</li>
              <li>She <b>quickly</b> finished her homework.</li>
              <li>We went <b>to</b> the park.</li>
              <li><b>He</b> is my friend.</li>
              <li>It was a <b>beautiful</b> day.</li>
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-green-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                <li>dog – Noun</li>
                <li>quickly – Adverb</li>
                <li>to – Preposition</li>
                <li>He – Pronoun</li>
                <li>beautiful – Adjective</li>
              </ul>
            </details>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-green-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn more about <Link href="/grammar/noun-examples" className="text-green-700 underline hover:text-green-900">nouns</Link>, <b>adjectives</b>, <b>verbs</b>, and <b>adverbs</b> to build even stronger sentences.</li>
              <li>Practice with grammar workbooks or online quizzes.</li>
              <li>Read books and articles, and try to spot different parts of speech in sentences.</li>
              <li>Write your own sentences and label each word’s part of speech.</li>
              <li>Ask a teacher or friend to quiz you on the parts of speech.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 