import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thorough or Throught - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thorough&quot; and &quot;throught&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThoroughVsThroughtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thorough or Throught</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thorough&quot; and &quot;throught&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Throught</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Throught&quot; is a misspelling. The correct spelling is &quot;thorough&quot; with &quot;ough&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thorough</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thorough&quot; is the correct spelling. It means complete or detailed.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thorough (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Complete with regard to every detail; not superficial or partial; exhaustive.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She gave the house a <strong>thorough</strong> cleaning.</li>
                  <li>• The doctor conducted a <strong>thorough</strong> examination.</li>
                  <li>• He made a <strong>thorough</strong> investigation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Throught (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Throught&quot; is a misspelling of &quot;thorough&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Throught&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thorough</strong> when referring to completeness.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thorough:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Complete</li>
                <li>• Comprehensive</li>
                <li>• Exhaustive</li>
                <li>• Detailed</li>
                <li>• Meticulous</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Throught:</h4>
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
            <li>• <strong>Thorough</strong> is spelled with &quot;ough&quot; in the middle.</li>
            <li>• It is an adjective that describes completeness or attention to detail.</li>
            <li>• &quot;Throught&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þuruh&quot; meaning &quot;through.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;throught&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;throught&quot; is never correct. The proper spelling is always &quot;thorough.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thorough&quot; has &quot;ough&quot; in the middle - think of it as &quot;th-orough.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thorough&quot; and &quot;complete&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thorough&quot; emphasizes attention to detail, while &quot;complete&quot; emphasizes finishing something entirely.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thorough&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thorough&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thorough&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;throught&quot; often happens by replacing &quot;ough&quot; with &quot;ought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thorough&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: thorough investigation, thorough cleaning, thorough examination, and thorough research.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thorough&quot; always about completeness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thorough&quot; always implies doing something completely or with great attention to detail.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thorough&quot; be used as an adverb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thorough&quot; is only used as an adjective. The adverb form is &quot;thoroughly.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thorough</strong> is the correct spelling with &quot;ough&quot; in the middle. It means complete or detailed. The misspelling &quot;throught&quot; is never correct. Always use &quot;thorough&quot; when referring to something that is complete or done with great attention to detail.</p>
      </div>
    </div>
  )
} 