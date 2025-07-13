import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bother vs Borther - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bother&quot; and &quot;borther&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'bother, borther, spelling, correct spelling, word comparison, English spelling, verb, annoyance',
  openGraph: {
    title: 'Bother vs Borther - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bother&quot; and &quot;borther&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BotherVsBortherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bother or Borther</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of Bother and Borther. This is a verb meaning to cause trouble or annoyance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Borther
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Borther&quot; is a misspelling of the word &quot;bother.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• Don&apos;t borther me right now</li>
              <li>• It doesn&apos;t borther me</li>
              <li>• Why borther with that?</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Bother
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Bother&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• Don&apos;t bother me right now</li>
              <li>• It doesn&apos;t bother me</li>
              <li>• Why bother with that?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Bother</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Bother</strong> (verb): To take the trouble to do something; to make an effort.
          </p>
          <p>
            <strong>Bother</strong> (verb): To cause someone to feel troubled, worried, or annoyed.
          </p>
          <p>
            <strong>Bother</strong> (noun): Trouble or difficulty; something that causes annoyance or worry.
          </p>
          <p>
            Used to describe causing trouble, annoyance, or taking the effort to do something.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Bother</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Annoy</li>
              <li>• Disturb</li>
              <li>• Trouble</li>
              <li>• Worry</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Inconvenience</li>
              <li>• Pester</li>
              <li>• Irritate</li>
              <li>• Concern</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Bother&quot; is always spelled with &quot;th&quot; in the middle, not &quot;rt&quot;</li>
          <li>• The word comes from Middle English &quot;botheren&quot;</li>
          <li>• The pronunciation is /ˈbɒðə/ (BOTH-er) in British English</li>
          <li>• &quot;Borther&quot; is a common misspelling but is never correct</li>
          <li>• Remember: &quot;Bother&quot; has &quot;th&quot; like &quot;mother&quot; and &quot;brother&quot;</li>
          <li>• The word can be used as both a verb and a noun</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;borther&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people may confuse the &quot;th&quot; sound with &quot;rt&quot; or may be influenced by other words with similar patterns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;borther&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;borther&quot; is always incorrect. Always use &quot;bother&quot; with &quot;th&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;bother&quot; and &quot;brother&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bother&quot; means to cause trouble or annoyance, while &quot;brother&quot; refers to a male sibling. They are completely different words with different meanings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;bother&quot; as having &quot;th&quot; like &quot;mother&quot; and &quot;brother.&quot; All these words have the same &quot;th&quot; pattern in the middle.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Bother</strong> is the correct spelling of this word. The incorrect spelling &quot;borther&quot; should never be used.
          </p>
          <p>
            Remember: Bother has &quot;th&quot; in the middle, not &quot;rt.&quot; This follows the English spelling pattern and is the only correct form of this verb meaning to cause trouble or annoyance.
          </p>
        </div>
      </div>
    </div>
  )
} 