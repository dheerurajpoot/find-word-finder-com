import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Roofs vs Roofes - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;roofs&quot; and &quot;roofes&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RoofsVsRoofesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Roofs vs Roofes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Roofs&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Roofes&quot; is always incorrect - remember to add &quot;s&quot; for plural!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Roofes</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Roofs</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;multiple roof structures.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Roof&quot; (Singular)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;top covering&quot;</li>
                <li>• Ends with &quot;f&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for single item</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;Roofs&quot; (Plural)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Means &quot;multiple coverings&quot;</li>
                <li>• Add &quot;s&quot; to &quot;roof&quot;</li>
                <li>• Follow plural rule</li>
                <li>• Used for multiple items</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Plural Rule</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• Add &quot;s&quot; for plural</li>
                <li>• When word ends in &quot;f&quot;</li>
                <li>• For multiple items</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>roofs</strong> are covered in snow.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Multiple <strong>roofs</strong> need repair.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>roofs</strong> are different colors.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;All the <strong>roofs</strong> are damaged.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>roofes</strong> are covered in snow&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roofs&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Multiple <strong>roofes</strong> need repair&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roofs&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>roofes</strong> are different colors&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roofs&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;All the <strong>roofes</strong> are damaged&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roofs&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Simple Plural</h3>
              <p className="text-yellow-800">Just add &quot;s&quot; to make plural</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Simple</h3>
              <p className="text-slate-800">Roof + s = roofs</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Write It Out</h3>
              <p className="text-gray-800">Practice writing &quot;roofs&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Proofread</h3>
              <p className="text-zinc-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Flat roofs</strong> - level roof surfaces</li>
                <li>• <strong>Sloped roofs</strong> - angled roof surfaces</li>
                <li>• <strong>Metal roofs</strong> - metallic roof coverings</li>
                <li>• <strong>Tile roofs</strong> - tiled roof coverings</li>
                <li>• <strong>Green roofs</strong> - vegetated roof systems</li>
                <li>• <strong>Solar roofs</strong> - photovoltaic roof systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Plural noun:</strong> &quot;The roofs are high&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Roofs protect buildings&quot;</li>
                <li>• <strong>Object:</strong> &quot;I inspect roofs&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The roofs&apos; condition&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Multiple roofs&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Roof-repair service&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people use &quot;roofes&quot; instead of &quot;roofs&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the standard English plural rule. When a word ends in &quot;f&quot; (like &quot;roof&quot;), you simply add &quot;s&quot; for the plural. Many people may overthink this and add &quot;es&quot; instead.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;roofs&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Roofs&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the plural rule for words ending in &quot;f&quot;?</h3>
              <p className="text-lg text-gray-700">A: The rule states that when a word ends in &quot;f&quot;, you typically just add &quot;s&quot; for the plural. Examples: roof → roofs, belief → beliefs, chief → chiefs. However, some words change &quot;f&quot; to &quot;v&quot; and add &quot;es&quot;: leaf → leaves, wolf → wolves.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;roofs&quot; is spelled the same way across all English-speaking regions. The spelling &quot;roofes&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the simple plural rule: &quot;Roof&quot; ends in &quot;f&quot;, so just add &quot;s&quot; for the plural. Remember: &quot;ROOF + S = ROOFS.&quot; Don&apos;t overcomplicate it with &quot;es.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;roofs&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: coverings, tops, canopies, shelters, and when used metaphorically: ceilings, limits, and boundaries.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;roofs&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Roofs&quot; is often used metaphorically to describe limits or boundaries, such as &quot;hitting the roof&quot; (getting angry) or &quot;raising the roof&quot; (making noise or celebrating).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;roof&quot; and &quot;roofs&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roof&quot; is the singular form referring to a single roof structure, while &quot;roofs&quot; is the plural form referring to multiple roof structures. Example: &quot;The roof is red&quot; vs &quot;The roofs are red.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Do all words ending in &quot;f&quot; follow this rule?</h3>
              <p className="text-lg text-gray-700">A: Most words ending in &quot;f&quot; just add &quot;s&quot; (like roof → roofs), but some change &quot;f&quot; to &quot;v&quot; and add &quot;es&quot; (like leaf → leaves, wolf → wolves). &quot;Roof&quot; follows the simpler rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;roof&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roof&quot; comes from Old English &quot;hrof&quot; meaning &quot;roof&quot; or &quot;ceiling.&quot; The word has maintained its simple plural form throughout English history, following the standard pattern of adding &quot;s.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;roofs&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: While &quot;roof&quot; can be used as a verb meaning &quot;to cover with a roof,&quot; &quot;roofs&quot; is strictly the plural noun form. You would say &quot;I roof the house&quot; (verb) vs &quot;The roofs are damaged&quot; (noun).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Roofs&quot;</strong> simply adds &quot;s&quot; for plural.
          <br />
          <strong>&quot;Roofes&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROOF + S = ROOFS&quot;</p>
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
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-blue-600 underline">Romantic vs Romatic</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rivalry-vs-rivarly" className="hover:text-green-600 underline">Rivalry vs Rivarly</a></li>
            <li><a href="/spelling/roguish-vs-rogueish" className="hover:text-green-600 underline">Roguish vs Rogueish</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-green-600 underline">Roller vs Rooler</a></li>
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
