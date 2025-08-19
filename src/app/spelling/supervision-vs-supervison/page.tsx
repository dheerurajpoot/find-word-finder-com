import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supervision vs Supervison - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supervision&quot; and &quot;supervison&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupervisionVsSupervisonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Supervision vs Supervison
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Supervision&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supervison&quot; is always incorrect - remember the &quot;ion&quot; ending in &quot;supervision&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supervison</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supervision</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of supervising or overseeing.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supervision&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;ion&quot;</li>
                <li>• Follows &quot;supervise&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Common Error</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;Supervison&quot; is wrong</li>
                <li>• Missing &quot;i&quot; before &quot;on&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Aid</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SUPERVISE + ION&quot;</li>
                <li>• &quot;supervise&quot; like the verb</li>
                <li>• &quot;-ion&quot; for nouns</li>
                <li>• Related to &quot;supervise&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The project needs proper <strong>supervision</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Under close <strong>supervision</strong>, the work improved.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Parental <strong>supervision</strong> is important.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>supervision</strong> was effective.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The project needs proper <strong>supervison</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervision&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Under close <strong>supervison</strong>, the work improved.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervision&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Parental <strong>supervison</strong> is important.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervision&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>supervison</strong> was effective.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervision&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">ION Ending Rule</h3>
              <p className="text-green-800">&quot;Supervision&quot; ends with &quot;ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Think Supervise</h3>
              <p className="text-violet-800">&quot;Supervision&quot; like &quot;supervise&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Pattern Recognition</h3>
              <p className="text-purple-800">Nouns ending with &quot;-ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Break It Down</h3>
              <p className="text-fuchsia-800">SUPERVISE + ION = Supervision</p>
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
                <li>• <strong>Close supervision</strong> - careful oversight</li>
                <li>• <strong>Direct supervision</strong> - immediate oversight</li>
                <li>• <strong>Parental supervision</strong> - parent oversight</li>
                <li>• <strong>Professional supervision</strong> - professional oversight</li>
                <li>• <strong>Quality supervision</strong> - quality oversight</li>
                <li>• <strong>Project supervision</strong> - project oversight</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The supervision helps&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Supervision improves&quot;</li>
                <li>• <strong>Object:</strong> &quot;I need supervision&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Supervision&apos;s quality&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many supervisions&quot;</li>
                <li>• <strong>Article:</strong> &quot;A supervision&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supervision&quot; as &quot;supervison&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;supervision&quot; has an &quot;i&quot; before &quot;on&quot;. They might accidentally drop the &quot;i&quot; when typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Is &quot;supervision&quot; related to &quot;supervise&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supervision&quot; comes from the verb &quot;supervise&quot;. Think of it as &quot;the act of supervising&quot; - the noun form of the action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;supervision&quot; and &quot;management&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervision&quot; typically refers to overseeing and guiding work or people, while &quot;management&quot; often involves broader responsibilities including planning, organizing, and controlling resources.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can &quot;supervision&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supervision&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;supervision&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: oversight, guidance, direction, control, monitoring, and management. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the verb &quot;supervise&quot; and remember that &quot;supervision&quot; ends with &quot;ion&quot;. The &quot;ion&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPERVISION ends with ION&quot;. Or remember: &quot;SUPERVISE + ION&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;supervision&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervision&quot; is a noun derived from the verb &quot;supervise&quot;. For example: &quot;I supervise&quot; (verb), &quot;I provide supervision&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;supervision&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervision&quot; comes from the Latin &quot;supervisio&quot; meaning &quot;oversight,&quot; from &quot;super&quot; (over) + &quot;videre&quot; (to see), literally meaning &quot;the act of overseeing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;supervision&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;supervision&quot; is only a noun. The verb form is &quot;supervise&quot;. For example: &quot;I supervise the team&quot; (verb), &quot;I provide supervision&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;supervision&quot; and &quot;oversight&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervision&quot; typically involves active guidance and direction, while &quot;oversight&quot; often refers to general monitoring and ensuring things are done correctly. Both involve watching over but differently.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How do I use &quot;supervision&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervision&quot; can be used in various contexts: workplace supervision, academic supervision, parental supervision, and quality supervision. It always refers to the act of overseeing.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supervision&quot;</strong> ends with &quot;ion&quot; and means &quot;the act of supervising or overseeing.&quot; 
          <br />
          <strong>&quot;Supervison&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPERVISE + ION&quot; and remember the &quot;ion&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
