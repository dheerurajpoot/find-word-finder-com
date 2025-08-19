import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suddenly vs Suddendly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suddenly&quot; and &quot;suddendly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuddenlyVsSuddendlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Suddenly vs Suddendly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Suddenly&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suddendly&quot; is always incorrect - remember the &quot;ly&quot; ending in &quot;suddenly&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suddendly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suddenly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;happening or coming unexpectedly; without warning.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suddenly&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;ly&quot;</li>
                <li>• Follows &quot;sudden&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Error</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• &quot;Suddendly&quot; is wrong</li>
                <li>• Extra &quot;d&quot; added</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Memory Aid</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Think &quot;SUDDEN + LY&quot;</li>
                <li>• &quot;sudden&quot; like the adjective</li>
                <li>• &quot;ly&quot; for adverb ending</li>
                <li>• Related to &quot;sudden&quot;</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>suddenly</strong> appeared.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The weather changed <strong>suddenly</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>suddenly</strong> remembered.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;It happened <strong>suddenly</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>suddendly</strong> appeared.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suddenly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The weather changed <strong>suddendly</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suddenly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>suddendly</strong> remembered.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suddenly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;It happened <strong>suddendly</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suddenly&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">LY Ending Rule</h3>
              <p className="text-green-800">&quot;Suddenly&quot; ends with &quot;ly&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Sudden</h3>
              <p className="text-slate-800">&quot;Suddenly&quot; like &quot;sudden&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pattern Recognition</h3>
              <p className="text-gray-800">Adverbs ending with &quot;-ly&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Break It Down</h3>
              <p className="text-zinc-800">SUDDEN + LY = Suddenly</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Suddenly appeared</strong> - unexpectedly appeared</li>
                <li>• <strong>Suddenly changed</strong> - unexpectedly changed</li>
                <li>• <strong>Suddenly remembered</strong> - unexpectedly remembered</li>
                <li>• <strong>Suddenly happened</strong> - unexpectedly happened</li>
                <li>• <strong>Suddenly realized</strong> - unexpectedly realized</li>
                <li>• <strong>Suddenly stopped</strong> - unexpectedly stopped</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He suddenly appeared&quot;</li>
                <li>• <strong>Modifies verbs:</strong> &quot;suddenly appeared&quot;</li>
                <li>• <strong>Modifies adjectives:</strong> &quot;suddenly quiet&quot;</li>
                <li>• <strong>Modifies adverbs:</strong> &quot;suddenly very quiet&quot;</li>
                <li>• <strong>Sentence adverb:</strong> &quot;Suddenly, everything changed&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;more suddenly&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suddenly&quot; as &quot;suddendly&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may think &quot;suddenly&quot; needs an extra &quot;d&quot; before the &quot;ly&quot;. They might accidentally add a &quot;d&quot; when typing quickly or think it needs &quot;dly&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Is &quot;suddenly&quot; related to &quot;sudden&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suddenly&quot; is the adverb form of the adjective &quot;sudden&quot;. Think of it as &quot;in a sudden manner&quot; - the adverb form of the adjective that means &quot;unexpected&quot; or &quot;without warning.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the difference between &quot;suddenly&quot; and &quot;abruptly&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words mean happening without warning, but &quot;suddenly&quot; emphasizes the unexpected nature, while &quot;abruptly&quot; emphasizes the sharp, jarring nature of the change. &quot;Suddenly&quot; is more general, while &quot;abruptly&quot; is more specific.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Can &quot;suddenly&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suddenly&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suddenly&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: unexpectedly, abruptly, all at once, out of nowhere, without warning, and instantly. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;sudden&quot; and remember that &quot;suddenly&quot; ends with &quot;ly&quot;. The &quot;ly&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUDDENLY ends with LY&quot;. Or remember: &quot;SUDDEN + LY&quot; breaks down the word into manageable parts with the &quot;ly&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the base form of &quot;suddenly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sudden&quot; is the base form (adjective). For example: &quot;The change was sudden&quot; (adjective), &quot;The change happened suddenly&quot; (adverb). &quot;Suddenly&quot; is the adverb form derived from the adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;suddenly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suddenly&quot; comes from the Middle English &quot;sodeinly&quot;, from Old French &quot;sodain&quot; meaning &quot;sudden&quot;, ultimately from Latin &quot;subitaneus&quot; meaning &quot;sudden, unexpected&quot;. The &quot;-ly&quot; suffix was added to form the adverb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suddenly&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suddenly&quot; is only an adverb. The adjective form is &quot;sudden&quot;. For example: &quot;The change was sudden&quot; (adjective), &quot;The change happened suddenly&quot; (adverb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How do I use &quot;suddenly&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suddenly&quot; can be used in various contexts: narrative writing (suddenly appeared), casual conversation (suddenly remembered), formal writing (suddenly changed), and descriptive text (suddenly quiet). It always means &quot;happening unexpectedly or without warning.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suddenly&quot;</strong> ends with &quot;ly&quot; and means &quot;happening or coming unexpectedly; without warning.&quot; 
          <br />
          <strong>&quot;Suddendly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUDDEN + LY&quot; and remember the &quot;ly&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
