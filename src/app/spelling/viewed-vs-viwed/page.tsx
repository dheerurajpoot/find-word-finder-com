import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Viewed or Viwed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "viewed" and "viwed". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ViewedVsViwedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Viewed or Viwed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between "viewed" and "viwed"? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Viwed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">"Viwed" is a misspelling. The correct spelling is "viewed" with an "e" after the "i".</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Viewed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">"Viewed" is the correct spelling. It is the past tense of "view," meaning to look at or inspect.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Viewed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense of "view"; to have looked at or inspected something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>viewed</strong> the painting for several minutes.</li>
                  <li>• The document was <strong>viewed</strong> by the manager.</li>
                  <li>• I <strong>viewed</strong> the movie last night.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Viwed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">"Viwed" is a misspelling of "viewed" and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• "Viwed" is not used in standard English.</li>
                  <li>• Always use <strong>viewed</strong> when referring to the past tense of "view".</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Viewed:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Observed</li>
                <li>• Watched</li>
                <li>• Inspected</li>
                <li>• Examined</li>
                <li>• Noticed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Viwed:</h4>
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
            <li>• <strong>Viewed</strong> is spelled with an "e" after the "i".</li>
            <li>• It is the past tense of the verb "view".</li>
            <li>• "Viwed" is never correct in any context.</li>
            <li>• The word comes from the verb "view" meaning "to look at".</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is "viwed" ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, "viwed" is never correct. The proper spelling is always "viewed".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember "viewed" has an "e" after the "i".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does viewed mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Viewed means to have looked at or inspected something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use "viewed" in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, "viewed" is correct in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell "viewed"?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling "viwed" often happens by switching the order of the "e" and "w".</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Viewed</strong> is the correct spelling, meaning to have looked at something. The misspelling "viwed" is never correct. Always use "viewed" when referring to the past tense of "view".</p>
      </div>
    </div>
  )
} 