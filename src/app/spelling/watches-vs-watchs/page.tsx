import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Watches or Watchs - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;watches&quot; and &quot;watchs&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WatchesVsWatchsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Watches or Watchs</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;watches&quot; and &quot;watchs&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Watchs</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Watchs&quot; is a misspelling. The correct plural of &quot;watch&quot; is &quot;watches&quot; with an &quot;e&quot; before the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Watches</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Watches&quot; is the correct plural form of &quot;watch&quot; (the timepiece or the verb).</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Watches</strong> is the correct plural form of &quot;watch&quot;. It refers to more than one timepiece or the third person singular present tense of the verb &quot;to watch&quot;.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Watchs</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Watches (noun, plural)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Plural of &quot;watch&quot;; timepieces worn on the wrist or carried in a pocket.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Watches (verb, third person singular)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Third person singular present tense of &quot;to watch&quot;; to look at or observe attentively.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to multiple timepieces or the act of observing by someone (he/she/it watches).
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He collects vintage <span className="text-green-600 font-semibold">watches</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">watches</span> the sunset every evening.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The store sells luxury <span className="text-green-600 font-semibold">watches</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He collects vintage <span className="text-red-600 font-semibold">watchs</span>&quot; (should be &quot;watches&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For timepieces:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Timepieces</li>
                <li>• Clocks</li>
                <li>• Chronometers</li>
                <li>• Wristwatches</li>
                <li>• Pocket watches</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For observing:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Observes</li>
                <li>• Looks at</li>
                <li>• Monitors</li>
                <li>• Surveys</li>
                <li>• Gazes at</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Watches&quot; is spelled with an &quot;e&quot; before the &quot;s&quot;</li>
          <li>• It is the correct plural form of &quot;watch&quot;</li>
          <li>• The word comes from Old English &quot;wæcce&quot;</li>
          <li>• Used for both timepieces and the verb &quot;to watch&quot;</li>
          <li>• &quot;Watchs&quot; is never correct in English</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;watchs&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;watchs&quot; is never correct. The correct plural is always &quot;watches&quot; with an &quot;e&quot; before the &quot;s&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;watches&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WOTCH-iz&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Why is it &quot;watches&quot; and not &quot;watchs&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">English adds &quot;es&quot; to words ending in &quot;ch&quot; to form the plural, so &quot;watch&quot; becomes &quot;watches&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;watches&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;watches&quot; is also the third person singular present tense of the verb &quot;to watch&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;watches&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;watchs&quot;, possibly because they forget the &quot;e&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Watches</strong> is the correct plural form of &quot;watch&quot; and the third person singular present tense of the verb &quot;to watch&quot;.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Watchs</strong> is always incorrect. Remember to add the &quot;e&quot; before the &quot;s&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 