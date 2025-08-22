import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sacrilegious vs Sacreligous - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sacrilegious&quot; and &quot;sacreligous&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SacrilegiousVsSacreligousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Sacrilegious vs Sacreligous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⛪</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sacrilegious&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sacreligous&quot; is always incorrect - remember the &quot;i&quot; before &quot;g&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sacreligous</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common suffix mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sacrilegious</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;violating or profaning what is sacred.&quot;
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I Before G Rule</h3>
              <p className="text-yellow-800">Think: &quot;Sacrilegious has i before g&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Word Breakdown</h3>
              <p className="text-blue-800">&quot;Sacrilege + ous = sacrilegious&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sacrilegious&quot; to build muscle memory</p>
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
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why is &quot;sacreligous&quot; incorrect?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sacreligous&quot; is incorrect because it uses the wrong suffix. The correct form is &quot;sacrilegious&quot; with &quot;-ous&quot;, not &quot;-ous&quot;. The word comes from &quot;sacrilege&quot; + &quot;-ous&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What does &quot;sacrilegious&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sacrilegious&quot; means violating or profaning what is sacred or holy. It describes actions that show disrespect for religious beliefs, practices, or sacred objects.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How is &quot;sacrilegious&quot; pronounced?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sacrilegious&quot; is pronounced as &quot;sak-ruh-LEE-jus&quot; with the stress on the third syllable. The &quot;g&quot; is pronounced like a &quot;j&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between &quot;sacrilegious&quot; and &quot;blasphemous&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to religious disrespect, &quot;sacrilegious&quot; specifically refers to violating sacred things or places, while &quot;blasphemous&quot; refers to speaking irreverently about God or sacred things.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sacrilegious&quot; comes from &quot;sacrilege&quot; + &quot;-ous&quot;. Think of the pattern: &quot;Sacrilege&quot; (noun) + &quot;ous&quot; = &quot;Sacrilegious&quot; (adjective).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sacrilegious&quot;</strong> is the correct form meaning &quot;violating what is sacred.&quot; 
          <br />
          <strong>&quot;Sacreligous&quot;</strong> is never correct due to incorrect suffix usage.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SACRILEGIOUS = SACRILEGE + ous&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2">Featured Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sacrilegious-vs-sacriligious" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Sacrilegious vs Sacriligious</p>
              <p className="text-sm text-purple-600">Suffix confusion</p>
            </Link>
            <Link href="/spelling/sadder-vs-sader" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Sadder vs Sader</p>
              <p className="text-sm text-purple-600">Comparative form spelling</p>
            </Link>
            <Link href="/spelling/safely-vs-safley" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Safely vs Safley</p>
              <p className="text-sm text-purple-600">Adverb suffix confusion</p>
            </Link>
            <Link href="/spelling/safeness-vs-safetyness" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Safeness vs Safetyness</p>
              <p className="text-sm text-purple-600">Suffix formation confusion</p>
            </Link>
            <Link href="/spelling/safety-vs-saftey" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-purple-800">Safety vs Saftey</p>
              <p className="text-sm text-purple-600">Letter transposition mistake</p>
            </Link>
          </div>
        </div>

        {/* Related Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-violet-500 pb-2">Related Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sacrilegious-vs-sacreligious" className="block p-3 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors">
              <p className="font-semibold text-violet-800">Sacrilegious vs Sacreligious</p>
              <p className="text-sm text-violet-600">Religious spelling confusion</p>
            </Link>
            <Link href="/spelling/sacrilege-vs-sacralige" className="block p-3 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors">
              <p className="font-semibold text-violet-800">Sacrilege vs Sacralige</p>
              <p className="text-sm text-violet-600">Noun form spelling mistake</p>
            </Link>
            <Link href="/spelling/sabbatical-vs-sabatical" className="block p-3 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors">
              <p className="font-semibold text-violet-800">Sabbatical vs Sabatical</p>
              <p className="text-sm text-violet-600">Academic term spelling</p>
            </Link>
            <Link href="/spelling/sabbath-vs-sabath" className="block p-3 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors">
              <p className="font-semibold text-violet-800">Sabbath vs Sabath</p>
              <p className="text-sm text-violet-600">Religious day spelling</p>
            </Link>
            <Link href="/spelling/sandwich-vs-sendwich" className="block p-3 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors">
              <p className="font-semibold text-violet-800">Sandwich vs Sendwich</p>
              <p className="text-sm text-violet-600">Common food spelling mistake</p>
            </Link>
          </div>
        </div>

        {/* Learned Grammar */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-fuchsia-500 pb-2">Learned Grammar</h3>
          <div className="space-y-3">
            <Link href="/confusing-words/assure-vs-ensure" className="block p-3 bg-fuchsia-50 rounded-lg hover:bg-fuchsia-100 transition-colors">
              <p className="font-semibold text-fuchsia-800">Assure vs Ensure</p>
              <p className="text-sm text-fuchsia-600">Promise vs guarantee</p>
            </Link>
            <Link href="/confusing-words/attain-vs-obtain" className="block p-3 bg-fuchsia-50 rounded-lg hover:bg-fuchsia-100 transition-colors">
              <p className="font-semibold text-fuchsia-800">Attain vs Obtain</p>
              <p className="text-sm text-fuchsia-600">Achieve vs acquire</p>
            </Link>
            <Link href="/confusing-words/bear-vs-bare" className="block p-3 bg-fuchsia-50 rounded-lg hover:bg-fuchsia-100 transition-colors">
              <p className="font-semibold text-fuchsia-800">Bear vs Bare</p>
              <p className="text-sm text-fuchsia-600">Animal vs naked</p>
            </Link>
            <Link href="/confusing-words/capitol-vs-capital" className="block p-3 bg-fuchsia-50 rounded-lg hover:bg-fuchsia-100 transition-colors">
              <p className="font-semibold text-fuchsia-800">Capitol vs Capital</p>
              <p className="text-sm text-fuchsia-600">Building vs city</p>
            </Link>
            <Link href="/confusing-words/further-vs-farther" className="block p-3 bg-fuchsia-50 rounded-lg hover:bg-fuchsia-100 transition-colors">
              <p className="font-semibold text-fuchsia-800">Further vs Farther</p>
              <p className="text-sm text-fuchsia-600">Abstract vs physical distance</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}