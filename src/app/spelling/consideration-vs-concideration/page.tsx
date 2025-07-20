import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Consideration or Concideration - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;consideration&quot; and &quot;concideration&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConsiderationVsConciderationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Consideration or Concideration</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;consideration&quot; or &quot;concideration&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concideration</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concideration&quot; is a common misspelling of &quot;consideration&quot;. Always use &quot;consideration&quot; when referring to careful thought or regard for others.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Consideration</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Consideration&quot; is a noun meaning careful thought, typically over a period of time, or thoughtful regard for others.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Consideration&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Consideration&quot;</strong> (noun): Careful thought, typically over a period of time; thoughtful regard for others.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in decision-making, planning, and social interactions to describe thoughtful evaluation or kindness.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Consideration&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Thoughtfulness</li>
                <li>• Reflection</li>
                <li>• Deliberation</li>
                <li>• Regard</li>
                <li>• Attention</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Respect</li>
                <li>• Contemplation</li>
                <li>• Mindfulness</li>
                <li>• Kindness</li>
                <li>• Review</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;Thank you for your <span className="text-green-600 font-semibold">consideration</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;Thank you for your <span className="text-red-600 font-semibold">concideration</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She showed great consideration for others.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Consideration&quot; is spelled with &quot;si&quot; in the middle, not &quot;ci&quot;.</li>
          <li>• The pronunciation is /kənˌsɪdəˈreɪʃən/ (kuhn-SID-uh-RAY-shun).</li>
          <li>• Commonly used in decision-making and social contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concideration&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concideration&quot; is never correct. The only correct form is &quot;consideration&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;consideration&quot; has &quot;si&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the verb form of &quot;consideration&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The verb form is &quot;consider&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;consideration&quot; be used in law?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, in law, &quot;consideration&quot; refers to something of value exchanged in a contract.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;consideration&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;take into consideration&quot;, &quot;show consideration&quot;, &quot;for your consideration&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Consideration</strong> is the correct spelling, while <strong>concideration</strong> is always incorrect. Use &quot;consideration&quot; when referring to careful thought or regard for others.
        </p>
      </div>
    </div>
  )
} 