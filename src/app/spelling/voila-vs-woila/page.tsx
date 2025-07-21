import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Voila or Woila - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;voila&quot; and &quot;woila&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VoilaVsWoilaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Voila or Woila</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;voila&quot; and &quot;woila&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Woila</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Woila&quot; is a common misspelling and mispronunciation of the French word &quot;voila&quot;. The correct spelling is &quot;voila&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Voila</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Voila&quot; is the correct spelling. It is a French word used in English to mean &quot;there it is&quot; or &quot;look at that&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Voila (interjection):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Used to call attention, to express satisfaction or approval, or to suggest an appearance as if by magic. Equivalent to &quot;there it is!&quot; or &quot;look!&quot; in English.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Mix the ingredients, bake for 20 minutes, and <strong>voila</strong>—a delicious cake!</li>
                  <li>• She waved her hand and, <strong>voila</strong>, the trick was done.</li>
                  <li>• Add the final touch and <strong>voila</strong>—your project is complete.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Woila (interjection):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Woila&quot; is a misspelling and mispronunciation of &quot;voila&quot;. It is not a recognized English or French word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Woila&quot; is not correct. Always use <strong>&quot;voila&quot;</strong>.</li>
                  <li>• The correct phrase is &quot;voila&quot;, not &quot;woila&quot;.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Voila:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• There you go</li>
                <li>• Here it is</li>
                <li>• Look</li>
                <li>• Ta-da</li>
                <li>• Behold</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Woila:</h4>
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
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Voila</strong> is borrowed from French and means &quot;there it is&quot; or &quot;look&quot;.</li>
            <li>• The correct spelling is &quot;voila&quot;, not &quot;woila&quot;.</li>
            <li>• Pronounced as /vwɑːˈlɑː/ (vwah-LAH).</li>
            <li>• &quot;Woila&quot; is a common error due to the way &quot;voila&quot; is pronounced in English.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;woila&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;woila&quot; is never correct. The proper spelling is always &quot;voila&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;voila&quot; starts with a &quot;v&quot; like &quot;victory&quot; and ends with &quot;a&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;voila&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Voila&quot; means &quot;there it is&quot; or &quot;look&quot;—used to draw attention to something that has just been presented or accomplished.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;voila&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;voila&quot; is acceptable in both formal and informal writing, especially when introducing a result or conclusion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;voila&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /vwɑːˈlɑː/ (vwah-LAH).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Voila</strong> is the correct spelling, borrowed from French, meaning &quot;there it is&quot; or &quot;look&quot;. The misspelling &quot;woila&quot; is never correct. Use &quot;voila&quot; to indicate the correct word in both speech and writing.</p>
      </div>
    </div>
  )
} 