import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Offended vs Affended - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;offended&quot; and &quot;affended&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OffendedVsAffendedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Offended vs Affended
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Offended&quot; or &quot;Affended&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Affended</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Affended&quot; is a misspelling. The correct spelling is &quot;offended&quot; with &apos;of&apos; at the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Offended</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Offended&quot; is the correct spelling. It means feeling displeasure or resentment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Offended</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Offended</strong> (adjective/verb, past tense of &quot;offend&quot;): Feeling displeasure, anger, or resentment; having been hurt or upset by something; feeling insulted or disrespected; having one&apos;s feelings hurt.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She was <strong>offended</strong> by his rude comments.</li>
              <li>• Many people were <strong>offended</strong> by the controversial advertisement.</li>
              <li>• He felt <strong>offended</strong> when his work was criticized.</li>
              <li>• The <strong>offended</strong> customer demanded an apology.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Offended</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Insulted</li>
                <li>• Upset</li>
                <li>• Hurt</li>
                <li>• Angry</li>
                <li>• Displeased</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Outraged</li>
                <li>• Provoked</li>
                <li>• Irritated</li>
                <li>• Annoyed</li>
                <li>• Disgusted</li>
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
            <li>• <strong>Offended</strong> is spelled with &apos;of&apos; at the beginning, not &apos;aff&apos;.</li>
            <li>• It&apos;s commonly used to describe emotional reactions to perceived slights.</li>
            <li>• Often describes feeling hurt by words or actions.</li>
            <li>• The word suggests a personal emotional response.</li>
            <li>• The word comes from the Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;affended&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affended&quot; is never correct. The proper spelling is always &quot;offended&quot; with &apos;of&apos; at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;offended&quot; as starting with &quot;off&quot; - when you&apos;re offended, you feel turned &quot;off&quot; or away from something. The word comes from Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between offended and insulted?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Offended&quot; is broader and can refer to any feeling of displeasure, while &quot;insulted&quot; specifically refers to feeling disrespected by words or actions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can offended be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;offended&quot; is used as an adjective or past tense verb. The noun form would be &quot;offense&quot; or &quot;offender.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is offended always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offended&quot; always has a negative connotation, indicating feelings of displeasure or hurt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;affended&quot; likely occurs because people may not remember the correct &apos;of&apos; beginning or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;offended&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: easily offended, deeply offended, take offense, cause offense, and give offense.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;offended&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offended&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, legal, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Offended</strong> is the correct spelling with &apos;of&apos; at the beginning. It means feeling displeasure or resentment. The misspelling &quot;affended&quot; with &apos;aff&apos; is never correct. Use this word when describing feelings of being hurt, upset, or displeased by something.
        </p>
      </div>
    </div>
  )
} 