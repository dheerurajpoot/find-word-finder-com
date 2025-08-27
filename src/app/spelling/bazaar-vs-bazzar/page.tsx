import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bazaar or Bazzar - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bazaar&quot; and &quot;bazzar&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BazaarVsBazzarPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bazaar or Bazzar</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bazaar&quot; and &quot;bazzar&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bazzar</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bazzar&quot; is a misspelling. The correct spelling is &quot;bazaar&quot; with two &quot;a&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bazaar</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bazaar&quot; is the correct spelling. It means a market or fair where goods are sold.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bazaar (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A market or fair where goods are sold; a marketplace, especially in Middle Eastern countries.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>bazaar</strong> was filled with colorful spices and fabrics.</li>
                  <li>• We visited the local <strong>bazaar</strong> to buy souvenirs.</li>
                  <li>• The street <strong>bazaar</strong> offered a variety of handmade goods.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bazzar (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bazzar&quot; is a misspelling of &quot;bazaar&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bazzar&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bazaar</strong> when referring to markets.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bazaar:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Market</li>
                <li>• Fair</li>
                <li>• Marketplace</li>
                <li>• Souk</li>
                <li>• Mart</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bazzar:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
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
            <li>• <strong>Bazaar</strong> is spelled with two &quot;a&quot;s, not one.</li>
            <li>• The word comes from Persian &quot;bāzār&quot; meaning market.</li>
            <li>• Used to describe markets, especially in Middle Eastern contexts.</li>
            <li>• Can also refer to charity sales or fundraising events.</li>
            <li>• &quot;Bazzar&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bazzar&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bazzar&quot; is never correct. The proper spelling is always &quot;bazaar.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ba&quot; + &quot;zaar&quot; - the word has two &quot;a&quot;s, not one.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bazaar and market?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bazaar&quot; often refers to traditional markets, especially in Middle Eastern countries, while &quot;market&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bazaar be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bazaar&quot; is very common in formal writing, especially in travel and cultural contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion about the double &quot;a&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bazaar&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: street bazaar, charity bazaar, Christmas bazaar, and flea market bazaar.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bazaar</strong> is the correct spelling with two &quot;a&quot;s. It means a market or fair where goods are sold. The misspelling &quot;bazzar&quot; is never correct. Use &quot;bazaar&quot; when referring to markets, especially traditional ones.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/bazaar-vs-bazar" className="text-blue-700 hover:text-blue-900 underline">Bazaar vs Bazar</a></li>
            <li><a href="/spelling/bazaar-vs-bazzar" className="text-blue-700 hover:text-blue-900 underline">Bazaar vs Bazzar</a></li>
            <li><a href="/spelling/bazaar-vs-bazzar" className="text-blue-700 hover:text-blue-900 underline">Bazaar vs Bazzar</a></li>
            <li><a href="/spelling/bazaar-vs-bazzar" className="text-blue-700 hover:text-blue-900 underline">Bazaar vs Bazzar</a></li>
            <li><a href="/spelling/bazaar-vs-bazzar" className="text-blue-700 hover:text-blue-900 underline">Bazaar vs Bazzar</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/market-vs-market" className="text-purple-700 hover:text-purple-900 underline">Market vs Market</a></li>
            <li><a href="/spelling/fair-vs-fair" className="text-purple-700 hover:text-purple-900 underline">Fair vs Fair</a></li>
            <li><a href="/spelling/marketplace-vs-marketplace" className="text-purple-700 hover:text-purple-900 underline">Marketplace vs Marketplace</a></li>
            <li><a href="/spelling/souk-vs-souk" className="text-purple-700 hover:text-purple-900 underline">Souk vs Souk</a></li>
            <li><a href="/spelling/mart-vs-mart" className="text-purple-700 hover:text-purple-900 underline">Mart vs Mart</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/foreign-words" className="text-green-700 hover:text-green-900 underline">Foreign Words</a></li>
            <li><a href="/grammar/persian-words" className="text-green-700 hover:text-green-900 underline">Persian Words</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/double-letters" className="text-green-700 hover:text-green-900 underline">Double Letters</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 