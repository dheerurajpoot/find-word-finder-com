import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Competition or Competion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;competition&quot; and &quot;competion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompetitionVsCompetionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Competition or Competion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;competition&quot; and &quot;competion&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Competion</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Competion&quot; is a misspelling of &quot;competition&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Competition</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Competition&quot; is the correct spelling, meaning the activity or condition of competing.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Competition&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Competition&quot;</strong> (noun): The activity or condition of competing; a contest between rivals; rivalry for supremacy, a prize, etc.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes the act or process of competing, whether in sports, business, academics, or other areas. 
            It refers to the rivalry between individuals, teams, or organizations striving for the same goal or prize.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Competition&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Contest</li>
                <li>• Rivalry</li>
                <li>• Tournament</li>
                <li>• Championship</li>
                <li>• Match</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Race</li>
                <li>• Battle</li>
                <li>• Struggle</li>
                <li>• Conflict</li>
                <li>• Opposition</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The <span className="text-green-600 font-semibold">&quot;competition&quot;</span> was fierce between the top teams.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The <span className="text-red-600 font-semibold">competion</span> was fierce between the top teams.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Business <span className="text-green-600 font-semibold">&quot;competition&quot;</span> drives innovation.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She won the spelling <span className="text-green-600 font-semibold">&quot;competition&quot;</span> last year.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Competition&quot; is spelled with &quot;ition&quot; at the end, not &quot;ion&quot;</li>
          <li>• The word comes from Latin &quot;competitio&quot; meaning &quot;agreement, rivalry&quot;</li>
          <li>• Commonly used in sports, business, and academic contexts</li>
          <li>• Related forms include: compete, competitive, competitor</li>
          <li>• The pronunciation is /ˌkɒmpəˈtɪʃən/ (kom-puh-TISH-uhn)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;competion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competion&quot; is never correct. It is always a misspelling of &quot;competition&quot;. 
              There is no valid English word spelled as &quot;competion&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;competition&quot; as having &quot;ition&quot; at the end, like &quot;position&quot;, &quot;condition&quot;, or &quot;definition&quot;. 
              Remember: competition ends with &quot;ition&quot;, not &quot;ion&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between competition and contest?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Both words refer to competitive activities, but &quot;competition&quot; is broader and can refer to ongoing rivalry, 
              while &quot;contest&quot; typically refers to a specific event or match. For example: &quot;business competition&quot; vs &quot;spelling contest&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can competition be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competition&quot; is only a noun. The verb form is &quot;compete&quot;. 
              For example: &quot;They compete&quot; (not &quot;They competition&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with competition?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;fierce competition&quot;, &quot;fair competition&quot;, &quot;unfair competition&quot;, 
              &quot;healthy competition&quot;, and &quot;intense competition&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adjective form of competition?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adjective form is &quot;competitive&quot;. 
              For example: &quot;competitive market&quot; or &quot;competitive spirit.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does unfair competition mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Unfair competition&quot; refers to business practices that are deceptive, fraudulent, or otherwise unethical 
              and give one business an unfair advantage over others. It&apos;s a legal concept in business law.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;competion&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that end in &quot;ion&quot; like &quot;action&quot;, 
              &quot;nation&quot;, or &quot;station&quot;. However, &quot;competition&quot; follows a different pattern with &quot;ition&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does healthy competition mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Healthy competition&quot; refers to competition that is fair, constructive, and beneficial to all participants. 
              It encourages improvement, innovation, and growth without being destructive or harmful.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there other words with similar spelling patterns?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, other words ending in &quot;ition&quot; include: position, condition, definition, tradition, and addition. 
              All of these follow the same pattern as &quot;competition&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the plural form of competition?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural form is &quot;competitions&quot;. 
              Example: &quot;There were many competitions at the event&quot; or &quot;The competitions were well-organized.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does perfect competition mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Perfect competition&quot; is an economic concept describing a market structure where many buyers and sellers 
              have perfect information and no single participant can influence prices. It&apos;s a theoretical model in economics.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Competition</strong> is the correct spelling, while <strong>competion</strong> is always incorrect. 
          &quot;Competition&quot; is spelled with &quot;ition&quot; at the end, not &quot;ion&quot;, and means the activity or condition of competing. 
          Use it when describing contests, rivalries, or competitive activities in sports, business, academics, or other areas. 
          This spelling mistake is common but easily avoidable by remembering that it ends with &quot;ition&quot; like similar words such as &quot;position&quot; and &quot;condition&quot;.
        </p>
      </div>
    </div>
  )
} 