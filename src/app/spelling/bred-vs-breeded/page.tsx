import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bred vs Breeded - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bred&quot; and &quot;breeded&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bred, breeded, spelling, correct spelling, word comparison, English spelling, past tense, verb',
  openGraph: {
    title: 'Bred vs Breeded - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bred&quot; and &quot;breeded&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BredVsBreededPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bred or Breeded</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot; Bred&quot; and &quot; Breeded&quot;. This is the past tense and past participle form of the verb &quot;breed.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Breeded
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Breeded&quot; is a misspelling of the word &quot;bred.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The horses were breeded for racing</li>
              <li>• He breeded dogs for years</li>
              <li>• These animals were breeded in captivity</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bred
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bred&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The horses were bred for racing</li>
              <li>• He bred dogs for years</li>
              <li>• These animals were bred in captivity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bred</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bred</strong> (past tense and past participle): To have produced offspring by mating.
          </p>
          <p>
            <strong>Bred</strong> (past tense and past participle): To have raised or developed animals or plants for specific characteristics.
          </p>
          <p>
            <strong>Bred</strong> (past tense and past participle): To have been born and raised in a particular environment or culture.
          </p>
          <p>
            <strong>Bred</strong> (adjective): Born and raised in a particular way or environment.
          </p>
          <p>
            Used to describe the process of producing offspring or developing specific characteristics through controlled mating or cultivation.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bred</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Raised</li>
              <li>• Produced</li>
              <li>• Developed</li>
              <li>• Cultivated</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Nurtured</li>
              <li>• Reared</li>
              <li>• Generated</li>
              <li>• Created</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bred&quot; is the past tense and past participle form of &quot;breed&quot;</li>
          <li>• The word comes from Old English &quot;brēdan&quot;</li>
          <li>• The pronunciation is /bred/ (BRED) in British English</li>
          <li>• &quot;Breeded&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Breed&quot; is an irregular verb - breed, bred, bred</li>
          <li>• The word can be used as both a verb form and an adjective</li>
          <li>• Never use &quot;breeded&quot; - it&apos;s always &quot;bred&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;breeded&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may think &quot;breed&quot; follows regular verb patterns and should add &quot;-ed&quot; for the past tense, but &quot;breed&quot; is an irregular verb.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;breeded&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;breeded&quot; is always incorrect. Always use &quot;bred&quot; as the past tense and past participle of &quot;breed.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;breed&quot; and &quot;bred&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Breed&quot; is the present tense (I breed dogs), while &quot;bred&quot; is the past tense (I bred dogs) and past participle (The dogs were bred).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;breed&quot; is an irregular verb: breed (present), bred (past), bred (past participle). Never add &quot;-ed&quot; to &quot;breed.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bred</strong> is the correct spelling of the past tense and past participle form of &quot;breed.&quot; The incorrect spelling &quot;breeded&quot; should never be used.
          </p>
          <p>
            Remember: Breed is an irregular verb - breed, bred, bred. Never add &quot;-ed&quot; to &quot;breed.&quot; This follows the English irregular verb pattern and is the only correct form.
          </p>
        </div>
      </div>
    </div>
  )
} 