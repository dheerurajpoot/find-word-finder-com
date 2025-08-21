import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Seniority vs Senority - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;seniority&quot; and &quot;senority&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SeniorityVsSenorityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Seniority vs Senority
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Seniority&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Senority&quot; is always incorrect - remember &quot;seniority&quot; has an &quot;i&quot; after &quot;r&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Senority</h3>
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Seniority</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;status based on length of service.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Seniority&quot; (Correct)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;length of service&quot;</li>
                <li>• Has &quot;i&quot; after &quot;r&quot;</li>
                <li>• From Latin &quot;senior&quot;</li>
                <li>• Used in workplace contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Senority&quot; (Wrong)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;i&quot; after &quot;r&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• &quot;Senority&quot; is not a word</li>
                <li>• Missing letter &quot;i&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
                <p className="text-lg text-amber-800">&quot;Promotion is based on <strong>seniority</strong>.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;She has more <strong>seniority</strong> than I do.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Layoffs will be by <strong>seniority</strong>.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;His <strong>seniority</strong> gives him priority.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Promotion is based on <strong>senority</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seniority&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has more <strong>senority</strong> than I do&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seniority&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Layoffs will be by <strong>senority</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seniority&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>senority</strong> gives him priority&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;seniority&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I After R Rule</h3>
              <p className="text-yellow-800">&quot;Seniority&quot; has &quot;i&quot; after &quot;r&quot; - think &quot;senior-I-ty&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Senior</h3>
              <p className="text-blue-800">&quot;Senior&quot; + &quot;ity&quot; = &quot;seniority&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;seniority&quot; to build muscle memory</p>
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
                <li>• <strong>Seniority-based</strong> - determined by length of service</li>
                <li>• <strong>Seniority list</strong> - ranking by service time</li>
                <li>• <strong>Seniority rights</strong> - privileges based on service</li>
                <li>• <strong>Seniority system</strong> - method of advancement</li>
                <li>• <strong>Seniority pay</strong> - salary based on service time</li>
                <li>• <strong>Seniority bonus</strong> - reward for long service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Her seniority is impressive&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Seniority matters here&quot;</li>
                <li>• <strong>Object:</strong> &quot;They respect seniority&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The seniority&apos;s importance&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Senior&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Seniorly&quot;</li>
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
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;seniority&quot; as &quot;senority&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs when people forget the &quot;i&quot; after the &quot;r.&quot; Remember that &quot;seniority&quot; comes from &quot;senior&quot; + &quot;-ity,&quot; so it keeps the &quot;i&quot; from the base word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;senority&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;senority&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What does &quot;seniority&quot; mean in the workplace?</h3>
              <p className="text-lg text-gray-700">A: In the workplace, seniority refers to the length of time an employee has worked for a company. It often determines priority for promotions, layoffs, vacation time, and other benefits.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How is seniority calculated?</h3>
              <p className="text-lg text-gray-700">A: Seniority is typically calculated from the date of hire or from the date of starting in a particular position or department. It&apos;s usually measured in years, months, and days.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are the benefits of seniority?</h3>
              <p className="text-lg text-gray-700">A: Seniority benefits can include priority for promotions, protection from layoffs, better vacation scheduling, higher pay rates, and more favorable work assignments.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can seniority be lost?</h3>
              <p className="text-lg text-gray-700">A: Yes, seniority can be lost if an employee quits, is terminated, or takes a break in service. Some companies have policies about maintaining seniority during certain types of leave.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between seniority and experience?</h3>
              <p className="text-lg text-gray-700">A: Seniority refers specifically to length of service with one employer, while experience refers to overall knowledge and skills gained over time, regardless of where they were acquired.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there different types of seniority?</h3>
              <p className="text-lg text-gray-700">A: Yes, there can be different types: company seniority (overall time with company), department seniority (time in specific department), and classification seniority (time in specific job classification).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of it as &quot;senior&quot; + &quot;ity.&quot; Since &quot;senior&quot; has an &quot;i&quot; before the &quot;r,&quot; &quot;seniority&quot; keeps that &quot;i&quot; when adding the &quot;-ity&quot; suffix.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Seniority&quot;</strong> has an &quot;i&quot; after the &quot;r&quot; and means &quot;length of service.&quot; 
          <br />
          <strong>&quot;Senority&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;senior-I-ty&quot; - the &quot;i&quot; comes from the base word &quot;senior&quot;!</p>
        </div>
      </div>
    </div>
  )
}
