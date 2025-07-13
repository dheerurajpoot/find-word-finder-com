import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Break or Breack - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;break&quot; and &quot;breack&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BreakVsBreackPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Break or Breack</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;break&quot; and &quot;breack&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Breack</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Breack&quot; is a misspelling. The correct spelling is &quot;break&quot; with &quot;ea&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Break</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Break&quot; is the correct spelling. It refers to separating into pieces or interrupting something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Break (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To separate into pieces; to interrupt or pause; a pause or interruption.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Don&apos;t <strong>break</strong> the glass.</li>
                  <li>• Let&apos;s take a <strong>break</strong>.</li>
                  <li>• The news will <strong>break</strong> soon.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Breack (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Breack&quot; is a misspelling of &quot;break&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Breack&quot; is not used in standard English.</li>
                  <li>• Always use <strong>break</strong> when referring to separation or interruption.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Break:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Shatter</li>
                <li>• Crack</li>
                <li>• Pause</li>
                <li>• Interrupt</li>
                <li>• Rest</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Breack:</h4>
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
            <li>• <strong>Break</strong> is spelled with &quot;ea&quot;, not &quot;ea&quot; + &quot;ck&quot;.</li>
            <li>• The word comes from Old English &quot;brecan&quot; meaning to break.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• Common in everyday language for various contexts.</li>
            <li>• &quot;Breack&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;breack&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;breack&quot; is never correct. The proper spelling is always &quot;break.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;br&quot; + &quot;eak&quot; - the word has &quot;ea&quot; like &quot;speak&quot; or &quot;weak.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between break and brake?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Break&quot; means to separate or interrupt, while &quot;brake&quot; refers to a device that slows or stops motion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can break be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;break&quot; can be used as a noun meaning a pause or interruption, as in &quot;Take a break.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with words that have &quot;ck&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;break&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: break down, break up, break in, break out, and break the news.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Break</strong> is the correct spelling with &quot;ea&quot;. It refers to separating into pieces or interrupting something. The misspelling &quot;breack&quot; is never correct. Use &quot;break&quot; when referring to separation, interruption, or taking a pause.</p>
      </div>
    </div>
  )
} 