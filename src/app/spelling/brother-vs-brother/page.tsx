import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Brother or Broter - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brother&quot; and &quot;broter&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BrotherVsBroterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Brother or Broter</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;brother&quot; and &quot;broter&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Broter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Broter&quot; is a misspelling. The correct spelling is &quot;brother&quot; with &quot;th&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Brother</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Brother&quot; is the correct spelling. It refers to a male sibling or close male friend.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Brother (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A male sibling; a close male friend; a member of a fraternal organization.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• My <strong>brother</strong> is older than me.</li>
                  <li>• He&apos;s like a <strong>brother</strong> to me.</li>
                  <li>• The <strong>brother</strong> helped me move.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Broter (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Broter&quot; is a misspelling of &quot;brother&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Broter&quot; is not used in standard English.</li>
                  <li>• Always use <strong>brother</strong> when referring to a male sibling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Brother:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Sibling</li>
                <li>• Bro</li>
                <li>• Buddy</li>
                <li>• Mate</li>
                <li>• Comrade</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Broter:</h4>
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
            <li>• <strong>Brother</strong> is spelled with &quot;th&quot;, not &quot;t&quot;.</li>
            <li>• The word comes from Old English &quot;brōþor&quot; meaning brother.</li>
            <li>• Used as a noun only.</li>
            <li>• Common in family, friendship, and fraternal contexts.</li>
            <li>• &quot;Broter&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;broter&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;broter&quot; is never correct. The proper spelling is always &quot;brother.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bro&quot; + &quot;ther&quot; - the word has &quot;th&quot; like &quot;mother&quot; or &quot;father.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between brother and sister?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Brother&quot; refers to a male sibling, while &quot;sister&quot; refers to a female sibling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can brother be used for non-family members?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;brother&quot; can be used metaphorically for close male friends or fraternal organization members.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;brother&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: big brother, little brother, brother-in-law, blood brother, and brotherhood.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Brother</strong> is the correct spelling with &quot;th&quot;. It refers to a male sibling or close male friend. The misspelling &quot;broter&quot; is never correct. Use &quot;brother&quot; when referring to family relationships, close friendships, or fraternal connections.</p>
      </div>
    </div>
  )
} 