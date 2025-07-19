import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Clock or Clok - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;clock&quot; and &quot;clok&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ClockVsClokPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Clock or Clok</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;clock&quot; and &quot;clok&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Clok</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Clok&quot; is a misspelling. The correct spelling is &quot;clock&quot; with a &quot;c&quot; and a &quot;k&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Clock</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Clock&quot; is the correct spelling. It refers to a device for measuring and indicating time.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Clock (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A device for measuring and indicating time, typically by means of hands moving on a dial or a digital display.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>&quot;clock&quot;</strong> on the wall shows the correct time.</li>
                  <li>• Set your <strong>&quot;clock&quot;</strong> for 7 a.m.</li>
                  <li>• The alarm <strong>&quot;clock&quot;</strong> woke me up.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Clok (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Clok&quot; is a misspelling of &quot;clock&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Clok&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;clock&quot;</strong> when referring to a timekeeping device.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Clock:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Timepiece</li>
                <li>• Watch</li>
                <li>• Timer</li>
                <li>• Chronometer</li>
                <li>• Alarm</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Clok:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Clock</strong> is spelled with a &quot;c&quot; and a &quot;k&quot; at the end.</li>
            <li>• Used to describe devices for measuring and indicating time.</li>
            <li>• The word comes from Middle Dutch &quot;clocke&quot; meaning &quot;bell&quot;.</li>
            <li>• &quot;Clok&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;clok&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;clok&quot; is never correct. The proper spelling is always &quot;clock.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;c&quot; at the start and the &quot;k&quot; at the end in &quot;clock&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;clock&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A &quot;clock&quot; is a device for measuring and indicating time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;clok&quot; may occur due to omitting the &quot;c&quot; or &quot;k&quot; by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Clock</strong> is the correct spelling with a &quot;c&quot; and a &quot;k&quot; at the end. It refers to a device for measuring and indicating time. The misspelling &quot;clok&quot; is never correct. Use &quot;clock&quot; in all contexts.</p>
      </div>
    </div>
  )
} 