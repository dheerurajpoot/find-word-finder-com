import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supervisor vs Supervisior - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supervisor&quot; and &quot;supervisior&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupervisorVsSupervisiorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Supervisor vs Supervisior
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Supervisor&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supervisior&quot; is always incorrect - remember the &quot;or&quot; ending in &quot;supervisor&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supervisior</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supervisor</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who supervises or oversees others.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supervisor&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;or&quot;</li>
                <li>• Follows &quot;supervise&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Common Error</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• &quot;Supervisior&quot; is wrong</li>
                <li>• Has &quot;ior&quot; instead of &quot;or&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Memory Aid</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Think &quot;SUPERVISE + OR&quot;</li>
                <li>• &quot;supervise&quot; like the verb</li>
                <li>• &quot;-or&quot; for people</li>
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
                <p className="text-lg text-green-800">&quot;My <strong>supervisor</strong> approved the project.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>supervisor</strong> oversees the team.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She is a great <strong>supervisor</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>supervisor</strong> gave feedback.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My <strong>supervisior</strong> approved the project.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervisor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>supervisior</strong> oversees the team.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervisor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is a great <strong>supervisior</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervisor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>supervisior</strong> gave feedback.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supervisor&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">OR Ending Rule</h3>
              <p className="text-green-800">&quot;Supervisor&quot; ends with &quot;or&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Supervise</h3>
              <p className="text-emerald-800">&quot;Supervisor&quot; like &quot;supervise&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Pattern Recognition</h3>
              <p className="text-teal-800">People ending with &quot;-or&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">SUPERVISE + OR = Supervisor</p>
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
                <li>• <strong>Project supervisor</strong> - project overseer</li>
                <li>• <strong>Team supervisor</strong> - team overseer</li>
                <li>• <strong>Department supervisor</strong> - department overseer</li>
                <li>• <strong>Shift supervisor</strong> - shift overseer</li>
                <li>• <strong>Production supervisor</strong> - production overseer</li>
                <li>• <strong>Quality supervisor</strong> - quality overseer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The supervisor helps&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Supervisor approves&quot;</li>
                <li>• <strong>Object:</strong> &quot;I met the supervisor&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Supervisor&apos;s feedback&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many supervisors&quot;</li>
                <li>• <strong>Article:</strong> &quot;A supervisor&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supervisor&quot; as &quot;supervisior&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse the ending with words like &quot;superior&quot; or &quot;inferior&quot; that end in &quot;-ior&quot;. They might accidentally use &quot;ior&quot; instead of &quot;or&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;supervisor&quot; related to &quot;supervise&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supervisor&quot; comes from the verb &quot;supervise&quot;. Think of it as &quot;someone who supervises&quot; - the person doing the action of supervising.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;supervisor&quot; and &quot;manager&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;supervisor&quot; typically oversees day-to-day operations and provides direct guidance, while a &quot;manager&quot; often has broader responsibilities including planning, budgeting, and strategic decision-making.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;supervisor&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supervisor&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;supervisor&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: overseer, manager, director, administrator, coordinator, foreman, and boss. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the verb &quot;supervise&quot; and remember that &quot;supervisor&quot; ends with &quot;or&quot;. The &quot;or&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPERVISOR ends with OR&quot;. Or remember: &quot;SUPERVISE + OR&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the base form of &quot;supervisor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervisor&quot; is a noun derived from the verb &quot;supervise&quot;. For example: &quot;I supervise&quot; (verb), &quot;I am a supervisor&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;supervisor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervisor&quot; comes from the Latin &quot;supervisor&quot; meaning &quot;overseer,&quot; from &quot;super&quot; (over) + &quot;videre&quot; (to see), literally meaning &quot;one who oversees.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;supervisor&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;supervisor&quot; is only a noun. The verb form is &quot;supervise&quot;. For example: &quot;I supervise the team&quot; (verb), &quot;I am a supervisor&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;supervisor&quot; and &quot;superior&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;supervisor&quot; is someone who oversees work or people, while a &quot;superior&quot; is someone higher in rank or position. Both can refer to the same person but emphasize different aspects.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;supervisor&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supervisor&quot; can be used in various contexts: workplace supervision, academic supervision, project supervision, and quality supervision. It always refers to someone who oversees others.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supervisor&quot;</strong> ends with &quot;or&quot; and means &quot;a person who supervises or oversees others.&quot; 
          <br />
          <strong>&quot;Supervisior&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPERVISE + OR&quot; and remember the &quot;or&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
