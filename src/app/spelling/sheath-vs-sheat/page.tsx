import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sheath vs Sheat - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sheath&quot; and &quot;sheat&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SheathVsSheatPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Sheath vs Sheat
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sheath&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sheat&quot; is always incorrect - remember &quot;sheath&quot; ends with &quot;th&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sheat</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sheath</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;protective covering&quot; or &quot;scabbard.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sheath&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;protective covering&quot;</li>
                <li>• Ends with &quot;th&quot;</li>
                <li>• Old English origin</li>
                <li>• Used as noun</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Sheat&quot; (Wrong)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Missing &quot;h&quot; letter</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• &quot;Sheat&quot; is not a word</li>
                <li>• Missing letter &quot;h&quot;</li>
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The sword <strong>sheath</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Leather <strong>sheath</strong> for the knife.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>sheath</strong> protected the blade.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;A protective <strong>sheath</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sword <strong>sheat</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sheath&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Leather <strong>sheat</strong> for the knife&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sheath&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sheat</strong> protected the blade&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sheath&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A protective <strong>sheat</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sheath&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">TH Ending Rule</h3>
              <p className="text-yellow-800">&quot;Sheath&quot; ends with &quot;th&quot; - think &quot;shea-TH&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Teeth</h3>
              <p className="text-blue-800">&quot;Sheath&quot; and &quot;teeth&quot; both end with &quot;th&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sheath&quot; to build muscle memory</p>
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
                <li>• <strong>Sword sheath</strong> - blade protector</li>
                <li>• <strong>Knife sheath</strong> - cutting tool cover</li>
                <li>• <strong>Leather sheath</strong> - protective covering</li>
                <li>• <strong>Sheath dress</strong> - form-fitting garment</li>
                <li>• <strong>Sheath knife</strong> - fixed-blade knife</li>
                <li>• <strong>Protective sheath</strong> - safety covering</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The sheath is leather&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sheath protects blade&quot;</li>
                <li>• <strong>Object:</strong> &quot;Remove the sheath&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Sheath&apos;s material&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple sheaths&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Sheath-maker&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;sheath&quot; as &quot;sheat&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people drop the &quot;h&quot; from the &quot;th&quot; ending. Remember that &quot;sheath&quot; ends with &quot;th&quot; like &quot;teeth&quot; and &quot;beneath.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;sheat&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sheat&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are the different meanings of &quot;sheath&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sheath&quot; can mean: a protective covering for a blade, a scabbard for a sword, a form-fitting dress, or any protective outer covering.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sheath&quot; ends with &quot;th&quot; like &quot;teeth.&quot; Think &quot;A SHEATH protects like TEETH protect&quot; - both end with &quot;th.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;sheath&quot; and &quot;scabbard&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both refer to protective coverings for blades, but &quot;scabbard&quot; specifically refers to a sword&apos;s sheath, while &quot;sheath&quot; is more general for any blade covering.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;sheath&quot; be used in fashion contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! In fashion, a &quot;sheath dress&quot; refers to a form-fitting, straight-cut dress that follows the body&apos;s natural lines, similar to how a sheath fits around a blade.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: sheathe (verb meaning to put in a sheath), sheathing (noun meaning covering material), and unsheathe (verb meaning to remove from sheath).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;sheath&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sheath&quot; comes from the Old English &quot;scēaþ&quot; meaning &quot;sheath&quot; or &quot;scabbard.&quot; It has Germanic roots and entered English in the 9th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;sheath&quot; used in biology?</h3>
              <p className="text-lg text-gray-700">A: In biology, &quot;sheath&quot; refers to protective coverings around structures like nerves (myelin sheath), muscles (muscle sheath), or plant parts (leaf sheath).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sheath&quot;</strong> ends with &quot;th&quot; and means &quot;protective covering.&quot; 
          <br />
          <strong>&quot;Sheat&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;shea-TH&quot; - remember the &quot;th&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
