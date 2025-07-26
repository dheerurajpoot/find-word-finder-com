"use client";
import React from "react";
import Link from "next/link";

export default function MetaphorExamplesPage() {
  const metaphors = [
    {
      metaphor: "The classroom was a zoo.",
      meaning: "The classroom was very noisy and chaotic.",
      example: "When the teacher left, the classroom was a zoo!"
    },
    {
      metaphor: "Time is a thief.",
      meaning: "Time passes quickly and can take away moments.",
      example: "Time is a thief that steals our favorite days." 
    },
    {
      metaphor: "He has a heart of gold.",
      meaning: "He is very kind and generous.",
      example: "My grandpa has a heart of gold."
    },
    {
      metaphor: "The world is a stage.",
      meaning: "Life is like a play and we are all actors.",
      example: "The world is a stage, and we all have our parts to play." 
    },
    {
      metaphor: "She was a shining star in the play.",
      meaning: "She performed very well and stood out.",
      example: "Emma was a shining star in the school play." 
    },
    {
      metaphor: "My brother is a night owl.",
      meaning: "He likes to stay up late at night.",
      example: "My brother is a night owl and reads books after bedtime." 
    },
    {
      metaphor: "The snow was a white blanket.",
      meaning: "The snow covered everything like a blanket.",
      example: "When we woke up, the snow was a white blanket over the yard." 
    },
    {
      metaphor: "Her voice is music to my ears.",
      meaning: "Her voice is very pleasant to hear.",
      example: "Mom's singing is music to my ears." 
    },
    {
      metaphor: "He is a walking dictionary.",
      meaning: "He knows a lot of words and facts.",
      example: "Ask Ben any word—he's a walking dictionary!" 
    },
    {
      metaphor: "The clouds are cotton balls in the sky.",
      meaning: "The clouds look soft and fluffy like cotton balls.",
      example: "On sunny days, the clouds are cotton balls in the sky." 
    },
    {
      metaphor: "Her mind is a computer.",
      meaning: "She remembers and processes information very quickly.",
      example: "Sarah's mind is a computer when it comes to math." 
    },
    {
      metaphor: "The playground was a beehive of activity.",
      meaning: "The playground was very busy and full of energy.",
      example: "At recess, the playground was a beehive of activity." 
    },
    {
      metaphor: "His stomach is a bottomless pit.",
      meaning: "He can eat a lot and never seems full.",
      example: "After soccer, his stomach is a bottomless pit!" 
    },
    {
      metaphor: "Books are keys to your imagination.",
      meaning: "Books help you explore new ideas and worlds.",
      example: "Books are keys to your imagination—open one and see!" 
    },
    {
      metaphor: "The test was a breeze.",
      meaning: "The test was very easy.",
      example: "Don't worry, the test was a breeze." 
    }
  ];

  const quiz = [
    {
      metaphor: "My backpack is a ton of bricks.",
      answer: "My backpack is very heavy."
    },
    {
      metaphor: "Her eyes were shining stars.",
      answer: "Her eyes were bright and full of excitement."
    },
    {
      metaphor: "The playground was a jungle.",
      answer: "The playground was wild and full of activity."
    },
    {
      metaphor: "He is a couch potato.",
      answer: "He sits around and doesn't do much activity."
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-yellow-700">Metaphor Examples</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What is a metaphor?</b> A metaphor is a way to describe something by saying it <b>is</b> something else—even though it isn&apos;t, literally! Writers use metaphors to make their writing more colorful and interesting.
            </p>
            <p className="text-yellow-700 font-semibold">Metaphors help us picture things in new and creative ways.</p>
          </header>

          {/* Metaphor List */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-700">Common Metaphor Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metaphors.map((item, idx) => (
                <div key={item.metaphor} className="bg-yellow-50 border-l-4 border-yellow-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-yellow-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{item.metaphor}</span>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Meaning:</b> {item.meaning}</div>
                  <div className="text-gray-600 text-sm"><b>Example:</b> <span className="italic">{item.example}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* Mini-Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Quiz: What Does the Metaphor Mean?</h2>
            <p className="mb-2 text-gray-700">Can you figure out what these metaphors mean?</p>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {quiz.map((q, idx) => (
                <li key={idx}>{q.metaphor}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-yellow-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {quiz.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.answer}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* How to Spot a Metaphor */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">How to Spot a Metaphor</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Look for sentences that say something <b>is</b> something else (not just <b>like</b> or <b>as</b>—those are similes!).</li>
              <li>Ask yourself: Is this sentence comparing two things in a creative way?</li>
              <li>Does it make sense literally? If not, it might be a metaphor!</li>
              <li>Metaphors often make writing more fun and help you imagine things better.</li>
            </ul>
          </section>

          {/* Conclusion Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Conclusion</h2>
            <p className="mb-2 text-gray-700">Try making your own metaphors! Think of something you want to describe, and imagine what else it could be. For example, &quot;My room is a treasure chest&quot; or &quot;My dog is a rocket.&quot;</p>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <b>similes</b>, <Link href="/grammar/idioms-for-kids" className="text-yellow-700 underline hover:text-yellow-900">idioms</Link>, <Link href="/grammar/figurative-language" className="text-yellow-700 underline hover:text-yellow-900">figurative language</Link>, and <Link href="/grammar/personification-examples-for-kids" className="text-yellow-700 underline hover:text-yellow-900">personification</Link> for more creative writing ideas.</li>
              <li>Practice spotting metaphors in stories and poems.</li>
              <li>Try writing a story using at least three metaphors!</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 