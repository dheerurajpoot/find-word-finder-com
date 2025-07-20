import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Welcome or Welcam - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;welcome&quot; and &quot;welcam&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WelcomeVsWelcamPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Welcome or Welcam</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;welcome&quot; and &quot;welcam&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Welcam</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Welcam&quot; is a misspelling. The correct spelling is &quot;welcome&quot; with &quot;come&quot; at the end.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Welcome</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Welcome&quot; is the correct spelling. It means to greet someone kindly or to be pleased to receive something.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Welcome</strong> is the correct spelling. It is a verb meaning to greet someone kindly, an adjective meaning pleasing or agreeable, or an interjection used to greet someone.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Welcam</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Welcome (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To greet someone kindly or hospitably; to receive or accept something with pleasure.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Welcome (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Pleasing or agreeable; gladly received or accepted.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Welcome (interjection)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to greet someone who has arrived or to express pleasure at their presence.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Welcome</span> to our home!&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;We <span className="text-green-600 font-semibold">welcome</span> your suggestions.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;You are always <span className="text-green-600 font-semibold">welcome</span> here.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;<span className="text-red-600 font-semibold">Welcam</span> to our home!&quot; (should be &quot;Welcome&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For greeting:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Greet</li>
                <li>• Receive</li>
                <li>• Accept</li>
                <li>• Embrace</li>
                <li>• Salute</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For agreeable:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Pleasing</li>
                <li>• Acceptable</li>
                <li>• Desirable</li>
                <li>• Gratifying</li>
                <li>• Satisfactory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Welcome&quot; is spelled with &quot;come&quot; at the end, not &quot;cam&quot;</li>
          <li>• The word comes from Old English &quot;wilcuma&quot; meaning &quot;desired guest&quot;</li>
          <li>• It can be used as a verb, adjective, or interjection</li>
          <li>• Often used in hospitality and social contexts</li>
          <li>• The past tense is &quot;welcomed&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;welcam&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;welcam&quot; is never correct. The correct spelling is always &quot;welcome&quot; with &quot;come&quot; at the end.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;welcome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEL-kum&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;welcome&quot; and &quot;cam&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Welcome&quot; means to greet kindly, while &quot;cam&quot; is the past tense of &quot;come&quot; meaning to have moved toward or arrived at a place.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;welcome&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;welcome&quot; can be used as a verb (to greet), an adjective (pleasing), or an interjection (greeting someone).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;welcome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;welcam&quot;, possibly confusing it with the past tense of &quot;come&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Welcome</strong> is the correct spelling. It is a versatile word that can function as a verb, adjective, or interjection meaning to greet kindly or to be pleased to receive.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Welcam</strong> is always incorrect. Remember to use &quot;come&quot; at the end, not &quot;cam&quot;.
        </p>
      </div>
    </div>
  )
} 