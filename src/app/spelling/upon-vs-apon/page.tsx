import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Upon or Apon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;upon&quot; and &quot;apon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UponVsAponPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Upon or Apon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;upon&quot; and &quot;apon&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Apon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Apon&quot; is a misspelling. The correct spelling is &quot;upon&quot; with a &quot;u&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Upon</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Upon&quot; is the correct spelling. It means on or on top of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Upon (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">On or on top of something; at the time of; immediately after.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The book is <strong>upon</strong> the table.</li>
                  <li>• <strong>Upon</strong> arrival, please check in.</li>
                  <li>• He placed his hand <strong>upon</strong> her shoulder.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Apon (preposition):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Apon&quot; is a misspelling of &quot;upon&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Apon&quot; is not used in standard English.</li>
                  <li>• Always use <strong>upon</strong> when referring to position or timing.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Upon:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• On</li>
                <li>• At</li>
                <li>• Over</li>
                <li>• Above</li>
                <li>• Onto</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Apon:</h4>
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
            <li>• <strong>Upon</strong> is spelled with a &quot;u&quot; at the beginning, not &quot;a.&quot;</li>
            <li>• Used as a preposition to indicate position or timing.</li>
            <li>• Can mean on top of, at the time of, or immediately after.</li>
            <li>• The word comes from Old English &quot;uppan&quot; meaning on or up.</li>
            <li>• &quot;Apon&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;apon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apon&quot; is never correct. The proper spelling is always &quot;upon&quot; with a &quot;u&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;up&quot; + &quot;on&quot; - the word starts with &quot;u&quot; like &quot;up.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between upon and on?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Upon&quot; is more formal and literary than &quot;on,&quot; but they often mean the same thing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can upon be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;upon&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;apon&quot; likely occurs because of confusion about the &quot;u&quot; vs &quot;a&quot; beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;upon&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: upon arrival, once upon a time, upon request, and upon reflection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce upon?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The correct pronunciation is /əˈpɒn/ (uh-PON).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is upon used in modern English?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;upon&quot; is still commonly used in modern English, especially in formal contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Upon</strong> is the correct spelling with a &quot;u&quot; at the beginning. It means on or on top of something, or at the time of. The misspelling &quot;apon&quot; is never correct. Use &quot;upon&quot; for formal expressions of position, timing, or immediate action.</p>
      </div>
    </div>
  )
} 