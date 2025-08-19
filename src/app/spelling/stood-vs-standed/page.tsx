import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stood vs Standed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stood&quot; and &quot;standed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StoodVsStandedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Stood vs Standed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🧍</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Stood&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Standed&quot; is always incorrect - &quot;stand&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Standed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. &quot;Stand&quot; is an irregular verb.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Stood</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper past tense and past participle of the irregular verb &quot;stand.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Stand&quot; (Base Form)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Present tense verb</li>
                <li>• Irregular verb</li>
                <li>• Means &quot;to be upright&quot;</li>
                <li>• Base form</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Stood&quot; (Past Tense)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Past tense and past participle</li>
                <li>• Irregular form</li>
                <li>• Doesn&apos;t follow -ed rule</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Verb Pattern</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Stand → Stood → Stood</li>
                <li>• Irregular verb</li>
                <li>• No -ed ending</li>
                <li>• Must be memorized</li>
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
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;I <strong>stood</strong> in line for hours.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;She <strong>stood</strong> by the window.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The building has <strong>stood</strong> for 100 years.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;They <strong>stood</strong> together in solidarity.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>standed</strong> in line for hours&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stood&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>standed</strong> by the window&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stood&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The building has <strong>standed</strong> for 100 years&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stood&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>standed</strong> together&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stood&quot;</p>
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
              <div className="text-4xl mb-3">🚶</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Walking Rule</h3>
              <p className="text-yellow-800">Think of &quot;stood&quot; as the past of &quot;stand&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Irregular Memory</h3>
              <p className="text-blue-800">&quot;Stand&quot; doesn&apos;t follow regular -ed rules</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;stood&quot; to build muscle memory</p>
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
                <li>• <strong>Stood the test of time</strong> - endured</li>
                <li>• <strong>Stood by someone</strong> - supported</li>
                <li>• <strong>Stood out</strong> - was noticeable</li>
                <li>• <strong>Stood up for</strong> - defended</li>
                <li>• <strong>Stood in line</strong> - queued</li>
                <li>• <strong>Stood on ceremony</strong> - was formal</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I stood there&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have stood there&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;A stood position&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Standing is tiring&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To stand is natural&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;The standing person&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why is &quot;standed&quot; incorrect?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stand&quot; is an irregular verb in English. Unlike regular verbs that add &quot;-ed&quot; (like walk → walked), irregular verbs have unique past tense forms that must be memorized. The past tense of &quot;stand&quot; is &quot;stood.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there other verbs like &quot;stand&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many common verbs are irregular: go → went, see → saw, take → took, give → gave, come → came, and know → knew. These don&apos;t follow the regular -ed pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;stood&quot; and &quot;standed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stood&quot; is the correct past tense of &quot;stand,&quot; while &quot;standed&quot; is a misspelling that doesn&apos;t exist in English. Using the wrong spelling can make your writing appear unprofessional.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;standed&quot; ever be correct?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;standed&quot; is never correct in English. It&apos;s a common spelling error that should always be corrected to &quot;stood.&quot; There are no exceptions to this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember this spelling rule?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;stand&quot; as an irregular verb like &quot;go&quot; or &quot;see.&quot; Just as you wouldn&apos;t say &quot;goed&quot; or &quot;seed,&quot; you shouldn&apos;t say &quot;standed.&quot; The past tense is &quot;stood.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;stood&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: remained, stayed, positioned, placed, situated, located, and maintained position.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is this rule the same in British and American English?</h3>
              <p className="text-lg text-gray-700">A: Yes, the spelling rule for &quot;stood&quot; is identical in both British and American English. Both varieties use the irregular form &quot;stood.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of the word &quot;stand&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stand&quot; comes from Old English &quot;standan,&quot; which means &quot;to stand&quot; or &quot;to be upright.&quot; It&apos;s related to German &quot;stehen&quot; and Dutch &quot;staan,&quot; all meaning &quot;to stand.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Stood&quot;</strong> is the correct past tense of &quot;stand.&quot; 
          <br />
          <strong>&quot;Standed&quot;</strong> is never correct - &quot;stand&quot; is an irregular verb!
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STAND → STOOD&quot; (irregular verb)!</p>
        </div>
      </div>
    </div>
  )
}
