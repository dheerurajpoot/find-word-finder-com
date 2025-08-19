import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Summer vs Sumer - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;summer&quot; and &quot;sumer&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SummerVsSumerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Summer vs Sumer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Summer&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sumer&quot; is always incorrect - remember the double &quot;m&quot; in &quot;summer&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sumer</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Summer</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the warmest season of the year.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Summer&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has double &quot;m&quot;</li>
                <li>• Follows &quot;sum&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Common Error</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• &quot;Sumer&quot; is wrong</li>
                <li>• Missing second &quot;m&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Memory Aid</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Think &quot;SUM + MER&quot;</li>
                <li>• &quot;sum&quot; like &quot;total&quot;</li>
                <li>• Double &quot;m&quot; for warmth</li>
                <li>• Related to &quot;sum&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I love <strong>summer</strong> vacation.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>summer</strong> heat is intense.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We go to the beach in <strong>summer</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Summer is my favorite season.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I love <strong>sumer</strong> vacation.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summer&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sumer</strong> heat is intense.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summer&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We go to the beach in <strong>sumer</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summer&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sumer is my favorite season.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;summer&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Double M Rule</h3>
              <p className="text-green-800">&quot;Summer&quot; has double &quot;m&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Sum</h3>
              <p className="text-amber-800">&quot;Summer&quot; like &quot;sum&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Pattern Recognition</h3>
              <p className="text-orange-800">Words with double consonants</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Break It Down</h3>
              <p className="text-red-800">SUM + MER = Summer</p>
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
                <li>• <strong>Summer vacation</strong> - summer break</li>
                <li>• <strong>Summer camp</strong> - summer activities</li>
                <li>• <strong>Summer solstice</strong> - longest day</li>
                <li>• <strong>Summer breeze</strong> - summer wind</li>
                <li>• <strong>Summer heat</strong> - summer warmth</li>
                <li>• <strong>Summer festival</strong> - summer celebration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Summer is here&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Summer weather&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Summer brings heat&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love summer&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Summer&apos;s warmth&quot;</li>
                <li>• <strong>Article:</strong> &quot;A summer day&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;summer&quot; as &quot;sumer&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;summer&quot; has a double &quot;m&quot;. They might accidentally drop one &quot;m&quot; when typing quickly or think it only needs one.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Is &quot;summer&quot; related to &quot;sum&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Summer&quot; comes from the Old English &quot;sumor&quot; and is related to the idea of &quot;sum&quot; or &quot;total&quot; - representing the complete warm season. The double &quot;m&quot; helps distinguish it from other words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;summer&quot; and &quot;summer&quot;?</h3>
              <p className="text-lg text-gray-700">A: There is no difference - &quot;summer&quot; is the correct spelling. &quot;Sumer&quot; (with one &quot;m&quot;) is always incorrect and should never be used in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;summer&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Summer&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;summer&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: summertime, warm season, hot season, and vacation season. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;sum&quot; and remember that &quot;summer&quot; has a double &quot;m&quot;. The double &quot;m&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUMMER has double M&quot;. Or remember: &quot;SUM + MER&quot; breaks down the word into manageable parts with the double &quot;m&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the base form of &quot;summer&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summer&quot; is a noun that doesn&apos;t have a base form in the traditional sense. It&apos;s a season name that stands alone, though it can be used as an adjective (e.g., &quot;summer weather&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;summer&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summer&quot; comes from the Old English &quot;sumor&quot; meaning &quot;summer season,&quot; related to the Proto-Germanic &quot;sumaraz&quot; and ultimately to the idea of the warm season.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Can &quot;summer&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;summer&quot; is primarily a noun and adjective. The verb form would be &quot;to summer&quot; (meaning to spend the summer somewhere), but this is less common than the noun usage.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;summer&quot; and &quot;spring&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summer&quot; is the warmest season (June-August in Northern Hemisphere), while &quot;spring&quot; is the season of growth and renewal (March-May). Summer follows spring and precedes autumn.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;summer&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Summer&quot; can be used in various contexts: describing weather (summer heat), activities (summer vacation), time periods (this summer), and as an adjective (summer clothes). It always refers to the warm season.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Summer&quot;</strong> has a double &quot;m&quot; and means &quot;the warmest season of the year.&quot; 
          <br />
          <strong>&quot;Sumer&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUM + MER&quot; and remember the double &quot;m&quot;!</p>
        </div>
      </div>
    </div>
  )
}
