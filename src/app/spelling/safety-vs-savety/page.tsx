import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Safety vs Savety - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;safety&quot; and &quot;savety&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SafetyVsSavetyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Safety vs Savety
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🛡️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Safety&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Savety&quot; is always incorrect - remember the &quot;f&quot; in &quot;safety&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Savety</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Safety</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the condition of being protected from harm.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Safe&quot; (Root)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;protected&quot;</li>
                <li>• Contains &quot;f&quot;</li>
                <li>• Common word</li>
                <li>• Security-related</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;ty&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;state of&quot;</li>
                <li>• Common ending</li>
                <li>• Forms nouns</li>
                <li>• Abstract concepts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Complete Word</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• &quot;Safety&quot; = correct</li>
                <li>• &quot;Savety&quot; = wrong</li>
                <li>• Remember: &quot;f&quot;</li>
                <li>• Think: &quot;safe&quot; + &quot;ty&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>safety</strong> of our employees is paramount.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Please follow all <strong>safety</strong> protocols.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>safety</strong> equipment is mandatory.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We prioritize workplace <strong>safety</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>savety</strong> of our employees&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;safety&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Please follow all <strong>savety</strong> protocols&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;safety&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>savety</strong> equipment is&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;safety&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We prioritize workplace <strong>savety</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;safety&quot;</p>
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
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">F Rule</h3>
              <p className="text-yellow-800">&quot;Safety&quot; has &quot;f&quot;, not missing it</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Think Protection</h3>
              <p className="text-lime-800">&quot;Safety&quot; = protection, &quot;Savety&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;safety&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Proofread</h3>
              <p className="text-emerald-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Workplace safety</strong> - job security</li>
                <li>• <strong>Road safety</strong> - traffic security</li>
                <li>• <strong>Food safety</strong> - meal protection</li>
                <li>• <strong>Fire safety</strong> - flame protection</li>
                <li>• <strong>Child safety</strong> - kid protection</li>
                <li>• <strong>Public safety</strong> - community security</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The safety is important&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Several safeties&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Safety&apos;s importance&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Safety-focused approach&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Safety measures&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Safety protects people&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people misspell &quot;safety&quot; as &quot;savety&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts or similar-sounding words. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;safety&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Safety&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;safety&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Safety&quot; comes from combining &quot;safe&quot; (protected) with the suffix &quot;-ty&quot; (state of). It literally means &quot;the state of being safe&quot; or protected from harm.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;safety&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about protection and security to reinforce the correct spelling. Break down the word into &quot;safe&quot; + &quot;ty.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What are some synonyms for &quot;safety&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: security, protection, safeness, well-being, welfare, and harmlessness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;safety&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Safety&quot; can describe any form of protection or security, like &quot;The safety of our democracy&quot; or &quot;Financial safety nets.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;safety&quot; and &quot;safeness&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Safety&quot; refers to the condition of being protected from harm, while &quot;safeness&quot; refers to the quality of being safe. They are very similar but &quot;safety&quot; emphasizes the condition aspect.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Safety&quot;</strong> has &quot;f&quot; and means &quot;the condition of being protected.&quot; 
          <br />
          <strong>&quot;Savety&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAFE + TY = correct spelling&quot;</p>
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
            <li><a href="/spelling/safeness-vs-safetiness" className="hover:text-blue-600 underline">Safeness vs Safetiness</a></li>
            <li><a href="/spelling/safety-vs-safty" className="hover:text-blue-600 underline">Safety vs Safty</a></li>
            <li><a href="/spelling/safety-vs-saftey" className="hover:text-blue-600 underline">Safety vs Saftey</a></li>
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
