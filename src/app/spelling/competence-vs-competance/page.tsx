import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Competence or Competance - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;competence&quot; and &quot;competance&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompetenceVsCompetancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Competence or Competance</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;competence&quot; and &quot;competance&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Competance</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Competance&quot; is a misspelling of &quot;competence&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Competence</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Competence&quot; is the correct spelling, meaning the ability to do something successfully or efficiently.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Competence&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Competence&quot;</strong> (noun): The ability to do something successfully or efficiently; the quality or state of being competent.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes the capability, skill, or knowledge required to perform a task or function effectively. 
            It is commonly used in professional, academic, and legal contexts to describe someone&apos;s qualifications or abilities.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Competence&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Ability</li>
                <li>• Skill</li>
                <li>• Proficiency</li>
                <li>• Capability</li>
                <li>• Expertise</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Qualification</li>
                <li>• Aptitude</li>
                <li>• Mastery</li>
                <li>• Competency</li>
                <li>• Efficiency</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;Her <span className="text-green-600 font-semibold">&quot;competence&quot;</span> in mathematics impressed the hiring committee.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;Her <span className="text-red-600 font-semibold">competance</span> in mathematics impressed the hiring committee.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The doctor demonstrated exceptional <span className="text-green-600 font-semibold">&quot;competence&quot;</span> in emergency procedures.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;Professional <span className="text-green-600 font-semibold">&quot;competence&quot;</span> is essential for career advancement.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Competence&quot; is spelled with &quot;ence&quot; at the end, not &quot;ance&quot;</li>
          <li>• The word comes from Latin &quot;competentia&quot; meaning &quot;meeting together, agreement&quot;</li>
          <li>• Commonly used in professional, legal, and academic contexts</li>
          <li>• Related forms include: competent, competency, competently</li>
          <li>• The pronunciation is /ˈkɒmpɪtəns/ (KOM-pi-tuhns)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;competance&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competance&quot; is never correct. It is always a misspelling of &quot;competence&quot;. 
              There is no valid English word spelled as &quot;competance&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;competence&quot; as having &quot;ence&quot; at the end, like &quot;excellence&quot;, &quot;intelligence&quot;, or &quot;confidence&quot;. 
              Remember: competence ends with &quot;ence&quot;, not &quot;ance&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between competence and competency?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Both words mean essentially the same thing, but &quot;competence&quot; is more commonly used. 
              &quot;Competency&quot; is sometimes preferred in formal or legal contexts, but both are correct.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can competence be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competence&quot; is only a noun. The adjective form is &quot;competent&quot;. 
              For example: &quot;She is competent&quot; (not &quot;She is competence&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with competence?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;professional competence&quot;, &quot;core competence&quot;, &quot;linguistic competence&quot;, 
              &quot;technical competence&quot;, and &quot;cultural competence&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adverb form of competence?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adverb form is &quot;competently&quot;. 
              For example: &quot;She performed the task competently&quot; or &quot;He handled the situation competently.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does core competence mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Core competence&quot; refers to a company&apos;s or individual&apos;s main area of expertise or competitive advantage. 
              It&apos;s what they do best and what sets them apart from others.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;competance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that end in &quot;ance&quot; like &quot;importance&quot;, 
              &quot;distance&quot;, or &quot;assistance&quot;. However, &quot;competence&quot; follows a different pattern with &quot;ence&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does cultural competence mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Cultural competence&quot; refers to the ability to understand, communicate with, and effectively interact with people 
              from different cultures. It&apos;s important in healthcare, education, and business settings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there other words with similar spelling patterns?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, other words ending in &quot;ence&quot; include: excellence, intelligence, confidence, evidence, and presence. 
              All of these follow the same pattern as &quot;competence&quot;.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Competence</strong> is the correct spelling, while <strong>competance</strong> is always incorrect. 
          &quot;Competence&quot; is spelled with &quot;ence&quot; at the end, not &quot;ance&quot;, and means the ability to do something successfully or efficiently. 
          Use it when describing someone&apos;s skills, qualifications, or capabilities. 
          This spelling mistake is common but easily avoidable by remembering that it ends with &quot;ence&quot; like similar words such as &quot;excellence&quot; and &quot;intelligence&quot;.
        </p>
      </div>
    </div>
  )
} 