import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Too Much or To Much - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;too much&quot; and &quot;to much&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TooMuchVsToMuchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Too Much or To Much</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;too much&quot; and &quot;to much&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: To Much</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;To much&quot; is a misspelling. The correct spelling is &quot;too much&quot; with two &quot;o&quot;s in &quot;too&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Too Much</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Too much&quot; is the correct spelling. It means an excessive amount or more than is needed.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Too Much (phrase):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An excessive amount; more than is needed or desired.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• That&apos;s <strong>too much</strong> work for one person.</li>
                  <li>• I ate <strong>too much</strong> at dinner.</li>
                  <li>• The movie was <strong>too much</strong> for young children.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">To Much (phrase):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;To much&quot; is a misspelling of &quot;too much&quot; and is not a valid English phrase.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;To much&quot; is not used in standard English.</li>
                  <li>• Always use <strong>too much</strong> when referring to excess.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Too Much:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Excessive</li>
                <li>• Overmuch</li>
                <li>• In excess</li>
                <li>• More than enough</li>
                <li>• Beyond what&apos;s needed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">To Much:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English phrase)</li>
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
            <li>• <strong>Too</strong> is spelled with two &quot;o&quot;s, not one.</li>
            <li>• &quot;Too&quot; means also or excessively, while &quot;to&quot; is a preposition.</li>
            <li>• &quot;To much&quot; is never correct in any context.</li>
            <li>• The word &quot;too&quot; comes from Old English &quot;tō&quot; meaning &quot;also.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;to much&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;to much&quot; is never correct. The proper spelling is always &quot;too much.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;too&quot; has two &quot;o&quot;s, just like &quot;also&quot; has two &quot;l&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;to&quot; and &quot;too&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;To&quot; is a preposition, while &quot;too&quot; means also or excessively.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;too much&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;too much&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;too much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;to much&quot; often happens by omitting the second &quot;o&quot; in &quot;too.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;too much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: too much trouble, too much information, too much to handle, and too much work.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;too much&quot; always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually, but it can also be used neutrally to describe quantity, like &quot;too much detail.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;too much&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, it can function as a noun phrase, as in &quot;That&apos;s too much for me to handle.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Too Much</strong> is the correct spelling with two &quot;o&quot;s in &quot;too.&quot; It means an excessive amount. The misspelling &quot;to much&quot; is never correct. Always use &quot;too much&quot; when referring to excess or more than needed.</p>
      </div>
    </div>
  )
} 