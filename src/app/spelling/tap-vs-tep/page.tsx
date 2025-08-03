import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tap vs Tep - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;tap&quot; vs &quot;tep&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function TapVsTepPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Tap vs Tep</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-orange-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;tap&quot; and &quot;tep&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tep</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tep&quot; is not a standard English word. The correct spelling is &quot;tap.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tap</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tap&quot; is the correct spelling. It means &quot;to strike lightly&quot; or &quot;a faucet.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tap (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To strike lightly; a faucet or valve for controlling liquid flow; a light touch or knock.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>tapped</strong> on the door.</li>
                  <li>• Turn on the <strong>tap</strong> for water.</li>
                  <li>• He gave a gentle <strong>tap</strong> on my shoulder.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tep (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tep&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tep&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tap</strong> when referring to light strikes or faucets.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tap:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Knock</li>
                <li>• Rap</li>
                <li>• Faucet</li>
                <li>• Spigot</li>
                <li>• Valve</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tep:</h4>
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
            <li>• <strong>Tap</strong> is spelled with &quot;a&quot;: t-a-p.</li>
            <li>• The word comes from Old English &quot;tæppian&quot; meaning &quot;to furnish with a tap.&quot;</li>
            <li>• &quot;Tep&quot; is not a recognized English word.</li>
            <li>• Remember: tap has &quot;a&quot; like &quot;map&quot; and &quot;cap.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;tap&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tap&quot; can function as both a noun (the faucet or action) and a verb (the action of striking lightly). It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;tap&quot; differ from &quot;knock&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tap&quot; refers to a light, gentle strike, while &quot;knock&quot; typically refers to a louder, more forceful strike on a surface.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;tap&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tap&quot; can be a noun (referring to the faucet or the action) or a verb (referring to the action of striking lightly).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tap&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tap&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;tap&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tap&quot; comes from Old English &quot;tæppian&quot; meaning &quot;to furnish with a tap&quot; and is related to the word &quot;tape&quot; meaning &quot;strip of cloth.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;tap&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tap&quot; can be used as a noun (&quot;Turn on the tap&quot;), verb (&quot;Tap on the door&quot;), or in compound forms (&quot;tap water&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;tap&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: tap water, tap dance, tap on the shoulder, tap into resources, and tap the brakes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;tap&quot; and &quot;tep&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;tap&quot; has &quot;a&quot; (like &quot;map&quot; and &quot;cap&quot;), and emphasize that &quot;tep&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold mb-4 text-orange-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-orange-800 leading-relaxed">Word Definition Rule: <strong>Tap</strong> is the correct spelling with &quot;a&quot;: t-a-p. &quot;Tap&quot; is a word of Old English origin meaning to strike lightly or a faucet for controlling liquid flow. The incorrect spelling &quot;tep&quot; is not a recognized English word and should never be used. Always use &quot;tap&quot; when referring to light strikes, faucets, or gentle touches.</p>
      </div>
    </div>
  )
} 