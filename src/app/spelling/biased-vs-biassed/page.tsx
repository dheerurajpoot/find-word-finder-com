import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biased or Biassed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;biased&quot; and &quot;biassed&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'biased, biassed, spelling, correct spelling, word comparison, English spelling, prejudice, partial',
  openGraph: {
    title: 'Biased or Biassed - Which is Correct?',
    description: 'Learn the correct spelling between &quot;biased&quot; and &quot;biassed&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BiasedVsBiassedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Biased or Biassed</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Biased&quot; and &quot;Biassed&quot;. This is an adjective describing unfair prejudice or partiality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Biassed
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Biassed&quot; is a misspelling of the word &quot;biased.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• The report was biassed</li>
              <li>• She had a biassed opinion</li>
              <li>• The judge was biassed</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Biased
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Biased&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• The report was biased</li>
              <li>• She had a biased opinion</li>
              <li>• The judge was biased</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Biased</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Biased</strong> (adjective): Unfairly prejudiced in favor of or against one thing, person, or group compared with another.
          </p>
          <p>
            <strong>Biased</strong> (adjective): Showing an unfair preference or prejudice based on personal opinions or feelings.
          </p>
          <p>
            <strong>Biased</strong> (adjective): Influenced by personal feelings, opinions, or prejudices rather than by facts or evidence.
          </p>
          <p>
            Used to describe someone or something that shows unfair prejudice, favoritism, or partiality toward a particular person, group, or viewpoint.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Biased</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Prejudiced</li>
              <li>• Partial</li>
              <li>• Unfair</li>
              <li>• One-sided</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Slanted</li>
              <li>• Skewed</li>
              <li>• Influenced</li>
              <li>• Subjective</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Biased&quot; is the correct spelling in American English</li>
          <li>• The word comes from the noun &quot;bias&quot; + the suffix &quot;-ed&quot;</li>
          <li>• The pronunciation is /ˈbaɪəst/ (BY-uhst)</li>
          <li>• &quot;Biassed&quot; is a British English variant but &quot;biased&quot; is preferred</li>
          <li>• In modern usage, &quot;biased&quot; is the standard spelling in both American and British English</li>
          <li>• It&apos;s an adjective describing unfair prejudice or partiality</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;biassed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This spelling was historically used in British English, but &quot;biased&quot; is now the preferred spelling in both American and British English.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;biassed&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While &quot;biassed&quot; was once used in British English, &quot;biased&quot; is now the standard spelling in both American and British English.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;biased&quot; and &quot;bias&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bias&quot; is a noun meaning prejudice or unfair preference, while &quot;biased&quot; is an adjective describing someone or something that shows bias.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of it as &quot;bias&quot; + &quot;ed&quot;. The word comes from the noun &quot;bias&quot; with the &quot;-ed&quot; suffix added to make it an adjective.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is there a difference between American and British spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Historically, &quot;biassed&quot; was used in British English, but &quot;biased&quot; is now the standard spelling in both American and British English.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Biased</strong> is the correct spelling of this word. The spelling &quot;biassed&quot; is outdated and should not be used.
          </p>
          <p>
            Remember: Bias + ed = biased. The word comes from the noun &quot;bias&quot; with the &quot;-ed&quot; suffix added to form the adjective. This is now the standard spelling in both American and British English.
          </p>
        </div>
      </div>
    </div>
  )
} 