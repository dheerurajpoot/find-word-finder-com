import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Salary vs Salery - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;salary&quot; and &quot;salery&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SalaryVsSaleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Salary vs Salery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">💰</span>
            <span className="text-2xl font-bold text-green-600">&quot;Salary&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Salery&quot; is always incorrect - remember the &quot;r&quot; in &quot;salary&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Salery</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Salary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;regular payment for work.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Sal&quot; (Root)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• From Latin &quot;salarium&quot;</li>
                <li>• Means &quot;salt&quot;</li>
                <li>• Historical origin</li>
                <li>• Roman soldiers</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;ary&quot; (Suffix)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;relating to&quot;</li>
                <li>• Common ending</li>
                <li>• Contains &quot;r&quot;</li>
                <li>• Forms nouns</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Complete Word</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• &quot;Salary&quot; = correct</li>
                <li>• &quot;Salery&quot; = wrong</li>
                <li>• Remember: &quot;r&quot;</li>
                <li>• Think: &quot;sal&quot; + &quot;ary&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>salary</strong> for this position is competitive.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Employee <strong>salaries</strong> are reviewed annually.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She negotiated a higher <strong>salary</strong> package.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The company offers competitive <strong>salaries</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>salery</strong> for this position&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;salary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Employee <strong>saleries</strong> are reviewed&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;salaries&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She negotiated a higher <strong>salery</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;salary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company offers competitive <strong>saleries</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;salaries&quot;</p>
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
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">R Rule</h3>
              <p className="text-yellow-800">&quot;Salary&quot; has an &quot;r&quot;, not missing it</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Money</h3>
              <p className="text-emerald-800">&quot;Salary&quot; = money earned, &quot;Salery&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Write It Out</h3>
              <p className="text-teal-800">Practice writing &quot;salary&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Annual salary</strong> - yearly pay</li>
                <li>• <strong>Base salary</strong> - starting pay</li>
                <li>• <strong>Salary range</strong> - pay scale</li>
                <li>• <strong>Salary negotiation</strong> - pay discussion</li>
                <li>• <strong>Salary cap</strong> - maximum pay</li>
                <li>• <strong>Salary review</strong> - pay evaluation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The salary is fair&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Several salaries&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Salary&apos;s benefits&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Salary-package deal&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Salary expectations&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Salaries vary by location&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;salary&quot; as &quot;salery&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts or similar-sounding words. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;salary&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Salary&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;salary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Salary&quot; comes from Latin &quot;salarium,&quot; which originally meant &quot;salt money&quot; - the allowance given to Roman soldiers to buy salt. It evolved to mean regular payment for work.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;salary&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about jobs and money to reinforce the correct spelling. Break down the word into &quot;sal&quot; + &quot;ary.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;salary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: wages, pay, compensation, earnings, income, remuneration, and stipend.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;salary&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Salary&quot; can describe any form of compensation or reward, like &quot;The satisfaction is my salary for this volunteer work.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;salary&quot; and &quot;wages&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Salary&quot; typically refers to fixed annual pay, while &quot;wages&quot; usually refers to hourly pay. Salaries are often paid monthly, wages weekly.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Salary&quot;</strong> has an &quot;r&quot; and means &quot;regular payment for work.&quot; 
          <br />
          <strong>&quot;Salery&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAL + ARY = correct spelling&quot;</p>
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
            <li><a href="/spelling/sandwich-vs-sendwich" className="hover:text-blue-600 underline">Sandwich vs Sendwich</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/sandwich-vs-sandwitch" className="hover:text-green-600 underline">Sandwich vs Sandwitch</a></li>
            <li><a href="/spelling/sandwich-vs-sandwhich" className="hover:text-green-600 underline">Sandwich vs Sandwhich</a></li>
            <li><a href="/spelling/same-vs-smae" className="hover:text-green-600 underline">Same vs Smae</a></li>
            <li><a href="/spelling/salesman-vs-saleman" className="hover:text-green-600 underline">Salesman vs Saleman</a></li>
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
