import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brief vs Breif - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brief&quot; and &quot;breif&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brief, breif, spelling, correct spelling, word comparison, English spelling, adjective, noun',
  openGraph: {
    title: 'Brief vs Breif - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brief&quot; and &quot;breif&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BriefVsBreifPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brief or Breif</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Brief and Breif. This is an adjective meaning short in duration or concise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Breif
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Breif&quot; is a misspelling of the word &quot;brief.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• A breif meeting</li>
              <li>• Keep it breif</li>
              <li>• A breif summary</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brief
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brief&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• A brief meeting</li>
              <li>• Keep it brief</li>
              <li>• A brief summary</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brief</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brief</strong> (adjective): Short in duration; concise; not lengthy.
          </p>
          <p>
            <strong>Brief</strong> (adjective): Using few words; concise in expression.
          </p>
          <p>
            <strong>Brief</strong> (noun): A short written summary or outline.
          </p>
          <p>
            <strong>Brief</strong> (noun): Instructions or information given to someone about a task or situation.
          </p>
          <p>
            <strong>Brief</strong> (verb): To give someone information or instructions about a task or situation.
          </p>
          <p>
            Used to describe something that is short in duration, concise, or to the point.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brief</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Short</li>
              <li>• Concise</li>
              <li>• Brief</li>
              <li>• Succinct</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Quick</li>
              <li>• Fleeting</li>
              <li>• Momentary</li>
              <li>• Abbreviated</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brief&quot; is always spelled with &quot;ie&quot; in the middle, not &quot;ei&quot;</li>
          <li>• The word comes from Latin &quot;brevis&quot; meaning short</li>
          <li>• The pronunciation is /briːf/ (BREEFF) in British English</li>
          <li>• &quot;Breif&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Brief&quot; follows the &quot;i before e&quot; rule</li>
          <li>• The word can be used as an adjective, noun, or verb</li>
          <li>• Think: &quot;I&quot; comes before &quot;e&quot; in brief</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;breif&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may be confused about the &quot;i before e&quot; rule or may be influenced by other words with similar patterns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;breif&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;breif&quot; is always incorrect. Always use &quot;brief&quot; with &quot;ie&quot; in the middle in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brief&quot; and &quot;short&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Brief&quot; emphasizes conciseness and efficiency, while &quot;short&quot; simply refers to length. &quot;Brief&quot; often implies being to the point.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember the rule: &quot;I before E except after C.&quot; Since there&apos;s no C before the &quot;ie&quot; in &quot;brief,&quot; it should be &quot;ie&quot; not &quot;ei.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brief</strong> is the correct spelling of this word. The incorrect spelling &quot;breif&quot; should never be used.
          </p>
          <p>
            Remember: Brief has &quot;ie&quot; in the middle, not &quot;ei.&quot; This follows the &quot;i before e&quot; rule and is the only correct form of this adjective meaning short in duration or concise.
          </p>
        </div>
      </div>
    </div>
  )
} 