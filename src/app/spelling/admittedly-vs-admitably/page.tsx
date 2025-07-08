import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admittedly or Admitably - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;admittedly&quot; and &quot;admitably&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdmittedlyVsAdmitablyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Admittedly or Admitably
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Admittedly or Admitably these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Admitably</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Admitably&quot; is a misspelling. The correct spelling has &apos;edly&apos; instead of &apos;ably&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Admittedly</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Admittedly&quot; is the correct spelling. It means as acknowledged or confessed.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Admittedly</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Admittedly</strong> (adverb): As acknowledged or confessed; it must be admitted; by general admission; used to introduce a statement that concedes something is true.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• <strong>Admittedly</strong>, the task was more difficult than expected.</li>
              <li>• The movie was, <strong>admittedly</strong>, not his best work.</li>
              <li>• <strong>Admittedly</strong>, I made a mistake in my calculations.</li>
              <li>• The solution is, <strong>admittedly</strong>, not perfect but it works.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Admittedly</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Certainly</li>
                <li>• Indeed</li>
                <li>• Granted</li>
                <li>• Obviously</li>
                <li>• Clearly</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Undoubtedly</li>
                <li>• Unquestionably</li>
                <li>• Assuredly</li>
                <li>• Manifestly</li>
                <li>• Evidently</li>
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
            <li>• <strong>Admittedly</strong> is spelled with &apos;edly&apos;, not &apos;ably&apos;.</li>
            <li>• It&apos;s commonly used to introduce concessions or acknowledgments.</li>
            <li>• Often used in formal writing and speech.</li>
            <li>• The word implies honesty or frankness.</li>
            <li>• The word comes from the verb &quot;admit&quot; plus the suffix &quot;-edly.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;admitably&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admitably&quot; is never correct. The proper spelling is always &quot;admittedly&quot; with &apos;edly&apos; instead of &apos;ably&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;admittedly&quot; as coming from &quot;admit&quot; plus &quot;-edly&quot; - you &quot;admit&quot; something, so it&apos;s &quot;admit-edly.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between admittedly and obviously?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both introduce statements, &quot;admittedly&quot; implies a concession or acknowledgment of something that might be unfavorable, while &quot;obviously&quot; suggests something is clear or evident.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can admittedly be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admittedly&quot; is only used as an adverb. It modifies verbs, adjectives, or other adverbs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is admittedly always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admittedly&quot; is not always negative. It can be used to acknowledge any fact, whether positive, negative, or neutral.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;admitably&quot; likely occurs because people may confuse it with other words that end in &apos;ably&apos; or may not be familiar with the correct &apos;edly&apos; ending.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;admittedly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: admittedly so, admittedly difficult, admittedly complex, admittedly challenging, and admittedly true.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admittedly&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;admittedly&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Admittedly</strong> is the correct spelling with &apos;edly&apos; at the end. It means as acknowledged or confessed, used to introduce a statement that concedes something is true. The misspelling &quot;admitably&quot; with &apos;ably&apos; is never correct. Use this word when you want to acknowledge or concede a point honestly.
        </p>
      </div>
    </div>
  )
} 