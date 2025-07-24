import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Unprecedented or Unpresidented - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;unprecedented&quot; and &quot;unpresidented&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UnprecedentedVsUnpresidentedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Unprecedented or Unpresidented</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;unprecedented&quot; and &quot;unpresidented&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Unpresidented</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Unpresidented&quot; is a misspelling. The correct spelling is &quot;unprecedented&quot; with a &quot;c&quot; after the &quot;pre&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Unprecedented</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Unprecedented&quot; is the correct spelling. It means never done or known before; without previous example.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Unprecedented (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Never done or known before; having no previous example.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The pandemic created <strong>unprecedented</strong> challenges.</li>
                  <li>• The company saw <strong>unprecedented</strong> growth last year.</li>
                  <li>• This is an <strong>unprecedented</strong> opportunity.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Unpresidented (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Unpresidented&quot; is a misspelling of &quot;unprecedented&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Unpresidented&quot; is not used in standard English.</li>
                  <li>• Always use <strong>unprecedented</strong> when describing something never done before.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Unprecedented:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Extraordinary</li>
                <li>• Unique</li>
                <li>• Exceptional</li>
                <li>• Groundbreaking</li>
                <li>• Novel</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Unpresidented:</h4>
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
            <li>• <strong>Unprecedented</strong> is spelled with a &quot;c&quot; after &quot;pre&quot;.</li>
            <li>• Used to describe something that has never happened before.</li>
            <li>• &quot;Unpresidented&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;unpresidented&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;unpresidented&quot; is never correct. The proper spelling is always &quot;unprecedented.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;c&quot; after &quot;pre&quot; in &quot;unprecedented.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does unprecedented mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means never done or known before; without previous example.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can unprecedented be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;unprecedented&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Unprecedented</strong> is the correct spelling with a &quot;c&quot; after &quot;pre&quot;. It means never done or known before. The misspelling &quot;unpresidented&quot; is never correct. Use &quot;unprecedented&quot; to describe something unique or extraordinary.</p>
      </div>
    </div>
  )
} 