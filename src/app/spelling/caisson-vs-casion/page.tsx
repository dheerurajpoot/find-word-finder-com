import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Caisson or Casion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;caisson&quot; and &quot;casion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaissonVsCasionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Caisson or Casion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;caisson&quot; and &quot;casion&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Casion</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Casion&quot; is a misspelling. The correct spelling is &quot;caisson&quot; with two &quot;s&quot;s and &quot;on&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Caisson</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Caisson&quot; is the correct spelling. It refers to a watertight structure used in construction.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Caisson (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A watertight structure used in construction, especially for underwater work or as a foundation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The bridge was built using <strong>caissons</strong>.</li>
                  <li>• The <strong>caisson</strong> was lowered into the river.</li>
                  <li>• Workers entered the <strong>caisson</strong> to dig the foundation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Casion (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Casion&quot; is a misspelling of &quot;caisson&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Casion&quot; is not used in standard English.</li>
                  <li>• Always use <strong>caisson</strong> when referring to construction structures.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Caisson:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Watertight chamber</li>
                <li>• Foundation structure</li>
                <li>• Construction chamber</li>
                <li>• Underwater structure</li>
                <li>• Building foundation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Casion:</h4>
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
            <li>• <strong>Caisson</strong> is spelled with two &quot;s&quot;s and &quot;on&quot; at the end.</li>
            <li>• The word comes from French &quot;caisson&quot; meaning a box or chest.</li>
            <li>• Can be used in various contexts including construction, engineering, and military.</li>
            <li>• Often used in discussions about bridge building and underwater construction.</li>
            <li>• &quot;Casion&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;casion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;casion&quot; is never correct. The proper spelling is always &quot;caisson.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cais-son&quot; - the word has two &quot;s&quot;s and ends with &quot;on.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between caisson and foundation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to building supports, but &quot;caisson&quot; specifically refers to a watertight structure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;casion&quot; likely occurs because people forget the second &quot;s&quot; or the &quot;on&quot; ending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;caisson&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: caisson disease, pneumatic caisson, and caisson foundation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can caisson be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;caisson&quot; is only used as a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is caisson only used in construction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;caisson&quot; can be used in construction, engineering, and military contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word caisson?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from French &quot;caisson&quot; and was first used in English in the 18th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Caisson</strong> is the correct spelling with two &quot;s&quot;s and &quot;on&quot; at the end. It refers to a watertight structure used in construction, especially for underwater work or as a foundation. The misspelling &quot;casion&quot; is never correct. Use &quot;caisson&quot; to refer to these construction structures in engineering, building, and military contexts.</p>
      </div>
    </div>
  )
} 