import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Altered or Alterated - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;altered&quot; and &quot;alterated&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlteredVsAlteratedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Altered or Alterated</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;altered&quot; and &quot;alterated&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alterated</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alterated&quot; is a misspelling. The correct spelling is &quot;altered&quot; with &quot;-ed&quot; ending.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Altered</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Altered&quot; is the correct spelling. It means changed or modified from the original state.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Altered (verb, past tense):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Changed or modified from the original state; made different.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The document was <strong>altered</strong> without permission.</li>
                  <li>• She <strong>altered</strong> her dress to fit better.</li>
                  <li>• The plans were <strong>altered</strong> at the last minute.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alterated (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alterated&quot; is a misspelling of &quot;altered&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alterated&quot; is not used in standard English.</li>
                  <li>• Always use <strong>altered</strong> when referring to changes.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Altered:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Changed</li>
                <li>• Modified</li>
                <li>• Adjusted</li>
                <li>• Transformed</li>
                <li>• Amended</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alterated:</h4>
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
            <li>• <strong>Altered</strong> is the past tense and past participle of &quot;alter.&quot;</li>
            <li>• Used to describe something that has been changed or modified.</li>
            <li>• The word comes from Latin &quot;alterare&quot; meaning to change.</li>
            <li>• Can be used as both a verb and an adjective.</li>
            <li>• &quot;Alterated&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alterated&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alterated&quot; is never correct. The proper spelling is always &quot;altered.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;alter + ed&quot; - the base word is &quot;alter&quot; and you add &quot;-ed&quot; for the past tense.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can altered be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;altered&quot; can function as both a past tense verb and an adjective describing something that has been changed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between altered and changed?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Altered&quot; often implies a more specific or deliberate modification, while &quot;changed&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;altered&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: altered state, genetically altered, and altered reality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alterated&quot; occurs because people think it should have an extra syllable or different ending pattern.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can altered be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;altered&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is altered always about physical changes?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;altered&quot; can refer to any type of change, including physical, mental, emotional, or conceptual modifications.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Altered</strong> is the correct spelling with &quot;-ed&quot; ending. It means changed or modified from the original state. The misspelling &quot;alterated&quot; is never correct. Use &quot;altered&quot; to describe something that has been changed or modified.</p>
      </div>
    </div>
  )
} 