import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Comfortable or Comfortble - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;comfortable&quot; and &quot;comfortble&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComfortableVsComfortblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Comfortable or Comfortble</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;comfortable&quot; and &quot;comfortble&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Comfortble</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Comfortble&quot; is a misspelling. The correct spelling is &quot;comfortable&quot; with an &quot;a&quot; after the &quot;t&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Comfortable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Comfortable&quot; is the correct spelling. It means providing physical ease or relaxation.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Comfortable (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Providing physical ease or relaxation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The chair is very <strong>&quot;comfortable&quot;</strong>.</li>
                  <li>• She felt <strong>&quot;comfortable&quot;</strong> in her new home.</li>
                  <li>• Wear something <strong>&quot;comfortable&quot;</strong> for the trip.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Comfortble (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Comfortble&quot; is a misspelling of &quot;comfortable&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Comfortble&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;comfortable&quot;</strong> when referring to physical ease or relaxation.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Comfortable:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Cozy</li>
                <li>• Relaxed</li>
                <li>• Pleasant</li>
                <li>• Snug</li>
                <li>• At ease</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Comfortble:</h4>
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
            <li>• <strong>&quot;Comfortable&quot;</strong> is spelled with an &quot;a&quot; after the &quot;t&quot;.</li>
            <li>• Used to describe physical ease or relaxation.</li>
            <li>• The word comes from Latin &quot;confortare&quot; meaning &quot;to strengthen greatly&quot;.</li>
            <li>• &quot;Comfortble&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;comfortble&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;comfortble&quot; is never correct. The proper spelling is always &quot;comfortable.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the &quot;a&quot; after the &quot;t&quot; in &quot;comfortable&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;comfortable&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Comfortable&quot; means providing physical ease or relaxation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;comfortble&quot; may occur due to omitting the &quot;a&quot; or mishearing the pronunciation.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Comfortable&quot;</strong> is the correct spelling with an &quot;a&quot; after the &quot;t&quot;. It means providing physical ease or relaxation. The misspelling &quot;comfortble&quot; is never correct. Use &quot;comfortable&quot; in all contexts.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/appreciate-vs-appreiciate" className="text-blue-700 hover:text-blue-900 underline">Appreciate vs Appreiciate</a></li>
            <li><a href="/spelling/acquire-vs-aquire" className="text-blue-700 hover:text-blue-900 underline">Acquire vs Aquire</a></li>
            <li><a href="/spelling/acquitted-vs-acquited" className="text-blue-700 hover:text-blue-900 underline">Acquitted vs Acquited</a></li>
            <li><a href="/spelling/acquisition-vs-aquisition" className="text-blue-700 hover:text-blue-900 underline">Acquisition vs Aquisition</a></li>
            <li><a href="/spelling/acquiescence-vs-acquiesence" className="text-blue-700 hover:text-blue-900 underline">Acquiescence vs Acquiesence</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/comfortable-vs-comfortble" className="text-purple-700 hover:text-purple-900 underline">Comfortable vs Comfortble</a></li>
            <li><a href="/spelling/comfortable-vs-comfertable" className="text-purple-700 hover:text-purple-900 underline">Comfortable vs Comfertable</a></li>
            <li><a href="/spelling/comfortable-vs-comfartable" className="text-purple-700 hover:text-purple-900 underline">Comfortable vs Comfartable</a></li>
            <li><a href="/spelling/comfort-vs-comfert" className="text-purple-700 hover:text-purple-900 underline">Comfort vs Comfert</a></li>
            <li><a href="/spelling/comfortable-vs-comfortable" className="text-purple-700 hover:text-purple-900 underline">Comfortable vs Comfortable</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/5th-grade-worksheets-parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech Worksheets</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
            <li><a href="/grammar/abstract-nouns" className="text-green-700 hover:text-green-900 underline">Abstract Nouns</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 