import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitten vs Biten - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bitten&quot; and &quot;biten&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bitten, biten, spelling, correct spelling, word comparison, English spelling, verb, past participle',
  openGraph: {
    title: 'Bitten vs Biten - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bitten&quot; and &quot;biten&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BittenVsBitenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bitten vs Biten</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of the past participle form of the verb &quot;bite.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Biten
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Biten&quot; is a misspelling of the word &quot;bitten.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I have biten the apple</li>
              <li>• The dog has biten the bone</li>
              <li>• She was biten by a mosquito</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bitten
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bitten&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I have bitten the apple</li>
              <li>• The dog has bitten the bone</li>
              <li>• She was bitten by a mosquito</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bitten</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bitten</strong> (verb): Past participle of &quot;bite&quot; - to have used the teeth to cut into or grip something.
          </p>
          <p>
            <strong>Bitten</strong> (adjective): Affected or influenced by something, often used figuratively.
          </p>
          <p>
            Used with helping verbs like &quot;have,&quot; &quot;has,&quot; or &quot;had&quot; to form perfect tenses, or as an adjective to describe someone affected by something.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bitten</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Affected</li>
              <li>• Influenced</li>
              <li>• Stricken</li>
              <li>• Impacted</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Touched</li>
              <li>• Moved</li>
              <li>• Struck</li>
              <li>• Hit</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bitten&quot; is the correct past participle form of &quot;bite&quot;</li>
          <li>• The word &quot;bite&quot; is an irregular verb: bite → bit → bitten</li>
          <li>• The pronunciation is /ˈbɪtn/ (BIT-en)</li>
          <li>• &quot;Biten&quot; is a common misspelling but is never correct</li>
          <li>• The double &quot;t&quot; follows the pattern of other irregular verbs</li>
          <li>• Used with helping verbs: have bitten, has bitten, had bitten</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;biten&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people forget to double the &quot;t&quot; in the past participle form. The correct spelling follows the irregular verb pattern with double &quot;t.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;biten&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;biten&quot; is always incorrect. Always use &quot;bitten&quot; as the past participle of &quot;bite.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bit&quot; and &quot;bitten&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bit&quot; is the simple past tense, while &quot;bitten&quot; is the past participle used with helping verbs like &quot;have,&quot; &quot;has,&quot; or &quot;had.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;bite&quot; is an irregular verb: bite → bit → bitten. The past participle always has double &quot;t&quot;: bitten.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bitten</strong> is the correct spelling of the past participle of &quot;bite.&quot; The incorrect spelling &quot;biten&quot; should never be used.
          </p>
          <p>
            Remember: Bite is an irregular verb with the pattern bite → bit → bitten. The past participle always has double &quot;t&quot;: bitten, not biten.
          </p>
        </div>
      </div>
    </div>
  )
} 