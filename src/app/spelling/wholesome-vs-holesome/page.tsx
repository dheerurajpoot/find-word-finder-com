import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wholesome or Holesome - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wholesome&quot; and &quot;holesome&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WholesomeVsHolesomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wholesome or Holesome</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wholesome&quot; and &quot;holesome&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Holesome</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Holesome&quot; is a misspelling. The correct spelling is &quot;wholesome&quot; with a &quot;w&quot; at the beginning.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wholesome</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wholesome&quot; is the correct spelling. It means conducive to good health or well-being.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wholesome</strong> is the correct spelling. It is an adjective meaning conducive to good health, well-being, or moral goodness.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Holesome</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wholesome (adjective)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Conducive to good health or well-being; morally good or beneficial; promoting health and happiness.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe things that are good for physical or moral health, often in reference to food, activities, or behavior.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She enjoys <span className="text-green-600 font-semibold">wholesome</span> meals.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The movie has a <span className="text-green-600 font-semibold">wholesome</span> message.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;They lead a <span className="text-green-600 font-semibold">wholesome</span> lifestyle.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;She enjoys <span className="text-red-600 font-semibold">holesome</span> meals&quot; (should be &quot;wholesome&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For healthy:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Healthy</li>
                <li>• Nutritious</li>
                <li>• Beneficial</li>
                <li>• Good</li>
                <li>• Nourishing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For moral:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Virtuous</li>
                <li>• Upright</li>
                <li>• Decent</li>
                <li>• Pure</li>
                <li>• Clean</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wholesome&quot; is spelled with a &quot;w&quot; at the beginning</li>
          <li>• It is an adjective formed from &quot;whole&quot; + &quot;-some&quot;</li>
          <li>• The word comes from Old English &quot;hālsum&quot;</li>
          <li>• Often used in health and wellness contexts</li>
          <li>• Can refer to both physical and moral goodness</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;holesome&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;holesome&quot; is never correct. The correct spelling is always &quot;wholesome&quot; with a &quot;w&quot; at the beginning.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wholesome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;HOHL-suhm&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wholesome&quot; and &quot;holesome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wholesome&quot; is the correct spelling meaning conducive to good health or well-being, while &quot;holesome&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wholesome&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wholesome&quot; can describe food, activities, behavior, or anything that promotes health and well-being.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wholesome&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;holesome&quot;, possibly because they forget the &quot;w&quot; at the beginning. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wholesome</strong> is the correct spelling. It is an adjective meaning conducive to good health, well-being, or moral goodness.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Holesome</strong> is always incorrect. Remember to include the &quot;w&quot; at the beginning when writing this word.
        </p>
      </div>
    </div>
  )
} 