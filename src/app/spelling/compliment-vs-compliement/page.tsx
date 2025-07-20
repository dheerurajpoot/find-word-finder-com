import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compliment or Compliement - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compliment&quot; and &quot;compliement&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComplimentVsCompliementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compliment or Compliement</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;compliment&quot; or &quot;compliement&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compliement</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compliement&quot; is a common misspelling of &quot;compliment&quot;. Always use &quot;compliment&quot; when referring to a polite expression of praise or admiration.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compliment</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compliment&quot; is a noun meaning a polite expression of praise or admiration; it can also be a verb meaning to express praise or admiration.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Compliment&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Compliment&quot;</strong> (noun): A polite expression of praise or admiration.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            As a verb, it means to express praise or admiration to someone.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Compliment&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Praise</li>
                <li>• Admiration</li>
                <li>• Flattery</li>
                <li>• Commendation</li>
                <li>• Tribute</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Acknowledgment</li>
                <li>• Appreciation</li>
                <li>• Congratulation</li>
                <li>• Salutation</li>
                <li>• Laudation</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She received a <span className="text-green-600 font-semibold">compliment</span> on her presentation.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She received a <span className="text-red-600 font-semibold">compliement</span> on her presentation.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He complimented her on her hard work.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compliment&quot; is spelled with &quot;i&quot; after the &quot;l&quot;, not &quot;ie&quot;.</li>
          <li>• The pronunciation is /ˈkɒmplɪmənt/ (KOM-pli-ment).</li>
          <li>• Commonly used in social, professional, and everyday contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compliement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compliement&quot; is never correct. The only correct form is &quot;compliment&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;compliment&quot; has &quot;i&quot; after the &quot;l&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;compliment&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is also &quot;compliment&quot; (e.g., &quot;to compliment someone&quot;).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the difference between &quot;compliment&quot; and &quot;complement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compliment&quot; means praise, while &quot;complement&quot; means something that completes or goes well with something else.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;compliment&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;pay a compliment&quot;, &quot;accept a compliment&quot;, &quot;return the compliment&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compliment</strong> is the correct spelling, while <strong>compliement</strong> is always incorrect. Use &quot;compliment&quot; when referring to a polite expression of praise or admiration.
        </p>
      </div>
    </div>
  )
} 