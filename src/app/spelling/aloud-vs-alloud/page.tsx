import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aloud or Alloud - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;aloud&quot; and &quot;alloud&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AloudVsAlloudPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Aloud or Alloud</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;aloud&quot; and &quot;alloud&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alloud</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alloud&quot; is a common misspelling. The correct spelling is &quot;aloud&quot; with a single &apos;l&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Aloud</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Aloud&quot; is the correct spelling. It means spoken or read in a voice that can be heard; not silently.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Aloud (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Spoken or read in a voice that can be heard; not silently.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Please read the passage <strong>aloud</strong>.</li>
                  <li>• She laughed <strong>aloud</strong> at the joke.</li>
                  <li>• He spoke <strong>aloud</strong> to himself.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alloud (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alloud&quot; is not a standard English word and is considered a misspelling of &quot;aloud&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alloud&quot; is not used in standard English for &quot;aloud&quot;.</li>
                  <li>• Always use <strong>aloud</strong> when referring to speaking or reading in a voice that can be heard.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Aloud:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Audibly</li>
                <li>• Out loud</li>
                <li>• Vocally</li>
                <li>• Clearly</li>
                <li>• Expressly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alloud:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
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
            <li>• <strong>Aloud</strong> is spelled with a single &apos;l&apos;, not double.</li>
            <li>• Used to describe speaking or reading in a voice that can be heard.</li>
            <li>• The opposite is &quot;silently&quot; or &quot;quietly&quot;.</li>
            <li>• &quot;Alloud&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alloud&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alloud&quot; is never correct as a spelling for &quot;aloud&quot;. Always use &quot;aloud&quot; for speaking or reading in a voice that can be heard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;aloud&quot; has a single &apos;l&apos;, not double.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;aloud&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;aloud&quot; can refer to reading, speaking, or expressing thoughts vocally.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;aloud&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: read aloud, think aloud, say aloud, laugh aloud.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alloud&quot; happens because double &apos;l&apos; is common in English, but &quot;aloud&quot; only has one.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Aloud</strong> is the correct spelling with a single &apos;l&apos;. It means spoken or read in a voice that can be heard. The misspelling &quot;alloud&quot; is never correct. Use &quot;aloud&quot; in reading, speaking, and expression contexts.</p>
      </div>
    </div>
  )
} 