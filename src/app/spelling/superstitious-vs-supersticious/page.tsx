import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Superstitious vs Supersticious - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;superstitious&quot; and &quot;supersticious&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuperstitiousVsSupersticiousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Superstitious vs Supersticious
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Superstitious&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supersticious&quot; is always incorrect - remember the &quot;tious&quot; ending in &quot;superstitious&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supersticious</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Superstitious</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;having or showing a belief in superstitions.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Superstitious&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;tious&quot;</li>
                <li>• Follows &quot;superstition&quot; pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Common Error</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• &quot;Supersticious&quot; is wrong</li>
                <li>• Has &quot;cious&quot; instead of &quot;tious&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Memory Aid</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Think &quot;SUPERSTITION + OUS&quot;</li>
                <li>• &quot;superstition&quot; like the noun</li>
                <li>• &quot;-ous&quot; for adjectives</li>
                <li>• Related to &quot;superstition&quot;</li>
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
                <p className="text-lg text-green-800">&quot;She is very <strong>superstitious</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Don&apos;t be <strong>superstitious</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He has <strong>superstitious</strong> beliefs.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>superstitious</strong> person avoided black cats.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is very <strong>supersticious</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superstitious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t be <strong>supersticious</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superstitious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has <strong>supersticious</strong> beliefs.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superstitious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>supersticious</strong> person avoided black cats.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;superstitious&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">TIOUS Ending Rule</h3>
              <p className="text-green-800">&quot;Superstitious&quot; ends with &quot;tious&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Superstition</h3>
              <p className="text-rose-800">&quot;Superstitious&quot; like &quot;superstition&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Pattern Recognition</h3>
              <p className="text-pink-800">Adjectives ending with &quot;-tious&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUPERSTITION + OUS = Superstitious</p>
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
                <li>• <strong>Superstitious beliefs</strong> - belief in superstitions</li>
                <li>• <strong>Superstitious person</strong> - person who believes</li>
                <li>• <strong>Superstitious behavior</strong> - behavior based on beliefs</li>
                <li>• <strong>Superstitious rituals</strong> - rituals based on beliefs</li>
                <li>• <strong>Superstitious thinking</strong> - thinking based on beliefs</li>
                <li>• <strong>Superstitious practices</strong> - practices based on beliefs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The superstitious person&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;She is superstitious&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More superstitious&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most superstitious&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Superstitiously&quot;</li>
                <li>• <strong>Noun:</strong> &quot;Superstitiousness&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;superstitious&quot; as &quot;supersticious&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse the ending with words like &quot;suspicious&quot; or &quot;delicious&quot; that end in &quot;-cious&quot;. They might accidentally use &quot;cious&quot; instead of &quot;tious&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;superstitious&quot; related to &quot;superstition&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Superstitious&quot; comes from the noun &quot;superstition&quot;. Think of it as &quot;having the quality of superstition&quot; - the adjective form of the noun.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;superstitious&quot; and &quot;religious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superstitious&quot; refers to beliefs in supernatural influences or omens, while &quot;religious&quot; refers to beliefs in a higher power or organized faith system. Both involve belief but in different things.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;superstitious&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Superstitious&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;superstitious&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: credulous, gullible, irrational, mystical, and magical. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the noun &quot;superstition&quot; and remember that &quot;superstitious&quot; ends with &quot;tious&quot;. The &quot;tious&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPERSTITIOUS ends with TIOUS&quot;. Or remember: &quot;SUPERSTITION + OUS&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;superstitious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superstitious&quot; is an adjective derived from the noun &quot;superstition&quot;. For example: &quot;I have a superstition&quot; (noun), &quot;I am superstitious&quot; (adjective).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;superstitious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superstitious&quot; comes from the Latin &quot;superstitiosus&quot; meaning &quot;prophetic, full of dread of the supernatural,&quot; from &quot;superstitio&quot; meaning &quot;prophecy, superstition.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Can &quot;superstitious&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;superstitious&quot; is only an adjective. The noun form is &quot;superstition&quot;. For example: &quot;I have a superstition&quot; (noun), &quot;I am superstitious&quot; (adjective).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What&apos;s the difference between &quot;superstitious&quot; and &quot;mystical&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superstitious&quot; refers to beliefs in supernatural influences or omens, while &quot;mystical&quot; refers to spiritual or mysterious experiences. Both involve the supernatural but differently.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;superstitious&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Superstitious&quot; can be used in various contexts: describing people, beliefs, behavior, rituals, and thinking patterns. It always refers to having or showing belief in superstitions.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Superstitious&quot;</strong> ends with &quot;tious&quot; and means &quot;having or showing a belief in superstitions.&quot; 
          <br />
          <strong>&quot;Supersticious&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPERSTITION + OUS&quot; and remember the &quot;tious&quot; ending!</p>
        </div>
      </div>
    </div>
  )
}
