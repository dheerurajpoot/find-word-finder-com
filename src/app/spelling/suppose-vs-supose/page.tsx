import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suppose vs Supose - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suppose&quot; and &quot;supose&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupposeVsSuposePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Suppose vs Supose
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Suppose&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supose&quot; is always incorrect - remember the double &quot;p&quot; in &quot;suppose&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Supose</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Suppose</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-pink-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-pink-700 leading-relaxed">
                This is the proper spelling meaning &quot;to assume to be true or real for the sake of argument or explanation.&quot;
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
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Suppose&quot; (Correct)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Has double &quot;p&quot;</li>
                <li>• Has &quot;e&quot; at the end</li>
                <li>• Standard English spelling</li>
                <li>• Verb meaning to assume</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Common Error</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• &quot;Supose&quot; is wrong</li>
                <li>• Missing second &quot;p&quot;</li>
                <li>• Common typo</li>
                <li>• Not a real word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Memory Trick</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Think &quot;suppose&quot; has &quot;pp&quot;</li>
                <li>• Like &quot;appear&quot; or &quot;oppose&quot;</li>
                <li>• Double &quot;p&quot; = proper</li>
                <li>• Single &quot;p&quot; = problem</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Correct: &quot;Suppose&quot;</h3>
              <div className="space-y-3">
                <p className="text-green-800"><strong>•</strong> &quot;I suppose you&apos;re right about that.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;Let&apos;s suppose for a moment that...&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;What do you suppose happened?&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;I suppose we should leave now.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Supose&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;I supose you&apos;re right&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Let&apos;s supose for a moment&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;What do you supose happened?&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I supose we should leave&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Etymology and History */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Word Origin & History</h2>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Etymology</h3>
                <p className="text-blue-800 leading-relaxed">
                  The word &quot;suppose&quot; comes from the Old French <em>supposer</em>, which in turn comes from the Latin <em>supponere</em> meaning &quot;to put under, to substitute.&quot; The double &quot;p&quot; has been preserved throughout its evolution into modern English.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Historical Usage</h3>
                <p className="text-blue-800 leading-relaxed">
                  &quot;Suppose&quot; has been used in English since the 14th century. The spelling with double &quot;p&quot; has remained consistent throughout its history, making &quot;supose&quot; an obvious error that should be avoided in all contexts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Common Mistakes */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Why People Make This Mistake</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Typing Errors</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Fast typing can miss the second &quot;p&quot;</li>
                <li>• Auto-correct might not catch it</li>
                <li>• Similar to words like &quot;pose&quot;</li>
                <li>• Phonetic confusion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Prevention Tips</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Always double-check spelling</li>
                <li>• Use spell-check tools</li>
                <li>• Remember the double &quot;p&quot; rule</li>
                <li>• Practice writing it correctly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Words */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Related Words & Forms</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Verb Forms</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• suppose (present)</li>
                <li>• supposed (past/past participle)</li>
                <li>• supposing (present participle)</li>
                <li>• supposes (3rd person singular)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Related Nouns</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• supposition</li>
                <li>• supposal</li>
                <li>• suppositive</li>
                <li>• presupposition</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Similar Words</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• assume</li>
                <li>• presume</li>
                <li>• guess</li>
                <li>• imagine</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Tips */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Final Tips to Remember</h2>
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-300">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg mb-6">
                <span className="text-3xl mr-3">💡</span>
                <span className="text-2xl font-bold text-green-600">Remember: Double &quot;P&quot; = Proper!</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Always Correct</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• suppose</li>
                    <li>• supposed</li>
                    <li>• supposing</li>
                    <li>• supposes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Never Correct</h3>
                  <ul className="text-red-800 space-y-2">
                    <li>• supose</li>
                    <li>• suposed</li>
                    <li>• suposing</li>
                    <li>• suposes</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
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
