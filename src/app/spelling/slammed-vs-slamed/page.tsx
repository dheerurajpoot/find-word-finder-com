import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Slammed vs Slamed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;slammed&quot; and &quot;slamed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SlammedVsSlamedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Slammed vs Slamed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🚪</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Slammed&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Slamed&quot; is always incorrect - remember the double &quot;m&quot; in &quot;slammed&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Slamed</h3>
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Slammed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of slam; to have shut forcefully.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Slam&quot; (Root)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;shut&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to impact</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;MM&quot; (Double M)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Ed&quot; (Suffix)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Past tense</li>
                <li>• Means &quot;happened&quot;</li>
                <li>• Standard English suffix</li>
                <li>• Forms past tense</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">✅ Correct: &quot;Slammed&quot;</h3>
              <div className="space-y-3">
                <p className="text-amber-800"><strong>•</strong> &quot;He slammed the door.&quot;</p>
                <p className="text-amber-800"><strong>•</strong> &quot;She slammed the book shut.&quot;</p>
                <p className="text-amber-800"><strong>•</strong> &quot;The car slammed into the wall.&quot;</p>
                <p className="text-amber-800"><strong>•</strong> &quot;I slammed the phone down.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Slamed&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;He slamed the door&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She slamed the book shut&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The car slamed into the wall&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I slamed the phone down&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Double M</h3>
              <p className="text-yellow-800">&quot;Slam&quot; + &quot;med&quot; = &quot;slammed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Remember Impact</h3>
              <p className="text-amber-800">&quot;Slammed&quot; = forceful action</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;slammed&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Proofread</h3>
              <p className="text-orange-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;slammed&quot; as &quot;slamed&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with a single &quot;m&quot;, leading to the incorrect &quot;slamed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;slammed&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Slammed&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the etymology of &quot;slammed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Slammed&quot; comes from Old English &quot;slammian&quot; meaning &quot;to slam&quot; or &quot;shut with force.&quot; The word evolved to mean forceful closing and follows standard English past tense rules.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;slammed&quot; is spelled the same way across all English-speaking regions. The spelling &quot;slamed&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;slammed&quot; as &quot;slam&quot; + &quot;med&quot; - the base word &quot;slam&quot; has one &quot;m&quot;, and when you add the past tense suffix, you keep that &quot;m&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;slammed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: banged, crashed, hit, struck, pounded, and forcefully closed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;slammed&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Slammed&quot; can refer to physical actions like closing doors, emotional reactions, sports impacts, and any situation where something is done with force or intensity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;slammed&quot; and &quot;closed&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both involve shutting something, &quot;slammed&quot; specifically refers to closing with force and noise, while &quot;closed&quot; is a general term for any type of shutting action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;slammed&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: Not always! While &quot;slammed&quot; often refers to aggressive or angry actions, it can also be neutral (like &quot;slammed the ball&quot; in sports) or even positive depending on the context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;slammed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;slammed the door,&quot; &quot;slammed shut,&quot; &quot;slammed into,&quot; &quot;slammed down,&quot; and &quot;slammed against.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Slammed&quot;</strong> has double &quot;m&quot;s. 
          <br />
          <strong>&quot;Slamed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SLAM + MED = SLAMMED&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
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
