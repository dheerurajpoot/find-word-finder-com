import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scandinavia vs Scandanavia - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;Scandinavia&quot; and &quot;Scandanavia&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScandinaviaVsScandanaviaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Scandinavia vs Scandanavia
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🗺️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Scandinavia&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Scandanavia&quot; is always incorrect - remember the &quot;in&quot; in &quot;Scandinavia&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Scandanavia</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common phonetic mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Scandinavia</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a region in Northern Europe.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Scandinavia&quot; (Proper Noun)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Geographic region</li>
                <li>• Contains &quot;in&quot;</li>
                <li>• From Latin &quot;Scandinavia&quot;</li>
                <li>• Used in geography contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Scandanavia&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Missing &quot;i&quot;</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Scand&quot; + &quot;in&quot; + &quot;avia&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;Scandinavian&quot;</li>
                <li>• Standard English spelling</li>
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
                <p className="text-lg text-green-800">&quot;I traveled to <strong>Scandinavia</strong> last summer.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;<strong>Scandinavia</strong> is known for its beautiful fjords.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The culture of <strong>Scandinavia</strong; is fascinating.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Many people visit <strong>Scandinavia</strong> for the Northern Lights.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Travel to <strong>Scandanavia</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scandinavia&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Culture of <strong>Scandanavia</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scandinavia&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Beautiful <strong>Scandanavia</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scandinavia&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Visit <strong>Scandanavia</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scandinavia&quot;</p>
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
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">IN Rule</h3>
              <p className="text-yellow-800">Think of &quot;in&quot; like &quot;in the region&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Scand + in + avia</h3>
              <p className="text-blue-800">Remember: &quot;Scand&quot; + &quot;in&quot; + &quot;avia&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;Scandinavia&quot; to build muscle memory</p>
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
                <li>• <strong>Northern Scandinavia</strong> - northern region</li>
                <li>• <strong>Scandinavian culture</strong> - regional culture</li>
                <li>• <strong>Scandinavian design</strong> - regional style</li>
                <li>• <strong>Scandinavian cuisine</strong> - regional food</li>
                <li>• <strong>Scandinavian languages</strong> - regional tongues</li>
                <li>• <strong>Scandinavian history</strong> - regional past</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;Scandinavia is beautiful&quot;</li>
                <li>• <strong>Object:</strong> &quot;I visited Scandinavia&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s Scandinavia&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Scandinavia region&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;The region, Scandinavia&quot;</li>
                <li>• <strong>Prepositional object:</strong> &quot;In Scandinavia&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;Scandinavia&quot; as &quot;Scandanavia&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People hear the word pronounced and try to spell it based on how it sounds, leading to the incorrect &quot;Scandanavia&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;Scandinavia&quot; related to &quot;Scandinavian&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Scandinavia&quot; is the noun referring to the geographic region, while &quot;Scandinavian&quot; is the adjective describing things from or related to that region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;Scandinavia&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scandinavia&quot; comes from the Latin word &quot;Scandinavia&quot; which was derived from the Old Norse &quot;Skáney&quot; referring to the southernmost province of Sweden.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;Scandinavia&quot; be used in both formal and informal contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Scandinavia&quot; is appropriate for all contexts, from casual conversation to formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;Scandinavia&quot;?</h3>
              <p className="text-lg text-gray-700">A: While there aren&apos;t exact synonyms, you might refer to it as &quot;the Nordic region&quot; or &quot;Northern Europe,&quot; though these terms have slightly different meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;Scandinavia&quot; as containing &quot;in&quot; - you travel &quot;in&quot; to Scandinavia. The &quot;i&quot; is important for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;Scandinavia&quot; always capitalized?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Scandinavia&quot; is always capitalized because it&apos;s a proper noun referring to a specific geographic region, just like &quot;Europe&quot; or &quot;Asia.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;Scandinavia&quot; and &quot;Nordic countries&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scandinavia&quot; typically refers to Norway, Sweden, and Denmark, while &quot;Nordic countries&quot; includes these three plus Finland, Iceland, and their territories.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Scandinavia&quot;</strong> contains &quot;in&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Scandanavia&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SCANDINAVIA = SCAND + IN + AVIA&quot;</p>
        </div>
      </div>
    </div>
  )
}
