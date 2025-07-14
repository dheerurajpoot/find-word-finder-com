import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bicycle or Bycicle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bicycle&quot; and &quot;bycicle&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BicycleVsByciclePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bicycle or Bycicle</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bicycle&quot; and &quot;bycicle&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bycicle</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bycicle&quot; is a misspelling. The correct spelling is &quot;bicycle&quot; with &quot;bi&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bicycle</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bicycle&quot; is the correct spelling. It is a two-wheeled vehicle propelled by pedals.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bicycle (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A two-wheeled vehicle propelled by pedals, typically having a metal frame, rubber tires, and handlebars for steering.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I ride my <strong>bicycle</strong> to work every day.</li>
                  <li>• The children learned to ride <strong>bicycles</strong> in the park.</li>
                  <li>• She bought a new <strong>bicycle</strong> for her birthday.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bycicle (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bycicle&quot; is a misspelling of &quot;bicycle&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bycicle&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bicycle</strong> when referring to the two-wheeled vehicle.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bicycle:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Bike</li>
                <li>• Cycle</li>
                <li>• Two-wheeler</li>
                <li>• Pushbike</li>
                <li>• Velocipede</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bycicle:</h4>
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
            <li>• <strong>Bicycle</strong> is spelled with &quot;bi&quot; at the beginning, meaning &quot;two.&quot;</li>
            <li>• The word comes from French &quot;bicyclette&quot; meaning little bicycle.</li>
            <li>• &quot;Bi&quot; prefix indicates two wheels, &quot;cycle&quot; refers to circular motion.</li>
            <li>• Used in both formal and informal contexts.</li>
            <li>• &quot;Bycicle&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bycicle&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bycicle&quot; is never correct. The proper spelling is always &quot;bicycle.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bi-cycle&quot; - &quot;bi&quot; means two, and &quot;cycle&quot; refers to the wheels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of bicycle?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;bicycles&quot; - just add an &quot;s&quot; to the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different types of bicycles?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common types include road bikes, mountain bikes, hybrid bikes, and electric bicycles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bycicle&quot; likely occurs because of pronunciation patterns or confusion about the &quot;bi&quot; prefix.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bicycle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bicycle lane, bicycle rack, bicycle helmet, and bicycle pump.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bicycle be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bicycle&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bicycle and bike?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bicycle&quot; is the full word, while &quot;bike&quot; is the informal abbreviation. Both refer to the same vehicle.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bicycle</strong> is the correct spelling with &quot;bi&quot; at the beginning. It is a two-wheeled vehicle propelled by pedals. The misspelling &quot;bycicle&quot; is never correct. Think of it as &quot;bi-cycle&quot; to remember the correct spelling.</p>
      </div>
    </div>
  )
} 