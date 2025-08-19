import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suitable vs Sutible - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suitable&quot; and &quot;sutible&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuitableVsSutiblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Suitable vs Sutible
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Suitable&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sutible&quot; is always incorrect - remember the &quot;i&quot; in &quot;suitable&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sutible</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suitable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;appropriate or fitting for a particular purpose.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suitable&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;i&quot; before &quot;able&quot;</li>
                <li>• Follows &quot;suit&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Common Error</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;Sutible&quot; is wrong</li>
                <li>• Missing &quot;i&quot; before &quot;able&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Aid</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SUIT + ABLE&quot;</li>
                <li>• &quot;suit&quot; like &quot;fit&quot;</li>
                <li>• &quot;-able&quot; for possibility</li>
                <li>• Related to &quot;suit&quot;</li>
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
                <p className="text-lg text-green-800">&quot;This dress is <strong>suitable</strong> for the party.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He is <strong>suitable</strong> for the job.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The venue is <strong>suitable</strong> for weddings.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This is a <strong>suitable</strong> solution.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This dress is <strong>sutible</strong> for the party.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suitable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is <strong>sutible</strong> for the job.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suitable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The venue is <strong>sutible</strong> for weddings.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suitable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a <strong>sutible</strong> solution.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suitable&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">I Before Able Rule</h3>
              <p className="text-green-800">&quot;Suitable&quot; has &quot;i&quot; before &quot;able&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Think Suit</h3>
              <p className="text-violet-800">&quot;Suitable&quot; like &quot;suit&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Pattern Recognition</h3>
              <p className="text-purple-800">Words ending with &quot;-able&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Break It Down</h3>
              <p className="text-fuchsia-800">SUIT + ABLE = Suitable</p>
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
                <li>• <strong>Suitable for</strong> - appropriate for</li>
                <li>• <strong>Suitable candidate</strong> - appropriate candidate</li>
                <li>• <strong>Suitable location</strong> - appropriate location</li>
                <li>• <strong>Suitable time</strong> - appropriate time</li>
                <li>• <strong>Suitable option</strong> - appropriate option</li>
                <li>• <strong>Suitable alternative</strong> - appropriate alternative</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The suitable choice&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;This is suitable&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suitable candidates apply&quot;</li>
                <li>• <strong>Object:</strong> &quot;I found a suitable one&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More suitable&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most suitable&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suitable&quot; as &quot;sutible&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suitable&quot; has an &quot;i&quot; before &quot;able&quot;. They might accidentally drop the &quot;i&quot; when typing quickly or think it only needs &quot;able&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Is &quot;suitable&quot; related to &quot;suit&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suitable&quot; comes from the word &quot;suit&quot; meaning &quot;to fit&quot; or &quot;to be appropriate.&quot; Think of it as &quot;able to suit&quot; - something that can fit or be appropriate.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;suitable&quot; and &quot;appropriate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suitable&quot; means fitting or right for a particular purpose, while &quot;appropriate&quot; means suitable or proper in the circumstances. Both are very similar, with &quot;appropriate&quot; being slightly more formal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can &quot;suitable&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suitable&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suitable&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: appropriate, fitting, proper, right, apt, and adequate. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suit&quot; and remember that &quot;suitable&quot; has an &quot;i&quot; before &quot;able&quot;. The &quot;i&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUITABLE has I before ABLE&quot;. Or remember: &quot;SUIT + ABLE&quot; breaks down the word into manageable parts with the &quot;i&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;suitable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suitable&quot; is an adjective derived from the noun &quot;suit&quot;. For example: &quot;This is a suit&quot; (noun), &quot;This is suitable&quot; (adjective).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;suitable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suitable&quot; comes from the word &quot;suit&quot; meaning &quot;to fit&quot; or &quot;to be appropriate,&quot; combined with the suffix &quot;-able&quot; meaning &quot;capable of.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suitable&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suitable&quot; is only an adjective. The noun form would be &quot;suitability&quot;. For example: &quot;This is suitable&quot; (adjective), &quot;The suitability was questioned&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;suitable&quot; and &quot;adequate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suitable&quot; means appropriate or fitting for a purpose, while &quot;adequate&quot; means sufficient or satisfactory. Something can be adequate without being suitable, and vice versa.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;suitable&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suitable&quot; can be used in various contexts: describing people (suitable candidate), places (suitable venue), times (suitable time), and things (suitable solution). It always refers to appropriateness.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suitable&quot;</strong> has an &quot;i&quot; before &quot;able&quot; and means &quot;appropriate or fitting for a particular purpose.&quot; 
          <br />
          <strong>&quot;Sutible&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUIT + ABLE&quot; and remember the &quot;i&quot; before &quot;able&quot;!</p>
        </div>
      </div>
    </div>
  )
}
