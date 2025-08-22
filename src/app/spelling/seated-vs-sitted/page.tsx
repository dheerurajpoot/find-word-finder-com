import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Seated vs Sitted - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;seated&quot; and &quot;sitted&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeatedVsSittedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Seated vs Sitted
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-cyan-600">&quot;Seated&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sitted&quot; is always incorrect - remember &quot;seated&quot; comes from &quot;seat&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sitted</h3>
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
              <h3 className="text-3xl font-bold text-cyan-800 mb-4">Seated</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-cyan-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-cyan-700 leading-relaxed">
                This is the proper spelling meaning &quot;placed in a seat&quot; or &quot;sitting down.&quot;
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
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Seated&quot; (Correct)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;placed in a seat&quot;</li>
                <li>• From &quot;seat&quot; + &quot;ed&quot;</li>
                <li>• Past tense/past participle</li>
                <li>• Used as adjective/verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sitted&quot; (Wrong)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Wrong &quot;itt&quot; pattern</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;Sitted&quot; is not a word</li>
                <li>• Wrong verb pattern</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word formation</li>
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
                <p className="text-lg text-cyan-800">&quot;She was <strong>seated</strong> at the table.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;The guests were <strong>seated</strong>.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;He <strong>seated</strong> himself.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;All <strong>seated</strong> passengers.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She was <strong>sitted</strong> at the table&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seated&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The guests were <strong>sitted</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seated&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>sitted</strong> himself&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seated&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;All <strong>sitted</strong> passengers&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seated&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Seat + Ed Rule</h3>
              <p className="text-yellow-800">&quot;Seat&quot; + &quot;ed&quot; = &quot;seated&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Seat</h3>
              <p className="text-blue-800">&quot;To SEAT makes you SEATED&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;seated&quot; to build muscle memory</p>
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
                <li>• <strong>Seated at the table</strong> - positioned at dining surface</li>
                <li>• <strong>Seated passengers</strong> - people in seats</li>
                <li>• <strong>Seated audience</strong> - people in audience seats</li>
                <li>• <strong>Seated position</strong> - sitting posture</li>
                <li>• <strong>Seated arrangement</strong> - organized seating</li>
                <li>• <strong>Seated ceremony</strong> - formal seated event</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;He seated himself&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;She was seated&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Seated guests&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Seated passengers waited&quot;</li>
                <li>• <strong>Object:</strong> &quot;Find seated people&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;They were seated&quot;</li>
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
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;seated&quot; as &quot;sitted&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people apply irregular verb patterns (like &quot;sit&quot; → &quot;sat&quot;) to &quot;seat.&quot; Remember that &quot;seated&quot; comes from &quot;seat&quot; + &quot;ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;sitted&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sitted&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are the different meanings of &quot;seated&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seated&quot; can mean: placed in a seat, sitting down, positioned, arranged in seats, or having a seat assigned.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;seated&quot; comes from &quot;seat.&quot; Think &quot;To SEAT makes you SEATED&quot; - both use &quot;seat&quot; as the base.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;seated&quot; and &quot;sitting&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seated&quot; refers to being placed in a seat or having a seat assigned, while &quot;sitting&quot; refers to the ongoing action of being in a seated position.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;seated&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Seated&quot; can be used as a verb meaning to place someone in a seat, as in &quot;She seated the guests&quot; or &quot;He seated himself at the table.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: seat (noun/verb), seating (noun), unseated (adjective), reseat (verb), and seatless (adjective).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;seated&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Seated&quot; comes from the Old English &quot;settan&quot; meaning &quot;to place&quot; + the suffix &quot;-ed.&quot; It entered English in the 13th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;seated&quot; used in formal events?</h3>
              <p className="text-lg text-gray-700">A: In formal events, &quot;seated&quot; refers to having assigned seating arrangements, as in &quot;seated dinner,&quot; &quot;seated ceremony,&quot; or &quot;seated audience&quot; for organized events.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Seated&quot;</strong> comes from &quot;seat&quot; + &quot;ed&quot; and means &quot;placed in a seat.&quot;
          <br />
          <strong>&quot;Sitted&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SEAT + ed = SEATED&quot; - remember the base word!</p>
        </div>
      </div>
    </div>
  )
}
