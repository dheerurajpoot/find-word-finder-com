import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Knowledgement or Acknowledgement - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;knowledgement&quot; and &quot;acknowledgement&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function KnowledgementVsAcknowledgementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Knowledgement or Acknowledgement</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;knowledgement&quot; and &quot;acknowledgement&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Knowledgement</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Knowledgement&quot; is a misspelling. The correct spelling is &quot;acknowledgement&quot; with &quot;ack&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Acknowledgement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Acknowledgement&quot; is the correct spelling. It means recognition or admission of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Acknowledgement (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Recognition or admission of the existence or truth of something; an expression of appreciation or thanks.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She sent an <strong>acknowledgement</strong> of receipt.</li>
                  <li>• The author&apos;s <strong>acknowledgement</strong> thanked her family.</li>
                  <li>• His <strong>acknowledgement</strong> of the problem was the first step.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Knowledgement (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Knowledgement&quot; is a misspelling of &quot;acknowledgement&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Knowledgement&quot; is not used in standard English.</li>
                  <li>• Always use <strong>acknowledgement</strong> when referring to recognition.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Acknowledgement:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Recognition</li>
                <li>• Admission</li>
                <li>• Confirmation</li>
                <li>• Acceptance</li>
                <li>• Appreciation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Knowledgement:</h4>
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
          <li>• <strong>Acknowledgement</strong> starts with &quot;ack&quot;, not &quot;know&quot;.</li>
          <li>• The word comes from &quot;acknowledge&quot; + &quot;-ment&quot; suffix.</li>
          <li>• Used in formal writing, business communications, and academic contexts.</li>
          <li>• Common in book acknowledgements and business correspondence.</li>
          <li>• &quot;Knowledgement&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;knowledgement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;knowledgement&quot; is never correct. The proper spelling is always &quot;acknowledgement.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;acknowledge&quot; + &quot;ment&quot; - the verb form with the noun suffix.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between acknowledgement and acknowledgment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both spellings are correct - &quot;acknowledgement&quot; is British English, &quot;acknowledgment&quot; is American English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can acknowledgement be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;acknowledgement&quot; is very common in formal writing, especially in business and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;knowledgement&quot; likely occurs because people confuse it with the word &quot;knowledge.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;acknowledgement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: acknowledgement of receipt, book acknowledgements, acknowledgement letter, and public acknowledgement.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Acknowledgement</strong> is the correct spelling with &quot;ac&quot; prefix: ac-know-ledge-ment. It means recognition or admission of something. The misspelling &quot;knowledgement&quot; is never correct. Always use &quot;acknowledgement&quot; when referring to recognition or admission.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/stroll-vs-strol" className="text-blue-700 hover:text-blue-900 underline">Stroll vs Strol</a></li>
            <li><a href="/spelling/tenement-vs-tenament" className="text-blue-700 hover:text-blue-900 underline">Tenement vs Tenament</a></li>
            <li><a href="/spelling/asymmetry-vs-assymetry" className="text-blue-700 hover:text-blue-900 underline">Asymmetry vs Assymetry</a></li>
            <li><a href="/spelling/believes-vs-belives" className="text-blue-700 hover:text-blue-900 underline">Believes vs Belives</a></li>
            <li><a href="/spelling/splendid-vs-spendid" className="text-blue-700 hover:text-blue-900 underline">Splendid vs Spendid</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/behaviour-vs-behavor" className="text-purple-700 hover:text-purple-900 underline">Behaviour vs Behaver</a></li>
            <li><a href="/spelling/should-vs-shoud" className="text-purple-700 hover:text-purple-900 underline">Should vs Shoud</a></li>
            <li><a href="/spelling/similar-vs-silimar" className="text-purple-700 hover:text-purple-900 underline">Similar vs Silimar</a></li>
            <li><a href="/spelling/apparatus-vs-aparatus" className="text-purple-700 hover:text-purple-900 underline">Apparatus vs Aparatus</a></li>
            <li><a href="/spelling/cassette-vs-casete" className="text-purple-700 hover:text-purple-900 underline">Cassette vs Casete</a></li>
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