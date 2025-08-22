import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Saying vs Sayig - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;saying&quot; and &quot;sayig&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SayingVsSayigPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Saying vs Sayig
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💬</span>
            <span className="text-2xl font-bold text-green-600">&quot;Saying&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sayig&quot; is always incorrect - remember the &quot;ing&quot; ending in &quot;saying&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sayig</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common phonetic mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Saying</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;present participle of say.&quot;
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
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Saying&quot; (Gerund)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Present participle</li>
                <li>• Ends with &quot;ing&quot;</li>
                <li>• From &quot;say&quot; + &quot;ing&quot;</li>
                <li>• Used as noun or verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Sayig&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Missing &quot;n&quot;</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Say&quot; + &quot;ing&quot;</li>
                <li>• Common suffix pattern</li>
                <li>• Related to &quot;say&quot;</li>
                <li>• Standard English ending</li>
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
                <p className="text-lg text-green-800">&quot;I was <strong>saying</strong> that we should go.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;What are you <strong>saying</strong>?&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She kept <strong>saying</strong> the same thing.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;There&apos;s an old <strong>saying</strong> about that.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I was <strong>sayig</strong> that we should go&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saying&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What are you <strong>sayig</strong>?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saying&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She kept <strong>sayig</strong> the same thing&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saying&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;There&apos;s an old <strong>sayig</strong> about that&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saying&quot;</p>
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
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ING Ending</h3>
              <p className="text-yellow-800">Think of &quot;ing&quot; like &quot;running&quot; and &quot;walking&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Say + ing</h3>
              <p className="text-blue-800">Remember: &quot;say&quot; + &quot;ing&quot; = &quot;saying&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;saying&quot; to build muscle memory</p>
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
                <li>• <strong>Keep saying</strong> - continue to repeat</li>
                <li>• <strong>Stop saying</strong> - cease to speak</li>
                <li>• <strong>Start saying</strong> - begin to speak</li>
                <li>• <strong>Keep on saying</strong> - persist in speaking</li>
                <li>• <strong>Go on saying</strong> - continue speaking</li>
                <li>• <strong>Finish saying</strong> - complete speaking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present participle:</strong> &quot;I am saying&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Saying is believing&quot;</li>
                <li>• <strong>Noun:</strong> &quot;That&apos;s a wise saying&quot;</li>
                <li>• <strong>Subject:</strong> &quot;What you&apos;re saying matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;I heard what you&apos;re saying&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;The phrase, saying goodbye&quot;</li>
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
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;saying&quot; as &quot;sayig&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People often drop the &quot;n&quot; when adding the &quot;ing&quot; suffix, possibly influenced by pronunciation patterns or typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;saying&quot; related to the word &quot;say&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Saying&quot; is the present participle and gerund form of &quot;say.&quot; &quot;Say&quot; is the base form, while &quot;saying&quot; is used for ongoing actions or as a noun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;saying&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Saying&quot; comes from the Old English word &quot;secgan&quot; meaning &quot;to say&quot; or &quot;to speak,&quot; combined with the &quot;-ing&quot; suffix to form the present participle and gerund.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;saying&quot; be used in both formal and informal contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Saying&quot; is appropriate for all contexts, from casual conversation to formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;saying&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: speaking, telling, stating, expressing, mentioning, declaring, and communicating.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;saying&quot; as &quot;say&quot; + &quot;ing.&quot; The &quot;ing&quot; ending always includes the letter &quot;n&quot; - just like in &quot;running&quot; and &quot;walking.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;saying&quot; always about speaking?</h3>
              <p className="text-lg text-gray-700">A: While &quot;saying&quot; often refers to spoken words, it can also refer to written communication or general expression, as in &quot;The book is saying&quot; or &quot;What the data is saying.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;saying&quot; and &quot;said&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Saying&quot; is the present participle (ongoing action), while &quot;said&quot; is the past tense. &quot;I am saying&quot; means I am speaking now, &quot;I said&quot; means I spoke in the past.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there any other words that follow the same pattern as &quot;saying&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many verbs follow the same pattern: &quot;play&quot; becomes &quot;playing,&quot; &quot;stay&quot; becomes &quot;staying,&quot; &quot;pay&quot; becomes &quot;paying.&quot; All use the &quot;ing&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How important is correct spelling in everyday communication?</h3>
              <p className="text-lg text-gray-700">A: Very important! Correct spelling ensures clear communication and prevents misunderstandings. Misspelling &quot;saying&quot; as &quot;sayig&quot; can confuse readers and make your writing appear less professional.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Saying&quot;</strong> ends with &quot;ing&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Sayig&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAYING = SAY + ing ending&quot;</p>
        </div>
      </div>
    </div>
  )
}
