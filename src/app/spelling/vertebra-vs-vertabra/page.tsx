import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vertebra or Vertabra - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;vertebra&quot; and &quot;vertabra&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VertebraVsVertabraPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vertebra or Vertabra</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;vertebra&quot; and &quot;vertabra&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Vertabra</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Vertabra&quot; is a misspelling. The correct spelling is &quot;vertebra&quot; with the &quot;e&quot; before the &quot;b&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vertebra</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vertebra&quot; is the correct spelling. It refers to one of the small bones forming the backbone.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vertebra (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Any of the small bones forming the backbone, having a hole through which the spinal cord passes.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The human spine consists of 33 <strong>vertebrae</strong>.</li>
                  <li>• A slipped <strong>vertebra</strong> can cause back pain.</li>
                  <li>• The doctor examined the patient&apos;s <strong>vertebra</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Vertabra:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Vertabra&quot; is a misspelling of &quot;vertebra&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Vertabra&quot; is not used in standard English.</li>
                  <li>• Always use <strong>vertebra</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vertebra:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Spinal bone</li>
                <li>• Backbone segment</li>
                <li>• Spinal column bone</li>
                <li>• Spinal vertebra</li>
                <li>• Segment of the spine</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Vertabra:</h4>
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
            <li>• <strong>Vertebra</strong> is spelled with the &quot;e&quot; before the &quot;b&quot;.</li>
            <li>• &quot;Vertabra&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;vertebra&quot; meaning &quot;joint&quot; or &quot;spine&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;vertabra&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;vertabra&quot; is never correct. The proper spelling is always &quot;vertebra&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;vertebra&quot; has the &quot;e&quot; before the &quot;b&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does vertebra mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Vertebra&quot; means one of the small bones forming the backbone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How many vertebrae are in the human spine?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: There are 33 vertebrae in the human spine, divided into cervical, thoracic, lumbar, sacral, and coccygeal regions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;vertebra&quot; be used in plural form?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, the plural of &quot;vertebra&quot; is &quot;vertebrae&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vertebra</strong> is the correct spelling, meaning one of the small bones forming the backbone. The misspelling &quot;vertabra&quot; is never correct. Always use &quot;vertebra&quot; in your writing.</p>
      </div>
    </div>
  )
} 