import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wrote or Wrotte - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wrote&quot; and &quot;wrotte&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WroteVsWrottePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wrote or Wrotte</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wrote&quot; and &quot;wrotte&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wrotte</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wrotte&quot; is a misspelling. The correct spelling is &quot;wrote&quot; with only one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wrote</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wrote&quot; is the correct spelling. It is the past tense of the verb &quot;write&quot;.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wrote</strong> is the correct spelling. It is the past tense of the verb &quot;write&quot; meaning to form letters or words on a surface.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wrotte</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wrote (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The past tense of &quot;write&quot;; to have formed letters or words on a surface using a pen, pencil, or other writing instrument.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Write (present tense)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To form letters or words on a surface; to compose or create written content.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe the action of writing that occurred in the past.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">wrote</span> a beautiful letter.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He <span className="text-green-600 font-semibold">wrote</span> the book last year.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I <span className="text-green-600 font-semibold">wrote</span> down the address.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She <span className="text-red-600 font-semibold">wrotte</span> a beautiful letter&quot; (should be &quot;wrote&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For writing:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Penned</li>
                <li>• Composed</li>
                <li>• Drafted</li>
                <li>• Authored</li>
                <li>• Created</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For recording:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Jotted</li>
                <li>• Noted</li>
                <li>• Recorded</li>
                <li>• Documented</li>
                <li>• Scribbled</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wrote&quot; is spelled with only one &quot;t&quot;</li>
          <li>• It is the past tense of the irregular verb &quot;write&quot;</li>
          <li>• The word comes from Old English &quot;wrāt&quot;</li>
          <li>• Other forms: write (present), written (past participle)</li>
          <li>• Often used in storytelling and narrative contexts</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wrotte&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wrotte&quot; is never correct. The correct spelling is always &quot;wrote&quot; with only one &quot;t&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wrote&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;ROHT&quot; with a long &quot;o&quot; sound.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wrote&quot; and &quot;wrotte&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wrote&quot; is the correct spelling meaning the past tense of write, while &quot;wrotte&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wrote&quot; an irregular verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;write&quot; is an irregular verb. Its forms are: write (present), wrote (past), written (past participle).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wrote&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wrotte&quot;, possibly because they add an extra &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wrote</strong> is the correct spelling. It is the past tense of the irregular verb &quot;write&quot; meaning to have formed letters or words.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wrotte</strong> is always incorrect. Remember to use only one &quot;t&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 