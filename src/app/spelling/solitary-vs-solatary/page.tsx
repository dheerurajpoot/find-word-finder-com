import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Solitary vs Solatary - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;solitary&quot; and &quot;solatary&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SolitaryVsSolataryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Solitary vs Solatary
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🏝️</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Solitary&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Solatary&quot; is always incorrect - remember the &quot;i&quot; in &quot;solitary&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Solatary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Solitary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;alone; without companions; single.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Sol&quot; (Root)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;alone&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to solitude</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;I&quot; (Vowel)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Tary&quot; (Suffix)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Adjective ending</li>
                <li>• Means &quot;relating to&quot;</li>
                <li>• Standard English suffix</li>
                <li>• Forms descriptive words</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">✅ Correct: &quot;Solitary&quot;</h3>
              <div className="space-y-3">
                <p className="text-purple-800"><strong>•</strong> &quot;He leads a solitary life.&quot;</p>
                <p className="text-purple-800"><strong>•</strong> &quot;The solitary tree stood alone.&quot;</p>
                <p className="text-purple-800"><strong>•</strong> &quot;She enjoys solitary walks.&quot;</p>
                <p className="text-purple-800"><strong>•</strong> &quot;A solitary figure appeared.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Solatary&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;He leads a solatary life&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The solatary tree stood alone&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She enjoys solatary walks&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;A solatary figure appeared&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;I&quot; Alone</h3>
              <p className="text-yellow-800">&quot;Solitary&quot; has &quot;i&quot; like &quot;I&quot; am alone</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Remember Solitude</h3>
              <p className="text-purple-800">&quot;Solitary&quot; = &quot;solitude&quot; + &quot;ary&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;solitary&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Proofread</h3>
              <p className="text-violet-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people misspell &quot;solitary&quot; as &quot;solatary&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled without the &quot;i&quot;, leading to the incorrect &quot;solatary.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;solitary&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Solitary&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the etymology of &quot;solitary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Solitary&quot; comes from Latin &quot;solus&quot; meaning &quot;alone&quot; + the suffix &quot;-ary.&quot; The word entered English in the 14th century and has maintained its Latin spelling pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;solitary&quot; is spelled the same way across all English-speaking regions. The spelling &quot;solatary&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of related words like &quot;solitude&quot;, &quot;sole&quot;, and &quot;solitary&quot; - they all use the same &quot;sol&quot; root with &quot;i&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;solitary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: alone, single, isolated, lone, unaccompanied, solo, and independent.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;solitary&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Solitary&quot; can refer to people, animals, objects, or situations that are alone or isolated. It&apos;s used in both literal and figurative contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;solitary&quot; and &quot;alone&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both indicate being by oneself, &quot;solitary&quot; often implies a more permanent or characteristic state, while &quot;alone&quot; can be more temporary or situational.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;solitary&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: No! &quot;Solitary&quot; can be neutral or even positive. Many people enjoy solitary activities like reading, meditation, or nature walks.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What are some common phrases with &quot;solitary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;solitary confinement,&quot; &quot;solitary walk,&quot; &quot;solitary life,&quot; &quot;solitary figure,&quot; and &quot;solitary pursuits.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Solitary&quot;</strong> has an &quot;i&quot;. 
          <br />
          <strong>&quot;Solatary&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SOL + I + TARY = SOLITARY&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
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
