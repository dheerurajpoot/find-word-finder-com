import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Very or Wery - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "very" and "wery". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VeryVsWeryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Very or Wery</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;very&quot; and &quot;wery&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wery</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wery&quot; is a misspelling. The correct spelling is &quot;very&quot; with a &quot;v&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Very</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Very&quot; is the correct spelling. It is an adverb meaning &quot;to a high degree&quot; or an adjective meaning &quot;actual&quot; or &quot;precise&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Very (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Adverb: to a high degree. Adjective: actual or precise.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She was <strong>very</strong> happy with the results.</li>
                  <li>• This is the <strong>very</strong> book I was looking for.</li>
                  <li>• The movie was <strong>very</strong> interesting.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Wery:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Wery&quot; is a misspelling of &quot;very&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Wery&quot; is not used in standard English.</li>
                  <li>• Always use <strong>very</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Very:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Extremely</li>
                <li>• Highly</li>
                <li>• Truly</li>
                <li>• Indeed</li>
                <li>• Precisely</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Wery:</h4>
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
            <li>• <strong>Very</strong> is spelled with a &quot;v&quot; at the beginning.</li>
            <li>• &quot;Wery&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;verus&quot; meaning &quot;true&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;wery&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;wery&quot; is never correct. The proper spelling is always &quot;very&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;very&quot; starts with a &quot;v&quot; for &quot;very important&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does very mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Very&quot; means to a high degree or actual/precise.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Very</strong> is the correct spelling, meaning to a high degree or actual/precise. The misspelling &quot;wery&quot; is never correct. Always use &quot;very&quot; in your writing.</p>
      </div>
    </div>
  )
} 