import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quarterly vs Quaterly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quarterly&quot; and &quot;quaterly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuarterlyVsQuaterlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Quarterly vs Quaterly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t miss the &quot;r&quot;! Learn why the correct form needs that consonant to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-lime-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-lime-700">
          <strong>&quot;Quarterly&quot;</strong> is the correct spelling. &quot;Quaterly&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quaterly</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500">
            <h3 className="text-xl font-bold text-lime-700 mb-3">✅ Correct: Quarterly</h3>
            <p className="text-lime-600">This is the proper spelling that means &quot;occurring every three months.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
            <h3 className="text-lg font-bold text-lime-800 mb-3">📚 Correct Word</h3>
            <p className="text-lime-700">
              <strong>Quarterly</strong> is an adjective that describes something occurring every three months or four times a year.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quaterly</strong> is a misspelling that often occurs due to forgetting the &quot;r&quot; in the word.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
            <h3 className="text-lg font-bold text-lime-800 mb-3">🔍 Etymology</h3>
            <p className="text-lime-700">
              From the word &quot;quarter&quot; + the suffix &quot;-ly.&quot; The word has an &quot;r&quot; in the middle.
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
              <p className="text-lime-700">The company publishes <strong>quarterly</strong> reports every three months.</p>
            </div>
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">We have <strong>quarterly</strong> meetings to review progress.</p>
            </div>
            <div className="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-4 rounded-r-lg">
              <p className="text-lime-700">The magazine is published on a <strong>quarterly</strong> basis.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The company publishes <strong>quaterly</strong> reports every three months. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">We have <strong>quaterly</strong> meetings to review progress. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The magazine is published on a <strong>quaterly</strong> basis. <span className="text-red-500">(Incorrect)</span></p>
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
              <h3 className="text-lg font-bold text-lime-800 mb-3">🎯 Think &quot;Quarter + Ly&quot;</h3>
              <p className="text-lime-700">Remember that &quot;quarterly&quot; comes from &quot;quarter&quot; + &quot;ly&quot; - the &quot;r&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🔤 &quot;R&quot; in the Middle</h3>
              <p className="text-lime-700">The word has an &quot;r&quot; in the middle - think &quot;quarter&quot; + &quot;ly&quot; with an &quot;r&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">📝 Break It Down</h3>
              <p className="text-lime-700">Think: &quot;Quarter&quot; + &quot;ly&quot; = &quot;quarterly&quot; - the &quot;r&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-lime-100 to-green-100">
              <h3 className="text-lg font-bold text-lime-800 mb-3">🎨 Time Association</h3>
              <p className="text-lime-700">Picture four quarters of a year - just like the &quot;r&quot; in &quot;quarterly&quot;!</p>
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
              <p className="text-lime-600">• <strong>Quarterly</strong> reports</p>
              <p className="text-lime-600">• <strong>Quarterly</strong> meetings</p>
              <p className="text-lime-600">• <strong>Quarterly</strong> reviews</p>
              <p className="text-lime-600">• <strong>Quarterly</strong> publications</p>
              <p className="text-lime-600">• <strong>Quarterly</strong> assessments</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-lime-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-lime-600">• <strong>Adjective:</strong> Quarterly reports</p>
              <p className="text-lime-600">• <strong>Adverb:</strong> Published quarterly</p>
              <p className="text-lime-600">• <strong>Modifier:</strong> Quarterly basis</p>
              <p className="text-lime-600">• <strong>Frequency:</strong> Every quarterly</p>
              <p className="text-lime-600">• <strong>Schedule:</strong> Quarterly schedule</p>
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
              <h3 className="text-lg font-bold text-lime-800 mb-2">Why do people misspell &quot;quarterly&quot; as &quot;quaterly&quot;?</h3>
              <p className="text-gray-700">This often happens due to forgetting the &quot;r&quot; in the middle of the word, especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;quaterly&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quaterly&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quarterly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;quarterly&quot; and &quot;monthly&quot;?</h3>
              <p className="text-gray-700">&quot;Quarterly&quot; means every three months (4 times a year), while &quot;monthly&quot; means every month (12 times a year).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quarterly&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarterly&quot; is extensively used in business for financial reports, performance reviews, and strategic planning.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quarterly&quot; as &quot;quarter&quot; + &quot;ly&quot; - the &quot;r&quot; from &quot;quarter&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;quarterly&quot; related to &quot;quarter&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;quarterly&quot; comes from the word &quot;quarter&quot; meaning one-fourth, with the suffix &quot;-ly&quot; meaning &quot;every.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the base form of &quot;quarterly&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quarter.&quot; For example: &quot;This is a quarter.&quot; &quot;We meet quarterly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quarterly&quot; be used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarterly&quot; is commonly used in academic publishing, research assessments, and educational planning.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the origin of the word &quot;quarterly&quot;?</h3>
              <p className="text-gray-700">It comes from the word &quot;quarter&quot; (one-fourth) + the adverbial suffix &quot;-ly&quot; meaning &quot;every.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">How common is the misspelling &quot;quaterly&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;quarterly&quot; and &quot;biannual&quot;?</h3>
              <p className="text-gray-700">&quot;Quarterly&quot; means every three months (4 times a year), while &quot;biannual&quot; means twice a year (every 6 months).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quarterly&quot; be used in financial contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarterly&quot; is extensively used in finance for earnings reports, dividend payments, and financial statements.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the plural form of &quot;quarterly&quot;?</h3>
              <p className="text-gray-700">Since &quot;quarterly&quot; is an adjective/adverb, it doesn&apos;t have a plural form. It&apos;s used the same way in all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Is &quot;quarterly&quot; used in publishing contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarterly&quot; is commonly used in publishing for journals, magazines, and newsletters that appear four times a year.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">What&apos;s the difference between &quot;quarterly&quot; and &quot;seasonal&quot;?</h3>
              <p className="text-gray-700">&quot;Quarterly&quot; refers to time intervals, while &quot;seasonal&quot; refers to characteristics related to seasons of the year.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-lime-500">
              <h3 className="text-lg font-bold text-lime-800 mb-2">Can &quot;quarterly&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quarterly&quot; can be used metaphorically, like &quot;quarterly check-ins&quot; to describe regular self-assessment or reflection.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quarterly&quot;</strong> has an &quot;r&quot; in the middle - like &quot;quarter&quot; + &quot;ly&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;quarterly&quot; as &quot;quarter&quot; + &quot;ly&quot; - the &quot;r&quot; from &quot;quarter&quot; is essential!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-lime-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/quarrel-vs-quarell" className="text-blue-700 hover:text-blue-900 underline">Quarrel vs Quarell</a></p>
            <p><a href="/spelling/quickly-vs-quickley" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quickley</a></p>
            <p><a href="/spelling/queue-vs-quie" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quie</a></p>
            <p><a href="/spelling/queue-vs-quee" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quee</a></p>
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
            <p><a href="/grammar/adjectives" className="text-blue-700 hover:text-blue-900 underline">Adjectives</a></p>
            <p><a href="/grammar/adverbs" className="text-blue-700 hover:text-blue-900 underline">Adverbs</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
