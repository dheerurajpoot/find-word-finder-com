import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compliance or Complance - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compliance&quot; and &quot;complance&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComplianceVsComplancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compliance or Complance</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;compliance&quot; or &quot;complance&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Complance</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Complance&quot; is a common misspelling of &quot;compliance&quot;. Always use &quot;compliance&quot; when referring to the act of conforming to rules or standards.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compliance</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compliance&quot; is a noun meaning the act of conforming to a rule, standard, or law.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Compliance&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Compliance&quot;</strong> (noun): The act of conforming, acquiescing, or yielding; conformity; accordance.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in legal, business, and medical contexts to describe following rules, standards, or prescribed treatments.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Compliance&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Conformity</li>
                <li>• Obedience</li>
                <li>• Adherence</li>
                <li>• Observance</li>
                <li>• Submission</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Accordance</li>
                <li>• Agreement</li>
                <li>• Respect</li>
                <li>• Consent</li>
                <li>• Acquiescence</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The company must ensure <span className="text-green-600 font-semibold">compliance</span> with all regulations.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The company must ensure <span className="text-red-600 font-semibold">complance</span> with all regulations.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Compliance with safety standards is mandatory.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compliance&quot; is spelled with &quot;ance&quot; at the end, not &quot;ance&quot;.</li>
          <li>• The pronunciation is /kəmˈplaɪəns/ (kuhm-PLY-uhns).</li>
          <li>• Commonly used in legal, business, and medical contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;complance&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;complance&quot; is never correct. The only correct form is &quot;compliance&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;compliance&quot; ends with &quot;ance&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;compliance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is &quot;comply&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;compliance&quot; be used in medical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;compliance&quot; can refer to a patient&apos;s adherence to a prescribed treatment or regimen.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;compliance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;compliance department&quot;, &quot;regulatory compliance&quot;, &quot;compliance officer&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compliance</strong> is the correct spelling, while <strong>complance</strong> is always incorrect. Use &quot;compliance&quot; when referring to the act of conforming to rules, standards, or laws.
        </p>
      </div>
    </div>
  )
} 