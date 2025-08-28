import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acreage or Acerage - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acreage&quot; and &quot;acerage&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcreageVsAceragePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acreage or Acerage</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acreage&quot; and &quot;acerage&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acerage</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acerage&quot; is a misspelling. The correct spelling is &quot;acreage&quot; with &quot;acre&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acreage</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acreage&quot; is the correct spelling. It refers to the area of land measured in acres.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acreage (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The area of land measured in acres; the total area of a piece of land.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The farm has 100 acres of <strong>acreage</strong>.</li>
                  <li>• The property&apos;s <strong>acreage</strong> is perfect for development.</li>
                  <li>• They purchased 50 acres of <strong>acreage</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acerage (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acerage&quot; is a misspelling of &quot;acreage&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acerage&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acreage</strong> when referring to land area.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acreage:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Land area</li>
                <li>• Property size</li>
                <li>• Land extent</li>
                <li>• Plot size</li>
                <li>• Land measurement</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acerage:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Acreage</strong> is spelled with &quot;acre&quot; at the beginning, not &quot;acer&quot;.</li>
          <li>• The word comes from &quot;acre&quot; + &quot;age&quot; suffix.</li>
          <li>• Used in real estate and agricultural contexts.</li>
          <li>• Specifically refers to land measured in acres.</li>
          <li>• &quot;Acerage&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acerage&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acerage&quot; is never correct. The proper spelling is always &quot;acreage.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;acre&quot; + &quot;age&quot; - like &quot;acre&quot; with &quot;age&quot; ending, not &quot;acer&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acreage and area?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Acreage&quot; specifically refers to land measured in acres, while &quot;area&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acreage be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acreage&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acerage&quot; likely occurs because of confusion about the spelling of the root word &quot;acre.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acreage&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: total acreage, large acreage, small acreage, acreage for sale, and acreage requirements.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acreage</strong> is the correct spelling with &quot;acre&quot; at the beginning. It refers to the area of land measured in acres. The misspelling &quot;acerage&quot; is never correct.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/against-vs-against" className="text-blue-700 hover:text-blue-900 underline">Against vs Against</a></li>
            <li><a href="/spelling/agency-vs-agency" className="text-blue-700 hover:text-blue-900 underline">Agency vs Agency</a></li>
            <li><a href="/spelling/agenda-vs-agenda" className="text-blue-700 hover:text-blue-900 underline">Agenda vs Agenda</a></li>
            <li><a href="/spelling/agent-vs-agent" className="text-blue-700 hover:text-blue-900 underline">Agent vs Agent</a></li>
            <li><a href="/spelling/aggressive-vs-agressive" className="text-blue-700 hover:text-blue-900 underline">Aggressive vs Agressive</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/land-vs-land" className="text-purple-700 hover:text-purple-900 underline">Land vs Land</a></li>
            <li><a href="/spelling/property-vs-property" className="text-purple-700 hover:text-purple-900 underline">Property vs Property</a></li>
            <li><a href="/spelling/area-vs-area" className="text-purple-700 hover:text-purple-900 underline">Area vs Area</a></li>
            <li><a href="/spelling/measurement-vs-measurement" className="text-purple-700 hover:text-purple-900 underline">Measurement vs Measurement</a></li>
            <li><a href="/spelling/real-estate-vs-real-estate" className="text-purple-700 hover:text-purple-900 underline">Real Estate vs Real Estate</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 