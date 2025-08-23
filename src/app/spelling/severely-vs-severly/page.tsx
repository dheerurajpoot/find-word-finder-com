import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Severely vs Severly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;severely&quot; and &quot;severly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeverelyVsSeverlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Severely vs Severly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-red-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Severely&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Severly&quot; is always incorrect - remember the &quot;e&quot; before &quot;ly&quot; in &quot;severely&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Severly</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Severely</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;in a severe manner&quot; or &quot;to a severe degree.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Severe&quot; (Adjective)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;harsh&quot; or &quot;serious&quot;</li>
                <li>• Ends with &quot;e&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used to describe intensity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Severely&quot; (Adverb)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;in a severe manner&quot;</li>
                <li>• Add &quot;ly&quot; to &quot;severe&quot;</li>
                <li>• Keeps the &quot;e&quot; before &quot;ly&quot;</li>
                <li>• Describes how something is done</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Mistake</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• People drop the &quot;e&quot;</li>
                <li>• &quot;Severly&quot; is never correct</li>
                <li>• Always keep the &quot;e&quot;</li>
                <li>• Follow the &quot;e&quot; + &quot;ly&quot; rule</li>
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
                <p className="text-lg text-green-800">&quot;The patient was <strong>severely</strong> injured in the accident.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The storm <strong>severely</strong> damaged the coastal area.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He was <strong>severely</strong> punished for his actions.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The drought <strong>severely</strong> affected crop production.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The patient was <strong>severly</strong> injured&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The storm <strong>severly</strong> damaged&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He was <strong>severly</strong> punished&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The drought <strong>severly</strong> affected&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;severely&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Before LY Rule</h3>
              <p className="text-yellow-800">Keep the &quot;e&quot; before adding &quot;ly&quot; to adjectives ending in &quot;e&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Complete</h3>
              <p className="text-blue-800">&quot;Severe&quot; + &quot;ly&quot; = &quot;Severely&quot; (complete word)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;severely&quot; to build muscle memory</p>
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
                <li>• <strong>Severely injured</strong> - badly hurt</li>
                <li>• <strong>Severely damaged</strong> - heavily harmed</li>
                <li>• <strong>Severely punished</strong> - harshly disciplined</li>
                <li>• <strong>Severely affected</strong> - heavily impacted</li>
                <li>• <strong>Severely limited</strong> - heavily restricted</li>
                <li>• <strong>Severely criticized</strong> - harshly judged</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He was severely injured&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Severely damaged property&quot;</li>
                <li>• <strong>Intensifier:</strong> &quot;Severely limited options&quot;</li>
                <li>• <strong>Description:</strong> &quot;The area was severely affected&quot;</li>
                <li>• <strong>Emphasis:</strong> &quot;She was severely criticized&quot;</li>
                <li>• <strong>Degree:</strong> &quot;The pain was severely intense&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people drop the &quot;e&quot; in &quot;severely&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the general rule that many adverbs drop the final &quot;e&quot; when adding &quot;ly&quot; (like &quot;true&quot; → &quot;truly&quot;). However, &quot;severe&quot; keeps its &quot;e&quot; before &quot;ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;severely&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Severely&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adverb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;severely&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Severe&quot; comes from Latin &quot;severus&quot; meaning &quot;serious&quot; or &quot;strict.&quot; The adverb form &quot;severely&quot; follows the standard English pattern of adding &quot;ly&quot; to adjectives.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;severely&quot; is spelled the same way across all English-speaking regions. The spelling &quot;severly&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;severe&quot; as the complete word, then add &quot;ly.&quot; The &quot;e&quot; is part of the base word and should be preserved. Remember: &quot;Severe&quot; + &quot;ly&quot; = &quot;Severely.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;severely&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: seriously, badly, heavily, critically, gravely, intensely, and harshly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;severely&quot; be used positively?</h3>
              <p className="text-lg text-gray-700">A: While &quot;severely&quot; often indicates negative intensity, it can be used neutrally to describe degree, such as &quot;severely limited&quot; or &quot;severely restricted&quot; without necessarily being negative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;severely&quot; and &quot;very&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Severely&quot; indicates a high degree with emphasis on the serious or intense nature, while &quot;very&quot; is a general intensifier. &quot;Severely injured&quot; emphasizes the seriousness, while &quot;very injured&quot; just indicates degree.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Severely&quot;</strong> keeps the &quot;e&quot; before &quot;ly.&quot; 
          <br />
          <strong>&quot;Severly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SEVERE + LY = SEVERELY&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/too%20much-vs-to%20much" className="hover:text-blue-600 underline">Too Much vs To Much</a></li>
            <li><a href="/spelling/your-vs-youre" className="hover:text-blue-600 underline">Your vs You&apos;re</a></li>
            <li><a href="/spelling/their-vs-there" className="hover:text-blue-600 underline">Their vs There</a></li>
            <li><a href="/spelling/weather-vs-whether" className="hover:text-blue-600 underline">Weather vs Whether</a></li>
            <li><a href="/spelling/stationary-vs-stationery" className="hover:text-blue-600 underline">Stationary vs Stationery</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/satirize-vs-saturize" className="hover:text-green-600 underline">Satirize vs Saturize</a></li>
            <li><a href="/spelling/satirically-vs-satrically" className="hover:text-green-600 underline">Satirically vs Satrically</a></li>
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-green-600 underline">Satellite vs Sattellite</a></li>
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
