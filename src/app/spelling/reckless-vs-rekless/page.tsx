import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reckless vs Rekless - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reckless&quot; and &quot;rekless&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecklessVsReklessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Reckless vs Rekless
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t be reckless with your spelling! Learn the correct way to spell this word that describes careless behavior.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-amber-700">
          <strong>&quot;Reckless&quot;</strong> is the correct spelling. &quot;Rekless&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Rekless</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Correct: Reckless</h3>
            <p className="text-amber-600">This is the proper spelling that means &quot;without thinking or caring about the consequences.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">📚 Correct Word</h3>
            <p className="text-amber-700">
              <strong>Reckless</strong> is an adjective that describes someone who acts without thinking about the consequences or dangers.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Rekless</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🔍 Etymology</h3>
            <p className="text-amber-700">
              From Old English <em>receleas</em>, meaning &quot;careless, heedless, negligent.&quot; The &quot;ck&quot; sound is preserved in modern spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700"><strong>Reckless</strong> driving can lead to serious accidents.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">His <strong>reckless</strong> behavior put everyone at risk.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">The company made a <strong>reckless</strong> investment decision.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">His <strong>rekless</strong> driving caused the crash. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Don&apos;t be so <strong>rekless</strong> with your money. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>rekless</strong> decision cost them everything. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎯 Think &quot;Check&quot;</h3>
              <p className="text-amber-700">Remember that &quot;reckless&quot; has &quot;ck&quot; like &quot;check&quot; - you should always check before acting recklessly!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🔤 Double Consonant Rule</h3>
              <p className="text-amber-700">The &quot;ck&quot; in &quot;reckless&quot; follows the double consonant pattern, making it easier to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">📝 Break It Down</h3>
              <p className="text-amber-700">Think: &quot;Reck&quot; + &quot;less&quot; = &quot;without reck&quot; (without care or consideration).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎨 Visual Association</h3>
              <p className="text-amber-700">Picture a &quot;reck&quot; (wreck) happening because someone was &quot;reckless&quot; - the &quot;ck&quot; connects them visually.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-amber-600">• <strong>Reckless</strong> abandon</p>
              <p className="text-amber-600">• <strong>Reckless</strong> endangerment</p>
              <p className="text-amber-600">• <strong>Reckless</strong> driving</p>
              <p className="text-amber-600">• <strong>Reckless</strong> spending</p>
              <p className="text-amber-600">• <strong>Reckless</strong> behavior</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-amber-600">• <strong>Adjective:</strong> The reckless driver</p>
              <p className="text-amber-600">• <strong>Adverb:</strong> He drove recklessly</p>
              <p className="text-amber-600">• <strong>Noun:</strong> His recklessness was evident</p>
              <p className="text-amber-600">• <strong>Comparative:</strong> More reckless than ever</p>
              <p className="text-amber-600">• <strong>Superlative:</strong> The most reckless decision</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Why do people misspell &quot;reckless&quot; as &quot;rekless&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ck&quot; sound can be heard as a single &quot;k&quot; sound, leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;rekless&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;rekless&quot; is never correct in formal or informal writing. It should always be spelled as &quot;reckless.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;reckless&quot; and &quot;careless&quot;?</h3>
              <p className="text-gray-700">&quot;Reckless&quot; implies a more serious disregard for consequences, while &quot;careless&quot; suggests simple inattention or lack of care.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;reckless&quot; be used as a noun?</h3>
              <p className="text-gray-700">The noun form is &quot;recklessness,&quot; not &quot;reckless.&quot; &quot;Reckless&quot; is primarily an adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of the &quot;ck&quot; as representing &quot;check&quot; - you should always check before acting recklessly!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;reckless&quot; related to &quot;wreck&quot;?</h3>
              <p className="text-gray-700">While they sound similar, they have different origins. &quot;Reckless&quot; comes from Old English &quot;receleas,&quot; while &quot;wreck&quot; has a different etymology.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the adverb form of &quot;reckless&quot;?</h3>
              <p className="text-gray-700">The adverb form is &quot;recklessly.&quot; For example: &quot;He drove recklessly through the intersection.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;reckless&quot; be used in a positive context?</h3>
              <p className="text-gray-700">Rarely. While sometimes used to describe bold or daring actions, it typically carries negative connotations of irresponsibility.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the origin of the word &quot;reckless&quot;?</h3>
              <p className="text-gray-700">It comes from Old English &quot;receleas,&quot; combining &quot;rece&quot; (care, heed) with &quot;-leas&quot; (without), meaning &quot;without care or heed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How common is the misspelling &quot;rekless&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and social media, where people may type quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Reckless&quot;</strong> has a &quot;ck&quot; - think of it as &quot;check&quot; before you act!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ck&quot; in &quot;reckless&quot; follows the same pattern as other words like &quot;check,&quot; &quot;deck,&quot; and &quot;neck.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recognition-vs-recogonition" className="text-blue-700 hover:text-blue-900 underline">Recognition vs Recogonition</a></p>
            <p><a href="/spelling/recognition-vs-recognision" className="text-blue-700 hover:text-blue-900 underline">Recognition vs Recognision</a></p>
            <p><a href="/spelling/recognition-vs-recognation" className="text-blue-700 hover:text-blue-900 underline">Recognition vs Recognation</a></p>
            <p><a href="/spelling/recognition-vs-recogition" className="text-blue-700 hover:text-blue-900 underline">Recognition vs Recogition</a></p>
            <p><a href="/spelling/recognition-vs-recignition" className="text-blue-700 hover:text-blue-900 underline">Recognition vs Recignition</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reckless-vs-wreckless" className="text-blue-700 hover:text-blue-900 underline">Reckless vs Wreckless</a></p>
            <p><a href="/spelling/careless-vs-carless" className="text-blue-700 hover:text-blue-900 underline">Careless vs Carless</a></p>
            <p><a href="/spelling/thoughtless-vs-thoughtles" className="text-blue-700 hover:text-blue-900 underline">Thoughtless vs Thoughtles</a></p>
            <p><a href="/spelling/mindless-vs-mindles" className="text-blue-700 hover:text-blue-900 underline">Mindless vs Mindles</a></p>
            <p><a href="/spelling/heedless-vs-heedles" className="text-blue-700 hover:text-blue-900 underline">Heedless vs Heedles</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adjectives" className="text-blue-700 hover:text-blue-900 underline">Adjectives</a></p>
            <p><a href="/grammar/double-consonants" className="text-blue-700 hover:text-blue-900 underline">Double Consonants</a></p>
            <p><a href="/grammar/etymology" className="text-blue-700 hover:text-blue-900 underline">Etymology</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
