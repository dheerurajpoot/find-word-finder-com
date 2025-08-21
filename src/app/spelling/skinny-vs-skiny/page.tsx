import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Skinny vs Skiny - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;skinny&quot; and &quot;skiny&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SkinnyVsSkinyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
          Skinny vs Skiny
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📏</span>
            <span className="text-2xl font-bold text-teal-600">&quot;Skinny&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Skiny&quot; is always incorrect - remember the double &quot;n&quot; in &quot;skinny&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Skiny</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Skinny</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                This is the proper spelling meaning &quot;very thin; having little flesh or fat.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Skin&quot; (Root)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;flesh&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to body</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;NN&quot; (Double N)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Y&quot; (Suffix)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">✅ Correct: &quot;Skinny&quot;</h3>
              <div className="space-y-3">
                <p className="text-teal-800"><strong>•</strong> &quot;She is skinny.&quot;</p>
                <p className="text-teal-800"><strong>•</strong> &quot;He has skinny legs.&quot;</p>
                <p className="text-teal-800"><strong>•</strong> &quot;The skinny jeans fit well.&quot;</p>
                <p className="text-teal-800"><strong>•</strong> &quot;A skinny latte, please.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Skiny&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;She is skiny&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He has skiny legs&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The skiny jeans fit well&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;A skiny latte, please&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Double N</h3>
              <p className="text-yellow-800">&quot;Skin&quot; + &quot;ny&quot; = &quot;skinny&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Remember Body</h3>
              <p className="text-teal-800">&quot;Skinny&quot; = thin body</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;skinny&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people misspell &quot;skinny&quot; as &quot;skiny&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with a single &quot;n&quot;, leading to the incorrect &quot;skiny.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;skinny&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Skinny&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;skinny&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Skinny&quot; comes from Old English &quot;scinn&quot; meaning &quot;skin&quot; or &quot;hide.&quot; The word evolved to mean &quot;thin&quot; and follows standard English spelling patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;skinny&quot; is spelled the same way across all English-speaking regions. The spelling &quot;skiny&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;skinny&quot; as &quot;skin&quot; + &quot;ny&quot; - the base word &quot;skin&quot; has one &quot;n&quot;, and when you add the suffix, you keep that &quot;n&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;skinny&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: thin, slender, slim, lean, svelte, and underweight.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;skinny&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Skinny&quot; can refer to physical appearance, clothing styles, food and drink options, and any context where something is thin or narrow.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;skinny&quot; and &quot;thin&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both indicate lack of fat, &quot;skinny&quot; often implies being very thin or underweight, while &quot;thin&quot; is a more general term for having little fat.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;skinny&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Not always! While &quot;skinny&quot; can be positive in fashion contexts, it can also be negative when referring to health concerns or body image issues. Context matters greatly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What are some common phrases with &quot;skinny&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;skinny jeans,&quot; &quot;skinny latte,&quot; &quot;get skinny,&quot; &quot;skinny dipping,&quot; and &quot;skinny on.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-sky-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Skinny&quot;</strong> has double &quot;n&quot;s. 
          <br />
          <strong>&quot;Skiny&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SKIN + NY = SKINNY&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-teal-500 to-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-105">
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
