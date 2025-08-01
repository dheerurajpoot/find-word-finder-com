import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Toes or Thoes - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;toes&quot; and &quot;thoes&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ToesVsThoesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Toes or Thoes</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;toes&quot; and &quot;thoes&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thoes</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thoes&quot; is a misspelling. The correct spelling is &quot;toes&quot; without an &quot;h.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Toes</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Toes&quot; is the correct spelling. It means the digits at the end of the foot.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Toes (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The digits at the end of the foot; the plural form of toe.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I stubbed my <strong>toes</strong> on the table leg.</li>
                  <li>• Her <strong>toes</strong> were cold in the winter.</li>
                  <li>• The baby wiggled his <strong>toes</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thoes (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thoes&quot; is a misspelling of &quot;toes&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thoes&quot; is not used in standard English.</li>
                  <li>• Always use <strong>toes</strong> when referring to foot digits.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Toes:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Digits</li>
                <li>• Foot digits</li>
                <li>• Phalanges</li>
                <li>• Pedal digits</li>
                <li>• Foot appendages</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thoes:</h4>
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
            <li>• <strong>Toes</strong> is spelled without an &quot;h&quot; - just &quot;t-o-e-s.&quot;</li>
            <li>• It is the plural form of the singular &quot;toe.&quot;</li>
            <li>• &quot;Thoes&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;tā&quot; meaning &quot;toe.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thoes&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thoes&quot; is never correct. The proper spelling is always &quot;toes.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;toes&quot; has no &quot;h&quot; - think of it as &quot;t-o-e-s.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;toe&quot; and &quot;toes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Toe&quot; is singular (one), while &quot;toes&quot; is plural (more than one).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;toes&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;toes&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;toes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thoes&quot; often happens due to confusion with other words that have &quot;th&quot; sounds.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;toes&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tip toes, big toes, little toes, and toes up.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;toes&quot; always about feet?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;toes&quot; always refers to the digits at the end of the foot.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;toes&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;toes&quot; is only used as a noun (plural form of toe).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Toes</strong> is the correct spelling without an &quot;h.&quot; It means the digits at the end of the foot. The misspelling &quot;thoes&quot; is never correct. Always use &quot;toes&quot; when referring to foot digits.</p>
      </div>
    </div>
  )
} 