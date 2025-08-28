import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Realm vs Relm - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;realm&quot; and &quot;relm&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RealmVsRelmPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Realm vs Relm
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your realm! Learn why the correct form needs that &quot;a&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-amber-700">
          <strong>&quot;Realm&quot;</strong> is the correct spelling. &quot;Relm&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Relm</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Correct: Realm</h3>
            <p className="text-amber-600">This is the proper spelling that means &quot;a kingdom, domain, or sphere of activity.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">📚 Correct Word</h3>
            <p className="text-amber-700">
              <strong>Realm</strong> is a noun that refers to a kingdom, domain, or sphere of activity or interest.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Relm</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🔍 Etymology</h3>
            <p className="text-amber-700">
              From Old French <em>realme</em>, meaning &quot;kingdom.&quot; The &quot;a&quot; in &quot;realm&quot; is essential for the correct spelling.
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
              <p className="text-amber-700">The king ruled over his <strong>realm</strong> with wisdom.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">This falls within the <strong>realm</strong> of possibility.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">The digital <strong>realm</strong> is constantly evolving.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The king ruled over his <strong>relm</strong> with wisdom. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">This falls within the <strong>relm</strong> of possibility. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The digital <strong>relm</strong> is constantly evolving. <span className="text-red-500">(Incorrect)</span></p>
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
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎯 Think &quot;Real&quot;</h3>
              <p className="text-amber-700">Remember that &quot;realm&quot; starts with &quot;real&quot; - both have the &quot;ea&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🔤 &quot;EA&quot; Pattern</h3>
              <p className="text-amber-700">The &quot;ea&quot; in &quot;realm&quot; is crucial - think &quot;real&quot; + &quot;m&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">📝 Break It Down</h3>
              <p className="text-amber-700">Think: &quot;Real&quot; + &quot;m&quot; = &quot;realm&quot; - the &quot;a&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎨 Visual Association</h3>
              <p className="text-amber-700">Picture the &quot;a&quot; as a crown - it&apos;s essential for the royal &quot;realm&quot;!</p>
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
              <p className="text-amber-600">• Royal <strong>realm</strong></p>
              <p className="text-amber-600">• Digital <strong>realm</strong></p>
              <p className="text-amber-600">• <strong>Realm</strong> of possibility</p>
              <p className="text-amber-600">• <strong>Realm</strong> of influence</p>
              <p className="text-amber-600">• <strong>Realm</strong> of expertise</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-amber-600">• <strong>Noun:</strong> The realm is vast</p>
              <p className="text-amber-600">• <strong>Subject:</strong> The realm expanded</p>
              <p className="text-amber-600">• <strong>Object:</strong> I entered the realm</p>
              <p className="text-amber-600">• <strong>Possessive:</strong> The realm&apos;s boundaries</p>
              <p className="text-amber-600">• <strong>Countable:</strong> Two realms</p>
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
              <h3 className="text-lg font-bold text-amber-800 mb-2">Why do people misspell &quot;realm&quot; as &quot;relm&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ea&quot; sound can be heard as &quot;e,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;relm&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;relm&quot; is never correct in formal or informal writing. It should always be spelled as &quot;realm.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;realm&quot; and &quot;kingdom&quot;?</h3>
              <p className="text-gray-700">&quot;Realm&quot; is more general and can refer to any domain or sphere, while &quot;kingdom&quot; specifically refers to a country ruled by a king or queen.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;realm&quot; be used for non-physical concepts?</h3>
              <p className="text-gray-700">Yes, &quot;realm&quot; is commonly used for abstract concepts like &quot;the realm of ideas&quot; or &quot;the realm of possibility.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;real&quot; - both words have the same &quot;ea&quot; pattern, and &quot;realm&quot; starts with &quot;real.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;realm&quot; related to &quot;royal&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;regalis,&quot; meaning &quot;royal&quot; or &quot;kingly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the plural form of &quot;realm&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;realms.&quot; For example: &quot;There are many realms to explore.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;realm&quot; be used in modern contexts?</h3>
              <p className="text-gray-700">Yes, &quot;realm&quot; is commonly used in modern contexts like &quot;the digital realm&quot; or &quot;the realm of social media.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the origin of the word &quot;realm&quot;?</h3>
              <p className="text-gray-700">It comes from Old French &quot;realme,&quot; meaning &quot;kingdom,&quot; which in turn comes from Latin &quot;regalis,&quot; meaning &quot;royal.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How common is the misspelling &quot;relm&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;realm&quot; and &quot;domain&quot;?</h3>
              <p className="text-gray-700">&quot;Realm&quot; suggests a more majestic or royal connotation, while &quot;domain&quot; is more neutral and refers to an area of control or expertise.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;realm&quot; be used in fantasy contexts?</h3>
              <p className="text-gray-700">Yes, &quot;realm&quot; is commonly used in fantasy literature and games to refer to magical or fictional kingdoms and domains.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Realm&quot;</strong> has an &quot;a&quot; - just like &quot;real&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ea&quot; in &quot;realm&quot; follows the same pattern as &quot;real,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reasons-vs-resons" className="text-blue-700 hover:text-blue-900 underline">Reasons vs Resons</a></p>
            <p><a href="/spelling/reasonable-vs-resonable" className="text-blue-700 hover:text-blue-900 underline">Reasonable vs Resonable</a></p>
            <p><a href="/spelling/reason-vs-reson" className="text-blue-700 hover:text-blue-900 underline">Reason vs Reson</a></p>
            <p><a href="/spelling/really-vs-rilly" className="text-blue-700 hover:text-blue-900 underline">Really vs Rilly</a></p>
            <p><a href="/spelling/rebel-vs-rebell" className="text-blue-700 hover:text-blue-900 underline">Rebel vs Rebell</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recede-vs-receed" className="text-blue-700 hover:text-blue-900 underline">Recede vs Receed</a></p>
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
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/french-origins" className="text-blue-700 hover:text-blue-900 underline">French Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/etymology" className="text-blue-700 hover:text-blue-900 underline">Etymology</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
