import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Temporary or Tempary - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;temporary&quot; and &quot;tempary&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TemporaryVsTemparyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Temporary or Tempary</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;temporary&quot; and &quot;tempary&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tempary</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tempary&quot; is a misspelling. The correct spelling is &quot;temporary&quot; with &quot;or&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Temporary</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Temporary&quot; is the correct spelling. It means lasting for a limited time.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Temporary (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Lasting for a limited time; not permanent; provisional or interim.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>temporary</strong> job lasted three months.</li>
                  <li>• We found a <strong>temporary</strong> solution to the problem.</li>
                  <li>• The <strong>temporary</strong> bridge was built quickly.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tempary (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tempary&quot; is a misspelling of &quot;temporary&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tempary&quot; is not used in standard English.</li>
                  <li>• Always use <strong>temporary</strong> when referring to limited time.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Temporary:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Provisional</li>
                <li>• Interim</li>
                <li>• Transient</li>
                <li>• Short-term</li>
                <li>• Fleeting</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tempary:</h4>
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
            <li>• <strong>Temporary</strong> is spelled with &quot;or&quot; in the middle: tem-po-ra-ry.</li>
            <li>• It is commonly used in business and employment contexts.</li>
            <li>• &quot;Tempary&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;temporarius&quot; meaning &quot;of time.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tempary&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tempary&quot; is never correct. The proper spelling is always &quot;temporary.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;temporary&quot; has &quot;or&quot; in the middle - think of it as &quot;tem-po-ra-ry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between temporary and provisional?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean not permanent, but provisional often implies serving as a substitute until something better is available.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temporary&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temporary&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;temporary&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tempary&quot; often happens by omitting the &quot;or&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;temporary&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: temporary job, temporary solution, temporary housing, and temporary measure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temporary&quot; always about time?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temporary&quot; always refers to something that lasts for a limited time period.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temporary&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temporary&quot; can be used as both an adjective and a noun (meaning a temporary worker).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Temporary</strong> is the correct spelling with &quot;or&quot; in the middle: tem-po-ra-ry. It means lasting for a limited time or not permanent. The misspelling &quot;tempary&quot; is never correct. Always use &quot;temporary&quot; when referring to things that last for a limited time period, especially in employment and business contexts.</p>
      </div>
    </div>
  )
} 