import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sabbath vs Sabath - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sabbath&quot; and &quot;sabath&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SabbathVsSabathPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Sabbath vs Sabath
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⛪</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sabbath&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sabath&quot; is always incorrect - remember the double &quot;b&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sabath</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common spelling mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sabbath</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a day of religious observance and abstinence from work.&quot;
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
              <div className="text-4xl mb-3">⛪</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double B Rule</h3>
              <p className="text-yellow-800">Think: &quot;Sabbath has double b&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Word Origin</h3>
              <p className="text-blue-800">From Hebrew &quot;shabbat&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sabbath&quot; to build muscle memory</p>
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
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why does &quot;sabbath&quot; have two &quot;b&quot;s?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sabbath&quot; has two &quot;b&quot;s because it comes from the Hebrew word &quot;shabbat&quot;. The double &quot;b&quot; is preserved in the English transliteration to maintain the original pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What does &quot;sabbath&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sabbath&quot; refers to a day of religious observance and abstinence from work, traditionally observed on Saturday by Jews and some Christians, and on Sunday by most Christians.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How is &quot;sabbath&quot; pronounced?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sabbath&quot; is pronounced as &quot;SAB-uth&quot; with the stress on the first syllable. The double &quot;b&quot; creates a short &quot;a&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sabbath&quot; and &quot;rest day&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to a day of rest, &quot;sabbath&quot; specifically refers to a religious day of rest and worship, while &quot;rest day&quot; is a more general term for any day off from work.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sabbath&quot; comes from Hebrew &quot;shabbat&quot; and has double &quot;b&quot;. Think of the pattern: &quot;Sab&quot; + &quot;bath&quot; = &quot;Sabbath&quot; with double &quot;b.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sabbath&quot;</strong> has double &quot;b&quot; and means &quot;a day of religious rest.&quot; 
          <br />
          <strong>&quot;Sabath&quot;</strong> is never correct due to missing the second &quot;b&quot;.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SABBATH = SAB + bath with double B&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-500 pb-2">Featured Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sabbatical-vs-sabatical" className="block p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
              <p className="font-semibold text-cyan-800">Sabbatical vs Sabatical</p>
              <p className="text-sm text-cyan-600">Academic term spelling</p>
            </Link>
            <Link href="/spelling/sacrilege-vs-sacralige" className="block p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
              <p className="font-semibold text-cyan-800">Sacrilege vs Sacralige</p>
              <p className="text-sm text-cyan-600">Spelling confusion</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacriligious" className="block p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
              <p className="font-semibold text-cyan-800">Sacrilegious vs Sacriligious</p>
              <p className="text-sm text-cyan-600">Suffix confusion</p>
            </Link>
            <Link href="/spelling/sadder-vs-sader" className="block p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
              <p className="font-semibold text-cyan-800">Sadder vs Sader</p>
              <p className="text-sm text-cyan-600">Comparative form spelling</p>
            </Link>
            <Link href="/spelling/safely-vs-safley" className="block p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
              <p className="font-semibold text-cyan-800">Safely vs Safley</p>
              <p className="text-sm text-cyan-600">Adverb suffix confusion</p>
            </Link>
          </div>
        </div>

        {/* Related Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Related Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sacrilegious-vs-sacreligous" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <p className="font-semibold text-blue-800">Sacrilegious vs Sacreligous</p>
              <p className="text-sm text-blue-600">Another religious spelling variant</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligious" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <p className="font-semibold text-blue-800">Sacrilegious vs Sacreligious</p>
              <p className="text-sm text-blue-600">Religious spelling confusion</p>
            </Link>
            <Link href="/spelling/safeness-vs-safetyness" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <p className="font-semibold text-blue-800">Safeness vs Safetyness</p>
              <p className="text-sm text-blue-600">Suffix formation confusion</p>
            </Link>
            <Link href="/spelling/safety-vs-saftey" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <p className="font-semibold text-blue-800">Safety vs Saftey</p>
              <p className="text-sm text-blue-600">Letter transposition mistake</p>
            </Link>
            <Link href="/spelling/sandwich-vs-sendwich" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <p className="font-semibold text-blue-800">Sandwich vs Sendwich</p>
              <p className="text-sm text-blue-600">Common food spelling mistake</p>
            </Link>
          </div>
        </div>

        {/* Learned Grammar */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">Learned Grammar</h3>
          <div className="space-y-3">
            <Link href="/grammar/4th-grade-worksheets-past-continuous-tense" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <p className="font-semibold text-indigo-800">Past Continuous Tense</p>
              <p className="text-sm text-indigo-600">Progressive past actions</p>
            </Link>
            <Link href="/grammar/4th-grade-worksheets-quotation-marks" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <p className="font-semibold text-indigo-800">Quotation Marks</p>
              <p className="text-sm text-indigo-600">Direct speech punctuation</p>
            </Link>
            <Link href="/grammar/5th-grade-worksheets-parts-of-speech" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <p className="font-semibold text-indigo-800">Parts of Speech</p>
              <p className="text-sm text-indigo-600">Word classification guide</p>
            </Link>
            <Link href="/grammar/100-adjectives-that-start-with-h" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <p className="font-semibold text-indigo-800">Adjectives Starting with H</p>
              <p className="text-sm text-indigo-600">Descriptive words list</p>
            </Link>
            <Link href="/grammar/100-adjectives-that-start-with-k" className="block p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <p className="font-semibold text-indigo-800">Adjectives Starting with K</p>
              <p className="text-sm text-indigo-600">K-words vocabulary</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}