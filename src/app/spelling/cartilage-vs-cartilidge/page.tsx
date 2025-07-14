import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cartilage or Cartilidge - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cartilage&quot; and &quot;cartilidge&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CartilageVsCartilidgePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cartilage or Cartilidge</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cartilage&quot; and &quot;cartilidge&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cartilidge</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cartilidge&quot; is a misspelling. The correct spelling is &quot;cartilage&quot; with &quot;age&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cartilage</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cartilage&quot; is the correct spelling. It refers to a flexible connective tissue found in the body.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cartilage (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A flexible connective tissue found in various parts of the body, such as joints, ears, and nose.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>cartilage</strong> in his knee was damaged.</li>
                  <li>• Ear <strong>cartilage</strong> is flexible and strong.</li>
                  <li>• The nose is supported by <strong>cartilage</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cartilidge (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cartilidge&quot; is a misspelling of &quot;cartilage&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cartilidge&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cartilage</strong> when referring to connective tissue.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cartilage:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Connective tissue</li>
                <li>• Gristle</li>
                <li>• Flexible tissue</li>
                <li>• Joint tissue</li>
                <li>• Elastic tissue</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cartilidge:</h4>
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
            <li>• <strong>Cartilage</strong> is spelled with &quot;age&quot; at the end, not &quot;idge.&quot;</li>
            <li>• The word comes from Latin &quot;cartilago&quot; meaning gristle.</li>
            <li>• Can be used in medical, anatomical, and biological contexts.</li>
            <li>• Often used in discussions about joints, injuries, and body structure.</li>
            <li>• &quot;Cartilidge&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cartilidge&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cartilidge&quot; is never correct. The proper spelling is always &quot;cartilage.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cartil-age&quot; - the word ends with &quot;age&quot; like &quot;message&quot; or &quot;package.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between cartilage and bone?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both are connective tissues, but cartilage is flexible while bone is rigid and hard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cartilidge&quot; likely occurs because people confuse &quot;age&quot; with &quot;idge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;cartilage&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: knee cartilage, ear cartilage, and cartilage damage.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can cartilage be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cartilage&quot; is only used as a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is cartilage only found in humans?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cartilage&quot; is found in many animals, not just humans.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word cartilage?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;cartilago&quot; and was first used in English in the 15th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cartilage</strong> is the correct spelling with &quot;age&quot; at the end. It refers to a flexible connective tissue found in various parts of the body, such as joints, ears, and nose. The misspelling &quot;cartilidge&quot; is never correct. Use &quot;cartilage&quot; to refer to this important body tissue in medical, anatomical, and biological contexts.</p>
      </div>
    </div>
  )
} 