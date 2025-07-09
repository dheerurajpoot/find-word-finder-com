import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Approximately or Approximatly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;approximately&quot; and &quot;approximatly&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApproximatelyVsApproximatlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Approximately or Approximatly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;approximately&quot; and &quot;approximatly&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Approximatly</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Approximatly&quot; is a misspelling. The correct spelling is &quot;approximately&quot; with &quot;ely&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Approximately</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Approximately&quot; is the correct spelling. It means roughly or about, not exact.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Approximately (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Roughly or about; not exact but close to the actual amount or number.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The meeting will last <strong>approximately</strong> two hours.</li>
                  <li>• There are <strong>approximately</strong> 100 people in the room.</li>
                  <li>• The cost is <strong>approximately</strong> $50.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Approximatly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Approximatly&quot; is a misspelling of &quot;approximately&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Approximatly&quot; is not used in standard English.</li>
                  <li>• Always use <strong>approximately</strong> when referring to rough estimates.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Approximately:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Roughly</li>
                <li>• About</li>
                <li>• Around</li>
                <li>• Nearly</li>
                <li>• Close to</li>
                <li>• More or less</li>
                <li>• In the region of</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Approximatly:</h4>
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
            <li>• <strong>Approximately</strong> is spelled with &quot;ely&quot; at the end not &quot;ly.&quot;</li>
            <li>• Used to indicate rough estimates or approximations.</li>
            <li>• Commonly used in both formal and informal contexts.</li>
            <li>• The word comes from Latin &quot;approximatus&quot; meaning &quot;brought near.&quot;</li>
            <li>• &quot;Approximatly&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;approximately how many&quot; or &quot;approximately when.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;approximatly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;approximatly&quot; is never correct. The proper spelling is always &quot;approximately&quot; with &quot;ely&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-prox-i-mate-ly&quot; - it has &quot;ely&quot; at the end, similar to &quot;definitely&quot; or &quot;absolutely.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between approximately and exactly?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Approximately&quot; means roughly or about, while &quot;exactly&quot; means precisely or with complete accuracy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can approximately be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;approximately&quot; is very appropriate in formal writing and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;approximatly&quot; likely occurs because of confusion about the &quot;ely&quot; vs &quot;ly&quot; ending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;approximately&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: approximately how many, approximately when, and approximately the same.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is approximately always about numbers?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;approximately&quot; can refer to time, distance, amount, or any rough estimate, not just numbers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can approximately be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;approximately&quot; is an adverb. The adjective form is &quot;approximate&quot; (an approximate figure).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Approximately</strong> is the correct spelling with &quot;ely&quot; at the end not &quot;ly.&quot; It means roughly or about, not exact. The misspelling &quot;approximatly&quot; is never correct. Use &quot;approximately&quot; to indicate rough estimates in both formal and informal contexts.</p>
      </div>
    </div>
  )
} 