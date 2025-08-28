import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Receding vs Receeding - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;receding&quot; and &quot;reeceeding&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecedingVsReceedingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Receding vs Receeding
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your receding! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-violet-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-violet-700">
          <strong>&quot;Receding&quot;</strong> is the correct spelling. &quot;Receeding&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Receeding</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-l-4 border-violet-500">
            <h3 className="text-xl font-bold text-violet-700 mb-3">✅ Correct: Receding</h3>
            <p className="text-violet-600">This is the proper spelling that means &quot;moving back or away; becoming more distant.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
            <h3 className="text-lg font-bold text-violet-800 mb-3">📚 Correct Word</h3>
            <p className="text-violet-700">
              <strong>Receding</strong> is the present participle of &quot;recede,&quot; meaning moving back or away, becoming more distant.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Receeding</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
            <h3 className="text-lg font-bold text-violet-800 mb-3">🔍 Etymology</h3>
            <p className="text-violet-700">
              From Latin <em>recedere</em>, meaning &quot;to go back.&quot; The &quot;c&quot; before &quot;eding&quot; is essential for the correct spelling.
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
              <p className="text-violet-700">The tide is <strong>receding</strong> from the shore.</p>
            </div>
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
              <p className="text-violet-700">His hairline is <strong>receding</strong> with age.</p>
            </div>
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
              <p className="text-violet-700">The floodwaters are slowly <strong>receding</strong>.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The tide is <strong>reeceeding</strong> from the shore. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">His hairline is <strong>reeceeding</strong> with age. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The floodwaters are slowly <strong>reeceeding</strong>. <span className="text-red-500">(Incorrect)</span></p>
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
              <h3 className="text-lg font-bold text-violet-800 mb-3">🎯 Think &quot;Recede&quot;</h3>
              <p className="text-violet-700">Remember that &quot;receding&quot; comes from &quot;recede&quot; - both have the &quot;ce&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">🔤 &quot;C&quot; Before &quot;E&quot;</h3>
              <p className="text-violet-700">The &quot;c&quot; in &quot;receding&quot; comes before the &quot;e&quot; - think &quot;re&quot; + &quot;ceding&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">📝 Break It Down</h3>
              <p className="text-violet-700">Think: &quot;Re&quot; + &quot;ceding&quot; = &quot;receding&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-violet-100 to-purple-100">
              <h3 className="text-lg font-bold text-violet-800 mb-3">🎨 Visual Association</h3>
              <p className="text-violet-700">Picture the &quot;c&quot; as a receding wave - it&apos;s essential for the &quot;receding&quot;!</p>
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
              <p className="text-violet-600">• <strong>Receding</strong> tide</p>
              <p className="text-violet-600">• <strong>Receding</strong> hairline</p>
              <p className="text-violet-600">• <strong>Receding</strong> floodwaters</p>
              <p className="text-violet-600">• <strong>Receding</strong> gums</p>
              <p className="text-violet-600">• <strong>Receding</strong> shoreline</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-violet-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-violet-600">• <strong>Present Participle:</strong> The tide is receding</p>
              <p className="text-violet-600">• <strong>Adjective:</strong> The receding tide</p>
              <p className="text-violet-600">• <strong>Gerund:</strong> Receding is natural</p>
              <p className="text-violet-600">• <strong>Continuous Tense:</strong> Is receding</p>
              <p className="text-violet-600">• <strong>From Verb:</strong> Recede</p>
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
              <h3 className="text-lg font-bold text-violet-800 mb-2">Why do people misspell &quot;receding&quot; as &quot;reeceeding&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;cee,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Is &quot;reeceeding&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;reeceeding&quot; is never correct in formal or informal writing. It should always be spelled as &quot;receding.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the difference between &quot;receding&quot; and &quot;recede&quot;?</h3>
              <p className="text-gray-700">&quot;Receding&quot; is the present participle meaning &quot;moving back,&quot; while &quot;recede&quot; is the base verb meaning &quot;to move back.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Can &quot;receding&quot; be used as a noun?</h3>
              <p className="text-gray-700">Yes, &quot;receding&quot; can function as a gerund (noun) in sentences like &quot;The receding of the tide is natural.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;recede&quot; - both words have the same &quot;ce&quot; pattern, and &quot;receding&quot; comes from &quot;recede.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Is &quot;receding&quot; related to &quot;recession&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;recedere,&quot; meaning &quot;to go back&quot; or &quot;to withdraw.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the base form of &quot;receding&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;recede.&quot; For example: &quot;The tide will recede.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Can &quot;receding&quot; be used for things other than physical movement?</h3>
              <p className="text-gray-700">Yes, &quot;receding&quot; can refer to abstract concepts like receding memories, receding influence, or receding popularity.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the origin of the word &quot;receding&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recedere,&quot; meaning &quot;to go back&quot; or &quot;to withdraw,&quot; with the English present participle ending &quot;-ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">How common is the misspelling &quot;reeceeding&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">What&apos;s the difference between &quot;receding&quot; and &quot;retreating&quot;?</h3>
              <p className="text-gray-700">&quot;Receding&quot; implies gradual movement away, while &quot;retreating&quot; suggests more deliberate withdrawal or backing away.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-violet-500">
              <h3 className="text-lg font-bold text-violet-800 mb-2">Can &quot;receding&quot; be used in scientific contexts?</h3>
              <p className="text-gray-700">Yes, &quot;receding&quot; is commonly used in geology, oceanography, and other sciences to describe natural processes of withdrawal or diminishment.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Receding&quot;</strong> has a &quot;c&quot; before &quot;e&quot; - just like &quot;recede&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;receding&quot; follows the same pattern as &quot;recede,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-violet-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiver-vs-reciver" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciver</a></p>
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
            <p><a href="/spelling/received-vs-recived" className="text-blue-700 hover:text-blue-900 underline">Received vs Recived</a></p>
            <p><a href="/spelling/received-vs-recieved" className="text-blue-700 hover:text-blue-900 underline">Received vs Recieved</a></p>
            <p><a href="/spelling/receives-vs-recieves" className="text-blue-700 hover:text-blue-900 underline">Receives vs Recieves</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-violet-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
            <p><a href="/spelling/receipt-vs-recipt" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Recipt</a></p>
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
