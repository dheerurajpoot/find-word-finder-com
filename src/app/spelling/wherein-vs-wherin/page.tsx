import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wherein or Wherin - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wherein&quot; and &quot;wherin&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhereinVsWherinPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wherein or Wherin</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wherein&quot; and &quot;wherin&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wherin</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wherin&quot; is a misspelling. The correct spelling is &quot;wherein&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wherein</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wherein&quot; is the correct spelling. It means in which or in what way.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wherein</strong> is the correct spelling. It means in which or in what way, and is used to introduce a clause that explains how or in what manner something happens.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wherin</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wherein (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            In which; in what way or manner. Used to introduce a clause that explains how or in what manner something happens or exists.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wherein (conjunction)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to introduce a clause indicating the way or manner in which something happens.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The document <span className="text-green-600 font-semibold">wherein</span> the terms are specified is attached.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I see the problem <span className="text-green-600 font-semibold">wherein</span> lies the difficulty.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The book <span className="text-green-600 font-semibold">wherein</span> the author explains his theory is fascinating.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The document <span className="text-red-600 font-semibold">wherin</span> the terms are specified&quot; (should be &quot;wherein&quot;)
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
                <li>• In which</li>
                <li>• By which</li>
                <li>• Through which</li>
                <li>• In what way</li>
                <li>• How</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For location:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• In which</li>
                <li>• Within which</li>
                <li>• Inside which</li>
                <li>• Among which</li>
                <li>• Where</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wherein&quot; is spelled with an &quot;e&quot; after the &quot;wh&quot;</li>
          <li>• The word is a combination of &quot;where&quot; and &quot;in&quot;</li>
          <li>• It is considered somewhat formal or archaic</li>
          <li>• Often used in legal or formal documents</li>
          <li>• Can be replaced with &quot;in which&quot; in most contexts</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wherin&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wherin&quot; is never correct. The correct spelling is always &quot;wherein&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wherein&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;where-IN&quot; with the stress on the second syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wherein&quot; still commonly used?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wherein&quot; is considered somewhat formal or archaic, but it is still used in legal documents, formal writing, and literature.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wherein&quot; and &quot;where&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wherein&quot; specifically means &quot;in which&quot; and is more formal, while &quot;where&quot; is more general and commonly used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wherein&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly omit the &quot;e&quot; and spell it as &quot;wherin&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wherein</strong> is the correct spelling. It means in which or in what way, and is used to introduce clauses that explain how or in what manner something happens.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wherin</strong> is always incorrect. Remember to include the &quot;e&quot; after the &quot;wh&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 