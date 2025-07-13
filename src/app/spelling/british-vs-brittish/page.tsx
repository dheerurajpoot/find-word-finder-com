import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'British or Brittish - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;British&quot; and &quot;Brittish&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'british, brittish, spelling, correct spelling, word comparison, English spelling, nationality, United Kingdom',
  openGraph: {
    title: 'British or Brittish - Which is Correct?',
    description: 'Learn the correct spelling between &quot;British&quot; and &quot;Brittish&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BritishVsBrittishPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">British or Brittish</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;British&quot; and &quot;Brittish&quot;. This is an adjective referring to people, things, or characteristics of Great Britain or the United Kingdom.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brittish
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brittish&quot; is a misspelling of the word &quot;British.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• She is Brittish</li>
              <li>• The Brittish accent is distinctive</li>
              <li>• Brittish culture is rich and diverse</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ British
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;British&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• She is British</li>
              <li>• The British accent is distinctive</li>
              <li>• British culture is rich and diverse</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of British</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>British</strong> (adjective): Relating to Great Britain or the United Kingdom, its people, or its culture.
          </p>
          <p>
            <strong>British</strong> (adjective): Of or relating to the people of Great Britain or the United Kingdom.
          </p>
          <p>
            <strong>British</strong> (adjective): Characteristic of or associated with Great Britain or the United Kingdom.
          </p>
          <p>
            Used to describe people, things, or characteristics that are from or related to Great Britain or the United Kingdom.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for British</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• UK</li>
              <li>• English</li>
              <li>• Great Britain</li>
              <li>• United Kingdom</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Britannic</li>
              <li>• Anglo</li>
              <li>• British Isles</li>
              <li>• Albion (poetic)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;British&quot; is always spelled with single &quot;t&quot; in the middle, not double &quot;tt&quot;</li>
          <li>• The word comes from Old English &quot;Brettisc&quot; meaning of the Britons</li>
          <li>• The pronunciation is /ˈbrɪtɪʃ/ (BRIT-ish)</li>
          <li>• &quot;Brittish&quot; is a common misspelling but is never correct</li>
          <li>• The word is related to &quot;Britain&quot; and &quot;Briton&quot;</li>
          <li>• It&apos;s an adjective and should be capitalized when referring to nationality</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;Brittish&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people think the word should have double &quot;t&quot; like some other words, but &quot;British&quot; is correctly spelled with single &quot;t.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;Brittish&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;Brittish&quot; is always incorrect. Always use &quot;British&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;British&quot; and &quot;English&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;British&quot; refers to people from Great Britain (England, Scotland, Wales), while &quot;English&quot; refers specifically to people from England.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;British&quot; as having single &quot;t&quot; like &quot;Britain&quot; and &quot;Briton.&quot; The word is related to these terms and follows the same spelling pattern.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>British</strong> is the correct spelling of this word. The incorrect spelling &quot;Brittish&quot; should never be used.
          </p>
          <p>
            Remember: British has single &quot;t&quot; in the middle (like &quot;Britain&quot; and &quot;Briton&quot;). The word refers to people, things, or characteristics of Great Britain or the United Kingdom.
          </p>
        </div>
      </div>
    </div>
  )
} 