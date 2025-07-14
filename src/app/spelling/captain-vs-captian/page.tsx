import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Captain or Captian - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;captain&quot; and &quot;captian&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaptainVsCaptianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Captain or Captian</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;captain&quot; and &quot;captian&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Captian</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Captian&quot; is a misspelling. The correct spelling is &quot;captain&quot; with &quot;ain&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Captain</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Captain&quot; is the correct spelling. It means a person in command of a ship, aircraft, or team.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Captain (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person in command of a ship, aircraft, sports team, or military unit.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The ship&apos;s <strong>captain</strong> navigated through the storm.</li>
                  <li>• The team <strong>captain</strong> led by example.</li>
                  <li>• The <strong>captain</strong> gave orders to the crew.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Captian (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Captian&quot; is a misspelling of &quot;captain&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Captian&quot; is not used in standard English.</li>
                  <li>• Always use <strong>captain</strong> when referring to leaders.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Captain:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Commander</li>
                <li>• Leader</li>
                <li>• Skipper</li>
                <li>• Chief</li>
                <li>• Officer</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Captian:</h4>
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
            <li>• <strong>Captain</strong> is spelled with &quot;ain&quot; at the end, not &quot;ian.&quot;</li>
            <li>• The word comes from Latin &quot;capitaneus&quot; meaning chief.</li>
            <li>• Can be used in maritime, military, sports, and aviation contexts.</li>
            <li>• Often refers to the highest-ranking person in a group.</li>
            <li>• &quot;Captian&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;captian&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;captian&quot; is never correct. The proper spelling is always &quot;captain.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;cap-tain&quot; - the word ends with &quot;ain&quot; like &quot;main&quot; or &quot;pain.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between captain and leader?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to someone in charge, but &quot;captain&quot; specifically implies a formal leadership role.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;captian&quot; likely occurs because of confusion about the ending &quot;ain&quot; vs &quot;ian.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;captain&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: team captain, ship captain, and captain of industry.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can captain be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;captain&quot; can be used as a verb meaning to lead or command.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is captain only used in maritime contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;captain&quot; is used in many contexts including sports, military, and aviation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word captain?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;capitaneus&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Captain</strong> is the correct spelling with &quot;ain&quot; at the end. It means a person in command of a ship, aircraft, team, or military unit. The misspelling &quot;captian&quot; is never correct. Use &quot;captain&quot; to describe leaders in various contexts including maritime, sports, and military settings.</p>
      </div>
    </div>
  )
} 