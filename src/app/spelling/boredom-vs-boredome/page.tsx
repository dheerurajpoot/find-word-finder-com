import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boredom vs Boredome - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boredom&quot; and &quot;boredome&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'boredom, boredome, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Boredom vs Boredome - Which is Correct?',
    description: 'Learn the correct spelling between &quot;boredom&quot; and &quot;boredome&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BoredomVsBoredomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Boredom vs Boredome</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>boredom</strong>. &quot;Boredome&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Boredom (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Boredom&quot; means the state of feeling bored or uninterested.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Boredome (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Boredome&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Boredom</strong> (noun): The state of feeling bored, uninterested, or lacking stimulation.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>He felt overwhelming <em>boredom</em> during the long lecture.</li>
            <li>Many people experience <em>boredom</em> when they have nothing to do.</li>
            <li>Reading a good book can help relieve <em>boredom</em>.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to boredom:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Ennui</li>
              <li>Monotony</li>
              <li>Tedium</li>
              <li>Restlessness</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Apathy</li>
              <li>Indifference</li>
              <li>Lethargy</li>
              <li>Weariness</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Boredom&quot; is formed from the word &quot;bored&quot; + the suffix &quot;-om&quot;.</li>
          <li>The word entered English in the 19th century.</li>
          <li>&quot;Boredome&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;boredom&quot; as &quot;boredome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;boredom&quot; and &quot;boredome&quot; sound similar, people sometimes add an &quot;e&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;boredome&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;boredome&quot; is never correct in standard English. Always use &quot;boredom&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bored&quot; + &quot;om&quot; = &quot;boredom&quot;. No extra letters are needed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Boredom</strong> is the correct spelling for the state of being bored. &quot;Boredome&quot; is a misspelling and should be avoided. Always use &quot;boredom&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 