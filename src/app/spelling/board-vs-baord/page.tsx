import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Board or Baord - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;board&quot; and &quot;baord&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BoardVsBaordPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Board or Baord</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;board&quot; and &quot;baord&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Baord</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Baord&quot; is a misspelling. The correct spelling is &quot;board&quot; with &quot;oa&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Board</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Board&quot; is the correct spelling. It refers to a flat piece of wood or other material used for various purposes.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Board (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A flat piece of wood or other material used for building, writing, or other purposes.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The carpenter cut the <strong>board</strong> to size.</li>
                  <li>• Write your name on the <strong>board</strong>.</li>
                  <li>• The <strong>board</strong> of directors met yesterday.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Baord (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Baord&quot; is a misspelling of &quot;board&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Baord&quot; is not used in standard English.</li>
                  <li>• Always use <strong>board</strong> when referring to flat materials.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Board:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Plank</li>
                <li>• Panel</li>
                <li>• Slab</li>
                <li>• Sheet</li>
                <li>• Committee</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Baord:</h4>
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
          <li>• <strong>Board</strong> is spelled with &quot;oa&quot; in the middle, not &quot;ao&quot;.</li>
          <li>• The word comes from Old English &quot;bord&quot; meaning plank or table.</li>
          <li>• Used for building, writing surfaces, and organizational groups.</li>
          <li>• Can refer to both physical materials and governing bodies.</li>
          <li>• &quot;Baord&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;baord&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;baord&quot; is never correct. The proper spelling is always &quot;board.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;b&quot; + &quot;oar&quot; + &quot;d&quot; - like an oar made of wood.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between board and bored?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Board&quot; is a noun meaning flat material, while &quot;bored&quot; is an adjective meaning uninterested.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can board be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;board&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;baord&quot; likely occurs because of confusion about the vowel order or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;board&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: board game, bulletin board, board of directors, and on board.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Board</strong> is the correct spelling with &quot;oa&quot; in the middle. It refers to a flat piece of material or a governing group. The misspelling &quot;baord&quot; is never correct.</p>
      </div>
    </div>
  )
} 