import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quickly vs Quikly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quickly&quot; and &quot;quikly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuicklyVsQuiklyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Quickly vs Quikly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the speed! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-lime-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-lime-700">
          <strong>&quot;Quickly&quot;</strong> is the correct spelling. &quot;Quikly&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quikly</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500">
            <h3 className="text-xl font-bold text-lime-700 mb-3">✅ Correct: Quickly</h3>
            <p className="text-lime-600">This is the proper spelling that means &quot;at a fast speed; rapidly.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
            <h3 className="text-lg font-bold text-lime-800 mb-3">📚 Correct Word</h3>
            <p className="text-lime-700">
              <strong>Quickly</strong> is an adverb that describes how an action is performed - at a fast speed or pace.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quikly</strong> is a misspelling that often occurs due to forgetting the &quot;c&quot; in the word.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
            <h3 className="text-lg font-bold text-lime-800 mb-3">🔍 Etymology</h3>
            <p className="text-lime-700">
              From the adjective &quot;quick&quot; + the adverbial suffix &quot;-ly.&quot; The &quot;c&quot; in &quot;quickly&quot; is essential for the correct spelling.
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
              <p className="text-lime-700">She ran <strong>quickly</strong> to catch the bus.</p>
            </div>
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">The team responded <strong>quickly</strong> to the emergency.</p>
            </div>
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">He learned the new software <strong>quickly</strong>.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She ran <strong>quikly</strong> to catch the bus. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The team responded <strong>quikly</strong> to the emergency. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He learned the new software <strong>quikly</strong>. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-lime-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🎯 Think &quot;Quick&quot;</h3>
              <p className="text-lime-700">Remember that &quot;quickly&quot; comes from &quot;quick&quot; - just add &quot;ly&quot; with the &quot;c&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🔤 &quot;C&quot; Before &quot;K&quot;</h3>
              <p className="text-lime-700">The &quot;c&quot; in &quot;quickly&quot; comes before the &quot;k&quot; - think &quot;quick&quot; + &quot;ly&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">📝 Break It Down</h3>
              <p className="text-lime-700">Think: &quot;Quick&quot; + &quot;ly&quot; = &quot;quickly&quot; - the &quot;c&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🎨 Visual Association</h3>
              <p className="text-lime-700">Picture the &quot;c&quot; as a speed boost - it&apos;s essential for the &quot;quickly&quot;!</p>
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
              <p className="text-lime-600">• <strong>Quickly</strong> respond</p>
              <p className="text-lime-600">• <strong>Quickly</strong> learn</p>
              <p className="text-lime-600">• <strong>Quickly</strong> adapt</p>
              <p className="text-lime-600">• <strong>Quickly</strong> solve</p>
              <p className="text-lime-600">• <strong>Quickly</strong> recover</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-lime-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-lime-600">• <strong>Adverb:</strong> He ran quickly</p>
              <p className="text-lime-600">• <strong>Modifier:</strong> Quickly efficient</p>
              <p className="text-lime-600">• <strong>Manner:</strong> She worked quickly</p>
              <p className="text-lime-600">• <strong>Degree:</strong> Very quickly</p>
              <p className="text-lime-600">• <strong>Comparison:</strong> More quickly</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-lime-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Why do people misspell &quot;quickly&quot; as &quot;quikly&quot;?</h3>
              <p className="text-gray-700">This often happens due to forgetting the &quot;c&quot; in the word, especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;quikly&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quikly&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quickly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;quickly&quot; and &quot;fast&quot;?</h3>
              <p className="text-gray-700">&quot;Quickly&quot; is an adverb that describes how an action is performed, while &quot;fast&quot; is an adjective that describes speed.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quickly&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is commonly used in business to describe rapid responses, fast learning, or speedy problem-solving.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quick&quot; - it has a &quot;c&quot; before &quot;k,&quot; so &quot;quickly&quot; needs the &quot;c&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;quickly&quot; related to &quot;quick&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is the adverb form of the adjective &quot;quick.&quot; They share the same root meaning of speed.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the base form of &quot;quickly&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quick.&quot; For example: &quot;The runner is quick.&quot; &quot;She ran quickly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quickly&quot; be used in sports contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is commonly used in sports to describe fast movements, rapid reactions, or speedy plays.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the origin of the word &quot;quickly&quot;?</h3>
              <p className="text-gray-700">It comes from the Old English adjective &quot;cwic&quot; (alive, quick) + the adverbial suffix &quot;-lice,&quot; which became &quot;-ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">How common is the misspelling &quot;quikly&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;quickly&quot; and &quot;rapidly&quot;?</h3>
              <p className="text-gray-700">&quot;Quickly&quot; suggests speed with efficiency, while &quot;rapidly&quot; emphasizes the high speed of an action.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quickly&quot; be used in technology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is commonly used in technology to describe fast processing, rapid responses, or speedy downloads.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the plural form of &quot;quickly&quot;?</h3>
              <p className="text-gray-700">Since &quot;quickly&quot; is an adverb, it doesn&apos;t have a plural form. It&apos;s used the same way in all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;quickly&quot; used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is used in medicine to describe rapid diagnosis, fast recovery, or speedy treatment responses.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;quickly&quot; and &quot;swiftly&quot;?</h3>
              <p className="text-gray-700">&quot;Quickly&quot; suggests speed, while &quot;swiftly&quot; suggests both speed and grace in movement.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quickly&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; can be used metaphorically, like &quot;quickly understand&quot; or &quot;quickly adapt&quot; to describe mental or behavioral speed.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quickly&quot;</strong> has a &quot;c&quot; before &quot;k&quot; - just like &quot;quick&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word comes from &quot;quick&quot; + &quot;ly,&quot; so the &quot;c&quot; from &quot;quick&quot; must be preserved in &quot;quickly.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quiet-vs-quite" className="text-blue-700 hover:text-blue-900 underline">Quiet vs Quite</a></p>
            <p><a href="/spelling/question-vs-quesion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quesion</a></p>
            <p><a href="/spelling/quality-vs-qualitty" className="text-blue-700 hover:text-blue-900 underline">Quality vs Qualitty</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/queen-vs-queen" className="text-blue-700 hover:text-blue-900 underline">Queen vs Queen</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adverbs" className="text-blue-700 hover:text-blue-900 underline">Adverbs</a></p>
            <p><a href="/grammar/adjective-formation" className="text-blue-700 hover:text-blue-900 underline">Adjective Formation</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
