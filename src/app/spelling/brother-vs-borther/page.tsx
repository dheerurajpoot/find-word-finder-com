import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brother vs Borther - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brother&quot; and &quot;borther&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brother, borther, spelling, correct spelling, word comparison, English spelling, noun, family',
  openGraph: {
    title: 'Brother vs Borther - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brother&quot; and &quot;borther&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BrotherVsBortherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brother or Borther</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Brother and Borther. This is a noun referring to a male sibling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Borther
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Borther&quot; is a misspelling of the word &quot;brother.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• My borther is older than me</li>
              <li>• He is my borther</li>
              <li>• The borther and sister</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brother
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brother&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• My brother is older than me</li>
              <li>• He is my brother</li>
              <li>• The brother and sister</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brother</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brother</strong> (noun): A man or boy in relation to other sons and daughters of his parents; a male sibling.
          </p>
          <p>
            <strong>Brother</strong> (noun): A male friend or associate, especially one who shares a common interest or activity.
          </p>
          <p>
            <strong>Brother</strong> (noun): A member of a religious order or fraternity.
          </p>
          <p>
            Used to refer to a male sibling or as a term of address for a close male friend or associate.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brother</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Sibling</li>
              <li>• Male sibling</li>
              <li>• Bro (informal)</li>
              <li>• Buddy</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Mate</li>
              <li>• Pal</li>
              <li>• Friend</li>
              <li>• Comrade</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brother&quot; is always spelled with &quot;th&quot; in the middle, not &quot;rt&quot;</li>
          <li>• The word comes from Old English &quot;brōþor&quot;</li>
          <li>• The pronunciation is /ˈbrʌðə/ (BRUTH-er) in British English</li>
          <li>• &quot;Borther&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Brother&quot; has &quot;th&quot; like &quot;mother&quot; and &quot;father&quot;</li>
          <li>• The word is related to other family terms like &quot;mother,&quot; &quot;father,&quot; and &quot;other&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;borther&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may confuse the &quot;th&quot; sound with &quot;rt&quot; or may be influenced by other words with similar patterns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;borther&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;borther&quot; is always incorrect. Always use &quot;brother&quot; with &quot;th&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brother&quot; and &quot;bother&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brother&quot; refers to a male sibling, while &quot;bother&quot; means to cause trouble or annoyance. They are completely different words with different meanings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;brother&quot; as having &quot;th&quot; like &quot;mother&quot; and &quot;father.&quot; All these family words have the same &quot;th&quot; pattern in the middle.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brother</strong> is the correct spelling of this word. The incorrect spelling &quot;borther&quot; should never be used.
          </p>
          <p>
            Remember: Brother has &quot;th&quot; in the middle, not &quot;rt.&quot; This follows the English spelling pattern and is the only correct form of this noun referring to a male sibling.
          </p>
        </div>
      </div>
    </div>
  )
} 