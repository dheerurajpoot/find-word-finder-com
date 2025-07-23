import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Upcoming or Upcomming - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;upcoming&quot; and &quot;upcomming&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function UpcomingVsUpcommingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Upcoming or Upcomming</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;upcoming&quot; and &quot;upcomming&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Upcomming</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Upcomming&quot; is a misspelling. The correct spelling is &quot;upcoming&quot; with one &quot;m&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Upcoming</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Upcoming&quot; is the correct spelling. It means about to happen or appear.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Upcoming (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">About to happen or appear; forthcoming.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>upcoming</strong> event is highly anticipated.</li>
                  <li>• She is preparing for her <strong>upcoming</strong> exams.</li>
                  <li>• The company announced an <strong>upcoming</strong> product launch.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Upcomming:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Upcomming&quot; is a misspelling of &quot;upcoming&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Upcomming&quot; is not used in standard English.</li>
                  <li>• Always use <strong>upcoming</strong> for the correct spelling.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Upcoming:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Approaching</li>
                <li>• Forthcoming</li>
                <li>• Imminent</li>
                <li>• Pending</li>
                <li>• Impending</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Upcomming:</h4>
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
            <li>• <strong>Upcoming</strong> is spelled with one &quot;m&quot; in the middle.</li>
            <li>• &quot;Upcomming&quot; is never correct in any context.</li>
            <li>• The word comes from &quot;up-&quot; plus &quot;coming&quot; (about to happen).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;upcomming&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;upcomming&quot; is never correct. The proper spelling is always &quot;upcoming&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;upcoming&quot; has one &quot;m&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does upcoming mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Upcoming&quot; means about to happen or appear.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;upcoming&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;upcomming&quot; often happens by doubling the &quot;m&quot;. Always use one &quot;m&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;upcoming&quot; used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;upcoming&quot; is the correct spelling in all contexts, both formal and informal.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Upcoming</strong> is the correct spelling, meaning about to happen or appear. The misspelling &quot;upcomming&quot; is never correct. Always use &quot;upcoming&quot; in your writing.</p>
      </div>
    </div>
  )
} 