import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Boycott or Boycot - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boycott&quot; and &quot;boycot&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BoycottVsBoycotPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Boycott or Boycot</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;boycott&quot; and &quot;boycot&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Boycot</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Boycot&quot; is a misspelling. The correct spelling is &quot;boycott&quot; with double &quot;t&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Boycott</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Boycott&quot; is the correct spelling. It refers to withdrawing from commercial or social relations as a protest.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Boycott (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To withdraw from commercial or social relations as a protest; an act of boycotting.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They decided to <strong>boycott</strong> the company.</li>
                  <li>• The <strong>boycott</strong> lasted for months.</li>
                  <li>• Students organized a <strong>boycott</strong> of the cafeteria.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Boycot (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Boycot&quot; is a misspelling of &quot;boycott&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Boycot&quot; is not used in standard English.</li>
                  <li>• Always use <strong>boycott</strong> when referring to protests.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Boycott:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Protest</li>
                <li>• Reject</li>
                <li>• Avoid</li>
                <li>• Shun</li>
                <li>• Ostracize</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Boycot:</h4>
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
            <li>• <strong>Boycott</strong> is spelled with double &quot;t&quot; at the end, not single &quot;t&quot;.</li>
            <li>• The word comes from Captain Charles Boycott, an Irish land agent.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in political and social protest contexts.</li>
            <li>• &quot;Boycot&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;boycot&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;boycot&quot; is never correct. The proper spelling is always &quot;boycott.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;boy&quot; + &quot;cott&quot; - the word has double &quot;t&quot; at the end like &quot;cottage&quot; or &quot;Scott.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between boycott and protest?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;boycott&quot; is a specific type of protest that involves refusing to buy or use something, while &quot;protest&quot; is a broader term.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can boycott be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;boycott&quot; can be used as a noun meaning the act of boycotting, as in &quot;The boycott was successful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with words that have single &quot;t&quot; instead of double &quot;t.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;boycott&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: consumer boycott, boycott campaign, economic boycott, and boycott movement.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Boycott</strong> is the correct spelling with double &quot;t&quot; at the end. It refers to withdrawing from commercial or social relations as a protest. The misspelling &quot;boycot&quot; is never correct. Use &quot;boycott&quot; when referring to acts of protest or the action of refusing to participate in something.</p>
      </div>
    </div>
  )
} 