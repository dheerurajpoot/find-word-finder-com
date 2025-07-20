import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wholesaler or Wholeseller - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;wholesaler&quot; and &quot;wholeseller&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WholesalerVsWholesellerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wholesaler or Wholeseller</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;wholesaler&quot; and &quot;wholeseller&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Wholeseller</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Wholeseller&quot; is a misspelling. The correct spelling is &quot;wholesaler&quot; with an &quot;a&quot; not &quot;e&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Wholesaler</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Wholesaler&quot; is the correct spelling. It refers to a person or business that sells goods in large quantities.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wholesaler</strong> is the correct spelling. It is a noun referring to a person or business that sells goods in large quantities to retailers.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wholeseller</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wholesaler (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A person or business that sells goods in large quantities to retailers or other businesses, typically at a discount.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used in business and commerce contexts to refer to suppliers who sell in bulk.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">wholesaler</span> supplies products to local stores.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;We buy from a <span className="text-green-600 font-semibold">wholesaler</span> to get better prices.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">wholesaler</span> offers bulk discounts.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">wholeseller</span> supplies products to local stores&quot; (should be &quot;wholesaler&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For suppliers:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Supplier</li>
                <li>• Distributor</li>
                <li>• Vendor</li>
                <li>• Merchant</li>
                <li>• Dealer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For business:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Business</li>
                <li>• Company</li>
                <li>• Firm</li>
                <li>• Enterprise</li>
                <li>• Outlet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Wholesaler&quot; is spelled with an &quot;a&quot; not &quot;e&quot;</li>
          <li>• It is a noun formed from &quot;wholesale&quot; + &quot;-er&quot;</li>
          <li>• The word comes from &quot;wholesale&quot; meaning selling in large quantities</li>
          <li>• Often used in business and commerce contexts</li>
          <li>• Refers to someone who sells goods in bulk</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;wholeseller&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;wholeseller&quot; is never correct. The correct spelling is always &quot;wholesaler&quot; with an &quot;a&quot; not &quot;e&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;wholesaler&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;HOHL-say-ler&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;wholesaler&quot; and &quot;wholeseller&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Wholesaler&quot; is the correct spelling meaning someone who sells goods in bulk, while &quot;wholeseller&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;wholesaler&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;wholesaler&quot; can refer to businesses that sell various types of goods in large quantities to retailers or other businesses.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;wholesaler&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;wholeseller&quot;, possibly because they confuse it with other words. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Wholesaler</strong> is the correct spelling. It is a noun referring to a person or business that sells goods in large quantities.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Wholeseller</strong> is always incorrect. Remember to use &quot;a&quot; not &quot;e&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 