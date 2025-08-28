import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quote vs Qoute - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quote&quot; and &quot;qoute&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuoteVsQoutePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
          Quote vs Qoute
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t misspell the citation! Learn why the correct form needs that &quot;u&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-indigo-700">
          <strong>&quot;Quote&quot;</strong> is the correct spelling. &quot;Qoute&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Qoute</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold text-indigo-700 mb-3">✅ Correct: Quote</h3>
            <p className="text-indigo-600">This is the proper spelling that means &quot;to repeat or copy out words from a text or speech.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">📚 Correct Word</h3>
            <p className="text-indigo-700">
              <strong>Quote</strong> is both a verb and noun that refers to repeating someone&apos;s words or providing a price estimate.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Qoute</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">🔍 Etymology</h3>
            <p className="text-indigo-700">
              From Latin <em>quotare</em>, meaning &quot;to mark with numbers.&quot; The &quot;u&quot; in &quot;quote&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-indigo-700">She likes to <strong>quote</strong> famous authors in her speeches.</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-indigo-700">The <strong>quote</strong> from Shakespeare was inspiring.</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-indigo-700">Can you <strong>quote</strong> the exact price for this service?</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">She likes to <strong>qoute</strong> famous authors in her speeches. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>qoute</strong> from Shakespeare was inspiring. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Can you <strong>qoute</strong> the exact price for this service? <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🎯 Think &quot;Quotation&quot;</h3>
              <p className="text-indigo-700">Remember that &quot;quote&quot; comes from &quot;quotation&quot; - both have the &quot;quo&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🔤 &quot;Quo&quot; Pattern</h3>
              <p className="text-indigo-700">The &quot;quo&quot; in &quot;quote&quot; is like &quot;quotation&quot; - think &quot;quo&quot; + &quot;te&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">📝 Break It Down</h3>
              <p className="text-indigo-700">Think: &quot;Quo&quot; + &quot;te&quot; = &quot;quote&quot; - the &quot;u&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">🎨 Visual Association</h3>
              <p className="text-indigo-700">Picture the &quot;u&quot; as quotation marks - it&apos;s essential for the &quot;quote&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-indigo-600">• <strong>Quote</strong> unquote</p>
              <p className="text-indigo-600">• <strong>Quote</strong> marks</p>
              <p className="text-indigo-600">• <strong>Quote</strong> of the day</p>
              <p className="text-indigo-600">• <strong>Quote</strong> price</p>
              <p className="text-indigo-600">• <strong>Quote</strong> reference</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-indigo-600">• <strong>Verb:</strong> I quote the author</p>
              <p className="text-indigo-600">• <strong>Noun:</strong> The quote is famous</p>
              <p className="text-indigo-600">• <strong>Subject:</strong> Quote inspires readers</p>
              <p className="text-indigo-600">• <strong>Object:</strong> I love this quote</p>
              <p className="text-indigo-600">• <strong>Plural:</strong> Multiple quotes</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Why do people misspell &quot;quote&quot; as &quot;qoute&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;quo&quot; sound can be heard as &quot;qo,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;qoute&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;qoute&quot; is never correct in formal or informal writing. It should always be spelled as &quot;quote.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the difference between &quot;quote&quot; and &quot;quotation&quot;?</h3>
              <p className="text-gray-700">&quot;Quote&quot; is the verb (to cite) or short form, while &quot;quotation&quot; is the full noun form referring to the cited text.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;quote&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quote&quot; is commonly used in business to refer to price estimates, cost proposals, or citing business references.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;quotation&quot; - both words have the same &quot;quo&quot; pattern, and &quot;quote&quot; comes from &quot;quotation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;quote&quot; related to &quot;quotation marks&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;quote&quot; refers to the act of citing text, while &quot;quotation marks&quot; are the punctuation symbols used to indicate quoted text.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the base form of &quot;quote&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;quote.&quot; For example: &quot;I quote authors daily.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;quote&quot; be used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quote&quot; is essential in academic writing for citing sources, referencing other authors, and providing evidence.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the origin of the word &quot;quote&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;quotare,&quot; meaning &quot;to mark with numbers,&quot; with the English verb ending &quot;-e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">How common is the misspelling &quot;qoute&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the difference between &quot;quote&quot; and &quot;cite&quot;?</h3>
              <p className="text-gray-700">&quot;Quote&quot; means to repeat exact words, while &quot;cite&quot; means to reference a source, which may or may not include exact words.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;quote&quot; be used in journalism contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quote&quot; is fundamental in journalism for attributing statements to sources and providing direct speech.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the plural form of &quot;quote&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;quotes.&quot; For example: &quot;I have collected many inspiring quotes.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Is &quot;quote&quot; used in legal contexts?</h3>
              <p className="text-gray-700">Yes, &quot;quote&quot; is used in legal documents for citing precedents, statutes, and other legal authorities.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">What&apos;s the difference between &quot;quote&quot; and &quot;paraphrase&quot;?</h3>
              <p className="text-gray-700">&quot;Quote&quot; means to use exact words, while &quot;paraphrase&quot; means to restate in your own words.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-bold text-indigo-800 mb-2">Can &quot;quote&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;quote&quot; can be used metaphorically, like &quot;quote unquote&quot; to indicate irony or &quot;quote the price&quot; for stating costs.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Quote&quot;</strong> has a &quot;u&quot; in the middle - just like &quot;quotation&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;quo&quot; in &quot;quote&quot; follows the same pattern as &quot;quotation,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quit-vs-quited" className="text-blue-700 hover:text-blue-900 underline">Quit vs Quited</a></p>
            <p><a href="/spelling/quietly-vs-quitly" className="text-blue-700 hover:text-blue-900 underline">Quietly vs Quitly</a></p>
            <p><a href="/spelling/quickly-vs-quikly" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quikly</a></p>
            <p><a href="/spelling/quiet-vs-quite" className="text-blue-700 hover:text-blue-900 underline">Quiet vs Quite</a></p>
            <p><a href="/spelling/question-vs-quesion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quesion</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
