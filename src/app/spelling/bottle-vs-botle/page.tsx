import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bottle vs Botle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bottle&quot; and &quot;botle&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bottle, botle, spelling, correct spelling, word comparison, English spelling, noun, container',
  openGraph: {
    title: 'Bottle vs Botle - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bottle&quot; and &quot;botle&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BottleVsBotlePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bottle or Botle</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Bottle and Botle. This is a noun referring to a container for liquids.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Botle
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Botle&quot; is a misspelling of the word &quot;bottle.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I need a botle of water</li>
              <li>• The botle is empty</li>
              <li>• Put it in the botle</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bottle
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bottle&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I need a bottle of water</li>
              <li>• The bottle is empty</li>
              <li>• Put it in the bottle</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bottle</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bottle</strong> (noun): A container, typically made of glass or plastic, with a narrow neck, used for storing liquids.
          </p>
          <p>
            <strong>Bottle</strong> (noun): The amount contained in a bottle.
          </p>
          <p>
            <strong>Bottle</strong> (verb): To put something into a bottle; to preserve or store in a bottle.
          </p>
          <p>
            Used to refer to containers for liquids, typically with a narrow neck and a cap or stopper.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bottle</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Container</li>
              <li>• Vessel</li>
              <li>• Flask</li>
              <li>• Jar</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Jug</li>
              <li>• Decanter</li>
              <li>• Phial</li>
              <li>• Vial</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bottle&quot; is always spelled with double &quot;t&quot; in the middle</li>
          <li>• The word comes from Old French &quot;boteille&quot;</li>
          <li>• The pronunciation is /ˈbɒtl/ (BOT-ul) in British English</li>
          <li>• &quot;Botle&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Bottle&quot; has two &quot;t&quot;s, just like &quot;little&quot;</li>
          <li>• The word can be used as both a noun and a verb</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;botle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;t&quot; in &quot;bottle.&quot; The word has two &quot;t&quot;s in the middle, which is the correct spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;botle&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;botle&quot; is always incorrect. Always use &quot;bottle&quot; with double &quot;t&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bottle&quot; and &quot;jar&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: A &quot;bottle&quot; typically has a narrow neck and is used for liquids, while a &quot;jar&quot; usually has a wider opening and can be used for both liquids and solids.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bottle&quot; as having two &quot;t&quot;s, just like &quot;little.&quot; Both words have the same pattern: consonant + double &quot;t&quot; + vowel.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bottle</strong> is the correct spelling of this word. The incorrect spelling &quot;botle&quot; should never be used.
          </p>
          <p>
            Remember: Bottle has two &quot;t&quot;s in the middle. This follows the English spelling pattern and is the only correct form of this noun referring to a container for liquids.
          </p>
        </div>
      </div>
    </div>
  )
} 