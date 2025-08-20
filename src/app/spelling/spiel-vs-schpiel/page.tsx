import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spiel vs Schpiel - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spiel&quot; and &quot;schpiel&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpielVsSchpielPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Spiel vs Schpiel
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
            <span className="text-2xl mr-3">🎭</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Spiel&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Schpiel&quot; is always incorrect - remember that &quot;spiel&quot; comes from German!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Schpiel</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-800 mb-4">Spiel</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-rose-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-rose-700 leading-relaxed">
                This is the proper spelling meaning &quot;a lengthy speech or story.&quot;
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
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Spiel&quot; (Noun)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• German origin</li>
                <li>• No &quot;sch&quot; sound</li>
                <li>• Means &quot;game&quot; or &quot;play&quot;</li>
                <li>• Informal English usage</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Etymology Rule</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• German word &quot;Spiel&quot;</li>
                <li>• &quot;Sch&quot; is not German</li>
                <li>• Similar to &quot;spa&quot;</li>
                <li>• Similar to &quot;spatula&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Confusion</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• People add &quot;sch&quot;</li>
                <li>• Think it&apos;s Yiddish</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember origin</li>
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
            <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;He gave me his sales <strong>spiel</strong>.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;Don&apos;t give me that <strong>spiel</strong> again.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;She has a rehearsed <strong>spiel</strong> for everything.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;The politician&apos;s <strong>spiel</strong> was convincing.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He gave me his sales <strong>schpiel</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiel&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t give me that <strong>schpiel</strong> again.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiel&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has a rehearsed <strong>schpiel</strong> for everything.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiel&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The politician&apos;s <strong>schpiel</strong> was convincing.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiel&quot;</p>
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
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">German Origin</h3>
              <p className="text-yellow-800">&quot;Spiel&quot; is German, not Yiddish</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Simple</h3>
              <p className="text-rose-800">Spiel = simple German word</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;spiel&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Sales spiel</strong> - marketing pitch</li>
                <li>• <strong>Rehearsed spiel</strong> - prepared speech</li>
                <li>• <strong>Same old spiel</strong> - repeated story</li>
                <li>• <strong>Give someone a spiel</strong> - deliver speech</li>
                <li>• <strong>Listen to the spiel</strong> - hear explanation</li>
                <li>• <strong>Fall for the spiel</strong> - believe story</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The spiel was convincing&quot;</li>
                <li>• <strong>Direct object:</strong> &quot;He gave a spiel&quot;</li>
                <li>• <strong>Subject:</strong> &quot;The spiel worked&quot;</li>
                <li>• <strong>Object of preposition:</strong> &quot;Listen to the spiel&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;His spiel&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple spiels&quot;</li>
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
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;spiel&quot; as &quot;schpiel&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from thinking the word is Yiddish (which often uses &quot;sch&quot; sounds) rather than German. Some people may also be influenced by unclear pronunciation or the similarity to other Yiddish words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;spiel&quot; and &quot;speech&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to spoken words, &quot;spiel&quot; typically suggests a rehearsed, persuasive, or sales-oriented talk, often with a slightly negative connotation. &quot;Speech&quot; is more neutral and formal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Is &quot;spiel&quot; a German or Yiddish word?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spiel&quot; is originally a German word meaning &quot;game&quot; or &quot;play.&quot; While it&apos;s used in Yiddish as well, the spelling &quot;spiel&quot; reflects its German origin, not the Yiddish pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spiel&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spiel&quot; is generally considered informal and is best used in casual conversation, creative writing, or when you want to convey a conversational tone. For formal writing, consider alternatives like &quot;speech&quot; or &quot;presentation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;spiel&quot; and &quot;pitch&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both can refer to persuasive talks, &quot;spiel&quot; often suggests something longer, more rehearsed, or potentially tiresome, while &quot;pitch&quot; is more focused and business-oriented.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;spiel&quot; comes from German, and German words typically don&apos;t start with &quot;sch&quot; in English spelling. Think of it as a simple German import: &quot;SPIEL&quot; not &quot;SCHPIEL.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;spiel&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: speech, pitch, talk, story, line, routine, and presentation. Each has slightly different connotations and formality levels.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;schpiel&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;schpiel&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spiel&quot; without the &quot;sch&quot; prefix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the etymology of &quot;spiel&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spiel&quot; comes from the German word &quot;Spiel&quot; meaning &quot;game&quot; or &quot;play.&quot; It entered English in the late 19th century and evolved to mean a lengthy or rehearsed speech, often with a persuasive purpose.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;spiel&quot; have positive connotations?</h3>
              <p className="text-lg text-gray-700">A: Yes! While &quot;spiel&quot; often has a slightly negative connotation (suggesting something rehearsed or tiresome), it can also be used neutrally or even positively to describe an engaging or effective presentation.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spiel&quot;</strong> comes from German and means &quot;a lengthy speech or story.&quot; 
          <br />
          <strong>&quot;Schpiel&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPIEL = German word (no sch needed)&quot;</p>
        </div>
      </div>
    </div>
  )
}
