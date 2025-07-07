import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admission vs Addmission - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;admission&quot; and &quot;addmission&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdmissionVsAddmissionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Admission vs Addmission
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Admission or Addmission these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Addmission</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Addmission&quot; is a misspelling. The correct spelling has only one &apos;d&apos; at the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Admission</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Admission&quot; is the correct spelling. It means the act of allowing someone to enter.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Admission</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Admission</strong> (noun): The act of allowing someone to enter; a statement acknowledging something; the process of being accepted into a place or organization.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The university sent her an <strong>admission</strong> letter.</li>
              <li>• <strong>Admission</strong> to the museum is free on Sundays.</li>
              <li>• His <strong>admission</strong> of guilt surprised everyone.</li>
              <li>• The hospital&apos;s emergency <strong>admission</strong> process is efficient.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Admission</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Entry</li>
                <li>• Entrance</li>
                <li>• Access</li>
                <li>• Admittance</li>
                <li>• Confession</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Acknowledgment</li>
                <li>• Acceptance</li>
                <li>• Enrollment</li>
                <li>• Registration</li>
                <li>• Inclusion</li>
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
            <li>• <strong>Admission</strong> is spelled with only one &apos;d&apos; at the beginning.</li>
            <li>• It&apos;s commonly used in educational, medical, and entertainment contexts.</li>
            <li>• In education, it refers to the process of being accepted into a school or program.</li>
            <li>• In medical contexts, it refers to being admitted to a hospital.</li>
            <li>• The word comes from the Latin &quot;admissio&quot; meaning &quot;admission.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;addmission&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addmission&quot; is never correct. The proper spelling is always &quot;admission&quot; with only one &apos;d&apos; at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;admission&quot; as &quot;ad&quot; + &quot;mission&quot; - you&apos;re on a mission to gain admission, so remember only one &apos;d&apos; at the beginning. The word comes from Latin &quot;admissio&quot; meaning &quot;admission.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between admission and admittance?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both words refer to being allowed to enter, but &quot;admission&quot; is more commonly used and can also refer to acknowledging something, while &quot;admittance&quot; is more formal and primarily refers to physical entry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can admission be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admission&quot; is only used as a noun. The verb form would be &quot;admit.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is admission used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Admission&quot; is commonly used in healthcare to refer to the process of being admitted to a hospital for treatment or care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;addmission&quot; likely occurs because people may think it follows the pattern of other words with double consonants, or they may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;admission&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: admission fee, admission requirements, admission process, admission letter, admission office, and admission deadline.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admission&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;admission&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Admission</strong> is the correct spelling with one &apos;d&apos; at the beginning. It means the act of allowing someone to enter; a statement acknowledging something. The misspelling &quot;addmission&quot; with double &apos;d&apos; is never correct. Use this word when you want to describe entry or acknowledgment.
        </p>
      </div>
    </div>
  )
} 