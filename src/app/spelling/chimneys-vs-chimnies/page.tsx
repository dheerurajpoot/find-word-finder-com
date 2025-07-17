import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chimneys vs Chimnies - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chimneys" and "chimnies". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chimneys vs chimnies, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chimneys vs Chimnies - Which is Correct?',
    description: 'Learn the correct spelling between "chimneys" and "chimnies". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChimneysVsChimniesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chimneys or Chimnies</h1>
      <div className="bg-gradient-to-r from-blue-500-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Chimneys&quot; or &quot;Chimnies&quot;, this plural noun and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chimnies</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chimneys.&quot; The correct plural form useseys&quot; at the end, not &quot;ies.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Using incorrect plural form</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chimneys</h3>
          <p className="text-lg md:text-xl text-green-800"><strong>Definition:</strong> Plural of chimney; vertical structures that provide ventilation for hot flue gases or smoke from boilers, stoves, furnaces, or fireplaces to the outside atmosphere.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun (plural)</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chimneys</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Flues</h3>
            <p className="text-lg text-blue-700">Structures for smoke and waste gases</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Smokestacks</h3>
            <p className="text-lg text-blue-700">Tall chimneys on factories or ships</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Vents</h3>
            <p className="text-lg text-blue-700">Openings for air or gas to escape</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Exhaust Systems</h3>
            <p className="text-lg text-blue-700">Systems for removing waste gases</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chimneys</span> need to be cleaned.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">chimnies</span> need to be cleaned.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;Smoke rose from the <span className="text-green-600 font-semibold">chimneys</span>.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Chimneys&quot; is pronounced as /ˈtʃɪmniz/</li>
          <li>• The word comes from Old French &quot;cheminee&quot; and Latin &quot;caminus</li>
          <li>• &quot;Chimneys is always plural; the singular is &quot;chimney</li>
          <li>• Remember: The plural form uses eys, not es</li>
          <li>• Commonly confused with words that use ies for plural</li>
        </ul>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q:Why do people misspell &quot;chimneys&quot; as &quot;chimnies&quot;?</h3>
            <p className="text-lg text-blue-800">This misspelling often occurs because people confuse the plural form with words that use iesfor plural (like bunnies&quot; or &quot;pennies&quot;). The correct plural form of chimney&quot; ischimneys with ys&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">What is the origin of the word &quot;chimneys&quot;?</h3>
            <p className="text-lg text-blue-800">A: The word &quot;chimneys&quot; comes from Old French &quot;cheminee&quot; and ultimately from Latin caminus, meaning &quot;furnace or earth.&quot; The plural form follows standard English pluralization rules.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q:Is &quot;chimneys ever singular?</h3>
            <p className="text-lg text-blue-800">A: No, &quot;chimneys is always plural. The singular form is &quot;chimney.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed"><strong>Chimneys</strong> is the correct spelling. It is the plural form of &quot;chimney&quot; and refers to multiple vertical structures that provide ventilation for smoke and gases. &quot;Chimnies isa misspelling that should be avoided.</p>
      </div>
    </div>
  )
} 