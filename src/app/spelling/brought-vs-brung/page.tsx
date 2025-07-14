import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brought or Brung - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brung&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brought, brung, spelling, correct spelling, word comparison, English spelling, past tense, bring',
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
          Understanding the correct spelling of &quot;Brought&quot; and &quot;Brung&quot;. This is the past tense and past participle of the word &quot;bring.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brung
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brung&quot; is a non-standard or dialectal form of &quot;brought.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I brung the book with me</li>
              <li>• She has brung her lunch</li>
              <li>• They brung the supplies</li>
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
              <li>• I brought the book with me</li>
              <li>• She has brought her lunch</li>
              <li>• They brought the supplies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brought</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brought</strong> (verb): Past tense and past participle of &quot;bring&quot; - to carry, convey, or cause to come with one.
          </p>
          <p>
            <strong>Brought</strong> (verb): To cause to be in a particular state or condition.
          </p>
          <p>
            Used to indicate that someone or something was carried or conveyed from one place to another, or that a particular state or condition was caused.
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
              <li>• Transported</li>
              <li>• Delivered</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Fetched</li>
              <li>• Retrieved</li>
              <li>• Caused</li>
              <li>• Produced</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brought&quot; is the standard past tense and past participle of &quot;bring&quot;</li>
          <li>• The word follows the irregular verb pattern: bring → brought → brought</li>
          <li>• The pronunciation is /brɔːt/ (BRAWGT)</li>
          <li>• &quot;Brung&quot; is considered non-standard or dialectal English</li>
          <li>• &quot;Brung&quot; may be used in some regional dialects but is not acceptable in formal writing</li>
          <li>• The word can be used as both past tense and past participle</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people use &quot;brung&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brung&quot; is a non-standard form that exists in some regional dialects and informal speech. It follows a pattern similar to other irregular verbs like &quot;sung&quot; and &quot;rung.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brung&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brung&quot; is not acceptable in formal or standard English. It should only be used in very informal contexts or when writing dialogue that reflects specific dialects.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brought&quot; and &quot;bring&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bring&quot; is the present tense (I bring), while &quot;brought&quot; is the past tense (I brought) and past participle (I have brought).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bring&quot; + &quot;ought&quot;. The word &quot;brought&quot; follows the same pattern as other irregular verbs like &quot;thought&quot; (from think) and &quot;fought&quot; (from fight).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brought</strong> is the correct spelling of this word. The non-standard spelling &quot;brung&quot; should be avoided in formal writing.
          </p>
          <p>
            Remember: Brought = Bring + ought. This follows the irregular verb pattern and is the standard past tense and past participle of &quot;bring.&quot;
          </p>
        </div>
      </div>
    </div>
  )
} 