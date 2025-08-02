import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tennessee or Tenneesee - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Tennessee&quot; and &quot;Tenneesee&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TennesseeVsTenneeseePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tennessee or Tenneesee</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Tennessee&quot; and &quot;Tenneesee&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tenneesee</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tenneesee&quot; is a misspelling. The correct spelling is &quot;Tennessee&quot; with double &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tennessee</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tennessee&quot; is the correct spelling. It is a state in the southeastern United States.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tennessee (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A state in the southeastern United States, bordered by Kentucky, Virginia, North Carolina, Georgia, Alabama, Mississippi, Arkansas, and Missouri.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Nashville is the capital of <strong>Tennessee</strong>.</li>
                  <li>• <strong>Tennessee</strong> is known for country music.</li>
                  <li>• The Great Smoky Mountains are in <strong>Tennessee</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tenneesee (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tenneesee&quot; is a misspelling of &quot;Tennessee&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tenneesee&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Tennessee</strong> when referring to the state.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tennessee:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• TN (abbreviation)</li>
                <li>• Volunteer State</li>
                <li>• Big Bend State</li>
                <li>• Mother of Southwestern Statesmen</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tenneesee:</h4>
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
            <li>• <strong>Tennessee</strong> is spelled with double &quot;e&quot; at the end: Ten-nes-see.</li>
            <li>• It is a proper noun and should always be capitalized.</li>
            <li>• &quot;Tenneesee&quot; is never correct in any context.</li>
            <li>• The name comes from the Cherokee village &quot;Tanasi.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Tenneesee&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Tenneesee&quot; is never correct. The proper spelling is always &quot;Tennessee.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;Tennessee&quot; ends with double &quot;e&quot; - think of it as &quot;Ten-nes-see.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the capital of Tennessee?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Nashville is the capital of Tennessee.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;Tennessee&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;Tennessee&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;Tennessee&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;Tenneesee&quot; often happens by adding an extra &quot;e&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some famous things about Tennessee?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Tennessee is known for country music, the Great Smoky Mountains, Memphis blues, and Jack Daniel&apos;s whiskey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is Tennessee always capitalized?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;Tennessee&quot; is a proper noun and should always be capitalized.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the abbreviation for Tennessee?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The official abbreviation for Tennessee is TN.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tennessee</strong> is the correct spelling with double &quot;e&quot; at the end: Ten-nes-see. It is a state in the southeastern United States and should always be capitalized as a proper noun. The misspelling &quot;Tenneesee&quot; is never correct. Always use &quot;Tennessee&quot; when referring to the state, its cities, or anything related to it.</p>
      </div>
    </div>
  )
} 