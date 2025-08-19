import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stopped vs Stoped - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stopped&quot; and &quot;stoped&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StoppedVsStopedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Stopped vs Stoped
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🛑</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Stopped&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Stoped&quot; is always incorrect - remember the double &quot;p&quot; in &quot;stopped&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Stoped</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Stopped</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling for the past tense and past participle of &quot;stop.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Stop&quot; (Base Form)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Present tense verb</li>
                <li>• Ends with single &quot;p&quot;</li>
                <li>• Means &quot;to cease&quot;</li>
                <li>• Regular verb pattern</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Stopped&quot; (Past Tense)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Past tense and past participle</li>
                <li>• Has double &quot;p&quot;</li>
                <li>• Follows CVC rule</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Spelling Rule</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• CVC + consonant rule</li>
                <li>• Double the final consonant</li>
                <li>• Add &quot;-ed&quot; suffix</li>
                <li>• Prevents mispronunciation</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The car <strong>stopped</strong> at the red light.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;I <strong>stopped</strong> working at 5 PM.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The rain has <strong>stopped</strong> falling.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;She <strong>stopped</strong> talking when I entered.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The car <strong>stoped</strong> at the red light&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stopped&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>stoped</strong> working at 5 PM&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stopped&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The rain has <strong>stoped</strong> falling&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stopped&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>stoped</strong> talking&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stopped&quot;</p>
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
              <div className="text-4xl mb-3">🚦</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Traffic Light Rule</h3>
              <p className="text-yellow-800">Think of a traffic light - it stops with a double &quot;p&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✋</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Hand Stop Sign</h3>
              <p className="text-blue-800">Two hands = two &quot;p&quot;s in stopped</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;stopped&quot; to build muscle memory</p>
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
                <li>• <strong>Stopped in my tracks</strong> - suddenly halted</li>
                <li>• <strong>Stopped dead</strong> - completely stopped</li>
                <li>• <strong>Stopped short</strong> - halted abruptly</li>
                <li>• <strong>Stopped at nothing</strong> - determined</li>
                <li>• <strong>Stopped the clock</strong> - paused time</li>
                <li>• <strong>Stopped the show</strong> - interrupted</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I stopped the car&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The car has stopped&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;A stopped clock&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Stopping is important&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To stop is wise&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;The stopping car&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do we double the &quot;p&quot; in &quot;stopped&quot;?</h3>
              <p className="text-lg text-gray-700">A: English follows the CVC (consonant-vowel-consonant) rule. When a one-syllable word ends with a consonant-vowel-consonant pattern and you add a suffix that begins with a vowel (like &quot;-ed&quot;), you double the final consonant to maintain the short vowel sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there other words that follow this same pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many words follow this pattern: hop → hopped, plan → planned, beg → begged, jog → jogged, and rob → robbed. The rule helps maintain pronunciation clarity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;stopped&quot; and &quot;stoped&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stopped&quot; is the correct past tense of &quot;stop,&quot; while &quot;stoped&quot; is a misspelling that doesn&apos;t exist in English. Using the wrong spelling can make your writing appear unprofessional.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;stoped&quot; ever be correct?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;stoped&quot; is never correct in English. It&apos;s a common spelling error that should always be corrected to &quot;stopped.&quot; There are no exceptions to this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember this spelling rule?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;stop&quot; as having a short vowel sound. When you add &quot;-ed,&quot; you need to double the &quot;p&quot; to keep that short sound. Visualize it as &quot;stop-ped&quot; with two &quot;p&quot;s.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;stopped&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: halted, ceased, ended, terminated, paused, discontinued, finished, concluded, and brought to a halt.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is this rule the same in British and American English?</h3>
              <p className="text-lg text-gray-700">A: Yes, the spelling rule for &quot;stopped&quot; is identical in both British and American English. Both varieties use the double &quot;p&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of the word &quot;stop&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stop&quot; comes from Old English &quot;stoppian,&quot; which means &quot;to block up&quot; or &quot;to close.&quot; It&apos;s related to Middle Dutch &quot;stoppen&quot; and German &quot;stopfen,&quot; all meaning &quot;to stuff&quot; or &quot;to block.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Stopped&quot;</strong> has two &quot;p&quot;s and follows the CVC rule. 
          <br />
          <strong>&quot;Stoped&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STOP-PED&quot; with two &quot;p&quot;s!</p>
        </div>
      </div>
    </div>
  )
}
