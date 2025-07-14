import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Brought or Broght - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brought&quot; and &quot;broght&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BroughtVsBroghtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Brought or Broght
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Brought&quot; or &quot;Broght&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Broght</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Broght&quot; is a misspelling. The correct spelling includes the letter &apos;u&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Brought</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Brought&quot; is the correct spelling. It&apos;s the past tense and past participle of &quot;bring.&quot;
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Brought</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Brought</strong> (verb): The past tense and past participle of &quot;bring&quot;; to have carried or conveyed something to a place; to have caused something to happen or exist.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She <strong>brought</strong> her laptop to the meeting.</li>
              <li>• The storm <strong>brought</strong> heavy rain and strong winds.</li>
              <li>• He <strong>brought</strong> good news from the doctor.</li>
              <li>• The new policy <strong>brought</strong> positive changes to the company.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Brought</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Carried</li>
                <li>• Conveyed</li>
                <li>• Delivered</li>
                <li>• Transported</li>
                <li>• Fetched</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Caused</li>
                <li>• Produced</li>
                <li>• Generated</li>
                <li>• Resulted in</li>
                <li>• Led to</li>
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
            <li>• <strong>Brought</strong> is the irregular past tense of &quot;bring.&quot;</li>
            <li>• It&apos;s spelled with &apos;u&apos; and &apos;gh&apos; in the middle.</li>
            <li>• The pronunciation is &quot;brawt&quot; (rhyming with &quot;caught&quot;).</li>
            <li>• It&apos;s one of the most commonly used irregular verbs in English.</li>
            <li>• The word comes from Old English &quot;brohte&quot; and Middle English &quot;broughte.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;broght&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;broght&quot; is never correct. The proper spelling is always &quot;brought&quot; with a &apos;u&apos; and &apos;gh&apos; in the middle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;brought&quot; as having the same &apos;ough&apos; pattern as other words like &quot;thought,&quot; &quot;fought,&quot; and &quot;caught.&quot; These words all follow the same irregular pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;brought&quot; and &quot;bought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brought&quot; is the past tense of &quot;bring&quot; (to carry or convey), while &quot;bought&quot; is the past tense of &quot;buy&quot; (to purchase). They sound similar but have different meanings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why is &quot;brought&quot; spelled so differently from &quot;bring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brought&quot; is an irregular verb, meaning it doesn&apos;t follow the standard pattern of adding &quot;-ed&quot; to form the past tense. This spelling comes from Old English and has been preserved through centuries of language evolution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;brought&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Brought&quot; is appropriate in all types of writing, including formal contexts. It&apos;s the standard past tense form of &quot;bring&quot; and is used in academic, business, and professional writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;brought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: brought about, brought up, brought down, brought in, brought out, brought to light, brought to mind, and brought to an end. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;broght&quot; because they might be thinking of the pronunciation or confusing it with other words. The silent &apos;gh&apos; and irregular spelling can be tricky to remember.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brought&quot; related to &quot;bring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Brought&quot; is the past tense and past participle of &quot;bring.&quot; They are the same verb in different tenses: bring (present), brought (past), brought (past participle).
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Brought</strong> is the correct spelling with a &apos;u&apos; and &apos;gh&apos; in the middle. It&apos;s the past tense and past participle of &quot;bring.&quot; The misspelling &quot;broght&quot; is never correct. This irregular verb is one of the most commonly used words in English and follows the same pattern as other &apos;ough&apos; words like &quot;thought&quot; and &quot;caught.&quot;
        </p>
      </div>
    </div>
  )
} 