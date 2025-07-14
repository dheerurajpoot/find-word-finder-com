import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Candle or Candel - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;candle&quot; and &quot;candel&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CandleVsCandelPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Candle or Candel</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;candle&quot; and &quot;candel&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Candel</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Candel&quot; is a misspelling. The correct spelling is &quot;candle&quot; with a &quot;d&quot; before the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Candle</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Candle&quot; is the correct spelling. It&apos;s a cylindrical piece of wax with a wick for burning.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Candle (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A cylindrical piece of wax or tallow with a wick in the center, used for lighting or decoration.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She lit a <strong>candle</strong> for the birthday cake.</li>
                  <li>• The <strong>candle</strong> flickered in the dark room.</li>
                  <li>• We used scented <strong>candles</strong> for the dinner party.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Candel (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Candel&quot; is a misspelling of &quot;candle&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Candel&quot; is not used in standard English.</li>
                  <li>• Always use <strong>candle</strong> when referring to wax lighting.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Candle:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Taper</li>
                <li>• Wax light</li>
                <li>• Flame</li>
                <li>• Illuminator</li>
                <li>• Light source</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Candel:</h4>
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
            <li>• <strong>Candle</strong> is spelled with a &quot;d&quot; before the &quot;l&quot;, not just &quot;l&quot;.</li>
            <li>• The word comes from Old English &quot;candela&quot; meaning light.</li>
            <li>• Can be used for lighting, decoration, or religious ceremonies.</li>
            <li>• Often made from wax, tallow, or other flammable materials.</li>
            <li>• &quot;Candel&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;candel&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;candel&quot; is never correct. The proper spelling is always &quot;candle.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;can-dle&quot; - the word has a &quot;d&quot; before the &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between candle and taper?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to wax lighting, but &quot;taper&quot; specifically means a long, thin candle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;candel&quot; likely occurs because of confusion about the &quot;d&quot; before the &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;candle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: candle holder, candle wax, and candle light.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can candle be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;candle&quot; is only used as a noun. The verb form would be &quot;light a candle.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is candle only used for lighting?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;candle&quot; is also used for decoration, aromatherapy, and religious ceremonies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word candle?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old English &quot;candela&quot; and was first used in English in the 9th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Candle</strong> is the correct spelling with a &quot;d&quot; before the &quot;l&quot;. It&apos;s a cylindrical piece of wax with a wick for burning. The misspelling &quot;candel&quot; is never correct. Use &quot;candle&quot; to describe wax lighting, decoration, or religious items.</p>
      </div>
    </div>
  )
} 