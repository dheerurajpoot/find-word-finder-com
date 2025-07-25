import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Trunnion or Trunion - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;trunnion&quot; and &quot;trunion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TrunnionVsTrunionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Trunnion or Trunion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;trunnion&quot; and &quot;trunion&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Trunion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Trunion&quot; is a common misspelling of the word &quot;trunnion&quot; and is not correct in standard English.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Trunnion</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Trunnion&quot; is the correct spelling. It refers to a cylindrical protrusion used as a mounting or pivoting point.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Trunnion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A cylindrical projection used as a mounting or pivot, especially on a cannon or in machinery.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The cannon rested on its <strong>trunnion</strong>.</li>
                  <li>• The machine uses a <strong>trunnion</strong> for rotation.</li>
                  <li>• The engineer inspected the <strong>trunnion</strong> bearings.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Trunion:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Not a recognized English word. Likely a misspelling of &quot;trunnion&quot;.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• (Incorrect) The trunion is broken. <span className="text-red-600">(should be &quot;trunnion&quot;)</span></li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Trunnion:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Pivot</li>
                <li>• Axle</li>
                <li>• Shaft</li>
                <li>• Spindle</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Trunion:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No synonyms; not a valid word)</li>
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
            <li>• The correct spelling is <strong>trunnion</strong>, not &quot;trunion&quot;.</li>
            <li>• Double-check technical terms for correct spelling.</li>
            <li>• Always use standard spellings in formal writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;trunion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;trunion&quot; is not a correct spelling in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;trunnion&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Trunnion&quot; means a cylindrical projection used as a mounting or pivot.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I use &quot;trunnion&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Example: &quot;The trunnion supports the rotating part of the machine.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Use <strong>trunnion</strong> for the correct spelling. <strong>Trunion</strong> is a misspelling and should be avoided. Always double-check your spelling for accuracy.</p>
      </div>
    </div>
  )
} 