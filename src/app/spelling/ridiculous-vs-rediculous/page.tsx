import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ridiculous vs Rediculous - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;ridiculous&quot; and &quot;rediculous&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RidiculousVsRediculousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Ridiculous vs Rediculous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Ridiculous&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rediculous&quot; is always incorrect - remember to start with &quot;rid&quot; not &quot;red&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rediculous</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling starts with the wrong letters &quot;red&quot; and is never acceptable in English. It&apos;s a common mistake.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Ridiculous</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;absurd, laughable&quot; or &quot;worthy of ridicule.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Rid&quot; (Correct Start)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Starts with &quot;rid&quot;</li>
                <li>• From &quot;ridicule&quot;</li>
                <li>• Must be included</li>
                <li>• Cannot be &quot;red&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Ridiculous&quot; (Complete)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;worthy of ridicule&quot;</li>
                <li>• Contains &quot;ous&quot; suffix</li>
                <li>• Complete word form</li>
                <li>• Used for description</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Mistake</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• People use &quot;red&quot; start</li>
                <li>• &quot;Rediculous&quot; is wrong</li>
                <li>• Wrong beginning</li>
                <li>• Always start with &quot;rid&quot;</li>
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
                <p className="text-lg text-green-800">&quot;That&apos;s a <strong>ridiculous</strong> idea.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The price is <strong>ridiculous</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;What a <strong>ridiculous</strong> situation!&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;That&apos;s absolutely <strong>ridiculous</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s a <strong>rediculous</strong> idea&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridiculous&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The price is <strong>rediculous</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridiculous&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What a <strong>rediculous</strong> situation!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridiculous&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s absolutely <strong>rediculous</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridiculous&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Start Right</h3>
              <p className="text-yellow-800">Use &quot;rid&quot; not &quot;red&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Complete</h3>
              <p className="text-purple-800">Ridiculous = ridicule + ous</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Write It Out</h3>
              <p className="text-violet-800">Practice writing &quot;ridiculous&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Ridiculous idea</strong> - absurd concept</li>
                <li>• <strong>Ridiculous price</strong> - outrageous cost</li>
                <li>• <strong>Ridiculous situation</strong> - laughable circumstance</li>
                <li>• <strong>Ridiculous behavior</strong> - absurd conduct</li>
                <li>• <strong>Ridiculous claim</strong> - unbelievable statement</li>
                <li>• <strong>Ridiculous excuse</strong> - laughable reason</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The ridiculous idea&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The idea is ridiculous&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More ridiculous&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most ridiculous&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Ridiculously&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Ridiculousness&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rediculous&quot; instead of &quot;ridiculous&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding the proper spelling rule. People may incorrectly use &quot;red&quot; instead of &quot;rid&quot; when writing quickly, creating the misspelled &quot;rediculous&quot; instead of the correct &quot;ridiculous.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;ridiculous&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Ridiculous&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling and is commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the rule for the beginning of &quot;ridiculous&quot;?</h3>
              <p className="text-lg text-gray-700">A: The word &quot;ridiculous&quot; must start with &quot;rid&quot; (from the base word &quot;ridicule&quot;). The spelling &quot;rediculous&quot; with &quot;red&quot; at the beginning is incorrect. Remember: ridicule + ous = ridiculous.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;ridiculous&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rediculous&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the base word &quot;ridicule&quot; and remember: it starts with &quot;rid&quot; (not &quot;red&quot;). So &quot;ridicule&quot; + &quot;ous&quot; = &quot;ridiculous.&quot; The word begins with &quot;rid&quot; from ridicule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;ridiculous&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: absurd, laughable, preposterous, ludicrous, nonsensical, foolish, silly, outrageous, and when used informally: crazy, insane, or bonkers.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;ridiculous&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Ridiculous&quot; is often used metaphorically to describe situations, ideas, or behaviors that are so absurd they become laughable. It can describe both literal absurdity and figurative exaggeration.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;ridiculous&quot; and &quot;rediculous&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Ridiculous&quot; is the correct English word meaning &quot;absurd, laughable&quot; or &quot;worthy of ridicule,&quot; while &quot;rediculous&quot; is an incorrect spelling that doesn&apos;t exist in English. The proper beginning is &quot;rid,&quot; not &quot;red.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do all words with &quot;ous&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Many words ending in &quot;ous&quot; follow similar patterns, but each word has its own specific spelling. The key is to learn each word individually and use the correct beginning letters and suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;ridiculous&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Ridiculous&quot; comes from the Latin word &quot;ridiculus,&quot; which meant &quot;laughable&quot; or &quot;funny.&quot; The English word maintains the &quot;rid&quot; beginning and the &quot;ous&quot; suffix pattern common in Latin-derived English adjectives.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;ridiculous&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: While &quot;ridiculous&quot; is primarily an adjective, the noun form would be &quot;ridiculousness&quot; (the quality of being ridiculous). &quot;Ridiculous&quot; itself describes the characteristic, not the concept.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Ridiculous&quot;</strong> starts with &quot;rid&quot; (from ridicule).
          <br />
          <strong>&quot;Rediculous&quot;</strong> with &quot;red&quot; at the beginning is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RIDICULE&quot; + &quot;OUS&quot; = &quot;RIDICULOUS&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rotten-vs-roten" className="hover:text-blue-600 underline">Rotten vs Roten</a></li>
            <li><a href="/spelling/rose-vs-rised" className="hover:text-blue-600 underline">Rose vs Rised</a></li>
            <li><a href="/spelling/roommate-vs-roomate" className="hover:text-blue-600 underline">Roommate vs Roomate</a></li>
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-blue-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-blue-600 underline">Roller vs Rooler</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/risen-vs-rised" className="hover:text-green-600 underline">Risen vs Rised</a></li>
            <li><a href="/spelling/risen-vs-raisen" className="hover:text-green-600 underline">Risen vs Raisen</a></li>
            <li><a href="/spelling/rigid-vs-ridgid" className="hover:text-green-600 underline">Rigid vs Ridgid</a></li>
            <li><a href="/spelling/right-vs-rigth" className="hover:text-green-600 underline">Right vs Rigth</a></li>
            <li><a href="/spelling/ridiculous-vs-ridiculus" className="hover:text-green-600 underline">Ridiculous vs Ridiculus</a></li>
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
