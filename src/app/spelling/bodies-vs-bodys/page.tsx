import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bodies vs Bodys - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bodies&quot; and &quot;bodys&quot;. Discover definitions, examples, and common usage tips to avoid this spelling mistake.',
  keywords: 'bodies, bodys, spelling, correct spelling, grammar, word comparison',
  openGraph: {
    title: 'Bodies vs Bodys - Which is Correct?',
    description: 'Learn the correct spelling between &quot;bodies&quot; and &quot;bodys&quot;. Discover definitions, examples, and common usage tips.',
    type: 'website',
  },
}

export default function BodiesVsBodysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Bodies vs Bodys</h1>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Which spelling is correct?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The correct spelling is <strong>bodies</strong>. &quot;Bodys&quot; is a misspelling.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center">✅ Bodies (Correct)</h3>
          <p className="text-lg md:text-xl text-green-800">
            &quot;Bodies&quot; is the correct plural form of &quot;body&quot;.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center">❌ Bodys (Incorrect)</h3>
          <p className="text-lg md:text-xl text-red-800">
            &quot;Bodys&quot; is a misspelling. The correct plural form is &quot;bodies&quot;.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Definition</h2>
        <div className="text-lg md:text-xl text-gray-700 space-y-4">
          <p><strong>Bodies</strong> (noun): The plural form of &quot;body,&quot; referring to multiple physical forms or organizations.</p>
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The <em>bodies</em> of the victims were found at the scene.</li>
            <li>Many <em>bodies</em> of water surround the city.</li>
            <li>Governing <em>bodies</em> make important decisions.</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-800">
          <div>
            <strong>Related to bodies:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Forms</li>
              <li>Figures</li>
              <li>Frames</li>
              <li>Organizations</li>
            </ul>
          </div>
          <div>
            <strong>Related concepts:</strong>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Corpses</li>
              <li>Institutions</li>
              <li>Associations</li>
              <li>Entities</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Bodies&quot; is the correct plural form of &quot;body&quot;.</li>
          <li>Words ending in &quot;y&quot; typically change to &quot;ies&quot; in the plural form.</li>
          <li>&quot;Bodys&quot; is a common error due to confusion about pluralization rules.</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Why do people misspell &quot;bodies&quot; as &quot;bodys&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Because they may not be familiar with the rule that words ending in &quot;y&quot; change to &quot;ies&quot; in the plural form.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is &quot;bodys&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;bodys&quot; is never correct in standard English. Always use &quot;bodies&quot; for the plural form.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">Remember the rule: words ending in &quot;y&quot; change to &quot;ies&quot; in the plural form (body → bodies).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Bodies</strong> is the correct plural form of &quot;body&quot;. &quot;Bodys&quot; is a misspelling and should be avoided. Always use &quot;bodies&quot; when referring to multiple bodies.
        </p>
      </div>
    </div>
  )
} 