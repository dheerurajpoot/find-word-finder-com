import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brought or Brung - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brung&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brought, brung, spelling, correct spelling, word comparison, English spelling, past tense, irregular verb',
  openGraph: {
    title: 'Brought or Brung - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brung&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BroughtVsBrungPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brought or Brung</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Brought&quot; and &quot;Brung&quot;. This is the past tense and past participle form of the verb &quot;bring.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brung
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brung&quot; is a misspelling of the word &quot;brought.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I brung the book to class</li>
              <li>• She brung her friend to the party</li>
              <li>• They brung the food yesterday</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brought
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brought&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I brought the book to class</li>
              <li>• She brought her friend to the party</li>
              <li>• They brought the food yesterday</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brought</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brought</strong> (verb): Past tense and past participle of &quot;bring&quot; - to carry, convey, or take something or someone to a place.
          </p>
          <p>
            <strong>Brought</strong> (verb): To cause something to happen or exist; to produce or result in.
          </p>
          <p>
            <strong>Brought</strong> (verb): To cause someone to come to a particular state or condition.
          </p>
          <p>
            Used to indicate that someone or something was carried, conveyed, or taken to a place in the past.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brought</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Carried</li>
              <li>• Conveyed</li>
              <li>• Delivered</li>
              <li>• Transported</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Fetched</li>
              <li>• Retrieved</li>
              <li>• Escorted</li>
              <li>• Accompanied</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brought&quot; is the irregular past tense and past participle of &quot;bring&quot;</li>
          <li>• The word comes from Old English &quot;brōhte&quot; (past tense of &quot;bringan&quot;)</li>
          <li>• The pronunciation is /brɔːt/ (brawt)</li>
          <li>• &quot;Brung&quot; is a common misspelling but is never correct</li>
          <li>• &quot;Bring&quot; is an irregular verb: bring → brought → brought</li>
          <li>• This follows the same pattern as other irregular verbs like &quot;think&quot; → &quot;thought&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brung&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people try to apply the regular verb pattern (like &quot;sung&quot; from &quot;sing&quot;) to &quot;bring,&quot; but &quot;bring&quot; is an irregular verb that doesn&apos;t follow this rule.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brung&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brung&quot; is always incorrect. Always use &quot;brought&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brought&quot; and &quot;bring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bring&quot; is the base form (present tense), while &quot;brought&quot; is the past tense and past participle form of the same verb.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;bring&quot; is an irregular verb like &quot;think&quot; → &quot;thought.&quot; The past tense is &quot;brought,&quot; not &quot;brung.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brought</strong> is the correct spelling of this word. The incorrect spelling &quot;brung&quot; should never be used.
          </p>
          <p>
            Remember: Bring is an irregular verb (bring → brought → brought). The past tense is &quot;brought,&quot; not &quot;brung,&quot; just like &quot;think&quot; → &quot;thought.&quot;
          </p>
        </div>
      </div>
    </div>
  )
} 