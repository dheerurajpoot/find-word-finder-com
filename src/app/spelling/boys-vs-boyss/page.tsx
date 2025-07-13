import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Boys or Boyss - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boys&quot; and &quot;boyss&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BoysVsBoyssPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Boys or Boyss</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;boys&quot; and &quot;boyss&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Boyss</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Boyss&quot; is a misspelling. The correct spelling is &quot;boys&quot; with single &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Boys</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Boys&quot; is the correct spelling. It is the plural form of &quot;boy&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Boys (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The plural form of boy; multiple male children or young men.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>boys</strong> played in the park.</li>
                  <li>• Three <strong>boys</strong> joined the team.</li>
                  <li>• The <strong>boys</strong> were excited about the trip.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Boyss (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Boyss&quot; is a misspelling of &quot;boys&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Boyss&quot; is not used in standard English.</li>
                  <li>• Always use <strong>boys</strong> when referring to multiple male children.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Boys:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Lads</li>
                <li>• Youths</li>
                <li>• Young men</li>
                <li>• Children</li>
                <li>• Guys</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Boyss:</h4>
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
            <li>• <strong>Boys</strong> is spelled with single &quot;s&quot;, not double &quot;s&quot;.</li>
            <li>• The word follows the standard English plural rule: add &quot;-s&quot; to most nouns.</li>
            <li>• Used as a plural noun only.</li>
            <li>• Common in everyday language for referring to male children.</li>
            <li>• &quot;Boyss&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;boyss&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;boyss&quot; is never correct. The proper spelling is always &quot;boys.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;boy&quot; + &quot;s&quot; - most English nouns simply add &quot;-s&quot; for plural, like &quot;girls&quot; or &quot;toys.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between boys and children?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Boys&quot; specifically refers to male children, while &quot;children&quot; refers to young people of any gender.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can boys be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;boys&quot; is appropriate in both formal and informal contexts when referring to male children.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with words that have double consonants or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;boys&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: good old boys, boys will be boys, boys club, and boys and girls.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Boys</strong> is the correct spelling with single &quot;s&quot;. It is the plural form of &quot;boy&quot; and follows the standard English rule of adding &quot;-s&quot; to most nouns. The misspelling &quot;boyss&quot; is never correct. Use &quot;boys&quot; when referring to multiple male children or young men.</p>
      </div>
    </div>
  )
} 