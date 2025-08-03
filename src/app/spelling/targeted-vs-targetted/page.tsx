import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Targeted vs Targetted - Correct Spelling & Business Terminology | Word Finder',
  description: 'Learn the correct spelling: &quot;targeted&quot; vs &quot;targetted&quot;. Master business terminology, word formation rules, and avoid common spelling mistakes.',
}

export default function TargetedVsTargettedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Targeted vs Targetted
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Business Terminology Guide: Understanding Spelling Patterns
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Targeted&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Targetted&quot; is always incorrect - remember the single &quot;t&quot; in &quot;targeted&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Targetted</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common misspelling that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Targeted</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;aimed at a specific goal or audience.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Word Formation Analysis */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Word Formation Analysis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Target&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Old French &quot;targette&quot;</li>
                <li>• Meaning &quot;goal&quot;</li>
                <li>• Business objective</li>
                <li>• Specific aim</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;ed&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Forms past tense</li>
                <li>• Creates adjectives</li>
                <li>• Means &quot;aimed at&quot;</li>
                <li>• Standard English pattern</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;t&quot; (Consonant Rule)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Single &quot;t&quot; is correct</li>
                <li>• Maintains pronunciation</li>
                <li>• Standard spelling</li>
                <li>• Preserves word origin</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Business Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>targeted</strong> marketing campaign was successful.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We <strong>targeted</strong> the right audience.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>targeted</strong> approach worked well.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>targeted</strong> her efforts effectively.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>targetted</strong> marketing campaign&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;targeted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We <strong>targetted</strong> the right audience&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;targeted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>targetted</strong> approach&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;targeted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>targetted</strong> her efforts&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;targeted&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Spelling Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single T Rule</h3>
              <p className="text-yellow-800">&quot;Targeted&quot; has one &quot;t&quot; like &quot;target&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Target</h3>
              <p className="text-blue-800">Targeted = Target + ed</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">Tar-get-ed (3 syllables)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Check Patterns</h3>
              <p className="text-purple-800">Most &quot;-et&quot; words have single &quot;t&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Business Contexts */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Business Contexts & Usage</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Business Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Targeted marketing</strong> - specific audience focus</li>
                <li>• <strong>Targeted advertising</strong> - directed promotion</li>
                <li>• <strong>Targeted approach</strong> - specific strategy</li>
                <li>• <strong>Targeted audience</strong> - specific group</li>
                <li>• <strong>Targeted campaign</strong> - focused effort</li>
                <li>• <strong>Targeted messaging</strong> - specific communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;We targeted the market&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Targeted approach&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The audience was targeted&quot;</li>
                <li>• <strong>Descriptive:</strong> &quot;Targeted strategy&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Targeted campaign&quot;</li>
                <li>• <strong>Qualifier:</strong> &quot;Highly targeted&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;targeted&quot; as &quot;targetted&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse it with words that have double &quot;t&quot; endings, or they may not be familiar with the proper word formation rules.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;targeted&quot; and &quot;focused&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Targeted&quot; specifically refers to aiming at a particular goal or audience, while &quot;focused&quot; refers to concentrating attention or effort on something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;targeted&quot; be used in formal business writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;targeted&quot; is perfectly acceptable and commonly used in formal business writing, marketing documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;targeted&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: focused, directed, aimed, specific, precise, strategic, and intentional.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do you remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;targeted&quot; has a single &quot;t&quot; (like &quot;target&quot;), and think of the word as tar-get-ed with the single &quot;t&quot; clearly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;targeted&quot; always used in business contexts?</h3>
              <p className="text-lg text-gray-700">A: While often used in business contexts, &quot;targeted&quot; can also be used in everyday conversation to describe anything aimed at a specific goal or audience.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;targeted&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Targeted&quot; comes from the Old French &quot;targette&quot; meaning &quot;small shield&quot; + the English suffix &quot;-ed&quot; to form the past tense and adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;targeted&quot; be used to describe non-business activities?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;targeted&quot; can describe any specific aim or focus, whether business (targeted marketing) or personal (targeted exercise routine).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are common collocations with &quot;targeted&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common collocations include: targeted marketing, targeted advertising, targeted approach, targeted audience, targeted campaign, and targeted messaging.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do you teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;targeted&quot; has a single &quot;t&quot; (like &quot;target&quot;), and emphasize the pronunciation: tar-get-ed with the single &quot;t&quot; sound.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Targeted&quot;</strong> has a single &quot;t&quot; and means &quot;aimed at a specific goal or audience.&quot; 
          <br />
          <strong>&quot;Targetted&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Target + ed = Targeted&quot; (single &quot;t&quot;)</p>
        </div>
      </div>
    </div>
  )
} 