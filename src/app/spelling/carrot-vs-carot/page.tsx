import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Carrot or Carot - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;carrot&quot; and &quot;carot&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CarrotVsCarotPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Carrot or Carot</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;carrot&quot; and &quot;carot&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carot</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carot&quot; is a misspelling. The correct spelling is &quot;carrot&quot; with two &quot;r&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Carrot</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Carrot&quot; is the correct spelling. It means an orange root vegetable.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Carrot (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An orange root vegetable with a sweet taste, often eaten raw or cooked.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>carrot</strong> was fresh and crunchy.</li>
                  <li>• She added <strong>carrots</strong> to the soup.</li>
                  <li>• The <strong>carrot</strong> cake was delicious.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carot (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carot&quot; is a misspelling of &quot;carrot&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carot&quot; is not used in standard English.</li>
                  <li>• Always use <strong>carrot</strong> when referring to the vegetable.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Carrot:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Root vegetable</li>
                <li>• Orange vegetable</li>
                <li>• Daucus carota</li>
                <li>• Garden carrot</li>
                <li>• Wild carrot</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carot:</h4>
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
            <li>• <strong>Carrot</strong> is spelled with two &quot;r&quot;s, not one.</li>
            <li>• The word comes from Greek &quot;karoton&quot; meaning carrot.</li>
            <li>• Can be used to refer to the vegetable or as a metaphor for incentives.</li>
            <li>• Often used in cooking, gardening, and nutrition contexts.</li>
            <li>• &quot;Carot&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carot&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carot&quot; is never correct. The proper spelling is always &quot;carrot.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;car-rot&quot; - the word has two &quot;r&quot;s like &quot;carry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between carrot and carrot stick?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to the same vegetable, but &quot;carrot stick&quot; specifically means a cut piece.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carot&quot; likely occurs because people forget the second &quot;r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;carrot&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: carrot cake, carrot juice, and carrot and stick approach.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can carrot be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrot&quot; is only used as a noun. The verb form would be &quot;to carrot&quot; (rare).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is carrot only used for the orange vegetable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrot&quot; can also refer to purple, white, or yellow varieties of the vegetable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word carrot?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Greek &quot;karoton&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Carrot</strong> is the correct spelling with two &quot;r&quot;s. It means an orange root vegetable with a sweet taste. The misspelling &quot;carot&quot; is never correct. Use &quot;carrot&quot; to refer to the vegetable in cooking, gardening, and nutrition contexts, or as a metaphor for incentives.</p>
      </div>
    </div>
  )
} 