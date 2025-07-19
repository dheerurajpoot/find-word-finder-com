import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coefficient or Coeficient - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coefficient&quot; and &quot;coeficient&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CoefficientVsCoeficientPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coefficient or Coeficient</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;coefficient&quot; and &quot;coeficient&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Coeficient</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Coeficient&quot; is a misspelling. The correct spelling is &quot;coefficient&quot; with a double &quot;f&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Coefficient</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Coefficient&quot; is the correct spelling. It refers to a numerical or constant quantity placed before and multiplying the variable in an algebraic expression.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Coefficient (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A numerical or constant quantity placed before and multiplying the variable in an algebraic expression.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• In 3x, 3 is the <strong>&quot;coefficient&quot;</strong> of x.</li>
                  <li>• The equation has a negative <strong>&quot;coefficient&quot;</strong>.</li>
                  <li>• The <strong>&quot;coefficient&quot;</strong> of friction is important in physics.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Coeficient (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Coeficient&quot; is a misspelling of &quot;coefficient&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Coeficient&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;coefficient&quot;</strong> when referring to a numerical factor.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Coefficient:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Factor</li>
                <li>• Multiplier</li>
                <li>• Constant</li>
                <li>• Number</li>
                <li>• Scalar</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Coeficient:</h4>
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
            <li>• <strong>&quot;Coefficient&quot;</strong> is spelled with a double &quot;f&quot; in the middle.</li>
            <li>• Used in mathematics, science, and engineering.</li>
            <li>• The word comes from Latin &quot;coefficientem&quot; meaning &quot;something that works together&quot;.</li>
            <li>• &quot;Coeficient&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;coeficient&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;coeficient&quot; is never correct. The proper spelling is always &quot;coefficient.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;f&quot; in the middle of &quot;coefficient&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;coefficient&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Coefficient&quot; means a numerical or constant quantity placed before and multiplying the variable in an algebraic expression.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;coeficient&quot; may occur due to omitting one of the &quot;f&quot; letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Coefficient&quot;</strong> is the correct spelling with a double &quot;f&quot; in the middle. It refers to a numerical or constant quantity in mathematics. The misspelling &quot;coeficient&quot; is never correct. Use &quot;coefficient&quot; in all contexts.</p>
      </div>
    </div>
  )
} 