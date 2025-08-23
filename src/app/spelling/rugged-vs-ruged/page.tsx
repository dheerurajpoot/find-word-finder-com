import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rugged vs Ruged - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rugged&quot; and &quot;ruged&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RuggedVsRugedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
          Rugged vs Ruged
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rugged&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Ruged&quot; is always incorrect - remember to double the &quot;g&quot; when adding &quot;ed&quot; to &quot;rug&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Ruged</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rugged</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;rough and uneven&quot; or &quot;tough and durable.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Rug&quot; (Base Noun)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;floor covering&quot;</li>
                <li>• Ends with single &quot;g&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for floor item</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Rugged&quot; (Adjective)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;rough and tough&quot;</li>
                <li>• Add &quot;ged&quot; to &quot;rug&quot;</li>
                <li>• Double the &quot;g&quot;</li>
                <li>• Used for description</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Spelling Rule</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Double final consonant</li>
                <li>• Before adding &quot;ed&quot;</li>
                <li>• When noun ends in CVC</li>
                <li>• Follow the CVC rule</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>rugged</strong> terrain was challenging.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He has a <strong>rugged</strong> appearance.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rugged</strong> mountain range.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She prefers <strong>rugged</strong> outdoor activities.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>ruged</strong> terrain was challenging&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rugged&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has a <strong>ruged</strong> appearance&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rugged&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>ruged</strong> mountain range&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rugged&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She prefers <strong>ruged</strong> outdoor activities&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rugged&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">CVC Rule</h3>
              <p className="text-yellow-800">Consonant-Vowel-Consonant = double the last letter</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Double</h3>
              <p className="text-emerald-800">Rug + g + ed = Rugged (double the g)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;rugged&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Rugged terrain</strong> - rough landscape</li>
                <li>• <strong>Rugged appearance</strong> - rough look</li>
                <li>• <strong>Rugged mountains</strong> - rough peaks</li>
                <li>• <strong>Rugged individual</strong> - tough person</li>
                <li>• <strong>Rugged beauty</strong> - rough attractiveness</li>
                <li>• <strong>Rugged equipment</strong> - durable gear</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The rugged path&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More rugged&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most rugged&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Ruggedly built&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;The ruggedness&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;To ruggedize&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people drop one &quot;g&quot; in &quot;rugged&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the CVC (Consonant-Vowel-Consonant) rule. When a word ends in CVC and you add &quot;ed,&quot; you double the final consonant. Many people forget this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rugged&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rugged&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the CVC rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The CVC rule states that when a word ends in Consonant-Vowel-Consonant (like &quot;rug&quot;), you double the final consonant before adding &quot;ed.&quot; Examples: rug → rugged, big → bigger, hot → hotter.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rugged&quot; is spelled the same way across all English-speaking regions. The spelling &quot;ruged&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the CVC rule: &quot;Rug&quot; ends in CVC (r-u-g), so double the final consonant &quot;g&quot; before adding &quot;ed.&quot; Remember: &quot;Rug&quot; + &quot;g&quot; + &quot;ed&quot; = &quot;Rugged.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;rugged&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: rough, uneven, bumpy, tough, durable, sturdy, robust, harsh, and when referring to appearance: weathered, craggy, and grizzled.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;rugged&quot; be used for people?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rugged&quot; is commonly used to describe people with a rough, tough, or weathered appearance. It often conveys strength, durability, and a certain rough charm.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;rugged&quot; and &quot;rough&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both describe uneven surfaces, &quot;rugged&quot; often implies a more positive quality of being tough and durable, while &quot;rough&quot; is more neutral and simply describes an uneven texture.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Do all words ending in CVC follow this rule?</h3>
              <p className="text-lg text-gray-700">A: No, only words ending in CVC follow this rule. Words ending in other patterns (like &quot;play&quot; ending in vowel-consonant) don&apos;t double: play → played, not playyed.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rugged&quot;</strong> doubles the &quot;g&quot; from &quot;rug.&quot; 
          <br />
          <strong>&quot;Ruged&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RUG + G + ED = RUGGED&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-blue-600 underline">Ruler vs Ruller</a></li>
            <li><a href="/spelling/run-vs-runned" className="hover:text-blue-600 underline">Run vs Runned</a></li>
            <li><a href="/spelling/runner-vs-runer" className="hover:text-blue-600 underline">Runner vs Runer</a></li>
            <li><a href="/spelling/running-vs-runing" className="hover:text-blue-600 underline">Running vs Runing</a></li>
            <li><a href="/spelling/russian-vs-rusian" className="hover:text-blue-600 underline">Russian vs Rusian</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rubbish-vs-rubish" className="hover:text-green-600 underline">Rubbish vs Rubish</a></li>
            <li><a href="/spelling/royalty-vs-royality" className="hover:text-green-600 underline">Royalty vs Royality</a></li>
            <li><a href="/spelling/royalties-vs-royaltys" className="hover:text-green-600 underline">Royalties vs Royaltys</a></li>
            <li><a href="/spelling/royalties-vs-royalities" className="hover:text-green-600 underline">Royalties vs Royalities</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
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
