import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subsidiary vs Subsidary - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subsidiary&quot; and &quot;subsidary&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubsidiaryVsSubsidaryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Subsidiary vs Subsidary
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
            <span className="text-2xl mr-3">🏢</span>
            <span className="text-2xl font-bold text-green-600">&quot;Subsidiary&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Subsidary&quot; is incorrect - remember the &quot;i&quot; in &quot;subsidiary&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Subsidary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;i&quot; in &quot;subsidiary&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Subsidiary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a company controlled by another&quot; or &quot;secondary.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;under&quot; or &quot;below&quot;</li>
                <li>• Latin origin</li>
                <li>• Common prefix</li>
                <li>• Used in many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Sid&quot; (Root)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;to sit&quot; or &quot;to settle&quot;</li>
                <li>• Latin origin</li>
                <li>• Related to &quot;reside&quot;</li>
                <li>• Must include &quot;i&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Iary&quot; (Suffix)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;relating to&quot;</li>
                <li>• Forms adjectives</li>
                <li>• Must include &quot;i&quot;</li>
                <li>• Common ending</li>
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
                <p className="text-lg text-green-800">&quot;The company has several <strong>subsidiary</strong> businesses.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This is a <strong>subsidiary</strong> issue to the main problem.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>subsidiary</strong> company operates independently.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We need to address the <strong>subsidiary</strong> concerns.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company has <strong>subsidary</strong> businesses&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subsidiary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a <strong>subsidary</strong> issue&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subsidiary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>subsidary</strong> company&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subsidiary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Address the <strong>subsidary</strong> concerns&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subsidiary&quot;</p>
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
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Company</h3>
              <p className="text-yellow-800">&quot;Subsidiary&quot; means company, remember the &quot;i&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Root Rule</h3>
              <p className="text-blue-800">&quot;Sid&quot; root always has an &quot;i&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;subsidiary&quot; to build muscle memory</p>
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
                <li>• <strong>Subsidiary company</strong> - controlled company</li>
                <li>• <strong>Subsidiary business</strong> - secondary business</li>
                <li>• <strong>Subsidiary issue</strong> - secondary concern</li>
                <li>• <strong>Subsidiary role</strong> - supporting role</li>
                <li>• <strong>Subsidiary income</strong> - secondary earnings</li>
                <li>• <strong>Subsidiary function</strong> - supporting function</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subsidiary</strong> - secondary company</li>
                <li>• <strong>Subsidiary</strong> - supporting role</li>
                <li>• <strong>Reside</strong> - to live</li>
                <li>• <strong>Resident</strong> - inhabitant</li>
                <li>• <strong>Subside</strong> - to decrease</li>
                <li>• <strong>Subsidence</strong> - sinking</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;subsidiary&quot; as &quot;subsidary&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is dropping the &quot;i&quot; from the &quot;sid&quot; root. This happens because the word is long and complex, and people often forget that &quot;sid&quot; always has an &quot;i.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;subsidiary&quot; used in business writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Subsidiary&quot; is a formal, business term commonly used in corporate, legal, and financial contexts. It&apos;s perfectly appropriate for professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;subsidiary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subsidiary&quot; comes from Latin: &quot;sub&quot; (under) + &quot;sedere&quot; (to sit). It literally means &quot;sitting under&quot; or &quot;supporting from below.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;subsidiary&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized business term used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break it down: &quot;sub&quot; + &quot;sid&quot; + &quot;iary.&quot; Remember that &quot;sid&quot; always has an &quot;i,&quot; just like &quot;reside&quot; and &quot;resident.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subsidiary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: secondary, auxiliary, supporting, subordinate, dependent, affiliated, and associated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;subsidiary&quot; be used in non-business contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Subsidiary&quot; can describe any secondary or supporting thing, like &quot;subsidiary questions&quot; in an interview or &quot;subsidiary themes&quot; in literature.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subsidiary&quot; and &quot;affiliate&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;subsidiary&quot; is typically majority-owned and controlled by the parent company, while an &quot;affiliate&quot; usually has a minority ownership stake and operates more independently.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subsidiary&quot;</strong> has the complete &quot;sid&quot; root with an &quot;i.&quot; 
          <br />
          <strong>&quot;Subsidary&quot;</strong> is missing the &quot;i&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + SID + IARY&quot; - the &quot;i&quot; in sid is essential!</p>
        </div>
      </div>
    </div>
  )
}
