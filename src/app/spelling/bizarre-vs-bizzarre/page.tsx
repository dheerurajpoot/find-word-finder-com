import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bizarre vs Bizzarre - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bizarre&quot; and &quot;bizzarre&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bizarre, bizzarre, spelling, correct spelling, word comparison, English spelling, adjective, strange',
  openGraph: {
    title: 'Bizarre vs Bizzarre - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bizarre&quot; and &quot;bizzarre&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BizarreVsBizzarrePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bizarre vs Bizzarre</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this adjective describing strange or unusual things.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bizzarre
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Bizzarre&quot; is a misspelling of the word &quot;bizarre.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• That was a bizzarre experience</li>
              <li>• The bizzarre behavior confused everyone</li>
              <li>• What a bizzarre coincidence</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bizarre
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bizarre&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• That was a bizarre experience</li>
              <li>• The bizarre behavior confused everyone</li>
              <li>• What a bizarre coincidence</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bizarre</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bizarre</strong> (adjective): Very strange or unusual, especially in a way that is interesting or shocking.
          </p>
          <p>
            <strong>Bizarre</strong> (adverb): In a bizarre manner; bizarrely.
          </p>
          <p>
            Used to describe situations, events, behavior, or things that are strikingly unusual, strange, or unexpected in a way that captures attention.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bizarre</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Strange</li>
              <li>• Weird</li>
              <li>• Peculiar</li>
              <li>• Odd</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Unusual</li>
              <li>• Eccentric</li>
              <li>• Quirky</li>
              <li>• Outlandish</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bizarre&quot; is always spelled with double &quot;z&quot; in the middle</li>
          <li>• The word comes from French &quot;bizarre&quot; meaning strange or odd</li>
          <li>• The pronunciation is /bɪˈzɑːr/ (bi-ZAR)</li>
          <li>• &quot;Bizzarre&quot; is a common misspelling but is never correct</li>
          <li>• The double &quot;z&quot; follows the French origin of the word</li>
          <li>• This spelling pattern is consistent with other French loanwords</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;bizzarre&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people add an extra &quot;z&quot; and &quot;r&quot;. The correct spelling has double &quot;z&quot; (zz) and single &quot;r&quot; (r), not triple &quot;z&quot; (zzz) and double &quot;r&quot; (rr).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bizzarre&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bizzarre&quot; is always incorrect. Always use &quot;bizarre&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bizarre&quot; and &quot;strange&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both describe unusual things, but &quot;bizarre&quot; suggests something more strikingly unusual or shocking, while &quot;strange&quot; is more general and can be milder.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bizarre&quot; as having double &quot;z&quot; like the word &quot;pizza.&quot; Both words have exactly two &quot;z&quot;s, not three, and only one &quot;r.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bizarre</strong> is the correct spelling of this word. The incorrect spelling &quot;bizzarre&quot; should never be used.
          </p>
          <p>
            Remember: Bizarre has double &quot;z&quot; (zz) and single &quot;r&quot; (r), not triple &quot;z&quot; (zzz) and double &quot;r&quot; (rr). The double &quot;z&quot; follows the word&apos;s French origins and is essential for the correct spelling.
          </p>
        </div>
      </div>
    </div>
  )
} 