import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wherever or Whereever - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wherever&quot; and &quot;whereever&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhereverVsWhereeverPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wherever or Whereever</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wherever&quot; and &quot;whereever&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Whereever</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Whereever&quot; is a misspelling. The correct spelling is &quot;wherever&quot; with a single &quot;e&quot; in the middle.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wherever</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wherever&quot; is the correct spelling. It means in any place or location, regardless of where.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wherever</strong> is the correct spelling. It means in any place or location, regardless of where, and is used to indicate that something happens or exists in any location.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whereever</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wherever (adverb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            In any place or location, regardless of where. Used to indicate that something happens or exists in any location without restriction.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wherever (conjunction)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to introduce a clause indicating any place or situation in which something happens.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I&apos;ll follow you <span className="text-green-600 font-semibold">wherever</span> you go.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Wherever</span> you are, I&apos;ll find you.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;You can sit <span className="text-green-600 font-semibold">wherever</span> you like.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I&apos;ll follow you <span className="text-red-600 font-semibold">whereever</span> you go&quot; (should be &quot;wherever&quot;)
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
                <li>• Anywhere</li>
                <li>• Everywhere</li>
                <li>• In any place</li>
                <li>• No matter where</li>
                <li>• At any location</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For situations:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• In any case</li>
                <li>• Regardless</li>
                <li>• No matter what</li>
                <li>• In any event</li>
                <li>• At any time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wherever&quot; is spelled with a single &quot;e&quot; in the middle</li>
          <li>• The word is a combination of &quot;where&quot; and &quot;ever&quot;</li>
          <li>• It can be used as both an adverb and a conjunction</li>
          <li>• Often used to express freedom of choice in location</li>
          <li>• Similar to &quot;whenever&quot;, &quot;however&quot;, and &quot;whatever&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whereever&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;whereever&quot; is never correct. The correct spelling is always &quot;wherever&quot; with a single &quot;e&quot; in the middle.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wherever&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;where-EV-er&quot; with the stress on the second syllable, not &quot;where-EE-ver&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wherever&quot; and &quot;anywhere&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wherever&quot; is more emphatic and can be used as a conjunction, while &quot;anywhere&quot; is primarily an adverb.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wherever&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wherever&quot; can be used to indicate any location, express freedom of choice, or introduce conditional clauses.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wherever&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly add an extra &quot;e&quot; and spell it as &quot;whereever&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wherever</strong> is the correct spelling. It means in any place or location, regardless of where, and can be used as both an adverb and a conjunction.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whereever</strong> is always incorrect. Remember to use only one &quot;e&quot; in the middle when writing this word.
        </p>
      </div>
    </div>
  )
} 