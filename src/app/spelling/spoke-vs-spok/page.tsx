import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spoke vs Spok - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spoke&quot; and &quot;spok&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpokeVsSpokPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Spoke vs Spok
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💬</span>
            <span className="text-2xl font-bold text-cyan-600">&quot;Spoke&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spok&quot; is always incorrect - remember the final &quot;e&quot; in &quot;spoke&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spok</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-cyan-800 mb-4">Spoke</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-cyan-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-cyan-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of speak&quot; or &quot;a rod connecting the center of a wheel.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Spoke&quot; (Verb/Noun)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Past tense of speak</li>
                <li>• Ends with &quot;e&quot;</li>
                <li>• Also means wheel rod</li>
                <li>• Irregular verb form</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Spelling Rule</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Silent &quot;e&quot; at end</li>
                <li>• Makes vowel long</li>
                <li>• Similar to &quot;broke&quot;</li>
                <li>• Prevents &quot;o&quot; from being short</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Common Confusion</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• People forget final &quot;e&quot;</li>
                <li>• Similar to &quot;spoke&quot;</li>
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
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;I <strong>spoke</strong> to her yesterday.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;She <strong>spoke</strong> clearly at the meeting.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;The wheel has many <strong>spokes</strong>.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;He <strong>spoke</strong> about his experiences.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>spok</strong> to her yesterday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoke&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>spok</strong> clearly at the meeting&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoke&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The wheel has many <strong>spoks</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spokes&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>spok</strong> about his experiences&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoke&quot;</p>
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
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Rule</h3>
              <p className="text-yellow-800">&quot;Spoke&quot; ends with &quot;e&quot; like &quot;broke&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Think Complete</h3>
              <p className="text-cyan-800">Spoke is complete, spok is incomplete</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;spoke&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Spoke volumes</strong> - conveyed much meaning</li>
                <li>• <strong>Spoke out</strong> - expressed opinion</li>
                <li>• <strong>Spoke up</strong> - spoke louder</li>
                <li>• <strong>Spoke for</strong> - represented others</li>
                <li>• <strong>Spoke against</strong> - opposed something</li>
                <li>• <strong>Spoke in favor</strong> - supported something</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;I spoke to him&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The wheel has spokes&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Spoke broke&quot;</li>
                <li>• <strong>Object:</strong> &quot;I replaced the spoke&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The spoke&apos;s length&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many spokes&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;spoke&quot; as &quot;spok&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the silent &quot;e&quot; at the end, which many people omit. Some also confuse it with similar words that don&apos;t end in &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the purpose of the final &quot;e&quot; in &quot;spoke&quot;?</h3>
              <p className="text-lg text-gray-700">A: The final &quot;e&quot; in &quot;spoke&quot; is a silent letter that makes the vowel &quot;o&quot; long instead of short. Without it, &quot;spok&quot; would have a short &quot;o&quot; sound, which would change the pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there other words that follow this same pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many words follow this pattern: broke, woke, joke, smoke, stroke, and choke all have a silent &quot;e&quot; that makes the vowel long.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;spoke&quot; be used as both a verb and noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spoke&quot; can be the past tense of the verb &quot;speak&quot; (meaning to communicate verbally) and also a noun referring to the rods that connect the center of a wheel to its rim.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;spoke&quot; and &quot;said&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both are past tense forms, but &quot;spoke&quot; is the past tense of &quot;speak&quot; (more formal, often used with languages or formal communication), while &quot;said&quot; is the past tense of &quot;say&quot; (more general, used for any verbal expression).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;spoke&quot; as having a silent &quot;e&quot; at the end, just like &quot;broke&quot; or &quot;woke.&quot; The &quot;e&quot; makes the &quot;o&quot; long, so remember: &quot;SPOKE = long O sound = silent E.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;spoke&quot;?</h3>
              <p className="text-lg text-gray-700">A: As a verb: said, talked, communicated, expressed, uttered, voiced, declared, and stated. As a noun: rod, bar, support, and strut (when referring to wheel parts).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;spok&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spok&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spoke&quot; with the silent &quot;e&quot; at the end.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spoke&quot;</strong> has a silent &quot;e&quot; at the end and means &quot;past tense of speak&quot; or &quot;wheel rod.&quot; 
          <br />
          <strong>&quot;Spok&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPOKE = long O sound = silent E at end&quot;</p>
        </div>
      </div>
    </div>
  )
}
