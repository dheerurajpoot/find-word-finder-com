import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Successor vs Sucessor - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;successor&quot; and &quot;sucessor&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuccessorVsSucessorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
          Successor vs Sucessor
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Successor&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sucessor&quot; is always incorrect - remember the double &quot;c&quot; in &quot;successor&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sucessor</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Successor</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who follows and takes the place of another.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Successor&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;c&quot;</li>
                <li>• Follows &quot;success&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Common Error</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• &quot;Sucessor&quot; is wrong</li>
                <li>• Missing second &quot;c&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Memory Aid</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Think &quot;SUCCESS + OR&quot;</li>
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
                <p className="text-lg text-green-800">&quot;He was named the <strong>successor</strong> to the CEO.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The new president is the <strong>successor</strong> to the previous one.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She will be the <strong>successor</strong> to the throne.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The company found a suitable <strong>successor</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He was named the <strong>sucessor</strong> to the CEO.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;successor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The new president is the <strong>sucessor</strong> to the previous one.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;successor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She will be the <strong>sucessor</strong> to the throne.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;successor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company found a suitable <strong>sucessor</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;successor&quot;</p>
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
              <p className="text-green-800">&quot;Successor&quot; has double &quot;c&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Success</h3>
              <p className="text-emerald-800">&quot;Successor&quot; like &quot;success&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Pattern Recognition</h3>
              <p className="text-teal-800">Words ending with &quot;-or&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Break It Down</h3>
              <p className="text-cyan-800">SUCCESS + OR = Successor</p>
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
                <li>• <strong>Legal successor</strong> - legal heir</li>
                <li>• <strong>Natural successor</strong> - logical replacement</li>
                <li>• <strong>Designated successor</strong> - chosen replacement</li>
                <li>• <strong>Immediate successor</strong> - next in line</li>
                <li>• <strong>Appointed successor</strong> - officially named</li>
                <li>• <strong>Potential successor</strong> - possible replacement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The successor arrives&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Successor takes over&quot;</li>
                <li>• <strong>Object:</strong> &quot;They chose a successor&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Successor&apos;s role&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many successors&quot;</li>
                <li>• <strong>Article:</strong> &quot;A successor&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;successor&quot; as &quot;sucessor&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;successor&quot; has a double &quot;c&quot;. They might accidentally drop one &quot;c&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;successor&quot; related to &quot;success&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Successor&quot; comes from the word &quot;success&quot; and means someone who follows and takes the place of another. Think of it as &quot;the next person to achieve success&quot; in a particular role or position.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;successor&quot; and &quot;replacement&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words refer to someone who takes another&apos;s place, but &quot;successor&quot; often implies a more formal or planned transition, especially in positions of authority or leadership. &quot;Replacement&quot; is more general and can refer to any substitution.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;successor&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Successor&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, business documents, legal documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;successor&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: replacement, heir, inheritor, follower, next-in-line, and replacement. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;success&quot; and remember that &quot;successor&quot; has a double &quot;c&quot;. The double &quot;c&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUCCESSOR has double C&quot;. Or remember: &quot;SUCCESS + OR&quot; breaks down the word into manageable parts with the double &quot;c&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the base form of &quot;successor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Successor&quot; is the base form (noun). It doesn&apos;t have a verb form. For example: &quot;He is a successor&quot; (noun), &quot;He will succeed&quot; (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;successor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Successor&quot; comes from the Latin &quot;successor&quot; meaning &quot;follower, successor&quot;, from &quot;succedere&quot; meaning &quot;to go up, follow after, take the place of.&quot; It entered English in the late 13th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;successor&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;successor&quot; is only a noun. The verb form is &quot;to succeed&quot;. For example: &quot;He is a successor&quot; (noun), &quot;He will succeed to the throne&quot; (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;successor&quot; and &quot;heir&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Successor&quot; is a broader term that can refer to anyone who follows and takes the place of another, while &quot;heir&quot; specifically refers to someone who inherits property, titles, or rights, usually through family lineage or legal designation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;successor&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Successor&quot; can be used in various contexts: business (CEO successor), politics (presidential successor), monarchy (royal successor), and general leadership (team leader successor). It always refers to someone who follows and takes another&apos;s place.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;successor&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: &quot;Successor&quot; is neutral in connotation - it simply describes someone who follows and takes another&apos;s place. The positive or negative association depends on the context and the specific situation being described.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Successor&quot;</strong> has a double &quot;c&quot; and means &quot;a person who follows and takes the place of another.&quot; 
          <br />
          <strong>&quot;Sucessor&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUCCESS + OR&quot; and remember the double &quot;c&quot;!</p>
        </div>
      </div>
    </div>
  )
}
