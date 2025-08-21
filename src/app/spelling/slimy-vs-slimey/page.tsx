import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Slimy vs Slimey - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;slimy&quot; and &quot;slimey&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SlimyVsSlimeyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Slimy vs Slimey
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 rounded-2xl mb-10 border border-pink-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🦠</span>
            <span className="text-2xl font-bold text-pink-600">&quot;Slimy&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Slimey&quot; is always incorrect - remember that &quot;slimy&quot; doesn&apos;t need an &quot;e&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Slimey</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Slimy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-pink-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-pink-700 leading-relaxed">
                This is the proper spelling meaning &quot;covered with or resembling slime; slippery and unpleasant.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Slime&quot; (Root)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;mucus&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to texture</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Y&quot; (Suffix)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;No Extra E&quot;</h3>
              <ul className="text-red-800 space-y-2">
                <li>• No &quot;e&quot; needed</li>
                <li>• Complete as is</li>
                <li>• Standard English</li>
                <li>• No suffix required</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">✅ Correct: &quot;Slimy&quot;</h3>
              <div className="space-y-3">
                <p className="text-pink-800"><strong>•</strong> &quot;The surface is slimy.&quot;</p>
                <p className="text-pink-800"><strong>•</strong> &quot;She touched the slimy fish.&quot;</p>
                <p className="text-pink-800"><strong>•</strong> &quot;The slimy texture was unpleasant.&quot;</p>
                <p className="text-pink-800"><strong>•</strong> &quot;He avoided the slimy area.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Slimey&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The surface is slimey&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She touched the slimey fish&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The slimey texture was unpleasant&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He avoided the slimey area&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Simple</h3>
              <p className="text-yellow-800">&quot;Slimy&quot; is complete</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Remember Texture</h3>
              <p className="text-pink-800">&quot;Slimy&quot; = slippery texture</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;slimy&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Proofread</h3>
              <p className="text-rose-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Why do people misspell &quot;slimy&quot; as &quot;slimey&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with an &quot;e&quot; at the end, leading to the incorrect &quot;slimey.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;slimy&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Slimy&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;slimy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Slimy&quot; comes from Old English &quot;slīm&quot; meaning &quot;slime&quot; or &quot;mucus.&quot; The word evolved to describe anything covered with or resembling slime and entered English in the 14th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;slimy&quot; is spelled the same way across all English-speaking regions. The spelling &quot;slimey&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;slimy&quot; as a complete word - it doesn&apos;t need any extra letters. The word is slimy and complete just as it is.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;slimy&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: slippery, greasy, oily, mucous, viscous, and unpleasant to touch.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;slimy&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Slimy&quot; can refer to physical textures, metaphorical descriptions of people or situations, and any context where something feels unpleasant or slippery.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;slimy&quot; and &quot;slippery&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both can describe difficult-to-grasp surfaces, &quot;slimy&quot; specifically refers to something covered with or resembling slime, while &quot;slippery&quot; refers to any surface that&apos;s hard to hold onto.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;slimy&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes! &quot;Slimy&quot; is generally associated with unpleasant textures, deceitful behavior, or anything that feels gross or untrustworthy.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;slimy&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;slimy texture,&quot; &quot;slimy surface,&quot; &quot;slimy feeling,&quot; &quot;slimy substance,&quot; and &quot;slimy character.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Slimy&quot;</strong> is complete.
          <br />
          <strong>&quot;Slimey&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SLIMY = Complete Word&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
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
