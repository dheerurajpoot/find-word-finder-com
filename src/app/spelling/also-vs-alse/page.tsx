import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Also or Alse - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;also&quot; and &quot;alse&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlsoVsAlsePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Also or Alse</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;also&quot; and &quot;alse&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alse</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alse&quot; is a misspelling. The correct spelling is &quot;also&quot; with one &quot;l&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Also</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Also&quot; is the correct spelling. It means in addition, besides, or as well.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Also (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In addition, besides, or as well; moreover.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>also</strong> want to attend the meeting.</li>
                  <li>• She is <strong>also</strong> a talented musician.</li>
                  <li>• We <strong>also</strong> need to consider the budget.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alse (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alse&quot; is a misspelling of &quot;also&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alse&quot; is not used in standard English.</li>
                  <li>• Always use <strong>also</strong> when adding information.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Also:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Additionally</li>
                <li>• Furthermore</li>
                <li>• Moreover</li>
                <li>• Besides</li>
                <li>• As well</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alse:</h4>
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
            <li>• <strong>Also</strong> is spelled with one &quot;l&quot; at the beginning, not two.</li>
            <li>• Used to add information or indicate similarity.</li>
            <li>• Can be used at the beginning, middle, or end of sentences.</li>
            <li>• The word comes from Old English &quot;eall + swa&quot; meaning &quot;all so.&quot;</li>
            <li>• &quot;Alse&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alse&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alse&quot; is never correct. The proper spelling is always &quot;also.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;al-so&quot; - it has only one &quot;l&quot; like the word &quot;also.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can also be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;also&quot; can be used at the beginning of a sentence, though it&apos;s more common in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between also and too?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Also&quot; is more formal and can be used in more positions, while &quot;too&quot; is more informal and usually comes at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;also&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: also known as, also called, and also available.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alse&quot; occurs because people think it should have two &quot;l&quot;s like the word &quot;all.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can also be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;also&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is also always about adding information?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;also&quot; always indicates that additional information is being provided or that something is in addition to what was mentioned.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Also</strong> is the correct spelling with one &quot;l&quot; at the beginning. It means in addition or as well. The misspelling &quot;alse&quot; is never correct. Use &quot;also&quot; to add information or indicate similarity.</p>
      </div>
    </div>
  )
} 