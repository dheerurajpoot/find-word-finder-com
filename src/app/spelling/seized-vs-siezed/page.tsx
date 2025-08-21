import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Seized vs Siezed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;seized&quot; and &quot;siezed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeizedVsSiezedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Seized vs Siezed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Seized&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Siezed&quot; is always incorrect - remember &quot;seized&quot; follows the &quot;ei&quot; pattern!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Siezed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Seized</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;took forcibly&quot; or &quot;grasped suddenly.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Seized&quot; (Correct)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Past tense of &quot;seize&quot;</li>
                <li>• Uses &quot;ei&quot; pattern</li>
                <li>• Means &quot;took forcibly&quot;</li>
                <li>• Common irregular verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Siezed&quot; (Wrong)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Wrong letter order</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• &quot;Siezed&quot; is not a word</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The police <strong>seized</strong> the evidence.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;He <strong>seized</strong> the opportunity.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;Fear <strong>seized</strong> her heart.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The engine <strong>seized</strong> up completely.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The police <strong>siezed</strong> the evidence&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seized&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>siezed</strong> the opportunity&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seized&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Fear <strong>siezed</strong> her heart&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seized&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The engine <strong>siezed</strong> up completely&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seized&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">EI Pattern</h3>
              <p className="text-yellow-800">&quot;Seized&quot; uses &quot;ei&quot; - think &quot;s-EI-zed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Seize</h3>
              <p className="text-blue-800">&quot;Seize&quot; + &quot;d&quot; = &quot;seized&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;seized&quot; to build muscle memory</p>
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
                <li>• <strong>Seized the moment</strong> - took advantage</li>
                <li>• <strong>Seized control</strong> - took command</li>
                <li>• <strong>Seized assets</strong> - confiscated property</li>
                <li>• <strong>Seized up</strong> - stopped working</li>
                <li>• <strong>Seized power</strong> - took authority</li>
                <li>• <strong>Seized opportunity</strong> - grasped chance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;He seized it&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;Had seized&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;Was seized&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;Has seized&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Seized property&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Re-seized&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;seized&quot; as &quot;siezed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs because people incorrectly apply the &quot;i before e except after c&quot; rule. &quot;Seized&quot; is an exception where &quot;ei&quot; is used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;siezed&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;siezed&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are the different meanings of &quot;seized&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seized&quot; can mean: took forcibly (seized property), grasped suddenly (seized opportunity), stopped working (engine seized), or overwhelmed (seized by fear).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;seized&quot; comes from &quot;seize&quot; - both use &quot;ei.&quot; Think &quot;s-EI-ze&quot; becomes &quot;s-EI-zed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;seized&quot; and &quot;grabbed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seized&quot; implies more forceful or sudden action and can be used metaphorically, while &quot;grabbed&quot; is more casual and typically physical.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;seized&quot; be used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! In legal contexts, &quot;seized&quot; refers to property taken by authorities, such as &quot;seized assets&quot; or &quot;seized evidence.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: seize (present), seizing (present participle), seizure (noun), and seizable (able to be seized).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the origin of the word &quot;seized&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seized&quot; comes from the Old French &quot;seisir&quot; meaning &quot;to take possession.&quot; It entered English in the 13th century and has maintained its spelling pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;seized&quot; used in medical contexts?</h3>
              <p className="text-lg text-gray-700">A: In medical contexts, &quot;seized&quot; can refer to muscles that have seized up (cramped) or joints that have seized (become immobile).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Seized&quot;</strong> uses &quot;ei&quot; and means &quot;took forcibly&quot; or &quot;grasped suddenly.&quot; 
          <br />
          <strong>&quot;Siezed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;s-EI-zed&quot; - remember the &quot;ei&quot; pattern!</p>
        </div>
      </div>
    </div>
  )
}
