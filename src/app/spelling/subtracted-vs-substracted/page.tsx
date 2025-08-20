import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subtracted vs Substracted - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subtracted&quot; and &quot;substracted&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubtractedVsSubstractedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Subtracted vs Substracted
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 p-8 rounded-2xl mb-10 border border-red-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">➖</span>
            <span className="text-2xl font-bold text-red-600">&quot;Subtracted&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Substracted&quot; is always incorrect - remember the &quot;t&quot; in &quot;subtracted&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Substracted</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Subtracted</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;taken away from another number.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Means &quot;below&quot; or &quot;under&quot;</li>
                <li>• Also means &quot;remove&quot;</li>
                <li>• Common in English words</li>
                <li>• Latin origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Tract&quot; (Root)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;to draw&quot; or &quot;pull&quot;</li>
                <li>• Related to extraction</li>
                <li>• Latin origin: &quot;tractus&quot;</li>
                <li>• Used in many compound words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Ed&quot; (Suffix)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Forms past tense</li>
                <li>• Means &quot;completed action&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;subtracted&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>subtracted</strong> 5 from 10 and got 5.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>subtracted</strong> the expenses from her income.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The teacher <strong>subtracted</strong> points for late work.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>subtracted</strong> the discount from the total.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>substracted</strong> 5 from 10&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtracted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>substracted</strong> the expenses&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtracted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The teacher <strong>substracted</strong> points&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtracted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>substracted</strong> the discount&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtracted&quot;</p>
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
              <div className="text-4xl mb-3">➖</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Minus Sign</h3>
              <p className="text-yellow-800">&quot;Subtracted&quot; has a &quot;t&quot; like the minus sign</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">T in Tract</h3>
              <p className="text-blue-800">Remember the &quot;t&quot; in &quot;tract&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;subtracted&quot; to build muscle memory</p>
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
                <li>• <strong>Subtracted from</strong> - mathematical operation</li>
                <li>• <strong>Subtracted amount</strong> - removed quantity</li>
                <li>• <strong>Subtracted value</strong> - deducted number</li>
                <li>• <strong>Subtracted total</strong> - reduced sum</li>
                <li>• <strong>Subtracted cost</strong> - deducted expense</li>
                <li>• <strong>Subtracted time</strong> - reduced duration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;I subtracted&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;has been subtracted&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;subtracted amount&quot;</li>
                <li>• <strong>Subject:</strong> &quot;The number was subtracted&quot;</li>
                <li>• <strong>Object:</strong> &quot;I subtracted the value&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Subtracting numbers&quot;</li>
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
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people confuse &quot;subtracted&quot; and &quot;substracted&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;abstraction&quot; or &quot;extraction.&quot; However, &quot;subtracted&quot; follows the pattern of &quot;sub&quot; + &quot;tract&quot; + &quot;ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;subtracted&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Subtracted&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard mathematical term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;subtracted&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subtracted&quot; comes from Latin &quot;sub&quot; (under) + &quot;tractus&quot; (drawn). It was first used in English in the 15th century to describe the mathematical operation of taking away.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;subtracted&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;taken away&quot; or &quot;minus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;sub&quot; + &quot;tract&quot; + &quot;ed.&quot; Create simple math problems and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subtracted&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: taken away, deducted, removed, decreased, reduced, and minus operation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;subtracted&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While primarily mathematical, &quot;subtracted&quot; can be used metaphorically to describe any process of taking away or removing something, like &quot;subtracted from the budget.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subtracted&quot; and &quot;divided&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subtracted&quot; involves taking away one number from another, while &quot;divided&quot; involves splitting a number into equal parts. They are different fundamental mathematical operations.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subtracted&quot;</strong> is the correct spelling meaning &quot;taken away.&quot; 
          <br />
          <strong>&quot;Substracted&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + TRACT + ED = SUBTRACTED&quot;</p>
        </div>
      </div>
    </div>
  )
}
