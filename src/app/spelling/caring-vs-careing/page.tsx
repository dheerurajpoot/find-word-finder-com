import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Caring or Careing - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;caring&quot; and &quot;careing&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaringVsCareingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Caring or Careing</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;caring&quot; and &quot;careing&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Careing</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Careing&quot; is a misspelling. The correct spelling is &quot;caring&quot; with &quot;ing&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Caring</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Caring&quot; is the correct spelling. It means showing concern and kindness for others.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Caring (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Showing concern and kindness for others; the act of looking after someone.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is a very <strong>caring</strong> person.</li>
                  <li>• He was <strong>caring</strong> for his sick mother.</li>
                  <li>• The <strong>caring</strong> nurse comforted the patient.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Careing (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Careing&quot; is a misspelling of &quot;caring&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Careing&quot; is not used in standard English.</li>
                  <li>• Always use <strong>caring</strong> when referring to concern.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Caring:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Compassionate</li>
                <li>• Kind</li>
                <li>• Considerate</li>
                <li>• Thoughtful</li>
                <li>• Nurturing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Careing:</h4>
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
            <li>• <strong>Caring</strong> is spelled with &quot;ing&quot; at the end, not &quot;eing.&quot;</li>
            <li>• The word is the present participle form of &quot;care.&quot;</li>
            <li>• Can be used as both an adjective and a verb.</li>
            <li>• Often used to describe compassionate behavior or actions.</li>
            <li>• &quot;Careing&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;careing&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;careing&quot; is never correct. The proper spelling is always &quot;caring.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;care-ing&quot; - the word ends with &quot;ing&quot; like other present participles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between caring and kind?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to positive behavior, but &quot;caring&quot; specifically implies concern for others&apos; well-being.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;careing&quot; likely occurs because of confusion about the &quot;e&quot; before &quot;ing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;caring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: caring person, caring attitude, and caring for someone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can caring be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;caring&quot; can be used as a noun meaning the act of looking after someone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is caring only used for people?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;caring&quot; can be used for people, animals, or even objects that require attention.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word caring?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old English &quot;caru&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Caring</strong> is the correct spelling with &quot;ing&quot; at the end. It means showing concern and kindness for others. The misspelling &quot;careing&quot; is never correct. Use &quot;caring&quot; to describe compassionate behavior, concern for others, or the act of looking after someone.</p>
      </div>
    </div>
  )
} 