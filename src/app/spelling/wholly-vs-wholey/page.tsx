import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wholly or Wholey - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wholly&quot; and &quot;wholey&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhollyVsWholeyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wholly or Wholey</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wholly&quot; and &quot;wholey&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wholey</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wholey&quot; is a misspelling. The correct spelling is &quot;wholly&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wholly</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wholly&quot; is the correct spelling. It means completely, entirely, or fully.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wholly</strong> is the correct spelling. It is an adverb meaning completely, entirely, or fully.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wholey</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wholly (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Completely, entirely, or fully; to the full extent or degree.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to emphasize that something is complete or total in nature.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I <span className="text-green-600 font-semibold">wholly</span> agree with your decision.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The project was <span className="text-green-600 font-semibold">wholly</span> successful.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She is <span className="text-green-600 font-semibold">wholly</span> responsible for the outcome.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I <span className="text-red-600 font-semibold">wholey</span> agree with your decision&quot; (should be &quot;wholly&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For completely:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Completely</li>
                <li>• Entirely</li>
                <li>• Fully</li>
                <li>• Totally</li>
                <li>• Absolutely</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For thoroughly:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Thoroughly</li>
                <li>• Utterly</li>
                <li>• Completely</li>
                <li>• Wholly</li>
                <li>• In full</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wholly&quot; is spelled with two &quot;l&quot;s</li>
          <li>• It is an adverb formed from the adjective &quot;whole&quot;</li>
          <li>• The word comes from Old English &quot;hālīce&quot;</li>
          <li>• Often used in formal or emphatic contexts</li>
          <li>• Can be used to emphasize completeness</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wholey&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wholey&quot; is never correct. The correct spelling is always &quot;wholly&quot; with two &quot;l&quot;s.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wholly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;HOH-lee&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wholly&quot; and &quot;wholey&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wholly&quot; is the correct spelling meaning completely or entirely, while &quot;wholey&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wholly&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wholly&quot; can be used to emphasize that something is complete, total, or absolute in various contexts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wholly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wholey&quot;, possibly because they forget the second &quot;l&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wholly</strong> is the correct spelling. It is an adverb meaning completely, entirely, or fully.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wholey</strong> is always incorrect. Remember to include both &quot;l&quot;s when writing this word.
        </p>
      </div>
    </div>
  )
} 