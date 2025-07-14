import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cause or Casue - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cause&quot; and &quot;casue&quot;. Discover definitions, examples, and common mistakes to avoid.',
}

export default function CauseVsCasuePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cause or Casue</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cause&quot; and &quot;casue&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Casue</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Casue&quot; is a common misspelling. The correct spelling is &quot;cause&quot; with the &quot;a&quot; before the &quot;u&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cause</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cause&quot; is the correct spelling. It means a reason for an action or event.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cause (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person or thing that gives rise to an action, phenomenon, or condition; to make something happen.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The heavy rain was the <strong>cause</strong> of the flood.</li>
                  <li>• Smoking can <strong>cause</strong> health problems.</li>
                  <li>• She fought for a good <strong>cause</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Casue:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Casue&quot; is a misspelling of &quot;cause&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Casue&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cause</strong> for correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cause:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Reason</li>
                <li>• Motive</li>
                <li>• Source</li>
                <li>• Origin</li>
                <li>• Trigger</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Casue:</h4>
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
            <li>• <strong>Cause</strong> is spelled with the &quot;a&quot; before the &quot;u&quot;.</li>
            <li>• &quot;Casue&quot; is a common typo due to letter transposition.</li>
            <li>• Always double-check spelling in important documents.</li>
            <li>• The word "cause" can be both a noun and a verb.</li>
            <li>• &quot;Casue&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;casue&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;casue&quot; is never correct. The proper spelling is always &quot;cause.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that the &quot;a&quot; comes before the &quot;u&quot; in &quot;cause.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;cause&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Cause&quot; means a reason for something happening or to make something happen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;cause&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is often a result of typing quickly and transposing the letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cause</strong> is the correct spelling with the &quot;a&quot; before the &quot;u&quot;. The misspelling &quot;casue&quot; is never correct. Use &quot;cause&quot; to indicate a reason or to make something happen.</p>
      </div>
    </div>
  )
} 