import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bored vs Borade - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bored&quot; and &quot;borade&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bored, borade, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bored vs Borade - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bored&quot; and &quot;borade&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BoredVsBoradePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bored vs Borade</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bored</strong>. &quot;Borade&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bored (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bored&quot; means feeling weary and impatient because one is unoccupied or lacks interest.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Borade (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Borade&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bored</strong> (adjective): Feeling weary and impatient because one is unoccupied or lacks interest in current activities.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>I was <em>bored</em> during the long meeting.</li>
            <li>The children were <em>bored</em> and looking for something to do.</li>
            <li>She felt <em>bored</em> with her routine job.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bored:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Uninterested</li>
              <li>Weary</li>
              <li>Restless</li>
              <li>Disinterested</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Listless</li>
              <li>Unengaged</li>
              <li>Monotonous</li>
              <li>Tedious</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bored&quot; is the past tense and past participle of &quot;bore&quot; (to make someone feel uninterested).</li>
          <li>The word comes from the verb &quot;bore&quot; meaning to weary or tire.</li>
          <li>&quot;Borade&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bored&quot; as &quot;borade&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;bored&quot; and &quot;borade&quot; sound similar, people sometimes add an &quot;a&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;borade&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;borade&quot; is never correct in standard English. Always use &quot;bored&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bore&quot; + &quot;d&quot; = &quot;bored&quot;. No extra letters are needed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Bored</strong> is the correct spelling for feeling uninterested or weary. &quot;Borade&quot; is a misspelling and should be avoided. Always use &quot;bored&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 