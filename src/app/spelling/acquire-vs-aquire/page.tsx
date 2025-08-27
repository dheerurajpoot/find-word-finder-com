import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acquire or Aquire - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;acquire&quot; and &quot;aquire&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AcquireVsAquirePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Acquire or Aquire</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;acquire&quot; and &quot;aquire&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aquire</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aquire&quot; is a misspelling. The correct spelling is &quot;acquire&quot; with &quot;c&quot; after &quot;a&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acquire</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acquire&quot; is the correct spelling. It means to gain possession of something or to learn a skill.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acquire (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To gain possession of something; to learn or develop a skill, habit, or quality.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The company <strong>acquired</strong> a new subsidiary.</li>
                  <li>• She <strong>acquired</strong> fluency in Spanish.</li>
                  <li>• He <strong>acquired</strong> a taste for classical music.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aquire (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aquire&quot; is a misspelling of &quot;acquire&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aquire&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acquire</strong> when referring to gaining possession.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acquire:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Obtain</li>
                <li>• Gain</li>
                <li>• Get</li>
                <li>• Learn</li>
                <li>• Develop</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aquire:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Acquire</strong> is spelled with &quot;c&quot; after &quot;a&quot;, not just &quot;a&quot;.</li>
          <li>• The word comes from Latin &quot;acquirere&quot; meaning to seek in addition to.</li>
          <li>• Used in business, education, and general contexts.</li>
          <li>• Can refer to both physical possessions and abstract qualities.</li>
          <li>• &quot;Aquire&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aquire&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aquire&quot; is never correct. The proper spelling is always &quot;acquire.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;a&quot; + &quot;c&quot; + &quot;quire&quot; - like &quot;a&quot; with &quot;c&quot; and &quot;quire&quot;, not just &quot;a&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acquire and obtain?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are very similar, but &quot;acquire&quot; often implies a more deliberate or gradual process.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acquire be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acquire&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aquire&quot; likely occurs because of confusion about the spelling or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acquire&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: acquire knowledge, acquire skills, acquire property, acquire a taste, and acquire a habit.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acquire</strong> is the correct spelling with &quot;c&quot; after &quot;a&quot;. It means to gain possession of something or to learn a skill. The misspelling &quot;aquire&quot; is never correct.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/appreciate-vs-appreiciate" className="text-blue-700 hover:text-blue-900 underline">Appreciate vs Appreiciate</a></li>
            <li><a href="/spelling/acquaintance-vs-aquantance" className="text-blue-700 hover:text-blue-900 underline">Acquaintance vs Acquantance</a></li>
            <li><a href="/spelling/companies-vs-companys" className="text-blue-700 hover:text-blue-900 underline">Companies vs Companys</a></li>
            <li><a href="/spelling/slipped-vs-sliped" className="text-blue-700 hover:text-blue-900 underline">Slipped vs Sliped</a></li>
            <li><a href="/spelling/syphilis-vs-syphyllis" className="text-blue-700 hover:text-blue-900 underline">Syphilis vs Syphyllis</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/acquit-vs-aquit" className="text-purple-700 hover:text-purple-900 underline">Acquit vs Aquit</a></li>
            <li><a href="/spelling/acquiesce-vs-aquiesce" className="text-purple-700 hover:text-purple-900 underline">Acquiesce vs Aquiesce</a></li>
            <li><a href="/spelling/acquittal-vs-aquittal" className="text-purple-700 hover:text-purple-900 underline">Acquittal vs Aquittal</a></li>
            <li><a href="/spelling/acquiescence-vs-aquiescence" className="text-purple-700 hover:text-purple-900 underline">Acquiescence vs Aquiescence</a></li>
            <li><a href="/spelling/acquirement-vs-aquiremnt" className="text-purple-700 hover:text-purple-900 underline">Acquirement vs Aquiremnt</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/5th-grade-worksheets-parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech Worksheets</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-green-700 hover:text-green-900 underline">Helping Verbs Worksheets</a></li>
            <li><a href="/grammar/action-verbs" className="text-green-700 hover:text-green-900 underline">Action Verbs</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 