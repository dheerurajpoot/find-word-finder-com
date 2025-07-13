import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Because vs Becouse - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "because" and "becouse". Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'because, becouse, spelling, correct spelling, word comparison, English spelling, conjunction',
  openGraph: {
    title: 'Because vs Becouse - Which is Correct?',
    description: 'Learn the correct spelling between "because" and "becouse". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BecauseVsBecousePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Because vs Becouse</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of this essential conjunction.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Becouse
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. "Becouse" is a misspelling of the word "because."
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• I stayed home becouse I was sick</li>
              <li>• She left early becouse of the rain</li>
              <li>• He couldn&apos;t come becouse he was busy</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Because
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. "Because" is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• I stayed home because I was sick</li>
              <li>• She left early because of the rain</li>
              <li>• He couldn&apos;t come because he was busy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Because</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Because</strong> (conjunction): For the reason that; since; as a result of the fact that.
          </p>
          <p>
            Used to introduce a clause explaining the reason for something or the cause of an action or situation.
          </p>
          <p>
            One of the most common conjunctions in English, used to show cause-and-effect relationships between ideas.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Because</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Since</li>
              <li>• As</li>
              <li>• Given that</li>
              <li>• Due to</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Owing to</li>
              <li>• Inasmuch as</li>
              <li>• For the reason that</li>
              <li>• On account of</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• "Because" is always spelled with "au" in the middle</li>
          <li>• The word comes from Middle English "bi cause" meaning "by cause"</li>
          <li>• The pronunciation is /bɪˈkɔːz/ (bi-KAWZ)</li>
          <li>• "Becouse" is a common misspelling but is never correct</li>
          <li>• "Because of" is a common phrase meaning "due to" or "on account of"</li>
          <li>• Avoid starting sentences with "because" in formal writing unless the sentence is complete</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it "becouse"?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling likely occurs because the "au" sound in "because" can be pronounced differently in various accents, leading some to hear and write it as "becouse."
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is "becouse" ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, "becouse" is always incorrect. Always use "because" in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between "because" and "since"?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both can introduce reasons, but "since" can also refer to time. "Because" is more specific to causation and is often preferred for clarity.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Because</strong> is the correct spelling of this conjunction. The incorrect spelling "becouse" should never be used.
          </p>
          <p>
            Remember: Because = Be + cause (with "au" in the middle). This spelling is consistent across all English-speaking countries and is one of the most fundamental words in the language.
          </p>
        </div>
      </div>
    </div>
  )
} 