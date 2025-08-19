import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supposedly vs Supposably - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supposedly&quot; and &quot;supposably&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupposedlyVsSupposablyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Supposedly vs Supposably
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between These Commonly Confused Words
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔍</span>
            <span className="text-2xl font-bold text-green-600">Both Words Exist!</span>
            <span className="text-2xl ml-3">✨</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supposedly&quot; means according to what is believed, while &quot;supposably&quot; means as may be supposed or imagined.
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Supposedly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT & COMMON</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                Means &quot;according to what is generally believed or assumed to be true.&quot;
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Supposably</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">⚠️ RARE & FORMAL</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                Means &quot;as may be supposed or imagined,&quot; but is rarely used in modern English.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Supposedly&quot; (Common)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Widely used in everyday language</li>
                <li>• Means &quot;believed to be true&quot;</li>
                <li>• Often implies skepticism</li>
                <li>• Common in news and conversation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Key Differences</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Frequency of use</li>
                <li>• Context and formality</li>
                <li>• Nuance of meaning</li>
                <li>• Modern vs. archaic usage</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Supposably&quot; (Rare)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Very rare in modern English</li>
                <li>• More formal or literary</li>
                <li>• Means &quot;imaginably possible&quot;</li>
                <li>• Often replaced by &quot;supposedly&quot;</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Supposedly (Common Usage)</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;He <strong>supposedly</strong> knows the answer.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;She <strong>supposedly</strong> left early.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;They <strong>supposedly</strong> finished the work.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;It <strong>supposedly</strong> happened yesterday.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">⚠️ Supposably (Rare Usage)</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;This could <strong>supposably</strong> happen.&quot;</p>
                <p className="text-sm text-purple-600 mt-1">Very formal, rarely used</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;It is <strong>supposably</strong> possible.&quot;</p>
                <p className="text-sm text-purple-600 mt-1">Literary or formal context</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;Such an outcome is <strong>supposably</strong> conceivable.&quot;</p>
                <p className="text-sm text-purple-600 mt-1">Academic or philosophical writing</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;This could <strong>supposably</strong> be true.&quot;</p>
                <p className="text-sm text-purple-600 mt-1">Hypothetical or theoretical context</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Frequency Rule</h3>
              <p className="text-blue-800">&quot;Supposedly&quot; is used 99% of the time</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think Common</h3>
              <p className="text-indigo-800">&quot;Supposedly&quot; is the everyday word</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Formal vs Casual</h3>
              <p className="text-purple-800">&quot;Supposably&quot; is very formal</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">When in Doubt</h3>
              <p className="text-cyan-800">Use &quot;supposedly&quot; - it&apos;s always safe</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">When to Use &quot;Supposedly&quot;</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>News reporting:</strong> &quot;He supposedly knows&quot;</li>
                <li>• <strong>Everyday conversation:</strong> &quot;She supposedly left&quot;</li>
                <li>• <strong>Casual writing:</strong> &quot;They supposedly finished&quot;</li>
                <li>• <strong>Expressing doubt:</strong> &quot;It supposedly happened&quot;</li>
                <li>• <strong>Gossip or rumors:</strong> &quot;He supposedly said&quot;</li>
                <li>• <strong>General beliefs:</strong> &quot;It supposedly works&quot;</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">When to Use &quot;Supposably&quot;</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Academic writing:</strong> &quot;This is supposably possible&quot;</li>
                <li>• <strong>Philosophical discussions:</strong> &quot;Supposably conceivable&quot;</li>
                <li>• <strong>Formal literature:</strong> &quot;It could supposably occur&quot;</li>
                <li>• <strong>Theoretical contexts:</strong> &quot;Supposably true&quot;</li>
                <li>• <strong>Legal documents:</strong> &quot;Supposably valid&quot;</li>
                <li>• <strong>Rare occasions:</strong> When you need formal precision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;supposably&quot; a real word?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;supposably&quot; is a real word, but it&apos;s very rare in modern English. It means &quot;as may be supposed or imagined&quot; and is mostly used in formal or academic contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Which word should I use in everyday conversation?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;supposedly&quot; in everyday conversation. It&apos;s the standard word that everyone understands and uses regularly. &quot;Supposably&quot; would sound overly formal or unusual.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference in meaning between these words?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposedly&quot; means according to what is believed or assumed to be true, while &quot;supposably&quot; means as may be supposed or imagined. The latter is more about possibility than belief.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can I use &quot;supposably&quot; in academic writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;supposably&quot; can be used in academic writing, but it&apos;s very rare. Most academic writers use &quot;supposedly&quot; or other alternatives like &quot;theoretically&quot; or &quot;conceivably.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why is &quot;supposably&quot; so rarely used?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposably&quot; has largely fallen out of use because &quot;supposedly&quot; serves the same purpose in most contexts, and other words like &quot;theoretically&quot; or &quot;conceivably&quot; are more commonly used for expressing possibility.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there any synonyms for &quot;supposedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Common synonyms include: allegedly, purportedly, reportedly, apparently, ostensibly, and theoretically. Each has slightly different connotations and usage patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of these words?</h3>
              <p className="text-lg text-gray-700">A: Both words come from the verb &quot;suppose.&quot; &quot;Supposedly&quot; is the more common adverb form, while &quot;supposably&quot; is a less common variant that emphasizes possibility rather than belief.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;supposedly&quot; express skepticism?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposedly&quot; often implies skepticism or doubt about the truth of a statement. It suggests that something is claimed to be true but may not be, making it perfect for expressing uncertainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the difference between &quot;supposedly&quot; and &quot;allegedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposedly&quot; means according to what is generally believed, while &quot;allegedly&quot; means according to what has been claimed without proof. &quot;Allegedly&quot; has stronger legal connotations and implies a formal accusation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How do I remember which word to use?</h3>
              <p className="text-lg text-gray-700">A: Remember: &quot;Supposedly&quot; is the everyday word you hear all the time. &quot;Supposably&quot; is very rare and formal. When in doubt, use &quot;supposedly&quot; - it&apos;s always appropriate and widely understood.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can I use both words in the same sentence?</h3>
              <p className="text-lg text-gray-700">A: While technically possible, using both words in the same sentence would be awkward and confusing. It&apos;s better to choose one word that fits your meaning and stick with it throughout your writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the most common mistake with these words?</h3>
              <p className="text-lg text-gray-700">A: The most common mistake is using &quot;supposably&quot; when you mean &quot;supposedly.&quot; Since &quot;supposably&quot; is so rare, most people expect &quot;supposedly&quot; and using the rarer word can make your writing sound awkward or pretentious.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          <strong>&quot;Supposedly&quot;</strong> is your go-to word for everyday use, meaning &quot;according to what is believed.&quot;
          <br />
          <strong>&quot;Supposably&quot;</strong> exists but is very rare - stick with &quot;supposedly&quot; unless you need formal precision.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Use &quot;supposedly&quot; 99% of the time - it&apos;s always safe and widely understood!</p>
        </div>
      </div>
    </div>
  )
}
