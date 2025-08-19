import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subpoena vs Sepina - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subpoena&quot; and &quot;sepina&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubpoenaVsSepinaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Subpoena vs Sepina
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
            <span className="text-2xl mr-3">⚖️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Subpoena&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sepina&quot; is incorrect - remember the &quot;sub&quot; prefix and &quot;poena&quot; root!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sepina</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;sub&quot; prefix and &quot;poena&quot; root, making it completely incorrect.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Subpoena</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a legal order to appear in court.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Essential part of word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Poena&quot; (Root)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;penalty&quot; or &quot;punishment&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;penalty&quot;</li>
                <li>• Must include &quot;b&quot; and &quot;o&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;A&quot; (Suffix)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Forms nouns</li>
                <li>• Common ending</li>
                <li>• Simple suffix</li>
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
                <p className="text-lg text-green-800">&quot;The court issued a <strong>subpoena</strong> for the witness.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He received a <strong>subpoena</strong> to testify.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The lawyer served the <strong>subpoena</strong> yesterday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She ignored the <strong>subpoena</strong> at her own risk.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The court issued a <strong>sepina</strong> for the witness&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subpoena&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He received a <strong>sepina</strong> to testify&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subpoena&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The lawyer served the <strong>sepina</strong> yesterday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subpoena&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She ignored the <strong>sepina</strong> at her own risk&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subpoena&quot;</p>
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
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Legal</h3>
              <p className="text-yellow-800">&quot;Subpoena&quot; means court order, remember &quot;sub&quot; + &quot;poena&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Prefix Rule</h3>
              <p className="text-blue-800">&quot;Sub&quot; prefix is essential for meaning</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;subpoena&quot; to build muscle memory</p>
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
                <li>• <strong>Subpoena duces tecum</strong> - order to produce documents</li>
                <li>• <strong>Subpoena ad testificandum</strong> - order to testify</li>
                <li>• <strong>Serve a subpoena</strong> - deliver the order</li>
                <li>• <strong>Issue a subpoena</strong> - create the order</li>
                <li>• <strong>Ignore a subpoena</strong> - disobey the order</li>
                <li>• <strong>Quash a subpoena</strong> - cancel the order</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subpoena</strong> - court order</li>
                <li>• <strong>Subpoena</strong> - to serve with an order</li>
                <li>• <strong>Penalty</strong> - punishment</li>
                <li>• <strong>Punish</strong> - to penalize</li>
                <li>• <strong>Court</strong> - legal tribunal</li>
                <li>• <strong>Witness</strong> - person who testifies</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;subpoena&quot; as &quot;sepina&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is completely dropping the &quot;sub&quot; prefix and miswriting the &quot;poena&quot; root. This happens because people forget the word&apos;s Latin origins and structure.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;subpoena&quot; used in legal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Subpoena&quot; is a formal, legal term commonly used in court documents, legal briefs, and professional legal communication. It&apos;s perfectly appropriate for all legal contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;subpoena&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subpoena&quot; comes from Latin: &quot;sub&quot; (under) + &quot;poena&quot; (penalty). It literally means &quot;under penalty&quot; - referring to the penalty for not complying with the order.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;subpoena&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized legal term used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break it down: &quot;sub&quot; + &quot;poena.&quot; Remember that &quot;sub&quot; means &quot;under&quot; and &quot;poena&quot; means &quot;penalty,&quot; so it&apos;s literally &quot;under penalty.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subpoena&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: court order, summons, writ, legal notice, and judicial order.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;subpoena&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Subpoena&quot; can be a noun meaning &quot;a court order&quot; or a verb meaning &quot;to serve with a court order.&quot; It&apos;s a versatile word with multiple grammatical functions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subpoena&quot; and &quot;summons&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;subpoena&quot; is typically used to compel testimony or document production, while a &quot;summons&quot; is usually used to notify someone of a lawsuit. Both are court orders but serve different purposes.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;sepina&quot; a real word in any language?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sepina&quot; is not a real word in English or any other language. It&apos;s a common misspelling that has no meaning and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I pronounce &quot;subpoena&quot; correctly?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subpoena&quot; is pronounced as &quot;suh-PEE-nuh&quot; with the stress on the second syllable. The &quot;b&quot; is silent, which is why some people misspell it.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subpoena&quot;</strong> has the complete &quot;sub&quot; prefix and &quot;poena&quot; root. 
          <br />
          <strong>&quot;Sepina&quot;</strong> is completely incorrect and has no meaning.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + POENA&quot; - both parts are essential for the legal meaning!</p>
        </div>
      </div>
    </div>
  )
}
