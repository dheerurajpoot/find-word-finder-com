import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Carried or Carred - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;carried&quot; and &quot;carred&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CarriedVsCarredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Carried or Carred</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;carried&quot; and &quot;carred&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carred</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carred&quot; is a misspelling. The correct spelling is &quot;carried&quot; with &quot;ied&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Carried</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Carried&quot; is the correct spelling. It is the past tense and past participle of &quot;carry.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Carried (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Past tense and past participle of &quot;carry&quot;; to have transported or supported something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>carried</strong> the heavy bags upstairs.</li>
                  <li>• The wind <strong>carried</strong> the leaves away.</li>
                  <li>• He <strong>carried</strong> the responsibility well.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carred (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carred&quot; is a misspelling of &quot;carried&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carred&quot; is not used in standard English.</li>
                  <li>• Always use <strong>carried</strong> when referring to past actions.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Carried:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Transported</li>
                <li>• Conveyed</li>
                <li>• Brought</li>
                <li>• Moved</li>
                <li>• Supported</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carred:</h4>
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
            <li>• <strong>Carried</strong> is spelled with &quot;ied&quot; at the end, not &quot;ed.&quot;</li>
            <li>• The word is the past tense and past participle of &quot;carry.&quot;</li>
            <li>• Can be used in various contexts including physical transport and abstract concepts.</li>
            <li>• Often used in everyday conversation and formal writing.</li>
            <li>• &quot;Carred&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carred&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carred&quot; is never correct. The proper spelling is always &quot;carried.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;carry&quot; + &quot;ied&quot; - the word ends with &quot;ied&quot; like other past tense verbs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between carried and transported?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to moving things, but &quot;carried&quot; often implies personal effort while &quot;transported&quot; is more formal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carred&quot; likely occurs because people forget the &quot;i&quot; before &quot;ed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;carried&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: carried away, carried out, and carried forward.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can carried be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carried&quot; is only used as a verb. The noun form would be &quot;carriage&quot; or &quot;carrier.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is carried only used for physical objects?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carried&quot; can be used for physical objects, ideas, responsibilities, or emotions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word carried?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old French &quot;carier&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Carried</strong> is the correct spelling with &quot;ied&quot; at the end. It is the past tense and past participle of &quot;carry&quot; and means to have transported or supported something. The misspelling &quot;carred&quot; is never correct. Use &quot;carried&quot; to refer to past actions of transporting, supporting, or conveying in various contexts.</p>
      </div>
    </div>
  )
} 