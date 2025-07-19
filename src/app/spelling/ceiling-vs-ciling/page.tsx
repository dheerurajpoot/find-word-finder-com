import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ceiling or Ciling - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ceiling&quot; and &quot;ciling&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CeilingVsCilingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ceiling or Ciling</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ceiling&quot; and &quot;ciling&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ciling</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ciling&quot; is a common misspelling. The correct spelling is &quot;ceiling&quot; with an &quot;e&quot; after the &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ceiling</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ceiling&quot; is the correct spelling. It refers to the upper interior surface of a room.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ceiling (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The upper interior surface of a room.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The paint on the <strong>&quot;ceiling&quot;</strong> is peeling.</li>
                  <li>• She looked up at the <strong>&quot;ceiling&quot;</strong> fan.</li>
                  <li>• The <strong>&quot;ceiling&quot;</strong> was decorated with lights.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ciling (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ciling&quot; is a misspelling of &quot;ceiling&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ciling&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;ceiling&quot;</strong> when referring to the upper interior surface of a room.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ceiling:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Roof (in some contexts)</li>
                <li>• Overhead</li>
                <li>• Top</li>
                <li>• Canopy</li>
                <li>• Upper surface</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ciling:</h4>
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
            <li>• <strong>&quot;Ceiling&quot;</strong> is spelled with an &quot;e&quot; after the &quot;c&quot;.</li>
            <li>• Refers to the upper interior surface of a room.</li>
            <li>• &quot;Ciling&quot; is never correct in any context.</li>
            <li>• The word &quot;ceiling&quot; comes from the Latin &quot;caelum&quot; meaning sky or heaven.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ciling&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ciling&quot; is never correct. The proper spelling is always &quot;ceiling.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;ceiling&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Ceiling&quot; is the upper interior surface of a room.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;ceiling&quot; has an &quot;e&quot; after the &quot;c&quot; and comes from the Latin &quot;caelum&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other common misspellings of &quot;ceiling&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but &quot;ciling&quot; is one of the most frequent. Always use &quot;ceiling&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Ceiling&quot;</strong> is the correct spelling for the upper interior surface of a room. &quot;Ciling&quot; is never correct. Always use &quot;ceiling&quot; in your writing.</p>
      </div>
    </div>
  )
} 