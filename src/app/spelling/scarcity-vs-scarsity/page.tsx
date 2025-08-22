import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scarcity vs Scarsity - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;scarcity&quot; and &quot;scarsity&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScarcityVsScarsityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Scarcity vs Scarsity
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📊</span>
            <span className="text-2xl font-bold text-green-600">&quot;Scarcity&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Scarsity&quot; is always incorrect - remember the &quot;ity&quot; ending in &quot;scarcity&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Scarsity</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Scarcity</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the state of being scarce or in short supply.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Scarcity&quot; (Noun)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;shortage&quot; or &quot;lack&quot;</li>
                <li>• Ends with &quot;ity&quot;</li>
                <li>• From Latin &quot;scarce&quot;</li>
                <li>• Used in economic contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Scarsity&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Wrong ending</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Scarce&quot; + &quot;ity&quot;</li>
                <li>• Common suffix pattern</li>
                <li>• Related to &quot;scarce&quot;</li>
                <li>• Standard English ending</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>scarcity</strong> of water in the region caused concern.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Economic <strong>scarcity</strong> affects resource allocation.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Food <strong>scarcity</strong> is a serious global issue.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>scarcity</strong> of jobs made life difficult.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Water <strong>scarsity</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarcity&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Economic <strong>scarsity</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarcity&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Food <strong>scarsity</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarcity&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Job <strong>scarsity</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarcity&quot;</p>
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
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ITY Ending</h3>
              <p className="text-yellow-800">Think of &quot;ity&quot; like &quot;quality&quot; and &quot;quantity&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Scarce + ity</h3>
              <p className="text-blue-800">Remember: &quot;scarce&quot; + &quot;ity&quot; = &quot;scarcity&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;scarcity&quot; to build muscle memory</p>
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
                <li>• <strong>Water scarcity</strong> - lack of water</li>
                <li>• <strong>Food scarcity</strong> - lack of food</li>
                <li>• <strong>Resource scarcity</strong> - lack of resources</li>
                <li>• <strong>Job scarcity</strong> - lack of employment</li>
                <li>• <strong>Housing scarcity</strong> - lack of housing</li>
                <li>• <strong>Economic scarcity</strong> - economic shortage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;Scarcity affects prices&quot;</li>
                <li>• <strong>Object:</strong> &quot;We discussed the scarcity&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s the scarcity&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Scarcity problem&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;The issue, water scarcity&quot;</li>
                <li>• <strong>Prepositional object:</strong> &quot;Due to scarcity&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;scarcity&quot; as &quot;scarsity&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People hear the word pronounced and try to spell it based on how it sounds, leading to the incorrect &quot;scarsity&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;scarcity&quot; related to the word &quot;scarce&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Scarcity&quot; is the noun form of &quot;scarce.&quot; &quot;Scarce&quot; is an adjective meaning &quot;in short supply,&quot; while &quot;scarcity&quot; is the noun meaning &quot;the state of being scarce.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;scarcity&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scarcity&quot; comes from the Old French word &quot;escars&quot; meaning &quot;scanty&quot; or &quot;scarce.&quot; It entered English in the 14th century and is related to the Latin word &quot;excarpsus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;scarcity&quot; be used in both formal and informal contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Scarcity&quot; is appropriate for all contexts, from casual conversation to formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;scarcity&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: shortage, lack, deficiency, insufficiency, dearth, paucity, and want.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;scarcity&quot; as ending with &quot;ity&quot; like other words: quality, quantity, ability. The &quot;ity&quot; ending is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;scarcity&quot; always about physical resources?</h3>
              <p className="text-lg text-gray-700">A: While &quot;scarcity&quot; often refers to physical resources like food or water, it can also describe abstract concepts like time, opportunities, or skills that are in short supply.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;scarcity&quot; and &quot;shortage&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scarcity&quot; refers to a general state of being scarce or limited, while &quot;shortage&quot; specifically refers to a temporary lack or deficiency of something that is normally available.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Scarcity&quot;</strong> ends with &quot;ity&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Scarsity&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SCARCITY = SCARCE + ity ending&quot;</p>
        </div>
      </div>
    </div>
  )
}
