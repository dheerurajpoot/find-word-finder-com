import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Behaviour vs Behavoir - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "behaviour" and "behavoir". Discover definitions, examples, and tips to remember the right spelling.',
}

export default function BehaviourVsBehavoirPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Behaviour or Behavoir</h1>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            <p className="text-lg md:text-xl font-semibold">Spelling Comparison</p>
          </div>
        </div>

        {/* Correct vs Incorrect Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-800">Behavoir</h2>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              This is the incorrect spelling. &quot;Behavoir&quot; is a common misspelling that omits the &quot;u&quot;.
            </p>
          </div>

          {/* Correct Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-800">Behaviour</h2>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              This is the correct spelling. &quot;Behaviour&quot; is the British English spelling of the word.
            </p>
          </div>
        </div>

        {/* Definition Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Behaviour (noun)</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The way in which one acts or conducts oneself, especially toward others; the manner in which a person or animal behaves.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Examples:</h4>
              <ul className="text-lg md:text-xl text-gray-700 space-y-2">
                <li>• His <strong>behaviour</strong> at the party was inappropriate.</li>
                <li>• The child&apos;s <strong>behaviour</strong> improved after the intervention.</li>
                <li>• Animal <strong>behaviour</strong> is fascinating to study.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Synonyms Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Synonyms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">For &quot;behaviour&quot;:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Conduct</li>
                <li>• Demeanor</li>
                <li>• Manner</li>
                <li>• Actions</li>
                <li>• Attitude</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Related Terms:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Disposition</li>
                <li>• Temperament</li>
                <li>• Character</li>
                <li>• Personality</li>
                <li>• Habits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• &quot;Behaviour&quot; is the British English spelling, while &quot;behavior&quot; is the American English spelling.</li>
            <li>• The word comes from the Old French &quot;behaviour&quot; which includes the &quot;u.&quot;</li>
            <li>• &quot;Behavoir&quot; is a phonetic misspelling that omits the &quot;u&quot; sound.</li>
            <li>• This spelling pattern is consistent with other British English words like &quot;colour,&quot; &quot;favour,&quot; and &quot;labour.&quot;</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Why does &quot;behaviour&quot; have a &quot;u&quot;?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Behaviour&quot; has a &quot;u&quot; because it follows British English spelling conventions, which retain the &quot;u&quot; from the original French word.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;behavoir&quot; ever correct?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                No, &quot;behavoir&quot; is never correct in any form of English. It&apos;s always a misspelling of &quot;behaviour&quot; or &quot;behavior.&quot;
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;behaviour&quot; and &quot;behavior&quot;?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Behaviour&quot; is British English spelling, while &quot;behavior&quot; is American English spelling. Both are correct in their respective regions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How can I remember the correct spelling?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Remember that British English keeps the &quot;u&quot; in words like &quot;behaviour,&quot; &quot;colour,&quot; and &quot;favour,&quot; while American English drops it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Are there other words that follow this same pattern?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Yes! British English words like &quot;colour&quot; (vs. &quot;color&quot;), &quot;favour&quot; (vs. &quot;favor&quot;), &quot;labour&quot; (vs. &quot;labor&quot;), and &quot;honour&quot; (vs. &quot;honor&quot;) all follow this pattern.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>&quot;Behaviour&quot;</strong> is the correct British English spelling, while <strong>&quot;behavoir&quot;</strong> is incorrect. The word follows British English conventions by retaining the &quot;u&quot; from its French origin. In American English, the correct spelling is &quot;behavior&quot; (without the &quot;u&quot;).
          </p>
        </div>
      </div>
    </div>
  )
} 