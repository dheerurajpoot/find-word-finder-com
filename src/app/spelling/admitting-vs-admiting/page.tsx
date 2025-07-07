import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admitting vs Admiting - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;admitting&quot; and &quot;admiting&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdmittingVsAdmitingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Admitting vs Admiting
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Admitting&quot; or &quot;Admiting&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Admiting</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Admiting&quot; is a misspelling. The correct spelling has two &apos;t&apos;s in &quot;admitting.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Admitting</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Admitting&quot; is the correct spelling. It means to confess or acknowledge something to be true.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Admitting</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Admitting</strong> (verb, present participle of &quot;admit&quot;): The act of confessing or acknowledging something to be true; allowing someone to enter a place; accepting someone into an institution or organization; granting or conceding something.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She was <strong>admitting</strong> her mistake to the committee.</li>
              <li>• The hospital is <strong>admitting</strong> new patients today.</li>
              <li>• He kept <strong>admitting</strong> that he was wrong about the project.</li>
              <li>• The university is <strong>admitting</strong> students for the fall semester.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Admitting</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Confessing</li>
                <li>• Acknowledging</li>
                <li>• Conceding</li>
                <li>• Accepting</li>
                <li>• Granting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Allowing</li>
                <li>• Permitting</li>
                <li>• Welcoming</li>
                <li>• Recognizing</li>
                <li>• Owning</li>
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
            <li>• <strong>Admitting</strong> is spelled with two &apos;t&apos;s, not one.</li>
            <li>• It&apos;s commonly used in both formal and informal contexts.</li>
            <li>• Can refer to both physical entry and acknowledgment of truth.</li>
            <li>• The word implies honesty or permission.</li>
            <li>• The word comes from the Latin &quot;admittere&quot; meaning &quot;to let in.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;admiting&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admiting&quot; is never correct. The proper spelling is always &quot;admitting&quot; with two &apos;t&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;admitting&quot; as having a double &apos;t&apos; - you need to &quot;admit&quot; something, so it&apos;s &quot;admit-ting.&quot; The word comes from Latin &quot;admittere&quot; meaning &quot;to let in.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between admitting and confessing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both involve acknowledging something, &quot;admitting&quot; is more general and can refer to any acknowledgment, while &quot;confessing&quot; typically implies admitting to something wrong or secret.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can admitting be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admitting&quot; is only used as a verb (present participle). The noun form would be &quot;admission.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is admitting always about negative things?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admitting&quot; is not always negative. It can refer to admitting someone to a school, hospital, or organization, which are positive contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;admiting&quot; likely occurs because people may not realize there are two &apos;t&apos;s in the word or may confuse it with similar words that have single consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;admitting&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: admitting to hospital, admitting to school, admitting defeat, admitting guilt, admitting mistake, and admitting the truth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admitting&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;admitting&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Admitting</strong> is the correct spelling with two &apos;t&apos;s. It means to confess or acknowledge something to be true, or to allow someone to enter a place or organization. The misspelling &quot;admiting&quot; with one &apos;t&apos; is never correct. Use this word when you want to describe the act of acknowledging truth or allowing entry.
        </p>
      </div>
    </div>
  )
} 