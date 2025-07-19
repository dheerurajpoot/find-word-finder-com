import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cloth or Cloath - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cloth&quot; and &quot;cloath&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ClothVsCloathPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cloth or Cloath</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cloth&quot; and &quot;cloath&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cloath</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cloath&quot; is a misspelling. The correct spelling is &quot;cloth&quot; with no &quot;a&quot; after the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cloth</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cloth&quot; is the correct spelling. It refers to a material made by weaving, knitting, or felting fibers together, used for making clothes and other items.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cloth (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A material made from natural or synthetic fibers, used for making clothes, coverings, and other items.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She wiped the table with a <strong>&quot;cloth&quot;</strong>.</li>
                  <li>• The dress is made of silk <strong>&quot;cloth&quot;</strong>.</li>
                  <li>• Please use a clean <strong>&quot;cloth&quot;</strong> to dry the dishes.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cloath (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cloath&quot; is a misspelling of &quot;cloth&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cloath&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;cloth&quot;</strong> when referring to fabric or material.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cloth:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Fabric</li>
                <li>• Textile</li>
                <li>• Material</li>
                <li>• Weave</li>
                <li>• Stuff</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cloath:</h4>
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
            <li>• <strong>&quot;Cloth&quot;</strong> is spelled with no &quot;a&quot; after the &quot;o&quot;.</li>
            <li>• Used to describe fabric or material for making clothes and other items.</li>
            <li>• The word comes from Old English &quot;clāth&quot; meaning &quot;a piece of cloth&quot;.</li>
            <li>• &quot;Cloath&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cloath&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cloath&quot; is never correct. The proper spelling is always &quot;cloth.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is no &quot;a&quot; after the &quot;o&quot; in &quot;cloth&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;cloth&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Cloth&quot; means a material made by weaving, knitting, or felting fibers together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cloath&quot; may occur due to confusion with the word &quot;clothe&quot; or pronunciation.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Cloth&quot;</strong> is the correct spelling with no &quot;a&quot; after the &quot;o&quot;. It refers to fabric or material. The misspelling &quot;cloath&quot; is never correct. Use &quot;cloth&quot; in all contexts.</p>
      </div>
    </div>
  )
} 