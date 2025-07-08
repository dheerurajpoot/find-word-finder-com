import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Anniversary or Aniversery - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;anniversary&quot; and &quot;aniversery&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnniversaryVsAniverseryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Anniversary or Aniversery</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;anniversary&quot; and &quot;aniversery&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aniversery</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aniversery&quot; is a misspelling. The correct spelling is &quot;anniversary&quot; with double &quot;n&quot; and &quot;sary&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Anniversary</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Anniversary&quot; is the correct spelling. It means the date on which an event took place in a previous year, often celebrated annually.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Anniversary (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The date on which an event took place in a previous year, often celebrated annually.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• They celebrated their wedding <strong>anniversary</strong>.</li>
                  <li>• The company marked its 50th <strong>anniversary</strong>.</li>
                  <li>• Today is the <strong>anniversary</strong> of the founding of the school.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aniversery (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aniversery&quot; is a misspelling of &quot;anniversary&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aniversery&quot; is not used in standard English.</li>
                  <li>• Always use <strong>anniversary</strong> when referring to annual celebrations.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Anniversary:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Commemoration</li>
                <li>• Jubilee</li>
                <li>• Celebration</li>
                <li>• Milestone</li>
                <li>• Remembrance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aniversery:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Anniversary</strong> is spelled with double &quot;n&quot; and &quot;sary&quot; at the end.</li>
            <li>• Used to describe annual celebrations or commemorations.</li>
            <li>• The word comes from Latin &quot;anniversarius&quot; meaning &quot;returning yearly&quot;.</li>
            <li>• &quot;Aniversery&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aniversery&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aniversery&quot; is never correct. The proper spelling is always &quot;anniversary.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;n&quot; and &quot;sary&quot; at the end of &quot;anniversary.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common types of anniversaries?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Wedding anniversary, company anniversary, and historical anniversaries are common types.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aniversery&quot; occurs because people forget the double &quot;n&quot; and &quot;sary&quot; ending.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Anniversary</strong> is the correct spelling with double &quot;n&quot; and &quot;sary&quot; at the end. It means the date on which an event took place in a previous year, often celebrated annually. The misspelling &quot;aniversery&quot; is never correct. Use &quot;anniversary&quot; for all annual celebrations and commemorations.</p>
      </div>
    </div>
  )
} 