import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quiet vs Quite - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quiet&quot; and &quot;quite&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuietVsQuitePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Quiet vs Quite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t confuse silence with degree! Learn why these two words have completely different meanings.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-amber-700">
          <strong>&quot;Quiet&quot;</strong> means silent or peaceful, while <strong>&quot;Quite&quot;</strong> means very or completely. They are different words with different meanings.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">🔇 Quiet</h3>
            <p className="text-blue-600">An adjective meaning silent, peaceful, or making little noise.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-700 mb-3">✨ Quite</h3>
            <p className="text-purple-600">An adverb meaning very, completely, or to a considerable extent.</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">📚 Quiet (Silence)</h3>
            <p className="text-blue-700">
              <strong>Quiet</strong> describes the absence of sound or noise, often suggesting peacefulness.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🔍 Quite (Degree)</h3>
            <p className="text-purple-700">
              <strong>Quite</strong> is an intensifier that modifies adjectives and adverbs to show extent.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">⚠️ Key Difference</h3>
            <p className="text-amber-700">
              These are completely different words - one describes sound level, the other describes degree or extent.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">🔇 Quiet (Silence)</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">The library was very <strong>quiet</strong> during study hours.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">She spoke in a <strong>quiet</strong> voice to avoid waking the baby.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-700">The <strong>quiet</strong> countryside was perfect for relaxation.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-4">✨ Quite (Degree)</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">The movie was <strong>quite</strong> entertaining and well-made.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">I&apos;m <strong>quite</strong> sure that we met before.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">The task was <strong>quite</strong> difficult but not impossible.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">🎯 Think &quot;Silence&quot;</h3>
              <p className="text-blue-700">Remember that &quot;quiet&quot; has &quot;quiet&quot; in it - think of silence and peace!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🔤 Think &quot;Very&quot;</h3>
              <p className="text-purple-700">Remember that &quot;quite&quot; means &quot;very&quot; - think of quantity and degree!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">📝 Different Functions</h3>
              <p className="text-amber-700">Think: &quot;Quiet&quot; = adjective (describes), &quot;Quite&quot; = adverb (modifies)!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎨 Visual Association</h3>
              <p className="text-amber-700">Picture &quot;quiet&quot; as a shushing sound, &quot;quite&quot; as a measuring scale!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-4">Quiet - Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-blue-600">• <strong>Quiet</strong> as a mouse</p>
              <p className="text-blue-600">• <strong>Quiet</strong> time</p>
              <p className="text-blue-600">• <strong>Quiet</strong> confidence</p>
              <p className="text-blue-600">• <strong>Quiet</strong> strength</p>
              <p className="text-blue-600">• <strong>Quiet</strong> revolution</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Quite - Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-purple-600">• <strong>Quite</strong> frankly</p>
              <p className="text-purple-600">• <strong>Quite</strong> honestly</p>
              <p className="text-purple-600">• <strong>Quite</strong> the opposite</p>
              <p className="text-purple-600">• <strong>Quite</strong> a lot</p>
              <p className="text-purple-600">• <strong>Quite</strong> right</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Why do people confuse &quot;quiet&quot; and &quot;quite&quot;?</h3>
              <p className="text-gray-700">These words are often confused because they look similar and sound similar, but they have completely different meanings and functions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quiet&quot; and &quot;quite&quot; ever be used together?</h3>
              <p className="text-gray-700">Yes! You can say &quot;quite quiet&quot; meaning &quot;very quiet&quot; or &quot;quietly quite&quot; meaning &quot;silently very.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;quiet&quot; and &quot;silent&quot;?</h3>
              <p className="text-gray-700">&quot;Quiet&quot; suggests low volume or peaceful atmosphere, while &quot;silent&quot; means completely without sound.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quite&quot; be used in formal writing?</h3>
              <p className="text-gray-700">Yes, &quot;quite&quot; is appropriate in both formal and informal writing. It&apos;s a standard adverb in English.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quiet&quot; as silence (like a library) and &quot;quite&quot; as degree (like &quot;very&quot; or &quot;completely&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;quiet&quot; related to &quot;quietly&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;quietly&quot; is the adverb form of &quot;quiet.&quot; It describes how an action is performed - in a quiet manner.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the base form of &quot;quiet&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quiet.&quot; For example: &quot;The room is quiet.&quot; &quot;She spoke quietly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quite&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quite&quot; is commonly used in business to express certainty, degree, or extent in professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the origin of these words?</h3>
              <p className="text-gray-700">&quot;Quiet&quot; comes from Latin &quot;quietus&quot; (rest), while &quot;quite&quot; comes from Latin &quot;quietus&quot; (free, clear) - different meanings!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How common is the confusion between these words?</h3>
              <p className="text-gray-700">It&apos;s a very common confusion, especially among English learners and even native speakers who are typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;quite&quot; and &quot;very&quot;?</h3>
              <p className="text-gray-700">&quot;Quite&quot; suggests a moderate to high degree, while &quot;very&quot; emphasizes a high degree more strongly.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quiet&quot; be used in literature contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quiet&quot; is commonly used in literature to describe atmosphere, character traits, or narrative mood.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the plural form of &quot;quiet&quot;?</h3>
              <p className="text-gray-700">Since &quot;quiet&quot; is an adjective, it doesn&apos;t have a plural form. It modifies nouns in both singular and plural contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;quite&quot; used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quite&quot; is commonly used in academic writing to express certainty, degree, or extent in scholarly communication.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;quiet&quot; and &quot;calm&quot;?</h3>
              <p className="text-gray-700">&quot;Quiet&quot; refers to lack of sound, while &quot;calm&quot; refers to lack of disturbance or agitation.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can these words be used metaphorically?</h3>
              <p className="text-gray-700">Yes! &quot;Quiet&quot; can mean subtle or unassuming, while &quot;quite&quot; can emphasize surprise or emphasis in expressions.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quiet&quot;</strong> = silence, <strong>&quot;Quite&quot;</strong> = very!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> These are completely different words - one describes sound level, the other describes degree. Think of &quot;quiet&quot; as a library and &quot;quite&quot; as a measuring scale!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/question-vs-quesion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quesion</a></p>
            <p><a href="/spelling/quality-vs-qualitty" className="text-blue-700 hover:text-blue-900 underline">Quality vs Qualitty</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/queen-vs-queen" className="text-blue-700 hover:text-blue-900 underline">Queen vs Queen</a></p>
            <p><a href="/spelling/quick-vs-quik" className="text-blue-700 hover:text-blue-900 underline">Quick vs Quik</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adjectives" className="text-blue-700 hover:text-blue-900 underline">Adjectives</a></p>
            <p><a href="/grammar/adverbs" className="text-blue-700 hover:text-blue-900 underline">Adverbs</a></p>
            <p><a href="/grammar/word-confusion" className="text-blue-700 hover:text-blue-900 underline">Word Confusion</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
