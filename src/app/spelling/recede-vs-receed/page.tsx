import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recede vs Receed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recede&quot; and &quot;receed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecedeVsReceedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Recede vs Receed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your recede! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-amber-700">
          <strong>&quot;Recede&quot;</strong> is the correct spelling. &quot;Receed&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Receed</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Correct: Recede</h3>
            <p className="text-amber-600">This is the proper spelling that means &quot;to move back or away; to withdraw.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">📚 Correct Word</h3>
            <p className="text-amber-700">
              <strong>Recede</strong> is a verb that means to move back or away, to withdraw, or to become more distant.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Receed</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🔍 Etymology</h3>
            <p className="text-amber-700">
              From Latin <em>recedere</em>, meaning &quot;to go back.&quot; The &quot;c&quot; before &quot;eed&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">The tide will <strong>recede</strong> at sunset.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">His hairline began to <strong>recede</strong> in his thirties.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">The floodwaters slowly <strong>receded</strong> from the town.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The tide will <strong>receed</strong> at sunset. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">His hairline began to <strong>receed</strong> in his thirties. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The floodwaters slowly <strong>reeceded</strong> from the town. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎯 Think &quot;Recede&quot;</h3>
              <p className="text-amber-700">Remember that &quot;recede&quot; has the &quot;ce&quot; pattern - it&apos;s the base form!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🔤 &quot;C&quot; Before &quot;E&quot;</h3>
              <p className="text-amber-700">The &quot;c&quot; in &quot;recede&quot; comes before the &quot;e&quot; - think &quot;re&quot; + &quot;cede&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">📝 Break It Down</h3>
              <p className="text-amber-700">Think: &quot;Re&quot; + &quot;cede&quot; = &quot;recede&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎨 Visual Association</h3>
              <p className="text-amber-700">Picture the &quot;c&quot; as a receding wave - it&apos;s essential for the &quot;recede&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-amber-600">• <strong>Recede</strong> from view</p>
              <p className="text-amber-600">• <strong>Recede</strong> into background</p>
              <p className="text-amber-600">• <strong>Recede</strong> from memory</p>
              <p className="text-amber-600">• <strong>Recede</strong> from consciousness</p>
              <p className="text-amber-600">• <strong>Recede</strong> from prominence</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-amber-600">• <strong>Base Form:</strong> I recede</p>
              <p className="text-amber-600">• <strong>Present Tense:</strong> He/she recedes</p>
              <p className="text-amber-600">• <strong>Infinitive:</strong> To recede</p>
              <p className="text-amber-600">• <strong>Intransitive Verb:</strong> Recede naturally</p>
              <p className="text-amber-600">• <strong>Regular Verb:</strong> Follows -ed rule</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Why do people misspell &quot;recede&quot; as &quot;receed&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;cee,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;receed&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;receed&quot; is never correct in formal or informal writing. It should always be spelled as &quot;recede.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;recede&quot; and &quot;retreat&quot;?</h3>
              <p className="text-gray-700">&quot;Recede&quot; implies gradual movement away, while &quot;retreat&quot; suggests more deliberate withdrawal or backing away.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;recede&quot; be used in past tense?</h3>
              <p className="text-gray-700">Yes, &quot;recede&quot; can be used in past tense as &quot;receded.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of the &quot;ce&quot; pattern - &quot;recede&quot; has the same &quot;ce&quot; as &quot;recession&quot; and &quot;receding.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;recede&quot; related to &quot;recession&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;recedere,&quot; meaning &quot;to go back&quot; or &quot;to withdraw.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the third person singular form of &quot;recede&quot;?</h3>
              <p className="text-gray-700">The third person singular form is &quot;recedes.&quot; For example: &quot;The tide recedes naturally.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;recede&quot; be used for things other than physical movement?</h3>
              <p className="text-gray-700">Yes, &quot;recede&quot; can refer to abstract concepts like receding memories, receding influence, or receding popularity.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the origin of the word &quot;recede&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recedere,&quot; meaning &quot;to go back&quot; or &quot;to withdraw.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How common is the misspelling &quot;receed&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;recede&quot; and &quot;receding&quot;?</h3>
              <p className="text-gray-700">&quot;Recede&quot; is the base form verb, while &quot;receding&quot; is the present participle or gerund form.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;recede&quot; be used in questions?</h3>
              <p className="text-gray-700">Yes, &quot;recede&quot; can be used in questions like &quot;When will the tide recede?&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Recede&quot;</strong> has a &quot;c&quot; before &quot;e&quot; - it&apos;s the base form!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;recede&quot; follows the same pattern as &quot;recession&quot; and &quot;receding,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/rebel-vs-rebell" className="text-blue-700 hover:text-blue-900 underline">Rebel vs Rebell</a></p>
            <p><a href="/spelling/reasons-vs-resons" className="text-blue-700 hover:text-blue-900 underline">Reasons vs Resons</a></p>
            <p><a href="/spelling/reasonable-vs-resonable" className="text-blue-700 hover:text-blue-900 underline">Reasonable vs Resonable</a></p>
            <p><a href="/spelling/reason-vs-reson" className="text-blue-700 hover:text-blue-900 underline">Reason vs Reson</a></p>
            <p><a href="/spelling/realm-vs-relm" className="text-blue-700 hover:text-blue-900 underline">Realm vs Relm</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receding-vs-receeding" className="text-blue-700 hover:text-blue-900 underline">Receding vs Receeding</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">📚 Learned Grammar</h3>
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
