import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chinese vs Chineese - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "Chinese" and "Chineese". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'Chinese vs Chineese, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chinese vs Chineese - Which is Correct?',
    description: 'Learn the correct spelling between "Chinese" and "Chineese". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChineseVsChineesePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chinese or Chineese</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Chinese&quot; or &quot;Chineese&quot;, this nationality and language and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chineese</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;Chinese.&quot; The correct spelling uses only one &quot;e&quot; after the &quot;n&quot;.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Doubling the &quot;e&quot; in the word</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chinese</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> Relating to China, its people, or its language.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Adjective, Noun</p>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chinese</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Mandarin</h3>
            <p className="text-lg text-blue-700">The most widely spoken Chinese language</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Cantonese</h3>
            <p className="text-lg text-blue-700">A major Chinese language spoken in Hong Kong and Guangdong</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Sino-</h3>
            <p className="text-lg text-blue-700">Prefix relating to China or the Chinese</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">East Asian</h3>
            <p className="text-lg text-blue-700">Relating to the region of East Asia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Han</h3>
            <p className="text-lg text-blue-700">The largest ethnic group in China</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Oriental (dated)</h3>
            <p className="text-lg text-blue-700">Old term for East Asian, now considered outdated</p>
          </div>
        </div>
      </div>

      {/* Usage Examples Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;She is learning to speak <span className="text-green-600 font-semibold">Chinese</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;She is learning to speak <span className="text-red-600 font-semibold">Chineese</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">Chinese</span> New Year is a major holiday.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;He enjoys <span className="text-green-600 font-semibold">Chinese</span> cuisine.&quot;</p>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Chinese&quot; is pronounced as /tʃaɪˈniːz/</li>
          <li>&bull; The word comes from &quot;China&quot; + &quot;-ese&quot; (denoting nationality or language)</li>
          <li>&bull; &quot;Chinese&quot; can refer to the people, language, or culture of China</li>
          <li>&bull; Remember: Only one &quot;e&quot; after the &quot;n&quot; in &quot;Chinese&quot;</li>
          <li>&bull; Commonly confused due to the double &quot;e&quot; sound</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;Chinese&quot; as &quot;Chineese&quot;?</h3>
            <p className="text-lg text-blue-800">A: The double &quot;e&quot; sound in the middle of the word can lead to the mistaken addition of an extra &quot;e&quot;. The correct spelling only has one &quot;e&quot; after the &quot;n&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What does &quot;Chinese&quot; refer to?</h3>
            <p className="text-lg text-blue-800">A: &quot;Chinese&quot; can refer to the people of China, the language spoken in China (such as Mandarin or Cantonese), or anything relating to Chinese culture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling of &quot;Chinese&quot;?</h3>
            <p className="text-lg text-blue-800">A: Remember that the word is formed from &quot;China&quot; + &quot;-ese&quot;. There is only one &quot;e&quot; after the &quot;n&quot;.</p>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Chinese</strong> is the correct spelling. It refers to anything relating to China, its people, or its language. The word is spelled with only one &quot;e&quot; after the &quot;n&quot;: &quot;Chinese&quot;. &quot;Chineese&quot; is a misspelling that should be avoided.
        </p>
      </div>
    </div>
  )
} 