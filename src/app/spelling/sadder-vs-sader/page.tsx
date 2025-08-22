import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sadder vs Sader - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sadder&quot; and &quot;sader&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SadderVsSaderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 bg-clip-text text-transparent">
          Sadder vs Sader
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-100 via-slate-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-gray-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">😢</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sadder&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sader&quot; is always incorrect - remember the double &quot;d&quot; in comparative forms!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sader</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common comparative form mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sadder</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;more sad&quot; or &quot;comparative form of sad.&quot;
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
              <div className="text-4xl mb-3">😢</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double D Rule</h3>
              <p className="text-yellow-800">Think: &quot;Sadder has double d&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Comparative Pattern</h3>
              <p className="text-blue-800">&quot;Sad&quot; + &quot;er&quot; = &quot;sadder&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sadder&quot; to build muscle memory</p>
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
          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Why does &quot;sadder&quot; have two &quot;d&quot;s?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sadder&quot; has two &quot;d&quot;s because of the comparative form rule. When adding &quot;-er&quot; to words ending in a consonant-vowel-consonant pattern (like &quot;sad&quot;), the final consonant is doubled to maintain the short vowel sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the comparative and superlative of &quot;sad&quot;?</h3>
              <p className="text-lg text-gray-700">A: The comparative form is &quot;sadder&quot; (more sad) and the superlative form is &quot;saddest&quot; (most sad). This follows the pattern: sad → sadder → saddest.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Are there other words that follow the same pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many one-syllable words follow this pattern: big → bigger, hot → hotter, thin → thinner, fat → fatter, and so on. The rule is: consonant-vowel-consonant + er = double the final consonant.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Can I use &quot;sader&quot; in informal writing?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sader&quot; should never be used, even in informal writing. It&apos;s always a spelling error and should be corrected to &quot;sadder.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember the rule: when adding &quot;-er&quot; to words like &quot;sad&quot; (consonant-vowel-consonant), double the final consonant. Think: &quot;Sad&quot; + &quot;er&quot; = &quot;Sadder&quot; with double &quot;d.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white p-8 rounded-2xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sadder&quot;</strong> has double &quot;d&quot; and is the comparative form of &quot;sad.&quot; 
          <br />
          <strong>&quot;Sader&quot;</strong> is never correct due to missing the doubled consonant rule.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SADDER = SAD + er with double D&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-500 pb-2">Featured Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/safely-vs-safley" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Safely vs Safley</p>
              <p className="text-sm text-gray-600">Adverb suffix confusion</p>
            </Link>
            <Link href="/spelling/safeness-vs-safetyness" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Safeness vs Safetyness</p>
              <p className="text-sm text-gray-600">Suffix formation confusion</p>
            </Link>
            <Link href="/spelling/safety-vs-saftey" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Safety vs Saftey</p>
              <p className="text-sm text-gray-600">Letter transposition mistake</p>
            </Link>
            <Link href="/spelling/sandwich-vs-sendwich" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Sandwich vs Sendwich</p>
              <p className="text-sm text-gray-600">Common food spelling mistake</p>
            </Link>
            <Link href="/spelling/salary-vs-salery" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Salary vs Salery</p>
              <p className="text-sm text-gray-600">Work payment spelling guide</p>
            </Link>
          </div>
        </div>

        {/* Related Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-slate-500 pb-2">Related Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/safety-vs-savety" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-800">Safety vs Savety</p>
              <p className="text-sm text-slate-600">Another safety spelling variant</p>
            </Link>
            <Link href="/spelling/safety-vs-safty" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-800">Safety vs Safty</p>
              <p className="text-sm text-slate-600">Missing letter spelling mistake</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacriligious" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-800">Sacrilegious vs Sacriligious</p>
              <p className="text-sm text-slate-600">Religious term spelling</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligous" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-800">Sacrilegious vs Sacreligous</p>
              <p className="text-sm text-slate-600">Another religious spelling variant</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligious" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <p className="font-semibold text-slate-800">Sacrilegious vs Sacreligious</p>
              <p className="text-sm text-slate-600">Religious spelling confusion</p>
            </Link>
          </div>
        </div>

        {/* Other Word Finder Tools */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-zinc-500 pb-2">Other Word Finder Tools</h3>
          <div className="space-y-3">
            <Link href="/scrabble-calculator" className="block p-3 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors">
              <p className="font-semibold text-zinc-800">Scrabble Calculator</p>
              <p className="text-sm text-zinc-600">Calculate word scores</p>
            </Link>
            <Link href="/word-unscrambler" className="block p-3 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors">
              <p className="font-semibold text-zinc-800">Word Unscrambler</p>
              <p className="text-sm text-zinc-600">Unscramble letters to find words</p>
            </Link>
            <Link href="/anagram-solver" className="block p-3 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors">
              <p className="font-semibold text-zinc-800">Anagram Solver</p>
              <p className="text-sm text-zinc-600">Find anagrams of any word</p>
            </Link>
            <Link href="/wordle-helper" className="block p-3 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors">
              <p className="font-semibold text-zinc-800">Wordle Helper</p>
              <p className="text-sm text-zinc-600">Get help with Wordle puzzles</p>
            </Link>
            <Link href="/rhyme-finder" className="block p-3 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors">
              <p className="font-semibold text-zinc-800">Rhyme Finder</p>
              <p className="text-sm text-zinc-600">Find rhyming words</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}