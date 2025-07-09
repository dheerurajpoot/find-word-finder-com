import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apart or Appart - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apart&quot; and &quot;appart&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApartVsAppartPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apart or Appart</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apart&quot; and &quot;appart&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Appart</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Appart&quot; is a misspelling. The correct spelling is &quot;apart&quot; with one &quot;p&quot; and one &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apart</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apart&quot; is the correct spelling. It means separated, away from each other, or into pieces.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apart (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Separated, away from each other, or into pieces; not together.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The two friends live <strong>apart</strong> now.</li>
                  <li>• He took the machine <strong>apart</strong> to fix it.</li>
                  <li>• They were born three years <strong>apart</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Appart (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Appart&quot; is a misspelling of &quot;apart&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Appart&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apart</strong> when describing separation.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apart:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Separated</li>
                <li>• Away</li>
                <li>• Aside</li>
                <li>• Distant</li>
                <li>• Isolated</li>
                <li>• Disconnected</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Appart:</h4>
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
            <li>• <strong>Apart</strong> is spelled with one &quot;p&quot; and one &quot;r&quot;.</li>
            <li>• Used to describe separation or distance between things.</li>
            <li>• Can function as both an adverb and an adjective.</li>
            <li>• The word comes from Old French &quot;a part&quot; meaning &quot;to the side.&quot;</li>
            <li>• &quot;Appart&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;apart from&quot; or &quot;set apart.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;appart&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appart&quot; is never correct. The proper spelling is always &quot;apart&quot; with one &quot;p&quot; and one &quot;r&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;a-part&quot; - it&apos;s easier to remember when you break it down into two parts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apart and a part?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Apart&quot; means separated, while &quot;a part&quot; means one piece or component of something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apart be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apart&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;appart&quot; likely occurs because of confusion with words that have double consonants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apart&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: apart from, set apart, take apart, fall apart, and worlds apart.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apart always about physical separation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apart&quot; can refer to physical, emotional, or conceptual separation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apart be used as a preposition?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Apart from&quot; functions as a prepositional phrase meaning &quot;except for&quot; or &quot;besides.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apart</strong> is the correct spelling with one &quot;p&quot; and one &quot;r&quot;. It means separated, away from each other, or into pieces. The misspelling &quot;appart&quot; is never correct. Use &quot;apart&quot; to describe separation or distance between things.</p>
      </div>
    </div>
  )
} 