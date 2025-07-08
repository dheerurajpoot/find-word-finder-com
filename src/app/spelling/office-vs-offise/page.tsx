import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Office or Offise - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;office&quot; and &quot;offise&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OfficeVsOffisePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Office or Offise
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Office&quot; or &quot;Offise&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Offise</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Offise&quot; is a misspelling. The correct spelling is &quot;office&quot; with &apos;ce&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Office</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Office&quot; is the correct spelling. It means a room or building where work is done.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Office</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Office</strong> (noun): A room or building where administrative or professional work is conducted; a position of authority or responsibility; a place where business is transacted; a government department or agency; a duty or function.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She works in a downtown <strong>office</strong> building.</li>
              <li>• The <strong>office</strong> of the president is on the top floor.</li>
              <li>• He was elected to the <strong>office</strong> of mayor.</li>
              <li>• The post <strong>office</strong> is closed on Sundays.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Office</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Workplace</li>
                <li>• Workspace</li>
                <li>• Bureau</li>
                <li>• Department</li>
                <li>• Agency</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Headquarters</li>
                <li>• Studio</li>
                <li>• Chamber</li>
                <li>• Station</li>
                <li>• Branch</li>
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
            <li>• <strong>Office</strong> is spelled with &apos;ce&apos; at the end, not &apos;se&apos;.</li>
            <li>• It&apos;s commonly used in business and professional contexts.</li>
            <li>• Can refer to both physical spaces and positions of authority.</li>
            <li>• Often used in compound terms like &quot;post office&quot; or &quot;head office.&quot;</li>
            <li>• The word comes from the Latin &quot;officium&quot; meaning &quot;service&quot; or &quot;duty.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;offise&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;offise&quot; is never correct. The proper spelling is always &quot;office&quot; with &apos;ce&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;office&quot; as ending with &quot;ice&quot; - like the ice in a cold office building. The word comes from Latin &quot;officium&quot; meaning &quot;service&quot; or &quot;duty.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between office and workplace?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Office&quot; specifically refers to a room or building for administrative work, while &quot;workplace&quot; is broader and can include any location where work is done.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can office be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;office&quot; is only used as a noun. The verb form would be &quot;to officiate&quot; or &quot;to serve in office.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is office always a physical space?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;office&quot; can also refer to a position of authority or responsibility, not just a physical location.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;offise&quot; likely occurs because people may confuse the &apos;ce&apos; ending with &apos;se&apos; or may not remember the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;office&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: post office, head office, home office, office hours, and office politics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;office&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;office&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, legal, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Office</strong> is the correct spelling with &apos;ce&apos; at the end. It means a room or building where work is done or a position of authority. The misspelling &quot;offise&quot; with &apos;se&apos; is never correct. Use this word when referring to workplaces, administrative spaces, or positions of responsibility.
        </p>
      </div>
    </div>
  )
} 