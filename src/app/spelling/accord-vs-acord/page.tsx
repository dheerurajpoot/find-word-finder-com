import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accord or Acord - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accord&quot; and &quot;acord&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccordVsAcordPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accord or Acord</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accord&quot; and &quot;acord&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acord</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Acord&quot; is a misspelling. The correct spelling is &quot;accord&quot; with double &quot;c&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accord</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accord&quot; is the correct spelling. It means agreement or harmony.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Accord (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Agreement or harmony; to give or grant something; to be in agreement.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The two parties reached an <strong>accord</strong>.</li>
                  <li>• They were in <strong>accord</strong> about the decision.</li>
                  <li>• The government <strong>accorded</strong> them special privileges.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Acord (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Acord&quot; is a misspelling of &quot;accord&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Acord&quot; is not used in standard English.</li>
                  <li>• Always use <strong>accord</strong> when referring to agreement.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Accord:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Agreement</li>
                <li>• Harmony</li>
                <li>• Consensus</li>
                <li>• Conformity</li>
                <li>• Unity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Acord:</h4>
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
          <li>• <strong>Accord</strong> has double &quot;c&quot; at the beginning.</li>
          <li>• The word comes from Old French &quot;acorder&quot; meaning to agree.</li>
          <li>• Used in formal writing, legal contexts, and everyday conversation.</li>
          <li>• Common in diplomatic, business, and academic contexts.</li>
          <li>• &quot;Acord&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acord&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;acord&quot; is never correct. The proper spelling is always &quot;accord.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ac&quot; + &quot;cord&quot; - like &quot;ac&quot; with &quot;cord&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between accord and agreement?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Accord&quot; often implies a more formal or harmonious agreement, while &quot;agreement&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can accord be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;accord&quot; is very common in formal writing, especially in legal and diplomatic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;acord&quot; likely occurs because people forget the double &quot;c&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accord&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: in accord with, of one&apos;s own accord, peace accord, trade accord, and accord priority.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accord</strong> is the correct spelling with double &quot;c&quot; at the beginning. It means agreement or harmony. The misspelling &quot;acord&quot; is never correct.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/activities-vs-activites" className="text-blue-700 hover:text-blue-900 underline">Activities vs Activites</a></li>
            <li><a href="/spelling/activity-vs-activty" className="text-blue-700 hover:text-blue-900 underline">Activity vs Activty</a></li>
            <li><a href="/spelling/actor-vs-acter" className="text-blue-700 hover:text-blue-900 underline">Actor vs Acter</a></li>
            <li><a href="/spelling/actors-vs-akters" className="text-blue-700 hover:text-blue-900 underline">Actors vs Akteres</a></li>
            <li><a href="/spelling/actress-vs-aktres" className="text-blue-700 hover:text-blue-900 underline">Actress vs Aktres</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/agreement-vs-aggreement" className="text-purple-700 hover:text-purple-900 underline">Agreement vs Aggreement</a></li>
            <li><a href="/spelling/harmony-vs-harmony" className="text-purple-700 hover:text-purple-900 underline">Harmony vs Harmony</a></li>
            <li><a href="/spelling/consensus-vs-concensus" className="text-purple-700 hover:text-purple-900 underline">Consensus vs Concensus</a></li>
            <li><a href="/spelling/conformity-vs-conformity" className="text-purple-700 hover:text-purple-900 underline">Conformity vs Conformity</a></li>
            <li><a href="/spelling/unity-vs-unity" className="text-purple-700 hover:text-purple-900 underline">Unity vs Unity</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/double-letters" className="text-green-700 hover:text-green-900 underline">Double Letters</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 