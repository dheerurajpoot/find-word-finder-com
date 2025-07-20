import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Well or Wel - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;well&quot; and &quot;wel&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WellVsWelPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Well or Wel</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;well&quot; and &quot;wel&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wel</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wel&quot; is a misspelling. The correct spelling is &quot;well&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Well</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Well&quot; is the correct spelling. It can be an adverb, adjective, noun, or interjection with various meanings.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Well</strong> is the correct spelling. It is a versatile word that can function as an adverb (meaning in a good manner), an adjective (meaning healthy), a noun (meaning a water source), or an interjection.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wel</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Well (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            In a good or satisfactory manner; thoroughly or completely. Used to describe how something is done.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Well (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            In good health; healthy; satisfactory or good in quality.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Well (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A deep hole or shaft dug or drilled to obtain water, oil, gas, or other substances from underground.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Well (interjection)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to express surprise, resignation, or to introduce a statement.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She sings very <span className="text-green-600 font-semibold">well</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I hope you feel <span className="text-green-600 font-semibold">well</span> soon.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The village gets its water from a deep <span className="text-green-600 font-semibold">well</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She sings very <span className="text-red-600 font-semibold">wel</span>&quot; (should be &quot;well&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For manner:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Good</li>
                <li>• Properly</li>
                <li>• Adequately</li>
                <li>• Thoroughly</li>
                <li>• Excellently</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For health:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Healthy</li>
                <li>• Fine</li>
                <li>• Fit</li>
                <li>• Strong</li>
                <li>• Robust</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Well&quot; is spelled with two &quot;l&quot;s</li>
          <li>• It is a very versatile word with multiple meanings</li>
          <li>• Can function as adverb, adjective, noun, or interjection</li>
          <li>• Often used in common phrases like &quot;well done&quot; and &quot;get well soon&quot;</li>
          <li>• The comparative form is &quot;better&quot; and superlative is &quot;best&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wel&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wel&quot; is never correct. The correct spelling is always &quot;well&quot; with two &quot;l&quot;s.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;well&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEL&quot; with a short &quot;e&quot; sound, rhyming with &quot;bell&quot; and &quot;tell&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;well&quot; and &quot;good&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Well&quot; is typically used as an adverb to describe how something is done, while &quot;good&quot; is an adjective used to describe nouns.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;well&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;well&quot; is very versatile and can be used as an adverb, adjective, noun, or interjection depending on the context.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;well&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly use only one &quot;l&quot; and spell it as &quot;wel&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Well</strong> is the correct spelling. It is a versatile word that can function as an adverb, adjective, noun, or interjection with various meanings.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wel</strong> is always incorrect. Remember to use two &quot;l&quot;s when writing this word.
        </p>
      </div>
    </div>
  )
} 