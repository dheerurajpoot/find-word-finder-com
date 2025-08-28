import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accompany or Acompany - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accompany&quot; and &quot;acompany&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccompanyVsAcompanyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accompany or Acompany</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accompany&quot; and &quot;acompany&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acompany</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acompany&quot; is a misspelling. The correct spelling is &quot;accompany&quot; with double &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accompany</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accompany&quot; is the correct spelling. It means to go with someone or something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accompany (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To go with someone or something; to be present with; to provide musical accompaniment.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She will <strong>accompany</strong> you to the meeting.</li>
                  <li>• The pianist <strong>accompanied</strong> the singer.</li>
                  <li>• The thunder <strong>accompanied</strong> the lightning.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acompany (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acompany&quot; is a misspelling of &quot;accompany&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acompany&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accompany</strong> when referring to going with someone.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accompany:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Escort</li>
                <li>• Attend</li>
                <li>• Follow</li>
                <li>• Join</li>
                <li>• Go with</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acompany:</h4>
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
          <li>• <strong>Accompany</strong> has double &quot;c&quot; at the beginning.</li>
          <li>• The word comes from Old French &quot;acompaignier&quot; meaning to be a companion.</li>
          <li>• Used in formal writing, everyday conversation, and musical contexts.</li>
          <li>• Common in social, business, and entertainment situations.</li>
          <li>• &quot;Acompany&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acompany&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acompany&quot; is never correct. The proper spelling is always &quot;accompany.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac&quot; + &quot;company&quot; - like &quot;ac&quot; with &quot;company&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accompany and escort?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accompany&quot; is more general and friendly, while &quot;escort&quot; often implies protection or formal guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accompany be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accompany&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acompany&quot; likely occurs because people forget the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accompany&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: accompany someone, accompany music, accompany a letter, accompany a meal, and accompany on a journey.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accompany</strong> is the correct spelling with double &quot;c&quot; at the beginning. It means to go with someone or something. The misspelling &quot;acompany&quot; is never correct.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/acknowledge-vs-acknowlege" className="text-blue-700 hover:text-blue-900 underline">Acknowledge vs Acknowlege</a></li>
            <li><a href="/spelling/acquaintance-vs-aquantance" className="text-blue-700 hover:text-blue-900 underline">Acquaintance vs Aquantance</a></li>
            <li><a href="/spelling/acquire-vs-aquire" className="text-blue-700 hover:text-blue-900 underline">Acquire vs Aquire</a></li>
            <li><a href="/spelling/acquisition-vs-aquisition" className="text-blue-700 hover:text-blue-900 underline">Acquisition vs Aquisition</a></li>
            <li><a href="/spelling/acquitted-vs-acquited" className="text-blue-700 hover:text-blue-900 underline">Acquitted vs Acquited</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/escort-vs-escort" className="text-purple-700 hover:text-purple-900 underline">Escort vs Escort</a></li>
            <li><a href="/spelling/attend-vs-attend" className="text-purple-700 hover:text-purple-900 underline">Attend vs Attend</a></li>
            <li><a href="/spelling/follow-vs-follow" className="text-purple-700 hover:text-purple-900 underline">Follow vs Follow</a></li>
            <li><a href="/spelling/join-vs-join" className="text-purple-700 hover:text-purple-900 underline">Join vs Join</a></li>
            <li><a href="/spelling/companion-vs-companion" className="text-purple-700 hover:text-purple-900 underline">Companion vs Companion</a></li>
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