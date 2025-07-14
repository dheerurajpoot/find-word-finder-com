import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Carriage or Carrage - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;carriage&quot; and &quot;carrage&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CarriageVsCarragePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Carriage or Carrage</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;carriage&quot; and &quot;carrage&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carrage</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carrage&quot; is a misspelling. The correct spelling is &quot;carriage&quot; with &quot;age&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Carriage</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Carriage&quot; is the correct spelling. It means a vehicle with wheels, typically pulled by horses.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Carriage (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A vehicle with wheels, typically pulled by horses; the way a person holds their body.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The royal <strong>carriage</strong> was pulled by white horses.</li>
                  <li>• Her <strong>carriage</strong> was elegant and poised.</li>
                  <li>• The <strong>carriage</strong> ride through the park was romantic.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carrage (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carrage&quot; is a misspelling of &quot;carriage&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carrage&quot; is not used in standard English.</li>
                  <li>• Always use <strong>carriage</strong> when referring to vehicles.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Carriage:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Coach</li>
                <li>• Vehicle</li>
                <li>• Posture</li>
                <li>• Bearing</li>
                <li>• Demeanor</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carrage:</h4>
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
            <li>• <strong>Carriage</strong> is spelled with &quot;age&quot; at the end, not &quot;age.&quot;</li>
            <li>• The word comes from Old French &quot;cariage&quot; meaning to carry.</li>
            <li>• Can be used to refer to vehicles or a person&apos;s posture.</li>
            <li>• Often used in historical, transportation, and etiquette contexts.</li>
            <li>• &quot;Carrage&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carrage&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrage&quot; is never correct. The proper spelling is always &quot;carriage.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;car-riage&quot; - the word ends with &quot;age&quot; like &quot;message&quot; or &quot;package.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between carriage and coach?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to horse-drawn vehicles, but &quot;carriage&quot; is more general while &quot;coach&quot; is more specific.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carrage&quot; likely occurs because of confusion about the ending &quot;age&quot; vs &quot;age.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;carriage&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: horse-drawn carriage, carriage return, and carriage trade.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can carriage be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carriage&quot; is only used as a noun. The verb form would be &quot;carry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is carriage only used for vehicles?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carriage&quot; can also refer to a person&apos;s posture or bearing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word carriage?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old French &quot;cariage&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Carriage</strong> is the correct spelling with &quot;age&quot; at the end. It means a vehicle with wheels, typically pulled by horses, or the way a person holds their body. The misspelling &quot;carrage&quot; is never correct. Use &quot;carriage&quot; to refer to historical vehicles, posture, or bearing in various contexts.</p>
      </div>
    </div>
  )
} 