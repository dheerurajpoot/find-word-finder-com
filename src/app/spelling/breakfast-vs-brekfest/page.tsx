import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Breakfast or Brekfest - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;breakfast&quot; and &quot;brekfest&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'breakfast, brekfest, spelling, correct spelling, word comparison, English spelling, meal, morning',
  openGraph: {
    title: 'Breakfast or Brekfest - Which is Correct?',
    description: 'Learn the correct spelling between &quot;breakfast&quot; and &quot;brekfest&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BreakfastVsBrekfestPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Breakfast or Brekfest</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Breakfast&quot; and &quot;Brekfest&quot;. This is a noun referring to the first meal of the day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brekfest
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brekfest&quot; is a misspelling of the word &quot;breakfast.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I had a quick brekfest this morning</li>
              <li>• The brekfest buffet was delicious</li>
              <li>• She skipped brekfest today</li>
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
              <li>• I had a quick breakfast this morning</li>
              <li>• The breakfast buffet was delicious</li>
              <li>• She skipped breakfast today</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Breakfast</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Breakfast</strong> (noun): The first meal of the day, typically eaten in the morning after waking up.
          </p>
          <p>
            <strong>Breakfast</strong> (verb): To eat breakfast; to have the first meal of the day.
          </p>
          <p>
            The word literally means &quot;breaking the fast&quot; - referring to the period of not eating during sleep.
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
              <li>• Early meal</li>
              <li>• Morning repast</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Dawn meal</li>
              <li>• Morning sustenance</li>
              <li>• Day&apos;s first meal</li>
              <li>• Morning nourishment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Breakfast&quot; is always spelled with &quot;fast&quot; at the end, not &quot;fest&quot;</li>
          <li>• The word comes from &quot;break&quot; + &quot;fast&quot; (meaning to break the overnight fast)</li>
          <li>• The pronunciation is /ˈbrekfəst/ (BREK-fuhst)</li>
          <li>• &quot;Brekfest&quot; is a common misspelling but is never correct</li>
          <li>• The word has been used in English since the 15th century</li>
          <li>• It&apos;s one of the most important meals of the day nutritionally</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brekfest&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people hear the pronunciation and mistakenly think it ends with &quot;fest&quot; instead of &quot;fast.&quot; The word actually means &quot;breaking the fast.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brekfest&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brekfest&quot; is always incorrect. Always use &quot;breakfast&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the origin of the word &quot;breakfast&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The word comes from the Old English &quot;brecan&quot; (to break) and &quot;fæsten&quot; (fast), literally meaning to break the overnight fast.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of it as &quot;break&quot; + &quot;fast&quot; - you&apos;re breaking the overnight fast. The word ends with &quot;fast,&quot; not &quot;fest.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Breakfast</strong> is the correct spelling of this word. The incorrect spelling &quot;brekfest&quot; should never be used.
          </p>
          <p>
            Remember: Breakfast = Break + fast (breaking the overnight fast). The word ends with &quot;fast,&quot; not &quot;fest,&quot; and refers to the first meal of the day.
          </p>
        </div>
      </div>
    </div>
  )
} 