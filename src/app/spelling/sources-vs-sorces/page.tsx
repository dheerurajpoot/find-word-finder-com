import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sources vs Sorces - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sources&quot; and &quot;sorces&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SourcesVsSorcesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Sources vs Sorces
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📚</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sources&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sorces&quot; is always incorrect - remember the &quot;ur&quot; in &quot;sources&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sorces</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sources</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;plural of source - origins or references.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sourc&quot; (Root)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;origin&quot;</li>
                <li>• Old French origin</li>
                <li>• Related to beginning</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Ur&quot; (Vowel Team)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Creates &quot;er&quot; sound</li>
                <li>• Common in English</li>
                <li>• Part of root word</li>
                <li>• Must be preserved</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Es&quot; (Suffix)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Plural ending</li>
                <li>• Forms plural form</li>
                <li>• Standard English suffix</li>
                <li>• Added to base form</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Correct: &quot;Sources&quot;</h3>
              <div className="space-y-3">
                <p className="text-green-800"><strong>•</strong> &quot;Cite your sources properly.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;Multiple sources confirm this.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;The sources are reliable.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;Check multiple sources.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sorces&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;Cite your sorces properly&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Multiple sorces confirm this&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The sorces are reliable&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Check multiple sorces&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">UR Rule</h3>
              <p className="text-yellow-800">&quot;Source&quot; has &quot;ur&quot; like &quot;course&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Origin</h3>
              <p className="text-green-800">&quot;Sources&quot; = multiple origins</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;sources&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;sources&quot; as &quot;sorces&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and miss the &quot;ur&quot; sound, leading to the incorrect &quot;sorces.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;sources&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sources&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;sources&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sources&quot; comes from Old French &quot;sorse&quot; meaning &quot;rise&quot; or &quot;origin.&quot; The &quot;ur&quot; spelling developed to represent the vowel sound, and this pattern has been preserved in modern English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sources&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sorces&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of related words like &quot;course&quot;, &quot;force&quot;, and &quot;source&quot; - they all use the &quot;ur&quot; spelling for the vowel sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;sources&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: references, origins, beginnings, roots, causes, authorities, and citations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;sources&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sources&quot; can refer to information sources, energy sources, water sources, news sources, and any origin or reference point.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sources&quot; and &quot;references&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both can refer to information origins, &quot;sources&quot; often implies the original location or beginning, while &quot;references&quot; typically refers to citations or specific works consulted.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sources&quot;</strong> has &quot;ur&quot; for the vowel sound. 
          <br />
          <strong>&quot;Sorces&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SOURC + ES = SOURCES&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
