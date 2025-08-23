import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Royalties vs Royalities - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;royalties&quot; and &quot;royalities&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RoyaltiesVsRoyalitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Royalties vs Royalities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Royalties&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Royalities&quot; is always incorrect - remember to change &quot;y&quot; to &quot;ies&quot; for plural!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Royalities</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Royalties</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;royal payments&quot; or &quot;royal families.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Royalty&quot; (Singular)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Means &quot;royal status&quot;</li>
                <li>• Ends with &quot;ty&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for single item</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Royalties&quot; (Plural)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;multiple royal items&quot;</li>
                <li>• Change &quot;y&quot; to &quot;ies&quot;</li>
                <li>• Follow plural rule</li>
                <li>• Used for multiple items</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Plural Rule</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Change &quot;y&quot; to &quot;ies&quot;</li>
                <li>• When word ends in consonant + y</li>
                <li>• For plural form</li>
                <li>• Follow standard rule</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>royalties</strong> were paid quarterly.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;European <strong>royalties</strong> gathered.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Book <strong>royalties</strong> are income.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Multiple <strong>royalties</strong> exist.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>royalities</strong> were paid quarterly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalties&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;European <strong>royalities</strong> gathered&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalties&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Book <strong>royalities</strong> are income&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalties&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Multiple <strong>royalities</strong> exist&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalties&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Y to IES Rule</h3>
              <p className="text-yellow-800">Consonant + y = change to ies</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think Plural</h3>
              <p className="text-indigo-800">Royalty → Royalties (y to ies)</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;royalties&quot; to build muscle memory</p>
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
                <li>• <strong>Book royalties</strong> - author payments</li>
                <li>• <strong>Music royalties</strong> - artist payments</li>
                <li>• <strong>Patent royalties</strong> - inventor payments</li>
                <li>• <strong>European royalties</strong> - European monarchs</li>
                <li>• <strong>Oil royalties</strong> - resource payments</li>
                <li>• <strong>Film royalties</strong> - movie payments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Plural noun:</strong> &quot;The royalties are high&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Royalties accumulate&quot;</li>
                <li>• <strong>Object:</strong> &quot;I receive royalties&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The royalties&apos; value&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Multiple royalties&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Royalty-payment system&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people use &quot;royalities&quot; instead of &quot;royalties&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the standard English plural rule. When a word ends in consonant + y, you change the &quot;y&quot; to &quot;ies&quot; for the plural. Many people forget this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;royalties&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Royalties&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the plural rule for words ending in &quot;y&quot;?</h3>
              <p className="text-lg text-gray-700">A: The rule states that when a word ends in consonant + y, you change the &quot;y&quot; to &quot;ies&quot; for the plural. Examples: royalty → royalties, baby → babies, city → cities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;royalties&quot; is spelled the same way across all English-speaking regions. The spelling &quot;royalities&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the plural rule: &quot;Royalty&quot; ends in consonant + y (t-y), so change the &quot;y&quot; to &quot;ies&quot; for the plural. Remember: &quot;Royalty&quot; → &quot;Royalties.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;royalties&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: payments, earnings, income, proceeds, returns, and when referring to people: monarchs, sovereigns, and nobility.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;royalties&quot; refer to both money and people?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Royalties&quot; can refer to both financial payments (like book royalties) and royal families (like European royalties). The context determines the meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;royalty&quot; and &quot;royalties&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Royalty&quot; is the singular form referring to royal status or a single royal family, while &quot;royalties&quot; is the plural form referring to multiple royal families or multiple royalty payments.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Do all words ending in &quot;y&quot; follow this rule?</h3>
              <p className="text-lg text-gray-700">A: No, only words ending in consonant + y follow this rule. Words ending in vowel + y (like &quot;day&quot;) just add &quot;s&quot;: day → days, not dayies.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Royalties&quot;</strong> changes &quot;y&quot; to &quot;ies&quot; for plural. 
          <br />
          <strong>&quot;Royalities&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROYALTY → ROYALTIES (Y to IES)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/royalties-vs-royaltys" className="hover:text-blue-600 underline">Royalties vs Royaltys</a></li>
            <li><a href="/spelling/royalty-vs-royality" className="hover:text-blue-600 underline">Royalty vs Royality</a></li>
            <li><a href="/spelling/rubbish-vs-rubish" className="hover:text-blue-600 underline">Rubbish vs Rubish</a></li>
            <li><a href="/spelling/rugged-vs-ruged" className="hover:text-blue-600 underline">Rugged vs Ruged</a></li>
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-blue-600 underline">Ruler vs Ruller</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-green-600 underline">Sank vs Sinked</a></li>
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-green-600 underline">Satellite vs Sattellite</a></li>
            <li><a href="/spelling/satirically-vs-satrically" className="hover:text-green-600 underline">Satirically vs Satrically</a></li>
            <li><a href="/spelling/satirize-vs-saturize" className="hover:text-green-600 underline">Satirize vs Saturize</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/affect-vs-effect" className="hover:text-purple-600 underline">Affect vs Effect</a></li>
            <li><a href="/confusing-words/further-vs-farther" className="hover:text-purple-600 underline">Further vs Farther</a></li>
            <li><a href="/confusing-words/who-vs-whom" className="hover:text-purple-600 underline">Who vs Whom</a></li>
            <li><a href="/confusing-words/to-vs-too" className="hover:text-purple-600 underline">To vs Too</a></li>
            <li><a href="/confusing-words/bear-vs-bare" className="hover:text-purple-600 underline">Bear vs Bare</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
