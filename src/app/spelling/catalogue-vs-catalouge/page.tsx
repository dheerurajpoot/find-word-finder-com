import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Catalogue or Catalouge - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;catalogue&quot; and &quot;catalouge&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CatalogueVsCatalougePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Catalogue or Catalouge</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;catalogue&quot; and &quot;catalouge&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Catalouge</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Catalouge&quot; is a common misspelling. The correct spelling is &quot;catalogue&quot; (British English) or &quot;catalog&quot; (American English).</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Catalogue</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Catalogue&quot; is the correct British English spelling. In American English, &quot;catalog&quot; is preferred. Both refer to a complete list of items, typically in a systematic order.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Catalogue (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A complete list of items, typically in a systematic or ordered way.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The museum published a <strong>catalogue</strong> of its collection.</li>
                  <li>• Please check the <strong>catalogue</strong> for available courses.</li>
                  <li>• She ordered a dress from the spring <strong>catalogue</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Catalouge (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Catalouge&quot; is a misspelling of &quot;catalogue&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Catalouge&quot; is not used in standard English.</li>
                  <li>• Always use <strong>catalogue</strong> (UK) or <strong>catalog</strong> (US) when referring to a list.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Catalogue:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• List</li>
                <li>• Inventory</li>
                <li>• Directory</li>
                <li>• Index</li>
                <li>• Register</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Catalouge:</h4>
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
            <li>• <strong>Catalogue</strong> is the British English spelling; <strong>catalog</strong> is the American English spelling.</li>
            <li>• <strong>Catalouge</strong> is never correct.</li>
            <li>• The word comes from the Greek &quot;katalogos&quot; meaning &quot;a list or register&quot;.</li>
            <li>• Always double-check spelling in formal writing.</li>
            <li>• Use the appropriate spelling for your region or audience.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;catalouge&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;catalouge&quot; is never correct. Use &quot;catalogue&quot; (UK) or &quot;catalog&quot; (US).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between &quot;catalogue&quot; and &quot;catalog&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Catalogue&quot; is used in British English, while &quot;catalog&quot; is used in American English. Both mean a list of items.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;catalogue&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, both &quot;catalogue&quot; and &quot;catalog&quot; are appropriate in formal writing, depending on your region.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Catalogue</strong> (UK) and <strong>catalog</strong> (US) are the correct spellings. The misspelling &quot;catalouge&quot; is never correct. Use the appropriate form for your audience.</p>
      </div>
    </div>
  )
} 