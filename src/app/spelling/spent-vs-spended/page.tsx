import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spent vs Spended - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spent&quot; and &quot;spended&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpentVsSpendedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Spent vs Spended
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💰</span>
            <span className="text-2xl font-bold text-green-600">&quot;Spent&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spended&quot; is always incorrect - remember that &quot;spent&quot; is the irregular past form!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spended</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Spent</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense and past participle of spend.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Spent&quot; (Verb)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Irregular verb form</li>
                <li>• Past tense: spent</li>
                <li>• Past participle: spent</li>
                <li>• Same form for both</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Irregular Verb Rule</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Spend-spent-spent</li>
                <li>• No &quot;ed&quot; ending</li>
                <li>• Similar to &quot;bend&quot;</li>
                <li>• Similar to &quot;lend&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Common Confusion</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• People add &quot;ed&quot;</li>
                <li>• Think it&apos;s regular</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember pattern</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I <strong>spent</strong> all my money yesterday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She has <strong>spent</strong> hours studying.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>spent</strong> the weekend at the beach.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He had <strong>spent</strong> too much time working.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>spended</strong> all my money yesterday.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>spended</strong> hours studying.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>spended</strong> the weekend at the beach.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He had <strong>spended</strong> too much time working.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spent&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">&quot;Spent&quot; is irregular, not regular</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Pattern</h3>
              <p className="text-green-800">Spend = spent = spent (no change)</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;spent&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Spent time</strong> - used time</li>
                <li>• <strong>Spent money</strong> - used money</li>
                <li>• <strong>Spent energy</strong> - used energy</li>
                <li>• <strong>Spent resources</strong> - used resources</li>
                <li>• <strong>Spent effort</strong> - used effort</li>
                <li>• <strong>Spent capital</strong> - used capital</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I spent the money&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have spent the money&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;The money was spent&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;I had spent it&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Spending money&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To spend money&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;spent&quot; as &quot;spended&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from applying regular verb rules to an irregular verb. Many English verbs add &quot;-ed&quot; for past forms, but &quot;spend&quot; is irregular and becomes &quot;spent&quot; in both past tense and past participle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;spent&quot; and &quot;spend&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spend&quot; is the base form (present tense) meaning &quot;to use money, time, or energy,&quot; while &quot;spent&quot; is both the past tense and past participle form. For example: &quot;I spend money&quot; (present) vs &quot;I spent money&quot; (past).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there other verbs like &quot;spend&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English verbs are irregular and change form: bend-bent-bent, lend-lent-lent, send-sent-sent, and build-built-built all follow similar patterns where the past tense and past participle are the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spent&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spent&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the correct past form of the verb &quot;spend.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;spent&quot; and &quot;expended&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both mean to use up, &quot;spent&quot; is more commonly used for money, time, and energy in everyday language, while &quot;expended&quot; is more formal and often used in business or technical contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;spend&quot; is an irregular verb: spend-spent-spent. The past tense and past participle are the same, and neither uses the regular &quot;-ed&quot; ending. Think of it as a pattern to memorize.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;spent&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: used, consumed, expended, exhausted, depleted, and utilized. Each has slightly different nuances and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Is &quot;spended&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spended&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spent&quot; for both past tense and past participle of the verb &quot;spend.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;spent&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spent&quot; comes from the Old English word &quot;spendan&quot; meaning &quot;to spend&quot; or &quot;to consume.&quot; It&apos;s related to words in other Germanic languages and has been used in English since ancient times.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;spent&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spent&quot; can function as an adjective meaning &quot;exhausted&quot; or &quot;used up.&quot; For example: &quot;He was spent after the marathon&quot; or &quot;The spent batteries need replacement.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spent&quot;</strong> is the irregular past form of &quot;spend&quot; - same for past tense and past participle. 
          <br />
          <strong>&quot;Spended&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPEND = SPENT = SPENT (irregular verb pattern)&quot;</p>
        </div>
      </div>
    </div>
  )
}
