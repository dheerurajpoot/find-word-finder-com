import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Afterwards or Afterwords - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;afterwards&quot; and &quot;afterwords&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AfterwardsVsAfterwordsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Afterwards or Afterwords</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Afterwards&quot; or &quot;Afterwords&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Afterwords</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Afterwords&quot; is a misspelling when you mean &quot;afterwards&quot; (meaning later or subsequently). &quot;Afterword&quot; (singular) is a real word meaning a section at the end of a book, but &quot;afterwords&quot; is not correct for the adverb.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Afterwards</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Afterwards&quot; is the correct spelling for the adverb meaning later or subsequently.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Afterwards</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Afterwards</strong> (adverb): At a later or subsequent time; after something else has happened; later on.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• We went to dinner and <strong>afterwards</strong> saw a movie.</li>
              <li>• She felt better <strong>afterwards</strong>.</li>
              <li>• The meeting was long, but <strong>afterwards</strong> we had coffee.</li>
              <li>• He apologized <strong>afterwards</strong> for his mistake.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Afterwards</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Later</li>
                <li>• Subsequently</li>
                <li>• Thereafter</li>
                <li>• Then</li>
                <li>• Next</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Eventually</li>
                <li>• In the end</li>
                <li>• Following</li>
                <li>• In due course</li>
                <li>• After</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Afterwards</strong> is spelled with &apos;wards&apos; at the end, not &apos;words&apos;.</li>
            <li>• &quot;Afterword&quot; (singular) is a real word meaning a section at the end of a book, but &quot;afterwords&quot; is not correct for the adverb.</li>
            <li>• Commonly used to describe something happening later or in sequence.</li>
            <li>• The word comes from Middle English &quot;afterwardes&quot;.</li>
            <li>• The American English variant is &quot;afterward&quot; (without the &apos;s&apos;).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;afterwords&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;afterwords&quot; is never correct for the adverb. The correct spelling is &quot;afterwards&quot; for meaning &quot;later&quot; or &quot;subsequently&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;afterwards&quot; ends with &quot;wards&quot; like &quot;forwards&quot; or &quot;backwards&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between afterwards and afterword?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Afterwards&quot; is an adverb meaning later, while &quot;afterword&quot; is a noun meaning a section at the end of a book.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can afterwards be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;afterwards&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is afterwards always about time?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, it always refers to something happening later or in sequence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;afterwords&quot; likely occurs because of confusion with the word &quot;afterword&quot; or with the plural of &quot;word&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;afterwards&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: soon afterwards, right afterwards, and immediately afterwards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;afterwards&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;afterwards&quot; is commonly used in business, academic, and everyday contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Afterwards</strong> is the correct spelling for the adverb meaning later or subsequently. The misspelling &quot;afterwords&quot; is never correct for this meaning. Use &quot;afterwards&quot; to describe something happening later in time.</p>
      </div>
    </div>
  )
} 