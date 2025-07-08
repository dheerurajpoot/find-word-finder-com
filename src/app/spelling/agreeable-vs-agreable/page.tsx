import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Agreeable or Agreable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;agreeable&quot; and &quot;agreable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AgreeableVsAgreablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Agreeable or Agreable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;agreeable&quot; or &quot;agreable&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agreable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Agreable&quot; is a common misspelling. The correct spelling is &quot;agreeable&quot; with two &apos;e&apos;s after the &apos;r&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Agreeable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Agreeable&quot; is the correct spelling. It means pleasant, enjoyable, or willing to agree to something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Agreeable</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Agreeable</strong> (adjective): Pleasant, enjoyable, or willing to agree to something.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The weather was very <strong>agreeable</strong> for a picnic.</li>
              <li>• She has an <strong>agreeable</strong> personality.</li>
              <li>• He was <strong>agreeable</strong> to the proposed changes.</li>
              <li>• The meal was quite <strong>agreeable</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Agreeable</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Pleasant</li>
                <li>• Amiable</li>
                <li>• Congenial</li>
                <li>• Friendly</li>
                <li>• Likable</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Cooperative</li>
                <li>• Willing</li>
                <li>• Accommodating</li>
                <li>• Approachable</li>
                <li>• Cordial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Agreeable</strong> is spelled with two &apos;e&apos;s after the &apos;r&apos;, not one.</li>
            <li>• Used to describe people, weather, or things that are pleasant or willing.</li>
            <li>• The noun form is &quot;agreeableness&quot;.</li>
            <li>• The adverb form is &quot;agreeably&quot;.</li>
            <li>• The opposite is &quot;disagreeable&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agreable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;agreable&quot; is never correct. The proper spelling is always &quot;agreeable&quot; with two &apos;e&apos;s after the &apos;r&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;agreeable&quot; comes from &quot;agree&quot; plus &quot;-able&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;agreeable&quot; describe weather?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;agreeable&quot; can describe weather that is pleasant or enjoyable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;agreeable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: agreeable personality, agreeable weather, agreeable to the plan.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;agreable&quot; happens because the double &apos;e&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Agreeable</strong> is the correct spelling with two &apos;e&apos;s after the &apos;r&apos;. It means pleasant, enjoyable, or willing to agree. The misspelling &quot;agreable&quot; is never correct. Use &quot;agreeable&quot; for people, weather, or things that are pleasant or cooperative.</p>
      </div>
    </div>
  )
} 