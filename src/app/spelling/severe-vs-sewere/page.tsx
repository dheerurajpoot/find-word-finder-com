import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Severe vs Sewere - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;severe&quot; and &quot;sewere&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SevereVsSewerePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Severe vs Sewere
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Severe&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sewere&quot; is always incorrect - remember the &quot;v&quot; not &quot;w&quot; in &quot;severe&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sewere</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Severe</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;intense&quot; or &quot;serious.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Severe&quot; (Adjective)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;intense&quot;</li>
                <li>• Also means &quot;serious&quot;</li>
                <li>• Has &quot;v&quot; not &quot;w&quot;</li>
                <li>• Used for emphasis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Sewere&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Not a real word</li>
                <li>• Common misspelling</li>
                <li>• Wrong letter &quot;w&quot;</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Tip</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SEVERE&quot;</li>
                <li>• &quot;V&quot; not &quot;W&quot;</li>
                <li>• Like &quot;serious&quot;</li>
                <li>• &quot;V&quot; for victory</li>
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
                <p className="text-lg text-green-800">&quot;The patient has <strong>severe</strong> symptoms.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This is a <strong>severe</strong> problem.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The storm caused <strong>severe</strong> damage.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He suffered <strong>severe</strong> injuries.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The patient has <strong>sewere</strong> symptoms&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severe&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a <strong>sewere</strong> problem&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severe&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The storm caused <strong>sewere</strong> damage&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severe&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He suffered <strong>sewere</strong> injuries&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severe&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">V Not W Rule</h3>
              <p className="text-yellow-800">&quot;Severe&quot; has &quot;v&quot; not &quot;w&quot;, just like &quot;serious&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Victory</h3>
              <p className="text-blue-800">&quot;Severe&quot; = V for victory, &quot;Sewere&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;severe&quot; to build muscle memory</p>
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
                <li>• <strong>Severe weather</strong> - dangerous conditions</li>
                <li>• <strong>Severe pain</strong> - intense discomfort</li>
                <li>• <strong>Severe consequences</strong> - serious results</li>
                <li>• <strong>Severe criticism</strong> - harsh feedback</li>
                <li>• <strong>Severe shortage</strong> - critical lack</li>
                <li>• <strong>Severe damage</strong> - extensive harm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The severe storm&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The situation is severe&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Severe consequences&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More severe than expected&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;The most severe case&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Severely injured&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;severe&quot; and &quot;sewere&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from pronunciation patterns where &quot;v&quot; and &quot;w&quot; can sound similar in some accents. Many people don&apos;t realize that &quot;severe&quot; requires the &quot;v&quot; sound, not &quot;w.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;severe&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Severe&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;severe&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Severe&quot; comes from Latin &quot;severus&quot; meaning &quot;serious&quot; or &quot;strict.&quot; The word has maintained its meaning of intensity and seriousness throughout its evolution into English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;severe&quot; is standard across all English-speaking regions. However, some dialects might use alternative phrases like &quot;really bad&quot; or &quot;terrible&quot; for emphasis.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;severe&quot; having &quot;v&quot; not &quot;w&quot; (like &quot;victory&quot;), and create simple sentences. Have them identify which spelling is correct in context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;severe&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: intense, serious, extreme, harsh, critical, acute, grave, and severe. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;severe&quot; be used positively?</h3>
              <p className="text-lg text-gray-700">A: While often indicating intensity or seriousness, &quot;severe&quot; can be used positively in contexts like &quot;severe beauty&quot; or &quot;severe elegance&quot; to indicate striking or remarkable qualities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;severe&quot; and &quot;serious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Severe&quot; indicates a higher degree of intensity or extremity, while &quot;serious&quot; suggests importance or gravity. &quot;Severe&quot; is often more intense than &quot;serious.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Severe&quot;</strong> has &quot;v&quot; not &quot;w&quot; and means &quot;intense&quot; or &quot;serious.&quot; 
          <br />
          <strong>&quot;Sewere&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SEVERE = V for victory&quot;</p>
        </div>
      </div>
    </div>
  )
}
