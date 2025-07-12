import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Barbaric or Barberic - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;barbaric&quot; and &quot;barberic&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BarbaricVsBarbericPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Barbaric or Barberic</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;barbaric&quot; and &quot;barberic&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Barberic</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Barberic&quot; is a misspelling. The correct spelling is &quot;barbaric&quot; with an &quot;a&quot; after &quot;barb&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Barbaric</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Barbaric&quot; is the correct spelling. It means savagely cruel or primitive in behavior.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Barbaric (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Savagely cruel, primitive, or uncivilized in behavior or customs.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>barbaric</strong> treatment of prisoners was condemned.</li>
                  <li>• Such <strong>barbaric</strong> practices belong in the past.</li>
                  <li>• The <strong>barbaric</strong> invasion destroyed the city.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Barberic (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Barberic&quot; is a misspelling of &quot;barbaric&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Barberic&quot; is not used in standard English.</li>
                  <li>• Always use <strong>barbaric</strong> when referring to cruel behavior.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Barbaric:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Savage</li>
                <li>• Cruel</li>
                <li>• Brutal</li>
                <li>• Primitive</li>
                <li>• Uncivilized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Barberic:</h4>
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
          <li>• <strong>Barbaric</strong> is spelled with an &quot;a&quot; after &quot;barb&quot;, not &quot;e&quot;.</li>
          <li>• The word comes from Greek &quot;barbaros&quot; meaning foreign or uncivilized.</li>
          <li>• Used to describe cruel, primitive, or uncivilized behavior.</li>
          <li>• Often used in historical or cultural contexts.</li>
          <li>• &quot;Barberic&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;barberic&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;barberic&quot; is never correct. The proper spelling is always &quot;barbaric.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;barb&quot; + &quot;aric&quot; - like barbarian with an &quot;ic&quot; ending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between barbaric and barbarian?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Barbaric&quot; is an adjective describing cruel behavior, while &quot;barbarian&quot; is a noun referring to a person.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can barbaric be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;barbaric&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;barberic&quot; likely occurs because of confusion about the vowel sound or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;barbaric&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: barbaric practices, barbaric treatment, barbaric customs, and barbaric behavior.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Barbaric</strong> is the correct spelling with an &quot;a&quot; after &quot;barb&quot;. It means savagely cruel or primitive in behavior. The misspelling &quot;barberic&quot; is never correct.</p>
      </div>
    </div>
  )
} 