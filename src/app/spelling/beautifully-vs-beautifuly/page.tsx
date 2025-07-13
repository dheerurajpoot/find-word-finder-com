import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beautifully or Beautifuly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beautifully&quot; and &quot;beautifuly&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeautifullyVsBeautifulyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beautifully or Beautifuly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beautifully&quot; and &quot;beautifuly&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beautifuly</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beautifuly&quot; is a misspelling. The correct spelling is &quot;beautifully&quot; with &quot;ly&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beautifully</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beautifully&quot; is the correct spelling. It means in a beautiful manner or to a beautiful degree.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beautifully (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In a beautiful manner; to a beautiful degree; with beauty or grace.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She sang <strong>beautifully</strong> at the concert.</li>
                  <li>• The garden was <strong>beautifully</strong> maintained.</li>
                  <li>• He played the piano <strong>beautifully</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beautifuly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beautifuly&quot; is a misspelling of &quot;beautifully&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beautifuly&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beautifully</strong> when describing how something is done.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beautifully:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Gracefully</li>
                <li>• Elegantly</li>
                <li>• Exquisitely</li>
                <li>• Lovely</li>
                <li>• Perfectly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beautifuly:</h4>
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
          <li>• <strong>Beautifully</strong> is spelled with &quot;ly&quot; at the end, not &quot;y.&quot;</li>
          <li>• The word is formed by adding the suffix &quot;-ly&quot; to the adjective &quot;beautiful.&quot;</li>
          <li>• Used to describe how something is done or appears.</li>
          <li>• Can modify verbs, adjectives, or other adverbs.</li>
          <li>• &quot;Beautifuly&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beautifuly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beautifuly&quot; is never correct. The proper spelling is always &quot;beautifully.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;beautiful&quot; + &quot;ly&quot; - most adverbs are formed by adding &quot;-ly&quot; to adjectives.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beautiful and beautifully?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Beautiful&quot; is an adjective describing a quality, while &quot;beautifully&quot; is an adverb describing how something is done.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beautifully be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beautifully&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;beautifuly&quot; likely occurs because of confusion with the spelling of the base word &quot;beautiful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;beautifully&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beautifully written, beautifully decorated, beautifully crafted, and beautifully designed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beautifully</strong> is the correct spelling with &quot;ly&quot; at the end. It means in a beautiful manner or to a beautiful degree. The misspelling &quot;beautifuly&quot; is never correct. Use &quot;beautifully&quot; to describe how something is done or appears.</p>
      </div>
    </div>
  )
} 