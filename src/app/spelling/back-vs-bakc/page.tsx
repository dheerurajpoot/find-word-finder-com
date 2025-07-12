import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Back or Bakc - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;back&quot; and &quot;bakc&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BackVsBakcPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Back or Bakc</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;back&quot; and &quot;bakc&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bakc</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bakc&quot; is a misspelling. The correct spelling is &quot;back&quot; with a &quot;c&quot; before the &quot;k&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Back</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Back&quot; is the correct spelling. It means the rear part of something or to return to a previous position.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Back (noun/adverb/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The rear part of something; to return to a previous position; to support or endorse.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He sat in the <strong>back</strong> of the car.</li>
                  <li>• I&apos;ll be <strong>back</strong> in an hour.</li>
                  <li>• She <strong>backed</strong> the project with her own money.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bakc (noun/adverb/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bakc&quot; is a misspelling of &quot;back&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bakc&quot; is not used in standard English.</li>
                  <li>• Always use <strong>back</strong> when referring to the rear or returning.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Back:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Rear</li>
                <li>• Behind</li>
                <li>• Return</li>
                <li>• Support</li>
                <li>• Endorse</li>
                <li>• Reverse</li>
                <li>• Backward</li>
                <li>• Posterior</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bakc:</h4>
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
          <li>• <strong>Back</strong> is spelled with a &quot;c&quot; before the &quot;k&quot;, not &quot;bakc.&quot;</li>
          <li>• The word comes from Old English &quot;bæc&quot; meaning the rear part.</li>
          <li>• Can be used as a noun, adverb, verb, or adjective.</li>
          <li>• One of the most common words in English with many meanings.</li>
          <li>• &quot;Bakc&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bakc&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bakc&quot; is never correct. The proper spelling is always &quot;back&quot; with a &quot;c&quot; before the &quot;k.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;b-a-c-k&quot; - the letters in alphabetical order: b, a, c, k.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between back and behind?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Back&quot; refers to the rear part of something, while &quot;behind&quot; means at the rear of or following something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can back be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;back&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bakc&quot; likely occurs because of typing errors or confusion about letter order.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;back&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: back and forth, back to back, back up, back down, and back off.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is back always about physical position?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;back&quot; can refer to physical position, time (back then), support (back a project), or many other meanings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the opposite of back?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The opposite of &quot;back&quot; is &quot;front&quot; - the forward or anterior part of something.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Back</strong> is the correct spelling with a &quot;c&quot; before the &quot;k&quot;. It means the rear part of something or to return to a previous position. The misspelling &quot;bakc&quot; is never correct. Use &quot;back&quot; to describe position, movement, support, or many other concepts in any context.</p>
      </div>
    </div>
  )
} 