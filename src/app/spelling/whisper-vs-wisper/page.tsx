import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whisper or Wisper - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whisper&quot; and &quot;wisper&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhisperVsWisperPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whisper or Wisper</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whisper&quot; and &quot;wisper&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wisper</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wisper&quot; is a misspelling. The correct spelling is &quot;whisper&quot; with an &quot;h&quot; after the &quot;w&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whisper</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whisper&quot; is the correct spelling. It refers to speaking very softly or quietly.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whisper</strong> is the correct spelling. It means to speak very softly or quietly, often in a way that is difficult for others to hear.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wisper</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whisper (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To speak very softly or quietly, especially in a way that is difficult for others to hear.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whisper (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            A soft, quiet voice or sound made when speaking very quietly.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She leaned over and <span className="text-green-600 font-semibold">whispered</span> the secret in my ear.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The children <span className="text-green-600 font-semibold">whispered</span> to each other during the movie.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I could hear the <span className="text-green-600 font-semibold">whisper</span> of the wind through the trees.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She <span className="text-red-600 font-semibold">wispered</span> the secret&quot; (should be &quot;whispered&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For the verb:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Murmur</li>
                <li>• Mutter</li>
                <li>• Mumble</li>
                <li>• Speak softly</li>
                <li>• Speak quietly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For the noun:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Murmur</li>
                <li>• Rustle</li>
                <li>• Sigh</li>
                <li>• Breath</li>
                <li>• Hush</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whisper&quot; is always spelled with an &quot;h&quot; after the &quot;w&quot;</li>
          <li>• The word comes from Old English &quot;hwisprian&quot;</li>
          <li>• It can be used as both a verb and a noun</li>
          <li>• Common phrases include &quot;whisper sweet nothings&quot; and &quot;whisper campaign&quot;</li>
          <li>• The past tense is &quot;whispered&quot; and the present participle is &quot;whispering&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wisper&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wisper&quot; is never correct. The correct spelling is always &quot;whisper&quot; with an &quot;h&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whisper&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WISS-per&quot; with the &quot;h&quot; being silent, which is why some people misspell it as &quot;wisper&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whisper&quot; be used as both a verb and noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whisper&quot; can be used as both a verb (to speak softly) and a noun (a soft voice or sound).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between a whisper and a murmur?</h3>
            <p className="text-lg md:text-xl text-gray-700">A whisper is typically more intentional and quiet than a murmur. A murmur is often more of a low, continuous sound.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whisper&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, because the &quot;h&quot; is silent in pronunciation, many people incorrectly spell it as &quot;wisper&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whisper</strong> is the correct spelling. It refers to speaking very softly or quietly, and can be used as both a verb and a noun.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wisper</strong> is always incorrect, even though the &quot;h&quot; is silent in pronunciation. Remember to include the &quot;h&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 