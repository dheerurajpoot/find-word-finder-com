import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suspension vs Suspesion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suspension&quot; and &quot;suspesion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuspensionVsSuspesionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Suspension vs Suspesion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔧</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suspension&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suspesion&quot; is always incorrect - remember the &quot;pen&quot; in &quot;suspension&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suspesion</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suspension</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;temporary halt&quot; or &quot;mechanical system.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Suspension&quot; (Noun)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;temporary halt&quot;</li>
                <li>• Has &quot;pen&quot; in the middle</li>
                <li>• Ends with &quot;-sion&quot;</li>
                <li>• Related to &quot;suspend&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Error</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Suspesion&quot; is wrong</li>
                <li>• Missing &quot;n&quot; after &quot;pe&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Memory Aid</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Think &quot;SUS + PEN + SION&quot;</li>
                <li>• &quot;pen&quot; like writing pen</li>
                <li>• &quot;-sion&quot; ending pattern</li>
                <li>• Related to &quot;suspend&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The car&apos;s <strong>suspension</strong> needs repair.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He received a <strong>suspension</strong> from school.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The bridge is held by <strong>suspension</strong> cables.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Work was temporarily in <strong>suspension</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The car&apos;s <strong>suspesion</strong> needs repair&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspension&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He received a <strong>suspesion</strong> from school&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspension&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bridge is held by <strong>suspesion</strong> cables&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspension&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Work was temporarily in <strong>suspesion</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspension&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">PEN Rule</h3>
              <p className="text-yellow-800">&quot;Suspension&quot; has &quot;pen&quot; like a writing pen</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Suspend</h3>
              <p className="text-blue-800">&quot;Suspension&quot; comes from &quot;suspend&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words ending in &quot;-sion&quot; are nouns</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUS + PEN + SION = Suspension</p>
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
                <li>• <strong>Suspension bridge</strong> - cable-supported bridge</li>
                <li>• <strong>Suspension system</strong> - vehicle suspension</li>
                <li>• <strong>Academic suspension</strong> - temporary expulsion</li>
                <li>• <strong>In suspension</strong> - temporarily halted</li>
                <li>• <strong>Suspension of disbelief</strong> - accepting fiction</li>
                <li>• <strong>Colloidal suspension</strong> - mixed particles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The suspension is broken&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suspension is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;I need a new suspension&quot;</li>
                <li>• <strong>Prepositional object:</strong> &quot;In suspension&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;Suspend&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Suspended&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people misspell &quot;suspension&quot; as &quot;suspesion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;n&quot; sound in &quot;suspension&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the &quot;pen&quot; pattern in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;suspension&quot; related to &quot;suspend&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words come from the Latin &quot;suspendere&quot; meaning &quot;to hang up&quot; or &quot;to stop.&quot; &quot;Suspend&quot; is the verb form, while &quot;suspension&quot; is the noun form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;suspension&quot; and &quot;postponement&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspension&quot; implies a temporary halt that may or may not resume, while &quot;postponement&quot; specifically means rescheduling for a later time. Suspension is more indefinite.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;suspension&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suspension&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;suspension&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: halt, pause, interruption, cessation, stoppage, deferral, adjournment, and postponement. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suspend&quot; (which has the same &quot;pen&quot; sound) and remember that &quot;suspension&quot; is the noun form. The &quot;pen&quot; in the middle is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When something is SUSPENDED, it&apos;s in SUSPENSION&quot; - both words have the &quot;pen&quot; sound. Or remember: &quot;SUS + PEN + SION&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the verb form of &quot;suspension&quot;?</h3>
              <p className="text-lg text-gray-700">A: The verb form is &quot;suspend.&quot; For example: &quot;They will suspend the meeting&quot; or &quot;The school suspended the student.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suspension&quot;</strong> has &quot;pen&quot; in the middle and ends with &quot;-sion.&quot; 
          <br />
          <strong>&quot;Suspesion&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + PEN + SION&quot; and remember the &quot;pen&quot; in the middle!</p>
        </div>
      </div>
    </div>
  )
}
