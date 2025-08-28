import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Racquet vs Racquett - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;racquet&quot; and &quot;racquett&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RacquetVsRacquettPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Racquet vs Racquett
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell your sports equipment! Learn why the correct form needs only one &quot;t&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-green-700">
          <strong>&quot;Racquet&quot;</strong> is the correct spelling. &quot;Racquett&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Racquett</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">✅ Correct: Racquet</h3>
            <p className="text-green-600">This is the proper spelling that means &quot;a sports implement with a handle and an open hoop with a network of strings.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
            <h3 className="text-lg font-bold text-green-800 mb-3">📚 Correct Word</h3>
            <p className="text-green-700">
              <strong>Racquet</strong> is a noun that refers to a sports equipment used in tennis, badminton, and squash.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Racquett</strong> is a misspelling that often occurs due to confusion with other words that have double consonants.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
            <h3 className="text-lg font-bold text-green-800 mb-3">🔍 Etymology</h3>
            <p className="text-green-700">
              From French <em>raquette</em>, meaning &quot;racket.&quot; The word only needs one &quot;t&quot; in English.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-700">She swung her <strong>racquet</strong> with perfect form.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-700">The tennis <strong>racquet</strong> was strung with high-quality nylon.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-700">He bought a new badminton <strong>racquet</strong> for the tournament.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She swung her <strong>racquett</strong> with perfect form. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The tennis <strong>racquett</strong> was strung with high-quality nylon. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">He bought a new badminton <strong>racquett</strong> for the tournament. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">🎯 Think &quot;Racket&quot;</h3>
              <p className="text-green-700">Remember that &quot;racquet&quot; is an alternative spelling of &quot;racket&quot; - both have one &quot;t&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">🔤 One &quot;T&quot; Rule</h3>
              <p className="text-green-700">The word &quot;racket&quot; only has one &quot;t&quot;, so &quot;racquet&quot; only needs one &quot;t&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">📝 Break It Down</h3>
              <p className="text-green-700">Think: &quot;Rac&quot; + &quot;quet&quot; = &quot;racquet&quot; - only one &quot;t&quot; needed!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-green-100 to-emerald-100">
              <h3 className="text-lg font-bold text-green-800 mb-3">🎨 Visual Association</h3>
              <p className="text-green-700">Picture one tennis ball for the one &quot;t&quot; in &quot;racquet&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-green-600">• Tennis <strong>racquet</strong></p>
              <p className="text-green-600">• Badminton <strong>racquet</strong></p>
              <p className="text-green-600">• Squash <strong>racquet</strong></p>
              <p className="text-green-600">• <strong>Racquet</strong> sports</p>
              <p className="text-green-600">• <strong>Racquet</strong> stringing</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-green-600">• <strong>Noun:</strong> The racquet is expensive</p>
              <p className="text-green-600">• <strong>Subject:</strong> Racquet broke during play</p>
              <p className="text-green-600">• <strong>Object:</strong> I bought a racquet</p>
              <p className="text-green-600">• <strong>Possessive:</strong> The racquet&apos;s grip</p>
              <p className="text-green-600">• <strong>Plural:</strong> Multiple racquets</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Why do people misspell &quot;racquet&quot; as &quot;racquett&quot;?</h3>
              <p className="text-gray-700">This often happens due to confusion with other words that have double consonants, like &quot;racket&quot; or &quot;bracket.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Is &quot;racquett&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;racquett&quot; is never correct in formal or informal writing. It should always be spelled as &quot;racquet.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the difference between &quot;racquet&quot; and &quot;racket&quot;?</h3>
              <p className="text-gray-700">&quot;Racquet&quot; is the preferred spelling in British English, while &quot;racket&quot; is more common in American English.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Can &quot;racquet&quot; be used for sports other than tennis?</h3>
              <p className="text-gray-700">Yes, &quot;racquet&quot; is used for badminton, squash, racquetball, and other similar sports.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;racket&quot; - it only has one &quot;t&quot;, so &quot;racquet&quot; only needs one &quot;t&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Is &quot;racquet&quot; related to &quot;racket&quot; (noise)?</h3>
              <p className="text-gray-700">No, they are different words. &quot;Racquet&quot; is sports equipment, while &quot;racket&quot; (noise) comes from a different origin.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the base form of &quot;racquet&quot;?</h3>
              <p className="text-gray-700">Since &quot;racquet&quot; is a noun, it doesn&apos;t have a base form. It&apos;s the same in singular and plural contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Can &quot;racquet&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;racquet&quot; is commonly used in business to refer to sports equipment manufacturing, retail, or club management.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the origin of the word &quot;racquet&quot;?</h3>
              <p className="text-gray-700">It comes from French &quot;raquette,&quot; meaning &quot;racket,&quot; which was borrowed into English for sports equipment.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">How common is the misspelling &quot;racquett&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the difference between &quot;racquet&quot; and &quot;paddle&quot;?</h3>
              <p className="text-gray-700">&quot;Racquet&quot; has strings, while &quot;paddle&quot; has a solid surface. Paddles are used in table tennis and pickleball.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Can &quot;racquet&quot; be used in technology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;racquet&quot; is used in gaming contexts, virtual sports, or sports simulation software.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the plural form of &quot;racquet&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;racquets.&quot; For example: &quot;I have three racquets in my bag.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Is &quot;racquet&quot; used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;racquet&quot; injuries are common in sports medicine, referring to injuries sustained while playing racquet sports.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">What&apos;s the difference between &quot;racquet&quot; and &quot;bat&quot;?</h3>
              <p className="text-gray-700">&quot;Racquet&quot; has strings and is used in racquet sports, while &quot;bat&quot; is solid and used in baseball or cricket.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Can &quot;racquet&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;racquet&quot; can be used metaphorically, like &quot;life is a game, and we all have our racquets&quot; or &quot;he used his words as a racquet.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Racquet&quot;</strong> has only one &quot;t&quot; - just like &quot;racket&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word &quot;racket&quot; only has one &quot;t&quot;, so when you use the alternative spelling &quot;racquet,&quot; you only need one &quot;t&quot; too.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
            <p><a href="/spelling/quote-vs-qoute" className="text-blue-700 hover:text-blue-900 underline">Quote vs Qoute</a></p>
            <p><a href="/spelling/quit-vs-quited" className="text-blue-700 hover:text-blue-900 underline">Quit vs Quited</a></p>
            <p><a href="/spelling/quietly-vs-quitly" className="text-blue-700 hover:text-blue-900 underline">Quietly vs Quitly</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racket-vs-rackett" className="text-blue-700 hover:text-blue-900 underline">Racket vs Rackett</a></p>
            <p><a href="/spelling/sports-vs-sportts" className="text-blue-700 hover:text-blue-900 underline">Sports vs Sportts</a></p>
            <p><a href="/spelling/tennis-vs-tenis" className="text-blue-700 hover:text-blue-900 underline">Tennis vs Tenis</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/french-origins" className="text-blue-700 hover:text-blue-900 underline">French Origins</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/sports-vocabulary" className="text-blue-700 hover:text-blue-900 underline">Sports Vocabulary</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
