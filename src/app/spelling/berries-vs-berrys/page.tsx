import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Berries vs Berrys - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;berries&quot; and &quot;berrys&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'berries, berrys, spelling, correct spelling, word comparison, English spelling, plural noun',
  openGraph: {
    title: 'Berries vs Berrys - Which is Correct?',
    description: 'Learn the correct spelling between &quot;berries&quot; and &quot;berrys&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BerriesVsBerrysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Berries vs Berrys</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of the plural form of the word &quot;berry.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Berrys
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Berrys&quot; is a misspelling of the word &quot;berries.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The berrys in the garden are ripe</li>
              <li>• She picked fresh berrys for the pie</li>
              <li>• These berrys are very sweet</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Berries
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Berries&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The berries in the garden are ripe</li>
              <li>• She picked fresh berries for the pie</li>
              <li>• These berries are very sweet</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Berries</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Berries</strong> (noun): The plural form of &quot;berry&quot; - small, pulpy fruits that are typically sweet and often used in cooking, baking, or eaten fresh.
          </p>
          <p>
            Common types of berries include strawberries, blueberries, raspberries, blackberries, and cranberries. They are known for their nutritional value and antioxidant properties.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Berries</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Fruits</li>
              <li>• Small fruits</li>
              <li>• Soft fruits</li>
              <li>• Wild fruits</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Garden fruits</li>
              <li>• Summer fruits</li>
              <li>• Fresh fruits</li>
              <li>• Sweet fruits</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Berries&quot; is always spelled with &quot;ies&quot; at the end</li>
          <li>• The word comes from &quot;berry&quot; + the plural suffix &quot;-ies&quot;</li>
          <li>• The pronunciation is /ˈbɛriz/ (BER-eez)</li>
          <li>• &quot;Berrys&quot; is a common misspelling but is never correct</li>
          <li>• The spelling follows the rule: words ending in &quot;y&quot; change to &quot;ies&quot; in plural</li>
          <li>• This rule applies to other words like &quot;cherry&quot; → &quot;cherries&quot;</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;berrys&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling likely occurs because people forget the rule that words ending in &quot;y&quot; change to &quot;ies&quot; in plural form, or they apply the wrong plural rule.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;berrys&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;berrys&quot; is always incorrect. Always use &quot;berries&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the rule for making words ending in &quot;y&quot; plural?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: For words ending in consonant + &quot;y,&quot; change the &quot;y&quot; to &quot;ies&quot; (berry → berries). For words ending in vowel + &quot;y,&quot; just add &quot;s&quot; (day → days).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Are there other words that follow this same pattern?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, many words follow this pattern: cherry → cherries, family → families, baby → babies, city → cities, and many more.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Berries</strong> is the correct spelling with &quot;ies&quot;: ber-ries. It means small, pulpy fruits. The misspelling &quot;berrys&quot; is never correct. Always use &quot;berries&quot; when referring to multiple small fruits.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/vigilance-vs-vigilence" className="text-blue-700 hover:text-blue-900 underline">Vigilance vs Vigilence</a></li>
            <li><a href="/spelling/told-vs-telled" className="text-blue-700 hover:text-blue-900 underline">Told vs Telled</a></li>
            <li><a href="/spelling/affect-vs-effect" className="text-blue-700 hover:text-blue-900 underline">Affect vs Effect</a></li>
            <li><a href="/spelling/withhold-vs-withold" className="text-blue-700 hover:text-blue-900 underline">Withhold vs Withold</a></li>
            <li><a href="/spelling/biscuit-vs-buiscuit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Buiscuit</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/access-vs-akcess" className="text-purple-700 hover:text-purple-900 underline">Access vs Akcess</a></li>
            <li><a href="/spelling/complement-vs-compalement" className="text-purple-700 hover:text-purple-900 underline">Complement vs Compalement</a></li>
            <li><a href="/spelling/temperament-vs-temperment" className="text-purple-700 hover:text-purple-900 underline">Temperament vs Temperment</a></li>
            <li><a href="/spelling/comrade-vs-comrad" className="text-purple-700 hover:text-purple-900 underline">Comrade vs Comrad</a></li>
            <li><a href="/spelling/completion-vs-complition" className="text-purple-700 hover:text-purple-900 underline">Completion vs Complition</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 