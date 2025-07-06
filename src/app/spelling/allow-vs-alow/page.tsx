import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allow vs Alow - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allow&quot; and &quot;alow&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllowVsAlowPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Allow vs Alow
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Allow or Alow these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alow</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Alow&quot; is a misspelling. The correct spelling has two &apos;l&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allow</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Allow&quot; is the correct spelling. It means to give permission or let something happen.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Allow</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Allow</strong> (verb): To give permission for something to happen; to let someone do something; to permit or enable; to make possible or provide opportunity for.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The teacher will <strong>allow</strong> extra time for the test.</li>
              <li>• My parents <strong>allow</strong> me to stay out late.</li>
              <li>• The new policy <strong>allows</strong> flexible working hours.</li>
              <li>• Please <strong>allow</strong> me to explain.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Allow</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Permit</li>
                <li>• Let</li>
                <li>• Enable</li>
                <li>• Authorize</li>
                <li>• Approve</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Grant</li>
                <li>• Consent</li>
                <li>• Sanction</li>
                <li>• Endorse</li>
                <li>• Tolerate</li>
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
            <li>• <strong>Allow</strong> is spelled with two &apos;l&apos;s, not one.</li>
            <li>• It&apos;s commonly used in both formal and informal contexts.</li>
            <li>• Often used with &quot;to&quot; (allow someone to do something).</li>
            <li>• Can be used for permissions, possibilities, and opportunities.</li>
            <li>• The word comes from the Old French &quot;alouer&quot; meaning &quot;to approve.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alow&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;alow&quot; is never correct. The proper spelling is always &quot;allow&quot; with two &apos;l&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;allow&quot; as being related to &quot;all&quot; - both have two &apos;l&apos;s and relate to permission or inclusion. The word means to give permission, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;allow&quot; and &quot;permit&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Allow&quot; is more general and informal, while &quot;permit&quot; is more formal and official. &quot;Allow&quot; suggests giving permission, while &quot;permit&quot; suggests formal authorization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allow&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Allow&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, legal, and professional contexts to describe permissions or possibilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allow&quot; related to &quot;allowance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Allow&quot; is the verb form, while &quot;allowance&quot; is the noun form. Both words share the same root and correct spelling pattern with two &apos;l&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;alow&quot; likely occurs because people may not hear the double &apos;l&apos; sound clearly in pronunciation, or they might think it follows a simpler spelling pattern with one &apos;l&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: allow to, allow for, allow time, allow space, allow access, allow entry, allow freedom, and allow flexibility. The word is often used in contexts involving permission or possibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allow&quot; be used in passive voice?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Allow&quot; can be used in passive voice. For example: &quot;Smoking is not allowed&quot; or &quot;Visitors are allowed between 9 AM and 5 PM.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Allow</strong> is the correct spelling with two &apos;l&apos;s. It means to give permission or let something happen. The misspelling &quot;alow&quot; with one &apos;l&apos; is never correct. Use this word when you want to describe giving permission, enabling, or making something possible.
        </p>
      </div>
    </div>
  )
} 