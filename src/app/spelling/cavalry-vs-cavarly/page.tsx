import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cavalry or Cavarly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cavalry&quot; and &quot;cavarly&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CavalryVsCavarlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cavalry or Cavarly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cavalry&quot; and &quot;cavarly&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cavarly</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cavarly&quot; is a common misspelling. The correct spelling is &quot;cavalry&quot; with the &quot;l&quot; before the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cavalry</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cavalry&quot; is the correct spelling. It refers to soldiers who fought on horseback or modern armored troops.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cavalry (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Soldiers who fought on horseback; in modern times, troops trained to fight in armored vehicles.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>cavalry</strong> arrived just in time to save the day.</li>
                  <li>• In history, the <strong>cavalry</strong> played a crucial role in battles.</li>
                  <li>• Modern <strong>cavalry</strong> units use tanks and armored vehicles.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cavarly (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cavarly&quot; is a misspelling of &quot;cavalry&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cavarly&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cavalry</strong> when referring to soldiers on horseback or armored troops.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cavalry:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Horsemen</li>
                <li>• Mounted troops</li>
                <li>• Armored troops</li>
                <li>• Dragoons</li>
                <li>• Hussars</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cavarly:</h4>
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
            <li>• <strong>Cavalry</strong> is always spelled with the &quot;l&quot; before the &quot;r&quot;.</li>
            <li>• <strong>Cavarly</strong> is never correct.</li>
            <li>• The word comes from the Italian &quot;cavalleria&quot; meaning &quot;horsemen&quot;.</li>
            <li>• Always use &quot;cavalry&quot; in historical and military contexts.</li>
            <li>• Double-check spelling when writing about military units.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cavarly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cavarly&quot; is never correct. The proper spelling is always &quot;cavalry&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;l&quot; comes before the &quot;r&quot; in &quot;cavalry&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;cavalry&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Cavalry&quot; means soldiers who fought on horseback or modern armored troops.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cavalry</strong> is the correct spelling with the &quot;l&quot; before the &quot;r&quot;. The misspelling &quot;cavarly&quot; is never correct. Use &quot;cavalry&quot; in all contexts.</p>
      </div>
    </div>
  )
} 