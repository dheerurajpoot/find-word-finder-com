import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Royalty vs Royality - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;royalty&quot; and &quot;royality&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RoyaltyVsRoyalityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
          Royalty vs Royality
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Royalty&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Royality&quot; is always incorrect - remember only one &quot;l&quot; in &quot;royalty&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Royality</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Royalty</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;royal status&quot; or &quot;royal family.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Royal&quot; (Base Adjective)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;relating to kings/queens&quot;</li>
                <li>• Ends with single &quot;l&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for description</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Royalty&quot; (Noun)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Means &quot;royal status&quot;</li>
                <li>• Add &quot;ty&quot; to &quot;royal&quot;</li>
                <li>• Keep single &quot;l&quot;</li>
                <li>• Used for the concept</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Spelling Rule</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Don&apos;t double &quot;l&quot;</li>
                <li>• When adding &quot;ty&quot;</li>
                <li>• Keep original spelling</li>
                <li>• Follow base word form</li>
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
                <p className="text-lg text-green-800">&quot;The British <strong>royalty</strong> is famous.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She has <strong>royalty</strong> in her blood.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>royalty</strong> attended the ceremony.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He was born into <strong>royalty</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The British <strong>royality</strong> is famous&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalty&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>royality</strong> in her blood&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalty&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>royality</strong> attended the ceremony&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalty&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He was born into <strong>royality</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;royalty&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single L Rule</h3>
              <p className="text-yellow-800">Royal + ty = Royalty (not Royality)</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Base Word</h3>
              <p className="text-amber-800">Royal has one &quot;l&quot; - keep it that way</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Write It Out</h3>
              <p className="text-yellow-800">Practice writing &quot;royalty&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Proofread</h3>
              <p className="text-orange-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>British royalty</strong> - UK royal family</li>
                <li>• <strong>European royalty</strong> - European monarchs</li>
                <li>• <strong>Royalty status</strong> - royal position</li>
                <li>• <strong>Royalty blood</strong> - royal lineage</li>
                <li>• <strong>Royalty ceremony</strong> - royal event</li>
                <li>• <strong>Royalty tradition</strong> - royal custom</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The royalty is present&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Royalty governs&quot;</li>
                <li>• <strong>Object:</strong> &quot;I respect royalty&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The royalty&apos;s power&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple royalties&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Royalty-watcher&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people double the &quot;l&quot; in &quot;royalty&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the fact that some English words do double consonants when adding suffixes (like &quot;run&quot; → &quot;runner&quot;). However, &quot;royal&quot; doesn&apos;t follow this pattern - it keeps its single &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;royalty&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Royalty&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the etymology of &quot;royalty&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Royalty&quot; comes from the adjective &quot;royal,&quot; which originates from Old French &quot;roial&quot; meaning &quot;royal.&quot; The suffix &quot;ty&quot; is added to indicate the state or quality of being royal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;royalty&quot; is spelled the same way across all English-speaking regions. The spelling &quot;royality&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the base word &quot;royal&quot; first, then add &quot;ty.&quot; The word &quot;royal&quot; has one &quot;l&quot; and should keep it that way. Remember: &quot;Royal&quot; + &quot;ty&quot; = &quot;Royalty.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;royalty&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: nobility, aristocracy, monarchy, sovereign, crown, throne, and when referring to people: monarch, king, queen, prince, and princess.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;royalty&quot; be used for non-human things?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Royalty&quot; can refer to both people (royal families) and concepts (royal status or position). It can also be used metaphorically to describe something that is considered the best or most prestigious.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;royalty&quot; and &quot;royal&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Royal&quot; is an adjective meaning &quot;relating to kings or queens,&quot; while &quot;royalty&quot; is a noun referring to royal status, position, or the royal family itself.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Do all words ending in &quot;al&quot; follow the same pattern?</h3>
              <p className="text-lg text-gray-700">A: No, the pattern varies. Some words like &quot;royal&quot; → &quot;royalty&quot; keep single consonants, while others like &quot;run&quot; → &quot;runner&quot; double consonants. It depends on the specific word and its etymology.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Royalty&quot;</strong> has one &quot;l&quot; from &quot;royal.&quot; 
          <br />
          <strong>&quot;Royality&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROYAL + TY = ROYALTY&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rubbish-vs-rubish" className="hover:text-blue-600 underline">Rubbish vs Rubish</a></li>
            <li><a href="/spelling/rugged-vs-ruged" className="hover:text-blue-600 underline">Rugged vs Ruged</a></li>
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-blue-600 underline">Ruler vs Ruller</a></li>
            <li><a href="/spelling/run-vs-runned" className="hover:text-blue-600 underline">Run vs Runned</a></li>
            <li><a href="/spelling/runner-vs-runer" className="hover:text-blue-600 underline">Runner vs Runer</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/royalties-vs-royaltys" className="hover:text-green-600 underline">Royalties vs Royaltys</a></li>
            <li><a href="/spelling/royalties-vs-royalities" className="hover:text-green-600 underline">Royalties vs Royalities</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-green-600 underline">Sank vs Sinked</a></li>
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-green-600 underline">Satellite vs Sattellite</a></li>
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
