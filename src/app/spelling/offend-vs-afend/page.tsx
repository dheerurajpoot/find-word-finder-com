import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Offend vs Afend - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;offend&quot; and &quot;afend&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OffendVsAfendPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Offend vs Afend
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Offend&quot; or &quot;Afend&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Afend</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Afend&quot; is a misspelling. The correct spelling is &quot;offend&quot; with &apos;of&apos; at the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Offend</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Offend&quot; is the correct spelling. It means to cause displeasure or resentment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Offend</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Offend</strong> (verb): To cause displeasure, anger, or resentment; to violate a law or rule; to hurt someone&apos;s feelings; to commit a crime or wrongdoing; to be disagreeable or unpleasant.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• His comments <strong>offended</strong> many people in the audience.</li>
              <li>• The joke didn&apos;t <strong>offend</strong> anyone at the party.</li>
              <li>• She was <strong>offended</strong> by the rude behavior.</li>
              <li>• The graffiti <strong>offended</strong> the local community.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Offend</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Insult</li>
                <li>• Upset</li>
                <li>• Hurt</li>
                <li>• Anger</li>
                <li>• Displease</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Outrage</li>
                <li>• Provoke</li>
                <li>• Irritate</li>
                <li>• Annoy</li>
                <li>• Disgust</li>
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
            <li>• <strong>Offend</strong> is spelled with &apos;of&apos; at the beginning, not &apos;af&apos;.</li>
            <li>• It&apos;s commonly used in social and legal contexts.</li>
            <li>• Often describes causing emotional or moral upset.</li>
            <li>• The word suggests violating social norms or expectations.</li>
            <li>• The word comes from the Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;afend&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;afend&quot; is never correct. The proper spelling is always &quot;offend&quot; with &apos;of&apos; at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;offend&quot; as starting with &quot;off&quot; - when you offend someone, you turn them &quot;off&quot; or away from you. The word comes from Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between offend and insult?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Offend&quot; is broader and can refer to any action that causes displeasure, while &quot;insult&quot; specifically refers to disrespectful or offensive language or behavior.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can offend be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;offend&quot; is only used as a verb. The noun form would be &quot;offense&quot; or &quot;offender.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is offend always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offend&quot; always has a negative connotation, indicating something that causes displeasure or upset.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;afend&quot; likely occurs because people may not remember the correct &apos;of&apos; beginning or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;offend&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: offend against, offend someone&apos;s sensibilities, offend the law, offend public decency, and offend religious beliefs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;offend&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offend&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, legal, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Offend</strong> is the correct spelling with &apos;of&apos; at the beginning. It means to cause displeasure or resentment. The misspelling &quot;afend&quot; with &apos;af&apos; is never correct. Use this word when describing actions that cause upset, anger, or violation of social norms.
        </p>
      </div>
    </div>
  )
} 