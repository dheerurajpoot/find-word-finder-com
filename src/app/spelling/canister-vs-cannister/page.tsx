import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Canister or Cannister - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;canister&quot; and &quot;cannister&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CanisterVsCannisterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Canister or Cannister</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;canister&quot; and &quot;cannister&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cannister</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cannister&quot; is a misspelling. The correct spelling is &quot;canister&quot; with one &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Canister</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Canister&quot; is the correct spelling. It means a container, usually cylindrical, for holding liquids or gases.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Canister (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A container, usually cylindrical, for holding liquids, gases, or other materials.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The gas <strong>canister</strong> was safely stored.</li>
                  <li>• She opened the tea <strong>canister</strong> to make a cup.</li>
                  <li>• The film <strong>canister</strong> contained old photographs.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cannister (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cannister&quot; is a misspelling of &quot;canister&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cannister&quot; is not used in standard English.</li>
                  <li>• Always use <strong>canister</strong> when referring to containers.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Canister:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Container</li>
                <li>• Cylinder</li>
                <li>• Tank</li>
                <li>• Vessel</li>
                <li>• Receptacle</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cannister:</h4>
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
            <li>• <strong>Canister</strong> is spelled with one &quot;n&quot;, not two.</li>
            <li>• The word comes from Latin &quot;canistrum&quot; meaning basket.</li>
            <li>• Can be used for various types of containers and storage.</li>
            <li>• Often refers to gas, film, or food storage containers.</li>
            <li>• &quot;Cannister&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cannister&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cannister&quot; is never correct. The proper spelling is always &quot;canister.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;can-ister&quot; - the word has one &quot;n&quot; like in &quot;can.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between canister and container?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to storage vessels, but &quot;canister&quot; specifically implies a cylindrical shape.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;cannister&quot; likely occurs because of confusion about the single &quot;n&quot; spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;canister&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: gas canister, film canister, and tea canister.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can canister be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;canister&quot; is only used as a noun. The verb form would be &quot;store&quot; or &quot;contain.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is canister only used for gases?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;canister&quot; is used for various materials including liquids, gases, and solids.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word canister?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;canistrum&quot; and was first used in English in the 17th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Canister</strong> is the correct spelling with one &quot;n&quot;. It means a cylindrical container for holding liquids, gases, or other materials. The misspelling &quot;cannister&quot; is never correct. Use &quot;canister&quot; to describe storage containers for various purposes.</p>
      </div>
    </div>
  )
} 