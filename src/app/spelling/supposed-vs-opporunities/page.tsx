import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supposed vs Opporunities - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supposed&quot; and &quot;opporunities&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupposedVsOpporunitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Supposed vs Opporunities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between These Commonly Confused Words
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔍</span>
            <span className="text-2xl font-bold text-green-600">Different Words!</span>
            <span className="text-2xl ml-3">✨</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supposed&quot; means assumed to be true, while &quot;opporunities&quot; is a misspelling of &quot;opportunities.&quot;
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supposed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT WORD</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                Means &quot;assumed to be true&quot; or &quot;expected.&quot; A different word entirely.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Opporunities</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT SPELLING</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This is a misspelling of &quot;opportunities.&quot; Should have double &quot;p&quot; and &quot;t.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supposed&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;assumed to be true&quot;</li>
                <li>• Past tense of &quot;suppose&quot;</li>
                <li>• Completely different word</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Differences</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Different meanings</li>
                <li>• Different word origins</li>
                <li>• Different parts of speech</li>
                <li>• Different usage contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Opporunities&quot; (Wrong)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Misspelling of &quot;opportunities&quot;</li>
                <li>• Missing &quot;p&quot; and &quot;t&quot;</li>
                <li>• Should be &quot;opportunities&quot;</li>
                <li>• Common typo</li>
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Supposed (Correct Usage)</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He was <strong>supposed</strong> to arrive at 3 PM.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>supposed</strong> he would come.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>supposed</strong> it was true.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;It was <strong>supposed</strong> to rain today.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Opporunities (Incorrect)</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;There are many <strong>opporunities</strong> here.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;opportunities&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Great <strong>opporunities</strong> await.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;opportunities&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Job <strong>opporunities</strong> available.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;opportunities&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Business <strong>opporunities</strong> arise.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;opportunities&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">Different Words</h3>
              <p className="text-green-800">&quot;Supposed&quot; and &quot;opportunities&quot; are different</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Think Meaning</h3>
              <p className="text-gray-800">Different meanings = different words</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Spelling Check</h3>
              <p className="text-red-800">&quot;Opportunities&quot; has double &quot;p&quot; and &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Context Matters</h3>
              <p className="text-slate-800">Use the right word for the right meaning</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">When to Use &quot;Supposed&quot;</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Expectations:</strong> &quot;He was supposed to arrive&quot;</li>
                <li>• <strong>Assumptions:</strong> &quot;I supposed it was true&quot;</li>
                <li>• <strong>Beliefs:</strong> &quot;The supposed truth&quot;</li>
                <li>• <strong>Past actions:</strong> &quot;She supposed he would come&quot;</li>
                <li>• <strong>Obligations:</strong> &quot;You are supposed to know&quot;</li>
                <li>• <strong>Hypotheticals:</strong> &quot;Supposed it happened&quot;</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">When to Use &quot;Opportunities&quot;</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Chances:</strong> &quot;Great opportunities await&quot;</li>
                <li>• <strong>Possibilities:</strong> &quot;Job opportunities available&quot;</li>
                <li>• <strong>Prospects:</strong> &quot;Business opportunities arise&quot;</li>
                <li>• <strong>Advantages:</strong> &quot;Learning opportunities&quot;</li>
                <li>• <strong>Openings:</strong> &quot;Career opportunities&quot;</li>
                <li>• <strong>Potential:</strong> &quot;Growth opportunities&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Are &quot;supposed&quot; and &quot;opporunities&quot; the same word?</h3>
              <p className="text-lg text-gray-700">A: No! They are completely different words. &quot;Supposed&quot; means assumed to be true, while &quot;opporunities&quot; is a misspelling of &quot;opportunities&quot; meaning chances or possibilities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What does &quot;supposed&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposed&quot; means assumed to be true, expected, or believed. It&apos;s the past tense and past participle form of the verb &quot;suppose.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s wrong with &quot;opporunities&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Opporunities&quot; is a misspelling of &quot;opportunities.&quot; It should have double &quot;p&quot; and &quot;t&quot;: &quot;opportunities.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can I use &quot;supposed&quot; in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposed&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;supposed&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: assumed, presumed, expected, believed, thought, imagined, and considered. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling of &quot;opportunities&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think: &quot;OPPORTUNITIES has double P and T&quot;. Remember: &quot;OPPORTUNE + ITIES&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for these words?</h3>
              <p className="text-lg text-gray-700">A: Yes! For &quot;supposed&quot;: think &quot;SUPPOSE + ED&quot;. For &quot;opportunities&quot;: think &quot;OPPORTUNE + ITIES&quot; with double P and T.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the base form of &quot;supposed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The base form is &quot;suppose.&quot; For example: &quot;I suppose&quot; (present), &quot;I supposed&quot; (past), &quot;I have supposed&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;opportunities&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Opportunities&quot; comes from the Latin &quot;opportunitas&quot; meaning &quot;fitness&quot; or &quot;convenience,&quot; related to &quot;opportune&quot; meaning timely or well-chosen.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;supposed&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supposed&quot; can function as an adjective meaning &quot;assumed&quot; or &quot;believed.&quot; For example: &quot;the supposed truth&quot; or &quot;a supposed expert.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the difference between &quot;supposed&quot; and &quot;assumed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supposed&quot; means believed or expected to be true, while &quot;assumed&quot; means taken for granted or accepted without proof. Both imply uncertainty.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How do I use these words in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;supposed&quot; for expectations and assumptions. Use &quot;opportunities&quot; for chances and possibilities. They serve completely different purposes in language.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          <strong>&quot;Supposed&quot;</strong> means assumed to be true or expected - a completely different word.
          <br />
          <strong>&quot;Opporunities&quot;</strong> is a misspelling of &quot;opportunities&quot; - should have double &quot;p&quot; and &quot;t&quot;.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: These are different words with different meanings - use the right one for the right context!</p>
        </div>
      </div>
    </div>
  )
}
