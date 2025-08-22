import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sauerkraut vs Saurkraut - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sauerkraut&quot; and &quot;saurkraut&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SauerkrautVsSaurkrautPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Sauerkraut vs Saurkraut
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🥬</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sauerkraut&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Saurkraut&quot; is always incorrect - remember the &quot;auer&quot; in &quot;sauerkraut&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Saurkraut</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sauerkraut</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;fermented cabbage.&quot;
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
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Sauerkraut&quot; (Noun)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• German origin</li>
                <li>• Contains &quot;auer&quot;</li>
                <li>• From German &quot;sauer&quot; + &quot;kraut&quot;</li>
                <li>• Used for food</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Saurkraut&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Missing &quot;e&quot;</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Sauer&quot; + &quot;kraut&quot;</li>
                <li>• German compound</li>
                <li>• Related to &quot;sauer&quot;</li>
                <li>• Standard German spelling</li>
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
                <p className="text-lg text-green-800">&quot;I love <strong>sauerkraut</strong> on my hot dog.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>sauerkraut</strong> is very tangy.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She makes homemade <strong>sauerkraut</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>sauerkraut</strong> recipe is traditional.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I love <strong>saurkraut</strong> on my hot dog&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sauerkraut&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>saurkraut</strong> is very tangy&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sauerkraut&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She makes homemade <strong>saurkraut</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sauerkraut&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>saurkraut</strong> recipe is traditional&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sauerkraut&quot;</p>
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
              <div className="text-4xl mb-3">🥬</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AUER Sound</h3>
              <p className="text-yellow-800">Think of &quot;auer&quot; like &quot;power&quot; and &quot;flower&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">German Origin</h3>
              <p className="text-blue-800">Remember: It&apos;s a German word, not English</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sauerkraut&quot; to build muscle memory</p>
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
                <li>• <strong>Homemade sauerkraut</strong> - self-made</li>
                <li>• <strong>Traditional sauerkraut</strong> - classic recipe</li>
                <li>• <strong>Fermented sauerkraut</strong> - preserved cabbage</li>
                <li>• <strong>German sauerkraut</strong> - origin reference</li>
                <li>• <strong>Fresh sauerkraut</strong> - newly made</li>
                <li>• <strong>Spicy sauerkraut</strong> - hot variety</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The sauerkraut is ready&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sauerkraut tastes tangy&quot;</li>
                <li>• <strong>Object:</strong> &quot;I bought sauerkraut&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Sauerkraut recipe&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;The dish, sauerkraut&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s sauerkraut&quot;</li>
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
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;sauerkraut&quot; as &quot;saurkraut&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People often drop the &quot;e&quot; when trying to spell based on pronunciation, creating the incorrect &quot;saurkraut&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;sauerkraut&quot; related to the word &quot;sour&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sauerkraut&quot; comes from the German words &quot;sauer&quot; (meaning &quot;sour&quot;) and &quot;kraut&quot; (meaning &quot;cabbage&quot;). So it literally means &quot;sour cabbage.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;sauerkraut&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sauerkraut&quot; is a German word that combines &quot;sauer&quot; (sour) and &quot;kraut&quot; (cabbage). It was brought to America by German immigrants and has become a popular food item.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;sauerkraut&quot; be used in both formal and informal contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sauerkraut&quot; is appropriate for all contexts, from casual conversation to formal writing, cookbooks, and professional culinary communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;sauerkraut&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: fermented cabbage, pickled cabbage, sour cabbage, and German cabbage. However, &quot;sauerkraut&quot; is the most widely recognized term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sauerkraut&quot; as a German word. Remember the &quot;auer&quot; part - it&apos;s not &quot;saur&quot; but &quot;sauer&quot; in German.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;sauerkraut&quot; always about food?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;sauerkraut&quot; specifically refers to fermented cabbage, which is a food item. It&apos;s not used in other contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;sauerkraut&quot; and &quot;pickled cabbage&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both involve preserved cabbage, &quot;sauerkraut&quot; is specifically fermented (using salt and natural bacteria), while &quot;pickled cabbage&quot; is preserved in vinegar or brine.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there any other German food words that follow the same pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many German food words follow similar patterns: &quot;bratwurst,&quot; &quot;strudel,&quot; &quot;pretzel,&quot; and &quot;wurst&quot; are all German words commonly used in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How important is correct spelling in culinary communication?</h3>
              <p className="text-lg text-gray-700">A: Very important! Correct spelling demonstrates knowledge of food culture and professionalism. Misspelling &quot;sauerkraut&quot; as &quot;saurkraut&quot; can make your culinary writing appear less credible.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sauerkraut&quot;</strong> contains &quot;auer&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Saurkraut&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAUERKRAUT = German word with AUER sound&quot;</p>
        </div>
      </div>
    </div>
  )
}
