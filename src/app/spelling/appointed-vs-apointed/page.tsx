import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appointed or Apointed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appointed&quot; and &quot;apointed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppointedVsApointedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appointed or Apointed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appointed&quot; and &quot;apointed&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Apointed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Apointed&quot; is a misspelling. The correct spelling is &quot;appointed&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appointed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appointed&quot; is the correct spelling. It is the past tense and past participle of &quot;appoint&quot; (to assign a job or role).</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appointed (verb, past tense):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;appoint&quot; - to assign a job or role to someone.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She was <strong>appointed</strong> as the new director.</li>
                  <li>• The committee <strong>appointed</strong> a spokesperson.</li>
                  <li>• He was <strong>appointed</strong> to the board last year.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Apointed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Apointed&quot; is a misspelling of &quot;appointed&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Apointed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appointed</strong> when referring to assigned roles.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appointed:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Assigned</li>
                <li>• Designated</li>
                <li>• Selected</li>
                <li>• Named</li>
                <li>• Nominated</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Apointed:</h4>
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
            <li>• <strong>Appointed</strong> is spelled with two &quot;p&quot;s, not one.</li>
            <li>• Used as the past tense and past participle of &quot;appoint.&quot;</li>
            <li>• Can mean to assign, designate, or select someone for a role.</li>
            <li>• The word comes from Latin &quot;appointare&quot; meaning to arrange or fix.</li>
            <li>• &quot;Apointed&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;apointed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apointed&quot; is never correct. The proper spelling is always &quot;appointed&quot; with two &quot;p&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-pointed&quot; - the double &quot;p&quot; is important in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appointed and appoint?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Appoint&quot; is the verb (to assign), while &quot;appointed&quot; is the past tense and past participle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appointed be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appointed&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;apointed&quot; likely occurs because of confusion about the double &quot;p&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appointed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: appointed as manager, appointed to the board, and appointed representative.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce appointed?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The correct pronunciation is /əˈpɔɪntɪd/ (uh-POINT-id).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appointed</strong> is the correct spelling with two &quot;p&quot;s. It is the past tense and past participle of &quot;appoint&quot; and means to assign, designate, or select someone for a role. The misspelling &quot;apointed&quot; is never correct. Use &quot;appointed&quot; for official assignments or designations.</p>
      </div>
    </div>
  )
} 