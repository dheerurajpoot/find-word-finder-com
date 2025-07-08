import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Among or Amung - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;among&quot; and &quot;amung&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmongVsAmungPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Among or Amung</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;among&quot; and &quot;amung&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amung</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amung&quot; is a misspelling. The correct spelling is &quot;among&quot; with an &quot;o&quot; after the &quot;m&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Among</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Among&quot; is the correct spelling. It means in the midst of or surrounded by.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Among (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In the midst of; surrounded by; in the company of; between or within a group.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She walked <strong>among</strong> the crowd.</li>
                  <li>• The secret was shared <strong>among</strong> friends.</li>
                  <li>• He was popular <strong>among</strong> his colleagues.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amung (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amung&quot; is a misspelling of &quot;among&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amung&quot; is not used in standard English.</li>
                  <li>• Always use <strong>among</strong> when referring to being in a group.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Among:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Amid</li>
                <li>• Between</li>
                <li>• Within</li>
                <li>• Surrounded by</li>
                <li>• In the midst of</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amung:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Among</strong> is spelled with an &quot;o&quot; after the &quot;m&quot;.</li>
            <li>• Used to indicate being in the midst of a group or collection.</li>
            <li>• Can be used with both people and things.</li>
            <li>• The word comes from Old English &quot;on gemang&quot; meaning &quot;in a crowd.&quot;</li>
            <li>• &quot;Amung&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amung&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amung&quot; is never correct. The proper spelling is always &quot;among.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;o&quot; after the &quot;m&quot; in &quot;among.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between among and between?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Among&quot; is used for three or more items, while &quot;between&quot; is typically used for two items.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can among be used with singular nouns?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;among&quot; can be used with singular collective nouns like &quot;among the crowd.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;among&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: among friends, among the best, and among other things.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;amung&quot; occurs because people forget the &quot;o&quot; in the middle.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Among</strong> is the correct spelling with an &quot;o&quot; after the &quot;m&quot;. It means in the midst of or surrounded by. The misspelling &quot;amung&quot; is never correct. Use &quot;among&quot; to indicate being in the midst of a group or collection.</p>
      </div>
    </div>
  )
} 