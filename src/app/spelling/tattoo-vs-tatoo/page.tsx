import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tattoo vs Tatoo - Correct Spelling & Word Formation | Word Finder',
  description: 'Learn the correct spelling: &quot;tattoo&quot; vs &quot;tatoo&quot;. Understand word formation rules, avoid common errors, and master proper usage.',
}

export default function TattooVsTatooPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Tattoo vs Tatoo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Word Formation Guide: Understanding Spelling Patterns
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Tattoo&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Tatoo&quot; is always incorrect - remember the double &quot;t&quot; in &quot;tattoo&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Tatoo</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Tattoo</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a permanent design on the skin.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Tat&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Polynesian &quot;tatau&quot;</li>
                <li>• Meaning &quot;mark&quot;</li>
                <li>• Body art design</li>
                <li>• Permanent ink</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;too&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Forms complete word</li>
                <li>• Maintains pronunciation</li>
                <li>• Standard spelling</li>
                <li>• Preserves word origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;tt&quot; (Consonant Pattern)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Double &quot;t&quot; is correct</li>
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She got a beautiful <strong>tattoo</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>tattoo</strong> artist was skilled.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He wants to get a <strong>tattoo</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>tattoo</strong> parlor was busy.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She got a beautiful <strong>tatoo</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattoo&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>tatoo</strong> artist&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattoo&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He wants to get a <strong>tatoo</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattoo&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>tatoo</strong> parlor&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattoo&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double T Rule</h3>
              <p className="text-yellow-800">&quot;Tattoo&quot; has double &quot;t&quot; like &quot;letter&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Pattern</h3>
              <p className="text-blue-800">Tat + too = Tattoo</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">Tat-too (2 syllables)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Check Patterns</h3>
              <p className="text-purple-800">Most &quot;-tt-&quot; words keep double &quot;t&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contexts & Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contexts & Usage</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Tattoo artist</strong> - professional tattooer</li>
                <li>• <strong>Tattoo parlor</strong> - tattoo studio</li>
                <li>• <strong>Tattoo design</strong> - tattoo artwork</li>
                <li>• <strong>Tattoo removal</strong> - tattoo elimination</li>
                <li>• <strong>Tattoo ink</strong> - tattoo pigment</li>
                <li>• <strong>Tattoo machine</strong> - tattoo equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;I got a tattoo&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I want to tattoo my arm&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Tattoo artist&quot;</li>
                <li>• <strong>Descriptive:</strong> &quot;Tattoo design&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Tattoo parlor&quot;</li>
                <li>• <strong>Category:</strong> &quot;Tattoo culture&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;tattoo&quot; as &quot;tatoo&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may not be familiar with the word&apos;s Polynesian origin and proper formation, or they may confuse it with other similar words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;tattoo&quot; and &quot;body art&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Tattoo&quot; specifically refers to permanent ink designs on the skin, while &quot;body art&quot; is a broader term that can include temporary designs, piercings, and other body modifications.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;tattoo&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;tattoo&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;tattoo&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: body art, ink, design, mark, body decoration, and permanent art.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do you remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;tattoo&quot; has double &quot;t&quot; (like &quot;letter&quot;), and think of the word as tat-too with the double &quot;t&quot; clearly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;tattoo&quot; always used in body art contexts?</h3>
              <p className="text-lg text-gray-700">A: While primarily used for body art, &quot;tattoo&quot; can also be used metaphorically to describe other types of permanent marking or decoration.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;tattoo&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Tattoo&quot; comes from the Polynesian word &quot;tatau&quot; meaning &quot;mark&quot; + the English suffix &quot;-oo&quot; to form the complete word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;tattoo&quot; be used to describe non-body art?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;tattoo&quot; can be used metaphorically to describe other types of permanent marking, though it&apos;s most commonly used for body art.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are common collocations with &quot;tattoo&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common collocations include: tattoo artist, tattoo parlor, tattoo design, tattoo removal, tattoo ink, and tattoo machine.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do you teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;tattoo&quot; has double &quot;t&quot; (like &quot;letter&quot;), and emphasize the pronunciation: tat-too with the double &quot;t&quot; sound.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Tattoo&quot;</strong> has double &quot;t&quot; and means &quot;a permanent design on the skin.&quot; 
          <br />
          <strong>&quot;Tatoo&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Tat + too = Tattoo&quot; (double &quot;t&quot;)</p>
        </div>
      </div>
    </div>
  )
} 