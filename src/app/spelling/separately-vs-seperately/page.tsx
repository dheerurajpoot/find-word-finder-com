import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Separately vs Seperately - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;separately&quot; and &quot;seperately&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeparatelyVsSeperatelyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Separately vs Seperately
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
            <span className="text-2xl font-bold text-emerald-600">&quot;Separately&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Seperately&quot; is always incorrect - remember the &quot;a&quot; in &quot;separately&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Seperately</h3>
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
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Separately</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;in a separate manner&quot; or &quot;apart from others.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Separate&quot; (Root Word)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;apart&quot; or &quot;divided&quot;</li>
                <li>• Contains &quot;a&quot; after &quot;p&quot;</li>
                <li>• Latin origin: &quot;separatus&quot;</li>
                <li>• Used as verb and adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Separately&quot; (Adverb)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;in a separate manner&quot;</li>
                <li>• Formed by adding &quot;-ly&quot;</li>
                <li>• Keeps the &quot;a&quot; from root</li>
                <li>• Describes how action is done</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Common Mistake</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• &quot;Seperately&quot; is wrong</li>
                <li>• Missing the &quot;a&quot;</li>
                <li>• Phonetic confusion</li>
                <li>• Very common error</li>
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
                <p className="text-lg text-emerald-800">&quot;The items were packed <strong>separately</strong>.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;We will handle these issues <strong>separately</strong>.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The twins were born <strong>separately</strong>.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;Each component works <strong>separately</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The items were packed <strong>seperately</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separately&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We will handle these <strong>seperately</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separately&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The twins were born <strong>seperately</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separately&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Each component works <strong>seperately</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separately&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">A After P Rule</h3>
              <p className="text-yellow-800">&quot;Separate&quot; has &quot;a&quot; after &quot;p&quot; - think &quot;sep-A-rate&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Apart</h3>
              <p className="text-blue-800">&quot;Separate&quot; = apart, &quot;Seperate&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;separately&quot; to build muscle memory</p>
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
                <li>• <strong>Handle separately</strong> - deal with individually</li>
                <li>• <strong>Pack separately</strong> - put in different containers</li>
                <li>• <strong>Store separately</strong> - keep apart</li>
                <li>• <strong>Process separately</strong> - handle individually</li>
                <li>• <strong>Bill separately</strong> - charge individually</li>
                <li>• <strong>Ship separately</strong> - send in different packages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;They arrived separately&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Separately packaged items&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The issues were handled separately&quot;</li>
                <li>• <strong>Adverbial phrase:</strong> &quot;We will discuss this separately&quot;</li>
                <li>• <strong>Manner indicator:</strong> &quot;The parts work separately&quot;</li>
                <li>• <strong>Time indicator:</strong> &quot;They left separately&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;separately&quot; as &quot;seperately&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;a&quot; sound in &quot;separate&quot; can be subtle when spoken quickly. Many people rely on phonetic spelling and forget that &quot;separate&quot; has an &quot;a&quot; after the &quot;p.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;seperately&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;seperately&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;separately&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Separately&quot; comes from the Latin word &quot;separatus&quot; meaning &quot;set apart.&quot; The English word &quot;separate&quot; was formed from this Latin root, and &quot;separately&quot; is the adverbial form created by adding &quot;-ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;separately&quot; is spelled the same way in all English-speaking regions. Both American and British English use the same spelling with the &quot;a&quot; after &quot;p.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word as &quot;sep-A-rate&quot; - emphasize the &quot;A&quot; sound. You can also remember that &quot;separate&quot; means &quot;apart,&quot; and both words contain the letter &quot;a.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;separately&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: individually, independently, apart, singly, one by one, in isolation, on their own, and by themselves.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;separately&quot; be used at the beginning of a sentence?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Separately&quot; can be used as a sentence starter, often for emphasis. Example: &quot;Separately, we need to address the budget concerns.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;separately&quot; and &quot;individually&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both mean &quot;one by one,&quot; &quot;separately&quot; emphasizes the act of being apart or divided, while &quot;individually&quot; focuses more on the distinct nature of each item or person.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Separately&quot;</strong> has an &quot;a&quot; after the &quot;p&quot; and means &quot;in a separate manner.&quot; 
          <br />
          <strong>&quot;Seperately&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sep-A-rate&quot; - emphasize the &quot;A&quot; sound!</p>
        </div>
      </div>
    </div>
  )
}
