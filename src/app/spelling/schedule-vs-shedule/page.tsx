import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Schedule vs Shedule - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;schedule&quot; and &quot;shedule&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScheduleVsShedulePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
          Schedule vs Shedule
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📅</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Schedule&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Shedule&quot; is always incorrect - remember &quot;schedule&quot; has the &quot;c&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Shedule</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Schedule</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;plan of activities&quot; or &quot;to plan.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Schedule&quot; (Correct)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;plan of activities&quot;</li>
                <li>• Has &quot;c&quot; letter</li>
                <li>• Latin origin</li>
                <li>• Used as noun/verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Shedule&quot; (Wrong)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Missing &quot;c&quot; letter</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• &quot;Shedule&quot; is not a word</li>
                <li>• Missing letter &quot;c&quot;</li>
                <li>• Changes pronunciation</li>
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
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Check the schedule.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Schedule a meeting.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Bus schedule.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Class schedule.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Check the shedule&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;schedule&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Shedule a meeting&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;schedule&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Bus shedule&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;schedule&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Class shedule&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;schedule&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">C Letter Rule</h3>
              <p className="text-amber-800">&quot;Schedule&quot; has &quot;c&quot; - think &quot;s-C-chedule&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Plan</h3>
              <p className="text-yellow-800">&quot;Schedule&quot; starts with &quot;sc&quot; like &quot;schedule plans&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;schedule&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proofread</h3>
              <p className="text-blue-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Class schedule</strong> - academic timetable</li>
                <li>• <strong>Bus schedule</strong> - transportation timetable</li>
                <li>• <strong>Work schedule</strong> - employment timetable</li>
                <li>• <strong>Meeting schedule</strong> - appointment timetable</li>
                <li>• <strong>Daily schedule</strong> - daily routine</li>
                <li>• <strong>Weekly schedule</strong> - weekly routine</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The schedule is full&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Schedule starts at 9&quot;</li>
                <li>• <strong>Object:</strong> &quot;Check the schedule&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Schedule&apos;s details&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple schedules&quot;</li>
                <li>• <strong>Verb:</strong> &quot;Schedule the meeting&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;schedule&quot; as &quot;shedule&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people drop the &quot;c&quot; from &quot;schedule.&quot; Remember that &quot;schedule&quot; has a &quot;c&quot; and means a plan of activities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Is &quot;shedule&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shedule&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What does &quot;schedule&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Schedule&quot; is a plan that lists the times when certain events or activities will happen. It can also mean &quot;to plan&quot; when used as a verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;schedule&quot; has a &quot;c.&quot; Think &quot;s-C-chedule&quot; - the &quot;c&quot; is near the beginning of the word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;schedule&quot; and &quot;timetable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Schedule&quot; is a general plan of activities, while &quot;timetable&quot; specifically refers to a list of times when events occur, often in a grid format.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;schedule&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;schedule&quot; can be used as a verb meaning &quot;to plan&quot; or &quot;to arrange,&quot; as in &quot;Schedule the meeting for tomorrow.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: scheduling (noun), scheduled (past tense), schedule-like (adjective), schedule-maker (compound noun), and reschedule (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;schedule&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Schedule&quot; comes from the Latin &quot;schedula&quot; meaning &quot;small piece of paper&quot; and entered English in the 14th century, referring to written plans or timetables.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How is &quot;schedule&quot; used in business?</h3>
              <p className="text-lg text-gray-700">A: In business, &quot;schedule&quot; refers to planned meetings, deadlines, project timelines, and work hours. It helps organize and coordinate activities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;schedule&quot; and &quot;agenda&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Schedule&quot; refers to the timing of events, while &quot;agenda&quot; refers to the list of topics or items to be discussed in a meeting.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Schedule&quot;</strong> has a &quot;c&quot; and means &quot;plan of activities.&quot;
          <br />
          <strong>&quot;Shedule&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;s-C-chedule&quot; - remember the &quot;c&quot;!</p>
        </div>
      </div>
    </div>
  )
}
