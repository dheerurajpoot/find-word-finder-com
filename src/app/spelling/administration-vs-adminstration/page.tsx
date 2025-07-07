import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Administration vs Adminstration - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;administration&quot; and &quot;adminstration&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdministrationVsAdminstrationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Administration vs Adminstration
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Administration or Adminstration these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adminstration</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adminstration&quot; is a misspelling. The correct spelling has &apos;istra&apos; instead of &apos;stra&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Administration</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Administration&quot; is the correct spelling. It means the management of an organization or system.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Administration</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Administration</strong> (noun): The process or activity of running a business, organization, or institution; the management and supervision of affairs; the group of people who manage an organization; the act of administering or governing.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>administration</strong> of the hospital implemented new safety protocols.</li>
              <li>• The school <strong>administration</strong> decided to extend the academic year.</li>
              <li>• The new <strong>administration</strong> focused on improving efficiency.</li>
              <li>• The <strong>administration</strong> of justice is a complex process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Administration</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Management</li>
                <li>• Governance</li>
                <li>• Leadership</li>
                <li>• Direction</li>
                <li>• Supervision</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Executive</li>
                <li>• Bureaucracy</li>
                <li>• Hierarchy</li>
                <li>• Authority</li>
                <li>• Control</li>
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
            <li>• <strong>Administration</strong> is spelled with &apos;istra&apos;, not &apos;stra&apos;.</li>
            <li>• It&apos;s commonly used in business, government, and educational contexts.</li>
            <li>• Can refer to both the process and the people involved.</li>
            <li>• The word implies organized management and control.</li>
            <li>• The word comes from the Latin &quot;administratio&quot; meaning &quot;management.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adminstration&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adminstration&quot; is never correct. The proper spelling is always &quot;administration&quot; with &apos;istra&apos; instead of &apos;stra&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;administration&quot; as having &quot;istra&quot; in the middle - you need to &quot;admin-istra-tion&quot; to remember it. The word comes from Latin &quot;administratio&quot; meaning &quot;management.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between administration and management?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both involve overseeing operations, &quot;administration&quot; often refers to the broader organizational structure and governance, while &quot;management&quot; focuses more on day-to-day operations and people.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can administration be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;administration&quot; is only used as a noun. The verb form would be &quot;administer.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is administration always formal?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;administration&quot; is generally used in formal contexts, particularly in business, government, and institutional settings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adminstration&quot; likely occurs because people may not realize there&apos;s an &apos;i&apos; in the middle or may confuse it with similar words that have different spellings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;administration&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: public administration, business administration, school administration, hospital administration, and government administration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;administration&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;administration&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Administration</strong> is the correct spelling with &apos;istra&apos; in the middle. It means the process or activity of running a business, organization, or institution. The misspelling &quot;adminstration&quot; with &apos;stra&apos; is never correct. Use this word when you want to describe the management and supervision of organizational affairs.
        </p>
      </div>
    </div>
  )
} 