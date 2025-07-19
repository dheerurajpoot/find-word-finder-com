import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Circumstances or Circummstances - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;circumstances&quot; and &quot;circummstances&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CircumstancesVsCircummstancesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Circumstances or Circummstances</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;circumstances&quot; and &quot;circummstances&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Circummstances</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Circummstances&quot; is a common misspelling. The correct spelling is &quot;circumstances&quot; with only one &quot;m&quot; after the &quot;u&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Circumstances</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Circumstances&quot; is the correct spelling. It refers to the facts or conditions connected with or relevant to an event or action.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Circumstances (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The facts or conditions connected with or relevant to an event or action.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Due to unforeseen <strong>&quot;circumstances&quot;</strong>, the event was canceled.</li>
                  <li>• She adapted well to new <strong>&quot;circumstances&quot;</strong>.</li>
                  <li>• The <strong>&quot;circumstances&quot;</strong> were beyond our control.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Circummstances (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Circummstances&quot; is a misspelling of &quot;circumstances&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Circummstances&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;circumstances&quot;</strong> when referring to facts or conditions.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Circumstances:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Situation</li>
                <li>• Condition</li>
                <li>• State</li>
                <li>• Position</li>
                <li>• Context</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Circummstances:</h4>
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
            <li>• <strong>&quot;Circumstances&quot;</strong> is spelled with only one &quot;m&quot; after the &quot;u&quot;.</li>
            <li>• Refers to facts or conditions connected with an event or action.</li>
            <li>• &quot;Circummstances&quot; is never correct in any context.</li>
            <li>• The word &quot;circumstances&quot; comes from the Latin &quot;circumstantia&quot; meaning standing around.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;circummstances&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;circummstances&quot; is never correct. The proper spelling is always &quot;circumstances.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;circumstances&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Circumstances&quot; are the facts or conditions connected with or relevant to an event or action.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;circumstances&quot; has only one &quot;m&quot; after the &quot;u&quot; and is related to &quot;circumstance&quot; (singular).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other common misspellings of &quot;circumstances&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but &quot;circummstances&quot; is one of the most frequent. Always use &quot;circumstances&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Circumstances&quot;</strong> is the correct spelling for facts or conditions connected with an event. &quot;Circummstances&quot; is never correct. Always use &quot;circumstances&quot; in your writing.</p>
      </div>
    </div>
  )
} 