import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sustain vs Substain - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;sustain&quot; vs &quot;substain&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SustainVsSubstainPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Sustain vs Substain
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
            <span className="text-2xl font-bold text-green-600">&quot;Sustain&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Substain&quot; is always incorrect - remember the &quot;sus&quot; in &quot;sustain&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Substain</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sustain</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to support or maintain.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sus&quot; (Prefix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Starts the word</li>
                <li>• Like &quot;sustain&quot;</li>
                <li>• Common prefix</li>
                <li>• Not &quot;sub&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Ai&quot; (Vowel)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Long &quot;a&quot; sound</li>
                <li>• Like &quot;rain&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;a&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;N&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Ends the word</li>
                <li>• Like &quot;gain&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The bridge can <strong>sustain</strong> heavy loads.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>sustained</strong> an injury.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The company <strong>sustains</strong> growth.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>sustained</strong> his argument.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bridge can <strong>substain</strong> heavy loads&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustain&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>substained</strong> an injury&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustained&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company <strong>substains</strong> growth&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustains&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>substained</strong> his argument&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sustained&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">SUS Rule</h3>
              <p className="text-yellow-800">&quot;Sustain&quot; starts with &quot;sus&quot; like &quot;sustain&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Support</h3>
              <p className="text-blue-800">&quot;Sustain&quot; = support, &quot;Substain&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sustain&quot; to build muscle memory</p>
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
                <li>• <strong>Sustain growth</strong> - maintain development</li>
                <li>• <strong>Sustain damage</strong> - receive harm</li>
                <li>• <strong>Sustain life</strong> - support existence</li>
                <li>• <strong>Sustain momentum</strong> - maintain progress</li>
                <li>• <strong>Sustain interest</strong> - maintain attention</li>
                <li>• <strong>Sustain pressure</strong> - maintain force</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;I sustain the effort&quot;</li>
                <li>• <strong>Present:</strong> &quot;He sustains growth&quot;</li>
                <li>• <strong>Past:</strong> &quot;She sustained injury&quot;</li>
                <li>• <strong>Past Participle:</strong> &quot;I have sustained&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Sustaining is difficult&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To sustain life&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;sustain&quot; and &quot;substain&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that &quot;sub&quot; and &quot;sus&quot; can sound similar. Many people don&apos;t realize that &quot;sustain&quot; starts with &quot;sus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;sustain&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sustain&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;sustain&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustain&quot; comes from Latin &quot;sustinere&quot; meaning &quot;to hold up&quot; and is related to words like &quot;sustenance&quot; and &quot;maintain.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;sustain&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;sustain&quot; starts with &quot;sus&quot; (like &quot;sustain&quot;), and emphasize that &quot;substain&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;sustain&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: maintain, support, uphold, preserve, continue, keep, and endure. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;sustain&quot; be used in business contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sustain&quot; is very common in business contexts, especially when referring to sustainable growth, maintaining performance, or supporting business operations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;sustain&quot; and &quot;maintain&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustain&quot; often implies providing support or nourishment to keep something going, while &quot;maintain&quot; refers to keeping something in its current state.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;sustain&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sustain&quot; as starting with &quot;sus&quot; like other words: sustain, sustenance. The &quot;sus&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;sustain&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: substain, sustain, sustain, sustain, and sustain. The correct spelling always starts with &quot;sus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;sustain&quot; used in environmental contexts?</h3>
              <p className="text-lg text-gray-700">A: In environmental contexts, &quot;sustain&quot; refers to maintaining ecological balance, supporting natural resources, or preserving environmental health for future generations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between sustain and support?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustain&quot; implies providing ongoing nourishment or support to keep something alive or functioning, while &quot;support&quot; is a broader term for providing assistance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;sustain&quot; with &quot;sub&quot; instead of &quot;sus&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;sub&quot; and &quot;sus&quot; because they may not pronounce the &quot;s&quot; clearly, but &quot;sustain&quot; specifically starts with &quot;sus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;sustain&quot; used in medical contexts?</h3>
              <p className="text-lg text-gray-700">A: In medical contexts, &quot;sustain&quot; refers to maintaining life functions, supporting recovery, or providing necessary support for health and well-being.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;sustain&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sustain&quot; can mean: to support or maintain, to undergo or suffer, to keep going, to provide nourishment, or to uphold or confirm.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sustain&quot;</strong> starts with &quot;sus&quot; and means &quot;to support or maintain.&quot; 
          <br />
          <strong>&quot;Substain&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + AI + N = SUSTAIN&quot;</p>
        </div>
      </div>
    </div>
  )
} 