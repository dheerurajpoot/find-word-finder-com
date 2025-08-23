import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rubbish vs Rubish - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rubbish&quot; and &quot;rubish&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RubbishVsRubishPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Rubbish vs Rubish
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rubbish&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rubish&quot; is always incorrect - remember the double &quot;b&quot; in &quot;rubbish&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rubish</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rubbish</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;waste material&quot; or &quot;nonsense.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Rub&quot; (Base Verb)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;to move over surface&quot;</li>
                <li>• Ends with single &quot;b&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Rubbish&quot; (Noun)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;waste material&quot;</li>
                <li>• Add &quot;ish&quot; to &quot;rub&quot;</li>
                <li>• Double the &quot;b&quot;</li>
                <li>• Used for waste</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Spelling Rule</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Double final consonant</li>
                <li>• Before adding &quot;ish&quot;</li>
                <li>• When verb ends in CVC</li>
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
                <p className="text-lg text-green-800">&quot;Take out the <strong>rubbish</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;That&apos;s complete <strong>rubbish</strong>!&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rubbish</strong> bin is full.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Don&apos;t talk <strong>rubbish</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Take out the <strong>rubish</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rubbish&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s complete <strong>rubish</strong>!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rubbish&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rubish</strong> bin is full&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rubbish&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t talk <strong>rubish</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rubbish&quot;</p>
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
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Think Double</h3>
              <p className="text-violet-800">Rub + b + ish = Rubbish (double the b)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;rubbish&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Rubbish bin</strong> - waste container</li>
                <li>• <strong>Rubbish collection</strong> - waste pickup</li>
                <li>• <strong>Rubbish tip</strong> - waste disposal site</li>
                <li>• <strong>Rubbish truck</strong> - waste vehicle</li>
                <li>• <strong>Rubbish heap</strong> - waste pile</li>
                <li>• <strong>Rubbish dump</strong> - waste site</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rubbish is full&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rubbish accumulates&quot;</li>
                <li>• <strong>Object:</strong> &quot;I threw away rubbish&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The rubbish&apos;s smell&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple rubbish bins&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Rubbish-collection day&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people drop one &quot;b&quot; in &quot;rubbish&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the CVC (Consonant-Vowel-Consonant) rule. When a word ends in CVC and you add &quot;ish,&quot; you double the final consonant. Many people forget this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rubbish&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rubbish&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the CVC rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The CVC rule states that when a word ends in Consonant-Vowel-Consonant (like &quot;rub&quot;), you double the final consonant before adding &quot;ish.&quot; Examples: rub → rubbish, big → biggish, hot → hottish.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rubbish&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rubish&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the CVC rule: &quot;Rub&quot; ends in CVC (r-u-b), so double the final consonant &quot;b&quot; before adding &quot;ish.&quot; Remember: &quot;Rub&quot; + &quot;b&quot; + &quot;ish&quot; = &quot;Rubbish.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;rubbish&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: garbage, trash, waste, debris, litter, junk, refuse, and when used metaphorically: nonsense, drivel, and baloney.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;rubbish&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rubbish&quot; is often used metaphorically to mean &quot;nonsense&quot; or &quot;worthless information.&quot; Example: &quot;That theory is complete rubbish.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;rubbish&quot; and &quot;garbage&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to waste material, &quot;rubbish&quot; is more commonly used in British English, while &quot;garbage&quot; is more common in American English. They mean essentially the same thing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Do all words ending in CVC follow this rule?</h3>
              <p className="text-lg text-gray-700">A: No, only words ending in CVC follow this rule. Words ending in other patterns (like &quot;play&quot; ending in vowel-consonant) don&apos;t double: play → playish, not playyish.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rubbish&quot;</strong> doubles the &quot;b&quot; from &quot;rub.&quot; 
          <br />
          <strong>&quot;Rubish&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RUB + B + ISH = RUBBISH&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rugged-vs-ruged" className="hover:text-blue-600 underline">Rugged vs Ruged</a></li>
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-blue-600 underline">Ruler vs Ruller</a></li>
            <li><a href="/spelling/run-vs-runned" className="hover:text-blue-600 underline">Run vs Runned</a></li>
            <li><a href="/spelling/runner-vs-runer" className="hover:text-blue-600 underline">Runner vs Runer</a></li>
            <li><a href="/spelling/running-vs-runing" className="hover:text-blue-600 underline">Running vs Runing</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/royalty-vs-royality" className="hover:text-green-600 underline">Royalty vs Royality</a></li>
            <li><a href="/spelling/royalties-vs-royaltys" className="hover:text-green-600 underline">Royalties vs Royaltys</a></li>
            <li><a href="/spelling/royalties-vs-royalities" className="hover:text-green-600 underline">Royalties vs Royalities</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-green-600 underline">Sank vs Sinked</a></li>
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
