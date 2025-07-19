import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Clear or Cleer - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;clear&quot; and &quot;cleer&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ClearVsCleerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Clear or Cleer</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;clear&quot; and &quot;cleer&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cleer</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cleer&quot; is a misspelling. The correct spelling is &quot;clear&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Clear</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Clear&quot; is the correct spelling. It means easy to see, understand, or free from obstruction or confusion.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Clear (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Easy to see through, understand, or free from doubt or confusion. As a verb, to remove obstacles or make free of obstruction.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The sky is <strong>clear</strong> tonight.</li>
                  <li>• Please speak in a <strong>clear</strong> voice.</li>
                  <li>• They need to <strong>clear</strong> the road after the storm.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cleer (adjective/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cleer&quot; is a misspelling of &quot;clear&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cleer&quot; is not used in standard English.</li>
                  <li>• Always use <strong>clear</strong> when referring to something easy to see or understand.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Clear:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Transparent</li>
                <li>• Obvious</li>
                <li>• Evident</li>
                <li>• Plain</li>
                <li>• Unambiguous</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cleer:</h4>
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
            <li>• <strong>Clear</strong> is spelled with an &quot;a&quot; after the &quot;e&quot;.</li>
            <li>• Used to describe something easy to see, understand, or free from obstruction.</li>
            <li>• The word comes from Latin &quot;clarus&quot; meaning &quot;bright&quot; or &quot;famous&quot;.</li>
            <li>• &quot;Cleer&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cleer&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cleer&quot; is never correct. The proper spelling is always &quot;clear.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;a&quot; after the &quot;e&quot; in &quot;clear&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;clear&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Clear&quot; means easy to see, understand, or free from obstruction or confusion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cleer&quot; may occur due to doubling the &quot;e&quot; by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Clear</strong> is the correct spelling with an &quot;a&quot; after the &quot;e&quot;. It means easy to see or understand. The misspelling &quot;cleer&quot; is never correct. Use &quot;clear&quot; in all contexts.</p>
      </div>
    </div>
  )
} 