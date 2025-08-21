import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sistine vs Sixtin - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;Sistine&quot; and &quot;Sixtin&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SistineVsSixtinPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Sistine vs Sixtin
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-pink-600">&quot;Sistine&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sixtin&quot; is always incorrect - remember the &quot;e&quot; at the end of &quot;Sistine&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sixtin</h3>
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
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Sistine</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-pink-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-pink-700 leading-relaxed">
                This is the proper spelling referring to the Sistine Chapel and related artistic works.
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
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Sist&quot; (Base)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• From &quot;Sixtus&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to Pope</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Ine&quot; (Suffix)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Must be included</li>
                <li>• Creates adjective</li>
                <li>• Changes meaning</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;E&quot; (Ending)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Must be included</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
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
              <h3 className="text-2xl font-bold text-pink-900 mb-4">✅ Correct: &quot;Sistine&quot;</h3>
              <div className="space-y-3">
                <p className="text-pink-800"><strong>•</strong> &quot;The Sistine Chapel is famous.&quot;</p>
                <p className="text-pink-800"><strong>•</strong> &quot;Sistine Madonna by Raphael.&quot;</p>
                <p className="text-pink-800"><strong>•</strong> &quot;Sistine ceiling paintings.&quot;</p>
                <p className="text-pink-800"><strong>•</strong> &quot;Visit the Sistine Chapel.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sixtin&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The Sixtin Chapel is famous&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Sixtin Madonna by Raphael&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Sixtin ceiling paintings&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Visit the Sixtin Chapel&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Ine&quot;</h3>
              <p className="text-yellow-800">&quot;Sistine&quot; = &quot;Sist&quot; + &quot;ine&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Remember Ending</h3>
              <p className="text-pink-800">&quot;Sistine&quot; = ends with &quot;e&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;Sistine&quot; to build muscle memory</p>
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
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Why do people misspell &quot;Sistine&quot; as &quot;Sixtin&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often drop the final &quot;e&quot; when spelling the word. They might think the word ends with &quot;in&quot; instead of &quot;ine,&quot; leading to the incorrect &quot;Sixtin.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;Sistine&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sistine&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling for the famous chapel and related works.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;Sistine&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sistine&quot; comes from the Latin name &quot;Sixtus,&quot; referring to Pope Sixtus IV who commissioned the chapel. The suffix &quot;ine&quot; creates an adjective meaning &quot;relating to Sixtus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;Sistine&quot; is spelled the same way across all English-speaking regions. The spelling &quot;Sixtin&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;Sistine&quot; as ending with &quot;ine&quot; - just like &quot;fine,&quot; &quot;line,&quot; and &quot;mine.&quot; Remember that it&apos;s not &quot;Sixtin&quot; but &quot;Sistine&quot; with an &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;Sistine&quot;?</h3>
              <p className="text-lg text-gray-700">A: Since &quot;Sistine&quot; is a proper noun referring to specific places and works, there aren&apos;t direct synonyms. However, you could use &quot;Vatican,&quot; &quot;papal,&quot; or &quot;Renaissance&quot; in related contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;Sistine&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sistine&quot; can refer to the Sistine Chapel, the Sistine Madonna painting, the Sistine ceiling, and any other works or places associated with Pope Sixtus IV.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;Sistine&quot; and &quot;Vatican&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sistine&quot; specifically refers to things related to Pope Sixtus IV (like the Sistine Chapel), while &quot;Vatican&quot; refers to the broader Vatican City and its institutions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;Sistine&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Primarily yes! &quot;Sistine&quot; is generally associated with artistic masterpieces, religious significance, and cultural heritage. It&apos;s most commonly used in positive contexts related to art and history.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;Sistine&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;Sistine Chapel,&quot; &quot;Sistine Madonna,&quot; &quot;Sistine ceiling,&quot; &quot;Sistine paintings,&quot; and &quot;Sistine frescoes.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sistine&quot;</strong> ends with &quot;e&quot;.
          <br />
          <strong>&quot;Sixtin&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SISTINE = ends with E&quot;</p>
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
