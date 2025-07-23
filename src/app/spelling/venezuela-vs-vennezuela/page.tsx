import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Venezuela or Vennezuela - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Venezuela&quot; and &quot;Vennezuela&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VenezuelaVsVennezuelaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Venezuela or Vennezuela</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Venezuela&quot; and &quot;Vennezuela&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vennezuela</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vennezuela&quot; is a misspelling. The correct spelling is &quot;Venezuela&quot; with one &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Venezuela</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Venezuela&quot; is the correct spelling. It is the name of a country in South America.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Venezuela (proper noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A country on the northern coast of South America, known for its diverse culture and natural beauty.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Caracas is the capital of <strong>Venezuela</strong>.</li>
                  <li>• She traveled to <strong>Venezuela</strong> for vacation.</li>
                  <li>• <strong>Venezuela</strong> is famous for Angel Falls.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vennezuela:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vennezuela&quot; is a misspelling of &quot;Venezuela&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vennezuela&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Venezuela</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Venezuela:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Bolivarian Republic of Venezuela</li>
                <li>• (No direct synonyms; it is a proper noun)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vennezuela:</h4>
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
            <li>• <strong>Venezuela</strong> is spelled with one &quot;n&quot;.</li>
            <li>• &quot;Vennezuela&quot; is never correct in any context.</li>
            <li>• The name comes from Italian &quot;Veneziola&quot; meaning &quot;Little Venice&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Vennezuela&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Vennezuela&quot; is never correct. The proper spelling is always &quot;Venezuela&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;Venezuela&quot; has only one &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is Venezuela?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Venezuela&quot; is a country in South America, known for its beautiful landscapes and rich culture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;Venezuela&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;Vennezuela&quot; often happens by doubling the &quot;n&quot; unnecessarily. Always use one &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Venezuela&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;Venezuela&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Venezuela</strong> is the correct spelling, referring to the country in South America. The misspelling &quot;Vennezuela&quot; is never correct. Always use &quot;Venezuela&quot; in your writing.</p>
      </div>
    </div>
  )
} 