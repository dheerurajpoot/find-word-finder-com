import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Adverse or Adverse - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;adverse&quot; and &quot;adverse&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdverseVsAdversePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Adverse or Adverse
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Adverse&quot; or &quot;Adverse&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adverse</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adverse&quot; is a misspelling. The correct spelling is &quot;adverse&quot; with &apos;se&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Adverse</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Adverse&quot; is the correct spelling. It means unfavorable or harmful.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Adverse</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Adverse</strong> (adjective): Unfavorable, harmful, or detrimental; acting against or in a contrary direction; opposed to one&apos;s interests; negative or hostile in effect.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The patient experienced <strong>adverse</strong> reactions to the medication.</li>
              <li>• <strong>Adverse</strong> weather conditions forced the cancellation of the event.</li>
              <li>• The company faced <strong>adverse</strong> publicity after the scandal.</li>
              <li>• <strong>Adverse</strong> economic conditions led to job losses.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Adverse</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Unfavorable</li>
                <li>• Harmful</li>
                <li>• Detrimental</li>
                <li>• Negative</li>
                <li>• Hostile</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Contrary</li>
                <li>• Opposed</li>
                <li>• Unfortunate</li>
                <li>• Damaging</li>
                <li>• Inimical</li>
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
            <li>• <strong>Adverse</strong> is spelled with &apos;se&apos; at the end, not &apos;ce&apos;.</li>
            <li>• It&apos;s commonly used in medical, legal, and business contexts.</li>
            <li>• Often describes conditions, effects, or circumstances.</li>
            <li>• The word suggests something working against one&apos;s interests.</li>
            <li>• The word comes from the Latin &quot;adversus&quot; meaning &quot;turned against.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adverse&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adverse&quot; is never correct. The proper spelling is always &quot;adverse&quot; with &apos;se&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;adverse&quot; as coming from &quot;adversus&quot; - the Latin word meaning &quot;turned against.&quot; The &apos;se&apos; ending is consistent with many English words from Latin.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between adverse and averse?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Adverse&quot; means unfavorable or harmful (describes conditions), while &quot;averse&quot; means strongly opposed or unwilling (describes feelings or attitudes).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can adverse be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adverse&quot; is only used as an adjective. The noun form would be &quot;adversity.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is adverse always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;adverse&quot; always has a negative connotation, indicating something harmful or unfavorable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adverse&quot; likely occurs because people may confuse it with words that have &apos;ce&apos; endings or may not be familiar with the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;adverse&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: adverse effects, adverse conditions, adverse reaction, adverse weather, adverse circumstances, and adverse impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adverse&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;adverse&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Adverse</strong> is the correct spelling with &apos;se&apos; at the end. It means unfavorable or harmful. The misspelling &quot;adverse&quot; with &apos;ce&apos; is never correct. Use this word when you want to describe something that is detrimental or working against one&apos;s interests.
        </p>
      </div>
    </div>
  )
} 