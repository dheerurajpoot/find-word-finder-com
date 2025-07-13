import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bound or Binded - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bound&quot; and &quot;binded&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BoundVsBindedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bound or Binded</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bound&quot; and &quot;binded&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Binded</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Binded&quot; is a misspelling. The correct past tense of &quot;bind&quot; is &quot;bound.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bound</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bound&quot; is the correct spelling. It is the past tense and past participle of the verb &quot;bind.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bound (verb, past tense):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The past tense and past participle of &quot;bind,&quot; meaning to tie, fasten, or secure something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>bound</strong> the books together with string.</li>
                  <li>• The prisoner was <strong>bound</strong> with ropes.</li>
                  <li>• They <strong>bound</strong> the agreement with a handshake.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Binded (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Binded&quot; is a misspelling of &quot;bound&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Binded&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bound</strong> as the past tense of bind.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bound:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Tied</li>
                <li>• Fastened</li>
                <li>• Secured</li>
                <li>• Connected</li>
                <li>• Attached</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Binded:</h4>
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
            <li>• <strong>Bound</strong> is the correct past tense and past participle of &quot;bind.&quot;</li>
            <li>• The verb &quot;bind&quot; is irregular: bind → bound → bound.</li>
            <li>• &quot;Binded&quot; is never correct in any context.</li>
            <li>• &quot;Bound&quot; can also be a noun meaning a limit or boundary.</li>
            <li>• This follows the same pattern as other irregular verbs like &quot;find&quot; → &quot;found.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;binded&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;binded&quot; is never correct. The proper past tense is always &quot;bound.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the present tense of bound?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The present tense is &quot;bind&quot; - I bind the books together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;bind&quot; becomes &quot;bound&quot; - just like &quot;find&quot; becomes &quot;found.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bound be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bound&quot; can be a noun meaning a limit, boundary, or leap.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with bound?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bound and determined, bound for, bound up in, and bound to happen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bound used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bound&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bound and tied?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;bound&quot; often implies a stronger or more permanent connection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bound refer to abstract concepts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, you can be bound by promises, contracts, or moral obligations.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bound</strong> is the correct spelling for the past tense and past participle of &quot;bind.&quot; It means tied, fastened, or secured. The misspelling &quot;binded&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 