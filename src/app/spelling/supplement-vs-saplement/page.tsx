import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supplement vs Saplement - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supplement&quot; and &quot;saplement&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupplementVsSaplementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Supplement vs Saplement
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Supplement&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Saplement&quot; is always incorrect - remember the &quot;supp&quot; in &quot;supplement&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Saplement</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supplement</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;something added to complete or enhance.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supplement&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Starts with &quot;supp&quot;</li>
                <li>• Has &quot;e&quot; before &quot;ment&quot;</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Common Error</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• &quot;Saplement&quot; is wrong</li>
                <li>• Missing &quot;supp&quot; beginning</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Memory Aid</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Think &quot;SUPP + LEMENT&quot;</li>
                <li>• &quot;supp&quot; like &quot;support&quot;</li>
                <li>• &quot;-lement&quot; ending</li>
                <li>• Related to &quot;supple&quot;</li>
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
                <p className="text-lg text-green-800">&quot;Take a vitamin <strong>supplement</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This is a dietary <strong>supplement</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>supplement</strong> contains iron.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Fish oil <strong>supplement</strong> is beneficial.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Take a vitamin <strong>saplement</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a dietary <strong>saplement</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>saplement</strong> contains iron.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Fish oil <strong>saplement</strong> is beneficial.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">SUPP Beginning</h3>
              <p className="text-green-800">&quot;Supplement&quot; starts with &quot;supp&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Support</h3>
              <p className="text-amber-800">&quot;Supplement&quot; like &quot;support&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Pattern Recognition</h3>
              <p className="text-orange-800">Words starting with &quot;supp&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Break It Down</h3>
              <p className="text-red-800">SUPP + LEMENT = Supplement</p>
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
                <li>• <strong>Dietary supplement</strong> - nutritional addition</li>
                <li>• <strong>Vitamin supplement</strong> - vitamin addition</li>
                <li>• <strong>Protein supplement</strong> - protein addition</li>
                <li>• <strong>Mineral supplement</strong> - mineral addition</li>
                <li>• <strong>Herbal supplement</strong> - herbal addition</li>
                <li>• <strong>Nutritional supplement</strong> - nutrition addition</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The supplement helps&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I supplement my diet&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Supplement facts&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I supplement&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I supplemented&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will supplement&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supplement&quot; as &quot;saplement&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;supplement&quot; starts with &quot;supp&quot;. They might accidentally drop the &quot;supp&quot; when typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Is &quot;supplement&quot; related to &quot;support&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplement&quot; comes from the idea of &quot;supporting&quot; or &quot;adding to&quot;. Think of it as &quot;supporting&quot; something by adding to it.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;supplement&quot; and &quot;addition&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; means something added to complete or enhance, while &quot;addition&quot; means something added to increase. &quot;Supplement&quot; implies enhancement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;supplement&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplement&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;supplement&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: addition, enhancement, complement, boost, reinforcement, and augmentation. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;support&quot; and remember that &quot;supplement&quot; starts with &quot;supp&quot;. The &quot;supp&quot; beginning is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPPLEMENT starts with SUPP&quot;. Or remember: &quot;SUPP + LEMENT&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the base form of &quot;supplement&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; can be both a noun and a verb. For example: &quot;I supplement&quot; (present), &quot;I supplemented&quot; (past), &quot;I have supplemented&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;supplement&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; comes from the Latin &quot;supplementum&quot; meaning &quot;something added to complete,&quot; related to the idea of supporting or adding to something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;supplement&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplement&quot; can function as a verb meaning to add to or enhance. For example: &quot;I supplement my diet&quot; or &quot;supplement the income.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;supplement&quot; and &quot;complement&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; means something added to complete or enhance, while &quot;complement&quot; means something that completes or goes well with. Both involve completion but differently.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How do I use &quot;supplement&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; can be used in various contexts: dietary supplements, income supplements, educational supplements, and supplementing information.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supplement&quot;</strong> starts with &quot;supp&quot; and means &quot;something added to complete or enhance.&quot; 
          <br />
          <strong>&quot;Saplement&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPP + LEMENT&quot; and remember the &quot;supp&quot; beginning!</p>
        </div>
      </div>
    </div>
  )
}
