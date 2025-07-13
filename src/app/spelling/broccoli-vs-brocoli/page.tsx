import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Broccoli or Brocoli - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;broccoli&quot; and &quot;brocoli&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BroccoliVsBrocoliPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Broccoli or Brocoli</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;broccoli&quot; and &quot;brocoli&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brocoli</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Brocoli&quot; is a misspelling. The correct spelling is &quot;broccoli&quot; with double &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Broccoli</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Broccoli&quot; is the correct spelling. It refers to a green vegetable with dense flower heads.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Broccoli (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A green vegetable with dense flower heads, related to cabbage and cauliflower.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I love steamed <strong>broccoli</strong>.</li>
                  <li>• <strong>Broccoli</strong> is rich in vitamins.</li>
                  <li>• The <strong>broccoli</strong> in the garden is ready to harvest.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Brocoli (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Brocoli&quot; is a misspelling of &quot;broccoli&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Brocoli&quot; is not used in standard English.</li>
                  <li>• Always use <strong>broccoli</strong> when referring to the vegetable.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Broccoli:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Brassica oleracea</li>
                <li>• Green vegetable</li>
                <li>• Cruciferous vegetable</li>
                <li>• Brassica</li>
                <li>• Cole crop</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Brocoli:</h4>
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
            <li>• <strong>Broccoli</strong> is spelled with double &quot;c&quot;, not single &quot;c&quot;.</li>
            <li>• The word comes from Italian &quot;broccolo&quot; meaning cabbage sprout.</li>
            <li>• Used as a noun only.</li>
            <li>• Common in cooking, nutrition, and gardening contexts.</li>
            <li>• &quot;Brocoli&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brocoli&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;brocoli&quot; is never correct. The proper spelling is always &quot;broccoli.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;broc&quot; + &quot;coli&quot; - the word has double &quot;c&quot; like &quot;occasion&quot; or &quot;success.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between broccoli and cauliflower?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Broccoli&quot; has green flower heads, while &quot;cauliflower&quot; has white flower heads. Both are cruciferous vegetables.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can broccoli be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;broccoli&quot; can be used as both singular and plural, as in &quot;I bought two heads of broccoli.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;broccoli&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: steamed broccoli, broccoli soup, broccoli cheddar, broccoli salad, and broccoli rabe.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Broccoli</strong> is the correct spelling with double &quot;c&quot;. It refers to a green vegetable with dense flower heads. The misspelling &quot;brocoli&quot; is never correct. Use &quot;broccoli&quot; when referring to the vegetable in cooking, nutrition, or gardening contexts.</p>
      </div>
    </div>
  )
} 