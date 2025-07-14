import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Broken or Broked - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;broken&quot; and &quot;broked&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BrokenVsBrokedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Broken or Broked
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Broken&quot; or &quot;Broked&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Broked</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Broked&quot; is a misspelling. The correct form is &quot;broken.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Broken</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Broken&quot; is the correct spelling. It&apos;s the past participle of &quot;break.&quot;
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Broken</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Broken</strong> (adjective/verb): Damaged or separated into pieces; not functioning properly; interrupted or disrupted; past participle of &quot;break.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The vase was <strong>broken</strong> into many pieces.</li>
              <li>• My phone screen is <strong>broken</strong> and needs repair.</li>
              <li>• The silence was <strong>broken</strong> by a loud noise.</li>
              <li>• She has a <strong>broken</strong> heart after the breakup.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Broken</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Damaged</li>
                <li>• Shattered</li>
                <li>• Fractured</li>
                <li>• Cracked</li>
                <li>• Ruined</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Malfunctioning</li>
                <li>• Defective</li>
                <li>• Faulty</li>
                <li>• Disrupted</li>
                <li>• Interrupted</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Broken</strong> is the past participle of the irregular verb &quot;break.&quot;</li>
            <li>• It&apos;s spelled with &apos;en&apos; at the end, not &apos;ed&apos;.</li>
            <li>• Can be used as both an adjective and a verb form.</li>
            <li>• The pronunciation is &quot;BROH-kuhn&quot; (rhyming with &quot;spoken&quot;).</li>
            <li>• It&apos;s one of the most commonly used irregular verbs in English.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;broked&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;broked&quot; is never correct. The proper spelling is always &quot;broken&quot; with &apos;en&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;broken&quot; as having the same &apos;en&apos; ending as other past participles like &quot;spoken,&quot; &quot;taken,&quot; and &quot;written.&quot; These irregular verbs all follow the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;broke&quot; and &quot;broken&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Broke&quot; is the simple past tense of &quot;break,&quot; while &quot;broken&quot; is the past participle. &quot;Broke&quot; is used for completed actions, while &quot;broken&quot; is often used as an adjective or with helping verbs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why is &quot;broken&quot; spelled with &apos;en&apos; instead of &apos;ed&apos;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Break&quot; is an irregular verb, meaning it doesn&apos;t follow the standard pattern of adding &quot;-ed&quot; to form the past participle. This spelling comes from Old English and has been preserved through centuries of language evolution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;broken&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Broken&quot; is appropriate in all types of writing, including formal contexts. It&apos;s the standard past participle form of &quot;break&quot; and is used in academic, business, and professional writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;broken&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: broken heart, broken promise, broken record, broken silence, broken spirit, broken trust, and broken dreams. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;broked&quot; because they might be thinking of regular verbs that add &quot;-ed&quot; for the past participle. However, &quot;break&quot; is irregular and uses &quot;-en&quot; instead.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;broken&quot; related to &quot;break&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Broken&quot; is the past participle of &quot;break.&quot; They are the same verb in different forms: break (present), broke (past), broken (past participle).
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Broken</strong> is the correct spelling with &apos;en&apos; at the end. It&apos;s the past participle of &quot;break&quot; and can be used as both an adjective and a verb form. The misspelling &quot;broked&quot; is never correct. This irregular verb follows the same pattern as other &apos;en&apos; words like &quot;spoken&quot; and &quot;taken.&quot;
        </p>
      </div>
    </div>
  )
} 