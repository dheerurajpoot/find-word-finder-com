import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Selflessness vs Unselfless - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;selflessness&quot; and &quot;unselfless&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SelflessnessVsUnselflessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
          Selflessness vs Unselfless
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-violet-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-indigo-600">&quot;Selflessness&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Unselfless&quot; is always incorrect - remember &quot;selflessness&quot; means &quot;lack of selfishness&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Unselfless</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-indigo-800 mb-4">Selflessness</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-indigo-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-indigo-700 leading-relaxed">
                This is the proper spelling meaning &quot;lack of selfishness&quot; or &quot;concern for others.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Selflessness&quot; (Correct)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Means &quot;lack of selfishness&quot;</li>
                <li>• From &quot;selfless&quot; + &quot;ness&quot;</li>
                <li>• Positive quality</li>
                <li>• Used as noun</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Unselfless&quot; (Wrong)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Double negative logic</li>
                <li>• Not a real word</li>
                <li>• Confusing meaning</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;Unselfless&quot; is not a word</li>
                <li>• Double negative logic</li>
                <li>• Confusing construction</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;Her <strong>selflessness</strong> is inspiring.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;He showed great <strong>selflessness</strong>.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;The <strong>selflessness</strong> of volunteers.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;Selflessness is a virtue.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Her <strong>unselfless</strong> is inspiring&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selflessness&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He showed great <strong>unselfless</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selflessness&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>unselfless</strong> of volunteers&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selflessness&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Unselfless is a virtue&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selflessness&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">NESS Ending Rule</h3>
              <p className="text-yellow-800">&quot;Selflessness&quot; ends with &quot;ness&quot; - think &quot;selfless-NESS&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Selfless</h3>
              <p className="text-blue-800">&quot;Selfless&quot; + &quot;ness&quot; = &quot;selflessness&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;selflessness&quot; to build muscle memory</p>
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
                <li>• <strong>Act of selflessness</strong> - selfless deed</li>
                <li>• <strong>Spirit of selflessness</strong> - generous attitude</li>
                <li>• <strong>True selflessness</strong> - genuine generosity</li>
                <li>• <strong>Selfless service</strong> - helping others</li>
                <li>• <strong>Selfless love</strong> - unconditional care</li>
                <li>• <strong>Selfless sacrifice</strong> - giving up for others</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Her selflessness&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Selflessness matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;I admire selflessness&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Selflessness&apos;s value&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Selfless&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Selflessly&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;selflessness&quot; as &quot;unselfless&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs when people try to create a word meaning &quot;not selfish&quot; but use incorrect logic. &quot;Selflessness&quot; is the correct word, meaning &quot;lack of selfishness.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;unselfless&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;unselfless&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What does &quot;selflessness&quot; actually mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Selflessness&quot; means the quality of being unselfish, putting others&apos; needs before your own, and acting with concern for others rather than personal gain.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;selflessness&quot; comes from &quot;selfless&quot; + &quot;ness.&quot; Think of it as &quot;selfless-NESS&quot; to emphasize the correct ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are synonyms for &quot;selflessness&quot;?</h3>
              <p className="text-lg text-gray-700">A: Synonyms include: altruism, generosity, unselfishness, magnanimity, benevolence, charity, and philanthropy.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;selflessness&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Selflessness&quot; is used in personal relationships, volunteer work, healthcare, education, and any situation where people put others first.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;selflessness&quot; and &quot;altruism&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Selflessness&quot; is more general and everyday, while &quot;altruism&quot; is more formal and philosophical, referring to the principle of acting for others&apos; benefit.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: selfless (adjective), selflessly (adverb), selfish (opposite), selfishness (opposite quality), and self-sacrifice (giving up for others).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;selflessness&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Selflessness&quot; comes from combining &quot;selfless&quot; (meaning unselfish) with the suffix &quot;-ness&quot; to create a noun form. It entered English in the 19th century.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Selflessness&quot;</strong> means &quot;lack of selfishness&quot; and is the correct spelling. 
          <br />
          <strong>&quot;Unselfless&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;selfless-NESS&quot; - remember the &quot;ness&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
