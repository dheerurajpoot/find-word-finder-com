import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Capture or Captur - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;capture&quot; and &quot;captur&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaptureVsCapturPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Capture or Captur</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;capture&quot; and &quot;captur&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Captur</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Captur&quot; is a misspelling. The correct spelling is &quot;capture&quot; with &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Capture</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Capture&quot; is the correct spelling. It means to take someone or something by force or skill.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Capture (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To take someone or something by force, skill, or strategy; the act of capturing.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The police <strong>captured</strong> the suspect.</li>
                  <li>• The photograph <strong>captured</strong> the moment perfectly.</li>
                  <li>• The <strong>capture</strong> of the city was a major victory.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Captur (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Captur&quot; is a misspelling of &quot;capture&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Captur&quot; is not used in standard English.</li>
                  <li>• Always use <strong>capture</strong> when referring to taking or seizing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Capture:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Seize</li>
                <li>• Catch</li>
                <li>• Apprehend</li>
                <li>• Take</li>
                <li>• Secure</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Captur:</h4>
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
            <li>• <strong>Capture</strong> is spelled with &quot;e&quot; at the end, not just &quot;r.&quot;</li>
            <li>• The word comes from Latin &quot;captura&quot; meaning seizure.</li>
            <li>• Can be used as both a verb and a noun.</li>
            <li>• Often used in military, law enforcement, and photography contexts.</li>
            <li>• &quot;Captur&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;captur&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;captur&quot; is never correct. The proper spelling is always &quot;capture.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cap-ture&quot; - the word ends with &quot;e&quot; like many other English words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between capture and catch?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to taking something, but &quot;capture&quot; often implies more effort or strategy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;captur&quot; likely occurs because people forget the final &quot;e.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;capture&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: capture the moment, capture attention, and capture on film.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can capture be used in photography?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;capture&quot; is commonly used in photography to mean taking a picture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is capture only used for people?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;capture&quot; can be used for people, animals, places, or abstract concepts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word capture?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;captura&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Capture</strong> is the correct spelling with &quot;e&quot; at the end. It means to take someone or something by force, skill, or strategy. The misspelling &quot;captur&quot; is never correct. Use &quot;capture&quot; to describe taking, seizing, or recording in various contexts including law enforcement, photography, and military operations.</p>
      </div>
    </div>
  )
} 