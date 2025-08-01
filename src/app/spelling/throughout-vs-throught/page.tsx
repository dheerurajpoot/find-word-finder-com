import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Throughout or Throught - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;throughout&quot; and &quot;throught&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThroughoutVsThroughtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Throughout or Throught</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;throughout&quot; and &quot;throught&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Throught</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Throught&quot; is a misspelling. The correct spelling is &quot;throughout&quot; with &quot;out&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Throughout</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Throughout&quot; is the correct spelling. It means in every part of or during the whole time.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Throughout (preposition/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In every part of; during the whole time; from beginning to end.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The story was interesting <strong>throughout</strong>.</li>
                  <li>• She worked <strong>throughout</strong> the night.</li>
                  <li>• The disease spread <strong>throughout</strong> the city.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Throught (preposition/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Throught&quot; is a misspelling of &quot;throughout&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Throught&quot; is not used in standard English.</li>
                  <li>• Always use <strong>throughout</strong> when referring to complete coverage.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Throughout:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• All over</li>
                <li>• Everywhere</li>
                <li>• Completely</li>
                <li>• Entirely</li>
                <li>• Wholly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Throught:</h4>
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
            <li>• <strong>Throughout</strong> is spelled with &quot;out&quot; at the end.</li>
            <li>• It can be used as both a preposition and an adverb.</li>
            <li>• &quot;Throught&quot; is never correct in any context.</li>
            <li>• The word combines &quot;through&quot; and &quot;out&quot; to mean complete coverage.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;throught&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;throught&quot; is never correct. The proper spelling is always &quot;throughout.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;throughout&quot; has &quot;out&quot; at the end - think of it as &quot;through-out.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;throughout&quot; and &quot;all over&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Throughout&quot; is more formal and can refer to time as well as space, while &quot;all over&quot; is more casual.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;throughout&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;throughout&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;throughout&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;throught&quot; often happens by omitting the &quot;out&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;throughout&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: throughout the day, throughout history, throughout the world, and throughout the book.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;throughout&quot; always about space?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;throughout&quot; can refer to both space (everywhere) and time (during the whole period).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;throughout&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;throughout&quot; is only used as a preposition or adverb.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Throughout</strong> is the correct spelling with &quot;out&quot; at the end. It means in every part of or during the whole time. The misspelling &quot;throught&quot; is never correct. Always use &quot;throughout&quot; when referring to complete coverage in space or time.</p>
      </div>
    </div>
  )
} 