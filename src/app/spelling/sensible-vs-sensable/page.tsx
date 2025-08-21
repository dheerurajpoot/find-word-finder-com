import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sensible vs Sensable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sensible&quot; and &quot;sensable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SensibleVsSensablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
          Sensible vs Sensable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-violet-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-indigo-600">&quot;Sensible&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sensable&quot; is always incorrect - remember the &quot;i&quot; in &quot;sensible&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sensable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-indigo-800 mb-4">Sensible</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-indigo-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-indigo-700 leading-relaxed">
                This is the proper spelling meaning &quot;practical&quot; or &quot;reasonable.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Sensible&quot; (Correct)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Means &quot;practical&quot;</li>
                <li>• Contains &quot;i&quot; before &quot;b&quot;</li>
                <li>• Latin origin: &quot;sensibilis&quot;</li>
                <li>• Used as adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Sensable&quot; (Wrong)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Missing the &quot;i&quot;</li>
                <li>• Phonetic misspelling</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;Sensable&quot; is not a word</li>
                <li>• Missing essential letter</li>
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
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;That&apos;s a <strong>sensible</strong> decision.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;She wore <strong>sensible</strong> shoes.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;The plan is very <strong>sensible</strong>.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;He gave <strong>sensible</strong> advice.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s a <strong>sensable</strong> decision&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She wore <strong>sensable</strong> shoes&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The plan is very <strong>sensable</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He gave <strong>sensable</strong> advice&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensible&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I Before B Rule</h3>
              <p className="text-yellow-800">&quot;Sensible&quot; has &quot;i&quot; before &quot;b&quot; - think &quot;sens-I-ble&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Smart</h3>
              <p className="text-blue-800">&quot;Sensible&quot; = smart, &quot;Sensable&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sensible&quot; to build muscle memory</p>
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
                <li>• <strong>Sensible choice</strong> - practical decision</li>
                <li>• <strong>Sensible approach</strong> - reasonable method</li>
                <li>• <strong>Sensible person</strong> - practical individual</li>
                <li>• <strong>Sensible solution</strong> - practical answer</li>
                <li>• <strong>Sensible advice</strong> - practical guidance</li>
                <li>• <strong>Sensible option</strong> - reasonable choice</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The sensible choice&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The plan is sensible&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Sensible advice&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More sensible than&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most sensible&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Sensibly&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;sensible&quot; as &quot;sensable&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;i&quot; sound in &quot;sensible&quot; can be subtle when spoken quickly. Many people rely on phonetic spelling and forget that &quot;sensible&quot; has an &quot;i&quot; before the &quot;b.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;sensable&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sensable&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the etymology of &quot;sensible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sensible&quot; comes from the Latin word &quot;sensibilis&quot; meaning &quot;perceptible by the senses.&quot; The English word was formed from this Latin root, maintaining the &quot;i&quot; throughout its evolution.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sensible&quot; is spelled the same way in all English-speaking regions. Both American and British English use the same spelling with the &quot;i&quot; before &quot;b.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word as &quot;sens-I-ble&quot; - emphasize the &quot;I&quot; sound. You can also remember that &quot;sensible&quot; means &quot;smart,&quot; and both words contain the letter &quot;i.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;sensible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: practical, reasonable, logical, rational, wise, prudent, and sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;sensible&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sensible&quot; can describe practical decisions, reasonable behavior, logical thinking, or wise choices. It&apos;s a versatile adjective with multiple applications.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;sensible&quot; and &quot;sensitive&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sensible&quot; means practical or reasonable, while &quot;sensitive&quot; means easily affected or responsive. They are completely different words with different meanings.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sensible&quot;</strong> has an &quot;i&quot; before the &quot;b&quot; and means &quot;practical&quot; or &quot;reasonable.&quot; 
          <br />
          <strong>&quot;Sensable&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sens-I-ble&quot; - emphasize the &quot;I&quot; sound!</p>
        </div>
      </div>
    </div>
  )
}
