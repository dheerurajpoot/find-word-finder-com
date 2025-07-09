import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apparatus or Apperatus - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apparatus&quot; and &quot;apperatus&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApparatusVsApperatusPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apparatus or Apperatus</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apparatus&quot; and &quot;apperatus&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Apperatus</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Apperatus&quot; is a misspelling. The correct spelling is &quot;apparatus&quot; with two &quot;p&quot;s and two &quot;r&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apparatus</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apparatus&quot; is the correct spelling. It means equipment, machinery, or a complex device for a specific purpose.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apparatus (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Equipment, machinery, or a complex device designed for a specific purpose or function.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The laboratory has sophisticated <strong>apparatus</strong> for experiments.</li>
                  <li>• The fire department brought their rescue <strong>apparatus</strong>.</li>
                  <li>• The gym is equipped with modern exercise <strong>apparatus</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Apperatus (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Apperatus&quot; is a misspelling of &quot;apparatus&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Apperatus&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apparatus</strong> when referring to equipment.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apparatus:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Equipment</li>
                <li>• Machinery</li>
                <li>• Device</li>
                <li>• Instrument</li>
                <li>• Tool</li>
                <li>• System</li>
                <li>• Mechanism</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Apperatus:</h4>
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
            <li>• <strong>Apparatus</strong> is spelled with two &quot;p&quot;s and two &quot;r&quot;s.</li>
            <li>• Used to describe complex equipment or machinery.</li>
            <li>• Often used in scientific, medical, or technical contexts.</li>
            <li>• The word comes from Latin &quot;apparatus&quot; meaning &quot;equipment.&quot;</li>
            <li>• &quot;Apperatus&quot; is never correct in any context.</li>
            <li>• Can refer to both physical equipment and organizational systems.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;apperatus&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apperatus&quot; is never correct. The proper spelling is always &quot;apparatus&quot; with two &quot;p&quot;s and two &quot;r&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-par-a-tus&quot; - the word has two &quot;p&quot;s and two &quot;r&quot;s, similar to &quot;apparent.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apparatus and equipment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to tools or devices, but &quot;apparatus&quot; often suggests more complex or specialized equipment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparatus be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apparatus&quot; is appropriate in both formal and informal writing contexts, especially technical writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;apperatus&quot; likely occurs because of confusion about the double consonants or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apparatus&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: breathing apparatus, laboratory apparatus, rescue apparatus, and state apparatus.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apparatus always about physical equipment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apparatus&quot; can also refer to organizational systems or bureaucratic structures.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparatus be used in scientific writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apparatus&quot; is very common in scientific and technical writing to describe experimental equipment.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apparatus</strong> is the correct spelling with two &quot;p&quot;s and two &quot;r&quot;s. It means equipment, machinery, or a complex device for a specific purpose. The misspelling &quot;apperatus&quot; is never correct. Use &quot;apparatus&quot; to describe complex equipment or organizational systems.</p>
      </div>
    </div>
  )
} 