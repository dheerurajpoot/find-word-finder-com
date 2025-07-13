import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Brought or Brang - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brang&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BroughtVsBrangPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Brought or Brang</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;brought&quot; and &quot;brang&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brang</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Brang&quot; is a misspelling. The correct spelling is &quot;brought&quot; with &quot;ough&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Brought</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Brought&quot; is the correct spelling. It is the past tense and past participle of &quot;bring&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Brought (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The past tense and past participle of bring; to have carried or conveyed something to a place.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>brought</strong> the book to class.</li>
                  <li>• They had <strong>brought</strong> food for the party.</li>
                  <li>• The news <strong>brought</strong> joy to everyone.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Brang (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Brang&quot; is a misspelling of &quot;brought&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Brang&quot; is not used in standard English.</li>
                  <li>• Always use <strong>brought</strong> when referring to the past tense of bring.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Brought:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Carried</li>
                <li>• Conveyed</li>
                <li>• Delivered</li>
                <li>• Transported</li>
                <li>• Fetched</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Brang:</h4>
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
            <li>• <strong>Brought</strong> is spelled with &quot;ough&quot;, not &quot;ang&quot;.</li>
            <li>• The word is the irregular past tense of &quot;bring&quot;.</li>
            <li>• Used as a verb only (past tense and past participle).</li>
            <li>• Common in everyday language for describing past actions.</li>
            <li>• &quot;Brang&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brang&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;brang&quot; is never correct. The proper spelling is always &quot;brought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bring&quot; + &quot;ought&quot; - the word has &quot;ough&quot; like &quot;thought&quot; or &quot;bought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between brought and brought?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Brought&quot; is both the past tense and past participle of &quot;bring&quot; - they are the same word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can brought be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;brought&quot; is the standard past tense form and is appropriate in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with regular verb patterns or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;brought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: brought up, brought about, brought down, brought to light, and brought to mind.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Brought</strong> is the correct spelling with &quot;ough&quot;. It is the past tense and past participle of &quot;bring&quot;. The misspelling &quot;brang&quot; is never correct. Use &quot;brought&quot; when referring to past actions of carrying or conveying something to a place.</p>
      </div>
    </div>
  )
} 