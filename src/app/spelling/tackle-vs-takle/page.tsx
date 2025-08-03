import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tackle vs Takle - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;tackle&quot; vs &quot;takle&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function TackleVsTaklePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Tackle vs Takle</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;tackle&quot; and &quot;takle&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Takle</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Takle&quot; is not a standard English word. The correct spelling is &quot;tackle.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tackle</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tackle&quot; is the correct spelling. It means &quot;to deal with&quot; or &quot;equipment for fishing.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tackle (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To deal with a problem; equipment for fishing or sports; to confront or take on a challenge.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We need to <strong>tackle</strong> this problem.</li>
                  <li>• Fishing <strong>tackle</strong> includes rods and reels.</li>
                  <li>• The team will <strong>tackle</strong> the challenge.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Takle (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Takle&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Takle&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tackle</strong> when referring to dealing with problems or equipment.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tackle:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Confront</li>
                <li>• Address</li>
                <li>• Handle</li>
                <li>• Equipment</li>
                <li>• Gear</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Takle:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Tackle</strong> is spelled with &quot;ck&quot;: t-a-c-k-l-e.</li>
            <li>• The word comes from Middle English &quot;takel&quot; meaning &quot;equipment.&quot;</li>
            <li>• &quot;Takle&quot; is not a recognized English word.</li>
            <li>• Remember: tackle has &quot;ck&quot; like &quot;pickle&quot; and &quot;tickle.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;tackle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tackle&quot; can function as both a noun (equipment or the act of tackling) and a verb (to deal with or confront). It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;tackle&quot; differ from &quot;handle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tackle&quot; implies a more direct, confrontational approach to dealing with something, while &quot;handle&quot; suggests a more general management approach.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;tackle&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tackle&quot; can be a noun (referring to equipment or the act) or a verb (referring to the action of dealing with something).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tackle&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tackle&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;tackle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tackle&quot; comes from Middle English &quot;takel&quot; meaning &quot;equipment&quot; and is related to the word &quot;take&quot; meaning &quot;to grasp.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;tackle&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tackle&quot; can be used as a noun (&quot;Fishing tackle&quot;), verb (&quot;Tackle the problem&quot;), or in compound forms (&quot;tackle box&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;tackle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: tackle a problem, tackle an issue, fishing tackle, tackle box, and tackle the challenge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;tackle&quot; and &quot;takle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;tackle&quot; has &quot;ck&quot; (like &quot;pickle&quot; and &quot;tickle&quot;), and emphasize that &quot;takle&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tackle&quot; used in sports terminology?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tackle&quot; is commonly used in sports like football and rugby to describe the act of stopping an opponent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;tackle&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tackle&quot; can mean equipment (fishing tackle), confronting a problem (tackle an issue), or the act of stopping someone in sports.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-blue-800 leading-relaxed">Word Definition Rule: <strong>Tackle</strong> is the correct spelling with &quot;ck&quot;: t-a-c-k-l-e. &quot;Tackle&quot; is a word of Middle English origin meaning to deal with a problem or equipment for fishing/sports. The incorrect spelling &quot;takle&quot; is not a recognized English word and should never be used. Always use &quot;tackle&quot; when referring to confronting challenges, equipment, or sports actions.</p>
      </div>
    </div>
  )
} 