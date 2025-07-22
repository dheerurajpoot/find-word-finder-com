import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Verifying or Verifing - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;verifying&quot; and &quot;verifing&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VerifyingVsVerifingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Verifying or Verifing</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;verifying&quot; and &quot;verifing&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Verifing</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Verifing&quot; is a misspelling. The correct spelling is &quot;verifying&quot; with a &quot;y&quot; after the &quot;f&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Verifying</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Verifying&quot; is the correct spelling. It means making sure or demonstrating that something is true, accurate, or justified.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Verifying (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Making sure or demonstrating that something is true, accurate, or justified.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is <strong>verifying</strong> the results of the experiment.</li>
                  <li>• The bank is <strong>verifying</strong> your identity.</li>
                  <li>• We are <strong>verifying</strong> the information provided.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Verifing:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Verifing&quot; is a misspelling of &quot;verifying&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Verifing&quot; is not used in standard English.</li>
                  <li>• Always use <strong>verifying</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Verifying:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Confirming</li>
                <li>• Validating</li>
                <li>• Checking</li>
                <li>• Authenticating</li>
                <li>• Substantiating</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Verifing:</h4>
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
            <li>• <strong>Verifying</strong> is spelled with a &quot;y&quot; after the &quot;f&quot;.</li>
            <li>• &quot;Verifing&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;verificare&quot; meaning &quot;to make true&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;verifing&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;verifing&quot; is never correct. The proper spelling is always &quot;verifying&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;verifying&quot; has a &quot;y&quot; after the &quot;f&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does verifying mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Verifying&quot; means making sure or demonstrating that something is true, accurate, or justified.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;verifying&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;verifying&quot; is appropriate for both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the noun form of &quot;verifying&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The noun form is &quot;verification&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Verifying</strong> is the correct spelling, meaning making sure something is true. The misspelling &quot;verifing&quot; is never correct. Always use &quot;verifying&quot; in your writing.</p>
      </div>
    </div>
  )
} 