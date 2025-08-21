import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Secret vs Secrect - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;secret&quot; and &quot;secrect&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SecretVsSecrectPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Secret vs Secrect
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Secret&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Secrect&quot; is always incorrect - remember &quot;secret&quot; has only one &quot;c&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Secrect</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Secret</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;hidden&quot; or &quot;confidential information.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Secret&quot; (Correct)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;hidden&quot; or &quot;confidential&quot;</li>
                <li>• Has single &quot;c&quot;</li>
                <li>• Latin origin: &quot;secretus&quot;</li>
                <li>• Used as noun/adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Secrect&quot; (Wrong)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Extra &quot;c&quot; added</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Secrect&quot; is not a word</li>
                <li>• Extra letter &quot;c&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;Keep this <strong>secret</strong> safe.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;It&apos;s a <strong>secret</strong> recipe.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The <strong>secret</strong> meeting tonight.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;She told me a <strong>secret</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Keep this <strong>secrect</strong> safe&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secret&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;It&apos;s a <strong>secrect</strong> recipe&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secret&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>secrect</strong> meeting tonight&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secret&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She told me a <strong>secrect</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;secret&quot;</p>
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
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single C Rule</h3>
              <p className="text-yellow-800">&quot;Secret&quot; has only one &quot;c&quot; - think &quot;se-C-ret&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Secure</h3>
              <p className="text-blue-800">&quot;Secret&quot; and &quot;secure&quot; both have one &quot;c&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;secret&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Top secret</strong> - highly confidential</li>
                <li>• <strong>Trade secret</strong> - business information</li>
                <li>• <strong>Secret agent</strong> - undercover operative</li>
                <li>• <strong>Secret ingredient</strong> - hidden component</li>
                <li>• <strong>Open secret</strong> - widely known secret</li>
                <li>• <strong>State secret</strong> - government information</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Tell me the secret&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Secret meeting&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Secret was revealed&quot;</li>
                <li>• <strong>Object:</strong> &quot;Keep a secret&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Secret&apos;s importance&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many secrets&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people misspell &quot;secret&quot; as &quot;secrect&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people add an extra &quot;c&quot; thinking it makes the word look more correct. Remember that &quot;secret&quot; has only one &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;secrect&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;secrect&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are the different meanings of &quot;secret&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Secret&quot; can mean: hidden information, confidential knowledge, a mystery, something kept private, or used as an adjective meaning &quot;concealed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;secret&quot; has only one &quot;c&quot; like &quot;secure.&quot; Think &quot;A secret must be secure&quot; - both have single &quot;c.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;secret&quot; and &quot;confidential&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Secret&quot; implies complete hiddenness, while &quot;confidential&quot; means restricted to certain people. Secrets are hidden; confidential information is shared selectively.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;secret&quot; be used as both noun and adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! As a noun: &quot;Tell me your secret.&quot; As an adjective: &quot;It&apos;s a secret plan.&quot; The spelling remains the same in both uses.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: secrecy (noun), secretly (adverb), secretive (adjective), and secretary (person who handles secrets).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;secret&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Secret&quot; comes from the Latin &quot;secretus&quot; meaning &quot;set apart&quot; or &quot;hidden.&quot; It entered English through Old French in the 14th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What are some famous uses of &quot;secret&quot; in culture?</h3>
              <p className="text-lg text-gray-700">A: Famous uses include: &quot;The Secret Garden&quot; (novel), &quot;Secret Service&quot; (government agency), and &quot;Victoria&apos;s Secret&quot; (brand name).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Secret&quot;</strong> has only one &quot;c&quot; and means &quot;hidden&quot; or &quot;confidential.&quot; 
          <br />
          <strong>&quot;Secrect&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;se-C-ret&quot; - remember the single &quot;c&quot;!</p>
        </div>
      </div>
    </div>
  )
}
