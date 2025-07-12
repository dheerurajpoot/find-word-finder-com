import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Backwards or Backwords - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;backwards&quot; and &quot;backwords&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BackwardsVsBackwordsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Backwards or Backwords</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;backwards&quot; and &quot;backwords&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Backwords</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Backwords&quot; is a misspelling. The correct spelling is &quot;backwards&quot; with a &quot;d&quot; before the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Backwards</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Backwards&quot; is the correct spelling. It means in the opposite direction or toward the back.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Backwards (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In the opposite direction; toward the back; in reverse order.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He walked <strong>backwards</strong> down the stairs.</li>
                  <li>• Count <strong>backwards</strong> from ten to one.</li>
                  <li>• The car moved <strong>backwards</strong> slowly.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Backwords (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Backwords&quot; is a misspelling of &quot;backwards&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Backwords&quot; is not used in standard English.</li>
                  <li>• Always use <strong>backwards</strong> when referring to reverse direction.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Backwards:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Backward</li>
                <li>• In reverse</li>
                <li>• Retrograde</li>
                <li>• Back</li>
                <li>• Behind</li>
                <li>• Rearward</li>
                <li>• Inverted</li>
                <li>• Reversed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Backwords:</h4>
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
          <li>• <strong>Backwards</strong> is spelled with a &quot;d&quot; before the &quot;s&quot;, not &quot;backwords.&quot;</li>
          <li>• The word is a compound of &quot;back&quot; plus the suffix &quot;-wards&quot; meaning direction.</li>
          <li>• Can be used both literally (physical direction) and figuratively (reverse order).</li>
          <li>• Commonly used in everyday conversation and formal writing.</li>
          <li>• &quot;Backwords&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;backwords&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;backwords&quot; is never correct. The proper spelling is always &quot;backwards&quot; with a &quot;d&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;back-wards&quot; - the word &quot;back&quot; plus the suffix &quot;-wards&quot; meaning direction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between backwards and backward?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both are correct, but &quot;backwards&quot; is more common in British English, while &quot;backward&quot; is preferred in American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can backwards be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;backwards&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;backwords&quot; likely occurs because of confusion with the word &quot;words&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;backwards&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: backwards and forwards, backwards compatibility, backwards thinking, and backwards step.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is backwards always about physical direction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;backwards&quot; can refer to physical direction, reverse order, or going against progress.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the opposite of backwards?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The opposite of &quot;backwards&quot; is &quot;forwards&quot; or &quot;forward&quot; - meaning in the direction ahead.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Backwards</strong> is the correct spelling with a &quot;d&quot; before the &quot;s&quot;. It means in the opposite direction or toward the back. The misspelling &quot;backwords&quot; is never correct. Use &quot;backwards&quot; to describe reverse direction, order, or movement.</p>
      </div>
    </div>
  )
} 