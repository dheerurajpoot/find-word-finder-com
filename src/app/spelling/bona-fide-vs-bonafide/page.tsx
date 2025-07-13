import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bona Fide vs Bonafide - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bona fide&quot; and &quot;bonafide&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bona fide, bonafide, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bona Fide vs Bonafide - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bona fide&quot; and &quot;bonafide&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BonaFideVsBonafidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bona Fide vs Bonafide</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bona fide</strong> (two words). &quot;Bonafide&quot; (one word) is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bona Fide (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bona fide&quot; means genuine, authentic, or made in good faith.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Bonafide (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Bonafide&quot; is a misspelling. The correct form is two words: &quot;bona fide&quot;.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bona fide</strong> (adjective): Genuine, authentic, or made in good faith without fraud or deceit.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>He is a <em>bona fide</em> expert in his field.</li>
            <li>The company made a <em>bona fide</em> offer to purchase the property.</li>
            <li>She has a <em>bona fide</em> reason for being late.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bona fide:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Genuine</li>
              <li>Authentic</li>
              <li>Legitimate</li>
              <li>Real</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Valid</li>
              <li>Credible</li>
              <li>Trustworthy</li>
              <li>Sincere</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bona fide&quot; is a Latin phrase meaning &quot;in good faith&quot;.</li>
          <li>It should always be written as two separate words.</li>
          <li>&quot;Bonafide&quot; is a common error due to the tendency to combine words.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bona fide&quot; as &quot;bonafide&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because they may think it should be one word, similar to other compound words in English.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;bonafide&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;bonafide&quot; is never correct in standard English. Always use &quot;bona fide&quot; (two words).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Remember that &quot;bona fide&quot; is a Latin phrase and should remain as two separate words.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Bona fide</strong> is the correct spelling (two words) for something genuine or authentic. &quot;Bonafide&quot; is a misspelling and should be avoided. Always use &quot;bona fide&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 