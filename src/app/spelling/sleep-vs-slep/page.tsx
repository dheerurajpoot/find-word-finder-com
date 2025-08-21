import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sleep vs Slep - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sleep&quot; and &quot;slep&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SleepVsSlepPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Sleep vs Slep
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
            <span className="text-2xl mr-3">😴</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Sleep&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Slep&quot; is always incorrect - remember the double &quot;e&quot; in &quot;sleep&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Slep</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Sleep</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;a natural state of rest for the mind and body.&quot;
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Sl&quot; (Sound)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Makes &quot;sl&quot; sound</li>
                <li>• Old English origin</li>
                <li>• Related to rest</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;EE&quot; (Double E)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">&quot;P&quot; (Ending)</h3>
              <ul className="text-zinc-800 space-y-2">
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
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">✅ Correct: &quot;Sleep&quot;</h3>
              <div className="space-y-3">
                <p className="text-slate-800"><strong>•</strong> &quot;I need to sleep.&quot;</p>
                <p className="text-slate-800"><strong>•</strong> &quot;She is sleeping.&quot;</p>
                <p className="text-slate-800"><strong>•</strong> &quot;He slept well.&quot;</p>
                <p className="text-slate-800"><strong>•</strong> &quot;Good sleep is important.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Slep&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;I need to slep&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She is sleping&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He slep well&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Good slep is important&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Double E</h3>
              <p className="text-yellow-800">&quot;Sleep&quot; has &quot;ee&quot; like &quot;deep&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Remember Rest</h3>
              <p className="text-slate-800">&quot;Sleep&quot; = rest time</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sleep&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proofread</h3>
              <p className="text-gray-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;sleep&quot; as &quot;slep&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with a single &quot;e&quot;, leading to the incorrect &quot;slep.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;sleep&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sleep&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the etymology of &quot;sleep&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sleep&quot; comes from Old English &quot;slǣp&quot; meaning &quot;sleep&quot; or &quot;slumber.&quot; The word has maintained its spelling pattern throughout English history.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sleep&quot; is spelled the same way across all English-speaking regions. The spelling &quot;slep&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sleep&quot; as having double &quot;e&quot;s - the word needs both &quot;e&quot;s to spell correctly. Remember: &quot;SLEEP = rest with EE&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;sleep&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: slumber, rest, nap, doze, snooze, and unconsciousness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;sleep&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sleep&quot; can refer to the physical act of sleeping, the state of being asleep, the need for rest, and any context related to rest and unconsciousness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sleep&quot; and &quot;rest&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both involve relaxation, &quot;sleep&quot; specifically refers to the unconscious state of rest, while &quot;rest&quot; is a broader term for any type of relaxation or recovery.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;sleep&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes! &quot;Sleep&quot; is generally associated with health, recovery, and well-being. However, context matters - too much sleep or sleep disorders can be negative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some common phrases with &quot;sleep&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;go to sleep,&quot; &quot;get some sleep,&quot; &quot;sleep well,&quot; &quot;sleep tight,&quot; and &quot;sleep on it.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sleep&quot;</strong> has double &quot;e&quot;s. 
          <br />
          <strong>&quot;Slep&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SLEEP = Rest with EE&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-slate-500 to-zinc-500 text-white px-8 py-3 rounded-full font-semibold hover:from-slate-600 hover:to-zinc-600 transition-all duration-300 transform hover:scale-105">
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
