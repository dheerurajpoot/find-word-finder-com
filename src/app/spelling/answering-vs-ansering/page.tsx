import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Answering or Ansering - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;answering&quot; and &quot;ansering&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnsweringVsAnseringPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Answering or Ansering</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;answering&quot; and &quot;ansering&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ansering</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ansering&quot; is a misspelling. The correct spelling is &quot;answering&quot; with a &quot;w&quot; after the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Answering</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Answering&quot; is the correct spelling. It means responding to a question or request.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Answering (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Present participle of &quot;answer&quot;: to respond to a question or request.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is <strong>answering</strong> the phone.</li>
                  <li>• He was <strong>answering</strong> questions from the audience.</li>
                  <li>• The student is <strong>answering</strong> the test.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ansering (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ansering&quot; is a misspelling of &quot;answering&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ansering&quot; is not used in standard English.</li>
                  <li>• Always use <strong>answering</strong> when referring to responding to a question.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Answering:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Responding</li>
                <li>• Replying</li>
                <li>• Reacting</li>
                <li>• Addressing</li>
                <li>• Acknowledging</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ansering:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Answering</strong> is spelled with a &quot;w&quot; after the &quot;s&quot;.</li>
            <li>• Used to describe responding to a question or request.</li>
            <li>• The word comes from Old English &quot;andswarian&quot; meaning &quot;to answer&quot;.</li>
            <li>• &quot;Ansering&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ansering&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ansering&quot; is never correct. The proper spelling is always &quot;answering.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;w&quot; after the &quot;s&quot; in &quot;answering.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does answering mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means responding to a question or request.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ansering&quot; occurs because people omit the &quot;w&quot; by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Answering</strong> is the correct spelling with a &quot;w&quot; after the &quot;s&quot;. It means responding to a question or request. The misspelling &quot;ansering&quot; is never correct. Use &quot;answering&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 