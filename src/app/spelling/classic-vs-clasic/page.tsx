import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Classic or Clasic - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;classic&quot; and &quot;clasic&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ClassicVsClasicPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Classic or Clasic</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;classic&quot; and &quot;clasic&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Clasic</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Clasic&quot; is a misspelling. The correct spelling is &quot;classic&quot; with a double &quot;s&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Classic</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Classic&quot; is the correct spelling. It means something judged over a period of time to be of the highest quality and outstanding of its kind.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Classic (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Judged over a period of time to be of the highest quality and outstanding of its kind; a work of art of recognized and established value.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• That movie is a <strong>classic</strong>.</li>
                  <li>• She wore a <strong>classic</strong> black dress.</li>
                  <li>• The car is considered a <strong>classic</strong> model.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Clasic (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Clasic&quot; is a misspelling of &quot;classic&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Clasic&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;classic&quot;</strong> when referring to something of high quality or value.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Classic:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Timeless</li>
                <li>• Traditional</li>
                <li>• Iconic</li>
                <li>• Vintage</li>
                <li>• Enduring</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Clasic:</h4>
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
            <li>• <strong>Classic</strong> is spelled with a double &quot;s&quot; in the middle.</li>
            <li>• Used to describe something of high quality or lasting value.</li>
            <li>• The word comes from Latin &quot;classicus&quot; meaning &quot;of the highest class&quot;.</li>
            <li>• &quot;Clasic&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;clasic&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;clasic&quot; is never correct. The proper spelling is always &quot;classic.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;s&quot; in the middle of &quot;classic&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;classic&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Classic&quot; means something of the highest quality or lasting value.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;clasic&quot; may occur due to omitting one of the &quot;s&quot; letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Classic</strong> is the correct spelling with a double &quot;s&quot; in the middle. It means something of the highest quality or lasting value. The misspelling &quot;clasic&quot; is never correct. Use &quot;classic&quot; in all contexts.</p>
      </div>
    </div>
  )
} 