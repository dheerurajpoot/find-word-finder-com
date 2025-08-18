import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Surprised vs Suprised - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;surprised&quot; and &quot;suprised&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SurprisedVsSuprisedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Surprised vs Suprised
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Surprised&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suprised&quot; is always incorrect - remember the &quot;r&quot; in &quot;surprised&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suprised</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Surprised</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;feeling or showing surprise.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Surprised&quot; (Adjective)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;feeling surprise&quot;</li>
                <li>• Has &quot;r&quot; after &quot;su&quot;</li>
                <li>• Ends with &quot;-ed&quot;</li>
                <li>• Related to &quot;surprise&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Error</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Suprised&quot; is wrong</li>
                <li>• Missing &quot;r&quot; after &quot;su&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Memory Aid</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Think &quot;SUR + PRI + S + ED&quot;</li>
                <li>• &quot;sur&quot; like &quot;surface&quot;</li>
                <li>• &quot;-ed&quot; ending pattern</li>
                <li>• Related to &quot;surprise&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I was <strong>surprised</strong> by the news.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She looked <strong>surprised</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The audience was <strong>surprised</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He seemed <strong>surprised</strong> to see me.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I was <strong>suprised</strong> by the news&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprised&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She looked <strong>suprised</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprised&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The audience was <strong>suprised</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprised&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He seemed <strong>suprised</strong> to see me&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprised&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">R Rule</h3>
              <p className="text-yellow-800">&quot;Surprised&quot; has &quot;r&quot; like &quot;surface&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Surface</h3>
              <p className="text-blue-800">&quot;Surprised&quot; starts like &quot;surface&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words starting with &quot;sur&quot; are common</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUR + PRI + S + ED = Surprised</p>
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
                <li>• <strong>Pleasantly surprised</strong> - happy surprise</li>
                <li>• <strong>Not surprised</strong> - expected outcome</li>
                <li>• <strong>Surprised expression</strong> - shocked look</li>
                <li>• <strong>Surprised reaction</strong> - unexpected response</li>
                <li>• <strong>Surprised by</strong> - unexpected cause</li>
                <li>• <strong>Surprised to see</strong> - unexpected encounter</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;A surprised person&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;That looks surprised&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I was surprised&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;Surprise&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Surprise&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Surprisingly&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people misspell &quot;surprised&quot; as &quot;suprised&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;r&quot; sound in &quot;surprised&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the &quot;sur&quot; prefix pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;surprised&quot; related to &quot;surface&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words share the &quot;sur&quot; prefix, which comes from Latin &quot;super-&quot; meaning &quot;above&quot; or &quot;over.&quot; &quot;Surface&quot; means the top layer, while &quot;surprised&quot; means taken over by surprise.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;surprised&quot; and &quot;shocked&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surprised&quot; means feeling or showing surprise, which is milder than &quot;shocked.&quot; &quot;Shocked&quot; implies a more intense, often negative reaction to something unexpected.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;surprised&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Surprised&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;surprised&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: astonished, amazed, startled, stunned, taken aback, bewildered, and flabbergasted. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;surface&quot; (which has the same &quot;sur&quot; beginning) and remember that &quot;surprised&quot; starts the same way. The &quot;r&quot; after &quot;su&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When you&apos;re SURPRISED, you&apos;re on the SURface of your emotions&quot; - both words start with &quot;sur.&quot; Or remember: &quot;SUR + PRI + S + ED&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the verb form of &quot;surprised&quot;?</h3>
              <p className="text-lg text-gray-700">A: The verb form is &quot;surprise.&quot; For example: &quot;I will surprise you&quot; or &quot;She surprises everyone.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Surprised&quot;</strong> has &quot;r&quot; after &quot;su&quot; and means &quot;feeling surprise.&quot; 
          <br />
          <strong>&quot;Suprised&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUR + PRI + S + ED&quot; and remember the &quot;r&quot; like in &quot;surface&quot;!</p>
        </div>
      </div>
    </div>
  )
}
