import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suing vs Sueing - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suing&quot; and &quot;sueing&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuingVsSueingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Suing vs Sueing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Suing&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sueing&quot; is always incorrect - remember to drop the &quot;e&quot; before adding &quot;ing&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sueing</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common error with verb conjugation.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suing</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper gerund form of &quot;sue&quot; meaning &quot;taking legal action.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suing&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Drops the &quot;e&quot; before &quot;ing&quot;</li>
                <li>• Follows verb conjugation rule</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Common Error</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• &quot;Sueing&quot; is wrong</li>
                <li>• Keeps the &quot;e&quot; before &quot;ing&quot;</li>
                <li>• Sounds logical but incorrect</li>
                <li>• Common mistake</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Memory Aid</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Think &quot;SUE - SUING&quot;</li>
                <li>• &quot;sue&quot; like the verb</li>
                <li>• Drop &quot;e&quot; before &quot;ing&quot;</li>
                <li>• Standard rule</li>
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
                <p className="text-lg text-green-800">&quot;They are <strong>suing</strong> the company.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I am <strong>suing</strong> for damages.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She is <strong>suing</strong> her employer.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The company is <strong>suing</strong> the contractor.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They are <strong>sueing</strong> the company.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suing&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I am <strong>sueing</strong> for damages.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suing&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is <strong>sueing</strong> her employer.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suing&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company is <strong>sueing</strong> the contractor.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suing&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">Drop E Rule</h3>
              <p className="text-green-800">&quot;Suing&quot; drops the &quot;e&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Sue</h3>
              <p className="text-rose-800">&quot;Suing&quot; like &quot;sue&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Pattern Recognition</h3>
              <p className="text-pink-800">Verbs ending with &quot;-ing&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUE - E + ING = Suing</p>
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
                <li>• <strong>Suing for damages</strong> - legal action for damages</li>
                <li>• <strong>Suing the company</strong> - legal action against company</li>
                <li>• <strong>Suing the government</strong> - legal action against government</li>
                <li>• <strong>Suing for compensation</strong> - legal action for compensation</li>
                <li>• <strong>Suing for breach</strong> - legal action for breach</li>
                <li>• <strong>Suing for negligence</strong> - legal action for negligence</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present continuous:</strong> &quot;I am suing&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Suing is expensive&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suing takes time&quot;</li>
                <li>• <strong>Object:</strong> &quot;I considered suing&quot;</li>
                <li>• <strong>After preposition:</strong> &quot;Instead of suing&quot;</li>
                <li>• <strong>As adjective:</strong> &quot;Suing party&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suing&quot; as &quot;sueing&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may think they need to keep the &quot;e&quot; before adding &quot;ing&quot;. However, the standard rule is to drop the silent &quot;e&quot; before adding &quot;-ing&quot; to verbs.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;suing&quot; related to &quot;sue&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suing&quot; is the gerund form of the verb &quot;sue&quot;. Think of it as &quot;the action of suing&quot; - the process of taking legal action against someone.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;suing&quot; and &quot;sued&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suing&quot; is the present continuous form (e.g., &quot;I am suing&quot;), while &quot;sued&quot; is the past tense (e.g., &quot;I sued&quot;). &quot;Suing&quot; refers to ongoing legal action, while &quot;sued&quot; refers to completed legal action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;suing&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suing&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, legal documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suing&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: litigating, prosecuting, taking legal action, filing suit, and bringing a lawsuit. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember the rule: when adding &quot;-ing&quot; to a verb ending in silent &quot;e&quot;, drop the &quot;e&quot;. So &quot;sue&quot; becomes &quot;suing&quot;, not &quot;sueing&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUE drops E before ING&quot;. Or remember: &quot;When you&apos;re SUEING, the E is GONE&quot; - the &quot;e&quot; disappears when adding &quot;ing&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;suing&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sue&quot; is the base form (infinitive) of the verb. For example: &quot;I sue&quot; (present), &quot;I am suing&quot; (present continuous), &quot;I sued&quot; (past).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;sue&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sue&quot; comes from the Old French &quot;suir&quot; meaning &quot;to follow, pursue, seek,&quot; from Latin &quot;sequi&quot; meaning &quot;to follow,&quot; related to the idea of pursuing legal action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suing&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suing&quot; can function as a gerund (verbal noun). For example: &quot;Suing is expensive&quot; or &quot;The suing process takes time.&quot; It acts as a noun while maintaining its verbal meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;suing&quot; and &quot;litigating&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suing&quot; specifically means bringing a lawsuit against someone, while &quot;litigating&quot; is a broader term that encompasses the entire legal process, including suing, defending, and resolving disputes.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;suing&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suing&quot; can be used in various contexts: personal injury cases (suing for damages), business disputes (suing the company), employment issues (suing the employer), and contract violations (suing for breach). It always refers to taking legal action.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suing&quot;</strong> drops the &quot;e&quot; before &quot;ing&quot; and means &quot;taking legal action.&quot; 
          <br />
          <strong>&quot;Sueing&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUE drops E before ING&quot; and remember the silent &quot;e&quot; rule!</p>
        </div>
      </div>
    </div>
  )
}
