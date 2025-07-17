import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chose vs Chosed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chose" and "chosed". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chose vs chosed, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chose vs Chosed - Which is Correct?',
    description: 'Learn the correct spelling between "chose" and "chosed". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChoseVsChosedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chose or Chosed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;chose&quot; or &quot;chosed&quot;, this verb and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chosed</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chose.&quot; The correct past tense of "choose" is "chose"; "chosed" is not a word.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Applying regular verb rules to an irregular verb</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chose</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> Past tense of "choose"; selected from a number of possibilities.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Verb (past tense)</p>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chose</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Selected</h3>
            <p className="text-lg text-blue-700">Picked out from a group</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Picked</h3>
            <p className="text-lg text-blue-700">Chose from a group</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Opted</h3>
            <p className="text-lg text-blue-700">Made a choice</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Elected</h3>
            <p className="text-lg text-blue-700">Chosen by voting</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Preferred</h3>
            <p className="text-lg text-blue-700">Favored over others</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Decided</h3>
            <p className="text-lg text-blue-700">Made a decision</p>
          </div>
        </div>
      </div>
      {/* Usage Examples Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">chose</span> the blue dress.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;She <span className="text-red-600 font-semibold">chosed</span> the blue dress.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;He <span className="text-green-600 font-semibold">chose</span> pizza for lunch.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;They <span className="text-green-600 font-semibold">chose</span> a new leader.&quot;</p>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Chose&quot; is pronounced as /tʃoʊz/</li>
          <li>&bull; &quot;Chose&quot; is the past tense of &quot;choose&quot;</li>
          <li>&bull; &quot;Chosed&quot; is not a word in English</li>
          <li>&bull; Remember: Irregular verbs like &quot;choose&quot; do not follow the regular &quot;-ed&quot; rule</li>
          <li>&bull; Commonly misspelled by applying regular verb rules</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chose&quot; as &quot;chosed&quot;?</h3>
            <p className="text-lg text-blue-800">A: English learners sometimes apply the regular verb rule to &quot;choose&quot;, but the correct past tense is &quot;chose&quot; and the past participle is &quot;chosen&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the past participle of "choose"?</h3>
            <p className="text-lg text-blue-800">A: The past participle of &quot;choose&quot; is &quot;chosen&quot;, not &quot;chosed&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct form of "chose"?</h3>
            <p className="text-lg text-blue-800">A: Remember that &quot;chose&quot; is the past tense, not &quot;chosed&quot;. The past participle is &quot;chosen&quot;.</p>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Chose</strong> is the correct spelling. It is the past tense of &quot;choose&quot;. &quot;Chosed&quot; is a misspelling that should be avoided.
        </p>
      </div>
    </div>
  )
} 