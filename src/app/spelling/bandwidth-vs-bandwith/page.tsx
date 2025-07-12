import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bandwidth or Bandwith - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bandwidth&quot; and &quot;bandwith&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BandwidthVsBandwithPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bandwidth or Bandwith</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bandwidth&quot; and &quot;bandwith&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bandwith</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bandwith&quot; is a misspelling. The correct spelling is &quot;bandwidth&quot; with a &quot;d&quot; before &quot;th&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bandwidth</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bandwidth&quot; is the correct spelling. It refers to the range of frequencies or data transfer capacity.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bandwidth (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The range of frequencies or the amount of data that can be transmitted in a given time period.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The internet connection has high <strong>bandwidth</strong>.</li>
                  <li>• Streaming video requires significant <strong>bandwidth</strong>.</li>
                  <li>• The server&apos;s <strong>bandwidth</strong> was exceeded.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bandwith (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bandwith&quot; is a misspelling of &quot;bandwidth&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bandwith&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bandwidth</strong> when referring to data capacity.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bandwidth:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Data capacity</li>
                <li>• Transfer rate</li>
                <li>• Frequency range</li>
                <li>• Data throughput</li>
                <li>• Network capacity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bandwith:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Bandwidth</strong> is spelled with a &quot;d&quot; before &quot;th&quot;.</li>
          <li>• The word combines &quot;band&quot; (range) and &quot;width&quot; (measurement).</li>
          <li>• Used in telecommunications, computing, and signal processing.</li>
          <li>• Can refer to both frequency range and data transfer capacity.</li>
          <li>• &quot;Bandwith&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bandwith&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bandwith&quot; is never correct. The proper spelling is always &quot;bandwidth.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;band&quot; + &quot;width&quot; - like the width of a frequency band.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bandwidth and speed?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Bandwidth refers to capacity, while speed refers to how fast data travels through that capacity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bandwidth be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bandwidth&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bandwith&quot; likely occurs because of confusion about the &quot;d&quot; sound or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bandwidth&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: high bandwidth, low bandwidth, bandwidth limit, and bandwidth usage.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bandwidth</strong> is the correct spelling with a &quot;d&quot; before &quot;th&quot;. It refers to data transfer capacity or frequency range. The misspelling &quot;bandwith&quot; is never correct.</p>
      </div>
    </div>
  )
} 