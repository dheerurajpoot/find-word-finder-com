import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sustenance vs Sustainance - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;sustenance&quot; vs &quot;sustainance&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SustenanceVsSustainancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Sustenance vs Sustainance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sustenance&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sustainance&quot; is always incorrect - remember the &quot;e&quot; in &quot;sustenance&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sustainance</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sustenance</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;food and drink that supports life.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sustain&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Base word</li>
                <li>• Means &quot;support&quot;</li>
                <li>• Common prefix</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;E&quot; (Vowel)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Short &quot;e&quot; sound</li>
                <li>• Like &quot;ten&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;a&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ance&quot; (Suffix)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Forms noun</li>
                <li>• Like &quot;importance&quot;</li>
                <li>• Common ending</li>
                <li>• Easy to spell</li>
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
                <p className="text-lg text-green-800">&quot;Food provides <strong>sustenance</strong> for the body.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The plants need <strong>sustenance</strong> to grow.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He found <strong>sustenance</strong> in his faith.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The village depends on farming for <strong>sustenance</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Food provides <strong>sustainance</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustenance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The plants need <strong>sustainance</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustenance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He found <strong>sustainance</strong> in his faith&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustenance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The village depends on <strong>sustainance</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustenance&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Rule</h3>
              <p className="text-yellow-800">&quot;Sustenance&quot; has &quot;e&quot; like &quot;ten&quot; and &quot;men&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Food</h3>
              <p className="text-blue-800">&quot;Sustenance&quot; = food, &quot;Sustainance&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sustenance&quot; to build muscle memory</p>
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
                <li>• <strong>Daily sustenance</strong> - food needed each day</li>
                <li>• <strong>Spiritual sustenance</strong> - nourishment for the soul</li>
                <li>• <strong>Basic sustenance</strong> - minimal food requirements</li>
                <li>• <strong>Find sustenance</strong> - obtain food or support</li>
                <li>• <strong>Provide sustenance</strong> - give food or support</li>
                <li>• <strong>Seek sustenance</strong> - look for food or support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Sustenance is essential&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sustenance comes from food&quot;</li>
                <li>• <strong>Object:</strong> &quot;We need sustenance&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The sustenance&apos;s source&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Sustenance farming&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple sustenances&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;sustenance&quot; and &quot;sustainance&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that &quot;a&quot; and &quot;e&quot; can sound similar in some accents. Many people don&apos;t realize that &quot;sustenance&quot; is spelled with &quot;e&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;sustenance&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sustenance&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;sustenance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustenance&quot; comes from Latin &quot;sustentare&quot; meaning &quot;to hold up&quot; and is related to the word &quot;sustain&quot; meaning &quot;to support or maintain.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;sustenance&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;sustenance&quot; has &quot;e&quot; in the middle (like &quot;ten&quot; and &quot;men&quot;), and emphasize that &quot;sustainance&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;sustenance&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: nourishment, food, nutrition, sustenance, support, maintenance, and livelihood. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;sustenance&quot; be used in agricultural contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sustenance&quot; is very common in agricultural contexts, especially when referring to food production, farming for survival, or subsistence agriculture.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;sustenance&quot; and &quot;nutrition&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustenance&quot; refers to food and drink that supports life, while &quot;nutrition&quot; specifically refers to the nutrients and health benefits provided by food.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;sustenance&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sustenance&quot; as having &quot;e&quot; in the middle like other words: ten, men, sustenance. The &quot;e&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;sustenance&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: sustainance, sustenance, sustenance, sustenance, and sustenance. The correct spelling always has &quot;e&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;sustenance&quot; used in survival contexts?</h3>
              <p className="text-lg text-gray-700">A: In survival contexts, &quot;sustenance&quot; describes the food and water needed to stay alive, often referring to basic necessities for survival in challenging conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between sustenance and food?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustenance&quot; refers to food and drink that supports life and survival, while &quot;food&quot; is a more general term for any edible substance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;sustenance&quot; with &quot;a&quot; instead of &quot;e&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;a&quot; and &quot;e&quot; because they may not pronounce the &quot;e&quot; clearly, but &quot;sustenance&quot; specifically has &quot;e&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;sustenance&quot; used in spiritual contexts?</h3>
              <p className="text-lg text-gray-700">A: In spiritual contexts, &quot;sustenance&quot; refers to nourishment for the soul, spiritual support, or that which sustains one&apos;s faith and inner life.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;sustenance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustenance&quot; can mean: food and drink that supports life, spiritual nourishment, support or maintenance, or the means of sustaining life.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sustenance&quot;</strong> has &quot;e&quot; in the middle and means &quot;food and drink that supports life.&quot; 
          <br />
          <strong>&quot;Sustainance&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUSTAIN + E + ANCE = SUSTENANCE&quot;</p>
        </div>
      </div>
    </div>
  )
} 