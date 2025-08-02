import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Temporarily or Temporaly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;temporarily&quot; and &quot;temporaly&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TemporarilyVsTemporalyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Temporarily or Temporaly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;temporarily&quot; and &quot;temporaly&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Temporaly</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Temporaly&quot; is a misspelling. The correct spelling is &quot;temporarily&quot; with &quot;ri&quot; before &quot;ly&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Temporarily</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Temporarily&quot; is the correct spelling. It means for a limited time.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Temporarily (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">For a limited time; not permanently; in a temporary manner.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The office was <strong>temporarily</strong> closed for repairs.</li>
                  <li>• He was <strong>temporarily</strong> assigned to another department.</li>
                  <li>• The service was <strong>temporarily</strong> unavailable.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Temporaly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Temporaly&quot; is a misspelling of &quot;temporarily&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Temporaly&quot; is not used in standard English.</li>
                  <li>• Always use <strong>temporarily</strong> when referring to limited time.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Temporarily:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Briefly</li>
                <li>• Momentarily</li>
                <li>• For now</li>
                <li>• Provisionally</li>
                <li>• For the time being</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Temporaly:</h4>
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
            <li>• <strong>Temporarily</strong> is spelled with &quot;ri&quot; before &quot;ly&quot;: tem-po-ra-ri-ly.</li>
            <li>• It is commonly used in business and formal contexts.</li>
            <li>• &quot;Temporaly&quot; is never correct in any context.</li>
            <li>• The word comes from &quot;temporary&quot; + &quot;-ly&quot; suffix.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temporaly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temporaly&quot; is never correct. The proper spelling is always &quot;temporarily.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;temporarily&quot; has &quot;ri&quot; before &quot;ly&quot; - think of it as &quot;tem-po-ra-ri-ly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between temporarily and briefly?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean for a short time, but temporarily emphasizes the temporary nature, while briefly emphasizes the short duration.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temporarily&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temporarily&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;temporarily&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;temporaly&quot; often happens by omitting the &quot;ri&quot; before &quot;ly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;temporarily&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: temporarily closed, temporarily unavailable, temporarily suspended, and temporarily assigned.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;temporarily&quot; always about time?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;temporarily&quot; always refers to something that happens for a limited time period.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;temporarily&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;temporarily&quot; is only used as an adverb in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Temporarily</strong> is the correct spelling with &quot;ri&quot; before &quot;ly&quot;: tem-po-ra-ri-ly. It means for a limited time or not permanently. The misspelling &quot;temporaly&quot; is never correct. Always use &quot;temporarily&quot; when referring to actions or states that last for a limited time period, especially in business and formal contexts.</p>
      </div>
    </div>
  )
} 