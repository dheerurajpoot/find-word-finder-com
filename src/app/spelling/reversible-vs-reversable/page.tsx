import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reversible vs Reversable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reversible&quot; and &quot;reversable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReversibleVsReversablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Reversible vs Reversable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔄</span>
            <span className="text-2xl font-bold text-green-600">&quot;Reversible&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Reversable&quot; is always incorrect - remember the &quot;ible&quot; ending!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Reversable</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Reversible</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;able to be reversed or turned back.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Reverse&quot; (Base)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• From Latin &quot;revertere&quot;</li>
                <li>• Means &quot;to turn back&quot;</li>
                <li>• Action word</li>
                <li>• Direction change</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;ible&quot; (Suffix)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;able to be&quot;</li>
                <li>• Common ending</li>
                <li>• Forms adjectives</li>
                <li>• Capability indicator</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Complete Word</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• &quot;Reversible&quot; = correct</li>
                <li>• &quot;Reversable&quot; = wrong</li>
                <li>• Remember: &quot;ible&quot;</li>
                <li>• Think: &quot;reverse&quot; + &quot;ible&quot;</li>
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
                <p className="text-lg text-green-800">&quot;This jacket is <strong>reversible</strong> - you can wear it inside out.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The decision is not <strong>reversible</strong> once made.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The chemical reaction is <strong>reversible</strong> under certain conditions.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She bought a <strong>reversible</strong> belt for versatility.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This jacket is <strong>reversable</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reversible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The decision is not <strong>reversable</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reversible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The chemical reaction is <strong>reversable</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reversible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She bought a <strong>reversable</strong> belt&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reversible&quot;</p>
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
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Ible Rule</h3>
              <p className="text-yellow-800">&quot;Reversible&quot; ends with &quot;ible&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Capability</h3>
              <p className="text-rose-800">&quot;ible&quot; = able to be, &quot;able&quot; = wrong ending</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;reversible&quot; to build muscle memory</p>
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
                <li>• <strong>Reversible jacket</strong> - two-sided clothing</li>
                <li>• <strong>Reversible reaction</strong> - chemical process</li>
                <li>• <strong>Reversible decision</strong> - changeable choice</li>
                <li>• <strong>Reversible damage</strong> - fixable harm</li>
                <li>• <strong>Reversible process</strong> - undoable action</li>
                <li>• <strong>Reversible error</strong> - correctable mistake</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The reversible jacket&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;This process is reversible&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More reversible&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most reversible&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Reversibly&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The reversibility&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;reversible&quot; as &quot;reversable&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity between &quot;ible&quot; and &quot;able&quot; suffixes. Both mean &quot;capable of,&quot; but &quot;reversible&quot; specifically uses the &quot;ible&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;reversible&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Reversible&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;reversible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reversible&quot; comes from Latin &quot;revertere&quot; (to turn back) + the suffix &quot;ibilis&quot; (able to be). It refers to something that can be turned back or undone.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;reversible&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about things that can be turned around or undone to reinforce the correct spelling. Emphasize the &quot;ible&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;reversible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: changeable, alterable, modifiable, convertible, transformable, and adjustable.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can &quot;reversible&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Reversible&quot; can describe any situation that can be undone or changed, like &quot;reversible fortune&quot; or &quot;reversible opinion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between &quot;reversible&quot; and &quot;changeable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reversible&quot; specifically refers to something that can be turned back to its original state, while &quot;changeable&quot; is broader and can mean any kind of alteration or modification.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Reversible&quot;</strong> ends with &quot;ible&quot; and means &quot;able to be reversed.&quot; 
          <br />
          <strong>&quot;Reversable&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REVERSE + IBLE = correct spelling&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/revised-vs-revized" className="hover:text-blue-600 underline">Revised vs Revized</a></li>
            <li><a href="/spelling/reverend-vs-reverand" className="hover:text-blue-600 underline">Reverend vs Reverand</a></li>
            <li><a href="/spelling/revenue-vs-revene" className="hover:text-blue-600 underline">Revenue vs Revene</a></li>
            <li><a href="/spelling/revenge-vs-revange" className="hover:text-blue-600 underline">Revenge vs Revange</a></li>
            <li><a href="/spelling/retention-vs-retension" className="hover:text-blue-600 underline">Retention vs Retension</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/retaliation-vs-retailation" className="hover:text-green-600 underline">Retaliation vs Retailation</a></li>
            <li><a href="/spelling/resurrection-vs-ressurection" className="hover:text-green-600 underline">Resurrection vs Ressurection</a></li>
            <li><a href="/spelling/restraint-vs-restrant" className="hover:text-green-600 underline">Restraint vs Restrant</a></li>
            <li><a href="/spelling/restauranter-vs-restauranteer" className="hover:text-green-600 underline">Restauranter vs Restauranteer</a></li>
            <li><a href="/spelling/said-vs-sayed" className="hover:text-green-600 underline">Said vs Sayed</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/grammar/adjective-start-with-f" className="hover:text-purple-600 underline">Adjective Start With F</a></li>
            <li><a href="/grammar/adjective-start-with-g" className="hover:text-purple-600 underline">Adjective Start With G</a></li>
            <li><a href="/grammar/adjective-start-with-h" className="hover:text-purple-600 underline">Adjective Start With H</a></li>
            <li><a href="/grammar/adjective-start-with-i" className="hover:text-purple-600 underline">Adjective Start With I</a></li>
            <li><a href="/grammar/adjective-start-with-j" className="hover:text-purple-600 underline">Adjective Start With J</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
