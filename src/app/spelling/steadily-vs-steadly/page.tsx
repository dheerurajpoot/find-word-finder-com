import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Steadily vs Steadly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;steadily&quot; and &quot;steadly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SteadilyVsSteadlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Steadily vs Steadly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📈</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Steadily&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Steadly&quot; is always incorrect - remember the &quot;i&quot; in &quot;steadily&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Steadly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Steadily</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;in a steady or constant manner.&quot;
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
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Steady&quot; (Root)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;firm&quot; or &quot;stable&quot;</li>
                <li>• Related to consistency</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;I&quot; (Vowel)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Important vowel sound</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Ly&quot; (Suffix)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Forms adverbs</li>
                <li>• Means &quot;in a manner&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;steadily&quot;</li>
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
            <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The company grew <strong>steadily</strong> over the years.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;She worked <strong>steadily</strong> toward her goal.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The rain fell <strong>steadily</strong> all morning.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;He improved <strong>steadily</strong> with practice.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company grew <strong>steadly</strong> over the years&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steadily&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She worked <strong>steadly</strong> toward her goal&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steadily&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The rain fell <strong>steadly</strong> all morning&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steadily&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He improved <strong>steadly</strong> with practice&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steadily&quot;</p>
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
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Growth</h3>
              <p className="text-yellow-800">&quot;Steadily&quot; means consistent growth</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">I is Important</h3>
              <p className="text-blue-800">Remember the &quot;i&quot; in &quot;steadily&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;steadily&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Grow steadily</strong> - consistent growth</li>
                <li>• <strong>Work steadily</strong> - consistent work</li>
                <li>• <strong>Improve steadily</strong> - consistent improvement</li>
                <li>• <strong>Fall steadily</strong> - consistent falling</li>
                <li>• <strong>Rise steadily</strong> - consistent rising</li>
                <li>• <strong>Progress steadily</strong> - consistent progress</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;work steadily&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;steadily increasing&quot;</li>
                <li>• <strong>Description:</strong> &quot;grew steadily&quot;</li>
                <li>• <strong>Manner:</strong> &quot;improved steadily&quot;</li>
                <li>• <strong>Frequency:</strong> &quot;steadily rising&quot;</li>
                <li>• <strong>Intensity:</strong> &quot;steadily worsening&quot;</li>
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
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people confuse &quot;steadily&quot; and &quot;steadly&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;quickly&quot; or &quot;slowly.&quot; However, &quot;steadily&quot; follows the pattern of &quot;steady&quot; + &quot;ly&quot; adverb suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Can &quot;steadily&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Steadily&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adverb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;steadily&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Steadily&quot; comes from Old English &quot;stedig&quot; meaning &quot;firm&quot; or &quot;stable,&quot; combined with the &quot;-ly&quot; suffix to form an adverb. It was first used in English in the 14th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;steadily&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;consistently&quot; or &quot;constantly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;steady&quot; + &quot;ly.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;steadily&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: consistently, constantly, regularly, continuously, and uniformly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;steadily&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing consistent action, &quot;steadily&quot; can be used in various contexts like business (steady growth), personal development (steady improvement), and natural phenomena (steady rain).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;steadily&quot; and &quot;constantly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Steadily&quot; refers to consistency and reliability, while &quot;constantly&quot; refers to continuous occurrence without interruption. They are similar but have subtle differences in meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;steadily&quot; always about positive progress?</h3>
              <p className="text-lg text-gray-700">A: No! While &quot;steadily&quot; often describes positive progress, it can also describe negative trends. For example, &quot;steadily declining&quot; means consistently getting worse, and &quot;steadily worsening&quot; means consistently deteriorating.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;steadily&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;steadily increasing,&quot; &quot;steadily improving,&quot; &quot;steadily growing,&quot; &quot;steadily declining,&quot; &quot;steadily rising,&quot; and &quot;steadily progressing.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Steadily&quot;</strong> is the correct spelling meaning &quot;in a steady manner.&quot; 
          <br />
          <strong>&quot;Steadly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STEADY + LY = STEADILY&quot;</p>
        </div>
      </div>
    </div>
  )
}
