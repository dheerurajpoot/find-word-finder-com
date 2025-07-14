import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Broccoli or Brocolli - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;broccoli&quot; and &quot;brocolli&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'broccoli, brocolli, spelling, correct spelling, word comparison, English spelling, vegetable, food',
  openGraph: {
    title: 'Broccoli or Brocolli - Which is Correct?',
    description: 'Learn the correct spelling between &quot;broccoli&quot; and &quot;brocolli&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BroccoliVsBrocolliPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Broccoli or Brocolli</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Broccoli&quot; and &quot;Brocolli&quot;. This is a green vegetable in the cabbage family.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brocolli
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brocolli&quot; is a misspelling of the word &quot;broccoli.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I love eating brocolli</li>
              <li>• The brocolli was steamed perfectly</li>
              <li>• Brocolli is very healthy</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Broccoli
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Broccoli&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I love eating broccoli</li>
              <li>• The broccoli was steamed perfectly</li>
              <li>• Broccoli is very healthy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Broccoli</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Broccoli</strong> (noun): A green vegetable in the cabbage family, with dense clusters of small, edible flower heads on thick stalks.
          </p>
          <p>
            <strong>Broccoli</strong> (noun): A plant of the species Brassica oleracea var. italica, cultivated for its edible flower heads and stalks.
          </p>
          <p>
            Used to refer to the vegetable itself, whether raw, cooked, or as an ingredient in various dishes. It&apos;s known for its high nutritional value and distinctive appearance.
          </p>
          <p>
            The word comes from the Italian &quot;broccolo&quot; (plural: broccoli), meaning the flowering top of a cabbage.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Broccoli</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Green vegetable</li>
              <li>• Cruciferous vegetable</li>
              <li>• Brassica</li>
              <li>• Cabbage family</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Cole crop</li>
              <li>• Brassica oleracea</li>
              <li>• Italian broccoli</li>
              <li>• Calabrese</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Broccoli&quot; is always spelled with double &quot;c&quot; and single &quot;l&quot;</li>
          <li>• The word comes from Italian &quot;broccolo&quot; (plural: broccoli)</li>
          <li>• The pronunciation is /ˈbrɒkəli/ (BROK-uh-lee)</li>
          <li>• &quot;Brocolli&quot; is a common misspelling but is never correct</li>
          <li>• The word is used as a noun only</li>
          <li>• It&apos;s commonly used in cooking and nutrition contexts</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brocolli&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people confuse the double &quot;c&quot; with double &quot;l&quot;. The correct spelling has double &quot;c&quot; and single &quot;l&quot;.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brocolli&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brocolli&quot; is always incorrect. Always use &quot;broccoli&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between broccoli and cauliflower?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Broccoli has green flower heads, while cauliflower has white flower heads. Both are in the same family but are different varieties of Brassica oleracea.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;broc&quot; + &quot;coli&quot;. The word has double &quot;c&quot; (like in &quot;broccoli&quot;) and single &quot;l&quot; (like in &quot;coli&quot;).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Broccoli</strong> is the correct spelling of this word. The incorrect spelling &quot;brocolli&quot; should never be used.
          </p>
          <p>
            Remember: Broccoli = Broc + coli. The word has double &quot;c&quot; and single &quot;l&quot;, not double &quot;l.&quot;
          </p>
        </div>
      </div>
    </div>
  )
} 