import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Separated vs Seperated - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;separated&quot; and &quot;seperated&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeparatedVsSeperatedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Separated vs Seperated
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Separated&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Seperated&quot; is always incorrect - remember the &quot;a&quot; in &quot;separated&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Seperated</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Separated</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;divided&quot; or &quot;set apart.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Separate&quot; (Root Word)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;apart&quot; or &quot;divided&quot;</li>
                <li>• Contains &quot;a&quot; after &quot;p&quot;</li>
                <li>• Latin origin: &quot;separatus&quot;</li>
                <li>• Used as verb and adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Separated&quot; (Past Tense)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Past tense of &quot;separate&quot;</li>
                <li>• Formed by adding &quot;-ed&quot;</li>
                <li>• Keeps the &quot;a&quot; from root</li>
                <li>• Describes completed action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Mistake</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• &quot;Seperated&quot; is wrong</li>
                <li>• Missing the &quot;a&quot;</li>
                <li>• Phonetic confusion</li>
                <li>• Very common error</li>
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
            <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The couple <strong>separated</strong> last year.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The ingredients were <strong>separated</strong> into bowls.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The twins were <strong>separated</strong> at birth.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The files were <strong>separated</strong> by category.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The couple <strong>seperated</strong> last year&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separated&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ingredients were <strong>seperated</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separated&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The twins were <strong>seperated</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separated&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The files were <strong>seperated</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;separated&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">A After P Rule</h3>
              <p className="text-yellow-800">&quot;Separate&quot; has &quot;a&quot; after &quot;p&quot; - think &quot;sep-A-rate&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Apart</h3>
              <p className="text-blue-800">&quot;Separate&quot; = apart, &quot;Seperate&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;separated&quot; to build muscle memory</p>
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
                <li>• <strong>Separated at birth</strong> - twins born apart</li>
                <li>• <strong>Separated by distance</strong> - kept apart by space</li>
                <li>• <strong>Separated by time</strong> - divided chronologically</li>
                <li>• <strong>Separated by category</strong> - organized by type</li>
                <li>• <strong>Separated by function</strong> - divided by purpose</li>
                <li>• <strong>Separated by priority</strong> - organized by importance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;They separated last month&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The items were separated&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Separated families&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;The mixture was separated&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;They have separated&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Separating the components&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;separated&quot; as &quot;seperated&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;a&quot; sound in &quot;separate&quot; can be subtle when spoken quickly. Many people rely on phonetic spelling and forget that &quot;separate&quot; has an &quot;a&quot; after the &quot;p.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;seperated&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;seperated&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between &quot;separated&quot; and &quot;separate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Separate&quot; is the base form (verb/adjective), while &quot;separated&quot; is the past tense and past participle form. &quot;Separate&quot; can also be used as an adjective meaning &quot;apart&quot; or &quot;divided.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;separated&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Separated&quot; can function as an adjective, as in &quot;separated families&quot; or &quot;separated components.&quot; It describes the state of being apart or divided.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;separated&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: divided, parted, split, detached, isolated, disconnected, segregated, and divided up.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How do I use &quot;separated&quot; in a sentence?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;separated&quot; as a past tense verb: &quot;They separated last year.&quot; Or as a past participle: &quot;The items were separated by color.&quot; Or as an adjective: &quot;The separated twins.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a noun form of &quot;separated&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes, the noun form is &quot;separation.&quot; Example: &quot;The separation of the couple was difficult.&quot; You can also use &quot;separating&quot; as a gerund: &quot;Separating the components took time.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;separated&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Separated&quot; comes from the Latin word &quot;separatus&quot; meaning &quot;set apart.&quot; The English word &quot;separate&quot; was formed from this Latin root, and &quot;separated&quot; is the past tense form.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Separated&quot;</strong> has an &quot;a&quot; after the &quot;p&quot; and means &quot;divided&quot; or &quot;set apart.&quot; 
          <br />
          <strong>&quot;Seperated&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sep-A-rate&quot; - emphasize the &quot;A&quot; sound!</p>
        </div>
      </div>
    </div>
  )
}
