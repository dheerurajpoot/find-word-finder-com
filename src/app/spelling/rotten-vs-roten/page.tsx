import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rotten vs Roten - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rotten&quot; and &quot;roten&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RottenVsRotenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Rotten vs Roten
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rotten&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Roten&quot; is always incorrect - remember to double the &quot;t&quot; in &quot;rotten&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Roten</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rotten</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;decayed&quot; or &quot;spoiled.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Rot&quot; (Base Verb)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to decay&quot;</li>
                <li>• Ends with single &quot;t&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for present tense</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Rotten&quot; (Adjective)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;decayed&quot;</li>
                <li>• Add &quot;en&quot; to &quot;rot&quot;</li>
                <li>• Double the &quot;t&quot;</li>
                <li>• Used to describe state</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Spelling Rule</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Double final consonant</li>
                <li>• Before adding &quot;en&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The fruit is <strong>rotten</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Don&apos;t eat <strong>rotten</strong> food.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The wood is <strong>rotten</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;That smells <strong>rotten</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The fruit is <strong>roten</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rotten&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t eat <strong>roten</strong> food&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rotten&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The wood is <strong>roten</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rotten&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That smells <strong>roten</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rotten&quot;</p>
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
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Double</h3>
              <p className="text-amber-800">Rot + t + en = Rotten (double the t)</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;rotten&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Proofread</h3>
              <p className="text-red-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Rotten apple</strong> - spoiled fruit</li>
                <li>• <strong>Rotten luck</strong> - bad fortune</li>
                <li>• <strong>Rotten weather</strong> - bad conditions</li>
                <li>• <strong>Rotten deal</strong> - unfair agreement</li>
                <li>• <strong>Rotten mood</strong> - bad temper</li>
                <li>• <strong>Rotten smell</strong> - unpleasant odor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;Rotten food&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The food is rotten&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More rotten&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most rotten&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Rottenly&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Rottenness&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people drop one &quot;t&quot; in &quot;rotten&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the CVC (Consonant-Vowel-Consonant) rule. When a verb ends in CVC and you add &quot;en,&quot; you double the final consonant. Many people forget this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rotten&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rotten&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the CVC rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The CVC rule states that when a verb ends in Consonant-Vowel-Consonant (like &quot;rot&quot;), you double the final consonant before adding &quot;en.&quot; Examples: rot → rotten, sit → bitten, hop → hoppen.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rotten&quot; is spelled the same way across all English-speaking regions. The spelling &quot;roten&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the CVC rule: &quot;Rot&quot; ends in CVC (r-o-t), so double the final consonant &quot;t&quot; before adding &quot;en.&quot; Remember: &quot;Rot&quot; + &quot;t&quot; + &quot;en&quot; = &quot;Rotten.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;rotten&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: decayed, spoiled, putrid, decomposed, moldy, foul, bad, and when used metaphorically: terrible, awful, horrible, and dreadful.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;rotten&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rotten&quot; is often used metaphorically to describe bad situations, such as &quot;rotten luck&quot; or &quot;rotten weather.&quot; It can also describe bad behavior or character.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;rot&quot; and &quot;rotten&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rot&quot; is the verb meaning &quot;to decay&quot; (present tense), while &quot;rotten&quot; is the adjective describing something that has decayed. Example: &quot;Food can rot&quot; vs &quot;The food is rotten.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Do all verbs follow the CVC rule when adding &quot;en&quot;?</h3>
              <p className="text-lg text-gray-700">A: No, only verbs ending in CVC follow this rule. Verbs ending in other patterns (like &quot;play&quot; ending in vowel-consonant) don&apos;t double: play → played, not playyed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;rotten&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rotten&quot; comes from Old English &quot;rotian&quot; meaning &quot;to decay.&quot; The word follows the standard English pattern of doubling consonants before adding suffixes like &quot;en.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;rotten&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: While &quot;rotten&quot; is primarily an adjective, it can be used as a noun in some contexts, such as &quot;the rotten&quot; referring to rotten things collectively. However, this usage is less common.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rotten&quot;</strong> doubles the &quot;t&quot; from &quot;rot.&quot;
          <br />
          <strong>&quot;Roten&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROT + T + EN = ROTTEN&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rose-vs-rised" className="hover:text-blue-600 underline">Rose vs Rised</a></li>
            <li><a href="/spelling/roommate-vs-roomate" className="hover:text-blue-600 underline">Roommate vs Roomate</a></li>
            <li><a href="/spelling/roofs-vs-roofes" className="hover:text-blue-600 underline">Roofs vs Roofes</a></li>
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-blue-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-blue-600 underline">Roller vs Rooler</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rivalry-vs-rivarly" className="hover:text-green-600 underline">Rivalry vs Rivarly</a></li>
            <li><a href="/spelling/roguish-vs-rogueish" className="hover:text-green-600 underline">Roguish vs Rogueish</a></li>
            <li><a href="/spelling/roommate-vs-romate" className="hover:text-green-600 underline">Roommate vs Romate</a></li>
            <li><a href="/spelling/roofs-vs-rofs" className="hover:text-green-600 underline">Roofs vs Rofs</a></li>
            <li><a href="/spelling/running-vs-runing" className="hover:text-green-600 underline">Running vs Runing</a></li>
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
