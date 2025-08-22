import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scotland vs Scottland - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;Scotland&quot; and &quot;Scottland&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScotlandVsScottlandPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Scotland vs Scottland
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
            <span className="text-2xl font-bold text-green-600">&quot;Scotland&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Scottland&quot; is always incorrect - remember &quot;Scotland&quot; has one &quot;t&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Scottland</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Scotland</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the country in northern Britain.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Scotland&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;the country&quot;</li>
                <li>• Has one &quot;t&quot;</li>
                <li>• Old English origin</li>
                <li>• Used as noun</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Scottland&quot; (Wrong)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Extra &quot;t&quot; letter</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• &quot;Scottland&quot; is not a word</li>
                <li>• Extra letter &quot;t&quot;</li>
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Visit Scotland.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Scotland&apos;s capital.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Scotland&apos;s history.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Scotland&apos;s culture.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Visit Scottland&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scotland&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Scottland&apos;s capital&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scotland&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Scottland&apos;s history&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scotland&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Scottland&apos;s culture&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Scotland&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Single T Rule</h3>
              <p className="text-green-800">&quot;Scotland&quot; has one &quot;t&quot; - think &quot;Scot-land&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Scot + Land</h3>
              <p className="text-emerald-800">&quot;Scot&quot; + &quot;land&quot; = &quot;Scotland&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Write It Out</h3>
              <p className="text-teal-800">Practice writing &quot;Scotland&quot; to build muscle memory</p>
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
                <li>• <strong>Scotland&apos;s capital</strong> - Edinburgh</li>
                <li>• <strong>Scotland&apos;s history</strong> - Scottish past</li>
                <li>• <strong>Scotland&apos;s culture</strong> - Scottish traditions</li>
                <li>• <strong>Scotland&apos;s landscape</strong> - Scottish scenery</li>
                <li>• <strong>Scotland&apos;s people</strong> - Scottish inhabitants</li>
                <li>• <strong>Scotland&apos;s weather</strong> - Scottish climate</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Scotland is beautiful&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Scotland has mountains&quot;</li>
                <li>• <strong>Object:</strong> &quot;Visit Scotland&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Scotland&apos;s beauty&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Scotland-based company&quot;</li>
                <li>• <strong>Location:</strong> &quot;In Scotland&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;Scotland&quot; as &quot;Scottland&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people add an extra &quot;t&quot; to &quot;Scotland.&quot; Remember that &quot;Scotland&quot; has one &quot;t&quot; and is the name of the country.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;Scottland&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;Scottland&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What does &quot;Scotland&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scotland&quot; is the name of the country that forms the northern part of Great Britain. It&apos;s one of the four countries that make up the United Kingdom.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;Scotland&quot; has one &quot;t.&quot; Think &quot;Scot-land&quot; - the base word is &quot;Scot&quot; with &quot;land&quot; added.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;Scotland&quot; and &quot;Scottish&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scotland&quot; is the name of the country (noun), while &quot;Scottish&quot; is the adjective describing things from Scotland. Example: &quot;Scotland is beautiful&quot; vs &quot;Scottish culture.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;Scotland&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Scotland&quot; is the official name of the country and should always be used in formal writing, academic papers, and official documents.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: Scottish (adjective), Scot (person from Scotland), Scots (Scottish dialect), and Scotswoman/Scotsman (Scottish person).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the origin of the word &quot;Scotland&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scotland&quot; comes from the Old English &quot;Scottaland&quot; meaning &quot;land of the Scots.&quot; It entered English in the 14th century and refers to the country of Scotland.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How is &quot;Scotland&quot; used in geography?</h3>
              <p className="text-lg text-gray-700">A: In geography, &quot;Scotland&quot; refers to the country&apos;s territory: &quot;Scotland&apos;s Highlands,&quot; &quot;Scotland&apos;s islands,&quot; &quot;Scotland&apos;s coastline,&quot; or &quot;Scotland&apos;s borders&quot; are common geographical terms.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;Scotland&quot; and &quot;England&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scotland&quot; and &quot;England&quot; are two separate countries within the United Kingdom. Scotland is in the north, England is in the south. Both are part of Great Britain but have distinct identities.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Scotland&quot;</strong> has one &quot;t&quot; and is the name of the country.
          <br />
          <strong>&quot;Scottland&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Scot-land&quot; - remember the single &quot;t&quot;!</p>
        </div>
      </div>
    </div>
  )
}
