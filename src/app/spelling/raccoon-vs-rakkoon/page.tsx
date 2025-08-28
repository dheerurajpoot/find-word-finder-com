import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Raccoon vs Rakkoon - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;raccoon&quot; and &quot;rakkoon&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RaccoonVsRakkoonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Raccoon vs Rakkoon
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the masked bandit! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-purple-700">
          <strong>&quot;Raccoon&quot;</strong> is the correct spelling. &quot;Rakkoon&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Rakkoon</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-700 mb-3">✅ Correct: Raccoon</h3>
            <p className="text-purple-600">This is the proper spelling that means &quot;a nocturnal mammal with a black mask and ringed tail.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">📚 Correct Word</h3>
            <p className="text-purple-700">
              <strong>Raccoon</strong> is a noun that refers to a medium-sized mammal native to North America.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Rakkoon</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🔍 Etymology</h3>
            <p className="text-purple-700">
              From Algonquian <em>arakun</em>, meaning &quot;he scratches with his hands.&quot; The &quot;c&quot; in &quot;raccoon&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">A <strong>raccoon</strong> was rummaging through the garbage cans.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">The <strong>raccoon</strong> has distinctive black markings around its eyes.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-purple-700">We saw a family of <strong>raccoons</strong> in the backyard.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">A <strong>rakkoon</strong> was rummaging through the garbage cans. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>rakkoon</strong> has distinctive black markings around its eyes. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">We saw a family of <strong>rakkoons</strong> in the backyard. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎯 Think &quot;Coons&quot;</h3>
              <p className="text-purple-700">Remember that &quot;raccoon&quot; ends with &quot;coon&quot; - both have the &quot;coo&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🔤 &quot;C&quot; Before &quot;O&quot;</h3>
              <p className="text-purple-700">The &quot;c&quot; in &quot;raccoon&quot; comes before the &quot;o&quot; - think &quot;rac&quot; + &quot;coon&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">📝 Break It Down</h3>
              <p className="text-purple-700">Think: &quot;Rac&quot; + &quot;coon&quot; = &quot;raccoon&quot; - the &quot;c&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-purple-100 to-violet-100">
              <h3 className="text-lg font-bold text-purple-800 mb-3">🎨 Visual Association</h3>
              <p className="text-purple-700">Picture the &quot;c&quot; as the raccoon&apos;s mask - it&apos;s essential for the &quot;raccoon&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-purple-600">• <strong>Raccoon</strong> eyes</p>
              <p className="text-purple-600">• <strong>Raccoon</strong> family</p>
              <p className="text-purple-600">• <strong>Raccoon</strong> tracks</p>
              <p className="text-purple-600">• <strong>Raccoon</strong> habitat</p>
              <p className="text-purple-600">• <strong>Raccoon</strong> behavior</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-purple-600">• <strong>Noun:</strong> The raccoon is nocturnal</p>
              <p className="text-purple-600">• <strong>Subject:</strong> Raccoon climbed the tree</p>
              <p className="text-purple-600">• <strong>Object:</strong> I saw a raccoon</p>
              <p className="text-purple-600">• <strong>Possessive:</strong> The raccoon&apos;s den</p>
              <p className="text-purple-600">• <strong>Plural:</strong> Multiple raccoons</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Why do people misspell &quot;raccoon&quot; as &quot;rakkoon&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;cc&quot; sound can be heard as &quot;kk,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;rakkoon&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;rakkoon&quot; is never correct in formal or informal writing. It should always be spelled as &quot;raccoon.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the difference between &quot;raccoon&quot; and &quot;coon&quot;?</h3>
              <p className="text-gray-700">&quot;Raccoon&quot; is the full, proper name, while &quot;coon&quot; is a shortened, informal version that can be considered offensive.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;raccoon&quot; be used in scientific contexts?</h3>
              <p className="text-gray-700">Yes, &quot;raccoon&quot; is commonly used in biology, zoology, and wildlife research to refer to the species Procyon lotor.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;coon&quot; - it has a &quot;c&quot; before &quot;o,&quot; so &quot;raccoon&quot; needs the &quot;c&quot; too!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;raccoon&quot; related to &quot;coonhound&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;coonhound&quot; refers to dogs bred to hunt raccoons, so both words share the &quot;coon&quot; element.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the base form of &quot;raccoon&quot;?</h3>
              <p className="text-gray-700">Since &quot;raccoon&quot; is a noun, it doesn&apos;t have a base form. It&apos;s the same in singular and plural contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;raccoon&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;raccoon&quot; is used in pest control, wildlife management, and outdoor recreation businesses.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the origin of the word &quot;raccoon&quot;?</h3>
              <p className="text-gray-700">It comes from Algonquian &quot;arakun,&quot; meaning &quot;he scratches with his hands,&quot; referring to the animal&apos;s behavior.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">How common is the misspelling &quot;rakkoon&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the difference between &quot;raccoon&quot; and &quot;opossum&quot;?</h3>
              <p className="text-gray-700">&quot;Raccoon&quot; has a black mask and ringed tail, while &quot;opossum&quot; has a white face and long, hairless tail.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;raccoon&quot; be used in literature contexts?</h3>
              <p className="text-gray-700">Yes, &quot;raccoon&quot; appears in many children&apos;s books, nature writing, and folklore stories.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the plural form of &quot;raccoon&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;raccoons.&quot; For example: &quot;We saw three raccoons in the yard.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Is &quot;raccoon&quot; used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;raccoon&quot; is used in medicine to refer to raccoon roundworm infections or other wildlife-related health concerns.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">What&apos;s the difference between &quot;raccoon&quot; and &quot;skunk&quot;?</h3>
              <p className="text-gray-700">&quot;Raccoon&quot; has a black mask and ringed tail, while &quot;skunk&quot; has white stripes and can spray a foul odor.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Can &quot;raccoon&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;raccoon&quot; can be used metaphorically, like &quot;raccoon eyes&quot; for dark circles or &quot;raccoon behavior&quot; for clever problem-solving.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Raccoon&quot;</strong> has a &quot;c&quot; before &quot;o&quot; - just like &quot;coon&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The word ends with &quot;coon,&quot; which has a &quot;c&quot; before &quot;o,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
            <p><a href="/spelling/quote-vs-qoute" className="text-blue-700 hover:text-blue-900 underline">Quote vs Qoute</a></p>
            <p><a href="/spelling/quit-vs-quited" className="text-blue-700 hover:text-blue-900 underline">Quit vs Quited</a></p>
            <p><a href="/spelling/quietly-vs-quitly" className="text-blue-700 hover:text-blue-900 underline">Quietly vs Quitly</a></p>
            <p><a href="/spelling/quickly-vs-quikly" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quikly</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/animal-vs-animal" className="text-blue-700 hover:text-blue-900 underline">Animal vs Animal</a></p>
            <p><a href="/spelling/wildlife-vs-wildliffe" className="text-blue-700 hover:text-blue-900 underline">Wildlife vs Wildliffe</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/native-american-origins" className="text-blue-700 hover:text-blue-900 underline">Native American Origins</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/animal-vocabulary" className="text-blue-700 hover:text-blue-900 underline">Animal Vocabulary</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
