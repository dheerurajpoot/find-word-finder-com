import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chosen vs Choosen - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chosen" and "choosen". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chosen vs choosen, correct spelling, spelling comparison, English spelling, word confusion, past participle',
  openGraph: {
    title: 'Chosen vs Choosen - Which is Correct?',
    description: 'Learn the correct spelling between "chosen" and "choosen". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChosenVsChoosenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chosen or Choosen</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Chosen&quot; or &quot;Choosen&quot;, the past participle form and common misspellings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
            ❌ Incorrect: Choosen
          </h3>
          <p className="text-lg md:text-xl text-red-800 mb-4">
            <strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chosen.&quot; The word &quot;chosen&quot; is spelled with one &quot;o&quot;, not two.
          </p>
          <p className="text-lg md:text-xl text-red-800">
            <strong>Common Error:</strong> Adding an extra &quot;o&quot; letter
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Chosen
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Past participle of &quot;choose&quot;; to have been selected or picked from alternatives.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Verb (past participle)
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Chosen</strong> is the correct spelling. It is the past participle form of the verb &quot;choose,&quot; used with helping verbs like &quot;have,&quot; &quot;has,&quot; or &quot;had.&quot; The word is spelled with one &quot;o&quot;: &quot;chosen.&quot; &quot;Choosen&quot; is a misspelling that should be avoided.
        </p>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Chosen&quot; is pronounced as /ˈtʃoʊzən/</li>
          <li>• It is the past participle of the irregular verb &quot;choose&quot;</li>
          <li>• The complete conjugation: choose → chose → chosen</li>
          <li>• Used with helping verbs: have chosen, has chosen, had chosen</li>
          <li>• Remember: &quot;Chosen&quot; has one &quot;o&quot;, like &quot;chose&quot;</li>
          <li>• Can also be used as an adjective meaning &quot;selected&quot;</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chosen</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Selected</h3>
            <p className="text-lg text-blue-700">Picked out from a group or number</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Picked</h3>
            <p className="text-lg text-blue-700">Chosen or selected from alternatives</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Elected</h3>
            <p className="text-lg text-blue-700">Chosen by vote or selection</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Designated</h3>
            <p className="text-lg text-blue-700">Officially assigned or appointed</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Appointed</h3>
            <p className="text-lg text-blue-700">Officially selected for a position</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Preferred</h3>
            <p className="text-lg text-blue-700">Liked better than other options</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;She has <span className="text-green-600 font-semibold">chosen</span> to study abroad.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800">
              <strong>Incorrect:</strong> &quot;She has <span className="text-red-600 font-semibold">choosen</span> to study abroad.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chosen</span> candidate will start next week.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Correct:</strong> &quot;They had <span className="text-green-600 font-semibold">chosen</span> the perfect location.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chosen&quot; as &quot;choosen&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: This misspelling often occurs because people add an extra &quot;o&quot; letter. This can happen due to phonetic confusion, thinking it should rhyme with words like &quot;moon&quot; or &quot;soon,&quot; or simply not remembering the correct spelling pattern of the irregular verb.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: When should I use &quot;chosen&quot; vs &quot;chose&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Use &quot;chose&quot; for simple past tense (&quot;I chose the book&quot;) and &quot;chosen&quot; with helping verbs like &quot;have,&quot; &quot;has,&quot; or &quot;had&quot; (&quot;I have chosen the book&quot;). &quot;Chosen&quot; is also used as an adjective (&quot;the chosen one&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Can &quot;chosen&quot; be used as an adjective?</h3>
            <p className="text-lg text-blue-800">
              A: Yes, &quot;chosen&quot; can be used as an adjective meaning &quot;selected&quot; or &quot;picked.&quot; For example: &quot;the chosen candidate,&quot; &quot;a chosen few,&quot; or &quot;the chosen path.&quot; In these cases, it functions as a descriptive word.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the complete conjugation of &quot;choose&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: The complete conjugation is: choose (present) → chose (past) → chosen (past participle). Examples: &quot;I choose now&quot; (present), &quot;I chose yesterday&quot; (past), &quot;I have chosen&quot; (present perfect), &quot;I had chosen&quot; (past perfect).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling of &quot;chosen&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Remember that &quot;chosen&quot; has one &quot;o&quot; like &quot;chose&quot; (the past tense). Think of the pattern: choose (two &quot;o&quot;s) → chose (one &quot;o&quot;) → chosen (one &quot;o&quot;). The past participle follows the same spelling as the past tense.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 