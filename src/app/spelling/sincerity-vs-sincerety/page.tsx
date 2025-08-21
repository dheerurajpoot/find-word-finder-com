import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sincerity vs Sincerety - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sincerity&quot; and &quot;sincerety&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SincerityVsSinceretyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Sincerity vs Sincerety
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Sincerity&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sincerety&quot; is always incorrect - remember the &quot;i&quot; before &quot;ty&quot; in &quot;sincerity&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sincerety</h3>
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
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Sincerity</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;the quality of being sincere, honest, and genuine.&quot;
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Sincere&quot; (Base Word)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;honest&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to truth</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;I&quot; (Vowel)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Must be included</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">&quot;Ty&quot; (Suffix)</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• Makes noun</li>
                <li>• Creates meaning</li>
                <li>• Changes word type</li>
                <li>• Essential for grammar</li>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">✅ Correct: &quot;Sincerity&quot;</h3>
              <div className="space-y-3">
                <p className="text-slate-800"><strong>•</strong> &quot;Her sincerity was evident.&quot;</p>
                <p className="text-slate-800"><strong>•</strong> &quot;I appreciate your sincerity.&quot;</p>
                <p className="text-slate-800"><strong>•</strong> &quot;Sincerity is important in relationships.&quot;</p>
                <p className="text-slate-800"><strong>•</strong> &quot;He spoke with great sincerity.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sincerety&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;Her sincerety was evident&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I appreciate your sincerety&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Sincerety is important in relationships&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He spoke with great sincerety&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;I&quot; Before &quot;Ty&quot;</h3>
              <p className="text-yellow-800">&quot;Sincerity&quot; = &quot;I&quot; + &quot;ty&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Remember Pattern</h3>
              <p className="text-slate-800">&quot;Sincerity&quot; = &quot;I&quot; before &quot;ty&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sincerity&quot; to build muscle memory</p>
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;sincerity&quot; as &quot;sincerety&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often drop the &quot;i&quot; when adding the &quot;ty&quot; suffix. They might think they can go directly from &quot;sincere&quot; to &quot;sincerety,&quot; but the correct form requires the &quot;i&quot; before &quot;ty.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;sincerity&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sincerity&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word that conveys important meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the etymology of &quot;sincerity&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sincerity&quot; comes from the Latin word &quot;sincerus&quot; meaning &quot;clean, pure, genuine.&quot; The suffix &quot;ity&quot; creates a noun meaning &quot;the quality of being sincere.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sincerity&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sincerety&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sincerity&quot; as &quot;sincere&quot; + &quot;ity&quot; (with an &quot;i&quot; before &quot;ty&quot;). Remember that many words ending in &quot;ity&quot; have an &quot;i&quot; before the &quot;ty&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;sincerity&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: honesty, genuineness, authenticity, truthfulness, candor, openness, and straightforwardness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;sincerity&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sincerity&quot; can refer to personal relationships, business communication, artistic expression, religious devotion, and any situation where genuine honesty is important.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;sincerity&quot; and &quot;honesty&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to truth, &quot;sincerity&quot; specifically refers to the quality of being genuine and heartfelt, while &quot;honesty&quot; refers to telling the truth and not lying.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Is &quot;sincerity&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes! &quot;Sincerity&quot; is generally associated with positive qualities like honesty, genuineness, and authenticity. However, someone can be sincerely wrong or sincerely misguided.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;sincerity&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;with sincerity,&quot; &quot;sincerity of purpose,&quot; &quot;genuine sincerity,&quot; &quot;lack of sincerity,&quot; and &quot;question someone&apos;s sincerity.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sincerity&quot;</strong> has an &quot;i&quot; before &quot;ty&quot;.
          <br />
          <strong>&quot;Sincerety&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SINCERITY = I before TY&quot;</p>
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
