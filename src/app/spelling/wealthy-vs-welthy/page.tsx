import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wealthy or Welthy - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wealthy&quot; and &quot;welthy&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WealthyVsWelthyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wealthy or Welthy</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wealthy&quot; and &quot;welthy&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Welthy</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Welthy&quot; is a misspelling. The correct spelling is &quot;wealthy&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wealthy</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wealthy&quot; is the correct spelling. It means having a great deal of money, resources, or assets.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wealthy</strong> is the correct spelling. It is an adjective meaning having a great deal of money, resources, or assets.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Welthy</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wealthy (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Having a great deal of money, resources, or assets; rich or affluent.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe people, families, or entities that have substantial financial resources or valuable assets.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She comes from a <span className="text-green-600 font-semibold">wealthy</span> family.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">wealthy</span> businessman donated to charity.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;They live in a <span className="text-green-600 font-semibold">wealthy</span> neighborhood.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She comes from a <span className="text-red-600 font-semibold">welthy</span> family&quot; (should be &quot;wealthy&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For rich:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Rich</li>
                <li>• Affluent</li>
                <li>• Prosperous</li>
                <li>• Well-off</li>
                <li>• Opulent</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For successful:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Successful</li>
                <li>• Well-to-do</li>
                <li>• Moneyed</li>
                <li>• Loaded</li>
                <li>• Flush</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wealthy&quot; is spelled with an &quot;a&quot; after the &quot;e&quot;</li>
          <li>• The word comes from &quot;wealth&quot; + the suffix &quot;-y&quot;</li>
          <li>• It is an adjective describing financial status</li>
          <li>• Often used in economic and social contexts</li>
          <li>• Can also refer to having abundant resources beyond money</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;welthy&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;welthy&quot; is never correct. The correct spelling is always &quot;wealthy&quot; with an &quot;a&quot; after the &quot;e&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wealthy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WEL-thee&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wealthy&quot; and &quot;welthy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wealthy&quot; is the correct spelling meaning rich or affluent, while &quot;welthy&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wealthy&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wealthy&quot; can describe people, families, businesses, or regions that have substantial financial resources or valuable assets.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wealthy&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;welthy&quot;, possibly because they forget the &quot;a&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wealthy</strong> is the correct spelling. It is an adjective meaning having a great deal of money, resources, or assets.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Welthy</strong> is always incorrect. Remember to include the &quot;a&quot; after the &quot;e&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 