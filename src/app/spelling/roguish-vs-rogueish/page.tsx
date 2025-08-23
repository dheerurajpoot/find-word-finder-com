import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Roguish vs Rogueish - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;roguish&quot; and &quot;rogueish&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RoguishVsRogueishPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Roguish vs Rogueish
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
            <span className="text-2xl font-bold text-green-600">&quot;Roguish&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rogueish&quot; is always incorrect - remember to use &quot;roguish&quot; instead!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rogueish</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Roguish</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;playfully mischievous&quot; or &quot;like a rogue.&quot;
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
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Rogue&quot; (Base)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Noun meaning scoundrel</li>
                <li>• Starts the word</li>
                <li>• Must be included</li>
                <li>• Cannot be dropped</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Roguish&quot; (Complete)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;like a rogue&quot;</li>
                <li>• Contains &quot;ish&quot; suffix</li>
                <li>• Complete word form</li>
                <li>• Used for description</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Mistake</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• People add extra &quot;e&quot;</li>
                <li>• &quot;Rogueish&quot; is incorrect</li>
                <li>• Wrong suffix form</li>
                <li>• Always use &quot;ish&quot;</li>
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
                <p className="text-lg text-green-800">&quot;He had a <strong>roguish</strong> grin.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Her <strong>roguish</strong> charm was irresistible.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>roguish</strong> character was lovable.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>roguish</strong> behavior amused everyone.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He had a <strong>rogueish</strong> grin&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roguish&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Her <strong>rogueish</strong> charm was irresistible&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roguish&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rogueish</strong> character was lovable&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roguish&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>rogueish</strong> behavior amused everyone&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roguish&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Suffix Rule</h3>
              <p className="text-yellow-800">Use &quot;ish&quot; not &quot;eish&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Simple</h3>
              <p className="text-purple-800">Roguish = rogue + ish</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Write It Out</h3>
              <p className="text-violet-800">Practice writing &quot;roguish&quot; to build muscle memory</p>
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
                <li>• <strong>Roguish grin</strong> - mischievous smile</li>
                <li>• <strong>Roguish charm</strong> - appealing mischief</li>
                <li>• <strong>Roguish behavior</strong> - playful misbehavior</li>
                <li>• <strong>Roguish character</strong> - lovable scoundrel</li>
                <li>• <strong>Roguish twinkle</strong> - mischievous sparkle</li>
                <li>• <strong>Roguish appeal</strong> - attractive mischief</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The roguish smile&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The smile is roguish&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More roguish&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most roguish&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Roguishly&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Roguishness&quot;</li>
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
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rogueish&quot; instead of &quot;roguish&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding the proper suffix rule. When adding &quot;-ish&quot; to words ending in &quot;e&quot;, the &quot;e&quot; is typically dropped. So &quot;rogue&quot; becomes &quot;roguish&quot;, not &quot;rogueish&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;roguish&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Roguish&quot; is perfectly acceptable in formal writing, literature, and professional communication. It&apos;s the standard English spelling and is commonly used in academic and literary contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the suffix rule for &quot;ish&quot;?</h3>
              <p className="text-lg text-gray-700">A: When adding &quot;-ish&quot; to words ending in &quot;e&quot;, the &quot;e&quot; is typically dropped. So &quot;rogue&quot; becomes &quot;roguish&quot;, &quot;blue&quot; becomes &quot;bluish&quot;, and &quot;true&quot; becomes &quot;truish&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;roguish&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rogueish&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the base word &quot;rogue&quot; and remember the suffix rule: drop the &quot;e&quot; and add &quot;ish&quot;. So &quot;rogue&quot; + &quot;ish&quot; = &quot;roguish&quot;. Never add an extra &quot;e&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;roguish&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: mischievous, playful, impish, devilish, cheeky, naughty, rascally, scampish, and when used positively: charmingly mischievous, endearingly naughty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;roguish&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Roguish&quot; is often used metaphorically to describe charmingly mischievous behavior, playful defiance, or endearingly naughty actions. It can describe people, expressions, or even inanimate objects.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;roguish&quot; and &quot;rogueish&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roguish&quot; is the correct English word meaning &quot;playfully mischievous&quot; or &quot;like a rogue,&quot; while &quot;rogueish&quot; is an incorrect spelling that doesn&apos;t exist in English. The proper suffix is &quot;ish&quot;, not &quot;eish&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do all words with &quot;e&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Most words ending in &quot;e&quot; drop the &quot;e&quot; when adding &quot;-ish&quot;. Examples include: blue → bluish, true → truish, rogue → roguish. This is a common English suffix rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;roguish&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roguish&quot; comes from the word &quot;rogue,&quot; which originally referred to a vagrant or scoundrel. The suffix &quot;-ish&quot; was added to create an adjective meaning &quot;like a rogue,&quot; maintaining its spelling throughout history.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;roguish&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: While &quot;roguish&quot; is primarily an adjective, the noun form would be &quot;roguishness&quot; (the quality of being roguish). &quot;Roguish&quot; itself describes the characteristic, not the person.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Roguish&quot;</strong> drops the &quot;e&quot; from &quot;rogue&quot;.
          <br />
          <strong>&quot;Rogueish&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROGUE&quot; + &quot;ISH&quot; = &quot;ROGUISH&quot;</p>
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
            <li><a href="/spelling/roommate-vs-romate" className="hover:text-blue-600 underline">Roommate vs Romate</a></li>
            <li><a href="/spelling/roofs-vs-roofes" className="hover:text-blue-600 underline">Roofs vs Roofes</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-green-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-green-600 underline">Roller vs Rooler</a></li>
            <li><a href="/spelling/rivalry-vs-rivarly" className="hover:text-green-600 underline">Rivalry vs Rivarly</a></li>
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
