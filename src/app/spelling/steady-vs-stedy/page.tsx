import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Steady vs Stedy - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;steady&quot; and &quot;stedy&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SteadyVsStedyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          Steady vs Stedy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⚖️</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Steady&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Stedy&quot; is always incorrect - remember the &quot;a&quot; in &quot;steady&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Stedy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Steady</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;firm, stable, or constant.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Stead&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;place&quot; or &quot;position&quot;</li>
                <li>• Related to stability</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;A&quot; (Vowel)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Important vowel sound</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Y&quot; (Suffix)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Forms adjectives</li>
                <li>• Means &quot;having quality&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;steady&quot;</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;She kept a <strong>steady</strong> hand while painting.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The <strong>steady</strong> rain continued all day.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;He maintained a <strong>steady</strong> pace.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The table was <strong>steady</strong> and stable.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She kept a <strong>stedy</strong> hand&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steady&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>stedy</strong> rain continued&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steady&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He maintained a <strong>stedy</strong> pace&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steady&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The table was <strong>stedy</strong> and stable&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;steady&quot;</p>
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
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Balance</h3>
              <p className="text-yellow-800">&quot;Steady&quot; means balanced</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">A is Important</h3>
              <p className="text-blue-800">Remember the &quot;a&quot; in &quot;steady&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;steady&quot; to build muscle memory</p>
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
                <li>• <strong>Steady hand</strong> - stable hand</li>
                <li>• <strong>Steady pace</strong> - consistent speed</li>
                <li>• <strong>Steady job</strong> - stable employment</li>
                <li>• <strong>Steady relationship</strong> - stable relationship</li>
                <li>• <strong>Steady income</strong> - consistent earnings</li>
                <li>• <strong>Steady growth</strong> - consistent development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;steady hand&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;walk steadily&quot;</li>
                <li>• <strong>Verb:</strong> &quot;to steady&quot;</li>
                <li>• <strong>Noun:</strong> &quot;the steady&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;steadier&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;steadiest&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people confuse &quot;steady&quot; and &quot;stedy&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;ready&quot; or &quot;speedy.&quot; However, &quot;steady&quot; follows the pattern of &quot;stead&quot; + &quot;y&quot; adjective suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;steady&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Steady&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;steady&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Steady&quot; comes from Old English &quot;stedig&quot; meaning &quot;firm&quot; or &quot;stable.&quot; It was first used in English in the 14th century to describe something that is firm or constant.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;steady&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;stable&quot; or &quot;constant.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;stead&quot; + &quot;y.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;steady&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: stable, constant, consistent, firm, reliable, and unwavering.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;steady&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing physical stability, &quot;steady&quot; can be used metaphorically to describe emotional stability, consistent behavior, or reliable performance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;steady&quot; and &quot;stable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Steady&quot; refers to consistency and constancy, while &quot;stable&quot; refers to resistance to change or tipping. They are similar but have subtle differences in meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;steady&quot; always about physical stability?</h3>
              <p className="text-lg text-gray-700">A: No! While &quot;steady&quot; often describes physical stability, it can also be used metaphorically. For example, &quot;steady relationship&quot; means a stable relationship, and &quot;steady income&quot; means consistent earnings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common idioms with &quot;steady&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular idioms include: &quot;steady as a rock&quot; (very stable), &quot;steady on&quot; (calm down), &quot;steady the ship&quot; (stabilize a situation), and &quot;steady as she goes&quot; (continue as planned).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Steady&quot;</strong> is the correct spelling meaning &quot;firm and stable.&quot; 
          <br />
          <strong>&quot;Stedy&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STEAD + Y = STEADY&quot;</p>
        </div>
      </div>
    </div>
  )
}
