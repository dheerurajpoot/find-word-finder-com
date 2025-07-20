import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Considers or Conciders - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;considers&quot; and &quot;conciders&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConsidersVsConcidersPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Considers or Conciders</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;considers&quot; or &quot;conciders&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Conciders</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Conciders&quot; is a common misspelling of &quot;considers&quot;. Always use &quot;considers&quot; when referring to the third person singular form of &quot;consider&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Considers</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Considers&quot; is the third person singular present tense of the verb &quot;consider&quot;.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Considers&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Considers&quot;</strong> (verb): Third person singular present tense of &quot;consider&quot;: to think about something carefully, especially before making a decision.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in decision-making, planning, and discussions to describe thoughtful evaluation by someone else.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Considers&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Thinks about</li>
                <li>• Contemplates</li>
                <li>• Reflects on</li>
                <li>• Weighs</li>
                <li>• Deliberates</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Mulls over</li>
                <li>• Reviews</li>
                <li>• Examines</li>
                <li>• Studies</li>
                <li>• Assesses</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She <span className="text-green-600 font-semibold">considers</span> all options before deciding.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She <span className="text-red-600 font-semibold">conciders</span> all options before deciding.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He considers the consequences of his actions.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Considers&quot; is spelled with &quot;si&quot; in the middle, not &quot;ci&quot;.</li>
          <li>• The pronunciation is /kənˈsɪdərz/ (kuhn-SID-erz).</li>
          <li>• Commonly used in decision-making and planning.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;conciders&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;conciders&quot; is never correct. The only correct form is &quot;considers&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;considers&quot; has &quot;si&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the base verb of &quot;considers&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The base verb is &quot;consider&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;considers&quot; be used for people?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;considers&quot; can be used to mean regarding or thinking about people or things.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;considers&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;considers carefully&quot;, &quot;considers all options&quot;, &quot;considers the consequences&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Considers</strong> is the correct spelling, while <strong>conciders</strong> is always incorrect. Use &quot;considers&quot; as the third person singular form of &quot;consider&quot;.
        </p>
      </div>
    </div>
  )
} 