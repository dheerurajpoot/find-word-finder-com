import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spiritual vs Spritual - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spiritual&quot; and &quot;spritual&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpiritualVsSpritualPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Spiritual vs Spritual
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🕊️</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Spiritual&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spritual&quot; is always incorrect - remember the &quot;i&quot; in &quot;spiritual&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spritual</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Spiritual</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;relating to the spirit or soul.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Spiritual&quot; (Adjective)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Has &quot;i&quot; after &quot;r&quot;</li>
                <li>• Ends with &quot;al&quot;</li>
                <li>• Means &quot;spirit-related&quot;</li>
                <li>• Describes inner qualities</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Suffix Rule</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;al&quot; = relating to</li>
                <li>• Common adjective ending</li>
                <li>• Similar to &quot;natural&quot;</li>
                <li>• Indicates connection</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Confusion</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• People forget &quot;i&quot;</li>
                <li>• Similar to &quot;spirit&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember &quot;i&quot;</li>
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
            <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;She has a strong <strong>spiritual</strong> connection.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The retreat was a <strong>spiritual</strong> experience.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;He seeks <strong>spiritual</strong> guidance.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The music has a <strong>spiritual</strong> quality.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has a strong <strong>spritual</strong> connection.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiritual&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The retreat was a <strong>spritual</strong> experience.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiritual&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He seeks <strong>spritual</strong> guidance.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiritual&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The music has a <strong>spritual</strong> quality.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spiritual&quot;</p>
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
              <div className="text-4xl mb-3">🕊️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I Rule</h3>
              <p className="text-yellow-800">&quot;Spiritual&quot; has &quot;i&quot; like &quot;spirit&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Spirit</h3>
              <p className="text-purple-800">Spiritual = spirit + al</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Write It Out</h3>
              <p className="text-violet-800">Practice writing &quot;spiritual&quot; to build muscle memory</p>
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
                <li>• <strong>Spiritual awakening</strong> - enlightenment experience</li>
                <li>• <strong>Spiritual journey</strong> - personal growth path</li>
                <li>• <strong>Spiritual practice</strong> - meditation, prayer</li>
                <li>• <strong>Spiritual leader</strong> - religious guide</li>
                <li>• <strong>Spiritual healing</strong> - emotional recovery</li>
                <li>• <strong>Spiritual growth</strong> - inner development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Attributive adjective:</strong> &quot;The spiritual leader&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The experience was spiritual&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More spiritual&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most spiritual&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Spiritually&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Spirituality&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people misspell &quot;spiritual&quot; as &quot;spritual&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;i&quot; after the &quot;r.&quot; Some people may also be influenced by unclear pronunciation or the similarity to other words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;spiritual&quot; and &quot;religious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spiritual&quot; refers to personal inner experiences, beliefs, and connection to something greater, while &quot;religious&quot; refers to organized systems of belief, practices, and institutions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Are there other words that end with &quot;al&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English adjectives end with &quot;al&quot;: natural, personal, emotional, physical, mental, cultural, and social are just a few examples. Each indicates a relationship or connection.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spiritual&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spiritual&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;spiritual&quot; and &quot;emotional&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to inner experiences, &quot;spiritual&quot; refers to connection with something transcendent or divine, while &quot;emotional&quot; refers to feelings and psychological states.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;spiritual&quot; as &quot;spirit&quot; + &quot;al.&quot; The word comes from &quot;spirit,&quot; so if you remember that base word, you&apos;ll spell it correctly with the &quot;i&quot; included.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;spiritual&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: sacred, divine, holy, mystical, transcendent, ethereal, and soulful. Each has slightly different nuances and connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;spritual&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spritual&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spiritual&quot; with the &quot;i&quot; after the &quot;r.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the etymology of &quot;spiritual&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spiritual&quot; comes from Latin &quot;spiritualis&quot; meaning &quot;of breathing, of wind, or of the spirit.&quot; It&apos;s related to the Latin word &quot;spiritus&quot; meaning &quot;breath&quot; or &quot;spirit.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;spiritual&quot; be used in secular contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spiritual&quot; can refer to personal growth, inner peace, or connection to nature without religious connotations. It&apos;s often used in wellness, psychology, and personal development contexts.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spiritual&quot;</strong> has an &quot;i&quot; after the &quot;r&quot; and means &quot;relating to the spirit.&quot; 
          <br />
          <strong>&quot;Spritual&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPIRIT + al = SPIRITUAL (like spirit)&quot;</p>
        </div>
      </div>
    </div>
  )
}
