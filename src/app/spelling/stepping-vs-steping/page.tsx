import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stepping vs Steping - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stepping&quot; and &quot;steping&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SteppingVsStepingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Stepping vs Steping
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
            <span className="text-2xl mr-3">👣</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Stepping&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Steping&quot; is always incorrect - remember the double &quot;p&quot; in &quot;stepping&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Steping</h3>
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
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Stepping</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;taking steps or moving by lifting and setting down each foot.&quot;
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
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Step&quot; (Root)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;to move by lifting foot&quot;</li>
                <li>• Related to walking</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Pp&quot; (Double P)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Double consonant in &quot;step&quot;</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Ing&quot; (Suffix)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Present participle ending</li>
                <li>• Forms continuous tense</li>
                <li>• Standard English suffix</li>
                <li>• Added to base form</li>
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Correct: &quot;Stepping&quot;</h3>
              <div className="space-y-3">
                <p className="text-green-800"><strong>•</strong> &quot;She was stepping carefully on the ice.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;The children are stepping in puddles.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;I enjoy stepping through the forest.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;He kept stepping on my toes.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Steping&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;She was steping carefully&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The children are steping in puddles&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I enjoy steping through the forest&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He kept steping on my toes&quot; ❌</p>
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
                  The word &quot;step&quot; comes from Old English <em>steppan</em>, meaning &quot;to step, go, or advance.&quot; When adding the &quot;-ing&quot; suffix, the double &quot;p&quot; is preserved to maintain the correct pronunciation and spelling.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Historical Usage</h3>
                <p className="text-blue-800 leading-relaxed">
                  &quot;Stepping&quot; has been used in English since the Middle Ages. The spelling with double &quot;p&quot; has remained consistent throughout its history, making &quot;steping&quot; an obvious error that should be avoided in all contexts.
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
                <li>• Similar to words like &quot;stepping&quot;</li>
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
                <li>• step (present)</li>
                <li>• steps (3rd person singular)</li>
                <li>• stepped (past/past participle)</li>
                <li>• stepping (present participle)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Related Nouns</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• step</li>
                <li>• stepper</li>
                <li>• stepstool</li>
                <li>• doorstep</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Similar Words</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• walking</li>
                <li>• running</li>
                <li>• jumping</li>
                <li>• hopping</li>
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
                    <li>• stepping</li>
                    <li>• stepped</li>
                    <li>• stepper</li>
                    <li>• stepstool</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Never Correct</h3>
                  <ul className="text-red-800 space-y-2">
                    <li>• steping</li>
                    <li>• steped</li>
                    <li>• steper</li>
                    <li>• stepstol</li>
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
          <a href="/spelling" className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-lime-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
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
