import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Advance or Advance - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;advance&quot; and &quot;advance&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdvanceVsAdvancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Advance or Advance
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Advance or Advance these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Advance</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Advance&quot; is a misspelling. The correct spelling has a &apos;c&apos; before the &apos;e&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advance&quot; is the correct spelling. It means to move forward or progress.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Advance</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Advance</strong> (verb/noun): To move forward or make progress; to promote or raise to a higher position; to provide money before it is due; to suggest or propose something; a forward movement or progress.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The army continued to <strong>advance</strong> toward the city.</li>
              <li>• Technology continues to <strong>advance</strong> rapidly.</li>
              <li>• She received an <strong>advance</strong> on her salary.</li>
              <li>• The company made significant <strong>advances</strong> in research.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Advance</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Progress</li>
                <li>• Move forward</li>
                <li>• Proceed</li>
                <li>• Develop</li>
                <li>• Improve</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Promote</li>
                <li>• Elevate</li>
                <li>• Upgrade</li>
                <li>• Enhance</li>
                <li>• Evolve</li>
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
            <li>• <strong>Advance</strong> is spelled with a &apos;c&apos; before the &apos;e&apos;, not without it.</li>
            <li>• It&apos;s commonly used in both formal and informal contexts.</li>
            <li>• Often used in military, business, and everyday contexts.</li>
            <li>• Can be used as both a verb and a noun.</li>
            <li>• The word comes from the Latin &quot;abante&quot; meaning &quot;from before.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;advance&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advance&quot; is never correct. The proper spelling is always &quot;advance&quot; with a &apos;c&apos; before the &apos;e&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;advance&quot; as being related to &quot;advantage&quot; - both have a &apos;c&apos; and relate to moving forward or gaining an edge. The word means to move forward, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;advance&quot; and &quot;progress&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Advance&quot; emphasizes moving forward or making forward movement, while &quot;progress&quot; focuses on development or improvement over time. &quot;Advance&quot; suggests forward motion, while &quot;progress&quot; suggests development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advance&quot; be used in military contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Advance&quot; is commonly used in military contexts to describe forward movement of troops. For example: &quot;The troops advanced toward the enemy position&quot; or &quot;The advance was halted by enemy fire.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;advance&quot; related to &quot;advanced&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Advance&quot; is the base form, while &quot;advanced&quot; is the adjective form. Both words share the same root and correct spelling pattern with a &apos;c&apos; before the &apos;e&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;advance&quot; likely occurs because people may not hear the &apos;c&apos; sound clearly in pronunciation, or they might think it follows a simpler spelling pattern without the &apos;c&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;advance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: advance notice, advance payment, advance warning, advance planning, advance booking, and advance copy. The word is often used in contexts involving forward movement or preparation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advance&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;advance&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, military, and professional contexts to describe forward movement or progress.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Advance</strong> is the correct spelling with a &apos;c&apos; before the &apos;e&apos;. It means to move forward or make progress. The misspelling &quot;advance&quot; without the &apos;c&apos; is never correct. Use this word when you want to describe forward movement, progress, or preparation.
        </p>
      </div>
    </div>
  )
} 