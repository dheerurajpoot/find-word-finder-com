import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Basically or Basicaly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;basically&quot; and &quot;basicaly&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BasicallyVsBasicalyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Basically or Basicaly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;basically&quot; and &quot;basicaly&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Basicaly</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Basicaly&quot; is a misspelling. The correct spelling is &quot;basically&quot; with two &quot;l&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Basically</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Basically&quot; is the correct spelling. It means in the most fundamental way or essentially.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Basically (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In the most fundamental way; essentially; in simple terms.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Basically</strong>, the project is complete.</li>
                  <li>• It&apos;s <strong>basically</strong> the same thing.</li>
                  <li>• <strong>Basically</strong>, we need to start over.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Basicaly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Basicaly&quot; is a misspelling of &quot;basically&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Basicaly&quot; is not used in standard English.</li>
                  <li>• Always use <strong>basically</strong> when referring to fundamental aspects.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Basically:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Essentially</li>
                <li>• Fundamentally</li>
                <li>• Essentially</li>
                <li>• In essence</li>
                <li>• At heart</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Basicaly:</h4>
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
          <li>• <strong>Basically</strong> is spelled with two &quot;l&quot;s, not one.</li>
          <li>• The word comes from &quot;basic&quot; + &quot;ally&quot; suffix.</li>
          <li>• Used to introduce simplified explanations or summaries.</li>
          <li>• Often used as a filler word in speech and informal writing.</li>
          <li>• &quot;Basicaly&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;basicaly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;basicaly&quot; is never correct. The proper spelling is always &quot;basically.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;basic&quot; + &quot;ally&quot; - like other adverbs ending in &quot;ally&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between basically and essentially?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are very similar, but &quot;essentially&quot; is more formal than &quot;basically.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can basically be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While acceptable, &quot;essentially&quot; or &quot;fundamentally&quot; are often preferred in formal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;basicaly&quot; likely occurs because of confusion about the double &quot;l&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;basically&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: basically speaking, basically the same, and basically done.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Basically</strong> is the correct spelling with two &quot;l&quot;s. It means in the most fundamental way or essentially. The misspelling &quot;basicaly&quot; is never correct.</p>
      </div>
    </div>
  )
} 