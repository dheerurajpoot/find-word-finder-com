import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Warranty or Warrenty - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;warranty&quot; and &quot;warrenty&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WarrantyVsWarrentyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Warranty or Warrenty</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;warranty&quot; and &quot;warrenty&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Warrenty</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Warrenty&quot; is a misspelling. The correct spelling is &quot;warranty&quot; with an &quot;a&quot; after the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Warranty</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Warranty&quot; is the correct spelling. It refers to a written guarantee given to the purchaser of a product by its manufacturer.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Warranty</strong> is the correct spelling. It is a noun meaning a written guarantee, typically for a product or service.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Warrenty</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Warranty (noun)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A written guarantee, issued to the purchaser of an article by its manufacturer, promising to repair or replace it if necessary within a specified period of time.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used in legal, commercial, and consumer contexts to refer to product guarantees.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The car comes with a three-year <span className="text-green-600 font-semibold">warranty</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;Make sure to read the <span className="text-green-600 font-semibold">warranty</span> before purchasing.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">warranty</span> covers all manufacturing defects.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;The car comes with a three-year <span className="text-red-600 font-semibold">warrenty</span>&quot; (should be &quot;warranty&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For guarantee:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Guarantee</li>
                <li>• Assurance</li>
                <li>• Pledge</li>
                <li>• Contract</li>
                <li>• Promise</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For protection:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Protection</li>
                <li>• Safeguard</li>
                <li>• Security</li>
                <li>• Coverage</li>
                <li>• Indemnity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Warranty&quot; is spelled with an &quot;a&quot; after the &quot;r&quot;</li>
          <li>• It is a noun used in legal and commercial contexts</li>
          <li>• The word comes from Old North French &quot;warantie&quot;</li>
          <li>• Often used for products, services, and legal agreements</li>
          <li>• &quot;Warrenty&quot; is never correct in English</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;warrenty&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;warrenty&quot; is never correct. The correct spelling is always &quot;warranty&quot; with an &quot;a&quot; after the &quot;r&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;warranty&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WAHR-uhn-tee&quot; with the stress on the first syllable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;warranty&quot; and &quot;warrenty&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Warranty&quot; is the correct spelling meaning a written guarantee, while &quot;warrenty&quot; is simply a misspelling that should never be used.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Can &quot;warranty&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, &quot;warranty&quot; can refer to product guarantees, legal assurances, or service contracts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;warranty&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly spell it as &quot;warrenty&quot;, possibly because of the similar pronunciation. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Warranty</strong> is the correct spelling. It is a noun meaning a written guarantee for a product or service.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Warrenty</strong> is always incorrect. Remember to use an &quot;a&quot; after the &quot;r&quot; when writing this word.
        </p>
      </div>
    </div>
  )
} 