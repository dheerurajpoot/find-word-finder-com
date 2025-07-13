import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bearded or Beared - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bearded&quot; and &quot;beared&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeardedVsBearedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bearded or Beared</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bearded&quot; and &quot;beared&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beared</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beared&quot; is a misspelling. The correct spelling is &quot;bearded&quot; with &quot;ed&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bearded</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bearded&quot; is the correct spelling. It means having a beard.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bearded (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Having a beard; covered with facial hair on the chin and cheeks.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>bearded</strong> man looked distinguished.</li>
                  <li>• He was a tall, <strong>bearded</strong> gentleman.</li>
                  <li>• The <strong>bearded</strong> professor taught the class.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beared (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beared&quot; is a misspelling of &quot;bearded&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beared&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bearded</strong> when referring to someone with a beard.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bearded:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Whiskered</li>
                <li>• Hirsute</li>
                <li>• Unshaven</li>
                <li>• Stubbled</li>
                <li>• Bushy-faced</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beared:</h4>
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
            <li>• <strong>Bearded</strong> is spelled with &quot;ed&quot; at the end, not &quot;beared&quot;.</li>
            <li>• The word comes from &quot;beard&quot; + the suffix &quot;ed&quot;.</li>
            <li>• Used to describe someone with facial hair.</li>
            <li>• Common in descriptive and literary contexts.</li>
            <li>• &quot;Beared&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beared&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beared&quot; is never correct. The proper spelling is always &quot;bearded.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;beard&quot; + &quot;ed&quot; - the base word &quot;beard&quot; with the adjective suffix &quot;ed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bearded and unshaven?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Bearded&quot; specifically refers to having a beard, while &quot;unshaven&quot; means not shaved and can refer to any facial hair.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bearded be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bearded&quot; is very common in formal writing and is appropriate in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion about the &quot;ed&quot; suffix.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;bearded&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bearded man, bearded lady, bearded dragon, and bearded collie.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bearded</strong> is the correct spelling with &quot;ed&quot; at the end. It means having a beard. The misspelling &quot;beared&quot; is never correct. Use &quot;bearded&quot; when describing someone with facial hair on the chin and cheeks.</p>
      </div>
    </div>
  )
} 