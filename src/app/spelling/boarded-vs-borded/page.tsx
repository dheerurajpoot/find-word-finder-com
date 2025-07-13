import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boarded vs Borded - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boarded&quot; and &quot;borded&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'boarded, borded, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Boarded vs Borded - Which is Correct?',
    description: 'Learn the correct spelling between &quot;boarded&quot; and &quot;borded&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BoardedVsBordedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Boarded vs Borded</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>boarded</strong>. &quot;Borded&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Boarded (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Boarded&quot; means to have gotten on a vehicle or to have covered with boards.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Borded (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Borded&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Boarded</strong> (verb): Past tense of &quot;board,&quot; meaning to get on a vehicle or to cover with boards.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We <em>boarded</em> the plane at 3 PM.</li>
            <li>The windows were <em>boarded</em> up after the storm.</li>
            <li>Passengers <em>boarded</em> the train at the station.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to boarded (vehicle):</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Entered</li>
              <li>Got on</li>
              <li>Embarked</li>
              <li>Mounted</li>
            </ul>
          </div>
          <div>
            <strong>Related to boarded (covered):</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Covered</li>
              <li>Sealed</li>
              <li>Blocked</li>
              <li>Shut</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Boarded&quot; is the past tense and past participle of &quot;board&quot;.</li>
          <li>The word comes from the noun &quot;board&quot; meaning a flat piece of wood.</li>
          <li>&quot;Borded&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;boarded&quot; as &quot;borded&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;board&quot; and &quot;bord&quot; sound similar, people sometimes drop the &quot;a&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;borded&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;borded&quot; is never correct in standard English. Always use &quot;boarded&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;board&quot; + &quot;ed&quot; = &quot;boarded&quot;. Keep the &quot;a&quot; from &quot;board&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Boarded</strong> is the correct spelling for getting on a vehicle or covering with boards. &quot;Borded&quot; is a misspelling and should be avoided. Always use &quot;boarded&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 