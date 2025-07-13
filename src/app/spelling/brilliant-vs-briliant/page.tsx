import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brilliant or Briliant - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brilliant&quot; and &quot;briliant&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brilliant, briliant, spelling, correct spelling, word comparison, English spelling, bright, intelligent',
  openGraph: {
    title: 'Brilliant or Briliant - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brilliant&quot; and &quot;briliant&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BrilliantVsBriliantPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brilliant or Briliant</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Brilliant&quot; and &quot;Briliant&quot;. This is an adjective meaning exceptionally bright, intelligent, or outstanding.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Briliant
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Briliant&quot; is a misspelling of the word &quot;brilliant.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• She had a briliant idea</li>
              <li>• The briliant sun shone brightly</li>
              <li>• He is a briliant student</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brilliant
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brilliant&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• She had a brilliant idea</li>
              <li>• The brilliant sun shone brightly</li>
              <li>• He is a brilliant student</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brilliant</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brilliant</strong> (adjective): Exceptionally bright, intelligent, or talented; outstanding in ability or achievement.
          </p>
          <p>
            <strong>Brilliant</strong> (adjective): Shining brightly; sparkling or gleaming with light.
          </p>
          <p>
            <strong>Brilliant</strong> (adjective): Excellent or outstanding; of exceptional quality or merit.
          </p>
          <p>
            Used to describe someone or something that is exceptionally bright, intelligent, talented, or outstanding in some way.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brilliant</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Bright</li>
              <li>• Intelligent</li>
              <li>• Clever</li>
              <li>• Smart</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Outstanding</li>
              <li>• Exceptional</li>
              <li>• Excellent</li>
              <li>• Remarkable</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brilliant&quot; is always spelled with double &quot;l&quot; in the middle, not single &quot;l&quot;</li>
          <li>• The word comes from French &quot;brillant&quot; meaning shining or sparkling</li>
          <li>• The pronunciation is /ˈbrɪljənt/ (BRIL-yuhnt)</li>
          <li>• &quot;Briliant&quot; is a common misspelling but is never correct</li>
          <li>• The double &quot;l&quot; is preserved from the French origin</li>
          <li>• This follows the same pattern as words like &quot;brilliance&quot; and &quot;brilliantly&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;briliant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;l&quot; in the middle of the word. The correct spelling preserves the double &quot;l&quot; from the French origin.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;briliant&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;briliant&quot; is always incorrect. Always use &quot;brilliant&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brilliant&quot; and &quot;bright&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bright&quot; generally means giving off light or being intelligent, while &quot;brilliant&quot; suggests exceptional brightness, intelligence, or outstanding quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;brilliant&quot; as having double &quot;l&quot; like &quot;brilliance&quot; and &quot;brilliantly.&quot; The word comes from French and preserves the double &quot;l.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brilliant</strong> is the correct spelling of this word. The incorrect spelling &quot;briliant&quot; should never be used.
          </p>
          <p>
            Remember: Brilliant has double &quot;l&quot; in the middle (like &quot;brilliance&quot; and &quot;brilliantly&quot;). The word comes from French and preserves the double &quot;l&quot; spelling pattern.
          </p>
        </div>
      </div>
    </div>
  )
} 