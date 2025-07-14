import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Catches or Catchs - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;catches&quot; and &quot;catchs&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CatchesVsCatchsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Catches or Catchs</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;catches&quot; and &quot;catchs&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Catchs</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Catchs&quot; is a common misspelling. The correct spelling is &quot;catches&quot; with &quot;-es&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Catches</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Catches&quot; is the correct third person singular present tense of &quot;catch&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Catches (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Third person singular present tense of &quot;catch&quot;; to seize, take hold of, or capture.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>catches</strong> the ball every time.</li>
                  <li>• He <strong>catches</strong> the bus at 8 a.m.</li>
                  <li>• The cat <strong>catches</strong> mice in the barn.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Catchs (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Catchs&quot; is a misspelling of &quot;catches&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Catchs&quot; is not used in standard English.</li>
                  <li>• Always use <strong>catches</strong> for the third person singular present tense.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Catches:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Seizes</li>
                <li>• Grabs</li>
                <li>• Captures</li>
                <li>• Snags</li>
                <li>• Traps</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Catchs:</h4>
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
            <li>• <strong>Catches</strong> is always spelled with &quot;-es&quot; at the end for third person singular present tense.</li>
            <li>• <strong>Catchs</strong> is never correct.</li>
            <li>• The word &quot;catch&quot; comes from the Old North French &quot;cachier&quot; meaning &quot;to chase&quot;.</li>
            <li>• Always use &quot;catches&quot; in both formal and informal writing.</li>
            <li>• Double-check verb forms when writing in English.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;catchs&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;catchs&quot; is never correct. The proper form is always &quot;catches&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember to add &quot;-es&quot; to verbs ending in &quot;ch&quot; for third person singular present tense.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;catches&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;catches&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Catches</strong> is the correct third person singular present tense of &quot;catch&quot;. The misspelling &quot;catchs&quot; is never correct. Use &quot;catches&quot; in all contexts.</p>
      </div>
    </div>
  )
} 