import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Which or Wich - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;which&quot; and &quot;wich&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhichVsWichPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Which or Wich</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;which&quot; and &quot;wich&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wich</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wich&quot; is a misspelling. The correct spelling is &quot;which&quot; with an &quot;h&quot; after the &quot;w&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Which</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Which&quot; is the correct spelling. It is a pronoun used to ask questions or refer to specific things.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Which</strong> is the correct spelling. It is a pronoun used to ask questions about choices or to refer to specific things from a group.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wich</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Which (pronoun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Used to ask questions about choices or to refer to specific things from a group. It can also be used as a relative pronoun to introduce clauses.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Which (determiner)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to specify one or more things from a group, or to ask about choices.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Which</span> color do you prefer?&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The book <span className="text-green-600 font-semibold">which</span> I read was fascinating.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I don&apos;t know <span className="text-green-600 font-semibold">which</span> way to go.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;<span className="text-red-600 font-semibold">Wich</span> color do you prefer?&quot; (should be &quot;which&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For questions:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• What</li>
                <li>• That</li>
                <li>• Who</li>
                <li>• Where</li>
                <li>• When</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For selection:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• The one</li>
                <li>• That one</li>
                <li>• This one</li>
                <li>• Either</li>
                <li>• Neither</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Which&quot; is always spelled with an &quot;h&quot; after the &quot;w&quot;</li>
          <li>• The word comes from Old English &quot;hwilc&quot;</li>
          <li>• It can be used as both a pronoun and a determiner</li>
          <li>• Often used in questions to ask about choices</li>
          <li>• Can introduce relative clauses in formal writing</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wich&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wich&quot; is never correct. The correct spelling is always &quot;which&quot; with an &quot;h&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;which&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WICH&quot; with the &quot;h&quot; being silent, which is why some people misspell it as &quot;wich&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;which&quot; and &quot;what&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Which&quot; is used when there are specific choices or options, while &quot;what&quot; is used for more general questions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;which&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;which&quot; can be used in questions, as a relative pronoun, and as a determiner to specify choices from a group.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;which&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, because the &quot;h&quot; is silent in pronunciation, many people incorrectly spell it as &quot;wich&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Which</strong> is the correct spelling. It is a pronoun used to ask questions about choices or to refer to specific things from a group.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wich</strong> is always incorrect, even though the &quot;h&quot; is silent in pronunciation. Remember to include the &quot;h&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 