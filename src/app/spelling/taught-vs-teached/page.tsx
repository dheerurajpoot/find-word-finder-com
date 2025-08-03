import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Taught vs Teached - Correct Spelling & Irregular Verb Forms | Word Finder',
  description: 'Learn the correct spelling: &quot;taught&quot; vs &quot;teached&quot;. Master irregular verb forms, usage examples, and avoid common spelling mistakes.',
}

export default function TaughtVsTeachedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Taught vs Teached</h1>
        <p className="text-xl text-gray-600">Irregular Verb Forms & Educational Guide</p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-purple-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Irregular Verb Forms & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;taught&quot; and &quot;teached&quot;. Learn irregular verb forms, educational terminology, and proper usage patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Teached</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Teached&quot; is incorrect. The proper spelling is &quot;taught&quot; (irregular verb form).</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Taught</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Taught&quot; is the correct spelling. It means &quot;past tense and past participle of teach.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Taught (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;teach&quot;; to have instructed or educated someone.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>taught</strong> me how to swim.</li>
                  <li>• He has <strong>taught</strong> for twenty years.</li>
                  <li>• They <strong>taught</strong> us the basics.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Teached (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Teached&quot; is a misspelling and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Teached&quot; is never used in standard English.</li>
                  <li>• Always use <strong>taught</strong> when referring to past teaching.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Taught:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Instructed</li>
                <li>• Educated</li>
                <li>• Trained</li>
                <li>• Coached</li>
                <li>• Guided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Teached:</h4>
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
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Irregular Verb Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Taught</strong> is the irregular past tense of &quot;teach.&quot;</li>
            <li>• &quot;Teach&quot; is an irregular verb: teach → taught → taught.</li>
            <li>• &quot;Teached&quot; is a common misspelling that should be avoided.</li>
            <li>• Remember: teach → taught (not teached).</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;taught&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Taught&quot; is the irregular past tense and past participle of the verb &quot;teach.&quot; It functions as a verb in sentences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;taught&quot; differ from &quot;thought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Taught&quot; is the past tense of &quot;teach&quot; (to instruct), while &quot;thought&quot; is the past tense of &quot;think&quot; (to use the mind).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;taught&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Taught&quot; is a verb that can function as the past tense or past participle form of &quot;teach.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;taught&quot; be used in academic writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;taught&quot; is perfectly acceptable in academic and formal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;taught&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Taught&quot; comes from Old English &quot;tǣhte&quot; (past tense of &quot;tǣcan&quot; meaning &quot;to show, point out, declare&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;taught&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Taught&quot; can be used as a past tense verb (&quot;She taught math&quot;), past participle (&quot;I have taught&quot;), or passive voice (&quot;I was taught&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;taught&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: taught effectively, taught for years, taught the basics, taught by example, taught with passion, and taught successfully.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;taught&quot; and &quot;teached&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;taught&quot; has &quot;augh&quot; (like &quot;caught&quot;), and emphasize that &quot;teached&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Irregular Verb Summary</h2>
        <p className="text-lg md:text-xl text-purple-800 leading-relaxed">Verb Rule: <strong>Taught</strong> is the correct spelling with &quot;augh&quot;: t-aught. &quot;Taught&quot; is the irregular past tense and past participle of the verb &quot;teach&quot; meaning to have instructed or educated. The incorrect spelling &quot;teached&quot; violates basic irregular verb formation rules and is never acceptable in any context. Always use &quot;taught&quot; when referring to past teaching or instruction.</p>
      </div>
    </div>
  )
} 