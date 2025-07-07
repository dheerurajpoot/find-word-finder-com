import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Offend vs Affend - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;offend&quot; and &quot;affend&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OffendVsAffendPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Offend vs Affend
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Offend&quot; or &quot;Affend&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Affend</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Affend&quot; is a misspelling. The correct spelling is &quot;offend&quot; with &apos;of&apos; at the beginning.
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
              &quot;Offend&quot; is the correct spelling. It means to cause displeasure, anger, or resentment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Offend</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Offend</strong> (verb): To cause displeasure, anger, or resentment; to insult or hurt someone&apos;s feelings; to violate a law or moral code; to be disagreeable or unpleasant.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Please do not <strong>offend</strong> others with rude remarks.</li>
              <li>• He didn&apos;t mean to <strong>offend</strong> anyone at the meeting.</li>
              <li>• The comedian&apos;s jokes may <strong>offend</strong> some people.</li>
              <li>• Breaking the law can <strong>offend</strong> the community&apos;s values.</li>
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
                <li>• Annoy</li>
                <li>• Irritate</li>
                <li>• Displease</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Outrage</li>
                <li>• Provoke</li>
                <li>• Disturb</li>
                <li>• Affront</li>
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
            <li>• <strong>Offend</strong> is spelled with &apos;of&apos; at the beginning, not &apos;aff&apos;.</li>
            <li>• It&apos;s commonly used to describe causing emotional or moral discomfort.</li>
            <li>• Can refer to both social and legal violations.</li>
            <li>• The word comes from the Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;</li>
            <li>• The noun form is &quot;offense&quot; or &quot;offender.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;affend&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affend&quot; is never correct. The proper spelling is always &quot;offend&quot; with &apos;of&apos; at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;offend&quot; as starting with &quot;off&quot; - when you offend, you turn someone &quot;off&quot; emotionally. The word comes from Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between offend and insult?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Offend&quot; is broader and can refer to any action that causes displeasure, while &quot;insult&quot; specifically refers to disrespectful words or actions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can offend be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;offend&quot; is a verb. The noun forms are &quot;offense&quot; (the act) and &quot;offender&quot; (the person).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is offend always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offend&quot; always has a negative connotation, indicating actions that cause displeasure or violate norms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;affend&quot; likely occurs because people may not remember the correct &apos;of&apos; beginning or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;offend&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: offend the senses, offend the law, easily offended, and offend someone&apos;s feelings.
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
          Remember: <strong>Offend</strong> is the correct spelling with &apos;of&apos; at the beginning. It means to cause displeasure, anger, or resentment. The misspelling &quot;affend&quot; with &apos;aff&apos; is never correct. Use this word when describing actions that insult, upset, or violate social or legal norms.
        </p>
      </div>
    </div>
  )
} 