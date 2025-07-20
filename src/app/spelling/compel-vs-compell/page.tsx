import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compel or Compell - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compel&quot; and &quot;compell&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompelVsCompellPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compel or Compell</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;compel&quot; and &quot;compell&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compell</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compell&quot; is a misspelling of &quot;compel&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compel</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compel&quot; is the correct spelling, meaning to force or drive someone to do something.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Compel</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Compel</strong> (verb): To force or drive someone to do something; to bring about by force or pressure.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes the act of forcing someone to do something, often through pressure, authority, or strong influence. 
            It can also mean to bring about a particular result or reaction.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Compel</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Force</li>
                <li>• Drive</li>
                <li>• Coerce</li>
                <li>• Pressure</li>
                <li>• Oblige</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Require</li>
                <li>• Constrain</li>
                <li>• Impel</li>
                <li>• Urge</li>
                <li>• Persuade</li>
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
              <strong>Correct:</strong> &quot;The evidence will <span className="text-green-600 font-semibold">compel</span> the jury to convict.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Incorrect:</strong> &quot;The evidence will <span className="text-red-600 font-semibold">compell</span> the jury to convict.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;His passion for justice <span className="text-green-600 font-semibold">compels</span> him to speak out.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;The law <span className="text-green-600 font-semibold">compels</span> us to report suspicious activity.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compel&quot; is spelled with one &quot;l&quot; at the end, not two</li>
          <li>• The word comes from Latin &quot;compellere&quot; meaning &quot;to drive together&quot;</li>
          <li>• Commonly used in legal, formal, and literary contexts</li>
          <li>• Related forms include: compelling, compelled, compulsion</li>
          <li>• The pronunciation is /kəmˈpel/ (kuhm-PEL)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compell&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compell&quot; is never correct. It is always a misspelling of &quot;compel&quot;. 
              There is no valid English word spelled as &quot;compell&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;compel&quot; as having one &quot;l&quot; at the end, like &quot;excel&quot;, &quot;rebel&quot;, or &quot;propel&quot;. 
              Remember: compel has one &quot;l&quot;, not two.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between compel and force?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compel&quot; often implies moral or psychological pressure, while &quot;force&quot; suggests physical coercion. 
              Compel is more formal and can involve internal motivation, while force is more direct and external.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can compel be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compel&quot; is only a verb. The noun form is &quot;compulsion&quot;. 
              For example: &quot;He felt a compulsion to speak the truth&quot; (not &quot;He felt a compel to speak the truth&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with compel?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;compel attention&quot;, &quot;compel respect&quot;, &quot;compel obedience&quot;, 
              &quot;compel agreement&quot;, and &quot;compel action&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adjective form of compel?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adjective form is &quot;compelling&quot;. 
              For example: &quot;The evidence was compelling&quot; or &quot;She gave a compelling argument.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the past tense of compel?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The past tense is &quot;compelled&quot;. 
              Example: &quot;The circumstances compelled him to act quickly&quot; or &quot;She was compelled to testify.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;compell&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that have double &quot;l&quot; like &quot;spell&quot;, 
              &quot;tell&quot;, or &quot;well&quot;. However, &quot;compel&quot; follows a different pattern with single &quot;l&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does compelling mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compelling&quot; means convincing, persuasive, or difficult to resist. 
              For example: &quot;The movie had a compelling plot&quot; or &quot;She made a compelling case for the proposal.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there other words with similar spelling patterns?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, other words with single &quot;l&quot; at the end include: excel, rebel, propel, expel, repel, and dispel. 
              All of these follow the same pattern as &quot;compel&quot;.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compel</strong> is the correct spelling, while <strong>compell</strong> is always incorrect. 
          &quot;Compel&quot; is spelled with one &quot;l&quot; at the end, not two, and means to force or drive someone to do something. 
          Use it when describing the act of forcing action through pressure or authority. 
          This spelling mistake is common but easily avoidable by remembering that it has one &quot;l&quot; like similar words such as &quot;excel&quot; and &quot;rebel&quot;.
        </p>
      </div>
    </div>
  )
} 