import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whereabouts or Wherabouts - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whereabouts&quot; and &quot;wherabouts&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhereaboutsVsWheraboutsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whereabouts or Wherabouts</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whereabouts&quot; and &quot;wherabouts&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wherabouts</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wherabouts&quot; is a misspelling. The correct spelling is &quot;whereabouts&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whereabouts</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whereabouts&quot; is the correct spelling. It refers to the approximate location or general area where someone or something is.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whereabouts</strong> is the correct spelling. It refers to the approximate location or general area where someone or something is located.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wherabouts</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whereabouts (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The approximate location or general area where someone or something is located. It refers to a rough or general position rather than an exact location.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whereabouts (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to ask about or refer to the approximate location of someone or something.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Do you know the <span className="text-green-600 font-semibold">whereabouts</span> of the missing keys?&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The police are trying to determine his <span className="text-green-600 font-semibold">whereabouts</span> on the night of the crime.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Whereabouts</span> are you planning to go this weekend?&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;Do you know the <span className="text-red-600 font-semibold">wherabouts</span> of the missing keys?&quot; (should be &quot;whereabouts&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For location:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Location</li>
                <li>• Position</li>
                <li>• Place</li>
                <li>• Area</li>
                <li>• Vicinity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For general area:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Neighborhood</li>
                <li>• Region</li>
                <li>• District</li>
                <li>• Surroundings</li>
                <li>• Locale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whereabouts&quot; is spelled with an &quot;e&quot; after the &quot;wh&quot;</li>
          <li>• The word is a combination of &quot;where&quot; and &quot;about&quot;</li>
          <li>• It can be used as both a noun and an adverb</li>
          <li>• Often used when the exact location is unknown</li>
          <li>• Commonly used in police reports and investigations</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wherabouts&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wherabouts&quot; is never correct. The correct spelling is always &quot;whereabouts&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whereabouts&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;where-uh-BOUTS&quot; with the stress on the last syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whereabouts&quot; and &quot;location&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whereabouts&quot; refers to an approximate or general location, while &quot;location&quot; can refer to both exact and general positions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whereabouts&quot; be used for things other than people?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whereabouts&quot; can be used for objects, animals, or any item whose location you want to know about.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whereabouts&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly omit the &quot;e&quot; and spell it as &quot;wherabouts&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whereabouts</strong> is the correct spelling. It refers to the approximate location or general area where someone or something is located.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wherabouts</strong> is always incorrect. Remember to include the &quot;e&quot; after the &quot;wh&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 