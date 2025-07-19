import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Collectable or Collectible - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;collectable&quot; and &quot;collectible&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CollectableVsCollectiblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Collectable or Collectible</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;collectable&quot; and &quot;collectible&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Collectible</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Collectible&quot; is the preferred American English spelling for an item worth collecting, such as stamps, coins, or art. It is also used as a noun for such items.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-blue-500 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">ℹ️</span>
              <h3 className="text-2xl font-bold text-blue-800">Alternative: Collectable</h3>
            </div>
            <p className="text-lg md:text-xl text-blue-700">&quot;Collectable&quot; is an accepted British English variant, but &quot;collectible&quot; is more common in American English and in reference to items of value.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Collectible (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An item worth collecting due to its value or interest; able to be collected.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The toy became a valuable <strong>&quot;collectible&quot;</strong>.</li>
                  <li>• Stamps and coins are popular <strong>&quot;collectibles&quot;</strong>.</li>
                  <li>• The debt is <strong>&quot;collectible&quot;</strong> by law.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Collectable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A British English variant of &quot;collectible&quot;; able to be collected.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-blue-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                  <li>• The taxes are <strong>&quot;collectable&quot;</strong> by the government.</li>
                  <li>• In the UK, &quot;collectable&quot; is sometimes used for items of value.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Collectible:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Memento</li>
                <li>• Souvenir</li>
                <li>• Keepsake</li>
                <li>• Curio</li>
                <li>• Treasure</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Collectable:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• (Same as collectible; less common spelling)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>&quot;Collectible&quot;</strong> is the preferred American English spelling for items of value.</li>
            <li>• <strong>&quot;Collectable&quot;</strong> is an accepted British English variant.</li>
            <li>• Both mean able to be collected, but &quot;collectible&quot; is more common for valuable items.</li>
            <li>• Use &quot;collectible&quot; for American audiences and valuable items.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;collectable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;collectable&quot; is accepted in British English, but &quot;collectible&quot; is preferred in American English and for items of value.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Which is more common in the US?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Collectible&quot; is much more common in American English, especially for valuable items.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can both be used as nouns?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Collectible&quot; is commonly used as a noun for items of value; &quot;collectable&quot; is rarely used this way.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Collectible&quot;</strong> is the preferred American English spelling for items of value. &quot;Collectable&quot; is accepted in British English. Use &quot;collectible&quot; for American audiences and valuable items.</p>
      </div>
    </div>
  )
} 