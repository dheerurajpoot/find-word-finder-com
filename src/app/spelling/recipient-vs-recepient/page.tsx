import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recipient vs Recepient - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recipient&quot; and &quot;recepient&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecipientVsRecepientPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Recipient vs Recepient
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell who receives! Learn the correct spelling of this important word for formal communication.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-purple-700">
          <strong>&quot;Recipient&quot;</strong> is the correct spelling. &quot;Recepient&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Recepient</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-700 mb-3">✅ Correct: Recipient</h3>
            <p className="text-purple-600">This is the proper spelling that means &quot;a person who receives something.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-pink-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">📚 Correct Word</h3>
            <p className="text-purple-700">
              <strong>Recipient</strong> is a noun that refers to a person who receives something, such as an award, letter, or gift.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Recepient</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-pink-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🔍 Etymology</h3>
            <p className="text-purple-700">
              From Latin <em>recipiens</em>, meaning &quot;receiving.&quot; The &quot;i&quot; before &quot;ent&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">The <strong>recipient</strong> of the award was very grateful.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">Please confirm the <strong>recipient</strong> of this package.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">The letter was addressed to the wrong <strong>recipient</strong>.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>recepient</strong> of the award was very grateful. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Please confirm the <strong>recepient</strong> of this package. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The letter was addressed to the wrong <strong>recepient</strong>. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-pink-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎯 Think &quot;Receive&quot;</h3>
              <p className="text-purple-700">Remember that &quot;recipient&quot; comes from &quot;receive&quot; - both have the &quot;ei&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-pink-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🔤 &quot;I&quot; Before &quot;E&quot;</h3>
              <p className="text-purple-700">Follow the rule: &quot;I&quot; before &quot;E&quot; except after &quot;C&quot; - &quot;recipient&quot; follows this pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-pink-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">📝 Break It Down</h3>
              <p className="text-purple-700">Think: &quot;Re&quot; + &quot;cip&quot; + &quot;ient&quot; = &quot;recipient&quot; - the &quot;i&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-pink-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎨 Visual Association</h3>
              <p className="text-purple-700">Picture the &quot;i&quot; as a person receiving something - it&apos;s the &quot;recipient&quot; of the word!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-purple-600">• Award <strong>recipient</strong></p>
              <p className="text-purple-600">• Letter <strong>recipient</strong></p>
              <p className="text-purple-600">• Package <strong>recipient</strong></p>
              <p className="text-purple-600">• Email <strong>recipient</strong></p>
              <p className="text-purple-600">• Gift <strong>recipient</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-purple-600">• <strong>Noun:</strong> The recipient was happy</p>
              <p className="text-purple-600">• <strong>Subject:</strong> The recipient received the package</p>
              <p className="text-purple-600">• <strong>Object:</strong> We found the recipient</p>
              <p className="text-purple-600">• <strong>Possessive:</strong> The recipient&apos;s address</p>
              <p className="text-purple-600">• <strong>Plural:</strong> All recipients were notified</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Why do people misspell &quot;recipient&quot; as &quot;recepient&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ei&quot; sound can be heard as &quot;ee,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;recepient&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;recepient&quot; is never correct in formal or informal writing. It should always be spelled as &quot;recipient.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the difference between &quot;recipient&quot; and &quot;receiver&quot;?</h3>
              <p className="text-gray-700">&quot;Recipient&quot; is more formal and often used in official contexts, while &quot;receiver&quot; is more general and can refer to both people and devices.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;recipient&quot; be used as a verb?</h3>
              <p className="text-gray-700">No, &quot;recipient&quot; is only a noun. The verb form is &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;receive&quot; - both words have the same &quot;ei&quot; pattern, and &quot;recipient&quot; comes from &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;recipient&quot; related to &quot;recipe&quot;?</h3>
              <p className="text-gray-700">No, they have different origins. &quot;Recipient&quot; comes from Latin &quot;recipiens,&quot; while &quot;recipe&quot; comes from Latin &quot;recipere.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the plural form of &quot;recipient&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;recipients.&quot; For example: &quot;All recipients were notified of the change.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;recipient&quot; be used for things, not just people?</h3>
              <p className="text-gray-700">While primarily used for people, &quot;recipient&quot; can occasionally refer to organizations or entities that receive something.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the origin of the word &quot;recipient&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recipiens,&quot; the present participle of &quot;recipere,&quot; meaning &quot;to receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">How common is the misspelling &quot;recepient&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Recipient&quot;</strong> has an &quot;i&quot; before &quot;e&quot; - just like &quot;receive&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ei&quot; in &quot;recipient&quot; follows the same pattern as &quot;receive,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recipes-vs-recipies" className="text-blue-700 hover:text-blue-900 underline">Recipes vs Recipies</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipe-vs-recipie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recipie</a></p>
            <p><a href="/spelling/recipe-vs-recepie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recepie</a></p>
            <p><a href="/spelling/recipe-vs-receipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Receipe</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/receipt-vs-reciept" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Reciept</a></p>
            <p><a href="/spelling/receive-vs-recieve" className="text-blue-700 hover:text-blue-900 underline">Receive vs Recieve</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/i-before-e" className="text-blue-700 hover:text-blue-900 underline">I Before E Rule</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
