import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sabbatical vs Sabatical - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sabbatical&quot; and &quot;sabatical&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SabbaticalVsSabaticalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Sabbatical vs Sabatical
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📚</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sabbatical&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sabatical&quot; is always incorrect - remember the double &quot;b&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sabatical</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sabbatical</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a period of paid leave granted to university teachers.&quot;
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
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double B Rule</h3>
              <p className="text-yellow-800">Think: &quot;Sabbatical has double b&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Word Origin</h3>
              <p className="text-blue-800">From &quot;Sabbath&quot; + &quot;ical&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sabbatical&quot; to build muscle memory</p>
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
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why does &quot;sabbatical&quot; have two &quot;b&quot;s?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sabbatical&quot; has two &quot;b&quot;s because it comes from the word &quot;Sabbath&quot; + the suffix &quot;-ical&quot;. The double &quot;b&quot; is preserved from the original word &quot;Sabbath.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What does &quot;sabbatical&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sabbatical&quot; refers to a period of paid leave granted to university teachers and other professionals for study or travel, traditionally occurring every seventh year.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How is &quot;sabbatical&quot; pronounced?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sabbatical&quot; is pronounced as &quot;suh-BAT-i-kuhl&quot; with the stress on the second syllable. The double &quot;b&quot; creates a short &quot;a&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;sabbatical&quot; and &quot;vacation&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;sabbatical&quot; is typically a longer, more structured break for professional development or research, while a &quot;vacation&quot; is a shorter period of rest and recreation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sabbatical&quot; comes from &quot;Sabbath&quot; + &quot;-ical&quot;. Think of the pattern: &quot;Sabbath&quot; (with double &quot;b&quot;) + &quot;ical&quot; = &quot;Sabbatical.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sabbatical&quot;</strong> has double &quot;b&quot; and means &quot;a period of paid leave for study.&quot; 
          <br />
          <strong>&quot;Sabatical&quot;</strong> is never correct due to missing the second &quot;b&quot;.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SABBATICAL = SABBATH + ical with double B&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">Featured Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sacrilege-vs-sacralige" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <p className="font-semibold text-orange-800">Sacrilege vs Sacralige</p>
              <p className="text-sm text-orange-600">Spelling confusion</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacriligious" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <p className="font-semibold text-orange-800">Sacrilegious vs Sacriligious</p>
              <p className="text-sm text-orange-600">Suffix confusion</p>
            </Link>
            <Link href="/spelling/sadder-vs-sader" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <p className="font-semibold text-orange-800">Sadder vs Sader</p>
              <p className="text-sm text-orange-600">Comparative form spelling</p>
            </Link>
            <Link href="/spelling/safely-vs-safley" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <p className="font-semibold text-orange-800">Safely vs Safley</p>
              <p className="text-sm text-orange-600">Adverb suffix confusion</p>
            </Link>
            <Link href="/spelling/safeness-vs-safetyness" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <p className="font-semibold text-orange-800">Safeness vs Safetyness</p>
              <p className="text-sm text-orange-600">Suffix formation confusion</p>
            </Link>
          </div>
        </div>

        {/* Related Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-500 pb-2">Related Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sabbath-vs-sabath" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <p className="font-semibold text-red-800">Sabbath vs Sabath</p>
              <p className="text-sm text-red-600">Religious day spelling</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligous" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <p className="font-semibold text-red-800">Sacrilegious vs Sacreligous</p>
              <p className="text-sm text-red-600">Another religious spelling variant</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligious" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <p className="font-semibold text-red-800">Sacrilegious vs Sacreligious</p>
              <p className="text-sm text-red-600">Religious spelling confusion</p>
            </Link>
            <Link href="/spelling/safety-vs-saftey" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <p className="font-semibold text-red-800">Safety vs Saftey</p>
              <p className="text-sm text-red-600">Letter transposition mistake</p>
            </Link>
            <Link href="/spelling/sandwich-vs-sendwich" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <p className="font-semibold text-red-800">Sandwich vs Sendwich</p>
              <p className="text-sm text-red-600">Common food spelling mistake</p>
            </Link>
          </div>
        </div>

        {/* Learned Grammar */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-pink-500 pb-2">Learned Grammar</h3>
          <div className="space-y-3">
            <Link href="/grammar/action-verbs" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Action Verbs</p>
              <p className="text-sm text-pink-600">Dynamic verb examples</p>
            </Link>
            <Link href="/grammar/adjective-examples" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Adjective Examples</p>
              <p className="text-sm text-pink-600">Descriptive word guide</p>
            </Link>
            <Link href="/grammar/abstract-nouns" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Abstract Nouns</p>
              <p className="text-sm text-pink-600">Concept naming words</p>
            </Link>
            <Link href="/grammar/active-vs-passive-voice" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Active vs Passive Voice</p>
              <p className="text-sm text-pink-600">Sentence structure guide</p>
            </Link>
            <Link href="/grammar/3rd-grade-worksheets-helping-verbs" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
              <p className="font-semibold text-pink-800">Helping Verbs</p>
              <p className="text-sm text-pink-600">Auxiliary verb guide</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}