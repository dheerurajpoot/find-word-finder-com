import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wealth or Welth - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wealth&quot; and &quot;welth&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WealthVsWelthPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wealth or Welth</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wealth&quot; and &quot;welth&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Welth</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Welth&quot; is a misspelling. The correct spelling is &quot;wealth&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wealth</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wealth&quot; is the correct spelling. It refers to an abundance of valuable possessions or money.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wealth</strong> is the correct spelling. It is a noun meaning an abundance of valuable possessions, money, or resources.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Welth</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wealth (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            An abundance of valuable possessions or money; the state of being rich; plentiful supplies of a particular resource.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe financial prosperity, resources, or abundance in general.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He accumulated great <span className="text-green-600 font-semibold">wealth</span> over the years.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Education is a form of <span className="text-green-600 font-semibold">wealth</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The country is known for its natural <span className="text-green-600 font-semibold">wealth</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He accumulated great <span className="text-red-600 font-semibold">welth</span> over the years&quot; (should be &quot;wealth&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For money:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Riches</li>
                <li>• Fortune</li>
                <li>• Assets</li>
                <li>• Capital</li>
                <li>• Property</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For abundance:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Abundance</li>
                <li>• Plenty</li>
                <li>• Prosperity</li>
                <li>• Resources</li>
                <li>• Affluence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wealth&quot; is spelled with an &quot;a&quot; after the &quot;e&quot;</li>
          <li>• It is a noun derived from the word &quot;weal&quot; meaning well-being</li>
          <li>• The word comes from Middle English &quot;wele&quot;</li>
          <li>• Often used in financial and economic contexts</li>
          <li>• Can refer to both material and non-material abundance</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;welth&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;welth&quot; is never correct. The correct spelling is always &quot;wealth&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wealth&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;welth&quot; (with a short "e" and "th" sound at the end).</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wealth&quot; and &quot;welth&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wealth&quot; is the correct spelling meaning abundance of valuable possessions, while &quot;welth&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wealth&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wealth&quot; can refer to money, resources, knowledge, or any form of abundance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wealth&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;welth&quot;, possibly because they omit the "a". This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wealth</strong> is the correct spelling. It is a noun meaning abundance of valuable possessions, money, or resources.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Welth</strong> is always incorrect. Remember to include the "a" after the "e" when writing this word.
        </p>
      </div>
    </div>
  )
} 