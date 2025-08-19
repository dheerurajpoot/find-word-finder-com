import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Submit vs Submitt - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;submit&quot; and &quot;submitt&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubmitVsSubmittPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Submit vs Submitt
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📝</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Submit&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Submitt&quot; is incorrect - remember only one &quot;t&quot; in &quot;submit&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Submitt</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling has an extra &quot;t&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Submit</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to present for consideration&quot; or &quot;to hand in.&quot;
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
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Used in many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Mit&quot; (Root)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;to send&quot; or &quot;to let go&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;mission&quot;</li>
                <li>• Only one &quot;t&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Memory Trick</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Think &quot;SUB + MIT&quot;</li>
                <li>• Only one &quot;t&quot; in &quot;mit&quot;</li>
                <li>• Like &quot;mission&quot; or &quot;permit&quot;</li>
                <li>• Extra &quot;t&quot; = wrong</li>
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Correct: &quot;Submit&quot;</h3>
              <div className="space-y-3">
                <p className="text-green-800"><strong>•</strong> &quot;Please submit your application by Friday.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;I will submit the report tomorrow.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;The deadline to submit is next week.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;Students must submit their assignments on time.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Submitt&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;Please submitt your application&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I will submitt the report&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The deadline to submitt is next week&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Students must submitt their assignments&quot; ❌</p>
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
                  The word &quot;submit&quot; comes from the Latin <em>submittere</em>, which combines <em>sub</em> (under) and <em>mittere</em> (to send). The spelling has been consistent throughout its evolution into English, with only one &quot;t&quot; in the root.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Historical Usage</h3>
                <p className="text-blue-800 leading-relaxed">
                  &quot;Submit&quot; has been used in English since the 14th century. The spelling with single &quot;t&quot; has remained consistent, making &quot;submitt&quot; an obvious error that should be avoided in all contexts.
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
                <li>• Fast typing can add extra &quot;t&quot;</li>
                <li>• Auto-correct might not catch it</li>
                <li>• Similar to words like &quot;commit&quot;</li>
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
                <li>• Remember the single &quot;t&quot; rule</li>
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
                <li>• submit (present)</li>
                <li>• submits (3rd person singular)</li>
                <li>• submitted (past/past participle)</li>
                <li>• submitting (present participle)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Related Nouns</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• submission</li>
                <li>• submitter</li>
                <li>• submittal</li>
                <li>• resubmission</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Similar Words</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• commit</li>
                <li>• permit</li>
                <li>• transmit</li>
                <li>• emit</li>
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
                <span className="text-2xl font-bold text-green-600">Remember: Single &quot;T&quot; = Correct!</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Always Correct</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• submit</li>
                    <li>• submits</li>
                    <li>• submitted</li>
                    <li>• submitting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Never Correct</h3>
                  <ul className="text-red-800 space-y-2">
                    <li>• submitt</li>
                    <li>• submitts</li>
                    <li>• submittted</li>
                    <li>• submittting</li>
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
          <a href="/spelling" className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
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
