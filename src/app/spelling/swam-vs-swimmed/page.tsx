import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swam vs Swimmed - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swam&quot; vs &quot;swimmed&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwamVsSwimmedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Swam vs Swimmed
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
            <span className="text-2xl font-bold text-green-600">&quot;Swam&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Swimmed&quot; is always incorrect - &quot;swam&quot; is the irregular past tense of &quot;swim&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Swimmed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. &quot;Swim&quot; is an irregular verb.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Swam</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper past tense of &quot;swim&quot; - an irregular verb form.
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Irregular Verb</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Swim → Swam → Swum</li>
                <li>• Not &quot;swimmed&quot;</li>
                <li>• Like &quot;run&quot; → &quot;ran&quot;</li>
                <li>• Common pattern</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Past Tense</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Yesterday I swam</li>
                <li>• Last week he swam</li>
                <li>• They swam together</li>
                <li>• Never &quot;swimmed&quot;</li>
                </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Rule</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;swam&quot; not &quot;swimmed&quot;</li>
                <li>• Like &quot;came&quot; not &quot;comed&quot;</li>
                <li>• Like &quot;ran&quot; not &quot;runned&quot;</li>
                <li>• Irregular pattern</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>swam</strong> across the lake yesterday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>swam</strong> in the ocean last summer.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>swam</strong> laps at the pool.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>swam</strong> the English Channel.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>swimmed</strong> across the lake&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swam&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>swimmed</strong> in the ocean&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swam&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>swimmed</strong> laps&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swam&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>swimmed</strong> the channel&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swam&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Rule</h3>
              <p className="text-yellow-800">&quot;Swam&quot; is irregular like &quot;ran&quot; and &quot;came&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Past</h3>
              <p className="text-blue-800">&quot;Swam&quot; = past, &quot;Swimmed&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;swam&quot; to build muscle memory</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Verb Conjugations</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> I swim, you swim, he/she swims</li>
                <li>• <strong>Past:</strong> I swam, you swam, he/she swam</li>
                <li>• <strong>Past Participle:</strong> I have swum, you have swum</li>
                <li>• <strong>Present Participle:</strong> I am swimming, you are swimming</li>
                <li>• <strong>Future:</strong> I will swim, you will swim</li>
                <li>• <strong>Conditional:</strong> I would swim, you would swim</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Swam across</strong> - crossed by swimming</li>
                <li>• <strong>Swam laps</strong> - did swimming exercises</li>
                <li>• <strong>Swam competitively</strong> - participated in swimming races</li>
                <li>• <strong>Swam for exercise</strong> - used swimming as workout</li>
                <li>• <strong>Swam in the ocean</strong> - swam in sea water</li>
                <li>• <strong>Swam with dolphins</strong> - swam alongside dolphins</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;swam&quot; and &quot;swimmed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the regular verb pattern where most verbs add &quot;-ed&quot; for past tense. Many people incorrectly apply this rule to &quot;swim&quot;, which is an irregular verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;swam&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Swam&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard past tense form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;swam&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swam&quot; comes from Old English &quot;swamm&quot; and is related to German &quot;schwamm&quot; and Dutch &quot;zwom&quot;. It&apos;s an irregular verb that has maintained its form through centuries.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;swam&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;swam&quot; is the past tense of &quot;swim&quot;, and emphasize that it&apos;s an irregular verb. Create simple sentences and have them identify which form is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;swam&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: paddled, splashed, dived, floated, and glided. However, &quot;swam&quot; is the most precise term for the action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;swam&quot; be used in sports contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Swam&quot; is very common in sports contexts, especially when describing swimming competitions, training sessions, or aquatic activities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;swam&quot; and &quot;swimming&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swam&quot; is the past tense (completed action), while &quot;swimming&quot; is the present participle (ongoing action). &quot;I swam yesterday&quot; vs &quot;I am swimming now.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;swam&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;swam&quot; as an irregular verb like &quot;ran&quot; (not &quot;runned&quot;) and &quot;came&quot; (not &quot;comed&quot;). The pattern is consistent for irregular verbs.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;swam&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: swimmed, swam, swam, swam, and swam. The correct spelling is always &quot;swam&quot; for the past tense.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;swam&quot; used in storytelling contexts?</h3>
              <p className="text-lg text-gray-700">A: In storytelling contexts, &quot;swam&quot; is used to describe past swimming actions, adventures, competitions, or aquatic experiences in narratives.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between swam and dived?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swam&quot; refers to moving through water using swimming strokes, while &quot;dived&quot; refers to jumping or plunging into water from above the surface.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;swam&quot; as &quot;swimmed&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often apply the regular verb rule (add &quot;-ed&quot;) to irregular verbs. They think &quot;swim&quot; should become &quot;swimmed&quot; like &quot;walk&quot; becomes &quot;walked.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;swam&quot; used in travel and recreation contexts?</h3>
              <p className="text-lg text-gray-700">A: In travel and recreation contexts, &quot;swam&quot; describes swimming activities during vacations, beach trips, pool visits, or aquatic adventures.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different forms of the verb &quot;swim&quot;?</h3>
              <p className="text-lg text-gray-700">A: The verb forms include: swim (present), swims (third person), swam (past), swum (past participle), and swimming (present participle).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Swam&quot;</strong> is the correct past tense of &quot;swim&quot; - an irregular verb. 
          <br />
          <strong>&quot;Swimmed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SWIM → SWAM → SWUM&quot;</p>
        </div>
      </div>
    </div>
  )
} 