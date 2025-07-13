import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bigger vs Biger - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bigger&quot; and &quot;biger&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bigger, biger, spelling, correct spelling, word comparison, English spelling, comparative, size',
  openGraph: {
    title: 'Bigger vs Biger - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bigger&quot; and &quot;biger&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BiggerVsBigerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bigger vs Biger</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this comparative form of the word &quot;big.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Biger
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Biger&quot; is a misspelling of the word &quot;bigger.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• This house is biger than that one</li>
              <li>• The biger dog won the race</li>
              <li>• I need a biger car</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bigger
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bigger&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• This house is bigger than that one</li>
              <li>• The bigger dog won the race</li>
              <li>• I need a bigger car</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bigger</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bigger</strong> (adjective): Comparative form of &quot;big&quot; - of greater size, amount, or importance than something else.
          </p>
          <p>
            <strong>Bigger</strong> (adverb): In a greater degree or extent; more.
          </p>
          <p>
            Used to compare the size, amount, or importance of two or more things, indicating that one exceeds the other in these qualities.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bigger</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Larger</li>
              <li>• Greater</li>
              <li>• More substantial</li>
              <li>• More significant</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• More important</li>
              <li>• More extensive</li>
              <li>• More considerable</li>
              <li>• More prominent</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bigger&quot; is always spelled with double &quot;g&quot; in the middle</li>
          <li>• The word comes from &quot;big&quot; + the comparative suffix &quot;-er&quot;</li>
          <li>• The pronunciation is /ˈbɪɡər/ (BIG-er)</li>
          <li>• &quot;Biger&quot; is a common misspelling but is never correct</li>
          <li>• The double &quot;g&quot; follows the rule: double the final consonant before adding &quot;-er&quot;</li>
          <li>• This spelling pattern applies to other words like &quot;hotter,&quot; &quot;thinner,&quot; etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;biger&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;g&quot; when adding the &quot;-er&quot; suffix to &quot;big.&quot; The rule is to double the final consonant before adding &quot;-er.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;biger&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;biger&quot; is always incorrect. Always use &quot;bigger&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bigger&quot; and &quot;biggest&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bigger&quot; is the comparative form (comparing two things), while &quot;biggest&quot; is the superlative form (comparing three or more things, indicating the most).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;big&quot; + &quot;ger&quot;. Since &quot;big&quot; ends in consonant-vowel-consonant, we double the final &quot;g&quot; before adding &quot;-er.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bigger</strong> is the correct spelling of this word. The incorrect spelling &quot;biger&quot; should never be used.
          </p>
          <p>
            Remember: Bigger = Big + ger (with double &quot;g&quot;). This follows the English spelling rule of doubling the final consonant before adding &quot;-er&quot; to words ending in consonant-vowel-consonant.
          </p>
        </div>
      </div>
    </div>
  )
} 