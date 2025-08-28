import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reckless vs Reckles - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reckless&quot; and &quot;reckles&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecklessVsRecklesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Reckless vs Reckles
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t be reckless with your spelling! Learn why the correct form needs that final &quot;s&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-teal-700">
          <strong>&quot;Reckless&quot;</strong> is the correct spelling. &quot;Reckles&quot; is missing the final &quot;s&quot; and is incorrect.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Reckles</h3>
            <p className="text-red-600">This spelling is incomplete and missing the final &quot;s&quot; that makes the word complete.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-500">
            <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Correct: Reckless</h3>
            <p className="text-teal-600">This is the complete spelling that means &quot;without thinking or caring about the consequences.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">📚 Correct Word</h3>
            <p className="text-teal-700">
              <strong>Reckless</strong> is a complete adjective that describes someone who acts without thinking about the consequences or dangers.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Reckles</strong> is an incomplete spelling that often occurs due to typing errors or forgetting the final letter.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
            <h3 className="text-lg font-bold text-teal-800 mb-3">🔍 Etymology</h3>
            <p className="text-teal-700">
              From Old English <em>receleas</em>, meaning &quot;careless, heedless, negligent.&quot; The final &quot;s&quot; is essential for the complete word.
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
              <p className="text-teal-700"><strong>Reckless</strong> driving can lead to serious accidents.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">His <strong>reckless</strong> behavior put everyone at risk.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-700">The company made a <strong>reckless</strong> investment decision.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">His <strong>reckles</strong> driving caused the crash. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Don&apos;t be so <strong>reckles</strong> with your money. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>reckles</strong> decision cost them everything. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎯 Complete the Word</h3>
              <p className="text-teal-700">Think of &quot;reckless&quot; as needing to be &quot;complete&quot; - it needs that final &quot;s&quot; to be whole!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🔤 Sound It Out</h3>
              <p className="text-teal-700">When you say &quot;reckless,&quot; you can hear the &quot;s&quot; sound at the end - make sure to include it in writing!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">📝 Visual Check</h3>
              <p className="text-teal-700">Always check that your &quot;reckless&quot; has both the &quot;ck&quot; in the middle and the &quot;s&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100">
              <h3 className="text-lg font-bold text-teal-800 mb-3">🎨 Pattern Recognition</h3>
              <p className="text-teal-700">Many English words ending in &quot;-less&quot; need that final &quot;s&quot; - like &quot;careless,&quot; &quot;thoughtless,&quot; and &quot;reckless.&quot;</p>
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
              <p className="text-teal-600">• <strong>Reckless</strong> abandon</p>
              <p className="text-teal-600">• <strong>Reckless</strong> endangerment</p>
              <p className="text-teal-600">• <strong>Reckless</strong> driving</p>
              <p className="text-teal-600">• <strong>Reckless</strong> spending</p>
              <p className="text-teal-600">• <strong>Reckless</strong> behavior</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-teal-600">• <strong>Adjective:</strong> The reckless driver</p>
              <p className="text-teal-600">• <strong>Adverb:</strong> He drove recklessly</p>
              <p className="text-teal-600">• <strong>Noun:</strong> His recklessness was evident</p>
              <p className="text-teal-600">• <strong>Comparative:</strong> More reckless than ever</p>
              <p className="text-teal-600">• <strong>Superlative:</strong> The most reckless decision</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Why do people misspell &quot;reckless&quot; as &quot;reckles&quot;?</h3>
              <p className="text-gray-700">This often happens due to typing errors or simply forgetting to include the final &quot;s&quot; when writing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;reckles&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;reckles&quot; is never correct. It&apos;s an incomplete spelling that should always be written as &quot;reckless.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the difference between &quot;reckless&quot; and &quot;careless&quot;?</h3>
              <p className="text-gray-700">&quot;Reckless&quot; implies a more serious disregard for consequences, while &quot;careless&quot; suggests simple inattention or lack of care.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;reckless&quot; be used as a noun?</h3>
              <p className="text-gray-700">The noun form is &quot;recklessness,&quot; not &quot;reckless.&quot; &quot;Reckless&quot; is primarily an adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How do I remember to include the final &quot;s&quot;?</h3>
              <p className="text-gray-700">Think of &quot;reckless&quot; as needing to be &quot;complete&quot; - it needs both the &quot;ck&quot; and the final &quot;s&quot; to be whole!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Is &quot;reckless&quot; related to &quot;wreck&quot;?</h3>
              <p className="text-gray-700">While they sound similar, they have different origins. &quot;Reckless&quot; comes from Old English &quot;receleas,&quot; while &quot;wreck&quot; has a different etymology.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the adverb form of &quot;reckless&quot;?</h3>
              <p className="text-gray-700">The adverb form is &quot;recklessly.&quot; For example: &quot;He drove recklessly through the intersection.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">Can &quot;reckless&quot; be used in a positive context?</h3>
              <p className="text-gray-700">Rarely. While sometimes used to describe bold or daring actions, it typically carries negative connotations of irresponsibility.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">What&apos;s the origin of the word &quot;reckless&quot;?</h3>
              <p className="text-gray-700">It comes from Old English &quot;receleas,&quot; combining &quot;rece&quot; (care, heed) with &quot;-leas&quot; (without), meaning &quot;without care or heed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-teal-500">
              <h3 className="text-lg font-bold text-teal-800 mb-2">How common is the misspelling &quot;reckles&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and social media, where people may type quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Reckless&quot;</strong> needs both the &quot;ck&quot; and the final &quot;s&quot; to be complete!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;reckless&quot; as needing to be &quot;complete&quot; - it needs that final &quot;s&quot; to be whole, just like other words ending in &quot;-less.&quot;
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/reckless-vs-rekless" className="text-blue-700 hover:text-blue-900 underline">Reckless vs Rekless</a></p>
            <p><a href="/spelling/reckless-vs-wreckless" className="text-blue-700 hover:text-blue-900 underline">Reckless vs Wreckless</a></p>
            <p><a href="/spelling/careless-vs-carless" className="text-blue-700 hover:text-blue-900 underline">Careless vs Carless</a></p>
            <p><a href="/spelling/thoughtless-vs-thoughtles" className="text-blue-700 hover:text-blue-900 underline">Thoughtless vs Thoughtles</a></p>
            <p><a href="/spelling/mindless-vs-mindles" className="text-blue-700 hover:text-blue-900 underline">Mindless vs Mindles</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/heedless-vs-heedles" className="text-blue-700 hover:text-blue-900 underline">Heedless vs Heedles</a></p>
            <p><a href="/spelling/fearless-vs-fearles" className="text-blue-700 hover:text-blue-900 underline">Fearless vs Fearles</a></p>
            <p><a href="/spelling/endless-vs-endles" className="text-blue-700 hover:text-blue-900 underline">Endless vs Endles</a></p>
            <p><a href="/spelling/helpless-vs-helples" className="text-blue-700 hover:text-blue-900 underline">Helpless vs Helples</a></p>
            <p><a href="/spelling/useless-vs-useles" className="text-blue-700 hover:text-blue-900 underline">Useless vs Useles</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/adjectives" className="text-blue-700 hover:text-blue-900 underline">Adjectives</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
            <p><a href="/grammar/word-endings" className="text-blue-700 hover:text-blue-900 underline">Word Endings</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/complete-words" className="text-blue-700 hover:text-blue-900 underline">Complete Words</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
