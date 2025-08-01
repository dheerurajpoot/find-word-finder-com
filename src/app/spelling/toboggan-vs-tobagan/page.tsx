import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Toboggan or Tobagan - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;toboggan&quot; and &quot;tobagan&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TobogganVsTobaganPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Toboggan or Tobagan</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;toboggan&quot; and &quot;tobagan&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tobagan</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tobagan&quot; is a misspelling. The correct spelling is &quot;toboggan&quot; with two &quot;g&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Toboggan</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Toboggan&quot; is the correct spelling. It means a long, narrow sled for sliding on snow.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Toboggan (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A long, narrow sled without runners, used for sliding on snow.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We rode the <strong>toboggan</strong> down the hill.</li>
                  <li>• The children built a <strong>toboggan</strong> run.</li>
                  <li>• He bought a new <strong>toboggan</strong> for winter.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tobagan (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tobagan&quot; is a misspelling of &quot;toboggan&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tobagan&quot; is not used in standard English.</li>
                  <li>• Always use <strong>toboggan</strong> when referring to snow sleds.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Toboggan:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Sled</li>
                <li>• Sledge</li>
                <li>• Snow sled</li>
                <li>• Winter sled</li>
                <li>• Snow vehicle</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tobagan:</h4>
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
            <li>• <strong>Toboggan</strong> is spelled with two &quot;g&quot;s, not one.</li>
            <li>• It refers specifically to a long, narrow sled without runners.</li>
            <li>• &quot;Tobagan&quot; is never correct in any context.</li>
            <li>• The word comes from Algonquian &quot;tobakun&quot; meaning &quot;sled.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tobagan&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tobagan&quot; is never correct. The proper spelling is always &quot;toboggan.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;toboggan&quot; has two &quot;g&quot;s - think of it as &quot;to-bog-gan.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a toboggan and a sled?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A toboggan is a specific type of sled - long and narrow without runners, while sled is a more general term.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;toboggan&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;toboggan&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;toboggan&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tobagan&quot; often happens by omitting the second &quot;g&quot; due to pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;toboggan&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: toboggan run, toboggan hill, toboggan ride, and toboggan race.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;toboggan&quot; always about snow?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;toboggan&quot; always refers to a sled used for sliding on snow or ice.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;toboggan&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;toboggan&quot; can be used as a verb meaning to ride on a toboggan.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Toboggan</strong> is the correct spelling with two &quot;g&quot;s. It means a long, narrow sled for sliding on snow. The misspelling &quot;tobagan&quot; is never correct. Always use &quot;toboggan&quot; when referring to snow sleds.</p>
      </div>
    </div>
  )
} 