import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Writing or Writting - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;writing&quot; and &quot;writting&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WritingVsWrittingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Writing or Writting</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;writing&quot; and &quot;writting&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Writting</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Writting&quot; is a misspelling. The correct spelling is &quot;writing&quot; with only one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Writing</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Writing&quot; is the correct spelling. It refers to the activity of writing or written works.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Writing</strong> is the correct spelling. It is a noun referring to the activity of writing or written works, and can also be the present participle of the verb &quot;write&quot;.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writting</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Writing (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The activity or skill of writing; written works or compositions.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Writing (present participle)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The present participle of &quot;write&quot;; the act of forming letters or words.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to the activity of writing, written works, or as a verb form.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She enjoys <span className="text-green-600 font-semibold">writing</span> poetry.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;His <span className="text-green-600 font-semibold">writing</span> is very clear.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I am <span className="text-green-600 font-semibold">writing</span> a letter.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She enjoys <span className="text-red-600 font-semibold">writting</span> poetry&quot; (should be &quot;writing&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For activity:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Composing</li>
                <li>• Penning</li>
                <li>• Drafting</li>
                <li>• Authoring</li>
                <li>• Creating</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For works:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Text</li>
                <li>• Composition</li>
                <li>• Work</li>
                <li>• Document</li>
                <li>• Manuscript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Writing&quot; is spelled with only one &quot;t&quot;</li>
          <li>• It is both a noun and the present participle of &quot;write&quot;</li>
          <li>• The word comes from the verb &quot;write&quot;</li>
          <li>• Often used in educational and literary contexts</li>
          <li>• Can refer to both the activity and the result</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;writting&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;writting&quot; is never correct. The correct spelling is always &quot;writing&quot; with only one &quot;t&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;writing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;RY-ting&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;writing&quot; and &quot;writting&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Writing&quot; is the correct spelling meaning the activity of writing or written works, while &quot;writting&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;writing&quot; be used as both a noun and verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;writing&quot; can be a noun (the activity or skill) and the present participle of the verb &quot;write&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;writing&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;writting&quot;, possibly because they add an extra &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Writing</strong> is the correct spelling. It is a noun referring to the activity of writing or written works, and the present participle of the verb &quot;write&quot;.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writting</strong> is always incorrect. Remember to use only one &quot;t&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 