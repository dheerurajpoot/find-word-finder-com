import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Skied vs Skiied - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;skied&quot; and &quot;skiied&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SkiedVsSkiiedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Skied vs Skiied
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Skied&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Skiied&quot; is always incorrect - remember only one &quot;i&quot; in &quot;skied&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Skiied</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Skied</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;the past tense and past participle of ski.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Ski&quot; (Base Word)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;snow sport&quot;</li>
                <li>• Norwegian origin</li>
                <li>• Related to winter</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ed&quot; (Suffix)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Makes past tense</li>
                <li>• Creates verb form</li>
                <li>• Changes meaning</li>
                <li>• Essential for grammar</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;One I&quot; (Spelling)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Only one &quot;i&quot;</li>
                <li>• Standard English rule</li>
                <li>• Related to pronunciation</li>
                <li>• Essential for spelling</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">✅ Correct: &quot;Skied&quot;</h3>
              <div className="space-y-3">
                <p className="text-violet-800"><strong>•</strong> &quot;She skied down the mountain.&quot;</p>
                <p className="text-violet-800"><strong>•</strong> &quot;We skied all day yesterday.&quot;</p>
                <p className="text-violet-800"><strong>•</strong> &quot;He has skied here before.&quot;</p>
                <p className="text-violet-800"><strong>•</strong> &quot;They skied together last winter.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Skiied&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;She skiied down the mountain&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;We skiied all day yesterday&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He has skiied here before&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;They skiied together last winter&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think One I</h3>
              <p className="text-yellow-800">&quot;Ski&quot; + &quot;ed&quot; = &quot;Skied&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Remember Pattern</h3>
              <p className="text-violet-800">&quot;Skied&quot; = one &quot;i&quot; only</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;skied&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;skied&quot; as &quot;skiied&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often think they need to double the &quot;i&quot; when adding the &quot;ed&quot; suffix. They might be influenced by words like &quot;skiing&quot; which does have two &quot;i&quot;s, but &quot;skied&quot; follows a different pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;skied&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Skied&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English past tense form of the verb &quot;ski.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;skied&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Ski&quot; comes from Norwegian &quot;ski&quot; meaning &quot;split piece of wood.&quot; The past tense &quot;skied&quot; follows standard English verb conjugation rules, adding &quot;ed&quot; to the base form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;skied&quot; is spelled the same way across all English-speaking regions. The spelling &quot;skiied&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;skied&quot; as &quot;ski&quot; + &quot;ed&quot; (past tense). Remember that it only has one &quot;i&quot; - the one that&apos;s already in &quot;ski.&quot; Don&apos;t add another one!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;skied&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: glided, slid, descended, coasted, and navigated (when referring to skiing down slopes).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;skied&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Skied&quot; can refer to recreational skiing, competitive skiing, cross-country skiing, downhill skiing, and any other form of skiing activity in the past tense.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;skied&quot; and &quot;skiing&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Skied&quot; is the past tense (what you did), while &quot;skiing&quot; is the present participle (what you are doing) or gerund (the activity itself). &quot;Skiing&quot; does have two &quot;i&quot;s, but &quot;skied&quot; only has one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;skied&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes! &quot;Skied&quot; is generally associated with athleticism, outdoor recreation, and winter sports. However, context matters - it can be neutral when simply describing a past activity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;skied&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;skied down,&quot; &quot;skied together,&quot; &quot;skied before,&quot; &quot;skied all day,&quot; and &quot;skied last winter.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Skied&quot;</strong> has only one &quot;i&quot;.
          <br />
          <strong>&quot;Skiied&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SKI + ED = One I Only&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:from-violet-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
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
