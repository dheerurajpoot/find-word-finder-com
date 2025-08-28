import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quietly vs Quitly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quietly&quot; and &quot;quitly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuietlyVsQuitlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Quietly vs Quitly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the adverb! Learn why the correct form needs that &quot;e&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-teal-700">
          <strong>&quot;Quietly&quot;</strong> is the correct spelling. &quot;Quitly&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quitly</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500">
            <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Correct: Quietly</h3>
            <p className="text-teal-600">This is the proper spelling that means &quot;in a quiet manner; without making noise.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">📚 Correct Word</h3>
            <p className="text-teal-700">
              <strong>Quietly</strong> is an adverb that describes how an action is performed - in a quiet, silent manner.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quitly</strong> is a misspelling that often occurs due to confusion with the word &quot;quit.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">🔍 Etymology</h3>
            <p className="text-teal-700">
              From the adjective &quot;quiet&quot; + the adverbial suffix &quot;-ly.&quot; The &quot;e&quot; in &quot;quietly&quot; is essential for the correct spelling.
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
              <p className="text-teal-700">She spoke <strong>quietly</strong> so as not to wake the baby.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">The cat moved <strong>quietly</strong> through the grass.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">He entered the room <strong>quietly</strong> to avoid disturbing the meeting.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She spoke <strong>quitly</strong> so as not to wake the baby. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The cat moved <strong>quitly</strong> through the grass. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He entered the room <strong>quitly</strong> to avoid disturbing the meeting. <span className="text-red-500">(Incorrect)</span></p>
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
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎯 Think &quot;Quiet&quot;</h3>
              <p className="text-teal-700">Remember that &quot;quietly&quot; comes from &quot;quiet&quot; - just add &quot;ly&quot; with the &quot;e&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🔤 &quot;E&quot; Before &quot;L&quot;</h3>
              <p className="text-teal-700">The &quot;e&quot; in &quot;quietly&quot; comes before the &quot;l&quot; - think &quot;quiet&quot; + &quot;ly&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">📝 Break It Down</h3>
              <p className="text-teal-700">Think: &quot;Quiet&quot; + &quot;ly&quot; = &quot;quietly&quot; - the &quot;e&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎨 Visual Association</h3>
              <p className="text-teal-700">Picture the &quot;e&quot; as a whisper - it&apos;s essential for the &quot;quietly&quot;!</p>
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
              <p className="text-teal-600">• <strong>Quietly</strong> spoken</p>
              <p className="text-teal-600">• <strong>Quietly</strong> confident</p>
              <p className="text-teal-600">• <strong>Quietly</strong> determined</p>
              <p className="text-teal-600">• <strong>Quietly</strong> efficient</p>
              <p className="text-teal-600">• <strong>Quietly</strong> effective</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-teal-600">• <strong>Adverb:</strong> He walked quietly</p>
              <p className="text-teal-600">• <strong>Modifier:</strong> Quietly efficient</p>
              <p className="text-teal-600">• <strong>Manner:</strong> She worked quietly</p>
              <p className="text-teal-600">• <strong>Degree:</strong> Very quietly</p>
              <p className="text-teal-600">• <strong>Comparison:</strong> More quietly</p>
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
              <h3 className="text-lg font-bold text-teal-800 mb-2">Why do people misspell &quot;quietly&quot; as &quot;quitly&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion with the word &quot;quit.&quot; People may think it&apos;s related to stopping rather than being silent.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;quitly&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quitly&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quietly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;quietly&quot; and &quot;silently&quot;?</h3>
              <p className="text-gray-700">&quot;Quietly&quot; suggests low volume or gentle sound, while &quot;silently&quot; means completely without sound.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quietly&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quietly&quot; is commonly used in business to describe discreet operations, confidential discussions, or subtle approaches.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quiet&quot; - it has an &quot;e&quot; before &quot;t,&quot; so &quot;quietly&quot; needs the &quot;e&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;quietly&quot; related to &quot;quit&quot;?</h3>
              <p className="text-gray-700">No, they are completely different words. &quot;Quietly&quot; comes from &quot;quiet&quot; (silent), while &quot;quit&quot; means to stop or leave.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the base form of &quot;quietly&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quiet.&quot; For example: &quot;The room is quiet.&quot; &quot;She spoke quietly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quietly&quot; be used in literature contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quietly&quot; is commonly used in literature to describe atmosphere, character behavior, or narrative tone.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the origin of the word &quot;quietly&quot;?</h3>
              <p className="text-gray-700">It comes from the adjective &quot;quiet&quot; + the Old English adverbial suffix &quot;-lice,&quot; which became &quot;-ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How common is the misspelling &quot;quitly&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;quietly&quot; and &quot;softly&quot;?</h3>
              <p className="text-gray-700">&quot;Quietly&quot; refers to lack of noise, while &quot;softly&quot; refers to gentle, mild, or tender qualities.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quietly&quot; be used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quietly&quot; is used in medicine to describe quiet breathing, quiet heart sounds, or quiet patient behavior.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the plural form of &quot;quietly&quot;?</h3>
              <p className="text-gray-700">Since &quot;quietly&quot; is an adverb, it doesn&apos;t have a plural form. It&apos;s used the same way in all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;quietly&quot; used in technology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quietly&quot; is used in technology to describe quiet operation, silent modes, or discreet notifications.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;quietly&quot; and &quot;gently&quot;?</h3>
              <p className="text-gray-700">&quot;Quietly&quot; refers to lack of sound, while &quot;gently&quot; refers to careful, mild, or tender actions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;quietly&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quietly&quot; can be used metaphorically, like &quot;quietly confident&quot; or &quot;quietly effective&quot; to describe subtle but strong qualities.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quietly&quot;</strong> has an &quot;e&quot; before &quot;t&quot; - just like &quot;quiet&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word comes from &quot;quiet&quot; + &quot;ly,&quot; so the &quot;e&quot; from &quot;quiet&quot; must be preserved in &quot;quietly.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quickly-vs-quikly" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quikly</a></p>
            <p><a href="/spelling/quiet-vs-quite" className="text-blue-700 hover:text-blue-900 underline">Quiet vs Quite</a></p>
            <p><a href="/spelling/question-vs-quesion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quesion</a></p>
            <p><a href="/spelling/quality-vs-qualitty" className="text-blue-700 hover:text-blue-900 underline">Quality vs Qualitty</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
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
