import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Also vs Aslo - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "also" and "aslo". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AlsoVsAsloPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Also vs Aslo</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">aslo</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">also</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling of the adverb meaning &quot;in addition&quot; or &quot;as well.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Also (adverb)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              An adverb that means &quot;in addition,&quot; &quot;as well,&quot; or &quot;besides.&quot; It is used to add information 
              or indicate that something is true in addition to what has already been mentioned.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>I like pizza, and I <strong>also</strong> like pasta.</li>
              <li>She is smart and <strong>also</strong> beautiful.</li>
              <li>He works hard and <strong>also</strong> studies at night.</li>
              <li>This book is interesting and <strong>also</strong> educational.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;also&quot; and &quot;aslo&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Typographical errors:</strong> The &quot;l&quot; and &quot;o&quot; keys are close on the keyboard</li>
            <li><strong>Fast typing:</strong> Missing letters when typing quickly</li>
            <li><strong>Phonetic similarity:</strong> Both spellings might sound similar when pronounced</li>
            <li><strong>Lack of proofreading:</strong> Not catching the error during review</li>
            <li><strong>Auto-correct issues:</strong> Some spell-checkers might not catch this error</li>
          </ul>
        </div>
      </Card>

      {/* Usage Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Position in sentence:</strong> &quot;Also&quot; can be placed in different positions depending on the emphasis and flow of the sentence.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Common positions:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li><strong>Beginning:</strong> &quot;Also, I want to mention...&quot;</li>
              <li><strong>Middle:</strong> &quot;I also want to go.&quot;</li>
              <li><strong>End:</strong> &quot;I want to go also.&quot;</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> &quot;Also&quot; is often used with &quot;and&quot; to connect ideas: &quot;I like coffee, and I also like tea.&quot;
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Also&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>additionally</li>
              <li>furthermore</li>
              <li>moreover</li>
              <li>besides</li>
              <li>likewise</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Informal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>as well</li>
              <li>too</li>
              <li>in addition</li>
              <li>on top of that</li>
              <li>what&apos;s more</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="mb-8 p-6">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>Use &quot;also&quot; to add information to what has already been stated</li>
            <li>Use &quot;also&quot; to indicate that something is true in addition to something else</li>
            <li>Use &quot;also&quot; to connect related ideas or concepts</li>
            <li>Use &quot;also&quot; to emphasize additional points</li>
            <li>Common contexts include academic writing, professional emails, everyday conversation, formal presentations, and creative writing</li>
            <li>Remember that &quot;also&quot; has two &quot;l&quot;s and ends with &quot;o&quot;</li>
          </ul>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;aslo&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;aslo&quot; is never correct in standard English. It is always a spelling error for &quot;also.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the difference between &quot;also&quot; and &quot;too&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Both mean &quot;in addition,&quot; but &quot;also&quot; is more formal and can be placed in more positions in a sentence. 
              &quot;Too&quot; is more informal and usually comes at the end of a sentence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Can &quot;also&quot; be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;also&quot; can be used at the beginning of a sentence, especially in formal writing. 
              Example: &quot;Also, we need to consider the budget.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I avoid this spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;also&quot; has two &quot;l&quot;s and ends with &quot;o.&quot; Think of it as &quot;all + so&quot; 
              or use spell-check tools to catch the error.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common typographical error, especially when typing quickly or on mobile devices 
              where the &quot;l&quot; and &quot;o&quot; keys are close together.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Also&quot;</strong> is the correct spelling of the adverb meaning &quot;in addition&quot; or &quot;as well.&quot; 
          The spelling &quot;aslo&quot; is incorrect and should never be used. This is typically a typographical error 
          caused by missing the second &quot;l&quot; when typing. Remember that &quot;also&quot; has two &quot;l&quot;s and ends with &quot;o.&quot;
        </p>
      </div>
    </div>
  )
} 