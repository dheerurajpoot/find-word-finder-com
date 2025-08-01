import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thoroughly or Thoroughely - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thoroughly&quot; and &quot;thoroughely&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThoroughlyVsThoroughelyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thoroughly or Thoroughely</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thoroughly&quot; and &quot;thoroughely&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thoroughely</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thoroughely&quot; is a misspelling. The correct spelling is &quot;thoroughly&quot; with &quot;ly&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thoroughly</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thoroughly&quot; is the correct spelling. It means completely or in detail.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thoroughly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In a complete and detailed manner; completely; exhaustively.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>thoroughly</strong> cleaned the house.</li>
                  <li>• The report was <strong>thoroughly</strong> researched.</li>
                  <li>• He <strong>thoroughly</strong> enjoyed the movie.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thoroughely (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thoroughely&quot; is a misspelling of &quot;thoroughly&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thoroughely&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thoroughly</strong> when referring to completeness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thoroughly:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Completely</li>
                <li>• Fully</li>
                <li>• Exhaustively</li>
                <li>• Completely</li>
                <li>• In detail</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thoroughely:</h4>
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
            <li>• <strong>Thoroughly</strong> is spelled with &quot;ly&quot; at the end.</li>
            <li>• It is the adverb form of the adjective &quot;thorough.&quot;</li>
            <li>• &quot;Thoroughely&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þuruh&quot; meaning &quot;through.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thoroughely&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thoroughely&quot; is never correct. The proper spelling is always &quot;thoroughly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thoroughly&quot; ends with &quot;ly&quot; - think of it as &quot;thorough-ly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thoroughly&quot; and &quot;completely&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thoroughly&quot; emphasizes attention to detail, while &quot;completely&quot; emphasizes finishing something entirely.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thoroughly&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thoroughly&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thoroughly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thoroughely&quot; often happens by adding an extra &quot;e&quot; before the &quot;ly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thoroughly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: thoroughly researched, thoroughly enjoyed, thoroughly cleaned, and thoroughly tested.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thoroughly&quot; always about completeness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thoroughly&quot; always implies doing something completely or with great attention to detail.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thoroughly&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thoroughly&quot; is only used as an adverb. The adjective form is &quot;thorough.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thoroughly</strong> is the correct spelling with &quot;ly&quot; at the end. It means completely or in detail. The misspelling &quot;thoroughely&quot; is never correct. Always use &quot;thoroughly&quot; when referring to doing something completely or with great attention to detail.</p>
      </div>
    </div>
  )
} 