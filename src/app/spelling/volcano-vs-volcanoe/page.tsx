import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Volcano or Volcanoe - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;volcano&quot; and &quot;volcanoe&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VolcanoVsVolcanoePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Volcano or Volcanoe</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;volcano&quot; and &quot;volcanoe&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Volcanoe</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Volcanoe&quot; is a misspelling. The correct spelling is &quot;volcano&quot; with no &quot;e&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Volcano</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Volcano&quot; is the correct spelling. It refers to a mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Volcano (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Mount Fuji is a famous <strong>volcano</strong> in Japan.</li>
                  <li>• The <strong>volcano</strong> erupted last year.</li>
                  <li>• Scientists study <strong>volcanoes</strong> to understand eruptions.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Volcanoe (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Volcanoe&quot; is a misspelling of &quot;volcano&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Volcanoe&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;volcano&quot;</strong> when referring to the geological feature.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Volcano:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Crater</li>
                <li>• Vent</li>
                <li>• Mountain</li>
                <li>• Peak</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Volcanoe:</h4>
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
            <li>• <strong>Volcano</strong> is spelled with no &quot;e&quot; at the end.</li>
            <li>• Used to refer to a mountain or hill with a vent for lava and gases.</li>
            <li>• The word &quot;volcano&quot; comes from the Roman god Vulcan, the god of fire.</li>
            <li>• &quot;Volcanoe&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;volcanoe&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;volcanoe&quot; is never correct. The proper spelling is always &quot;volcano&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;volcano&quot; ends with &quot;o&quot; not &quot;oe&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;volcano&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Volcano&quot; means a mountain or hill with a vent for lava, gases, and ash.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;volcano&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;volcano&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;volcano&quot; pronounced?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It is pronounced /vɒlˈkeɪ.noʊ/ (vol-KAY-no).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Volcano</strong> is the correct spelling with no &quot;e&quot; at the end. It refers to a mountain or hill with a vent for lava and gases. The misspelling &quot;volcanoe&quot; is never correct. Use &quot;volcano&quot; to indicate the correct word.</p>
      </div>
    </div>
  )
} 