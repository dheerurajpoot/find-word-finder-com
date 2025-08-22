import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Saving vs Saveing - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;saving&quot; and &quot;saveing&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SavingVsSaveingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Saving vs Saveing
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
            <span className="text-2xl mr-3">💰</span>
            <span className="text-2xl font-bold text-green-600">&quot;Saving&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Saveing&quot; is always incorrect - remember the &quot;ing&quot; ending in &quot;saving&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Saveing</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common phonetic mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Saving</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;present participle of save.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Saving&quot; (Gerund)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Present participle</li>
                <li>• Ends with &quot;ing&quot;</li>
                <li>• From &quot;save&quot; + &quot;ing&quot;</li>
                <li>• Used as noun or verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Saveing&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Extra &quot;e&quot;</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Save&quot; + &quot;ing&quot;</li>
                <li>• Common suffix pattern</li>
                <li>• Related to &quot;save&quot;</li>
                <li>• Standard English ending</li>
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
                <p className="text-lg text-green-800">&quot;I am <strong>saving</strong> money for vacation.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She is <strong>saving</strong> for a new car.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We are <strong>saving</strong> energy at home.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The bank offers good <strong>saving</strong> rates.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I am <strong>saveing</strong> money for vacation&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saving&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is <strong>saveing</strong> for a new car&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saving&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We are <strong>saveing</strong> energy at home&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saving&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bank offers good <strong>saveing</strong> rates&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;saving&quot;</p>
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
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ING Ending</h3>
              <p className="text-yellow-800">Think of &quot;ing&quot; like &quot;running&quot; and &quot;walking&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Save + ing</h3>
              <p className="text-blue-800">Remember: &quot;save&quot; + &quot;ing&quot; = &quot;saving&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;saving&quot; to build muscle memory</p>
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
                <li>• <strong>Keep saving</strong> - continue to save</li>
                <li>• <strong>Start saving</strong> - begin to save</li>
                <li>• <strong>Stop saving</strong> - cease to save</li>
                <li>• <strong>Keep on saving</strong> - persist in saving</li>
                <li>• <strong>Go on saving</strong> - continue saving</li>
                <li>• <strong>Finish saving</strong> - complete saving</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present participle:</strong> &quot;I am saving money&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Saving is important&quot;</li>
                <li>• <strong>Noun:</strong> &quot;That&apos;s a good saving&quot;</li>
                <li>• <strong>Subject:</strong> &quot;What you&apos;re saving matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;I saw what you&apos;re saving&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;The goal, saving money&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;saving&quot; as &quot;saveing&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People often add an extra &quot;e&quot; when adding the &quot;ing&quot; suffix, possibly influenced by words like &quot;having&quot; or &quot;giving.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;saving&quot; related to the word &quot;save&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Saving&quot; is the present participle and gerund form of &quot;save.&quot; &quot;Save&quot; is the base form, while &quot;saving&quot; is used for ongoing actions or as a noun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;saving&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Saving&quot; comes from the Old English word &quot;save&quot; meaning &quot;to rescue&quot; or &quot;to preserve,&quot; combined with the &quot;-ing&quot; suffix to form the present participle and gerund.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;saving&quot; be used in both formal and informal contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Saving&quot; is appropriate for all contexts, from casual conversation to formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;saving&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: preserving, conserving, storing, keeping, hoarding, and accumulating.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;saving&quot; as &quot;save&quot; + &quot;ing.&quot; Don&apos;t add an extra &quot;e&quot; - it&apos;s just &quot;saving.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;saving&quot; always about money?</h3>
              <p className="text-lg text-gray-700">A: While &quot;saving&quot; often refers to money, it can also refer to other resources like time, energy, water, or any valuable commodity that can be preserved or accumulated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;saving&quot; and &quot;saved&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Saving&quot; is the present participle (ongoing action), while &quot;saved&quot; is the past tense. &quot;I am saving&quot; means I am saving now, &quot;I saved&quot; means I saved in the past.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there any other words that follow the same pattern as &quot;saving&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many verbs follow the same pattern: &quot;have&quot; becomes &quot;having,&quot; &quot;give&quot; becomes &quot;giving,&quot; &quot;live&quot; becomes &quot;living.&quot; All use the &quot;ing&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How important is correct spelling in financial communication?</h3>
              <p className="text-lg text-gray-700">A: Very important! Correct spelling demonstrates attention to detail and professionalism. Misspelling &quot;saving&quot; as &quot;saveing&quot; can make your financial writing appear less credible.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Saving&quot;</strong> ends with &quot;ing&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Saveing&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAVING = SAVE + ing ending&quot;</p>
        </div>
      </div>
    </div>
  )
}
