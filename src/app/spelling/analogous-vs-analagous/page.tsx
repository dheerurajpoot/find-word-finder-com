import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Analogous or Analagous - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;analogous&quot; and &quot;analagous&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnalogousVsAnalagousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Analogous or Analagous</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;analogous&quot; and &quot;analagous&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Analagous</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Analagous&quot; is a misspelling. The correct spelling is &quot;analogous&quot; with an &quot;o&quot; after the &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Analogous</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Analogous&quot; is the correct spelling. It means comparable in certain respects, typically in a way that makes clearer the nature of the things compared.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Analogous (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Comparable in certain respects, typically in a way that makes clearer the nature of the things compared.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The wings of a bat are <strong>analogous</strong> to the wings of a bird.</li>
                  <li>• The two situations are <strong>analogous</strong> in many ways.</li>
                  <li>• The structure of an atom is <strong>analogous</strong> to the solar system.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Analagous (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Analagous&quot; is a misspelling of &quot;analogous&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Analagous&quot; is not used in standard English.</li>
                  <li>• Always use <strong>analogous</strong> when describing similarities.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Analogous:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Comparable</li>
                <li>• Similar</li>
                <li>• Parallel</li>
                <li>• Equivalent</li>
                <li>• Corresponding</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Analagous:</h4>
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
            <li>• <strong>Analogous</strong> is spelled with an &quot;o&quot; after the &quot;g&quot;.</li>
            <li>• Used to describe things that are similar or comparable.</li>
            <li>• The word comes from Greek &quot;analogos&quot; meaning &quot;proportionate&quot;.</li>
            <li>• &quot;Analagous&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;analagous&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;analagous&quot; is never correct. The proper spelling is always &quot;analogous.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;o&quot; after the &quot;g&quot; in &quot;analogous.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does analogous mean in science?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means two things have similar functions or structures but different origins.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;analagous&quot; occurs because people think it should have an &quot;a&quot; like &quot;analog&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Analogous</strong> is the correct spelling with an &quot;o&quot; after the &quot;g&quot;. It means comparable in certain respects. The misspelling &quot;analagous&quot; is never correct. Use &quot;analogous&quot; to describe similarities or comparisons.</p>
      </div>
    </div>
  )
} 