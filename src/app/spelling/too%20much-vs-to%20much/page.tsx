import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Too Much vs To Much - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;too much&quot; and &quot;to much&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function TooMuchVsToMuchEncodedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Too Much vs To Much
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
            <span className="text-2xl font-bold text-green-600">&quot;Too Much&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;To Much&quot; is always incorrect - remember the double &quot;o&quot; in &quot;too&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">To Much</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Too Much</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;an excessive amount&quot; or &quot;more than needed.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Too&quot; (Adverb)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;excessively&quot;</li>
                <li>• Also means &quot;also&quot;</li>
                <li>• Has two &quot;o&quot;s</li>
                <li>• Used for emphasis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;To&quot; (Preposition)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;toward&quot;</li>
                <li>• Used for direction</li>
                <li>• Has one &quot;o&quot;</li>
                <li>• Part of infinitive verbs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Much&quot; (Determiner)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;a large amount&quot;</li>
                <li>• Used with uncountable nouns</li>
                <li>• Indicates quantity</li>
                <li>• Often used with &quot;too&quot;</li>
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
                <p className="text-lg text-green-800">&quot;There&apos;s <strong>too much</strong> noise in this room.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I have <strong>too much</strong> work to do today.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;That&apos;s <strong>too much</strong> money for a coffee.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She talks <strong>too much</strong> during meetings.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;There&apos;s <strong>to much</strong> noise&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;too much&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have <strong>to much</strong> work&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;too much&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s <strong>to much</strong> money&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;too much&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She talks <strong>to much</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;too much&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double O Rule</h3>
              <p className="text-yellow-800">&quot;Too&quot; has two &quot;o&quot;s, just like &quot;excessive&quot; has two &quot;e&quot;s</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Excess</h3>
              <p className="text-blue-800">&quot;Too&quot; = excessive, &quot;To&quot; = direction</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;too much&quot; to build muscle memory</p>
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
                <li>• <strong>Too much to handle</strong> - overwhelming</li>
                <li>• <strong>Too much information</strong> - TMI</li>
                <li>• <strong>Too much trouble</strong> - not worth the effort</li>
                <li>• <strong>Too much of a good thing</strong> - excessive</li>
                <li>• <strong>Too much work</strong> - overwhelming amount</li>
                <li>• <strong>Too much pressure</strong> - excessive stress</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb phrase:</strong> &quot;It&apos;s too much&quot;</li>
                <li>• <strong>Noun phrase:</strong> &quot;Too much is never good&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Too much sugar&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s too much&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Too much can be harmful&quot;</li>
                <li>• <strong>Object:</strong> &quot;I can&apos;t take too much&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;too&quot; and &quot;to&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from their similar pronunciation and the fact that &quot;to&quot; is more commonly used as a preposition. Many people don&apos;t realize that &quot;too&quot; is a separate word with a distinct meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;too much&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Too much&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English phrase.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;too much&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Too&quot; comes from Old English &quot;tō&quot; meaning &quot;in addition&quot; or &quot;also,&quot; while &quot;much&quot; comes from Old English &quot;mycel&quot; meaning &quot;great&quot; or &quot;large.&quot; Together they form a phrase meaning &quot;excessively large.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;too much&quot; is standard across all English-speaking regions. However, some dialects might use alternative phrases like &quot;way too much&quot; or &quot;far too much&quot; for emphasis.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;too&quot; having two &quot;o&quot;s (like &quot;excessive&quot;), and &quot;to&quot; having one &quot;o&quot; (like &quot;go&quot;). Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;too much&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: excessive, overabundant, overwhelming, more than enough, in excess, beyond what&apos;s needed, and overly abundant.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;too much&quot; be used positively?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often indicating excess, &quot;too much&quot; can be used positively in contexts like &quot;There&apos;s no such thing as too much love&quot; or &quot;You can never have too much fun.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;too much&quot; and &quot;very much&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Too much&quot; indicates an excessive or undesirable amount, while &quot;very much&quot; simply means &quot;a lot&quot; without the negative connotation of excess.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Too much&quot;</strong> has two &quot;o&quot;s and means &quot;excessive.&quot; 
          <br />
          <strong>&quot;To much&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;TOO = excessive, TO = direction&quot;</p>
        </div>
      </div>
    </div>
  )
} 