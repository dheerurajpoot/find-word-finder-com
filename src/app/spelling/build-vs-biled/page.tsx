import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Build or Biled - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;build&quot; and &quot;biled&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuildVsBiledPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Build or Biled</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;build&quot; and &quot;biled&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Biled</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Biled&quot; is a misspelling. The correct spelling is &quot;build&quot; with &quot;ui&quot; not &quot;il.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Build</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Build&quot; is the correct spelling. It means to construct or create something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Build (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To construct, create, or develop something by putting parts together.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They will <strong>build</strong> a new house.</li>
                  <li>• She wants to <strong>build</strong> her career.</li>
                  <li>• The company plans to <strong>build</strong> a factory.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Biled (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Biled&quot; is a misspelling of &quot;build&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Biled&quot; is not used in standard English.</li>
                  <li>• Always use <strong>build</strong> when referring to construction.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Build:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Construct</li>
                <li>• Create</li>
                <li>• Develop</li>
                <li>• Establish</li>
                <li>• Form</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Biled:</h4>
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
            <li>• <strong>Build</strong> is spelled with &quot;ui&quot; (not &quot;il&quot;) - this is the standard English spelling.</li>
            <li>• The word comes from Old English &quot;byldan&quot; meaning to construct.</li>
            <li>• &quot;Biled&quot; is never correct in any context.</li>
            <li>• The word can be used as both a verb and a noun.</li>
            <li>• Common forms include: build, builds, building, built.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;biled&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;biled&quot; is never correct. The proper spelling is always &quot;build.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the past tense of build?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The past tense is &quot;built&quot; - they built a house last year.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;build&quot; has &quot;ui&quot; like &quot;building&quot; - think of the word &quot;building&quot; to help remember.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can build be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;build&quot; can be a noun meaning physical structure or body type.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with build?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: build up, build on, build in, and build out.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is build used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;build&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between build and construct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;construct&quot; is more formal, while &quot;build&quot; is more commonly used.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can build refer to non-physical things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, you can build relationships, careers, reputations, and other abstract concepts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Build</strong> is the correct spelling with &quot;ui&quot; (not &quot;il&quot;). It means to construct or create something. The misspelling &quot;biled&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 