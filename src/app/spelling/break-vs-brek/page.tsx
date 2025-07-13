import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Break vs Brek - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;break&quot; and &quot;brek&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'break, brek, spelling, correct spelling, word comparison, English spelling, verb, noun',
  openGraph: {
    title: 'Break vs Brek - Which is Correct?',
    description: 'Learn the correct spelling between &quot;break&quot; and &quot;brek&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BreakVsBrekPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Break or Brek</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot; Break&quot; and &quot; Brek&quot;. This is a verb meaning to separate into pieces or interrupt.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brek
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brek&quot; is a misspelling of the word &quot;break.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• Don&apos;t brek the glass</li>
              <li>• Let&apos;s take a brek</li>
              <li>• The news will brek soon</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Break
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Break&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• Don&apos;t break the glass</li>
              <li>• Let&apos;s take a break</li>
              <li>• The news will break soon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Break</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Break</strong> (verb): To separate into pieces as a result of a blow, shock, or strain.
          </p>
          <p>
            <strong>Break</strong> (verb): To interrupt or stop something temporarily.
          </p>
          <p>
            <strong>Break</strong> (verb): To fail to keep a promise, law, or agreement.
          </p>
          <p>
            <strong>Break</strong> (noun): A pause or interruption in activity.
          </p>
          <p>
            <strong>Break</strong> (noun): A gap or opening in something.
          </p>
          <p>
            Used to describe separating into pieces, interrupting, or taking a pause from activity.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Break</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Shatter</li>
              <li>• Crack</li>
              <li>• Split</li>
              <li>• Interrupt</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Pause</li>
              <li>• Rest</li>
              <li>• Violate</li>
              <li>• Damage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Break&quot; is always spelled with &quot;ea&quot; in the middle, not &quot;e&quot;</li>
          <li>• The word comes from Old English &quot;brecan&quot;</li>
          <li>• The pronunciation is /breɪk/ (BRAYK) in British English</li>
          <li>• &quot;Brek&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Break&quot; has &quot;ea&quot; like &quot;speak&quot; and &quot;weak&quot;</li>
          <li>• The word can be used as both a verb and a noun</li>
          <li>• The past tense is &quot;broke&quot; and past participle is &quot;broken&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brek&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may forget the &quot;a&quot; in &quot;break&quot; or may be influenced by other words with similar patterns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brek&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brek&quot; is always incorrect. Always use &quot;break&quot; with &quot;ea&quot; in the middle in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;break&quot; and &quot;brake&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Break&quot; means to separate into pieces or interrupt, while &quot;brake&quot; refers to a device for slowing or stopping a vehicle or machine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;break&quot; as having &quot;ea&quot; like &quot;speak&quot; and &quot;weak.&quot; The word follows the pattern of other words ending in &quot;eak.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Break</strong> is the correct spelling of this word. The incorrect spelling &quot;brek&quot; should never be used.
          </p>
          <p>
            Remember: Break has &quot;ea&quot; in the middle, not just &quot;e.&quot; This follows the English spelling pattern and is the only correct form of this verb meaning to separate into pieces or interrupt.
          </p>
        </div>
      </div>
    </div>
  )
} 