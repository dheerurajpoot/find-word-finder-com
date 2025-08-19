import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supposedly vs Supposedlly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supposedly&quot; and &quot;supposedlly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupposedlyVsSupposedllyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Supposedly vs Supposedlly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📝</span>
            <span className="text-2xl font-bold text-green-600">&quot;Supposedly&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supposedlly&quot; is always incorrect - remember only one &quot;l&quot; in &quot;supposedly&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supposedlly</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supposedly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;according to what is generally believed.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Supposedly&quot; (Correct)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Has one &quot;l&quot;</li>
                <li>• Follows &quot;supposed&quot; pattern</li>
                <li>• Ends with &quot;-ly&quot;</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Common Error</h3>
              <ul className="text-green-800 space-y-2">
                <li>• &quot;Supposedlly&quot; is wrong</li>
                <li>• Extra &quot;l&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Memory Aid</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Think &quot;SUPPOSED + LY&quot;</li>
                <li>• &quot;supposed&quot; like the adjective</li>
                <li>• &quot;-ly&quot; for adverbs</li>
                <li>• Related to &quot;supposed&quot;</li>
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
                <p className="text-lg text-green-800">&quot;He <strong>supposedly</strong> knows the answer.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>supposedly</strong> left early.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>supposedly</strong> finished the work.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;It <strong>supposedly</strong> happened yesterday.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>supposedlly</strong> knows the answer.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposedly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>supposedlly</strong> left early&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposedly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>supposedlly</strong> finished the work&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposedly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;It <strong>supposedlly</strong> happened yesterday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supposedly&quot;</p>
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
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single L Rule</h3>
              <p className="text-yellow-800">&quot;Supposedly&quot; has one &quot;l&quot; like &quot;supposed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Think Supposed</h3>
              <p className="text-lime-800">&quot;Supposedly&quot; comes from &quot;supposed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words ending with &quot;-ly&quot; are adverbs</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Break It Down</h3>
              <p className="text-emerald-800">SUPPOSED + LY = Supposedly</p>
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
                <li>• <strong>Supposedly true</strong> - believed to be true</li>
                <li>• <strong>Supposedly finished</strong> - believed to be done</li>
                <li>• <strong>Supposedly happened</strong> - believed to occur</li>
                <li>• <strong>Supposedly knows</strong> - believed to know</li>
                <li>• <strong>Supposedly left</strong> - believed to have left</li>
                <li>• <strong>Supposedly arrived</strong> - believed to have arrived</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He supposedly knows&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Supposedly true story&quot;</li>
                <li>• <strong>Sentence adverb:</strong> &quot;Supposedly, it&apos;s true&quot;</li>
                <li>• <strong>Base form:</strong> &quot;Suppose&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Supposed&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Supposition&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people misspell &quot;supposedly&quot; as &quot;supposedlly&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may think adverbs need double &quot;l&quot;s like &quot;really&quot; or &quot;usually.&quot; However, &quot;supposedly&quot; follows the pattern of &quot;supposed + ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;supposedly&quot; related to &quot;suppose&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposedly&quot; is the adverb form of &quot;supposed,&quot; which comes from the verb &quot;suppose.&quot; The single &quot;l&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;supposedly&quot; and &quot;allegedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposedly&quot; means according to what is generally believed, while &quot;allegedly&quot; means according to what has been claimed without proof. &quot;Allegedly&quot; has stronger legal connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;supposedly&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposedly&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;supposedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: allegedly, purportedly, reportedly, apparently, ostensibly, and theoretically. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;supposed&quot; (which has the same beginning) and remember that &quot;supposedly&quot; comes from it. The single &quot;l&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPPOSEDLY comes from SUPPOSED&quot; - both words have the same beginning. Or remember: &quot;SUPPOSED + LY&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the base form of &quot;supposedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: The base form is &quot;suppose.&quot; For example: &quot;I suppose&quot; (present), &quot;I supposed&quot; (past), &quot;Supposedly&quot; (adverb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;supposedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposedly&quot; comes from the verb &quot;suppose&quot; meaning &quot;to assume&quot; or &quot;to believe,&quot; with the suffix &quot;-ly&quot; to form an adverb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;supposedly&quot; be used to express doubt?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposedly&quot; often implies skepticism or doubt about the truth of a statement. It suggests that something is claimed to be true but may not be.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;supposedly&quot; and &quot;probably&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposedly&quot; means according to what is believed or claimed, while &quot;probably&quot; means likely to be true. &quot;Probably&quot; expresses more confidence.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How do I use &quot;supposedly&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposedly&quot; can be used in various contexts: news reporting (supposedly true), gossip (supposedly happened), rumors (supposedly knows), and general beliefs (supposedly finished).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supposedly&quot;</strong> has one &quot;l&quot; and means &quot;according to what is believed.&quot; 
          <br />
          <strong>&quot;Supposedlly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPPOSED + LY&quot; and remember only one &quot;l&quot; like in &quot;supposed&quot;!</p>
        </div>
      </div>
    </div>
  )
}
