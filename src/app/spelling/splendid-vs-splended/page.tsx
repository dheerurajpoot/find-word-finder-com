import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Splendid vs Splended - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;splendid&quot; and &quot;splended&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SplendidVsSplendedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
          Splendid vs Splended
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 p-8 rounded-2xl mb-10 border border-yellow-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✨</span>
            <span className="text-2xl font-bold text-yellow-600">&quot;Splendid&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Splended&quot; is always incorrect - remember the &quot;id&quot; ending in &quot;splendid&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Splended</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-yellow-800 mb-4">Splendid</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-yellow-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-yellow-700 leading-relaxed">
                This is the proper spelling meaning &quot;magnificent, excellent, or brilliant.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Splendid&quot; (Adjective)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Ends with &quot;id&quot;</li>
                <li>• Means &quot;excellent&quot;</li>
                <li>• Describes quality</li>
                <li>• Positive connotation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Suffix Rule</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• &quot;id&quot; = having quality</li>
                <li>• Common adjective ending</li>
                <li>• Similar to &quot;solid&quot;</li>
                <li>• Indicates characteristic</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Common Confusion</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• People forget &quot;id&quot;</li>
                <li>• Similar to &quot;splendid&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember suffix</li>
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
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-lg text-yellow-800">&quot;What a <strong>splendid</strong> performance!&quot;</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-lg text-yellow-800">&quot;The view was absolutely <strong>splendid</strong>.&quot;</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-lg text-yellow-800">&quot;She wore a <strong>splendid</strong> dress to the party.&quot;</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-lg text-yellow-800">&quot;The meal was <strong>splendid</strong> and delicious.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What a <strong>splended</strong> performance!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The view was absolutely <strong>splended</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She wore a <strong>splended</strong> dress&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The meal was <strong>splended</strong> and delicious&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
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
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ID Rule</h3>
              <p className="text-yellow-800">&quot;Splendid&quot; ends with &quot;id&quot; like &quot;solid&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Quality</h3>
              <p className="text-amber-800">Splendid = excellent quality = &quot;id&quot; ending</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;splendid&quot; to build muscle memory</p>
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
                <li>• <strong>Splendid isolation</strong> - British foreign policy</li>
                <li>• <strong>Splendid time</strong> - wonderful experience</li>
                <li>• <strong>Splendid weather</strong> - perfect conditions</li>
                <li>• <strong>Splendid success</strong> - great achievement</li>
                <li>• <strong>Splendid example</strong> - excellent model</li>
                <li>• <strong>Splendid opportunity</strong> - great chance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Attributive adjective:</strong> &quot;The splendid view&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The view was splendid&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More splendid&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most splendid&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Splendidly&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Splendor&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Why do people misspell &quot;splendid&quot; as &quot;splended&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;id&quot; suffix, which is common in English adjectives that describe qualities. Some people may also be influenced by similar words or unclear pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the meaning of the &quot;id&quot; suffix?</h3>
              <p className="text-lg text-gray-700">A: The &quot;id&quot; suffix means &quot;having the quality of&quot; or &quot;characterized by.&quot; So &quot;splendid&quot; means &quot;having splendor&quot; or &quot;characterized by excellence.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there other words that end with &quot;id&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English adjectives end with &quot;id&quot;: solid, rapid, valid, rigid, fluid, candid, and lucid are just a few examples. Each describes a characteristic or quality.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;splendid&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Splendid&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s considered elegant and sophisticated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;splendid&quot; and &quot;wonderful&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both are positive, &quot;splendid&quot; suggests something more magnificent, impressive, or grand, while &quot;wonderful&quot; is more general and can mean anything that causes wonder or delight.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;splendid&quot; as &quot;splend&quot; + &quot;id.&quot; The &quot;id&quot; ending is common in English adjectives that describe qualities, so if you remember that pattern, you&apos;ll spell it correctly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;splendid&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: magnificent, excellent, brilliant, superb, outstanding, marvelous, glorious, and resplendent. Each has slightly different nuances and levels of intensity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;splended&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;splended&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;splendid&quot; with the &quot;id&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;splendid&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Splendid&quot; comes from Latin &quot;splendidus&quot; meaning &quot;shining&quot; or &quot;bright.&quot; It&apos;s related to the Latin word &quot;splendere&quot; meaning &quot;to shine,&quot; which gives us the sense of something being bright, excellent, or magnificent.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;splendid&quot; be used ironically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Splendid&quot; can be used ironically or sarcastically to mean the opposite of its literal meaning. For example, &quot;Well, that&apos;s just splendid&quot; when something goes wrong can be a form of sarcasm.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Splendid&quot;</strong> has the &quot;id&quot; suffix and means &quot;magnificent or excellent.&quot; 
          <br />
          <strong>&quot;Splended&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPLENDID = excellent quality = ID ending&quot;</p>
        </div>
      </div>
    </div>
  )
}
