import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spotted vs Spoted - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spotted&quot; and &quot;spoted&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpottedVsSpotedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Spotted vs Spoted
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
            <span className="text-2xl mr-3">🔍</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Spotted&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spoted&quot; is always incorrect - remember the double &quot;t&quot; in &quot;spotted&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spoted</h3>
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Spotted</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;marked with spots&quot; or &quot;seen or noticed.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Spotted&quot; (Verb/Adjective)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Past tense of &quot;spot&quot;</li>
                <li>• Has double &quot;t&quot;</li>
                <li>• Means &quot;marked with spots&quot;</li>
                <li>• Also means &quot;noticed&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Spelling Rule</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Double consonant after short vowel</li>
                <li>• &quot;Spot&quot; + &quot;ed&quot;</li>
                <li>• Similar to &quot;stopped&quot;</li>
                <li>• Prevents vowel from being long</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Common Confusion</h3>
              <ul className="text-red-800 space-y-2">
                <li>• People forget double &quot;t&quot;</li>
                <li>• Similar to &quot;noted&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember rule</li>
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
                <p className="text-lg text-amber-800">&quot;I <strong>spotted</strong> a rare bird in the garden.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The leopard has <strong>spotted</strong> fur.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;She <strong>spotted</strong> the error in the report.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The police <strong>spotted</strong> the suspect.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>spoted</strong> a rare bird&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spotted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The leopard has <strong>spoted</strong> fur&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spotted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>spoted</strong> the error&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spotted&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The police <strong>spoted</strong> the suspect&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spotted&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double T Rule</h3>
              <p className="text-yellow-800">&quot;Spot&quot; + &quot;ed&quot; = &quot;spotted&quot; (double the t)</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Spots</h3>
              <p className="text-amber-800">Spots need two &quot;t&quot;s to be complete</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;spotted&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Proofread</h3>
              <p className="text-red-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Spotted fever</strong> - medical condition</li>
                <li>• <strong>Spotted owl</strong> - bird species</li>
                <li>• <strong>Spotted lanternfly</strong> - insect</li>
                <li>• <strong>Spotted hyena</strong> - animal</li>
                <li>• <strong>Spotted dick</strong> - British dessert</li>
                <li>• <strong>Spotted pattern</strong> - design style</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense verb:</strong> &quot;I spotted the error&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The spotted dog&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The error was spotted&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Spotting errors is important&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To spot the problem&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I spot the issue&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;spotted&quot; as &quot;spoted&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the double consonant rule. When adding &quot;-ed&quot; to words ending in a consonant-vowel-consonant pattern, you double the final consonant.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the spelling rule for &quot;spotted&quot;?</h3>
              <p className="text-lg text-gray-700">A: The rule is: when a word ends in consonant-vowel-consonant (CVC) and you add a suffix beginning with a vowel (like &quot;-ed&quot;), you double the final consonant. So &quot;spot&quot; becomes &quot;spotted.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there other words that follow this same pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many words follow this pattern: stopped, planned, referred, committed, permitted, submitted, and controlled all double their final consonant when adding &quot;-ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spotted&quot; be used as both a verb and adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spotted&quot; can be the past tense of the verb &quot;spot&quot; (meaning to see or notice) and also an adjective describing something marked with spots.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;spotted&quot; and &quot;speckled&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spotted&quot; refers to distinct, usually round marks, while &quot;speckled&quot; refers to small, scattered dots or specks. A leopard has spots, while a robin&apos;s egg is speckled.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I remember when to double consonants?</h3>
              <p className="text-lg text-gray-700">A: Remember the CVC rule: Consonant-Vowel-Consonant + vowel suffix = double the final consonant. Think: &quot;If it ends CVC and you add a vowel, double up!&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;spoted&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spoted&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spotted&quot; with two &quot;t&quot;s.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;spotted&quot;?</h3>
              <p className="text-lg text-gray-700">A: As a verb: noticed, observed, detected, identified, discovered, caught sight of. As an adjective: dotted, speckled, mottled, dappled, flecked, and marked.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spotted&quot;</strong> has two &quot;t&quot;s and follows the CVC doubling rule. 
          <br />
          <strong>&quot;Spoted&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPOT + ED = SPOTTED (double the T)&quot;</p>
        </div>
      </div>
    </div>
  )
}
