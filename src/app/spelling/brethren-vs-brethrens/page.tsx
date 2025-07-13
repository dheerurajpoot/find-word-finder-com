import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brethren or Brethrens - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brethren&quot; and &quot;brethrens&quot;. Discover definitions, examples, and usage tips for these commonly confused words.',
  keywords: 'brethren, brethrens, spelling, correct spelling, word comparison, English spelling, brothers, plural',
  openGraph: {
    title: 'Brethren or Brethrens - Which is Correct?',
    description: 'Learn the correct spelling between &quot;brethren&quot; and &quot;brethrens&quot;. Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function BrethrenVsBrethrensPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Brethren or Brethrens</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl opacity-90">
          Understanding the correct spelling of &quot;Brethren&quot; and &quot;Brethrens&quot;. This is the plural form of &quot;brother&quot; used in formal or religious contexts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">
            ❌ Brethrens
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            This spelling is <strong>incorrect</strong>. &quot;Brethrens&quot; is a misspelling of the word &quot;brethren.&quot;
          </p>
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-900 font-semibold">Incorrect Examples:</p>
            <ul className="text-red-800 mt-2 space-y-1">
              <li>• My brethrens and I attended the meeting</li>
              <li>• The brethrens of the church gathered</li>
              <li>• All my brethrens were present</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">
            ✅ Brethren
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            This is the <strong>correct</strong> spelling. &quot;Brethren&quot; is the proper English spelling.
          </p>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-900 font-semibold">Correct Examples:</p>
            <ul className="text-green-800 mt-2 space-y-1">
              <li>• My brethren and I attended the meeting</li>
              <li>• The brethren of the church gathered</li>
              <li>• All my brethren were present</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Definition of Brethren</h2>
        <div className="text-lg md:text-xl text-blue-800 space-y-4">
          <p>
            <strong>Brethren</strong> (noun): Plural form of &quot;brother&quot; - used to refer to brothers, especially in formal or religious contexts.
          </p>
          <p>
            <strong>Brethren</strong> (noun): Members of a particular group, especially a religious or fraternal organization.
          </p>
          <p>
            <strong>Brethren</strong> (noun): Fellow members of a profession, trade, or other group.
          </p>
          <p>
            Used in formal, religious, or fraternal contexts to address or refer to a group of men or members of an organization.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Brethren</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <ul className="space-y-2">
              <li>• Brothers</li>
              <li>• Siblings</li>
              <li>• Kin</li>
              <li>• Relatives</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>• Comrades</li>
              <li>• Associates</li>
              <li>• Members</li>
              <li>• Fellows</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Brethren&quot; is already the plural form - it doesn&apos;t need an additional &quot;s&quot;</li>
          <li>• The word comes from Old English &quot;brōþor&quot; (brother) with the plural ending &quot;-en&quot;</li>
          <li>• The pronunciation is /ˈbreðrən/ (BRETH-ruhn)</li>
          <li>• &quot;Brethrens&quot; is a common misspelling but is never correct</li>
          <li>• This is an irregular plural form, similar to &quot;children&quot; and &quot;oxen&quot;</li>
          <li>• It&apos;s primarily used in formal, religious, or fraternal contexts</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Why do people spell it &quot;brethrens&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: This misspelling occurs because people think &quot;brethren&quot; needs an additional &quot;s&quot; to make it plural, but &quot;brethren&quot; is already the plural form of &quot;brother.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: Is &quot;brethrens&quot; ever acceptable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brethrens&quot; is always incorrect. Always use &quot;brethren&quot; in all contexts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: What&apos;s the difference between &quot;brethren&quot; and &quot;brothers&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both are plural forms of &quot;brother,&quot; but &quot;brethren&quot; is more formal and often used in religious or fraternal contexts, while &quot;brothers&quot; is the standard modern plural.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember that &quot;brethren&quot; is already plural (like &quot;children&quot; and &quot;oxen&quot;). It doesn&apos;t need an additional &quot;s&quot; because it&apos;s an irregular plural form.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <div className="text-lg md:text-xl text-green-800 space-y-4">
          <p>
            <strong>Brethren</strong> is the correct spelling of this word. The incorrect spelling &quot;brethrens&quot; should never be used.
          </p>
          <p>
            Remember: Brethren is already the plural form of &quot;brother&quot; (like &quot;children&quot; and &quot;oxen&quot;). It doesn&apos;t need an additional &quot;s&quot; because it&apos;s an irregular plural form used in formal or religious contexts.
          </p>
        </div>
      </div>
    </div>
  )
} 