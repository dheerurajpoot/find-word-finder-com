import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suggest vs Sugest - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suggest&quot; and &quot;sugest&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuggestVsSugestPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Suggest vs Sugest
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-indigo-600">&quot;Suggest&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sugest&quot; is always incorrect - remember the &quot;gg&quot; in &quot;suggest&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sugest</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suggest</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to put forward an idea or proposal for consideration.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suggest&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;g&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Common Error</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;Sugest&quot; is wrong</li>
                <li>• Missing second &quot;g&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Aid</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SUG + GEST&quot;</li>
                <li>• &quot;sug&quot; like &quot;sub&quot;</li>
                <li>• Double &quot;g&quot; for emphasis</li>
                <li>• Related to &quot;gesture&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>suggest</strong> we try a different approach.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;What do you <strong>suggest</strong> we do?&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>suggested</strong> a solution.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Let me <strong>suggest</strong> an alternative.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>sugest</strong> we try a different approach.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggest&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What do you <strong>sugest</strong> we do?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggest&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>sugested</strong> a solution.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggested&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Let me <strong>sugest</strong> an alternative.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggest&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Double G Rule</h3>
              <p className="text-green-800">&quot;Suggest&quot; has double &quot;g&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think Gesture</h3>
              <p className="text-indigo-800">&quot;Suggest&quot; like &quot;gesture&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Pattern Recognition</h3>
              <p className="text-purple-800">Words with double &quot;g&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Break It Down</h3>
              <p className="text-blue-800">SUG + GEST = Suggest</p>
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
                <li>• <strong>Suggest to</strong> - propose to someone</li>
                <li>• <strong>Suggest that</strong> - propose that</li>
                <li>• <strong>Suggest doing</strong> - propose an action</li>
                <li>• <strong>Suggest a solution</strong> - propose a solution</li>
                <li>• <strong>Suggest an alternative</strong> - propose alternative</li>
                <li>• <strong>Suggest a change</strong> - propose a change</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I suggest&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I suggested&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will suggest&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Suggesting&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To suggest&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Suggest it&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suggest&quot; as &quot;sugest&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suggest&quot; has a double &quot;g&quot;. They might accidentally drop one &quot;g&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;suggest&quot; related to &quot;gesture&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words share the Latin root &quot;gerere&quot; meaning &quot;to carry&quot;. &quot;Suggest&quot; comes from &quot;suggerere&quot; (to carry under, bring up), while &quot;gesture&quot; comes from &quot;gerere&quot; (to carry, bear).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;suggest&quot; and &quot;recommend&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggest&quot; means to put forward an idea for consideration, while &quot;recommend&quot; means to endorse or advise something based on expertise. &quot;Recommend&quot; implies stronger endorsement than &quot;suggest.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;suggest&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suggest&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;suggest&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: propose, recommend, advise, put forward, mention, hint, and imply. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;gesture&quot; and remember that &quot;suggest&quot; has a double &quot;g&quot;. The double &quot;g&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUGGEST has double G&quot;. Or remember: &quot;SUG + GEST&quot; breaks down the word into manageable parts with the double &quot;g&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the base form of &quot;suggest&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggest&quot; is the base form (infinitive) of the verb. For example: &quot;I suggest&quot; (present), &quot;I suggested&quot; (past), &quot;I have suggested&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;suggest&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggest&quot; comes from the Latin &quot;suggerere&quot; meaning &quot;to bring up, supply, prompt, suggest,&quot; from &quot;sub&quot; (under) + &quot;gerere&quot; (to carry), literally meaning &quot;to carry under.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;suggest&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suggest&quot; is only a verb. The noun form is &quot;suggestion&quot;. For example: &quot;I suggest&quot; (verb), &quot;I made a suggestion&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;suggest&quot; and &quot;imply&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggest&quot; means to put forward an idea directly, while &quot;imply&quot; means to hint at or indicate something indirectly. &quot;Suggest&quot; is more explicit, while &quot;imply&quot; is more subtle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How do I use &quot;suggest&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggest&quot; can be used in various contexts: business meetings (suggesting solutions), creative projects (suggesting ideas), problem-solving (suggesting alternatives), and casual conversation (suggesting activities). It always refers to putting forward ideas for consideration.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suggest&quot;</strong> has a double &quot;g&quot; and means &quot;to put forward an idea or proposal for consideration.&quot; 
          <br />
          <strong>&quot;Sugest&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUG + GEST&quot; and remember the double &quot;g&quot;!</p>
        </div>
      </div>
    </div>
  )
}
