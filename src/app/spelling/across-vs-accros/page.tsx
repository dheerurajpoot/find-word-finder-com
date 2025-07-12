import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Across or Accros - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "across" and "accros". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcrossVsAccrosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Across or Accros</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between "across" and "accros"? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accros</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">"Accros" is a misspelling. The correct spelling is "across" with "ss" at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Across</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">"Across" is the correct spelling. It means from one side to the other or on the opposite side.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Across (preposition/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">From one side to the other; on the opposite side; extending over or covering a surface.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She walked <strong>across</strong> the street.</li>
                  <li>• The bridge goes <strong>across</strong> the river.</li>
                  <li>• The store is <strong>across</strong> from the bank.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accros (preposition/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">"Accros" is a misspelling of "across" and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• "Accros" is not used in standard English.</li>
                  <li>• Always use <strong>across</strong> when referring to direction.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Across:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Over</li>
                <li>• Through</li>
                <li>• Beyond</li>
                <li>• Opposite</li>
                <li>• Throughout</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accros:</h4>
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
          <li>• <strong>Across</strong> is spelled with "ss" at the end, not "s".</li>
          <li>• The word comes from Old English "on crois" meaning on cross.</li>
          <li>• Used as both preposition and adverb.</li>
          <li>• Common in everyday language and directions.</li>
          <li>• "Accros" is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is "accros" ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, "accros" is never correct. The proper spelling is always "across."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as "a" + "cross" - like "a" with "cross", with double "s".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What's the difference between across and through?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: "Across" implies movement over a surface, while "through" implies movement within something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can across be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, "across" is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling "accros" likely occurs because of confusion about the number of "s"s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using "across"?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: across from, across the board, across the country, across the street, and across the pond.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Across</strong> is the correct spelling with "ss" at the end. It means from one side to the other or on the opposite side. The misspelling "accros" is never correct.</p>
      </div>
    </div>
  )
} 