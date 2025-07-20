import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whistle or Whisle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whistle&quot; and &quot;whisle&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhistleVsWhislePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whistle or Whisle</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whistle&quot; and &quot;whisle&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Whisle</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Whisle&quot; is a misspelling. The correct spelling is &quot;whistle&quot; with a &quot;t&quot; after the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whistle</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whistle&quot; is the correct spelling. It refers to a high-pitched sound or a device that makes such a sound.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whistle</strong> is the correct spelling. It is both a noun referring to a high-pitched sound or device, and a verb meaning to make such a sound.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whisle</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whistle (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A high-pitched sound made by forcing air through pursed lips or a small opening; a device that makes such a sound.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whistle (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To make a high-pitched sound by forcing air through pursed lips or a small opening.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe both the sound and the action of making a high-pitched sound, often for communication or music.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He blew the <span className="text-green-600 font-semibold">whistle</span> to start the game.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She can <span className="text-green-600 font-semibold">whistle</span> beautifully.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The referee&apos;s <span className="text-green-600 font-semibold">whistle</span> signaled the end.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He blew the <span className="text-red-600 font-semibold">whisle</span> to start the game&quot; (should be &quot;whistle&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For sounds:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Squeal</li>
                <li>• Squeak</li>
                <li>• Hiss</li>
                <li>• Shrill</li>
                <li>• Pipe</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For devices:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Signal</li>
                <li>• Call</li>
                <li>• Alert</li>
                <li>• Horn</li>
                <li>• Siren</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whistle&quot; is spelled with a &quot;t&quot; after the &quot;s&quot;</li>
          <li>• It is both a noun and a verb</li>
          <li>• The word comes from Old English &quot;hwistlian&quot;</li>
          <li>• Often used in sports and music contexts</li>
          <li>• Can refer to both the sound and the device</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whisle&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;whisle&quot; is never correct. The correct spelling is always &quot;whistle&quot; with a &quot;t&quot; after the &quot;s&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whistle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WISS-uhl&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whistle&quot; and &quot;whisle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whistle&quot; is the correct spelling meaning a high-pitched sound or device, while &quot;whisle&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whistle&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whistle&quot; can refer to the sound, the action of making the sound, or a device that produces the sound in various contexts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whistle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;whisle&quot;, possibly because they forget the &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whistle</strong> is the correct spelling. It is both a noun referring to a high-pitched sound or device, and a verb meaning to make such a sound.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whisle</strong> is always incorrect. Remember to include the &quot;t&quot; after the &quot;s&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 