import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stolen vs Stold - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stolen&quot; and &quot;stold&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StolenVsStoldPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Stolen vs Stold
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🦹</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Stolen&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Stold&quot; is always incorrect - &quot;steal&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Stold</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. &quot;Steal&quot; is an irregular verb.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Stolen</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper past participle of the irregular verb &quot;steal.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Steal&quot; (Base Form)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Present tense verb</li>
                <li>• Irregular verb</li>
                <li>• Means &quot;to take unlawfully&quot;</li>
                <li>• Base form</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;Stolen&quot; (Past Participle)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Past participle</li>
                <li>• Irregular form</li>
                <li>• Doesn&apos;t follow -ed rule</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Verb Pattern</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• Steal → Stole → Stolen</li>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;My car was <strong>stolen</strong> last night.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The thief has <strong>stolen</strong> my wallet.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;She had <strong>stolen</strong> the money from the bank.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The jewels were <strong>stolen</strong> from the museum.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My car was <strong>stold</strong> last night&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stolen&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The thief has <strong>stold</strong> my wallet&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stolen&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She had <strong>stold</strong> the money&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stolen&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The jewels were <strong>stold</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stolen&quot;</p>
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
              <div className="text-4xl mb-3">🦹</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Thief Rule</h3>
              <p className="text-yellow-800">Think of &quot;stolen&quot; as what thieves do</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Irregular Memory</h3>
              <p className="text-blue-800">&quot;Steal&quot; doesn&apos;t follow regular -ed rules</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;stolen&quot; to build muscle memory</p>
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
                <li>• <strong>Stolen goods</strong> - illegally obtained items</li>
                <li>• <strong>Stolen identity</strong> - identity theft</li>
                <li>• <strong>Stolen thunder</strong> - taking credit</li>
                <li>• <strong>Stolen base</strong> - baseball term</li>
                <li>• <strong>Stolen moment</strong> - brief private time</li>
                <li>• <strong>Stolen glance</strong> - secretive look</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past participle:</strong> &quot;I have stolen&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;It was stolen&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Stolen property&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Stealing is wrong&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To steal is illegal&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;The stealing thief&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why is &quot;stold&quot; incorrect?</h3>
              <p className="text-lg text-gray-700">A: &quot;Steal&quot; is an irregular verb in English. Unlike regular verbs that add &quot;-ed&quot; (like walk → walked), irregular verbs have unique past participle forms that must be memorized. The past participle of &quot;steal&quot; is &quot;stolen.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Are there other verbs like &quot;steal&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many common verbs are irregular: speak → spoken, break → broken, choose → chosen, freeze → frozen, and wake → woken. These don&apos;t follow the regular -ed pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: What&apos;s the difference between &quot;stolen&quot; and &quot;stold&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stolen&quot; is the correct past participle of &quot;steal,&quot; while &quot;stold&quot; is a misspelling that doesn&apos;t exist in English. Using the wrong spelling can make your writing appear unprofessional.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;stold&quot; ever be correct?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;stold&quot; is never correct in English. It&apos;s a common spelling error that should always be corrected to &quot;stolen.&quot; There are no exceptions to this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember this spelling rule?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;steal&quot; as an irregular verb like &quot;speak&quot; or &quot;break.&quot; Just as you wouldn&apos;t say &quot;speaked&quot; or &quot;breaked,&quot; you shouldn&apos;t say &quot;stold.&quot; The past participle is &quot;stolen.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;stolen&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: taken, pilfered, purloined, filched, swiped, lifted, snatched, and appropriated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is this rule the same in British and American English?</h3>
              <p className="text-lg text-gray-700">A: Yes, the spelling rule for &quot;stolen&quot; is identical in both British and American English. Both varieties use the irregular form &quot;stolen.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of the word &quot;steal&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Steal&quot; comes from Old English &quot;stelan,&quot; which means &quot;to steal&quot; or &quot;to rob.&quot; It&apos;s related to German &quot;stehlen&quot; and Dutch &quot;stelen,&quot; all meaning &quot;to steal.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Stolen&quot;</strong> is the correct past participle of &quot;steal.&quot; 
          <br />
          <strong>&quot;Stold&quot;</strong> is never correct - &quot;steal&quot; is an irregular verb!
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STEAL → STOLE → STOLEN&quot; (irregular verb)!</p>
        </div>
      </div>
    </div>
  )
}
