import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amiable or Amaiable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amiable&quot; and &quot;amaiable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmiableVsAmaiablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amiable or Amaiable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amiable&quot; and &quot;amaiable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Amaiable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Amaiable&quot; is a misspelling. The correct spelling is &quot;amiable&quot; with &quot;ia&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amiable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amiable&quot; is the correct spelling. It means friendly, pleasant, or agreeable.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amiable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Friendly, pleasant, and agreeable in disposition; having a good-natured personality.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has an <strong>amiable</strong> personality.</li>
                  <li>• The <strong>amiable</strong> host welcomed everyone warmly.</li>
                  <li>• They had an <strong>amiable</strong> conversation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Amaiable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Amaiable&quot; is a misspelling of &quot;amiable&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Amaiable&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amiable</strong> when describing friendly people.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amiable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Friendly</li>
                <li>• Pleasant</li>
                <li>• Agreeable</li>
                <li>• Good-natured</li>
                <li>• Cordial</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Amaiable:</h4>
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
            <li>• <strong>Amiable</strong> is spelled with &quot;ia&quot; in the middle, not &quot;ai.&quot;</li>
            <li>• Used to describe people who are friendly and pleasant.</li>
            <li>• Can also describe atmospheres, conversations, or relationships.</li>
            <li>• The word comes from Latin &quot;amicabilis&quot; meaning &quot;friendly.&quot;</li>
            <li>• &quot;Amaiable&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;amaiable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;amaiable&quot; is never correct. The proper spelling is always &quot;amiable.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;a-mi-able&quot; - it has &quot;ia&quot; in the middle, not &quot;ai.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amiable and amicable?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Amiable&quot; describes a person&apos;s personality, while &quot;amicable&quot; describes relationships or situations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amiable be used to describe things other than people?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amiable&quot; can describe conversations, atmospheres, or relationships.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amiable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: amiable personality, amiable conversation, and amiable host.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;amaiable&quot; occurs because people think it should have &quot;ai&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amiable be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amiable&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is amiable always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amiable&quot; is always a positive trait describing someone who is friendly and pleasant.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amiable</strong> is the correct spelling with &quot;ia&quot; in the middle. It means friendly, pleasant, or agreeable. The misspelling &quot;amaiable&quot; is never correct. Use &quot;amiable&quot; to describe people who are friendly and pleasant.</p>
      </div>
    </div>
  )
} 