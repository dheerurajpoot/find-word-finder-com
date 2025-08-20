import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sports Car vs Sportscar - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sports car&quot; and &quot;sportscar&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SportsCarVsSportscarPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Sports Car vs Sportscar
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-red-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🏎️</span>
            <span className="text-2xl font-bold text-red-600">&quot;Sports Car&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sportscar&quot; is less common - remember the space in &quot;sports car&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Sportscar</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">⚠️ LESS COMMON</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This spelling is less common and may be considered informal or incorrect in formal writing.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sports Car</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This is the proper spelling meaning &quot;a high-performance automobile designed for speed and handling.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Sports Car&quot; (Compound Noun)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Two separate words</li>
                <li>• Standard English usage</li>
                <li>• Preferred in formal writing</li>
                <li>• Clear meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Usage Guidelines</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Use space in formal writing</li>
                <li>• Compound nouns often separated</li>
                <li>• Maintains clarity</li>
                <li>• Professional standard</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">When to Use Each</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Sports car: formal writing</li>
                <li>• Sportscar: informal contexts</li>
                <li>• Brand names may vary</li>
                <li>• Check style guides</li>
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
            <h3 className="text-2xl font-bold text-red-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He drives a red <strong>sports car</strong>.&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>sports car</strong> market is growing.&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She owns a classic <strong>sports car</strong>.&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This <strong>sports car</strong> has excellent handling.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-4">⚠️ Less Common Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;He drives a red <strong>sportscar</strong>&quot; ⚠️</p>
                <p className="text-sm text-orange-600 mt-1">Less common, may be informal</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>sportscar</strong> market&quot; ⚠️</p>
                <p className="text-sm text-orange-600 mt-1">Less common, may be informal</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;She owns a classic <strong>sportscar</strong>&quot; ⚠️</p>
                <p className="text-sm text-orange-600 mt-1">Less common, may be informal</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;This <strong>sportscar</strong> has excellent handling&quot; ⚠️</p>
                <p className="text-sm text-orange-600 mt-1">Less common, may be informal</p>
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
              <div className="text-4xl mb-3">🏎️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Space Rule</h3>
              <p className="text-yellow-800">&quot;Sports&quot; and &quot;car&quot; are separate words</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Think Separate</h3>
              <p className="text-red-800">A sports car is a car for sports</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;sports car&quot; to build muscle memory</p>
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
                <li>• <strong>Luxury sports car</strong> - high-end performance vehicle</li>
                <li>• <strong>Classic sports car</strong> - vintage performance vehicle</li>
                <li>• <strong>Sports car enthusiast</strong> - performance car lover</li>
                <li>• <strong>Sports car racing</strong> - performance car competition</li>
                <li>• <strong>Sports car show</strong> - performance car exhibition</li>
                <li>• <strong>Sports car magazine</strong> - performance car publication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;The sports car is fast&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love sports cars&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The sports car&apos;s engine&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;My Porsche, a sports car&quot;</li>
                <li>• <strong>Direct address:</strong> &quot;Sports car, come here&quot;</li>
                <li>• <strong>Predicate nominative:</strong> &quot;That is a sports car&quot;</li>
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
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;sportscar&quot; instead of &quot;sports car&quot;?</h3>
              <p className="text-lg text-gray-700">A: Some people use &quot;sportscar&quot; because it&apos;s shorter and may seem more convenient. However, &quot;sports car&quot; is the standard form in formal English and maintains better clarity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;sportscar&quot; completely wrong?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sportscar&quot; is not completely wrong, but it&apos;s less common and may be considered informal. In formal writing, academic papers, and professional contexts, &quot;sports car&quot; is preferred.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;sports car&quot; and &quot;sport car&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sports car&quot; is the correct form. &quot;Sport car&quot; (singular) is incorrect. The word &quot;sports&quot; is used as an adjective to describe the type of car, and it remains plural even when describing a single car.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there other compound nouns like this?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many compound nouns maintain spaces: coffee table, tennis court, basketball player, football field, swimming pool, and dining room all follow the same pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: When should I use a hyphen instead of a space?</h3>
              <p className="text-lg text-gray-700">A: Use hyphens when the compound acts as a single adjective before a noun (e.g., &quot;sports-car enthusiast&quot;). Use spaces when the compound is a noun (e.g., &quot;sports car&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;sports car&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: performance car, high-performance vehicle, exotic car, supercar, muscle car, and GT (Grand Tourer). Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of it as two separate words: &quot;sports&quot; (the type) and &quot;car&quot; (the vehicle). Just like &quot;coffee table&quot; or &quot;tennis court,&quot; they remain separate words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sports car&quot; is standard across all English-speaking regions. Some informal contexts or brand names might use &quot;sportscar,&quot; but the spaced version is universally accepted as correct.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sports Car&quot;</strong> with a space is the standard, formal spelling. 
          <br />
          <strong>&quot;Sportscar&quot;</strong> is less common and may be considered informal.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPORTS + CAR = two separate words&quot;</p>
        </div>
      </div>
    </div>
  )
}
