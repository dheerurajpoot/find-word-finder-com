import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suspense vs Suspence - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suspense&quot; and &quot;suspence&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuspenseVsSuspencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Suspense vs Suspence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎭</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suspense&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suspence&quot; is always incorrect - remember the &quot;se&quot; ending in &quot;suspense&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suspence</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suspense</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;anxiety or excitement about what may happen.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Suspense&quot; (Noun)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;anxiety about outcome&quot;</li>
                <li>• Has &quot;se&quot; ending</li>
                <li>• Related to &quot;suspend&quot;</li>
                <li>• Used in storytelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Common Error</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• &quot;Suspence&quot; is wrong</li>
                <li>• Missing &quot;s&quot; at end</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Memory Aid</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Think &quot;SUS + PENSE&quot;</li>
                <li>• &quot;se&quot; like &quot;sense&quot;</li>
                <li>• &quot;-se&quot; ending pattern</li>
                <li>• Related to &quot;suspension&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The movie was full of <strong>suspense</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I couldn&apos;t bear the <strong>suspense</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>suspense</strong> was killing me.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She loves reading <strong>suspense</strong> novels.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The movie was full of <strong>suspence</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I couldn&apos;t bear the <strong>suspence</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>suspence</strong> was killing me&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She loves reading <strong>suspence</strong> novels&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspense&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">SE Ending Rule</h3>
              <p className="text-yellow-800">&quot;Suspense&quot; ends with &quot;se&quot; like &quot;sense&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Suspension</h3>
              <p className="text-blue-800">&quot;Suspense&quot; comes from &quot;suspension&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words ending in &quot;-se&quot; are often nouns</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUS + PENSE = Suspense</p>
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
                <li>• <strong>Suspense thriller</strong> - exciting mystery</li>
                <li>• <strong>Building suspense</strong> - increasing tension</li>
                <li>• <strong>Killing suspense</strong> - ruining surprise</li>
                <li>• <strong>Full of suspense</strong> - very exciting</li>
                <li>• <strong>Suspense novel</strong> - mystery book</li>
                <li>• <strong>Unbearable suspense</strong> - too exciting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The suspense is intense&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suspense builds slowly&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love the suspense&quot;</li>
                <li>• <strong>Prepositional object:</strong> &quot;In suspense&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;Suspend&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Suspenseful&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people misspell &quot;suspense&quot; as &quot;suspence&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;s&quot; sound at the end of &quot;suspense&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the &quot;se&quot; ending pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;suspense&quot; related to &quot;suspension&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words come from the Latin &quot;suspendere&quot; meaning &quot;to hang up&quot; or &quot;to stop.&quot; &quot;Suspense&quot; refers to the feeling of being suspended in uncertainty, while &quot;suspension&quot; refers to the act of suspending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;suspense&quot; and &quot;mystery&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspense&quot; refers to the feeling of anxiety or excitement about what may happen, while &quot;mystery&quot; refers to something that is difficult to explain or understand. A story can have both elements.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;suspense&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suspense&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;suspense&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: tension, anticipation, excitement, uncertainty, anxiety, expectation, and thrill. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suspension&quot; (which has the same root) and remember that &quot;suspense&quot; ends with &quot;se.&quot; The &quot;se&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When you&apos;re in SUSPENSE, you&apos;re in SUSPENSION&quot; - both words come from the same root. Or remember: &quot;SUS + PENSE&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the adjective form of &quot;suspense&quot;?</h3>
              <p className="text-lg text-gray-700">A: The adjective form is &quot;suspenseful.&quot; For example: &quot;It was a suspenseful movie&quot; or &quot;The book was very suspenseful.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suspense&quot;</strong> ends with &quot;se&quot; and means &quot;anxiety about outcome.&quot; 
          <br />
          <strong>&quot;Suspence&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + PENSE&quot; and remember the &quot;se&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
