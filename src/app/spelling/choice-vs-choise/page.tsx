import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choice vs Choise - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "choice" and "choise". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'choice vs choise, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Choice vs Choise - Which is Correct?',
    description: 'Learn the correct spelling between "choice" and "choise". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChoiceVsChoisePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Choice or Choise</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;choice&quot; or &quot;choise&quot;, this noun and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Choise</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;choice.&quot; The correct spelling uses &quot;c&quot; before the &quot;e&quot; at the end, not &quot;s&quot;.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Using &quot;s&quot; instead of &quot;c&quot; at the end</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Choice</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> The act of selecting or making a decision when faced with two or more possibilities.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Choice</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Selection</h3>
            <p className="text-lg text-blue-700">The act of choosing</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Option</h3>
            <p className="text-lg text-blue-700">A possible alternative</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Alternative</h3>
            <p className="text-lg text-blue-700">Another possibility</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Preference</h3>
            <p className="text-lg text-blue-700">A greater liking for one option over others</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Pick</h3>
            <p className="text-lg text-blue-700">The thing chosen</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Decision</h3>
            <p className="text-lg text-blue-700">A conclusion or resolution reached</p>
          </div>
        </div>
      </div>
      {/* Usage Examples Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;She made the right <span className="text-green-600 font-semibold">choice</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;She made the right <span className="text-red-600 font-semibold">choise</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;You have a <span className="text-green-600 font-semibold">choice</span> of desserts.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;It was a difficult <span className="text-green-600 font-semibold">choice</span> to make.&quot;</p>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Choice&quot; is pronounced as /tʃɔɪs/</li>
          <li>&bull; The word comes from Old French &quot;chois&quot;</li>
          <li>&bull; &quot;Choice&quot; is always spelled with a &quot;c&quot; before the &quot;e&quot;</li>
          <li>&bull; Remember: The correct spelling is &quot;choice&quot; with &quot;c&quot; at the end</li>
          <li>&bull; Commonly misspelled due to the similar sound of &quot;c&quot; and &quot;s&quot;</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;choice&quot; as &quot;choise&quot;?</h3>
            <p className="text-lg text-blue-800">A: The ending sound of &quot;choice&quot; can be confused with &quot;s&quot; instead of &quot;c&quot;, especially for non-native speakers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What does &quot;choice&quot; mean?</h3>
            <p className="text-lg text-blue-800">A: &quot;Choice&quot; means the act of selecting or making a decision when faced with two or more possibilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling of &quot;choice&quot;?</h3>
            <p className="text-lg text-blue-800">A: Remember that &quot;choice&quot; ends with &quot;c&quot; like &quot;ice&quot; and not &quot;s&quot;.</p>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Choice</strong> is the correct spelling. It refers to the act of selecting or making a decision. The word is spelled with &quot;c&quot; at the end: &quot;choice&quot;. &quot;Choise&quot; is a misspelling that should be avoided.
        </p>
      </div>
    </div>
  )
} 