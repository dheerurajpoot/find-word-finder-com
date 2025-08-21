import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Shoo-in vs Shoe-in - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;shoo-in&quot; and &quot;shoe-in&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ShooInVsShoeInPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Shoo-in vs Shoe-in
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Shoo-in&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Shoe-in&quot; is always incorrect - remember that &quot;shoo-in&quot; means to shoo someone in!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Shoe-in</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-sky-50 to-sky-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-sky-800 mb-4">Shoo-in</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-sky-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-sky-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person or thing that is certain to win or succeed.&quot;
              </p>
            </CardContent>
          </Card>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Shoo&quot; (Action)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• To drive away</li>
                <li>• To urge forward</li>
                <li>• Correct spelling</li>
                <li>• Standard English</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Not Shoe&quot; (Rule)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• No footwear meaning</li>
                <li>• Action verb only</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;In&quot; (Direction)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Direction indicator</li>
                <li>• Preposition</li>
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
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">✅ Correct: &quot;Shoo-in&quot;</h3>
              <div className="space-y-3">
                <p className="text-sky-800"><strong>•</strong> &quot;She&apos;s a shoo-in for the job.&quot;</p>
                <p className="text-sky-800"><strong>•</strong> &quot;That team is a shoo-in to win.&quot;</p>
                <p className="text-sky-800"><strong>•</strong> &quot;He&apos;s a shoo-in for the award.&quot;</p>
                <p className="text-sky-800"><strong>•</strong> &quot;The movie is a shoo-in for best picture.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Shoe-in&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;She&apos;s a shoe-in for the job&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;That team is a shoe-in to win&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He&apos;s a shoe-in for the award&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The movie is a shoe-in for best picture&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Shoo&quot;</h3>
              <p className="text-yellow-800">&quot;Shoo-in&quot; = to shoo someone in</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Remember Action</h3>
              <p className="text-sky-800">&quot;Shoo&quot; means to drive away or urge forward</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;shoo-in&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people misspell &quot;shoo-in&quot; as &quot;shoe-in&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often confuse the action verb &quot;shoo&quot; with the noun &quot;shoe.&quot; They might think it relates to footwear, but &quot;shoo-in&quot; actually means to shoo someone in, indicating certainty of success.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;shoo-in&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shoo-in&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English idiom that conveys important meaning about certainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;shoo-in&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shoo-in&quot; comes from horse racing, where it referred to a race that was fixed so that a particular horse would win. The term &quot;shoo&quot; means to drive away or urge forward, and &quot;in&quot; refers to crossing the finish line.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shoo-in&quot; is spelled the same way across all English-speaking regions. The spelling &quot;shoe-in&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;shoo-in&quot; as the action of shooing someone in. Remember that it&apos;s not &quot;shoe-in&quot; but rather &quot;shoo-in&quot; meaning to drive or urge forward.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What are some synonyms for &quot;shoo-in&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: sure thing, certainty, lock, guaranteed winner, and sure bet.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;shoo-in&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shoo-in&quot; can refer to elections, competitions, job applications, awards, and various situations where someone is certain to succeed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;shoo-in&quot; and &quot;sure thing&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both express certainty, but &quot;shoo-in&quot; specifically refers to a person or thing that is certain to win or succeed, while &quot;sure thing&quot; is a more general expression of certainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;shoo-in&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shoo-in&quot; is neutral - it simply indicates certainty of success. It can be used in positive, negative, or neutral contexts depending on the surrounding language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What are some common phrases with &quot;shoo-in&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;shoo-in for,&quot; &quot;shoo-in to win,&quot; &quot;shoo-in candidate,&quot; &quot;shoo-in victory,&quot; and &quot;shoo-in success.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Shoo-in&quot;</strong> means to shoo someone in.
          <br />
          <strong>&quot;Shoe-in&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SHOO-IN = To Shoo Someone In&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
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
