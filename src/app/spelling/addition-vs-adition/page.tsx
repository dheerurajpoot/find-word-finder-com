import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addition vs Adition - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addition&quot; and &quot;adition&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdditionVsAditionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Addition vs Adition
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Addition or Adition these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adition</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adition&quot; is a misspelling. The correct spelling has two &apos;d&apos;s in &quot;addition.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addition</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Addition&quot; is the correct spelling. It means the process of adding or something that is added.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Addition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Addition</strong> (noun): The process of adding numbers or quantities together; something that is added to something else; the act of joining or combining; a mathematical operation that combines numbers.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>addition</strong> of 5 and 3 equals 8.</li>
              <li>• The new wing is a welcome <strong>addition</strong> to the hospital.</li>
              <li>• In <strong>addition</strong> to his salary, he receives benefits.</li>
              <li>• The <strong>addition</strong> of spices improved the flavor.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Addition</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Supplement</li>
                <li>• Extension</li>
                <li>• Appendage</li>
                <li>• Enhancement</li>
                <li>• Inclusion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Attachment</li>
                <li>• Annex</li>
                <li>• Append</li>
                <li>• Combine</li>
                <li>• Merge</li>
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
            <li>• <strong>Addition</strong> is spelled with two &apos;d&apos;s, not one.</li>
            <li>• It&apos;s commonly used in mathematical and general contexts.</li>
            <li>• Can refer to both mathematical operations and physical additions.</li>
            <li>• The word implies adding or joining something.</li>
            <li>• The word comes from the Latin &quot;additio&quot; meaning &quot;a adding.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adition&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adition&quot; is never correct. The proper spelling is always &quot;addition&quot; with two &apos;d&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;addition&quot; as having a double &apos;d&apos; - you need to &quot;add&quot; something, so it has two &apos;d&apos;s. The word comes from Latin &quot;additio&quot; meaning &quot;a adding.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between addition and supplement?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both involve adding something, &quot;addition&quot; is more general and can refer to any joining or combining, while &quot;supplement&quot; specifically refers to something that completes or enhances what already exists.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can addition be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addition&quot; is only used as a noun. The verb form would be &quot;add.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is addition always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Addition&quot; is generally neutral - it simply means adding something, which can be positive, negative, or neutral depending on what is being added and the context.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adition&quot; likely occurs because people may not realize there are two &apos;d&apos;s in the word or may confuse it with similar words that have single consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: in addition to, addition and subtraction, welcome addition, new addition, recent addition, and mathematical addition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;addition&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;addition&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Addition</strong> is the correct spelling with two &apos;d&apos;s. It means the process of adding numbers or quantities together, or something that is added to something else. The misspelling &quot;adition&quot; with one &apos;d&apos; is never correct. Use this word when you want to describe adding, joining, or combining things together.
        </p>
      </div>
    </div>
  )
} 