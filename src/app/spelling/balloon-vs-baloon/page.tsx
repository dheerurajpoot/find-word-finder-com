import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Balloon or Baloon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;balloon&quot; and &quot;baloon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BalloonVsBaloonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Balloon or Baloon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;balloon&quot; and &quot;baloon&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Baloon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Baloon&quot; is a misspelling. The correct spelling is &quot;balloon&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Balloon</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Balloon&quot; is the correct spelling. It refers to an inflatable rubber or plastic bag filled with air or gas.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Balloon (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An inflatable rubber or plastic bag filled with air or gas, used for decoration or transportation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The child held a red <strong>balloon</strong> at the carnival.</li>
                  <li>• Hot air <strong>balloon</strong> rides are popular tourist attractions.</li>
                  <li>• She decorated the room with a helium <strong>balloon</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Baloon (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Baloon&quot; is a misspelling of &quot;balloon&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Baloon&quot; is not used in standard English.</li>
                  <li>• Always use <strong>balloon</strong> when referring to inflatable objects.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Balloon:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Airship</li>
                <li>• Blimp</li>
                <li>• Inflatable</li>
                <li>• Floater</li>
                <li>• Decoration</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Baloon:</h4>
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
          <li>• <strong>Balloon</strong> is spelled with two &quot;l&quot;s.</li>
          <li>• The word comes from French &quot;ballon&quot; meaning large ball.</li>
          <li>• Used for decoration, transportation, and scientific purposes.</li>
          <li>• Can be filled with air, helium, or other gases.</li>
          <li>• &quot;Baloon&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;baloon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;baloon&quot; is never correct. The proper spelling is always &quot;balloon.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ball&quot; + &quot;oon&quot; - like a ball that floats in the air.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between balloon and balloons?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Balloon&quot; is singular (one), while &quot;balloons&quot; is plural (more than one).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can balloon be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;balloon&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;baloon&quot; likely occurs because of confusion about the double &quot;l&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;balloon&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: helium balloon, hot air balloon, water balloon, and birthday balloon.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Balloon</strong> is the correct spelling with two &quot;l&quot;s. It refers to an inflatable object filled with air or gas. The misspelling &quot;baloon&quot; is never correct.</p>
      </div>
    </div>
  )
} 