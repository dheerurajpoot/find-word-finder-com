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

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg mb-8 border-l-4 border-slate-500">
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
              <h3 className="text-xl font-semibold mb-2 text-green-900">Swollen (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Enlarged or puffed up; increased in size due to fluid accumulation or inflammation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Her ankle was <strong>swollen</strong> after the injury.</li>
                  <li>• The river was <strong>swollen</strong> with rain.</li>
                  <li>• His eyes were <strong>swollen</strong> from crying.</li>
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
                <li>• Enlarged</li>
                <li>• Bloated</li>
                <li>• Distended</li>
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double L Rule</h3>
              <p className="text-yellow-800">&quot;Swollen&quot; has two &quot;l&quot;s like &quot;balloon&quot; and &quot;full&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Enlarged</h3>
              <p className="text-blue-800">&quot;Swollen&quot; = enlarged, &quot;Swolen&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;swollen&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
            <li>• The word comes from Old English &quot;swellan&quot; meaning &quot;to swell.&quot;</li>
            <li>• &quot;Swolen&quot; is not a recognized English word.</li>
            <li>• Remember: swollen has two &quot;l&quot;s like &quot;balloon&quot; and &quot;full.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; can be used as an adjective (swollen ankle) or the past participle of &quot;swell&quot; and follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;swollen&quot; differ from &quot;inflamed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; specifically refers to size increase, while &quot;inflamed&quot; refers to redness, heat, and pain along with swelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;swollen&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; can be used as an adjective (swollen tissue) or the past participle of the verb &quot;swell&quot; (has swollen).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;swollen&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swollen&quot; is perfectly acceptable in formal writing, medical documents, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; comes from Old English &quot;swellan&quot; meaning &quot;to swell&quot; and is related to German &quot;schwellen&quot; and Dutch &quot;zwellen.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;swollen&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; can be used as an attributive adjective (&quot;swollen ankle&quot;), predicative adjective (&quot;the ankle is swollen&quot;), or past participle (&quot;has swollen&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: swollen ankle, swollen eyes, swollen glands, swollen joints, swollen face, swollen feet, and swollen abdomen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;swollen&quot; and &quot;swolen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;swollen&quot; has two &quot;l&quot;s (like &quot;balloon&quot; and &quot;full&quot;), and emphasize that &quot;swolen&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;swollen&quot; used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;swollen&quot; is very common in medical contexts, especially when describing edema, inflammation, or tissue enlargement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;swollen&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; can mean enlarged tissue (swollen ankle), increased volume (swollen river), or expanded size (swollen pride).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;swollen&quot; as having two &quot;l&quot;s like other words: balloon, full, swell. The double &quot;l&quot; is consistent.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;swollen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: swolen, swolen, swollen, swollen, and swollen. The correct spelling always has two &quot;l&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;swollen&quot; used in weather contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In weather contexts, &quot;swollen&quot; describes rivers or streams that have increased in volume due to heavy rainfall or melting snow.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between swollen and bloated?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Swollen&quot; typically refers to tissue enlargement, while &quot;bloated&quot; usually refers to abdominal distention or feeling of fullness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;swollen&quot; with one &quot;l&quot; instead of two?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse single and double &quot;l&quot; because they may not pronounce the double &quot;l&quot; clearly, but &quot;swollen&quot; specifically has two &quot;l&quot;s.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed">Word Definition Rule: <strong>Swollen</strong> is the correct spelling with double &quot;l&quot;: s-w-o-l-l-e-n. &quot;Swollen&quot; is an adjective and past participle meaning enlarged or puffed up, increased in size due to fluid accumulation or inflammation. The incorrect spelling &quot;swolen&quot; is not a recognized English word and should never be used. Always use &quot;swollen&quot; when referring to tissue enlargement, increased volume, or expanded size.</p>
      </div>
    </div>
  )
} 