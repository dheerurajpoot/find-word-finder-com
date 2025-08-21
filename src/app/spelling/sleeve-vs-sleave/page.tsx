import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sleeve vs Sleave - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sleeve&quot; and &quot;sleave&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SleeveVsSleavePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Sleeve vs Sleave
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">👕</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Sleeve&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sleave&quot; is always incorrect - remember the &quot;e&quot; in &quot;sleeve&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sleave</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Sleeve</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;the part of a garment that covers the arm.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Slee&quot; (Root)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;arm&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to clothing</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;V&quot; (Consonant)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;E&quot; (Vowel)</h3>
              <ul className="text-emerald-800 space-y-2">
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
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">✅ Correct: &quot;Sleeve&quot;</h3>
              <div className="space-y-3">
                <p className="text-lime-800"><strong>•</strong> &quot;The shirt has long sleeves.&quot;</p>
                <p className="text-lime-800"><strong>•</strong> &quot;She rolled up her sleeve.&quot;</p>
                <p className="text-lime-800"><strong>•</strong> &quot;The sleeve is too tight.&quot;</p>
                <p className="text-lime-800"><strong>•</strong> &quot;He wore a short-sleeved shirt.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sleave&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The shirt has long sleaves&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She rolled up her sleave&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The sleave is too tight&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He wore a short-sleaved shirt&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;E&quot; Arm</h3>
              <p className="text-yellow-800">&quot;Sleeve&quot; has &quot;e&quot; like &quot;arm&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Remember Clothing</h3>
              <p className="text-lime-800">&quot;Sleeve&quot; = arm covering</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sleeve&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Proofread</h3>
              <p className="text-emerald-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people misspell &quot;sleeve&quot; as &quot;sleave&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with &quot;ea&quot; instead of &quot;ee&quot;, leading to the incorrect &quot;sleave.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;sleeve&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sleeve&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the etymology of &quot;sleeve&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sleeve&quot; comes from Old English &quot;slēf&quot; meaning &quot;arm&quot; or &quot;sleeve.&quot; The word evolved to specifically refer to the part of a garment that covers the arm and entered English in the 10th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sleeve&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sleave&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sleeve&quot; as having an &quot;e&quot; - the word needs both &quot;e&quot;s to spell correctly. Remember: &quot;SLEEVE = arm covering with E&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;sleeve&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: arm covering, arm part, shirt arm, jacket arm, and garment arm.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;sleeve&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sleeve&quot; can refer to clothing sleeves, protective coverings, mechanical parts, and any context where something covers or protects an arm or similar structure.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sleeve&quot; and &quot;arm&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to the upper limb, &quot;sleeve&quot; specifically refers to the fabric covering that goes over the arm, while &quot;arm&quot; refers to the actual body part.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;sleeve&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sleeve&quot; is neutral - it simply describes a part of clothing. Whether it&apos;s good or bad depends entirely on the context and how the sleeve looks or fits.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some common phrases with &quot;sleeve&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;long sleeve,&quot; &quot;short sleeve,&quot; &quot;roll up sleeve,&quot; &quot;sleeve length,&quot; and &quot;up one&apos;s sleeve.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sleeve&quot;</strong> has an &quot;e&quot;. 
          <br />
          <strong>&quot;Sleave&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SLEEVE = Arm Covering with E&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
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
