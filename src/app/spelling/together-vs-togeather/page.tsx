import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Together or Togeather - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;together&quot; and &quot;togeather&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TogetherVsTogeatherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Together or Togeather</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;together&quot; and &quot;togeather&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Togeather</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Togeather&quot; is a misspelling. The correct spelling is &quot;together&quot; with an &quot;e&quot; before the &quot;r.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Together</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Together&quot; is the correct spelling. It means in company or in union with others.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Together (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In company or union with others; in one place or group.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We worked <strong>together</strong> on the project.</li>
                  <li>• The family gathered <strong>together</strong> for dinner.</li>
                  <li>• They stood <strong>together</strong> against the challenge.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Togeather (adverb/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Togeather&quot; is a misspelling of &quot;together&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Togeather&quot; is not used in standard English.</li>
                  <li>• Always use <strong>together</strong> when referring to unity or company.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Together:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• United</li>
                <li>• Jointly</li>
                <li>• Collectively</li>
                <li>• In unison</li>
                <li>• As one</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Togeather:</h4>
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
            <li>• <strong>Together</strong> is spelled with an &quot;e&quot; before the &quot;r.&quot;</li>
            <li>• It can be used as both an adverb and an adjective.</li>
            <li>• &quot;Togeather&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;tōgædere&quot; meaning &quot;to gather.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;togeather&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;togeather&quot; is never correct. The proper spelling is always &quot;together.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;together&quot; has an &quot;e&quot; before the &quot;r&quot; - think of it as &quot;to-geth-er.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;together&quot; and &quot;united&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Together&quot; emphasizes physical proximity or cooperation, while &quot;united&quot; emphasizes agreement or solidarity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;together&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;together&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;together&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;togeather&quot; often happens due to pronunciation confusion or forgetting the &quot;e.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;together&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: work together, get together, put together, and come together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;together&quot; always about people?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;together&quot; can also refer to objects, ideas, or actions being combined or united.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;together&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;together&quot; is only used as an adverb or adjective.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Together</strong> is the correct spelling with an &quot;e&quot; before the &quot;r.&quot; It means in company or union with others. The misspelling &quot;togeather&quot; is never correct. Always use &quot;together&quot; when referring to unity, cooperation, or being in one place.</p>
      </div>
    </div>
  )
} 