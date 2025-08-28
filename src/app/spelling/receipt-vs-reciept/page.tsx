import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Receipt vs Reciept - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;receipt&quot; and &quot;reciept&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReceiptVsRecieptPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Receipt vs Reciept
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your receipt! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-rose-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-rose-700">
          <strong>&quot;Receipt&quot;</strong> is the correct spelling. &quot;Reciept&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Reciept</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500">
            <h3 className="text-xl font-bold text-rose-700 mb-3">✅ Correct: Receipt</h3>
            <p className="text-rose-600">This is the proper spelling that means &quot;a written acknowledgment of something received.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
            <h3 className="text-lg font-bold text-rose-800 mb-3">📚 Correct Word</h3>
            <p className="text-rose-700">
              <strong>Receipt</strong> is a noun that refers to a written acknowledgment of something received, especially a payment.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Reciept</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
            <h3 className="text-lg font-bold text-rose-800 mb-3">🔍 Etymology</h3>
            <p className="text-rose-700">
              From Latin <em>recipere</em>, meaning &quot;to take.&quot; The &quot;c&quot; before &quot;iept&quot; is essential for the correct spelling.
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
              <p className="text-rose-700">Please keep your <strong>receipt</strong> for returns.</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">The <strong>receipt</strong> shows the total amount paid.</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">I need a <strong>receipt</strong> for my expense report.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Please keep your <strong>reciept</strong> for returns. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>reciept</strong> shows the total amount paid. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I need a <strong>reciept</strong> for my expense report. <span className="text-red-500">(Incorrect)</span></p>
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
              <h3 className="text-lg font-bold text-rose-800 mb-3">🎯 Think &quot;Receive&quot;</h3>
              <p className="text-rose-700">Remember that &quot;receipt&quot; comes from &quot;receive&quot; - both have the &quot;ce&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🔤 &quot;C&quot; Before &quot;I&quot;</h3>
              <p className="text-rose-700">The &quot;c&quot; in &quot;receipt&quot; comes before the &quot;i&quot; - think &quot;re&quot; + &quot;ceipt&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">📝 Break It Down</h3>
              <p className="text-rose-700">Think: &quot;Re&quot; + &quot;ceipt&quot; = &quot;receipt&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🎨 Visual Association</h3>
              <p className="text-rose-700">Picture the &quot;c&quot; as a receipt paper - it&apos;s essential for the &quot;receipt&quot;!</p>
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
              <p className="text-rose-600">• Sales <strong>receipt</strong></p>
              <p className="text-rose-600">• Payment <strong>receipt</strong></p>
              <p className="text-rose-600">• Return <strong>receipt</strong></p>
              <p className="text-rose-600">• Expense <strong>receipt</strong></p>
              <p className="text-rose-600">• Digital <strong>receipt</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-rose-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-rose-600">• <strong>Noun:</strong> The receipt is here</p>
              <p className="text-rose-600">• <strong>Subject:</strong> The receipt shows details</p>
              <p className="text-rose-600">• <strong>Object:</strong> I found the receipt</p>
              <p className="text-rose-600">• <strong>Possessive:</strong> The receipt&apos;s date</p>
              <p className="text-rose-600">• <strong>Countable:</strong> Two receipts</p>
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
              <h3 className="text-lg font-bold text-rose-800 mb-2">Why do people misspell &quot;receipt&quot; as &quot;reciept&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;cie,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;reciept&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;reciept&quot; is never correct in formal or informal writing. It should always be spelled as &quot;receipt.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;receipt&quot; and &quot;receive&quot;?</h3>
              <p className="text-gray-700">&quot;Receipt&quot; is a noun meaning proof of purchase, while &quot;receive&quot; is a verb meaning to get something.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;receipt&quot; be used as a verb?</h3>
              <p className="text-gray-700">No, &quot;receipt&quot; is only a noun. The verb form is &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;receive&quot; - both words have the same &quot;ce&quot; pattern, and &quot;receipt&quot; comes from &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;receipt&quot; related to &quot;reception&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the plural form of &quot;receipt&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;receipts.&quot; For example: &quot;I have many receipts.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;receipt&quot; be used for things other than purchases?</h3>
              <p className="text-gray-700">Yes, &quot;receipt&quot; can refer to any written acknowledgment of something received, not just purchases.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the origin of the word &quot;receipt&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive,&quot; with the English noun suffix &quot;-t.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">How common is the misspelling &quot;reciept&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;receipt&quot; and &quot;invoice&quot;?</h3>
              <p className="text-gray-700">&quot;Receipt&quot; is proof of payment already made, while &quot;invoice&quot; is a request for payment.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;receipt&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;receipt&quot; is commonly used in business for expense tracking, tax purposes, and proof of transactions.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Receipt&quot;</strong> has a &quot;c&quot; before &quot;i&quot; - just like &quot;receive&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;receipt&quot; follows the same pattern as &quot;receive,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiver-vs-reciver" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciver</a></p>
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
            <p><a href="/spelling/received-vs-recived" className="text-blue-700 hover:text-blue-900 underline">Received vs Recived</a></p>
            <p><a href="/spelling/received-vs-recieved" className="text-blue-700 hover:text-blue-900 underline">Received vs Recieved</a></p>
            <p><a href="/spelling/receives-vs-recieves" className="text-blue-700 hover:text-blue-900 underline">Receives vs Recieves</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
            <p><a href="/spelling/receipt-vs-recipt" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Recipt</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/business-vocabulary" className="text-blue-700 hover:text-blue-900 underline">Business Vocabulary</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
