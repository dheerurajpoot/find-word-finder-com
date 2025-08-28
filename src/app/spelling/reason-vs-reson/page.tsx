import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reason vs Reson - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reason&quot; and &quot;reson&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReasonVsResonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Reason vs Reson
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your reason! Learn why the correct form needs that &quot;a&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-teal-700">
          <strong>&quot;Reason&quot;</strong> is the correct spelling. &quot;Reson&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Reson</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500">
            <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Correct: Reason</h3>
            <p className="text-teal-600">This is the proper spelling that means &quot;a cause, explanation, or justification for something.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">📚 Correct Word</h3>
            <p className="text-teal-700">
              <strong>Reason</strong> is a noun that refers to a cause, explanation, or justification for something.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Reson</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">🔍 Etymology</h3>
            <p className="text-teal-700">
              From Latin <em>ratio</em>, meaning &quot;reckoning, reason.&quot; The &quot;a&quot; in &quot;reason&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-teal-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">What is the <strong>reason</strong> for your decision?</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">There&apos;s no <strong>reason</strong> to worry.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">The <strong>reason</strong> behind this is clear.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">What is the <strong>reson</strong> for your decision? <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">There&apos;s no <strong>reson</strong> to worry. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>reson</strong> behind this is clear. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎯 Think &quot;Reason&quot;</h3>
              <p className="text-teal-700">Remember that &quot;reason&quot; has the &quot;ea&quot; pattern - it&apos;s the base form!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🔤 &quot;EA&quot; Pattern</h3>
              <p className="text-teal-700">The &quot;ea&quot; in &quot;reason&quot; is crucial - think &quot;re&quot; + &quot;ason&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">📝 Break It Down</h3>
              <p className="text-teal-700">Think: &quot;Re&quot; + &quot;ason&quot; = &quot;reason&quot; - the &quot;a&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎨 Visual Association</h3>
              <p className="text-teal-700">Picture the &quot;a&quot; as a reason itself - it&apos;s essential for the &quot;reason&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-teal-600">• Good <strong>reason</strong></p>
              <p className="text-teal-600">• Valid <strong>reason</strong></p>
              <p className="text-teal-600">• Personal <strong>reason</strong></p>
              <p className="text-teal-600">• Main <strong>reason</strong></p>
              <p className="text-teal-600">• Logical <strong>reason</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-teal-600">• <strong>Noun:</strong> The reason is clear</p>
              <p className="text-teal-600">• <strong>Subject:</strong> Reason exists for this</p>
              <p className="text-teal-600">• <strong>Object:</strong> I understand the reason</p>
              <p className="text-teal-600">• <strong>Possessive:</strong> The reason&apos;s validity</p>
              <p className="text-teal-600">• <strong>Countable:</strong> One reason</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Why do people misspell &quot;reason&quot; as &quot;reson&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ea&quot; sound can be heard as &quot;e,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;reson&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;reson&quot; is never correct in formal or informal writing. It should always be spelled as &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;reason&quot; and &quot;reasoning&quot;?</h3>
              <p className="text-gray-700">&quot;Reason&quot; is a noun meaning a cause or explanation, while &quot;reasoning&quot; is the process of thinking logically.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;reason&quot; be used as a verb?</h3>
              <p className="text-gray-700">Yes, &quot;reason&quot; can be used as a verb meaning to think logically or to persuade through logic.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of the &quot;ea&quot; pattern - &quot;reason&quot; has the same &quot;ea&quot; as &quot;season&quot; and &quot;treason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;reason&quot; related to &quot;reasonable&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;ratio,&quot; meaning &quot;reckoning&quot; or &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the plural form of &quot;reason&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;reasons.&quot; For example: &quot;There are many reasons.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;reason&quot; be used for things other than explanations?</h3>
              <p className="text-gray-700">Yes, &quot;reason&quot; can refer to causes, motives, or any form of justification for actions or beliefs.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the origin of the word &quot;reason&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;ratio,&quot; meaning &quot;reckoning&quot; or &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How common is the misspelling &quot;reson&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;reason&quot; and &quot;excuse&quot;?</h3>
              <p className="text-gray-700">&quot;Reason&quot; is a legitimate explanation, while &quot;excuse&quot; is an attempt to avoid responsibility.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;reason&quot; be used in questions?</h3>
              <p className="text-gray-700">Yes, &quot;reason&quot; can be used in questions like &quot;What is the reason?&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Reason&quot;</strong> has an &quot;a&quot; - it&apos;s essential!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ea&quot; in &quot;reason&quot; follows the same pattern as other words like &quot;season&quot; and &quot;treason.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reasons-vs-resons" className="text-blue-700 hover:text-blue-900 underline">Reasons vs Resons</a></p>
            <p><a href="/spelling/reasonable-vs-resonable" className="text-blue-700 hover:text-blue-900 underline">Reasonable vs Resonable</a></p>
            <p><a href="/spelling/realm-vs-relm" className="text-blue-700 hover:text-blue-900 underline">Realm vs Relm</a></p>
            <p><a href="/spelling/really-vs-rilly" className="text-blue-700 hover:text-blue-900 underline">Really vs Rilly</a></p>
            <p><a href="/spelling/rebel-vs-rebell" className="text-blue-700 hover:text-blue-900 underline">Rebel vs Rebell</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recede-vs-receed" className="text-blue-700 hover:text-blue-900 underline">Recede vs Receed</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">📚 Learned Grammar</h3>
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
