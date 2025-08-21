import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Secession vs Seccesion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;secession&quot; and &quot;seccesion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SecessionVsSeccesionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-stone-600 bg-clip-text text-transparent">
          Secession vs Seccesion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-stone-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Secession&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Seccesion&quot; is always incorrect - remember &quot;secession&quot; has single &quot;c&quot; after &quot;e&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Seccesion</h3>
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
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Secession</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;withdrawal&quot; or &quot;formal separation.&quot;
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Secession&quot; (Correct)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;formal withdrawal&quot;</li>
                <li>• Has single &quot;c&quot; after &quot;e&quot;</li>
                <li>• Latin origin: &quot;secessio&quot;</li>
                <li>• Political/legal term</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;Seccesion&quot; (Wrong)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Extra &quot;c&quot; added</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-stone-50 border-stone-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-stone-800 space-y-2">
                <li>• &quot;Seccesion&quot; is not a word</li>
                <li>• Extra letter &quot;c&quot;</li>
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
                <p className="text-lg text-slate-800">&quot;The state&apos;s <strong>secession</strong> was controversial.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;<strong>Secession</strong> from the union.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>secession</strong> movement grew.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;Threats of <strong>secession</strong> emerged.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The state&apos;s <strong>seccesion</strong> was controversial&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secession&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;<strong>Seccesion</strong> from the union&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secession&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>seccesion</strong> movement grew&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secession&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Threats of <strong>seccesion</strong> emerged&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secession&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single C Rule</h3>
              <p className="text-yellow-800">&quot;Secession&quot; has single &quot;c&quot; - think &quot;se-C-ession&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Secede</h3>
              <p className="text-blue-800">&quot;Secede&quot; + &quot;ssion&quot; = &quot;secession&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;secession&quot; to build muscle memory</p>
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
                <li>• <strong>Secession movement</strong> - separatist campaign</li>
                <li>• <strong>Secession crisis</strong> - separation conflict</li>
                <li>• <strong>Right of secession</strong> - legal withdrawal right</li>
                <li>• <strong>Secession attempt</strong> - separation effort</li>
                <li>• <strong>Secession debate</strong> - separation discussion</li>
                <li>• <strong>Peaceful secession</strong> - non-violent separation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The secession was voted&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Secession caused war&quot;</li>
                <li>• <strong>Object:</strong> &quot;Declared secession&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Secession&apos;s impact&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple secessions&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Secessionist&quot;</li>
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;secession&quot; as &quot;seccesion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people add an extra &quot;c&quot; thinking it looks more correct. Remember that &quot;secession&quot; comes from &quot;secede&quot; with only one &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Is &quot;seccesion&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;seccesion&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-stone-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-3">Q: What does &quot;secession&quot; actually mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Secession&quot; means the formal withdrawal or separation of a group, state, or territory from a larger political entity or organization.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;secession&quot; comes from &quot;secede.&quot; Think &quot;To SECEDE leads to SECESSION&quot; - both have single &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the most famous example of secession?</h3>
              <p className="text-lg text-gray-700">A: The most famous example is the secession of Southern states from the United States in 1860-1861, which led to the American Civil War.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;secession&quot; be used outside of politics?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Secession&quot; can refer to withdrawal from any organization, group, or association, not just political entities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: secede (verb), secessionist (person supporting secession), and secessionism (political movement for secession).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the origin of the word &quot;secession&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Secession&quot; comes from the Latin &quot;secessio&quot; meaning &quot;withdrawal.&quot; It entered English in the 17th century through French.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is secession legal in most countries?</h3>
              <p className="text-lg text-gray-700">A: The legality of secession varies by country and constitution. Some allow it under specific conditions, while others explicitly prohibit it.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Secession&quot;</strong> has single &quot;c&quot; and means &quot;formal withdrawal.&quot; 
          <br />
          <strong>&quot;Seccesion&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;se-C-ession&quot; - remember the single &quot;c&quot;!</p>
        </div>
      </div>
    </div>
  )
}
