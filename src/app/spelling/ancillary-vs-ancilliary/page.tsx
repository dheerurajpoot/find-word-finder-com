import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ancillary or Ancilliary - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ancillary&quot; and &quot;ancilliary&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AncillaryVsAncilliaryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ancillary or Ancilliary</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ancillary&quot; and &quot;ancilliary&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ancilliary</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ancilliary&quot; is a misspelling. The correct spelling is &quot;ancillary&quot; with one &quot;l&quot; after the &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ancillary</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ancillary&quot; is the correct spelling. It means providing necessary support to the primary activities or operation of an organization, system, etc.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ancillary (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Providing necessary support to the primary activities or operation of an organization, system, etc.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The company offers <strong>ancillary</strong> services to its clients.</li>
                  <li>• The hospital has an <strong>ancillary</strong> laboratory for special tests.</li>
                  <li>• Ancillary staff support the main medical team.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ancilliary (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ancilliary&quot; is a misspelling of &quot;ancillary&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ancilliary&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ancillary</strong> when referring to support services.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ancillary:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Additional</li>
                <li>• Supplementary</li>
                <li>• Auxiliary</li>
                <li>• Supporting</li>
                <li>• Subsidiary</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ancilliary:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Ancillary</strong> is spelled with one &quot;l&quot; after the &quot;i&quot;.</li>
            <li>• Used to describe support services or roles.</li>
            <li>• The word comes from Latin &quot;ancillaris&quot; meaning &quot;relating to maidservants&quot;.</li>
            <li>• &quot;Ancilliary&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ancilliary&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ancilliary&quot; is never correct. The proper spelling is always &quot;ancillary.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is only one &quot;l&quot; after the &quot;i&quot; in &quot;ancillary.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does ancillary mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means providing necessary support to the primary activities or operation of an organization, system, etc.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ancilliary&quot; occurs because people add an extra &quot;l&quot; after the &quot;i&quot; by mistake.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ancillary</strong> is the correct spelling with one &quot;l&quot; after the &quot;i&quot;. It means providing necessary support to the primary activities or operation of an organization, system, etc. The misspelling &quot;ancilliary&quot; is never correct. Use &quot;ancillary&quot; for all references to support roles or services.</p>
      </div>
    </div>
  )
} 