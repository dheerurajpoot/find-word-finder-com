import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Split vs Splitted - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;split&quot; and &quot;splitted&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SplitVsSplittedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Split vs Splitted
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✂️</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Split&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Splitted&quot; is always incorrect - remember that &quot;split&quot; is the same in all forms!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Splitted</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Split</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;to divide or separate&quot; - same form for all tenses.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Split&quot; (Verb/Noun)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Same form for all tenses</li>
                <li>• Present: split</li>
                <li>• Past: split</li>
                <li>• Past participle: split</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Irregular Verb Rule</h3>
              <ul className="text-green-800 space-y-2">
                <li>• No change in form</li>
                <li>• Similar to &quot;cut&quot;</li>
                <li>• Similar to &quot;put&quot;</li>
                <li>• Similar to &quot;hit&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Common Confusion</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• People add &quot;ed&quot;</li>
                <li>• Think it&apos;s regular</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember pattern</li>
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
            <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;I <strong>split</strong> the wood yesterday.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;She has <strong>split</strong> the bill with me.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The group <strong>split</strong> into two teams.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;They had <strong>split</strong> the profits equally.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>splitted</strong> the wood yesterday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;split&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>splitted</strong> the bill&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;split&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The group <strong>splitted</strong> into two&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;split&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They had <strong>splitted</strong> the profits&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;split&quot;</p>
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
              <div className="text-4xl mb-3">✂️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">No Change Rule</h3>
              <p className="text-yellow-800">&quot;Split&quot; stays the same in all forms</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Think Simple</h3>
              <p className="text-lime-800">Split = split = split (no change)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;split&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Proofread</h3>
              <p className="text-emerald-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Split second</strong> - very brief moment</li>
                <li>• <strong>Split decision</strong> - divided opinion</li>
                <li>• <strong>Split personality</strong> - multiple personas</li>
                <li>• <strong>Split ends</strong> - damaged hair</li>
                <li>• <strong>Split level</strong> - house design</li>
                <li>• <strong>Split screen</strong> - divided display</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I split the wood&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I split the wood&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have split the wood&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Splitting wood is hard&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To split the wood&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;The splitting axe&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people misspell &quot;split&quot; as &quot;splitted&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from applying regular verb rules to an irregular verb. Many English verbs add &quot;-ed&quot; for past forms, but &quot;split&quot; is irregular and keeps the same form in all tenses.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;split&quot; and &quot;separate&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both mean to divide, &quot;split&quot; often implies dividing into equal or similar parts, while &quot;separate&quot; can mean moving things apart or keeping them distinct. &quot;Split&quot; is more commonly used for physical division.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Are there other verbs like &quot;split&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English verbs are irregular and keep the same form: cut-cut-cut, put-put-put, hit-hit-hit, cost-cost-cost, and hurt-hurt-hurt all follow the same pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;split&quot; be used as both a verb and noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Split&quot; can be a verb meaning &quot;to divide&quot; and a noun meaning &quot;a division&quot; or &quot;a crack.&quot; For example: &quot;I split the log&quot; (verb) and &quot;There&apos;s a split in the wood&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;split&quot; and &quot;divide&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Split&quot; often implies a more forceful or natural division, while &quot;divide&quot; suggests a more deliberate or mathematical separation. &quot;Split&quot; is also more commonly used in everyday language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;split&quot; is an irregular verb that doesn&apos;t change: split-split-split. Think of it as a simple word that stays the same, just like &quot;cut&quot; or &quot;put.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;split&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: divide, separate, break, crack, cleave, sever, bisect, and partition. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;splitted&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;splitted&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;split&quot; for all tenses of the verb.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Split&quot;</strong> is the same in all forms - present, past, and past participle. 
          <br />
          <strong>&quot;Splitted&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPLIT = SPLIT = SPLIT (no change needed)&quot;</p>
        </div>
      </div>
    </div>
  )
}
