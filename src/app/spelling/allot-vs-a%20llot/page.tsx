import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allot or A Llot - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "allot" and "a llot". Discover definitions, usage examples, and common mistakes to avoid.',
  keywords: 'allot, a llot, spelling, grammar, correct spelling, word comparison',
  openGraph: {
    title: 'Allot or A Llot - Which is Correct?',
    description: 'Learn the correct spelling between "allot" and "a llot". Discover definitions, usage examples, and common mistakes to avoid.',
    type: 'website',
  },
}

export default function AllotVsALlotPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Allot or A Llot - Which is Correct?
      </h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-blue-800">
          <strong>Quick Answer:</strong> &quot;Allot&quot; is the correct spelling. &quot;A llot&quot; is incorrect - it should be written as one word.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">✅ Allot</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Definition:</h3>
              <p className="text-gray-700">
                A verb meaning to distribute or assign something, especially time, money, or space.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Synonyms:</h3>
              <p className="text-gray-700">
                assign, allocate, distribute, apportion, designate, set aside
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Example Sentences:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>We need to allot more time for this project.</li>
                <li>The committee will allot funds to various departments.</li>
                <li>Each student was allotted 15 minutes for their presentation.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">❌ A Llot</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Definition:</h3>
              <p className="text-gray-700">
                This is incorrect. &quot;A llot&quot; should be written as one word: &quot;allot.&quot;
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Common Mistake:</h3>
              <p className="text-gray-700">
                People sometimes separate &quot;a&quot; and &quot;llot&quot; when writing quickly, but it should be one word.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Why It&apos;s Wrong:</h3>
              <p className="text-gray-700">
                &quot;A llot&quot; is not a valid English phrase. The correct form is the single word &quot;allot.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Usage Notes</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Allot</strong> is a verb that means to distribute or assign something. It&apos;s commonly used in formal and business contexts:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Time management:</strong> &quot;We need to allot two hours for the meeting.&quot;</li>
            <li><strong>Resource distribution:</strong> &quot;The budget allots $10,000 for marketing.&quot;</li>
            <li><strong>Space assignment:</strong> &quot;Each team was allotted their own workspace.&quot;</li>
            <li><strong>Task distribution:</strong> &quot;The work was allotted among the team members.&quot;</li>
          </ul>
          <p>
            Remember that &quot;allot&quot; is always written as one word, never as &quot;a llot.&quot; The word comes from Old French &quot;aloter&quot; meaning to assign by lot.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Is &quot;a llot&quot; ever correct?</h3>
            <p className="text-gray-700">No, &quot;a llot&quot; is never correct. It should always be written as one word: &quot;allot.&quot;</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">What&apos;s the difference between allot and a lot?</h3>
            <p className="text-gray-700">&quot;Allot&quot; is a verb meaning to distribute, while &quot;a lot&quot; is a phrase meaning many or much.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Can allot be used in formal writing?</h3>
            <p className="text-gray-700">Yes, &quot;allot&quot; is appropriate in both formal and informal writing, especially in business contexts.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2 text-green-800">Summary</h2>
        <p className="text-green-700">
          <strong>Allot</strong> is the correct spelling - always written as one word. It&apos;s a verb meaning to distribute or assign something. 
          <strong>A llot</strong> is incorrect and should be avoided. Remember that this word is related to distribution and allocation.
        </p>
      </div>
    </div>
  )
} 