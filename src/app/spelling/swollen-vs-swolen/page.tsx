import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swollen vs Swolen - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swollen&quot; vs &quot;swolen&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwollenVsSwolenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Swollen vs Swolen</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg mb-8 border-l-4 border-red-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;swollen&quot; and &quot;swolen&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Swolen</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Swolen&quot; is not a standard English word. The correct spelling is &quot;swollen.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Swollen</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Swollen&quot; is the correct spelling. It means &quot;enlarged or puffed up.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swollen (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Enlarged, puffed up, or distended, especially due to injury, infection, or inflammation; past participle of swell.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• His ankle was <strong>swollen</strong> after the injury.</li>
                  <li>• The <strong>swollen</strong> river overflowed its banks.</li>
                  <li>• Her eyes were <strong>swollen</strong> from crying.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Swolen (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Swolen&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Swolen&quot; is not used in standard English.</li>
                  <li>• Always use <strong>swollen</strong> when referring to enlargement.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Swollen:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Inflamed</li>
                <li>• Puffed up</li>
                <li>• Distended</li>
                <li>• Enlarged</li>
                <li>• Bloated</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Swolen:</h4>
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
            <li>• <strong>Swollen</strong> is spelled with double &quot;l&quot;: s-w-o-l-l-e-n.</li>
            <li>• The word is the past participle of &quot;swell&quot; (swell → swelled → swollen).</li>
            <li>• &quot;Swolen&quot; is not a recognized English word.</li>
            <li>• Remember: swollen has two &quot;l&quot;s like &quot;fallen&quot; and &quot;stolen.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; is the past participle of &quot;swell&quot; and can be used as an adjective to describe something that is enlarged or puffed up.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swollen&quot; differ from &quot;swelled&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swelled&quot; is the simple past tense, while &quot;swollen&quot; is the past participle used as an adjective to describe the state of being enlarged.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swollen&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; is primarily an adjective that describes something as being enlarged, puffed up, or distended.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swollen&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swollen&quot; is perfectly acceptable in formal writing, medical texts, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; comes from Old English &quot;swollen&quot; (past participle of &quot;swellan&quot; meaning &quot;to swell&quot;) and has Germanic roots.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swollen&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; can be used as an attributive adjective (&quot;swollen ankle&quot;), predicative adjective (&quot;The ankle is swollen&quot;), or with adverbs (&quot;badly swollen&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swollen ankle, swollen glands, swollen eyes, swollen face, swollen joints, and swollen lymph nodes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swollen&quot; and &quot;swolen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swollen&quot; has two &quot;l&quot;s (like &quot;fallen&quot; and &quot;stolen&quot;), and emphasize that &quot;swolen&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swollen&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swollen&quot; is very common in medical contexts to describe inflammation, edema, and tissue enlargement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swollen&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; can mean medically enlarged (swollen glands), emotionally affected (swollen with pride), or physically distended (swollen river).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swollen&quot; as having two &quot;l&quot;s like other past participles: fallen, stolen, swollen. The double &quot;l&quot; is consistent in these forms.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swolen, swolen, swolen, swolen, and swolen. The correct spelling always has double &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swollen&quot; used in weather and nature contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In weather and nature, &quot;swollen&quot; describes rivers, streams, or bodies of water that have increased in volume due to rain or melting snow.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swollen and inflamed?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; refers to enlargement, while &quot;inflamed&quot; specifically refers to redness, heat, and swelling due to injury or infection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swollen&quot; with single &quot;l&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse single and double &quot;l&quot; because they may not pronounce the double &quot;l&quot; clearly, but &quot;swollen&quot; specifically has two &quot;l&quot;s.</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <h2 className="text-2xl font-bold mb-4 text-red-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-red-800 leading-relaxed">Word Definition Rule: <strong>Swollen</strong> is the correct spelling with double &quot;l&quot;: s-w-o-l-l-e-n. &quot;Swollen&quot; is the past participle of &quot;swell&quot; meaning enlarged, puffed up, or distended, especially due to injury, infection, or inflammation. The incorrect spelling &quot;swolen&quot; is not a recognized English word and should never be used. Always use &quot;swollen&quot; when referring to medical conditions, physical enlargement, or emotional states.</p>
      </div>
    </div>
  )
} 