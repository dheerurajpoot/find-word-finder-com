import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Satellite vs Sattelite - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;satellite&quot; and &quot;sattelite&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SatelliteVsSattelitePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Satellite vs Sattelite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🛰️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Satellite&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sattelite&quot; is always incorrect - remember the single &quot;t&quot; in &quot;satellite&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sattelite</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Satellite</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;an object in orbit around a planet&quot; or &quot;a natural or artificial body.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sat&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Latin &quot;satellit-&quot;</li>
                <li>• Means &quot;attendant&quot;</li>
                <li>• Single &quot;t&quot;</li>
                <li>• Common prefix</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;ellite&quot; (Suffix)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Completes the word</li>
                <li>• No double letters</li>
                <li>• Smooth pronunciation</li>
                <li>• Latin origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Complete Word</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Satellite&quot; = correct</li>
                <li>• &quot;Sattelite&quot; = wrong</li>
                <li>• Remember: one &quot;t&quot;</li>
                <li>• Think: &quot;sat&quot; + &quot;ellite&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>satellite</strong> orbits Earth every 90 minutes.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;GPS <strong>satellites</strong> help with navigation.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The moon is Earth&apos;s natural <strong>satellite</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Weather <strong>satellites</strong> monitor storms.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sattelite</strong> orbits Earth&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;satellite&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;GPS <strong>sattelites</strong> help&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;satellites&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The moon is Earth&apos;s <strong>sattelite</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;satellite&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Weather <strong>sattelites</strong> monitor&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;satellites&quot;</p>
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
              <div className="text-4xl mb-3">🛰️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single T Rule</h3>
              <p className="text-yellow-800">&quot;Satellite&quot; has one &quot;t&quot;, just like &quot;sat&quot; in &quot;satellite&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Space</h3>
              <p className="text-blue-800">&quot;Satellite&quot; = space object, &quot;Sattelite&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;satellite&quot; to build muscle memory</p>
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
                <li>• <strong>Satellite dish</strong> - TV receiver</li>
                <li>• <strong>Satellite phone</strong> - mobile communication</li>
                <li>• <strong>Satellite navigation</strong> - GPS system</li>
                <li>• <strong>Satellite imagery</strong> - space photography</li>
                <li>• <strong>Satellite internet</strong> - broadband service</li>
                <li>• <strong>Satellite city</strong> - urban development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The satellite is orbiting&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Satellite technology&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple satellites&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Satellite&apos;s orbit&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Satellite-based system&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;To satellite&quot; (rare)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people add an extra &quot;t&quot; to &quot;satellite&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar words like &quot;battle&quot; or &quot;settle&quot; that have double &quot;t&quot;s. People incorrectly apply this pattern to &quot;satellite.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;satellite&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Satellite&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;satellite&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Satellite&quot; comes from Latin &quot;satellit-&quot; meaning &quot;attendant&quot; or &quot;bodyguard.&quot; It was first used in astronomy to describe moons orbiting planets.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;satellite&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;satellite&quot; having one &quot;t&quot; (like &quot;sat&quot;), and create simple sentences about space objects to reinforce the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;satellite&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: orbiter, spacecraft, space station, moon, artificial satellite, and communications satellite.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;satellite&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Satellite&quot; can describe anything that orbits or depends on something else, like &quot;satellite offices&quot; or &quot;satellite businesses.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;satellite&quot; and &quot;probe&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;satellite&quot; orbits a celestial body, while a &quot;probe&quot; is designed to explore and gather information, often traveling to distant locations.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Satellite&quot;</strong> has one &quot;t&quot; and means &quot;an object in orbit.&quot; 
          <br />
          <strong>&quot;Sattelite&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAT + ELLITE = one T&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/satellite-vs-satelite" className="hover:text-blue-600 underline">Satellite vs Satelite</a></li>
            <li><a href="/spelling/satellite-vs-satallite" className="hover:text-blue-600 underline">Satellite vs Satallite</a></li>
            <li><a href="/spelling/satellite-vs-satalite" className="hover:text-blue-600 underline">Satellite vs Satalite</a></li>
            <li><a href="/spelling/sandwich-vs-sendwich" className="hover:text-blue-600 underline">Sandwich vs Sendwich</a></li>
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
            <li><a href="/grammar/adjective-start-with" className="hover:text-purple-600 underline">Adjective Start With</a></li>
            <li><a href="/grammar/adjective-start-with-a-positive" className="hover:text-purple-600 underline">Adjective Start With A Positive</a></li>
            <li><a href="/grammar/adjective-start-with-b" className="hover:text-purple-600 underline">Adjective Start With B</a></li>
            <li><a href="/grammar/adjective-start-with-c" className="hover:text-purple-600 underline">Adjective Start With C</a></li>
            <li><a href="/grammar/adjective-start-with-e" className="hover:text-purple-600 underline">Adjective Start With E</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
