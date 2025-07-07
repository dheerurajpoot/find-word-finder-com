import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admitted vs Addmitted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;admitted&quot; and &quot;addmitted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdmittedVsAddmittedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Admitted vs Addmitted
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Admitted or Addmitted these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Addmitted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Addmitted&quot; is a misspelling. The correct spelling has only one &apos;d&apos; at the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Admitted</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Admitted&quot; is the correct spelling. It means allowed to enter or acknowledged.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Admitted</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Admitted</strong> (verb, past tense): Past tense and past participle of &quot;admit&quot;; allowed to enter or acknowledged; confessed or conceded something.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She was <strong>admitted</strong> to the university last week.</li>
              <li>• He <strong>admitted</strong> his mistake and apologized.</li>
              <li>• The patient was <strong>admitted</strong> to the hospital for surgery.</li>
              <li>• They <strong>admitted</strong> that the project was behind schedule.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Admitted</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Confessed</li>
                <li>• Acknowledged</li>
                <li>• Conceded</li>
                <li>• Allowed</li>
                <li>• Permitted</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Granted</li>
                <li>• Accepted</li>
                <li>• Recognized</li>
                <li>• Confirmed</li>
                <li>• Agreed</li>
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
            <li>• <strong>Admitted</strong> is spelled with only one &apos;d&apos; at the beginning.</li>
            <li>• It&apos;s the past tense and past participle form of the verb &quot;admit.&quot;</li>
            <li>• Can be used in both active and passive voice constructions.</li>
            <li>• In educational contexts, it refers to being accepted into a school or program.</li>
            <li>• The word comes from the Latin &quot;admittere&quot; meaning &quot;to admit.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;addmitted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addmitted&quot; is never correct. The proper spelling is always &quot;admitted&quot; with only one &apos;d&apos; at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;admitted&quot; as the past tense of &quot;admit&quot; - both words have only one &apos;d&apos; at the beginning. The word comes from Latin &quot;admittere&quot; meaning &quot;to admit.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between admitted and confessed?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both words can mean acknowledging something, but &quot;admitted&quot; is more general and can refer to allowing entry or acknowledging facts, while &quot;confessed&quot; specifically refers to admitting guilt or wrongdoing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can admitted be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admitted&quot; is only used as a verb (past tense/past participle). The noun form would be &quot;admission.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is admitted used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Admitted&quot; is commonly used in healthcare to refer to being admitted to a hospital for treatment or care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;addmitted&quot; likely occurs because people may think it follows the pattern of other words with double consonants, or they may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;admitted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: admitted to hospital, admitted to university, admitted defeat, admitted guilt, admitted mistake, and admitted responsibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admitted&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;admitted&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Admitted</strong> is the correct spelling with one &apos;d&apos; at the beginning. It means past tense and past participle of &quot;admit&quot;; allowed to enter or acknowledged. The misspelling &quot;addmitted&quot; with double &apos;d&apos; is never correct. Use this word when you want to describe being allowed entry or acknowledging something.
        </p>
      </div>
    </div>
  )
} 