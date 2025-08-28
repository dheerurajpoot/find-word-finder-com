import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Query vs Querry - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;query&quot; and &quot;querry&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QueryVsQuerryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Query vs Querry
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t add an extra &quot;r&quot;! Learn why the correct form only needs one &quot;r&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-pink-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-pink-700">
          <strong>&quot;Query&quot;</strong> is the correct spelling. &quot;Querry&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Querry</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-l-4 border-pink-500">
            <h3 className="text-xl font-bold text-pink-700 mb-3">✅ Correct: Query</h3>
            <p className="text-pink-600">This is the proper spelling that means &quot;a question or request for information.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
            <h3 className="text-lg font-bold text-pink-800 mb-3">📚 Correct Word</h3>
            <p className="text-pink-700">
              <strong>Query</strong> is a noun that refers to a question or request for information, often used in formal contexts.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Querry</strong> is a misspelling that often occurs due to adding an unnecessary extra &quot;r.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
            <h3 className="text-lg font-bold text-pink-800 mb-3">🔍 Etymology</h3>
            <p className="text-pink-700">
              From Latin &quot;quaerere&quot; meaning &quot;to ask, seek.&quot; The word has only one &quot;r&quot; in English.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-pink-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700">I have a <strong>query</strong> about the database.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700">Please submit your <strong>query</strong> through the contact form.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-pink-700">The customer service team handled the <strong>query</strong> efficiently.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I have a <strong>querry</strong> about the database. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Please submit your <strong>querry</strong> through the contact form. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The customer service team handled the <strong>querry</strong> efficiently. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🎯 Think &quot;One R&quot;</h3>
              <p className="text-pink-700">Remember that &quot;query&quot; has only one &quot;r&quot; - like asking one question!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🔤 &quot;Que + Ry&quot;</h3>
              <p className="text-pink-700">Break it down: &quot;que&quot; + &quot;ry&quot; = &quot;query&quot; - only one &quot;r&quot; needed!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">📝 Visual Pattern</h3>
              <p className="text-pink-700">Think: &quot;Query&quot; looks like &quot;que&quot; + &quot;ry&quot; - simple and clean!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-pink-100 to-rose-100">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🎨 Question Association</h3>
              <p className="text-pink-700">Picture a single question mark - just like the single &quot;r&quot; in &quot;query&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-pink-600">• <strong>Query</strong> language</p>
              <p className="text-pink-600">• <strong>Query</strong> optimization</p>
              <p className="text-pink-600">• <strong>Query</strong> processing</p>
              <p className="text-pink-600">• <strong>Query</strong> results</p>
              <p className="text-pink-600">• <strong>Query</strong> system</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-pink-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-pink-600">• <strong>Noun:</strong> The query is clear</p>
              <p className="text-pink-600">• <strong>Verb:</strong> Query the database</p>
              <p className="text-pink-600">• <strong>Subject:</strong> Query returns data</p>
              <p className="text-pink-600">• <strong>Object:</strong> Submit the query</p>
              <p className="text-pink-600">• <strong>Plural:</strong> Multiple queries</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Why do people misspell &quot;query&quot; as &quot;querry&quot;?</h3>
              <p className="text-gray-700">This often happens due to adding an unnecessary extra &quot;r,&quot; especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Is &quot;querry&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;querry&quot; is never correct in formal or informal writing. It should always be spelled as &quot;query.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the difference between &quot;query&quot; and &quot;question&quot;?</h3>
              <p className="text-gray-700">&quot;Query&quot; is more formal and often used in technical contexts, while &quot;question&quot; is more general and everyday.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;query&quot; be used in technology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;query&quot; is extensively used in computer science, databases, and information technology.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;query&quot; as having only one &quot;r&quot; - like asking one question!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Is &quot;query&quot; related to &quot;question&quot;?</h3>
              <p className="text-gray-700">Yes, both words come from Latin roots meaning &quot;to ask&quot; or &quot;to seek,&quot; but &quot;query&quot; is more formal.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the base form of &quot;query&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;query.&quot; For example: &quot;This is a query.&quot; &quot;We have queries.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;query&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;query&quot; is commonly used in business for customer service, technical support, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the origin of the word &quot;query&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;quaerere&quot; meaning &quot;to ask, seek, inquire,&quot; which became &quot;query&quot; in English.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">How common is the misspelling &quot;querry&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the difference between &quot;query&quot; and &quot;inquiry&quot;?</h3>
              <p className="text-gray-700">&quot;Query&quot; is more specific and technical, while &quot;inquiry&quot; suggests a broader investigation or formal request.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;query&quot; be used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;query&quot; is commonly used in academic research, library science, and scholarly communication.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the plural form of &quot;query&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;queries.&quot; For example: &quot;We received many queries.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Is &quot;query&quot; used in database contexts?</h3>
              <p className="text-gray-700">Yes, &quot;query&quot; is extensively used in database management, SQL programming, and data retrieval.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">What&apos;s the difference between &quot;query&quot; and &quot;request&quot;?</h3>
              <p className="text-gray-700">&quot;Query&quot; seeks information, while &quot;request&quot; asks for something to be done or provided.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-2">Can &quot;query&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;query&quot; can be used metaphorically, like &quot;query of the soul&quot; to describe deep philosophical questioning.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Query&quot;</strong> has only one &quot;r&quot; - like asking one question!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;query&quot; as &quot;que&quot; + &quot;ry&quot; - only one &quot;r&quot; needed for a clean, simple word!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/quarterly-vs-quaterly" className="text-blue-700 hover:text-blue-900 underline">Quarterly vs Quaterly</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/quarrel-vs-quarell" className="text-blue-700 hover:text-blue-900 underline">Quarrel vs Quarell</a></p>
            <p><a href="/spelling/quickly-vs-quickley" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quickley</a></p>
            <p><a href="/spelling/queue-vs-quie" className="text-blue-700 hover:text-blue-900 underline">Queue vs Quie</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-pink-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/verbs" className="text-blue-700 hover:text-blue-900 underline">Verbs</a></p>
            <p><a href="/grammar/latin-loanwords" className="text-blue-700 hover:text-blue-900 underline">Latin Loanwords</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
