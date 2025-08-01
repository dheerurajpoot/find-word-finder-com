import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Then or Thne - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;then&quot; and &quot;thne&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThenVsThnePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Then or Thne</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;then&quot; and &quot;thne&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thne</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thne&quot; is a misspelling. The correct spelling is &quot;then&quot; with the letters in the right order.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Then</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Then&quot; is the correct spelling. It means at that time or next in sequence.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Then (adverb/conjunction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">At that time; next in sequence; in that case; therefore.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I was young <strong>then</strong>.</li>
                  <li>• First we eat, <strong>then</strong> we go.</li>
                  <li>• If it rains, <strong>then</strong> we&apos;ll stay home.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thne (adverb/conjunction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thne&quot; is a misspelling of &quot;then&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thne&quot; is not used in standard English.</li>
                  <li>• Always use <strong>then</strong> when referring to time or sequence.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Then:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• At that time</li>
                <li>• Next</li>
                <li>• Subsequently</li>
                <li>• Therefore</li>
                <li>• In that case</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thne:</h4>
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
            <li>• <strong>Then</strong> is spelled with the letters in the correct order: t-h-e-n.</li>
            <li>• It is a very common word used for time and sequence.</li>
            <li>• &quot;Thne&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þanne&quot; meaning &quot;then.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thne&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thne&quot; is never correct. The proper spelling is always &quot;then.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;then&quot; has the letters in the correct order: t-h-e-n.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;then&quot; and &quot;than&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Then&quot; refers to time or sequence, while &quot;than&quot; is used for comparisons.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;then&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;then&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;then&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thne&quot; often happens by transposing the letters &quot;e&quot; and &quot;n.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;then&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: back then, every now and then, then again, and if then.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;then&quot; always about time?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;then&quot; can refer to time, sequence, or logical consequence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;then&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;then&quot; is only used as an adverb or conjunction.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Then</strong> is the correct spelling with the letters in the right order: t-h-e-n. It means at that time, next in sequence, or in that case. The misspelling &quot;thne&quot; is never correct. Always use &quot;then&quot; when referring to time, sequence, or logical consequence.</p>
      </div>
    </div>
  )
} 