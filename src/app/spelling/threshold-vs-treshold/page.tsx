import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Threshold or Treshold - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;threshold&quot; and &quot;treshold&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThresholdVsTresholdPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Threshold or Treshold</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;threshold&quot; and &quot;treshold&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Treshold</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Treshold&quot; is a misspelling. The correct spelling is &quot;threshold&quot; with an &quot;h&quot; after the &quot;t.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Threshold</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Threshold&quot; is the correct spelling. It means a point at which something begins or changes.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Threshold (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A point at which something begins or changes; the entrance to a building or room.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The pain <strong>threshold</strong> varies from person to person.</li>
                  <li>• She crossed the <strong>threshold</strong> into adulthood.</li>
                  <li>• The company reached its profit <strong>threshold</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Treshold (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Treshold&quot; is a misspelling of &quot;threshold&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Treshold&quot; is not used in standard English.</li>
                  <li>• Always use <strong>threshold</strong> when referring to a point of change.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Threshold:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Limit</li>
                <li>• Boundary</li>
                <li>• Point</li>
                <li>• Level</li>
                <li>• Entrance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Treshold:</h4>
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
            <li>• <strong>Threshold</strong> is spelled with an &quot;h&quot; after the &quot;t.&quot;</li>
            <li>• It can refer to both physical entrances and figurative points of change.</li>
            <li>• &quot;Treshold&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þrescold&quot; meaning &quot;door-sill.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;treshold&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;treshold&quot; is never correct. The proper spelling is always &quot;threshold.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;threshold&quot; has an &quot;h&quot; after the &quot;t&quot; - think of it as &quot;thresh-hold.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;threshold&quot; and &quot;limit&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Threshold&quot; implies a point of change or beginning, while &quot;limit&quot; implies a maximum boundary.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;threshold&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;threshold&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;threshold&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;treshold&quot; often happens by omitting the &quot;h&quot; after the &quot;t.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;threshold&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: pain threshold, threshold of consciousness, threshold value, and threshold level.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;threshold&quot; always about change?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;threshold&quot; can also refer to the physical entrance of a building or room.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;threshold&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;threshold&quot; is only used as a noun.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Threshold</strong> is the correct spelling with an &quot;h&quot; after the &quot;t.&quot; It means a point at which something begins or changes. The misspelling &quot;treshold&quot; is never correct. Always use &quot;threshold&quot; when referring to points of change, limits, or entrances.</p>
      </div>
    </div>
  )
} 