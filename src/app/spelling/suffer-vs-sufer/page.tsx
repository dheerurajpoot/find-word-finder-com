import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suffer vs Sufer - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suffer&quot; and &quot;sufer&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SufferVsSuferPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Suffer vs Sufer
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
            <span className="text-2xl font-bold text-rose-600">&quot;Suffer&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sufer&quot; is always incorrect - remember the double &quot;f&quot; in &quot;suffer&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sufer</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suffer</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to experience pain, distress, or hardship.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suffer&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;f&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Common Error</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• &quot;Sufer&quot; is wrong</li>
                <li>• Missing second &quot;f&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Memory Aid</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Think &quot;SUF + FER&quot;</li>
                <li>• &quot;suf&quot; like &quot;sub&quot;</li>
                <li>• Double &quot;f&quot; for emphasis</li>
                <li>• Related to &quot;suffering&quot;</li>
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
                <p className="text-lg text-green-800">&quot;They <strong>suffer</strong> from the heat.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>suffered</strong> a great loss.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Many people <strong>suffer</strong> in silence.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He will <strong>suffer</strong> the consequences.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>sufer</strong> from the heat.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffer&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>sufered</strong> a great loss.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffered&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Many people <strong>sufer</strong> in silence.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffer&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He will <strong>sufer</strong> the consequences.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffer&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">Double F Rule</h3>
              <p className="text-green-800">&quot;Suffer&quot; has double &quot;f&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Suffering</h3>
              <p className="text-rose-800">&quot;Suffer&quot; like &quot;suffering&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Pattern Recognition</h3>
              <p className="text-pink-800">Verbs with double &quot;f&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUF + FER = Suffer</p>
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
                <li>• <strong>Suffer from</strong> - experience a condition</li>
                <li>• <strong>Suffer through</strong> - endure something</li>
                <li>• <strong>Suffer a loss</strong> - experience a loss</li>
                <li>• <strong>Suffer in silence</strong> - endure quietly</li>
                <li>• <strong>Suffer the consequences</strong> - face results</li>
                <li>• <strong>Suffer greatly</strong> - experience much pain</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I suffer&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I suffered&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will suffer&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Suffering&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To suffer&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Suffer it&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suffer&quot; as &quot;sufer&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suffer&quot; has a double &quot;f&quot;. They might accidentally drop one &quot;f&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;suffer&quot; related to &quot;suffering&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suffer&quot; is the verb form, while &quot;suffering&quot; is the noun form. Think of it as &quot;to suffer&quot; (verb) and &quot;the suffering&quot; (noun) - they share the same double &quot;f&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;suffer&quot; and &quot;endure&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words mean to experience hardship, but &quot;suffer&quot; emphasizes the pain or distress aspect, while &quot;endure&quot; emphasizes the ability to withstand or bear something difficult. &quot;Suffer&quot; is more passive, while &quot;endure&quot; is more active.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;suffer&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suffer&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suffer&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: endure, bear, experience, undergo, tolerate, and withstand. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suffering&quot; and remember that &quot;suffer&quot; has a double &quot;f&quot;. The double &quot;f&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUFFER has double F&quot;. Or remember: &quot;SUF + FER&quot; breaks down the word into manageable parts with the double &quot;f&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the base form of &quot;suffer&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffer&quot; is the base form (infinitive) of the verb. For example: &quot;I suffer&quot; (present), &quot;I suffered&quot; (past), &quot;I have suffered&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;suffer&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffer&quot; comes from the Latin &quot;sufferre&quot; meaning &quot;to bear, endure, undergo&quot;, from &quot;sub&quot; (under) + &quot;ferre&quot; (to bear, carry). It entered English in the late 13th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suffer&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suffer&quot; is only a verb. The noun form is &quot;suffering&quot;. For example: &quot;I suffer&quot; (verb), &quot;I experience suffering&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How do I use &quot;suffer&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffer&quot; can be used in various contexts: medical (suffer from pain), emotional (suffer a loss), physical (suffer injuries), and metaphorical (suffer consequences). It always refers to experiencing hardship, pain, or distress.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suffer&quot;</strong> has a double &quot;f&quot; and means &quot;to experience pain, distress, or hardship.&quot; 
          <br />
          <strong>&quot;Sufer&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUF + FER&quot; and remember the double &quot;f&quot;!</p>
        </div>
      </div>
    </div>
  )
}
