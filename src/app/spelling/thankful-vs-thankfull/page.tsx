import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thankful or Thankfull - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thankful&quot; and &quot;thankfull&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThankfulVsThankfullPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thankful or Thankfull</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thankful&quot; and &quot;thankfull&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thankfull</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thankfull&quot; is a misspelling. The correct spelling is &quot;thankful&quot; with one &quot;l&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thankful</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thankful&quot; is the correct spelling. It means grateful or appreciative.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thankful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Grateful; appreciative; feeling or expressing gratitude.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I am <strong>thankful</strong> for your help.</li>
                  <li>• She was <strong>thankful</strong> to be alive.</li>
                  <li>• We are <strong>thankful</strong> for good health.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thankfull (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thankfull&quot; is a misspelling of &quot;thankful&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thankfull&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thankful</strong> when expressing gratitude.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thankful:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Grateful</li>
                <li>• Appreciative</li>
                <li>• Obliged</li>
                <li>• Indebted</li>
                <li>• Blessed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thankfull:</h4>
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
            <li>• <strong>Thankful</strong> is spelled with one &quot;l&quot; at the end: thank-ful.</li>
            <li>• It is a common adjective expressing gratitude.</li>
            <li>• &quot;Thankfull&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þancful&quot; meaning &quot;grateful.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thankfull&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thankfull&quot; is never correct. The proper spelling is always &quot;thankful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thankful&quot; has one &quot;l&quot; at the end - think of it as &quot;thank-ful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thankful&quot; and &quot;grateful&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both express gratitude, but &quot;thankful&quot; often implies a more personal, heartfelt appreciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thankful&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thankful&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thankful&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thankfull&quot; often happens by adding an extra &quot;l&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thankful&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: thankful for, thankful to, thankful that, and thankful to have.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thankful&quot; always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thankful&quot; always expresses positive gratitude or appreciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thankful&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thankful&quot; is only used as an adjective in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thankful</strong> is the correct spelling with one &quot;l&quot; at the end: thank-ful. It means grateful or appreciative. The misspelling &quot;thankfull&quot; is never correct. Always use &quot;thankful&quot; when expressing gratitude or appreciation for something.</p>
      </div>
    </div>
  )
} 