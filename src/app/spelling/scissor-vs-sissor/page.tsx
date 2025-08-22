import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scissor vs Sissor - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;scissor&quot; and &quot;sissor&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ScissorVsSissorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Scissor vs Sissor
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 rounded-2xl mb-10 border border-pink-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✂️</span>
            <span className="text-2xl font-bold text-pink-600">&quot;Scissor&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sissor&quot; is always incorrect - remember &quot;scissor&quot; has the &quot;c&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sissor</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Scissor</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-pink-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-pink-700 leading-relaxed">
                This is the proper spelling meaning &quot;to cut with scissors&quot; or &quot;single blade of scissors.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Scissor&quot; (Correct)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;to cut&quot;</li>
                <li>• Has &quot;c&quot; letter</li>
                <li>• Old French origin</li>
                <li>• Used as verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Sissor&quot; (Wrong)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Missing &quot;c&quot; letter</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Sissor&quot; is not a word</li>
                <li>• Missing letter &quot;c&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-pink-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;Scissor the paper.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;Scissor the fabric.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;Scissor the hair.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;Scissor through the material.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sissor the paper&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scissor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sissor the fabric&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scissor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sissor the hair&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scissor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sissor through the material&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;scissor&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">C Letter Rule</h3>
              <p className="text-pink-800">&quot;Scissor&quot; has &quot;c&quot; - think &quot;s-C-issor&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Cut</h3>
              <p className="text-rose-800">&quot;Scissor&quot; starts with &quot;sc&quot; like &quot;scissor cut&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Write It Out</h3>
              <p className="text-red-800">Practice writing &quot;scissor&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proofread</h3>
              <p className="text-blue-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Scissor the paper</strong> - cut paper with scissors</li>
                <li>• <strong>Scissor the fabric</strong> - cut fabric with scissors</li>
                <li>• <strong>Scissor the hair</strong> - cut hair with scissors</li>
                <li>• <strong>Scissor through</strong> - cut through material</li>
                <li>• <strong>Scissor off</strong> - cut off with scissors</li>
                <li>• <strong>Scissor up</strong> - cut up with scissors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;Scissor the paper&quot;</li>
                <li>• <strong>Present:</strong> &quot;I scissor&quot;</li>
                <li>• <strong>Past:</strong> &quot;I scissored&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Scissoring paper&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To scissor&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Scissor-like action&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Why do people misspell &quot;scissor&quot; as &quot;sissor&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people drop the &quot;c&quot; from &quot;scissor.&quot; Remember that &quot;scissor&quot; has a &quot;c&quot; and means &quot;to cut with scissors.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;sissor&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sissor&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What does &quot;scissor&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scissor&quot; is a verb meaning &quot;to cut with scissors&quot; or can refer to a single blade of scissors. It&apos;s the action of using scissors to cut something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;scissor&quot; has a &quot;c.&quot; Think &quot;s-C-issor&quot; - the &quot;c&quot; is near the beginning of the word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;scissor&quot; and &quot;scissors&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scissor&quot; is the verb meaning &quot;to cut with scissors&quot; or a single blade, while &quot;scissors&quot; is the noun referring to the complete cutting tool with two blades.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;scissor&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;scissor&quot; can be used as a noun to refer to a single blade of scissors, though it&apos;s more commonly used as a verb meaning &quot;to cut with scissors.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: scissors (noun), scissoring (gerund), scissor-like (adjective), scissor-cut (compound adjective), and scissored (past tense).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;scissor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scissor&quot; comes from the Old French &quot;cisoires&quot; meaning &quot;scissors.&quot; It entered English in the 14th century and refers to the cutting action or single blade.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How is &quot;scissor&quot; used in sports?</h3>
              <p className="text-lg text-gray-700">A: In sports like swimming, &quot;scissor kick&quot; refers to a kicking motion that resembles the opening and closing of scissors, using the legs in a scissor-like action.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the difference between &quot;scissor&quot; and &quot;cut&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Scissor&quot; specifically means to cut using scissors, while &quot;cut&quot; is a general term for any type of cutting action using various tools or methods.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Scissor&quot;</strong> has a &quot;c&quot; and means &quot;to cut with scissors.&quot;
          <br />
          <strong>&quot;Sissor&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;s-C-issor&quot; - remember the &quot;c&quot;!</p>
        </div>
      </div>
    </div>
  )
}
