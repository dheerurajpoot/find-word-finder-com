import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bushel or Bushell - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bushel&quot; and &quot;bushell&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BushelVsBushellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bushel or Bushell</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bushel&quot; and &quot;bushell&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bushell</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bushell&quot; is a misspelling. The correct spelling is &quot;bushel&quot; with one &quot;l&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bushel</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bushel&quot; is the correct spelling. It is a unit of dry measure equal to 4 pecks or 8 gallons.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bushel (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A unit of dry measure equal to 4 pecks or 8 gallons (approximately 35.2 liters).</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The farmer harvested a <strong>bushel</strong> of apples.</li>
                  <li>• We bought a <strong>bushel</strong> of corn at the market.</li>
                  <li>• The grain was measured in <strong>bushels</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bushell (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bushell&quot; is a misspelling of &quot;bushel&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bushell&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bushel</strong> when referring to dry measure.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bushel:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Dry measure</li>
                <li>• Unit of capacity</li>
                <li>• 4 pecks</li>
                <li>• 8 gallons</li>
                <li>• 35.2 liters</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bushell:</h4>
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
            <li>• <strong>Bushel</strong> is spelled with one &quot;l&quot; at the end, not two.</li>
            <li>• Used primarily in agriculture and commerce for measuring dry goods.</li>
            <li>• The word comes from Old French &quot;boissel&quot; meaning a small box.</li>
            <li>• In the US, a bushel equals 64 pints or 32 quarts.</li>
            <li>• &quot;Bushell&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bushell&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bushell&quot; is never correct. The proper spelling is always &quot;bushel.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bus-hel&quot; - the word ends with &quot;hel&quot; not &quot;hell.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of bushel?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;bushels&quot; - just add an &quot;s&quot; to the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is a bushel used to measure?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Bushels are used to measure dry goods like grains, fruits, vegetables, and other agricultural products.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bushell&quot; likely occurs because of confusion with the word &quot;hell&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bushel&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bushel basket, bushel of wheat, bushel of corn, and bushel measure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bushel be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bushel&quot; is appropriate in both formal and informal writing contexts, especially in agricultural or commercial contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bushel used internationally?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The bushel is primarily used in the United States and some other English-speaking countries. Many countries use metric units instead.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bushel</strong> is the correct spelling with one &quot;l&quot; at the end. It is a unit of dry measure equal to 4 pecks or 8 gallons. The misspelling &quot;bushell&quot; is never correct. Use &quot;bushel&quot; when referring to agricultural measurements.</p>
      </div>
    </div>
  )
} 