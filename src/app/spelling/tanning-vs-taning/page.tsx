import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tanning vs Taning - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;tanning&quot; vs &quot;taning&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function TanningVsTaningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Tanning vs Taning</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-8 border-l-4 border-amber-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;tanning&quot; and &quot;taning&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Taning</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Taning&quot; is not a standard English word. The correct spelling is &quot;tanning.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tanning</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tanning&quot; is the correct spelling. It means &quot;process of darkening skin.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tanning (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The process of darkening skin through exposure to sunlight or artificial UV light; treating animal hides to make leather.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She went <strong>tanning</strong> at the beach.</li>
                  <li>• The leather <strong>tanning</strong> process takes weeks.</li>
                  <li>• Indoor <strong>tanning</strong> can be dangerous.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Taning (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Taning&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Taning&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tanning</strong> when referring to skin darkening.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tanning:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Browning</li>
                <li>• Darkening</li>
                <li>• Sunbathing</li>
                <li>• Leather-making</li>
                <li>• UV exposure</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Taning:</h4>
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
            <li>• <strong>Tanning</strong> is spelled with double &quot;n&quot;: t-a-n-n-i-n-g.</li>
            <li>• The word comes from &quot;tan&quot; + &quot;ing&quot; to form the gerund.</li>
            <li>• &quot;Taning&quot; is not a recognized English word.</li>
            <li>• Remember: tanning has double &quot;n&quot; like &quot;running&quot; and &quot;winning.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;tanning&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tanning&quot; is a gerund (verb form ending in -ing) that can function as a noun, following standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;tanning&quot; differ from &quot;tan&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tan&quot; is the base verb form, while &quot;tanning&quot; is the gerund form used as a noun to describe the process or activity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;tanning&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tanning&quot; is primarily used as a noun to refer to the process of darkening skin or treating leather.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tanning&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tanning&quot; is perfectly acceptable in formal writing, medical texts, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;tanning&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tanning&quot; comes from &quot;tan&quot; (to darken) + &quot;-ing&quot; suffix, following English gerund formation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;tanning&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tanning&quot; can be used as a subject (&quot;Tanning is popular&quot;), object (&quot;She enjoys tanning&quot;), or in compound forms (&quot;tanning salon&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;tanning&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: tanning salon, tanning bed, tanning lotion, tanning oil, indoor tanning, and outdoor tanning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;tanning&quot; and &quot;taning&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;tanning&quot; has double &quot;n&quot; (like &quot;running&quot; and &quot;winning&quot;), and emphasize that &quot;taning&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tanning&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tanning&quot; is very common in medical contexts, especially when discussing skin health, UV exposure risks, and dermatological concerns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;tanning&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tanning&quot; can mean skin darkening (sun tanning), leather processing (hide tanning), or artificial UV exposure (indoor tanning).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;tanning&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;tanning&quot; as having double &quot;n&quot; like other gerunds: running, winning, tanning. The double &quot;n&quot; is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;tanning&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: taning, tanning, tanning, tanning, and tanning. The correct spelling always has double &quot;n.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;tanning&quot; used in beauty and fashion contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In beauty and fashion contexts, &quot;tanning&quot; describes skin darkening treatments, salon services, and cosmetic procedures for achieving darker skin tones.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between tanning and sunbathing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tanning&quot; specifically refers to the process of darkening skin, while &quot;sunbathing&quot; is the activity of lying in the sun for relaxation or tanning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;tanning&quot; with single &quot;n&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often use single &quot;n&quot; because they may not pronounce the double &quot;n&quot; clearly, but &quot;tanning&quot; specifically has double &quot;n.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
        <h2 className="text-2xl font-bold mb-4 text-amber-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-amber-800 leading-relaxed">Word Definition Rule: <strong>Tanning</strong> is the correct spelling with double &quot;n&quot;: t-a-n-n-i-n-g. &quot;Tanning&quot; is a noun meaning the process of darkening skin through exposure to sunlight or artificial UV light, or treating animal hides to make leather. The incorrect spelling &quot;taning&quot; is not a recognized English word and should never be used. Always use &quot;tanning&quot; when referring to skin darkening processes, leather treatment, or UV exposure activities.</p>
      </div>
    </div>
  )
} 