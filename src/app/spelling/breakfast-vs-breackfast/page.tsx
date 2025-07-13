import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Breakfast or Breackfast - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;breakfast&quot; and &quot;breackfast&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BreakfastVsBreackfastPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Breakfast or Breackfast</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;breakfast&quot; and &quot;breackfast&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Breackfast</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Breackfast&quot; is a misspelling. The correct spelling is &quot;breakfast&quot; with &quot;ea&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Breakfast</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Breakfast&quot; is the correct spelling. It refers to the first meal of the day.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Breakfast (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The first meal of the day, typically eaten in the morning; to eat breakfast.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I had <strong>breakfast</strong> at 8 AM.</li>
                  <li>• Let&apos;s <strong>breakfast</strong> together.</li>
                  <li>• The hotel serves continental <strong>breakfast</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Breackfast (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Breackfast&quot; is a misspelling of &quot;breakfast&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Breackfast&quot; is not used in standard English.</li>
                  <li>• Always use <strong>breakfast</strong> when referring to the morning meal.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Breakfast:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Morning meal</li>
                <li>• First meal</li>
                <li>• Morning repast</li>
                <li>• Early meal</li>
                <li>• Dawn meal</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Breackfast:</h4>
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
            <li>• <strong>Breakfast</strong> is spelled with &quot;ea&quot;, not &quot;ea&quot; + &quot;ck&quot;.</li>
            <li>• The word comes from &quot;break&quot; + &quot;fast&quot; (breaking the overnight fast).</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in everyday language for morning meals.</li>
            <li>• &quot;Breackfast&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;breackfast&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;breackfast&quot; is never correct. The proper spelling is always &quot;breakfast.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;break&quot; + &quot;fast&quot; - you break your overnight fast with breakfast.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between breakfast and brunch?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Breakfast&quot; is the first meal of the day, while &quot;brunch&quot; is a combination of breakfast and lunch, typically eaten later.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can breakfast be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;breakfast&quot; can be used as a verb meaning to eat breakfast, as in &quot;We breakfasted at the hotel.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with words that have &quot;ck&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;breakfast&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: continental breakfast, breakfast in bed, breakfast cereal, and breakfast meeting.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Breakfast</strong> is the correct spelling with &quot;ea&quot;. It refers to the first meal of the day, literally breaking the overnight fast. The misspelling &quot;breackfast&quot; is never correct. Use &quot;breakfast&quot; when referring to the morning meal or the action of eating breakfast.</p>
      </div>
    </div>
  )
} 