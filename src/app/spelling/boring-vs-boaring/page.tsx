import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boring vs Boaring - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boring&quot; and &quot;boaring&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'boring, boaring, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Boring vs Boaring - Which is Correct?',
    description: 'Learn the correct spelling between &quot;boring&quot; and &quot;boaring&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BoringVsBoaringPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Boring vs Boaring</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling for something uninteresting is <strong>boring</strong>. &quot;Boaring&quot; is a misspelling unless referring to wild pigs (boars).
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Boring (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Boring&quot; means not interesting, dull, or tedious. It is the present participle of &quot;bore&quot; (to make someone feel uninterested).
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Boaring (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Boaring&quot; is a misspelling unless you are talking about wild pigs (boars). For the meaning &quot;not interesting,&quot; always use &quot;boring&quot;.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Boring</strong> (adjective): Not interesting; dull or tedious.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The lecture was so <em>boring</em> that several students fell asleep.</li>
            <li>He found the movie <em>boring</em> and left early.</li>
            <li>Doing the same thing every day can become <em>boring</em>.</li>
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
              <li>Uninteresting</li>
              <li>Monotonous</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Repetitive</li>
              <li>Wearisome</li>
              <li>Uninspiring</li>
              <li>Stale</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Boring&quot; is the correct spelling for something dull or uninteresting.</li>
          <li>&quot;Boaring&quot; is only correct if you are talking about wild pigs (boars).</li>
          <li>Remember: &quot;Bore&quot; + &quot;ing&quot; = &quot;boring&quot;.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;boring&quot; as &quot;boaring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;boar&quot; and &quot;bore&quot; sound the same, people sometimes confuse the spelling when writing the adjective for &quot;not interesting&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;boaring&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">Only if you are talking about wild pigs (boars). For the meaning &quot;not interesting,&quot; use &quot;boring&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bore&quot; (to make someone uninterested) + &quot;ing&quot; = &quot;boring&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Boring</strong> is the correct spelling for something uninteresting or dull. &quot;Boaring&quot; is a misspelling unless you are referring to wild pigs. Always use &quot;boring&quot; for the adjective meaning &quot;not interesting&quot;.
        </p>
      </div>
    </div>
  )
} 