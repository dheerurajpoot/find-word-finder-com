import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Competent or Competant - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;competent&quot; and &quot;competant&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompetentVsCompetantPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Competent or Competant</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;competent&quot; and &quot;competant&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Competant</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Competant&quot; is a misspelling of &quot;competent&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Competent</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Competent&quot; is the correct spelling, meaning having the necessary ability, knowledge, or skill to do something successfully.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Competent&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Competent&quot;</strong> (adjective): Having the necessary ability, knowledge, or skill to do something successfully; adequate but not outstanding.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes someone who has sufficient skill, knowledge, or ability to perform a task or function effectively. 
            It is commonly used in professional, legal, and academic contexts to describe someone&apos;s qualifications or capabilities.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Competent&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Capable</li>
                <li>• Skilled</li>
                <li>• Qualified</li>
                <li>• Proficient</li>
                <li>• Adept</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Efficient</li>
                <li>• Experienced</li>
                <li>• Knowledgeable</li>
                <li>• Accomplished</li>
                <li>• Adequate</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She is a <span className="text-green-600 font-semibold">&quot;competent&quot;</span> manager who handles difficult situations well.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She is a <span className="text-red-600 font-semibold">competant</span> manager who handles difficult situations well.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The lawyer provided <span className="text-green-600 font-semibold">&quot;competent&quot;</span> legal representation.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He is <span className="text-green-600 font-semibold">&quot;competent&quot;</span> in multiple programming languages.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Competent&quot; is spelled with &quot;ent&quot; at the end, not &quot;ant&quot;</li>
          <li>• The word comes from Latin &quot;competens&quot; meaning &quot;meeting together, agreeing&quot;</li>
          <li>• Commonly used in professional, legal, and academic contexts</li>
          <li>• Related forms include: competence, competency, competently</li>
          <li>• The pronunciation is /ˈkɒmpɪtənt/ (KOM-pi-tuhnt)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;competant&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competant&quot; is never correct. It is always a misspelling of &quot;competent&quot;. 
              There is no valid English word spelled as &quot;competant&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;competent&quot; as having &quot;ent&quot; at the end, like &quot;excellent&quot;, &quot;intelligent&quot;, or &quot;confident&quot;. 
              Remember: competent ends with &quot;ent&quot;, not &quot;ant&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between competent and capable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Both words mean having ability, but &quot;competent&quot; often implies having the necessary qualifications or training, 
              while &quot;capable&quot; suggests having the natural ability or potential to do something.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can competent be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;competent&quot; is only an adjective. The noun form is &quot;competence&quot; or &quot;competency&quot;. 
              For example: &quot;Her competence is impressive&quot; (not &quot;Her competent is impressive&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with competent?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;competent authority&quot;, &quot;competent jurisdiction&quot;, &quot;competent person&quot;, 
              &quot;competent performance&quot;, and &quot;competent witness&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adverb form of competent?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adverb form is &quot;competently&quot;. 
              For example: &quot;She performed the task competently&quot; or &quot;He handled the situation competently.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does competent authority mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Competent authority&quot; refers to a person or organization that has the legal power or jurisdiction to make decisions 
              or take action in a particular area. It&apos;s commonly used in legal and regulatory contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;competant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that end in &quot;ant&quot; like &quot;important&quot;, 
              &quot;distant&quot;, or &quot;assistant&quot;. However, &quot;competent&quot; follows a different pattern with &quot;ent&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does competent jurisdiction mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Competent jurisdiction&quot; refers to a court or legal body that has the authority to hear and decide a particular case. 
              It&apos;s a legal term indicating proper authority over a matter.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there other words with similar spelling patterns?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, other words ending in &quot;ent&quot; include: excellent, intelligent, confident, evident, and present. 
              All of these follow the same pattern as &quot;competent&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the opposite of competent?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The opposite of &quot;competent&quot; would be &quot;incompetent&quot;, meaning lacking the necessary ability, knowledge, or skill. 
              Other antonyms include: unqualified, incapable, inept, and inadequate.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Competent</strong> is the correct spelling, while <strong>competant</strong> is always incorrect. 
          &quot;Competent&quot; is spelled with &quot;ent&quot; at the end, not &quot;ant&quot;, and means having the necessary ability, knowledge, or skill to do something successfully. 
          Use it when describing someone&apos;s qualifications, capabilities, or performance. 
          This spelling mistake is common but easily avoidable by remembering that it ends with &quot;ent&quot; like similar words such as &quot;excellent&quot; and &quot;intelligent&quot;.
        </p>
      </div>
    </div>
  )
} 