import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reasons vs Resons - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reasons&quot; and &quot;resons&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReasonsVsResonsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Reasons vs Resons
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your reasons! Learn why the correct form needs that &quot;a&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-purple-700">
          <strong>&quot;Reasons&quot;</strong> is the correct spelling. &quot;Resons&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Resons</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-700 mb-3">✅ Correct: Reasons</h3>
            <p className="text-purple-600">This is the proper spelling that means &quot;explanations or justifications for something.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">📚 Correct Word</h3>
            <p className="text-purple-700">
              <strong>Reasons</strong> is the plural form of &quot;reason,&quot; meaning explanations or justifications for something.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Resons</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🔍 Etymology</h3>
            <p className="text-purple-700">
              From Latin <em>ratio</em>, meaning &quot;reckoning, reason.&quot; The &quot;a&quot; in &quot;reasons&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">There are many <strong>reasons</strong> to study hard.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">What are your <strong>reasons</strong> for leaving?</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">The <strong>reasons</strong> behind this decision are clear.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">There are many <strong>resons</strong> to study hard. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">What are your <strong>resons</strong> for leaving? <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>resons</strong> behind this decision are clear. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎯 Think &quot;Reason&quot;</h3>
              <p className="text-purple-700">Remember that &quot;reasons&quot; comes from &quot;reason&quot; - both have the &quot;ea&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🔤 &quot;EA&quot; Pattern</h3>
              <p className="text-purple-700">The &quot;ea&quot; in &quot;reasons&quot; is crucial - think &quot;re&quot; + &quot;asons&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">📝 Break It Down</h3>
              <p className="text-purple-700">Think: &quot;Re&quot; + &quot;asons&quot; = &quot;reasons&quot; - the &quot;a&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎨 Visual Association</h3>
              <p className="text-purple-700">Picture the &quot;a&quot; as a reason itself - it&apos;s essential for the &quot;reasons&quot;!</p>
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
              <p className="text-purple-600">• Good <strong>reasons</strong></p>
              <p className="text-purple-600">• Valid <strong>reasons</strong></p>
              <p className="text-purple-600">• Personal <strong>reasons</strong></p>
              <p className="text-purple-600">• Main <strong>reasons</strong></p>
              <p className="text-purple-600">• Logical <strong>reasons</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-purple-600">• <strong>Plural Noun:</strong> The reasons are clear</p>
              <p className="text-purple-600">• <strong>Subject:</strong> Reasons exist for this</p>
              <p className="text-purple-600">• <strong>Object:</strong> I understand the reasons</p>
              <p className="text-purple-600">• <strong>Possessive:</strong> The reasons&apos; validity</p>
              <p className="text-purple-600">• <strong>Countable:</strong> Three reasons</p>
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
              <h3 className="text-lg font-bold text-purple-800 mb-2">Why do people misspell &quot;reasons&quot; as &quot;resons&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ea&quot; sound can be heard as &quot;e,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;resons&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;resons&quot; is never correct in formal or informal writing. It should always be spelled as &quot;reasons.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the difference between &quot;reasons&quot; and &quot;reasoning&quot;?</h3>
              <p className="text-gray-700">&quot;Reasons&quot; are explanations or justifications, while &quot;reasoning&quot; is the process of thinking logically.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;reasons&quot; be used in singular form?</h3>
              <p className="text-gray-700">Yes, the singular form is &quot;reason.&quot; For example: &quot;What is the reason?&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;reason&quot; - both words have the same &quot;ea&quot; pattern, and &quot;reasons&quot; is the plural of &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;reasons&quot; related to &quot;reasonable&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;ratio,&quot; meaning &quot;reckoning&quot; or &quot;reason.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the base form of &quot;reasons&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;reason.&quot; For example: &quot;I reason that this is correct.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;reasons&quot; be used for things other than explanations?</h3>
              <p className="text-gray-700">Yes, &quot;reasons&quot; can refer to causes, motives, or any form of justification for actions or beliefs.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the origin of the word &quot;reasons&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;ratio,&quot; meaning &quot;reckoning&quot; or &quot;reason,&quot; with the English plural ending &quot;-s.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">How common is the misspelling &quot;resons&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the difference between &quot;reasons&quot; and &quot;excuses&quot;?</h3>
              <p className="text-gray-700">&quot;Reasons&quot; are legitimate explanations, while &quot;excuses&quot; are attempts to avoid responsibility.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;reasons&quot; be used in questions?</h3>
              <p className="text-gray-700">Yes, &quot;reasons&quot; can be used in questions like &quot;What are your reasons?&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Reasons&quot;</strong> has an &quot;a&quot; - just like &quot;reason&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ea&quot; in &quot;reasons&quot; follows the same pattern as &quot;reason,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reasonable-vs-resonable" className="text-blue-700 hover:text-blue-900 underline">Reasonable vs Resonable</a></p>
            <p><a href="/spelling/reason-vs-reson" className="text-blue-700 hover:text-blue-900 underline">Reason vs Reson</a></p>
            <p><a href="/spelling/realm-vs-relm" className="text-blue-700 hover:text-blue-900 underline">Realm vs Relm</a></p>
            <p><a href="/spelling/really-vs-rilly" className="text-blue-700 hover:text-blue-900 underline">Really vs Rilly</a></p>
            <p><a href="/spelling/rebel-vs-rebell" className="text-blue-700 hover:text-blue-900 underline">Rebel vs Rebell</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recede-vs-receed" className="text-blue-700 hover:text-blue-900 underline">Recede vs Receed</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/plural-forms" className="text-blue-700 hover:text-blue-900 underline">Plural Forms</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
