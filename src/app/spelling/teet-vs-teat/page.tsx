import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Teet or Teat - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;teet&quot; and &quot;teat&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TeetVsTeatPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Teet or Teat</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;teet&quot; and &quot;teat&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Teet</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Teet&quot; is a misspelling. The correct spelling is &quot;teat&quot; with &quot;a&quot; instead of &quot;e.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Teat</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Teat&quot; is the correct spelling. It means a nipple on a mammal.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Teat (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A nipple of a female mammal, especially one that secretes milk; the protuberance through which milk is drawn from the udder or breast.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The calf suckled from its mother&apos;s <strong>teat</strong>.</li>
                  <li>• The farmer checked the cow&apos;s <strong>teat</strong> for infection.</li>
                  <li>• Baby mammals feed from their mother&apos;s <strong>teat</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Teet (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Teet&quot; is a misspelling of &quot;teat&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Teet&quot; is not used in standard English.</li>
                  <li>• Always use <strong>teat</strong> when referring to nipples.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Teat:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Nipple</li>
                <li>• Mammary papilla</li>
                <li>• Udder nipple</li>
                <li>• Breast nipple</li>
                <li>• Milk duct</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Teet:</h4>
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
            <li>• <strong>Teat</strong> is spelled with &quot;a&quot;: teat.</li>
            <li>• It is commonly used in veterinary and agricultural contexts.</li>
            <li>• &quot;Teet&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;titt&quot; meaning nipple.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;teet&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;teet&quot; is never correct. The proper spelling is always &quot;teat.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;teat&quot; has &quot;a&quot; - think of it as &quot;teat&quot; (nipple).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between teat and nipple?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Teat&quot; specifically refers to animal nipples, while &quot;nipple&quot; can refer to both human and animal nipples.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;teat&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;teat&quot; is appropriate in veterinary, agricultural, and scientific writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;teat&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;teet&quot; often happens by using &quot;e&quot; instead of &quot;a.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;teat&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: teat infection, teat care, teat milking, and teat health.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;teat&quot; only used for cows?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;teat&quot; can refer to nipples on any female mammal, including pigs, goats, and other animals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;teat&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;teat&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Teat</strong> is the correct spelling with &quot;a&quot;: teat. It means a nipple of a female mammal, especially one that secretes milk. The misspelling &quot;teet&quot; is never correct. Always use &quot;teat&quot; when referring to animal nipples, particularly in veterinary, agricultural, or scientific contexts.</p>
      </div>
    </div>
  )
} 