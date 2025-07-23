import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vacuum or Vacum - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vacuum&quot; and &quot;vacum&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VacuumVsVacumPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vacuum or Vacum</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vacuum&quot; and &quot;vacum&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vacum</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vacum&quot; is a misspelling. The correct spelling is &quot;vacuum&quot; with a double &quot;u&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vacuum</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vacuum&quot; is the correct spelling. It refers to a space entirely devoid of matter or a device used for cleaning by suction.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vacuum (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A space entirely devoid of matter; a device that cleans by suction. As a verb, to clean with a vacuum cleaner.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The scientist created a <strong>vacuum</strong> in the chamber.</li>
                  <li>• Please <strong>vacuum</strong> the carpet.</li>
                  <li>• The <strong>vacuum</strong> cleaner is in the closet.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vacum:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vacum&quot; is a misspelling of &quot;vacuum&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vacum&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vacuum</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vacuum:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Void</li>
                <li>• Emptiness</li>
                <li>• Suction cleaner</li>
                <li>• Cleaner</li>
                <li>• Space</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vacum:</h4>
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
            <li>• <strong>Vacuum</strong> is spelled with a double &quot;u&quot;.</li>
            <li>• &quot;Vacum&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vacuus&quot; meaning &quot;empty&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vacum&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vacum&quot; is never correct. The proper spelling is always &quot;vacuum&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vacuum&quot; has two &quot;u&quot;s in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does vacuum mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Vacuum&quot; means a space devoid of matter or a device for cleaning by suction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vacuum&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vacum&quot; often happens by omitting one &quot;u&quot;. Always use two &quot;u&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vacuum&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vacuum&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vacuum</strong> is the correct spelling, meaning a space devoid of matter or a cleaning device. The misspelling &quot;vacum&quot; is never correct. Always use &quot;vacuum&quot; in your writing.</p>
      </div>
    </div>
  )
} 