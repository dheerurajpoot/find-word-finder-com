import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Committed or Committeed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;committed&quot; and &quot;committeed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommittedVsCommitteedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Committed or Committeed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;committed&quot; and &quot;committeed&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Committeed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Committeed&quot; is a misspelling. The correct spelling is &quot;committed&quot; with double &quot;m&quot; and double &quot;t&quot;.</p>
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
                  <li>• A committed environmentalist</li>
                  <li>• She was deeply committed to her role in the community.</li>
                  <li>• The company is committed to sustainable practices.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Committeed (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Committeed&quot; is a misspelling of &quot;committed&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Committeed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>committed</strong> when referring to dedication or loyalty.</li>
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
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Committeed:</h4>
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
            <li>• <strong>Committed</strong> is spelled with double &quot;m&quot; and double &quot;t&quot;.</li>
            <li>• Used to describe someone who is dedicated or loyal to a cause, relationship, or responsibility.</li>
            <li>• The word is the same in both American and British English.</li>
            <li>• &quot;Committeed&quot; is never correct in any context.</li>
            <li>• Remember: com-mit-ted (break it down to remember the double letters).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;committeed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;committeed&quot; is never correct. The proper spelling is always &quot;committed&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Break it down as &quot;com-mit-ted&quot; to remember the double letters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;committed&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Pledged or bound to a certain course or policy; dedicated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is the spelling the same in American and British English?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;committed&quot; is spelled the same in both American and British English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Committed</strong> is the correct spelling with double &quot;m&quot; and double &quot;t&quot;. It means dedicated or pledged to a cause or responsibility. The misspelling &quot;committeed&quot; is never correct. Use &quot;committed&quot; in all formal and informal writing.</p>
      </div>
    </div>
  )
} 