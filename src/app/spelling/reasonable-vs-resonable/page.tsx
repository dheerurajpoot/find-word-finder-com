import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reasonable vs Resonable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reasonable&quot; and &quot;resonable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReasonableVsResonablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Reasonable vs Resonable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your reasonable! Learn why the correct form needs that &quot;a&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-blue-700">
          <strong>&quot;Reasonable&quot;</strong> is the correct spelling. &quot;Resonable&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Resonable</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Correct: Reasonable</h3>
            <p className="text-blue-600">This is the proper spelling that means &quot;fair, sensible, or moderate.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">📚 Correct Word</h3>
            <p className="text-blue-700">
              <strong>Reasonable</strong> is an adjective that means fair, sensible, moderate, or within acceptable limits.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Resonable</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🔍 Etymology</h3>
            <p className="text-blue-700">
              From Latin <em>ratio</em>, meaning &quot;reckoning, reason.&quot; The &quot;a&quot; in &quot;reasonable&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">That&apos;s a <strong>reasonable</strong> price for the car.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">She made a <strong>reasonable</strong> request.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">The solution seems <strong>reasonable</strong> to me.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">That&apos;s a <strong>resonable</strong> price for the car. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She made a <strong>resonable</strong> request. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The solution seems <strong>resonable</strong> to me. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🎯 Think &quot;Reason&quot;</h3>
              <p className="text-blue-700">Remember that &quot;reasonable&quot; comes from &quot;reason&quot; - both have the &quot;ea&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🔤 &quot;EA&quot; Pattern</h3>
              <p className="text-blue-700">The &quot;ea&quot; in &quot;reasonable&quot; is crucial - think &quot;reason&quot; + &quot;able&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">📝 Break It Down</h3>
              <p className="text-blue-700">Think: &quot;Reason&quot; + &quot;able&quot; = &quot;reasonable&quot; - the &quot;a&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🎨 Visual Association</h3>
              <p className="text-blue-700">Picture the &quot;a&quot; as a reason itself - it&apos;s essential for the &quot;reasonable&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-blue-600">• <strong>Reasonable</strong> price</p>
              <p className="text-blue-600">• <strong>Reasonable</strong> request</p>
              <p className="text-blue-600">• <strong>Reasonable</strong> doubt</p>
              <p className="text-blue-600">• <strong>Reasonable</strong> person</p>
              <p className="text-blue-600">• <strong>Reasonable</strong> time</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-blue-600">• <strong>Adjective:</strong> The price is reasonable</p>
              <p className="text-blue-600">• <strong>Predicate:</strong> It seems reasonable</p>
              <p className="text-blue-600">• <strong>Modifier:</strong> A reasonable solution</p>
              <p className="text-blue-600">• <strong>Comparative:</strong> More reasonable</p>
              <p className="text-blue-600">• <strong>Superlative:</strong> Most reasonable</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Why do people misspell &quot;reasonable&quot; as &quot;resonable&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ea&quot; sound can be heard as &quot;e,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Is &quot;resonable&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;resonable&quot; is never correct in formal or informal writing. It should always be spelled as &quot;reasonable.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the difference between &quot;reasonable&quot; and &quot;rational&quot;?</h3>
              <p className="text-gray-700">&quot;Reasonable&quot; implies fairness and moderation, while &quot;rational&quot; suggests logical thinking and sound judgment.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;reasonable&quot; be used in negative contexts?</h3>
              <p className="text-gray-700">Yes, &quot;reasonable&quot; can be used negatively, as in &quot;That&apos;s not reasonable&quot; or &quot;unreasonable.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;reason&quot; - both words have the same &quot;ea&quot; pattern, and &quot;reasonable&quot; comes from &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Is &quot;reasonable&quot; related to &quot;reasoning&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;ratio,&quot; meaning &quot;reckoning&quot; or &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the adverb form of &quot;reasonable&quot;?</h3>
              <p className="text-gray-700">The adverb form is &quot;reasonably.&quot; For example: &quot;He acted reasonably.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;reasonable&quot; be used for things other than people?</h3>
              <p className="text-gray-700">Yes, &quot;reasonable&quot; can refer to prices, requests, solutions, or any concept that can be evaluated for fairness.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the origin of the word &quot;reasonable&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;ratio,&quot; meaning &quot;reckoning&quot; or &quot;reason,&quot; with the English suffix &quot;-able&quot; indicating capability.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">How common is the misspelling &quot;resonable&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the difference between &quot;reasonable&quot; and &quot;fair&quot;?</h3>
              <p className="text-gray-700">&quot;Reasonable&quot; suggests moderation and sensibility, while &quot;fair&quot; emphasizes justice and equality.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;reasonable&quot; be used in legal contexts?</h3>
              <p className="text-gray-700">Yes, &quot;reasonable&quot; is commonly used in legal contexts, such as &quot;reasonable doubt&quot; or &quot;reasonable person standard.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Reasonable&quot;</strong> has an &quot;a&quot; - just like &quot;reason&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ea&quot; in &quot;reasonable&quot; follows the same pattern as &quot;reason,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reasons-vs-resons" className="text-blue-700 hover:text-blue-900 underline">Reasons vs Resons</a></p>
            <p><a href="/spelling/reason-vs-reson" className="text-blue-700 hover:text-blue-900 underline">Reason vs Reson</a></p>
            <p><a href="/spelling/realm-vs-relm" className="text-blue-700 hover:text-blue-900 underline">Realm vs Relm</a></p>
            <p><a href="/spelling/really-vs-rilly" className="text-blue-700 hover:text-blue-900 underline">Really vs Rilly</a></p>
            <p><a href="/spelling/rebel-vs-rebell" className="text-blue-700 hover:text-blue-900 underline">Rebel vs Rebell</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recede-vs-receed" className="text-blue-700 hover:text-blue-900 underline">Recede vs Receed</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adjectives" className="text-blue-700 hover:text-blue-900 underline">Adjectives</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
