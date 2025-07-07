import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addicted vs Adicted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addicted&quot; and &quot;adicted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AddictedVsAdictedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Addicted vs Adicted
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Addicted or Adicted these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adicted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adicted&quot; is a misspelling. The correct spelling has two &apos;d&apos;s in &quot;addicted.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addicted</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Addicted&quot; is the correct spelling. It means physically or mentally dependent on something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Addicted</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Addicted</strong> (adjective): Physically or mentally dependent on a particular substance, thing, or activity; unable to stop doing or using something; having a compulsive need for something.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• He became <strong>addicted</strong> to pain medication after his surgery.</li>
              <li>• She is <strong>addicted</strong> to checking her phone every few minutes.</li>
              <li>• Many people are <strong>addicted</strong> to social media.</li>
              <li>• The patient was <strong>addicted</strong> to nicotine for years.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Addicted</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Dependent</li>
                <li>• Hooked</li>
                <li>• Obsessed</li>
                <li>• Compulsive</li>
                <li>• Habituated</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Enslaved</li>
                <li>• Captivated</li>
                <li>• Devoted</li>
                <li>• Attached</li>
                <li>• Committed</li>
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
            <li>• <strong>Addicted</strong> is spelled with two &apos;d&apos;s, not one.</li>
            <li>• It&apos;s commonly used in medical and psychological contexts.</li>
            <li>• Can be used for both serious addictions and casual habits.</li>
            <li>• The word implies a strong dependency or compulsion.</li>
            <li>• The word comes from the Latin &quot;addictus&quot; meaning &quot;devoted.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adicted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adicted&quot; is never correct. The proper spelling is always &quot;addicted&quot; with two &apos;d&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;addicted&quot; as having a double &apos;d&apos; - you need to be &quot;add-icted&quot; to remember it. The word comes from Latin &quot;addictus&quot; meaning &quot;devoted.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between addicted and dependent?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both words imply reliance, &quot;addicted&quot; often suggests a compulsive behavior or psychological dependency, while &quot;dependent&quot; can refer to physical reliance on medication or substances.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can addicted be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addicted&quot; is only used as an adjective. The noun form would be &quot;addict&quot; or &quot;addiction.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is addicted always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While &quot;addicted&quot; is often used in negative contexts (substance abuse, harmful behaviors), it can also be used informally to describe positive habits or interests, though this is less common.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adicted&quot; likely occurs because people may not realize there are two &apos;d&apos;s in the word or may confuse it with similar words that have single consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addicted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: addicted to drugs, addicted to alcohol, addicted to gambling, addicted to shopping, addicted to work, and addicted to technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;addicted&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;addicted&quot; is appropriate in formal writing, especially in medical, psychological, or academic contexts where addiction is being discussed.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Addicted</strong> is the correct spelling with two &apos;d&apos;s. It means physically or mentally dependent on a particular substance, thing, or activity. The misspelling &quot;adicted&quot; with one &apos;d&apos; is never correct. Use this word when you want to describe someone who has a compulsive need for something or is unable to stop doing or using something.
        </p>
      </div>
    </div>
  )
} 