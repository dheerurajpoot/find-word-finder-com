import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Undoubtedly or Undoubtably - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;undoubtedly&quot; and &quot;undoubtably&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UndoubtedlyVsUndoubtablyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Undoubtedly or Undoubtably</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;undoubtedly&quot; and &quot;undoubtably&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Undoubtably</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Undoubtably&quot; is a common misspelling. The correct spelling is &quot;undoubtedly&quot; with &quot;-edly&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Undoubtedly</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Undoubtedly&quot; is the correct spelling. It means without doubt; certainly.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Undoubtedly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Without doubt; certainly.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is <strong>undoubtedly</strong> the best candidate.</li>
                  <li>• The movie will <strong>undoubtedly</strong> be a hit.</li>
                  <li>• He is <strong>undoubtedly</strong> talented.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Undoubtably (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Undoubtably&quot; is a misspelling of &quot;undoubtedly&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Undoubtably&quot; is not used in standard English.</li>
                  <li>• Always use <strong>undoubtedly</strong> for certainty.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Undoubtedly:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Certainly</li>
                <li>• Definitely</li>
                <li>• Surely</li>
                <li>• Clearly</li>
                <li>• Indisputably</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Undoubtably:</h4>
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
            <li>• <strong>Undoubtedly</strong> is spelled with &quot;-edly&quot; at the end.</li>
            <li>• Used to express certainty or lack of doubt.</li>
            <li>• &quot;Undoubtably&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;undoubtably&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;undoubtably&quot; is never correct. The proper spelling is always &quot;undoubtedly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the ending is &quot;-edly&quot; in &quot;undoubtedly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does undoubtedly mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means without doubt; certainly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can undoubtedly be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;undoubtedly&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Undoubtedly</strong> is the correct spelling with &quot;-edly&quot; at the end. It means without doubt or certainly. The misspelling &quot;undoubtably&quot; is never correct. Use &quot;undoubtedly&quot; to express certainty.</p>
      </div>
    </div>
  )
} 