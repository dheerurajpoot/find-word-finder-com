import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Altitude or Alltitude - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;altitude&quot; and &quot;alltitude&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AltitudeVsAlltitudePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Altitude or Alltitude</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;altitude&quot; and &quot;alltitude&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alltitude</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alltitude&quot; is a misspelling. The correct spelling is &quot;altitude&quot; with one &quot;l&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Altitude</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Altitude&quot; is the correct spelling. It means the height of an object or point above sea level.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Altitude (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The height of an object or point in relation to sea level or ground level.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The plane reached an <strong>altitude</strong> of 30,000 feet.</li>
                  <li>• Denver has a high <strong>altitude</strong> above sea level.</li>
                  <li>• The mountain has an <strong>altitude</strong> of 14,000 feet.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alltitude (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alltitude&quot; is a misspelling of &quot;altitude&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alltitude&quot; is not used in standard English.</li>
                  <li>• Always use <strong>altitude</strong> when referring to height.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Altitude:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Height</li>
                <li>• Elevation</li>
                <li>• Level</li>
                <li>• Highness</li>
                <li>• Loftiness</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alltitude:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Altitude</strong> is spelled with one &quot;l&quot; at the beginning, not two.</li>
            <li>• Commonly used in aviation, geography, and mountaineering.</li>
            <li>• Usually measured in feet or meters above sea level.</li>
            <li>• The word comes from Latin &quot;altitudo&quot; meaning height.</li>
            <li>• &quot;Alltitude&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alltitude&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alltitude&quot; is never correct. The proper spelling is always &quot;altitude.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;alt-itude&quot; - it has only one &quot;l&quot; like the word &quot;alt.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between altitude and elevation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are often used interchangeably, but altitude typically refers to height above sea level, while elevation can refer to height above any reference point.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;altitude&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: high altitude, cruising altitude, altitude sickness, and altitude training.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alltitude&quot; occurs because people think it should have two &quot;l&quot;s like the word &quot;all.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can altitude be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, altitude is used in aviation, geography, weather, and mountaineering contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is altitude always measured from sea level?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually, but it can also be measured from ground level or any other reference point depending on context.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can altitude be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;altitude&quot; is appropriate in both formal and informal writing, especially in technical contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Altitude</strong> is the correct spelling with one &quot;l&quot; at the beginning. It means the height of an object or point above sea level. The misspelling &quot;alltitude&quot; is never correct. Use &quot;altitude&quot; in aviation, geography, and technical contexts.</p>
      </div>
    </div>
  )
} 