import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safeness vs Safetyness - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;safeness&quot; and &quot;safetyness&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SafenessVsSafetynessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Safeness vs Safetyness
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🛡️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Safeness&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Safetyness&quot; is always incorrect - remember the proper suffix formation!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Safetyness</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a redundant suffix formation that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Safeness</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the quality or state of being safe.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Suffix Rule</h3>
              <p className="text-yellow-800">Think: &quot;Safe + ness = safeness&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">No Double Suffix</h3>
              <p className="text-blue-800">&quot;Safety&quot; already has &quot;ty&quot; suffix</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;safeness&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why is &quot;safetyness&quot; incorrect?</h3>
              <p className="text-lg text-gray-700">A: &quot;Safetyness&quot; is incorrect because it creates a redundant double suffix. &quot;Safety&quot; already has the &quot;-ty&quot; suffix, and adding &quot;-ness&quot; creates an awkward and grammatically incorrect formation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: When should I use &quot;safeness&quot; vs &quot;safety&quot;?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;safeness&quot; when referring to the abstract quality or state of being safe. Use &quot;safety&quot; when referring to the condition of being protected from harm or the measures taken to ensure protection.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;safeness&quot; commonly used in modern English?</h3>
              <p className="text-lg text-gray-700">A: While &quot;safeness&quot; is grammatically correct, &quot;safety&quot; is more commonly used in modern English. &quot;Safeness&quot; might be used in more formal or literary contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;safeness&quot; and &quot;security&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Safeness&quot; refers to the quality of being free from harm or danger, while &quot;security&quot; typically refers to protection against threats, theft, or unauthorized access. They have overlapping but distinct meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can I use &quot;safeness&quot; in academic writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;safeness&quot; is acceptable in academic writing, though &quot;safety&quot; is more commonly used. Choose based on your specific context and the nuance you want to convey.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Safeness&quot;</strong> is the correct form meaning &quot;the quality of being safe.&quot; 
          <br />
          <strong>&quot;Safetyness&quot;</strong> is never correct due to redundant suffix formation.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAFENESS = SAFE + ness, not SAFETY + ness&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-rose-500 pb-2">Featured Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/safety-vs-saftey" className="block p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
              <p className="font-semibold text-rose-800">Safety vs Saftey</p>
              <p className="text-sm text-rose-600">Letter transposition mistake</p>
            </Link>
            <Link href="/spelling/sandwich-vs-sendwich" className="block p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
              <p className="font-semibold text-rose-800">Sandwich vs Sendwich</p>
              <p className="text-sm text-rose-600">Common food spelling mistake</p>
            </Link>
            <Link href="/spelling/salary-vs-salery" className="block p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
              <p className="font-semibold text-rose-800">Salary vs Salery</p>
              <p className="text-sm text-rose-600">Work payment spelling guide</p>
            </Link>
            <Link href="/spelling/same-vs-smae" className="block p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
              <p className="font-semibold text-rose-800">Same vs Smae</p>
              <p className="text-sm text-rose-600">Identity comparison spelling</p>
            </Link>
            <Link href="/spelling/salesman-vs-saleman" className="block p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
              <p className="font-semibold text-rose-800">Salesman vs Saleman</p>
              <p className="text-sm text-rose-600">Professional title spelling</p>
            </Link>
          </div>
        </div>

        {/* Related Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-pink-500 pb-2">Related Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/safety-vs-savety" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Safety vs Savety</p>
              <p className="text-sm text-pink-600">Another safety spelling variant</p>
            </Link>
            <Link href="/spelling/safety-vs-safty" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Safety vs Safty</p>
              <p className="text-sm text-pink-600">Missing letter spelling mistake</p>
            </Link>
            <Link href="/spelling/safely-vs-safley" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Safely vs Safley</p>
              <p className="text-sm text-pink-600">Adverb spelling confusion</p>
            </Link>
            <Link href="/spelling/sadder-vs-sader" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Sadder vs Sader</p>
              <p className="text-sm text-pink-600">Comparative form spelling</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacriligious" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Sacrilegious vs Sacriligious</p>
              <p className="text-sm text-pink-600">Religious term spelling</p>
            </Link>
          </div>
        </div>

        {/* Other Word Finder Tools */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2">Other Word Finder Tools</h3>
          <div className="space-y-3">
            <Link href="/scrabble-calculator" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Scrabble Calculator</p>
              <p className="text-sm text-purple-600">Calculate word scores</p>
            </Link>
            <Link href="/word-unscrambler" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Word Unscrambler</p>
              <p className="text-sm text-purple-600">Unscramble letters to find words</p>
            </Link>
            <Link href="/anagram-solver" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Anagram Solver</p>
              <p className="text-sm text-purple-600">Find anagrams of any word</p>
            </Link>
            <Link href="/wordle-helper" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Wordle Helper</p>
              <p className="text-sm text-purple-600">Get help with Wordle puzzles</p>
            </Link>
            <Link href="/rhyme-finder" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Rhyme Finder</p>
              <p className="text-sm text-purple-600">Find rhyming words</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}