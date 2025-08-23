import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Said vs Sayed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;said&quot; and &quot;sayed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SaidVsSayedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Said vs Sayed
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
            <span className="text-2xl mr-3">💬</span>
            <span className="text-2xl font-bold text-green-600">&quot;Said&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sayed&quot; is always incorrect - remember the past tense form of &quot;say&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sayed</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Said</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of say.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Say&quot; (Base)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Present tense</li>
                <li>• Means &quot;to speak&quot;</li>
                <li>• Regular verb</li>
                <li>• Common word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Said&quot; (Past)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Past tense</li>
                <li>• Irregular form</li>
                <li>• No &quot;ed&quot;</li>
                <li>• Standard English</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Complete Word</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Said&quot; = correct</li>
                <li>• &quot;Sayed&quot; = wrong</li>
                <li>• Remember: irregular</li>
                <li>• Think: &quot;say&quot; → &quot;said&quot;</li>
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
                <p className="text-lg text-green-800">&quot;She <strong>said</strong> hello to everyone.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>said</strong> the meeting was tomorrow.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>said</strong> he would be late.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;What did you <strong>say</strong>?&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>sayed</strong> hello to everyone&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;said&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>sayed</strong> the meeting was&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;said&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>sayed</strong> he would be late&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;said&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What did you <strong>sayed</strong>?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;say&quot; or &quot;said&quot;</p>
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
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">&quot;Say&quot; is irregular, not &quot;sayed&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Past</h3>
              <p className="text-amber-800">&quot;Said&quot; = past tense, &quot;Sayed&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;said&quot; to build muscle memory</p>
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
                <li>• <strong>That&apos;s what she said</strong> - confirmation</li>
                <li>• <strong>As I said before</strong> - repetition</li>
                <li>• <strong>Needless to say</strong> - obvious</li>
                <li>• <strong>Having said that</strong> - transition</li>
                <li>• <strong>So to say</strong> - expression</li>
                <li>• <strong>Say what?</strong> - surprise</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;She said hello&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;What was said&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The said person&quot;</li>
                <li>• <strong>Noun:</strong> &quot;Her say in the matter&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Say it again&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To say the least&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;said&quot; as &quot;sayed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from applying regular verb rules. Many English verbs add &quot;-ed&quot; for past tense (like &quot;walk&quot; → &quot;walked&quot;), but &quot;say&quot; is irregular and becomes &quot;said.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;said&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Said&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard past tense form of &quot;say.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the etymology of &quot;said&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Said&quot; comes from Old English &quot;sægde,&quot; which is the past tense of &quot;secgan&quot; (to say). It&apos;s an irregular verb that has maintained its form through centuries of language evolution.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;said&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about speaking to reinforce the correct spelling. Emphasize that &quot;say&quot; is irregular and becomes &quot;said.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;said&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: stated, mentioned, declared, expressed, uttered, remarked, announced, and communicated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;said&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Said&quot; can describe any form of communication or expression, like &quot;The painting said everything about her mood&quot; or &quot;His actions said more than words.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;said&quot; and &quot;told&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Said&quot; is used for general speech, while &quot;told&quot; specifically means to communicate information to someone. &quot;Said&quot; can be used without an object, but &quot;told&quot; requires one.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Said&quot;</strong> is the correct past tense of &quot;say.&quot; 
          <br />
          <strong>&quot;Sayed&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAY → SAID (irregular verb)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/sagacious-vs-sagatious" className="hover:text-blue-600 underline">Sagacious vs Sagatious</a></li>
            <li><a href="/spelling/safety-vs-savety" className="hover:text-blue-600 underline">Safety vs Savety</a></li>
            <li><a href="/spelling/safety-vs-safty" className="hover:text-blue-600 underline">Safety vs Safty</a></li>
            <li><a href="/spelling/safety-vs-saftey" className="hover:text-blue-600 underline">Safety vs Saftey</a></li>
            <li><a href="/spelling/safeness-vs-safetiness" className="hover:text-blue-600 underline">Safeness vs Safetiness</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rheumatism-vs-rhuematism" className="hover:text-green-600 underline">Rheumatism vs Rhuematism</a></li>
            <li><a href="/spelling/rheumatism-vs-rheumitism" className="hover:text-green-600 underline">Rheumatism vs Rheumitism</a></li>
            <li><a href="/spelling/rheumatism-vs-rheumatisim" className="hover:text-green-600 underline">Rheumatism vs Rheumatisim</a></li>
            <li><a href="/spelling/rhetoric-vs-rethoric" className="hover:text-green-600 underline">Rhetoric vs Rethoric</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/grammar/adjective-start-with-a" className="hover:text-purple-600 underline">Adjective Start With A</a></li>
            <li><a href="/grammar/adjective-start-with-b" className="hover:text-purple-600 underline">Adjective Start With B</a></li>
            <li><a href="/grammar/adjective-start-with-c" className="hover:text-purple-600 underline">Adjective Start With C</a></li>
            <li><a href="/grammar/adjective-start-with-d" className="hover:text-purple-600 underline">Adjective Start With D</a></li>
            <li><a href="/grammar/adjective-start-with-e" className="hover:text-purple-600 underline">Adjective Start With E</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
