import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Taught vs Tought - Correct Spelling & Verb Forms | Word Finder',
  description: 'Learn the correct spelling: &quot;taught&quot; vs &quot;tought&quot;. Master irregular verb forms, usage examples, and avoid common spelling mistakes.',
}

export default function TaughtVsToughtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Taught vs Tought
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Educational Spelling Guide: Mastering Irregular Verb Forms
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Taught&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Tought&quot; is always incorrect - remember the irregular verb form!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Tought</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common misspelling that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Taught</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense and past participle of teach.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Verb Conjugation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Verb Conjugation: To Teach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Present Tense</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• I <strong>teach</strong></li>
                <li>• You <strong>teach</strong></li>
                <li>• He/She <strong>teaches</strong></li>
                <li>• We <strong>teach</strong></li>
                <li>• They <strong>teach</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Past Tense</h3>
              <ul className="text-green-800 space-y-2">
                <li>• I <strong>taught</strong></li>
                <li>• You <strong>taught</strong></li>
                <li>• He/She <strong>taught</strong></li>
                <li>• We <strong>taught</strong></li>
                <li>• They <strong>taught</strong></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Past Participle</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• I have <strong>taught</strong></li>
                <li>• You have <strong>taught</strong></li>
                <li>• He/She has <strong>taught</strong></li>
                <li>• We have <strong>taught</strong></li>
                <li>• They have <strong>taught</strong></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Educational Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>taught</strong> me how to swim.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He has <strong>taught</strong> for twenty years.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>taught</strong> us the basics.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I was <strong>taught</strong> by the best.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>tought</strong> me&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;taught&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has <strong>tought</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;taught&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>tought</strong> us&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;taught&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I was <strong>tought</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;taught&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Educational Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AUGH Rule</h3>
              <p className="text-yellow-800">&quot;Taught&quot; has &quot;augh&quot; like &quot;caught&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Education</h3>
              <p className="text-blue-800">Taught = Education (both have &quot;au&quot;)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">T-aught (like caught)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Check Patterns</h3>
              <p className="text-purple-800">Most &quot;-aught&quot; words are irregular</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Educational Contexts */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Educational Contexts & Usage</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Educational Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Taught a lesson</strong> - provided instruction</li>
                <li>• <strong>Taught by example</strong> - demonstrated</li>
                <li>• <strong>Taught the basics</strong> - fundamental skills</li>
                <li>• <strong>Taught for years</strong> - long-term teaching</li>
                <li>• <strong>Taught effectively</strong> - successful instruction</li>
                <li>• <strong>Taught with passion</strong> - enthusiastic teaching</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;She taught math&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have taught&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;I was taught&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;He has taught&quot;</li>
                <li>• <strong>Past perfect:</strong> &quot;She had taught&quot;</li>
                <li>• <strong>Conditional:</strong> &quot;If I had taught&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;taught&quot; as &quot;tought&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse it with other irregular verbs or may not be familiar with the proper past tense form of &quot;teach.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;taught&quot; and &quot;thought&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Taught&quot; is the past tense of &quot;teach&quot; (to instruct), while &quot;thought&quot; is the past tense of &quot;think&quot; (to use the mind).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;taught&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;taught&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;taught&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: instructed, educated, trained, coached, guided, mentored, and tutored.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do you remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;taught&quot; has &quot;augh&quot; (like &quot;caught&quot;), and think of the word as t-aught with the &quot;augh&quot; sound clearly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;taught&quot; always used in educational contexts?</h3>
              <p className="text-lg text-gray-700">A: While often used in educational contexts, &quot;taught&quot; can also be used in everyday conversation to describe any form of instruction or learning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;taught&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Taught&quot; comes from Old English &quot;tǣhte&quot; (past tense of &quot;tǣcan&quot; meaning &quot;to show, point out, declare&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;taught&quot; be used to describe non-academic instruction?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;taught&quot; can describe any form of instruction, whether academic (taught math) or practical (taught cooking).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are common collocations with &quot;taught&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common collocations include: taught effectively, taught for years, taught the basics, taught by example, taught with passion, and taught successfully.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do you teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;taught&quot; has &quot;augh&quot; (like &quot;caught&quot;), and emphasize the pronunciation: t-aught with the &quot;augh&quot; sound.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Taught&quot;</strong> has &quot;augh&quot; and is the past tense of &quot;teach.&quot; 
          <br />
          <strong>&quot;Tought&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Taught = Caught&quot; (both have &quot;augh&quot;)</p>
        </div>
      </div>
    </div>
  )
} 