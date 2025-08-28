import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Receive vs Recive - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;receive&quot; and &quot;recive&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReceiveVsRecivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Receive vs Recive
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your receive! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-lime-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-lime-700">
          <strong>&quot;Receive&quot;</strong> is the correct spelling. &quot;Recive&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Recive</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500">
            <h3 className="text-xl font-bold text-lime-700 mb-3">✅ Correct: Receive</h3>
            <p className="text-lime-600">This is the proper spelling that means &quot;to get, accept, or welcome something.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
            <h3 className="text-lg font-bold text-lime-800 mb-3">📚 Correct Word</h3>
            <p className="text-lime-700">
              <strong>Receive</strong> is a verb that means to get, accept, or welcome something.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Recive</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
            <h3 className="text-lg font-bold text-lime-800 mb-3">🔍 Etymology</h3>
            <p className="text-lime-700">
              From Latin <em>recipere</em>, meaning &quot;to take.&quot; The &quot;c&quot; before &quot;ive&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">I <strong>receive</strong> packages daily.</p>
            </div>
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">She will <strong>receive</strong> the award tomorrow.</p>
            </div>
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">The team <strong>receives</strong> feedback regularly.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I <strong>recive</strong> packages daily. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She will <strong>recive</strong> the award tomorrow. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The team <strong>recives</strong> feedback regularly. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-lime-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🎯 Think &quot;Receive&quot;</h3>
              <p className="text-lime-700">Remember that &quot;receive&quot; has the &quot;ce&quot; pattern - it&apos;s the base form!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🔤 &quot;C&quot; Before &quot;I&quot;</h3>
              <p className="text-lime-700">The &quot;c&quot; in &quot;receive&quot; comes before the &quot;i&quot; - think &quot;re&quot; + &quot;ceive&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">📝 Break It Down</h3>
              <p className="text-lime-700">Think: &quot;Re&quot; + &quot;ceive&quot; = &quot;receive&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🎨 Visual Association</h3>
              <p className="text-lime-700">Picture the &quot;c&quot; as a receiving box - it&apos;s essential for the &quot;receive&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-lime-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-lime-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-lime-600">• <strong>Receive</strong> support</p>
              <p className="text-lime-600">• <strong>Receive</strong> feedback</p>
              <p className="text-lime-600">• <strong>Receive</strong> recognition</p>
              <p className="text-lime-600">• <strong>Receive</strong> approval</p>
              <p className="text-lime-600">• <strong>Receive</strong> attention</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-lime-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-lime-600">• <strong>Base Form:</strong> I receive</p>
              <p className="text-lime-600">• <strong>Present Tense:</strong> He/she receives</p>
              <p className="text-lime-600">• <strong>Infinitive:</strong> To receive</p>
              <p className="text-lime-600">• <strong>Transitive Verb:</strong> Receive something</p>
              <p className="text-lime-600">• <strong>Regular Verb:</strong> Follows -ed rule</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-lime-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Why do people misspell &quot;receive&quot; as &quot;recive&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;ce,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;recive&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;recive&quot; is never correct in formal or informal writing. It should always be spelled as &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;receive&quot; and &quot;receipt&quot;?</h3>
              <p className="text-gray-700">&quot;Receive&quot; is a verb meaning to get something, while &quot;receipt&quot; is a noun meaning proof of purchase.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;receive&quot; be used in past tense?</h3>
              <p className="text-gray-700">Yes, &quot;receive&quot; can be used in past tense as &quot;received.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of the &quot;ce&quot; pattern - &quot;receive&quot; has the same &quot;ce&quot; as &quot;reception&quot; and &quot;receiver.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;receive&quot; related to &quot;reception&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the third person singular form of &quot;receive&quot;?</h3>
              <p className="text-gray-700">The third person singular form is &quot;receives.&quot; For example: &quot;He receives packages daily.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;receive&quot; be used for things other than objects?</h3>
              <p className="text-gray-700">Yes, &quot;receive&quot; can refer to getting information, signals, guests, or any form of acceptance or welcome.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the origin of the word &quot;receive&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">How common is the misspelling &quot;recive&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;receive&quot; and &quot;receiving&quot;?</h3>
              <p className="text-gray-700">&quot;Receive&quot; is the base form verb, while &quot;receiving&quot; is the present participle or gerund form.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;receive&quot; be used in questions?</h3>
              <p className="text-gray-700">Yes, &quot;receive&quot; can be used in questions like &quot;Do you receive packages daily?&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Receive&quot;</strong> has a &quot;c&quot; before &quot;i&quot; - it&apos;s the base form!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;receive&quot; follows the same pattern as &quot;reception&quot; and &quot;receiver,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiver-vs-reciver" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciver</a></p>
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
            <p><a href="/spelling/received-vs-recived" className="text-blue-700 hover:text-blue-900 underline">Received vs Recived</a></p>
            <p><a href="/spelling/received-vs-recieved" className="text-blue-700 hover:text-blue-900 underline">Received vs Recieved</a></p>
            <p><a href="/spelling/receives-vs-recieves" className="text-blue-700 hover:text-blue-900 underline">Receives vs Recieves</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
            <p><a href="/spelling/receipt-vs-recipt" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Recipt</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/base-forms" className="text-blue-700 hover:text-blue-900 underline">Base Forms</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
