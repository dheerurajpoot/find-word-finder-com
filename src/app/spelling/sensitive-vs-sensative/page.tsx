import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sensitive vs Sensative - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sensitive&quot; and &quot;sensative&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SensitiveVsSensativePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Sensitive vs Sensative
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 rounded-2xl mb-10 border border-pink-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-pink-600">&quot;Sensitive&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sensative&quot; is always incorrect - remember the &quot;i&quot; in &quot;sensitive&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sensative</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Sensitive</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-pink-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-pink-700 leading-relaxed">
                This is the proper spelling meaning &quot;easily affected&quot; or &quot;responsive to stimuli.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Sensitive&quot; (Correct)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;easily affected&quot;</li>
                <li>• Contains &quot;i&quot; before &quot;t&quot;</li>
                <li>• Latin origin: &quot;sensitivus&quot;</li>
                <li>• Used as adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Sensative&quot; (Wrong)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Missing the &quot;i&quot;</li>
                <li>• Phonetic misspelling</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Sensative&quot; is not a word</li>
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
            <h3 className="text-2xl font-bold text-pink-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;She has <strong>sensitive</strong> skin.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;This is a <strong>sensitive</strong> topic.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;The equipment is very <strong>sensitive</strong>.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;He&apos;s <strong>sensitive</strong> to criticism.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>sensative</strong> skin&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensitive&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a <strong>sensative</strong> topic&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensitive&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The equipment is very <strong>sensative</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensitive&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He&apos;s <strong>sensative</strong> to criticism&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sensitive&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I Before T Rule</h3>
              <p className="text-yellow-800">&quot;Sensitive&quot; has &quot;i&quot; before &quot;t&quot; - think &quot;sens-I-tive&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Feeling</h3>
              <p className="text-blue-800">&quot;Sensitive&quot; = feeling, &quot;Sensative&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sensitive&quot; to build muscle memory</p>
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
                <li>• <strong>Sensitive information</strong> - confidential data</li>
                <li>• <strong>Sensitive skin</strong> - easily irritated skin</li>
                <li>• <strong>Sensitive topic</strong> - delicate subject</li>
                <li>• <strong>Sensitive equipment</strong> - precise machinery</li>
                <li>• <strong>Sensitive person</strong> - emotionally responsive</li>
                <li>• <strong>Sensitive area</strong> - vulnerable region</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The sensitive child&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The topic is sensitive&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Sensitive information&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More sensitive than&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most sensitive&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Sensitively&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Why do people misspell &quot;sensitive&quot; as &quot;sensative&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;i&quot; sound in &quot;sensitive&quot; can be subtle when spoken quickly. Many people rely on phonetic spelling and forget that &quot;sensitive&quot; has an &quot;i&quot; before the &quot;t.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;sensative&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sensative&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;sensitive&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sensitive&quot; comes from the Latin word &quot;sensitivus&quot; meaning &quot;capable of sensation.&quot; The English word was formed from this Latin root, maintaining the &quot;i&quot; throughout its evolution.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sensitive&quot; is spelled the same way in all English-speaking regions. Both American and British English use the same spelling with the &quot;i&quot; before &quot;t.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word as &quot;sens-I-tive&quot; - emphasize the &quot;I&quot; sound. You can also remember that &quot;sensitive&quot; means &quot;feeling,&quot; and both words contain the letter &quot;i.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;sensitive&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: responsive, reactive, delicate, touchy, vulnerable, emotional, and perceptive.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;sensitive&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sensitive&quot; can describe physical sensitivity (skin), emotional sensitivity (personality), or technical sensitivity (equipment). It&apos;s a versatile adjective with multiple meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sensitive&quot; and &quot;sensible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sensitive&quot; means easily affected or responsive, while &quot;sensible&quot; means practical or reasonable. They are completely different words with different meanings.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sensitive&quot;</strong> has an &quot;i&quot; before the &quot;t&quot; and means &quot;easily affected&quot; or &quot;responsive.&quot; 
          <br />
          <strong>&quot;Sensative&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sens-I-tive&quot; - emphasize the &quot;I&quot; sound!</p>
        </div>
      </div>
    </div>
  )
}
