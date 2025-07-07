import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Afford vs Aford - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;afford&quot; and &quot;aford&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AffordVsAfordPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Afford vs Aford</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Afford&quot; or &quot;Aford&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aford</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aford&quot; is a misspelling. The correct spelling is &quot;afford&quot; with double &apos;f&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Afford</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Afford&quot; is the correct spelling. It means to have enough money or resources to do something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Afford</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Afford</strong> (verb): To have enough money, time, or resources to be able to do something; to be able to bear the cost of something; to provide or supply.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• I can&apos;t <strong>afford</strong> a new car right now.</li>
              <li>• She could <strong>afford</strong> to take a vacation.</li>
              <li>• We can&apos;t <strong>afford</strong> to make any mistakes.</li>
              <li>• The window <strong>affords</strong> a beautiful view of the garden.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Afford</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Manage</li>
                <li>• Provide</li>
                <li>• Supply</li>
                <li>• Allow</li>
                <li>• Bear</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Sustain</li>
                <li>• Endure</li>
                <li>• Offer</li>
                <li>• Yield</li>
                <li>• Grant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Afford</strong> is spelled with double &apos;f&apos;, not single.</li>
            <li>• Commonly used in financial and resource contexts.</li>
            <li>• Can also mean to provide or supply something.</li>
            <li>• The word comes from Old English &quot;geforthian&quot; meaning &quot;to further&quot; or &quot;to accomplish&quot;.</li>
            <li>• The noun form is &quot;affordability&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aford&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aford&quot; is never correct. The proper spelling is always &quot;afford&quot; with double &apos;f&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;afford&quot; has double &apos;f&apos; like &quot;affect&quot; or &quot;affirm&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between afford and provide?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Afford&quot; means to have the means to do something, while &quot;provide&quot; means to supply or make available.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can afford be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;afford&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is afford always about money?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, it can also refer to time, resources, or opportunities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aford&quot; likely occurs because of confusion about the double &apos;f&apos; or unfamiliarity with the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;afford&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: afford a car, afford to lose, afford the luxury, and afford an opportunity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;afford&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;afford&quot; is commonly used in business, finance, and economics contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Afford</strong> is the correct spelling with double &apos;f&apos;. It means to have enough money, time, or resources to do something. The misspelling &quot;aford&quot; is never correct. Use this word when talking about means, resources, or providing something.</p>
      </div>
    </div>
  )
} 