import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bright or Brite - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bright&quot; and &quot;brite&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BrightVsBritePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bright or Brite</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bright&quot; and &quot;brite&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brite</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Brite&quot; is a misspelling. The correct spelling is &quot;bright&quot; with &quot;gh&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bright</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bright&quot; is the correct spelling. It refers to giving off or reflecting much light.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bright (adjective/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Giving off or reflecting much light; intelligent or quick-witted; cheerful and lively.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>bright</strong> sun shone down.</li>
                  <li>• She has a <strong>bright</strong> future ahead.</li>
                  <li>• The colors are <strong>bright</strong> and vibrant.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Brite (adjective/adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Brite&quot; is a misspelling of &quot;bright&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Brite&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bright</strong> when referring to light or intelligence.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bright:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Luminous</li>
                <li>• Radiant</li>
                <li>• Intelligent</li>
                <li>• Cheerful</li>
                <li>• Vivid</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Brite:</h4>
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
            <li>• <strong>Bright</strong> is spelled with &quot;gh&quot;, not just &quot;t&quot;.</li>
            <li>• The word comes from Old English &quot;beorht&quot; meaning bright.</li>
            <li>• Can be used as both an adjective and an adverb.</li>
            <li>• Common in descriptions of light, intelligence, and mood.</li>
            <li>• &quot;Brite&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brite&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;brite&quot; is never correct. The proper spelling is always &quot;bright.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;br&quot; + &quot;ight&quot; - the word has &quot;gh&quot; like &quot;light&quot; or &quot;night.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bright and light?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bright&quot; describes the intensity of light, while &quot;light&quot; refers to the illumination itself.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bright be used as an adverb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bright&quot; can be used as an adverb meaning brightly, as in &quot;The stars shone bright.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of the silent &quot;gh&quot; in the pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bright&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bright and early, bright idea, bright side, bright future, and bright colors.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bright</strong> is the correct spelling with &quot;gh&quot;. It refers to giving off or reflecting much light, being intelligent, or being cheerful. The misspelling &quot;brite&quot; is never correct. Use &quot;bright&quot; when describing light intensity, intelligence, or positive qualities.</p>
      </div>
    </div>
  )
} 