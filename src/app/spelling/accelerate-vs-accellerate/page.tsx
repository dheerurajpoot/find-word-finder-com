import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accelerate or Accellerate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accelerate&quot; and &quot;accellerate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccelerateVsAccelleratePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accelerate or Accellerate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accelerate&quot; and &quot;accellerate&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Accellerate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Accellerate&quot; is a misspelling. The correct spelling is &quot;accelerate&quot; with one &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accelerate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accelerate&quot; is the correct spelling. It means to increase in speed or cause to happen faster.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accelerate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To increase in speed; to cause to happen faster or sooner; to move or progress more quickly.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The car began to <strong>accelerate</strong> down the highway.</li>
                  <li>• The new policy will <strong>accelerate</strong> economic growth.</li>
                  <li>• Technology continues to <strong>accelerate</strong> at a rapid pace.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Accellerate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Accellerate&quot; is a misspelling of &quot;accelerate&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Accellerate&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accelerate</strong> when referring to increasing speed.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accelerate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Speed up</li>
                <li>• Hasten</li>
                <li>• Expedite</li>
                <li>• Quicken</li>
                <li>• Advance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Accellerate:</h4>
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
          <li>• <strong>Accelerate</strong> is spelled with one &quot;l&quot;, not two.</li>
          <li>• The word comes from Latin &quot;accelerare&quot; meaning to hasten.</li>
          <li>• Used in physics, business, and general contexts.</li>
          <li>• Can refer to both physical speed and metaphorical progress.</li>
          <li>• &quot;Accellerate&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accellerate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;accellerate&quot; is never correct. The proper spelling is always &quot;accelerate.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac&quot; + &quot;celerate&quot; - like &quot;celebrate&quot; but with &quot;celerate&quot;, with one &quot;l&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accelerate and speed up?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are very similar, but &quot;accelerate&quot; is more formal and often used in technical contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accelerate be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accelerate&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;accellerate&quot; likely occurs because of confusion about the number of &quot;l&quot;s or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accelerate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accelerate growth, accelerate learning, accelerate development, and accelerate change.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accelerate</strong> is the correct spelling with one &quot;l&quot;. It means to increase in speed or cause to happen faster. The misspelling &quot;accellerate&quot; is never correct.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/abbey-vs-abbay" className="text-blue-700 hover:text-blue-900 underline">Abbey vs Abbay</a></li>
            <li><a href="/spelling/abandon-vs-abandun" className="text-blue-700 hover:text-blue-900 underline">Abandon vs Abandun</a></li>
            <li><a href="/spelling/ability-vs-abillity" className="text-blue-700 hover:text-blue-900 underline">Ability vs Abillity</a></li>
            <li><a href="/spelling/absence-vs-abscence" className="text-blue-700 hover:text-blue-900 underline">Absence vs Abscence</a></li>
            <li><a href="/spelling/accept-vs-acept" className="text-blue-700 hover:text-blue-900 underline">Accept vs Acept</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/speed-vs-speed" className="text-purple-700 hover:text-purple-900 underline">Speed vs Speed</a></li>
            <li><a href="/spelling/hasten-vs-hasten" className="text-purple-700 hover:text-purple-900 underline">Hasten vs Hasten</a></li>
            <li><a href="/spelling/expedite-vs-expedite" className="text-purple-700 hover:text-purple-900 underline">Expedite vs Expedite</a></li>
            <li><a href="/spelling/quicken-vs-quicken" className="text-purple-700 hover:text-purple-900 underline">Quicken vs Quicken</a></li>
            <li><a href="/spelling/advance-vs-advance" className="text-purple-700 hover:text-purple-900 underline">Advance vs Advance</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/double-letters" className="text-green-700 hover:text-green-900 underline">Double Letters</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 