import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Support vs Suport - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;support&quot; and &quot;suport&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupportVsSuportPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Support vs Suport
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
            <span className="text-2xl font-bold text-green-600">&quot;Support&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suport&quot; is always incorrect - remember the double &quot;p&quot; in &quot;support&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suport</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Support</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to help&quot; or &quot;to hold up.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Support&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;p&quot;</li>
                <li>• Standard English spelling</li>
                <li>• Verb and noun form</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">Common Error</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• &quot;Suport&quot; is wrong</li>
                <li>• Missing one &quot;p&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Memory Aid</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Think &quot;SUP + PORT&quot;</li>
                <li>• &quot;port&quot; like &quot;airport&quot;</li>
                <li>• Double &quot;p&quot; for emphasis</li>
                <li>• Related to &quot;transport&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>support</strong> your decision.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The pillars <strong>support</strong> the roof.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We need your <strong>support</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Technical <strong>support</strong> is available.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>suport</strong> your decision.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;support&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The pillars <strong>suport</strong> the roof.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;support&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We need your <strong>suport</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;support&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Technical <strong>suport</strong> is available.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;support&quot;</p>
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
              <p className="text-green-800">&quot;Support&quot; has double &quot;p&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Think Port</h3>
              <p className="text-lime-800">&quot;Support&quot; like &quot;airport&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Pattern Recognition</h3>
              <p className="text-emerald-800">Double &quot;p&quot; for emphasis</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Break It Down</h3>
              <p className="text-cyan-800">SUP + PORT = Support</p>
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
                <li>• <strong>Support group</strong> - helping community</li>
                <li>• <strong>Support system</strong> - network of help</li>
                <li>• <strong>Support staff</strong> - helping employees</li>
                <li>• <strong>Support network</strong> - helping connections</li>
                <li>• <strong>Support team</strong> - helping group</li>
                <li>• <strong>Support services</strong> - helping assistance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;I support you&quot;</li>
                <li>• <strong>Noun:</strong> &quot;Your support matters&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Support group&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I support&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I supported&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will support&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;support&quot; as &quot;suport&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;support&quot; has double &quot;p&quot;. They might accidentally drop one &quot;p&quot; when typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Is &quot;support&quot; related to &quot;port&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Support&quot; comes from the idea of &quot;porting&quot; or &quot;carrying&quot; something. Think of it as &quot;carrying support&quot; or assistance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;support&quot; and &quot;help&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Support&quot; means to hold up or assist, while &quot;help&quot; means to make something easier. &quot;Support&quot; often implies ongoing assistance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;support&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Support&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;support&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: help, assist, aid, back, encourage, uphold, maintain, and sustain. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;port&quot; (like airport) and remember that &quot;support&quot; has double &quot;p&quot;. The double &quot;p&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPPORT has double P like PORT&quot;. Or remember: &quot;SUP + PORT&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;support&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Support&quot; is the base form. For example: &quot;I support&quot; (present), &quot;I supported&quot; (past), &quot;I have supported&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;support&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Support&quot; comes from the Latin &quot;supportare&quot; meaning &quot;to carry&quot; or &quot;to bring,&quot; related to the idea of carrying assistance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;support&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Support&quot; can function as a noun meaning assistance or help. For example: &quot;Your support matters&quot; or &quot;a support group.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;support&quot; and &quot;encourage&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Support&quot; means to hold up or assist, while &quot;encourage&quot; means to give confidence or hope. Both involve helping but in different ways.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do I use &quot;support&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Support&quot; can be used in various contexts: emotional support, technical support, financial support, physical support, and moral support.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Support&quot;</strong> has double &quot;p&quot; and means &quot;to help&quot; or &quot;to hold up.&quot; 
          <br />
          <strong>&quot;Suport&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUP + PORT&quot; and remember the double &quot;p&quot; like in &quot;port&quot;!</p>
        </div>
      </div>
    </div>
  )
}
