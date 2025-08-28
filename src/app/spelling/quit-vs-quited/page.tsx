import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quit vs Quited - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quit&quot; and &quot;quited&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuitVsQuitedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Quit vs Quited
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the action! Learn why the correct form doesn&apos;t need an extra &quot;ed&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-red-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-red-700">
          <strong>&quot;Quit&quot;</strong> is the correct spelling. &quot;Quited&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quited</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">✅ Correct: Quit</h3>
            <p className="text-red-600">This is the proper spelling that means &quot;to stop doing something or leave a place.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">📚 Correct Word</h3>
            <p className="text-red-700">
              <strong>Quit</strong> is both a verb and noun that refers to stopping an activity or leaving a situation.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quited</strong> is a misspelling that often occurs due to confusion with regular verb conjugation rules.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🔍 Etymology</h3>
            <p className="text-red-700">
              From Middle English <em>quiten</em>, meaning &quot;to release.&quot; The word &quot;quit&quot; is irregular and doesn&apos;t follow standard &quot;-ed&quot; patterns.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She decided to <strong>quit</strong> her job and start her own business.</p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He <strong>quit</strong> smoking last year and feels much healthier.</p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The team refused to <strong>quit</strong> despite being behind by 20 points.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She decided to <strong>quited</strong> her job and start her own business. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He <strong>quited</strong> smoking last year and feels much healthier. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The team refused to <strong>quited</strong> despite being behind by 20 points. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
              <h3 className="text-lg font-bold text-red-800 mb-3">🎯 Think &quot;Irregular Verb&quot;</h3>
              <p className="text-red-700">Remember that &quot;quit&quot; is an irregular verb - it doesn&apos;t follow the normal &quot;-ed&quot; rule!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
              <h3 className="text-lg font-bold text-red-800 mb-3">🔤 No &quot;Ed&quot; Needed</h3>
              <p className="text-red-700">The word &quot;quit&quot; is the same in present, past, and past participle - no &quot;ed&quot; needed!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
              <h3 className="text-lg font-bold text-red-800 mb-3">📝 Break It Down</h3>
              <p className="text-red-700">Think: &quot;Quit&quot; = &quot;Quit&quot; (past) = &quot;Quit&quot; (past participle) - it never changes!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
              <h3 className="text-lg font-bold text-red-800 mb-3">🎨 Visual Association</h3>
              <p className="text-red-700">Picture &quot;quit&quot; as a stop sign - it stays the same, just like a stop sign never changes!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-red-600">• <strong>Quit</strong> while ahead</p>
              <p className="text-red-600">• <strong>Quit</strong> cold turkey</p>
              <p className="text-red-600">• <strong>Quit</strong> the habit</p>
              <p className="text-red-600">• <strong>Quit</strong> the game</p>
              <p className="text-red-600">• <strong>Quit</strong> the race</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-red-600">• <strong>Present:</strong> I quit</p>
              <p className="text-red-600">• <strong>Past:</strong> I quit</p>
              <p className="text-red-600">• <strong>Past Participle:</strong> I have quit</p>
              <p className="text-red-600">• <strong>Gerund:</strong> Quitting is hard</p>
              <p className="text-red-600">• <strong>Infinitive:</strong> To quit</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Why do people misspell &quot;quit&quot; as &quot;quited&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion with regular verb conjugation rules. Most verbs add &quot;-ed&quot; for past tense, but &quot;quit&quot; is irregular.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Is &quot;quited&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quited&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quit.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">What&apos;s the difference between &quot;quit&quot; and &quot;stop&quot;?</h3>
              <p className="text-gray-700">&quot;Quit&quot; suggests permanently giving up or leaving, while &quot;stop&quot; can be temporary or permanent.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Can &quot;quit&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quit&quot; is commonly used in business to refer to leaving a job, ending a project, or discontinuing a service.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quit&quot; as an irregular verb - it stays the same in all tenses, just like &quot;cut&quot; and &quot;put&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Is &quot;quit&quot; related to &quot;quite&quot;?</h3>
              <p className="text-gray-700">No, they are different words. &quot;Quit&quot; means to stop, while &quot;quite&quot; means &quot;very&quot; or &quot;completely.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">What&apos;s the base form of &quot;quit&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quit.&quot; For example: &quot;I quit smoking.&quot; (present) &quot;I quit smoking.&quot; (past)</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Can &quot;quit&quot; be used in sports contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quit&quot; is commonly used in sports to refer to giving up during a game, leaving a team, or retiring from competition.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">What&apos;s the origin of the word &quot;quit&quot;?</h3>
              <p className="text-gray-700">It comes from Middle English &quot;quiten,&quot; meaning &quot;to release,&quot; which was borrowed from Old French.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">How common is the misspelling &quot;quited&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about irregular verb forms.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">What&apos;s the difference between &quot;quit&quot; and &quot;resign&quot;?</h3>
              <p className="text-gray-700">&quot;Quit&quot; is informal and suggests leaving abruptly, while &quot;resign&quot; is formal and suggests leaving with proper notice.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Can &quot;quit&quot; be used in health contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quit&quot; is commonly used in health contexts to refer to stopping harmful habits like smoking, drinking, or overeating.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">What&apos;s the plural form of &quot;quit&quot;?</h3>
              <p className="text-gray-700">Since &quot;quit&quot; is a verb, it doesn&apos;t have a plural form. It&apos;s used the same way for all subjects.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Is &quot;quit&quot; used in gaming contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quit&quot; is commonly used in gaming to refer to leaving a game, exiting a session, or giving up on a level.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">What&apos;s the difference between &quot;quit&quot; and &quot;abandon&quot;?</h3>
              <p className="text-gray-700">&quot;Quit&quot; suggests stopping something you were doing, while &quot;abandon&quot; suggests leaving something behind permanently.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-2">Can &quot;quit&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quit&quot; can be used metaphorically, like &quot;quit while you&apos;re ahead&quot; or &quot;quit the complaining&quot; to mean stop doing something.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quit&quot;</strong> is an irregular verb - it never changes form!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word &quot;quit&quot; stays the same in present, past, and past participle - just like &quot;cut&quot; and &quot;put&quot;!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quietly-vs-quitly" className="text-blue-700 hover:text-blue-900 underline">Quietly vs Quitly</a></p>
            <p><a href="/spelling/quickly-vs-quikly" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quikly</a></p>
            <p><a href="/spelling/quiet-vs-quite" className="text-blue-700 hover:text-blue-900 underline">Quiet vs Quite</a></p>
            <p><a href="/spelling/question-vs-quesion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quesion</a></p>
            <p><a href="/spelling/quality-vs-qualitty" className="text-blue-700 hover:text-blue-900 underline">Quality vs Qualitty</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-red-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/irregular-verbs" className="text-blue-700 hover:text-blue-900 underline">Irregular Verbs</a></p>
            <p><a href="/grammar/verb-conjugation" className="text-blue-700 hover:text-blue-900 underline">Verb Conjugation</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/action-verbs" className="text-blue-700 hover:text-blue-900 underline">Action Verbs</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
