import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Offer vs Offer - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;offer&quot; and &quot;offer&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OfferVsOfferPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Offer vs Offer
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the correct spelling of &quot;Offer&quot;: this commonly used word and how to use it properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Offfer</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Offfer&quot; with three &apos;f&apos;s is a misspelling. The correct spelling is &quot;offer&quot; with two &apos;f&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Offer</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Offer&quot; is the correct spelling. It means to present something for acceptance or rejection.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Offer</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Offer</strong> (verb/noun): To present something for acceptance or rejection; to propose or suggest something; to make available for purchase or consideration; to express willingness to do something; a proposal or suggestion; something presented for acceptance.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She <strong>offered</strong> to help with the project.</li>
              <li>• The company made an <strong>offer</strong> on the house.</li>
              <li>• He <strong>offered</strong> his condolences to the family.</li>
              <li>• The restaurant <strong>offers</strong> a wide variety of dishes.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Offer</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Propose</li>
                <li>• Suggest</li>
                <li>• Present</li>
                <li>• Provide</li>
                <li>• Extend</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Submit</li>
                <li>• Tender</li>
                <li>• Volunteer</li>
                <li>• Give</li>
                <li>• Supply</li>
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
            <li>• <strong>Offer</strong> is spelled with two &apos;f&apos;s, not three.</li>
            <li>• It&apos;s commonly used in business, social, and formal contexts.</li>
            <li>• Can be used as both a verb and a noun.</li>
            <li>• Often implies generosity or willingness to help.</li>
            <li>• The word comes from the Latin &quot;offerre&quot; meaning &quot;to bring before.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;offfer&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;offfer&quot; with three &apos;f&apos;s is never correct. The proper spelling is always &quot;offer&quot; with two &apos;f&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;offer&quot; as having two &apos;f&apos;s - one for &quot;for&quot; and one for &quot;free&quot;. The word comes from Latin &quot;offerre&quot; meaning &quot;to bring before.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between offer and propose?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Offer&quot; is more general and can be casual, while &quot;propose&quot; is more formal and often suggests a structured plan or formal suggestion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can offer be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offer&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, legal, and professional contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is offer always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Usually yes, but an offer can be declined or rejected. The word itself suggests willingness and generosity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;offfer&quot; likely occurs because people may confuse it with similar words or forget the correct number of &apos;f&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;offer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: make an offer, offer help, offer support, offer advice, and offer condolences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can offer be used as both verb and noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offer&quot; can be used as both a verb (to offer help) and a noun (an offer of employment).
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Offer</strong> is the correct spelling with two &apos;f&apos;s. It means to present something for acceptance or rejection. The misspelling &quot;offfer&quot; with three &apos;f&apos;s is never correct. Use this word when presenting something for consideration or expressing willingness to do something.
        </p>
      </div>
    </div>
  )
} 