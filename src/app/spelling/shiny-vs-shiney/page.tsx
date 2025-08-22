import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Shiny vs Shiney - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;shiny&quot; and &quot;shiney&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ShinyVsShineyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Shiny vs Shiney
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Shiny&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Shiney&quot; is always incorrect - remember &quot;shiny&quot; has &quot;y&quot; not &quot;ey&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Shiney</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Shiny</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;bright and gleaming&quot; or &quot;reflecting light.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Shiny&quot; (Correct)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;bright and gleaming&quot;</li>
                <li>• Ends with &quot;y&quot;</li>
                <li>• From &quot;shine&quot; + &quot;y&quot;</li>
                <li>• Used as adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Shiney&quot; (Wrong)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Wrong &quot;ey&quot; ending</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• &quot;Shiney&quot; is not a word</li>
                <li>• Wrong suffix pattern</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word formation</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The <strong>shiny</strong> diamond ring.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;His <strong>shiny</strong> shoes.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The <strong>shiny</strong> chrome finish.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;A <strong>shiny</strong> black car.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>shiney</strong> diamond ring&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shiny&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>shiney</strong> shoes&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shiny&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>shiney</strong> chrome finish&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shiny&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A <strong>shiney</strong> black car&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shiny&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Y Ending Rule</h3>
              <p className="text-yellow-800">&quot;Shiny&quot; ends with &quot;y&quot; - think &quot;shine-Y&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Shine</h3>
              <p className="text-blue-800">&quot;Shine&quot; + &quot;y&quot; = &quot;shiny&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;shiny&quot; to build muscle memory</p>
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
                <li>• <strong>Shiny new</strong> - brand new and gleaming</li>
                <li>• <strong>Shiny happy people</strong> - cheerful individuals</li>
                <li>• <strong>Shiny object syndrome</strong> - distraction by novelty</li>
                <li>• <strong>Shiny penny</strong> - new and attractive</li>
                <li>• <strong>Shiny surface</strong> - reflective exterior</li>
                <li>• <strong>Shiny finish</strong> - glossy coating</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;Shiny object&quot;</li>
                <li>• <strong>Predicative:</strong> &quot;It is shiny&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More shiny&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most shiny&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Shinily&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Shininess&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;shiny&quot; as &quot;shiney&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people confuse the &quot;-y&quot; suffix with &quot;-ey.&quot; Remember that &quot;shiny&quot; comes from &quot;shine&quot; + &quot;-y&quot; to form an adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;shiney&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shiney&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are the different meanings of &quot;shiny&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shiny&quot; can mean: reflecting light, bright and gleaming, polished and smooth, new and attractive, or metaphorically, happy and cheerful.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;shiny&quot; comes from &quot;shine.&quot; Think &quot;To SHINE makes something SHINY&quot; - both use &quot;shine&quot; as the base.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;shiny&quot; and &quot;glossy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shiny&quot; refers to reflecting light, while &quot;glossy&quot; specifically refers to a smooth, polished surface that reflects light evenly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;shiny&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shiny&quot; is often used metaphorically: &quot;shiny new toy,&quot; &quot;shiny happy people,&quot; or &quot;shiny object syndrome&quot; to describe novelty or attractiveness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: shine (verb), shinily (adverb), shininess (noun), and shined/shone (past tense of shine).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the origin of the word &quot;shiny&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shiny&quot; comes from the Old English &quot;scīne&quot; meaning &quot;bright&quot; + the suffix &quot;-y.&quot; It entered English in the 14th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;shiny&quot; used in technology?</h3>
              <p className="text-lg text-gray-700">A: In technology, &quot;shiny&quot; often refers to new, attractive features or interfaces that distract from core functionality - hence the term &quot;shiny object syndrome.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Shiny&quot;</strong> ends with &quot;y&quot; and means &quot;bright and gleaming.&quot; 
          <br />
          <strong>&quot;Shiney&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;shine-Y&quot; - remember the &quot;y&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
