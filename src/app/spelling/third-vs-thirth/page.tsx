import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Third or Thirth - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;third&quot; and &quot;thirth&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThirdVsThirthPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Third or Thirth</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;third&quot; and &quot;thirth&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thirth</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thirth&quot; is a misspelling. The correct spelling is &quot;third&quot; with &quot;d&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Third</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Third&quot; is the correct spelling. It means the ordinal number 3rd.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Third (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Coming after second and before fourth in a series; the ordinal number 3rd.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• This is the <strong>third</strong> time I&apos;ve called.</li>
                  <li>• She finished in <strong>third</strong> place.</li>
                  <li>• The <strong>third</strong> chapter was the most interesting.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thirth (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thirth&quot; is a misspelling of &quot;third&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thirth&quot; is not used in standard English.</li>
                  <li>• Always use <strong>third</strong> when referring to the ordinal number 3rd.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Third:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• 3rd</li>
                <li>• Tertiary</li>
                <li>• Thirdly</li>
                <li>• Third place</li>
                <li>• Third position</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thirth:</h4>
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
            <li>• <strong>Third</strong> is spelled with &quot;d&quot; at the end.</li>
            <li>• It is the ordinal number that comes after second and before fourth.</li>
            <li>• &quot;Thirth&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þridda&quot; meaning &quot;third.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thirth&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thirth&quot; is never correct. The proper spelling is always &quot;third.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;third&quot; ends with &quot;d&quot; - think of it as &quot;thir-d.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;third&quot; and &quot;three&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Third&quot; is the ordinal number (3rd), while &quot;three&quot; is the cardinal number (3).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;third&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;third&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;third&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thirth&quot; often happens by replacing the &quot;d&quot; with &quot;th.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;third&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: third time, third place, third party, third world, and third degree.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;third&quot; always about position?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;third&quot; always refers to the ordinal position or rank of 3rd.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;third&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;third&quot; can be used as both an adjective and a noun (e.g., the third of the month).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Third</strong> is the correct spelling with &quot;d&quot; at the end. It means the ordinal number 3rd. The misspelling &quot;thirth&quot; is never correct. Always use &quot;third&quot; when referring to the ordinal position or rank of 3rd.</p>
      </div>
    </div>
  )
} 