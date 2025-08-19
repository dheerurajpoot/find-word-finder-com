import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supersede vs Superceed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supersede&quot; and &quot;superceed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupersedeVsSuperceedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Supersede vs Superceed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Supersede&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Superceed&quot; is always incorrect - remember the &quot;de&quot; ending in &quot;supersede&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Superceed</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supersede</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to replace or supplant by something else.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supersede&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;de&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Common Error</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• &quot;Superceed&quot; is wrong</li>
                <li>• Has &quot;ceed&quot; instead of &quot;de&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Memory Aid</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Think &quot;SUPER + SEDE&quot;</li>
                <li>• &quot;super&quot; like &quot;above&quot;</li>
                <li>• &quot;-sede&quot; from Latin</li>
                <li>• Related to &quot;sedere&quot;</li>
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
                <p className="text-lg text-green-800">&quot;New technology will <strong>supersede</strong> the old.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The law will <strong>supersede</strong> previous regulations.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Digital books <strong>supersede</strong> printed ones.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Modern methods <strong>supersede</strong> traditional ones.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;New technology will <strong>superceed</strong> the old.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supersede&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The law will <strong>superceed</strong> previous regulations.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supersede&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Digital books <strong>superceed</strong> printed ones.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supersede&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Modern methods <strong>superceed</strong> traditional ones.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supersede&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">DE Ending Rule</h3>
              <p className="text-green-800">&quot;Supersede&quot; ends with &quot;de&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Super</h3>
              <p className="text-orange-800">&quot;Supersede&quot; like &quot;super&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Pattern Recognition</h3>
              <p className="text-red-800">Verbs ending with &quot;-de&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Break It Down</h3>
              <p className="text-pink-800">SUPER + SEDE = Supersede</p>
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
                <li>• <strong>Supersede by</strong> - replaced by</li>
                <li>• <strong>Supersede technology</strong> - replace technology</li>
                <li>• <strong>Supersede methods</strong> - replace methods</li>
                <li>• <strong>Supersede laws</strong> - replace laws</li>
                <li>• <strong>Supersede systems</strong> - replace systems</li>
                <li>• <strong>Supersede regulations</strong> - replace regulations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I supersede&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I superseded&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will supersede&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Superseding&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To supersede&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Supersede it&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supersede&quot; as &quot;superceed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse the ending with words like &quot;proceed&quot; or &quot;succeed&quot; that end in &quot;-ceed&quot;. They might accidentally use &quot;ceed&quot; instead of &quot;de&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;supersede&quot; related to &quot;super&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supersede&quot; comes from the Latin &quot;super&quot; meaning &quot;above&quot; and &quot;sedere&quot; meaning &quot;to sit&quot;. Think of it as &quot;sitting above&quot; or being superior to something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;supersede&quot; and &quot;replace&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supersede&quot; means to replace or supplant by something better or more advanced, while &quot;replace&quot; simply means to substitute. &quot;Supersede&quot; implies improvement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;supersede&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supersede&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;supersede&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: replace, supplant, displace, override, overtake, and take over. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;super&quot; and remember that &quot;supersede&quot; ends with &quot;de&quot;. The &quot;de&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPERCEDE ends with DE&quot;. Or remember: &quot;SUPER + SEDE&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the base form of &quot;supersede&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supersede&quot; is the base form (infinitive) of the verb. For example: &quot;I supersede&quot; (present), &quot;I superseded&quot; (past), &quot;I have superseded&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;supersede&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supersede&quot; comes from the Latin &quot;supersedere&quot; meaning &quot;to sit above, preside over, be superior to,&quot; from &quot;super&quot; (above) + &quot;sedere&quot; (to sit).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Can &quot;supersede&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;supersede&quot; is only a verb. The noun form is &quot;supersession&quot;. For example: &quot;I supersede&quot; (verb), &quot;The supersession occurred&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What&apos;s the difference between &quot;supersede&quot; and &quot;override&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supersede&quot; means to replace or supplant by something better, while &quot;override&quot; means to prevail over or disregard. Both involve taking precedence but differently.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;supersede&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supersede&quot; can be used in various contexts: technology updates, legal changes, method improvements, and system upgrades. It always refers to replacing something with something better.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supersede&quot;</strong> ends with &quot;de&quot; and means &quot;to replace or supplant by something else.&quot; 
          <br />
          <strong>&quot;Superceed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPER + SEDE&quot; and remember the &quot;de&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
