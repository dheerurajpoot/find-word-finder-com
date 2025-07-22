import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Verify or Varify - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;verify&quot; and &quot;varify&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VerifyVsVarifyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Verify or Varify</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;verify&quot; and &quot;varify&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Varify</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Varify&quot; is a misspelling. The correct spelling is &quot;verify&quot; with an &quot;e&quot; after the &quot;v&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Verify</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Verify&quot; is the correct spelling. It means to make sure or demonstrate that something is true, accurate, or justified.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Verify (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To make sure or demonstrate that something is true, accurate, or justified.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Please <strong>verify</strong> your email address.</li>
                  <li>• The scientist will <strong>verify</strong> the results.</li>
                  <li>• We need to <strong>verify</strong> the facts before publishing.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Varify:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Varify&quot; is a misspelling of &quot;verify&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Varify&quot; is not used in standard English.</li>
                  <li>• Always use <strong>verify</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Verify:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Confirm</li>
                <li>• Validate</li>
                <li>• Authenticate</li>
                <li>• Substantiate</li>
                <li>• Check</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Varify:</h4>
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
            <li>• <strong>Verify</strong> is spelled with an &quot;e&quot; after the &quot;v&quot;.</li>
            <li>• &quot;Varify&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;verificare&quot; meaning &quot;to make true&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;varify&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;varify&quot; is never correct. The proper spelling is always &quot;verify&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;verify&quot; has an &quot;e&quot; after the &quot;v&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does verify mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Verify&quot; means to make sure or demonstrate that something is true, accurate, or justified.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the noun form of &quot;verify&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The noun form is &quot;verification&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use &quot;verify&quot; in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;verify&quot; is correct in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Verify</strong> is the correct spelling, meaning to make sure something is true. The misspelling &quot;varify&quot; is never correct. Always use &quot;verify&quot; in your writing.</p>
      </div>
    </div>
  )
} 