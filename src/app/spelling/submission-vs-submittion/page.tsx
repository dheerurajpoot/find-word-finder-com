import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Submission vs Submittion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;submission&quot; and &quot;submittion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubmissionVsSubmittionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Submission vs Submittion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📝</span>
            <span className="text-2xl font-bold text-green-600">&quot;Submission&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Submittion&quot; is incorrect - remember only one &quot;t&quot; in &quot;submission&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Submittion</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling has an extra &quot;t&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Submission</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of submitting&quot; or &quot;something submitted.&quot;
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
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Used in many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Mit&quot; (Root)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;to send&quot; or &quot;to let go&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;mission&quot;</li>
                <li>• Only one &quot;t&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Sion&quot; (Suffix)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Forms nouns</li>
                <li>• Common ending</li>
                <li>• No extra letters</li>
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
                <p className="text-lg text-green-800">&quot;Your <strong>submission</strong> has been received.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The deadline for <strong>submission</strong> is Friday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Please review your <strong>submission</strong> before sending.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We received many <strong>submissions</strong> for the contest.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Your <strong>submittion</strong> has been received&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submission&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Deadline for <strong>submittion</strong> is Friday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submission&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Review your <strong>submittion</strong> before sending&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submission&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We received many <strong>submittions</strong> for the contest&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;submissions&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Single T</h3>
              <p className="text-yellow-800">&quot;Submission&quot; has one &quot;t&quot;, like &quot;mission&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Root Rule</h3>
              <p className="text-blue-800">&quot;Mit&quot; root only has one &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;submission&quot; to build muscle memory</p>
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
                <li>• <strong>Submission deadline</strong> - due date for submitting</li>
                <li>• <strong>Submission guidelines</strong> - rules for submitting</li>
                <li>• <strong>Submission process</strong> - steps for submitting</li>
                <li>• <strong>Submission requirements</strong> - what must be included</li>
                <li>• <strong>Submission status</strong> - current state of submission</li>
                <li>• <strong>Submission confirmation</strong> - proof of submission</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Submit</strong> - to present</li>
                <li>• <strong>Submission</strong> - the act of submitting</li>
                <li>• <strong>Submittable</strong> - able to be submitted</li>
                <li>• <strong>Mission</strong> - task or assignment</li>
                <li>• <strong>Admission</strong> - act of admitting</li>
                <li>• <strong>Commission</strong> - act of commissioning</li>
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
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;submission&quot; as &quot;submittion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is adding an extra &quot;t&quot; to the word. This happens because people think the word should have double &quot;t&quot;s like some other words, but &quot;submission&quot; only has one &quot;t.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;submission&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Submission&quot; is a formal, standard English word commonly used in academic, business, and professional contexts. It&apos;s perfectly appropriate for all types of writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;submission&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Submission&quot; comes from Latin: &quot;sub&quot; (under) + &quot;mittere&quot; (to send) + &quot;sion&quot; (noun suffix). It literally means &quot;the act of sending under&quot; or &quot;presenting for consideration.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;submission&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized word used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;submission&quot; has only one &quot;t&quot; in the middle. Think of it as &quot;sub&quot; + &quot;mission&quot; - &quot;mission&quot; only has one &quot;t.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;submission&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: presentation, delivery, offering, contribution, entry, and proposal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;submission&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Submission&quot; can describe handing in homework, sending applications, providing reports, or even yielding to authority. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;submission&quot; and &quot;submitting&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Submission&quot; is a noun meaning &quot;the act of submitting&quot; or &quot;something submitted,&quot; while &quot;submitting&quot; is the present participle form of the verb &quot;submit.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is there a difference between &quot;submission&quot; and &quot;submittal&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words mean essentially the same thing, but &quot;submission&quot; is more commonly used in general contexts, while &quot;submittal&quot; is more technical and often used in engineering or construction contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I know when to use &quot;submission&quot; vs &quot;submit&quot;?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;submit&quot; as a verb meaning &quot;to present&quot; (&quot;I will submit the form&quot;) and &quot;submission&quot; as a noun meaning &quot;the act of submitting&quot; or &quot;something submitted&quot; (&quot;Your submission was received&quot;).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Submission&quot;</strong> has only one &quot;t&quot; in the middle. 
          <br />
          <strong>&quot;Submittion&quot;</strong> has an extra &quot;t&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + MISSION&quot; - only one &quot;t&quot; in mission!</p>
        </div>
      </div>
    </div>
  )
}
