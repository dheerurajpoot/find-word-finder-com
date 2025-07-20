import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Went or Whent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;went&quot; and &quot;whent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function WentVsWhentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Went or Whent</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;went&quot; and &quot;whent&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Whent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Whent&quot; is a misspelling. The correct spelling is &quot;went&quot; without the &quot;h&quot;.</p>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Went</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Went&quot; is the correct spelling. It is the past tense of the verb &quot;go&quot;.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Went</strong> is the correct spelling. It is the past tense of the verb &quot;go&quot;, meaning to move from one place to another or to travel.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whent</strong> is incorrect and should never be used in formal writing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Went (verb)</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            The past tense of &quot;go&quot;. It means to have moved from one place to another, to have traveled, or to have proceeded in a particular direction.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage</h3>
          <p className="text-lg md:text-xl text-gray-700">
            Used to describe completed actions of movement or travel that happened in the past.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;I <span className="text-green-600 font-semibold">went</span> to the store yesterday.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;She <span className="text-green-600 font-semibold">went</span> home after the party.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700">
              <strong>Correct:</strong> &quot;They <span className="text-green-600 font-semibold">went</span> to the beach for vacation.&quot;
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-red-700">
              <strong>Incorrect:</strong> &quot;I <span className="text-red-600 font-semibold">whent</span> to the store yesterday&quot; (should be &quot;went&quot;)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For movement:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Traveled</li>
                <li>• Moved</li>
                <li>• Proceeded</li>
                <li>• Journeyed</li>
                <li>• Walked</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">For past actions:</h3>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Visited</li>
                <li>• Attended</li>
                <li>• Arrived</li>
                <li>• Reached</li>
                <li>• Arrived at</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Went&quot; is spelled without an &quot;h&quot;</li>
          <li>• It is the past tense of the irregular verb &quot;go&quot;</li>
          <li>• The present tense is &quot;go&quot;, past tense is &quot;went&quot;, past participle is &quot;gone&quot;</li>
          <li>• It is one of the most commonly used irregular verbs in English</li>
          <li>• Often confused with &quot;when&quot; (a question word about time)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;whent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">No, &quot;whent&quot; is never correct. The correct spelling is always &quot;went&quot; without the &quot;h&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you pronounce &quot;went&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">It&apos;s pronounced as &quot;WENT&quot; with a short &quot;e&quot; sound, rhyming with &quot;sent&quot; and &quot;bent&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">What&apos;s the difference between &quot;went&quot; and &quot;when&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Went&quot; is the past tense of &quot;go&quot;, while &quot;when&quot; is a question word used to ask about time or introduce time clauses.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is &quot;went&quot; a regular or irregular verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">&quot;Went&quot; is an irregular verb. Regular verbs would form the past tense by adding &quot;-ed&quot; (like &quot;walked&quot;), but &quot;go&quot; becomes &quot;went&quot;.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Is it common to misspell &quot;went&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">Yes, some people incorrectly add an &quot;h&quot; and spell it as &quot;whent&quot;, possibly confusing it with the word &quot;when&quot;. This is a common spelling mistake.</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Final Summary</h2>
        <p className="text-lg md:text-xl text-green-800 mb-4">
          <strong>Went</strong> is the correct spelling. It is the past tense of the verb &quot;go&quot;, meaning to have moved from one place to another or to have traveled.
        </p>
        <p className="text-lg md:text-xl text-green-800">
          <strong>Whent</strong> is always incorrect. Remember to spell it without the &quot;h&quot;.
        </p>
      </div>
    </div>
  )
} 