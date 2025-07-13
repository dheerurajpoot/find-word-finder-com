import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Breakfast vs Brekfast - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;breakfast&quot; and &quot;brekfast&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'breakfast, brekfast, spelling, correct spelling, word comparison, English spelling, noun, meal',
  openGraph: {
    title: 'Breakfast vs Brekfast - Which is Correct?',
    description: 'Learn the correct spelling between &quot;breakfast&quot; and &quot;brekfast&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BreakfastVsBrekfastPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Breakfast or Brekfast</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot; Breakfast&quot; and &quot; Brekfast&quot;. This is a noun referring to the first meal of the day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brekfast
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brekfast&quot; is a misspelling of the word &quot;breakfast.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I had brekfast at 8 AM</li>
              <li>• The brekfast menu</li>
              <li>• Continental brekfast</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Breakfast
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Breakfast&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I had breakfast at 8 AM</li>
              <li>• The breakfast menu</li>
              <li>• Continental breakfast</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Breakfast</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Breakfast</strong> (noun): The first meal of the day, typically eaten in the morning.
          </p>
          <p>
            <strong>Breakfast</strong> (noun): The food eaten at this meal.
          </p>
          <p>
            <strong>Breakfast</strong> (verb): To eat breakfast.
          </p>
          <p>
            Used to refer to the morning meal that breaks the overnight fast.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Breakfast</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Morning meal</li>
              <li>• First meal</li>
              <li>• AM meal</li>
              <li>• Early meal</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Brunch (late breakfast)</li>
              <li>• Continental</li>
              <li>• Full English</li>
              <li>• Morning repast</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Breakfast&quot; is always spelled with &quot;ea&quot; in &quot;break&quot;, not &quot;e&quot;</li>
          <li>• The word comes from &quot;break&quot; + &quot;fast&quot; (breaking the overnight fast)</li>
          <li>• The pronunciation is /ˈbrekfəst/ (BREK-fust) in British English</li>
          <li>• &quot;Brekfast&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Breakfast&quot; = break + fast (not brek + fast)</li>
          <li>• The word can be used as both a noun and a verb</li>
          <li>• Think of it as breaking your overnight fast</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brekfast&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may forget the &quot;a&quot; in &quot;break&quot; or may be influenced by the pronunciation which sounds like &quot;brek.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brekfast&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brekfast&quot; is always incorrect. Always use &quot;breakfast&quot; with &quot;ea&quot; in &quot;break&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;breakfast&quot; and &quot;lunch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Breakfast&quot; is the first meal of the day, typically eaten in the morning, while &quot;lunch&quot; is the midday meal eaten around noon.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;breakfast&quot; as &quot;break&quot; + &quot;fast&quot; - you&apos;re breaking your overnight fast. Remember that &quot;break&quot; has &quot;ea&quot; like &quot;speak&quot; and &quot;weak.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Breakfast</strong> is the correct spelling of this word. The incorrect spelling &quot;brekfast&quot; should never be used.
          </p>
          <p>
            Remember: Breakfast = break + fast (breaking the overnight fast). The &quot;break&quot; part has &quot;ea&quot; like &quot;speak&quot; and &quot;weak.&quot; This follows the English spelling pattern and is the only correct form of this noun referring to the first meal of the day.
          </p>
        </div>
      </div>
    </div>
  )
} 