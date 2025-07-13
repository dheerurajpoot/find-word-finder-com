import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bridge or Brige - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bridge&quot; and &quot;brige&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BridgeVsBrigePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bridge or Brige</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bridge&quot; and &quot;brige&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brige</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Brige&quot; is a misspelling. The correct spelling is &quot;bridge&quot; with &quot;d&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bridge</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bridge&quot; is the correct spelling. It refers to a structure spanning a gap or connecting two points.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bridge (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A structure spanning a gap or connecting two points; to connect or span.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>bridge</strong> crosses the river.</li>
                  <li>• Let&apos;s <strong>bridge</strong> the gap between us.</li>
                  <li>• The Golden Gate <strong>Bridge</strong> is famous.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Brige (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Brige&quot; is a misspelling of &quot;bridge&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Brige&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bridge</strong> when referring to a connecting structure.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bridge:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Span</li>
                <li>• Viaduct</li>
                <li>• Overpass</li>
                <li>• Connection</li>
                <li>• Link</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Brige:</h4>
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
            <li>• <strong>Bridge</strong> is spelled with &quot;d&quot;, not without it.</li>
            <li>• The word comes from Old English &quot;brycg&quot; meaning bridge.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in transportation, engineering, and metaphorical contexts.</li>
            <li>• &quot;Brige&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brige&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;brige&quot; is never correct. The proper spelling is always &quot;bridge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;br&quot; + &quot;idge&quot; - the word has a &quot;d&quot; like &quot;ridge&quot; or &quot;fridge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bridge and brig?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bridge&quot; refers to a structure spanning a gap, while &quot;brig&quot; is a type of sailing ship or a military prison.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bridge be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bridge&quot; can be used as a verb meaning to connect or span, as in &quot;bridge the gap.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bridge&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bridge the gap, burn your bridges, water under the bridge, and bridge loan.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bridge</strong> is the correct spelling with &quot;d&quot;. It refers to a structure spanning a gap or connecting two points. The misspelling &quot;brige&quot; is never correct. Use &quot;bridge&quot; when referring to physical structures, connections, or metaphorical spans.</p>
      </div>
    </div>
  )
} 