import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Three or Threee - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;three&quot; and &quot;threee&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThreeVsThreeePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Three or Threee</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;three&quot; and &quot;threee&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Threee</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Threee&quot; is a misspelling. The correct spelling is &quot;three&quot; with two &quot;e&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Three</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Three&quot; is the correct spelling. It means the number 3.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Three (number):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The number 3; one more than two and one less than four.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I have <strong>three</strong> apples.</li>
                  <li>• The meeting starts at <strong>three</strong> o&apos;clock.</li>
                  <li>• There are <strong>three</strong> people in the room.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Threee (number):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Threee&quot; is a misspelling of &quot;three&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Threee&quot; is not used in standard English.</li>
                  <li>• Always use <strong>three</strong> when referring to the number 3.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Three:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• 3</li>
                <li>• Trio</li>
                <li>• Threesome</li>
                <li>• Trinity</li>
                <li>• Triple</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Threee:</h4>
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
            <li>• <strong>Three</strong> is spelled with two &quot;e&quot;s, not three.</li>
            <li>• It is a cardinal number representing the quantity 3.</li>
            <li>• &quot;Threee&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þrīe&quot; meaning &quot;three.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;threee&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;threee&quot; is never correct. The proper spelling is always &quot;three.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;three&quot; has two &quot;e&quot;s - think of it as &quot;th-ree.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;three&quot; and &quot;third&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Three&quot; is a cardinal number (3), while &quot;third&quot; is an ordinal number (3rd).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;three&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;three&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;three&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;threee&quot; often happens by adding an extra &quot;e&quot; due to typing errors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;three&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: three times, three of a kind, three strikes, and three cheers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;three&quot; always a number?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;three&quot; is always used as a number or to represent the quantity 3.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;three&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;three&quot; is only used as a number or noun.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Three</strong> is the correct spelling with two &quot;e&quot;s. It means the number 3. The misspelling &quot;threee&quot; is never correct. Always use &quot;three&quot; when referring to the number 3 or quantities of three.</p>
      </div>
    </div>
  )
} 