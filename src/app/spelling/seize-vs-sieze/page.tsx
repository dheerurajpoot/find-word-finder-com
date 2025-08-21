import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Seize vs Sieze - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;seize&quot; and &quot;sieze&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeizeVsSiezePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Seize vs Sieze
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Seize&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sieze&quot; is always incorrect - remember &quot;seize&quot; follows the &quot;ei&quot; exception!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sieze</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Seize</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;to grab forcefully&quot; or &quot;take control.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Seize&quot; (Correct)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;grab forcefully&quot;</li>
                <li>• Uses &quot;ei&quot; pattern</li>
                <li>• Common action verb</li>
                <li>• Old French origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Sieze&quot; (Wrong)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Wrong letter order</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• &quot;Sieze&quot; is not a word</li>
                <li>• Wrong &quot;ie&quot; placement</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks spelling rules</li>
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
            <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;<strong>Seize</strong> the day!&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;Police will <strong>seize</strong> the drugs.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;<strong>Seize</strong> this opportunity now.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;Don&apos;t let fear <strong>seize</strong> you.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;<strong>Sieze</strong> the day!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seize&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Police will <strong>sieze</strong> the drugs&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seize&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;<strong>Sieze</strong> this opportunity now&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seize&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t let fear <strong>sieze</strong> you&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seize&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">EI Exception</h3>
              <p className="text-yellow-800">&quot;Seize&quot; uses &quot;ei&quot; - think &quot;s-EI-ze&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Weird</h3>
              <p className="text-blue-800">&quot;Seize&quot; and &quot;weird&quot; both use &quot;ei&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;seize&quot; to build muscle memory</p>
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
                <li>• <strong>Seize the day</strong> - carpe diem</li>
                <li>• <strong>Seize control</strong> - take command</li>
                <li>• <strong>Seize power</strong> - take authority</li>
                <li>• <strong>Seize assets</strong> - confiscate property</li>
                <li>• <strong>Seize opportunity</strong> - grasp chance</li>
                <li>• <strong>Seize up</strong> - stop functioning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Infinitive:</strong> &quot;To seize&quot;</li>
                <li>• <strong>Present:</strong> &quot;I seize&quot;</li>
                <li>• <strong>Past:</strong> &quot;Seized&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;Seizing&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Seize it!&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Seizing power&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;seize&quot; as &quot;sieze&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs because people incorrectly apply the &quot;i before e except after c&quot; rule. &quot;Seize&quot; is one of the exceptions to this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;sieze&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sieze&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What are the different meanings of &quot;seize&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seize&quot; can mean: grab forcefully, take control of, confiscate legally, grasp an opportunity, or stop functioning (seize up).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;seize&quot; is like &quot;weird&quot; - both use &quot;ei&quot; even though they don&apos;t follow &quot;c.&quot; Think &quot;s-EI-ze&quot; to emphasize the &quot;ei.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;seize&quot; and &quot;grab&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seize&quot; implies more force, urgency, or formality than &quot;grab.&quot; It&apos;s often used in legal, military, or metaphorical contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;seize&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Seize&quot; is often used metaphorically: &quot;seize the moment,&quot; &quot;seize an opportunity,&quot; or &quot;fear seized him.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: seized (past tense), seizing (present participle), seizure (noun), and seizable (able to be seized).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;seize&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seize&quot; comes from the Old French &quot;seisir&quot; meaning &quot;to take possession.&quot; It entered Middle English around 1200 and has kept its spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What does &quot;seize the day&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seize the day&quot; (carpe diem in Latin) means to make the most of the present moment and not waste opportunities.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Seize&quot;</strong> uses &quot;ei&quot; and means &quot;to grab forcefully&quot; or &quot;take control.&quot; 
          <br />
          <strong>&quot;Sieze&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;s-EI-ze&quot; - remember the &quot;ei&quot; exception!</p>
        </div>
      </div>
    </div>
  )
}
