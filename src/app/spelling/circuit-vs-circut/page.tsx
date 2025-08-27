import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Circuit or Circut - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;circuit&quot; and &quot;circut&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CircuitVsCircutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Circuit or Circut</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;circuit&quot; and &quot;circut&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Circut</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Circut&quot; is a misspelling. The correct spelling is &quot;circuit&quot; with an &quot;i&quot; after the &quot;c&quot; and before the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Circuit</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Circuit&quot; is the correct spelling. It refers to a closed path through which electricity flows, or a route, journey, or series of events.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Circuit (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A closed path through which an electric current flows or may flow. Also, a route or journey around something, or a series of events or places visited.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The light will not work if the <strong>circuit</strong> is broken.</li>
                  <li>• She ran the <strong>circuit</strong> of the park every morning.</li>
                  <li>• The judge traveled the court <strong>circuit</strong> in the region.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Circut (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Circut&quot; is a misspelling of &quot;circuit&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Circut&quot; is not used in standard English.</li>
                  <li>• Always use <strong>circuit</strong> when referring to electrical paths or routes.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Circuit:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Loop</li>
                <li>• Path</li>
                <li>• Route</li>
                <li>• Track</li>
                <li>• Tour</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Circut:</h4>
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
            <li>• <strong>Circuit</strong> is spelled with an &quot;i&quot; after the &quot;c&quot; and before the &quot;r&quot;.</li>
            <li>• Used in electronics, law, sports, and travel contexts.</li>
            <li>• The word comes from Latin &quot;circuitus&quot; meaning &quot;a going around&quot;.</li>
            <li>• &quot;Circut&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;circut&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;circut&quot; is never correct. The proper spelling is always &quot;circuit.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;i&quot; after the &quot;c&quot; and before the &quot;r&quot; in &quot;circuit&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;circuit&quot; mean in electronics?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In electronics, a &quot;circuit&quot; is a closed path that allows electricity to flow from one point to another.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other meanings for &quot;circuit&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;circuit&quot; can also refer to a route, a series of events, or a judicial district.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;circut&quot; likely occurs because the &quot;i&quot; is silent and the pronunciation can be confusing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;circuit&quot; be used in sports?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, in sports, a &quot;circuit&quot; can refer to a series of competitions or a route for racing.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Circuit</strong> is the correct spelling with an &quot;i&quot; after the &quot;c&quot; and before the &quot;r&quot;. It refers to a closed path, a route, or a series of events. The misspelling &quot;circut&quot; is never correct. Use &quot;circuit&quot; in all contexts.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/appreciate-vs-appreiciate" className="text-blue-700 hover:text-blue-900 underline">Appreciate vs Appreiciate</a></li>
            <li><a href="/spelling/acquire-vs-aquire" className="text-blue-700 hover:text-blue-900 underline">Acquire vs Aquire</a></li>
            <li><a href="/spelling/acquitted-vs-acquited" className="text-blue-700 hover:text-blue-900 underline">Acquitted vs Acquited</a></li>
            <li><a href="/spelling/acquisition-vs-aquisition" className="text-blue-700 hover:text-blue-900 underline">Acquisition vs Aquisition</a></li>
            <li><a href="/spelling/acquiescence-vs-acquiesence" className="text-blue-700 hover:text-blue-900 underline">Acquiescence vs Acquiesence</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/circuit-vs-circut" className="text-purple-700 hover:text-purple-900 underline">Circuit vs Circut</a></li>
            <li><a href="/spelling/circuit-vs-ciruit" className="text-purple-700 hover:text-purple-900 underline">Circuit vs Ciruit</a></li>
            <li><a href="/spelling/circuit-vs-circiut" className="text-purple-700 hover:text-purple-900 underline">Circuit vs Circiut</a></li>
            <li><a href="/spelling/circuit-vs-ciruit" className="text-purple-700 hover:text-purple-900 underline">Circuit vs Ciruit</a></li>
            <li><a href="/spelling/circuit-vs-circiut" className="text-purple-700 hover:text-purple-900 underline">Circuit vs Circiut</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/5th-grade-worksheets-parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech Worksheets</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
            <li><a href="/grammar/abstract-nouns" className="text-green-700 hover:text-green-900 underline">Abstract Nouns</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
