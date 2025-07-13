import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benign vs Beign - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "benign" and "beign". Discover definitions, examples, and tips to remember the right spelling.',
}

export default function BenignVsBeignPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Benign or Beign</h1>
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
              <h2 className="text-2xl font-bold text-red-800">Beign</h2>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              This is the incorrect spelling. &quot;Beign&quot; is a common misspelling that omits the &quot;n&quot;.
            </p>
          </div>

          {/* Correct Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-800">Benign</h2>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              This is the correct spelling. &quot;Benign&quot; comes from the Latin word &quot;benignus.&quot;
            </p>
          </div>
        </div>

        {/* Definition Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Benign (adjective)</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Gentle and kindly; not harmful in effect; in medical terms, not malignant or cancerous.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Examples:</h4>
              <ul className="text-lg md:text-xl text-gray-700 space-y-2">
                <li>• The tumor was <strong>benign</strong> and not life-threatening.</li>
                <li>• She had a <strong>benign</strong> smile that put everyone at ease.</li>
                <li>• The <strong>benign</strong> weather made for a perfect picnic day.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Synonyms Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Synonyms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">For &quot;benign&quot;:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Harmless</li>
                <li>• Gentle</li>
                <li>• Kindly</li>
                <li>• Mild</li>
                <li>• Non-threatening</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Related Terms:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Innocuous</li>
                <li>• Benevolent</li>
                <li>• Gracious</li>
                <li>• Favorable</li>
                <li>• Propitious</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• &quot;Benign&quot; comes from the Latin word &quot;benignus&quot; meaning kind or good.</li>
            <li>• The word has two syllables: &quot;be-nign&quot; with the stress on the second syllable.</li>
            <li>• &quot;Beign&quot; is a phonetic misspelling that omits the &quot;n&quot; sound.</li>
            <li>• In medical terminology, &quot;benign&quot; specifically means not cancerous or malignant.</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Why does &quot;benign&quot; have an &quot;n&quot;?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Benign&quot; has an &quot;n&quot; because it comes from the Latin word &quot;benignus,&quot; which includes the &quot;n&quot; sound.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;beign&quot; ever correct?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                No, &quot;beign&quot; is never correct in English. It&apos;s always a misspelling of &quot;benign.&quot;
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;benign&quot; and &quot;malignant&quot;?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                In medical terms, &quot;benign&quot; means not cancerous or harmful, while &quot;malignant&quot; means cancerous and potentially life-threatening.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How can I remember the correct spelling?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Remember that &quot;benign&quot; comes from Latin &quot;benignus&quot; and has the same &quot;n&quot; sound. Think of &quot;be-nign&quot; as two syllables.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Are there other words that follow this same pattern?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Yes! Words like &quot;malign&quot; (from Latin &quot;malignus&quot;), &quot;design&quot; (from Latin &quot;designare&quot;), and &quot;sign&quot; (from Latin &quot;signum&quot;) all have similar patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>&quot;Benign&quot;</strong> is the correct spelling, while <strong>&quot;beign&quot;</strong> is incorrect. The word comes from the Latin &quot;benignus&quot; and means gentle, kindly, or not harmful. In medical contexts, it specifically refers to non-cancerous conditions. Always use &quot;benign&quot; in formal and informal writing.
          </p>
        </div>
      </div>
    </div>
  )
} 