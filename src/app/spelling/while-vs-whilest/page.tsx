import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'While or Whilest - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;while&quot; and &quot;whilest&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhileVsWhilestPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">While or Whilest</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;while&quot; and &quot;whilest&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Whilest</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Whilest&quot; is a misspelling. The correct spelling is &quot;while&quot; without the &quot;st&quot; ending.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: While</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;While&quot; is the correct spelling. It refers to a period of time or is used as a conjunction to indicate contrast or time.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>While</strong> is the correct spelling. It can be used as a noun to refer to a period of time, or as a conjunction to indicate contrast or time relationships.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whilest</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">While (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A period of time, especially a short one.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">While (conjunction)</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Used to indicate a contrast or to show that something happens during the time that something else is happening.
            </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">While (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700">
            To pass time in a leisurely manner.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I&apos;ll wait here for a <span className="text-green-600 font-semibold">while</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;<span className="text-green-600 font-semibold">While</span> I was cooking, the phone rang.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She likes coffee, <span className="text-green-600 font-semibold">while</span> I prefer tea.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I&apos;ll wait here for a <span className="text-red-600 font-semibold">whilest</span>&quot; (should be &quot;while&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For time period:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Time</li>
                <li>• Period</li>
                <li>• Spell</li>
                <li>• Interval</li>
                <li>• Duration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For contrast:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Whereas</li>
                <li>• However</li>
                <li>• Although</li>
                <li>• Though</li>
                <li>• But</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;While&quot; is always spelled without the &quot;st&quot; ending</li>
          <li>• The word comes from Old English &quot;hwīl&quot;</li>
          <li>• It can be used as a noun, conjunction, or verb</li>
          <li>• &quot;Whilst&quot; is an archaic or British variant of &quot;while&quot;</li>
          <li>• In modern American English, &quot;while&quot; is the standard spelling</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whilest&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;whilest&quot; is never correct. The correct spelling is always &quot;while&quot; without the &quot;st&quot; ending.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What about &quot;whilst&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whilst&quot; is an archaic or British variant of &quot;while&quot; that is still used in some contexts, but &quot;while&quot; is the standard spelling in modern American English.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;while&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WHY-ul&quot; with a long &quot;i&quot; sound, not &quot;WHILST&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;while&quot; be used in different ways?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;while&quot; can be used as a noun (a period of time), a conjunction (to show contrast or time), or a verb (to pass time leisurely).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;while&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly add &quot;st&quot; and spell it as &quot;whilest&quot;, possibly confusing it with the archaic &quot;whilst&quot; or other words ending in &quot;st&quot;.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>While</strong> is the correct spelling. It can be used as a noun to refer to a period of time, or as a conjunction to indicate contrast or time relationships.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whilest</strong> is always incorrect. Remember to use &quot;while&quot; without the &quot;st&quot; ending.
        </p>
      </div>
    </div>
  )
} 