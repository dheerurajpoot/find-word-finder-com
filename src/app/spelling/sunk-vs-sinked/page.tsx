import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sunk vs Sinked - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sunk&quot; and &quot;sinked&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SunkVsSinkedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Sunk vs Sinked
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Sunk&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sinked&quot; is always incorrect - remember that &quot;sink&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sinked</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common error with irregular verbs.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sunk</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper past participle of &quot;sink&quot; meaning &quot;to go down below the surface.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sunk&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Past participle of &quot;sink&quot;</li>
                <li>• Irregular verb form</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Error</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Sinked&quot; is wrong</li>
                <li>• Regular verb ending applied</li>
                <li>• Sounds logical but incorrect</li>
                <li>• Common mistake</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Memory Aid</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Think &quot;SINK - SANK - SUNK&quot;</li>
                <li>• &quot;sink&quot; like the verb</li>
                <li>• &quot;-unk&quot; ending</li>
                <li>• Irregular pattern</li>
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
                <p className="text-lg text-green-800">&quot;The ship has <strong>sunk</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The ball <strong>sunk</strong> into the water.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I have <strong>sunk</strong> the putt.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The foundation has <strong>sunk</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ship has <strong>sinked</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sunk&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ball <strong>sinked</strong> into the water.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sunk&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have <strong>sinked</strong> the putt.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sunk&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The foundation has <strong>sinked</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sunk&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Irregular Verb Rule</h3>
              <p className="text-green-800">&quot;Sink&quot; is irregular: sink-sank-sunk</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Sunk</h3>
              <p className="text-blue-800">&quot;Sunk&quot; like &quot;drunk&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Pattern Recognition</h3>
              <p className="text-indigo-800">Verbs ending with &quot;-unk&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SINK → SANK → SUNK</p>
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
                <li>• <strong>Sunk cost</strong> - money already spent</li>
                <li>• <strong>Sunk ship</strong> - ship that went down</li>
                <li>• <strong>Sunk putt</strong> - golf ball in hole</li>
                <li>• <strong>Sunk foundation</strong> - settled foundation</li>
                <li>• <strong>Sunk treasure</strong> - treasure underwater</li>
                <li>• <strong>Sunk feeling</strong> - feeling of despair</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> &quot;I sink&quot;</li>
                <li>• <strong>Past:</strong> &quot;I sank&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have sunk&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Sinking&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To sink&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Sink it&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;sunk&quot; as &quot;sinked&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people apply the regular verb rule (add &quot;-ed&quot;) to &quot;sink&quot;, but &quot;sink&quot; is an irregular verb. They might think &quot;sinked&quot; sounds logical, but it&apos;s incorrect.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;sink&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sink&quot; is an irregular verb. Its forms are: present &quot;sink&quot;, past &quot;sank&quot;, and past participle &quot;sunk&quot;. It doesn&apos;t follow the regular pattern of adding &quot;-ed&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sank&quot; and &quot;sunk&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sank&quot; is the simple past tense (e.g., &quot;The ship sank yesterday&quot;), while &quot;sunk&quot; is the past participle used with helping verbs (e.g., &quot;The ship has sunk&quot; or &quot;The ship was sunk&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;sunk&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sunk&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;sunk&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: descended, dropped, plunged, submerged, settled, and declined. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sink&quot; is irregular: &quot;sink-sank-sunk&quot;. Think of it like &quot;drink-drank-drunk&quot; - both follow the same pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SINK-SANK-SUNK&quot;. Or remember: &quot;When things go down, they get SUNK&quot; - the &quot;u&quot; in &quot;sunk&quot; reminds us it&apos;s underwater.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the base form of &quot;sunk&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sink&quot; is the base form (infinitive) of the verb. For example: &quot;I sink&quot; (present), &quot;I sank&quot; (past), &quot;I have sunk&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;sink&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sink&quot; comes from the Old English &quot;sincan&quot; meaning &quot;to become submerged, go under, subside,&quot; related to the idea of going down or descending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;sunk&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sunk&quot; can function as an adjective in phrases like &quot;sunk cost&quot; or &quot;sunk ship&quot;. It describes something that has already gone down or been lost.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;sunk&quot; and &quot;submerged&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sunk&quot; typically means to go down below the surface and stay there, while &quot;submerged&quot; means to put or go under water. &quot;Sunk&quot; implies a final state, while &quot;submerged&quot; can be temporary.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;sunk&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sunk&quot; can be used in various contexts: ships sinking, golf balls sinking into holes, foundations settling, costs being lost, and feelings of despair. It always refers to going down or being lost.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sunk&quot;</strong> is the correct past participle of &quot;sink&quot; and means &quot;to go down below the surface.&quot; 
          <br />
          <strong>&quot;Sinked&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SINK-SANK-SUNK&quot; and remember it&apos;s an irregular verb!</p>
        </div>
      </div>
    </div>
  )
}
