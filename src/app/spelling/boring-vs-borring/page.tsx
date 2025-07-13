import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boring vs Borring - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boring&quot; and &quot;borring&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'boring, borring, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Boring vs Borring - Which is Correct?',
    description: 'Learn the correct spelling between &quot;boring&quot; and &quot;borring&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BoringVsBorringPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Boring vs Borring</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>boring</strong>. &quot;Borring&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Boring (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Boring&quot; means not interesting or causing boredom.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Borring (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Borring&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Boring</strong> (adjective): Not interesting; causing boredom or tedium.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The movie was so <em>boring</em> that I fell asleep.</li>
            <li>He gave a <em>boring</em> presentation that lasted for hours.</li>
            <li>I find this book very <em>boring</em> and difficult to read.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to boring:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Dull</li>
              <li>Tedious</li>
              <li>Monotonous</li>
              <li>Uninteresting</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Repetitive</li>
              <li>Stale</li>
              <li>Flat</li>
              <li>Lifeless</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Boring&quot; is the present participle of the verb &quot;bore&quot;.</li>
          <li>The word comes from the verb &quot;bore&quot; meaning to weary or tire.</li>
          <li>&quot;Borring&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;boring&quot; as &quot;borring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;boring&quot; and &quot;borring&quot; sound similar, people sometimes add an extra &quot;r&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;borring&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;borring&quot; is never correct in standard English. Always use &quot;boring&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bore&quot; + &quot;ing&quot; = &quot;boring&quot;. Only one &quot;r&quot; is needed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Boring</strong> is the correct spelling for something not interesting or causing boredom. &quot;Borring&quot; is a misspelling and should be avoided. Always use &quot;boring&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 