import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Squirrel vs Squirrell - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;squirrel&quot; and &quot;squirrell&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SquirrelVsSquirrellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 bg-clip-text text-transparent">
          Squirrel vs Squirrell
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
            <span className="text-2xl mr-3">🐿️</span>
            <span className="text-2xl font-bold text-amber-700">&quot;Squirrel&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Squirrell&quot; is always incorrect - remember the single &quot;l&quot; in &quot;squirrel&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Squirrell</h3>
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Squirrel</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;a small rodent with a bushy tail.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Squir&quot; (Root)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;shadow&quot; or &quot;tail&quot;</li>
                <li>• Related to animal</li>
                <li>• Greek origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Rel&quot; (Ending)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Single &quot;l&quot; only</li>
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;L&quot; (Single)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Forms the ending sound</li>
                <li>• Means &quot;animal&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;squirrel&quot;</li>
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
                <p className="text-lg text-amber-800">&quot;The <strong>squirrel</strong> climbed up the tree.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;I saw a <strong>squirrel</strong> in the park.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The <strong>squirrel</strong> stored nuts for winter.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;A <strong>squirrel</strong> ran across the lawn.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>squirrell</strong> climbed up the tree&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squirrel&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I saw a <strong>squirrell</strong> in the park&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squirrel&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>squirrell</strong> stored nuts for winter&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squirrel&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A <strong>squirrell</strong> ran across the lawn&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;squirrel&quot;</p>
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
              <div className="text-4xl mb-3">🐿️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Animal</h3>
              <p className="text-yellow-800">&quot;Squirrel&quot; is a small animal</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Single L Rule</h3>
              <p className="text-blue-800">Remember only one &quot;l&quot; in &quot;squirrel&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;squirrel&quot; to build muscle memory</p>
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
                <li>• <strong>Gray squirrel</strong> - common type</li>
                <li>• <strong>Red squirrel</strong> - another type</li>
                <li>• <strong>Flying squirrel</strong> - gliding type</li>
                <li>• <strong>Ground squirrel</strong> - burrowing type</li>
                <li>• <strong>Squirrel away</strong> - hide something</li>
                <li>• <strong>Squirrel cage</strong> - exercise wheel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;the squirrel&quot;</li>
                <li>• <strong>Subject:</strong> &quot;The squirrel runs&quot;</li>
                <li>• <strong>Object:</strong> &quot;I saw the squirrel&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;squirrel&apos;s nest&quot;</li>
                <li>• <strong>Plural:</strong> &quot;multiple squirrels&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;squirrel behavior&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people confuse &quot;squirrel&quot; and &quot;squirrell&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;parallel&quot; or &quot;tunnel.&quot; However, &quot;squirrel&quot; follows the pattern of &quot;squir&quot; + &quot;rel&quot; with a single &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;squirrel&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Squirrel&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English noun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;squirrel&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Squirrel&quot; comes from Greek &quot;skiouros&quot; meaning &quot;shadow-tailed&quot; + the English suffix &quot;-el.&quot; It was first used in English in the 14th century to describe the small rodent.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;squirrel&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;chipmunk&quot; or &quot;groundhog.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;squir&quot; + &quot;rel.&quot; Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;squirrel&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: rodent, chipmunk, groundhog, and marmot.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;squirrel&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing the animal, &quot;squirrel&quot; can be used in various contexts like expressions (squirrel away), objects (squirrel cage), and behaviors (squirrel-like movements).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;squirrel&quot; and &quot;chipmunk&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Squirrel&quot; refers to a larger rodent with a bushy tail, while &quot;chipmunk&quot; refers to a smaller striped rodent. &quot;Squirrel&quot; is a broader category that includes many species.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;squirrel&quot; always about the animal?</h3>
              <p className="text-lg text-gray-700">A: No! While often describing the animal, &quot;squirrel&quot; can also describe abstract concepts. For example, &quot;squirrel away&quot; means to hide something, and &quot;squirrel cage&quot; means an exercise wheel.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;squirrel&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;gray squirrel,&quot; &quot;red squirrel,&quot; &quot;flying squirrel,&quot; &quot;ground squirrel,&quot; &quot;squirrel away,&quot; and &quot;squirrel cage.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Squirrel&quot;</strong> is the correct spelling meaning &quot;a small rodent with a bushy tail.&quot; 
          <br />
          <strong>&quot;Squirrell&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SQUIR + REL = SQUIRREL&quot;</p>
        </div>
      </div>
    </div>
  )
}
