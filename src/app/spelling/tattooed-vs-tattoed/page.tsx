import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tattooed vs Tattoed - Correct Spelling & Word Formation | Word Finder',
  description: 'Learn the correct spelling: &quot;tattooed&quot; vs &quot;tattoed&quot;. Understand word formation rules, avoid common errors, and master proper usage.',
}

export default function TattooedVsTattoedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Tattooed vs Tattoed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Word Formation Guide: Understanding Spelling Patterns
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 rounded-2xl mb-10 border border-pink-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Tattooed&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Tattoed&quot; is always incorrect - remember the double &quot;o&quot; in &quot;tattooed&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Tattoed</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Tattooed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;having tattoos&quot; or &quot;marked with tattoos.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Tattoo&quot; (Root)</h3>
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;ed&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Forms past tense</li>
                <li>• Creates adjectives</li>
                <li>• Means &quot;having&quot;</li>
                <li>• Standard English pattern</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;oo&quot; (Vowel Pattern)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Double &quot;o&quot; is correct</li>
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
                <p className="text-lg text-green-800">&quot;He is heavily <strong>tattooed</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She got <strong>tattooed</strong> last week.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>tattooed</strong> artist was very skilled.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They have <strong>tattooed</strong> arms.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is heavily <strong>tattoed</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattooed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She got <strong>tattoed</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattooed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>tattoed</strong> artist&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattooed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They have <strong>tattoed</strong> arms&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;tattooed&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double O Rule</h3>
              <p className="text-yellow-800">&quot;Tattooed&quot; has double &quot;o&quot; like &quot;tattoo&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Tattoo</h3>
              <p className="text-blue-800">Tattooed = Tattoo + ed</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">Tat-too-ed (3 syllables)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Check Patterns</h3>
              <p className="text-purple-800">Most &quot;-oo&quot; words keep double &quot;o&quot;</p>
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
                <li>• <strong>Heavily tattooed</strong> - many tattoos</li>
                <li>• <strong>Newly tattooed</strong> - recently done</li>
                <li>• <strong>Professionally tattooed</strong> - done by expert</li>
                <li>• <strong>Tattooed arms</strong> - arm tattoos</li>
                <li>• <strong>Tattooed artist</strong> - artist with tattoos</li>
                <li>• <strong>Tattooed person</strong> - person with tattoos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;She got tattooed&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Tattooed arms&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have been tattooed&quot;</li>
                <li>• <strong>Descriptive:</strong> &quot;Tattooed person&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Tattooed artist&quot;</li>
                <li>• <strong>Qualifier:</strong> &quot;Heavily tattooed&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;tattooed&quot; as &quot;tattoed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may not be familiar with the word&apos;s Polynesian origin and proper formation, or they may confuse it with other similar words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;tattooed&quot; and &quot;tattooing&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Tattooed&quot; is the past tense/past participle meaning &quot;having tattoos,&quot; while &quot;tattooing&quot; is the present participle meaning &quot;the act of creating tattoos.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;tattooed&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;tattooed&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;tattooed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: inked, marked, decorated, adorned, and embellished (though these may not be as specific).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do you remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;tattooed&quot; has double &quot;o&quot; (like &quot;tattoo&quot;), and think of the word as tat-too-ed with the double &quot;o&quot; clearly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;tattooed&quot; always used in body art contexts?</h3>
              <p className="text-lg text-gray-700">A: While primarily used for body art, &quot;tattooed&quot; can also be used metaphorically to describe other types of permanent marking or decoration.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;tattooed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Tattooed&quot; comes from the Polynesian word &quot;tatau&quot; meaning &quot;mark&quot; + the English suffix &quot;-ed&quot; to form the past tense and adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;tattooed&quot; be used to describe non-body art?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;tattooed&quot; can be used metaphorically to describe other types of permanent marking, though it&apos;s most commonly used for body art.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are common collocations with &quot;tattooed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common collocations include: heavily tattooed, newly tattooed, professionally tattooed, tattooed arms, tattooed artist, and tattooed person.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do you teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;tattooed&quot; has double &quot;o&quot; (like &quot;tattoo&quot;), and emphasize the pronunciation: tat-too-ed with the double &quot;o&quot; sound.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Tattooed&quot;</strong> has double &quot;o&quot; and means &quot;having tattoos&quot; or &quot;marked with tattoos.&quot; 
          <br />
          <strong>&quot;Tattoed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Tattoo + ed = Tattooed&quot; (double &quot;o&quot;)</p>
        </div>
      </div>
    </div>
  )
} 