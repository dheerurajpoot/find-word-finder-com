import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Whiskey or Wiskey - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;whiskey&quot; and &quot;wiskey&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WhiskeyVsWiskeyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Whiskey or Wiskey</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;whiskey&quot; and &quot;wiskey&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wiskey</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wiskey&quot; is a misspelling. The correct spelling is &quot;whiskey&quot; with an &quot;h&quot; after the &quot;w&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Whiskey</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Whiskey&quot; is the correct spelling. It refers to a distilled alcoholic beverage made from fermented grain mash.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whiskey</strong> is the correct spelling. It refers to a distilled alcoholic beverage made from fermented grain mash, typically aged in wooden casks.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wiskey</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Whiskey (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A distilled alcoholic beverage made from fermented grain mash, typically including barley, corn, rye, or wheat. It is aged in wooden casks and has a distinctive flavor profile.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to refer to the alcoholic beverage, often in contexts of drinking, distilling, or discussing spirits.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;He enjoys a glass of <span className="text-green-600 font-semibold">whiskey</span> after dinner.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;This <span className="text-green-600 font-semibold">whiskey</span> has been aged for 12 years.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The distillery produces premium <span className="text-green-600 font-semibold">whiskey</span>.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;He enjoys a glass of <span className="text-red-600 font-semibold">wiskey</span> after dinner&quot; (should be &quot;whiskey&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For the beverage:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Bourbon</li>
                <li>• Scotch</li>
                <li>• Rye</li>
                <li>• Spirits</li>
                <li>• Liquor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For alcoholic drinks:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Alcohol</li>
                <li>• Booze</li>
                <li>• Drink</li>
                <li>• Spirit</li>
                <li>• Distilled beverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Whiskey&quot; is spelled with an &quot;h&quot; after the &quot;w&quot;</li>
          <li>• The word comes from Irish &quot;uisce beatha&quot; meaning &quot;water of life&quot;</li>
          <li>• Different countries have different spelling conventions (whiskey vs whisky)</li>
          <li>• American and Irish whiskey typically uses &quot;whiskey&quot;</li>
          <li>• Scottish whisky typically uses &quot;whisky&quot; (without the &quot;e&quot;)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wiskey&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wiskey&quot; is never correct. The correct spelling is always &quot;whiskey&quot; with an &quot;h&quot; after the &quot;w&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;whiskey&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WIS-kee&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;whiskey&quot; and &quot;whisky&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Whiskey&quot; is typically used for American and Irish varieties, while &quot;whisky&quot; is used for Scottish varieties, though this is not a strict rule.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;whiskey&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;whiskey&quot; can refer to the beverage itself, the industry, or be used in various expressions and idioms.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;whiskey&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, many people incorrectly omit the &quot;h&quot; and spell it as &quot;wiskey&quot;. This is a very common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Whiskey</strong> is the correct spelling. It refers to a distilled alcoholic beverage made from fermented grain mash, typically aged in wooden casks.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wiskey</strong> is always incorrect. Remember to include the &quot;h&quot; after the &quot;w&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 