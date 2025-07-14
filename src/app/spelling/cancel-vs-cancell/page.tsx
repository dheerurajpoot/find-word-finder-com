import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cancel or Cancell - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cancel&quot; and &quot;cancell&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CancelVsCancellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cancel or Cancell</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cancel&quot; and &quot;cancell&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cancell</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cancell&quot; is a misspelling. The correct spelling is &quot;cancel&quot; with one &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cancel</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cancel&quot; is the correct spelling. It means to call off or terminate something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cancel (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To call off, terminate, or annul something that was previously arranged.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I need to <strong>cancel</strong> my appointment.</li>
                  <li>• The event was <strong>cancelled</strong> due to rain.</li>
                  <li>• Please <strong>cancel</strong> my subscription.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cancell (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cancell&quot; is a misspelling of &quot;cancel&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cancell&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cancel</strong> when referring to calling off.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cancel:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Call off</li>
                <li>• Terminate</li>
                <li>• Abolish</li>
                <li>• Annul</li>
                <li>• Revoke</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cancell:</h4>
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
            <li>• <strong>Cancel</strong> is spelled with one &quot;l&quot;, not two.</li>
            <li>• The word comes from Latin &quot;cancellare&quot; meaning to cross out.</li>
            <li>• Can be used in various contexts like appointments, events, or subscriptions.</li>
            <li>• The past tense is &quot;cancelled&quot; (British) or &quot;canceled&quot; (American).</li>
            <li>• &quot;Cancell&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cancell&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cancell&quot; is never correct. The proper spelling is always &quot;cancel.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;can-cel&quot; - the word has one &quot;l&quot; like in &quot;can.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between cancel and terminate?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean to end something, but &quot;cancel&quot; often implies stopping before it starts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cancell&quot; likely occurs because of confusion about the single &quot;l&quot; spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;cancel&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: cancel out, cancel culture, and cancel subscription.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can cancel be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cancel&quot; is only used as a verb. The noun form is &quot;cancellation.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is cancel always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Not necessarily. Canceling can be positive if it prevents something unwanted.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word cancel?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;cancellare&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cancel</strong> is the correct spelling with one &quot;l&quot;. It means to call off or terminate something. The misspelling &quot;cancell&quot; is never correct. Use &quot;cancel&quot; to describe calling off appointments, events, subscriptions, or other arrangements.</p>
      </div>
    </div>
  )
} 