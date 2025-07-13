import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Both vs Boths - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;both&quot; and &quot;boths&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'both, boths, spelling, correct spelling, word comparison, English spelling, determiner, pronoun',
  openGraph: {
    title: 'Both vs Boths - Which is Correct?',
    description: 'Learn the correct spelling between &quot;both&quot; and &quot;boths&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BothVsBothsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Both or Boths</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Both and Boths. This is a determiner and pronoun meaning two things together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Boths
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Boths&quot; is a misspelling of the word &quot;both.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• Boths of them are here</li>
              <li>• I like boths options</li>
              <li>• Boths cars are red</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Both
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Both&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• Both of them are here</li>
              <li>• I like both options</li>
              <li>• Both cars are red</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Both</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Both</strong> (determiner): Used to refer to two people or things together.
          </p>
          <p>
            <strong>Both</strong> (pronoun): Used to refer to two people or things that have been mentioned.
          </p>
          <p>
            <strong>Both</strong> (conjunction): Used to connect two alternatives or options.
          </p>
          <p>
            Used to indicate that two things are included or involved together.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Both</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• The two</li>
              <li>• Each of the two</li>
              <li>• The pair</li>
              <li>• Together</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• As well as</li>
              <li>• And also</li>
              <li>• Equally</li>
              <li>• Similarly</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Both&quot; is always spelled without an &quot;s&quot; at the end</li>
          <li>• The word comes from Old English &quot;bā þā&quot; meaning &quot;both the&quot;</li>
          <li>• The pronunciation is /bəʊθ/ (BOHTH) in British English</li>
          <li>• &quot;Boths&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Both&quot; never takes an &quot;s&quot; - it&apos;s always &quot;both&quot;</li>
          <li>• The word can be used as a determiner, pronoun, or conjunction</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;boths&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may think that since it refers to two things, it should have an &quot;s&quot; like other plural words.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;boths&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;boths&quot; is always incorrect. Always use &quot;both&quot; without an &quot;s&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;both&quot; and &quot;all&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Both&quot; refers specifically to two things, while &quot;all&quot; refers to more than two things or everything in a group.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;both&quot; as a special word that never changes - it&apos;s always &quot;both&quot; whether referring to two things or not.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Both</strong> is the correct spelling of this word. The incorrect spelling &quot;boths&quot; should never be used.
          </p>
          <p>
            Remember: Both never takes an &quot;s&quot; at the end. This follows the English spelling pattern and is the only correct form of this determiner and pronoun meaning two things together.
          </p>
        </div>
      </div>
    </div>
  )
} 