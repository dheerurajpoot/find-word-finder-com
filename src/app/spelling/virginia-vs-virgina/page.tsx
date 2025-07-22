import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Virginia or Virgina - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Virginia&quot; and &quot;Virgina&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VirginiaVsVirginaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Virginia or Virgina</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Virginia&quot; and &quot;Virgina&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Virgina</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Virgina&quot; is a misspelling. The correct spelling is &quot;Virginia&quot; with an &quot;i&quot; after the &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Virginia</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Virginia&quot; is the correct spelling. It is a U.S. state located on the East Coast, known for its history and natural beauty.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Virginia (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A state in the eastern United States, one of the original 13 colonies.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We visited <strong>Virginia</strong> last summer.</li>
                  <li>• <strong>Virginia</strong> is known for its beautiful mountains and beaches.</li>
                  <li>• The University of <strong>Virginia</strong> is a prestigious school.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Virgina (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Virgina&quot; is a misspelling of &quot;Virginia&quot; and is not a valid place name.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Virgina&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Virginia</strong> when referring to the U.S. state.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Virginia:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• The Old Dominion</li>
                <li>• VA (abbreviation)</li>
                <li>• Commonwealth of Virginia</li>
                <li>• The Mother of Presidents</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Virgina:</h4>
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
            <li>• <strong>Virginia</strong> is spelled with an &quot;i&quot; after the &quot;g&quot;.</li>
            <li>• It is a proper noun and should always be capitalized.</li>
            <li>• &quot;Virgina&quot; is never correct in any context.</li>
            <li>• Virginia is one of the original 13 U.S. colonies.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Virgina&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Virgina&quot; is never correct. The proper spelling is always &quot;Virginia&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;Virginia&quot; has an &quot;i&quot; after the &quot;g&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is Virginia known for?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Virginia is known for its role in American history, beautiful landscapes, and as the birthplace of many U.S. presidents.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;Virginia&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;Virginia&quot; is a proper noun and is used in all contexts when referring to the state.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;Virginia&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;Virgina&quot; often happens by omitting the second &quot;i&quot; after the &quot;g&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Virginia</strong> is the correct spelling, referring to the U.S. state. The misspelling &quot;Virgina&quot; is never correct. Always use &quot;Virginia&quot; when referring to the state or the name.</p>
      </div>
    </div>
  )
} 