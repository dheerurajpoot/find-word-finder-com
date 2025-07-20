import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Watch or Wach - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;watch&quot; and &quot;wach&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WatchVsWachPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Watch or Wach</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;watch&quot; and &quot;wach&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wach</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wach&quot; is a misspelling. The correct spelling is &quot;watch&quot; with a &quot;t&quot; before the &quot;c&quot; and &quot;h&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Watch</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Watch&quot; is the correct spelling. It refers to a timepiece or the act of observing attentively.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Watch</strong> is the correct spelling. It is both a noun (a timepiece) and a verb (to observe attentively).
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wach</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Watch (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A small timepiece worn typically on the wrist or carried in a pocket.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Watch (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To look at or observe attentively over a period of time.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to both the device for telling time and the act of observing or monitoring.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He wears a <span className="text-green-600 font-semibold">watch</span> on his wrist.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She likes to <span className="text-green-600 font-semibold">watch</span> the sunrise.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">watch</span> stopped working.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He wears a <span className="text-red-600 font-semibold">wach</span> on his wrist&quot; (should be &quot;watch&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For timepiece:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Timepiece</li>
                <li>• Wristwatch</li>
                <li>• Chronometer</li>
                <li>• Clock</li>
                <li>• Timer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For observing:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Observe</li>
                <li>• View</li>
                <li>• Monitor</li>
                <li>• Look at</li>
                <li>• Survey</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Watch&quot; is spelled with a &quot;t&quot; before the &quot;c&quot; and &quot;h&quot;</li>
          <li>• It is both a noun and a verb</li>
          <li>• The word comes from Old English &quot;wæcce&quot;</li>
          <li>• Used for both timepieces and the act of observing</li>
          <li>• &quot;Wach&quot; is never correct in English</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wach&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wach&quot; is never correct. The correct spelling is always &quot;watch&quot; with a &quot;t&quot; before the &quot;c&quot; and &quot;h&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;watch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WOTCH&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Why is it &quot;watch&quot; and not &quot;wach&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">The correct spelling includes a &quot;t&quot; before the &quot;c&quot; and &quot;h&quot; due to its Old English origins.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;watch&quot; be used as both a noun and a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;watch&quot; can refer to a timepiece or the act of observing attentively.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;watch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wach&quot;, possibly because they omit the "t". This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Watch</strong> is the correct spelling. It is both a noun (a timepiece) and a verb (to observe attentively).
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wach</strong> is always incorrect. Remember to include the "t" before the "c" and "h" when writing this word.
        </p>
      </div>
    </div>
  )
} 