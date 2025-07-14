import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coffee or Cafee - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coffee&quot; and &quot;cafee&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CoffeeVsCafeePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coffee or Cafee</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;coffee&quot; and &quot;cafee&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cafee</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cafee&quot; is a misspelling. The correct spelling is &quot;coffee&quot; with &quot;ff&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Coffee</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Coffee&quot; is the correct spelling. It is a hot beverage made from roasted coffee beans.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Coffee (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A hot beverage made from roasted coffee beans; the beans themselves; a café or coffee shop.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I drink <strong>coffee</strong> every morning.</li>
                  <li>• The <strong>coffee</strong> beans were freshly roasted.</li>
                  <li>• Let&apos;s meet at the <strong>coffee</strong> shop.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cafee (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cafee&quot; is a misspelling of &quot;coffee&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cafee&quot; is not used in standard English.</li>
                  <li>• Always use <strong>coffee</strong> when referring to the beverage.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Coffee:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Java</li>
                <li>• Joe</li>
                <li>• Brew</li>
                <li>• Caffeine</li>
                <li>• Morning cup</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cafee:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Coffee</strong> is spelled with &quot;ff&quot; in the middle, not &quot;f.&quot;</li>
            <li>• The word comes from Arabic &quot;qahwah&quot; through Turkish &quot;kahve.&quot;</li>
            <li>• Used in both formal and informal contexts.</li>
            <li>• Can refer to the beverage, beans, or a café.</li>
            <li>• &quot;Cafee&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cafee&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cafee&quot; is never correct. The proper spelling is always &quot;coffee.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cof-fee&quot; - the word has two &quot;f&quot;s in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of coffee?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;coffees&quot; - just add an &quot;s&quot; to the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different types of coffee?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common types include espresso, latte, cappuccino, americano, and drip coffee.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cafee&quot; likely occurs because of pronunciation patterns or confusion about the double &quot;f.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;coffee&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: coffee break, coffee table, coffee shop, and coffee maker.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can coffee be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;coffee&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between coffee and café?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Coffee&quot; refers to the beverage, while &quot;café&quot; refers to a restaurant or coffee shop.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Coffee</strong> is the correct spelling with &quot;ff&quot; in the middle. It is a hot beverage made from roasted coffee beans. The misspelling &quot;cafee&quot; is never correct. Think of it as &quot;cof-fee&quot; to remember the correct spelling.</p>
      </div>
    </div>
  )
} 