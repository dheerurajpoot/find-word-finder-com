import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rheumatism vs Rheumitism - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rheumatism&quot; and &quot;rheumitism&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RheumatismVsRheumitismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Rheumatism vs Rheumitism
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🏥</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rheumatism&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rheumitism&quot; is always incorrect - remember the &quot;a&quot; in &quot;rheumatism&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rheumitism</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rheumatism</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a disease marked by inflammation and pain in the joints.&quot;
              </p>
            </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Rheum&quot; (Root)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• From Greek &quot;rheuma&quot;</li>
                <li>• Means &quot;flow&quot;</li>
                <li>• Contains &quot;e&quot;</li>
                <li>• Medical term</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;atism&quot; (Suffix)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;condition of&quot;</li>
                <li>• Common ending</li>
                <li>• Forms nouns</li>
                <li>• Medical conditions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Complete Word</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• &quot;Rheumatism&quot; = correct</li>
                <li>• &quot;Rheumitism&quot; = wrong</li>
                <li>• Remember: &quot;a&quot;</li>
                <li>• Think: &quot;rheum&quot; + &quot;atism&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The doctor diagnosed <strong>rheumatism</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>rheumatism</strong> flares up in cold weather.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rheumatism</strong> medication helps with pain.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She manages her <strong>rheumatism</strong> with exercise.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The doctor diagnosed <strong>rheumitism</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rheumatism&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>rheumitism</strong> flares up&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rheumatism&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rheumitism</strong> medication helps&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rheumatism&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She manages her <strong>rheumitism</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rheumatism&quot;</p>
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
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">A Rule</h3>
              <p className="text-yellow-800">&quot;Rheumatism&quot; has an &quot;a&quot;, not &quot;i&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Medical</h3>
              <p className="text-orange-800">&quot;Rheumatism&quot; = medical term, &quot;Rheumitism&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Write It Out</h3>
              <p className="text-amber-800">Practice writing &quot;rheumatism&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Proofread</h3>
              <p className="text-yellow-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Rheumatism pain</strong> - joint discomfort</li>
                <li>• <strong>Rheumatism treatment</strong> - medical care</li>
                <li>• <strong>Rheumatism symptoms</strong> - disease signs</li>
                <li>• <strong>Rheumatism medication</strong> - drug therapy</li>
                <li>• <strong>Rheumatism flare-up</strong> - symptom worsening</li>
                <li>• <strong>Rheumatism management</strong> - disease control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rheumatism is severe&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Several rheumatisms&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Rheumatism&apos;s effects&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Rheumatism-related pain&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Rheumatism symptoms&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rheumatism affects joints&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people misspell &quot;rheumatism&quot; as &quot;rheumitism&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts or similar-sounding words. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rheumatism&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rheumatism&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard medical term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the etymology of &quot;rheumatism&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rheumatism&quot; comes from Greek &quot;rheuma,&quot; meaning &quot;flow&quot; or &quot;stream.&quot; It was believed that the disease was caused by the flow of harmful fluids in the body.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;rheumatism&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about health and medical conditions to reinforce the correct spelling. Break down the word into &quot;rheum&quot; + &quot;atism.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;rheumatism&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: arthritis, joint disease, inflammatory arthritis, rheumatic disease, and joint inflammation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Can &quot;rheumatism&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rheumatism&quot; can describe any form of stiffness or difficulty, like &quot;The old system had the rheumatism of bureaucracy&quot; or &quot;His thinking had the rheumatism of age.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;rheumatism&quot; and &quot;arthritis&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rheumatism&quot; is a general term for various conditions causing joint pain and inflammation, while &quot;arthritis&quot; specifically refers to inflammation of the joints. Rheumatism is broader and can include arthritis.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rheumatism&quot;</strong> has an &quot;a&quot; and means &quot;a joint disease.&quot; 
          <br />
          <strong>&quot;Rheumitism&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RHEUM + ATISM = correct spelling&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/said-vs-sayed" className="hover:text-blue-600 underline">Said vs Sayed</a></li>
            <li><a href="/spelling/sagacious-vs-sagatious" className="hover:text-blue-600 underline">Sagacious vs Sagatious</a></li>
            <li><a href="/spelling/safety-vs-savety" className="hover:text-blue-600 underline">Safety vs Savety</a></li>
            <li><a href="/spelling/safety-vs-safty" className="hover:text-blue-600 underline">Safety vs Safty</a></li>
            <li><a href="/spelling/safety-vs-saftey" className="hover:text-blue-600 underline">Safety vs Saftey</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rheumatism-vs-rhuematism" className="hover:text-green-600 underline">Rheumatism vs Rhuematism</a></li>
            <li><a href="/spelling/rheumatism-vs-rheumatisim" className="hover:text-green-600 underline">Rheumatism vs Rheumatisim</a></li>
            <li><a href="/spelling/rhetoric-vs-rethoric" className="hover:text-green-600 underline">Rhetoric vs Rethoric</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/safeness-vs-safetiness" className="hover:text-green-600 underline">Safeness vs Safetiness</a></li>
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
