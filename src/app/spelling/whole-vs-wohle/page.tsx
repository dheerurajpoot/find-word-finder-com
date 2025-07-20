import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whole or Wohle - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whole&quot; and &quot;wohle&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WholeVsWohlePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whole or Wohle</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whole&quot; and &quot;wohle&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wohle</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wohle&quot; is a misspelling. The correct spelling is &quot;whole&quot; with an &quot;h&quot; before the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whole</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whole&quot; is the correct spelling. It means complete, entire, or undivided.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whole</strong> is the correct spelling. It is an adjective meaning complete, entire, or undivided.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wohle</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whole (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Complete, entire, or undivided; not broken or damaged; all of something.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whole (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A complete thing or amount; the entire quantity or extent.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe something that is complete, undivided, or in its entirety.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I ate the <span className="text-green-600 font-semibold">whole</span> pizza.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">whole</span> family came to visit.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She spent the <span className="text-green-600 font-semibold">whole</span> day reading.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I ate the <span className="text-red-600 font-semibold">wohle</span> pizza&quot; (should be &quot;whole&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For complete:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Complete</li>
                <li>• Entire</li>
                <li>• Full</li>
                <li>• Total</li>
                <li>• All</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For undivided:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Undivided</li>
                <li>• Intact</li>
                <li>• Unbroken</li>
                <li>• Perfect</li>
                <li>• Unimpaired</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whole&quot; is spelled with an &quot;h&quot; before the &quot;l&quot;</li>
          <li>• It is both an adjective and a noun</li>
          <li>• The word comes from Old English &quot;hāl&quot;</li>
          <li>• Often used to emphasize completeness</li>
          <li>• Can be used in various contexts</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wohle&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wohle&quot; is never correct. The correct spelling is always &quot;whole&quot; with an &quot;h&quot; before the &quot;l&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whole&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;HOHL&quot; with a long &quot;o&quot; sound.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whole&quot; and &quot;wohle&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whole&quot; is the correct spelling meaning complete or entire, while &quot;wohle&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whole&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whole&quot; can describe complete amounts, entire groups, undivided objects, or full quantities in various contexts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whole&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wohle&quot;, possibly because they forget the &quot;h&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whole</strong> is the correct spelling. It is an adjective and noun meaning complete, entire, or undivided.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wohle</strong> is always incorrect. Remember to include the &quot;h&quot; before the &quot;l&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 