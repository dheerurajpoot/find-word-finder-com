import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Collate or Colate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;collate&quot; and &quot;colate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CollateVsColatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Collate or Colate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;collate&quot; and &quot;colate&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Colate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Colate&quot; is a misspelling. The correct spelling is &quot;collate&quot; with a double &quot;l&quot; after the &quot;o&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Collate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Collate&quot; is the correct spelling. It means to collect and combine texts, information, or sets of figures in proper order.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Collate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To collect and combine texts, information, or sets of figures in proper order.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Please <strong>&quot;collate&quot;</strong> the documents before submitting them.</li>
                  <li>• The data was <strong>&quot;collated&quot;</strong> from several sources.</li>
                  <li>• The teacher asked the students to <strong>&quot;collate&quot;</strong> their notes.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Colate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Colate&quot; is a misspelling of &quot;collate&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Colate&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;collate&quot;</strong> when referring to collecting or combining information.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Collate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Assemble</li>
                <li>• Collect</li>
                <li>• Organize</li>
                <li>• Compile</li>
                <li>• Arrange</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Colate:</h4>
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
            <li>• <strong>&quot;Collate&quot;</strong> is spelled with a double &quot;l&quot; after the &quot;o&quot;.</li>
            <li>• Used to describe collecting or combining information in order.</li>
            <li>• The word comes from Latin &quot;collatus&quot; meaning &quot;brought together&quot;.</li>
            <li>• &quot;Colate&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;colate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;colate&quot; is never correct. The proper spelling is always &quot;collate.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;l&quot; after the &quot;o&quot; in &quot;collate&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;collate&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Collate&quot; means to collect and combine texts, information, or sets of figures in proper order.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;colate&quot; may occur due to omitting one of the &quot;l&quot; letters.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Collate&quot;</strong> is the correct spelling with a double &quot;l&quot; after the &quot;o&quot;. It means to collect and combine information in order. The misspelling &quot;colate&quot; is never correct. Use &quot;collate&quot; in all contexts.</p>
      </div>
    </div>
  )
} 