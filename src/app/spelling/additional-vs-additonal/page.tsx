import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Additional or Additonal - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;additional&quot; and &quot;additonal&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdditionalVsAdditonalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Additional or Additonal
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Additional or Additonal these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Additonal</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Additonal&quot; is a misspelling. The correct spelling has an &apos;i&apos; after the &apos;t&apos; in the middle syllable.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Additional</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Additional&quot; is the correct spelling. It means extra or supplementary.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Additional</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Additional</strong> (adjective): Extra or supplementary; added to what already exists; more than what is already present or required.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• We need <strong>additional</strong> funding to complete the project.</li>
              <li>• Please provide <strong>additional</strong> information about your experience.</li>
              <li>• The company offers <strong>additional</strong> benefits to full-time employees.</li>
              <li>• There will be <strong>additional</strong> charges for late payment.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Additional</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Extra</li>
                <li>• Supplementary</li>
                <li>• Further</li>
                <li>• More</li>
                <li>• Added</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Bonus</li>
                <li>• Supplemental</li>
                <li>• Incremental</li>
                <li>• Excess</li>
                <li>• Spare</li>
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
            <li>• <strong>Additional</strong> is spelled with an &apos;i&apos; after the &apos;t&apos; in the middle syllable.</li>
            <li>• It&apos;s commonly used in formal and informal contexts to indicate something extra.</li>
            <li>• The word can modify both countable and uncountable nouns.</li>
            <li>• Often appears in business, academic, and everyday communication.</li>
            <li>• The word comes from the Latin &quot;additio&quot; meaning &quot;addition.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;additonal&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;additonal&quot; is never correct. The proper spelling is always &quot;additional&quot; with an &apos;i&apos; after the &apos;t.&apos;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;additional&quot; as &quot;add&quot; + &quot;itional&quot; - you&apos;re adding something, so remember the &apos;i&apos; in the middle. The word comes from Latin &quot;additio&quot; meaning &quot;addition.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between additional and extra?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both words mean &quot;more,&quot; but &quot;additional&quot; often implies something supplementary or added to what exists, while &quot;extra&quot; can mean beyond what is expected or required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can additional be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;additional&quot; is only used as an adjective. The noun form would be &quot;addition&quot; or &quot;supplement.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is additional formal or informal?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Additional&quot; is appropriate in both formal and informal contexts. It&apos;s commonly used in business, academic, and everyday communication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;additonal&quot; likely occurs because people may omit the &apos;i&apos; in the middle syllable, possibly due to pronunciation patterns or confusion with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;additional&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: additional cost, additional time, additional information, additional support, additional resources, and additional requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;additional&quot; be used in legal documents?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;additional&quot; is frequently used in legal documents to refer to supplementary terms, conditions, or requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Additional</strong> is the correct spelling with an &apos;i&apos; after the &apos;t&apos;. It means extra or supplementary; added to what already exists. The misspelling &quot;additonal&quot; without the &apos;i&apos; is never correct. Use this word when you want to describe something extra or supplementary to what already exists.
        </p>
      </div>
    </div>
  )
} 