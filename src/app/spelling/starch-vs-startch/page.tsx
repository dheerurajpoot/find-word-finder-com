import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Starch vs Startch - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;starch&quot; and &quot;startch&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StarchVsStartchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Starch vs Startch
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
            <span className="text-2xl mr-3">🌾</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Starch&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Startch&quot; is always incorrect - remember the &quot;r&quot; comes before the &quot;t&quot; in &quot;starch&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Startch</h3>
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Starch</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;a carbohydrate found in plants.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Star&quot; (Root)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to stiffen&quot; or &quot;to make rigid&quot;</li>
                <li>• Related to plants</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;R&quot; (Order)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Comes before &quot;t&quot;</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Ch&quot; (Ending)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Forms the ending sound</li>
                <li>• Means &quot;substance&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;starch&quot;</li>
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
                <p className="text-lg text-amber-800">&quot;Potatoes contain a lot of <strong>starch</strong>.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Rice is high in <strong>starch</strong> content.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The shirt was stiffened with <strong>starch</strong>.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Corn <strong>starch</strong> is used in cooking.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Potatoes contain a lot of <strong>startch</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;starch&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Rice is high in <strong>startch</strong> content&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;starch&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The shirt was stiffened with <strong>startch</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;starch&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Corn <strong>startch</strong> is used in cooking&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;starch&quot;</p>
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
              <div className="text-4xl mb-3">🌾</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Grain</h3>
              <p className="text-yellow-800">&quot;Starch&quot; comes from grains</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">R Before T</h3>
              <p className="text-blue-800">Remember &quot;r&quot; comes before &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;starch&quot; to build muscle memory</p>
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
                <li>• <strong>Corn starch</strong> - corn-based thickener</li>
                <li>• <strong>Potato starch</strong> - potato-based thickener</li>
                <li>• <strong>Rice starch</strong> - rice-based thickener</li>
                <li>• <strong>Wheat starch</strong> - wheat-based thickener</li>
                <li>• <strong>Starch solution</strong> - dissolved starch</li>
                <li>• <strong>Starch content</strong> - amount of starch</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;the starch&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Starch is a carbohydrate&quot;</li>
                <li>• <strong>Object:</strong> &quot;I added starch&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;starch&apos;s properties&quot;</li>
                <li>• <strong>Plural:</strong> &quot;different starches&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;starch content&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people confuse &quot;starch&quot; and &quot;startch&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;start&quot; or &quot;starch.&quot; However, &quot;starch&quot; follows the pattern of &quot;star&quot; + &quot;ch&quot; noun suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;starch&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Starch&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English noun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the etymology of &quot;starch&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Starch&quot; comes from Old English &quot;stearc&quot; meaning &quot;stiff&quot; or &quot;rigid.&quot; It was first used in English in the 14th century to describe the carbohydrate that stiffens fabric.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;starch&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;carbohydrate&quot; or &quot;thickener.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;star&quot; + &quot;ch.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;starch&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: carbohydrate, thickener, binder, and stiffener.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;starch&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing food carbohydrates, &quot;starch&quot; can be used in various contexts like laundry (stiffening fabric), cooking (thickening sauces), and biology (plant storage).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;starch&quot; and &quot;carbohydrate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Starch&quot; is a specific type of complex carbohydrate found in plants, while &quot;carbohydrate&quot; is a broader category that includes sugars, starches, and fiber.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;starch&quot; always about food?</h3>
              <p className="text-lg text-gray-700">A: No! While &quot;starch&quot; often describes food carbohydrates, it can also refer to industrial uses like stiffening fabric, making paper, and creating adhesives.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;starch&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;corn starch,&quot; &quot;potato starch,&quot; &quot;rice starch,&quot; &quot;wheat starch,&quot; &quot;starch solution,&quot; and &quot;starch content.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Starch&quot;</strong> is the correct spelling meaning &quot;a carbohydrate found in plants.&quot; 
          <br />
          <strong>&quot;Startch&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STAR + CH = STARCH&quot;</p>
        </div>
      </div>
    </div>
  )
}
