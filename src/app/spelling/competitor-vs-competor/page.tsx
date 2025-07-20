import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Competitor or Competor - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;competitor&quot; and &quot;competor&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompetitorVsCompetorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Competitor or Competor</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;competitor&quot; or &quot;competor&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Competor</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Competor&quot; is a common misspelling of &quot;competitor&quot;. Always use &quot;competitor&quot; when referring to a person or entity that competes.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Competitor</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Competitor&quot; is a noun meaning a person, team, or company that competes against others.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Competitor&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Competitor&quot;</strong> (noun): A person, team, or company that takes part in a competition or contest.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used to describe anyone or anything that is actively involved in a contest, rivalry, or competition.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Competitor&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Rival</li>
                <li>• Opponent</li>
                <li>• Challenger</li>
                <li>• Contender</li>
                <li>• Adversary</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Contestant</li>
                <li>• Player</li>
                <li>• Participant</li>
                <li>• Antagonist</li>
                <li>• Combatant</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The <span className="text-green-600 font-semibold">competitor</span> finished the race in record time.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The <span className="text-red-600 font-semibold">competor</span> finished the race in record time.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Our company&apos;s main competitor launched a new product.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Competitor&quot; is spelled with &quot;itor&quot; at the end, not &quot;or&quot;.</li>
          <li>• The pronunciation is /kəmˈpɛtɪtər/ (kuhm-PET-ih-ter).</li>
          <li>• Commonly used in sports, business, and academic contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;competor&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competor&quot; is never correct. The only correct form is &quot;competitor&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;competitor&quot; ends with &quot;itor&quot;, not &quot;or&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;competitor&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural is &quot;competitors&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;competitor&quot; refer to companies?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;competitor&quot; can refer to people, teams, or companies that compete against others.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;competitor&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;main competitor&quot;, &quot;direct competitor&quot;, &quot;key competitor&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Competitor</strong> is the correct spelling, while <strong>competor</strong> is always incorrect. Use &quot;competitor&quot; when referring to a person, team, or company that competes in a contest or rivalry.
        </p>
      </div>
    </div>
  )
} 