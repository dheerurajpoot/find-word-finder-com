import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Questionnaire vs Questionnair - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;questionnaire&quot; and &quot;questionnair&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuestionnaireVsQuestionnairPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Questionnaire vs Questionnair
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t forget the final &quot;e&quot;! Learn why the correct form needs that ending to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-orange-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-orange-700">
          <strong>&quot;Questionnaire&quot;</strong> is the correct spelling. &quot;Questionnair&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Questionnair</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-3">✅ Correct: Questionnaire</h3>
            <p className="text-orange-600">This is the proper spelling that means &quot;a set of questions for gathering information.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
            <h3 className="text-lg font-bold text-orange-800 mb-3">📚 Correct Word</h3>
            <p className="text-orange-700">
              <strong>Questionnaire</strong> is a noun that refers to a form containing a set of questions for gathering information.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Questionnair</strong> is a misspelling that often occurs due to forgetting the final &quot;e.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
            <h3 className="text-lg font-bold text-orange-800 mb-3">🔍 Etymology</h3>
            <p className="text-orange-700">
              From French &quot;questionnaire,&quot; meaning &quot;a list of questions.&quot; The word ends with &quot;aire&quot; in French.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-700">Please complete the <strong>questionnaire</strong> before leaving.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-700">The <strong>questionnaire</strong> contained 20 questions about customer satisfaction.</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-700">We distributed the <strong>questionnaire</strong> to all participants.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Please complete the <strong>questionnair</strong> before leaving. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">The <strong>questionnair</strong> contained 20 questions about customer satisfaction. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">We distributed the <strong>questionnair</strong> to all participants. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">🎯 Think &quot;Question + Aire&quot;</h3>
              <p className="text-orange-700">Remember that &quot;questionnaire&quot; comes from &quot;question&quot; + &quot;aire&quot; - the French ending!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">🔤 French Ending</h3>
              <p className="text-orange-700">The word ends with &quot;aire&quot; like other French loanwords - think &quot;question&quot; + &quot;aire&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">📝 Break It Down</h3>
              <p className="text-orange-700">Think: &quot;Question&quot; + &quot;naire&quot; = &quot;questionnaire&quot; - the &quot;e&quot; is essential!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-orange-100 to-amber-100">
              <h3 className="text-lg font-bold text-orange-800 mb-3">🎨 Visual Association</h3>
              <p className="text-orange-700">Picture the word ending with &quot;aire&quot; like a French flair - elegant and complete!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-orange-600">• <strong>Questionnaire</strong> survey</p>
              <p className="text-orange-600">• <strong>Questionnaire</strong> design</p>
              <p className="text-orange-600">• <strong>Questionnaire</strong> response</p>
              <p className="text-orange-600">• <strong>Questionnaire</strong> analysis</p>
              <p className="text-orange-600">• <strong>Questionnaire</strong> results</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-orange-600">• <strong>Noun:</strong> The questionnaire is long</p>
              <p className="text-orange-600">• <strong>Subject:</strong> Questionnaire shows results</p>
              <p className="text-orange-600">• <strong>Object:</strong> Complete the questionnaire</p>
              <p className="text-orange-600">• <strong>Plural:</strong> Multiple questionnaires</p>
              <p className="text-orange-600">• <strong>Possessive:</strong> Questionnaire&apos;s purpose</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Why do people misspell &quot;questionnaire&quot; as &quot;questionnair&quot;?</h3>
              <p className="text-gray-700">This often happens due to forgetting the final &quot;e,&quot; especially when typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Is &quot;questionnair&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;questionnair&quot; is never correct in formal or informal writing. It should always be spelled as &quot;questionnaire.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the difference between &quot;questionnaire&quot; and &quot;survey&quot;?</h3>
              <p className="text-gray-700">&quot;Questionnaire&quot; refers to the form with questions, while &quot;survey&quot; refers to the broader research process.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Can &quot;questionnaire&quot; be used in academic contexts?</h3>
              <p className="text-gray-700">Yes, &quot;questionnaire&quot; is commonly used in academic research, social sciences, and educational studies.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;questionnaire&quot; as &quot;question&quot; + &quot;naire&quot; - the French ending with an &quot;e&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Is &quot;questionnaire&quot; related to &quot;question&quot;?</h3>
              <p className="text-gray-700">Yes, &quot;questionnaire&quot; comes from the word &quot;question&quot; with the French suffix &quot;-aire&quot; meaning &quot;relating to.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the base form of &quot;questionnaire&quot;?</h3>
              <p className="text-gray-700">The base form is &quot;questionnaire.&quot; For example: &quot;This is a questionnaire.&quot; &quot;We need questionnaires.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Can &quot;questionnaire&quot; be used in business contexts?</h3>
              <p className="text-gray-700">Yes, &quot;questionnaire&quot; is commonly used in business for market research, customer feedback, and employee surveys.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the origin of the word &quot;questionnaire&quot;?</h3>
              <p className="text-gray-700">It comes from French &quot;questionnaire,&quot; which means &quot;a list of questions&quot; or &quot;an examination.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">How common is the misspelling &quot;questionnair&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially when people are typing quickly or are unsure about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the difference between &quot;questionnaire&quot; and &quot;poll&quot;?</h3>
              <p className="text-gray-700">&quot;Questionnaire&quot; is a detailed form with multiple questions, while &quot;poll&quot; is usually a simple single question.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Can &quot;questionnaire&quot; be used in medical contexts?</h3>
              <p className="text-gray-700">Yes, &quot;questionnaire&quot; is commonly used in medical research, patient assessments, and clinical studies.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the plural form of &quot;questionnaire&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;questionnaires.&quot; For example: &quot;We distributed 100 questionnaires.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Is &quot;questionnaire&quot; used in psychology contexts?</h3>
              <p className="text-gray-700">Yes, &quot;questionnaire&quot; is extensively used in psychology for personality assessments, behavioral studies, and research.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">What&apos;s the difference between &quot;questionnaire&quot; and &quot;interview&quot;?</h3>
              <p className="text-gray-700">&quot;Questionnaire&quot; is a written form, while &quot;interview&quot; is a verbal conversation with questions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Can &quot;questionnaire&quot; be used metaphorically?</h3>
              <p className="text-gray-700">Yes, &quot;questionnaire&quot; can be used metaphorically, like &quot;life is a questionnaire&quot; to describe decision-making processes.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Questionnaire&quot;</strong> ends with &quot;aire&quot; - the French flair!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> Think of &quot;questionnaire&quot; as &quot;question&quot; + &quot;naire&quot; - the French ending with an &quot;e&quot; makes it complete!
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/question-vs-quistion" className="text-blue-700 hover:text-blue-900 underline">Question vs Quistion</a></p>
            <p><a href="/spelling/query-vs-querry" className="text-blue-700 hover:text-blue-900 underline">Query vs Querry</a></p>
            <p><a href="/spelling/quarterly-vs-quaterly" className="text-blue-700 hover:text-blue-900 underline">Quarterly vs Quaterly</a></p>
            <p><a href="/spelling/quarter-vs-quater" className="text-blue-700 hover:text-blue-900 underline">Quarter vs Quater</a></p>
            <p><a href="/spelling/quarrel-vs-quarell" className="text-blue-700 hover:text-blue-900 underline">Quarrel vs Quarell</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/raining-vs-rainning" className="text-blue-700 hover:text-blue-900 underline">Raining vs Rainning</a></p>
            <p><a href="/spelling/radiant-vs-radient" className="text-blue-700 hover:text-blue-900 underline">Radiant vs Radient</a></p>
            <p><a href="/spelling/racquet-vs-racquett" className="text-blue-700 hover:text-blue-900 underline">Racquet vs Racquett</a></p>
            <p><a href="/spelling/raccoon-vs-rakkoon" className="text-blue-700 hover:text-blue-900 underline">Raccoon vs Rakkoon</a></p>
            <p><a href="/spelling/rabbit-vs-rabit" className="text-blue-700 hover:text-blue-900 underline">Rabbit vs Rabit</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/french-loanwords" className="text-blue-700 hover:text-blue-900 underline">French Loanwords</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/suffixes" className="text-blue-700 hover:text-blue-900 underline">Suffixes</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
