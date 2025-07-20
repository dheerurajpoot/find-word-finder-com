import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Commitment or Committment - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;commitment&quot; and &quot;committment&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommitmentVsCommittmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Commitment or Committment</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;commitment&quot; and &quot;committment&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Committment</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Committment&quot; is a misspelling. The correct spelling is &quot;commitment&quot; with one &quot;t&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Commitment</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Commitment&quot; is the correct spelling. It means the state or quality of being dedicated to a cause, activity, etc.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Commitment (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The state or quality of being dedicated to a cause, activity, etc.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The company&apos;s commitment to quality</li>
                  <li>• I could not fault my players for commitment</li>
                  <li>• She showed great commitment to her studies</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Committment (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Committment&quot; is a misspelling of &quot;commitment&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Committment&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;commitment&quot;</strong> when referring to dedication or loyalty.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Commitment:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Dedication</li>
                <li>• Devotion</li>
                <li>• Allegiance</li>
                <li>• Loyalty</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Committment:</h4>
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
            <li>• <strong>&quot;Commitment&quot;</strong> is spelled with one &quot;t&quot; in the middle, not two.</li>
            <li>• Used to describe dedication to a cause, activity, or person.</li>
            <li>• The word is the same in both American and British English.</li>
            <li>• &quot;Committment&quot; is never correct in any context.</li>
            <li>• Remember: com-mit-ment (break it down to remember the single &quot;t&quot; in the middle).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;committment&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;committment&quot; is never correct. The proper spelling is always &quot;commitment&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Break it down as &quot;com-mit-ment&quot; to remember the single &quot;t&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;commitment&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The state or quality of being dedicated to a cause, activity, or person.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is the spelling the same in American and British English?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;commitment&quot; is spelled the same in both American and British English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Commitment&quot;</strong> is the correct spelling with one &quot;t&quot; in the middle. It refers to the state or quality of being dedicated to a cause, activity, or person. The misspelling &quot;committment&quot; is never correct. Use &quot;commitment&quot; in all formal and informal writing.</p>
      </div>
    </div>
  )
} 