import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acquisition or Adquisition - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acquisition&quot; and &quot;adquisition&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcquisitionVsAdquisitionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Acquisition or Adquisition
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Acquisition&quot; or &quot;Adquisition&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adquisition</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adquisition&quot; is a misspelling. The correct spelling is &quot;acquisition&quot; with &apos;c&apos; instead of &apos;d&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acquisition</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Acquisition&quot; is the correct spelling. It means the act of acquiring or gaining something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Acquisition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Acquisition</strong> (noun): The act of acquiring or gaining possession of something; something acquired or gained; the process of learning or developing a skill or knowledge; in business, the purchase of one company by another.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The museum&apos;s latest <strong>acquisition</strong> is a rare painting.</li>
              <li>• The company announced the <strong>acquisition</strong> of a smaller competitor.</li>
              <li>• Language <strong>acquisition</strong> is easier for children than adults.</li>
              <li>• The library&apos;s <strong>acquisition</strong>s include many new books this year.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Acquisition</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Purchase</li>
                <li>• Procurement</li>
                <li>• Obtainment</li>
                <li>• Attainment</li>
                <li>• Gain</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Collection</li>
                <li>• Addition</li>
                <li>• Asset</li>
                <li>• Possession</li>
                <li>• Property</li>
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
            <li>• <strong>Acquisition</strong> is spelled with &apos;c&apos;, not &apos;d&apos;.</li>
            <li>• It&apos;s commonly used in business, academic, and formal contexts.</li>
            <li>• Often refers to valuable or important items or knowledge.</li>
            <li>• The word implies intentional effort to gain something.</li>
            <li>• The word comes from the Latin &quot;acquisitionem&quot; meaning &quot;the act of acquiring.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adquisition&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adquisition&quot; is never correct. The proper spelling is always &quot;acquisition&quot; with &apos;c&apos; instead of &apos;d&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;acquisition&quot; as coming from &quot;acquire&quot; - you &quot;acquire&quot; something, so it&apos;s &quot;acquire-ition.&quot; The word comes from Latin &quot;acquisitionem&quot; meaning &quot;the act of acquiring.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acquisition and purchase?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both involve obtaining something, &quot;acquisition&quot; is broader and can refer to gaining anything through various means, while &quot;purchase&quot; specifically refers to buying something with money.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acquisition be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;acquisition&quot; is only used as a noun. The verb form would be &quot;acquire.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is acquisition always about business?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;acquisition&quot; can refer to gaining anything valuable, including knowledge, skills, objects, or companies. It&apos;s not limited to business contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adquisition&quot; likely occurs because people may confuse it with words that start with &apos;ad&apos; or may not be familiar with the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acquisition&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: business acquisition, language acquisition, data acquisition, asset acquisition, and knowledge acquisition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;acquisition&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;acquisition&quot; is appropriate in formal writing, especially in business, academic, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Acquisition</strong> is the correct spelling with &apos;c&apos; at the beginning. It means the act of acquiring or gaining possession of something. The misspelling &quot;adquisition&quot; with &apos;d&apos; is never correct. Use this word when you want to describe the process of gaining something valuable or important.
        </p>
      </div>
    </div>
  )
} 