import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scarf vs Scarfe - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;scarf&quot; and &quot;scarfe&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScarfVsScarfePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Scarf vs Scarfe
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🧣</span>
            <span className="text-2xl font-bold text-green-600">&quot;Scarf&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Scarfe&quot; is always incorrect - remember the &quot;f&quot; ending in &quot;scarf&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Scarfe</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common phonetic mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Scarf</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a piece of fabric worn around the neck for warmth.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Scarf&quot; (Noun/Verb)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;neck garment&quot;</li>
                <li>• Ends with &quot;f&quot;</li>
                <li>• From Old French &quot;escarpe&quot;</li>
                <li>• Used in fashion contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Scarfe&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Extra &quot;e&quot;</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Sc&quot; + &quot;arf&quot;</li>
                <li>• Silent &quot;c&quot; before &quot;a&quot;</li>
                <li>• Related to &quot;scarf&quot;</li>
                <li>• Common English pattern</li>
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
                <p className="text-lg text-green-800">&quot;She wrapped her <strong>scarf</strong> tightly around her neck.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The wool <strong>scarf</strong> kept me warm in winter.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I bought a new silk <strong>scarf</strong> for the party.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>scarf</strong> matched his winter coat perfectly.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Wool <strong>scarfe</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarf&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Silk <strong>scarfe</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarf&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Winter <strong>scarfe</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarf&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Warm <strong>scarfe</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scarf&quot;</p>
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
              <div className="text-4xl mb-3">🧣</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">F Ending</h3>
              <p className="text-yellow-800">Think of &quot;f&quot; like &quot;golf&quot; and &quot;roof&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">No Extra E</h3>
              <p className="text-blue-800">Remember: &quot;scarf&quot; ends with &quot;f&quot;, not &quot;fe&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;scarf&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Winter scarf</strong> - cold weather garment</li>
                <li>• <strong>Silk scarf</strong> - elegant fabric</li>
                <li>• <strong>Wool scarf</strong> - warm material</li>
                <li>• <strong>Cashmere scarf</strong> - luxury fabric</li>
                <li>• <strong>Infinity scarf</strong> - looped style</li>
                <li>• <strong>Pashmina scarf</strong> - fine wool</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The scarf was warm&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I scarf down my food&quot;</li>
                <li>• <strong>Object:</strong> &quot;She wore the scarf&quot;</li>
                <li>• <strong>Subject:</strong> &quot;The scarf kept me warm&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s my scarf&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Scarf collection&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people misspell &quot;scarf&quot; as &quot;scarfe&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People often add an &quot;e&quot; at the end, possibly influenced by words like &quot;knife&quot; or &quot;life&quot; that end with &quot;fe.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;scarf&quot; related to other words?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Scarf&quot; comes from Old French &quot;escarpe&quot; and is related to words like &quot;scarf&quot; (verb meaning to eat quickly) and &quot;scarf joint&quot; in carpentry.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;scarf&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scarf&quot; comes from Old French &quot;escarpe&quot; meaning &quot;pilgrim&apos;s bag&quot; or &quot;satchel.&quot; It evolved to refer to the neck garment we know today.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;scarf&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! As a noun, it means &quot;a neck garment.&quot; As a verb, it means &quot;to eat quickly&quot; (slang usage). Both are correct English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;scarf&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: muffler, neckerchief, shawl, wrap, stole, and pashmina.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;scarf&quot; as ending with &quot;f&quot; like other words: golf, roof, proof. Don&apos;t add an extra &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;scarf&quot; used differently in British vs American English?</h3>
              <p className="text-lg text-gray-700">A: The spelling is the same in both varieties. However, some regional dialects might use alternative terms like &quot;muffler&quot; or &quot;neckerchief.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;scarf&quot; and &quot;muffler&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to neck garments, &quot;scarf&quot; is more general and can be made of various materials, while &quot;muffler&quot; specifically refers to a warm, thick scarf for cold weather.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Scarf&quot;</strong> ends with &quot;f&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Scarfe&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SCARF = F ending like GOLF&quot;</p>
        </div>
      </div>
    </div>
  )
}
