import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Balloons or Balons - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;balloons&quot; and &quot;balons&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BalloonsVsBalonsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Balloons or Balons</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;balloons&quot; and &quot;balons&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Balons</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Balons&quot; is a misspelling. The correct spelling is &quot;balloons&quot; with two &quot;l&quot;s and two &quot;o&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Balloons</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Balloons&quot; is the correct spelling. It is the plural form of &quot;balloon&quot; - inflatable rubber or plastic bags filled with air or gas.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Balloons (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Plural of balloon - inflatable rubber or plastic bags filled with air or gas, used for decoration or transportation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The children played with colorful <strong>balloons</strong> at the party.</li>
                  <li>• Hot air <strong>balloons</strong> floated across the sky.</li>
                  <li>• She decorated the room with helium <strong>balloons</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Balons (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Balons&quot; is a misspelling of &quot;balloons&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Balons&quot; is not used in standard English.</li>
                  <li>• Always use <strong>balloons</strong> when referring to inflatable objects.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Balloons:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Airships</li>
                <li>• Blimps</li>
                <li>• Inflatables</li>
                <li>• Floaters</li>
                <li>• Decorations</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Balons:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Balloons</strong> is spelled with two &quot;l&quot;s and two &quot;o&quot;s.</li>
          <li>• The word comes from French &quot;ballon&quot; meaning large ball.</li>
          <li>• Used for decoration, transportation, and scientific purposes.</li>
          <li>• Can be filled with air, helium, or other gases.</li>
          <li>• &quot;Balons&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;balons&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;balons&quot; is never correct. The proper spelling is always &quot;balloons.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ball&quot; + &quot;oons&quot; - like a ball that floats in the air.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between balloon and balloons?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Balloon&quot; is singular (one), while &quot;balloons&quot; is plural (more than one).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can balloons be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;balloons&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;balons&quot; likely occurs because of confusion about the double letters or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;balloons&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: helium balloons, hot air balloons, water balloons, and birthday balloons.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Balloons</strong> is the correct spelling with two &quot;l&quot;s and two &quot;o&quot;s. It is the plural form of &quot;balloon&quot; and refers to inflatable objects filled with air or gas. The misspelling &quot;balons&quot; is never correct.</p>
      </div>
    </div>
  )
} 