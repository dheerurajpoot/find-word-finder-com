import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chef vs Chif - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chef" and "chif". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chef vs chif, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chef vs Chif - Which is Correct?',
    description: 'Learn the correct spelling between "chef" and "chif". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChefVsChifPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chef or Chif</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Chef&quot; or &quot;Chif&quot;, this culinary profession and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chif</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chef.&quot; The correct spelling uses "e" after "ch-" and not "i".</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Using "i" instead of "e" in the word</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chef</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> A professional cook, typically the chief cook in a restaurant or hotel.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chef</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Head Cook</h3>
            <p className="text-lg text-blue-700">The chief cook in a kitchen</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Culinary Artist</h3>
            <p className="text-lg text-blue-700">A person skilled in the art of cooking</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Gastronome</h3>
            <p className="text-lg text-blue-700">A lover of good food; a gourmet</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Sous Chef</h3>
            <p className="text-lg text-blue-700">The second-in-command in a kitchen</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">chef</span> prepared a delicious meal.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">chif</span> prepared a delicious meal.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;She dreams of becoming a <span className="text-green-600 font-semibold">chef</span>.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Chef&quot; is pronounced as /ʃɛf/</li>
          <li>• The word comes from French, meaning "chief" or "head"</li>
          <li>• A chef is different from a cook; a chef usually has formal training</li>
          <li>• Remember: "Chef" uses "e" after "ch-"</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chef&quot; as &quot;chif&quot;?</h3>
            <p className="text-lg text-blue-800">A: This misspelling often occurs because the "e" in "chef" is pronounced as /ɛ/ (like "eh"), which can be confused with "i" in English spelling. The word is borrowed from French, where "ch" is pronounced as /ʃ/ (like "sh").</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the origin of the word &quot;chef&quot;?</h3>
            <p className="text-lg text-blue-800">A: The word "chef" comes from French, meaning "chief" or "head." In English, it refers specifically to the head cook in a kitchen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Is a chef the same as a cook?</h3>
            <p className="text-lg text-blue-800">A: Not exactly. A chef usually has formal culinary training and is responsible for menu planning and kitchen management, while a cook may not have formal training and typically follows recipes and instructions.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed"><strong>Chef</strong> is the correct spelling. It refers to a professional cook, especially the chief cook in a restaurant or hotel. "Chif" is a misspelling that should be avoided.</p>
      </div>
    </div>
  )
} 