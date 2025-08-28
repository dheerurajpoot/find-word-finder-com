import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quarrel vs Quarell - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quarrel&quot; and &quot;quarell&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuarrelVsQuarellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Quarrel vs Quarell
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t double the &quot;l&quot;! Learn why the correct form only needs one &quot;l&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-amber-700">
          <strong>&quot;Quarrel&quot;</strong> is the correct spelling. &quot;Quarell&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quarell</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Correct: Quarrel</h3>
            <p className="text-amber-600">This is the proper spelling that means &quot;an angry argument or disagreement.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">📚 Correct Word</h3>
            <p className="text-amber-700">
              <strong>Quarrel</strong> is a noun and verb that refers to an angry argument or disagreement between people.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quarell</strong> is a misspelling that often occurs due to doubling the &quot;l&quot; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🔍 Etymology</h3>
            <p className="text-amber-700">
              From Old French &quot;querele&quot; meaning &quot;complaint, dispute.&quot; The word ends with one &quot;l.&quot;
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
              <p className="text-amber-700">The siblings had a <strong>quarrel</strong> over the inheritance.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">They often <strong>quarrel</strong> about politics during dinner.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-700">The <strong>quarrel</strong> between neighbors lasted for months.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The siblings had a <strong>quarell</strong> over the inheritance. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">They often <strong>quarell</strong> about politics during dinner. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>quarell</strong> between neighbors lasted for months. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎯 Think &quot;One L&quot;</h3>
              <p className="text-amber-700">Remember that &quot;quarrel&quot; has only one &quot;l&quot; - like a single argument!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🔤 &quot;L&quot; Rule</h3>
              <p className="text-amber-700">The word ends with one &quot;l,&quot; not two. Think &quot;quarrel&quot; with a single &quot;l&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">📝 Visual Pattern</h3>
              <p className="text-amber-700">Think: &quot;Quarrel&quot; looks like &quot;quar&quot; + &quot;rel&quot; - only one &quot;l&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-amber-100 to-orange-100">
              <h3 className="text-lg font-bold text-amber-800 mb-3">🎨 Conflict Association</h3>
              <p className="text-amber-700">Picture a quarrel as one conflict - just like one &quot;l&quot; in the word!</p>
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
              <p className="text-amber-600">• <strong>Quarrel</strong> with someone</p>
              <p className="text-amber-600">• <strong>Quarrel</strong> over something</p>
              <p className="text-amber-600">• <strong>Quarrel</strong> about politics</p>
              <p className="text-amber-600">• <strong>Quarrel</strong> between friends</p>
              <p className="text-amber-600">• <strong>Quarrel</strong> in public</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-amber-600">• <strong>Noun:</strong> The quarrel was intense</p>
              <p className="text-amber-600">• <strong>Verb:</strong> They quarrel often</p>
              <p className="text-amber-600">• <strong>Subject:</strong> Quarrel begins</p>
              <p className="text-amber-600">• <strong>Object:</strong> Avoid the quarrel</p>
              <p className="text-amber-600">• <strong>Plural:</strong> Multiple quarrels</p>
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
              <h3 className="text-lg font-bold text-amber-800 mb-2">Why do people misspell &quot;quarrel&quot; as &quot;quarell&quot;?</h3>
              <p className="text-gray-700">This often happens due to doubling the &quot;l&quot; at the end, especially when people are unsure about the spelling or following other words that end in double &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;quarell&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quarell&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quarrel.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;quarrel&quot; and &quot;argument&quot;?</h3>
              <p className="text-gray-700">&quot;Quarrel&quot; typically implies a more heated, angry disagreement, while &quot;argument&quot; can be more neutral and rational.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quarrel&quot; be used in formal writing?</h3>
              <p className="text-gray-700">Yes, &quot;quarrel&quot; is appropriate in formal writing when describing disputes or conflicts, though it may be considered slightly more informal than &quot;dispute&quot; or &quot;conflict.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quarrel&quot; as having only one &quot;l&quot; - like a single argument or conflict!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;quarrel&quot; related to &quot;quarrelsome&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;quarrelsome&quot; is the adjective form meaning &quot;tending to quarrel&quot; or &quot;argumentative.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the base form of &quot;quarrel&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quarrel.&quot; For example: &quot;This is a quarrel.&quot; &quot;They quarrel often.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quarrel&quot; be used in literature contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarrel&quot; is commonly used in literature to describe conflicts, disputes, and dramatic confrontations between characters.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the origin of the word &quot;quarrel&quot;?</h3>
              <p className="text-gray-700">It comes from Old French &quot;querele&quot; meaning &quot;complaint, dispute,&quot; which originated from Latin &quot;querela.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">How common is the misspelling &quot;quarell&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;quarrel&quot; and &quot;fight&quot;?</h3>
              <p className="text-gray-700">&quot;Quarrel&quot; typically refers to verbal arguments or disputes, while &quot;fight&quot; can imply physical confrontation.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quarrel&quot; be used in historical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarrel&quot; is commonly used in historical writing to describe disputes, conflicts, and disagreements throughout history.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the plural form of &quot;quarrel&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;quarrels.&quot; For example: &quot;They had many quarrels.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;quarrel&quot; used in legal contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quarrel&quot; can be used in legal writing to describe disputes, though more formal terms like &quot;dispute&quot; or &quot;conflict&quot; are often preferred.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the difference between &quot;quarrel&quot; and &quot;dispute&quot;?</h3>
              <p className="text-gray-700">&quot;Quarrel&quot; suggests a more emotional, personal disagreement, while &quot;dispute&quot; is more formal and can refer to legal or professional conflicts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Can &quot;quarrel&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quarrel&quot; can be used metaphorically, like &quot;quarrel with fate&quot; or &quot;quarrel with reality&quot; to describe internal conflicts or struggles.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">What&apos;s the past tense of &quot;quarrel&quot;?</h3>
              <p className="text-gray-700">The past tense is &quot;quarreled&quot; (American English) or &quot;quarrelled&quot; (British English).</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Is &quot;quarrel&quot; used in idioms?</h3>
              <p className="text-gray-700">Yes, &quot;quarrel&quot; appears in expressions like &quot;pick a quarrel&quot; or &quot;quarrel with one&apos;s bread and butter.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quarrel&quot;</strong> ends with one &quot;l&quot; - no doubling needed!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;quarrel&quot; as one conflict with one &quot;l&quot; - keep it simple!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/quarterly-vs-quaterly" className="text-blue-700 hover:text-blue-900 underline">Quarterly vs Quaterly</a></p>
            <p><a href="/spelling/query-vs-querry" className="text-blue-700 hover:text-blue-900 underline">Query vs Querry</a></p>
            <p><a href="/spelling/question-vs-quistion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quistion</a></p>
            <p><a href="/spelling/questionnaire-vs-questionnair" className="text-blue-700 hover:text-blue-900 underline">Questionnaire vs Questionnair</a></p>
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
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/conflict-words" className="text-blue-700 hover:text-blue-900 underline">Conflict Words</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
