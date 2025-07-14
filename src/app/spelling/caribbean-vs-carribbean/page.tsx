import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Caribbean or Carribbean - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Caribbean&quot; and &quot;Carribbean&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaribbeanVsCarribbeanPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Caribbean or Carribbean</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Caribbean&quot; and &quot;Carribbean&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carribbean</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carribbean&quot; is a misspelling. The correct spelling is &quot;Caribbean&quot; with one &quot;r&quot; and two &quot;b&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Caribbean</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Caribbean&quot; is the correct spelling. It refers to the region of islands in the Caribbean Sea.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Caribbean (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A region consisting of the Caribbean Sea, its islands, and surrounding coastal areas; relating to this region.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>Caribbean</strong> islands are known for their beaches.</li>
                  <li>• <strong>Caribbean</strong> cuisine is famous for its spices.</li>
                  <li>• Jamaica is a <strong>Caribbean</strong> nation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carribbean (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carribbean&quot; is a misspelling of &quot;Caribbean&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carribbean&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Caribbean</strong> when referring to the region.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Caribbean:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• West Indies</li>
                <li>• Antilles</li>
                <li>• Caribbean Sea region</li>
                <li>• Tropical islands</li>
                <li>• Island nations</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carribbean:</h4>
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
            <li>• <strong>Caribbean</strong> is spelled with one &quot;r&quot; and two &quot;b&quot;s, not two &quot;r&quot;s.</li>
            <li>• The word comes from the Carib people who originally inhabited the region.</li>
            <li>• Can be used as both a noun and an adjective.</li>
            <li>• Often used in geographical, cultural, and travel contexts.</li>
            <li>• &quot;Carribbean&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Carribbean&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Carribbean&quot; is never correct. The proper spelling is always &quot;Caribbean.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;Car-ib-bean&quot; - one &quot;r&quot; and two &quot;b&quot;s like &quot;bean.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between Caribbean and West Indies?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to the same region, but &quot;Caribbean&quot; is more commonly used today.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;Carribbean&quot; likely occurs because people think it should have two &quot;r&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;Caribbean&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: Caribbean Sea, Caribbean islands, and Caribbean culture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can Caribbean be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Caribbean&quot; is only used as a noun or adjective.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is Caribbean only used for the sea?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Caribbean&quot; refers to the entire region including islands and coastal areas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word Caribbean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from the Carib people and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Caribbean</strong> is the correct spelling with one &quot;r&quot; and two &quot;b&quot;s. It refers to the region of islands in the Caribbean Sea and surrounding areas. The misspelling &quot;Carribbean&quot; is never correct. Use &quot;Caribbean&quot; to refer to the geographical region, its culture, or anything related to this tropical area.</p>
      </div>
    </div>
  )
} 