import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sank vs Sinked - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sank&quot; and &quot;sinked&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SankVsSinkedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Sank vs Sinked
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
            <span className="text-2xl font-bold text-green-600">&quot;Sank&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sinked&quot; is always incorrect - remember &quot;sank&quot; is the past tense of &quot;sink&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sinked</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sank</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning the past tense of &quot;sink&quot; or &quot;to go down.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Sink&quot; (Present)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to go down&quot;</li>
                <li>• Present tense verb</li>
                <li>• Base form of the word</li>
                <li>• Used for current action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Sank&quot; (Past)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;went down&quot;</li>
                <li>• Past tense of &quot;sink&quot;</li>
                <li>• Irregular verb form</li>
                <li>• Used for past action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Common Mistake</h3>
              <ul className="text-red-800 space-y-2">
                <li>• People use &quot;sinked&quot;</li>
                <li>• &quot;Sinked&quot; is never correct</li>
                <li>• Always use &quot;sank&quot;</li>
                <li>• Follow irregular verb rules</li>
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
                <p className="text-lg text-green-800">&quot;The ship <strong>sank</strong> in the storm.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The ball <strong>sank</strong> into the water.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The sun <strong>sank</strong> below the horizon.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The building <strong>sank</strong> into the ground.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ship <strong>sinked</strong> in the storm&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sank&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ball <strong>sinked</strong> into the water&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sank&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sun <strong>sinked</strong> below the horizon&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sank&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The building <strong>sinked</strong> into the ground&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sank&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">Sink is irregular: sink → sank → sunk</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Short</h3>
              <p className="text-amber-800">&quot;Sank&quot; is shorter than &quot;sinked&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;sank&quot; to build muscle memory</p>
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
                <li>• <strong>Sank like a stone</strong> - fell quickly</li>
                <li>• <strong>Sank into despair</strong> - became depressed</li>
                <li>• <strong>Sank to the bottom</strong> - fell completely</li>
                <li>• <strong>Sank without trace</strong> - disappeared completely</li>
                <li>• <strong>Sank into oblivion</strong> - was forgotten</li>
                <li>• <strong>Sank into the ground</strong> - settled down</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;The ship sank&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The ship has sunk&quot;</li>
                <li>• <strong>Intransitive:</strong> &quot;The boat sank&quot;</li>
                <li>• <strong>Transitive:</strong> &quot;They sank the ship&quot;</li>
                <li>• <strong>Metaphorical:</strong> &quot;His spirits sank&quot;</li>
                <li>• <strong>Literal:</strong> &quot;The stone sank&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people use &quot;sinked&quot; instead of &quot;sank&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the fact that many English verbs follow the regular pattern of adding &quot;ed&quot; for past tense (like &quot;walk&quot; → &quot;walked&quot;). However, &quot;sink&quot; is an irregular verb that doesn&apos;t follow this pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;sank&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sank&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard past tense form of the verb &quot;sink.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the etymology of &quot;sank&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sank&quot; comes from Old English &quot;sanc&quot; (past tense of &quot;sincan&quot;). The word has maintained its irregular conjugation throughout English history, following the pattern: sink → sank → sunk.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sank&quot; is the standard past tense form across all English-speaking regions. The spelling &quot;sinked&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sank&quot; as the short, correct form. Remember the pattern: &quot;Sink&quot; (present) → &quot;Sank&quot; (past) → &quot;Sunk&quot; (past participle). The word gets shorter, not longer!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;sank&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: descended, dropped, fell, plunged, submerged, went down, and settled.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;sank&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sank&quot; is often used metaphorically to describe emotional states, such as &quot;His spirits sank&quot; or &quot;Her heart sank,&quot; meaning feelings of disappointment or sadness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;sank&quot; and &quot;sunk&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sank&quot; is the simple past tense (used for completed actions), while &quot;sunk&quot; is the past participle (used with helping verbs like &quot;have&quot; or &quot;had&quot;). Example: &quot;The ship sank&quot; vs &quot;The ship has sunk.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sank&quot;</strong> is the past tense of &quot;sink.&quot; 
          <br />
          <strong>&quot;Sinked&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SINK → SANK → SUNK&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-blue-600 underline">Satellite vs Sattellite</a></li>
            <li><a href="/spelling/satirically-vs-satrically" className="hover:text-blue-600 underline">Satirically vs Satrically</a></li>
            <li><a href="/spelling/satirize-vs-saturize" className="hover:text-blue-600 underline">Satirize vs Saturize</a></li>
            <li><a href="/spelling/severely-vs-severly" className="hover:text-blue-600 underline">Severely vs Severly</a></li>
            <li><a href="/spelling/too%20much-vs-to%20much" className="hover:text-blue-600 underline">Too Much vs To Much</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/satellite-vs-sattelite" className="hover:text-green-600 underline">Satellite vs Sattelite</a></li>
            <li><a href="/spelling/satellite-vs-satelite" className="hover:text-green-600 underline">Satellite vs Satelite</a></li>
            <li><a href="/spelling/satellite-vs-satallite" className="hover:text-green-600 underline">Satellite vs Satallite</a></li>
            <li><a href="/spelling/satellite-vs-satalite" className="hover:text-green-600 underline">Satellite vs Satalite</a></li>
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
