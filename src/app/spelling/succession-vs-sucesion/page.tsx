import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Succession vs Sucesion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;succession&quot; and &quot;sucesion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuccessionVsSucesionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Succession vs Sucesion
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
            <span className="text-2xl font-bold text-slate-600">&quot;Succession&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sucesion&quot; is always incorrect - remember the double &quot;c&quot; in &quot;succession&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sucesion</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Succession</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a number of people or things sharing a specified characteristic and following one after the other.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Succession&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;c&quot;</li>
                <li>• Follows &quot;success&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Error</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• &quot;Sucesion&quot; is wrong</li>
                <li>• Missing second &quot;c&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Memory Aid</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Think &quot;SUCCESS + ION&quot;</li>
                <li>• &quot;success&quot; like achievement</li>
                <li>• Double &quot;c&quot; for emphasis</li>
                <li>• Related to &quot;success&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>succession</strong> of events was unexpected.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He is next in line of <strong>succession</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>succession</strong> of kings continued.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Natural <strong>succession</strong> in ecosystems.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sucesion</strong> of events was unexpected.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succession&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is next in line of <strong>sucesion</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succession&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sucesion</strong> of kings continued.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succession&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Natural <strong>sucesion</strong> in ecosystems.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succession&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">Double C Rule</h3>
              <p className="text-green-800">&quot;Succession&quot; has double &quot;c&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Success</h3>
              <p className="text-slate-800">&quot;Succession&quot; like &quot;success&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pattern Recognition</h3>
              <p className="text-gray-800">Words ending with &quot;-ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Break It Down</h3>
              <p className="text-zinc-800">SUCCESS + ION = Succession</p>
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
                <li>• <strong>Line of succession</strong> - order of inheritance</li>
                <li>• <strong>Natural succession</strong> - ecological progression</li>
                <li>• <strong>Order of succession</strong> - sequence of events</li>
                <li>• <strong>Succession planning</strong> - leadership transition</li>
                <li>• <strong>Succession rights</strong> - inheritance rights</li>
                <li>• <strong>Succession crisis</strong> - leadership vacuum</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The succession continues&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Succession provides order&quot;</li>
                <li>• <strong>Object:</strong> &quot;They planned the succession&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Succession&apos;s importance&quot;</li>
                <li>• <strong>Article:</strong> &quot;A succession&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Succession rights&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;succession&quot; as &quot;sucesion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;succession&quot; has a double &quot;c&quot;. They might accidentally drop one &quot;c&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Is &quot;succession&quot; related to &quot;success&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Succession&quot; comes from the word &quot;success&quot; and refers to a sequence or series of things following one after another. Think of it as &quot;the order of successful transitions&quot; or &quot;the sequence of achievements.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the difference between &quot;succession&quot; and &quot;sequence&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words refer to things following one after another, but &quot;succession&quot; often implies a more formal or planned order, especially in contexts like leadership, inheritance, or natural processes. &quot;Sequence&quot; is more general and can refer to any ordered arrangement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Can &quot;succession&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Succession&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, legal documents, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;succession&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: sequence, series, progression, order, line, chain, and sequence. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;success&quot; and remember that &quot;succession&quot; has a double &quot;c&quot;. The double &quot;c&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUCCESSION has double C&quot;. Or remember: &quot;SUCCESS + ION&quot; breaks down the word into manageable parts with the double &quot;c&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the base form of &quot;succession&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succession&quot; is the base form (noun). It doesn&apos;t have a verb form. For example: &quot;The succession continues&quot; (noun), &quot;They will succeed&quot; (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;succession&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succession&quot; comes from the Latin &quot;successio&quot; meaning &quot;a following, a sequence&quot;, from &quot;succedere&quot; meaning &quot;to go up, follow after, take the place of.&quot; It entered English in the late 13th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;succession&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;succession&quot; is only a noun. The verb form is &quot;to succeed&quot;. For example: &quot;The succession continues&quot; (noun), &quot;They will succeed to the throne&quot; (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;succession&quot; and &quot;inheritance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succession&quot; refers to the order or sequence of people following one after another, while &quot;inheritance&quot; specifically refers to receiving property, titles, or rights from someone who has died. &quot;Succession&quot; is broader and can include non-inheritance contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;succession&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succession&quot; can be used in various contexts: leadership (CEO succession), monarchy (royal succession), ecology (natural succession), business (succession planning), and general sequences (succession of events). It always refers to things following one after another in order.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;succession&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succession&quot; is neutral in connotation - it simply describes the order or sequence of things following one after another. The positive or negative association depends on the context and the specific situation being described.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Succession&quot;</strong> has a double &quot;c&quot; and means &quot;a number of people or things sharing a specified characteristic and following one after the other.&quot; 
          <br />
          <strong>&quot;Sucesion&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUCCESS + ION&quot; and remember the double &quot;c&quot;!</p>
        </div>
      </div>
    </div>
  )
}
