import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Before vs Befor - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "before" and "befor". Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'before, befor, spelling, correct spelling, word comparison, English spelling, preposition, adverb',
  openGraph: {
    title: 'Before vs Befor - Which is Correct?',
    description: 'Learn the correct spelling between "before" and "befor". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BeforeVsBeforPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Before vs Befor</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this essential time-related word.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Befor
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Befor&quot; is a misspelling of the word &quot;before.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I saw her befor the meeting</li>
              <li>• Please arrive befor 3 PM</li>
              <li>• He had never been there befor</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Before
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Before&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I saw her before the meeting</li>
              <li>• Please arrive before 3 PM</li>
              <li>• He had never been there before</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Before</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Before</strong> (preposition): Earlier than; in front of; in the presence of.
          </p>
          <p>
            <strong>Before</strong> (adverb): At an earlier time; previously; in advance.
          </p>
          <p>
            <strong>Before</strong> (conjunction): Earlier than the time when; rather than; in preference to.
          </p>
          <p>
            Used to indicate time, position, or preference in various contexts.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Before</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Prior to</li>
              <li>• Earlier than</li>
              <li>• In front of</li>
              <li>• Ahead of</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Previously</li>
              <li>• Formerly</li>
              <li>• In advance</li>
              <li>• Preceding</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Before&quot; is always spelled with &quot;e&quot; at the end</li>
          <li>• The word comes from Old English &quot;beforan&quot; meaning &quot;in front of&quot;</li>
          <li>• The pronunciation is /bɪˈfɔːr/ (bi-FOR)</li>
          <li>• &quot;Befor&quot; is a common misspelling but is never correct</li>
          <li>• &quot;Before&quot; can function as a preposition, adverb, or conjunction</li>
          <li>• The word is essential for expressing time relationships and sequences</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;befor&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling likely occurs because the final &quot;e&quot; in &quot;before&quot; can be subtle in pronunciation, leading some to omit it in writing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;befor&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;befor&quot; is always incorrect. Always use &quot;before&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;before&quot; and &quot;prior to&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both mean the same thing, but &quot;prior to&quot; is more formal. &quot;Before&quot; is more commonly used in everyday speech and writing.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Before</strong> is the correct spelling of this essential word. The incorrect spelling &quot;befor&quot; should never be used.
          </p>
          <p>
            Remember: Before = Be + for + e (with an &quot;e&quot; at the end). This spelling is consistent across all English-speaking countries and is one of the most fundamental words for expressing time relationships.
          </p>
        </div>
      </div>
    </div>
  )
} 