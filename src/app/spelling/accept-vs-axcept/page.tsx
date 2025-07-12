import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accept or Axcept - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accept&quot; and &quot;axcept&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcceptVsAxceptPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accept or Axcept</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accept&quot; and &quot;axcept&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Axcept</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Axcept&quot; is a misspelling. The correct spelling is &quot;accept&quot; with a &quot;c&quot; after the &quot;a&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accept</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accept&quot; is the correct spelling. It means to receive willingly or to agree to something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accept (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To receive willingly; to agree to; to take or receive something offered.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>accept</strong> your apology.</li>
                  <li>• She <strong>accepted</strong> the job offer.</li>
                  <li>• The committee <strong>accepted</strong> the proposal.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Axcept (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Axcept&quot; is a misspelling of &quot;accept&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Axcept&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accept</strong> when referring to receiving or agreeing.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Accept:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Receive</li>
                <li>• Agree to</li>
                <li>• Take</li>
                <li>• Approve</li>
                <li>• Adopt</li>
                <li>• Embrace</li>
                <li>• Welcome</li>
                <li>• Consent to</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Axcept:</h4>
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
          <li>• <strong>Accept</strong> is spelled with a &quot;c&quot; after the &quot;a&quot;, not &quot;axcept.&quot;</li>
          <li>• The word comes from Latin &quot;acceptare&quot; meaning to take or receive.</li>
          <li>• Do not confuse with &quot;except&quot; which means excluding or apart from.</li>
          <li>• Commonly used in formal and informal contexts.</li>
          <li>• &quot;Axcept&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;axcept&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;axcept&quot; is never correct. The proper spelling is always &quot;accept&quot; with a &quot;c&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac-cept&quot; - the prefix &quot;ac&quot; (meaning to) plus &quot;cept&quot; (from Latin for take).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accept and except?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accept&quot; means to receive or agree to, while &quot;except&quot; means excluding or apart from.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accept be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accept&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;axcept&quot; likely occurs because of confusion with the word &quot;except&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accept&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accept responsibility, accept defeat, accept the consequences, and accept an offer.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is accept always about positive things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accept&quot; can refer to both positive (accept a gift) and negative (accept blame) situations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the noun form of accept?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The noun form is &quot;acceptance&quot; - the act of accepting or the state of being accepted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accept</strong> is the correct spelling with a &quot;c&quot; after the &quot;a&quot;. It means to receive willingly or to agree to something. The misspelling &quot;axcept&quot; is never correct. Use &quot;accept&quot; to describe receiving, agreeing to, or taking something offered.</p>
      </div>
    </div>
  )
} 