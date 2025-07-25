"use client";
import React from "react";
import Link from "next/link";

export default function ReadingComprehensionPage() {
  const tips = [
    {
      title: "Read Carefully",
      desc: "Take your time and read each sentence. Don't rush!"
    },
    {
      title: "Ask Questions",
      desc: "Wonder about who, what, where, when, why, and how as you read."
    },
    {
      title: "Look for Clues",
      desc: "Pay attention to pictures, titles, and bold words for hints."
    },
    {
      title: "Summarize",
      desc: "After reading, try to say what happened in your own words."
    },
    {
      title: "Reread if Needed",
      desc: "If something is confusing, go back and read it again."
    },
    {
      title: "Make Connections",
      desc: "Think about how the story relates to your own life or other things you've read."
    }
  ];

  const passage = `Maya loved going to the park after school. She would swing as high as she could, pretending to touch the clouds. One day, she saw a small puppy near the slide. The puppy looked lost and a little scared. Maya gently called to it and offered her snack. The puppy wagged its tail and came closer. Soon, Maya's friends joined her, and together they found the puppy's owner, who was very grateful. Maya felt happy that she helped a new friend.`;

  const questions = [
    {
      q: "Where did Maya like to go after school?",
      a: "The park"
    },
    {
      q: "What did Maya pretend to touch while swinging?",
      a: "The clouds"
    },
    {
      q: "What did Maya see near the slide?",
      a: "A small puppy"
    },
    {
      q: "How did Maya help the puppy?",
      a: "She called to it and offered her snack."
    },
    {
      q: "Who was grateful at the end of the story?",
      a: "The puppy's owner"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-4xl font-extrabold mb-3 text-blue-700">Reading Comprehension</h1>
            <p className="text-lg text-gray-700 mb-2">
              Reading comprehension means understanding what you read. It's not just about reading the words—it's about knowing what they mean and remembering the story or information.
            </p>
            <p className="text-blue-700 font-semibold">Good reading comprehension helps you learn, have fun, and do well in school!</p>
          </header>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Tips for Better Reading Comprehension</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, idx) => (
                <div key={tip.title} className="bg-blue-50 border-l-4 border-blue-300 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-blue-700">{idx + 1}.</span>
                    <span className="font-bold text-gray-800">{tip.title}</span>
                  </div>
                  <div className="text-gray-700">{tip.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Reading Passage */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Practice Passage</h2>
            <div className="bg-blue-100 rounded p-4 text-gray-800 mb-4 shadow-sm">
              {passage}
            </div>
          </section>

          {/* Comprehension Questions */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Comprehension Questions</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {questions.map((q, idx) => (
                <li key={idx} className="mb-1">{q.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-blue-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {questions.map((q, idx) => (
                  <li key={idx}><b>Q{idx + 1}:</b> {q.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Why It Matters */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Why Reading Comprehension Matters</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Helps you learn new things in every subject.</li>
              <li>Makes reading stories and books more fun.</li>
              <li>Improves your writing and speaking skills.</li>
              <li>Helps you follow instructions and solve problems.</li>
              <li>Prepares you for tests and real-life situations.</li>
            </ul>
          </section>

          {/* More Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Practice with <b>main idea</b> and <b>details</b> questions.</li>
              <li>Learn about <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> and <Link href="/grammar/metaphor-examples" className="text-blue-700 underline hover:text-blue-900">metaphors</Link>.</li>
              <li>Try more <b>reading passages</b> and answer questions.</li>
              <li>Explore <Link href="/grammar/idioms-for-kids" className="text-blue-700 underline hover:text-blue-900">idioms</Link> and <b>vocabulary</b> topics to help you understand more.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 