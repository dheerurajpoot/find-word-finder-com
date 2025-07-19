import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coincidence or Coinsidence - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coincidence&quot; and &quot;coinsidence&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CoincidenceVsCoinsidencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coincidence or Coinsidence</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;coincidence&quot; and &quot;coinsidence&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Coinsidence</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Coinsidence&quot; is a misspelling. The correct spelling is &quot;coincidence&quot; with a &quot;c&quot; after the &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Coincidence</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Coincidence&quot; is the correct spelling. It means a remarkable concurrence of events or circumstances without apparent causal connection.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Coincidence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A remarkable concurrence of events or circumstances without apparent causal connection.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• It was a strange <strong>&quot;coincidence&quot;</strong> that they met again.</li>
                  <li>• By <strong>&quot;coincidence&quot;</strong>, they wore the same outfit.</li>
                  <li>• The timing was pure <strong>&quot;coincidence&quot;</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Coinsidence (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Coinsidence&quot; is a misspelling of &quot;coincidence&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Coinsidence&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;coincidence&quot;</strong> when referring to a concurrence of events.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Coincidence:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Chance</li>
                <li>• Accident</li>
                <li>• Luck</li>
                <li>• Happenstance</li>
                <li>• Serendipity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Coinsidence:</h4>
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
            <li>• <strong>&quot;Coincidence&quot;</strong> is spelled with a &quot;c&quot; after the &quot;n&quot;.</li>
            <li>• Used to describe a remarkable concurrence of events or circumstances.</li>
            <li>• The word comes from Latin &quot;coincidentia&quot; meaning &quot;a falling together&quot;.</li>
            <li>• &quot;Coinsidence&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;coinsidence&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;coinsidence&quot; is never correct. The proper spelling is always &quot;coincidence.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;c&quot; after the &quot;n&quot; in &quot;coincidence&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;coincidence&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Coincidence&quot; means a remarkable concurrence of events or circumstances without apparent causal connection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;coinsidence&quot; may occur due to confusion about the placement of the &quot;c&quot; and &quot;s&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Coincidence&quot;</strong> is the correct spelling with a &quot;c&quot; after the &quot;n&quot;. It means a remarkable concurrence of events or circumstances. The misspelling &quot;coinsidence&quot; is never correct. Use &quot;coincidence&quot; in all contexts.</p>
      </div>
    </div>
  )
} 