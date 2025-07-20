import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Xerox or Zerox - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Xerox&quot; and &quot;Zerox&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function XeroxVsZeroxPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Xerox or Zerox</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Xerox&quot; and &quot;Zerox&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Zerox</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Zerox&quot; is a misspelling. The correct spelling is &quot;Xerox&quot; with an &quot;X&quot; at the beginning.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Xerox</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Xerox&quot; is the correct spelling. It is a trademarked brand name for photocopying technology.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Xerox</strong> is the correct spelling. It is a trademarked brand name for photocopying technology and has become a generic term for photocopying.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Zerox</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Xerox (proper noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A trademarked brand name for photocopying technology and equipment, often used generically to refer to photocopying.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Xerox (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            To make a photocopy of a document using a photocopier.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Origin</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Named after the Xerox Corporation, which developed the first commercial photocopier. The name comes from &quot;xerography&quot; (dry writing).
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I need to <span className="text-green-600 font-semibold">xerox</span> these documents.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">Xerox</span> machine is out of paper.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Can you <span className="text-green-600 font-semibold">xerox</span> this for me?&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I need to <span className="text-red-600 font-semibold">zerox</span> these documents&quot; (should be &quot;xerox&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For photocopying:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Photocopy</li>
                <li>• Copy</li>
                <li>• Duplicate</li>
                <li>• Reproduce</li>
                <li>• Print</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For equipment:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Photocopier</li>
                <li>• Copier</li>
                <li>• Copy machine</li>
                <li>• Duplicator</li>
                <li>• Printer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Xerox&quot; is spelled with an &quot;X&quot; at the beginning, not &quot;Z&quot;</li>
          <li>• It is a trademarked brand name that has become generic</li>
          <li>• The word comes from &quot;xerography&quot; meaning &quot;dry writing&quot;</li>
          <li>• Often used as both a noun and a verb</li>
          <li>• The company name is Xerox Corporation</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;Zerox&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;Zerox&quot; is never correct. The correct spelling is always &quot;Xerox&quot; with an &quot;X&quot; at the beginning.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;Xerox&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;ZEER-oks&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;Xerox&quot; and &quot;Zerox&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Xerox&quot; is the correct spelling of the trademarked brand name, while &quot;Zerox&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;Xerox&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;Xerox&quot; is commonly used as a verb meaning to make a photocopy, though this is technically a trademarked usage.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;Xerox&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;Zerox&quot;, possibly because they confuse the pronunciation with the spelling. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Xerox</strong> is the correct spelling. It is a trademarked brand name for photocopying technology that has become a generic term.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Zerox</strong> is always incorrect. Remember to use &quot;X&quot; at the beginning, not &quot;Z&quot;, when writing this word.
        </p>
      </div>
    </div>
  )
} 