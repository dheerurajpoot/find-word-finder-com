import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Achieved vs Achived - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "achieved" and "achived". Discover the proper spelling, definitions, examples, and common usage tips.',
  keywords: 'achieved, achived, spelling, correct spelling, word comparison, English spelling',
  openGraph: {
    title: 'Achieved vs Achived - Which is Correct?',
    description: 'Learn the correct spelling between "achieved" and "achived". Discover the proper spelling, definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function AchievedVsAchivedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Achieved vs Achived</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of this commonly misspelled word and how to use it properly in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Correct: Achieved
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Past tense and past participle of &quot;achieve&quot; - successfully completed or accomplished.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Pronunciation:</strong> /əˈtʃiːvd/ (uh-CHEEVD)
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Incorrect: Achived
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> Missing the &quot;e&quot; in the spelling.
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common mistake:</strong> People often drop the &quot;e&quot; when typing quickly.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition &amp; Meaning</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Achieved</strong> is the past tense and past participle form of the verb &quot;achieve.&quot; It means to have successfully completed, accomplished, or reached a goal, objective, or desired outcome.
          </p>
          <p>
            The word comes from the Old French &quot;achever,&quot; meaning &quot;to complete.&quot; The &quot;e&quot; is essential to the correct spelling and pronunciation.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Examples in Sentences</h2>
        <div className="text-lg md:text-xl text-purple-800 space-y-4">
          <p><strong>Correct usage:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>She <strong>achieved</strong> her goal of running a marathon.</li>
            <li>The team <strong>achieved</strong> remarkable success in the competition.</li>
            <li>He had <strong>achieved</strong> everything he set out to do.</li>
            <li>What have you <strong>achieved</strong> this year?</li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-indigo-800">
          <div>
            <h3 className="font-semibold mb-2">For &quot;accomplished&quot;:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Attained</li>
              <li>Reached</li>
              <li>Fulfilled</li>
              <li>Completed</li>
              <li>Realized</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">For &quot;succeeded&quot;:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Managed</li>
              <li>Pulled off</li>
              <li>Carried out</li>
              <li>Brought about</li>
              <li>Effected</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>Remember the &quot;e&quot; in achieved - think of it as &quot;a-chieved&quot;</li>
          <li>The word follows the pattern: achieve + ed = achieved</li>
          <li>Common misspellings include: achived, acheived, acheved</li>
          <li>This is often a typing error rather than a spelling confusion</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Why do people misspell &quot;achieved&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">This is often a typing error where people accidentally skip the &quot;e&quot; when typing quickly, rather than a spelling confusion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Is &quot;achived&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;achived&quot; is always incorrect. The proper spelling always includes the &quot;e.&quot;</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of the base word &quot;achieve&quot; and add &quot;ed&quot; - it&apos;s &quot;a-chieved&quot; with an &quot;e.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-3">
          <p>
            <strong>Achieved</strong> is the correct spelling, featuring an &quot;e&quot; that is essential to the word&apos;s proper form. This word means to have successfully completed or accomplished something.
          </p>
          <p>
            The misspelling <strong>achived</strong> (missing the &quot;e&quot;) is incorrect and should be avoided in all formal writing contexts.
          </p>
          <p>
            Remember: achieve + ed = achieved (keep the e)
          </p>
        </div>
      </div>
    </div>
  )
} 