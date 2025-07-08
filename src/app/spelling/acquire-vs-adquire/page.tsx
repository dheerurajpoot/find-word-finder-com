import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acquire or Adquire - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acquire&quot; and &quot;adquire&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcquireVsAdquirePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Acquire or Adquire
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Acquire&quot; or &quot;Adquire&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adquire</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adquire&quot; is a misspelling. The correct spelling is &quot;acquire&quot; with &apos;c&apos; instead of &apos;d&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acquire</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Acquire&quot; is the correct spelling. It means to gain or obtain something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Acquire</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Acquire</strong> (verb): To gain or obtain something, especially through effort or experience; to come to have as a new or additional characteristic, skill, or ability; to buy or obtain something for oneself.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She managed to <strong>acquire</strong> a rare book for her collection.</li>
              <li>• The company <strong>acquired</strong> several smaller businesses last year.</li>
              <li>• He <strong>acquired</strong> fluency in Spanish after living in Spain.</li>
              <li>• The museum <strong>acquired</strong> a valuable painting for its collection.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Acquire</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Obtain</li>
                <li>• Gain</li>
                <li>• Get</li>
                <li>• Secure</li>
                <li>• Attain</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Procure</li>
                <li>• Collect</li>
                <li>• Gather</li>
                <li>• Accumulate</li>
                <li>• Achieve</li>
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
            <li>• <strong>Acquire</strong> is spelled with &apos;c&apos;, not &apos;d&apos;.</li>
            <li>• It&apos;s commonly used in business, academic, and formal contexts.</li>
            <li>• Often implies effort or intentional action.</li>
            <li>• The word suggests gaining something valuable or important.</li>
            <li>• The word comes from the Latin &quot;acquirere&quot; meaning &quot;to seek in addition.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adquire&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adquire&quot; is never correct. The proper spelling is always &quot;acquire&quot; with &apos;c&apos; instead of &apos;d&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;acquire&quot; as having a &apos;c&apos; - you &quot;acquire&quot; something, so it&apos;s &quot;ac-quire.&quot; The word comes from Latin &quot;acquirere&quot; meaning &quot;to seek in addition.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acquire and obtain?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both mean to get something, &quot;acquire&quot; often implies gaining something through effort or over time, while &quot;obtain&quot; is more general and can refer to any method of getting something.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acquire be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;acquire&quot; is only used as a verb. The noun form would be &quot;acquisition.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is acquire always about buying things?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;acquire&quot; can refer to gaining anything, including skills, knowledge, habits, or characteristics, not just physical objects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adquire&quot; likely occurs because people may confuse it with words that start with &apos;ad&apos; or may not be familiar with the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acquire&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: acquire knowledge, acquire skills, acquire property, acquire a taste, and acquire wealth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;acquire&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;acquire&quot; is appropriate in formal writing, especially in business, academic, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Acquire</strong> is the correct spelling with &apos;c&apos; at the beginning. It means to gain or obtain something, especially through effort or experience. The misspelling &quot;adquire&quot; with &apos;d&apos; is never correct. Use this word when you want to describe gaining something valuable or important.
        </p>
      </div>
    </div>
  )
} 