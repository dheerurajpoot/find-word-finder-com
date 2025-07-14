import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cancellation or Cancelation - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cancellation&quot; and &quot;cancelation&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CancellationVsCancelationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cancellation or Cancelation</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cancellation&quot; and &quot;cancelation&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cancelation</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cancelation&quot; is a misspelling. The correct spelling is &quot;cancellation&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cancellation</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cancellation&quot; is the correct spelling. It means the act of canceling something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cancellation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of canceling or calling off something that was previously arranged.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The flight <strong>cancellation</strong> was due to bad weather.</li>
                  <li>• We received a <strong>cancellation</strong> notice for the meeting.</li>
                  <li>• The <strong>cancellation</strong> policy allows refunds within 24 hours.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cancelation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cancelation&quot; is a misspelling of &quot;cancellation&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cancelation&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cancellation</strong> when referring to canceling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cancellation:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Termination</li>
                <li>• Abolition</li>
                <li>• Annulment</li>
                <li>• Revocation</li>
                <li>• Withdrawal</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cancelation:</h4>
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
            <li>• <strong>Cancellation</strong> is spelled with two &quot;l&quot;s, not one.</li>
            <li>• The word comes from Latin &quot;cancellare&quot; meaning to cross out.</li>
            <li>• Can be used in various contexts like events, services, or agreements.</li>
            <li>• Often used in business and travel contexts.</li>
            <li>• &quot;Cancelation&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cancelation&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cancelation&quot; is never correct. The proper spelling is always &quot;cancellation.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cancel-lation&quot; - the word has two &quot;l&quot;s like in &quot;cancel.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between cancellation and termination?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean ending something, but &quot;cancellation&quot; often implies stopping before it starts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cancelation&quot; likely occurs because of confusion about the double &quot;l&quot; spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;cancellation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: cancellation policy, cancellation fee, and cancellation notice.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can cancellation be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cancellation&quot; is only used as a noun. The verb form is &quot;cancel.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is cancellation always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Not necessarily. Cancellation can be positive if it prevents something unwanted.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word cancellation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;cancellare&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cancellation</strong> is the correct spelling with two &quot;l&quot;s. It means the act of canceling or calling off something. The misspelling &quot;cancelation&quot; is never correct. Use &quot;cancellation&quot; to describe the act of canceling events, services, or agreements.</p>
      </div>
    </div>
  )
} 