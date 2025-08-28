import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reception vs Reseption - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reception&quot; and &quot;reseption&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReceptionVsReseptionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Reception vs Reseption
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your welcome event! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-cyan-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-cyan-700">
          <strong>&quot;Reception&quot;</strong> is the correct spelling. &quot;Reseption&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Reseption</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
            <h3 className="text-xl font-bold text-cyan-700 mb-3">✅ Correct: Reception</h3>
            <p className="text-cyan-600">This is the proper spelling that means &quot;a formal social gathering or welcome.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100">
            <h3 className="text-lg font-bold text-cyan-800 mb-3">📚 Correct Word</h3>
            <p className="text-cyan-700">
              <strong>Reception</strong> is a noun that refers to a formal social gathering, welcome event, or the act of receiving.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Reseption</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100">
            <h3 className="text-lg font-bold text-cyan-800 mb-3">🔍 Etymology</h3>
            <p className="text-cyan-700">
              From Latin <em>receptio</em>, meaning &quot;receiving.&quot; The &quot;c&quot; before &quot;ption&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-cyan-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
              <p className="text-cyan-700">The wedding <strong>reception</strong> was held at the hotel.</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
              <p className="text-cyan-700">The <strong>reception</strong> desk is located in the lobby.</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
              <p className="text-cyan-700">The <strong>reception</strong> of the new policy was mixed.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The wedding <strong>reseption</strong> was held at the hotel. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>reseption</strong> desk is located in the lobby. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>reseption</strong> of the new policy was mixed. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-cyan-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100">
              <h3 className="text-lg font-bold text-cyan-800 mb-3">🎯 Think &quot;Receive&quot;</h3>
              <p className="text-cyan-700">Remember that &quot;reception&quot; comes from &quot;receive&quot; - both have the &quot;ce&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100">
              <h3 className="text-lg font-bold text-cyan-800 mb-3">🔤 &quot;C&quot; Before &quot;P&quot;</h3>
              <p className="text-cyan-700">The &quot;c&quot; in &quot;reception&quot; comes before the &quot;p&quot; - think &quot;re&quot; + &quot;ception&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100">
              <h3 className="text-lg font-bold text-cyan-800 mb-3">📝 Break It Down</h3>
              <p className="text-cyan-700">Think: &quot;Re&quot; + &quot;ception&quot; = &quot;reception&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100">
              <h3 className="text-lg font-bold text-cyan-800 mb-3">🎨 Visual Association</h3>
              <p className="text-cyan-700">Picture the &quot;c&quot; as a welcome mat - it&apos;s essential for the &quot;reception&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-cyan-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cyan-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-cyan-600">• Wedding <strong>reception</strong></p>
              <p className="text-cyan-600">• <strong>Reception</strong> desk</p>
              <p className="text-cyan-600">• Warm <strong>reception</strong></p>
              <p className="text-cyan-600">• <strong>Reception</strong> area</p>
              <p className="text-cyan-600">• <strong>Reception</strong> room</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-cyan-600">• <strong>Noun:</strong> The reception was lovely</p>
              <p className="text-cyan-600">• <strong>Subject:</strong> Reception begins at 6 PM</p>
              <p className="text-cyan-600">• <strong>Object:</strong> We enjoyed the reception</p>
              <p className="text-cyan-600">• <strong>Possessive:</strong> The reception&apos;s timing</p>
              <p className="text-cyan-600">• <strong>Countable:</strong> Two receptions</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-cyan-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">Why do people misspell &quot;reception&quot; as &quot;reseption&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;se,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">Is &quot;reseption&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;reseption&quot; is never correct in formal or informal writing. It should always be spelled as &quot;reception.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">What&apos;s the difference between &quot;reception&quot; and &quot;party&quot;?</h3>
              <p className="text-gray-700">&quot;Reception&quot; is more formal and often refers to official or ceremonial gatherings, while &quot;party&quot; is more casual.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">Can &quot;reception&quot; be used as a verb?</h3>
              <p className="text-gray-700">No, &quot;reception&quot; is only a noun. The verb form is &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;receive&quot; - both words have the same &quot;ce&quot; pattern, and &quot;reception&quot; comes from &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">Is &quot;reception&quot; related to &quot;receptionist&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;receptionist&quot; comes from &quot;reception&quot; - both are related to receiving and welcoming people.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">What&apos;s the plural form of &quot;reception&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;receptions.&quot; For example: &quot;We attended two receptions last week.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">Can &quot;reception&quot; be used for things other than events?</h3>
              <p className="text-gray-700">Yes, &quot;reception&quot; can also refer to the quality of radio or TV signal reception, or how something is received by people.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">What&apos;s the origin of the word &quot;reception&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;receptio,&quot; meaning &quot;receiving&quot; or &quot;the act of receiving.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-cyan-500">
              <h3 className="text-lg font-bold text-cyan-800 mb-2">How common is the misspelling &quot;reseption&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Reception&quot;</strong> has a &quot;c&quot; before &quot;p&quot; - just like &quot;receive&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;reception&quot; follows the same pattern as &quot;receive,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-cyan-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipe-vs-recipie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recipie</a></p>
            <p><a href="/spelling/recipe-vs-recepie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recepie</a></p>
            <p><a href="/spelling/recipe-vs-receipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Receipe</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-cyan-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receipt-vs-reciept" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Reciept</a></p>
            <p><a href="/spelling/receive-vs-recieve" className="text-blue-700 hover:text-blue-900 underline">Receive vs Recieve</a></p>
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-cyan-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/etymology" className="text-blue-700 hover:text-blue-900 underline">Etymology</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
