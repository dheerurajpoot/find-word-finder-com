'use client'
import React, { useState } from 'react';

// Placeholder unscramble function (to be replaced with real logic or API)
function unscrambleWords(letters: string, length?: number): string[] {
  // This is a stub. Replace with real word list/logic.
  // For now, just return some mock results for demonstration.
  const mockResults = [
    'submit', 'bums', 'bust', 'suit', 'sub', 'tub', 'bus', 'bit', 'sit', 'it', 'is', 'us', 'bi', 'mu', 'ti', 'sib', 'sum', 'but', 'sim', 'bum', 'sib', 'sum', 'bit', 'bus', 'tub', 'sub', 'sit', 'suit', 'bust', 'bums', 'submit'
  ];
  let results = mockResults.filter(word =>
    word.length <= (letters.length + 2) &&
    (!length || word.length === length)
  );
  // Remove duplicates
  results = Array.from(new Set(results));
  return results;
}

export default function WordDescramblerPage() {
  const [letters, setLetters] = useState('');
  const [length, setLength] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const cleanLetters = letters.replace(/[^a-zA-Z\? ]/g, '').toLowerCase();
    const wordLength = length ? parseInt(length, 10) : undefined;
    setResults(unscrambleWords(cleanLetters, wordLength));
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Word Descrambler</h1>
      <p className="mb-4 text-gray-700">
        Enter your scrambled letters below (use <span className="font-mono">?</span> or a space for wildcards, up to 2 wildcards allowed). Optionally, filter by word length. Click <b>Descramble</b> to see all possible words you can make!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white rounded shadow p-4">
        <label className="flex flex-col">
          <span className="font-semibold">Letters (max 15, wildcards: ? or space):</span>
          <input
            type="text"
            value={letters}
            onChange={e => setLetters(e.target.value.slice(0, 15))}
            className="border rounded px-2 py-1 mt-1"
            placeholder="e.g. S B I T M U ?"
            required
            aria-label="Enter scrambled letters"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold">Word Length (optional):</span>
          <input
            type="number"
            min={2}
            max={15}
            value={length}
            onChange={e => setLength(e.target.value.replace(/[^0-9]/g, ''))}
            className="border rounded px-2 py-1 mt-1"
            placeholder="e.g. 6"
            aria-label="Filter by word length"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Descramble
        </button>
      </form>
      {submitted && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          {results.length > 0 ? (
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {results.map(word => (
                <li key={word} className="bg-gray-100 rounded px-2 py-1 text-center font-mono">{word}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No words found. Try different letters or length.</p>
          )}
        </section>
      )}
      <section className="mt-8 bg-blue-50 rounded p-4">
        <h3 className="font-bold mb-1">Tips for Using the Word Descrambler</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Use wildcards (<span className="font-mono">?</span> or space) for unknown letters.</li>
          <li>Try different letter combinations for more results.</li>
          <li>Filter by word length to narrow down your options.</li>
          <li>Great for Scrabble, Words With Friends, and other word games!</li>
        </ul>
      </section>
    </main>
  );
} 