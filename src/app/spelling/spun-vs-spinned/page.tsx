import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spun vs Spinned - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spun&quot; and &quot;spinned&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpunVsSpinnedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Spun vs Spinned
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
            <span className="text-2xl mr-3">🔄</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Spun&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spinned&quot; is always incorrect - remember that &quot;spin&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spinned</h3>
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
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Spun</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of spin.&quot;
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Spin&quot; (Root)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;to rotate&quot; or &quot;to turn&quot;</li>
                <li>• Related to movement</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;Irregular&quot; (Verb)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Does not follow rules</li>
                <li>• Must be memorized</li>
                <li>• Part of English</li>
                <li>• Creates &quot;spun&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">&quot;Un&quot; (Ending)</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• Forms the ending sound</li>
                <li>• Means &quot;past tense&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;spun&quot;</li>
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
                <p className="text-lg text-slate-800">&quot;The wheel <strong>spun</strong> rapidly.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;She <strong>spun</strong> around to face me.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The dancer <strong>spun</strong> gracefully.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The top <strong>spun</strong> on the table.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The wheel <strong>spinned</strong> rapidly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spun&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>spinned</strong> around to face me&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spun&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The dancer <strong>spinned</strong> gracefully&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spun&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The top <strong>spinned</strong> on the table&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spun&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Rotation</h3>
              <p className="text-yellow-800">&quot;Spun&quot; means rotated</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Irregular Verb</h3>
              <p className="text-blue-800">Remember &quot;spin&quot; is irregular</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;spun&quot; to build muscle memory</p>
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
                <li>• <strong>Spun around</strong> - turned around</li>
                <li>• <strong>Spun rapidly</strong> - rotated quickly</li>
                <li>• <strong>Spun gracefully</strong> - turned elegantly</li>
                <li>• <strong>Spun on</strong> - rotated on surface</li>
                <li>• <strong>Spun out</strong> - lost control</li>
                <li>• <strong>Spun off</strong> - separated by rotation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past Tense:</strong> &quot;spun&quot;</li>
                <li>• <strong>Subject:</strong> &quot;He spun&quot;</li>
                <li>• <strong>Object:</strong> &quot;I was spun&quot;</li>
                <li>• <strong>Past Perfect:</strong> &quot;had spun&quot;</li>
                <li>• <strong>Passive:</strong> &quot;was spun&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;spun yarn&quot;</li>
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people confuse &quot;spun&quot; and &quot;spinned&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to regular verbs like &quot;pin&quot; (pinned). However, &quot;spin&quot; is an irregular verb that follows the pattern: spin → spun → spun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Can &quot;spun&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Spun&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English past tense of &quot;spin.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: What&apos;s the etymology of &quot;spun&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spun&quot; comes from Old English &quot;spinnan&quot; meaning &quot;to spin&quot; + the irregular past tense form. It was first used in English in the 14th century to describe the past action of spinning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;spun&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;turned&quot; or &quot;rotated.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;spin&quot; is irregular, so it becomes &quot;spun.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;spun&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: turned, rotated, whirled, twirled, revolved, and pivoted.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;spun&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing physical rotation, &quot;spun&quot; can be used in various contexts like storytelling (spun a tale), deception (spun the truth), and manufacturing (spun yarn).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;spun&quot; and &quot;turned&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spun&quot; refers to rapid rotation around an axis, while &quot;turned&quot; refers to changing direction or position. &quot;Spun&quot; has a more dynamic, continuous connotation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;spun&quot; always about physical movement?</h3>
              <p className="text-lg text-gray-700">A: No! While often describing physical rotation, &quot;spun&quot; can also describe abstract concepts. For example, &quot;spun a tale&quot; means to tell a story, and &quot;spun the truth&quot; means to deceive.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;spun&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;spun around,&quot; &quot;spun rapidly,&quot; &quot;spun gracefully,&quot; &quot;spun on,&quot; &quot;spun out,&quot; and &quot;spun off.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spun&quot;</strong> is the correct spelling meaning &quot;past tense of spin.&quot; 
          <br />
          <strong>&quot;Spinned&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPIN is IRREGULAR = SPUN&quot;</p>
        </div>
      </div>
    </div>
  )
}
