import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bring or Bringing - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling and usage between &quot;bring&quot; and &quot;bringing&quot;. Discover definitions, usage examples, and when to use each form.',
}

export default function BringVsBringingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bring or Bringing</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Form is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bring&quot; and &quot;bringing&quot;? Learn the correct usage, meaning, and when to use each form properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bring (base form)</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bring&quot; is the base form of the verb meaning to carry or convey something.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bringing (present participle)</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bringing&quot; is the present participle form used in continuous tenses.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bring (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To carry or convey something to a place; to cause something to come with you.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Please <strong>bring</strong> your book tomorrow.</li>
                  <li>• I will <strong>bring</strong> the food to the party.</li>
                  <li>• Can you <strong>bring</strong> me a glass of water?</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bringing (present participle):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The -ing form of bring, used in continuous tenses and as a gerund.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I am <strong>bringing</strong> the documents.</li>
                  <li>• <strong>Bringing</strong> gifts is a nice gesture.</li>
                  <li>• She was <strong>bringing</strong> the children home.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bring:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Carry</li>
                <li>• Convey</li>
                <li>• Transport</li>
                <li>• Fetch</li>
                <li>• Deliver</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bringing:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Carrying</li>
                <li>• Conveying</li>
                <li>• Transporting</li>
                <li>• Fetching</li>
                <li>• Delivering</li>
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
            <li>• <strong>Bring</strong> is the base form of the verb.</li>
            <li>• <strong>Bringing</strong> is the present participle form.</li>
            <li>• Both forms are correct but serve different grammatical functions.</li>
            <li>• Common in everyday language for movement and transportation.</li>
            <li>• Remember: &quot;I bring&quot; vs &quot;I am bringing.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are both forms correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, both &quot;bring&quot; and &quot;bringing&quot; are correct, but they serve different grammatical functions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I know which form to use?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;bring&quot; for simple present/future, and &quot;bringing&quot; for continuous tenses or as a gerund.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bring and take?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bring&quot; implies movement toward the speaker, while &quot;take&quot; implies movement away from the speaker.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bringing be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bringing&quot; can function as a gerund (verbal noun), as in &quot;Bringing gifts is thoughtful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often confuse these forms?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The confusion likely occurs because of tense usage and grammatical function differences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bring about, bring up, bring down, bring to light, and bringing home the bacon.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bring</strong> is the base form of the verb meaning to carry or convey something. <strong>Bringing</strong> is the present participle form used in continuous tenses and as a gerund. Both are correct but serve different grammatical functions. Use &quot;bring&quot; for simple tenses and &quot;bringing&quot; for continuous actions or as a noun.</p>
      </div>
    </div>
  )
} 