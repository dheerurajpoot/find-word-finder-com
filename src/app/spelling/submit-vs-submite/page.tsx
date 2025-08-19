import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Submit vs Submite - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;submit&quot; and &quot;submite&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubmitVsSubmitePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Submit vs Submite
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
            <span className="text-2xl mr-3">📝</span>
            <span className="text-2xl font-bold text-green-600">&quot;Submit&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Submite&quot; is incorrect - remember the &quot;t&quot; at the end of &quot;submit&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Submite</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the final &quot;t&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Submit</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to present for consideration&quot; or &quot;to hand in.&quot;
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
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Used in many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Mit&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;to send&quot; or &quot;to let go&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;mission&quot;</li>
                <li>• Must include &quot;t&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;T&quot; (Ending)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Essential ending</li>
                <li>• Part of root word</li>
                <li>• Cannot be dropped</li>
                <li>• Easy to remember</li>
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
                <p className="text-lg text-green-800">&quot;Please <strong>submit</strong> your application by Friday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;You must <strong>submit</strong> the form online.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Students should <strong>submit</strong> their essays on time.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The deadline to <strong>submit</strong> is tomorrow.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Please <strong>submite</strong> your application&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submit&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;You must <strong>submite</strong> the form&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submit&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Students should <strong>submite</strong> their essays&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submit&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Deadline to <strong>submite</strong> is tomorrow&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submit&quot;</p>
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
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Final T</h3>
              <p className="text-yellow-800">&quot;Submit&quot; ends with &quot;t&quot;, like &quot;permit&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Root Rule</h3>
              <p className="text-blue-800">&quot;Mit&quot; root always has &quot;t&quot; at end</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;submit&quot; to build muscle memory</p>
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
                <li>• <strong>Submit for review</strong> - send for examination</li>
                <li>• <strong>Submit on time</strong> - hand in punctually</li>
                <li>• <strong>Submit electronically</strong> - send via computer</li>
                <li>• <strong>Submit in writing</strong> - provide in text form</li>
                <li>• <strong>Submit for approval</strong> - send for authorization</li>
                <li>• <strong>Submit for consideration</strong> - present for review</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Submit</strong> - to present</li>
                <li>• <strong>Submission</strong> - the act of submitting</li>
                <li>• <strong>Submittable</strong> - able to be submitted</li>
                <li>• <strong>Mission</strong> - task or assignment</li>
                <li>• <strong>Admit</strong> - to allow entry</li>
                <li>• <strong>Commit</strong> - to pledge</li>
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
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;submit&quot; as &quot;submite&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is dropping the final &quot;t&quot; from the word. This happens because people forget that the &quot;mit&quot; root always ends with a &quot;t&quot; sound and letter.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;submit&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Submit&quot; is a formal, standard English word commonly used in academic, business, and professional contexts. It&apos;s perfectly appropriate for all types of writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;submit&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Submit&quot; comes from Latin: &quot;sub&quot; (under) + &quot;mittere&quot; (to send). It literally means &quot;to send under&quot; or &quot;to present for consideration.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;submit&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized word used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;submit&quot; ends with a &quot;t&quot;. Think of it as &quot;sub&quot; + &quot;mit&quot; - the &quot;mit&quot; part always has a &quot;t&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;submit&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: present, hand in, turn in, deliver, provide, offer, furnish, and yield.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;submit&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Submit&quot; can describe handing in homework, sending applications, providing reports, or even yielding to authority. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;submit&quot; and &quot;hand in&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Submit&quot; is more formal and can refer to electronic or digital submissions, while &quot;hand in&quot; is more casual and typically refers to physical documents.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is there a difference between &quot;submit&quot; and &quot;submitted&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Submit&quot; is the present tense verb meaning &quot;to present,&quot; while &quot;submitted&quot; is the past tense and past participle form. Both are correct but used in different contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I know when to use &quot;submit&quot; vs &quot;submitted&quot;?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;submit&quot; for present tense actions (&quot;I will submit the form&quot;) and &quot;submitted&quot; for past tense actions (&quot;I submitted the form yesterday&quot;). &quot;Submitted&quot; is also used as a past participle (&quot;The form has been submitted&quot;).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Submit&quot;</strong> ends with a &quot;t&quot;. 
          <br />
          <strong>&quot;Submite&quot;</strong> is missing the final &quot;t&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + MIT&quot; - the &quot;t&quot; at the end is essential!</p>
        </div>
      </div>
    </div>
  )
}
