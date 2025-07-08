import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Affect or Afect - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;affect&quot; and &quot;afect&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AffectVsAfectPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Affect or Afect
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Affect&quot; or &quot;Afect&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Afect</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Afect&quot; is a misspelling. The correct spelling is &quot;affect&quot; with double &apos;f&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Affect</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Affect&quot; is the correct spelling. It means to influence or have an effect on something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Affect</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Affect</strong> (verb): To have an effect on; to influence; to produce a change in; to impact or modify something; to move emotionally. As a noun, it refers to emotion or feeling.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The weather will <strong>affect</strong> our travel plans.</li>
              <li>• The news deeply <strong>affected</strong> her mood.</li>
              <li>• His speech <strong>affected</strong> the audience&apos;s opinion.</li>
              <li>• The medication <strong>affected</strong> his ability to concentrate.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Affect</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Influence</li>
                <li>• Impact</li>
                <li>• Change</li>
                <li>• Modify</li>
                <li>• Alter</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Transform</li>
                <li>• Shape</li>
                <li>• Determine</li>
                <li>• Control</li>
                <li>• Govern</li>
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
            <li>• <strong>Affect</strong> is spelled with double &apos;f&apos;, not single &apos;f&apos;.</li>
            <li>• It&apos;s commonly used as a verb meaning to influence or impact.</li>
            <li>• Can also be used as a noun in psychology to mean emotion.</li>
            <li>• Often confused with &quot;effect&quot; - affect is usually a verb, effect is usually a noun.</li>
            <li>• The word comes from the Latin &quot;affectus&quot; meaning &quot;influence.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;afect&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;afect&quot; is never correct. The proper spelling is always &quot;affect&quot; with double &apos;f&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;affect&quot; as having two &apos;f&apos;s because it involves two things - the cause and the effect. The word comes from Latin &quot;affectus&quot; meaning &quot;influence.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between affect and effect?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Affect&quot; is usually a verb meaning to influence, while &quot;effect&quot; is usually a noun meaning the result or outcome. Remember: Affect = Action, Effect = End result.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can affect be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affect&quot; can be used as a noun in psychology to refer to emotion or feeling, but this usage is less common.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is affect always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affect&quot; is neutral and can describe both positive and negative influences or impacts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;afect&quot; likely occurs because people may not remember the double &apos;f&apos; or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;affect&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: affect change, affect behavior, affect performance, affect mood, affect decision, and affect outcome.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;affect&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;affect&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Affect</strong> is the correct spelling with double &apos;f&apos;. It means to influence or have an effect on something. The misspelling &quot;afect&quot; with single &apos;f&apos; is never correct. Use this word when you want to describe how something influences or impacts another thing.
        </p>
      </div>
    </div>
  )
} 