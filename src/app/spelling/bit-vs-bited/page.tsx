import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bit vs Bited - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bit&quot; and &quot;bited&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bit, bited, spelling, correct spelling, word comparison, English spelling, verb, past tense',
  openGraph: {
    title: 'Bit vs Bited - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bit&quot; and &quot;bited&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BitVsBitedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bit vs Bited</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of the past tense form of the verb &quot;bite.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Bited
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Bited&quot; is a misspelling of the word &quot;bit.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The dog bited the mailman</li>
              <li>• She bited into the apple</li>
              <li>• The snake bited the mouse</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bit
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bit&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The dog bit the mailman</li>
              <li>• She bit into the apple</li>
              <li>• The snake bit the mouse</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bit</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bit</strong> (verb): Past tense and past participle of &quot;bite&quot; - to use the teeth to cut into or grip something.
          </p>
          <p>
            <strong>Bit</strong> (noun): A small piece or amount of something; a unit of digital information; a metal mouthpiece for a horse&apos;s bridle.
          </p>
          <p>
            Used to describe the action of using teeth to cut, grip, or pierce something, or to refer to small pieces or amounts of things.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bit</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Piece</li>
              <li>• Fragment</li>
              <li>• Portion</li>
              <li>• Morsel</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Chunk</li>
              <li>• Slice</li>
              <li>• Part</li>
              <li>• Amount</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bit&quot; is the correct past tense form of &quot;bite&quot;</li>
          <li>• The word &quot;bite&quot; is an irregular verb: bite → bit → bitten</li>
          <li>• The pronunciation is /bɪt/ (BIT)</li>
          <li>• &quot;Bited&quot; is a common misspelling but is never correct</li>
          <li>• Irregular verbs don&apos;t follow the regular &quot;-ed&quot; pattern</li>
          <li>• Other irregular verbs include: write → wrote, drive → drove, etc.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;bited&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people apply the regular verb rule of adding &quot;-ed&quot; to form the past tense. However, &quot;bite&quot; is an irregular verb that doesn&apos;t follow this pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;bited&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bited&quot; is always incorrect. Always use &quot;bit&quot; as the past tense of &quot;bite.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bit&quot; and &quot;bitten&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bit&quot; is the simple past tense, while &quot;bitten&quot; is the past participle used with helping verbs like &quot;have&quot; or &quot;had.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;bite&quot; is an irregular verb: bite → bit → bitten. The past tense is always &quot;bit,&quot; never &quot;bited.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bit</strong> is the correct spelling of the past tense of &quot;bite.&quot; The incorrect spelling &quot;bited&quot; should never be used.
          </p>
          <p>
            Remember: Bite is an irregular verb with the pattern bite → bit → bitten. The past tense is always &quot;bit,&quot; not &quot;bited,&quot; because irregular verbs don&apos;t follow the regular &quot;-ed&quot; pattern.
          </p>
        </div>
      </div>
    </div>
  )
} 