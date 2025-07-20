import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compete or Compet - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compete&quot; and &quot;compet&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompeteVsCompetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compete or Compet</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;compete&quot; and &quot;compet&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compet</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compet&quot; is a misspelling of &quot;compete&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compete</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compete&quot; is the correct spelling, meaning to strive to win or gain something.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Compete&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Compete&quot;</strong> (verb): To strive to win or gain something by defeating or establishing superiority over others.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes the act of participating in a contest, rivalry, or competition. 
            It is commonly used in sports, business, academics, and various other competitive contexts.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Compete&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Contend</li>
                <li>• Vie</li>
                <li>• Rival</li>
                <li>• Challenge</li>
                <li>• Struggle</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Battle</li>
                <li>• Fight</li>
                <li>• Contest</li>
                <li>• Oppose</li>
                <li>• Match</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;Athletes from around the world will <span className="text-green-600 font-semibold">&quot;compete&quot;</span> in the Olympics.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;Athletes from around the world will <span className="text-red-600 font-semibold">compet</span> in the Olympics.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Our company must <span className="text-green-600 font-semibold">&quot;compete&quot;</span> with larger corporations.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Students <span className="text-green-600 font-semibold">&quot;compete&quot;</span> for scholarships every year.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compete&quot; is spelled with &quot;ete&quot; at the end, not &quot;et&quot;</li>
          <li>• The word comes from Latin &quot;competere&quot; meaning &quot;to strive together&quot;</li>
          <li>• Commonly used in sports, business, and academic contexts</li>
          <li>• Related forms include: competition, competitive, competitor</li>
          <li>• The pronunciation is /kəmˈpiːt/ (kuhm-PEET)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compet&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compet&quot; is never correct. It is always a misspelling of &quot;compete&quot;. 
              There is no valid English word spelled as &quot;compet&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;compete&quot; as having &quot;ete&quot; at the end, like &quot;complete&quot;, &quot;delete&quot;, or &quot;concrete&quot;. 
              Remember: compete ends with &quot;ete&quot;, not &quot;et&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between compete and compete with?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compete&quot; can be used alone or with &quot;with&quot;. &quot;Compete with&quot; specifically indicates who you&apos;re competing against. 
              For example: &quot;They compete&quot; vs &quot;They compete with each other.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can compete be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compete&quot; is only a verb. The noun form is &quot;competition&quot;. 
              For example: &quot;The competition was fierce&quot; (not &quot;The compete was fierce&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with compete?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;compete against&quot;, &quot;compete for&quot;, &quot;compete in&quot;, 
              &quot;compete with&quot;, and &quot;compete on equal terms&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adjective form of compete?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adjective form is &quot;competitive&quot;. 
              For example: &quot;The market is very competitive&quot; or &quot;She has a competitive spirit.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the past tense of compete?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The past tense is &quot;competed&quot;. 
              Example: &quot;They competed in the championship&quot; or &quot;She competed against the best athletes.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;compet&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that end in &quot;et&quot; like &quot;pet&quot;, 
              &quot;set&quot;, or &quot;get&quot;. However, &quot;compete&quot; follows a different pattern with &quot;ete&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does competitive advantage mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Competitive advantage&quot; refers to a condition or circumstance that puts a company in a favorable or superior business position. 
              It&apos;s what allows a business to outperform its competitors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there other words with similar spelling patterns?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, other words ending in &quot;ete&quot; include: complete, delete, concrete, discrete, and secrete. 
              All of these follow the same pattern as &quot;compete&quot;.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compete</strong> is the correct spelling, while <strong>compet</strong> is always incorrect. 
          &quot;Compete&quot; is spelled with &quot;ete&quot; at the end, not &quot;et&quot;, and means to strive to win or gain something. 
          Use it when describing participation in contests, rivalries, or competitions. 
          This spelling mistake is common but easily avoidable by remembering that it ends with &quot;ete&quot; like similar words such as &quot;complete&quot; and &quot;delete&quot;.
        </p>
      </div>
    </div>
  )
} 