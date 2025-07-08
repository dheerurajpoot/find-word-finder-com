import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amongst or Amoungst - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amongst&quot; and &quot;amoungst&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmongstVsAmoungstPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amongst or Amoungst</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amongst&quot; and &quot;amoungst&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amoungst</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amoungst&quot; is a misspelling. The correct spelling is &quot;amongst&quot; without a &quot;u&quot; after the &quot;mo&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amongst</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amongst&quot; is the correct spelling. It means in the middle of or surrounded by; among.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amongst (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In the middle of or surrounded by; among.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She was <strong>amongst</strong> friends.</li>
                  <li>• The treasure was hidden <strong>amongst</strong> the rocks.</li>
                  <li>• He felt comfortable <strong>amongst</strong> his peers.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amoungst (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amoungst&quot; is a misspelling of &quot;amongst&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amoungst&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amongst</strong> when referring to being in the middle of a group.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amongst:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Amidst</li>
                <li>• Amid</li>
                <li>• Surrounded by</li>
                <li>• In the middle of</li>
                <li>• Among</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amoungst:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Amongst</strong> is spelled without a &quot;u&quot; after the &quot;mo&quot;.</li>
            <li>• Used to describe being in the middle of or surrounded by a group.</li>
            <li>• The word comes from Old English &quot;gemang&quot; meaning &quot;mingling&quot;.</li>
            <li>• &quot;Amoungst&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amoungst&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amoungst&quot; is never correct. The proper spelling is always &quot;amongst.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is no &quot;u&quot; after the &quot;mo&quot; in &quot;amongst.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amongst and among?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean the same, but &quot;amongst&quot; is more common in British English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amongst be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amongst&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;amoungst&quot; occurs because people think it should have a &quot;u&quot; like &quot;colour&quot; or &quot;favour&quot; in British English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amongst</strong> is the correct spelling without a &quot;u&quot; after the &quot;mo&quot;. It means in the middle of or surrounded by. The misspelling &quot;amoungst&quot; is never correct. Use &quot;amongst&quot; in all contexts requiring this meaning.</p>
      </div>
    </div>
  )
} 