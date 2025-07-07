import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Affirmed vs Afformed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;affirmed&quot; and &quot;afformed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AffirmedVsAfformedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Affirmed vs Afformed
      </h1>
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Affirmed&quot; or &quot;Afformed&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>
      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Afformed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Afformed&quot; is a misspelling. The correct spelling is &quot;affirmed&quot; with an &apos;i&apos; after the double &apos;f&apos;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Affirmed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Affirmed&quot; is the correct spelling. It means to state or assert positively; to confirm or ratify.
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Affirmed</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Affirmed</strong> (verb, past tense of &quot;affirm&quot;): Stated or declared positively; confirmed the truth or validity of something; upheld a decision or judgment.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The court <strong>affirmed</strong> the previous ruling.</li>
              <li>• She <strong>affirmed</strong> her commitment to the project.</li>
              <li>• His identity was <strong>affirmed</strong> by witnesses.</li>
              <li>• The results <strong>affirmed</strong> our hypothesis.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Affirmed</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Confirmed</li>
                <li>• Asserted</li>
                <li>• Declared</li>
                <li>• Certified</li>
                <li>• Ratified</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Supported</li>
                <li>• Endorsed</li>
                <li>• Upheld</li>
                <li>• Guaranteed</li>
                <li>• Validated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Affirmed</strong> is spelled with an &apos;i&apos; after the double &apos;f&apos;, not an &apos;o&apos;.</li>
            <li>• Commonly used in legal, academic, and formal contexts.</li>
            <li>• Means to confirm, support, or uphold something as true or valid.</li>
            <li>• The word comes from the Latin &quot;affirmare&quot; meaning &quot;to make steady, strengthen.&quot;</li>
            <li>• The noun form is &quot;affirmation&quot;.</li>
          </ul>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;afformed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;afformed&quot; is never correct. The proper spelling is always &quot;affirmed&quot; with an &apos;i&apos; after the double &apos;f&apos;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember &quot;affirmed&quot; has &quot;firm&quot; in it, as in to make something firm or certain. The word comes from Latin &quot;affirmare&quot; meaning &quot;to make steady.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between affirm and confirm?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Affirm&quot; means to state positively or assert, while &quot;confirm&quot; means to verify or establish the truth of something.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can affirmed be used in legal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affirmed&quot; is commonly used in legal contexts to mean a court has upheld a previous decision.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is affirmed always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Generally yes, as it means to confirm or support, but it can also mean upholding a negative decision.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;afformed&quot; likely occurs because of confusion with similar-sounding words or uncertainty about the vowel after the double &apos;f&apos;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;affirmed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: affirmed by the court, affirmed commitment, affirmed identity, and affirmed decision.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;affirmed&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affirmed&quot; is appropriate in formal writing, especially in legal, academic, and professional contexts.
            </p>
          </div>
        </div>
      </div>
      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Affirmed</strong> is the correct spelling with an &apos;i&apos; after the double &apos;f&apos;. It means to state, confirm, or uphold something as true. The misspelling &quot;afformed&quot; is never correct. Use this word when confirming, supporting, or validating a statement, decision, or fact.
        </p>
      </div>
    </div>
  )
} 