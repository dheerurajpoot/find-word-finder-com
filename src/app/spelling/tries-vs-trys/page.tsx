import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tries or Trys - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;tries&quot; and &quot;trys&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TriesVsTrysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tries or Trys</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tries&quot; and &quot;trys&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Trys</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Trys&quot; is a common misspelling of the word &quot;tries&quot; and is not correct in standard English.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tries</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tries&quot; is the correct spelling. It is the third person singular present tense of &quot;try&quot; or the plural form of &quot;try&quot; (noun).</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tries (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">(Verb) Third person singular present tense of &quot;try&quot;; (Noun) Plural of &quot;try&quot; (an attempt).</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>tries</strong> her best every day.</li>
                  <li>• He made several <strong>tries</strong> before succeeding.</li>
                  <li>• The player <strong>tries</strong> to score a goal.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Trys:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Not a recognized English word. Likely a misspelling of &quot;tries&quot;.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• (Incorrect) She trys to help. <span className="text-red-600">(should be &quot;tries&quot;)</span></li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tries:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Attempts</li>
                <li>• Efforts</li>
                <li>• Endeavors</li>
                <li>• Tries (verb: attempts)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Trys:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No synonyms; not a valid word)</li>
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
            <li>• The correct spelling is <strong>tries</strong>, not &quot;trys&quot;.</li>
            <li>• For verbs ending in -y, change the y to i and add -es for the third person singular.</li>
            <li>• Always use standard spellings in formal writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;trys&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;trys&quot; is not a correct spelling in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;tries&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tries&quot; means attempts or efforts, or is the third person singular of &quot;try&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I use &quot;tries&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Example: &quot;He tries to finish his work on time.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Use <strong>tries</strong> for the correct spelling. <strong>Trys</strong> is a misspelling and should be avoided. Always double-check your spelling for accuracy.</p>
      </div>
    </div>
  )
} 