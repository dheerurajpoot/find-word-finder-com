import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whereas or Wheras - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whereas&quot; and &quot;wheras&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhereasVsWherasPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whereas or Wheras</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whereas&quot; and &quot;wheras&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wheras</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wheras&quot; is a misspelling. The correct spelling is &quot;whereas&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whereas</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whereas&quot; is the correct spelling. It means in contrast or comparison to something else.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whereas</strong> is the correct spelling. It is a conjunction used to introduce a contrast or comparison between two things, ideas, or situations.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wheras</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whereas (conjunction)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Used to introduce a statement that contrasts with or is different from what has been said previously. It indicates a comparison or opposition between two things.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whereas (formal usage)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            In legal or formal documents, used to introduce a preamble or introductory statement that provides context or background information.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I prefer tea, <span className="text-green-600 font-semibold">whereas</span> my sister prefers coffee.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Whereas</span> the weather was sunny yesterday, today it is raining.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Whereas</span> the company has achieved its goals, further expansion is now possible.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I prefer tea, <span className="text-red-600 font-semibold">wheras</span> my sister prefers coffee&quot; (should be &quot;whereas&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For contrast:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• While</li>
                <li>• However</li>
                <li>• On the other hand</li>
                <li>• In contrast</li>
                <li>• But</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For comparison:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• While</li>
                <li>• Whilst</li>
                <li>• Although</li>
                <li>• Though</li>
                <li>• Even though</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whereas&quot; is spelled with an &quot;e&quot; after the &quot;wh&quot;</li>
          <li>• The word is a combination of &quot;where&quot; and &quot;as&quot;</li>
          <li>• It is commonly used in formal writing and legal documents</li>
          <li>• Often used to introduce contrasting information</li>
          <li>• Can be used at the beginning of a sentence or in the middle</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wheras&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wheras&quot; is never correct. The correct spelling is always &quot;whereas&quot; with an &quot;e&quot; after the &quot;wh&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whereas&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;where-AS&quot; with the stress on the second syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whereas&quot; and &quot;while&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whereas&quot; is more formal and emphasizes contrast, while &quot;while&quot; is more general and can indicate both contrast and simultaneous events.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whereas&quot; be used in informal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whereas&quot; is more commonly used in formal writing, but it can be used in informal contexts when you want to emphasize a contrast.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whereas&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly omit the &quot;e&quot; and spell it as &quot;wheras&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whereas</strong> is the correct spelling. It is a conjunction used to introduce contrasts or comparisons between different things, ideas, or situations.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wheras</strong> is always incorrect. Remember to include the &quot;e&quot; after the &quot;wh&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 