import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recess vs Reces - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recess&quot; and &quot;reces&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecessVsRecesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Recess vs Reces
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your break time! Learn why the correct form needs that final &quot;s&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-orange-700">
          <strong>&quot;Recess&quot;</strong> is the correct spelling. &quot;Reces&quot; is missing the final &quot;s&quot; and is incorrect.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Reces</h3>
            <p className="text-red-600">This spelling is incomplete and missing the final &quot;s&quot; that makes the word complete.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-3">✅ Correct: Recess</h3>
            <p className="text-orange-600">This is the complete spelling that means &quot;a break or pause from work or activity.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
            <h3 className="text-lg font-bold text-orange-800 mb-3">📚 Correct Word</h3>
            <p className="text-orange-700">
              <strong>Recess</strong> is a complete noun that refers to a break or pause from work, school, or other activities.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Reces</strong> is an incomplete spelling that often occurs due to typing errors or forgetting the final letter.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
            <h3 className="text-lg font-bold text-orange-800 mb-3">🔍 Etymology</h3>
            <p className="text-orange-700">
              From Latin <em>recessus</em>, meaning &quot;a going back, retreat.&quot; The final &quot;s&quot; is essential for the complete word.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-700">The children went outside for <strong>recess</strong>.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-700">Congress is in <strong>recess</strong> until next month.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-700">The judge called for a <strong>recess</strong> in the trial.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The children went outside for <strong>reces</strong>. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Congress is in <strong>reces</strong> until next month. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The judge called for a <strong>reces</strong> in the trial. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">🎯 Complete the Word</h3>
              <p className="text-orange-700">Remember that &quot;recess&quot; needs to be &quot;complete&quot; - it needs that final &quot;s&quot; to be whole!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">🔤 Sound It Out</h3>
              <p className="text-orange-700">When you say &quot;recess,&quot; you can hear the &quot;s&quot; sound at the end - make sure to include it in writing!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">📝 Visual Check</h3>
              <p className="text-orange-700">Always check that your &quot;recess&quot; has both the &quot;ce&quot; in the middle and the &quot;s&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">🎨 Pattern Recognition</h3>
              <p className="text-orange-700">Many English words ending in &quot;-ess&quot; need that final &quot;s&quot; - like &quot;success,&quot; &quot;process,&quot; and &quot;recess.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-orange-600">• School <strong>recess</strong></p>
              <p className="text-orange-600">• Lunch <strong>recess</strong></p>
              <p className="text-orange-600">• Congressional <strong>recess</strong></p>
              <p className="text-orange-600">• Court <strong>recess</strong></p>
              <p className="text-orange-600">• Summer <strong>recess</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-orange-600">• <strong>Noun:</strong> The recess was fun</p>
              <p className="text-orange-600">• <strong>Subject:</strong> Recess begins at 10:30</p>
              <p className="text-orange-600">• <strong>Object:</strong> We enjoyed recess</p>
              <p className="text-orange-600">• <strong>Possessive:</strong> The recess&apos;s duration</p>
              <p className="text-orange-600">• <strong>Countable:</strong> Two recesses per day</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Why do people misspell &quot;recess&quot; as &quot;reces&quot;?</h3>
              <p className="text-gray-700">This often happens due to typing errors or simply forgetting to include the final &quot;s&quot; when writing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Is &quot;reces&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;reces&quot; is never correct. It&apos;s an incomplete spelling that should always be written as &quot;recess.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the difference between &quot;recess&quot; and &quot;break&quot;?</h3>
              <p className="text-gray-700">&quot;Recess&quot; is more formal and often used in educational or official contexts, while &quot;break&quot; is more general.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Can &quot;recess&quot; be used as a verb?</h3>
              <p className="text-gray-700">Yes, &quot;recess&quot; can be used as a verb meaning &quot;to take a recess&quot; or &quot;to adjourn.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">How do I remember to include the final &quot;s&quot;?</h3>
              <p className="text-gray-700">Think of &quot;recess&quot; as needing to be &quot;complete&quot; - it needs both the &quot;ce&quot; and the final &quot;s&quot; to be whole!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Is &quot;recess&quot; related to &quot;recede&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;recedere,&quot; meaning &quot;to go back&quot; or &quot;to withdraw.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the plural form of &quot;recess&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;recesses.&quot; For example: &quot;The school has two recesses per day.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Can &quot;recess&quot; be used for things other than breaks?</h3>
              <p className="text-gray-700">Yes, &quot;recess&quot; can also refer to a hollow or indentation in a surface, like a &quot;window recess.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the origin of the word &quot;recess&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recessus,&quot; meaning &quot;a going back, retreat, or withdrawal.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">How common is the misspelling &quot;reces&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Recess&quot;</strong> needs both the &quot;ce&quot; and the final &quot;s&quot; to be complete!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;recess&quot; as needing to be &quot;complete&quot; - it needs that final &quot;s&quot; to be whole, just like other words ending in &quot;-ess.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipe-vs-recipie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recipie</a></p>
            <p><a href="/spelling/recipe-vs-recepie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recepie</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/success-vs-succes" className="text-blue-700 hover:text-blue-900 underline">Success vs Succes</a></p>
            <p><a href="/spelling/process-vs-proces" className="text-blue-700 hover:text-blue-900 underline">Process vs Proces</a></p>
            <p><a href="/spelling/access-vs-acces" className="text-blue-700 hover:text-blue-900 underline">Access vs Acces</a></p>
            <p><a href="/spelling/address-vs-addres" className="text-blue-700 hover:text-blue-900 underline">Address vs Addres</a></p>
            <p><a href="/spelling/express-vs-expres" className="text-blue-700 hover:text-blue-900 underline">Express vs Expres</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
            <p><a href="/grammar/word-endings" className="text-blue-700 hover:text-blue-900 underline">Word Endings</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/complete-words" className="text-blue-700 hover:text-blue-900 underline">Complete Words</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
