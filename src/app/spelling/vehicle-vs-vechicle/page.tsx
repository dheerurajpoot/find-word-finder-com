import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vehicle or Vechicle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vehicle&quot; and &quot;vechicle&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VehicleVsVechiclePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vehicle or Vechicle</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vehicle&quot; and &quot;vechicle&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vechicle</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vechicle&quot; is a misspelling. The correct spelling is &quot;vehicle&quot; with &quot;h&quot; after the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vehicle</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vehicle&quot; is the correct spelling. It refers to a machine, usually with wheels and an engine, used for transporting people or goods.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vehicle (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A machine, usually with wheels and an engine, used for transporting people or goods.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>vehicle</strong> was parked outside the house.</li>
                  <li>• Bicycles and cars are types of <strong>vehicles</strong>.</li>
                  <li>• The company owns several delivery <strong>vehicles</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vechicle:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vechicle&quot; is a misspelling of &quot;vehicle&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vechicle&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vehicle</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vehicle:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Car</li>
                <li>• Automobile</li>
                <li>• Truck</li>
                <li>• Van</li>
                <li>• Conveyance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vechicle:</h4>
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
            <li>• <strong>Vehicle</strong> is spelled with &quot;h&quot; after the &quot;e&quot;.</li>
            <li>• &quot;Vechicle&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vehiculum&quot; meaning &quot;means of transport&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vechicle&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vechicle&quot; is never correct. The proper spelling is always &quot;vehicle&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vehicle&quot; has &quot;h&quot; after the &quot;e&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a vehicle?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A vehicle is a machine used for transporting people or goods, such as a car, truck, or bus.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;vehicle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;vechicle&quot; often happens by switching the order of &quot;h&quot; and &quot;i&quot;. Always use &quot;h&quot; after the &quot;e&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vehicle&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;vehicle&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vehicle</strong> is the correct spelling, referring to a means of transport. The misspelling &quot;vechicle&quot; is never correct. Always use &quot;vehicle&quot; in your writing.</p>
      </div>
    </div>
  )
} 