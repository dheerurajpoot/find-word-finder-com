import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bonfire vs Bondfire - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bonfire&quot; and &quot;bondfire&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bonfire, bondfire, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bonfire vs Bondfire - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bonfire&quot; and &quot;bondfire&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BonfireVsBondfirePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bonfire vs Bondfire</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bonfire</strong>. &quot;Bondfire&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bonfire (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bonfire&quot; means a large outdoor fire, often for celebration or burning waste.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Bondfire (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Bondfire&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bonfire</strong> (noun): A large outdoor fire, especially one built for celebration or to burn waste materials.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We gathered around the <em>bonfire</em> to celebrate the summer solstice.</li>
            <li>The <em>bonfire</em> crackled and popped as we roasted marshmallows.</li>
            <li>They built a <em>bonfire</em> to burn the fallen leaves.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bonfire:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Campfire</li>
              <li>Blaze</li>
              <li>Conflagration</li>
              <li>Inferno</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Fire</li>
              <li>Flame</li>
              <li>Combustion</li>
              <li>Pyre</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bonfire&quot; comes from the Middle English &quot;bone fire&quot; (fire for burning bones).</li>
          <li>The word has been used since the 15th century.</li>
          <li>&quot;Bondfire&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bonfire&quot; as &quot;bondfire&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;bon&quot; and &quot;bond&quot; sound similar, people sometimes add the &quot;d&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;bondfire&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;bondfire&quot; is never correct in standard English. Always use &quot;bonfire&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bon&quot; (good in French) + &quot;fire&quot; = &quot;bonfire&quot;. No &quot;d&quot; is needed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bonfire</strong> is the correct spelling with &quot;n&quot;: bon-fire. It means a large outdoor fire. The misspelling &quot;bondfire&quot; is never correct. Always use &quot;bonfire&quot; when referring to outdoor fires.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/their-vs-thier" className="text-blue-700 hover:text-blue-900 underline">Their vs Thier</a></li>
            <li><a href="/spelling/although-vs-allthough" className="text-blue-700 hover:text-blue-900 underline">Although vs Allthough</a></li>
            <li><a href="/spelling/cherry-vs-chery" className="text-blue-700 hover:text-blue-900 underline">Cherry vs Chery</a></li>
            <li><a href="/spelling/uniform-vs-unaform" className="text-blue-700 hover:text-blue-900 underline">Uniform vs Unaform</a></li>
            <li><a href="/spelling/berries-vs-berrys" className="text-blue-700 hover:text-blue-900 underline">Berries vs Berrys</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/vigilance-vs-vigilence" className="text-purple-700 hover:text-purple-900 underline">Vigilance vs Vigilence</a></li>
            <li><a href="/spelling/told-vs-telled" className="text-purple-700 hover:text-purple-900 underline">Told vs Telled</a></li>
            <li><a href="/spelling/affect-vs-effect" className="text-purple-700 hover:text-purple-900 underline">Affect vs Effect</a></li>
            <li><a href="/spelling/withhold-vs-withold" className="text-purple-700 hover:text-purple-900 underline">Withhold vs Withold</a></li>
            <li><a href="/spelling/biscuit-vs-buiscuit" className="text-purple-700 hover:text-purple-900 underline">Biscuit vs Buiscuit</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 