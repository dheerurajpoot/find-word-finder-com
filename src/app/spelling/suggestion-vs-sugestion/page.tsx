import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suggestion vs Sugestion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suggestion&quot; and &quot;sugestion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuggestionVsSugestionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Suggestion vs Sugestion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Suggestion&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sugestion&quot; is always incorrect - remember the double &quot;g&quot; in &quot;suggestion&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sugestion</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suggestion</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;an idea or proposal put forward for consideration.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suggestion&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;g&quot;</li>
                <li>• Follows &quot;suggest&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">Common Error</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• &quot;Sugestion&quot; is wrong</li>
                <li>• Missing second &quot;g&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Memory Aid</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Think &quot;SUGGEST + ION&quot;</li>
                <li>• &quot;suggest&quot; like the verb</li>
                <li>• Double &quot;g&quot; for emphasis</li>
                <li>• Related to &quot;suggest&quot;</li>
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
                <p className="text-lg text-green-800">&quot;That&apos;s a good <strong>suggestion</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I have a <strong>suggestion</strong> for you.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>suggestion</strong> was helpful.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Consider my <strong>suggestion</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s a good <strong>sugestion</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggestion&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have a <strong>sugestion</strong> for you.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggestion&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sugestion</strong> was helpful.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggestion&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Consider my <strong>sugestion</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suggestion&quot;</p>
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
              <p className="text-green-800">&quot;Suggestion&quot; has double &quot;g&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Think Suggest</h3>
              <p className="text-lime-800">&quot;Suggestion&quot; like &quot;suggest&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Pattern Recognition</h3>
              <p className="text-emerald-800">Words ending with &quot;-ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Break It Down</h3>
              <p className="text-cyan-800">SUGGEST + ION = Suggestion</p>
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
                <li>• <strong>Good suggestion</strong> - helpful idea</li>
                <li>• <strong>Helpful suggestion</strong> - useful idea</li>
                <li>• <strong>Practical suggestion</strong> - feasible idea</li>
                <li>• <strong>Creative suggestion</strong> - innovative idea</li>
                <li>• <strong>Reasonable suggestion</strong> - sensible idea</li>
                <li>• <strong>Alternative suggestion</strong> - different idea</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The suggestion helps&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suggestion provides guidance&quot;</li>
                <li>• <strong>Object:</strong> &quot;I made a suggestion&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Suggestion&apos;s value&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many suggestions&quot;</li>
                <li>• <strong>Article:</strong> &quot;A suggestion&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suggestion&quot; as &quot;sugestion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suggestion&quot; has a double &quot;g&quot;. They might accidentally drop one &quot;g&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Is &quot;suggestion&quot; related to &quot;suggest&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suggestion&quot; comes from the verb &quot;suggest&quot;. Think of it as &quot;the result of suggesting&quot; - the noun form of the action of putting forward an idea.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;suggestion&quot; and &quot;suggestion&quot;?</h3>
              <p className="text-lg text-gray-700">A: There is no difference - &quot;suggestion&quot; is the correct spelling. &quot;Sugestion&quot; (with one &quot;g&quot;) is always incorrect and should never be used in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;suggestion&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suggestion&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suggestion&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: proposal, recommendation, idea, advice, tip, hint, and counsel. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suggest&quot; and remember that &quot;suggestion&quot; has a double &quot;g&quot;. The double &quot;g&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUGGESTION has double G&quot;. Or remember: &quot;SUGGEST + ION&quot; breaks down the word into manageable parts with the double &quot;g&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the base form of &quot;suggestion&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggest&quot; is the base form (infinitive) of the verb. For example: &quot;I suggest&quot; (verb), &quot;I made a suggestion&quot; (noun). &quot;Suggestion&quot; is the noun form derived from the verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;suggestion&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggestion&quot; comes from the Latin &quot;suggestio&quot; meaning &quot;a bringing up, a prompting, suggestion,&quot; from &quot;suggerere&quot; meaning &quot;to bring up, supply, prompt, suggest.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suggestion&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suggestion&quot; is only a noun. The verb form is &quot;to suggest&quot;. For example: &quot;I suggest&quot; (verb), &quot;I made a suggestion&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;suggestion&quot; and &quot;recommendation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggestion&quot; is a general idea or proposal put forward for consideration, while &quot;recommendation&quot; is a stronger endorsement or advice based on expertise or experience. &quot;Recommendation&quot; implies more authority.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;suggestion&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suggestion&quot; can be used in various contexts: business meetings (making suggestions), creative projects (creative suggestions), problem-solving (helpful suggestions), and casual conversation (casual suggestions). It always refers to ideas put forward for consideration.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suggestion&quot;</strong> has a double &quot;g&quot; and means &quot;an idea or proposal put forward for consideration.&quot; 
          <br />
          <strong>&quot;Sugestion&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUGGEST + ION&quot; and remember the double &quot;g&quot;!</p>
        </div>
      </div>
    </div>
  )
}
