import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cheese or Chease - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cheese&quot; and &quot;chease&quot;. Discover definitions, usage examples, synonyms, notes, and FAQs to avoid common mistakes.',
}

export default function CheeseVsCheasePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cheese or Chease</h1>
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 mb-8">
        <p className="text-lg md:text-xl text-center text-blue-900 font-semibold">Comparing the correct and incorrect spellings of &quot;cheese&quot; and &quot;chease&quot;.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Incorrect Card */}
        <Card className="bg-red-50 border-l-4 border-red-500 w-full md:w-1/2">
          <CardContent className="py-6">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">❌</span>
              <span className="text-2xl font-bold text-red-700">Chease</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">This is a common misspelling and is not recognized as a correct word in English.</p>
          </CardContent>
        </Card>
        {/* Correct Card */}
        <Card className="bg-green-50 border-l-4 border-green-500 w-full md:w-1/2">
          <CardContent className="py-6">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">✅</span>
              <span className="text-2xl font-bold text-green-700">Cheese</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">This is the correct spelling, referring to the dairy product made from curdled or cultured milk.</p>
          </CardContent>
        </Card>
      </div>
      {/* Definition Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed"><b>Cheese</b>: A food made from the pressed curds of milk. Example: &quot;Cheese is a popular ingredient in many dishes.&quot;</p>
      </section>
      {/* Synonyms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <ul className="list-disc list-inside space-y-2">
            <li>Dairy product</li>
            <li>Curds</li>
            <li>Fromage</li>
            <li>Cheddar</li>
            <li>Gouda</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Swiss</li>
            <li>Brie</li>
            <li>Blue cheese</li>
            <li>Feta</li>
            <li>Parmesan</li>
          </ul>
        </div>
      </section>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Cheese&quot; is the correct spelling and is widely used in English-speaking countries.</li>
          <li>&quot;Chease&quot; is a common misspelling, often due to the mistaken use of &quot;a&quot; instead of &quot;e&quot;.</li>
          <li>Always double-check the spelling when writing food names in recipes or menus.</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: What does &quot;cheese&quot; mean?</p>
            <p className="text-lg md:text-xl text-gray-700">A: It is a food made from the pressed curds of milk.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: Is &quot;chease&quot; ever correct?</p>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;chease&quot; is not a recognized word in English and is considered a misspelling.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl text-gray-800">Q: How can I remember the correct spelling?</p>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;cheese&quot; has a double &quot;e&quot; in the middle and ends with &quot;se&quot;.</p>
          </div>
        </div>
      </section>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Always use &quot;cheese&quot; as the correct spelling. &quot;Chease&quot; is a common misspelling and should be avoided in all writing.</p>
      </div>
    </div>
  )
} 