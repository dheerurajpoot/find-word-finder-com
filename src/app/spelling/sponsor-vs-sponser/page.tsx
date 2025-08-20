import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sponsor vs Sponser - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sponsor&quot; and &quot;sponser&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SponsorVsSponserPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Sponsor vs Sponser
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💼</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Sponsor&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sponser&quot; is always incorrect - remember the &quot;or&quot; ending in &quot;sponsor&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sponser</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Sponsor</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person or organization that provides financial support.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sponsor&quot; (Noun/Verb)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Ends with &quot;or&quot;</li>
                <li>• Means &quot;supporter&quot;</li>
                <li>• Financial backer</li>
                <li>• Event supporter</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Suffix Rule</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;or&quot; = person who does</li>
                <li>• Common noun ending</li>
                <li>• Similar to &quot;actor&quot;</li>
                <li>• Indicates profession</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Confusion</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• People forget &quot;or&quot;</li>
                <li>• Similar to &quot;sponsor&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember suffix</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The company is a major <strong>sponsor</strong> of the event.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;She agreed to <strong>sponsor</strong> the charity fundraiser.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The <strong>sponsor</strong> provided funding for the project.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;They need a <strong>sponsor</strong> for the sports team.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company is a major <strong>sponser</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sponsor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She agreed to <strong>sponser</strong> the charity&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sponsor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sponser</strong> provided funding&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sponsor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They need a <strong>sponser</strong> for the team&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sponsor&quot;</p>
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
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">OR Rule</h3>
              <p className="text-yellow-800">&quot;Sponsor&quot; ends with &quot;or&quot; like &quot;actor&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Person</h3>
              <p className="text-blue-800">Sponsor = person who sponsors = &quot;or&quot; ending</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;sponsor&quot; to build muscle memory</p>
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
                <li>• <strong>Corporate sponsor</strong> - business supporter</li>
                <li>• <strong>Event sponsor</strong> - event supporter</li>
                <li>• <strong>Team sponsor</strong> - team supporter</li>
                <li>• <strong>Program sponsor</strong> - program supporter</li>
                <li>• <strong>Research sponsor</strong> - research supporter</li>
                <li>• <strong>Scholarship sponsor</strong> - scholarship supporter</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The sponsor provided funds&quot;</li>
                <li>• <strong>Verb:</strong> &quot;They sponsor the event&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Sponsoring events is expensive&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To sponsor a cause&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;They sponsored the team&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;The sponsoring company&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;sponsor&quot; as &quot;sponser&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;or&quot; suffix, which is common in English nouns that refer to people who perform actions. Some people may also be influenced by similar words or unclear pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the meaning of the &quot;or&quot; suffix?</h3>
              <p className="text-lg text-gray-700">A: The &quot;or&quot; suffix means &quot;a person who does something&quot; or &quot;one who performs an action.&quot; So &quot;sponsor&quot; means &quot;a person who sponsors&quot; or &quot;one who provides support.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Are there other words that end with &quot;or&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English nouns end with &quot;or&quot;: actor, doctor, professor, director, editor, inventor, conductor, and supervisor are just a few examples.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;sponsor&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sponsor&quot; can be a noun meaning &quot;a person or organization that provides support&quot; and a verb meaning &quot;to provide support or funding for.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;sponsor&quot; and &quot;donor&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;sponsor&quot; typically provides ongoing support and may receive recognition or benefits in return, while a &quot;donor&quot; usually gives a one-time gift without expecting anything in return.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sponsor&quot; as &quot;spons&quot; + &quot;or.&quot; The &quot;or&quot; ending is common in English nouns that refer to people, so if you remember that pattern, you&apos;ll spell it correctly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;sponsor&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: backer, supporter, patron, benefactor, underwriter, financier, promoter, and advocate. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;sponser&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sponser&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;sponsor&quot; with the &quot;or&quot; ending.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sponsor&quot;</strong> has the &quot;or&quot; suffix and means &quot;a person who provides support.&quot; 
          <br />
          <strong>&quot;Sponser&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPONSOR = person who sponsors = OR ending&quot;</p>
        </div>
      </div>
    </div>
  )
}
