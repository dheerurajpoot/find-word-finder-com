import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Writer or Writter - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;writer&quot; and &quot;writter&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WriterVsWritterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Writer or Writter</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;writer&quot; and &quot;writter&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Writter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Writter&quot; is a misspelling. The correct spelling is &quot;writer&quot; with only one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Writer</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Writer&quot; is the correct spelling. It refers to a person who writes or creates written works.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Writer</strong> is the correct spelling. It is a noun referring to a person who writes or creates written works.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writter</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Writer (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A person who writes or creates written works, such as books, articles, or other literary content.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to someone who engages in the activity of writing, whether professionally or as a hobby.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She is a talented <span className="text-green-600 font-semibold">writer</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">writer</span> published a new book.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Many <span className="text-green-600 font-semibold">writers</span> work from home.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She is a talented <span className="text-red-600 font-semibold">writter</span>&quot; (should be &quot;writer&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For authors:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Author</li>
                <li>• Novelist</li>
                <li>• Journalist</li>
                <li>• Columnist</li>
                <li>• Scribe</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For creators:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Creator</li>
                <li>• Composer</li>
                <li>• Penman</li>
                <li>• Wordsmith</li>
                <li>• Scribe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Writer&quot; is spelled with only one &quot;t&quot;</li>
          <li>• It is a noun formed from the verb &quot;write&quot;</li>
          <li>• The word comes from Old English &quot;wrītere&quot;</li>
          <li>• Often used in professional and literary contexts</li>
          <li>• Can refer to various types of writing professionals</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;writter&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;writter&quot; is never correct. The correct spelling is always &quot;writer&quot; with only one &quot;t&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;writer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;RY-ter&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;writer&quot; and &quot;writter&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Writer&quot; is the correct spelling meaning a person who writes, while &quot;writter&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;writer&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;writer&quot; can refer to authors, journalists, content creators, or anyone who engages in writing activities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;writer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;writter&quot;, possibly because they add an extra &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Writer</strong> is the correct spelling. It is a noun referring to a person who writes or creates written works.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writter</strong> is always incorrect. Remember to use only one &quot;t&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 