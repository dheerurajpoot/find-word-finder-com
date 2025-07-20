import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whereby or Wherby - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whereby&quot; and &quot;wherby&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WherebyVsWherbyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whereby or Wherby</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whereby&quot; and &quot;wherby&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wherby</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wherby&quot; is a misspelling. The correct spelling is &quot;whereby&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whereby</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whereby&quot; is the correct spelling. It means by which or through which.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whereby</strong> is the correct spelling. It means by which or through which, and is used to introduce a clause that explains the means or method by which something happens.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wherby</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whereby (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            By which; through which. Used to introduce a clause that explains the means, method, or process by which something happens or is achieved.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whereby (conjunction)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to introduce a clause indicating the means or method by which something is accomplished.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The system <span className="text-green-600 font-semibold">whereby</span> users can reset their passwords is secure.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;We have a process <span className="text-green-600 font-semibold">whereby</span> complaints are handled within 24 hours.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The mechanism <span className="text-green-600 font-semibold">whereby</span> the machine operates is complex.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The system <span className="text-red-600 font-semibold">wherby</span> users can reset their passwords&quot; (should be &quot;whereby&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For means:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• By which</li>
                <li>• Through which</li>
                <li>• By means of which</li>
                <li>• Via which</li>
                <li>• By way of which</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For method:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• In which</li>
                <li>• How</li>
                <li>• The way in which</li>
                <li>• By virtue of which</li>
                <li>• As a result of which</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whereby&quot; is spelled with an &quot;e&quot; after the &quot;wh&quot;</li>
          <li>• The word is a combination of &quot;where&quot; and &quot;by&quot;</li>
          <li>• It is considered somewhat formal or archaic</li>
          <li>• Often used in legal, technical, or formal documents</li>
          <li>• Can be replaced with &quot;by which&quot; in most contexts</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wherby&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wherby&quot; is never correct. The correct spelling is always &quot;whereby&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whereby&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;where-BY&quot; with the stress on the second syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whereby&quot; still commonly used?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whereby&quot; is considered somewhat formal or archaic, but it is still used in legal documents, technical writing, and formal contexts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whereby&quot; and &quot;whereby&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whereby&quot; specifically means &quot;by which&quot; and is more formal, while &quot;where&quot; is more general and commonly used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whereby&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly omit the &quot;e&quot; and spell it as &quot;wherby&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whereby</strong> is the correct spelling. It means by which or through which, and is used to introduce clauses that explain the means or method by which something happens.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wherby</strong> is always incorrect. Remember to include the &quot;e&quot; after the &quot;wh&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 