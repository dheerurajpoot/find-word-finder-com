import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Summary vs Sumary - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;summary&quot; and &quot;sumary&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SummaryVsSumaryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Summary vs Sumary
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
            <span className="text-2xl font-bold text-green-600">&quot;Summary&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sumary&quot; is always incorrect - remember the double &quot;m&quot; in &quot;summary&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sumary</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Summary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a brief statement or account of the main points.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Summary&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;m&quot;</li>
                <li>• Follows &quot;sum&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Common Error</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• &quot;Sumary&quot; is wrong</li>
                <li>• Missing second &quot;m&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Memory Aid</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Think &quot;SUM + MARY&quot;</li>
                <li>• &quot;sum&quot; like &quot;total&quot;</li>
                <li>• Double &quot;m&quot; for completeness</li>
                <li>• Related to &quot;sum&quot;</li>
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
                <p className="text-lg text-green-800">&quot;Here is a <strong>summary</strong> of the meeting.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Please provide a <strong>summary</strong> of the report.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>summary</strong> was concise and clear.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I wrote a <strong>summary</strong> of the book.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Here is a <strong>sumary</strong> of the meeting.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Please provide a <strong>sumary</strong> of the report.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sumary</strong> was concise and clear.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I wrote a <strong>sumary</strong> of the book.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summary&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">Double M Rule</h3>
              <p className="text-green-800">&quot;Summary&quot; has double &quot;m&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Sum</h3>
              <p className="text-emerald-800">&quot;Summary&quot; like &quot;sum&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Pattern Recognition</h3>
              <p className="text-teal-800">Words with double consonants</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Break It Down</h3>
              <p className="text-cyan-800">SUM + MARY = Summary</p>
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
                <li>• <strong>Executive summary</strong> - brief overview</li>
                <li>• <strong>Summary report</strong> - condensed report</li>
                <li>• <strong>Summary judgment</strong> - legal decision</li>
                <li>• <strong>Summary dismissal</strong> - quick dismissal</li>
                <li>• <strong>Summary execution</strong> - quick execution</li>
                <li>• <strong>Summary proceedings</strong> - quick proceedings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The summary helps&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Summary information&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Summary provides overview&quot;</li>
                <li>• <strong>Object:</strong> &quot;I read the summary&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Summary&apos;s main points&quot;</li>
                <li>• <strong>Article:</strong> &quot;A summary of events&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;summary&quot; as &quot;sumary&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;summary&quot; has a double &quot;m&quot;. They might accidentally drop one &quot;m&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;summary&quot; related to &quot;sum&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Summary&quot; comes from the Latin &quot;summarium&quot; and is related to the idea of &quot;sum&quot; or &quot;total&quot; - representing the complete overview. The double &quot;m&quot; helps distinguish it from other words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;summary&quot; and &quot;summary&quot;?</h3>
              <p className="text-lg text-gray-700">A: There is no difference - &quot;summary&quot; is the correct spelling. &quot;Sumary&quot; (with one &quot;m&quot;) is always incorrect and should never be used in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;summary&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Summary&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;summary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: overview, synopsis, abstract, digest, outline, and recap. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;sum&quot; and remember that &quot;summary&quot; has a double &quot;m&quot;. The double &quot;m&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUMMARY has double M&quot;. Or remember: &quot;SUM + MARY&quot; breaks down the word into manageable parts with the double &quot;m&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the base form of &quot;summary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summary&quot; is a noun that doesn&apos;t have a base form in the traditional sense. It&apos;s a complete word that stands alone, though it can be used as an adjective (e.g., &quot;summary report&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;summary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summary&quot; comes from the Latin &quot;summarium&quot; meaning &quot;summary, abstract,&quot; from &quot;summa&quot; meaning &quot;sum, total,&quot; related to the idea of a complete overview.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;summary&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;summary&quot; is primarily a noun and adjective. The verb form would be &quot;to summarize&quot; (meaning to make a summary), but this is different from the noun &quot;summary&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;summary&quot; and &quot;abstract&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summary&quot; is a general term for a brief overview, while &quot;abstract&quot; specifically refers to a summary at the beginning of academic papers or research articles. Both provide overviews but in different contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;summary&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summary&quot; can be used in various contexts: business reports (executive summary), academic papers (summary of findings), legal documents (summary judgment), and general communication (summary of events). It always refers to a condensed overview.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Summary&quot;</strong> has a double &quot;m&quot; and means &quot;a brief statement or account of the main points.&quot; 
          <br />
          <strong>&quot;Sumary&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUM + MARY&quot; and remember the double &quot;m&quot;!</p>
        </div>
      </div>
    </div>
  )
}
