import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tendency or Tendancy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tendency&quot; and &quot;tendancy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TendencyVsTendancyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tendency or Tendancy</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tendency&quot; and &quot;tendancy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tendancy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tendancy&quot; is a misspelling. The correct spelling is &quot;tendency&quot; with &quot;cy&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tendency</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tendency&quot; is the correct spelling. It means an inclination or predisposition.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tendency (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An inclination toward a particular characteristic or type of behavior; a predisposition; a trend or pattern.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He has a <strong>tendency</strong> to be late.</li>
                  <li>• There&apos;s a <strong>tendency</strong> for prices to rise.</li>
                  <li>• Her <strong>tendency</strong> to worry affects her health.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tendancy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tendancy&quot; is a misspelling of &quot;tendency&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tendancy&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tendency</strong> when referring to inclinations.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tendency:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Inclination</li>
                <li>• Propensity</li>
                <li>• Disposition</li>
                <li>• Trend</li>
                <li>• Proclivity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tendancy:</h4>
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
            <li>• <strong>Tendency</strong> is spelled with &quot;cy&quot; at the end: ten-den-cy.</li>
            <li>• It is commonly used in psychology and behavioral contexts.</li>
            <li>• &quot;Tendancy&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;tendere&quot; meaning &quot;to stretch.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tendancy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tendancy&quot; is never correct. The proper spelling is always &quot;tendency.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tendency&quot; ends with &quot;cy&quot; - think of it as &quot;ten-den-cy.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between tendency and trend?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Tendency refers to personal inclinations, while trend refers to general patterns in data or society.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tendency&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tendency&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tendency&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tendancy&quot; often happens by replacing &quot;cy&quot; with &quot;cy&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tendency&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: natural tendency, tendency toward, tendency to, and behavioral tendency.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tendency&quot; always about behavior?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tendency&quot; can refer to any inclination, pattern, or predisposition, not just behavior.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tendency&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tendency&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tendency</strong> is the correct spelling with &quot;cy&quot; at the end: ten-den-cy. It means an inclination toward a particular characteristic or type of behavior. The misspelling &quot;tendancy&quot; is never correct. Always use &quot;tendency&quot; when referring to inclinations, predispositions, or behavioral patterns.</p>
      </div>
    </div>
  )
} 