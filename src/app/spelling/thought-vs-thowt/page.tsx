import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thought or Thowt - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thought&quot; and &quot;thowt&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThoughtVsThowtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thought or Thowt</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thought&quot; and &quot;thowt&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thowt</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thowt&quot; is a misspelling. The correct spelling is &quot;thought&quot; with &quot;gh&quot; before the &quot;t.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thought</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thought&quot; is the correct spelling. It means the process of thinking or an idea.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thought (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The process of thinking; an idea or opinion; past tense of think.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>thought</strong> about the problem.</li>
                  <li>• That&apos;s an interesting <strong>thought</strong>.</li>
                  <li>• She gave it careful <strong>thought</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thowt (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thowt&quot; is a misspelling of &quot;thought&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thowt&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thought</strong> when referring to thinking.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thought:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Idea</li>
                <li>• Notion</li>
                <li>• Concept</li>
                <li>• Opinion</li>
                <li>• Reflection</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thowt:</h4>
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
            <li>• <strong>Thought</strong> is spelled with &quot;gh&quot; before the &quot;t.&quot;</li>
            <li>• It can be used as both a noun and the past tense of think.</li>
            <li>• &quot;Thowt&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þōht&quot; meaning &quot;thought.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thowt&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thowt&quot; is never correct. The proper spelling is always &quot;thought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thought&quot; has &quot;gh&quot; before the &quot;t&quot; - think of it as &quot;th-ought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thought&quot; and &quot;idea&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thought&quot; refers to the process of thinking, while &quot;idea&quot; refers to a specific concept or notion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thought&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thought&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thowt&quot; often happens by omitting the &quot;gh&quot; before the &quot;t.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: food for thought, thought process, second thought, and thought-provoking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thought&quot; always about thinking?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thought&quot; always refers to the process of thinking or the result of thinking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thought&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thought&quot; is the past tense and past participle of the verb &quot;think.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thought</strong> is the correct spelling with &quot;gh&quot; before the &quot;t.&quot; It means the process of thinking or an idea. The misspelling &quot;thowt&quot; is never correct. Always use &quot;thought&quot; when referring to thinking, ideas, or as the past tense of think.</p>
      </div>
    </div>
  )
} 