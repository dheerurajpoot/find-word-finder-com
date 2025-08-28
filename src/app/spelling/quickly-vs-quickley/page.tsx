import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quickly vs Quickley - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quickly&quot; and &quot;quickley&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuicklyVsQuickleyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Quickly vs Quickley
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t add an extra &quot;e&quot;! Learn why the correct form only needs &quot;ly&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-rose-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-rose-700">
          <strong>&quot;Quickly&quot;</strong> is the correct spelling. &quot;Quickley&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quickley</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500">
            <h3 className="text-xl font-bold text-rose-700 mb-3">✅ Correct: Quickly</h3>
            <p className="text-rose-600">This is the proper spelling that means &quot;at a fast speed; rapidly.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
            <h3 className="text-lg font-bold text-rose-800 mb-3">📚 Correct Word</h3>
            <p className="text-rose-700">
              <strong>Quickly</strong> is an adverb that describes how an action is performed - at a fast speed or pace.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quickley</strong> is a misspelling that often occurs due to adding an unnecessary &quot;e&quot; before &quot;ly.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
            <h3 className="text-lg font-bold text-rose-800 mb-3">🔍 Etymology</h3>
            <p className="text-rose-700">
              From the adjective &quot;quick&quot; + the adverbial suffix &quot;-ly.&quot; The suffix is always &quot;-ly,&quot; never &quot;-ley.&quot;
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
              <p className="text-rose-700">She solved the puzzle <strong>quickly</strong> and efficiently.</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">The team responded <strong>quickly</strong> to the emergency situation.</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
              <p className="text-rose-700">He adapted <strong>quickly</strong> to the new work environment.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She solved the puzzle <strong>quickley</strong> and efficiently. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The team responded <strong>quickley</strong> to the emergency situation. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He adapted <strong>quickley</strong> to the new work environment. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🎯 Think &quot;Quick + ly&quot;</h3>
              <p className="text-rose-700">Remember that &quot;quickly&quot; comes from &quot;quick&quot; - just add &quot;ly&quot; with no extra letters!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🔤 &quot;Ly&quot; Rule</h3>
              <p className="text-rose-700">The adverbial suffix is always &quot;-ly,&quot; never &quot;-ley.&quot; Think &quot;quick&quot; + &quot;ly&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">📝 Break It Down</h3>
              <p className="text-rose-700">Think: &quot;Quick&quot; + &quot;ly&quot; = &quot;quickly&quot; - no extra &quot;e&quot; needed!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-rose-100 to-pink-100">
              <h3 className="text-lg font-bold text-rose-800 mb-3">🎨 Visual Association</h3>
              <p className="text-rose-700">Picture &quot;quickly&quot; as speed with a simple &quot;ly&quot; tail - no extra decorations!</p>
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
              <p className="text-rose-600">• <strong>Quickly</strong> respond</p>
              <p className="text-rose-600">• <strong>Quickly</strong> learn</p>
              <p className="text-rose-600">• <strong>Quickly</strong> adapt</p>
              <p className="text-rose-600">• <strong>Quickly</strong> solve</p>
              <p className="text-rose-600">• <strong>Quickly</strong> recover</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-rose-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-rose-600">• <strong>Adverb:</strong> He ran quickly</p>
              <p className="text-rose-600">• <strong>Modifier:</strong> Quickly efficient</p>
              <p className="text-rose-600">• <strong>Manner:</strong> She worked quickly</p>
              <p className="text-rose-600">• <strong>Degree:</strong> Very quickly</p>
              <p className="text-rose-600">• <strong>Comparison:</strong> More quickly</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Why do people misspell &quot;quickly&quot; as &quot;quickley&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion with other words that end in &quot;-ley&quot; or adding an unnecessary &quot;e&quot; before &quot;ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;quickley&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quickley&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quickly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;quickly&quot; and &quot;fast&quot;?</h3>
              <p className="text-gray-700">&quot;Quickly&quot; is an adverb that describes how an action is performed, while &quot;fast&quot; is an adjective that describes speed.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;quickly&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is commonly used in business to describe rapid responses, fast learning, or speedy problem-solving.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quick&quot; - just add &quot;ly&quot; with no extra letters. The suffix is always &quot;-ly,&quot; never &quot;-ley.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;quickly&quot; related to &quot;quick&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is the adverb form of the adjective &quot;quick.&quot; They share the same root meaning of speed.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the base form of &quot;quickly&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quick.&quot; For example: &quot;The runner is quick.&quot; &quot;She ran quickly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;quickly&quot; be used in sports contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is commonly used in sports to describe fast movements, rapid reactions, or speedy plays.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the origin of the word &quot;quickly&quot;?</h3>
              <p className="text-gray-700">It comes from the Old English adjective &quot;cwic&quot; (alive, quick) + the adverbial suffix &quot;-lice,&quot; which became &quot;-ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">How common is the misspelling &quot;quickley&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;quickly&quot; and &quot;rapidly&quot;?</h3>
              <p className="text-gray-700">&quot;Quickly&quot; suggests speed with efficiency, while &quot;rapidly&quot; emphasizes the high speed of an action.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;quickly&quot; be used in technology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is commonly used in technology to describe fast processing, rapid responses, or speedy downloads.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the plural form of &quot;quickly&quot;?</h3>
              <p className="text-gray-700">Since &quot;quickly&quot; is an adverb, it doesn&apos;t have a plural form. It&apos;s used the same way in all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;quickly&quot; used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; is used in medicine to describe rapid diagnosis, fast recovery, or speedy treatment responses.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the difference between &quot;quickly&quot; and &quot;swiftly&quot;?</h3>
              <p className="text-gray-700">&quot;Quickly&quot; suggests speed, while &quot;swiftly&quot; suggests both speed and grace in movement.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Can &quot;quickly&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; can be used metaphorically, like &quot;quickly understand&quot; or &quot;quickly adapt&quot; to describe mental or behavioral speed.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">What&apos;s the past tense of &quot;quickly&quot;?</h3>
              <p className="text-gray-700">Since &quot;quickly&quot; is an adverb, it doesn&apos;t have a past tense. It modifies verbs in all tenses.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-rose-800 mb-2">Is &quot;quickly&quot; used in idioms?</h3>
              <p className="text-gray-700">Yes, &quot;quickly&quot; appears in many expressions like &quot;quickly as lightning&quot; or &quot;quickly as a flash.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quickly&quot;</strong> ends with &quot;ly&quot; - no extra &quot;e&quot; needed!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The adverbial suffix is always &quot;-ly,&quot; never &quot;-ley.&quot; Think &quot;quick&quot; + &quot;ly&quot; = &quot;quickly.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/queue-vs-quie" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quie</a></p>
            <p><a href="/spelling/queue-vs-quee" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quee</a></p>
            <p><a href="/spelling/queue-vs-que" className="text-blue-700 hover:text-blue-900 underline">Queue vs Que</a></p>
            <p><a href="/spelling/questionnaire-vs-questionnair" className="text-blue-700 hover:text-blue-900 underline">Questionnaire vs Questionnair</a></p>
            <p><a href="/spelling/question-vs-quistion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quistion</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-rose-800 mb-4 text-center">📚 Learned Grammar</h3>
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
