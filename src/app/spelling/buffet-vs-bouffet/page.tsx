import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Buffet or Bouffet - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;buffet&quot; and &quot;bouffet&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuffetVsBouffetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Buffet or Bouffet</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;buffet&quot; and &quot;bouffet&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bouffet</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bouffet&quot; is a misspelling. The correct spelling is &quot;buffet&quot; with &quot;u&quot; not &quot;ou&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Buffet</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Buffet&quot; is the correct spelling. It refers to a meal where guests serve themselves from various dishes.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Buffet (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A meal where guests serve themselves from various dishes displayed on a table; to strike repeatedly.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The hotel offers a breakfast <strong>buffet</strong>.</li>
                  <li>• The wind <strong>buffet</strong>ed the trees.</li>
                  <li>• We enjoyed the wedding <strong>buffet</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bouffet (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bouffet&quot; is a misspelling of &quot;buffet&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bouffet&quot; is not used in standard English.</li>
                  <li>• Always use <strong>buffet</strong> when referring to self-service meals.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Buffet:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Smorgasbord</li>
                <li>• Spread</li>
                <li>• Feast</li>
                <li>• Banquet</li>
                <li>• Spread</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bouffet:</h4>
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
            <li>• <strong>Buffet</strong> is spelled with &quot;u&quot;, not &quot;ou&quot; in the first syllable.</li>
            <li>• The word comes from French &quot;buffet&quot; meaning sideboard or counter.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in dining and hospitality contexts.</li>
            <li>• &quot;Bouffet&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bouffet&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bouffet&quot; is never correct. The proper spelling is always &quot;buffet.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;buf&quot; + &quot;fet&quot; - the word has &quot;u&quot; not &quot;ou&quot; like &quot;buffer&quot; or &quot;buff.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between buffet and smorgasbord?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;buffet&quot; is a general term for self-service meals, while &quot;smorgasbord&quot; specifically refers to a Swedish-style buffet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buffet be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;buffet&quot; can be used as a verb meaning to strike repeatedly, as in &quot;The wind buffeted the ship.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with French words that use &quot;ou&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;buffet&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: breakfast buffet, buffet dinner, buffet style, and buffet line.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Buffet</strong> is the correct spelling with &quot;u&quot; in the first syllable. It refers to a meal where guests serve themselves from various dishes. The misspelling &quot;bouffet&quot; is never correct. Use &quot;buffet&quot; when referring to self-service meals or the action of striking repeatedly.</p>
      </div>
    </div>
  )
} 