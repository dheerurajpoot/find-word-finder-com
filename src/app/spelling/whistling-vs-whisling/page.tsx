import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whistling or Whisling - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whistling&quot; and &quot;whisling&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhistlingVsWhislingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whistling or Whisling</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whistling&quot; and &quot;whisling&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Whisling</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Whisling&quot; is a misspelling. The correct spelling is &quot;whistling&quot; with a &quot;t&quot; after the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whistling</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whistling&quot; is the correct spelling. It is the present participle of the verb &quot;whistle&quot;.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whistling</strong> is the correct spelling. It is the present participle of the verb &quot;whistle&quot; meaning to make a high-pitched sound by forcing air through pursed lips.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whisling</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whistling (present participle)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The present participle of &quot;whistle&quot;; making a high-pitched sound by forcing air through pursed lips or a small opening.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whistle (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To make a high-pitched sound by forcing air through pursed lips or a small opening.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe the action of making a whistling sound, often as a form of communication or music.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He was <span className="text-green-600 font-semibold">whistling</span> a tune.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The wind was <span className="text-green-600 font-semibold">whistling</span> through the trees.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She enjoys <span className="text-green-600 font-semibold">whistling</span> while she works.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He was <span className="text-red-600 font-semibold">whisling</span> a tune&quot; (should be &quot;whistling&quot;)
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
                <li>• Squealing</li>
                <li>• Squeaking</li>
                <li>• Hissing</li>
                <li>• Shrilling</li>
                <li>• Piping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For music:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Tuning</li>
                <li>• Melody</li>
                <li>• Song</li>
                <li>• Air</li>
                <li>• Strain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whistling&quot; is spelled with a &quot;t&quot; after the &quot;s&quot;</li>
          <li>• It is the present participle of the verb &quot;whistle&quot;</li>
          <li>• The word comes from Old English &quot;hwistlian&quot;</li>
          <li>• Often used to describe musical sounds</li>
          <li>• Can refer to both human and natural sounds</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whisling&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;whisling&quot; is never correct. The correct spelling is always &quot;whistling&quot; with a &quot;t&quot; after the &quot;s&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whistling&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WISS-ling&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whistling&quot; and &quot;whisling&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whistling&quot; is the correct present participle of whistle, while &quot;whisling&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whistling&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whistling&quot; can describe human whistling, wind sounds, or any high-pitched sound made by air passing through an opening.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whistling&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;whisling&quot;, possibly because they forget the &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whistling</strong> is the correct spelling. It is the present participle of the verb &quot;whistle&quot; meaning to make a high-pitched sound.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whisling</strong> is always incorrect. Remember to include the &quot;t&quot; after the &quot;s&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 