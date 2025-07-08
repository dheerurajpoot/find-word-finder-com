import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Altogether or All Together - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;altogether&quot; and &quot;all together&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AltogetherVsAllTogetherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Altogether or All Together</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;altogether&quot; and &quot;all together&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect Usage</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">Using &quot;all together&quot; when you mean &quot;altogether&quot; (completely, entirely) is incorrect.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct Usage</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">Both &quot;altogether&quot; and &quot;all together&quot; are correct, but they have different meanings.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Altogether (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Completely, entirely, or in total; on the whole.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The project cost <strong>altogether</strong> $10,000.</li>
                  <li>• I <strong>altogether</strong> disagree with that statement.</li>
                  <li>• <strong>Altogether</strong>, it was a great experience.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">All Together (phrase):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Everyone or everything in one place or at the same time.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-blue-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                  <li>• We were <strong>all together</strong> at the party.</li>
                  <li>• Let&apos;s sing <strong>all together</strong> now.</li>
                  <li>• The family was <strong>all together</strong> for Christmas.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Altogether:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Completely</li>
                <li>• Entirely</li>
                <li>• Totally</li>
                <li>• Wholly</li>
                <li>• In total</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">All Together:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Collectively</li>
                <li>• Jointly</li>
                <li>• As a group</li>
                <li>• In unison</li>
                <li>• Simultaneously</li>
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
            <li>• <strong>Altogether</strong> is one word meaning completely or entirely.</li>
            <li>• <strong>All together</strong> is two words meaning everyone in one place.</li>
            <li>• Use &quot;altogether&quot; when you mean &quot;completely&quot; or &quot;in total.&quot;</li>
            <li>• Use &quot;all together&quot; when you mean &quot;everyone in one place.&quot;</li>
            <li>• Think: &quot;altogether&quot; = &quot;completely&quot;, &quot;all together&quot; = &quot;everyone together.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are both spellings correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, both &quot;altogether&quot; and &quot;all together&quot; are correct, but they have different meanings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the difference?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Altogether&quot; means completely (one word), &quot;all together&quot; means everyone in one place (two words).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use them interchangeably?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, they have different meanings and cannot be used interchangeably.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;altogether&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: altogether different, altogether too much, and altogether better.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;all together&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: all together now, all together in one place, and all together at once.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often confuse these words?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People confuse them because they sound similar and both involve the concept of completeness or unity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can both be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, both are appropriate in formal writing when used correctly according to their meanings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is there a memory trick to help remember?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, think: &quot;altogether&quot; = &quot;completely&quot; (one word), &quot;all together&quot; = &quot;everyone together&quot; (two words).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Altogether</strong> (one word) means completely or entirely. <strong>All together</strong> (two words) means everyone in one place. Both are correct but have different meanings. Use &quot;altogether&quot; for completeness and &quot;all together&quot; for unity or togetherness.</p>
      </div>
    </div>
  )
} 