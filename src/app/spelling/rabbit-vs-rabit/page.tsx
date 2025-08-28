import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rabbit vs Rabit - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rabbit&quot; and &quot;rabit&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RabbitVsRabitPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Rabbit vs Rabit
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the hopping friend! Learn why the correct form needs two &quot;b&quot;s to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-pink-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-pink-700">
          <strong>&quot;Rabbit&quot;</strong> is the correct spelling. &quot;Rabit&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Rabit</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-l-4 border-pink-500">
            <h3 className="text-xl font-bold text-pink-700 mb-3">✅ Correct: Rabbit</h3>
            <p className="text-pink-600">This is the proper spelling that means &quot;a small mammal with long ears and a short tail.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
            <h3 className="text-lg font-bold text-pink-800 mb-3">📚 Correct Word</h3>
            <p className="text-pink-700">
              <strong>Rabbit</strong> is a noun that refers to a small, furry mammal known for hopping and having long ears.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Rabit</strong> is a misspelling that often occurs due to forgetting the second &quot;b&quot; in the word.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
            <h3 className="text-lg font-bold text-pink-800 mb-3">🔍 Etymology</h3>
            <p className="text-pink-700">
              From Middle English <em>rabet</em>, meaning &quot;young rabbit.&quot; The word needs two &quot;b&quot;s for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-pink-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700">The <strong>rabbit</strong> hopped through the garden.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700">She has a pet <strong>rabbit</strong> named Fluffy.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700">The <strong>rabbit</strong> burrow was hidden under the bushes.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>rabit</strong> hopped through the garden. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She has a pet <strong>rabit</strong> named Fluffy. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>rabit</strong> burrow was hidden under the bushes. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🎯 Think &quot;Double B&quot;</h3>
              <p className="text-pink-700">Remember that &quot;rabbit&quot; has two &quot;b&quot;s - just like &quot;bunny&quot; has two &quot;n&quot;s!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🔤 &quot;B&quot; Before &quot;I&quot;</h3>
              <p className="text-pink-700">The second &quot;b&quot; in &quot;rabbit&quot; comes before the &quot;i&quot; - think &quot;rab&quot; + &quot;bit&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">📝 Break It Down</h3>
              <p className="text-pink-700">Think: &quot;Rab&quot; + &quot;bit&quot; = &quot;rabbit&quot; - both &quot;b&quot;s are essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🎨 Visual Association</h3>
              <p className="text-pink-700">Picture two bunny ears for the two &quot;b&quot;s in &quot;rabbit&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-pink-600">• <strong>Rabbit</strong> hole</p>
              <p className="text-pink-600">• <strong>Rabbit</strong> food</p>
              <p className="text-pink-600">• <strong>Rabbit</strong> hutch</p>
              <p className="text-pink-600">• <strong>Rabbit</strong> ears</p>
              <p className="text-pink-600">• <strong>Rabbit</strong> foot</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-pink-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-pink-600">• <strong>Noun:</strong> The rabbit is cute</p>
              <p className="text-pink-600">• <strong>Subject:</strong> Rabbit hopped away</p>
              <p className="text-pink-600">• <strong>Object:</strong> I fed the rabbit</p>
              <p className="text-pink-600">• <strong>Possessive:</strong> The rabbit&apos;s fur</p>
              <p className="text-pink-600">• <strong>Plural:</strong> Multiple rabbits</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Why do people misspell &quot;rabbit&quot; as &quot;rabit&quot;?</h3>
              <p className="text-gray-700">This often happens due to forgetting the second &quot;b&quot; in the word, especially when typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Is &quot;rabit&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;rabit&quot; is never correct in formal or informal writing. It should always be spelled as &quot;rabbit.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the difference between &quot;rabbit&quot; and &quot;hare&quot;?</h3>
              <p className="text-gray-700">&quot;Rabbit&quot; refers to smaller, domesticated animals, while &quot;hare&quot; refers to larger, wild animals with longer ears and legs.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;rabbit&quot; be used in scientific contexts?</h3>
              <p className="text-gray-700">Yes, &quot;rabbit&quot; is commonly used in biology and zoology to refer to members of the family Leporidae.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;bunny&quot; - it has two &quot;n&quot;s, so &quot;rabbit&quot; needs two &quot;b&quot;s too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Is &quot;rabbit&quot; related to &quot;bunny&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;bunny&quot; is a cute, informal term for &quot;rabbit,&quot; especially when referring to young or small rabbits.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the base form of &quot;rabbit&quot;?</h3>
              <p className="text-gray-700">Since &quot;rabbit&quot; is a noun, it doesn&apos;t have a base form. It&apos;s the same in singular and plural contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;rabbit&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;rabbit&quot; is used in pet stores, veterinary clinics, and agricultural businesses.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the origin of the word &quot;rabbit&quot;?</h3>
              <p className="text-gray-700">It comes from Middle English &quot;rabet,&quot; meaning &quot;young rabbit,&quot; which was borrowed from French.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">How common is the misspelling &quot;rabit&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the difference between &quot;rabbit&quot; and &quot;bunny&quot;?</h3>
              <p className="text-gray-700">&quot;Rabbit&quot; is the standard term, while &quot;bunny&quot; is a cute, informal term often used for young rabbits.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;rabbit&quot; be used in literature contexts?</h3>
              <p className="text-gray-700">Yes, &quot;rabbit&quot; appears in many children&apos;s books, fables, and stories like &quot;Peter Rabbit.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the plural form of &quot;rabbit&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;rabbits.&quot; For example: &quot;We saw three rabbits in the field.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Is &quot;rabbit&quot; used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;rabbit&quot; is used in medicine to refer to rabbit-related allergies or in laboratory research.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the difference between &quot;rabbit&quot; and &quot;rodent&quot;?</h3>
              <p className="text-gray-700">&quot;Rabbit&quot; refers to a specific animal, while &quot;rodent&quot; is a broader category that includes mice, rats, and other gnawing mammals.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;rabbit&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;rabbit&quot; can be used metaphorically, like &quot;rabbit hole&quot; for a complex situation or &quot;rabbit ears&quot; for TV antennas.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Rabbit&quot;</strong> has two &quot;b&quot;s - just like &quot;bunny&quot; has two &quot;n&quot;s!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word needs two &quot;b&quot;s to be complete - think of it as &quot;rab&quot; + &quot;bit&quot; with both &quot;b&quot;s essential!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quote-vs-qoute" className="text-blue-700 hover:text-blue-900 underline">Quote vs Qoute</a></p>
            <p><a href="/spelling/quit-vs-quited" className="text-blue-700 hover:text-blue-900 underline">Quit vs Quited</a></p>
            <p><a href="/spelling/quietly-vs-quitly" className="text-blue-700 hover:text-blue-900 underline">Quietly vs Quitly</a></p>
            <p><a href="/spelling/quickly-vs-quikly" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quikly</a></p>
            <p><a href="/spelling/quiet-vs-quite" className="text-blue-700 hover:text-blue-900 underline">Quiet vs Quite</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/animal-vs-animal" className="text-blue-700 hover:text-blue-900 underline">Animal vs Animal</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/animal-vocabulary" className="text-blue-700 hover:text-blue-900 underline">Animal Vocabulary</a></p>
            <p><a href="/grammar/double-consonants" className="text-blue-700 hover:text-blue-900 underline">Double Consonants</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
