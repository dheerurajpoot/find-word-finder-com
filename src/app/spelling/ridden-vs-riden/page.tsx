import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ridden vs Riden - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;ridden&quot; and &quot;riden&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RiddenVsRidenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Ridden vs Riden
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Ridden&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Riden&quot; is always incorrect - remember to double the &quot;d&quot; and add &quot;en&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Riden</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the second &quot;d&quot; and is never acceptable in English. It&apos;s a common mistake.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Ridden</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;past participle of ride&quot; or &quot;having traveled on.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Ride&quot; (Base)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Present tense verb</li>
                <li>• Single &quot;d&quot; in middle</li>
                <li>• Must be included</li>
                <li>• Cannot be dropped</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Ridden&quot; (Complete)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Past participle form</li>
                <li>• Double &quot;d&quot; in middle</li>
                <li>• Contains &quot;en&quot; suffix</li>
                <li>• Used for past actions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Mistake</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• People drop second &quot;d&quot;</li>
                <li>• &quot;Riden&quot; is incomplete</li>
                <li>• Missing letter</li>
                <li>• Always double the &quot;d&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I have <strong>ridden</strong> a horse before.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She has <strong>ridden</strong> the bus to work.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They have <strong>ridden</strong> bicycles for years.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He has never <strong>ridden</strong> a motorcycle.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have <strong>riden</strong> a horse before&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridden&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>riden</strong> the bus to work&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridden&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They have <strong>riden</strong> bicycles for years&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridden&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has never <strong>riden</strong> a motorcycle&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;ridden&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double D Rule</h3>
              <p className="text-yellow-800">Use two &quot;d&quot;s not one</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Complete</h3>
              <p className="text-blue-800">Ridden = ride + den</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;ridden&quot; to build muscle memory</p>
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
                <li>• <strong>Have ridden</strong> - past experience</li>
                <li>• <strong>Had ridden</strong> - past perfect</li>
                <li>• <strong>Will have ridden</strong> - future perfect</li>
                <li>• <strong>Being ridden</strong> - passive voice</li>
                <li>• <strong>Having ridden</strong> - gerund form</li>
                <li>• <strong>Never ridden</strong> - negative experience</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past participle:</strong> &quot;I have ridden&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;The horse was ridden&quot;</li>
                <li>• <strong>Perfect tenses:</strong> &quot;She had ridden&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Riding is fun&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;A ridden horse&quot;</li>
                <li>• <strong>Noun phrase:</strong> &quot;The ridden path&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;riden&quot; instead of &quot;ridden&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding the proper spelling rule. People may incorrectly drop the second &quot;d&quot; when writing quickly, creating the misspelled &quot;riden&quot; instead of the correct &quot;ridden.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;ridden&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Ridden&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling and is commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the rule for the letter &quot;d&quot; in &quot;ridden&quot;?</h3>
              <p className="text-lg text-gray-700">A: The word &quot;ridden&quot; contains two &quot;d&quot;s in the middle. The spelling &quot;riden&quot; with only one &quot;d&quot; is incorrect. Remember: ride + den = ridden (double &quot;d&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;ridden&quot; is spelled the same way across all English-speaking regions. The spelling &quot;riden&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the base word &quot;ride&quot; and remember: add &quot;den&quot; with double &quot;d&quot;. So &quot;ride&quot; + &quot;den&quot; = &quot;ridden&quot; (double &quot;d&quot;). Don&apos;t drop the second &quot;d&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;ridden&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: traveled, journeyed, toured, explored, ventured, traversed, and when used informally: gone, been, or taken.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;ridden&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Ridden&quot; is often used metaphorically to describe experiences, challenges, or situations that someone has gone through or endured.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;ridden&quot; and &quot;riden&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Ridden&quot; is the correct English word meaning &quot;past participle of ride&quot; or &quot;having traveled on,&quot; while &quot;riden&quot; is an incorrect spelling with a missing &quot;d&quot; that doesn&apos;t exist in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Do all past participles follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Many past participles follow similar patterns, but each word has its own specific spelling. The key is to learn each word individually and use the correct letter patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;ridden&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Ridden&quot; comes from the Old English word &quot;ridan,&quot; which meant &quot;to ride.&quot; The English word maintains the double &quot;d&quot; pattern and the &quot;en&quot; suffix common in past participles.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;ridden&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: While &quot;ridden&quot; is primarily a past participle, it can function as an adjective describing something that has been ridden, such as &quot;a ridden horse&quot; or &quot;a ridden path.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Ridden&quot;</strong> has two &quot;d&quot;s in the middle.
          <br />
          <strong>&quot;Riden&quot;</strong> with only one &quot;d&quot; is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RIDE&quot; + &quot;DEN&quot; = &quot;RIDDEN&quot; (Double D)</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rhythm-vs-rythym" className="hover:text-blue-600 underline">Rhythm vs Rythym</a></li>
            <li><a href="/spelling/rhythm-vs-rythum" className="hover:text-blue-600 underline">Rhythm vs Rythum</a></li>
            <li><a href="/spelling/rhythm-vs-rythme" className="hover:text-blue-600 underline">Rhythm vs Rythme</a></li>
            <li><a href="/spelling/rhythm-vs-rythm" className="hover:text-blue-600 underline">Rhythm vs Rythm</a></li>
            <li><a href="/spelling/rhythm-vs-rythim" className="hover:text-blue-600 underline">Rhythm vs Rythim</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/risen-vs-rised" className="hover:text-green-600 underline">Risen vs Rised</a></li>
            <li><a href="/spelling/risen-vs-raisen" className="hover:text-green-600 underline">Risen vs Raisen</a></li>
            <li><a href="/spelling/rigid-vs-ridgid" className="hover:text-green-600 underline">Rigid vs Ridgid</a></li>
            <li><a href="/spelling/right-vs-rigth" className="hover:text-green-600 underline">Right vs Rigth</a></li>
            <li><a href="/spelling/ridiculous-vs-ridiculus" className="hover:text-green-600 underline">Ridiculous vs Ridiculus</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/accept-vs-except" className="hover:text-purple-600 underline">Accept vs Except</a></li>
            <li><a href="/confusing-words/advice-vs-advise" className="hover:text-purple-600 underline">Advice vs Advise</a></li>
            <li><a href="/confusing-words/allusion-vs-illusion" className="hover:text-purple-600 underline">Allusion vs Illusion</a></li>
            <li><a href="/confusing-words/altar-vs-alter" className="hover:text-purple-600 underline">Altar vs Alter</a></li>
            <li><a href="/confusing-words/amoral-vs-immoral" className="hover:text-purple-600 underline">Amoral vs Immoral</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
