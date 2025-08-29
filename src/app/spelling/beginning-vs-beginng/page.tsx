import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beginning vs Beginng - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "beginning" and "beginng". Discover definitions, examples, and tips to remember the right spelling.',
}

export default function BeginningVsBeginngPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Beginning or Beginng</h1>
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
              <h2 className="text-2xl font-bold text-red-800">Beginng</h2>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              This is the incorrect spelling. &quot;Beginng&quot; is a common misspelling that omits the &quot;i&quot; and second &quot;n&quot;.
            </p>
          </div>

          {/* Correct Card */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-800">Beginning</h2>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              This is the correct spelling. &quot;Beginning&quot; comes from the word &quot;begin&quot; with the suffix &quot;-ing&quot;.
            </p>
          </div>
        </div>

        {/* Definition Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Beginning (noun)</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The point in time or space at which something starts; the first part or early stage of something.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Beginning (verb)</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The present participle of &quot;begin,&quot; meaning to start or commence something.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Examples:</h4>
              <ul className="text-lg md:text-xl text-gray-700 space-y-2">
                <li>• The <strong>beginning</strong> of the movie was exciting.</li>
                <li>• She was <strong>beginning</strong> to understand the concept.</li>
                <li>• At the <strong>beginning</strong> of the year, we make resolutions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Synonyms Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Synonyms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">For &quot;beginning&quot; (noun):</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Start</li>
                <li>• Commencement</li>
                <li>• Onset</li>
                <li>• Outset</li>
                <li>• Genesis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Related Terms:</h3>
              <ul className="text-lg md:text-xl text-blue-700 space-y-2">
                <li>• Origin</li>
                <li>• Inception</li>
                <li>• Dawn</li>
                <li>• Opening</li>
                <li>• Threshold</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• &quot;Beginning&quot; is formed by adding the suffix &quot;-ing&quot; to the verb &quot;begin.&quot;</li>
            <li>• The word &quot;begin&quot; has two &quot;n&quot;s, so &quot;beginning&quot; also has two &quot;n&quot;s.</li>
            <li>• &quot;Beginng&quot; is a phonetic misspelling that omits the &quot;i&quot; and second &quot;n.&quot;</li>
            <li>• This pattern is consistent with other words like &quot;running&quot; (from &quot;run&quot;) and &quot;sitting&quot; (from &quot;sit&quot;).</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Why does &quot;beginning&quot; have two &quot;n&quot;s?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Beginning&quot; has two &quot;n&quot;s because it comes from the word &quot;begin&quot; which already has two &quot;n&quot;s. When adding the suffix &quot;-ing,&quot; we keep the original spelling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;beginng&quot; ever correct?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                No, &quot;beginng&quot; is never correct in standard English. It&apos;s always a misspelling of &quot;beginning.&quot;
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;beginning&quot; and &quot;beginng&quot;?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                &quot;Beginning&quot; is the correct spelling meaning the start of something, while &quot;beginng&quot; is simply incorrect with missing letters.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">How can I remember the correct spelling?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Remember that &quot;beginning&quot; comes from &quot;begin&quot; + &quot;ing.&quot; Since &quot;begin&quot; has two &quot;n&quot;s, &quot;beginning&quot; also has two &quot;n&quot;s.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Are there other words that follow this same pattern?</h3>
              <p className="text-lg md:text-xl text-gray-700">
                Yes! Words like &quot;running&quot; (from &quot;run&quot;), &quot;sitting&quot; (from &quot;sit&quot;), &quot;swimming&quot; (from &quot;swim&quot;), and &quot;winning&quot; (from &quot;win&quot;) all follow similar patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>&quot;Beginning&quot;</strong> is the correct spelling, while <strong>&quot;beginng&quot;</strong> is incorrect. The word is formed by adding the suffix &quot;-ing&quot; to &quot;begin,&quot; maintaining the double &quot;n&quot; from the original word. Always use &quot;beginning&quot; when referring to the start of something or as the present participle of &quot;begin.&quot;
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Featured Misspellings */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
            <ul className="space-y-2">
              <li><a href="/spelling/ever-vs-ever" className="text-blue-700 hover:text-blue-900 underline">Ever vs Ever</a></li>
              <li><a href="/spelling/every-vs-every" className="text-blue-700 hover:text-blue-900 underline">Every vs Every</a></li>
              <li><a href="/spelling/everybody-vs-everybody" className="text-blue-700 hover:text-blue-900 underline">Everybody vs Everybody</a></li>
              <li><a href="/spelling/everyone-vs-everyone" className="text-blue-700 hover:text-blue-900 underline">Everyone vs Everyone</a></li>
              <li><a href="/spelling/everything-vs-everything" className="text-blue-700 hover:text-blue-900 underline">Everything vs Everything</a></li>
            </ul>
          </div>

          {/* Related Misspellings */}
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
            <ul className="space-y-2">
              <li><a href="/spelling/start-vs-start" className="text-purple-700 hover:text-purple-900 underline">Start vs Start</a></li>
              <li><a href="/spelling/commencement-vs-commencement" className="text-purple-700 hover:text-purple-900 underline">Commencement vs Commencement</a></li>
              <li><a href="/spelling/onset-vs-onset" className="text-purple-700 hover:text-purple-900 underline">Onset vs Onset</a></li>
              <li><a href="/spelling/outset-vs-outset" className="text-purple-700 hover:text-purple-900 underline">Outset vs Outset</a></li>
              <li><a href="/spelling/genesis-vs-genesis" className="text-purple-700 hover:text-purple-900 underline">Genesis vs Genesis</a></li>
            </ul>
          </div>

          {/* Learned Grammar */}
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
            <ul className="space-y-2">
              <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
              <li><a href="/grammar/gerunds" className="text-green-700 hover:text-green-900 underline">Gerunds</a></li>
              <li><a href="/grammar/ing-endings" className="text-green-700 hover:text-green-900 underline">Ing Endings</a></li>
              <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
              <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 