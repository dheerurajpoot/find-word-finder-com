import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Written or Writen - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;written&quot; and &quot;writen&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WrittenVsWritenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Written or Writen</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;written&quot; and &quot;writen&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Writen</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Writen&quot; is a misspelling. The correct spelling is &quot;written&quot; with two &quot;t&quot;s.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Written</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Written&quot; is the correct spelling. It is the past participle of the verb &quot;write&quot;.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Written</strong> is the correct spelling. It is the past participle of the irregular verb &quot;write&quot; meaning to have formed letters or words.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writen</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Written (past participle)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The past participle of &quot;write&quot;; to have formed letters or words on a surface using a pen, pencil, or other writing instrument.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Written (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Expressed in writing; recorded or documented in written form.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used in perfect tenses and as an adjective to describe something that has been put into writing.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I have <span className="text-green-600 font-semibold">written</span> the report.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The book was <span className="text-green-600 font-semibold">written</span> by a famous author.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She has <span className="text-green-600 font-semibold">written</span> many articles.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I have <span className="text-red-600 font-semibold">writen</span> the report&quot; (should be &quot;written&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For composed:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Penned</li>
                <li>• Composed</li>
                <li>• Drafted</li>
                <li>• Authored</li>
                <li>• Created</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For recorded:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Documented</li>
                <li>• Recorded</li>
                <li>• Noted</li>
                <li>• Jotted</li>
                <li>• Scribbled</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Written&quot; is spelled with two &quot;t&quot;s</li>
          <li>• It is the past participle of the irregular verb &quot;write&quot;</li>
          <li>• The word comes from Old English &quot;writen&quot;</li>
          <li>• Other forms: write (present), wrote (past)</li>
          <li>• Often used in perfect tenses and passive voice</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;writen&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;writen&quot; is never correct. The correct spelling is always &quot;written&quot; with two &quot;t&quot;s.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;written&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;RIT-n&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;written&quot; and &quot;writen&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Written&quot; is the correct past participle of write, while &quot;writen&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">When do you use &quot;written&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Written&quot; is used in perfect tenses (have written, had written) and passive voice (was written, is written).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;written&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;writen&quot;, possibly because they forget the second &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Written</strong> is the correct spelling. It is the past participle of the irregular verb &quot;write&quot; meaning to have formed letters or words.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writen</strong> is always incorrect. Remember to include both &quot;t&quot;s when writing this word.
        </p>
      </div>
    </div>
  )
} 