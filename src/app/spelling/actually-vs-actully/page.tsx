import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Actually vs Actully - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;actually&quot; and &quot;actully&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActuallyVsActullyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Actually vs Actully
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Actually or Actully and when to use each one correctly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Actully</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Actully&quot; is a misspelling. The correct spelling has two &apos;l&apos;s in the middle.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Actually</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Actually&quot; is the correct spelling. It means in fact, really, or truly.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Actually</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Actually</strong> (adverb): In fact, really, truly, or genuinely. It is used to emphasize that something is true or to correct a misunderstanding.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• I <strong>actually</strong> enjoyed the movie more than I expected.</li>
              <li>• She <strong>actually</strong> won the competition!</li>
              <li>• The weather is <strong>actually</strong> quite nice today.</li>
              <li>• I <strong>actually</strong> don&apos;t know the answer to that question.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Actually</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Really</li>
                <li>• Truly</li>
                <li>• In fact</li>
                <li>• Indeed</li>
                <li>• Genuinely</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Honestly</li>
                <li>• Truthfully</li>
                <li>• Certainly</li>
                <li>• Surely</li>
                <li>• Verily</li>
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
            <li>• <strong>Actually</strong> is spelled with two &apos;l&apos;s in the middle, not one.</li>
            <li>• It&apos;s commonly used to emphasize truth or correct misconceptions.</li>
            <li>• Often used at the beginning of sentences to introduce surprising information.</li>
            <li>• Can be used to soften statements or express politeness.</li>
            <li>• The word comes from the adjective &quot;actual&quot; + the suffix &quot;-ly.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;actully&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;actully&quot; is never correct. The proper spelling is always &quot;actually&quot; with two &apos;l&apos;s in the middle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;actually&quot; as being related to &quot;actual&quot; - both have two &apos;l&apos;s. The adverb form &quot;actually&quot; is formed by adding &quot;-ly&quot; to &quot;actual.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;actually&quot; and &quot;really&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both words can be used similarly, but &quot;actually&quot; often emphasizes truth or corrects misconceptions, while &quot;really&quot; can also express surprise or intensity. &quot;Actually&quot; is more formal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;actually&quot; be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Actually&quot; is commonly used at the beginning of sentences to introduce surprising or correcting information. For example: &quot;Actually, I think you&apos;re wrong.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;actually&quot; related to &quot;actual&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Actually&quot; is the adverb form of &quot;actual.&quot; While &quot;actual&quot; is an adjective meaning &quot;real&quot; or &quot;genuine,&quot; &quot;actually&quot; is an adverb meaning &quot;in fact&quot; or &quot;really.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;actully&quot; likely occurs because people may not realize that &quot;actually&quot; has two &apos;l&apos;s in the middle. They might think it follows a simpler pattern or confuse it with other words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;actually&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;actually&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts to emphasize truth or correct information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;actually&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: &quot;as a matter of fact,&quot; &quot;in actual fact,&quot; &quot;to be honest,&quot; and &quot;in reality.&quot; &quot;Actually&quot; is often used to introduce corrections or surprising information.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Actually</strong> is the correct spelling with two &apos;l&apos;s in the middle. It means in fact, really, or truly. The misspelling &quot;actully&quot; with one &apos;l&apos; is never correct. Use this word when you want to emphasize that something is true or to correct a misunderstanding.
        </p>
      </div>
    </div>
  )
} 