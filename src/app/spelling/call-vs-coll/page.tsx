import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Call or Coll - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;call&quot; and &quot;coll&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CallVsCollPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Call or Coll</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;call&quot; and &quot;coll&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Coll</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Coll&quot; is a misspelling. The correct spelling is &quot;call&quot; with an &quot;a&quot; after the &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Call</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Call&quot; is the correct spelling. It means to speak loudly, to telephone someone, or to name or refer to someone or something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Call (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To speak loudly, telephone someone, or name/refer to someone or something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Please <strong>&quot;call&quot;</strong> me when you arrive.</li>
                  <li>• The teacher <strong>&quot;called&quot;</strong> the students by name.</li>
                  <li>• I heard someone <strong>&quot;call&quot;</strong> for help.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Coll (verb/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Coll&quot; is a misspelling of &quot;call&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Coll&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;call&quot;</strong> when referring to speaking loudly or telephoning.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Call:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Shout</li>
                <li>• Telephone</li>
                <li>• Name</li>
                <li>• Summon</li>
                <li>• Announce</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Coll:</h4>
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
            <li>• <strong>&quot;Call&quot;</strong> is spelled with an &quot;a&quot; after the &quot;c&quot;.</li>
            <li>• Used to describe speaking loudly, telephoning, or naming someone.</li>
            <li>• The word comes from Old Norse &quot;kalla&quot; meaning &quot;to cry loudly&quot;.</li>
            <li>• &quot;Coll&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;coll&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;coll&quot; is never correct. The proper spelling is always &quot;call.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;a&quot; after the &quot;c&quot; in &quot;call&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;call&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Call&quot; means to speak loudly, telephone someone, or name/refer to someone or something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;coll&quot; may occur due to confusion with similar-sounding words or omitting the &quot;a&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Call&quot;</strong> is the correct spelling with an &quot;a&quot; after the &quot;c&quot;. It means to speak loudly, telephone, or name someone. The misspelling &quot;coll&quot; is never correct. Use &quot;call&quot; in all contexts.</p>
      </div>
    </div>
  )
} 