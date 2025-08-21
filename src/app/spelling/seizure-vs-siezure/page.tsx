import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Seizure vs Siezure - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;seizure&quot; and &quot;siezure&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeizureVsSiezurePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Seizure vs Siezure
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-red-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-red-600">&quot;Seizure&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Siezure&quot; is always incorrect - remember &quot;seizure&quot; follows the &quot;i before e&quot; exception!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Siezure</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Seizure</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;sudden attack&quot; or &quot;forcible taking.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Seizure&quot; (Correct)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Means &quot;sudden attack&quot;</li>
                <li>• Follows &quot;ei&quot; pattern</li>
                <li>• From verb &quot;seize&quot;</li>
                <li>• Medical/legal term</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Siezure&quot; (Wrong)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Wrong letter order</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• &quot;Siezure&quot; is not a word</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;He had an epileptic <strong>seizure</strong>.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The police made a drug <strong>seizure</strong>.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Asset <strong>seizure</strong> is legal action.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>seizure</strong> lasted two minutes.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He had an epileptic <strong>siezure</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seizure&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The police made a drug <strong>siezure</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seizure&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Asset <strong>siezure</strong> is legal action&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seizure&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>siezure</strong> lasted two minutes&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seizure&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">EI Rule</h3>
              <p className="text-yellow-800">&quot;Seizure&quot; uses &quot;ei&quot; - think &quot;s-EI-zure&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Seize</h3>
              <p className="text-blue-800">&quot;Seize&quot; + &quot;ure&quot; = &quot;seizure&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;seizure&quot; to build muscle memory</p>
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
                <li>• <strong>Epileptic seizure</strong> - medical condition</li>
                <li>• <strong>Asset seizure</strong> - legal confiscation</li>
                <li>• <strong>Drug seizure</strong> - police action</li>
                <li>• <strong>Seizure disorder</strong> - neurological condition</li>
                <li>• <strong>Seizure activity</strong> - brain abnormality</li>
                <li>• <strong>Seizure threshold</strong> - trigger point</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The seizure was brief&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Seizure occurred suddenly&quot;</li>
                <li>• <strong>Object:</strong> &quot;Witnessed a seizure&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Seizure&apos;s duration&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple seizures&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Post-seizure&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people misspell &quot;seizure&quot; as &quot;siezure&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs because people apply the &quot;i before e except after c&quot; rule incorrectly. &quot;Seizure&quot; is an exception where &quot;ei&quot; is used despite not following &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;siezure&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;siezure&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What are the different meanings of &quot;seizure&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seizure&quot; can mean: a sudden medical attack (epileptic seizure), legal confiscation (asset seizure), or forcible taking possession of something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;seizure&quot; comes from &quot;seize&quot; - both use &quot;ei.&quot; Think &quot;s-EI-ze&quot; becomes &quot;s-EI-zure.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What causes epileptic seizures?</h3>
              <p className="text-lg text-gray-700">A: Epileptic seizures are caused by abnormal electrical activity in the brain. Triggers can include stress, lack of sleep, flashing lights, or certain medications.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;seizure&quot; and &quot;convulsion&quot;?</h3>
              <p className="text-lg text-gray-700">A: A seizure is the electrical event in the brain, while a convulsion is the physical shaking that may result. Not all seizures cause convulsions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: seize (verb), seizures (plural), seizable (able to be seized), and anti-seizure (preventing seizures).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;seizure&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seizure&quot; comes from the Old French &quot;seisir&quot; meaning &quot;to take possession.&quot; It entered English in the 14th century and has maintained its spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How is &quot;seizure&quot; used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: In legal contexts, seizure refers to the forcible taking of property by government authorities, often related to criminal investigations or tax collection.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Seizure&quot;</strong> uses &quot;ei&quot; and means &quot;sudden attack&quot; or &quot;forcible taking.&quot; 
          <br />
          <strong>&quot;Siezure&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;s-EI-zure&quot; - remember the &quot;ei&quot; pattern!</p>
        </div>
      </div>
    </div>
  )
}
