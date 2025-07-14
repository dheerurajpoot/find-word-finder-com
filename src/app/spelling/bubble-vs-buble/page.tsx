import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bubble or Buble - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bubble&quot; and &quot;buble&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BubbleVsBublePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Bubble or Buble
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Bubble&quot; or &quot;Buble&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buble</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Buble&quot; is a misspelling. The correct spelling has two &apos;b&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bubble</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Bubble&quot; is the correct spelling. It&apos;s a round pocket of air or gas.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Bubble</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Bubble</strong> (noun): A thin sphere of liquid enclosing air or another gas; a round pocket of air or gas in a liquid or solid; a temporary period of prosperity or success.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Children love to blow <strong>bubbles</strong> with soap solution.</li>
              <li>• The soda had many <strong>bubbles</strong> rising to the surface.</li>
              <li>• The housing market experienced a <strong>bubble</strong> in the early 2000s.</li>
              <li>• She popped the <strong>bubble</strong> wrap for fun.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Bubble</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Blob</li>
                <li>• Droplet</li>
                <li>• Sphere</li>
                <li>• Ball</li>
                <li>• Globule</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Foam</li>
                <li>• Fizz</li>
                <li>• Effervescence</li>
                <li>• Sparkle</li>
                <li>• Burst</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Bubble</strong> is spelled with two &apos;b&apos;s, not one.</li>
            <li>• The pronunciation is &quot;BUH-buhl&quot; (rhyming with &quot;trouble&quot;).</li>
            <li>• It&apos;s both a noun and a verb (to bubble).</li>
            <li>• Commonly used in science, economics, and everyday language.</li>
            <li>• The word comes from Middle English &quot;bobel&quot; meaning &quot;bubble.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buble&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;buble&quot; is never correct. The proper spelling is always &quot;bubble&quot; with two &apos;b&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bubble&quot; as having the same double &apos;b&apos; pattern as other words like &quot;babble,&quot; &quot;rabble,&quot; and &quot;pebble.&quot; The double &apos;b&apos; is the key to the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a bubble and a drop?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: A &quot;bubble&quot; is a pocket of air or gas surrounded by liquid, while a &quot;drop&quot; is a small amount of liquid that falls or hangs. Bubbles are hollow, while drops are solid liquid.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce bubble?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The pronunciation is &quot;BUH-buhl&quot; (rhyming with &quot;trouble&quot;). The first syllable is stressed, and the second syllable is unstressed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bubble be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Bubble&quot; is appropriate in all types of writing, including formal contexts. It&apos;s used in scientific, economic, and academic writing to describe various phenomena.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bubble&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: bubble bath, bubble gum, bubble wrap, economic bubble, housing bubble, and bubble up. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;buble&quot; because they might be thinking of the pronunciation or confusing it with other words. The double &apos;b&apos; can be easy to forget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bubble related to any other words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Bubble&quot; is related to words like &quot;bubbly&quot; (adjective meaning effervescent), &quot;bubblegum&quot; (chewing gum), and &quot;bubble bath&quot; (bath with soap bubbles). All share the same root meaning.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Bubble</strong> is the correct spelling with two &apos;b&apos;s. It&apos;s a round pocket of air or gas, commonly found in liquids. The misspelling &quot;buble&quot; is never correct. This word is used in science, economics, and everyday language and follows the same double &apos;b&apos; pattern as other English words.
        </p>
      </div>
    </div>
  )
} 