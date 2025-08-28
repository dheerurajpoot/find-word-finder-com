import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Radiant vs Radient - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;radiant&quot; and &quot;radient&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RadiantVsRadientPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Radiant vs Radient
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the brightness! Learn why the correct form needs that &quot;a&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-yellow-700">
          <strong>&quot;Radiant&quot;</strong> is the correct spelling. &quot;Radient&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Radient</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">✅ Correct: Radiant</h3>
            <p className="text-yellow-600">This is the proper spelling that means &quot;sending out light; shining or glowing brightly.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">📚 Correct Word</h3>
            <p className="text-yellow-700">
              <strong>Radiant</strong> is an adjective that describes something emitting light, energy, or happiness.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Radient</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">🔍 Etymology</h3>
            <p className="text-yellow-700">
              From Latin <em>radiare</em>, meaning &quot;to emit rays.&quot; The &quot;a&quot; in &quot;radiant&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-700">She had a <strong>radiant</strong> smile that lit up the room.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-700">The <strong>radiant</strong> sun warmed the earth below.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-700">His <strong>radiant</strong> personality made everyone feel welcome.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She had a <strong>radient</strong> smile that lit up the room. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>radient</strong> sun warmed the earth below. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">His <strong>radient</strong> personality made everyone feel welcome. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🎯 Think &quot;Radiation&quot;</h3>
              <p className="text-yellow-700">Remember that &quot;radiant&quot; comes from &quot;radiation&quot; - both have the &quot;dia&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🔤 &quot;Dia&quot; Pattern</h3>
              <p className="text-yellow-700">The &quot;dia&quot; in &quot;radiant&quot; is like &quot;diameter&quot; - think &quot;ra&quot; + &quot;diant&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">📝 Break It Down</h3>
              <p className="text-yellow-700">Think: &quot;Ra&quot; + &quot;diant&quot; = &quot;radiant&quot; - the &quot;a&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🎨 Visual Association</h3>
              <p className="text-yellow-700">Picture the &quot;a&quot; as a ray of light - it&apos;s essential for the &quot;radiant&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-yellow-600">• <strong>Radiant</strong> smile</p>
              <p className="text-yellow-600">• <strong>Radiant</strong> beauty</p>
              <p className="text-yellow-600">• <strong>Radiant</strong> glow</p>
              <p className="text-yellow-600">• <strong>Radiant</strong> energy</p>
              <p className="text-yellow-600">• <strong>Radiant</strong> personality</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-yellow-600">• <strong>Adjective:</strong> The radiant sun</p>
              <p className="text-yellow-600">• <strong>Predicate:</strong> She looks radiant</p>
              <p className="text-yellow-600">• <strong>Comparative:</strong> More radiant</p>
              <p className="text-yellow-600">• <strong>Superlative:</strong> Most radiant</p>
              <p className="text-yellow-600">• <strong>Adverb:</strong> Radiantly beautiful</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Why do people misspell &quot;radiant&quot; as &quot;radient&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;dia&quot; sound can be heard as &quot;die,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Is &quot;radient&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;radient&quot; is never correct in formal or informal writing. It should always be spelled as &quot;radiant.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">What&apos;s the difference between &quot;radiant&quot; and &quot;bright&quot;?</h3>
              <p className="text-gray-700">&quot;Radiant&quot; suggests emitting light or energy from within, while &quot;bright&quot; refers to reflecting or producing light.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Can &quot;radiant&quot; be used for people?</h3>
              <p className="text-gray-700">Yes, &quot;radiant&quot; is commonly used to describe people who emit happiness, beauty, or positive energy.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;radiation&quot; - both words have the same &quot;dia&quot; pattern, and &quot;radiant&quot; comes from &quot;radiation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Is &quot;radiant&quot; related to &quot;radio&quot;?</h3>
              <p className="text-gray-700">Yes, both come from the same Latin root &quot;radius,&quot; meaning &quot;ray&quot; or &quot;spoke.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">What&apos;s the base form of &quot;radiant&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;radiate.&quot; For example: &quot;The sun radiates heat.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Can &quot;radiant&quot; be used in scientific contexts?</h3>
              <p className="text-gray-700">Yes, &quot;radiant&quot; is commonly used in physics and astronomy to describe energy or light emission.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">What&apos;s the origin of the word &quot;radiant&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;radiare,&quot; meaning &quot;to emit rays,&quot; with the English adjective ending &quot;-ant.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">How common is the misspelling &quot;radient&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">What&apos;s the difference between &quot;radiant&quot; and &quot;glowing&quot;?</h3>
              <p className="text-gray-700">&quot;Radiant&quot; suggests emitting light outward, while &quot;glowing&quot; refers to producing a soft, warm light.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Can &quot;radiant&quot; be used in art contexts?</h3>
              <p className="text-gray-700">Yes, &quot;radiant&quot; is commonly used in art to describe colors, light effects, or the overall mood of a piece.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">What&apos;s the plural form of &quot;radiant&quot;?</h3>
              <p className="text-gray-700">Since &quot;radiant&quot; is an adjective, it doesn&apos;t have a plural form. It modifies nouns in both singular and plural contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Is &quot;radiant&quot; used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;radiant&quot; is used in medicine to describe heat therapy, energy treatments, or glowing skin conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">What&apos;s the difference between &quot;radiant&quot; and &quot;luminous&quot;?</h3>
              <p className="text-gray-700">&quot;Radiant&quot; suggests emitting energy or light, while &quot;luminous&quot; refers to being bright or well-lit.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Can &quot;radiant&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;radiant&quot; can be used metaphorically, like &quot;radiant with joy&quot; or &quot;radiant with confidence.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Radiant&quot;</strong> has an &quot;a&quot; in the middle - just like &quot;radiation&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;dia&quot; in &quot;radiant&quot; follows the same pattern as &quot;radiation,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
            <p><a href="/spelling/quote-vs-qoute" className="text-blue-700 hover:text-blue-900 underline">Quote vs Qoute</a></p>
            <p><a href="/spelling/quit-vs-quited" className="text-blue-700 hover:text-blue-900 underline">Quit vs Quited</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiate-vs-radiate" className="text-blue-700 hover:text-blue-900 underline">Radiate vs Radiate</a></p>
            <p><a href="/spelling/radiation-vs-radation" className="text-blue-700 hover:text-blue-900 underline">Radiation vs Radaition</a></p>
            <p><a href="/spelling/radius-vs-radus" className="text-blue-700 hover:text-blue-900 underline">Radius vs Radus</a></p>
            <p><a href="/spelling/radical-vs-radicle" className="text-blue-700 hover:text-blue-900 underline">Radical vs Radicle</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adjectives" className="text-blue-700 hover:text-blue-900 underline">Adjectives</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/etymology" className="text-blue-700 hover:text-blue-900 underline">Etymology</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
