import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bonnet vs Bonett - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bonnet&quot; and &quot;bonett&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bonnet, bonett, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bonnet vs Bonett - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bonnet&quot; and &quot;bonett&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BonnetVsBonettPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bonnet vs Bonett</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bonnet</strong>. &quot;Bonett&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bonnet (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bonnet&quot; refers to a type of hat or the hood of a car.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Bonett (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Bonett&quot; is a misspelling and not a recognized English word.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bonnet</strong> (noun): A type of hat that ties under the chin, or the hood of a car (British English).</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>She wore a beautiful lace <em>bonnet</em> to the garden party.</li>
            <li>The car&apos;s <em>bonnet</em> was dented in the accident.</li>
            <li>Babies often wear <em>bonnets</em> to protect their heads from the sun.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bonnet (hat):</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Cap</li>
              <li>Hat</li>
              <li>Head covering</li>
              <li>Hood</li>
            </ul>
          </div>
          <div>
            <strong>Related to bonnet (car):</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Hood</li>
              <li>Engine cover</li>
              <li>Front panel</li>
              <li>Car lid</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bonnet&quot; comes from the Old French word &quot;bonet&quot; meaning a type of cloth.</li>
          <li>In British English, &quot;bonnet&quot; refers to the hood of a car.</li>
          <li>&quot;Bonett&quot; is a common error due to the similar sound.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bonnet&quot; as &quot;bonett&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because &quot;bonnet&quot; and &quot;bonett&quot; sound similar, people sometimes add an extra &quot;t&quot; when writing the word.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;bonett&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;bonett&quot; is never correct in standard English. Always use &quot;bonnet&quot;.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Think of &quot;bonnet&quot; with one &quot;t&quot; at the end, not two.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Bonnet</strong> is the correct spelling for a type of hat or the hood of a car. &quot;Bonett&quot; is a misspelling and should be avoided. Always use &quot;bonnet&quot; in your writing.
        </p>
      </div>
    </div>
  )
} 