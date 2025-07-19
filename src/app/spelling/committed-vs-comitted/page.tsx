import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Committed or Comitted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;committed&quot; and &quot;comitted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommittedVsComittedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Committed or Comitted</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;committed&quot; and &quot;comitted&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Comitted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Comitted&quot; is a misspelling. The correct spelling is &quot;committed&quot; with a double &quot;t&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Committed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Committed&quot; is the correct spelling. It means pledged or bound to a certain course or policy; dedicated.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Committed (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Pledged or bound to a certain course or policy; dedicated.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is a <strong>&quot;committed&quot;</strong> athlete who trains every day.</li>
                  <li>• The company is <strong>&quot;committed&quot;</strong> to sustainable practices.</li>
                  <li>• He remained <strong>&quot;committed&quot;</strong> to his goals despite challenges.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Comitted:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Comitted&quot; is a misspelling of &quot;committed&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Comitted&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;committed&quot;</strong> when referring to dedication or loyalty.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Committed:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Dedicated</li>
                <li>• Devoted</li>
                <li>• Loyal</li>
                <li>• Determined</li>
                <li>• Resolute</li>
                <li>• Conscientious</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Comitted:</h4>
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
            <li>• <strong>&quot;Committed&quot;</strong> is always spelled with a double &quot;t&quot; in the middle.</li>
            <li>• Used as an adjective in English, meaning dedicated or loyal to a cause or activity.</li>
            <li>• &quot;Comitted&quot; is never correct in any context.</li>
            <li>• Remember: double &quot;t&quot; for the correct spelling.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;comitted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;comitted&quot; is never correct. The proper spelling is always &quot;committed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;committed&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means pledged or bound to a certain course or policy; dedicated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;t&quot; in the middle: commi<strong>tt</strong>ed.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Committed&quot;</strong> is the correct spelling with a double &quot;t&quot; in the middle. It means dedicated or loyal to a cause, activity, or goal. The misspelling &quot;comitted&quot; is never correct. Use &quot;committed&quot; in all contexts.</p>
      </div>
    </div>
  )
} 