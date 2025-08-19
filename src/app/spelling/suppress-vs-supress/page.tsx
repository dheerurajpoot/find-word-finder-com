import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suppress vs Supress - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suppress&quot; and &quot;supress&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuppressVsSupressPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Suppress vs Supress
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🚫</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suppress&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supress&quot; is always incorrect - remember the double &quot;p&quot; in &quot;suppress&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supress</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suppress</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to prevent or restrain something.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Suppress&quot; (Correct)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Has double &quot;p&quot;</li>
                <li>• Follows &quot;press&quot; pattern</li>
                <li>• Ends with &quot;-ess&quot;</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Common Error</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Supress&quot; is wrong</li>
                <li>• Missing second &quot;p&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Memory Aid</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Think &quot;SUP + PRESS&quot;</li>
                <li>• &quot;press&quot; has double &quot;p&quot;</li>
                <li>• &quot;-ess&quot; ending pattern</li>
                <li>• Related to &quot;suppression&quot;</li>
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
                <p className="text-lg text-green-800">&quot;They tried to <strong>suppress</strong> the news.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He couldn&apos;t <strong>suppress</strong> his anger.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The government <strong>suppressed</strong> the protest.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She tried to <strong>suppress</strong> a smile.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They tried to <strong>supress</strong> the news.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppress&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He couldn&apos;t <strong>supress</strong> his anger&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppress&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The government <strong>supressed</strong> the protest&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppressed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She tried to <strong>supress</strong> a smile&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suppress&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double P Rule</h3>
              <p className="text-yellow-800">&quot;Suppress&quot; has double &quot;p&quot; like &quot;press&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Press</h3>
              <p className="text-orange-800">&quot;Suppress&quot; contains &quot;press&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words with &quot;press&quot; have double &quot;p&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Break It Down</h3>
              <p className="text-pink-800">SUP + PRESS = Suppress</p>
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
                <li>• <strong>Suppress evidence</strong> - hide evidence</li>
                <li>• <strong>Suppress emotions</strong> - hold back feelings</li>
                <li>• <strong>Suppress rebellion</strong> - quell uprising</li>
                <li>• <strong>Suppress laughter</strong> - hold back laughter</li>
                <li>• <strong>Suppress memory</strong> - forget memory</li>
                <li>• <strong>Suppress information</strong> - hide info</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> &quot;I suppress&quot;</li>
                <li>• <strong>Past:</strong> &quot;I suppressed&quot;</li>
                <li>• <strong>Future:</strong> &quot;I will suppress&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suppression matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;I suppress it&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Suppression&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people misspell &quot;suppress&quot; as &quot;supress&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the double &quot;p&quot; sound in &quot;suppress&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the connection to &quot;press.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;suppress&quot; related to &quot;press&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suppress&quot; comes from Latin &quot;suppressus&quot; which is related to &quot;press.&quot; The double &quot;p&quot; comes from the Latin root &quot;pressus&quot; meaning &quot;pressed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;suppress&quot; and &quot;repress&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppress&quot; means to prevent or restrain something, while &quot;repress&quot; specifically refers to unconsciously pushing down emotions or memories. &quot;Suppress&quot; is more general.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;suppress&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suppress&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suppress&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: restrain, control, quell, subdue, inhibit, and contain. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;press&quot; (which has double &quot;p&quot;) and remember that &quot;suppress&quot; contains it. The double &quot;p&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When you SUPPRESS something, you PRESS it down&quot; - both words have double &quot;p.&quot; Or remember: &quot;SUP + PRESS&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the noun form of &quot;suppress&quot;?</h3>
              <p className="text-lg text-gray-700">A: The noun form is &quot;suppression.&quot; For example: &quot;The suppression of evidence&quot; or &quot;Emotional suppression.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;suppress&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppress&quot; comes from Latin &quot;suppressus&quot; meaning &quot;pressed down&quot; or &quot;kept down.&quot; The double &quot;p&quot; comes from the Latin root &quot;pressus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;suppress&quot; be used positively?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often indicating restraint, &quot;suppress&quot; can be used positively in contexts like &quot;suppress laughter&quot; (holding back inappropriate laughter) or &quot;suppress emotions&quot; (maintaining composure).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;suppress&quot; and &quot;oppress&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppress&quot; means to prevent or restrain something, while &quot;oppress&quot; refers to keeping people down with unjust or cruel treatment. &quot;Oppress&quot; has stronger negative connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;suppress&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suppress&quot; can be used in various contexts: legal (suppress evidence), emotional (suppress feelings), military (suppress rebellion), and medical (suppress immune system).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suppress&quot;</strong> has double &quot;p&quot; and means &quot;to prevent or restrain.&quot; 
          <br />
          <strong>&quot;Supress&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUP + PRESS&quot; and remember the double &quot;p&quot; like in &quot;press&quot;!</p>
        </div>
      </div>
    </div>
  )
}
