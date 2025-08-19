import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Substitute vs Subsitute - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;substitute&quot; and &quot;subsitute&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubstituteVsSubsitutePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Substitute vs Subsitute
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔄</span>
            <span className="text-2xl font-bold text-green-600">&quot;Substitute&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Subsitute&quot; is incorrect - remember the &quot;t&quot; in &quot;stitute&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Subsitute</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;t&quot; in &quot;stitute&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Substitute</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to replace&quot; or &quot;a replacement.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Used in many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Stitute&quot; (Root)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Means &quot;to set&quot; or &quot;to place&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;institute&quot;</li>
                <li>• Must include &quot;t&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;E&quot; (Suffix)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Forms verbs</li>
                <li>• Common ending</li>
                <li>• Simple suffix</li>
                <li>• Easy to remember</li>
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
                <p className="text-lg text-green-800">&quot;I need a <strong>substitute</strong> teacher for today.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Can you <strong>substitute</strong> olive oil for butter?&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He was a <strong>substitute</strong> player on the team.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;There&apos;s no <strong>substitute</strong> for hard work.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I need a <strong>subsitute</strong> teacher&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;substitute&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Can you <strong>subsitute</strong> olive oil?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;substitute&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He was a <strong>subsitute</strong> player&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;substitute&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;No <strong>subsitute</strong> for hard work&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;substitute&quot;</p>
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
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Replace</h3>
              <p className="text-yellow-800">&quot;Substitute&quot; means replace, remember the &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Root Rule</h3>
              <p className="text-blue-800">&quot;Stitute&quot; root always has a &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;substitute&quot; to build muscle memory</p>
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
                <li>• <strong>Substitute teacher</strong> - replacement educator</li>
                <li>• <strong>Substitute player</strong> - replacement athlete</li>
                <li>• <strong>Substitute ingredient</strong> - replacement item</li>
                <li>• <strong>Substitute method</strong> - alternative approach</li>
                <li>• <strong>Substitute solution</strong> - replacement answer</li>
                <li>• <strong>Substitute plan</strong> - backup strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Substitute</strong> - to replace</li>
                <li>• <strong>Substitution</strong> - the act of replacing</li>
                <li>• <strong>Substitutable</strong> - able to be replaced</li>
                <li>• <strong>Institute</strong> - to establish</li>
                <li>• <strong>Constitute</strong> - to form</li>
                <li>• <strong>Prostitute</strong> - to offer for sale</li>
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
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;substitute&quot; as &quot;subsitute&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is dropping the &quot;t&quot; from the &quot;stitute&quot; root. This happens because the word is long and complex, and people often forget that &quot;stitute&quot; always has a &quot;t.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;substitute&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Substitute&quot; is a formal, standard English word commonly used in academic, business, and professional contexts. It&apos;s perfectly appropriate for all types of writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;substitute&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Substitute&quot; comes from Latin: &quot;sub&quot; (under) + &quot;stituere&quot; (to set, place). It literally means &quot;to set under&quot; or &quot;to place in the stead of.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;substitute&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized word used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break it down: &quot;sub&quot; + &quot;stitute.&quot; Remember that &quot;stitute&quot; always has a &quot;t,&quot; just like &quot;institute&quot; and &quot;constitute.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;substitute&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: replace, exchange, swap, switch, alternate, backup, replacement, and alternative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;substitute&quot; be used as both a verb and noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Substitute&quot; can be a verb meaning &quot;to replace&quot; or a noun meaning &quot;a replacement.&quot; It&apos;s a versatile word with multiple grammatical functions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;substitute&quot; and &quot;replace&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Substitute&quot; often implies a temporary or alternative replacement, while &quot;replace&quot; suggests a permanent substitution. Both mean essentially the same thing but have slightly different connotations.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Substitute&quot;</strong> has the complete &quot;stitute&quot; root with a &quot;t.&quot; 
          <br />
          <strong>&quot;Subsitute&quot;</strong> is missing the &quot;t&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + STITUTE&quot; - the &quot;t&quot; in stitute is essential!</p>
        </div>
      </div>
    </div>
  )
}
