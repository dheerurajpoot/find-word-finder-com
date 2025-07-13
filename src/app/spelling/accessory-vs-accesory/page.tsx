import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accessory or Accesory - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accessory&quot; and &quot;accesory&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccessoryVsAccesoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accessory or Accesory</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accessory&quot; and &quot;accesory&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accesory</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Accesory&quot; is a misspelling. The correct spelling is &quot;accessory&quot; with two &quot;c&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accessory</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accessory&quot; is the correct spelling. It means an additional item that complements or enhances something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accessory (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An additional item that complements or enhances something; a supplementary part or attachment.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She bought jewelry <strong>accessories</strong> to match her dress.</li>
                  <li>• The phone comes with several <strong>accessories</strong>.</li>
                  <li>• Car <strong>accessories</strong> can enhance its appearance.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accesory (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Accesory&quot; is a misspelling of &quot;accessory&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Accesory&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accessory</strong> when referring to additional items.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accessory:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Addition</li>
                <li>• Attachment</li>
                <li>• Extra</li>
                <li>• Supplement</li>
                <li>• Enhancement</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accesory:</h4>
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
            <li>• <strong>Accessory</strong> is spelled with two &quot;c&quot;s at the beginning.</li>
            <li>• The word comes from Latin &quot;accessorius&quot; meaning &quot;additional.&quot;</li>
            <li>• Used to describe additional items that complement or enhance something.</li>
            <li>• Common in both formal and informal writing.</li>
            <li>• &quot;Accesory&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accesory&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accesory&quot; is never correct. The proper spelling is always &quot;accessory.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac + cessory&quot; - remember the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accessory and attachment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accessory&quot; refers to additional items that enhance something, while &quot;attachment&quot; refers to something that is physically connected.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accessory be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accessory&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;accesory&quot; likely occurs because of confusion about the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accessory&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: fashion accessories, car accessories, phone accessories, accessory before the fact, and accessory after the fact.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accessory</strong> is the correct spelling with two &quot;c&quot;s at the beginning. It means an additional item that complements or enhances something. The misspelling &quot;accesory&quot; is never correct. Use &quot;accessory&quot; to describe additional items that enhance or complement something.</p>
      </div>
    </div>
  )
} 