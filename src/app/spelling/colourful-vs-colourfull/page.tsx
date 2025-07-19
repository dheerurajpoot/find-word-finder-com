import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Colourful or Colourfull - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;colourful&quot; and &quot;colourfull&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ColourfulVsColourfullPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Colourful or Colourfull</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;colourful&quot; and &quot;colourfull&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Colourfull</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Colourfull&quot; is a misspelling. The correct spelling is &quot;colourful&quot; with one &quot;l&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Colourful</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Colourful&quot; is the correct British English spelling. It means full of color or having bright colors.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Colourful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Full of color; having bright or varied colors.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The garden is very <strong>&quot;colourful&quot;</strong> in spring.</li>
                  <li>• She wore a <strong>&quot;colourful&quot;</strong> dress to the party.</li>
                  <li>• The painting is extremely <strong>&quot;colourful&quot;</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Colourfull (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Colourfull&quot; is a misspelling of &quot;colourful&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Colourfull&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;colourful&quot;</strong> when referring to something full of color.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Colourful:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Vibrant</li>
                <li>• Bright</li>
                <li>• Vivid</li>
                <li>• Multicolored</li>
                <li>• Radiant</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Colourfull:</h4>
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
            <li>• <strong>&quot;Colourful&quot;</strong> is spelled with one &quot;l&quot; at the end.</li>
            <li>• Used to describe something full of color or having bright colors.</li>
            <li>• The word is the British English spelling; American English uses &quot;colorful&quot;.</li>
            <li>• &quot;Colourfull&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;colourfull&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;colourfull&quot; is never correct. The proper spelling is always &quot;colourful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is only one &quot;l&quot; at the end of &quot;colourful&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;colourful&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Colourful&quot; means full of color or having bright colors.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;colourfull&quot; may occur due to doubling the &quot;l&quot; at the end by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Colourful&quot;</strong> is the correct British English spelling with one &quot;l&quot; at the end. It means full of color or having bright colors. The misspelling &quot;colourfull&quot; is never correct. Use &quot;colourful&quot; in all contexts.</p>
      </div>
    </div>
  )
} 