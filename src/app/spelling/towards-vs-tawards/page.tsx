import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Towards or Tawards - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;towards&quot; and &quot;tawards&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TowardsVsTawardsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Towards or Tawards</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;towards&quot; and &quot;tawards&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tawards</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tawards&quot; is a misspelling. The correct spelling is &quot;towards&quot; with &quot;to&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Towards</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Towards&quot; is the correct spelling. It means in the direction of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Towards (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In the direction of; in relation to; with regard to; for the purpose of.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She walked <strong>towards</strong> the door.</li>
                  <li>• His attitude <strong>towards</strong> work is positive.</li>
                  <li>• We&apos;re working <strong>towards</strong> a solution.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tawards (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tawards&quot; is a misspelling of &quot;towards&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tawards&quot; is not used in standard English.</li>
                  <li>• Always use <strong>towards</strong> when referring to direction.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Towards:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Toward</li>
                <li>• In the direction of</li>
                <li>• To</li>
                <li>• Regarding</li>
                <li>• Concerning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tawards:</h4>
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
            <li>• <strong>Towards</strong> is spelled with &quot;to&quot; at the beginning: to-wards.</li>
            <li>• It is a preposition indicating direction or relation.</li>
            <li>• &quot;Tawards&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;tōweard&quot; meaning &quot;in the direction of.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tawards&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tawards&quot; is never correct. The proper spelling is always &quot;towards.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;towards&quot; starts with &quot;to&quot; - think of it as &quot;to-wards.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;towards&quot; and &quot;toward&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both are correct, but &quot;towards&quot; is more common in British English, while &quot;toward&quot; is more common in American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;towards&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;towards&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;towards&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tawards&quot; often happens by replacing &quot;to&quot; with &quot;ta&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;towards&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: towards the end, towards success, towards a goal, and towards the future.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;towards&quot; always about direction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;towards&quot; can also indicate attitude, purpose, or relation to something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;towards&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;towards&quot; is only used as a preposition in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Towards</strong> is the correct spelling with &quot;to&quot; at the beginning: to-wards. It is a preposition meaning in the direction of or in relation to something. The misspelling &quot;tawards&quot; is never correct. Always use &quot;towards&quot; when referring to direction, attitude, or purpose.</p>
      </div>
    </div>
  )
} 