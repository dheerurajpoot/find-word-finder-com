import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cheetah vs Chetah - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "cheetah" and "chetah". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'cheetah vs chetah, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Cheetah vs Chetah - Which is Correct?',
    description: 'Learn the correct spelling between "cheetah" and "chetah". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function CheetahVsChetahPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Cheetah or Chetah</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;Cheetah&quot; or &quot;Chetah&quot;, this fast-running big cat and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Chetah</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;cheetah.&quot; The word &quot;cheetah&quot; is spelled with &quot;etah&quot; at the end, not &quot;etah&quot;.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Confusing the ending with similar-sounding words</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Cheetah</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> A large spotted cat of the cat family, native to Africa and parts of Asia, known for being the fastest land animal.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>


      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Cheetah</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Predatory feline species</h3>
            <p className="text-lg text-blue-700">Cat with distinctive spotted coat</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Acinonyx jubatus</h3>
            <p className="text-lg text-blue-700">Scientific name for cheetah</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Spotted Cat</h3>
            <p className="text-lg text-blue-700">Cat with distinctive spotted coat</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Fast Runner</h3>
            <p className="text-lg text-blue-700">Animal known for exceptional speed</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Prey animal that preys on others</h3>
            <p className="text-lg text-blue-700">Non-domesticated feline species</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Non-domesticated feline species</h3>
            <p className="text-lg text-blue-700">Non-domesticated feline species</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">cheetah</span> sprinted across the savanna.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;The <span className="text-red-600 font-semibold">chetah</span> sprinted across the savanna.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;We saw a <span className="text-green-600 font-semibold">cheetah</span> hunting its prey.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">cheetah</span> is the fastest land animal.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Cheetah&quot; is pronounced as /ˈtʃiːtə/</li>
          <li>• The word comes from Hindi &quot;chītā&quot; and Sanskrit &quot;citraka&quot;</li>
          <li>• Cheetahs can reach speeds of up to 70mph (113 km/h)</li>
          <li>• They are the fastest land animals on Earth</li>
          <li>• Remember: &quot;Cheetah&quot; ends with &quot;etah&quot;, not &quot;etah&quot;</li>
          <li>• The word can also refer to a person who is very fast or agile</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q:Why do people misspell &quot;cheetah&quot; as &quot;chetah&quot;?</h3>
            <p className="text-lg text-blue-800">A: This misspelling often occurs because people confuse the ending with similar-sounding words or patterns. The &quot;ch&quot; sound at the end might lead to confusion with words that end in &quot;ah.&quot; It&apos;s important to remember that &quot;cheetah&quot; ends with &quot;etah.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">What is the origin of the word &quot;cheetah&quot;?</h3>
            <p className="text-lg text-blue-800">A: The word &quot;cheetah&quot; comes from Hindi &quot;chītā&quot; and ultimately from Sanskrit &quot;citraka,&quot; meaning &quot;spotted&quot; or &quot;variegated.&quot; This refers to the animal&apos;s distinctive spotted coat pattern.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How fast can a cheetah run?</h3>
            <p className="text-lg text-blue-800">A: Cheetahs can reach speeds of up to 70 mph (113 km/h) in short bursts, making them the fastest land animals on Earth. However, they can only maintain this speed for short distances, typically 200-300 meters.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Where do cheetahs live?</h3>
            <p className="text-lg text-blue-800">A: Cheetahs are native to Africa and parts of Asia. They primarily inhabit savannas, grasslands, and open woodlands where they can use their speed to hunt prey. They are found in countries like Kenya, Tanzania, Namibia, and Iran.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">How can I remember the correct spelling of &quot;cheetah&quot;?</h3>
            <p className="text-lg text-blue-800">A: Think of the word ending with &quot;etah&quot; - you can remember it by thinking &quot;cheetah&quot; sounds like &quot;see-tah&quot; or by associating it with the animal&apos;s distinctive &quot;etah&quot; ending. Also, remember that it&apos;s not &quot;chetah&quot; but &quot;cheetah.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed"><strong>Cheetah</strong> is the correct spelling. It refers to a large spotted cat native to Africa and parts of Asia, known for being the fastest land animal. The word is spelled with &quot;etah&quot; at the end: &quot;cheetah.&quot; &quot;Chetah&quot; is a misspelling that should be avoided.</p>
      </div>
    </div>
  )
} 