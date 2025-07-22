import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Visiting or Visting - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;visiting&quot; and &quot;visting&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VisitingVsVistingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Visiting or Visting</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;visiting&quot; and &quot;visting&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Visting</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Visting&quot; is a misspelling. The correct spelling is &quot;visiting&quot; with two &quot;i&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Visiting</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Visiting&quot; is the correct spelling. It is the present participle of &quot;visit&quot;, meaning to go to see and spend time with someone or at a place.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Visiting (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Going to see and spend time with someone or at a place.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We are <strong>visiting</strong> our grandparents this weekend.</li>
                  <li>• She enjoys <strong>visiting</strong> art museums.</li>
                  <li>• He is <strong>visiting</strong> from out of town.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Visting (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Visting&quot; is a misspelling of &quot;visiting&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Visting&quot; is not used in standard English.</li>
                  <li>• Always use <strong>visiting</strong> when referring to going to see someone or someplace.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Visiting:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Calling on</li>
                <li>• Dropping by</li>
                <li>• Stopping in</li>
                <li>• Seeing</li>
                <li>• Attending</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Visting:</h4>
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
            <li>• <strong>Visiting</strong> is spelled with two &quot;i&quot;s.</li>
            <li>• It is the present participle of the verb &quot;visit&quot;.</li>
            <li>• &quot;Visting&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;visitare&quot; meaning &quot;to go to see&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;visting&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;visting&quot; is never correct. The proper spelling is always &quot;visiting&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;visiting&quot; has two &quot;i&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;visiting&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means going to see and spend time with someone or at a place.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;visiting&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;visiting&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;visiting&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;visting&quot; often happens by omitting the second &quot;i&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Visiting</strong> is the correct spelling, meaning going to see and spend time with someone or at a place. The misspelling &quot;visting&quot; is never correct. Always use &quot;visiting&quot; when referring to this action.</p>
      </div>
    </div>
  )
} 