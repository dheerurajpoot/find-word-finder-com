import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boycott vs Boicott - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boycott&quot; and &quot;boicott&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'boycott, boicott, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Boycott vs Boicott - Which is Correct?',
    description: 'Learn the correct spelling between &quot;boycott&quot; and &quot;boicott&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BoycottVsBoicottPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Boycott vs Boicott</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>boycott</strong>. &quot;Boicott&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Boycott (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Boycott&quot; means to refuse to buy, use, or participate in something as a form of protest.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Boicott (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Boicott&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Boycott</strong> (verb/noun): To refuse to buy, use, or participate in something as a form of protest or punishment.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Many people decided to <em>boycott</em> the company due to its unethical practices.</li>
            <li>The <em>boycott</em> of the product lasted for several months.</li>
            <li>Students organized a <em>boycott</em> of the cafeteria food.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to boycott:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Protest</li>
              <li>Refuse</li>
              <li>Reject</li>
              <li>Avoid</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Sanction</li>
              <li>Embargo</li>
              <li>Strike</li>
              <li>Resistance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Boycott&quot; is named after Charles Boycott, an Irish land agent.</li>
          <li>The word entered English in the late 19th century.</li>
          <li>&quot;Boicott&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;boycott&quot; as &quot;boicott&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;boy&quot; and &quot;boi&quot; sound similar, people sometimes drop the &quot;y&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;boicott&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;boicott&quot; is never correct in standard English. Always use &quot;boycott&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;boy&quot; + &quot;cott&quot; = &quot;boycott&quot;. Keep the &quot;y&quot; from &quot;boy&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Boycott</strong> is the correct spelling for refusing to buy or participate in something as a form of protest. &quot;Boicott&quot; is a misspelling and should be avoided. Always use &quot;boycott&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 