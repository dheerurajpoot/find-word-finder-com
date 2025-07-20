import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Competing or Competiting - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;competing&quot; and &quot;competiting&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompetingVsCompetitingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Competing or Competiting</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;competing&quot; or &quot;competiting&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Competiting</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Competiting&quot; is a common misspelling of &quot;competing&quot;. Always use &quot;competing&quot; when referring to taking part in a competition.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Competing</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Competing&quot; is the present participle of &quot;compete&quot;, meaning to take part in a contest or rivalry.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Competing&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Competing&quot;</strong> (verb): Taking part in a competition or contest; striving against others to win or gain something.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used when describing people, teams, or organizations that are actively involved in a contest, rivalry, or competition.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Competing&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Contending</li>
                <li>• Rivaling</li>
                <li>• Challenging</li>
                <li>• Battling</li>
                <li>• Fighting</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Vying</li>
                <li>• Striving</li>
                <li>• Jockeying</li>
                <li>• Opposing</li>
                <li>• Contesting</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She is <span className="text-green-600 font-semibold">competing</span> in the national spelling bee.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She is <span className="text-red-600 font-semibold">competiting</span> in the national spelling bee.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Many athletes are competing for the gold medal.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Competing&quot; is the present participle of &quot;compete&quot;.</li>
          <li>• The correct ending is &quot;-ing&quot;, not &quot;-iting&quot;.</li>
          <li>• The pronunciation is /kəmˈpiːtɪŋ/ (kuhm-PEE-ting).</li>
          <li>• Commonly used in sports, business, and academic contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;competiting&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competiting&quot; is never correct. The only correct form is &quot;competing&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;compete&quot; becomes &quot;competing&quot; by dropping the &quot;e&quot; and adding &quot;ing&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the base form of &quot;competing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The base form is &quot;compete&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;competing&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;competing&quot; can describe things that are in competition, e.g., &quot;competing brands&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;competing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;competing interests&quot;, &quot;competing teams&quot;, &quot;competing priorities&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Competing</strong> is the correct spelling, while <strong>competiting</strong> is always incorrect. Use &quot;competing&quot; when describing participation in a contest, rivalry, or competition.
        </p>
      </div>
    </div>
  )
} 