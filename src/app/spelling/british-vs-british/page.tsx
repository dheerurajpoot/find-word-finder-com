import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'British or Britsh - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;British&quot; and &quot;Britsh&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BritishVsBritshPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">British or Britsh</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;British&quot; and &quot;Britsh&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Britsh</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Britsh&quot; is a misspelling. The correct spelling is &quot;British&quot; with &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: British</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;British&quot; is the correct spelling. It refers to people or things from Great Britain.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">British (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Relating to Great Britain or its people; a person from Great Britain.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>British</strong> accent is distinctive.</li>
                  <li>• She is <strong>British</strong> by birth.</li>
                  <li>• <strong>British</strong> culture is rich and diverse.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Britsh (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Britsh&quot; is a misspelling of &quot;British&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Britsh&quot; is not used in standard English.</li>
                  <li>• Always use <strong>British</strong> when referring to Great Britain.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">British:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• English</li>
                <li>• UK</li>
                <li>• Brit</li>
                <li>• Anglo</li>
                <li>• Great Britain</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Britsh:</h4>
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
            <li>• <strong>British</strong> is spelled with &quot;i&quot;, not without it.</li>
            <li>• The word comes from &quot;Britain&quot; + &quot;-ish&quot; suffix.</li>
            <li>• Can be used as both an adjective and a noun.</li>
            <li>• Common in discussions of nationality, culture, and geography.</li>
            <li>• &quot;Britsh&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;britsh&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;britsh&quot; is never correct. The proper spelling is always &quot;British.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;Britain&quot; + &quot;-ish&quot; - the word has an &quot;i&quot; like &quot;Britain.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between British and English?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;British&quot; refers to Great Britain (England, Scotland, Wales), while &quot;English&quot; specifically refers to England.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can British be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;British&quot; can be used as a noun meaning a person from Great Britain, as in &quot;The British.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation patterns or confusion with similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;British&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: British accent, British culture, British Isles, British Empire, and British English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>British</strong> is the correct spelling with &quot;i&quot;. It refers to people or things from Great Britain. The misspelling &quot;britsh&quot; is never correct. Use &quot;British&quot; when referring to nationality, culture, or anything related to Great Britain.</p>
      </div>
    </div>
  )
} 