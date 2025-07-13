import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Broken vs Breaked - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;broken&quot; and &quot;breaked&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'broken, breaked, spelling, correct spelling, word comparison, English spelling, past participle, verb',
  openGraph: {
    title: 'Broken vs Breaked - Which is Correct?',
    description: 'Learn the correct spelling between &quot;broken&quot; and &quot;breaked&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BrokenVsBreakedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Broken or Breaked</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Broken and Breaked. This is the past participle form of the verb &quot;break.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Breaked
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Breaked&quot; is a misspelling of the word &quot;broken.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The glass is breaked</li>
              <li>• He has breaked the rules</li>
              <li>• The news has breaked</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Broken
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Broken&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The glass is broken</li>
              <li>• He has broken the rules</li>
              <li>• The news has broken</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Broken</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Broken</strong> (past participle): Having been separated into pieces; damaged or fractured.
          </p>
          <p>
            <strong>Broken</strong> (past participle): Having been interrupted or stopped.
          </p>
          <p>
            <strong>Broken</strong> (past participle): Having failed to keep a promise, law, or agreement.
          </p>
          <p>
            <strong>Broken</strong> (adjective): Damaged or not working properly.
          </p>
          <p>
            <strong>Broken</strong> (adjective): Emotionally hurt or defeated.
          </p>
          <p>
            Used to describe something that has been damaged, interrupted, or failed to function properly.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Broken</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Damaged</li>
              <li>• Fractured</li>
              <li>• Shattered</li>
              <li>• Cracked</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Defective</li>
              <li>• Faulty</li>
              <li>• Interrupted</li>
              <li>• Violated</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Broken&quot; is the past participle form of &quot;break&quot;</li>
          <li>• The word comes from Old English &quot;brocen&quot;</li>
          <li>• The pronunciation is /ˈbrəʊkən/ (BROH-ken) in British English</li>
          <li>• &quot;Breaked&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Break&quot; is an irregular verb - break, broke, broken</li>
          <li>• The word can be used as both a past participle and an adjective</li>
          <li>• Never use &quot;breaked&quot; - it&apos;s always &quot;broken&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;breaked&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may think &quot;break&quot; follows regular verb patterns and should add &quot;-ed&quot; for the past participle, but &quot;break&quot; is an irregular verb.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;breaked&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;breaked&quot; is always incorrect. Always use &quot;broken&quot; as the past participle of &quot;break.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;broke&quot; and &quot;broken&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Broke&quot; is the simple past tense (I broke the glass), while &quot;broken&quot; is the past participle (The glass is broken, I have broken the glass).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;break&quot; is an irregular verb: break (present), broke (past), broken (past participle). Never add &quot;-ed&quot; to &quot;break.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Broken</strong> is the correct spelling of the past participle form of &quot;break.&quot; The incorrect spelling &quot;breaked&quot; should never be used.
          </p>
          <p>
            Remember: Break is an irregular verb - break, broke, broken. Never add &quot;-ed&quot; to &quot;break.&quot; This follows the English irregular verb pattern and is the only correct form.
          </p>
        </div>
      </div>
    </div>
  )
} 