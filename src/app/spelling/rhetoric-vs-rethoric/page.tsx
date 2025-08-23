import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rhetoric vs Rethoric - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rhetoric&quot; and &quot;rethoric&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RhetoricVsRethoricPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Rhetoric vs Rethoric
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
            <span className="text-2xl mr-3">🎭</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rhetoric&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rethoric&quot; is always incorrect - remember the &quot;h&quot; in &quot;rhetoric&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rethoric</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rhetoric</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the art of effective or persuasive speaking or writing.&quot;
              </p>
            </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Rhet&quot; (Root)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• From Greek &quot;rhetor&quot;</li>
                <li>• Means &quot;speaker&quot;</li>
                <li>• Contains &quot;h&quot;</li>
                <li>• Speech-related</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;ic&quot; (Suffix)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;relating to&quot;</li>
                <li>• Common ending</li>
                <li>• Forms adjectives</li>
                <li>• Descriptive words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Complete Word</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• &quot;Rhetoric&quot; = correct</li>
                <li>• &quot;Rethoric&quot; = wrong</li>
                <li>• Remember: &quot;h&quot;</li>
                <li>• Think: &quot;rhet&quot; + &quot;ic&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The politician&apos;s <strong>rhetoric</strong> was persuasive.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She studied classical <strong>rhetoric</strong> in college.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The speech was full of empty <strong>rhetoric</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>rhetoric</strong> skills impressed the audience.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The politician&apos;s <strong>rethoric</strong> was&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhetoric&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She studied classical <strong>rethoric</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhetoric&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The speech was full of empty <strong>rethoric</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhetoric&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>rethoric</strong> skills impressed&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhetoric&quot;</p>
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
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">H Rule</h3>
              <p className="text-yellow-800">&quot;Rhetoric&quot; has an &quot;h&quot;, not missing it</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Speech</h3>
              <p className="text-emerald-800">&quot;Rhetoric&quot; = speech art, &quot;Rethoric&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Write It Out</h3>
              <p className="text-teal-800">Practice writing &quot;rhetoric&quot; to build muscle memory</p>
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
                <li>• <strong>Political rhetoric</strong> - campaign speech</li>
                <li>• <strong>Empty rhetoric</strong> - meaningless words</li>
                <li>• <strong>Classical rhetoric</strong> - ancient speech art</li>
                <li>• <strong>Rhetorical question</strong> - no answer needed</li>
                <li>• <strong>Rhetorical device</strong> - speech technique</li>
                <li>• <strong>Rhetorical flourish</strong> - speech decoration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rhetoric was powerful&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Several rhetorics&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Rhetoric&apos;s power&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Rhetoric-focused study&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Rhetorical techniques&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rhetoric influences people&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;rhetoric&quot; as &quot;rethoric&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts or similar-sounding words. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rhetoric&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rhetoric&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;rhetoric&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhetoric&quot; comes from Greek &quot;rhetor,&quot; meaning &quot;speaker&quot; or &quot;orator.&quot; It refers to the art of effective speaking and writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;rhetoric&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about speaking and communication to reinforce the correct spelling. Break down the word into &quot;rhet&quot; + &quot;ic.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;rhetoric&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: oratory, eloquence, speechmaking, persuasion, discourse, and public speaking.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;rhetoric&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rhetoric&quot; can describe any form of persuasive communication, like &quot;The rhetoric of advertising&quot; or &quot;Corporate rhetoric.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;rhetoric&quot; and &quot;oratory&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhetoric&quot; refers to the art and study of effective communication, while &quot;oratory&quot; specifically refers to the skill of public speaking. Rhetoric is broader and includes written communication.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rhetoric&quot;</strong> has an &quot;h&quot; and means &quot;the art of persuasive speaking.&quot; 
          <br />
          <strong>&quot;Rethoric&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RHET + IC = correct spelling&quot;</p>
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
            <li><a href="/spelling/rheumatism-vs-rheumitism" className="hover:text-green-600 underline">Rheumatism vs Rheumitism</a></li>
            <li><a href="/spelling/rheumatism-vs-rheumatisim" className="hover:text-green-600 underline">Rheumatism vs Rheumatisim</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/safeness-vs-safetiness" className="hover:text-green-600 underline">Safeness vs Safetiness</a></li>
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
