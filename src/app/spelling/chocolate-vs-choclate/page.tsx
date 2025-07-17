import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chocolate vs Choclate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "chocolate" and "choclate". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'chocolate vs choclate, correct spelling, spelling comparison, English spelling, word confusion',
  openGraph: {
    title: 'Chocolate vs Choclate - Which is Correct?',
    description: 'Learn the correct spelling between "chocolate" and "choclate". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ChocolateVsChoclatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Chocolate or Choclate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the correct spelling of &quot;chocolate&quot; or &quot;choclate&quot;, this sweet treat and common misspellings.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-red-900 flex items-center">❌ Incorrect: Choclate</h3>
          <p className="text-lg md:text-xl text-red-800 mb-4"><strong>Why it&apos;s wrong:</strong> This is a misspelling of &quot;chocolate.&quot; The correct spelling includes an &quot;o&quot; after the &quot;c&quot; in the middle.</p>
          <p className="text-lg md:text-xl text-red-800"><strong>Common Error:</strong> Omitting the second &quot;o&quot; in the word</p>
        </div>
        <div className="bg-green-50 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 flex items-center">✅ Correct: Chocolate</h3>
          <p className="text-lg md:text-xl text-green-800 mb-4"><strong>Definition:</strong> A sweet, brown food made from roasted and ground cacao seeds, often eaten as a treat or used in desserts.</p>
          <p className="text-lg md:text-xl text-green-800"><strong>Part of Speech:</strong> Noun</p>
        </div>
      </div>
      {/* Synonyms Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chocolate</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Cocoa</h3>
            <p className="text-lg text-blue-700">The main ingredient in chocolate</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Confection</h3>
            <p className="text-lg text-blue-700">A sweet food, especially one made with sugar</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Candy</h3>
            <p className="text-lg text-blue-700">A sweet treat, often made with chocolate</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Truffle</h3>
            <p className="text-lg text-blue-700">A type of chocolate confection</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Bonbon</h3>
            <p className="text-lg text-blue-700">A small chocolate-covered candy</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Fudge</h3>
            <p className="text-lg text-blue-700">A soft, rich chocolate candy</p>
          </div>
        </div>
      </div>
      {/* Usage Examples Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;She loves <span className="text-green-600 font-semibold">chocolate</span> ice cream.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-red-500">
            <p className="text-lg text-gray-800"><strong>Incorrect:</strong> &quot;She loves <span className="text-red-600 font-semibold">choclate</span> ice cream.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;He bought a bar of <span className="text-green-600 font-semibold">chocolate</span>.&quot;</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800"><strong>Correct:</strong> &quot;The cake was covered in <span className="text-green-600 font-semibold">chocolate</span>.&quot;</p>
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&bull; &quot;Chocolate&quot; is pronounced as /ˈtʃɒk.lət/</li>
          <li>&bull; The word comes from the Nahuatl word &quot;xocolātl&quot;</li>
          <li>&bull; Chocolate is made from cacao beans</li>
          <li>&bull; Remember: The correct spelling is &quot;chocolate&quot; with two &quot;o&quot;s</li>
          <li>&bull; Commonly misspelled due to the silent second &quot;o&quot;</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Why do people misspell &quot;chocolate&quot; as &quot;choclate&quot;?</h3>
            <p className="text-lg text-blue-800">A: The second &quot;o&quot; in &quot;chocolate&quot; is often silent, leading people to omit it when spelling the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is chocolate?</h3>
            <p className="text-lg text-blue-800">A: Chocolate is a sweet, brown food made from roasted and ground cacao seeds. It is used in a variety of desserts and candies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the correct spelling of &quot;chocolate&quot;?</h3>
            <p className="text-lg text-blue-800">A: Remember that the word has two &quot;o&quot;s: one after the &quot;h&quot; and one after the &quot;c&quot;. The second &quot;o&quot; is often silent but must be included.</p>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Chocolate</strong> is the correct spelling. It refers to a sweet, brown food made from cacao beans. The word is spelled with two &quot;o&quot;s: &quot;chocolate&quot;. &quot;Choclate&quot; is a misspelling that should be avoided.
        </p>
      </div>
    </div>
  )
} 