import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reliable vs Relieable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reliable&quot; and &quot;relieable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReliableVsRelieablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Reliable vs Relieable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Reliable&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Relieable&quot; is always incorrect - remember the &quot;able&quot; in &quot;reliable&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Relieable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Reliable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;able to be trusted or depended on.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">ABLE Rule</h3>
              <p className="text-orange-800">&quot;Reliable&quot; ends with &quot;able&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Think Rely</h3>
              <p className="text-red-800">&quot;Rely&quot; + &quot;able&quot; = &quot;reliable&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;reliable&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Proofread</h3>
              <p className="text-amber-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Reliable&quot;</strong> ends with &quot;able&quot; and means &quot;able to be trusted.&quot; 
          <br />
          <strong>&quot;Relieable&quot;</strong> is missing the &quot;a&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RELY + ABLE&quot; - &quot;reliable&quot; ends with &quot;able&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/relieved-vs-releaved" className="text-blue-700 hover:text-blue-900 underline">Relieved vs Releaved</a></li>
            <li><a href="/spelling/relieve-vs-releave" className="text-blue-700 hover:text-blue-900 underline">Relieve vs Releave</a></li>
            <li><a href="/spelling/relief-vs-releaf" className="text-blue-700 hover:text-blue-900 underline">Relief vs Releaf</a></li>
            <li><a href="/spelling/relevant-vs-revelant" className="text-blue-700 hover:text-blue-900 underline">Relevant vs Revelant</a></li>
            <li><a href="/spelling/relevance-vs-revelence" className="text-blue-700 hover:text-blue-900 underline">Relevance vs Revelence</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/available-vs-availible" className="text-purple-700 hover:text-purple-900 underline">Available vs Availible</a></li>
            <li><a href="/spelling/comfortable-vs-comfortible" className="text-purple-700 hover:text-purple-900 underline">Comfortable vs Comfortible</a></li>
            <li><a href="/spelling/possible-vs-possable" className="text-purple-700 hover:text-purple-900 underline">Possible vs Possable</a></li>
            <li><a href="/spelling/visible-vs-visable" className="text-purple-700 hover:text-purple-900 underline">Visible vs Visable</a></li>
            <li><a href="/spelling/acceptable-vs-acceptible" className="text-purple-700 hover:text-purple-900 underline">Acceptable vs Acceptible</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/able-suffix" className="text-green-700 hover:text-green-900 underline">-able Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
