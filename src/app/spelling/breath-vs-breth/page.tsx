import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Breath or Breth - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;breath&quot; and &quot;breth&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'breath, breth, spelling, correct spelling, word comparison, English spelling, breathing, respiration',
  openGraph: {
    title: 'Breath or Breth - Which is Correct?',
    description: 'Learn the correct spelling between &quot;breath&quot; and &quot;breth&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BreathVsBrethPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Breath or Breth</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Breath&quot; and &quot;Breth&quot;. This is a noun referring to the air taken into or expelled from the lungs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Breth
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Breth&quot; is a misspelling of the word &quot;breath.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• Take a deep breth</li>
              <li>• His breth smelled fresh</li>
              <li>• She held her breth underwater</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Breath
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Breath&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• Take a deep breath</li>
              <li>• His breath smelled fresh</li>
              <li>• She held her breath underwater</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Breath</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Breath</strong> (noun): The air taken into or expelled from the lungs during respiration.
          </p>
          <p>
            <strong>Breath</strong> (noun): A single act of breathing in or out; one respiration.
          </p>
          <p>
            <strong>Breath</strong> (noun): The ability to breathe; life or vitality.
          </p>
          <p>
            Used to refer to the process of inhaling and exhaling air, or the air itself that is breathed.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Breath</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Respiration</li>
              <li>• Inhalation</li>
              <li>• Exhalation</li>
              <li>• Air</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Wind</li>
              <li>• Puff</li>
              <li>• Gasp</li>
              <li>• Sigh</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Breath&quot; is always spelled with &quot;ea&quot; in the middle, not &quot;e&quot;</li>
          <li>• The word comes from Old English &quot;brǣþ&quot; meaning odor or exhalation</li>
          <li>• The pronunciation is /breθ/ (breth with a voiced &quot;th&quot;)</li>
          <li>• &quot;Breth&quot; is a common misspelling but is never correct</li>
          <li>• Don&apos;t confuse &quot;breath&quot; (noun) with &quot;breathe&quot; (verb)</li>
          <li>• The word is related to &quot;breathe&quot; but they have different spellings and functions</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;breth&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people hear the pronunciation and mistakenly think it&apos;s spelled phonetically as &quot;breth&quot; instead of &quot;breath.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;breth&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;breth&quot; is always incorrect. Always use &quot;breath&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;breath&quot; and &quot;breathe&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Breath&quot; is a noun (the air you breathe), while &quot;breathe&quot; is a verb (the action of taking in air). They have different spellings and functions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;breath&quot; as having the same &quot;ea&quot; pattern as &quot;death&quot; and &quot;health.&quot; The word is spelled with &quot;ea&quot; in the middle, not just &quot;e.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Breath</strong> is the correct spelling of this word. The incorrect spelling &quot;breth&quot; should never be used.
          </p>
          <p>
            Remember: Breath has &quot;ea&quot; in the middle (like &quot;death&quot; and &quot;health&quot;). It&apos;s a noun referring to the air taken into or expelled from the lungs during respiration.
          </p>
        </div>
      </div>
    </div>
  )
} 