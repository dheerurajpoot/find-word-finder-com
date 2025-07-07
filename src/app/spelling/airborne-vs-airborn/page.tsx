import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Airborne vs Airborn - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;airborne&quot; and &quot;airborn&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AirborneVsAirbornPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Airborne vs Airborn</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;airborne&quot; or &quot;airborn&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Airborn</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Airborn&quot; is a common misspelling. The correct spelling is &quot;airborne&quot; with an &apos;e&apos; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Airborne</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Airborne&quot; is the correct spelling. It means carried through the air, especially by the wind, or transported by aircraft.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Airborne</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Airborne</strong> (adjective): Carried through the air, especially by the wind, or transported by aircraft.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The pollen is <strong>airborne</strong> during spring.</li>
              <li>• The plane was <strong>airborne</strong> within minutes.</li>
              <li>• Airborne diseases can spread quickly.</li>
              <li>• Dust particles remain <strong>airborne</strong> for hours.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Airborne</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Aloft</li>
                <li>• In flight</li>
                <li>• Flying</li>
                <li>• Floating</li>
                <li>• Carried</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Suspended</li>
                <li>• Windborne</li>
                <li>• Airlifted</li>
                <li>• Drifting</li>
                <li>• Propelled</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Airborne</strong> is spelled with an &apos;e&apos; at the end, not &quot;airborn&quot;.</li>
            <li>• Used to describe things carried by air or flying.</li>
            <li>• Commonly used in science, aviation, and health contexts.</li>
            <li>• The noun form is &quot;airborne&quot; (as in airborne troops).</li>
            <li>• The opposite is &quot;grounded&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;airborn&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;airborn&quot; is never correct. The proper spelling is always &quot;airborne&quot; with an &apos;e&apos; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;airborne&quot; has an &apos;e&apos; at the end, like &quot;borne&quot; (carried).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;airborne&quot; refer to diseases?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;airborne&quot; is often used to describe diseases or particles carried through the air.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;airborne&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: airborne troops, airborne transmission, airborne particles, airborne allergens.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;airborn&quot; happens because the final &apos;e&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Airborne</strong> is the correct spelling with an &apos;e&apos; at the end. It means carried through the air or flying. The misspelling &quot;airborn&quot; is never correct. Use &quot;airborne&quot; in science, health, and aviation contexts.</p>
      </div>
    </div>
  )
} 