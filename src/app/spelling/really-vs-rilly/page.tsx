import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Really vs Rilly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;really&quot; and &quot;rilly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReallyVsRillyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Really vs Rilly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your really! Learn why the correct form needs that &quot;a&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-rose-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-rose-700">
          <strong>&quot;Really&quot;</strong> is the correct spelling. &quot;Rilly&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Rilly</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500">
            <h3 className="text-xl font-bold text-rose-700 mb-3">✅ Correct: Really</h3>
            <p className="text-rose-600">This is the proper spelling that means &quot;in truth, actually, or very.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
            <h3 className="text-lg font-bold text-rose-800 mb-3">📚 Correct Word</h3>
            <p className="text-rose-700">
              <strong>Really</strong> is an adverb that means in truth, actually, or very.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Rilly</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
            <h3 className="text-lg font-bold text-rose-800 mb-3">🔍 Etymology</h3>
            <p className="text-rose-700">
              From &quot;real&quot; + &quot;-ly.&quot; The &quot;a&quot; in &quot;really&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">I <strong>really</strong> enjoyed the movie.</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">Are you <strong>really</strong> going to do that?</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">That was <strong>really</strong> difficult.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I <strong>rilly</strong> enjoyed the movie. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Are you <strong>rilly</strong> going to do that? <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">That was <strong>rilly</strong> difficult. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🎯 Think &quot;Real&quot;</h3>
              <p className="text-rose-700">Remember that &quot;really&quot; comes from &quot;real&quot; - both have the &quot;ea&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🔤 &quot;EA&quot; Pattern</h3>
              <p className="text-rose-700">The &quot;ea&quot; in &quot;really&quot; is crucial - think &quot;real&quot; + &quot;ly&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">📝 Break It Down</h3>
              <p className="text-rose-700">Think: &quot;Real&quot; + &quot;ly&quot; = &quot;really&quot; - the &quot;a&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🎨 Visual Association</h3>
              <p className="text-rose-700">Picture the &quot;a&quot; as a truth marker - it&apos;s essential for the &quot;really&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-rose-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-rose-600">• <strong>Really</strong> good</p>
              <p className="text-rose-600">• <strong>Really</strong> bad</p>
              <p className="text-rose-600">• <strong>Really</strong> fast</p>
              <p className="text-rose-600">• <strong>Really</strong> slow</p>
              <p className="text-rose-600">• <strong>Really</strong> important</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-rose-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-rose-600">• <strong>Adverb:</strong> He really tried</p>
              <p className="text-rose-600">• <strong>Intensifier:</strong> Really big</p>
              <p className="text-rose-600">• <strong>Question:</strong> Really?</p>
              <p className="text-rose-600">• <strong>Emphasis:</strong> I really mean it</p>
              <p className="text-rose-600">• <strong>Truth:</strong> Really happened</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Why do people misspell &quot;really&quot; as &quot;rilly&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ea&quot; sound can be heard as &quot;i,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;rilly&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;rilly&quot; is never correct in formal or informal writing. It should always be spelled as &quot;really.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;really&quot; and &quot;very&quot;?</h3>
              <p className="text-gray-700">&quot;Really&quot; can mean both &quot;in truth&quot; and &quot;very,&quot; while &quot;very&quot; only means &quot;to a high degree.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;really&quot; be used in questions?</h3>
              <p className="text-gray-700">Yes, &quot;really&quot; is commonly used in questions to express surprise or disbelief, like &quot;Really?&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;real&quot; - both words have the same &quot;ea&quot; pattern, and &quot;really&quot; comes from &quot;real.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;really&quot; related to &quot;realistic&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same root word &quot;real,&quot; meaning &quot;actual&quot; or &quot;true.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the base form of &quot;really&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;real.&quot; For example: &quot;This is real&quot; vs &quot;This is really good.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;really&quot; be used for emphasis?</h3>
              <p className="text-gray-700">Yes, &quot;really&quot; is commonly used for emphasis, as in &quot;I really want to go&quot; or &quot;That&apos;s really important.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the origin of the word &quot;really&quot;?</h3>
              <p className="text-gray-700">It comes from &quot;real&quot; + the adverbial suffix &quot;-ly,&quot; meaning &quot;in a real manner.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">How common is the misspelling &quot;rilly&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;really&quot; and &quot;actually&quot;?</h3>
              <p className="text-gray-700">&quot;Really&quot; emphasizes truth or degree, while &quot;actually&quot; emphasizes that something is true despite appearances.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;really&quot; be used in formal writing?</h3>
              <p className="text-gray-700">Yes, &quot;really&quot; can be used in formal writing, though it&apos;s more common in informal contexts.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Really&quot;</strong> has an &quot;a&quot; - just like &quot;real&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ea&quot; in &quot;really&quot; follows the same pattern as &quot;real,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reasons-vs-resons" className="text-blue-700 hover:text-blue-900 underline">Reasons vs Resons</a></p>
            <p><a href="/spelling/reasonable-vs-resonable" className="text-blue-700 hover:text-blue-900 underline">Reasonable vs Resonable</a></p>
            <p><a href="/spelling/reason-vs-reson" className="text-blue-700 hover:text-blue-900 underline">Reason vs Reson</a></p>
            <p><a href="/spelling/realm-vs-relm" className="text-blue-700 hover:text-blue-900 underline">Realm vs Relm</a></p>
            <p><a href="/spelling/rebel-vs-rebell" className="text-blue-700 hover:text-blue-900 underline">Rebel vs Rebell</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recede-vs-receed" className="text-blue-700 hover:text-blue-900 underline">Recede vs Receed</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adverbs" className="text-blue-700 hover:text-blue-900 underline">Adverbs</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
            <p><a href="/grammar/etymology" className="text-blue-700 hover:text-blue-900 underline">Etymology</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
