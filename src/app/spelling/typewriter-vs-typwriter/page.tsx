import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Typewriter or Typwriter - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;typewriter&quot; and &quot;typwriter&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TypewriterVsTypwriterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Typewriter or Typwriter</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;typewriter&quot; and &quot;typwriter&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Typwriter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Typwriter&quot; is a misspelling. The correct spelling is &quot;typewriter&quot; with an &quot;e&quot; after &quot;typ&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Typewriter</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Typewriter&quot; is the correct spelling. It refers to a mechanical or electromechanical machine for writing characters similar to those produced by a printer&apos;s movable type.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Typewriter (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A mechanical or electromechanical machine for writing characters similar to those produced by a printer&apos;s movable type.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She used a <strong>typewriter</strong> to write her novel.</li>
                  <li>• The <strong>typewriter</strong> is now considered vintage.</li>
                  <li>• He learned to type on a <strong>typewriter</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Typwriter (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Typwriter&quot; is a misspelling of &quot;typewriter&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Typwriter&quot; is not used in standard English.</li>
                  <li>• Always use <strong>typewriter</strong> for the writing machine.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Typewriter:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Keyboard machine</li>
                <li>• Writing machine</li>
                <li>• Word processor (modern)</li>
                <li>• Manual typewriter</li>
                <li>• Electric typewriter</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Typwriter:</h4>
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
            <li>• <strong>Typewriter</strong> is spelled with an &quot;e&quot; after &quot;typ&quot;.</li>
            <li>• Used to describe a writing machine.</li>
            <li>• &quot;Typwriter&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;typwriter&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;typwriter&quot; is never correct. The proper spelling is always &quot;typewriter.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is an &quot;e&quot; after &quot;typ&quot; in &quot;typewriter.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does typewriter mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It refers to a mechanical or electromechanical machine for writing characters similar to those produced by a printer&apos;s movable type.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can typewriter be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;typewriter&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Typewriter</strong> is the correct spelling with an &quot;e&quot; after &quot;typ&quot;. It refers to a writing machine. The misspelling &quot;typwriter&quot; is never correct. Use &quot;typewriter&quot; for the writing device.</p>
      </div>
    </div>
  )
} 