import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Question vs Quistion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;question&quot; and &quot;quistion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuestionVsQuistionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Question vs Quistion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t miss the &quot;e&quot;! Learn why the correct form needs that vowel to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-sky-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-sky-700">
          <strong>&quot;Question&quot;</strong> is the correct spelling. &quot;Quistion&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Quistion</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 border-l-4 border-sky-500">
            <h3 className="text-xl font-bold text-sky-700 mb-3">✅ Correct: Question</h3>
            <p className="text-sky-600">This is the proper spelling that means &quot;a sentence worded to elicit information.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
            <h3 className="text-lg font-bold text-sky-800 mb-3">📚 Correct Word</h3>
            <p className="text-sky-700">
              <strong>Question</strong> is a noun that refers to a sentence worded to elicit information or a matter requiring resolution.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Quistion</strong> is a misspelling that often occurs due to forgetting the &quot;e&quot; in the word.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
            <h3 className="text-lg font-bold text-sky-800 mb-3">🔍 Etymology</h3>
            <p className="text-sky-700">
              From Latin &quot;quaestio&quot; meaning &quot;a seeking, inquiry.&quot; The word has an &quot;e&quot; in the middle.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-sky-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="text-sky-700">I have a <strong>question</strong> about the assignment.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="text-sky-700">The <strong>question</strong> was difficult to answer.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="text-sky-700">Please ask your <strong>question</strong> clearly.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">I have a <strong>quistion</strong> about the assignment. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>quistion</strong> was difficult to answer. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Please ask your <strong>quistion</strong> clearly. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">🎯 Think &quot;Quest + Ion&quot;</h3>
              <p className="text-sky-700">Remember that &quot;question&quot; comes from &quot;quest&quot; + &quot;ion&quot; - the &quot;e&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">🔤 &quot;E&quot; in the Middle</h3>
              <p className="text-sky-700">The word has an &quot;e&quot; in the middle - think &quot;quest&quot; + &quot;ion&quot; with an &quot;e&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">📝 Break It Down</h3>
              <p className="text-sky-700">Think: &quot;Quest&quot; + &quot;ion&quot; = &quot;question&quot; - the &quot;e&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">🎨 Visual Association</h3>
              <p className="text-sky-700">Picture the &quot;e&quot; as a question mark in the middle of the word!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-sky-600">• <strong>Question</strong> mark</p>
              <p className="text-sky-600">• <strong>Question</strong> time</p>
              <p className="text-sky-600">• <strong>Question</strong> and answer</p>
              <p className="text-sky-600">• <strong>Question</strong> period</p>
              <p className="text-sky-600">• <strong>Question</strong> session</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-sky-600">• <strong>Noun:</strong> The question is clear</p>
              <p className="text-sky-600">• <strong>Subject:</strong> Question arises</p>
              <p className="text-sky-600">• <strong>Object:</strong> Ask the question</p>
              <p className="text-sky-600">• <strong>Plural:</strong> Multiple questions</p>
              <p className="text-sky-600">• <strong>Possessive:</strong> Question&apos;s meaning</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Why do people misspell &quot;question&quot; as &quot;quistion&quot;?</h3>
              <p className="text-gray-700">This often happens due to forgetting the &quot;e&quot; in the middle of the word, especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Is &quot;quistion&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;quistion&quot; is never correct in formal or informal writing. It should always be spelled as &quot;question.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the difference between &quot;question&quot; and &quot;inquiry&quot;?</h3>
              <p className="text-gray-700">&quot;Question&quot; is more general, while &quot;inquiry&quot; suggests a formal investigation or systematic search for information.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Can &quot;question&quot; be used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;question&quot; is extensively used in academic writing, research, and educational contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;question&quot; as &quot;quest&quot; + &quot;ion&quot; - the &quot;e&quot; in &quot;quest&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Is &quot;question&quot; related to &quot;quest&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;question&quot; comes from the Latin &quot;quaestio&quot; which is related to &quot;quest&quot; meaning &quot;a search or inquiry.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the base form of &quot;question&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;question.&quot; For example: &quot;This is a question.&quot; &quot;We have questions.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Can &quot;question&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;question&quot; is commonly used in business for meetings, presentations, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the origin of the word &quot;question&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;quaestio&quot; meaning &quot;a seeking, inquiry, investigation,&quot; which became &quot;question&quot; in English.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">How common is the misspelling &quot;quistion&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the difference between &quot;question&quot; and &quot;query&quot;?</h3>
              <p className="text-gray-700">&quot;Question&quot; is more general, while &quot;query&quot; often suggests a specific request for information or clarification.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Can &quot;question&quot; be used in legal contexts?</h3>
              <p className="text-gray-700">Yes, &quot;question&quot; is commonly used in legal proceedings, courtrooms, and legal documentation.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the plural form of &quot;question&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;questions.&quot; For example: &quot;We have many questions.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Is &quot;question&quot; used in journalism contexts?</h3>
              <p className="text-gray-700">Yes, &quot;question&quot; is extensively used in journalism for interviews, press conferences, and news reporting.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the difference between &quot;question&quot; and &quot;problem&quot;?</h3>
              <p className="text-gray-700">&quot;Question&quot; seeks information, while &quot;problem&quot; suggests a difficulty or challenge that needs to be solved.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Can &quot;question&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;question&quot; can be used metaphorically, like &quot;question of life&quot; or &quot;question of faith&quot; to describe philosophical concepts.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Question&quot;</strong> has an &quot;e&quot; in the middle - like &quot;quest&quot; + &quot;ion&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;question&quot; as &quot;quest&quot; + &quot;ion&quot; - the &quot;e&quot; from &quot;quest&quot; is essential!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/query-vs-querry" className="text-blue-700 hover:text-blue-900 underline">Query vs Querry</a></p>
            <p><a href="/spelling/quarterly-vs-quaterly" className="text-blue-700 hover:text-blue-900 underline">Quarterly vs Quaterly</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/quarrel-vs-quarell" className="text-blue-700 hover:text-blue-900 underline">Quarrel vs Quarell</a></p>
            <p><a href="/spelling/quickly-vs-quickley" className="text-blue-700 hover:text-blue-900 underline">Quickly vs Quickley</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/latin-loanwords" className="text-blue-700 hover:text-blue-900 underline">Latin Loanwords</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
