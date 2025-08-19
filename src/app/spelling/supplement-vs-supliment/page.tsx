import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supplement vs Supliment - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supplement&quot; and &quot;supliment&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupplementVsSuplimentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Supplement vs Supliment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💊</span>
            <span className="text-2xl font-bold text-green-600">&quot;Supplement&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supliment&quot; is incorrect - remember the &quot;p&quot; in &quot;supplement&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supliment</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;p&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supplement</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;something added to complete or enhance.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sup&quot; (Prefix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Essential part of word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;P&quot; (Essential)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Must include &quot;p&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Part of root word</li>
                <li>• Cannot be omitted</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Liment&quot; (Suffix)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Common ending</li>
                <li>• Forms nouns</li>
                <li>• Easy to spell</li>
                <li>• Simple pattern</li>
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
                <p className="text-lg text-green-800">&quot;I take a vitamin <strong>supplement</strong> daily.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This book is a <strong>supplement</strong> to the main text.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>supplement</strong> contains essential nutrients.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She added a <strong>supplement</strong> to her diet.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I take a vitamin <strong>supliment</strong> daily&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This book is a <strong>supliment</strong> to the main text&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>supliment</strong> contains essential nutrients&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She added a <strong>supliment</strong> to her diet&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplement&quot;</p>
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
              <div className="text-4xl mb-3">💊</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Pills</h3>
              <p className="text-yellow-800">&quot;Supplement&quot; has a &quot;p&quot; like pills</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound It Out</h3>
              <p className="text-blue-800">Say &quot;supplement&quot; - hear the &quot;p&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;supplement&quot; to build muscle memory</p>
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
                <li>• <strong>Dietary supplement</strong> - nutritional addition</li>
                <li>• <strong>Supplemental material</strong> - additional content</li>
                <li>• <strong>Supplemental income</strong> - add to earnings</li>
                <li>• <strong>Supplemental insurance</strong> - additional coverage</li>
                <li>• <strong>Supplement to</strong> - add to something</li>
                <li>• <strong>Supplement with</strong> - add using something</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Supplement</strong> - noun and verb</li>
                <li>• <strong>Supplemental</strong> - adjective form</li>
                <li>• <strong>Supplementation</strong> - process of adding</li>
                <li>• <strong>Supplementary</strong> - additional</li>
                <li>• <strong>Supplemented</strong> - past tense</li>
                <li>• <strong>Supplementing</strong> - present participle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supplement&quot; as &quot;supliment&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is dropping the &quot;p&quot; sound, which can happen when people don&apos;t pronounce the word clearly or when they&apos;re writing quickly without thinking about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;supplement&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplement&quot; is a formal, standard English word commonly used in academic, medical, and professional contexts. It&apos;s perfectly appropriate for all types of writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;supplement&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; comes from Latin &quot;supplementum&quot; meaning &quot;something added to complete.&quot; The word combines &quot;sub&quot; (under) + &quot;plere&quot; (to fill) + &quot;mentum&quot; (result).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;supplement&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized word used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;supplement&quot; has a &quot;p&quot; in the middle. Think of it as &quot;sup&quot; + &quot;p&quot; + &quot;lement&quot; or remember that supplements often come in pill form (with a &quot;p&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;supplement&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: addition, enhancement, complement, add-on, extra, boost, and reinforcement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;supplement&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplement&quot; can be a noun meaning &quot;something added&quot; or a verb meaning &quot;to add to or complete.&quot; It&apos;s a versatile word with multiple grammatical functions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;supplement&quot; and &quot;complement&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;supplement&quot; adds to or enhances something, while a &quot;complement&quot; completes or makes perfect. Both add value but in different ways.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;supliment&quot; a real word in any language?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;supliment&quot; is not a real word in English or any other language. It&apos;s a common misspelling that has no meaning and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How do I pronounce &quot;supplement&quot; correctly?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplement&quot; is pronounced as &quot;SUH-pluh-ment&quot; with the stress on the first syllable. The &quot;p&quot; sound is clearly pronounced, which helps remember the spelling.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supplement&quot;</strong> has a &quot;p&quot; in the middle. 
          <br />
          <strong>&quot;Supliment&quot;</strong> is missing the &quot;p&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUP + P + LEMENT&quot; - the &quot;p&quot; is essential!</p>
        </div>
      </div>
    </div>
  )
}
