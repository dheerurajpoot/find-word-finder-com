import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Complaint or Complane - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;complaint&quot; and &quot;complane&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComplaintVsComplanePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Complaint or Complane</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;complaint&quot; or &quot;complane&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Complane</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Complane&quot; is a common misspelling of &quot;complaint&quot;. Always use &quot;complaint&quot; when referring to an expression of dissatisfaction.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Complaint</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Complaint&quot; is a noun meaning a statement that something is unsatisfactory or unacceptable.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Complaint&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Complaint&quot;</strong> (noun): A statement that something is unsatisfactory or unacceptable; an expression of dissatisfaction or annoyance.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in customer service, legal, and everyday contexts to describe a formal or informal expression of dissatisfaction.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Complaint&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Grievance</li>
                <li>• Objection</li>
                <li>• Protest</li>
                <li>• Criticism</li>
                <li>• Discontent</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Displeasure</li>
                <li>• Accusation</li>
                <li>• Charge</li>
                <li>• Allegation</li>
                <li>• Lament</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She filed a <span className="text-green-600 font-semibold">complaint</span> with customer service.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She filed a <span className="text-red-600 font-semibold">complane</span> with customer service.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The company received several complaints about the product.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Complaint&quot; is spelled with &quot;aint&quot; at the end, not &quot;ane&quot;.</li>
          <li>• The pronunciation is /kəmˈpleɪnt/ (kuhm-PLAYNT).</li>
          <li>• Commonly used in customer service, legal, and everyday contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;complane&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;complane&quot; is never correct. The only correct form is &quot;complaint&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;complaint&quot; ends with &quot;aint&quot;, not &quot;ane&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;complaint&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is &quot;complain&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;complaint&quot; be used in legal contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;complaint&quot; is a formal legal term for a statement that initiates a lawsuit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;complaint&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;file a complaint&quot;, &quot;customer complaint&quot;, &quot;formal complaint&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Complaint</strong> is the correct spelling, while <strong>complane</strong> is always incorrect. Use &quot;complaint&quot; when referring to an expression of dissatisfaction or a formal legal statement.
        </p>
      </div>
    </div>
  )
} 