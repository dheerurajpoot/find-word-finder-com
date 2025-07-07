import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admissible vs Admissable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;admissible&quot; and &quot;admissable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdmissibleVsAdmissablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Admissible vs Admissable
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Admissible or Admissable these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Admissable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Admissable&quot; is a misspelling. The correct spelling has &apos;ible&apos; instead of &apos;able&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Admissible</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Admissible&quot; is the correct spelling. It means acceptable or allowed, especially in legal contexts.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Admissible</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Admissible</strong> (adjective): Acceptable or valid, especially in a court of law; capable of being admitted or allowed; worthy of being accepted or considered; legally acceptable as evidence.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The evidence was ruled <strong>admissible</strong> by the judge.</li>
              <li>• Only <strong>admissible</strong> documents will be considered in the hearing.</li>
              <li>• The testimony was not <strong>admissible</strong> due to hearsay rules.</li>
              <li>• The court found the expert opinion <strong>admissible</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Admissible</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Acceptable</li>
                <li>• Valid</li>
                <li>• Permissible</li>
                <li>• Allowable</li>
                <li>• Legitimate</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Suitable</li>
                <li>• Appropriate</li>
                <li>• Qualified</li>
                <li>• Authorized</li>
                <li>• Sanctioned</li>
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
            <li>• <strong>Admissible</strong> is spelled with &apos;ible&apos;, not &apos;able&apos;.</li>
            <li>• It&apos;s commonly used in legal and formal contexts.</li>
            <li>• Often refers to evidence or testimony in court.</li>
            <li>• The word implies meeting certain standards or requirements.</li>
            <li>• The word comes from the Latin &quot;admissibilis&quot; meaning &quot;that may be admitted.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;admissable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admissable&quot; is never correct. The proper spelling is always &quot;admissible&quot; with &apos;ible&apos; instead of &apos;able&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;admissible&quot; as ending with &apos;ible&apos; - it&apos;s &quot;admiss-ible&quot; to remember it. The word comes from Latin &quot;admissibilis&quot; meaning &quot;that may be admitted.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between admissible and acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both mean suitable, &quot;admissible&quot; is more formal and often used in legal contexts to refer to evidence or testimony, while &quot;acceptable&quot; is more general and everyday.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can admissible be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;admissible&quot; is only used as an adjective. The noun form would be &quot;admissibility.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is admissible always about legal matters?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While &quot;admissible&quot; is commonly used in legal contexts, it can also be used more broadly to mean acceptable or valid in other formal situations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;admissable&quot; likely occurs because people may confuse it with other words that end in &apos;able&apos; or may not be familiar with the correct &apos;ible&apos; ending.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;admissible&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: admissible evidence, admissible testimony, admissible in court, admissible documents, and admissible proof.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;admissible&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;admissible&quot; is appropriate in formal writing, especially in legal, academic, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Admissible</strong> is the correct spelling with &apos;ible&apos; at the end. It means acceptable or valid, especially in legal contexts. The misspelling &quot;admissable&quot; with &apos;able&apos; is never correct. Use this word when you want to describe something that is acceptable, valid, or legally allowed.
        </p>
      </div>
    </div>
  )
} 