import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rebel vs Rebell - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rebel&quot; and &quot;rebell&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RebelVsRebellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
          Rebel vs Rebell
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your rebel! Learn why the correct form doesn&apos;t need a double &quot;l&quot;.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-emerald-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-emerald-700">
          <strong>&quot;Rebel&quot;</strong> is the correct spelling. &quot;Rebell&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Rebell</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-l-4 border-emerald-500">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">✅ Correct: Rebel</h3>
            <p className="text-emerald-600">This is the proper spelling that means &quot;a person who resists authority or convention.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-emerald-100 to-green-100">
            <h3 className="text-lg font-bold text-emerald-800 mb-3">📚 Correct Word</h3>
            <p className="text-emerald-700">
              <strong>Rebel</strong> is a noun that refers to a person who resists authority, control, or convention.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Rebell</strong> is a misspelling that often occurs due to confusion with other words that have double &quot;l&quot;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-emerald-100 to-green-100">
            <h3 className="text-lg font-bold text-emerald-800 mb-3">🔍 Etymology</h3>
            <p className="text-emerald-700">
              From Latin <em>rebellis</em>, meaning &quot;waging war again.&quot; The word has only one &quot;l&quot; in English.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="text-emerald-700">He was a <strong>rebel</strong> against the system.</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="text-emerald-700">The <strong>rebel</strong> forces fought for freedom.</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="text-emerald-700">She was a fashion <strong>rebel</strong> in her youth.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He was a <strong>rebell</strong> against the system. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>rebell</strong> forces fought for freedom. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She was a fashion <strong>rebell</strong> in her youth. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-emerald-100 to-green-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-3">🎯 Think &quot;Rebel&quot;</h3>
              <p className="text-emerald-700">Remember that &quot;rebel&quot; has only one &quot;l&quot; - it&apos;s short and simple!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-emerald-100 to-green-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-3">🔤 Single &quot;L&quot;</h3>
              <p className="text-emerald-700">The word &quot;rebel&quot; has only one &quot;l&quot; - think &quot;re&quot; + &quot;bel&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-emerald-100 to-green-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-3">📝 Break It Down</h3>
              <p className="text-emerald-700">Think: &quot;Re&quot; + &quot;bel&quot; = &quot;rebel&quot; - only one &quot;l&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-emerald-100 to-green-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-3">🎨 Visual Association</h3>
              <p className="text-emerald-700">Picture a rebel as someone who breaks rules - just like breaking the double &quot;l&quot; rule!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-emerald-600">• Teenage <strong>rebel</strong></p>
              <p className="text-emerald-600">• <strong>Rebel</strong> leader</p>
              <p className="text-emerald-600">• <strong>Rebel</strong> cause</p>
              <p className="text-emerald-600">• <strong>Rebel</strong> spirit</p>
              <p className="text-emerald-600">• <strong>Rebel</strong> army</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-emerald-600">• <strong>Noun:</strong> The rebel is here</p>
              <p className="text-emerald-600">• <strong>Subject:</strong> The rebel fought</p>
              <p className="text-emerald-600">• <strong>Object:</strong> I saw the rebel</p>
              <p className="text-emerald-600">• <strong>Possessive:</strong> The rebel&apos;s cause</p>
              <p className="text-emerald-600">• <strong>Countable:</strong> Two rebels</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Why do people misspell &quot;rebel&quot; as &quot;rebell&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion with other words that have double &quot;l&quot; like &quot;bell&quot; or &quot;yell.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Is &quot;rebell&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;rebell&quot; is never correct in formal or informal writing. It should always be spelled as &quot;rebel.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">What&apos;s the difference between &quot;rebel&quot; and &quot;rebellion&quot;?</h3>
              <p className="text-gray-700">&quot;Rebel&quot; is a noun meaning a person who resists, while &quot;rebellion&quot; is the act or process of rebelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Can &quot;rebel&quot; be used as a verb?</h3>
              <p className="text-gray-700">Yes, &quot;rebel&quot; can be used as a verb meaning to resist authority or convention.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;rebel&quot; as having only one &quot;l&quot; - it&apos;s short and simple, just like a rebel&apos;s nature!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Is &quot;rebel&quot; related to &quot;rebellion&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;rebellis,&quot; meaning &quot;waging war again.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">What&apos;s the plural form of &quot;rebel&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;rebels.&quot; For example: &quot;The rebels fought together.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Can &quot;rebel&quot; be used for things other than people?</h3>
              <p className="text-gray-700">Yes, &quot;rebel&quot; can refer to animals, ideas, or movements that resist authority or convention.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">What&apos;s the origin of the word &quot;rebel&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;rebellis,&quot; meaning &quot;waging war again&quot; or &quot;renewing war.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">How common is the misspelling &quot;rebell&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or confusing it with similar words.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">What&apos;s the difference between &quot;rebel&quot; and &quot;revolutionary&quot;?</h3>
              <p className="text-gray-700">&quot;Rebel&quot; implies resistance to authority, while &quot;revolutionary&quot; suggests working for fundamental change.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-emerald-500">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Can &quot;rebel&quot; be used in positive contexts?</h3>
              <p className="text-gray-700">Yes, &quot;rebel&quot; can be positive when referring to someone who challenges unjust systems or outdated conventions.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Rebel&quot;</strong> has only one &quot;l&quot; - it&apos;s short and simple!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of a rebel as someone who breaks rules - just like breaking the double &quot;l&quot; rule!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reasons-vs-resons" className="text-blue-700 hover:text-blue-900 underline">Reasons vs Resons</a></p>
            <p><a href="/spelling/reasonable-vs-resonable" className="text-blue-700 hover:text-blue-900 underline">Reasonable vs Resonable</a></p>
            <p><a href="/spelling/reason-vs-reson" className="text-blue-700 hover:text-blue-900 underline">Reason vs Reson</a></p>
            <p><a href="/spelling/realm-vs-relm" className="text-blue-700 hover:text-blue-900 underline">Realm vs Relm</a></p>
            <p><a href="/spelling/really-vs-rilly" className="text-blue-700 hover:text-blue-900 underline">Really vs Rilly</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recede-vs-receed" className="text-blue-700 hover:text-blue-900 underline">Recede vs Receed</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/double-letters" className="text-blue-700 hover:text-blue-900 underline">Double Letters</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
