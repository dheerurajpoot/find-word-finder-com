import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beginning or Begening - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beginning&quot; and &quot;begening&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeginningVsBegeningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beginning or Begening</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beginning&quot; and &quot;begening&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Begening</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Begening&quot; is a misspelling. The correct spelling is &quot;beginning&quot; with double &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beginning</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beginning&quot; is the correct spelling. It means the start or commencement of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beginning (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The start or commencement of something; the first part or early stage.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>beginning</strong> of the movie was exciting.</li>
                  <li>• She&apos;s at the <strong>beginning</strong> of her career.</li>
                  <li>• In the <strong>beginning</strong>, everything was new.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Begening (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Begening&quot; is a misspelling of &quot;beginning&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Begening&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beginning</strong> when referring to the start of something.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beginning:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Start</li>
                <li>• Commencement</li>
                <li>• Onset</li>
                <li>• Outset</li>
                <li>• Genesis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Begening:</h4>
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
            <li>• <strong>Beginning</strong> is spelled with double &quot;n&quot; - this is the standard English spelling.</li>
            <li>• The word comes from the verb &quot;begin&quot; + the suffix &quot;-ing.&quot;</li>
            <li>• &quot;Begening&quot; is never correct in any context.</li>
            <li>• Used as a noun to refer to the start of something.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;begening&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;begening&quot; is never correct. The proper spelling is always &quot;beginning.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does beginning mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Beginning means the start or commencement of something, the first part or early stage.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;beginning&quot; has double &quot;n&quot; - think of &quot;begin&quot; + &quot;ning.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between beginning and start?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;beginning&quot; often refers to the first part, while &quot;start&quot; refers to the action of beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beginning be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beginning&quot; is only used as a noun. The verb form is &quot;begin.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with beginning?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beginning of the end, from the beginning, and new beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is beginning used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beginning&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beginning be plural?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beginnings&quot; is the correct plural form.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beginning</strong> is the correct spelling with double &quot;n&quot;. It means the start or commencement of something. The misspelling &quot;begening&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 