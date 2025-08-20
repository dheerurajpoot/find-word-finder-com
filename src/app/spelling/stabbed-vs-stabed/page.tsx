import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Stabbed vs Stabed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;stabbed&quot; and &quot;stabed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StabbedVsStabedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Stabbed vs Stabed
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
            <span className="text-2xl mr-3">🗡️</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Stabbed&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Stabed&quot; is always incorrect - remember the double &quot;b&quot; in &quot;stabbed&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Stabed</h3>
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Stabbed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of stab.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Stab&quot; (Root)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to pierce&quot; or &quot;to thrust&quot;</li>
                <li>• Related to action</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;BB&quot; (Double)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Double &quot;b&quot; required</li>
                <li>• Must be included</li>
                <li>• Part of rule</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Ed&quot; (Ending)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Forms the ending sound</li>
                <li>• Means &quot;past tense&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;stabbed&quot;</li>
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
                <p className="text-lg text-amber-800">&quot;He <strong>stabbed</strong> the paper with his pen.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The victim was <strong>stabbed</strong> multiple times.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;She <strong>stabbed</strong> the fork into the meat.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The knife <strong>stabbed</strong> through the fabric.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>stabed</strong> the paper with his pen&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stabbed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The victim was <strong>stabed</strong> multiple times&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stabbed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>stabed</strong> the fork into the meat&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stabbed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The knife <strong>stabed</strong> through the fabric&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;stabbed&quot;</p>
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
              <div className="text-4xl mb-3">🗡️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Knife</h3>
              <p className="text-yellow-800">&quot;Stabbed&quot; means pierced with a knife</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Double B Rule</h3>
              <p className="text-blue-800">Remember the double &quot;b&quot; in &quot;stabbed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;stabbed&quot; to build muscle memory</p>
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
                <li>• <strong>Stabbed in the back</strong> - betrayed</li>
                <li>• <strong>Stabbed to death</strong> - killed by stabbing</li>
                <li>• <strong>Stabbed with a knife</strong> - pierced with knife</li>
                <li>• <strong>Stabbed through</strong> - pierced completely</li>
                <li>• <strong>Stabbed multiple times</strong> - pierced repeatedly</li>
                <li>• <strong>Stabbed accidentally</strong> - pierced by mistake</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past Tense:</strong> &quot;stabbed&quot;</li>
                <li>• <strong>Subject:</strong> &quot;He stabbed&quot;</li>
                <li>• <strong>Object:</strong> &quot;I was stabbed&quot;</li>
                <li>• <strong>Past Perfect:</strong> &quot;had stabbed&quot;</li>
                <li>• <strong>Passive:</strong> &quot;was stabbed&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;stabbed wound&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people confuse &quot;stabbed&quot; and &quot;stabed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;stab&quot; or &quot;table.&quot; However, &quot;stabbed&quot; follows the pattern of &quot;stab&quot; + double &quot;b&quot; + &quot;ed&quot; past tense suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;stabbed&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Stabbed&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English past tense verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;stabbed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stabbed&quot; comes from Old English &quot;stabbian&quot; meaning &quot;to stab&quot; + the past tense suffix &quot;-ed.&quot; It was first used in English in the 14th century to mean &quot;pierced with a sharp object.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;stabbed&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;pierced&quot; or &quot;thrust.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;stab&quot; + &quot;bb&quot; + &quot;ed.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;stabbed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: pierced, thrust, jabbed, poked, penetrated, and impaled.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;stabbed&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing physical piercing, &quot;stabbed&quot; can be used in various contexts like emotions (stabbed in the back), objects (stabbed with a pen), and abstract concepts (stabbed through the heart).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;stabbed&quot; and &quot;pierced&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Stabbed&quot; refers to a quick, forceful thrust with a sharp object, while &quot;pierced&quot; refers to making a hole through something. &quot;Stabbed&quot; has a more aggressive connotation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;stabbed&quot; always about violence?</h3>
              <p className="text-lg text-gray-700">A: No! While &quot;stabbed&quot; often describes violent actions, it can also describe harmless actions. For example, &quot;stabbed the paper with a pen&quot; means to make a hole in paper, and &quot;stabbed the fork into meat&quot; means to pierce food.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;stabbed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;stabbed in the back,&quot; &quot;stabbed to death,&quot; &quot;stabbed with a knife,&quot; &quot;stabbed through,&quot; &quot;stabbed multiple times,&quot; and &quot;stabbed accidentally.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Stabbed&quot;</strong> is the correct spelling meaning &quot;past tense of stab.&quot; 
          <br />
          <strong>&quot;Stabed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;STAB + BB + ED = STABBED&quot;</p>
        </div>
      </div>
    </div>
  )
}
