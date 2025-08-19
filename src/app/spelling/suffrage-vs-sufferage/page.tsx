import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suffrage vs Sufferage - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suffrage&quot; and &quot;sufferage&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuffrageVsSufferagePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
          Suffrage vs Sufferage
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-pink-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Suffrage&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sufferage&quot; is always incorrect - remember the &quot;rage&quot; ending in &quot;suffrage&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sufferage</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suffrage</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the right to vote in political elections.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suffrage&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;rage&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Error</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Sufferage&quot; is wrong</li>
                <li>• Extra &quot;e&quot; added</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Memory Aid</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Think &quot;SUFF + RAGE&quot;</li>
                <li>• &quot;suff&quot; like &quot;stuff&quot;</li>
                <li>• &quot;rage&quot; for anger</li>
                <li>• Related to voting rights</li>
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
                <p className="text-lg text-green-800">&quot;Women&apos;s <strong>suffrage</strong> was a major milestone.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Universal <strong>suffrage</strong> is a democratic principle.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>suffrage</strong> movement fought for voting rights.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Equal <strong>suffrage</strong> for all citizens.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Women&apos;s <strong>sufferage</strong> was a major milestone.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffrage&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Universal <strong>sufferage</strong> is a democratic principle.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffrage&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sufferage</strong> movement fought for voting rights.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffrage&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Equal <strong>sufferage</strong> for all citizens.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suffrage&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">RAGE Ending Rule</h3>
              <p className="text-green-800">&quot;Suffrage&quot; ends with &quot;rage&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Voting Rights</h3>
              <p className="text-purple-800">&quot;Suffrage&quot; = voting rights</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Pattern Recognition</h3>
              <p className="text-violet-800">Words ending with &quot;-rage&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Break It Down</h3>
              <p className="text-pink-800">SUFF + RAGE = Suffrage</p>
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
                <li>• <strong>Universal suffrage</strong> - voting rights for all</li>
                <li>• <strong>Women&apos;s suffrage</strong> - women&apos;s voting rights</li>
                <li>• <strong>Equal suffrage</strong> - equal voting rights</li>
                <li>• <strong>Suffrage movement</strong> - voting rights campaign</li>
                <li>• <strong>Adult suffrage</strong> - adult voting rights</li>
                <li>• <strong>Limited suffrage</strong> - restricted voting rights</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Suffrage is important&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suffrage provides rights&quot;</li>
                <li>• <strong>Object:</strong> &quot;They fought for suffrage&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Suffrage&apos;s importance&quot;</li>
                <li>• <strong>Article:</strong> &quot;The suffrage movement&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Suffrage rights&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suffrage&quot; as &quot;sufferage&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may think &quot;suffrage&quot; is related to &quot;suffer&quot; and add an extra &quot;e&quot;. However, &quot;suffrage&quot; comes from Latin &quot;suffragium&quot; meaning &quot;voting tablet&quot; and has no connection to suffering.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;suffrage&quot; related to &quot;suffer&quot;?</h3>
              <p className="text-lg text-gray-700">A: No! Despite the similar spelling, &quot;suffrage&quot; is not related to &quot;suffer&quot;. &quot;Suffrage&quot; comes from Latin &quot;suffragium&quot; meaning &quot;voting tablet&quot; or &quot;ballot&quot;, while &quot;suffer&quot; comes from Latin &quot;sufferre&quot; meaning &quot;to bear, endure.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;suffrage&quot; and &quot;voting rights&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffrage&quot; specifically refers to the right to vote in political elections, while &quot;voting rights&quot; is a broader term that can include various types of voting privileges. &quot;Suffrage&quot; is more formal and historically significant.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;suffrage&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suffrage&quot; is a formal, academic word that&apos;s perfectly appropriate in formal writing, historical documents, political science papers, and professional communication about voting rights.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suffrage&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: voting rights, franchise, ballot, electoral rights, and enfranchisement. Each has slightly different connotations and usage contexts in political discourse.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;rage&quot; and remember that &quot;suffrage&quot; ends with &quot;rage&quot;. The &quot;rage&quot; ending is crucial for the correct spelling, and it has nothing to do with suffering.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUFFRAGE ends with RAGE&quot;. Or remember: &quot;SUFF + RAGE&quot; breaks down the word into manageable parts. The &quot;rage&quot; ending is key to remembering the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the etymology of &quot;suffrage&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffrage&quot; comes from the Latin &quot;suffragium&quot; meaning &quot;voting tablet&quot;, &quot;ballot&quot;, or &quot;vote&quot;. It entered English in the late 14th century and has always been associated with voting and electoral rights.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;suffrage&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suffrage&quot; is only a noun. The verb form would be &quot;to vote&quot; or &quot;to enfranchise&quot;. For example: &quot;They fought for suffrage&quot; (noun), &quot;They fought for the right to vote&quot; (verb phrase).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;suffrage&quot; and &quot;franchise&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffrage&quot; specifically refers to the right to vote in political elections, while &quot;franchise&quot; can refer to voting rights but also has broader meanings including business privileges, commercial rights, and other special privileges granted by authority.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;suffrage&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suffrage&quot; can be used in various contexts: historical discussions (women&apos;s suffrage movement), political science (universal suffrage), legal documents (suffrage rights), and academic writing (suffrage history). It always refers to voting rights in political elections.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suffrage&quot;</strong> ends with &quot;rage&quot; and means &quot;the right to vote in political elections.&quot; 
          <br />
          <strong>&quot;Sufferage&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUFF + RAGE&quot; and remember the &quot;rage&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
