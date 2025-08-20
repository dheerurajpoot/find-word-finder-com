import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suburban vs Suburbian - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suburban&quot; and &quot;suburbian&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuburbanVsSuburbianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Suburban vs Suburbian
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
            <span className="text-2xl mr-3">🏘️</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Suburban&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suburbian&quot; is always incorrect - remember the &quot;an&quot; ending in &quot;suburban&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suburbian</h3>
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
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Suburban</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;relating to or characteristic of a suburb.&quot;
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
                <li>• Means &quot;below&quot; or &quot;under&quot;</li>
                <li>• Also means &quot;subordinate&quot;</li>
                <li>• Common in English words</li>
                <li>• Latin origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Urban&quot; (Root)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;city&quot; or &quot;town&quot;</li>
                <li>• Related to urban areas</li>
                <li>• Latin origin: &quot;urbs&quot;</li>
                <li>• Used in many compound words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;An&quot; (Suffix)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Forms adjectives</li>
                <li>• Means &quot;relating to&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;suburban&quot;</li>
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
                <p className="text-lg text-emerald-800">&quot;We live in a <strong>suburban</strong> neighborhood.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The <strong>suburban</strong> lifestyle is very peaceful.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;She prefers <strong>suburban</strong> living to city life.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The <strong>suburban</strong> schools have excellent ratings.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We live in a <strong>suburbian</strong> neighborhood&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suburban&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>suburbian</strong> lifestyle&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suburban&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She prefers <strong>suburbian</strong> living&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suburban&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>suburbian</strong> schools&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suburban&quot;</p>
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
              <div className="text-4xl mb-3">🏘️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Sub + Urban</h3>
              <p className="text-yellow-800">&quot;Sub&quot; + &quot;urban&quot; = &quot;suburban&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">An Ending Rule</h3>
              <p className="text-blue-800">Most location adjectives end in &quot;an&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;suburban&quot; to build muscle memory</p>
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
                <li>• <strong>Suburban area</strong> - residential district</li>
                <li>• <strong>Suburban lifestyle</strong> - peaceful living</li>
                <li>• <strong>Suburban development</strong> - housing expansion</li>
                <li>• <strong>Suburban community</strong> - residential group</li>
                <li>• <strong>Suburban sprawl</strong> - urban expansion</li>
                <li>• <strong>Suburban family</strong> - residential household</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;suburban area&quot;</li>
                <li>• <strong>Noun modifier:</strong> &quot;suburban development&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The area is suburban&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;more suburban&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;most suburban&quot;</li>
                <li>• <strong>Adverbial form:</strong> &quot;suburbanly&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people confuse &quot;suburban&quot; and &quot;suburbian&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words ending in &quot;ian&quot; like &quot;Canadian&quot; or &quot;Italian.&quot; However, &quot;suburban&quot; follows the pattern of &quot;urban&quot; + &quot;an&quot; suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;suburban&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suburban&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;suburban&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suburban&quot; comes from Latin &quot;sub&quot; (under) + &quot;urbanus&quot; (city). It was first used in English in the 17th century to describe areas below or outside city centers.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;suburban&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;residential&quot; or &quot;outlying&quot; areas.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;sub&quot; + &quot;urban&quot; = &quot;suburban.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suburban&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: residential, outlying, peripheral, outer-city, non-urban, and residential district.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;suburban&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suburban&quot; can function as a noun meaning &quot;a suburban resident&quot; or &quot;a suburban area,&quot; though it&apos;s more commonly used as an adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;suburban&quot; and &quot;rural&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suburban&quot; refers to residential areas near cities, while &quot;rural&quot; refers to countryside areas far from urban centers. Suburban areas are more developed than rural ones.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suburban&quot;</strong> is the correct spelling meaning &quot;relating to suburbs.&quot; 
          <br />
          <strong>&quot;Suburbian&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + URBAN = SUBURBAN&quot;</p>
        </div>
      </div>
    </div>
  )
}
