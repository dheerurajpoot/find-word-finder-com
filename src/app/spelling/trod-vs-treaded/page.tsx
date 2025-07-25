import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Trod or Treaded - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;trod&quot; and &quot;treaded&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TrodVsTreadedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Trod or Treaded</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;trod&quot; and &quot;treaded&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Treaded (as past tense of &quot;tread&quot;)</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Treaded&quot; is sometimes used, but the standard past tense of &quot;tread&quot; is &quot;trod&quot; in modern English.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Trod</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Trod&quot; is the correct past tense of &quot;tread&quot; (to walk or step on).</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Trod (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Simple past tense of &quot;tread&quot;; to have walked or stepped on something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He <strong>trod</strong> carefully on the icy path.</li>
                  <li>• They <strong>trod</strong> the same route every day.</li>
                  <li>• She <strong>trod</strong> on my foot by accident.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Treaded:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Sometimes used as a past tense, but &quot;trod&quot; is preferred. &quot;Treaded&quot; is correct only when referring to something with treads (e.g., &quot;treaded tires&quot;).</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• (Incorrect) He treaded on the grass. <span className="text-red-600">(should be &quot;trod&quot;)</span></li>
                  <li>• (Correct, for tires) The car has treaded tires.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Trod:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Walked</li>
                <li>• Stepped</li>
                <li>• Marched</li>
                <li>• Strode</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Treaded:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No synonyms as past tense of &quot;tread&quot;)</li>
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
            <li>• The correct past tense of &quot;tread&quot; is <strong>trod</strong>.</li>
            <li>• Use &quot;treaded&quot; only when referring to something with treads (e.g., &quot;treaded tires&quot;).</li>
            <li>• Always use standard verb forms in formal writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;treaded&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Only when referring to something with treads, like &quot;treaded tires&quot;. For the past tense of &quot;tread&quot;, use &quot;trod&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;trod&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Trod&quot; means walked or stepped on something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I use &quot;trod&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Example: &quot;She trod softly across the floor.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Use <strong>trod</strong> for the past tense of &quot;tread&quot;. Use <strong>treaded</strong> only for things with treads. Always double-check your verb forms for accuracy.</p>
      </div>
    </div>
  )
} 