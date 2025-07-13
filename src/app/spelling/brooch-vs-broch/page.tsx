import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brooch or Broch - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brooch&quot; and &quot;broch&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brooch, broch, spelling, correct spelling, word comparison, English spelling, jewelry, ornament',
  openGraph: {
    title: 'Brooch or Broch - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brooch&quot; and &quot;broch&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BroochVsBrochPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brooch or Broch</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Brooch&quot; and &quot;Broch&quot;. This is a noun referring to a decorative jewelry item worn on clothing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Broch
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Broch&quot; is a misspelling of the word &quot;brooch.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• She wore a beautiful broch</li>
              <li>• The broch was made of gold</li>
              <li>• Her broch sparkled in the light</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brooch
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brooch&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• She wore a beautiful brooch</li>
              <li>• The brooch was made of gold</li>
              <li>• Her brooch sparkled in the light</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brooch</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brooch</strong> (noun): A decorative jewelry item, typically made of metal and often adorned with gemstones, worn on clothing.
          </p>
          <p>
            <strong>Brooch</strong> (noun): An ornamental pin or clasp used to fasten or decorate clothing.
          </p>
          <p>
            <strong>Brooch</strong> (noun): A piece of jewelry that can be attached to garments, usually with a pin or clasp mechanism.
          </p>
          <p>
            Used to describe a decorative jewelry item that is pinned to clothing, often worn as an accessory or fashion statement.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brooch</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Pin</li>
              <li>• Clasp</li>
              <li>• Ornament</li>
              <li>• Jewelry</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Decoration</li>
              <li>• Accessory</li>
              <li>• Badge</li>
              <li>• Fastener</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brooch&quot; is always spelled with double &quot;o&quot; in the middle, not single &quot;o&quot;</li>
          <li>• The word comes from Old French &quot;broche&quot; meaning a pointed tool or pin</li>
          <li>• The pronunciation is /broʊtʃ/ (brohch) or /bruːtʃ/ (brooch)</li>
          <li>• &quot;Broch&quot; is a common misspelling but is never correct</li>
          <li>• The word is related to &quot;broach&quot; (to bring up a topic)</li>
          <li>• It&apos;s a noun referring specifically to a decorative jewelry item</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;broch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;o&quot; in the middle of the word. The correct spelling preserves the double &quot;o&quot; from the French origin.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;broch&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;broch&quot; is always incorrect. Always use &quot;brooch&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brooch&quot; and &quot;broach&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brooch&quot; is a noun referring to a decorative jewelry item, while &quot;broach&quot; is a verb meaning to bring up or introduce a topic for discussion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;brooch&quot; as having double &quot;o&quot; like &quot;book&quot; and &quot;look.&quot; The word comes from French and preserves the double &quot;o&quot; spelling.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brooch</strong> is the correct spelling of this word. The incorrect spelling &quot;broch&quot; should never be used.
          </p>
          <p>
            Remember: Brooch has double &quot;o&quot; in the middle (like &quot;book&quot; and &quot;look&quot;). The word refers to a decorative jewelry item worn on clothing, and comes from French with the double &quot;o&quot; spelling pattern.
          </p>
        </div>
      </div>
    </div>
  )
} 