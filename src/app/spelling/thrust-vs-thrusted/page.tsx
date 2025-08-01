import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thrust or Thrusted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thrust&quot; and &quot;thrusted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThrustVsThrustedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thrust or Thrusted</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thrust&quot; and &quot;thrusted&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thrusted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thrusted&quot; is a misspelling. The correct spelling is &quot;thrust&quot; - it&apos;s an irregular verb.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thrust</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thrust&quot; is the correct spelling. It means to push or drive with force.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thrust (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To push or drive with force; a sudden or violent push.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He <strong>thrust</strong> the sword into the stone.</li>
                  <li>• The rocket <strong>thrust</strong> upward into space.</li>
                  <li>• She made a powerful <strong>thrust</strong> with her arm.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thrusted (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thrusted&quot; is a misspelling of &quot;thrust&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thrusted&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thrust</strong> as the past tense of thrust.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thrust:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Push</li>
                <li>• Drive</li>
                <li>• Force</li>
                <li>• Propel</li>
                <li>• Shove</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thrusted:</h4>
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
            <li>• <strong>Thrust</strong> is an irregular verb - its past tense is also &quot;thrust.&quot;</li>
            <li>• It does not follow the regular -ed pattern like &quot;thrusted&quot; would suggest.</li>
            <li>• &quot;Thrusted&quot; is never correct in any context.</li>
            <li>• The word comes from Old Norse &quot;þrýsta&quot; meaning &quot;to thrust, press.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thrusted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thrusted&quot; is never correct. The proper spelling is always &quot;thrust.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;thrust&quot; is an irregular verb - its past tense is also &quot;thrust,&quot; not &quot;thrusted.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thrust&quot; and &quot;push&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thrust&quot; implies a more forceful or sudden movement, while &quot;push&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thrust&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thrust&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thrust&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thrusted&quot; often happens because people expect regular verb conjugation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thrust&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: thrust into, thrust forward, thrust aside, and thrust upward.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thrust&quot; always about physical movement?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thrust&quot; can also refer to figurative pushing or forcing something into a situation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thrust&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thrust&quot; can be used as both a verb and a noun.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thrust</strong> is the correct spelling - it is an irregular verb where the past tense is also &quot;thrust.&quot; It means to push or drive with force. The misspelling &quot;thrusted&quot; is never correct. Always use &quot;thrust&quot; as both the present and past tense of the verb.</p>
      </div>
    </div>
  )
} 