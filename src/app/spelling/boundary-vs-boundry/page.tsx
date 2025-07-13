import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Boundary or Boundry - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;boundary&quot; and &quot;boundry&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BoundaryVsBoundryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Boundary or Boundry</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;boundary&quot; and &quot;boundry&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Boundry</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Boundry&quot; is a misspelling. The correct spelling is &quot;boundary&quot; with &quot;a&quot; before &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Boundary</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Boundary&quot; is the correct spelling. It refers to a line that marks the limits of an area or concept.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Boundary (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A line that marks the limits of an area, concept, or relationship; a dividing line between different areas or concepts.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The property <strong>boundary</strong> is marked by a fence.</li>
                  <li>• She set clear <strong>boundary</strong> in her relationship.</li>
                  <li>• The county <strong>boundary</strong> runs along the river.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Boundry (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Boundry&quot; is a misspelling of &quot;boundary&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Boundry&quot; is not used in standard English.</li>
                  <li>• Always use <strong>boundary</strong> when referring to limits or borders.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Boundary:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Limit</li>
                <li>• Border</li>
                <li>• Frontier</li>
                <li>• Perimeter</li>
                <li>• Parameter</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Boundry:</h4>
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
            <li>• <strong>Boundary</strong> is spelled with &quot;a&quot; before &quot;r&quot;, not &quot;y&quot;.</li>
            <li>• The word comes from Old French &quot;bonde&quot; meaning limit or boundary.</li>
            <li>• Used as a singular noun.</li>
            <li>• Common in geography, psychology, and relationship contexts.</li>
            <li>• &quot;Boundry&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;boundry&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;boundry&quot; is never correct. The proper spelling is always &quot;boundary.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bound&quot; + &quot;ary&quot; - the word has &quot;a&quot; before &quot;r&quot; like &quot;salary&quot; or &quot;library.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between boundary and border?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;boundary&quot; can refer to both physical and conceptual limits, while a &quot;border&quot; typically refers to physical dividing lines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can boundary be used in psychology?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;boundary&quot; is commonly used in psychology to refer to personal limits in relationships and behavior.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with words that have &quot;y&quot; instead of &quot;a&quot; before &quot;r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;boundary&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: personal boundary, set boundary, cross boundary, respect boundary, and boundary line.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Boundary</strong> is the correct spelling with &quot;a&quot; before &quot;r&quot;. It refers to a line that marks the limits of an area or concept. The misspelling &quot;boundry&quot; is never correct. Use &quot;boundary&quot; when referring to physical or conceptual limits, especially in geography, psychology, and relationship contexts.</p>
      </div>
    </div>
  )
} 