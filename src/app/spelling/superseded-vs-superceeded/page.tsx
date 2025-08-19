import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Superseded vs Superceeded - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;superseded&quot; and &quot;superceeded&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupersededVsSuperceededPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Superseded vs Superceeded
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
            <span className="text-2xl font-bold text-slate-600">&quot;Superseded&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Superceeded&quot; is always incorrect - remember the &quot;sed&quot; ending in &quot;superseded&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Superceeded</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Superseded</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;replaced or supplanted by something else.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Superseded&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;sed&quot;</li>
                <li>• Follows &quot;supersede&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Error</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• &quot;Superceeded&quot; is wrong</li>
                <li>• Has &quot;ceeded&quot; instead of &quot;sed&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Memory Aid</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Think &quot;SUPERSE + D&quot;</li>
                <li>• &quot;supersede&quot; like the verb</li>
                <li>• &quot;-ed&quot; for past tense</li>
                <li>• Related to &quot;supersede&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The old system was <strong>superseded</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Technology has <strong>superseded</strong> manual methods.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The law was <strong>superseded</strong> by new regulations.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Old methods were <strong>superseded</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The old system was <strong>superceeded</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superseded&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Technology has <strong>superceeded</strong> manual methods.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superseded&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The law was <strong>superceeded</strong> by new regulations.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superseded&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Old methods were <strong>superceeded</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superseded&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">SED Ending Rule</h3>
              <p className="text-green-800">&quot;Superseded&quot; ends with &quot;sed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Supersede</h3>
              <p className="text-slate-800">&quot;Superseded&quot; like &quot;supersede&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pattern Recognition</h3>
              <p className="text-gray-800">Past tense ending with &quot;-ed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Break It Down</h3>
              <p className="text-zinc-800">SUPERSE + D = Superseded</p>
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
                <li>• <strong>Superseded by</strong> - replaced by</li>
                <li>• <strong>Superseded technology</strong> - outdated technology</li>
                <li>• <strong>Superseded methods</strong> - outdated methods</li>
                <li>• <strong>Superseded laws</strong> - outdated laws</li>
                <li>• <strong>Superseded systems</strong> - outdated systems</li>
                <li>• <strong>Superseded regulations</strong> - outdated regulations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I superseded&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have superseded&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;It was superseded&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Superseded methods&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Superseded systems fail&quot;</li>
                <li>• <strong>Object:</strong> &quot;I replaced the superseded&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;superseded&quot; as &quot;superceeded&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse the ending with words like &quot;proceeded&quot; or &quot;succeeded&quot; that end in &quot;-ceeded&quot;. They might accidentally use &quot;ceeded&quot; instead of &quot;sed&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Is &quot;superseded&quot; related to &quot;supersede&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Superseded&quot; is the past tense and past participle of the verb &quot;supersede&quot;. Think of it as &quot;having been superseded&quot; - the completed action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the difference between &quot;superseded&quot; and &quot;replaced&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superseded&quot; means replaced or supplanted by something better or more advanced, while &quot;replaced&quot; simply means substituted. &quot;Superseded&quot; implies improvement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Can &quot;superseded&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Superseded&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;superseded&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: replaced, supplanted, displaced, outdated, obsolete, and outdated. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the verb &quot;supersede&quot; and remember that &quot;superseded&quot; ends with &quot;sed&quot;. The &quot;sed&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPERSEDED ends with SED&quot;. Or remember: &quot;SUPERSE + D&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;superseded&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superseded&quot; is the past tense and past participle of the verb &quot;supersede&quot;. For example: &quot;I supersede&quot; (present), &quot;I superseded&quot; (past), &quot;I have superseded&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;superseded&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superseded&quot; comes from the Latin &quot;supersedere&quot; meaning &quot;to sit above, preside over, be superior to,&quot; from &quot;super&quot; (above) + &quot;sedere&quot; (to sit).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;superseded&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;superseded&quot; is only a verb form (past tense/past participle) and adjective. The noun form is &quot;supersession&quot;. For example: &quot;I superseded&quot; (verb), &quot;The superseded system&quot; (adjective).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;superseded&quot; and &quot;obsolete&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superseded&quot; means replaced by something better or more advanced, while &quot;obsolete&quot; means no longer in use or out of date. Both imply outdatedness but differently.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;superseded&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superseded&quot; can be used in various contexts: technology updates, legal changes, method improvements, and system upgrades. It always refers to being replaced by something better.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Superseded&quot;</strong> ends with &quot;sed&quot; and means &quot;replaced or supplanted by something else.&quot; 
          <br />
          <strong>&quot;Superceeded&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPERSE + D&quot; and remember the &quot;sed&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
