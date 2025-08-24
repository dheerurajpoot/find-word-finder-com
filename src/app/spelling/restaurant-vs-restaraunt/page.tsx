import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Restaurant vs Restaraunt - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;restaurant&quot; and &quot;restaraunt&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RestaurantVsRestarauntPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Restaurant vs Restaraunt
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🍜</span>
            <span className="text-2xl font-bold text-green-600">&quot;Restaurant&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Restaraunt&quot; is always incorrect - remember the &quot;au&quot; in &quot;restaurant&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Restaraunt</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Restaurant</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a place where meals are prepared and served.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Restaur&quot; (Root)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• From French &quot;restaurer&quot;</li>
                <li>• Means &quot;to restore&quot;</li>
                <li>• Food-related</li>
                <li>• Service context</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;ant&quot; (Suffix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;one who&quot;</li>
                <li>• Person indicator</li>
                <li>• Forms nouns</li>
                <li>• Place ending</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Complete Word</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;Restaurant&quot; = correct</li>
                <li>• &quot;Restaraunt&quot; = wrong</li>
                <li>• Remember: &quot;au&quot;</li>
                <li>• Think: &quot;restaur&quot; + &quot;ant&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The Chinese <strong>restaurant</strong> was packed.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We celebrated at the <strong>restaurant</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>restaurant</strong> offers outdoor seating.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He works as a waiter at the <strong>restaurant</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The Chinese <strong>restaraunt</strong> was&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;restaurant&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We celebrated at the <strong>restaraunt</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;restaurant&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>restaraunt</strong> offers outdoor&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;restaurant&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He works as a waiter at the <strong>restaraunt</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;restaurant&quot;</p>
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
              <div className="text-4xl mb-3">🍜</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AU Rule</h3>
              <p className="text-yellow-800">&quot;Restaurant&quot; has &quot;au&quot;, not missing it</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Think Food</h3>
              <p className="text-sky-800">&quot;Restaurant&quot; = food place, &quot;Restaraunt&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;restaurant&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Thai restaurant</strong> - ethnic cuisine</li>
                <li>• <strong>Restaurant menu</strong> - food selection</li>
                <li>• <strong>Restaurant kitchen</strong> - food preparation</li>
                <li>• <strong>Restaurant staff</strong> - food workers</li>
                <li>• <strong>Restaurant location</strong> - food place</li>
                <li>• <strong>Restaurant atmosphere</strong> - dining ambiance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The restaurant was busy&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Restaurant opened late&quot;</li>
                <li>• <strong>Object:</strong> &quot;We chose restaurant&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Restaurant&apos;s chef&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many restaurants&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Restaurant food&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people misspell &quot;restaurant&quot; as &quot;restaraunt&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations that omit the &quot;au&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;restaurant&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Restaurant&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;restaurant&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Restaurant&quot; comes from French &quot;restaurer&quot; (to restore) + the suffix &quot;ant.&quot; It refers to a place where people are restored or refreshed with food.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;restaurant&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about eating out and food places to reinforce the correct spelling. Emphasize the &quot;au&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;restaurant&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: eatery, diner, café, bistro, grill, and establishment.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;restaurant&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Restaurant&quot; can describe any place that provides nourishment or refreshment, like &quot;restaurant of knowledge&quot; or &quot;restaurant of ideas.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;restaurant&quot; and &quot;grill&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Restaurant&quot; is a general term for any dining establishment, while &quot;grill&quot; specifically refers to a casual restaurant that specializes in grilled foods, often with a more limited menu.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Restaurant&quot;</strong> has &quot;au&quot; and means &quot;a place where meals are served.&quot; 
          <br />
          <strong>&quot;Restaraunt&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RESTAUR + ANT = correct spelling&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/restaurant-vs-resturant" className="hover:text-blue-600 underline">Restaurant vs Resturant</a></li>
            <li><a href="/spelling/restaurant-vs-restraunt" className="hover:text-blue-600 underline">Restaurant vs Restraunt</a></li>
            <li><a href="/spelling/restaurant-vs-restorant" className="hover:text-blue-600 underline">Restaurant vs Restorant</a></li>
            <li><a href="/spelling/restaurant-vs-restarant" className="hover:text-blue-600 underline">Restaurant vs Restarant</a></li>
            <li><a href="/spelling/responsible-vs-responssible" className="hover:text-blue-600 underline">Responsible vs Responssible</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/responsible-vs-responsable" className="hover:text-green-600 underline">Responsible vs Responsable</a></li>
            <li><a href="/spelling/responsible-vs-responcible" className="hover:text-green-600 underline">Responsible vs Responcible</a></li>
            <li><a href="/spelling/responsibility-vs-responsiblity" className="hover:text-green-600 underline">Responsibility vs Responsiblity</a></li>
            <li><a href="/spelling/responsibility-vs-responsability" className="hover:text-green-600 underline">Responsibility vs Responsability</a></li>
            <li><a href="/spelling/revised-vs-revized" className="hover:text-green-600 underline">Revised vs Revized</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/grammar/adjective-start-with-k" className="hover:text-purple-600 underline">Adjective Start With K</a></li>
            <li><a href="/grammar/adjective-start-with-l" className="hover:text-purple-600 underline">Adjective Start With L</a></li>
            <li><a href="/grammar/adjective-start-with-m" className="hover:text-purple-600 underline">Adjective Start With M</a></li>
            <li><a href="/grammar/adjective-start-with-n" className="hover:text-purple-600 underline">Adjective Start With N</a></li>
            <li><a href="/grammar/adjective-start-with-o" className="hover:text-purple-600 underline">Adjective Start With O</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
