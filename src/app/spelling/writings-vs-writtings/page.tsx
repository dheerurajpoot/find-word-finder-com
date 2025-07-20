import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Writings or Writtings - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;writings&quot; and &quot;writtings&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WritingsVsWrittingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Writings or Writtings</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;writings&quot; and &quot;writtings&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Writtings</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Writtings&quot; is a misspelling. The correct spelling is &quot;writings&quot; with only one &quot;t&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Writings</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Writings&quot; is the correct spelling. It is the plural form of &quot;writing&quot; meaning written works.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Writings</strong> is the correct spelling. It is the plural form of &quot;writing&quot; and refers to written works, compositions, or literary pieces.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writtings</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Writings (plural noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Written works, compositions, or literary pieces; the plural form of &quot;writing&quot;.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Writing (singular noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The activity or skill of writing; a written work or composition.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to multiple written works, often in academic or literary contexts.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;His <span className="text-green-600 font-semibold">writings</span> are widely studied.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The author&apos;s <span className="text-green-600 font-semibold">writings</span> span many genres.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Ancient <span className="text-green-600 font-semibold">writings</span> reveal much about history.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;His <span className="text-red-600 font-semibold">writtings</span> are widely studied&quot; (should be &quot;writings&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For works:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Works</li>
                <li>• Compositions</li>
                <li>• Texts</li>
                <li>• Literature</li>
                <li>• Publications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For documents:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Documents</li>
                <li>• Papers</li>
                <li>• Manuscripts</li>
                <li>• Scripts</li>
                <li>• Essays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Writings&quot; is spelled with only one &quot;t&quot;</li>
          <li>• It is the plural form of the singular noun &quot;writing&quot;</li>
          <li>• The word comes from the verb &quot;write&quot;</li>
          <li>• Often used in academic and literary contexts</li>
          <li>• Can refer to various types of written content</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;writtings&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;writtings&quot; is never correct. The correct spelling is always &quot;writings&quot; with only one &quot;t&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;writings&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;RY-tingz&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;writings&quot; and &quot;writtings&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Writings&quot; is the correct plural form of writing, while &quot;writtings&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;writings&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;writings&quot; can refer to literary works, academic papers, historical documents, or any collection of written content.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;writings&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;writtings&quot;, possibly because they add an extra &quot;t&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Writings</strong> is the correct spelling. It is the plural form of &quot;writing&quot; and refers to written works or compositions.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Writtings</strong> is always incorrect. Remember to use only one &quot;t&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 