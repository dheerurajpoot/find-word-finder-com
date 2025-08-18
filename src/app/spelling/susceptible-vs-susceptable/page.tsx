import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Susceptible vs Susceptable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;susceptible&quot; and &quot;susceptable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SusceptibleVsSusceptablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Susceptible vs Susceptable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Susceptible&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Susceptable&quot; is always incorrect - remember the &quot;ible&quot; ending in &quot;susceptible&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Susceptable</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Susceptible</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;easily affected or influenced.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Susceptible&quot; (Adjective)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;easily affected&quot;</li>
                <li>• Has &quot;cep&quot; in the middle</li>
                <li>• Ends with &quot;-ible&quot;</li>
                <li>• Related to &quot;accept&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Error</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Susceptable&quot; is wrong</li>
                <li>• Wrong ending &quot;-able&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common confusion</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Memory Aid</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Think &quot;SUS + CEP + TIBLE&quot;</li>
                <li>• &quot;ible&quot; like &quot;possible&quot;</li>
                <li>• &quot;-ible&quot; ending pattern</li>
                <li>• Related to &quot;receptible&quot;</li>
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
                <p className="text-lg text-green-800">&quot;Children are <strong>susceptible</strong> to colds.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He&apos;s <strong>susceptible</strong> to flattery.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The area is <strong>susceptible</strong> to flooding.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She&apos;s <strong>susceptible</strong> to suggestion.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Children are <strong>susceptable</strong> to colds&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He&apos;s <strong>susceptable</strong> to flattery&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The area is <strong>susceptable</strong> to flooding&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She&apos;s <strong>susceptable</strong> to suggestion&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">IBLE Rule</h3>
              <p className="text-yellow-800">&quot;Susceptible&quot; ends with &quot;ible&quot; like &quot;possible&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Possible</h3>
              <p className="text-blue-800">&quot;Susceptible&quot; has &quot;ible&quot; like &quot;possible&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words ending in &quot;-ible&quot; are adjectives</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUS + CEP + TIBLE = Susceptible</p>
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
                <li>• <strong>Susceptible to disease</strong> - easily infected</li>
                <li>• <strong>Susceptible to influence</strong> - easily persuaded</li>
                <li>• <strong>Susceptible to damage</strong> - easily harmed</li>
                <li>• <strong>Susceptible to change</strong> - easily modified</li>
                <li>• <strong>Susceptible to suggestion</strong> - easily convinced</li>
                <li>• <strong>Susceptible to pressure</strong> - easily influenced</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;A susceptible person&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;That looks susceptible&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More susceptible than&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most susceptible&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Susceptibly&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Susceptibility&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;susceptible&quot; as &quot;susceptable&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because many English words end with &quot;-able&quot; (like &quot;comfortable&quot;, &quot;reliable&quot;), so people assume &quot;susceptible&quot; should follow the same pattern. However, the correct ending is &quot;-ible.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;susceptible&quot; related to &quot;accept&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words come from the Latin &quot;capere&quot; meaning &quot;to take&quot; or &quot;to seize.&quot; &quot;Accept&quot; means to take willingly, while &quot;susceptible&quot; means easily taken or affected.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;-ible&quot; and &quot;-able&quot; endings?</h3>
              <p className="text-lg text-gray-700">A: Both &quot;-ible&quot; and &quot;-able&quot; create adjectives meaning &quot;capable of&quot; or &quot;able to be.&quot; The choice between them is often based on etymology - &quot;-ible&quot; typically comes from Latin, while &quot;-able&quot; can come from either Latin or Germanic roots.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;susceptible&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Susceptible&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: vulnerable, prone, liable, subject, open, receptive, and impressionable. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;possible&quot; (which has the same &quot;ible&quot; ending) and remember that &quot;susceptible&quot; follows the same pattern. The &quot;ible&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When you&apos;re SUSCEPTIBLE, it&apos;s POSSIBLE to affect you&quot; - both words have the &quot;ible&quot; ending. Or remember: &quot;SUS + CEP + TIBLE&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the noun form of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: The noun form is &quot;susceptibility.&quot; For example: &quot;His susceptibility to colds&quot; or &quot;The susceptibility of the material.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Susceptible&quot;</strong> ends with &quot;-ible&quot; and means &quot;easily affected.&quot; 
          <br />
          <strong>&quot;Susceptable&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + CEP + TIBLE&quot; and remember the &quot;ible&quot; ending like in &quot;possible&quot;!</p>
        </div>
      </div>
    </div>
  )
}
