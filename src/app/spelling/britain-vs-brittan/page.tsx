import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Britain or Brittan - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Britain&quot; and &quot;Brittan&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'britain, brittan, spelling, correct spelling, word comparison, English spelling, country, United Kingdom',
  openGraph: {
    title: 'Britain or Brittan - Which is Correct?',
    description: 'Learn the correct spelling between &quot;Britain&quot; and &quot;Brittan&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BritainVsBrittanPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Britain or Brittan</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Britain&quot; and &quot;Brittan&quot;. This is a proper noun referring to the island and country in northwestern Europe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brittan
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brittan&quot; is a misspelling of the word &quot;Britain.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I visited Brittan last summer</li>
              <li>• The history of Brittan is fascinating</li>
              <li>• Brittan is part of the United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Britain
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Britain&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I visited Britain last summer</li>
              <li>• The history of Britain is fascinating</li>
              <li>• Britain is part of the United Kingdom</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Britain</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Britain</strong> (proper noun): The island containing England, Scotland, and Wales, located in northwestern Europe.
          </p>
          <p>
            <strong>Britain</strong> (proper noun): The United Kingdom of Great Britain and Northern Ireland.
          </p>
          <p>
            <strong>Britain</strong> (proper noun): Great Britain, the largest island in the British Isles.
          </p>
          <p>
            Used to refer to the island nation or the United Kingdom as a whole, often used interchangeably with &quot;Great Britain&quot; or &quot;the UK.&quot;
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Britain</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Great Britain</li>
              <li>• United Kingdom</li>
              <li>• UK</li>
              <li>• British Isles</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• England (informal)</li>
              <li>• Albion (poetic)</li>
              <li>• The British Isles</li>
              <li>• The British Empire</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Britain&quot; is always spelled with single &quot;t&quot; in the middle, not double &quot;tt&quot;</li>
          <li>• The word comes from Latin &quot;Britannia&quot; and Old English &quot;Bryten&quot;</li>
          <li>• The pronunciation is /ˈbrɪtən/ (BRIT-uhn)</li>
          <li>• &quot;Brittan&quot; is a common misspelling but is never correct</li>
          <li>• The word is related to &quot;British&quot; and &quot;Briton&quot;</li>
          <li>• It&apos;s a proper noun and should always be capitalized</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;Brittan&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people think the word should have double &quot;t&quot; like some other words, but &quot;Britain&quot; is correctly spelled with single &quot;t.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;Brittan&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;Brittan&quot; is always incorrect. Always use &quot;Britain&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;Britain&quot; and &quot;England&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Britain&quot; refers to the entire island (England, Scotland, and Wales) or the UK, while &quot;England&quot; refers specifically to one of the countries within Britain.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;Britain&quot; as having single &quot;t&quot; like &quot;British&quot; and &quot;Briton.&quot; The word is related to these terms and follows the same spelling pattern.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Britain</strong> is the correct spelling of this word. The incorrect spelling &quot;Brittan&quot; should never be used.
          </p>
          <p>
            Remember: Britain has single &quot;t&quot; in the middle (like &quot;British&quot; and &quot;Briton&quot;). The word refers to the island containing England, Scotland, and Wales, or the United Kingdom as a whole.
          </p>
        </div>
      </div>
    </div>
  )
} 