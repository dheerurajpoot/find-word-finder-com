import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Trousers or Trouses - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;trousers&quot; and &quot;trouses&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TrousersVsTrousesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Trousers or Trouses</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;trousers&quot; and &quot;trouses&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Trouses</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Trouses&quot; is a common misspelling of the word &quot;trousers&quot; and is not correct in standard English.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Trousers</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Trousers&quot; is the correct spelling. It refers to an outer garment covering the body from the waist to the ankles, with a separate part for each leg.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Trousers (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An outer garment covering the body from the waist to the ankles, with a separate part for each leg; pants.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He wore black <strong>trousers</strong> to the meeting.</li>
                  <li>• The <strong>trousers</strong> were too long.</li>
                  <li>• She bought new <strong>trousers</strong> for work.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Trouses:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Not a recognized English word. Likely a misspelling of &quot;trousers&quot;.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• (Incorrect) The trouses are blue. <span className="text-red-600">(should be &quot;trousers&quot;)</span></li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Trousers:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Pants</li>
                <li>• Slacks</li>
                <li>• Breeches</li>
                <li>• Bottoms</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Trouses:</h4>
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
            <li>• The correct spelling is <strong>trousers</strong>, not &quot;trouses&quot;.</li>
            <li>• Double-check your spelling, especially for clothing terms.</li>
            <li>• Always use standard spellings in formal writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;trouses&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;trouses&quot; is not a correct spelling in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;trousers&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Trousers&quot; means pants or an outer garment for the legs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I use &quot;trousers&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Example: &quot;He bought new trousers for the interview.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Use <strong>trousers</strong> for the correct spelling. <strong>Trouses</strong> is a misspelling and should be avoided. Always double-check your spelling for accuracy.</p>
      </div>
    </div>
  )
} 