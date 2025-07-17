import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chicken vs Chiken - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chicken" and "chiken". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chicken vs chiken, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chicken vs Chiken - Which is Correct?',
    description: 'Learn the correct spelling between "chicken" and "chiken". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChickenVsChikenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chicken or Chiken</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Chicken&quot; or &quot;Chiken&quot;, this common bird and food and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chiken</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chicken.&quot; The correct spelling includes the &quot;c&quot; and &quot;k&quot; in the middle.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Omitting the &quot;c&quot; or &quot;k&quot; in the word</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chicken</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> A domesticated bird kept for its eggs or meat; also refers to the meat from this bird.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>


      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chicken</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Hen</h3>
            <p className="text-lg text-blue-700">Female chicken</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Rooster</h3>
            <p className="text-lg text-blue-700">Male chicken</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Poultry</h3>
            <p className="text-lg text-blue-700">Domesticated birds raised for meat or eggs</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Broiler</h3>
            <p className="text-lg text-blue-700">Chicken raised specifically for meat</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chicken</span> laid an egg.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">chiken</span> laid an egg.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;We had <span className="text-green-600 font-semibold">chicken</span> for dinner.&quot;</p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Chicken&quot; is pronounced as /ˈtʃɪkən/</li>
          <li>• The word comes from Old English &quot;cicen&quot;</li>
          <li>• &quot;Chicken&quot; can refer to both the bird and the meat</li>
          <li>• Remember: The &quot;c&quot; and &quot;k&quot; are both present in &quot;chicken&quot;</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chicken&quot; as &quot;chiken&quot;?</h3>
            <p className="text-lg text-blue-800">A: This misspelling often occurs because the &quot;c&quot; and &quot;k&quot; sounds are similar, and one may be omitted in fast writing or typing. The correct spelling includes both letters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the origin of the word &quot;chicken&quot;?</h3>
            <p className="text-lg text-blue-800">A: The word &quot;chicken&quot; comes from Old English &quot;cicen,&quot; meaning a young fowl. Over time, it became the standard term for the domesticated bird.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Is &quot;chicken&quot; used for both the bird and the meat?</h3>
            <p className="text-lg text-blue-800">A: Yes, &quot;chicken&quot; can refer to both the living bird and the meat from the bird.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed"><strong>Chicken</strong> is the correct spelling. It refers to a domesticated bird kept for its eggs or meat. &quot;Chiken&quot; is a misspelling that should be avoided.</p>
      </div>
    </div>
  )
} 