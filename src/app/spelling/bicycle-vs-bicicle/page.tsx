import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bicycle vs Bicicle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bicycle&quot; and &quot;bicicle&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bicycle, bicicle, spelling, correct spelling, word comparison, English spelling, vehicle, transportation',
  openGraph: {
    title: 'Bicycle vs Bicicle - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bicycle&quot; and &quot;bicicle&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BicycleVsBiciclePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bicycle vs Bicicle</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this popular two-wheeled vehicle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bicicle
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Bicicle&quot; is a misspelling of the word &quot;bicycle.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I ride my bicicle to work</li>
              <li>• The bicicle shop is closed</li>
              <li>• She bought a new bicicle</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bicycle
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bicycle&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I ride my bicycle to work</li>
              <li>• The bicycle shop is closed</li>
              <li>• She bought a new bicycle</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bicycle</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bicycle</strong> (noun): A vehicle with two wheels in tandem, typically propelled by pedals connected to the rear wheel by a chain, and having handlebars for steering and a saddlelike seat.
          </p>
          <p>
            <strong>Bicycle</strong> (verb): To ride or travel on a bicycle.
          </p>
          <p>
            A human-powered vehicle used for transportation, recreation, and sport, consisting of a frame, two wheels, pedals, and handlebars.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bicycle</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Bike</li>
              <li>• Cycle</li>
              <li>• Two-wheeler</li>
              <li>• Pushbike</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Velocipede</li>
              <li>• Pedal cycle</li>
              <li>• Road bike</li>
              <li>• Mountain bike</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bicycle&quot; is always spelled with &quot;cy&quot; in the middle</li>
          <li>• The word comes from French &quot;bicyclette&quot; and Latin &quot;bi-&quot; (two) + &quot;kyklos&quot; (circle)</li>
          <li>• The pronunciation is /ˈbaɪsɪkəl/ (BY-si-kəl)</li>
          <li>• &quot;Bicicle&quot; is a common misspelling but is never correct</li>
          <li>• The &quot;cy&quot; spelling follows the Greek root &quot;kyklos&quot; meaning wheel</li>
          <li>• This spelling pattern is consistent with other words like &quot;cycle,&quot; &quot;recycle,&quot; etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;bicicle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people confuse the &quot;cy&quot; sound with &quot;ci&quot;. The correct spelling follows the Greek root &quot;kyklos&quot; which gives us the &quot;cy&quot; spelling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bicicle&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bicicle&quot; is always incorrect. Always use &quot;bicycle&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bicycle&quot; and &quot;bike&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bike&quot; is a shortened, informal version of &quot;bicycle.&quot; Both refer to the same vehicle, but &quot;bicycle&quot; is more formal and complete.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bi&quot; (two) + &quot;cycle&quot; (wheel). The &quot;cy&quot; in &quot;cycle&quot; comes from the Greek word for wheel, so &quot;bicycle&quot; means &quot;two wheels.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bicycle</strong> is the correct spelling of this word. The incorrect spelling &quot;bicicle&quot; should never be used.
          </p>
          <p>
            Remember: Bicycle = Bi (two) + cycle (wheel). The &quot;cy&quot; spelling comes from the Greek root &quot;kyklos&quot; meaning wheel, which is why we spell it &quot;bicycle&quot; and not &quot;bicicle.&quot;
          </p>
        </div>
      </div>
    </div>
  )
} 