import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chooses vs Choosed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chooses" and "choosed". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chooses vs choosed, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chooses vs Choosed - Which is Correct?',
    description: 'Learn the correct spelling between "chooses" and "choosed". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChoosesVsChoosedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chooses or Choosed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;chooses&quot; or &quot;choosed&quot;, this verb and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Choosed</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chooses.&quot; The correct present tense form is "chooses"; "choosed" is not a word.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Applying regular verb rules to an irregular verb</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chooses</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> Third person singular present tense of "choose"; to select from a number of possibilities.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Verb</p>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chooses</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Selects</h3>
            <p className="text-lg text-blue-700">Picks out from a group</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Elects</h3>
            <p className="text-lg text-blue-700">Makes a choice by voting</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Prefers</h3>
            <p className="text-lg text-blue-700">Likes one thing better than another</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Decides</h3>
            <p className="text-lg text-blue-700">Makes a decision</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Opts</h3>
            <p className="text-lg text-blue-700">Chooses as an option</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Picks</h3>
            <p className="text-lg text-blue-700">Selects from a group</p>
          </div>
        </div>
      </div>
      {/* Usage Examples Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">chooses</span> the blue dress every time.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;She <span className="text-red-600 font-semibold">choosed</span> the blue dress every time.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;He always <span className="text-green-600 font-semibold">chooses</span> pizza for lunch.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The committee <span className="text-green-600 font-semibold">chooses</span> a new leader each year.&quot;</p>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Chooses&quot; is pronounced as /ˈtʃuːzɪz/</li>
          <li>&bull; &quot;Chooses&quot; is the present tense, third person singular form of &quot;choose&quot;</li>
          <li>&bull; &quot;Choosed&quot; is not a word in English</li>
          <li>&bull; Remember: Irregular verbs like &quot;choose&quot; do not follow the regular &quot;-ed&quot; rule</li>
          <li>&bull; Commonly misspelled by applying regular verb rules</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chooses&quot; as &quot;choosed&quot;?</h3>
            <p className="text-lg text-blue-800">A: English learners sometimes apply the regular verb rule to &quot;choose&quot;, but the correct present tense is &quot;chooses&quot; and the past tense is &quot;chose&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the past tense of "choose"?</h3>
            <p className="text-lg text-blue-800">A: The past tense of &quot;choose&quot; is &quot;chose&quot;, not &quot;choosed&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct form of "chooses"?</h3>
            <p className="text-lg text-blue-800">A: Remember that &quot;chooses&quot; is the present tense, third person singular form. The past tense is &quot;chose&quot;.</p>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Chooses</strong> is the correct spelling. It is the present tense, third person singular form of &quot;choose&quot;. &quot;Choosed&quot; is a misspelling that should be avoided.
        </p>
      </div>
    </div>
  )
} 