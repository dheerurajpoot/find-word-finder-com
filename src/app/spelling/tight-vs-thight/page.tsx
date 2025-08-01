import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tight or Thight - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tight&quot; and &quot;thight&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TightVsThightPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tight or Thight</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tight&quot; and &quot;thight&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thight</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thight&quot; is a misspelling. The correct spelling is &quot;tight&quot; without an &quot;h.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tight</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tight&quot; is the correct spelling. It means firmly fixed, close-fitting, or secure.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tight (adjective/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Firmly fixed, close-fitting, secure, or difficult to move.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The lid was <strong>tight</strong> and wouldn&apos;t budge.</li>
                  <li>• She wore a <strong>tight</strong> dress to the party.</li>
                  <li>• The rope was tied <strong>tight</strong> around the package.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thight (adjective/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thight&quot; is a misspelling of &quot;tight&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thight&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tight</strong> when referring to firmness or security.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tight:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Firm</li>
                <li>• Secure</li>
                <li>• Close-fitting</li>
                <li>• Snug</li>
                <li>• Constricted</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thight:</h4>
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
            <li>• <strong>Tight</strong> is spelled without an &quot;h&quot; - just &quot;t-i-g-h-t.&quot;</li>
            <li>• It can be used as both an adjective and an adverb.</li>
            <li>• &quot;Thight&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;thēot&quot; meaning &quot;dense, close.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thight&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thight&quot; is never correct. The proper spelling is always &quot;tight.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tight&quot; has no &quot;h&quot; - think of it as &quot;t-i-g-h-t.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;tight&quot; and &quot;firm&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tight&quot; implies close-fitting or constricted, while &quot;firm&quot; implies solid or unyielding.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tight&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tight&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tight&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thight&quot; often happens due to confusion with other words that have &quot;th&quot; sounds.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tight&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tight schedule, tight budget, tight security, and tight squeeze.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tight&quot; always about physical closeness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tight&quot; can also refer to schedules, budgets, security, or other abstract concepts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tight&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tight&quot; is only used as an adjective or adverb.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tight</strong> is the correct spelling without an &quot;h.&quot; It means firmly fixed, close-fitting, or secure. The misspelling &quot;thight&quot; is never correct. Always use &quot;tight&quot; when referring to firmness, security, or close-fitting objects.</p>
      </div>
    </div>
  )
} 