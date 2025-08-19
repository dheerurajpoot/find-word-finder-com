import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suppose vs Supose - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suppose&quot; and &quot;supose&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupposeVsSuposePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Suppose vs Supose
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suppose&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supose&quot; is always incorrect - remember the double &quot;p&quot; in &quot;suppose&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supose</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suppose</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to assume&quot; or &quot;to believe.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suppose&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;p&quot;</li>
                <li>• Standard English spelling</li>
                <li>• Verb meaning &quot;assume&quot;</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Common Error</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• &quot;Supose&quot; is wrong</li>
                <li>• Missing one &quot;p&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Memory Aid</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Think &quot;SUP + POSE&quot;</li>
                <li>• &quot;pose&quot; like &quot;pose a question&quot;</li>
                <li>• Double &quot;p&quot; for emphasis</li>
                <li>• Related to &quot;propose&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>suppose</strong> you&apos;re right.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Let me <strong>suppose</strong; for a moment.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;What do you <strong>suppose</strong> happened?&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I <strong>suppose</strong; we should go.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>supose</strong> you&apos;re right.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppose&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Let me <strong>supose</strong> for a moment.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppose&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What do you <strong>supose</strong> happened?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppose&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>supose</strong> we should go.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppose&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">Double P Rule</h3>
              <p className="text-green-800">&quot;Suppose&quot; has double &quot;p&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Pose</h3>
              <p className="text-orange-800">&quot;Suppose&quot; like &quot;pose a question&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Pattern Recognition</h3>
              <p className="text-red-800">Double &quot;p&quot; for emphasis</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Break It Down</h3>
              <p className="text-pink-800">SUP + POSE = Suppose</p>
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
                <li>• <strong>I suppose</strong> - I think or believe</li>
                <li>• <strong>Let me suppose</strong> - Let me assume</li>
                <li>• <strong>What do you suppose</strong> - What do you think</li>
                <li>• <strong>I suppose so</strong> - I think so</li>
                <li>• <strong>Supposing that</strong> - Assuming that</li>
                <li>• <strong>I suppose not</strong> - I think not</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I suppose&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I supposed&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will suppose&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Supposing&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To suppose&quot;</li>
                <li>• <strong>Conditional:</strong> &quot;Would suppose&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suppose&quot; as &quot;supose&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suppose&quot; has double &quot;p&quot;. They might accidentally drop one &quot;p&quot; when typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;suppose&quot; related to &quot;pose&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suppose&quot; comes from the idea of &quot;posing&quot; or &quot;placing&quot; an assumption. Think of it as &quot;posing a supposition&quot; or assumption.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;suppose&quot; and &quot;assume&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppose&quot; means to think or believe something is true, while &quot;assume&quot; means to take something for granted without proof. Both imply uncertainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;suppose&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suppose&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;suppose&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: assume, presume, think, believe, imagine, consider, and reckon. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;pose&quot; (like posing a question) and remember that &quot;suppose&quot; has double &quot;p&quot;. The double &quot;p&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPPOSE has double P like POSE&quot;. Or remember: &quot;SUP + POSE&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the base form of &quot;suppose&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppose&quot; is the base form. For example: &quot;I suppose&quot; (present), &quot;I supposed&quot; (past), &quot;I have supposed&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;suppose&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppose&quot; comes from the Latin &quot;supponere&quot; meaning &quot;to place under&quot; or &quot;to assume,&quot; related to the idea of placing an assumption.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;suppose&quot; be used to express doubt?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suppose&quot; often implies uncertainty or doubt about the truth of a statement. It suggests that something is thought to be true but may not be.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;suppose&quot; and &quot;think&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppose&quot; means to assume or believe something is true, while &quot;think&quot; means to use one&apos;s mind to form thoughts. &quot;Suppose&quot; implies more uncertainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;suppose&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppose&quot; can be used in various contexts: assumptions (I suppose), hypotheticals (supposing that), beliefs (I suppose so), and uncertainty (I suppose not).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suppose&quot;</strong> has double &quot;p&quot; and means &quot;to assume&quot; or &quot;to believe.&quot; 
          <br />
          <strong>&quot;Supose&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUP + POSE&quot; and remember the double &quot;p&quot; like in &quot;pose&quot;!</p>
        </div>
      </div>
    </div>
  )
}
