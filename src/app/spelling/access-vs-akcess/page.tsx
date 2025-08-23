import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Access or Akcess - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;access&quot; and &quot;akcess&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccessVsAkcessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Access or Akcess</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;access&quot; and &quot;akcess&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Akcess</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Akcess&quot; is a misspelling. The correct spelling is &quot;access&quot; with &quot;ac&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Access</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Access&quot; is the correct spelling. It means the ability to enter, reach, or use something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Access (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The ability to enter, reach, or use something; to gain entry to or use of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Students have <strong>access</strong> to the library.</li>
                  <li>• You need a password to <strong>access</strong> the system.</li>
                  <li>• The building has wheelchair <strong>access</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Akcess (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Akcess&quot; is a misspelling of &quot;access&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Akcess&quot; is not used in standard English.</li>
                  <li>• Always use <strong>access</strong> when referring to entry or use of something.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Access:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Entry</li>
                <li>• Admission</li>
                <li>• Approach</li>
                <li>• Entrance</li>
                <li>• Use</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Akcess:</h4>
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
            <li>• <strong>Access</strong> is spelled with &quot;ac&quot; at the beginning, not &quot;ak.&quot;</li>
            <li>• The word comes from Latin &quot;accessus&quot; meaning &quot;approach.&quot;</li>
            <li>• Used to describe the ability to enter, reach, or use something.</li>
            <li>• Common in both formal and informal writing.</li>
            <li>• &quot;Akcess&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;akcess&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;akcess&quot; is never correct. The proper spelling is always &quot;access.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac + cess&quot; - remember the &quot;ac&quot; at the beginning, not &quot;ak.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between access and entry?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Access&quot; refers to the ability to reach or use something, while &quot;entry&quot; refers to the act of entering.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can access be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;access&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;akcess&quot; likely occurs because of confusion about the &quot;ac&quot; vs &quot;ak&quot; spelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;access&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: access to information, access control, access point, access road, and access granted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Access</strong> is the correct spelling with double &quot;c&quot;: ac-cess. It means the ability to enter or use something. The misspelling &quot;akcess&quot; is never correct. Always use &quot;access&quot; when referring to the ability to enter or use.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/complement-vs-compalement" className="text-blue-700 hover:text-blue-900 underline">Complement vs Compalement</a></li>
            <li><a href="/spelling/temperament-vs-temperment" className="text-blue-700 hover:text-blue-900 underline">Temperament vs Temperment</a></li>
            <li><a href="/spelling/comrade-vs-comrad" className="text-blue-700 hover:text-blue-900 underline">Comrade vs Comrad</a></li>
            <li><a href="/spelling/completion-vs-complition" className="text-blue-700 hover:text-blue-900 underline">Completion vs Complition</a></li>
            <li><a href="/spelling/squeeze-vs-squeese" className="text-blue-700 hover:text-blue-900 underline">Squeeze vs Squeese</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/accommodate-vs-accomodate" className="text-purple-700 hover:text-purple-900 underline">Accommodate vs Accomodate</a></li>
            <li><a href="/spelling/conform-vs-coform" className="text-purple-700 hover:text-purple-900 underline">Conform vs Coform</a></li>
            <li><a href="/spelling/russian-vs-rusian" className="text-purple-700 hover:text-purple-900 underline">Russian vs Rusian</a></li>
            <li><a href="/spelling/august-vs-agust" className="text-purple-700 hover:text-purple-900 underline">August vs Agust</a></li>
            <li><a href="/spelling/strength-vs-strengh" className="text-purple-700 hover:text-purple-900 underline">Strength vs Strengh</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 