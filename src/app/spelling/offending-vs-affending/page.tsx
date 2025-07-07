import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Offending vs Affending - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;offending&quot; and &quot;affending&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OffendingVsAffendingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Offending vs Affending
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Offending&quot; or &quot;Affending&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Affending</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Affending&quot; is a misspelling. The correct spelling is &quot;offending&quot; with &apos;of&apos; at the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Offending</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Offending&quot; is the correct spelling. It means causing displeasure or resentment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Offending</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Offending</strong> (adjective/verb, present participle of &quot;offend&quot;): Causing displeasure, anger, or resentment; being disagreeable or unpleasant; violating a rule or law; causing someone to feel hurt or upset; being objectionable or inappropriate.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• His <strong>offending</strong> behavior upset many people.</li>
              <li>• The <strong>offending</strong> comment was removed from the post.</li>
              <li>• She apologized for her <strong>offending</strong> remarks.</li>
              <li>• The <strong>offending</strong> driver received a ticket.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Offending</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Insulting</li>
                <li>• Upsetting</li>
                <li>• Hurtful</li>
                <li>• Displeasing</li>
                <li>• Objectionable</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Outrageous</li>
                <li>• Provocative</li>
                <li>• Irritating</li>
                <li>• Annoying</li>
                <li>• Disgusting</li>
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
            <li>• <strong>Offending</strong> is spelled with &apos;of&apos; at the beginning, not &apos;aff&apos;.</li>
            <li>• It&apos;s commonly used to describe actions or behaviors that cause displeasure.</li>
            <li>• Often describes something that violates social norms or rules.</li>
            <li>• The word suggests causing negative emotional reactions.</li>
            <li>• The word comes from the Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;affending&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;affending&quot; is never correct. The proper spelling is always &quot;offending&quot; with &apos;of&apos; at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;offending&quot; as starting with &quot;off&quot; - when something is offending, it turns people &quot;off&quot; or away. The word comes from Latin &quot;offendere&quot; meaning &quot;to strike against.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between offending and insulting?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Offending&quot; is broader and can refer to any action that causes displeasure, while &quot;insulting&quot; specifically refers to disrespectful words or actions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can offending be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Offending&quot; is primarily used as an adjective or present participle. The noun form would be &quot;offense&quot; or &quot;offender.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is offending always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offending&quot; always has a negative connotation, indicating actions that cause displeasure or violate norms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;affending&quot; likely occurs because people may not remember the correct &apos;of&apos; beginning or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;offending&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: offending behavior, offending remarks, offending content, and offending party.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;offending&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;offending&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, legal, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Offending</strong> is the correct spelling with &apos;of&apos; at the beginning. It means causing displeasure or resentment. The misspelling &quot;affending&quot; with &apos;aff&apos; is never correct. Use this word when describing actions or behaviors that cause others to feel hurt, upset, or displeased.
        </p>
      </div>
    </div>
  )
} 