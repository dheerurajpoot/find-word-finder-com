import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accession or Accesion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accession&quot; and &quot;accesion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccessionVsAccesionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accession or Accesion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accession&quot; and &quot;accesion&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accesion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Accesion&quot; is a misspelling. The correct spelling is &quot;accession&quot; with two &quot;c&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accession</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accession&quot; is the correct spelling. It means the act of coming into possession of something or attaining a position.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accession (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The act of coming into possession of something; attaining a position or rank; adding to a collection.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The museum&apos;s <strong>accession</strong> of new artifacts.</li>
                  <li>• The prince&apos;s <strong>accession</strong> to the throne.</li>
                  <li>• The library will <strong>accession</strong> the rare books.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accesion (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Accesion&quot; is a misspelling of &quot;accession&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Accesion&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accession</strong> when referring to attaining or acquiring.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accession:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Acquisition</li>
                <li>• Attainment</li>
                <li>• Addition</li>
                <li>• Succession</li>
                <li>• Induction</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accesion:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Accession</strong> is spelled with two &quot;c&quot;s at the beginning.</li>
            <li>• The word comes from Latin &quot;accessio&quot; meaning &quot;addition.&quot;</li>
            <li>• Used to describe attaining a position or acquiring something.</li>
            <li>• Common in formal writing, especially in legal and institutional contexts.</li>
            <li>• &quot;Accesion&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accesion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accesion&quot; is never correct. The proper spelling is always &quot;accession.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac + cession&quot; - remember the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accession and acquisition?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accession&quot; refers to attaining a position or rank, while &quot;acquisition&quot; refers to obtaining or gaining possession of something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accession be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accession&quot; is appropriate in formal writing, especially in legal and institutional contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;accesion&quot; likely occurs because of confusion about the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accession&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accession to the throne, accession number, accession date, accession agreement, and accession process.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accession</strong> is the correct spelling with two &quot;c&quot;s at the beginning. It means the act of coming into possession of something or attaining a position. The misspelling &quot;accesion&quot; is never correct. Use &quot;accession&quot; to describe attaining a position or acquiring something.</p>
      </div>
    </div>
  )
} 