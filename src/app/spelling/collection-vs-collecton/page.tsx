import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Collection or Collecton - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;collection&quot; and &quot;collecton&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CollectionVsCollectonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Collection or Collecton</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;collection&quot; and &quot;collecton&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Collecton</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Collecton&quot; is a misspelling. The correct spelling is &quot;collection&quot; with an &quot;i&quot; before the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Collection</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Collection&quot; is the correct spelling. It refers to a group of items gathered together, such as books, stamps, or art.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Collection (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A group of items gathered together, such as books, stamps, or art.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She has a large <strong>&quot;collection&quot;</strong> of rare coins.</li>
                  <li>• The museum&apos;s <strong>&quot;collection&quot;</strong> includes ancient artifacts.</li>
                  <li>• He started a stamp <strong>&quot;collection&quot;</strong> as a child.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Collecton (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Collecton&quot; is a misspelling of &quot;collection&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Collecton&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;collection&quot;</strong> when referring to a group of items.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Collection:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Assortment</li>
                <li>• Set</li>
                <li>• Array</li>
                <li>• Compilation</li>
                <li>• Group</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Collecton:</h4>
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
            <li>• <strong>&quot;Collection&quot;</strong> is spelled with an &quot;i&quot; before the &quot;o&quot;.</li>
            <li>• Used to describe a group of items gathered together.</li>
            <li>• The word comes from Latin &quot;collectio&quot; meaning &quot;a gathering together&quot;.</li>
            <li>• &quot;Collecton&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;collecton&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;collecton&quot; is never correct. The proper spelling is always &quot;collection.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;i&quot; before the &quot;o&quot; in &quot;collection&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;collection&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Collection&quot; means a group of items gathered together, such as books, stamps, or art.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;collecton&quot; may occur due to omitting the &quot;i&quot; or mishearing the pronunciation.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Collection&quot;</strong> is the correct spelling with an &quot;i&quot; before the &quot;o&quot;. It refers to a group of items gathered together. The misspelling &quot;collecton&quot; is never correct. Use &quot;collection&quot; in all contexts.</p>
      </div>
    </div>
  )
} 