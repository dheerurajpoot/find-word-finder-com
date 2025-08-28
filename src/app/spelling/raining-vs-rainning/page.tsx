import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Raining vs Rainning - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;raining&quot; and &quot;rainning&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RainingVsRainningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          Raining vs Rainning
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the weather! Learn why the correct form needs only one &quot;n&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-blue-700">
          <strong>&quot;Raining&quot;</strong> is the correct spelling. &quot;Rainning&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Rainning</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Correct: Raining</h3>
            <p className="text-blue-600">This is the proper spelling that means &quot;water falling from the sky in drops.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">📚 Correct Word</h3>
            <p className="text-blue-700">
              <strong>Raining</strong> is the present participle of &quot;rain,&quot; meaning water is currently falling from the sky.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Rainning</strong> is a misspelling that often occurs due to confusion with other words that have double consonants.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🔍 Etymology</h3>
            <p className="text-blue-700">
              From Old English <em>regnian</em>, meaning &quot;to rain.&quot; The word only needs one &quot;n&quot; in the present participle form.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">It is <strong>raining</strong> heavily today.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">The weather forecast says it will be <strong>raining</strong> tomorrow.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">I love the sound of <strong>raining</strong> on the roof.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">It is <strong>rainning</strong> heavily today. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The weather forecast says it will be <strong>rainning</strong> tomorrow. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I love the sound of <strong>rainning</strong> on the roof. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🎯 Think &quot;Rain&quot;</h3>
              <p className="text-blue-700">Remember that &quot;raining&quot; comes from &quot;rain&quot; - just add &quot;ing&quot; with one &quot;n&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🔤 One &quot;N&quot; Rule</h3>
              <p className="text-blue-700">The word &quot;rain&quot; only has one &quot;n&quot;, so &quot;raining&quot; only needs one &quot;n&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">📝 Break It Down</h3>
              <p className="text-blue-700">Think: &quot;Rain&quot; + &quot;ing&quot; = &quot;raining&quot; - only one &quot;n&quot; needed!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🎨 Visual Association</h3>
              <p className="text-blue-700">Picture one raindrop for the one &quot;n&quot; in &quot;raining&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-blue-600">• <strong>Raining</strong> cats and dogs</p>
              <p className="text-blue-600">• <strong>Raining</strong> heavily</p>
              <p className="text-blue-600">• <strong>Raining</strong> all day</p>
              <p className="text-blue-600">• <strong>Raining</strong> outside</p>
              <p className="text-blue-600">• <strong>Raining</strong> non-stop</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-blue-600">• <strong>Present Participle:</strong> It is raining</p>
              <p className="text-blue-600">• <strong>Continuous:</strong> Was raining</p>
              <p className="text-blue-600">• <strong>Future:</strong> Will be raining</p>
              <p className="text-blue-600">• <strong>Perfect:</strong> Has been raining</p>
              <p className="text-blue-600">• <strong>Gerund:</strong> Raining is expected</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Why do people misspell &quot;raining&quot; as &quot;rainning&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion with other words that have double consonants, like &quot;running&quot; or &quot;beginning.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Is &quot;rainning&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;rainning&quot; is never correct in formal or informal writing. It should always be spelled as &quot;raining.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the difference between &quot;raining&quot; and &quot;rain&quot;?</h3>
              <p className="text-gray-700">&quot;Rain&quot; is the noun (water from sky) or base verb, while &quot;raining&quot; is the present participle (currently happening).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;raining&quot; be used as a noun?</h3>
              <p className="text-gray-700">Yes, &quot;raining&quot; can be used as a gerund (noun form), as in &quot;The raining lasted all day.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;rain&quot; - it only has one &quot;n&quot;, so &quot;raining&quot; only needs one &quot;n&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Is &quot;raining&quot; related to &quot;rainy&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same root word &quot;rain.&quot; &quot;Raining&quot; is the verb form, &quot;rainy&quot; is the adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the base form of &quot;raining&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;rain.&quot; For example: &quot;It rains every day.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;raining&quot; be used in weather reports?</h3>
              <p className="text-gray-700">Yes, &quot;raining&quot; is commonly used in weather reports to describe current precipitation conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the origin of the word &quot;raining&quot;?</h3>
              <p className="text-gray-700">It comes from Old English &quot;regnian,&quot; meaning &quot;to rain,&quot; with the English present participle ending &quot;-ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">How common is the misspelling &quot;rainning&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the difference between &quot;raining&quot; and &quot;drizzling&quot;?</h3>
              <p className="text-gray-700">&quot;Raining&quot; refers to water falling in drops, while &quot;drizzling&quot; means light, fine rain.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;raining&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;raining&quot; can be used metaphorically, like &quot;complaints were raining down&quot; or &quot;money was raining from the sky.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the past tense of &quot;raining&quot;?</h3>
              <p className="text-gray-700">The past tense would be &quot;rained.&quot; For example: &quot;It rained yesterday.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Is &quot;raining&quot; used in idioms?</h3>
              <p className="text-gray-700">Yes, &quot;raining&quot; appears in many idioms like &quot;raining cats and dogs&quot; or &quot;when it rains, it pours.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">What&apos;s the difference between &quot;raining&quot; and &quot;pouring&quot;?</h3>
              <p className="text-gray-700">&quot;Raining&quot; is general precipitation, while &quot;pouring&quot; means heavy, intense rainfall.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Can &quot;raining&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;raining&quot; can be used metaphorically, like &quot;complaints were raining down&quot; or &quot;money was raining from the sky.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Raining&quot;</strong> has only one &quot;n&quot; - just like &quot;rain&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word &quot;rain&quot; only has one &quot;n&quot;, so when you add &quot;ing,&quot; you only need one &quot;n&quot; in &quot;raining.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
            <p><a href="/spelling/quote-vs-qoute" className="text-blue-700 hover:text-blue-900 underline">Quote vs Qoute</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/snowing-vs-snowwing" className="text-blue-700 hover:text-blue-900 underline">Snowing vs Snowwing</a></p>
            <p><a href="/spelling/sunny-vs-sunney" className="text-blue-700 hover:text-blue-900 underline">Sunny vs Sunney</a></p>
            <p><a href="/spelling/cloudy-vs-clouddy" className="text-blue-700 hover:text-blue-900 underline">Cloudy vs Clouddy</a></p>
            <p><a href="/spelling/windy-vs-winddy" className="text-blue-700 hover:text-blue-900 underline">Windy vs Winddy</a></p>
            <p><a href="/spelling/foggy-vs-foggey" className="text-blue-700 hover:text-blue-900 underline">Foggy vs Foggey</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/present-participles" className="text-blue-700 hover:text-blue-900 underline">Present Participles</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/weather-vocabulary" className="text-blue-700 hover:text-blue-900 underline">Weather Vocabulary</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
