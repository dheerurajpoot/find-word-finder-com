import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Brought or Brung - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brought&quot; and &quot;brung&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BroughtVsBrungPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Brought or Brung</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;brought&quot; and &quot;brung&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brung</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Brung&quot; is a non-standard form. The correct spelling is &quot;brought&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Brought</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Brought&quot; is the correct spelling. It is the past tense and past participle of &quot;bring.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Brought (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;bring&quot;; to have carried or conveyed something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>brought</strong> the documents yesterday.</li>
                  <li>• She has <strong>brought</strong> her laptop.</li>
                  <li>• They <strong>brought</strong> gifts to the party.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Brung (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Brung&quot; is a non-standard dialectal form of &quot;brought&quot; and is not used in formal writing.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Brung&quot; is not used in standard English.</li>
                  <li>• Always use <strong>brought</strong> in formal writing.</li>
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
                <li>• Transported</li>
                <li>• Delivered</li>
                <li>• Fetched</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Brung:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (Non-standard form; not recommended)</li>
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
            <li>• <strong>Brought</strong> is the standard past tense and past participle of &quot;bring.&quot;</li>
            <li>• The word comes from Old English &quot;brōhte&quot; meaning brought.</li>
            <li>• Used as a verb only.</li>
            <li>• Common in everyday language for past actions.</li>
            <li>• &quot;Brung&quot; is considered non-standard and should be avoided in formal writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brung&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Brung&quot; is a non-standard dialectal form and should not be used in formal writing. Always use &quot;brought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bring&quot; + &quot;ought&quot; - the word follows the pattern of other irregular verbs like &quot;thought&quot; and &quot;fought.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between brought and bring?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bring&quot; is the base form (present), while &quot;brought&quot; is the past tense and past participle form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can brought be used in present perfect tense?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;brought&quot; is used in present perfect tense, as in &quot;I have brought the documents.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often use &quot;brung&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Brung&quot; is a dialectal form that follows the pattern of other irregular verbs like &quot;sung&quot; and &quot;rung.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;brought&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: brought about, brought up, brought down, brought to light, and brought home.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Brought</strong> is the correct spelling and is the standard past tense and past participle of &quot;bring.&quot; The form &quot;brung&quot; is non-standard and should be avoided in formal writing. Use &quot;brought&quot; when referring to past actions of carrying or conveying something.</p>
      </div>
    </div>
  )
} 