import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cherries vs Cherrys - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "cherries" and "cherrys". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'cherries vs cherrys, correct spelling, spelling comparison, English spelling, word confusion, plural forms',
  openGraph: {
    title: 'Cherries vs Cherrys - Which is Correct?',
    description: 'Learn the correct spelling between "cherries" and "cherrys". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function CherriesVsCherrysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cherries or Cherrys</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct plural form of &quot;cherry&quot; vs &quot;cherrys&quot; and common spelling mistakes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
            ❌ Incorrect: Cherrys
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> This is an incorrect plural form. When a word ends in &quot;y&quot; preceded by a consonant, the plural is formed by changing &quot;y&quot; to &quot;i&quot; and adding &quot;es.&quot;
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common Error:</strong> Dropping one of the &quot;r&quot; letters
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Cherries
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> The plural form of &quot;cherry&quot;; multiple small, round, red or black fruits with a stone in the center.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Noun (plural)
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• The plural rule: consonant + y → change y to i + es</li>
          <li>• Other examples: baby → babies, lady → ladies, city → cities</li>
          <li>• When &quot;y&quot; is preceded by a vowel, just add &quot;s&quot;: boy → boys, day → days</li>
          <li>• &quot;Cherry&quot; can also refer to the tree that produces these fruits</li>
          <li>• The word comes from Old French &quot;cherise&quot; and Latin &quot;cerasum&quot;</li>
          <li>• Remember: &quot;Cherry&quot; ends in &quot;y&quot; with a consonant before it, so it becomes &quot;cherries&quot;</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Cherries</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Fruits</h3>
            <p className="text-lg text-blue-700">Edible reproductive bodies of plants</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Berries</h3>
            <p className="text-lg text-blue-700">Small, pulpy fruits (though cherries are technically drupes)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Drupes</h3>
            <p className="text-lg text-blue-700">Fruits with a single seed surrounded by fleshy tissue</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Stone Fruits</h3>
            <p className="text-lg text-blue-700">Fruits with a hard pit or stone in the center</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Produce</h3>
            <p className="text-lg text-blue-700">Fresh fruits and vegetables</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Harvest</h3>
            <p className="text-lg text-blue-700">The yield of fruits collected from trees</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;The farmer picked fresh <span className="text-green-600 font-semibold">cherries</span> from the orchard.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800">
              <strong>Incorrect:</strong> &quot;The farmer picked fresh <span className="text-red-600 font-semibold">cherrys</span> from the orchard.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;She made a delicious pie with fresh <span className="text-green-600 font-semibold">cherries</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">cherries</span> were perfectly ripe and sweet.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why is &quot;cherries&quot; spelled with &quot;ies&quot; instead of just &quot;s&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: This follows the standard English plural rule: when a word ends in &quot;y&quot; preceded by a consonant, you change the &quot;y&quot; to &quot;i&quot; and add &quot;es.&quot; Since &quot;cherry&quot; ends in &quot;y&quot; with the consonant &quot;r&quot; before it, it becomes &quot;cherries.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Are there other words that follow the same plural rule as &quot;cherry&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Yes, many words follow this rule: baby → babies, lady → ladies, city → cities, party → parties, family → families, country → countries, and many more. This is a very common pattern in English.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What about words that end in &quot;y&quot; but have a vowel before it?</h3>
            <p className="text-lg text-blue-800">
              A: When &quot;y&quot; is preceded by a vowel, you simply add &quot;s&quot; to form the plural. Examples: boy → boys, day → days, key → keys, toy → toys, play → plays.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Can &quot;cherry&quot; be used as both singular and plural?</h3>
            <p className="text-lg text-blue-800">
              A: No, &quot;cherry&quot; is singular and &quot;cherries&quot; is plural. You would say &quot;one cherry&quot; and &quot;many cherries.&quot; Using &quot;cherry&quot; as plural is incorrect.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct plural form of &quot;cherry&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Think of the pattern: consonant + y → change y to i + es. Since &quot;cherry&quot; ends in &quot;y&quot; with &quot;r&quot; (a consonant) before it, it becomes &quot;cherries.&quot; You can also think of other similar words like &quot;baby&quot; → &quot;babies&quot; to remember the rule.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Cherries</strong> is the correct plural spelling. The word &quot;cherry&quot; follows the standard English plural rule: when a word ends in &quot;y&quot; preceded by a consonant, change the &quot;y&quot; to &quot;i&quot; and add &quot;es.&quot; Therefore, &quot;cherry&quot; becomes &quot;cherries.&quot; &quot;Cherrys&quot; is incorrect and should never be used.
        </p>
      </div>
      </div>
    </div>
  )
} 