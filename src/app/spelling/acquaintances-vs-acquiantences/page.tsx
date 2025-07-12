import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acquaintances or Acquiantences - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acquaintances&quot; and &quot;acquiantences&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcquaintancesVsAcquiantencesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acquaintances or Acquiantences</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acquaintances&quot; and &quot;acquiantences&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acquiantences</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acquiantences&quot; is a misspelling. The correct spelling is &quot;acquaintances&quot; with &quot;acquaint&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acquaintances</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acquaintances&quot; is the correct spelling. It refers to people one knows slightly or relationships of knowing someone.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acquaintances (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">People one knows slightly; knowledge or experience of something; relationships of knowing someone.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has many <strong>acquaintances</strong> from work.</li>
                  <li>• I have several <strong>acquaintances</strong> in the city.</li>
                  <li>• They are casual <strong>acquaintances</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acquiantences (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acquiantences&quot; is a misspelling of &quot;acquaintances&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acquiantences&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acquaintances</strong> when referring to people you know.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acquaintances:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Contacts</li>
                <li>• Associates</li>
                <li>• Connections</li>
                <li>• Familiarities</li>
                <li>• Knowledge</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acquiantences:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Acquaintances</strong> is spelled with &quot;acquaint&quot; at the beginning, not &quot;acquiant&quot;.</li>
          <li>• The word comes from &quot;acquaintance&quot; + &quot;s&quot; plural ending.</li>
          <li>• Used in social and formal contexts.</li>
          <li>• Can refer to both people and knowledge of subjects.</li>
          <li>• &quot;Acquiantences&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acquiantences&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acquiantences&quot; is never correct. The proper spelling is always &quot;acquaintances.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;acquaintance&quot; + &quot;s&quot; - like &quot;acquaintance&quot; with &quot;s&quot; ending, not &quot;acquiantence&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acquaintances and friends?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Acquaintances are people you know slightly, while friends are people you have closer relationships with.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acquaintances be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acquaintances&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acquiantences&quot; likely occurs because of confusion about the spelling of the root word &quot;acquaint.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acquaintances&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: casual acquaintances, mutual acquaintances, old acquaintances, and business acquaintances.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acquaintances</strong> is the correct spelling with &quot;acquaint&quot; at the beginning. It refers to people one knows slightly or relationships of knowing someone. The misspelling &quot;acquiantences&quot; is never correct.</p>
      </div>
    </div>
  )
} 