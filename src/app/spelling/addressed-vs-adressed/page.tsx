import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addressed or Adressed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addressed&quot; and &quot;adressed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AddressedVsAdressedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Addressed or Adressed</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;addressed&quot; and &quot;adressed&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adressed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Adressed&quot; is a misspelling. The correct spelling is &quot;addressed&quot; with two &quot;d&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addressed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Addressed&quot; is the correct spelling. It means to deal with or speak to someone about something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Addressed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To deal with or speak to someone about something; to write a destination on mail.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The manager <strong>addressed</strong> the concerns of the staff.</li>
                  <li>• She <strong>addressed</strong> the envelope to her friend.</li>
                  <li>• The speaker <strong>addressed</strong> the audience directly.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Adressed (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Adressed&quot; is a misspelling of &quot;addressed&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Adressed&quot; is not used in standard English.</li>
                  <li>• Always use <strong>addressed</strong> when referring to dealing with or speaking to.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Addressed:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Dealt with</li>
                <li>• Spoke to</li>
                <li>• Confronted</li>
                <li>• Tackled</li>
                <li>• Handled</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Adressed:</h4>
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
            <li>• <strong>Addressed</strong> is spelled with two &quot;d&quot;s, not one.</li>
            <li>• The word comes from Old French &quot;adrecier&quot; meaning to straighten or direct.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• Has multiple meanings: dealing with issues, speaking to people, or writing addresses.</li>
            <li>• &quot;Adressed&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adressed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;adressed&quot; is never correct. The proper spelling is always &quot;addressed.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;address&quot; + &quot;ed&quot; - the base word &quot;address&quot; has two &quot;d&quot;s, so the past tense keeps both.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between addressed and dealt with?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Addressed&quot; often implies speaking directly about something, while &quot;dealt with&quot; can be more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can addressed be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;addressed&quot; is very common in formal writing, especially in business and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with similar words that have single consonants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addressed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: addressed the issue, addressed the audience, addressed envelope, and addressed concerns.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Addressed</strong> is the correct spelling with two &quot;d&quot;s. It means to deal with or speak to someone about something, or to write a destination on mail. The misspelling &quot;adressed&quot; is never correct. Use &quot;addressed&quot; when referring to dealing with issues or speaking to people.</p>
      </div>
    </div>
  )
} 