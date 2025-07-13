import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accordingly or Acordingly - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accordingly&quot; and &quot;acordingly&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccordinglyVsAcordinglyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accordingly or Acordingly</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accordingly&quot; and &quot;acordingly&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acordingly</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acordingly&quot; is a misspelling. The correct spelling is &quot;accordingly&quot; with double &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accordingly</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accordingly&quot; is the correct spelling. It means in a way that is appropriate to the circumstances.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accordingly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">In a way that is appropriate to the circumstances; consequently; therefore; as a result.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The weather was bad, so we <strong>accordingly</strong> postponed the picnic.</li>
                  <li>• He was promoted and <strong>accordingly</strong> received a raise.</li>
                  <li>• The rules changed, and we acted <strong>accordingly</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acordingly (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acordingly&quot; is a misspelling of &quot;accordingly&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acordingly&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accordingly</strong> when referring to appropriate action.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accordingly:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Consequently</li>
                <li>• Therefore</li>
                <li>• Thus</li>
                <li>• Hence</li>
                <li>• As a result</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acordingly:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Accordingly</strong> has double &quot;c&quot; at the beginning.</li>
          <li>• The word comes from &quot;according&quot; + &quot;ly&quot; suffix.</li>
          <li>• Used in formal writing, business contexts, and everyday conversation.</li>
          <li>• Common in reports, legal documents, and professional communication.</li>
          <li>• &quot;Acordingly&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acordingly&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acordingly&quot; is never correct. The proper spelling is always &quot;accordingly.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;according&quot; + &quot;ly&quot; - like &quot;according&quot; with &quot;ly&quot; suffix.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accordingly and therefore?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accordingly&quot; emphasizes appropriate response to circumstances, while &quot;therefore&quot; indicates logical consequence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accordingly be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accordingly&quot; is very common in formal writing, especially in business and professional contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acordingly&quot; likely occurs because people forget the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accordingly&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: act accordingly, plan accordingly, adjust accordingly, respond accordingly, and proceed accordingly.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accordingly</strong> is the correct spelling with double &quot;c&quot; at the beginning. It means in a way that is appropriate to the circumstances. The misspelling &quot;acordingly&quot; is never correct.</p>
      </div>
    </div>
  )
} 