import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Buffet or Buffey - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;buffet&quot; and &quot;buffey&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuffetVsBuffeyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Buffet or Buffey
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Buffet&quot; or &quot;Buffey&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buffey</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Buffey&quot; is a misspelling. The correct spelling ends with &apos;et&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Buffet</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Buffet&quot; is the correct spelling. It&apos;s a meal where guests serve themselves.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Buffet</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Buffet</strong> (noun): A meal where guests serve themselves from a variety of dishes displayed on a table; a counter or table where food is displayed for self-service; a piece of furniture with drawers and shelves for storing dishes.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The hotel offered a breakfast <strong>buffet</strong> with many options.</li>
              <li>• We enjoyed the Sunday brunch <strong>buffet</strong> at the restaurant.</li>
              <li>• The wedding reception featured a lavish <strong>buffet</strong> dinner.</li>
              <li>• She stored her china in the antique <strong>buffet</strong> cabinet.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Buffet</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Smorgasbord</li>
                <li>• Spread</li>
                <li>• Feast</li>
                <li>• Banquet</li>
                <li>• Self-service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Sideboard</li>
                <li>• Credenza</li>
                <li>• Server</li>
                <li>• Food table</li>
                <li>• Dining furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Buffet</strong> is spelled with &apos;et&apos; at the end, not &apos;ey&apos;.</li>
            <li>• The pronunciation is &quot;buh-FAY&quot; or &quot;BOO-fay&quot; (French pronunciation).</li>
            <li>• It&apos;s both a noun (meal/furniture) and a verb (to buffet).</li>
            <li>• Commonly used in dining and hospitality contexts.</li>
            <li>• The word comes from French &quot;buffet&quot; meaning &quot;sideboard&quot; or &quot;counter.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buffey&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;buffey&quot; is never correct. The proper spelling is always &quot;buffet&quot; with &apos;et&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;buffet&quot; as having the same &apos;et&apos; ending as other French words like &quot;ballet,&quot; &quot;beret,&quot; and &quot;bouquet.&quot; The &apos;et&apos; ending is the key to the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a buffet and a restaurant?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: A &quot;buffet&quot; refers to a style of meal service where guests serve themselves from displayed dishes, while a &quot;restaurant&quot; is the establishment itself. Many restaurants offer buffet service as an option.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce buffet?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The pronunciation is &quot;buh-FAY&quot; or &quot;BOO-fay&quot; (using the French pronunciation). Some people also say &quot;BUH-fit&quot; (English pronunciation), but the French pronunciation is more common.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buffet be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Buffet&quot; is appropriate in all types of writing, including formal contexts. It&apos;s the standard English word for this type of meal service and is used in academic, business, and professional writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;buffet&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: buffet dinner, buffet lunch, buffet breakfast, buffet table, buffet style, and buffet restaurant. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;buffey&quot; because they might be thinking of words that end in &apos;ey&apos; like &quot;honey&quot; or &quot;money.&quot; The French &apos;et&apos; ending can be unfamiliar to some English speakers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is buffet related to any other words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Buffet&quot; is related to words like &quot;buffeting&quot; (being hit repeatedly), &quot;buffet car&quot; (dining car on a train), and &quot;buffet style&quot; (self-service dining). All share the same French root.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Buffet</strong> is the correct spelling with &apos;et&apos; at the end. It&apos;s a meal where guests serve themselves from a variety of dishes. The misspelling &quot;buffey&quot; is never correct. This word is commonly used in dining and hospitality contexts and follows the same French &apos;et&apos; pattern as other borrowed words.
        </p>
      </div>
    </div>
  )
} 