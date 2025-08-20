import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stepping vs Steping - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stepping&quot; and &quot;steping&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SteppingVsStepingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Stepping vs Steping
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
            <span className="text-2xl mr-3">👣</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Stepping&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Steping&quot; is always incorrect - remember the double &quot;p&quot; in &quot;stepping&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Steping</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Stepping</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;taking steps or moving by lifting and setting down each foot.&quot;
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
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Step&quot; (Root)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;to move by lifting foot&quot;</li>
                • Related to walking</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Pp&quot; (Double P)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Double consonant in &quot;step&quot;</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Ing&quot; (Suffix)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Forms present participle</li>
                <li>• Means &quot;ongoing action&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;stepping&quot;</li>
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
            <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;She was <strong>stepping</strong> carefully on the ice.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The children were <strong>stepping</strong> in puddles.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;He kept <strong>stepping</strong> on my toes.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The dancer was <strong>stepping</strong> gracefully.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She was <strong>steping</strong> carefully&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stepping&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The children were <strong>steping</strong> in puddles&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stepping&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He kept <strong>steping</strong> on my toes&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stepping&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The dancer was <strong>steping</strong> gracefully&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stepping&quot;</p>
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
              <div className="text-4xl mb-3">👣</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Steps</h3>
              <p className="text-yellow-800">&quot;Stepping&quot; comes from &quot;step&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Double P Rule</h3>
              <p className="text-blue-800">Remember the double &quot;p&quot; in &quot;step&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;stepping&quot; to build muscle memory</p>
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
                <li>• <strong>Stepping up</strong> - taking responsibility</li>
                <li>• <strong>Stepping down</strong> - resigning from position</li>
                <li>• <strong>Stepping in</strong> - intervening</li>
                <li>• <strong>Stepping out</strong> - leaving briefly</li>
                <li>• <strong>Stepping back</strong> - reconsidering</li>
                <li>• <strong>Stepping forward</strong> - volunteering</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present participle:</strong> &quot;I am stepping&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Stepping is good exercise&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;stepping stones&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The stepping was rhythmic&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;stepping motion&quot;</li>
                <li>• <strong>Verb phrase:</strong> &quot;to keep stepping&quot;</li>
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
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people confuse &quot;stepping&quot; and &quot;steping&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;hoping&quot; or &quot;taping.&quot; However, &quot;stepping&quot; follows the pattern of &quot;step&quot; + &quot;ing&quot; present participle suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;stepping&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Stepping&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English present participle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the etymology of &quot;stepping&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stepping&quot; comes from Old English &quot;steppan&quot; meaning &quot;to step&quot; or &quot;to go.&quot; It was first used in English in the 14th century to describe the action of walking.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;stepping&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;walking&quot; or &quot;treading.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;step&quot; + &quot;ing.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;stepping&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: walking, treading, pacing, striding, and ambling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;stepping&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing physical movement, &quot;stepping&quot; can be used metaphorically. For example, &quot;stepping up to the challenge&quot; means taking responsibility, and &quot;stepping into someone&apos;s shoes&quot; means taking over their role.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;stepping&quot; and &quot;walking&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stepping&quot; refers to the individual action of lifting and setting down each foot, while &quot;walking&quot; is the broader activity of moving on foot. &quot;Stepping&quot; is more specific and detailed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;stepping&quot; always about physical movement?</h3>
              <p className="text-lg text-gray-700">A: No! While &quot;stepping&quot; often describes physical movement, it can also be used metaphorically. For example, &quot;stepping up to the challenge&quot; means taking responsibility, and &quot;stepping into someone&apos;s shoes&quot; means taking over their role.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common idioms with &quot;stepping&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular idioms include: &quot;step on it&quot; (hurry up), &quot;step out of line&quot; (misbehave), &quot;step into the breach&quot; (fill a gap), and &quot;step on someone&apos;s toes&quot; (offend someone).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Stepping&quot;</strong> is the correct spelling meaning &quot;taking steps.&quot; 
          <br />
          <strong>&quot;Steping&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STEP + ING = STEPPING&quot;</p>
        </div>
      </div>
    </div>
  )
}
