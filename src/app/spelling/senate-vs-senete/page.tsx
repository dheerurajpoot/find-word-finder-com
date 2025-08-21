import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Senate vs Senete - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;senate&quot; and &quot;senete&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SenateVsSenetePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Senate vs Senete
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Senate&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Senete&quot; is always incorrect - remember &quot;senate&quot; ends with &quot;ate&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Senete</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Senate</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;legislative body&quot; or &quot;governing council.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Senate&quot; (Correct)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;legislative body&quot;</li>
                <li>• Ends with &quot;ate&quot;</li>
                <li>• Latin origin: &quot;senatus&quot;</li>
                <li>• Used as noun</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;Senete&quot; (Wrong)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Ends with &quot;ete&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• &quot;Senete&quot; is not a word</li>
                <li>• Wrong ending letters</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>senate</strong> passed the bill.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;She was elected to the <strong>senate</strong>.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>senate</strong> chamber is impressive.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;Senate rules govern debate.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>senete</strong> passed the bill&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;senate&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She was elected to the <strong>senete</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;senate&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>senete</strong> chamber is impressive&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;senate&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Senete rules govern debate&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;senate&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ATE Ending Rule</h3>
              <p className="text-yellow-800">&quot;Senate&quot; ends with &quot;ate&quot; - think &quot;sen-ATE&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Debate</h3>
              <p className="text-blue-800">&quot;Senate&quot; = debate, both end with &quot;ate&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;senate&quot; to build muscle memory</p>
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
                <li>• <strong>Senate chamber</strong> - legislative meeting room</li>
                <li>• <strong>Senate majority</strong> - controlling party</li>
                <li>• <strong>Senate minority</strong> - opposition party</li>
                <li>• <strong>Senate confirmation</strong> - approval process</li>
                <li>• <strong>Senate hearing</strong> - investigative session</li>
                <li>• <strong>Senate vote</strong> - legislative decision</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The senate meets&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Senate approved&quot;</li>
                <li>• <strong>Object:</strong> &quot;Elected to senate&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Senate&apos;s decision&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Senatorial&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Senatorially&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;senate&quot; as &quot;senete&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs when people confuse the ending with words that end in &quot;-ete&quot; like &quot;complete&quot; or &quot;concrete.&quot; However, &quot;senate&quot; ends with &quot;-ate.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Is &quot;senete&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;senete&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: What words do end with &quot;-ete&quot;?</h3>
              <p className="text-lg text-gray-700">A: Words ending with &quot;-ete&quot; include: complete, concrete, discrete, and athlete. But &quot;senate&quot; is not one of them - it ends with &quot;-ate.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;senate&quot; ends with &quot;ate&quot; just like &quot;debate,&quot; &quot;create,&quot; or &quot;relate.&quot; Think of it as &quot;sen-ATE&quot; to emphasize the correct ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are the different meanings of &quot;senate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Senate&quot; can refer to: the upper house of Congress, a governing body in ancient Rome, a university governing body, or any legislative council.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;senate&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Senate&quot; is used in government (U.S. Senate), education (university senate), ancient history (Roman Senate), and other organizational contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;senate&quot; and &quot;house&quot;?</h3>
              <p className="text-lg text-gray-700">A: In the U.S. Congress, the Senate is the upper house with 100 members (2 per state), while the House of Representatives is the lower house with 435 members based on population.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: senator (member of senate), senatorial (relating to senate), and senatus (Latin origin meaning council of elders).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;senate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Senate&quot; comes from the Latin word &quot;senatus&quot; meaning &quot;council of elders.&quot; It entered English through Old French and has maintained its spelling for centuries.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Senate&quot;</strong> ends with &quot;ate&quot; and means &quot;legislative body&quot; or &quot;governing council.&quot; 
          <br />
          <strong>&quot;Senete&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sen-ATE&quot; - remember the &quot;ate&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
