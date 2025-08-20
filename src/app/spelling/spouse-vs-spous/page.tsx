import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spouse vs Spous - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spouse&quot; and &quot;spous&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpouseVsSpousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Spouse vs Spous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💍</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Spouse&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spous&quot; is always incorrect - remember the final &quot;e&quot; in &quot;spouse&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spous</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Spouse</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;a husband or wife&quot; in a marriage.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Spouse&quot; (Noun)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;husband or wife&quot;</li>
                <li>• Ends with &quot;e&quot;</li>
                <li>• Formal legal term</li>
                <li>• Used in official documents</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Etymology</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• From Old French &quot;espous&quot;</li>
                <li>• Latin &quot;sponsus&quot;</li>
                <li>• Related to &quot;sponsor&quot;</li>
                <li>• Means &quot;promised&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Usage Context</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Legal documents</li>
                <li>• Insurance forms</li>
                <li>• Tax returns</li>
                <li>• Formal writing</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;My <strong>spouse</strong> and I are celebrating our anniversary.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;Please list your <strong>spouse</strong> on the insurance form.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;Her <strong>spouse</strong> works in the medical field.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;They are each other&apos;s <strong>spouse</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My <strong>spous</strong> and I&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spouse&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;List your <strong>spous</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spouse&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Her <strong>spous</strong> works&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spouse&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Each other&apos;s <strong>spous</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spouse&quot;</p>
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
              <div className="text-4xl mb-3">💍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Ring Rule</h3>
              <p className="text-yellow-800">A wedding ring is complete (like the &quot;e&quot; in spouse)</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Complete Word</h3>
              <p className="text-emerald-800">&quot;Spouse&quot; is complete, &quot;spous&quot; is incomplete</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Write It Out</h3>
              <p className="text-teal-800">Practice writing &quot;spouse&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Surviving spouse</strong> - widow/widower</li>
                <li>• <strong>Spouse benefits</strong> - insurance coverage</li>
                <li>• <strong>Spouse visa</strong> - immigration document</li>
                <li>• <strong>Spouse support</strong> - alimony</li>
                <li>• <strong>Spouse employment</strong> - job opportunities</li>
                <li>• <strong>Spouse consent</strong> - legal permission</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;My spouse works here&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love my spouse&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;My spouse&apos;s job&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;John, my spouse&quot;</li>
                <li>• <strong>Direct address:</strong> &quot;Spouse, come here&quot;</li>
                <li>• <strong>Predicate nominative:</strong> &quot;She is my spouse&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;spouse&quot; as &quot;spous&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the silent &quot;e&quot; at the end, which many people forget to include. Some also confuse it with similar words that don&apos;t end in &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;spouse&quot; only used for married couples?</h3>
              <p className="text-lg text-gray-700">A: Traditionally, &quot;spouse&quot; refers to a legally married partner. However, in modern usage, it&apos;s sometimes used for long-term domestic partners, though this varies by context and jurisdiction.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;spouse&quot; and &quot;partner&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spouse&quot; specifically refers to a married husband or wife, while &quot;partner&quot; is more inclusive and can refer to unmarried couples, same-sex relationships, or business partners.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;spouse&quot; be used in plural form?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;spouses&quot; is the correct plural form. It&apos;s commonly used in contexts like &quot;employee spouses&quot; or &quot;spouses of veterans.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;spouse&quot; gender-specific?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spouse&quot; is gender-neutral and can refer to either a husband or wife. This makes it useful in contexts where you don&apos;t want to specify gender.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;spouse&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: husband, wife, partner, mate, better half, significant other, life partner, and consort (though this is more formal).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: When should I use &quot;spouse&quot; vs. &quot;husband/wife&quot;?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;spouse&quot; in formal, legal, or gender-neutral contexts. Use &quot;husband&quot; or &quot;wife&quot; in casual conversation or when you want to be more specific about gender.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;spouse&quot; as a complete word - just like a marriage is complete. The &quot;e&quot; at the end makes it whole, just like the &quot;e&quot; in &quot;complete.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spouse&quot;</strong> has an &quot;e&quot; at the end and means &quot;a husband or wife.&quot; 
          <br />
          <strong>&quot;Spous&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPOUSE = complete marriage, SPOUS = incomplete&quot;</p>
        </div>
      </div>
    </div>
  )
}
