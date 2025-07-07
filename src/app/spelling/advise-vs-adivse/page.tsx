import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Advise vs Adivse - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;advise&quot; and &quot;adivse&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdviseVsAdivsePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Advise vs Adivse
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Advise&quot; or &quot;Adivse&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adivse</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adivse&quot; is a misspelling. The correct spelling has &apos;se&apos; at the end, not &apos;se&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advise</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advise&quot; is the correct spelling. It means to give advice or guidance.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Advise</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Advise</strong> (verb): To give advice or guidance to someone; to recommend a course of action; to offer suggestions or counsel; to inform or notify someone about something.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• I would <strong>advise</strong> you to study harder for the exam.</li>
              <li>• The doctor <strong>advised</strong> her patient to quit smoking.</li>
              <li>• Please <strong>advise</strong> me on the best approach to this problem.</li>
              <li>• The consultant <strong>advised</strong> the company on their marketing strategy.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Advise</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Counsel</li>
                <li>• Guide</li>
                <li>• Recommend</li>
                <li>• Suggest</li>
                <li>• Direct</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Inform</li>
                <li>• Notify</li>
                <li>• Instruct</li>
                <li>• Mentor</li>
                <li>• Coach</li>
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
            <li>• <strong>Advise</strong> is spelled with &apos;se&apos; at the end, not &apos;se&apos;.</li>
            <li>• It&apos;s commonly used in professional and formal contexts.</li>
            <li>• Can be used in both personal and business situations.</li>
            <li>• The word implies offering guidance or recommendations.</li>
            <li>• The word comes from the Old French &quot;aviser&quot; meaning &quot;to consider.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adivse&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adivse&quot; is never correct. The proper spelling is always &quot;advise&quot; with &apos;se&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;advise&quot; as ending with &apos;se&apos; - you give &quot;advice&quot; (noun) and you &quot;advise&quot; (verb) someone. The word comes from Old French &quot;aviser&quot; meaning &quot;to consider.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between advise and advice?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Advise&quot; is a verb meaning to give guidance, while &quot;advice&quot; is a noun meaning the guidance itself. You advise someone by giving them advice.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can advise be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advise&quot; is only used as a verb. The noun form is &quot;advice.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is advise always formal?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While &quot;advise&quot; is often used in formal contexts, it can also be used in informal situations. It&apos;s a versatile word that works in both settings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adivse&quot; likely occurs because people may confuse the spelling with similar words or may not be familiar with the correct ending.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;advise&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: advise against, advise on, strongly advise, please advise, advise someone to do something, and advise caution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advise&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;advise&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Advise</strong> is the correct spelling with &apos;se&apos; at the end. It means to give advice or guidance to someone. The misspelling &quot;adivse&quot; is never correct. Use this word when you want to describe the action of offering recommendations, suggestions, or counsel to others.
        </p>
      </div>
    </div>
  )
} 