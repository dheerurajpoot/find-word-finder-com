import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Canceled or Cancled - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;canceled&quot; and &quot;cancled&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CanceledVsCancledPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Canceled or Cancled</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;canceled&quot; and &quot;cancled&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cancled</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cancled&quot; is a misspelling. The correct spelling is &quot;canceled&quot; with an &quot;e&quot; before the &quot;d&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Canceled</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Canceled&quot; is the correct spelling. It&apos;s the past tense of cancel.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Canceled (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The past tense and past participle of cancel, meaning to have called off or terminated something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The flight was <strong>canceled</strong> due to bad weather.</li>
                  <li>• I <strong>canceled</strong> my appointment yesterday.</li>
                  <li>• The event has been <strong>canceled</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cancled (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cancled&quot; is a misspelling of &quot;canceled&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cancled&quot; is not used in standard English.</li>
                  <li>• Always use <strong>canceled</strong> when referring to the past tense.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Canceled:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Called off</li>
                <li>• Terminated</li>
                <li>• Abolished</li>
                <li>• Annulled</li>
                <li>• Revoked</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cancled:</h4>
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
            <li>• <strong>Canceled</strong> is spelled with an &quot;e&quot; before the &quot;d&quot;, not just &quot;d&quot;.</li>
            <li>• This is the American English spelling of the past tense.</li>
            <li>• British English uses &quot;cancelled&quot; with two &quot;l&quot;s.</li>
            <li>• Can be used as both past tense and past participle.</li>
            <li>• &quot;Cancled&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cancled&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cancled&quot; is never correct. The proper spelling is always &quot;canceled.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cancel-ed&quot; - the word has an &quot;e&quot; before the &quot;d&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between canceled and cancelled?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Canceled&quot; is American English, while &quot;cancelled&quot; is British English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cancled&quot; likely occurs because of confusion about the &quot;e&quot; before the &quot;d&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;canceled&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: canceled flight, canceled appointment, and canceled event.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can canceled be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;canceled&quot; can be used as an adjective, as in &quot;canceled plans.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is canceled always about events?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;canceled&quot; can refer to any arrangement, subscription, or plan.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word canceled?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;cancellare&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Canceled</strong> is the correct spelling with an &quot;e&quot; before the &quot;d&quot;. It&apos;s the American English past tense of cancel. The misspelling &quot;cancled&quot; is never correct. Use &quot;canceled&quot; to describe something that has been called off or terminated.</p>
      </div>
    </div>
  )
} 