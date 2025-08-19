import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subterranean vs Subterranian - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subterranean&quot; and &quot;subterranian&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubterraneanVsSubterranianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Subterranean vs Subterranian
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
            <span className="text-2xl mr-3">🏔️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Subterranean&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Subterranian&quot; is incorrect - remember the &quot;e&quot; before &quot;an&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Subterranian</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;e&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Subterranean</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;underground&quot; or &quot;below the surface.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Used in many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Terra&quot; (Root)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;earth&quot; or &quot;land&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;terrestrial&quot;</li>
                <li>• Earth science term</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Ean&quot; (Suffix)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;relating to&quot;</li>
                <li>• Forms adjectives</li>
                <li>• Must include &quot;e&quot;</li>
                <li>• Common ending</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>subterranean</strong> river flows beneath the city.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They explored <strong>subterranean</strong> caverns.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>subterranean</strong> parking garage is huge.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Ancient <strong>subterranean</strong> cities were discovered.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>subterranian</strong> river&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Subterranian caverns&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Subterranian parking&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subterranean&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Subterranian cities&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Earth</h3>
              <p className="text-yellow-800">&quot;Terra&quot; means earth, remember the &quot;e&quot; before &quot;an&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Suffix Rule</h3>
              <p className="text-blue-800">&quot;Ean&quot; suffix always has &quot;e&quot; before &quot;an&quot;</p>
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
                <li>• <strong>Subterranean water</strong> - underground water</li>
                <li>• <strong>Subterranean passages</strong> - underground tunnels</li>
                <li>• <strong>Subterranean chambers</strong> - underground rooms</li>
                <li>• <strong>Subterranean life</strong> - underground organisms</li>
                <li>• <strong>Subterranean mining</strong> - underground extraction</li>
                <li>• <strong>Subterranean archaeology</strong> - underground excavations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Terrestrial</strong> - relating to land</li>
                <li>• <strong>Subterranean</strong> - underground</li>
                <li>• <strong>Extraterrestrial</strong> - beyond Earth</li>
                <li>• <strong>Subterfuge</strong> - deception</li>
                <li>• <strong>Submarine</strong> - underwater vessel</li>
                <li>• <strong>Subway</strong> - underground railway</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;subterranean&quot; as &quot;subterranian&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is dropping the &quot;e&quot; from the &quot;ean&quot; suffix. This happens because the word is long and complex, and people often forget that &quot;ean&quot; always has an &quot;e&quot; before the &quot;an.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;subterranean&quot; used in scientific writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Subterranean&quot; is a formal, scientific term commonly used in geology, archaeology, biology, and engineering. It&apos;s perfectly appropriate for academic and professional contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;subterranean&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subterranean&quot; comes from Latin: &quot;sub&quot; (under) + &quot;terra&quot; (earth) + &quot;aneus&quot; (relating to). It literally means &quot;relating to under the earth.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;subterranean&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized scientific term used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break it down: &quot;sub&quot; + &quot;terra&quot; + &quot;ean.&quot; Remember that &quot;ean&quot; always has an &quot;e&quot; before &quot;an,&quot; just like &quot;terrestrial&quot; and &quot;extraterrestrial.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subterranean&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: underground, belowground, subterrestrial, hypogeal, hypogean, and subterraneous (though this last one is less common).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;subterranean&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Subterranean&quot; can describe hidden or secret things, like &quot;subterranean motives&quot; or &quot;subterranean political movements.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subterranean&quot; and &quot;underground&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subterranean&quot; is more formal and scientific, while &quot;underground&quot; is more casual and everyday. Both mean the same thing, but &quot;subterranean&quot; is preferred in academic or technical writing.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subterranean&quot;</strong> has the complete &quot;ean&quot; suffix with &quot;e&quot; before &quot;an.&quot; 
          <br />
          <strong>&quot;Subterranian&quot;</strong> is missing the &quot;e&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + TERRA + EAN&quot; - the &quot;e&quot; is essential!</p>
        </div>
      </div>
    </div>
  )
}
