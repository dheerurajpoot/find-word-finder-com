import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quarter vs Quater - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quarter&quot; and &quot;quater&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuarterVsQuaterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Quarter vs Quater
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t miss the &quot;r&quot;! Learn why the correct form needs that consonant to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-teal-700">
          <strong>&quot;Quarter&quot;</strong> is the correct spelling. &quot;Quater&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quater</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500">
            <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Correct: Quarter</h3>
            <p className="text-teal-600">This is the proper spelling that means &quot;one of four equal parts.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">📚 Correct Word</h3>
            <p className="text-teal-700">
              <strong>Quarter</strong> is a noun that refers to one of four equal parts or a period of three months.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quater</strong> is a misspelling that often occurs due to forgetting the &quot;r&quot; in the word.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">🔍 Etymology</h3>
            <p className="text-teal-700">
              From Latin &quot;quartarius&quot; meaning &quot;fourth part.&quot; The word has an &quot;r&quot; in the middle.
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
              <p className="text-teal-700">The year is divided into four <strong>quarters</strong>.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">We need a <strong>quarter</strong> to use the vending machine.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">The company&apos;s first <strong>quarter</strong> results were excellent.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The year is divided into four <strong>quaters</strong>. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">We need a <strong>quater</strong> to use the vending machine. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The company&apos;s first <strong>quater</strong> results were excellent. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎯 Think &quot;Four Parts&quot;</h3>
              <p className="text-teal-700">Remember that &quot;quarter&quot; has an &quot;r&quot; - like dividing something into four parts!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🔤 &quot;R&quot; in the Middle</h3>
              <p className="text-teal-700">The word has an &quot;r&quot; in the middle - think &quot;quarter&quot; with an &quot;r&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">📝 Visual Pattern</h3>
              <p className="text-teal-700">Think: &quot;Quarter&quot; looks like &quot;quart&quot; + &quot;er&quot; - the &quot;r&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎨 Coin Association</h3>
              <p className="text-teal-700">Picture a quarter coin - it has value, just like the &quot;r&quot; in &quot;quarter&quot;!</p>
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
              <p className="text-teal-600">• <strong>Quarter</strong> past</p>
              <p className="text-teal-600">• <strong>Quarter</strong> to</p>
              <p className="text-teal-600">• <strong>Quarter</strong> final</p>
              <p className="text-teal-600">• <strong>Quarter</strong> note</p>
              <p className="text-teal-600">• <strong>Quarter</strong> turn</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-teal-600">• <strong>Noun:</strong> The quarter is valuable</p>
              <p className="text-teal-600">• <strong>Subject:</strong> Quarter begins</p>
              <p className="text-teal-600">• <strong>Object:</strong> Find the quarter</p>
              <p className="text-teal-600">• <strong>Plural:</strong> Multiple quarters</p>
              <p className="text-teal-600">• <strong>Possessive:</strong> Quarter&apos;s value</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Why do people misspell &quot;quarter&quot; as &quot;quater&quot;?</h3>
              <p className="text-gray-700">This often happens due to forgetting the &quot;r&quot; in the middle of the word, especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;quater&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quater&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quarter.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;quarter&quot; and &quot;fourth&quot;?</h3>
              <p className="text-gray-700">&quot;Quarter&quot; specifically means one of four equal parts, while &quot;fourth&quot; is the ordinal number for the position four.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quarter&quot; be used in financial contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarter&quot; is extensively used in finance for quarterly earnings, quarterly reports, and quarterly dividends.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quarter&quot; as having an &quot;r&quot; in the middle - like dividing something into four parts!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;quarter&quot; related to &quot;quart&quot;?</h3>
              <p className="text-gray-700">Yes, both words come from Latin roots meaning &quot;fourth part,&quot; but &quot;quarter&quot; is more general while &quot;quart&quot; is a specific unit of measurement.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the base form of &quot;quarter&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quarter.&quot; For example: &quot;This is a quarter.&quot; &quot;We have quarters.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quarter&quot; be used in sports contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarter&quot; is commonly used in sports like basketball and football to describe game periods.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the origin of the word &quot;quarter&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;quartarius&quot; meaning &quot;fourth part,&quot; which became &quot;quarter&quot; in English.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How common is the misspelling &quot;quater&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;quarter&quot; and &quot;section&quot;?</h3>
              <p className="text-gray-700">&quot;Quarter&quot; specifically means one of four equal parts, while &quot;section&quot; can refer to any division or part.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quarter&quot; be used in military contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarter&quot; is commonly used in military terminology for living quarters, quartermaster, and quartering.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the plural form of &quot;quarter&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;quarters.&quot; For example: &quot;We have four quarters.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;quarter&quot; used in music contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarter&quot; is commonly used in music for quarter notes, quarter rests, and time signatures.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;quarter&quot; and &quot;third&quot;?</h3>
              <p className="text-gray-700">&quot;Quarter&quot; means one of four equal parts, while &quot;third&quot; means one of three equal parts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quarter&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quarter&quot; can be used metaphorically, like &quot;quarter of life&quot; or &quot;quarter of the way&quot; to describe progress or stages.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quarter&quot;</strong> has an &quot;r&quot; in the middle - like dividing into four parts!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;quarter&quot; as having an &quot;r&quot; - it&apos;s worth a quarter, just like the &quot;r&quot; is worth keeping!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quarrel-vs-quarell" className="text-blue-700 hover:text-blue-900 underline">Quarrel vs Quarell</a></p>
            <p><a href="/spelling/quickly-vs-quickley" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quickley</a></p>
            <p><a href="/spelling/queue-vs-quie" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quie</a></p>
            <p><a href="/spelling/queue-vs-quee" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quee</a></p>
            <p><a href="/spelling/queue-vs-que" className="text-blue-700 hover:text-blue-900 underline">Queue vs Que</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/latin-loanwords" className="text-blue-700 hover:text-blue-900 underline">Latin Loanwords</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/measurement-words" className="text-blue-700 hover:text-blue-900 underline">Measurement Words</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
