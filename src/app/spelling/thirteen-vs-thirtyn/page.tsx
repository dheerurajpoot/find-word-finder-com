import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thirteen or Thirtyn - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thirteen&quot; and &quot;thirtyn&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThirteenVsThirtynPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thirteen or Thirtyn</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thirteen&quot; and &quot;thirtyn&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thirtyn</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thirtyn&quot; is a misspelling. The correct spelling is &quot;thirteen&quot; with &quot;teen&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thirteen</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thirteen&quot; is the correct spelling. It means the number 13.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thirteen (noun/numeral):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The cardinal number that is the sum of twelve and one; 13.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I have <strong>thirteen</strong> books on my shelf.</li>
                  <li>• She turned <strong>thirteen</strong> last month.</li>
                  <li>• The meeting is at <strong>thirteen</strong> hundred hours.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thirtyn (noun/numeral):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thirtyn&quot; is a misspelling of &quot;thirteen&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thirtyn&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thirteen</strong> when referring to the number 13.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thirteen:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• 13</li>
                <li>• Baker&apos;s dozen</li>
                <li>• XIII (Roman numeral)</li>
                <li>• Thirteen</li>
                <li>• 13th</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thirtyn:</h4>
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
            <li>• <strong>Thirteen</strong> is spelled with &quot;teen&quot; at the end.</li>
            <li>• It is the number that comes after twelve and before fourteen.</li>
            <li>• &quot;Thirtyn&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þrēotīene&quot; meaning &quot;thirteen.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thirtyn&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thirtyn&quot; is never correct. The proper spelling is always &quot;thirteen.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thirteen&quot; ends with &quot;teen&quot; - think of it as &quot;thir-teen.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thirteen&quot; and &quot;thirty&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thirteen&quot; is 13, while &quot;thirty&quot; is 30. They are completely different numbers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thirteen&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thirteen&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thirteen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thirtyn&quot; often happens by confusing it with the word &quot;thirty.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thirteen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: thirteen years old, thirteen dollars, thirteen o&apos;clock, and thirteen colonies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thirteen&quot; always a number?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thirteen&quot; always refers to the cardinal number 13.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thirteen&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thirteen&quot; can be used as both a noun and an adjective (e.g., thirteen people).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thirteen</strong> is the correct spelling with &quot;teen&quot; at the end. It means the number 13. The misspelling &quot;thirtyn&quot; is never correct. Always use &quot;thirteen&quot; when referring to the cardinal number 13.</p>
      </div>
    </div>
  )
} 