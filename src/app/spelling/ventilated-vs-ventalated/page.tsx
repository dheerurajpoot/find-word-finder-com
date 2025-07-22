import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ventilated or Ventalated - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ventilated&quot; and &quot;ventalated&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VentilatedVsVentalatedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ventilated or Ventalated</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ventilated&quot; and &quot;ventalated&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ventalated</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ventalated&quot; is a misspelling. The correct spelling is &quot;ventilated&quot; with an &quot;i&quot; after the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ventilated</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ventilated&quot; is the correct spelling. It means to allow fresh air to enter and move through a room, building, or space.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ventilated (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Adjective: having air flow or circulation. Verb: to allow air to move through.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The room was well <strong>ventilated</strong>.</li>
                  <li>• Please keep the windows open to <strong>ventilate</strong> the area.</li>
                  <li>• The building&apos;s design ensures proper <strong>ventilation</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ventalated:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ventalated&quot; is a misspelling of &quot;ventilated&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ventalated&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ventilated</strong> for the correct spelling.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ventilated:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Aerated</li>
                <li>• Aired</li>
                <li>• Breezy</li>
                <li>• Drafty</li>
                <li>• Open</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ventalated:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Ventilated</strong> is spelled with an &quot;i&quot; after the &quot;t&quot;.</li>
            <li>• &quot;Ventalated&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;ventilare&quot; meaning &quot;to fan&quot; or &quot;to winnow&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ventalated&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ventalated&quot; is never correct. The proper spelling is always &quot;ventilated&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;ventilated&quot; has an &quot;i&quot; after the &quot;t&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does ventilated mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Ventilated&quot; means to allow fresh air to enter and move through a space.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why is ventilation important?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Proper ventilation helps maintain air quality, remove odors, and reduce moisture and pollutants indoors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;ventilated&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ventilated&quot; is the past tense of the verb &quot;ventilate&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ventilated</strong> is the correct spelling, meaning to allow air to move through a space. The misspelling &quot;ventalated&quot; is never correct. Always use &quot;ventilated&quot; in your writing.</p>
      </div>
    </div>
  )
} 