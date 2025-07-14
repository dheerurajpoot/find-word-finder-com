import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Categories or Catagories - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;categories&quot; and &quot;catagories&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CategoriesVsCatagoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Categories or Catagories</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;categories&quot; and &quot;catagories&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Catagories</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Catagories&quot; is a common misspelling. The correct spelling is &quot;categories&quot; with an &quot;e&quot; after the &quot;g&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Categories</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Categories&quot; is the correct spelling. It refers to groups or classes of things that share similar characteristics.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Categories (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Groups or classes of things that share similar characteristics.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The library has books in many <strong>categories</strong>.</li>
                  <li>• Please sort the files into the correct <strong>categories</strong>.</li>
                  <li>• There are several <strong>categories</strong> of animals in the zoo.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Catagories (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Catagories&quot; is a misspelling of &quot;categories&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Catagories&quot; is not used in standard English.</li>
                  <li>• Always use <strong>categories</strong> when referring to groups or classes.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Categories:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Groups</li>
                <li>• Classes</li>
                <li>• Types</li>
                <li>• Divisions</li>
                <li>• Sections</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Catagories:</h4>
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
            <li>• <strong>Categories</strong> is always spelled with an &quot;e&quot; after the &quot;g&quot;.</li>
            <li>• The word comes from the Greek &quot;kategoria&quot; meaning &quot;accusation, predicate, category&quot;.</li>
            <li>• &quot;Catagories&quot; is a common error due to the way the word sounds when spoken.</li>
            <li>• Always double-check spelling in formal writing.</li>
            <li>• Use &quot;categories&quot; for all academic, professional, and everyday contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;catagories&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;catagories&quot; is never correct. The proper spelling is always &quot;categories&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember there is an &quot;e&quot; after the &quot;g&quot; in &quot;categories&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;categories&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Categories&quot; means groups or classes of things that share similar characteristics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;categories&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;categories&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Categories</strong> is the correct spelling with an &quot;e&quot; after the &quot;g&quot;. It refers to groups or classes of things. The misspelling &quot;catagories&quot; is never correct. Use &quot;categories&quot; in all contexts.</p>
      </div>
    </div>
  )
} 