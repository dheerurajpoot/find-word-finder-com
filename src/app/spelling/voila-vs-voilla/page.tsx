import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Voila or Voilla - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;voila&quot; and &quot;voilla&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VoilaVsVoillaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Voila or Voilla</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;voila&quot; and &quot;voilla&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Voilla</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Voilla&quot; is a misspelling. The correct spelling is &quot;voila&quot; with one &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Voila</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Voila&quot; is the correct spelling. It is an exclamation used to call attention to something or to express satisfaction or approval.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Voila (exclamation):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Used to call attention, to express satisfaction or approval, or to suggest an appearance as if by magic.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Add the final ingredient and, <strong>voila</strong>, dinner is served!</li>
                  <li>• She waved her hand and, <strong>voila</strong>, the answer appeared.</li>
                  <li>• Just press this button and, <strong>voila</strong>, your photo is saved.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Voilla (exclamation):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Voilla&quot; is a misspelling of &quot;voila&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Voilla&quot; is not used in standard English.</li>
                  <li>• Always use <strong>voila</strong> to express a magical result or reveal.</li>
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
                <li>• Ta-da</li>
                <li>• There you go</li>
                <li>• Behold</li>
                <li>• Presto</li>
                <li>• Look</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Voilla:</h4>
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
            <li>• <strong>Voila</strong> is a French word adopted into English, meaning &quot;there it is&quot; or &quot;look&quot;.</li>
            <li>• Pronounced as &quot;vwah-LAH&quot;.</li>
            <li>• Commonly used to present a result or reveal something.</li>
            <li>• &quot;Voilla&quot; is never correct in any context.</li>
            <li>• Double &quot;l&quot; is a common misspelling due to pronunciation confusion.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;voilla&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;voilla&quot; is never correct. The proper spelling is always &quot;voila&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember it comes from French and only has one &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;voila&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means &quot;there it is&quot; or &quot;look&quot; and is used to present something or show a result.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;voila&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is more common in informal or creative writing, but can be used for emphasis in formal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;voila&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The double &quot;l&quot; in &quot;voilla&quot; is a common error due to how the word sounds.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Voila</strong> is the correct spelling, borrowed from French, and means &quot;there it is&quot; or &quot;look&quot;. The misspelling &quot;voilla&quot; is never correct. Use &quot;voila&quot; to present a result or reveal something.</p>
      </div>
    </div>
  )
} 