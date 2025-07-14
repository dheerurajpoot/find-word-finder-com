import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Caused or Casued - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;caused&quot; and &quot;casued&quot;. Discover definitions, examples, and common mistakes to avoid.',
}

export default function CausedVsCasuedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Caused or Casued</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;caused&quot; and &quot;casued&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Casued</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Casued&quot; is a common misspelling. The correct spelling is &quot;caused&quot; with the &quot;a&quot; before the &quot;u&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Caused</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Caused&quot; is the correct spelling. It is the past tense of &quot;cause&quot; and means to have made something happen.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Caused (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense of &quot;cause&quot;; to have made something happen or brought about an effect.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The accident <strong>caused</strong> a traffic jam.</li>
                  <li>• Her words <strong>caused</strong> confusion.</li>
                  <li>• The storm <strong>caused</strong> damage to the roof.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Casued:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Casued&quot; is a misspelling of &quot;caused&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Casued&quot; is not used in standard English.</li>
                  <li>• Always use <strong>caused</strong> for correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Caused:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Created</li>
                <li>• Produced</li>
                <li>• Generated</li>
                <li>• Triggered</li>
                <li>• Resulted in</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Casued:</h4>
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
            <li>• <strong>Caused</strong> is spelled with the &quot;a&quot; before the &quot;u&quot;.</li>
            <li>• &quot;Casued&quot; is a common typo due to letter transposition.</li>
            <li>• Always double-check spelling in important documents.</li>
            <li>• The word &quot;caused&quot; is the past tense of &quot;cause.&quot;</li>
            <li>• &quot;Casued&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;casued&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;casued&quot; is never correct. The proper spelling is always &quot;caused.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that the &quot;a&quot; comes before the &quot;u&quot; in &quot;caused.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;caused&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Caused&quot; means to have made something happen or brought about an effect.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;caused&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is often a result of typing quickly and transposing the letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Caused</strong> is the correct spelling with the &quot;a&quot; before the &quot;u&quot;. The misspelling &quot;casued&quot; is never correct. Use &quot;caused&quot; as the past tense of &quot;cause&quot; to indicate something that made an effect happen.</p>
      </div>
    </div>
  )
} 