import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spoken vs Speaked - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spoken&quot; and &quot;speaked&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpokenVsSpeakedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Spoken vs Speaked
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🗣️</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Spoken&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Speaked&quot; is always incorrect - remember the irregular verb form &quot;spoken&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Speaked</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-800 mb-4">Spoken</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-rose-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-rose-700 leading-relaxed">
                This is the proper spelling meaning &quot;past participle of speak&quot; or &quot;expressed in speech.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Spoken&quot; (Past Participle)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Irregular verb form</li>
                <li>• Past participle of speak</li>
                <li>• Used with have/has/had</li>
                <li>• Also used as adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Verb Conjugation</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Speak (present)</li>
                <li>• Spoke (past)</li>
                <li>• Spoken (past participle)</li>
                <li>• Speaking (present participle)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Confusion</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• People forget irregular forms</li>
                <li>• Similar to regular verbs</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember pattern</li>
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
            <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;I have <strong>spoken</strong> to the manager.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;She has <strong>spoken</strong> about this before.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;The words were <strong>spoken</strong> clearly.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;He had <strong>spoken</strong> to the team.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have <strong>speaked</strong> to the manager&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoken&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>speaked</strong> about this&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoken&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The words were <strong>speaked</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoken&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He had <strong>speaked</strong> to the team&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spoken&quot;</p>
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
              <div className="text-4xl mb-3">🗣️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">&quot;Speak&quot; is irregular: speak-spoke-spoken</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Pattern</h3>
              <p className="text-rose-800">Speak → Spoke → Spoken (not speaked)</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;spoken&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Spoken word</strong> - oral communication</li>
                <li>• <strong>Spoken language</strong> - verbal communication</li>
                <li>• <strong>Well spoken</strong> - articulate</li>
                <li>• <strong>Soft spoken</strong> - quiet voice</li>
                <li>• <strong>Plain spoken</strong> - direct communication</li>
                <li>• <strong>Spoken for</strong> - already claimed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past participle:</strong> &quot;I have spoken&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The spoken word&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;It was spoken&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;She has spoken&quot;</li>
                <li>• <strong>Past perfect:</strong> &quot;He had spoken&quot;</li>
                <li>• <strong>Future perfect:</strong> &quot;They will have spoken&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;spoken&quot; as &quot;speaked&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from applying regular verb rules to an irregular verb. Many English verbs add &quot;-ed&quot; for past forms, but &quot;speak&quot; is irregular and follows the pattern speak-spoke-spoken.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;spoke&quot; and &quot;spoken&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spoke&quot; is the simple past tense (e.g., &quot;I spoke yesterday&quot;), while &quot;spoken&quot; is the past participle used with helping verbs like have/has/had (e.g., &quot;I have spoken&quot;) or as an adjective (e.g., &quot;spoken language&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Are there other verbs like &quot;speak&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English verbs are irregular and follow similar patterns: break-broke-broken, choose-chose-chosen, freeze-froze-frozen, and wake-woke-woken are just a few examples.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;spoken&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spoken&quot; can function as an adjective, as in &quot;spoken language,&quot; &quot;spoken word,&quot; or &quot;well-spoken person.&quot; In these cases, it describes something related to speech.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;spoken&quot; and &quot;verbal&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spoken&quot; specifically refers to speech that is uttered aloud, while &quot;verbal&quot; can refer to any form of communication using words, including both spoken and written language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;speak&quot; is an irregular verb: speak-spoke-spoken. Think of it as a special pattern that doesn&apos;t follow the regular &quot;-ed&quot; rule. Practice the three forms together.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;spoken&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: uttered, said, expressed, articulated, communicated, voiced, declared, and stated. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;speaked&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;speaked&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spoken&quot; as the past participle of the irregular verb &quot;speak.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spoken&quot;</strong> is the correct past participle of the irregular verb &quot;speak.&quot; 
          <br />
          <strong>&quot;Speaked&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPEAK → SPOKE → SPOKEN (irregular pattern)&quot;</p>
        </div>
      </div>
    </div>
  )
}
