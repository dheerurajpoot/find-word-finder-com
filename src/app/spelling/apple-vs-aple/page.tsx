import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apple or Aple - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apple&quot; and &quot;aple&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppleVsAplePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apple or Aple</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apple&quot; and &quot;aple&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aple</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aple&quot; is a misspelling. The correct spelling is &quot;apple&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apple</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apple&quot; is the correct spelling. It means a round fruit with red, yellow, or green skin and white flesh.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apple (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A round fruit with red, yellow, or green skin and white flesh; the tree that bears this fruit.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She ate a red <strong>apple</strong> for lunch.</li>
                  <li>• The <strong>apple</strong> tree in our yard produces sweet fruit.</li>
                  <li>• An <strong>apple</strong> a day keeps the doctor away.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aple (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aple&quot; is a misspelling of &quot;apple&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aple&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apple</strong> when referring to the fruit.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apple:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Fruit</li>
                <li>• Pomme (French)</li>
                <li>• Malus (scientific)</li>
                <li>• Orchard fruit</li>
                <li>• Tree fruit</li>
                <li>• Pome</li>
                <li>• Crabapple (wild variety)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aple:</h4>
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
            <li>• <strong>Apple</strong> is spelled with two &quot;p&quot;s in the middle.</li>
            <li>• The word comes from Old English &quot;æppel&quot; meaning fruit.</li>
            <li>• One of the most common fruits in the world.</li>
            <li>• Used in many idioms and expressions.</li>
            <li>• &quot;Aple&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aple&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aple&quot; is never correct. The proper spelling is always &quot;apple.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;app&quot; + &quot;le&quot; - apple is a common fruit that starts with &quot;app.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apple and other fruits?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Apple is a specific type of fruit with a round shape, typically red, yellow, or green skin, and white flesh.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apple be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apple&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aple&quot; likely occurs because of confusion about the double &quot;p&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apple&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: apple pie, apple cider, apple of my eye, and Big Apple (New York).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apple always about the fruit?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Primarily yes, but apple can also refer to the tree, or be used in company names like Apple Inc.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apple be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apple&quot; is only a noun. The verb form would be &quot;to eat&quot; or &quot;to pick&quot; apples.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apple</strong> is the correct spelling with two &quot;p&quot;s in the middle. It means a round fruit with red, yellow, or green skin and white flesh. The misspelling &quot;aple&quot; is never correct. Use &quot;apple&quot; when referring to the popular fruit or the tree that bears it.</p>
      </div>
    </div>
  )
} 