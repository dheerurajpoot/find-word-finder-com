import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sandwich vs Sendwich - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sandwich&quot; and &quot;sendwich&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SandwichVsSendwichPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Sandwich vs Sendwich
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
            <span className="text-2xl mr-3">🥪</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sandwich&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sendwich&quot; is always incorrect - remember the &quot;and&quot; in &quot;sandwich&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sendwich</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sandwich</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;food between two slices of bread&quot; or &quot;a layered meal.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Sand&quot; (Root)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• From Earl of Sandwich</li>
                <li>• Historical origin</li>
                <li>• Not &quot;send&quot;</li>
                <li>• Proper noun origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;wich&quot; (Suffix)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Common ending</li>
                <li>• Not &quot;wich&quot;</li>
                <li>• Historical suffix</li>
                <li>• Completes the word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Complete Word</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Sandwich&quot; = correct</li>
                <li>• &quot;Sendwich&quot; = wrong</li>
                <li>• Remember: &quot;sand&quot;</li>
                <li>• Think: &quot;sand&quot; + &quot;wich&quot;</li>
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
                <p className="text-lg text-green-800">&quot;I made a turkey <strong>sandwich</strong> for lunch.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The deli serves fresh <strong>sandwiches</strong> daily.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Peanut butter <strong>sandwiches</strong> are a classic snack.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Grilled cheese <strong>sandwiches</strong> are comfort food.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I made a turkey <strong>sendwich</strong> for lunch&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sandwich&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The deli serves fresh <strong>sendwiches</strong> daily&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sandwiches&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Peanut butter <strong>sendwiches</strong> are a classic&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sandwiches&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Grilled cheese <strong>sendwiches</strong> are comfort&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sandwiches&quot;</p>
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
              <div className="text-4xl mb-3">🥪</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Sand Rule</h3>
              <p className="text-yellow-800">&quot;Sandwich&quot; starts with &quot;sand&quot;, not &quot;send&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Food</h3>
              <p className="text-amber-800">&quot;Sandwich&quot; = food item, &quot;Sendwich&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;sandwich&quot; to build muscle memory</p>
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
                <li>• <strong>Sandwich shop</strong> - food establishment</li>
                <li>• <strong>Sandwich board</strong> - advertising sign</li>
                <li>• <strong>Sandwich generation</strong> - middle-aged caregivers</li>
                <li>• <strong>Sandwich method</strong> - teaching technique</li>
                <li>• <strong>Sandwich cookie</strong> - filled biscuit</li>
                <li>• <strong>Sandwich bag</strong> - food storage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The sandwich is delicious&quot;</li>
                <li>• <strong>Verb:</strong> &quot;To sandwich between&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple sandwiches&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Sandwich&apos;s ingredients&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Sandwich-making skills&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Sandwich bread&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;sandwich&quot; as &quot;sendwich&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations like &quot;sendwich.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;sandwich&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sandwich&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the etymology of &quot;sandwich&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sandwich&quot; comes from John Montagu, the 4th Earl of Sandwich, who is said to have ordered meat between slices of bread so he could eat while gambling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;sandwich&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about food to reinforce the correct spelling. Break down the word into &quot;sand&quot; + &quot;wich.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;sandwich&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: sub, hoagie, hero, wrap, panini, bagel, and toastie, depending on the specific type and regional preferences.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;sandwich&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sandwich&quot; can describe anything positioned between two other things, like &quot;sandwiched between meetings&quot; or &quot;sandwiched in traffic.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sandwich&quot; and &quot;wrap&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;sandwich&quot; uses two separate slices of bread, while a &quot;wrap&quot; uses a single flatbread or tortilla rolled around the filling.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sandwich&quot;</strong> starts with &quot;sand&quot; and means &quot;food between bread.&quot; 
          <br />
          <strong>&quot;Sendwich&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAND + WICH = correct spelling&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/satellite-vs-sattelite" className="hover:text-blue-600 underline">Satellite vs Sattelite</a></li>
            <li><a href="/spelling/satellite-vs-satelite" className="hover:text-blue-600 underline">Satellite vs Satelite</a></li>
            <li><a href="/spelling/satellite-vs-satallite" className="hover:text-blue-600 underline">Satellite vs Satallite</a></li>
            <li><a href="/spelling/satellite-vs-satalite" className="hover:text-blue-600 underline">Satellite vs Satalite</a></li>
            <li><a href="/spelling/sandwich-vs-sandwitch" className="hover:text-blue-600 underline">Sandwich vs Sandwitch</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/sandwich-vs-sandwhich" className="hover:text-green-600 underline">Sandwich vs Sandwhich</a></li>
            <li><a href="/spelling/same-vs-smae" className="hover:text-green-600 underline">Same vs Smae</a></li>
            <li><a href="/spelling/salesman-vs-saleman" className="hover:text-green-600 underline">Salesman vs Saleman</a></li>
            <li><a href="/spelling/salary-vs-salery" className="hover:text-green-600 underline">Salary vs Salery</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/grammar/adjective-start-with-v" className="hover:text-purple-600 underline">Adjective Start With V</a></li>
            <li><a href="/grammar/adjective-start-with-w" className="hover:text-purple-600 underline">Adjective Start With W</a></li>
            <li><a href="/grammar/adjective-start-with-x" className="hover:text-purple-600 underline">Adjective Start With X</a></li>
            <li><a href="/grammar/adjective-start-with-y" className="hover:text-purple-600 underline">Adjective Start With Y</a></li>
            <li><a href="/grammar/adjective-start-with-z" className="hover:text-purple-600 underline">Adjective Start With Z</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
