import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Advised or Adviced - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;advised&quot; and &quot;adviced&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdvisedVsAdvicedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Advised or Adviced
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Advised&quot; or &quot;Adviced&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adviced</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adviced&quot; is a misspelling. The correct spelling is &quot;advised&quot; with &apos;d&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advised</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advised&quot; is the correct spelling. It means to give advice or counsel to someone.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Advised</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Advised</strong> (verb, past tense and past participle of &quot;advise&quot;): To give counsel or guidance to someone; to recommend a course of action; to offer suggestions or recommendations; to inform or notify someone about something.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The doctor <strong>advised</strong> the patient to rest for a week.</li>
              <li>• I <strong>advised</strong> him to reconsider his decision.</li>
              <li>• The lawyer <strong>advised</strong> against signing the contract.</li>
              <li>• She was <strong>advised</strong> to seek professional help.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Advised</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Counseled</li>
                <li>• Guided</li>
                <li>• Recommended</li>
                <li>• Suggested</li>
                <li>• Urged</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Informed</li>
                <li>• Notified</li>
                <li>• Warned</li>
                <li>• Directed</li>
                <li>• Instructed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Advised</strong> is spelled with &apos;d&apos; at the end, not &apos;c&apos;.</li>
            <li>• It&apos;s the past tense and past participle of the verb &quot;advise.&quot;</li>
            <li>• Commonly used in formal and professional contexts.</li>
            <li>• Often followed by &quot;to&quot; + infinitive or &quot;that&quot; + clause.</li>
            <li>• The word comes from the Latin &quot;advisare&quot; meaning &quot;to consider.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adviced&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adviced&quot; is never correct. The proper spelling is always &quot;advised&quot; with &apos;d&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;advised&quot; as coming from &quot;advise&quot; - the verb ends in &apos;se&apos;, so the past tense ends in &apos;sed&apos;. The word comes from Latin &quot;advisare&quot; meaning &quot;to consider.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between advised and advice?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Advised&quot; is the past tense of the verb &quot;advise&quot; (to give counsel), while &quot;advice&quot; is a noun meaning the guidance or recommendations given.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can advised be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advised&quot; is only used as a verb (past tense/participle). The noun form is &quot;advice.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is advised always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Not necessarily. &quot;Advised&quot; can be used for both positive recommendations and warnings or cautions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adviced&quot; likely occurs because people may confuse it with the noun &quot;advice&quot; or may not be familiar with the correct verb form.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;advised&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: strongly advised, well advised, ill advised, advised against, advised to, and advised that.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advised&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;advised&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Advised</strong> is the correct spelling with &apos;d&apos; at the end. It means to give counsel or guidance to someone. The misspelling &quot;adviced&quot; with &apos;c&apos; is never correct. Use this word when referring to the past tense of giving advice or recommendations.
        </p>
      </div>
    </div>
  )
} 