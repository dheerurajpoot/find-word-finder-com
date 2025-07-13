import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Believe vs Beleive - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "believe" and "beleive". Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'believe, beleive, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Believe vs Beleive - Which is Correct?',
    description: 'Learn the correct spelling between "believe" and "beleive". Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BelieveVsBeleivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Believe vs Beleive</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Which spelling is correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>believe</strong>. &quot;Beleive&quot; is a common misspelling that occurs due to confusion about the &quot;i before e&quot; rule.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Believe (Correct)
          </h3>
          <p className="text-lg md:text-xl text-green-800">
            The correct spelling follows the &quot;i before e except after c&quot; rule. The word comes from Old English &quot;belēfan&quot; meaning &quot;to have faith.&quot;
          </p>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Beleive (Incorrect)
          </h3>
          <p className="text-lg md:text-xl text-red-800">
            This misspelling incorrectly places &quot;e&quot; before &quot;i&quot;. The correct order is &quot;i&quot; before &quot;e&quot; in this word.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p>
            <strong>Believe</strong> (verb): To accept something as true or real, often without proof; to have faith or confidence in something or someone.
          </p>
          <p>
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>I <em>believe</em> in your ability to succeed.</li>
            <li>Do you <em>believe</em> in ghosts?</li>
            <li>She couldn&apos;t <em>believe</em> her eyes when she saw the results.</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to believe:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Trust</li>
              <li>Accept</li>
              <li>Have faith in</li>
              <li>Confide in</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Faith</li>
              <li>Conviction</li>
              <li>Certainty</li>
              <li>Assurance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>The &quot;i before e except after c&quot; rule applies here - &quot;believe&quot; has &quot;i&quot; before &quot;e&quot;.</li>
          <li>This rule helps with related words like &quot;belief,&quot; &quot;believer,&quot; and &quot;believable.&quot;</li>
          <li>Remember that &quot;believe&quot; comes from Old English &quot;belēfan&quot; meaning &quot;to have faith.&quot;</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;believe&quot; as &quot;beleive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling often occurs because of confusion about the &quot;i before e&quot; rule. Some people may have heard the rule but don&apos;t remember it correctly, or they may be influenced by words that do have &quot;ei&quot; (like &quot;receive&quot;).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Are there other words that follow the same pattern as &quot;believe&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, words like &quot;relieve,&quot; &quot;retrieve,&quot; and &quot;achieve&quot; all follow the same &quot;i before e&quot; pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of the phrase &quot;I believe&quot; - the &quot;I&quot; comes first in both the pronoun and the spelling of &quot;believe.&quot; This can help you remember that it&apos;s &quot;i&quot; before &quot;e&quot; in this word.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Believe</strong> is the correct spelling. The word follows the &quot;i before e except after c&quot; rule, with &quot;i&quot; coming before &quot;e&quot;. &quot;Beleive&quot; is a common misspelling that should be avoided. Remember that &quot;believe&quot; and all its forms (believe, believing, believed, believer) maintain the &quot;ie&quot; spelling pattern.
        </p>
      </div>
    </div>
  )
} 