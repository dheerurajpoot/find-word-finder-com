import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Choosing vs Chosing - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;choosing&quot; and &quot;chosing&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ChoosingVsChosingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Choosing vs Chosing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t drop the &quot;o&quot;! Learn why the correct form needs that vowel to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-indigo-700">
          <strong>&quot;Choosing&quot;</strong> is the correct spelling. &quot;Chosing&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Chosing</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-indigo-700 mb-3">✅ Correct: Choosing</h3>
            <p className="text-indigo-600">This is the proper spelling that means &quot;the act of selecting or making a choice.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">📚 Correct Word</h3>
            <p className="text-indigo-700">
              <strong>Choosing</strong> is the present participle and gerund form of the verb &quot;choose,&quot; meaning to select or make a decision.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Chosing</strong> is a misspelling that often occurs due to dropping the &quot;o&quot; from the word.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">🔍 Etymology</h3>
            <p className="text-indigo-700">
              From Old English &quot;ceosan&quot; meaning &quot;to choose.&quot; The word retains the &quot;o&quot; in all forms.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-indigo-700">She is <strong>choosing</strong> between two job offers.</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-indigo-700"><strong>Choosing</strong> the right path is important in life.</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-indigo-700">They spent hours <strong>choosing</strong> the perfect gift.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She is <strong>chosing</strong> between two job offers. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700"><strong>Chosing</strong> the right path is important in life. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">They spent hours <strong>chosing</strong> the perfect gift. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🎯 Think &quot;Choose + ing&quot;</h3>
              <p className="text-indigo-700">Remember that &quot;choosing&quot; comes from &quot;choose&quot; - just add &quot;ing&quot; with the &quot;o&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🔤 &quot;O&quot; Rule</h3>
              <p className="text-indigo-700">The word has an &quot;o&quot; in the middle - think &quot;choose&quot; with an &quot;o&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">📝 Visual Pattern</h3>
              <p className="text-indigo-700">Think: &quot;Choosing&quot; looks like &quot;choose&quot; + &quot;ing&quot; - the &quot;o&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🎨 Decision Association</h3>
              <p className="text-indigo-700">Picture making a choice - you need options, just like the &quot;o&quot; in &quot;choosing&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-indigo-600">• <strong>Choosing</strong> wisely</p>
              <p className="text-indigo-600">• <strong>Choosing</strong> between options</p>
              <p className="text-indigo-600">• <strong>Choosing</strong> the best</p>
              <p className="text-indigo-600">• <strong>Choosing</strong> carefully</p>
              <p className="text-indigo-600">• <strong>Choosing</strong> sides</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-indigo-600">• <strong>Present Participle:</strong> She is choosing</p>
              <p className="text-indigo-600">• <strong>Gerund:</strong> Choosing is difficult</p>
              <p className="text-indigo-600">• <strong>Subject:</strong> Choosing begins</p>
              <p className="text-indigo-600">• <strong>Object:</strong> I enjoy choosing</p>
              <p className="text-indigo-600">• <strong>Modifier:</strong> The choosing process</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Why do people misspell &quot;choosing&quot; as &quot;chosing&quot;?</h3>
              <p className="text-gray-700">This often happens due to dropping the &quot;o&quot; from the word, especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;chosing&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;chosing&quot; is never correct in formal or informal writing. It should always be spelled as &quot;choosing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the difference between &quot;choosing&quot; and &quot;choice&quot;?</h3>
              <p className="text-gray-700">&quot;Choosing&quot; is the action of making a selection, while &quot;choice&quot; is the result or option that has been selected.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;choosing&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; is extensively used in business for decision-making, selecting options, and making strategic choices.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;choosing&quot; as coming from &quot;choose&quot; - just add &quot;ing&quot; with the &quot;o&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;choosing&quot; related to &quot;choose&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; is the present participle and gerund form of the verb &quot;choose.&quot; They share the same root meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the base form of &quot;choosing&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;choose.&quot; For example: &quot;I choose.&quot; &quot;She is choosing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;choosing&quot; be used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; is commonly used in academic writing to describe selection processes, decision-making, and research methodology.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the origin of the word &quot;choosing&quot;?</h3>
              <p className="text-gray-700">It comes from Old English &quot;ceosan&quot; meaning &quot;to choose,&quot; which became &quot;choose&quot; in modern English.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">How common is the misspelling &quot;chosing&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the difference between &quot;choosing&quot; and &quot;selecting&quot;?</h3>
              <p className="text-gray-700">&quot;Choosing&quot; suggests making a decision based on preference, while &quot;selecting&quot; is more about picking from available options.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;choosing&quot; be used in psychology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; is extensively used in psychology to describe decision-making processes, cognitive choices, and behavioral selection.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the plural form of &quot;choosing&quot;?</h3>
              <p className="text-gray-700">Since &quot;choosing&quot; is a verb form, it doesn&apos;t have a plural form. It&apos;s used the same way in all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;choosing&quot; used in technology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; is commonly used in technology for user interface design, option selection, and decision-making algorithms.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the difference between &quot;choosing&quot; and &quot;picking&quot;?</h3>
              <p className="text-gray-700">&quot;Choosing&quot; suggests thoughtful decision-making, while &quot;picking&quot; can be more casual or random selection.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;choosing&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; can be used metaphorically, like &quot;choosing happiness&quot; or &quot;choosing the high road&quot; to describe life decisions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the past tense of &quot;choosing&quot;?</h3>
              <p className="text-gray-700">Since &quot;choosing&quot; is the present participle, it doesn&apos;t have a past tense. The past tense of &quot;choose&quot; is &quot;chose.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;choosing&quot; used in idioms?</h3>
              <p className="text-gray-700">Yes, &quot;choosing&quot; appears in expressions like &quot;choosing sides,&quot; &quot;choosing the lesser evil,&quot; and &quot;choosing one&apos;s battles.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Choosing&quot;</strong> has an &quot;o&quot; - like having options to choose from!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;choosing&quot; as coming from &quot;choose&quot; - just add &quot;ing&quot; with the &quot;o&quot;!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quarrel-vs-quarell" className="text-blue-700 hover:text-blue-900 underline">Quarrel vs Quarell</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/quarterly-vs-quaterly" className="text-blue-700 hover:text-blue-900 underline">Quarterly vs Quaterly</a></p>
            <p><a href="/spelling/query-vs-querry" className="text-blue-700 hover:text-blue-900 underline">Query vs Querry</a></p>
            <p><a href="/spelling/question-vs-quistion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quistion</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/gerunds" className="text-blue-700 hover:text-blue-900 underline">Gerunds</a></p>
            <p><a href="/grammar/present-participles" className="text-blue-700 hover:text-blue-900 underline">Present Participles</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/decision-words" className="text-blue-700 hover:text-blue-900 underline">Decision Words</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
