import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Territory or Terrority - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;territory&quot; and &quot;terrority&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TerritoryVsTerrorityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Territory or Terrority</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;territory&quot; and &quot;terrority&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Terrority</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Terrority&quot; is a misspelling. The correct spelling is &quot;territory&quot; with &quot;ry&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Territory</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Territory&quot; is the correct spelling. It means an area of land or region.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Territory (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An area of land under the jurisdiction of a ruler or state; a region or area of land; an area of knowledge or expertise.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The new <strong>territory</strong> was annexed by the country.</li>
                  <li>• This is uncharted <strong>territory</strong> for our company.</li>
                  <li>• The animal marked its <strong>territory</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Terrority (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Terrority&quot; is a misspelling of &quot;territory&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Terrority&quot; is not used in standard English.</li>
                  <li>• Always use <strong>territory</strong> when referring to land areas.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Territory:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Region</li>
                <li>• Area</li>
                <li>• Domain</li>
                <li>• Land</li>
                <li>• Zone</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Terrority:</h4>
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
            <li>• <strong>Territory</strong> is spelled with &quot;ry&quot; at the end: ter-ri-to-ry.</li>
            <li>• It is commonly used in political and geographical contexts.</li>
            <li>• &quot;Terrority&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;territorium&quot; meaning &quot;land around a town.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;terrority&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;terrority&quot; is never correct. The proper spelling is always &quot;territory.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;territory&quot; ends with &quot;ry&quot; - think of it as &quot;ter-ri-to-ry.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between territory and region?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Territory often implies political or administrative boundaries, while region is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;territory&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;territory&quot; is very appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;territory&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;terrority&quot; often happens by replacing &quot;ry&quot; with &quot;ity&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;territory&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: uncharted territory, home territory, territory dispute, and territory expansion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;territory&quot; always about land?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;territory&quot; can also refer to areas of knowledge, expertise, or responsibility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;territory&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;territory&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Territory</strong> is the correct spelling with &quot;ry&quot; at the end: ter-ri-to-ry. It means an area of land under jurisdiction or a region. The misspelling &quot;terrority&quot; is never correct. Always use &quot;territory&quot; when referring to land areas, regions, or domains of knowledge.</p>
      </div>
    </div>
  )
} 