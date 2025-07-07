import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Affection vs Afection - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;affection&quot; and &quot;afection&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AffectionVsAfectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Affection vs Afection
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Affection&quot; or &quot;Afection&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Afection</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Afection&quot; is a misspelling. The correct spelling is &quot;affection&quot; with double &apos;f&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Affection</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Affection&quot; is the correct spelling. It means a feeling of fondness or love.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Affection</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Affection</strong> (noun): A feeling of fondness, love, or liking; warm attachment or devotion; tender feeling toward someone or something; emotional attachment or care.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She showed great <strong>affection</strong> for her grandchildren.</li>
              <li>• The dog wagged its tail with <strong>affection</strong>.</li>
              <li>• Their <strong>affection</strong> for each other was obvious to everyone.</li>
              <li>• He had a deep <strong>affection</strong> for his hometown.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Affection</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Love</li>
                <li>• Fondness</li>
                <li>• Devotion</li>
                <li>• Attachment</li>
                <li>• Care</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Warmth</li>
                <li>• Tenderness</li>
                <li>• Adoration</li>
                <li>• Regard</li>
                <li>• Sentiment</li>
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
            <li>• <strong>Affection</strong> is spelled with double &apos;f&apos;, not single &apos;f&apos;.</li>
            <li>• It&apos;s commonly used to describe feelings toward people, animals, or places.</li>
            <li>• Often implies a warm, positive emotional connection.</li>
            <li>• The word suggests tenderness and care.</li>
            <li>• The word comes from the Latin &quot;affectio&quot; meaning &quot;disposition.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;afection&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;afection&quot; is never correct. The proper spelling is always &quot;affection&quot; with double &apos;f&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;affection&quot; as having two &apos;f&apos;s because it involves two people - the one who feels affection and the one who receives it. The word comes from Latin &quot;affectio&quot; meaning &quot;disposition.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between affection and love?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Affection&quot; is a milder, more general feeling of fondness, while &quot;love&quot; is a deeper, more intense emotional attachment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can affection be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affection&quot; is only used as a noun. The verb form would be &quot;affect&quot; or &quot;show affection.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is affection always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affection&quot; always has a positive connotation, indicating warm feelings and care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;afection&quot; likely occurs because people may not remember the double &apos;f&apos; or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;affection&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: show affection, deep affection, mutual affection, parental affection, and public display of affection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;affection&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affection&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, literary, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Affection</strong> is the correct spelling with double &apos;f&apos;. It means a feeling of fondness or love. The misspelling &quot;afection&quot; with single &apos;f&apos; is never correct. Use this word when describing warm feelings of care, fondness, or attachment toward someone or something.
        </p>
      </div>
    </div>
  )
} 