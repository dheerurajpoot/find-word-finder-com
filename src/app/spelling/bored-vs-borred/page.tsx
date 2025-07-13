import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bored vs Borred - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bored&quot; and &quot;borred&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bored, borred, spelling, correct spelling, word comparison, English spelling, adjective, emotion',
  openGraph: {
    title: 'Bored vs Borred - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bored&quot; and &quot;borred&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BoredVsBorredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bored or Borred</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Bored and Borred. This is an adjective describing a state of weariness or lack of interest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Borred
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Borred&quot; is a misspelling of the word &quot;bored.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I am borred with this movie</li>
              <li>• The students look borred</li>
              <li>• She was borred at the party</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bored
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bored&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I am bored with this movie</li>
              <li>• The students look bored</li>
              <li>• She was bored at the party</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bored</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bored</strong> (adjective): Feeling weary and impatient because one is unoccupied or lacks interest in one&apos;s current activity.
          </p>
          <p>
            <strong>Bored</strong> (adjective): Made a hole in something with a tool, especially a drill.
          </p>
          <p>
            Used to describe a state of mind when someone lacks interest or stimulation in their current situation.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bored</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Uninterested</li>
              <li>• Tired</li>
              <li>• Weary</li>
              <li>• Restless</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Unengaged</li>
              <li>• Listless</li>
              <li>• Apathetic</li>
              <li>• Unstimulated</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bored&quot; is always spelled with one &quot;r&quot; in the middle</li>
          <li>• The word comes from the verb &quot;bore&quot; meaning to weary or tire</li>
          <li>• The pronunciation is /bɔːd/ (bored) in British English</li>
          <li>• &quot;Borred&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Bored&quot; has one &quot;r&quot;, not two</li>
          <li>• The word is the past participle and adjective form of &quot;bore&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;borred&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may confuse it with words that have double &quot;r&quot;s, or they may think it follows the pattern of other words with double consonants.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;borred&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;borred&quot; is always incorrect. Always use &quot;bored&quot; with one &quot;r&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bored&quot; and &quot;boring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bored&quot; describes how someone feels (I am bored), while &quot;boring&quot; describes something that causes boredom (This movie is boring).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bored&quot; as coming from the verb &quot;bore&quot; + &quot;ed&quot;. Since &quot;bore&quot; has one &quot;r&quot;, &quot;bored&quot; also has one &quot;r&quot;.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bored</strong> is the correct spelling of this word. The incorrect spelling &quot;borred&quot; should never be used.
          </p>
          <p>
            Remember: Bored has one &quot;r&quot; in the middle. This follows the English spelling pattern and is the only correct form of this adjective describing a state of weariness or lack of interest.
          </p>
        </div>
      </div>
    </div>
  )
} 