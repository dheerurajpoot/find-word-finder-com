import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spinning vs Spining - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spinning&quot; and &quot;spining&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpinningVsSpiningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Spinning vs Spining
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🌀</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Spinning&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spining&quot; is always incorrect - remember the double &quot;n&quot; in &quot;spinning&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spining</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Spinning</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;rotating rapidly&quot; or &quot;turning around.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Spinning&quot; (Verb/Noun)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Has double &quot;n&quot;</li>
                <li>• Present participle</li>
                <li>• Means &quot;rotating&quot;</li>
                <li>• Describes motion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Spelling Rule</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;n&quot; doubles before &quot;ing&quot;</li>
                <li>• CVC rule applies</li>
                <li>• Similar to &quot;running&quot;</li>
                <li>• Similar to &quot;swimming&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Confusion</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• People forget double &quot;n&quot;</li>
                <li>• Similar to &quot;spine&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember rule</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The wheel was <strong>spinning</strong> rapidly.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;She enjoys <strong>spinning</strong> classes.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The dancer was <strong>spinning</strong> gracefully.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The top kept <strong>spinning</strong> on the table.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The wheel was <strong>spining</strong> rapidly.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spinning&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She enjoys <strong>spining</strong> classes.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spinning&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The dancer was <strong>spining</strong> gracefully.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spinning&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The top kept <strong>spining</strong> on the table.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spinning&quot;</p>
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
              <div className="text-4xl mb-3">🌀</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double N Rule</h3>
              <p className="text-yellow-800">&quot;Spinning&quot; has double &quot;n&quot; like &quot;running&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Motion</h3>
              <p className="text-blue-800">Spinning = rapid motion = double &quot;n&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;spinning&quot; to build muscle memory</p>
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
                <li>• <strong>Spinning wheel</strong> - yarn-making device</li>
                <li>• <strong>Spinning top</strong> - rotating toy</li>
                <li>• <strong>Spinning class</strong> - cycling workout</li>
                <li>• <strong>Spinning motion</strong> - rotational movement</li>
                <li>• <strong>Spinning yarn</strong> - storytelling</li>
                <li>• <strong>Spinning out</strong> - losing control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present participle:</strong> &quot;The wheel is spinning&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Spinning is fun&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The spinning wheel&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The spinning of the wheel&quot;</li>
                <li>• <strong>Past continuous:</strong> &quot;It was spinning&quot;</li>
                <li>• <strong>Perfect continuous:</strong> &quot;It has been spinning&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;spinning&quot; as &quot;spining&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the double &quot;n&quot; rule. When adding &quot;-ing&quot; to words ending in a consonant-vowel-consonant pattern, the final consonant is doubled. Some people may also be influenced by the word &quot;spine.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;spinning&quot; and &quot;spine&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spinning&quot; is the present participle of the verb &quot;spin&quot; meaning &quot;to rotate rapidly,&quot; while &quot;spine&quot; is a noun referring to the backbone or a sharp projection. They are completely different words with different meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Are there other words that double consonants before &quot;ing&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English words follow this rule: running, swimming, sitting, getting, putting, and cutting all double the final consonant before adding &quot;-ing.&quot; This is the CVC (consonant-vowel-consonant) doubling rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;spinning&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spinning&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;spinning&quot; and &quot;rotating&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both involve turning, &quot;spinning&quot; typically suggests rapid, continuous rotation around a central axis, while &quot;rotating&quot; can refer to any turning movement, including slower or partial turns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember the CVC doubling rule: when a word ends in consonant-vowel-consonant and you add &quot;-ing,&quot; double the final consonant. So &quot;spin&quot; becomes &quot;spinning&quot; with double &quot;n.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are some synonyms for &quot;spinning&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: rotating, twirling, whirling, revolving, turning, swirling, and gyrating. Each has slightly different nuances and connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;spining&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spining&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spinning&quot; with the double &quot;n&quot; before &quot;-ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;spinning&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spinning&quot; comes from the Old English word &quot;spinnan&quot; meaning &quot;to draw out and twist fibers.&quot; It&apos;s related to words in other Germanic languages and has been used in English since ancient times.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;spinning&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spinning&quot; is often used metaphorically to describe confusion, disorientation, or rapid changes. For example, &quot;My head is spinning&quot; means feeling dizzy or overwhelmed, and &quot;spinning a story&quot; means creating a narrative.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spinning&quot;</strong> has double &quot;n&quot; before &quot;-ing&quot; and means &quot;rotating rapidly.&quot; 
          <br />
          <strong>&quot;Spining&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPIN + N + ING = SPINNING (CVC doubling rule)&quot;</p>
        </div>
      </div>
    </div>
  )
}
