import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wednesday or Wendsday - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Wednesday&quot; and &quot;Wendsday&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WednesdayVsWendsdayPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wednesday or Wendsday</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Wednesday&quot; and &quot;Wendsday&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wendsday</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wendsday&quot; is a misspelling. The correct spelling is &quot;Wednesday&quot; with an &quot;e&quot; after the &quot;d&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wednesday</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wednesday&quot; is the correct spelling. It is the name of the third day of the week.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wednesday</strong> is the correct spelling. It is the name of the third day of the week, falling between Tuesday and Thursday.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wendsday</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wednesday (proper noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The third day of the week, following Tuesday and preceding Thursday.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Origin</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Named after the Norse god Odin (Woden), from Old English &quot;Wōdnesdæg&quot; meaning &quot;Woden&apos;s day&quot;.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to the specific day of the week, often abbreviated as &quot;Wed.&quot;
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I have a meeting on <span className="text-green-600 font-semibold">Wednesday</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">Wednesday</span> is hump day!&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The event is scheduled for next <span className="text-green-600 font-semibold">Wednesday</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I have a meeting on <span className="text-red-600 font-semibold">Wendsday</span>&quot; (should be &quot;Wednesday&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Abbreviations:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Wed.</li>
                <li>• Weds.</li>
                <li>• W</li>
                <li>• 3rd day</li>
                <li>• Midweek</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Related terms:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Hump day</li>
                <li>• Midweek</li>
                <li>• Workday</li>
                <li>• Weekday</li>
                <li>• Business day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wednesday&quot; is spelled with an &quot;e&quot; after the &quot;d&quot;</li>
          <li>• The &quot;d&quot; is silent in pronunciation</li>
          <li>• Named after the Norse god Odin (Woden)</li>
          <li>• Often called &quot;hump day&quot; as it&apos;s the middle of the workweek</li>
          <li>• Commonly abbreviated as &quot;Wed.&quot;</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;Wendsday&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;Wendsday&quot; is never correct. The correct spelling is always &quot;Wednesday&quot; with an &quot;e&quot; after the &quot;d&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;Wednesday&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WENZ-day&quot; with the &quot;d&quot; being silent.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;Wednesday&quot; and &quot;Wendsday&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wednesday&quot; is the correct spelling meaning the third day of the week, while &quot;Wendsday&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Why is the &quot;d&quot; silent in &quot;Wednesday&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">The &quot;d&quot; became silent over time due to phonetic changes in the English language, but it remains in the spelling for historical reasons.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;Wednesday&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly spell it as &quot;Wendsday&quot;, possibly because they forget the &quot;e&quot; after the &quot;d&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wednesday</strong> is the correct spelling. It is the name of the third day of the week, named after the Norse god Odin.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wendsday</strong> is always incorrect. Remember to include the &quot;e&quot; after the &quot;d&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 