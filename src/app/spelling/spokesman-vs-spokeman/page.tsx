import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spokesman vs Spokeman - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spokesman&quot; and &quot;spokeman&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpokesmanVsSpokemanPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Spokesman vs Spokeman
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎤</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Spokesman&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spokeman&quot; is always incorrect - remember the &quot;es&quot; in &quot;spokesman&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spokeman</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Spokesman</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who speaks on behalf of a group or organization.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Spokesman&quot; (Compound Noun)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• &quot;Spokes&quot; + &quot;man&quot;</li>
                <li>• Has &quot;es&quot; in middle</li>
                <li>• Means &quot;speaker&quot;</li>
                <li>• Official representative</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Word Structure</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• &quot;Spoke&quot; = past tense of speak</li>
                <li>• &quot;es&quot; = plural marker</li>
                <li>• &quot;man&quot; = person</li>
                <li>• One who speaks</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Common Confusion</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• People forget &quot;es&quot;</li>
                <li>• Similar to &quot;spokesman&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember structure</li>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The company <strong>spokesman</strong> issued a statement.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The government <strong>spokesman</strong> addressed the media.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;Our <strong>spokesman</strong> will handle the press conference.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>spokesman</strong> clarified the organization&apos;s position.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company <strong>spokeman</strong> issued&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spokesman&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The government <strong>spokeman</strong> addressed&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spokesman&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Our <strong>spokeman</strong> will handle&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spokesman&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>spokeman</strong> clarified&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spokesman&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🎤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ES Rule</h3>
              <p className="text-yellow-800">&quot;Spokesman&quot; has &quot;es&quot; like &quot;speaks&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Speaking</h3>
              <p className="text-slate-800">Spokesman = one who speaks = &quot;es&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Write It Out</h3>
              <p className="text-gray-800">Practice writing &quot;spokesman&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Proofread</h3>
              <p className="text-zinc-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Company spokesman</strong> - business representative</li>
                <li>• <strong>Government spokesman</strong> - official representative</li>
                <li>• <strong>Military spokesman</strong> - armed forces representative</li>
                <li>• <strong>Police spokesman</strong> - law enforcement representative</li>
                <li>• <strong>Hospital spokesman</strong> - medical facility representative</li>
                <li>• <strong>University spokesman</strong> - educational institution representative</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;The spokesman addressed the crowd&quot;</li>
                <li>• <strong>Object:</strong> &quot;They appointed a spokesman&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The spokesman&apos;s statement&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;John, our spokesman&quot;</li>
                <li>• <strong>Direct address:</strong> &quot;Spokesman, come here&quot;</li>
                <li>• <strong>Predicate nominative:</strong> &quot;He is our spokesman&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people misspell &quot;spokesman&quot; as &quot;spokeman&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;es&quot; in the middle of the word. Some people may also be influenced by similar words or unclear pronunciation of the compound structure.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the etymology of &quot;spokesman&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spokesman&quot; comes from &quot;spoke&quot; (past tense of speak) + &quot;man.&quot; It literally means &quot;a man who speaks&quot; or &quot;one who speaks on behalf of others.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Is &quot;spokesman&quot; gender-specific?</h3>
              <p className="text-lg text-gray-700">A: Traditionally, &quot;spokesman&quot; referred specifically to men. In modern usage, &quot;spokesperson&quot; is often preferred as a gender-neutral alternative, though &quot;spokesman&quot; is still commonly used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;spokesman&quot; and &quot;spokesperson&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spokesman&quot; traditionally refers to a male representative, while &quot;spokesperson&quot; is gender-neutral and can refer to anyone regardless of gender. &quot;Spokesperson&quot; is often preferred in modern, inclusive language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;spokesman&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;spokesman&quot; is perfectly acceptable in formal writing, though &quot;spokesperson&quot; may be preferred in contexts where gender neutrality is important.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;spokesman&quot; as &quot;spoke&quot; + &quot;s&quot; + &quot;man.&quot; The &quot;es&quot; comes from the plural form, so remember: &quot;one who speaks&quot; = &quot;spokes&quot; + &quot;man.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;spokesman&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: spokesperson, representative, mouthpiece, advocate, delegate, envoy, agent, and intermediary. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;spokeman&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spokeman&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spokesman&quot; with the &quot;es&quot; in the middle.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spokesman&quot;</strong> has &quot;es&quot; in the middle and means &quot;one who speaks on behalf of others.&quot; 
          <br />
          <strong>&quot;Spokeman&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPOKESMAN = one who speaks = ES in middle&quot;</p>
        </div>
      </div>
    </div>
  )
}
