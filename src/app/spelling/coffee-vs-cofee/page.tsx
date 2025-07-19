import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coffee or Cofee - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coffee&quot; and &quot;cofee&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CoffeeVsCofeePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coffee or Cofee</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;coffee&quot; and &quot;cofee&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cofee</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cofee&quot; is a misspelling. The correct spelling is &quot;coffee&quot; with a double &quot;f&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Coffee</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Coffee&quot; is the correct spelling. It refers to a popular beverage made from roasted coffee beans.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Coffee (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A beverage made from roasted and ground coffee beans, typically served hot.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I drink a cup of <strong>&quot;coffee&quot;</strong> every morning.</li>
                  <li>• She prefers her <strong>&quot;coffee&quot;</strong> black.</li>
                  <li>• The aroma of <strong>&quot;coffee&quot;</strong> filled the room.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cofee (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cofee&quot; is a misspelling of &quot;coffee&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cofee&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;coffee&quot;</strong> when referring to the beverage.</li>
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
                <li>• Brew</li>
                <li>• Espresso</li>
                <li>• Cappuccino</li>
                <li>• Joe</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cofee:</h4>
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
            <li>• <strong>&quot;Coffee&quot;</strong> is spelled with a double &quot;f&quot; in the middle.</li>
            <li>• Used to describe the popular beverage made from coffee beans.</li>
            <li>• The word comes from Italian &quot;caffè&quot; and Turkish &quot;kahve&quot;.</li>
            <li>• &quot;Cofee&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cofee&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cofee&quot; is never correct. The proper spelling is always &quot;coffee.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;f&quot; in the middle of &quot;coffee&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;coffee&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Coffee&quot; means a beverage made from roasted and ground coffee beans.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cofee&quot; may occur due to omitting one of the &quot;f&quot; letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Coffee&quot;</strong> is the correct spelling with a double &quot;f&quot; in the middle. It refers to the popular beverage made from coffee beans. The misspelling &quot;cofee&quot; is never correct. Use &quot;coffee&quot; in all contexts.</p>
      </div>
    </div>
  )
} 