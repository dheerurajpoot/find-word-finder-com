import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chimney vs Chimny - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chimney" and "chimny". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chimney vs chimny, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chimney vs Chimny - Which is Correct?',
    description: 'Learn the correct spelling between "chimney" and "chimny". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChimneyVsChimnyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5 font-extrabold mb-4 text-gray-900">Chimney or Chimny</h1>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4 font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Chimney&quot; or &quot;Chimny&quot;, this architectural structure and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2 font-bold text-red-900 flex items-center">❌ Incorrect: Chimny</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chimney.&quot; The correct spelling includes thee&quot; before the y.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Omitting the e in the word</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2 font-bold text-green-900 flex items-center">✅ Correct: Chimney</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> A vertical structure that provides ventilation for hot flue gases or smoke from a boiler, stove, furnace, or fireplace to the outside atmosphere.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2 font-bold mb-4 text-blue-900">Synonyms for Chimney</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Flue</h3>
            <p className="text-lg text-blue-700">duct for smoke and waste gases</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">K</h3>
            <p className="text-lg text-blue-700">A tall chimney on a factory or ship</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Vent</h3>
            <p className="text-lg text-blue-700">An opening for air or gas to escape</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">T</h3>
            <p className="text-lg text-blue-700">ystem for removing waste gases</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2 font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;Smoke rose from the <span className="text-green-600 font-semibold">chimney</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;Smoke rose from the <span className="text-red-600 font-semibold">chimny</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chimney</span> needs to be cleaned.&quot;</p>
          </div>
        </div>
      </div>

           <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Chimney&quot; is pronounced as /ˈtʃɪmni/</li>
          <li>• The word comes from Old French chemineeand Latin &quot;caminus</li>
          <li>• Chimneys are essential for proper ventilation in buildings</li>
          <li>• Remember: Chimney includes thee&quot; before they</li>
          <li>• The word can also refer to a narrow cleft in a cliff face</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2 font-bold mb-60 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Why do people misspell &quot;chimney&quot; as &quot;chimny&quot;?</h3>
            <p className="text-lg text-blue-800">This misspelling often occurs because the &quot;e&quot; sound is subtle in pronunciation, leading to its omission in writing. Fast typing or unfamiliarity with the word can also cause this error.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">What is the origin of the word &quot;chimney&quot;?</h3>
            <p className="text-lg text-blue-800">A: The word &quot;chimney&quot; comes from Old French &quot;cheminee&quot; and ultimately from Latin caminus, meaningfurnace or earth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Why are chimneys important?</h3>
            <p className="text-lg text-blue-800">Chimneys are essential for proper ventilation, removing smoke and harmful gases from buildings, and preventing carbon monoxide poisoning.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2 font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed"><strong>Chimney</strong> is the correct spelling. It refers to a vertical structure that provides ventilation for smoke and gases from fires or heating systems.Chimny isa misspelling that should be avoided.</p>
      </div>
    </div>
  )
} 