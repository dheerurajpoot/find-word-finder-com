import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alluvial or Aluvial - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alluvial&quot; and &quot;aluvial&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlluvialVsAluvialPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alluvial or Aluvial</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alluvial&quot; and &quot;aluvial&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aluvial</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aluvial&quot; is a misspelling. The correct spelling is &quot;alluvial&quot; with two &quot;l&quot;s at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alluvial</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alluvial&quot; is the correct spelling. It means relating to or deposited by flowing water.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alluvial (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Relating to or deposited by flowing water, especially rivers and streams; made up of sediment carried by water.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>alluvial</strong> soil was rich and fertile.</li>
                  <li>• <strong>Alluvial</strong> deposits contained gold particles.</li>
                  <li>• The <strong>alluvial</strong> plain was formed by river sediment.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aluvial (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aluvial&quot; is a misspelling of &quot;alluvial&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aluvial&quot; is not used in standard English.</li>
                  <li>• Always use <strong>alluvial</strong> when referring to water deposits.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alluvial:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Fluvial</li>
                <li>• Sedimentary</li>
                <li>• River-deposited</li>
                <li>• Water-borne</li>
                <li>• Stream-laid</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aluvial:</h4>
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
            <li>• <strong>Alluvial</strong> is spelled with two &quot;l&quot;s at the beginning, not one.</li>
            <li>• Used primarily in geology and geography contexts.</li>
            <li>• Describes materials deposited by flowing water.</li>
            <li>• The word comes from Latin &quot;alluvius&quot; meaning &quot;washed against.&quot;</li>
            <li>• &quot;Aluvial&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aluvial&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aluvial&quot; is never correct. The proper spelling is always &quot;alluvial&quot; with two &quot;l&quot;s.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;all-uvial&quot; - it has two &quot;l&quot;s like the word &quot;all.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between alluvial and fluvial?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Alluvial&quot; refers to deposits made by flowing water, while &quot;fluvial&quot; refers to processes or features related to rivers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can alluvial be used in everyday conversation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It&apos;s primarily a technical term used in geology, geography, and related fields.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common alluvial features?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include alluvial fans, alluvial plains, alluvial terraces, and alluvial deposits.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aluvial&quot; occurs because people think it should have one &quot;l&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is alluvial soil good for farming?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, alluvial soil is typically very fertile and excellent for agriculture due to its rich mineral content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can alluvial refer to any type of water deposit?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Alluvial specifically refers to deposits made by flowing water, not still water like lakes or ponds.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alluvial</strong> is the correct spelling with two &quot;l&quot;s at the beginning. It means relating to or deposited by flowing water. The misspelling &quot;aluvial&quot; is never correct. Use &quot;alluvial&quot; when describing water-deposited materials in geological contexts.</p>
      </div>
    </div>
  )
} 