import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suction vs Sucktion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suction&quot; and &quot;sucktion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuctionVsSucktionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Suction vs Sucktion
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
            <span className="text-2xl font-bold text-violet-600">&quot;Suction&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sucktion&quot; is always incorrect - remember the &quot;ct&quot; in &quot;suction&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sucktion</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suction</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act or process of drawing in or removing by suction.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suction&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;ct&quot; before &quot;ion&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Common Error</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;Sucktion&quot; is wrong</li>
                <li>• Missing &quot;ct&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Aid</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SUCK + TION&quot;</li>
                <li>• &quot;suck&quot; like the verb</li>
                <li>• &quot;ct&quot; before &quot;ion&quot;</li>
                <li>• Related to &quot;suck&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The vacuum uses <strong>suction</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>suction</strong> cup held firmly.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Dental <strong>suction</strong> removes saliva.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>suction</strong> pump was powerful.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The vacuum uses <strong>sucktion</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suction&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sucktion</strong> cup held firmly.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suction&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Dental <strong>sucktion</strong> removes saliva.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suction&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sucktion</strong> pump was powerful.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suction&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">CT Rule</h3>
              <p className="text-green-800">&quot;Suction&quot; has &quot;ct&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Think Suck</h3>
              <p className="text-violet-800">&quot;Suction&quot; like &quot;suck&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Pattern Recognition</h3>
              <p className="text-purple-800">Nouns ending with &quot;-ction&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Break It Down</h3>
              <p className="text-fuchsia-800">SUCK + TION = Suction</p>
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
                <li>• <strong>Suction cup</strong> - adhesive device</li>
                <li>• <strong>Suction pump</strong> - vacuum device</li>
                <li>• <strong>Dental suction</strong> - medical device</li>
                <li>• <strong>Suction power</strong> - vacuum strength</li>
                <li>• <strong>Suction hose</strong> - vacuum tube</li>
                <li>• <strong>Suction force</strong> - pulling power</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The suction is strong&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suction removes debris&quot;</li>
                <li>• <strong>Object:</strong> &quot;I need suction&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Suction&apos;s power&quot;</li>
                <li>• <strong>Article:</strong> &quot;A suction device&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Suction force&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suction&quot; as &quot;sucktion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suction&quot; has a &quot;ct&quot; before the &quot;ion&quot;. They might accidentally drop the &quot;ct&quot; when typing quickly or think it only needs &quot;tion&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Is &quot;suction&quot; related to &quot;suck&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suction&quot; is the noun form of the verb &quot;suck&quot;. Think of it as &quot;the action of sucking&quot; - the noun form of the action of drawing in or removing by creating a vacuum.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;suction&quot; and &quot;vacuum&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suction&quot; refers to the act or process of drawing in by creating a partial vacuum, while &quot;vacuum&quot; refers to a space entirely devoid of matter or a device that creates suction. &quot;Suction&quot; is the action, &quot;vacuum&quot; is the device or space.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can &quot;suction&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suction&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, technical documents, medical papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suction&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: vacuum, drawing, extraction, removal, and aspiration. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suck&quot; and remember that &quot;suction&quot; has a &quot;ct&quot; before the &quot;ion&quot;. The &quot;ct&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUCTION has CT&quot;. Or remember: &quot;SUCK + TION&quot; breaks down the word into manageable parts with the &quot;ct&quot; before &quot;ion&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the base form of &quot;suction&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suck&quot; is the base form (verb). For example: &quot;I suck&quot; (verb), &quot;I use suction&quot; (noun). &quot;Suction&quot; is the noun form derived from the verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;suction&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suction&quot; comes from the Latin &quot;suctio&quot; meaning &quot;a sucking&quot;, from &quot;sugere&quot; meaning &quot;to suck&quot;. It entered English in the early 17th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suction&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suction&quot; is only a noun. The verb form is &quot;to suck&quot;. For example: &quot;I suck&quot; (verb), &quot;I use suction&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How do I use &quot;suction&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suction&quot; can be used in various contexts: household (vacuum suction), medical (dental suction), industrial (suction pumps), and scientific (suction force). It always refers to the act of drawing in by creating a partial vacuum.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suction&quot;</strong> has a &quot;ct&quot; before &quot;ion&quot; and means &quot;the act or process of drawing in or removing by suction.&quot; 
          <br />
          <strong>&quot;Sucktion&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUCK + TION&quot; and remember the &quot;ct&quot;!</p>
        </div>
      </div>
    </div>
  )
}
