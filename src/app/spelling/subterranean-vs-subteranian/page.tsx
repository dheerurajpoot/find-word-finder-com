import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subterranean vs Subteranian - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subterranean&quot; and &quot;subteranian&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubterraneanVsSubteranianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Subterranean vs Subteranian
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🏔️</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Subterranean&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Subteranian&quot; is always incorrect - remember the &quot;e&quot; in &quot;subterranean&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Subteranian</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Subterranean</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;under the ground or earth.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;below&quot; or &quot;under&quot;</li>
                <li>• Also means &quot;beneath&quot;</li>
                <li>• Common in English words</li>
                <li>• Latin origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Terra&quot; (Root)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;earth&quot; or &quot;land&quot;</li>
                <li>• Related to terrestrial</li>
                <li>• Latin origin: &quot;terra&quot;</li>
                <li>• Used in many compound words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Ean&quot; (Suffix)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Forms adjectives</li>
                <li>• Means &quot;relating to&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;subterranean&quot;</li>
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
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The <strong>subterranean</strong> cave system is extensive.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;They built <strong>subterranean</strong> tunnels for the subway.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The <strong>subterranean</strong> water source is pure.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Ancient <strong>subterranean</strong> chambers were discovered.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>subteranian</strong> cave system&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They built <strong>subteranian</strong> tunnels&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>subteranian</strong> water source&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Ancient <strong>subteranian</strong> chambers&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
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
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Terra</h3>
              <p className="text-yellow-800">&quot;Subterranean&quot; has &quot;terra&quot; in it</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">E in Terra</h3>
              <p className="text-blue-800">Remember the &quot;e&quot; in &quot;terra&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;subterranean&quot; to build muscle memory</p>
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
                <li>• <strong>Subterranean passage</strong> - underground path</li>
                <li>• <strong>Subterranean chamber</strong> - underground room</li>
                <li>• <strong>Subterranean water</strong> - underground water</li>
                <li>• <strong>Subterranean tunnel</strong> - underground passage</li>
                <li>• <strong>Subterranean cave</strong> - underground cave</li>
                <li>• <strong>Subterranean world</strong> - underground realm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;subterranean passage&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The passage is subterranean&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;more subterranean&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;most subterranean&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;subterraneanly located&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;subterranean&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people confuse &quot;subterranean&quot; and &quot;subteranian&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words ending in &quot;ian&quot; like &quot;Canadian&quot; or &quot;Italian.&quot; However, &quot;subterranean&quot; follows the pattern of &quot;terra&quot; + &quot;ean&quot; suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;subterranean&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Subterranean&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the etymology of &quot;subterranean&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subterranean&quot; comes from Latin &quot;sub&quot; (under) + &quot;terra&quot; (earth). It was first used in English in the 17th century to describe things beneath the ground.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;subterranean&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;underground&quot; or &quot;below ground.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;sub&quot; + &quot;terra&quot; + &quot;ean.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subterranean&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: underground, below ground, subterrestrial, hypogeal, and subterraneous.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;subterranean&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While primarily describing underground locations, &quot;subterranean&quot; can be used metaphorically to describe hidden or concealed things, like &quot;subterranean motives.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subterranean&quot; and &quot;underground&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subterranean&quot; is more formal and scientific, while &quot;underground&quot; is more common in everyday speech. Both mean the same thing: beneath the surface of the ground.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subterranean&quot;</strong> is the correct spelling meaning &quot;under the ground.&quot; 
          <br />
          <strong>&quot;Subteranian&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + TERRA + EAN = SUBTERRANEAN&quot;</p>
        </div>
      </div>
    </div>
  )
}
