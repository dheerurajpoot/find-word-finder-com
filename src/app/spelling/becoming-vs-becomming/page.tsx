import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Becoming or Becomming - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;becoming&quot; and &quot;becomming&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BecomingVsBecommingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Becoming or Becomming</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;becoming&quot; and &quot;becomming&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Becomming</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Becomming&quot; is a misspelling. The correct spelling is &quot;becoming&quot; with one &quot;m&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Becoming</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Becoming&quot; is the correct spelling. It means beginning to be or growing to be.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Becoming (present participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Present participle of &quot;become&quot;; beginning to be or growing to be something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is <strong>becoming</strong> a doctor.</li>
                  <li>• The weather is <strong>becoming</strong> warmer.</li>
                  <li>• He is <strong>becoming</strong> more confident.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Becomming (present participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Becomming&quot; is a misspelling of &quot;becoming&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Becomming&quot; is not used in standard English.</li>
                  <li>• Always use <strong>becoming</strong> when describing ongoing transformation.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Becoming:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Growing into</li>
                <li>• Developing into</li>
                <li>• Turning into</li>
                <li>• Evolving into</li>
                <li>• Transforming into</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Becomming:</h4>
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
          <li>• <strong>Becoming</strong> is spelled with one &quot;m&quot;, not two.</li>
          <li>• The word is formed by adding &quot;-ing&quot; to the verb &quot;become.&quot;</li>
          <li>• Used to describe ongoing transformation or development.</li>
          <li>• Can be used as a present participle or gerund.</li>
          <li>• &quot;Becomming&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;becomming&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;becomming&quot; is never correct. The proper spelling is always &quot;becoming.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;become&quot; + &quot;ing&quot; - the base word &quot;become&quot; only has one &quot;m.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between becoming and turning into?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both describe transformation, but &quot;becoming&quot; suggests gradual change, while &quot;turning into&quot; suggests more immediate change.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can becoming be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;becoming&quot; can be used as a gerund (noun form) to describe the process of transformation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;becomming&quot; likely occurs because of confusion with words that have double &quot;m&quot; spellings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;becoming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: becoming aware, becoming clear, becoming popular, and becoming successful.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Becoming</strong> is the correct spelling with one &quot;m&quot;. It means beginning to be or growing to be something. The misspelling &quot;becomming&quot; is never correct. Use &quot;becoming&quot; to describe ongoing transformation or development.</p>
      </div>
    </div>
  )
} 