import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Affair vs Afair - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;affair&quot; and &quot;afair&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AffairVsAfairPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Affair vs Afair
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Affair&quot; or &quot;Afair&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Afair</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Afair&quot; is a misspelling. The correct spelling is &quot;affair&quot; with double &apos;f&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Affair</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Affair&quot; is the correct spelling. It means a matter, event, or situation.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Affair</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Affair</strong> (noun): A matter, event, or situation; a romantic or sexual relationship outside of marriage; a business or political matter; something that concerns or involves someone; an event or occurrence.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The business <strong>affair</strong> was conducted professionally.</li>
              <li>• The political <strong>affair</strong> dominated the news headlines.</li>
              <li>• She had an <strong>affair</strong> with her colleague.</li>
              <li>• The whole <strong>affair</strong> was quite embarrassing.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Affair</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Matter</li>
                <li>• Event</li>
                <li>• Situation</li>
                <li>• Incident</li>
                <li>• Business</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Relationship</li>
                <li>• Liaison</li>
                <li>• Scandal</li>
                <li>• Episode</li>
                <li>• Occurrence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Affair</strong> is spelled with double &apos;f&apos;, not single &apos;f&apos;.</li>
            <li>• It&apos;s commonly used in business, political, and personal contexts.</li>
            <li>• Can refer to both formal and informal situations.</li>
            <li>• The word suggests something that involves or concerns someone.</li>
            <li>• The word comes from the Old French &quot;afaire&quot; meaning &quot;to do.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;afair&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;afair&quot; is never correct. The proper spelling is always &quot;affair&quot; with double &apos;f&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;affair&quot; as having two &apos;f&apos;s because it involves two parties or aspects. The word comes from Old French &quot;afaire&quot; meaning &quot;to do.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between affair and event?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Affair&quot; is broader and can refer to any matter or situation, while &quot;event&quot; specifically refers to something that happens at a particular time and place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can affair be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affair&quot; is only used as a noun. The verb form would be &quot;affect&quot; or &quot;concern.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is affair always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affair&quot; is neutral and can refer to both positive and negative situations, though it often implies something significant or noteworthy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;afair&quot; likely occurs because people may not remember the double &apos;f&apos; or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;affair&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: love affair, business affair, family affair, state of affairs, private affair, and public affair.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;affair&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affair&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Affair</strong> is the correct spelling with double &apos;f&apos;. It means a matter, event, or situation. The misspelling &quot;afair&quot; with single &apos;f&apos; is never correct. Use this word when referring to any matter, event, or situation that involves or concerns someone.
        </p>
      </div>
    </div>
  )
} 