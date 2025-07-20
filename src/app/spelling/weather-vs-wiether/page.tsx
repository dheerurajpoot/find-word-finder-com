import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Weather or Wiether - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;weather&quot; and &quot;wiether&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WeatherVsWietherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Weather or Wiether</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;weather&quot; and &quot;wiether&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wiether</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wiether&quot; is a misspelling. The correct spelling is &quot;weather&quot; with &quot;ea&quot; not &quot;ie&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Weather</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Weather&quot; is the correct spelling. It refers to the atmospheric conditions at a particular time and place.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weather</strong> is the correct spelling. It is a noun referring to the atmospheric conditions and meteorological phenomena.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wiether</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weather (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The state of the atmosphere at a particular time and place, including temperature, humidity, precipitation, wind, and other meteorological conditions.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Weather (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To wear away or change the appearance of something through exposure to the elements.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe atmospheric conditions and can also mean to endure or survive difficult conditions.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">weather</span> is beautiful today.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Check the <span className="text-green-600 font-semibold">weather</span> forecast before going out.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The old building has <span className="text-green-600 font-semibold">weathered</span> many storms.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">wiether</span> is beautiful today&quot; (should be &quot;weather&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For conditions:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Climate</li>
                <li>• Conditions</li>
                <li>• Elements</li>
                <li>• Atmosphere</li>
                <li>• Environment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For endure:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Endure</li>
                <li>• Survive</li>
                <li>• Withstand</li>
                <li>• Overcome</li>
                <li>• Brave</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Weather&quot; is spelled with &quot;ea&quot; not &quot;ie&quot;</li>
          <li>• The word comes from Old English &quot;weder&quot; meaning &quot;weather&quot;</li>
          <li>• Can be used as both a noun and a verb</li>
          <li>• Often confused with &quot;whether&quot; (conjunction)</li>
          <li>• Commonly used in daily conversation and forecasts</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wiether&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wiether&quot; is never correct. The correct spelling is always &quot;weather&quot; with &quot;ea&quot; not &quot;ie&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;weather&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEH-ther&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;weather&quot; and &quot;wiether&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Weather&quot; is the correct spelling meaning atmospheric conditions, while &quot;wiether&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;weather&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;weather&quot; can be used as a verb meaning to wear away or endure difficult conditions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;weather&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wiether&quot;, possibly because they confuse it with other words or follow incorrect spelling patterns. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Weather</strong> is the correct spelling. It is a noun referring to atmospheric conditions and can also be used as a verb meaning to endure.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wiether</strong> is always incorrect. Remember to use &quot;ea&quot; not &quot;ie&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 