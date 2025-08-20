import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subtle vs Sutle - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subtle&quot; and &quot;sutle&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubtleVsSutlePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent">
          Subtle vs Sutle
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-lime-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎭</span>
            <span className="text-2xl font-bold text-green-600">&quot;Subtle&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sutle&quot; is always incorrect - remember the &quot;b&quot; in &quot;subtle&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sutle</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Subtle</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;delicate, not obvious, or refined.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;below&quot; or &quot;under&quot;</li>
                <li>• Also means &quot;refined&quot;</li>
                <li>• Common in English words</li>
                <li>• Latin origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;B&quot; (Silent)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Silent letter in &quot;subtle&quot;</li>
                <li>• Must be included</li>
                <li>• Historical spelling</li>
                <li>• Part of root word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Tle&quot; (Suffix)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Forms adjectives</li>
                <li>• Means &quot;quality of&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;subtle&quot;</li>
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
                <p className="text-lg text-green-800">&quot;She made a <strong>subtle</strong> gesture with her hand.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The painting has <strong>subtle</strong> shades of blue.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His humor was very <strong>subtle</strong> and clever.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;There was a <strong>subtle</strong> change in her mood.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She made a <strong>sutle</strong> gesture&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtle&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The painting has <strong>sutle</strong> shades&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtle&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His humor was very <strong>sutle</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtle&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;There was a <strong>sutle</strong> change&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtle&quot;</p>
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
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Subtle</h3>
              <p className="text-yellow-800">&quot;Subtle&quot; has a silent &quot;b&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Silent B Rule</h3>
              <p className="text-blue-800">The &quot;b&quot; is silent but must be there</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;subtle&quot; to build muscle memory</p>
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
                <li>• <strong>Subtle difference</strong> - slight variation</li>
                <li>• <strong>Subtle hint</strong> - gentle suggestion</li>
                <li>• <strong>Subtle change</strong> - slight modification</li>
                <li>• <strong>Subtle beauty</strong> - delicate attractiveness</li>
                <li>• <strong>Subtle flavor</strong> - delicate taste</li>
                <li>• <strong>Subtle influence</strong> - gentle effect</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;subtle change&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The change is subtle&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;more subtle&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;most subtle&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;subtly different&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;subtlety&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people confuse &quot;subtle&quot; and &quot;sutle&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the silent &quot;b&quot; in &quot;subtle.&quot; Many people don&apos;t hear the &quot;b&quot; when speaking, so they forget to include it when writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;subtle&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Subtle&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the etymology of &quot;subtle&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subtle&quot; comes from Latin &quot;subtilis&quot; meaning &quot;fine&quot; or &quot;delicate.&quot; It was first used in English in the 14th century to describe refined or delicate qualities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;subtle&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;delicate&quot; or &quot;refined.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;sub&quot; + &quot;tle.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subtle&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: delicate, refined, gentle, soft, understated, and nuanced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;subtle&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing qualities, &quot;subtle&quot; can be used in various contexts like art, music, literature, and everyday conversation to describe delicate or refined characteristics.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subtle&quot; and &quot;obvious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subtle&quot; means delicate or not obvious, while &quot;obvious&quot; means clear or apparent. They are opposite in meaning.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-lime-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subtle&quot;</strong> is the correct spelling meaning &quot;delicate or refined.&quot; 
          <br />
          <strong>&quot;Sutle&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + TLE = SUBTLE&quot;</p>
        </div>
      </div>
    </div>
  )
}
