import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supposed vs Suposed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supposed&quot; and &quot;suposed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupposedVsSuposedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Supposed vs Suposed
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
            <span className="text-2xl font-bold text-green-600">&quot;Supposed&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suposed&quot; is always incorrect - remember the double &quot;p&quot; in &quot;supposed&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suposed</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supposed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;assumed to be true&quot; or &quot;expected.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supposed&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;p&quot;</li>
                <li>• Follows &quot;suppose&quot; pattern</li>
                <li>• Past tense form</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Common Error</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• &quot;Suposed&quot; is wrong</li>
                <li>• Missing one &quot;p&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Aid</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SUPPOSE + ED&quot;</li>
                <li>• &quot;suppose&quot; has double &quot;p&quot;</li>
                <li>• &quot;-ed&quot; for past tense</li>
                <li>• Related to &quot;suppose&quot;</li>
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
                <p className="text-lg text-green-800">&quot;He was <strong>supposed</strong> to arrive at 3 PM.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>supposed</strong> he would come.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>supposed</strong> it was true.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;It was <strong>supposed</strong> to rain today.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He was <strong>suposed</strong> to arrive at 3 PM.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>suposed</strong> he would come.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>suposed</strong> it was true.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;It was <strong>suposed</strong> to rain today.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposed&quot;</p>
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
              <p className="text-green-800">&quot;Supposed&quot; has double &quot;p&quot; like &quot;suppose&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Think Suppose</h3>
              <p className="text-pink-800">&quot;Supposed&quot; comes from &quot;suppose&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Pattern Recognition</h3>
              <p className="text-purple-800">Past tense verbs end with &quot;-ed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Break It Down</h3>
              <p className="text-rose-800">SUPPOSE + ED = Supposed</p>
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
                <li>• <strong>Supposed to</strong> - expected to</li>
                <li>• <strong>Supposed that</strong> - assumed that</li>
                <li>• <strong>Supposed to be</strong> - expected to be</li>
                <li>• <strong>Supposed to do</strong> - expected to do</li>
                <li>• <strong>Supposed to happen</strong> - expected to happen</li>
                <li>• <strong>Supposed to know</strong> - expected to know</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;I supposed&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The supposed truth&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;It was supposed&quot;</li>
                <li>• <strong>Base form:</strong> &quot;Suppose&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I suppose&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will suppose&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supposed&quot; as &quot;suposed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suppose&quot; has double &quot;p&quot;. When adding &quot;-ed&quot;, they might accidentally drop one &quot;p&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;supposed&quot; related to &quot;suppose&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposed&quot; is the past tense and past participle form of the verb &quot;suppose.&quot; The double &quot;p&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;supposed&quot; and &quot;suppose&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppose&quot; is the present tense verb meaning &quot;to assume&quot; or &quot;to believe,&quot; while &quot;supposed&quot; is the past tense and past participle form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;supposed&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposed&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;supposed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: assumed, presumed, expected, believed, thought, imagined, and considered. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suppose&quot; (which has double &quot;p&quot;) and remember that &quot;supposed&quot; comes from it. The double &quot;p&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPPOSED comes from SUPPOSE&quot; - both words have double &quot;p&quot;. Or remember: &quot;SUPPOSE + ED&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the base form of &quot;supposed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The base form is &quot;suppose.&quot; For example: &quot;I suppose&quot; (present), &quot;I supposed&quot; (past), &quot;I have supposed&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;supposed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposed&quot; comes from the verb &quot;suppose&quot; meaning &quot;to assume&quot; or &quot;to believe,&quot; with the suffix &quot;-ed&quot; to form the past tense and past participle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;supposed&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposed&quot; can function as an adjective meaning &quot;assumed&quot; or &quot;believed.&quot; For example: &quot;the supposed truth&quot; or &quot;a supposed expert.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;supposed&quot; and &quot;assumed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposed&quot; means believed or expected to be true, while &quot;assumed&quot; means taken for granted or accepted without proof. Both imply uncertainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;supposed&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposed&quot; can be used in various contexts: expectations (supposed to arrive), assumptions (supposed it was true), beliefs (supposed expert), and past actions (I supposed).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supposed&quot;</strong> has double &quot;p&quot; and means &quot;assumed to be true&quot; or &quot;expected.&quot; 
          <br />
          <strong>&quot;Suposed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPPOSE + ED&quot; and remember the double &quot;p&quot; like in &quot;suppose&quot;!</p>
        </div>
      </div>
    </div>
  )
}
