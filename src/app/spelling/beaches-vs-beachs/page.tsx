import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beaches or Beachs - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beaches&quot; and &quot;beachs&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeachesVsBeachsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beaches or Beachs</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beaches&quot; and &quot;beachs&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beachs</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beachs&quot; is a misspelling. The correct spelling is &quot;beaches&quot; with an &quot;e&quot; before the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beaches</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beaches&quot; is the correct spelling. It means sandy shores by the ocean.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beaches (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Sandy or pebbly shores by the ocean, lake, or river; plural of beach.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>beaches</strong> were crowded with tourists.</li>
                  <li>• We visited several <strong>beaches</strong> on our vacation.</li>
                  <li>• The <strong>beaches</strong> are beautiful at sunset.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beachs (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beachs&quot; is a misspelling of &quot;beaches&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beachs&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beaches</strong> when referring to sandy shores.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beaches:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Shores</li>
                <li>• Coasts</li>
                <li>• Seashores</li>
                <li>• Strands</li>
                <li>• Littorals</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beachs:</h4>
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
            <li>• <strong>Beaches</strong> is spelled with an &quot;e&quot; before the &quot;s&quot;, not &quot;beachs&quot;.</li>
            <li>• The word comes from &quot;beach&quot; + the plural suffix &quot;es&quot;.</li>
            <li>• Used to describe sandy shores by bodies of water.</li>
            <li>• Common in travel, tourism, and general writing.</li>
            <li>• &quot;Beachs&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beachs&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beachs&quot; is never correct. The proper spelling is always &quot;beaches.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;beach&quot; + &quot;es&quot; - the base word &quot;beach&quot; with the plural suffix &quot;es&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beaches and shores?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Beaches&quot; specifically refers to sandy or pebbly areas, while &quot;shores&quot; is more general and can include rocky areas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beaches be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beaches&quot; is very common in formal writing, especially in travel and environmental contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion about the &quot;e&quot; before the &quot;s&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;beaches&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: sandy beaches, private beaches, public beaches, and tropical beaches.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beaches</strong> is the correct spelling with an &quot;e&quot; before the &quot;s&quot;. It means sandy shores by the ocean, lake, or river. The misspelling &quot;beachs&quot; is never correct. Use &quot;beaches&quot; when referring to sandy shores or coastal areas.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/end-vs-end" className="text-blue-700 hover:text-blue-900 underline">End vs End</a></li>
            <li><a href="/spelling/enemy-vs-enemy" className="text-blue-700 hover:text-blue-900 underline">Enemy vs Enemy</a></li>
            <li><a href="/spelling/enjoy-vs-enjoy" className="text-blue-700 hover:text-blue-900 underline">Enjoy vs Enjoy</a></li>
            <li><a href="/spelling/enough-vs-enough" className="text-blue-700 hover:text-blue-900 underline">Enough vs Enough</a></li>
            <li><a href="/spelling/enter-vs-enter" className="text-blue-700 hover:text-blue-900 underline">Enter vs Enter</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/shores-vs-shores" className="text-purple-700 hover:text-purple-900 underline">Shores vs Shores</a></li>
            <li><a href="/spelling/coasts-vs-coasts" className="text-purple-700 hover:text-purple-900 underline">Coasts vs Coasts</a></li>
            <li><a href="/spelling/seashores-vs-seashores" className="text-purple-700 hover:text-purple-900 underline">Seashores vs Seashores</a></li>
            <li><a href="/spelling/strands-vs-strands" className="text-purple-700 hover:text-purple-900 underline">Strands vs Strands</a></li>
            <li><a href="/spelling/littorals-vs-littorals" className="text-purple-700 hover:text-purple-900 underline">Littorals vs Littorals</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/plural-forms" className="text-green-700 hover:text-green-900 underline">Plural Forms</a></li>
            <li><a href="/grammar/es-endings" className="text-green-700 hover:text-green-900 underline">Es Endings</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 