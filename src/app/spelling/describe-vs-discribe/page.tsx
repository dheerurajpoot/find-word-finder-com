import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Describe vs Discribe: Which is Correct? | Word Finder',
  description: 'Learn the correct spelling: describe vs discribe. Understand the difference, get memory tricks, and avoid common spelling mistakes.',
  keywords: 'describe vs discribe, spelling, correct spelling, describe spelling, discribe spelling, spelling mistakes',
}

export default function DescribeVsDiscribe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Describe vs Discribe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Which spelling is correct? Learn the difference between these commonly confused words and never make this spelling mistake again.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <p className="text-lg text-gray-700">
            <strong className="text-green-600">Describe</strong> is the correct spelling. 
            <strong className="text-red-600"> Discribe</strong> is incorrect and does not exist in English.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Correct Word */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Describe (Correct)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Definition:</h4>
                <p className="text-gray-700">To give an account in words of someone or something, including all the relevant characteristics, qualities, or events.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>&bull; Can you <strong>describe</strong> what happened?</li>
                  <li>&bull; The book <strong>describes</strong> life in ancient Rome.</li>
                  <li>&bull; She <strong>described</strong> the suspect to the police.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Related Words:</h4>
                <p className="text-gray-700">Description, descriptive, describing, described</p>
              </div>
            </div>
          </div>

          {/* Incorrect Word */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Discribe (Incorrect)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Why it&apos;s wrong:</h4>
                <p className="text-gray-700">This spelling does not exist in English. It&apos;s a common misspelling that people make.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Common Mistakes:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>&bull; People often confuse &quot;de&quot; and &quot;di&quot;</li>
                  <li>&bull; Similar to other &quot;de&quot; words like describe, define, decide</li>
                  <li>&bull; The prefix &quot;de&quot; means &quot;down&quot; or &quot;from&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What to remember:</h4>
                <p className="text-gray-700">Always use &quot;de&quot; at the beginning, never &quot;di&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Tricks */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Memory Tricks & Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Think of &quot;DE&quot; words:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>&bull; <strong>De</strong>scribe</li>
                <li>&bull; <strong>De</strong>fine</li>
                <li>&bull; <strong>De</strong>cide</li>
                <li>&bull; <strong>De</strong>clare</li>
                <li>&bull; <strong>De</strong>termine</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Remember the Pattern:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>&bull; &quot;De&quot; + &quot;scribe&quot; = Describe</li>
                <li>&bull; &quot;De&quot; means &quot;down&quot; or &quot;from&quot;</li>
                <li>&bull; &quot;Scribe&quot; means &quot;to write&quot;</li>
                <li>&bull; So describe = &quot;write down&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Usage Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Correct Usage:</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li>&bull; Please <strong>describe</strong> your experience at the restaurant.</li>
                  <li>&bull; The witness <strong>described</strong> the suspect&apos;s appearance.</li>
                  <li>&bull; This chapter <strong>describes</strong> the historical events.</li>
                  <li>&bull; Can you <strong>describe</strong> how to solve this problem?</li>
                  <li>&bull; The painting <strong>describes</strong> a beautiful sunset.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Incorrect Usage:</h3>
              <div className="bg-red-50 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li>&bull; ❌ Please <strong>discribe</strong> your experience. (Wrong!)</li>
                  <li>&bull; ❌ The witness <strong>discribed</strong> the suspect. (Wrong!)</li>
                  <li>&bull; ❌ This chapter <strong>discribes</strong> the events. (Wrong!)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Etymology */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Etymology & History</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              The word <strong>describe</strong> comes from the Latin <em>describere</em>, which combines:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>&bull; <strong>de-</strong> (meaning &quot;down&quot; or &quot;from&quot;)</li>
              <li>&bull; <strong>scribere</strong> (meaning &quot;to write&quot;)</li>
            </ul>
            <p className="text-gray-700">
              So literally, <strong>describe</strong> means &quot;to write down&quot; or &quot;to write from above.&quot; 
              This etymology helps explain why we use &quot;de&quot; and not &quot;di.&quot;
            </p>
          </div>
        </div>

        {/* Common Confusions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Common Confusions</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              People often confuse <strong>describe</strong> with other similar words:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Describe vs Prescribe:</h4>
                <p className="text-gray-700">
                  <strong>Describe</strong> = to explain or tell about something<br/>
                  <strong>Prescribe</strong> = to recommend or order (like medicine)
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Describe vs Inscribe:</h4>
                <p className="text-gray-700">
                  <strong>Describe</strong> = to explain in words<br/>
                  <strong>Inscribe</strong> = to write or carve on a surface
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">✍️ Practice Exercises</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fill in the blanks:</h3>
              <div className="space-y-3">
                <p className="text-gray-700">1. Can you _____ what you saw? (describe/discribe)</p>
                <p className="text-gray-700">2. The book _____ life in the 1800s. (describes/discribes)</p>
                <p className="text-gray-700">3. She _____ the suspect perfectly. (described/discribed)</p>
                <p className="text-gray-700">4. This painting _____ a beautiful landscape. (describes/discribes)</p>
                <p className="text-gray-700">5. Please _____ your symptoms to the doctor. (describe/discribe)</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Answers:</h4>
              <p className="text-blue-700">1. describe, 2. describes, 3. described, 4. describes, 5. describe</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is &quot;discribe&quot; ever correct?</h3>
              <p className="text-gray-700">No, &quot;discribe&quot; is never correct in English. It&apos;s always a spelling mistake.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why do people spell it wrong?</h3>
              <p className="text-gray-700">People often confuse the prefixes &quot;de-&quot; and &quot;di-&quot;. The correct prefix is &quot;de-&quot; which means &quot;down&quot; or &quot;from.&quot;</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Are there other words like this?</h3>
              <p className="text-gray-700">Yes! Many words use the &quot;de-&quot; prefix: define, decide, declare, determine, describe, etc.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How can I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of other &quot;de&quot; words like define and decide. The pattern is consistent: &quot;de&quot; + the rest of the word.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is this a common mistake?</h3>
              <p className="text-gray-700">Yes, this is a very common spelling mistake, especially among people learning English or those who don&apos;t see the word written often.</p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Related Spelling Comparisons</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/spelling/define-vs-defin" className="block text-blue-600 hover:text-blue-800 font-medium">
              Define vs Defin
            </Link>
            <Link href="/spelling/decide-vs-decid" className="block text-blue-600 hover:text-blue-800 font-medium">
              Decide vs Decid
            </Link>
            <Link href="/spelling/declare-vs-declar" className="block text-blue-600 hover:text-blue-800 font-medium">
              Declare vs Declar
            </Link>
            <Link href="/spelling/determine-vs-determin" className="block text-blue-600 hover:text-blue-800 font-medium">
              Determine vs Determin
            </Link>
          </div>
        </div>

        {/* End Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">📚 Summary</h2>
          <div className="space-y-4 text-lg">
            <p><strong>Remember:</strong> <strong>Describe</strong> is always spelled with &quot;de&quot; at the beginning, never &quot;di.&quot;</p>
            <p><strong>Key Points:</strong></p>
            <ul className="ml-6 space-y-2">
              <li>&bull; ✅ <strong>Describe</strong> = Correct spelling</li>
              <li>&bull; ❌ <strong>Discribe</strong> = Incorrect spelling</li>
              <li>&bull; Think of other &quot;de&quot; words: define, decide, declare</li>
              <li>&bull; The prefix &quot;de&quot; means &quot;down&quot; or &quot;from&quot;</li>
              <li>&bull; &quot;Scribe&quot; means &quot;to write&quot;</li>
            </ul>
            <p><strong>Memory Trick:</strong> &quot;De&quot; + &quot;scribe&quot; = &quot;write down&quot; = describe!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

