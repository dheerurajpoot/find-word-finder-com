import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biggest vs Bigest - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;biggest&quot; and &quot;bigest&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'biggest, bigest, spelling, correct spelling, word comparison, English spelling, superlative, size',
  openGraph: {
    title: 'Biggest vs Bigest - Which is Correct?',
    description: 'Learn the correct spelling between &quot;biggest&quot; and &quot;bigest&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BiggestVsBigestPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Biggest vs Bigest</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this superlative form of the word &quot;big.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bigest
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Bigest&quot; is a misspelling of the word &quot;biggest.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• This is the bigest house in town</li>
              <li>• The bigest dog won the prize</li>
              <li>• She has the bigest collection</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Biggest
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Biggest&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• This is the biggest house in town</li>
              <li>• The biggest dog won the prize</li>
              <li>• She has the biggest collection</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Biggest</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Biggest</strong> (adjective): Superlative form of &quot;big&quot; - of the greatest size, amount, or importance among a group.
          </p>
          <p>
            <strong>Biggest</strong> (adverb): To the greatest degree or extent; most.
          </p>
          <p>
            Used to indicate that something exceeds all others in size, amount, or importance within a specified group or category.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Biggest</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Largest</li>
              <li>• Greatest</li>
              <li>• Most substantial</li>
              <li>• Most significant</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Most important</li>
              <li>• Most extensive</li>
              <li>• Most considerable</li>
              <li>• Most prominent</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Biggest&quot; is always spelled with double &quot;g&quot; in the middle</li>
          <li>• The word comes from &quot;big&quot; + the superlative suffix &quot;-est&quot;</li>
          <li>• The pronunciation is /ˈbɪɡɪst/ (BIG-ist)</li>
          <li>• &quot;Bigest&quot; is a common misspelling but is never correct</li>
          <li>• The double &quot;g&quot; follows the rule: double the final consonant before adding &quot;-est&quot;</li>
          <li>• This spelling pattern applies to other words like &quot;hottest,&quot; &quot;thinnest,&quot; etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;bigest&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;g&quot; when adding the &quot;-est&quot; suffix to &quot;big.&quot; The rule is to double the final consonant before adding &quot;-est.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bigest&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bigest&quot; is always incorrect. Always use &quot;biggest&quot; in all contexts.
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
              A: Think of &quot;big&quot; + &quot;gest&quot;. Since &quot;big&quot; ends in consonant-vowel-consonant, we double the final &quot;g&quot; before adding &quot;-est.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Biggest</strong> is the correct spelling of this word. The incorrect spelling &quot;bigest&quot; should never be used.
          </p>
          <p>
            Remember: Biggest = Big + gest (with double &quot;g&quot;). This follows the English spelling rule of doubling the final consonant before adding &quot;-est&quot; to words ending in consonant-vowel-consonant.
          </p>
        </div>
      </div>
    </div>
  )
} 