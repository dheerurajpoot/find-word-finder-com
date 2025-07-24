import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'There or Their - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;there&quot; and &quot;their&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThereVsTheirPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">There or Their</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;there&quot; and &quot;their&quot;? Learn the difference, meaning, and how to use each properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: There (when you mean &quot;their&quot;)</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;There&quot; refers to a place or position, not possession. Using &quot;there&quot; when you mean &quot;their&quot; is a common mistake.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Their</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Their&quot; is the possessive form, used to show ownership by a group of people.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">There (adverb/pronoun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In, at, or to that place or position; used to introduce a sentence or clause.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The book is over <strong>there</strong>.</li>
                  <li>• <strong>There</strong> is a problem with the car.</li>
                  <li>• She went <strong>there</strong> yesterday.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Their (possessive adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Belonging to or associated with the people or things previously mentioned or easily identified.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• That is <strong>their</strong> house.</li>
                  <li>• The students finished <strong>their</strong> homework.</li>
                  <li>• I like <strong>their</strong> idea.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">There:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• In that place</li>
                <li>• At that location</li>
                <li>• Over there</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Their:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Belonging to them</li>
                <li>• Of theirs</li>
                <li>• Associated with them</li>
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
            <li>• <strong>There</strong> refers to a place or introduces a sentence; <strong>their</strong> shows possession.</li>
            <li>• If you can replace the word with &quot;belonging to them&quot;, use &quot;their&quot;.</li>
            <li>• Mixing these up is a very common mistake in English writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When should I use &quot;there&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;there&quot; to refer to a place or to introduce a sentence, as in &quot;there is a cat&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When should I use &quot;their&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;their&quot; to show possession, as in &quot;their car&quot; or &quot;their idea&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;there&quot; ever possessive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;there&quot; is never possessive. &quot;Their&quot; is the possessive form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How can I check if I&apos;m using the right word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Try replacing the word with &quot;belonging to them&quot;. If the sentence still makes sense, use &quot;their&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>There</strong> refers to a place or introduces a sentence, while <strong>their</strong> shows possession. If you can say &quot;belonging to them&quot;, use &quot;their&quot;. Don&apos;t mix them up!</p>
      </div>
    </div>
  )
} 