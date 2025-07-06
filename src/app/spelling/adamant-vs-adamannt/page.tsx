import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Adamant vs Adamannt - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;adamant&quot; and &quot;adamannt&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdamantVsAdamanntPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Adamant vs Adamannt
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Adamant or Adamannt these commonly confused spellings and when to use each one correctly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adamannt</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adamannt&quot; is a misspelling. The correct spelling has only one &apos;n&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Adamant</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Adamant&quot; is the correct spelling. It means refusing to be persuaded or determined.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Adamant</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Adamant</strong> (adjective): Refusing to be persuaded or to change one&apos;s mind; determined, unyielding, or inflexible. It describes someone who is firm and resolute in their position or decision.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She was <strong>adamant</strong> about not attending the party.</li>
              <li>• The manager was <strong>adamant</strong> that the deadline must be met.</li>
              <li>• He remained <strong>adamant</strong> in his refusal to compromise.</li>
              <li>• The parents were <strong>adamant</strong> about their decision.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Adamant</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Determined</li>
                <li>• Resolute</li>
                <li>• Unyielding</li>
                <li>• Inflexible</li>
                <li>• Stubborn</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Firm</li>
                <li>• Steadfast</li>
                <li>• Unwavering</li>
                <li>• Persistent</li>
                <li>• Uncompromising</li>
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
            <li>• <strong>Adamant</strong> is spelled with one &apos;n&apos; at the end, not two.</li>
            <li>• It&apos;s commonly used to describe someone who is firm in their position.</li>
            <li>• Often used in formal and informal contexts.</li>
            <li>• Can be used to describe both people and positions.</li>
            <li>• The word comes from the Greek &quot;adamas&quot; meaning &quot;unconquerable.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adamannt&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adamannt&quot; is never correct. The proper spelling is always &quot;adamant&quot; with one &apos;n&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;adamant&quot; as being related to &quot;diamond&quot; - both have one &apos;n&apos; and are known for their hardness and unyielding nature. The word means unyielding, just like a diamond.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;adamant&quot; and &quot;stubborn&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Adamant&quot; is more formal and often implies a principled or justified firmness, while &quot;stubborn&quot; can have a more negative connotation of being unreasonably obstinate. &quot;Adamant&quot; suggests determination, while &quot;stubborn&quot; suggests inflexibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adamant&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Adamant&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts to describe firm determination.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adamant&quot; related to &quot;diamond&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! Both words share the same Greek root &quot;adamas&quot; meaning &quot;unconquerable.&quot; Just as diamonds are the hardest natural substance, being adamant means being unyielding or determined.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adamannt&quot; likely occurs because people may think it follows the pattern of other words with double consonants at the end. They might confuse it with words that have double &apos;n&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;adamant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: adamant about, adamant that, remain adamant, be adamant, and adamant refusal. The word is often used in contexts involving firm decisions or positions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adamant&quot; be used to describe things other than people?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! You can describe positions, decisions, or stances as adamant. For example: &quot;The company took an adamant position on the issue&quot; or &quot;Her adamant refusal surprised everyone.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Adamant</strong> is the correct spelling with one &apos;n&apos; at the end. It means refusing to be persuaded or determined. The misspelling &quot;adamannt&quot; with two &apos;n&apos;s is never correct. Use this word when you want to describe someone who is firm, resolute, or unyielding in their position or decision.
        </p>
      </div>
    </div>
  )
} 