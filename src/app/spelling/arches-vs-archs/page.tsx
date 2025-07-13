import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Arches or Archs - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;arches&quot; and &quot;archs&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ArchesVsArchsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Arches or Archs</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;arches&quot; and &quot;archs&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Archs</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Archs&quot; is a misspelling. The correct spelling is &quot;arches&quot; with an &quot;e&quot; before the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Arches</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Arches&quot; is the correct spelling. It means curved structures that span an opening.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Arches (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Curved structures that span an opening; architectural elements that support weight above them.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The cathedral has beautiful stone <strong>arches</strong>.</li>
                  <li>• The bridge is supported by several <strong>arches</strong>.</li>
                  <li>• Gothic architecture features pointed <strong>arches</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Archs (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Archs&quot; is a misspelling of &quot;arches&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Archs&quot; is not used in standard English.</li>
                  <li>• Always use <strong>arches</strong> when referring to curved structures.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Arches:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Vaults</li>
                <li>• Curves</li>
                <li>• Spans</li>
                <li>• Supports</li>
                <li>• Structures</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Archs:</h4>
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
            <li>• <strong>Arches</strong> is spelled with an &quot;e&quot; before the &quot;s&quot;, not &quot;archs&quot;.</li>
            <li>• The word comes from &quot;arch&quot; + the plural suffix &quot;es&quot;.</li>
            <li>• Used in architecture, engineering, and construction contexts.</li>
            <li>• Can refer to both structural and decorative curved elements.</li>
            <li>• &quot;Archs&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;archs&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;archs&quot; is never correct. The proper spelling is always &quot;arches.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;arch&quot; + &quot;es&quot; - the base word &quot;arch&quot; with the plural suffix &quot;es&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between arches and vaults?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Arches&quot; are curved structures that span openings, while &quot;vaults&quot; are arched ceilings or roofs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can arches be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;arches&quot; is very common in formal writing, especially in architectural and engineering contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion about the &quot;e&quot; before the &quot;s&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;arches&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: stone arches, pointed arches, triumphal arches, and natural arches.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Arches</strong> is the correct spelling with an &quot;e&quot; before the &quot;s&quot;. It means curved structures that span openings. The misspelling &quot;archs&quot; is never correct. Use &quot;arches&quot; when referring to architectural curved structures.</p>
      </div>
    </div>
  )
} 