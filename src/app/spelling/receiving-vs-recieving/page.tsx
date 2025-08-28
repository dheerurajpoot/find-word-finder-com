import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Receiving vs Recieving - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;receiving&quot; and &quot;recieving&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReceivingVsRecievingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Receiving vs Recieving
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your receiving! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-violet-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-violet-700">
          <strong>&quot;Receiving&quot;</strong> is the correct spelling. &quot;Recieving&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Recieving</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-500">
            <h3 className="text-xl font-bold text-violet-700 mb-3">✅ Correct: Receiving</h3>
            <p className="text-violet-600">This is the proper spelling that means &quot;the act of getting or accepting something.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
            <h3 className="text-lg font-bold text-violet-800 mb-3">📚 Correct Word</h3>
            <p className="text-violet-700">
              <strong>Receiving</strong> is the present participle form of &quot;receive,&quot; meaning to get, accept, or welcome something.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Recieving</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
            <h3 className="text-lg font-bold text-violet-800 mb-3">🔍 Etymology</h3>
            <p className="text-violet-700">
              From Latin <em>recipere</em>, meaning &quot;to take.&quot; The &quot;c&quot; before &quot;ieving&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
              <p className="text-violet-700">I am <strong>receiving</strong> a package today.</p>
            </div>
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
              <p className="text-violet-700">The <strong>receiving</strong> department handles all incoming shipments.</p>
            </div>
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
              <p className="text-violet-700">She is <strong>receiving</strong> an award for her work.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I am <strong>recieving</strong> a package today. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>recieving</strong> department handles all incoming shipments. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She is <strong>recieving</strong> an award for her work. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-violet-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">🎯 Think &quot;Receive&quot;</h3>
              <p className="text-violet-700">Remember that &quot;receiving&quot; comes from &quot;receive&quot; - both have the &quot;ce&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">🔤 &quot;C&quot; Before &quot;I&quot;</h3>
              <p className="text-violet-700">The &quot;c&quot; in &quot;receiving&quot; comes before the &quot;i&quot; - think &quot;re&quot; + &quot;ceiving&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">📝 Break It Down</h3>
              <p className="text-violet-700">Think: &quot;Re&quot; + &quot;ceiving&quot; = &quot;receiving&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">🎨 Visual Association</h3>
              <p className="text-violet-700">Picture the &quot;c&quot; as a receiving box - it&apos;s essential for the &quot;receiving&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-violet-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-violet-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-violet-600">• <strong>Receiving</strong> end</p>
              <p className="text-violet-600">• <strong>Receiving</strong> line</p>
              <p className="text-violet-600">• <strong>Receiving</strong> room</p>
              <p className="text-violet-600">• <strong>Receiving</strong> blanket</p>
              <p className="text-violet-600">• <strong>Receiving</strong> report</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-violet-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-violet-600">• <strong>Present Participle:</strong> I am receiving</p>
              <p className="text-violet-600">• <strong>Gerund:</strong> Receiving is important</p>
              <p className="text-violet-600">• <strong>Adjective:</strong> The receiving area</p>
              <p className="text-violet-600">• <strong>Noun:</strong> The receiving of gifts</p>
              <p className="text-violet-600">• <strong>Continuous:</strong> She was receiving</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-violet-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Why do people misspell &quot;receiving&quot; as &quot;recieving&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;cie,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Is &quot;recieving&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;recieving&quot; is never correct in formal or informal writing. It should always be spelled as &quot;receiving.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the difference between &quot;receiving&quot; and &quot;receipt&quot;?</h3>
              <p className="text-gray-700">&quot;Receiving&quot; is the act of getting something, while &quot;receipt&quot; is a proof of purchase or payment.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Can &quot;receiving&quot; be used as a noun?</h3>
              <p className="text-gray-700">Yes, &quot;receiving&quot; can be used as a gerund (noun form) when referring to the act of receiving.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;receive&quot; - both words have the same &quot;ce&quot; pattern, and &quot;receiving&quot; comes from &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Is &quot;receiving&quot; related to &quot;reception&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the base form of &quot;receiving&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;receive.&quot; For example: &quot;I receive packages daily.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Can &quot;receiving&quot; be used for things other than objects?</h3>
              <p className="text-gray-700">Yes, &quot;receiving&quot; can refer to getting information, signals, guests, or any form of acceptance or welcome.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the origin of the word &quot;receiving&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive,&quot; with the English suffix &quot;-ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">How common is the misspelling &quot;recieving&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Receiving&quot;</strong> has a &quot;c&quot; before &quot;i&quot; - just like &quot;receive&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;receiving&quot; follows the same pattern as &quot;receive,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-violet-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipe-vs-recipie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recipie</a></p>
            <p><a href="/spelling/recipe-vs-recepie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recepie</a></p>
            <p><a href="/spelling/recipe-vs-receipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Receipe</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-violet-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receipt-vs-reciept" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Reciept</a></p>
            <p><a href="/spelling/receive-vs-recieve" className="text-blue-700 hover:text-blue-900 underline">Receive vs Recieve</a></p>
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-violet-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/present-participles" className="text-blue-700 hover:text-blue-900 underline">Present Participles</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
